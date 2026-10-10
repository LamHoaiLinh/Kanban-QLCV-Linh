// The engine: owns the renderer, render loop, and all subsystems. Deliberately
// decoupled from React — the UI talks to it through plain method calls and
// callbacks, and it never touches React state directly.

import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

import type { QualityTier, TankConfig } from '../types';
import { effectiveFishCap, normalizeStock } from '../data/stocking';
import { tankDims } from '../data/tanks';
import { installUnderwaterFog, SharedUniforms } from './shaders';
import { EcoSystem, type EcoMode } from './Ecology';
import { markReady } from '../platform/native';
import { QUALITY, detectQuality, type QualitySettings } from './quality';
import { CameraRig } from './CameraRig';
import { CurrentField } from './CurrentField';
import { EnvironmentSystem, type TankDimsWorld } from './Environment';
import { DecorSystem } from './Decor';
import { FloraSystem } from './Flora';
import { FishSystem, type SimEnv, type FoodKind } from './FishSystem';

export interface EngineCallbacks {
  onFishPicked?: (key: string | null) => void;
  onAutoQuality?: (tier: QualityTier) => void;
  onFed?: (kind:FoodKind, count:number) => void;
  onAddFish?: (clientX?:number,clientY?:number) => void;
  onRemoveFish?: () => void;
}

export class Engine {
  renderer: THREE.WebGLRenderer;
  scene = new THREE.Scene();
  rig: CameraRig;
  callbacks: EngineCallbacks = {};

  private composer: EffectComposer | null = null;
  private bloomPass: UnrealBloomPass | null = null;
  private environment: EnvironmentSystem;
  private decor: DecorSystem;
  private flora: FloraSystem;
  private fish: FishSystem;
  private current = new CurrentField();
  private clock = new THREE.Clock();
  private simEnv: SimEnv;
  private dims: TankDimsWorld = { halfW: 0.5, halfD: 0.25, height: 0.5, floorY: 0, surfaceY: 0.48 };
  private config: TankConfig | null = null;
  private quality: QualitySettings = QUALITY.medium;
  private requestedTier: QualityTier | 'auto' = 'auto';
  private dayFactor = 1;
  private raycaster = new THREE.Raycaster();
  private running = true;
  private firstFrameDone = false;
  private disposed = false;
  private frameTimes: number[] = [];
  private feedMode = false;
  private kanAquariumMode=new URLSearchParams(location.search).has('kanban');
  private clickFoodCount=0;
  private lastFoodSpawn:THREE.Vector3|null=null;
  private pointerDown={x:0,y:0};
  // DOM overlay tied to 3D food positions: guaranteed legibility independent
  // of transparent water, frustum culling, camera zoom and postprocessing.
  private foodLayer:HTMLDivElement|null=null;
  private foodElements=new Map<object,HTMLDivElement>();
  // Depth-correct projection: only opaque rock, wood and plant polygons are
  // tested (not glass/water). Cached so raycasting does not stall 3D rendering.
  private foodOccluders:THREE.Object3D[]=[];
  private foodDepthCache=new WeakMap<object,{last:number,visible:boolean}>();
  private foodDepthRay=new THREE.Raycaster();
  private foodDepthRayDirection=new THREE.Vector3();
  private lastCycleT = 0;
  private lodIn=0;
  // FPS + draw call counters for the dev HUD.
  stats = { fps: 60, drawCalls: 0, triangles: 0, fishCount: 0,frameP50Ms:16.7,frameP95Ms:16.7,geometries:0,textures:0 };
  readonly ecology=new EcoSystem();
  private ecoMode:EcoMode='natural';
  getEcoSnapshot(){return this.ecology.snapshot();}
  cleanEco(){this.ecology.clean();}
  setEcoMode(mode:EcoMode){
    this.ecoMode=mode;
    this.simEnv.ecoMode=mode;
  }

  constructor(private container: HTMLElement) {
    // Must run BEFORE any material compiles — swaps Three's fog for our
    // per-channel underwater absorption.
    installUnderwaterFog();

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
    });
    this.renderer.info.autoReset=false;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.18;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(this.renderer.domElement);
    this.renderer.domElement.style.cssText = 'width:100%;height:100%;display:block;touch-action:none;';
    if(this.kanAquariumMode){
      const layer=document.createElement('div');
      layer.id='kan-food-layer';
      layer.className='kan-food-layer';
      layer.setAttribute('aria-label','Thức ăn cá đang rơi trong hồ');
      layer.setAttribute('data-food-count','0');
      container.appendChild(layer);
      this.foodLayer=layer;
    }

    // Image-based lighting from a neutral procedural "room" — gives PBR
    // materials something real to reflect without shipping an HDRI file.
    const pmrem = new THREE.PMREMGenerator(this.renderer);
    this.scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.06).texture;
    pmrem.dispose();
    this.scene.background = new THREE.Color('#04141f');

    this.rig = new CameraRig(this.renderer.domElement, 1);
    this.environment = new EnvironmentSystem(this.scene);
    this.decor = new DecorSystem(this.scene);
    this.flora = new FloraSystem(this.scene);
    this.fish = new FishSystem(this.scene);
    this.fish.onEcoEvent=(event)=>this.ecology.event(event);
    this.fish.food.onEat=()=>this.ecology.eat();

    this.simEnv = {
      time: 0, dayFactor: 1,
      halfW: 0.5, halfD: 0.25, floorY: 0, surfaceY: 0.48,
      current: this.current,
      reducedMotion: false,
      obstacles: [], shelters: [],tunnels: [],ecoMode:'natural',ecoComfort:1,
    };
    // QA-only regression probe. Not enabled on the published KanBan URL.
    if(new URLSearchParams(location.search).get('qa')==='1'){
      // QA-only accelerated stepping runs the actual fish behavior and water
      // model without asking a headless software GPU to render thousands of
      // frames. Never exposed outside explicit ?qa=1 test pages.
      (window as Window & {__kanEcoFastForward?:(seconds:number)=>unknown}).__kanEcoFastForward=
        (seconds:number)=>{
          const steps=Math.min(3600,Math.max(0,Math.ceil(seconds/.05)));
          for(let i=0;i<steps;i++){
            this.simEnv.time+=.05;SharedUniforms.uTime.value=this.simEnv.time;
            this.current.time=this.simEnv.time;
            this.ecology.advance(.05,this.ecoMode,this.dayFactor,
              this.fish.food.bits.filter(b=>b.state==='settled').length);
            this.fish.update(.05,this.simEnv);
            this.rig.observe(this.fish.getLiveEvents(this.simEnv),this.simEnv.obstacles);this.rig.update(.05);
          }
          return this.ecology.snapshot();
        };
      Object.assign(window,{
        __kan42Arrange:()=>this.fish.qaArrange(this.simEnv),
        __kan42Follow:(key:string|null)=>this.followFish(key),
        __kan42Day:(factor:number)=>{this.dayFactor=factor;this.simEnv.dayFactor=factor;},
        __kan42Burst:(count:number)=>this.fish.qaBurst(count,this.simEnv),
        __kan42Resume:()=>this.renderer.setAnimationLoop(this.tick),
        __kan42Pause:()=>this.enableExternalDrive(),
        __kan42EcoMode:(mode:EcoMode)=>this.setEcoMode(mode),
        __kan42Scene:(patch:Partial<TankConfig>)=>{if(this.config)this.applyConfig({...this.config,...patch});},
        __kan42Action:(key:string,action:'peck'|'dash',roll=.25,surface?:string)=>this.fish.qaAction(key,action,this.simEnv,roll,surface),
        __kan42Event:(type:Parameters<FishSystem['qaHabitat']>[0])=>this.fish.qaHabitat(type,this.simEnv),
        __kan42Probe:()=>({telemetry:this.fish.getTelemetry(),camera:this.rig.snapshot(),stats:{...this.stats},
          physics:this.fish.getPhysicsSnapshot(this.simEnv),config:this.config,quality:this.quality.tier,
          events:this.fish.getLiveEvents(this.simEnv).map(e=>({...e,worldPositions:e.worldPositions.map(p=>p.toArray())}))}),
        // QA fixture: drop onto the actual thick shell of the hollow log and
        // run the exact FoodSystem integrator, not a stand-in collision.
        __kan42WoodTest:()=>{
          if(!this.config)return null;
          this.applyConfig({...this.config,gallons:75,water:'freshwater',
            fish:{},flora:{},decor:['hollow-log']},true);
          this.decor.group.updateMatrixWorld(true);
          const log=this.decor.group.children.find(obj=>obj.name==='hollow-bark-hollow-log');
          if(!log)return null;
          const bounds=new THREE.Box3().setFromObject(log);
          const start=bounds.getCenter(new THREE.Vector3());
          start.y=bounds.max.y+.035;
          this.fish.feed(start.x,start.z,this.simEnv,'normal',start.y);
          const pellet=this.fish.food.bits[this.fish.food.bits.length-1];
          for(let i=0;i<35;i++)this.fish.food.update(.05,this.dims.floorY,this.simEnv.foodSolidHit);
          return {support:pellet.support??null,state:pellet.state,
            pelletY:pellet.pos.y,woodTop:bounds.max.y,floorY:this.dims.floorY};
        },
        __kan42Quality:(q:QualityTier)=>this.setQuality(q),
        __kan42Step:(seconds:number)=>{for(let i=0;i<Math.ceil(seconds/.0166667);i++)this.advance(1/60);},
      });
      // Test-only evidence of the exact spawn point, even after a fish eats it.
      (window as Window & {__kanFoodProbe?:()=>unknown}).__kanFoodProbe=()=>({
        count:this.clickFoodCount,
        dims:{halfW:this.dims.halfW,halfD:this.dims.halfD,
          floorY:this.dims.floorY,surfaceY:this.dims.surfaceY},
        lastSpawn:this.lastFoodSpawn?.toArray()??null,
        lastScreen:this.lastFoodSpawn?(()=>{
          const point=this.lastFoodSpawn.clone().project(this.rig.camera);
          return [point.x,point.y,point.z];
        })():null,
        obstacles:this.simEnv.obstacles.map(o=>[o.pos.x,o.pos.y,o.pos.z,o.radius]),
        food:this.fish.food.bits.map(bit=>({
          pos:bit.pos.toArray(),kind:bit.kind,state:bit.state,age:bit.age,
        })),
      });
      (window as Window & {__kanFoodTestCamera?:(mode:'orbit'|'cinematic'|'still')=>void}).__kanFoodTestCamera=
        (mode)=>this.setCameraMode(mode);
      // QA-only 60-fish load, does not alter saved tanks or production store.
      (window as Window & {__kanHabitatPopulate?:(id:string,count:number)=>void}).__kanHabitatPopulate=
        (id:string,count:number)=>{
          if(this.config)this.applyConfig({...this.config,gallons:180,fish:{[id]:Math.min(100,Math.max(0,count))}},true);
        };
      // Dedicated screenshot fixture, never persisted in localStorage.
      (window as Window & {__kanVisualHotfixScene?:()=>boolean}).__kanVisualHotfixScene=()=>{
        if(!this.config)return false;
        this.applyConfig({...this.config,name:'Realism visual hotfix QA',
          gallons:75,water:'freshwater',fish:{angelfish:6,betta:1,guppy:8},
          decor:['driftwood','hollow-log','split-log','log-arch'],
          flora:{},lighting:'daylight'},true);
        this.setCameraMode('still');
        return true;
      };
      (window as Window & {__kanVisualFinToggle?:(on:boolean)=>void}).__kanVisualFinToggle=
        (on:boolean)=>this.setSoftFins(on);
      (window as Window & {__kanAngelfishMotionScene?:(withDecor:boolean)=>void}).__kanAngelfishMotionScene=
        (withDecor:boolean)=>{
          if(!this.config)return;
          this.applyConfig({...this.config,water:'freshwater',gallons:85,
            name:'Angelfish motion test',fish:{angelfish:6},
            decor:withDecor?['hollow-log','split-log','driftwood','river-rocks']:[],
            flora:{},lighting:'daylight'},true);
          this.setCameraMode('still');
        };
      (window as Window & {__kanAngelfishMotionProbe?:()=>unknown}).__kanAngelfishMotionProbe=
        ()=>({
          fish:this.fish.getAngelfishMotionSnapshot(this.simEnv),
          dims:{floorY:this.simEnv.floorY,surfaceY:this.simEnv.surfaceY,
            halfW:this.simEnv.halfW,halfD:this.simEnv.halfD},
          physics:this.fish.getPhysicsSnapshot(this.simEnv)
        });
      (window as Window & {__kanRealismProbe?:()=>unknown}).__kanRealismProbe=()=>({
        name:this.config?.name,
        fish:this.fish.getPhysicsSnapshot(this.simEnv),
        habitat:this.fish.getHabitatSnapshot(this.simEnv),
        hardscape:this.decor.getVisualGeometrySnapshot(),
        fins:this.fish.getFinSnapshot(),
        flora:this.flora.getContainmentSnapshot(this.dims),
        obstacles:this.simEnv.obstacles.length,
        food:this.fish.food.bits.length,
        eco:this.ecology.snapshot(),
        ecoMode:this.ecoMode,
        species:this.fish.getMovementSnapshot(),
        drawCalls:this.renderer.info.render.calls,
        triangles:this.renderer.info.render.triangles,
        optics:{
          surface:this.environment.group.children.some(o=>o instanceof THREE.Mesh
            && o.material instanceof THREE.ShaderMaterial
            && o.material.fragmentShader.includes('.02 + .98')),
        },
      });
    }

    // Resolve 'auto' quality once the GL context exists.
    this.quality = QUALITY[detectQuality(this.renderer)];
    this.applySize();

    window.addEventListener('resize', this.applySize);
    document.addEventListener('visibilitychange', this.onVisibility);
    this.renderer.domElement.addEventListener('pointerup', this.onClick);
    if(this.kanAquariumMode){
      this.renderer.domElement.addEventListener('pointerdown',this.rememberPointer);
      this.renderer.domElement.addEventListener('contextmenu',this.onRightClick);
    }

    this.renderer.setAnimationLoop(this.tick);
  }

  dispose(): void {
    this.disposed = true;
    this.renderer.setAnimationLoop(null);
    window.removeEventListener('resize', this.applySize);
    document.removeEventListener('visibilitychange', this.onVisibility);
    this.renderer.domElement.removeEventListener('pointerup', this.onClick);
    this.renderer.domElement.removeEventListener('pointerdown',this.rememberPointer);
    this.renderer.domElement.removeEventListener('contextmenu',this.onRightClick);
    this.rig.dispose();
    this.foodElements.clear();
    this.foodLayer?.remove();
    this.foodLayer=null;
    if(new URLSearchParams(location.search).get('qa')==='1')
      {
        delete (window as Window & {__kanRealismProbe?:()=>unknown}).__kanRealismProbe;
        delete (window as Window & {__kanEcoFastForward?:(seconds:number)=>unknown}).__kanEcoFastForward;
        delete (window as Window & {__kanFoodProbe?:()=>unknown}).__kanFoodProbe;
        delete (window as Window & {__kanHabitatPopulate?:(id:string,count:number)=>void}).__kanHabitatPopulate;
        delete (window as Window & {__kanVisualHotfixScene?:()=>boolean}).__kanVisualHotfixScene;
        delete (window as Window & {__kanAngelfishMotionScene?:(withDecor:boolean)=>void}).__kanAngelfishMotionScene;
        delete (window as Window & {__kanAngelfishMotionProbe?:()=>unknown}).__kanAngelfishMotionProbe;
        delete (window as Window & {__kanVisualFinToggle?:(on:boolean)=>void}).__kanVisualFinToggle;
        delete (window as Window & {__kanFoodTestCamera?:(mode:'orbit'|'cinematic'|'still')=>void}).__kanFoodTestCamera;
      }
    this.renderer.dispose();
    this.container.removeChild(this.renderer.domElement);
  }

  private onVisibility = (): void => {
    // Pause the sim when the tab is hidden (saves battery; clock clamp
    // prevents a physics jump when we come back).
    this.running = document.visibilityState === 'visible';
  };

  private applySize = (): void => {
    const w = this.container.clientWidth || window.innerWidth;
    const h = this.container.clientHeight || window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, this.quality.pixelRatioCap);
    this.renderer.setPixelRatio(dpr);
    this.renderer.setSize(w, h);
    this.rig.updateAspect(w/h);
    this.rebuildComposer(w, h);
  };

  private rebuildComposer(w: number, h: number): void {
    this.composer?.dispose();
    if (this.quality.bloom) {
      this.composer = new EffectComposer(this.renderer);
      this.composer.addPass(new RenderPass(this.scene, this.rig.camera));
      this.bloomPass = new UnrealBloomPass(new THREE.Vector2(w, h), 0.32, 0.6, 0.82);
      this.composer.addPass(this.bloomPass);
      this.composer.addPass(new OutputPass());
      this.composer.setSize(w, h);
    } else {
      this.composer = null;
      this.bloomPass = null;
    }
  }

  setQuality(tier: QualityTier | 'auto'): void {
    this.requestedTier = tier;
    const resolved = tier === 'auto' ? detectQuality(this.renderer) : tier;
    if (QUALITY[resolved].tier === this.quality.tier) return;
    this.quality = QUALITY[resolved];
    this.applySize();
    if (this.config) this.applyConfig(this.config, true); // rebuild particles/fish caps
  }

  setReducedMotion(on: boolean): void {
    this.simEnv.reducedMotion = on;
    this.rig.reducedMotion = on;
  }

  setFeedMode(on: boolean): void { this.feedMode = on; }
  setSoftFins(on:boolean):void{this.fish.setSoftFins(on);}

  setCameraMode(mode: 'orbit' | 'cinematic' | 'still' | 'follow'): void {
    this.rig.setMode(mode);
    if (mode !== 'follow') {
      this.rig.releaseFollow(this.dims.floorY + this.dims.height * 0.5);
    }
  }

  followFish(key: string | null): void {
    if (!key) {
      this.rig.releaseFollow(this.dims.floorY + this.dims.height * 0.5);
      if (this.rig.mode === 'follow') this.rig.setMode('orbit');
      return;
    }
    const found = this.fish.findByKey(key);
    if (found) {
      this.rig.followTarget = () => this.fish.findByKey(key)?.agent.pos ?? null;
      this.rig.setMode('follow');
    }
  }

  // Apply a tank config, rebuilding only what changed (structure vs. stock).
  private lastStructureKey = '';
  private lastFishKey = '';
  applyConfig(config: TankConfig, force = false): void {
    config=normalizeStock(config);
    const initial=!this.config;
    const resized=!!this.config&&this.config.gallons!==config.gallons;
    const structureKey = JSON.stringify([
      config.water, Math.round(config.gallons * 10), config.substrate,
      config.background, config.lighting, config.decor, config.flora, this.quality.tier,
    ]);
    const fishKey = JSON.stringify(config.fish) + this.quality.tier;
    const structureChanged = force || structureKey !== this.lastStructureKey;
    const fishChanged = force || structureChanged || fishKey !== this.lastFishKey;
    this.config = config;
    this.ecology.configure(config);

    if (structureChanged) {
      this.lastStructureKey = structureKey;
      const d = tankDims(config.gallons);
      this.dims = {
        halfW: d.width / 2,
        halfD: d.depth / 2,
        height: d.height,
        floorY: 0,
        surfaceY: d.height * 0.94, // waterline sits a touch below the rim
      };
      Object.assign(this.simEnv, {
        halfW: this.dims.halfW, halfD: this.dims.halfD,
        floorY: this.dims.floorY, surfaceY: this.dims.surfaceY,
      });
      this.current.setup(d.width, d.height, d.depth);

      const decorOut = this.decor.rebuild(config.decor, {
        halfW: this.dims.halfW, halfD: this.dims.halfD,
        floorY: this.dims.floorY, height: this.dims.height,
      });
      const floraOut = this.flora.rebuild(
        config.flora,
        { halfW: this.dims.halfW, halfD: this.dims.halfD, floorY: this.dims.floorY, surfaceY: this.dims.surfaceY },
        this.current,
        decorOut.anchors,
      );
      this.simEnv.obstacles = [...decorOut.obstacles.map(o=>({...o,surface:'wood' as const})), ...floraOut.obstacles.map(o=>({...o,surface:'plant' as const}))];
      this.foodOccluders=[...this.decor.group.children,...this.flora.group.children];
      // Sweep against displayed hardscape geometry; spherical keep-outs
      // would incorrectly block the hollow interior of a log.
      this.simEnv.foodSolidHit=(from,to)=>{
        const delta=to.clone().sub(from),length=delta.length();
        if(length<1e-7)return null;
        this.decor.group.updateMatrixWorld(true);
        const ray=new THREE.Raycaster(from,delta.divideScalar(length),0,length+.002);
        for(const hit of ray.intersectObjects(this.decor.group.children,true)){
          if(!hit.face||hit.distance<.000001)continue;
          const normal=hit.face.normal.clone()
            .applyNormalMatrix(new THREE.Matrix3().getNormalMatrix(hit.object.matrixWorld));
          if(normal.y>.28)return hit.point.clone();
        }
        return null;
      };
      this.foodDepthCache=new WeakMap();
      this.simEnv.sampleSurface=(from,toward)=>{
        const direction=toward.clone().sub(from).normalize();
        const ray=new THREE.Raycaster(from,direction,0,.40);
        this.decor.group.updateMatrixWorld(true);this.flora.group.updateMatrixWorld(true);
        const hits=ray.intersectObjects(this.foodOccluders,true);
        const hit=hits.find(h=>h.face&&h.distance>.005);
        if(!hit?.face)return null;
        const normal=hit.face.normal.clone().applyNormalMatrix(new THREE.Matrix3().getNormalMatrix(hit.object.matrixWorld));
        if(normal.dot(direction)>0)normal.negate();
        const inFlora=this.flora.group.children.some(o=>o===hit.object||o.children.includes(hit.object));
        const mesh=hit.object as THREE.Mesh,vertices=mesh.geometry.getAttribute('position');
        const a=new THREE.Vector3().fromBufferAttribute(vertices,hit.face.a).applyMatrix4(mesh.matrixWorld);
        const b=new THREE.Vector3().fromBufferAttribute(vertices,hit.face.b).applyMatrix4(mesh.matrixWorld);
        const c=new THREE.Vector3().fromBufferAttribute(vertices,hit.face.c).applyMatrix4(mesh.matrixWorld);
        const area=b.sub(a).cross(c.sub(a)).length()*.5;
        return {point:hit.point.clone(),normal,surface:inFlora?'plant':'wood',area};
      };
      this.simEnv.shelters = decorOut.shelters;
      this.simEnv.tunnels = decorOut.tunnels;
      this.fish.resetHabitat();

      this.environment.rebuild(
        this.dims, config.water, config.substrate, config.background, config.lighting,
        this.quality, decorOut.airstone,
      );
      SharedUniforms.uSurfaceY.value = this.dims.surfaceY;
      if(initial||resized)this.rig.frameTank(this.dims.halfW, this.dims.height, this.dims.floorY + this.dims.height * 0.52);
    }

    if (fishChanged) {
      this.lastFishKey = fishKey;
      this.fish.rebuild(config.fish, this.simEnv, effectiveFishCap(config,this.quality.maxFish),resized);
    }
  }

  // Drop food at screen coordinates (raycast onto the water surface plane).
  // Project against a camera-facing plane THROUGH the tank, not the water surface:
  // surface-only rays miss whenever the click is below the visible waterline.
  private tankPoint(clientX?:number,clientY?:number):THREE.Vector3{
    const rect=this.renderer.domElement.getBoundingClientRect();
    const x=clientX ?? (rect.left+rect.width*(0.25+Math.random()*0.5));
    const y=clientY ?? (rect.top+rect.height*(0.20+Math.random()*0.3));
    this.raycaster.setFromCamera(this.toNdc(x,y),this.rig.camera);
    const facing=this.rig.camera.getWorldDirection(new THREE.Vector3()).normalize();
    const plane=new THREE.Plane().setFromNormalAndCoplanarPoint(
      facing,new THREE.Vector3(0,this.dims.surfaceY*.55,0));
    const point=new THREE.Vector3();
    if(!this.raycaster.ray.intersectPlane(plane,point)){
      point.set(((x-rect.left)/Math.max(1,rect.width)*2-1)*this.dims.halfW*.8,0,0);
    }
    point.x=THREE.MathUtils.clamp(point.x,-this.dims.halfW*.78,this.dims.halfW*.78);
    point.z=THREE.MathUtils.clamp(point.z,-this.dims.halfD*.55,this.dims.halfD*.55);
    point.y=this.dims.surfaceY;
    return point;
  }


  // Pick a random physical depth along the exact screen-space click ray.
  // The click's projected pixel is invariant along this ray in perspective,
  // unlike forcing every pellet to start at the water surface.
  private foodPoint(clientX:number,clientY:number):THREE.Vector3|null{
    const rect=this.renderer.domElement.getBoundingClientRect();
    if(!Number.isFinite(clientX)||!Number.isFinite(clientY)||
      clientX<rect.left||clientX>rect.right||clientY<rect.top||clientY>rect.bottom)return null;
    this.raycaster.setFromCamera(this.toNdc(clientX,clientY),this.rig.camera);
    const ray=this.raycaster.ray;
    const pad=Math.min(.012,this.dims.halfW*.08,this.dims.halfD*.08,
      (this.dims.surfaceY-this.dims.floorY)*.08);
    const min=new THREE.Vector3(-this.dims.halfW+pad,this.dims.floorY+pad,-this.dims.halfD+pad);
    const max=new THREE.Vector3(this.dims.halfW-pad,this.dims.surfaceY-pad,this.dims.halfD-pad);
    // Slab intersection gives both entry and exit distances, including
    // oblique viewpoints and cameras that are temporarily inside the tank.
    let enter=0,exit=Infinity;
    for(const axis of ['x','y','z'] as const){
      const origin=ray.origin[axis],direction=ray.direction[axis];
      if(Math.abs(direction)<1e-9){
        if(origin<min[axis]||origin>max[axis])return null;
        continue;
      }
      const a=(min[axis]-origin)/direction,b=(max[axis]-origin)/direction;
      enter=Math.max(enter,Math.min(a,b));
      exit=Math.min(exit,Math.max(a,b));
      if(exit<=enter)return null;
    }
    if(!Number.isFinite(exit)||exit-enter<.0005)return null;
    // Stay a small distance away from the glass, floor and waterline.
    const inset=Math.min((exit-enter)*.06,.01);
    enter+=inset;exit-=inset;
    if(exit<=enter)return null;
    // Keep solid hardscape/coral clear. Never shift x/y after choosing depth:
    // moving off the ray would make the pellet jump away from the cursor.
    const point=new THREE.Vector3();
    for(let attempt=0;attempt<28;attempt++){
      ray.at(enter+Math.random()*(exit-enter),point);
      const blocked=this.simEnv.obstacles.some(o=>
        point.distanceToSquared(o.pos)<Math.pow(Math.max(.005,o.radius)+.006,2));
      if(!blocked)return point;
    }
    return null;
  }

  queueFishDrop(clientX?:number,clientY?:number):void{
    const p=this.tankPoint(clientX,clientY);
    this.fish.queueDrop(p.x,p.z);
  }

  feedAt(clientX:number,clientY:number,kind:FoodKind='normal',count=this.clickFoodCount):boolean{
    const hit=this.foodPoint(clientX,clientY);
    if(!hit)return false;
    this.fish.feed(hit.x,hit.z,this.simEnv,kind,hit.y);
    this.lastFoodSpawn=hit.clone();
    this.ecology.feed(kind);
    this.callbacks.onFed?.(kind,count);
    return true;
  }

  private toNdc(clientX: number, clientY: number): THREE.Vector2 {
    const rect = this.renderer.domElement.getBoundingClientRect();
    return new THREE.Vector2(
      ((clientX - rect.left) / rect.width) * 2 - 1,
      -((clientY - rect.top) / rect.height) * 2 + 1
    );
  }

  private rememberPointer=(e:PointerEvent):void=>{this.pointerDown={x:e.clientX,y:e.clientY}};
  private onRightClick=(e:MouseEvent):void=>{if(!this.kanAquariumMode)return;e.preventDefault();if(e.shiftKey)this.callbacks.onRemoveFish?.();else this.callbacks.onAddFish?.(e.clientX,e.clientY)};
  private onClick = (e: PointerEvent): void => {
    if(e.button!==0||e.shiftKey||this.rig.lastGestureWasPan||this.rig.lastPointerTravel>8)return;
    if(this.kanAquariumMode){
      if(Math.hypot(e.clientX-this.pointerDown.x,e.clientY-this.pointerDown.y)>9)return;
      const next=this.clickFoodCount+1;
      const kind:FoodKind=next%10===0?(next/10)%2===1?'fish-cookie':'bear-cookie':'normal';
      if(this.feedAt(e.clientX,e.clientY,kind,next))this.clickFoodCount=next;
      return;
    }
    // Ignore if this was a drag, not a tap.
    if (this.rig.lastPointerTravel > 8) return;
    // 1) Try picking a fish.
    const ndc = this.toNdc(e.clientX, e.clientY);
    this.raycaster.setFromCamera(ndc, this.rig.camera);
    const meshes = this.fish.populations.map((p) => p.mesh);
    const hits = this.raycaster.intersectObjects(meshes, false);
    if (hits.length > 0 && hits[0].instanceId !== undefined) {
      const speciesId = hits[0].object.userData.speciesId as string;
      const agent = this.fish.agentAt(speciesId, hits[0].instanceId);
      if (agent) {
        this.callbacks.onFishPicked?.(agent.key);
        return;
      }
    }
    // 2) Feed mode: tap drops food.
    if (this.feedMode) {
      this.feedAt(e.clientX, e.clientY);
      return;
    }
    // 3) Tap on nothing clears the selection.
    this.callbacks.onFishPicked?.(null);
  };

  // Compute the day/night factor for the current mode.
  private targetDayFactor(): number {
    const mode = this.config?.dayNight ?? 'day';
    switch (mode) {
      case 'day': return 1;
      case 'night': return 0;
      case 'realtime': {
        const h = new Date().getHours() + new Date().getMinutes() / 60;
        // Dawn 6–8, day 8–18, dusk 18–21, night otherwise.
        if (h >= 8 && h < 18) return 1;
        if (h >= 6 && h < 8) return (h - 6) / 2;
        if (h >= 18 && h < 21) return 1 - (h - 18) / 3;
        return 0;
      }
      case 'cycle': {
        // A full day every 4 minutes: generous daytime, brief warm dusk,
        // a stretch of moonlight. lastCycleT accumulates in tick().
        const t = (this.lastCycleT % 240) / 240;
        if (t < 0.55) return 1;
        if (t < 0.62) return 1 - (t - 0.55) / 0.07;
        if (t < 0.93) return 0;
        return (t - 0.93) / 0.07;
      }
    }
  }

  screenshot(): string {
    // Render fresh, then read pixels in the same task (buffer isn't preserved).
    this.renderer.info.reset();
    if (this.composer) this.composer.render();
    else this.renderer.render(this.scene, this.rig.camera);
    return this.renderer.domElement.toDataURL('image/png');
  }

  fishPosition(key: string): THREE.Vector3 | null {
    return this.fish.findByKey(key)?.agent.pos ?? null;
  }

  private tick = (): void => {
    if (this.disposed) return;
    const elapsed=this.clock.getDelta();
    const dt = Math.min(elapsed, 0.1);
    if (!this.running) return;
    this.advance(dt,elapsed);
  };

  /**
   * Detach from requestAnimationFrame so an external driver (the tvOS video
   * capture script) can step the simulation frame-by-frame with a fixed dt.
   */
  enableExternalDrive(): void {
    this.renderer.setAnimationLoop(null);
  }

  /**
   * Locked, motionless front framing for ambient capture (see
   * CameraRig.lockFrontView for what coverDepth/overfill mean).
   *
   * `fit` decides which way the vertical constraint runs, and it matters
   * because the tank is not centered on the aim point:
   *   'contain' — the whole glass box must sit inside the frame, so the
   *               taller half binds (used by the bordered scenes).
   *   'cover'   — the frame must sit inside the tank, so the shorter half
   *               binds (used by the full-bleed scenes, where overshooting
   *               an edge would reveal the room behind the glass).
   * `lookFrac` is the aim height as a fraction of tank height. Small tanks
   * want a lower aim: at 0.52 an 8-gallon nano frames mostly empty midwater,
   * because its flora all sits in the bottom third.
   */
  captureFrontView(coverDepth: number, overfill: number, fit: 'contain' | 'cover' = 'cover', lookFrac = 0.52): void {
    const { floorY, height, halfW, halfD } = this.dims;
    const midY = floorY + height * lookFrac;
    const above = floorY + height - midY;
    const below = midY - floorY;
    const halfH = fit === 'contain' ? Math.max(above, below) : Math.min(above, below);
    this.rig.lockFrontView(halfW, halfH, halfD, midY, coverDepth, overfill);
  }

  // Overlay is not an independent animation: each DOM icon follows a FoodBit
  // in the simulation and vanishes as soon as that bit is eaten or expires.
  private syncFoodLayer():void{
    const layer=this.foodLayer;
    if(!layer)return;
    const bounds=this.renderer.domElement.getBoundingClientRect();
    const active=new Set<object>();
    const projected=new THREE.Vector3();
    let occlusionRayBudget=2; // avoid frame spikes from many pellets
    for(const bit of this.fish.food.bits){
      active.add(bit);
      let icon=this.foodElements.get(bit);
      if(!icon){
        icon=document.createElement('div');
        icon.className=bit.kind==='normal'?'kan-food-item kan-food-pellet':'kan-food-item kan-food-cookie';
        icon.dataset.kind=bit.kind;
        icon.setAttribute('aria-hidden','true');
        if(bit.kind!=='normal'){
          const image=document.createElement('img');
          image.alt='';
          image.src=new URL('feed-items/'+(bit.kind==='fish-cookie'?'cookie-fish.png':'cookie-bear.png'),document.baseURI).href;
          image.draggable=false;
          icon.appendChild(image);
        }
        layer.appendChild(icon);
        this.foodElements.set(bit,icon);
      }
      projected.copy(bit.pos).project(this.rig.camera);
      const sx=(projected.x+1)*.5,sy=(1-projected.y)*.5;
      // Unlike HUD badges, food should NEVER stick to a screen edge when it
      // moves offscreen or behind the camera.
      let visible=projected.z>=-1&&projected.z<=1&&sx>=0&&sx<=1&&sy>=0&&sy<=1;
      const now=performance.now();
      let previous=this.foodDepthCache.get(bit);
      // Depth test a handful of food pieces per frame (approx 4Hz each).
      if(visible&&this.foodOccluders.length&&occlusionRayBudget>0&&(!previous||now-previous.last>280)){
        occlusionRayBudget--;
        const eye=this.rig.camera.position;
        this.foodDepthRayDirection.copy(bit.pos).sub(eye);
        const range=this.foodDepthRayDirection.length();
        if(range>.02){
          this.foodDepthRay.set(eye,this.foodDepthRayDirection.divideScalar(range));
          this.foodDepthRay.near=.005;
          this.foodDepthRay.far=range-.012;
          visible=this.foodDepthRay.intersectObjects(this.foodOccluders,true).length===0;
        }
        previous={last:now,visible};
        this.foodDepthCache.set(bit,previous);
      }else if(visible&&previous){
        visible=previous.visible;
      }
      icon.style.transform='translate3d('+(sx*bounds.width).toFixed(1)+'px,'+(sy*bounds.height).toFixed(1)+'px,0) translate(-50%,-50%)';
      icon.style.opacity=visible?'1':'0';
      icon.dataset.occluded=visible?'false':'true';
      icon.dataset.worldY=bit.pos.y.toFixed(5);
      icon.dataset.foodState=bit.state;
    }
    for(const [bit,element] of this.foodElements){
      if(active.has(bit))continue;
      element.remove();
      this.foodElements.delete(bit);
    }
    layer.dataset.foodCount=String(active.size);
  }

  /** One simulation + render step. Called with real dt by tick(), or with a
   *  fixed dt by the capture driver (which needs stutter-free frame times). */
  advance(dt: number,frameElapsed=dt): void {

    const t = SharedUniforms.uTime.value + dt;
    SharedUniforms.uTime.value = t;
    this.lastCycleT += dt;
    this.simEnv.time = t;
    this.current.time = t;

    // Smoothly chase the target day factor (sunrise takes a few seconds).
    this.dayFactor = THREE.MathUtils.damp(this.dayFactor, this.targetDayFactor(), 0.5, dt);
    this.simEnv.dayFactor = this.dayFactor;

    this.ecology.advance(dt,this.ecoMode,this.dayFactor,
      this.fish.food.bits.filter(b=>b.state==='settled').length);
    const eco=this.ecology.snapshot();
    this.simEnv.ecoComfort=this.ecoMode==='natural'
      ?Math.max(.86,Math.min(1.03,((eco.oxygen+eco.cleanliness)/200)*1.04))
      :1;
    this.fish.update(dt, this.simEnv);
    this.environment.update(this.dayFactor, this.rig.camera);
    this.rig.observe(this.fish.getLiveEvents(this.simEnv),this.simEnv.obstacles);
    this.rig.update(dt);
    this.lodIn-=dt;if(this.lodIn<=0){this.lodIn=.5;this.fish.updateLod(this.rig.camera,this.container.clientHeight);}
    this.syncFoodLayer();

    this.renderer.info.reset();
    if (this.composer) this.composer.render();
    else this.renderer.render(this.scene, this.rig.camera);

    // First rendered frame → readiness flag (polled by the iOS app's tests).
    if (!this.firstFrameDone) {
      this.firstFrameDone = true;
      markReady();
    }

    // — Stats + automatic quality downgrade —
    this.frameTimes.push(frameElapsed);
    if (this.frameTimes.length >= 60) {
      const avg = this.frameTimes.reduce((a, b) => a + b, 0) / this.frameTimes.length;
      this.stats.fps = Math.round(1 / avg);
      const sorted=[...this.frameTimes].sort((a,b)=>a-b);
      this.stats.frameP50Ms=sorted[Math.floor(sorted.length*.50)]*1000;
      this.stats.frameP95Ms=sorted[Math.floor(sorted.length*.95)]*1000;
      this.frameTimes = [];
      // If the user asked for 'auto' and we can't hold ~28fps, step down a tier.
      if (this.requestedTier === 'auto' && this.stats.fps < 28) {
        const order: QualityTier[] = ['ultra', 'high', 'medium', 'low'];
        const idx = order.indexOf(this.quality.tier);
        if (idx >= 0 && idx < order.length - 1) {
          this.quality = QUALITY[order[idx + 1]];
          this.applySize();
          if (this.config) this.applyConfig(this.config, true);
          this.callbacks.onAutoQuality?.(this.quality.tier);
        }
      }
    }
    this.stats.geometries=this.renderer.info.memory.geometries;this.stats.textures=this.renderer.info.memory.textures;
    this.stats.drawCalls = this.renderer.info.render.calls;
    this.stats.triangles = this.renderer.info.render.triangles;
    this.stats.fishCount = this.fish.populations.reduce((a, p) => a + p.agents.length, 0);
  };
}
