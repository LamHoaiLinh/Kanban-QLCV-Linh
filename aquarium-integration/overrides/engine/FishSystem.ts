// ── KanAquarium Realism 1: physics collisions on existing fish agents only.
// No new persistence schema: fish IDs, quantities and tank configurations remain stable.
// The living heart of the aquarium: per-fish agents simulated on the CPU
// (positions, velocities, behavior states) driving GPU-instanced meshes.
//
// Behavior model (RESEARCH.md §3.3–3.4):
//  • Schoolers run Reynolds boids — separation, alignment, cohesion — with
//    separation weighted highest (2.0 / 0.5 / 0.5) and a limited field of view.
//  • Every archetype adds: tank-wall avoidance, a preferred depth band, wander,
//    current drift + rheotaxis (facing into flow), day/night activity, and
//    food seeking during a feed.
//  • Orientation: yaw/pitch from velocity, roll banked into turns like an
//    aircraft; body-bend and tail-beat phase are passed to the vertex shader.

import * as THREE from 'three';
import type { SpeciesDef } from '../types';
import type { SwimTunnel } from './Decor';
import { speciesById } from '../data/species';
import { getFishAsset } from './FishFactory';
import { HabitatDirector } from './HabitatDirector';
import { CurrentField } from './CurrentField';
import { radialSpriteTexture } from './textures';
import { applyUnderwater } from './shaders';

const TAU = Math.PI * 2;

// Global pace dial. The per-species cruise speeds follow published
// body-lengths-per-second figures, but in a small on-screen tank that reads
// far too frantic — a quarter speed is much closer to how a real tank feels.
// Tail-beat frequency derives from actual speed, so the animation slows with it.
const SPEED_SCALE = 0.25;

// Surface crawlers stick to the glass/floor instead of swimming freely:
// snails graze slowly; hillstream loaches cling and scoot in little bursts.
function isCrawler(sp: SpeciesDef): boolean {
  return sp.id.includes('snail') || sp.id.includes('hillstream');
}
const _v1 = new THREE.Vector3();
const _v2 = new THREE.Vector3();
const _v3 = new THREE.Vector3();
const _q = new THREE.Quaternion();
const _e = new THREE.Euler();
const _m = new THREE.Matrix4();
const _s = new THREE.Vector3();

export interface SimEnv {
  time: number;
  dayFactor: number;        // 1 = noon, 0 = deep night
  halfW: number;            // interior half-width (x)
  halfD: number;            // interior half-depth (z)
  floorY: number;
  surfaceY: number;
  current: CurrentField;
  reducedMotion: boolean;
  ecoMode?:'natural'|'relax';
  ecoComfort?:number; // gentle environmental modulation, never mortality
  obstacles: { pos: THREE.Vector3; radius: number }[]; // decor/coral keep-out spheres
  shelters: THREE.Vector3[];                            // hiding spots (decor)
  tunnels: SwimTunnel[]; // open corridors exported from the physical wood geometry
}

type FishMode = 'cruise' | 'rest' | 'dart' | 'feed' | 'forage';

interface Agent {
  sp: SpeciesDef;
  index: number;            // index within its species population
  key: string;              // "speciesId:index" — stable id for naming/follow
  pos: THREE.Vector3;
  vel: THREE.Vector3;
  phase: number;            // accumulated tail-beat phase (shader reads this)
  bend: number;             // smoothed turn curvature
  flap: number;
  jaw: number;
  jawTime: number;             // pectoral flutter amount (rises when slow)
  rand: number;
  scale: number;            // individual size variation
  mode: FishMode;
  modeT: number;            // time left in current mode
  anchor: THREE.Vector3;    // territory / station / school goal
  prevYaw: number;
  prevPitch: number;
  moveOrigin: THREE.Vector3;
  stuckTime: number;
  hunger: number;           // >0 after feeding starts; seeks food
  feedDistance?: number; // current target range used for smooth approach
  drop?:{stage:'fall'|'dive';velocityY:number;elapsed:number;targetY:number};
  // Critter-specific
  wall?: 'floor' | 'back' | 'left' | 'right';
  crawlDir?: number;
  // Corydoras air-gulp state: rocketing 'up' to the surface or diving 'down'.
  gulp?: 'up' | 'down';
}

interface Population {
  sp: SpeciesDef;
  mesh: THREE.InstancedMesh;
  agents: Agent[];
  dyn: THREE.InstancedBufferAttribute;
}

// ── KanAquarium: individual pellets and high-priority rare cookies ──
export type FoodKind = 'normal' | 'fish-cookie' | 'bear-cookie';
interface FoodBit {pos:THREE.Vector3;age:number;state:'float'|'sink'|'settled'|'gone';kind:FoodKind;sprite:THREE.Sprite}
export class FoodSystem {
  bits:FoodBit[]=[];
  onEat?:()=>void;
  private group=new THREE.Group();
  private mats=new Map<string,THREE.SpriteMaterial>();
  private readonly variants:Record<FoodKind,string[]>={
    normal:['pellet-brown.svg','pellet-green.svg'],
    'fish-cookie':['cookie-fish.png'],
    'bear-cookie':['cookie-bear.png'],
  };
  constructor(parent:THREE.Object3D){
    parent.add(this.group);
    const loader=new THREE.TextureLoader();
    for(const file of Object.values(this.variants).flat()){
      const tex=loader.load(new URL('feed-items/'+file,document.baseURI).href);
      tex.colorSpace=THREE.SRGBColorSpace;
      this.mats.set(file,new THREE.SpriteMaterial({map:tex,transparent:true,depthTest:false,depthWrite:false,alphaTest:0.02,toneMapped:false}));
    }
  }
  scatter(x:number,z:number,startY:number,kind:FoodKind='normal'):void{
    if(this.bits.length>=65)this.remove(this.bits[0]);
    const files=this.variants[kind],name=files[Math.floor(Math.random()*files.length)];
    const sprite=new THREE.Sprite(this.mats.get(name)!);
    const size=kind==='normal'?0.012:0.0325;
    sprite.scale.set(size,size,1);
    // In KanBan we render crisp, 5px/10px HUD sprites projected from these
    // exact world positions, avoiding water shaders and fog swallowing pellets.
    sprite.visible=!new URLSearchParams(location.search).has('kanban');
    sprite.renderOrder=1500;
    // Preserve the exact screen ray: horizontal scattering would shift the pellet
    // away from the pointer, especially with an oblique camera.
    const bit:FoodBit={pos:new THREE.Vector3(x,startY,z),
      age:0,state:'sink',kind,sprite};
    sprite.position.copy(bit.pos);this.group.add(sprite);this.bits.push(bit);
  }
  private remove(bit:FoodBit):void{
    this.group.remove(bit.sprite);
    const i=this.bits.indexOf(bit);if(i>=0)this.bits.splice(i,1);
  }
  update(dt:number,floorY:number):void{
    for(let i=this.bits.length-1;i>=0;i--){
      const b=this.bits[i];b.age+=dt;const special=b.kind!=='normal';
      // Sinking starts immediately when the food is released.
      if(b.state==='sink'){
        b.pos.y-=dt*(special?.075:.090);
        b.pos.x+=Math.sin(b.age*2.2+b.pos.z*35)*dt*.003;
        if(b.pos.y<=floorY+.01){b.pos.y=floorY+.01;b.state='settled'}
      }
      if(b.age>(special?55:26))b.state='gone';
      if(b.state==='gone'){this.remove(b);continue}
      b.sprite.position.copy(b.pos);
      b.sprite.material.rotation=Math.sin(b.age*.6+b.pos.x*5)*.08;
    }
  }
  get active():boolean{return this.bits.length>0}
  get hasCookie():boolean{return this.bits.some(b=>b.kind!=='normal'&&b.state!=='gone')}
  nearest(p:THREE.Vector3,maxDist:number,settledOnly:boolean):FoodBit|null{
    let best:FoodBit|null=null,score=Infinity;
    for(const b of this.bits){
      if(b.state==='gone'||b.age<(b.kind==='normal'?.35:.45))continue;
      const special=b.kind!=='normal';
      if(!special&&settledOnly&&b.state!=='settled')continue;
      if(!special&&!settledOnly&&b.state==='settled')continue;
      const d=b.pos.distanceToSquared(p);
      if(d>Math.pow(special?maxDist*1.45:maxDist,2))continue;
      // Cookies are preferred when reasonably close, not magically detected across the tank.
      const s=d/(special?1.7:1);
      if(s<score){score=s;best=b}
    }
    return best;
  }
  eat(b:FoodBit):void{b.state='gone';this.remove(b);this.onEat?.()}
}
// ── The fish system proper ──
export class FishSystem {
  group = new THREE.Group();
  food: FoodSystem;
  onEcoEvent?:(event:'graze'|'rest'|'shelter'|'school')=>void;
  populations: Population[] = [];
  private feedTimer = 0;   // seconds of "the fish are hungry/excited" remaining
  private habitat = new HabitatDirector();
  private softFinsOn=true;
  setSoftFins(on:boolean):void{
    this.softFinsOn=on;
    for(const p of this.populations){
      const asset=getFishAsset(p.sp);
      asset.uniforms.uFinSoftness.value=this.finSoftness(p.sp);
    }
  }
  private finSoftness(sp:SpeciesDef):number{
    return !this.softFinsOn||sp.invert||sp.shape.eelLike?0:
      sp.id==='angelfish'?.064:sp.shape.finLong?.045:.018;
  }
  resetHabitat():void{this.habitat.reset();}
  getHabitatSnapshot(env:SimEnv){return this.habitat.snapshot(env);}
  getFinSnapshot(){return this.populations.map(p=>({id:p.sp.id,
    vertices:p.mesh.geometry.getAttribute('position').count,
    medianStrip:p.mesh.geometry.userData.medianMembraneStrip===true,
    medianTips:[...Array(p.mesh.geometry.getAttribute('aFinFlex').count).keys()]
      .filter(i=>p.mesh.geometry.getAttribute('aPart').getX(i)===2 &&
        p.mesh.geometry.getAttribute('aFinFlex').getX(i)>.95).length,
    flexible:[...Array(p.mesh.geometry.getAttribute('aFinFlex').count).keys()].filter(i=>
      p.mesh.geometry.getAttribute('aFinFlex').getX(i)>.001).length,
    mouth:[...p.agents].map(a=>a.jaw)}));}
  getAngelfishMotionSnapshot(env:SimEnv){
    return this.populations.filter(p=>p.sp.id==='angelfish').flatMap(p=>
      p.agents.filter(a=>!a.drop).map(a=>({
        key:a.key,
        pos:a.pos.toArray(),vel:a.vel.toArray(),speed:a.vel.length(),
        mode:a.mode,yaw:a.prevYaw,pitch:a.prevPitch,
        stuckTime:a.stuckTime,finClearance:this.verticalClearance(a,env),
        anchor:a.anchor.toArray()
      }))
    );
  }
  private pendingDrop:{x:number;z:number}|null=null;
  private splashes:Array<{mesh:THREE.Mesh<THREE.RingGeometry,THREE.MeshBasicMaterial>;age:number}>=[];
  // Soft spherical keep-out zones approximate rocks, wood trunks and larger corals.
  private collisionRadius(a:Agent):number{return Math.max(0.007,a.scale*.30)}
  // The physical vertical envelope must include dorsal + anal fins, not only
  // the body centre. Tall angels formerly poked rigid triangles through the
  // waterline because yMargin covered merely 20% of their length.
  private verticalClearance(a:Agent,env:SimEnv):number{
    const sh=a.sp.shape;
    const scale=a.sp.id==='angelfish'?.54:1;
    const fin=Math.max(sh.dorsalHeight,sh.analHeight)*sh.height*scale;
    const envelope=a.scale*(sh.height*.5+fin)+.005;
    return Math.min((env.surfaceY-env.floorY)*.43,
      Math.max(.006,a.scale*.20,envelope));
  }
  private constrain(a:Agent,env:SimEnv,dt=0):void{
    // Broadly elliptical fish body. The forward axis requires more clearance
    // than the side axis; do not clamp the centre directly to the glass.
    const speed=a.vel.length();
    const dirX=speed>1e-6?Math.abs(a.vel.x)/speed:.65;
    const dirZ=speed>1e-6?Math.abs(a.vel.z)/speed:.65;
    const xMargin=Math.min(env.halfW*.82,Math.max(.007,a.scale*(.24+.33*dirX)));
    const zMargin=Math.min(env.halfD*.82,Math.max(.007,a.scale*(.24+.33*dirZ)));
    const yMargin=this.verticalClearance(a,env);
    const xmin=-env.halfW+xMargin,xmax=env.halfW-xMargin;
    const zmin=-env.halfD+zMargin,zmax=env.halfD-zMargin;
    const ymin=env.floorY+yMargin,ymax=env.surfaceY-yMargin;
    if(a.pos.x<xmin){a.pos.x=xmin;a.vel.x=Math.max(0,a.vel.x)}
    else if(a.pos.x>xmax){a.pos.x=xmax;a.vel.x=Math.min(0,a.vel.x)}
    if(a.pos.z<zmin){a.pos.z=zmin;a.vel.z=Math.max(0,a.vel.z)}
    else if(a.pos.z>zmax){a.pos.z=zmax;a.vel.z=Math.min(0,a.vel.z)}
    if(a.pos.y<ymin){a.pos.y=ymin;a.vel.y=Math.max(0,a.vel.y)}
    else if(a.pos.y>ymax){a.pos.y=ymax;a.vel.y=Math.min(0,a.vel.y)}
    // Resolve position against solid decorations after steering; avoid popping
    // by removing inward velocity only. A low iteration count bounds CPU cost.
    const radius=this.collisionRadius(a);
    for(let pass=0;pass<6;pass++){
      let moved=false;
      for(const ob of env.obstacles){
        const safe=Math.max(0.005,ob.radius)+radius;
        const dx=a.pos.x-ob.pos.x,dy=a.pos.y-ob.pos.y,dz=a.pos.z-ob.pos.z;
        const d2=dx*dx+dy*dy+dz*dz;
        if(d2>=safe*safe)continue;
        const d=Math.sqrt(d2);
        const nx=d>1e-6?dx/d:1,ny=d>1e-6?dy/d:0,nz=d>1e-6?dz/d:0;
        // Only push to a reachable location inside the water volume.
        a.pos.x=THREE.MathUtils.clamp(ob.pos.x+nx*(safe+.001),xmin,xmax);
        a.pos.y=THREE.MathUtils.clamp(ob.pos.y+ny*(safe+.001),ymin,ymax);
        a.pos.z=THREE.MathUtils.clamp(ob.pos.z+nz*(safe+.001),zmin,zmax);
        const inward=a.vel.x*nx+a.vel.y*ny+a.vel.z*nz;
        if(inward<0){a.vel.x-=inward*nx;a.vel.y-=inward*ny;a.vel.z-=inward*nz}
        moved=true;
      }
      if(!moved)break;
    }
    // When several stones/coral skeletons overlap, sequential projection can
    // push a fish out of one collider and into the next. Search a small set of
    // reachable positions around the fish instead of letting it clip deeply.
    const deepestAt=(x:number,y:number,z:number):number=>{
      let max=0;
      for(const ob of env.obstacles){
        const dx=x-ob.pos.x,dy=y-ob.pos.y,dz=z-ob.pos.z;
        const d=Math.sqrt(dx*dx+dy*dy+dz*dz);
        max=Math.max(max,ob.radius+radius-d);
      }
      return Math.max(0,max);
    };
    const initialPenetration=deepestAt(a.pos.x,a.pos.y,a.pos.z);
    if(initialPenetration>.006){
      const ox=a.pos.x,oy=a.pos.y,oz=a.pos.z;
      let bx=ox,by=oy,bz=oz,bestScore=initialPenetration*80;
      let found=false;
      const radii=[.018,.04,.075,.12,.19,.27];
      for(const searchR of radii){
        for(let k=0;k<16;k++){
          const theta=k*(Math.PI/8)+a.rand*Math.PI*.5;
          const px=THREE.MathUtils.clamp(ox+Math.cos(theta)*searchR,xmin,xmax);
          const pz=THREE.MathUtils.clamp(oz+Math.sin(theta)*searchR,zmin,zmax);
          for(const dy of [0,-.035,.035,-.08,.08]){
            const py=THREE.MathUtils.clamp(oy+dy,ymin,ymax);
            const deep=deepestAt(px,py,pz);
            const displacement=Math.hypot(px-ox,py-oy,pz-oz);
            const score=deep*80+displacement*.5;
            if(score<bestScore){
              bestScore=score;bx=px;by=py;bz=pz;
              if(deep<.002){found=true;break}
            }
          }
          if(found)break;
        }
        if(found)break;
      }
      if(bestScore<initialPenetration*80){
        a.pos.set(bx,by,bz);
        if(Math.hypot(bx-ox,by-oy,bz-oz)>.035)a.vel.multiplyScalar(.4);
      }
    }
    // Detect real displacement AFTER collision resolution, not only velocity:
    // a fish can have non-zero attempted velocity while pinned to a collider.
    if(a.sp.id==='angelfish'){
      const delta=a.pos.distanceTo(a.moveOrigin);
      a.stuckTime=delta<Math.max(.00004,a.scale*.0007)?
        a.stuckTime+dt:Math.max(0,a.stuckTime-dt*2);
      a.moveOrigin.copy(a.pos);
      if(a.stuckTime>2.5&&!a.drop){
        a.stuckTime=0;
        a.mode='cruise';a.modeT=4+Math.random()*3;
        this.newAnchorNear(a,env,.7);
        a.vel.y=0;
        // Reorient gently toward a reachable target, never teleport the fish.
        const dir=a.anchor.clone().sub(a.pos).setY(0);
        if(dir.lengthSq()>1e-7)a.vel.addScaledVector(dir.normalize(),.006);
      }
    }
    // IMPORTANT: obstacle resolution can change the velocity direction.
    // The initial glass clearance was computed before this velocity change,
    // so the body envelope may grow by a few millimeters after collision.
    // Resolve the final pose using the FINAL velocity, including newly
    // appearing/returning fish, to prevent rare one-frame glass clipping.
    const finalSpeed=a.vel.length();
    const fx=finalSpeed>1e-6?Math.abs(a.vel.x)/finalSpeed:.65;
    const fz=finalSpeed>1e-6?Math.abs(a.vel.z)/finalSpeed:.65;
    const mx=Math.min(env.halfW*.82,Math.max(.007,a.scale*(.24+.33*fx)));
    const mz=Math.min(env.halfD*.82,Math.max(.007,a.scale*(.24+.33*fz)));
    a.pos.x=THREE.MathUtils.clamp(a.pos.x,-env.halfW+mx,env.halfW-mx);
    a.pos.z=THREE.MathUtils.clamp(a.pos.z,-env.halfD+mz,env.halfD-mz);
    a.pos.y=THREE.MathUtils.clamp(a.pos.y,ymin,ymax);
  }
  // Lightweight telemetry for browser QA; does not change simulation state.
  getMovementSnapshot(){
    return this.populations.map(p=>{
      const agents=p.agents.filter(a=>!a.drop);
      const n=Math.max(1,agents.length);
      return {
        species:p.sp.id,
        count:agents.length,
        meanSpeed:agents.reduce((sum,a)=>sum+a.vel.length(),0)/n,
        turns:agents.reduce((sum,a)=>sum+Math.abs(a.bend),0)/n,
        meshVertices:p.mesh.geometry.getAttribute('position').count,
        finGroups:p.mesh.geometry.groups.length,
      };
    });
  }
  // Test-only probe. No production counters or global simulation timers.
  getPhysicsSnapshot(env:SimEnv):{fish:number;wallViolations:number;solidOverlaps:number;maxOverlap:number}{
    let fish=0,wallViolations=0,solidOverlaps=0,maxOverlap=0;
    for(const p of this.populations)for(const a of p.agents){
      if(isCrawler(a.sp)||a.drop)continue;
      fish++;
      const speed=a.vel.length(),dx=speed>1e-6?Math.abs(a.vel.x)/speed:.65,dz=speed>1e-6?Math.abs(a.vel.z)/speed:.65;
      const mx=Math.min(env.halfW*.82,Math.max(.007,a.scale*(.24+.33*dx)));
      const mz=Math.min(env.halfD*.82,Math.max(.007,a.scale*(.24+.33*dz)));
      const my=this.verticalClearance(a,env);
      if(Math.abs(a.pos.x)>env.halfW-mx+.002||Math.abs(a.pos.z)>env.halfD-mz+.002||a.pos.y<env.floorY+my-.002||a.pos.y>env.surfaceY-my+.002)wallViolations++;
      for(const ob of env.obstacles){
        const overlap=ob.radius+this.collisionRadius(a)-a.pos.distanceTo(ob.pos);
        if(overlap>.004){solidOverlaps++;maxOverlap=Math.max(maxOverlap,overlap)}
      }
    }
    return {fish,wallViolations,solidOverlaps,maxOverlap};
  }
  queueDrop(x:number,z:number):void{this.pendingDrop={x,z};}
  private splash(x:number,z:number,y:number):void{
    const geometry=new THREE.RingGeometry(.018,.030,32);
    const material=new THREE.MeshBasicMaterial({color:0x9beeff,transparent:true,opacity:.88,depthTest:false,depthWrite:false,side:THREE.DoubleSide});
    const mesh=new THREE.Mesh(geometry,material);
    mesh.rotation.x=-Math.PI/2;
    mesh.position.set(x,y+.01,z);
    mesh.renderOrder=1490;
    this.group.add(mesh);
    this.splashes.push({mesh,age:0});
  }
  private updateSplashes(dt:number):void{
    for(let i=this.splashes.length-1;i>=0;i--){
      const s=this.splashes[i];s.age+=dt;
      const p=Math.min(1,s.age/1.1);
      s.mesh.scale.setScalar(1+p*4);
      s.mesh.material.opacity=(1-p)*.85;
      if(p>=1){this.group.remove(s.mesh);s.mesh.geometry.dispose();s.mesh.material.dispose();this.splashes.splice(i,1);}
    }
  }
  private animateDrop(a:Agent,dt:number,env:SimEnv):boolean{
    const d=a.drop;if(!d)return false;
    d.elapsed+=dt;
    if(d.stage==='fall'){
      d.velocityY-=1.7*dt;
      a.pos.y+=d.velocityY*dt;
      a.vel.set(.003,d.velocityY,.003);
      if(a.pos.y<=env.surfaceY-a.scale*.32){
        a.pos.y=env.surfaceY-a.scale*.32;
        d.stage='dive';d.elapsed=0;
        this.splash(a.pos.x,a.pos.z,env.surfaceY);
      }
    }else{
      const p=Math.min(1,d.elapsed/.85);
      const smooth=p*p*(3-2*p);
      a.pos.y=THREE.MathUtils.lerp(env.surfaceY-a.scale*.32,d.targetY,smooth);
      a.vel.set(.035,-.08,.004);
      if(p>=1){a.drop=undefined;a.mode='dart';a.modeT=1.1;}
    }
    return true;
  }

  constructor(parent: THREE.Object3D) {
    parent.add(this.group);
    this.food = new FoodSystem(this.group);
  }

  // (Re)build all populations for a new tank config.
  rebuild(fishCounts: Record<string, number>, env: SimEnv, maxFish: number): void {
    const oldAgents=new Map(this.populations.flatMap(p=>p.agents.map(a=>[a.key,a] as const)));
    for (const p of this.populations) {
      this.group.remove(p.mesh);
      p.mesh.dispose();
    }
    this.populations = [];
    this.habitat.reset();

    // Respect the quality tier's fish budget by scaling every school down
    // proportionally rather than dropping whole species.
    const requested = Object.values(fishCounts).reduce((a, b) => a + b, 0);
    const scale = requested > maxFish ? maxFish / requested : 1;

    for (const [id, rawCount] of Object.entries(fishCounts)) {
      const sp = speciesById.get(id);
      if (!sp || rawCount <= 0) continue;
      const count = Math.max(1, Math.round(rawCount * scale));
      const asset = getFishAsset(sp);
      asset.uniforms.uFinSoftness.value=this.finSoftness(sp);
      const mesh = new THREE.InstancedMesh(asset.geometry, asset.materials, count);
      mesh.frustumCulled = false; // fish roam the whole tank; skip per-instance culling
      mesh.userData.speciesId = id;

      // Per-instance dynamic attributes the swim shader reads.
      const dyn = new THREE.InstancedBufferAttribute(new Float32Array(count * 4), 4);
      dyn.setUsage(THREE.DynamicDrawUsage);
      const rnd = new THREE.InstancedBufferAttribute(new Float32Array(count), 1);
      asset.geometry.setAttribute('aDyn', dyn);
      asset.geometry.setAttribute('aRand', rnd);

      const agents: Agent[] = [];
      for (let i = 0; i < count; i++) {
        rnd.setX(i, Math.random());
        const agent=this.spawnAgent(sp,i,env);
        const old=oldAgents.get(agent.key);
        if(old){
          agent.pos.copy(old.pos);agent.vel.copy(old.vel);agent.anchor.copy(old.anchor);
          agent.mode=old.mode;agent.modeT=old.modeT;agent.phase=old.phase;
          agent.prevPitch=old.prevPitch??0;
          agent.stuckTime=old.stuckTime??0;
          agent.moveOrigin.copy(old.moveOrigin??old.pos);
          agent.jaw=old.jaw??0;agent.jawTime=old.jawTime??0;
          agent.rand=old.rand;agent.scale=old.scale;agent.hunger=old.hunger;
          agent.drop=old.drop?{...old.drop}:undefined;
        }
        if(!old&&this.pendingDrop&&!isCrawler(sp)){
          const p=this.pendingDrop;this.pendingDrop=null;
          agent.pos.set(p.x,env.surfaceY+Math.max(.13,env.surfaceY*.22),p.z);
          agent.vel.set(0,-.03,0);
          const band=this.zoneBand(sp,env);
          agent.drop={stage:'fall',velocityY:-.03,elapsed:0,targetY:THREE.MathUtils.lerp(band[0],band[1],.55)};
        }
        if(!isCrawler(sp)&&!agent.drop)this.constrain(agent,env);
        agents.push(agent);
      }
      rnd.needsUpdate = true;

      const pop: Population = { sp, mesh, agents, dyn };
      this.populations.push(pop);
      this.group.add(mesh);
    }
    this.pendingDrop=null;
    if(oldAgents.size===0)this.feedTimer=0;
  }

  private spawnAgent(sp: SpeciesDef, i: number, env: SimEnv): Agent {
    const zoneY = this.zoneBand(sp, env);
    const pos = new THREE.Vector3(
      (Math.random() - 0.5) * env.halfW * 1.6,
      THREE.MathUtils.lerp(zoneY[0], zoneY[1], Math.random()),
      (Math.random() - 0.5) * env.halfD * 1.6
    );
    const initialVelocity=new THREE.Vector3(
      (Math.random()-.5)*.05,0,(Math.random()-.5)*.05);
    const agent: Agent = {
      sp, index: i, key: `${sp.id}:${i}`,
      pos,
      vel: initialVelocity,
      phase: Math.random() * TAU,
      bend: 0, flap: 0, jaw:0,jawTime:0,
      rand: Math.random(),
      scale: sp.lengthM * (0.82 + Math.random() * 0.36),
      mode: 'cruise', modeT: 1 + Math.random() * 4,
      anchor: new THREE.Vector3(
        (Math.random() - 0.5) * env.halfW * 1.4,
        THREE.MathUtils.lerp(zoneY[0], zoneY[1], 0.5),
        (Math.random() - 0.5) * env.halfD * 1.4
      ),
      prevYaw: Math.atan2(-initialVelocity.z,initialVelocity.x),
      prevPitch: 0,
      moveOrigin: pos.clone(),
      stuckTime: 0,
      hunger: 0,
    };
    if (isCrawler(sp)) {
      // Crawlers split between the glass and the floor ("grazing the glass").
      const walls = ['floor', 'back', 'left', 'right'] as const;
      agent.wall = walls[i % walls.length];
      agent.crawlDir = Math.random() * TAU;
    }
    return agent;
  }

  // Preferred vertical band per zone — fish live in layers, which is a huge
  // part of what makes a stocked community tank look "right".
  private zoneBand(sp: SpeciesDef, env: SimEnv): [number, number] {
    const h = env.surfaceY - env.floorY;
    switch (sp.zone) {
      case 'top': return [env.floorY + h * 0.68, env.floorY + h * 0.92];
      case 'bottom': return [env.floorY + h * 0.02, env.floorY + h * 0.22];
      default: return [env.floorY + h * 0.3, env.floorY + h * 0.7];
    }
  }

  feed(x: number, z: number, env: SimEnv, kind:FoodKind='normal',
    startY=env.surfaceY-.035): void {
    this.food.scatter(x,z,startY,kind);
    this.feedTimer = 75;
  }

  // Find a fish agent by its stable key (for follow-cam / naming).
  findByKey(key: string): { agent: Agent; sp: SpeciesDef } | null {
    for (const p of this.populations) {
      for (const a of p.agents) if (a.key === key) return { agent: a, sp: p.sp };
    }
    return null;
  }

  agentAt(speciesId: string, instanceId: number): Agent | null {
    const pop = this.populations.find((p) => p.sp.id === speciesId);
    return pop?.agents[instanceId] ?? null;
  }

  update(dt: number, env: SimEnv): void {
    dt = Math.min(dt, 0.05); // clamp to avoid physics explosions on tab-return
    this.feedTimer = Math.max(0, this.feedTimer - dt);
    this.food.update(dt, env.floorY);
    this.updateSplashes(dt);
    // Director is observational and never alters population sizes or persistence.
    const allAgents=this.populations.flatMap(p=>p.agents);
    this.habitat.update(dt,allAgents,env);

    for (const pop of this.populations) {
      const { sp, agents, mesh, dyn } = pop;
      for (const a of agents) {
        if (this.animateDrop(a,dt,env)) {/* New fish enters the water before joining normal swimming. */}
        else if (isCrawler(sp)) {this.updateCrawler(a, dt, env);this.habitat.crawl(a,dt,env);}
        else this.updateFish(a, agents, dt, env);
        if(!isCrawler(sp)&&!a.drop)this.constrain(a,env,dt);
        this.writeInstance(pop, a, dt);
      }
      mesh.instanceMatrix.needsUpdate = true;
      dyn.needsUpdate = true;
    }
  }

  // ── Core fish update ──
  private updateFish(a: Agent, school: Agent[], dt: number, env: SimEnv): void {
    const sp = a.sp;
    const L = a.scale;
    a.feedDistance=undefined;
    a.jawTime=Math.max(0,a.jawTime-dt);
    a.jaw=THREE.MathUtils.damp(a.jaw,a.jawTime>0?1:0,a.jawTime>0?19:11,dt);
    const cruise = sp.swim.cruise * L * SPEED_SCALE; // body-lengths/s → m/s
    const maxSpeed = cruise * sp.swim.burst;

    // — Activity by time of day: nocturnal species invert the rhythm —
    const nocturnal = sp.archetype === 'nocturnal';
    const activity = nocturnal
      ? THREE.MathUtils.lerp(1.15, 0.25, env.dayFactor)
      : THREE.MathUtils.lerp(0.3, 1.0, env.dayFactor);

    // — Mode state machine —
    a.modeT -= dt;
    if (a.modeT <= 0) this.pickMode(a, env, activity);

    const steer = _v1.set(0, 0, 0);

    // 1) Wall avoidance — smooth quadratic push away from glass and surface.
    const angel=sp.id==='angelfish';
    // A large angel in a small aquarium was trapped inside overlapping soft
    // wall margins (.23m for a .1m fish), fighting the hard fin-aware clamp.
    const margin = angel?Math.max(.035,L*.90):Math.max(.065,L*2.3);
    const push = (d: number) => THREE.MathUtils.clamp((margin - d) / margin, 0, 1) ** 2 * 1.6;
    steer.x += push(a.pos.x + env.halfW) - push(env.halfW - a.pos.x);
    steer.z += push(a.pos.z + env.halfD) - push(env.halfD - a.pos.z);
    const safeY=angel?this.verticalClearance(a,env):0;
    steer.y += push(a.pos.y-env.floorY-safeY) -
      push(env.surfaceY-safeY-a.pos.y);

    // 2) Obstacle avoidance (decor keep-out spheres).
    for (const ob of env.obstacles) {
      _v2.copy(a.pos).sub(ob.pos);
      const d = _v2.length();
      if (d < ob.radius + margin + this.collisionRadius(a) && d > 1e-5) {
        steer.addScaledVector(_v2.divideScalar(d), ((ob.radius + margin + this.collisionRadius(a) - d) / Math.max(ob.radius,.025)) * 1.3);
      }
    }

    // 3) Depth-band preference — a soft pull back into the species' layer.
    //    Suspended during an air-gulp run: the whole point is leaving the zone.
    if (!a.gulp) {
      const [y0, y1] = this.zoneBand(sp, env);
      if (a.pos.y < y0) steer.y += (y0 - a.pos.y) * 1.6;
      if (a.pos.y > y1) steer.y -= (a.pos.y - y1) * 1.6;
    }

    // Air-gulp phase transitions: reached the surface → gulp, dive back down;
    // reached the bottom again → settle back into foraging.
    if (a.gulp === 'up' && a.pos.y > env.surfaceY - L * 2.2) {
      a.gulp = 'down';
      a.mode = 'dart';
      a.modeT = 3;
      a.anchor.set(
        a.pos.x + (Math.random() - 0.5) * 0.1,
        env.floorY + L,
        a.pos.z + (Math.random() - 0.5) * 0.1
      );
    } else if (a.gulp === 'down' && a.pos.y < env.floorY + L * 2) {
      a.gulp = undefined;
      a.mode = 'forage';
      a.modeT = 2 + Math.random() * 3;
    }

    // 4) Boids for schooling species (RESEARCH.md §3.3).
    if (sp.archetype === 'schooler' && school.length > 1) {
      this.boids(a, school, steer, L);
    }

    // 5) Archetype flavor.
    this.archetypeSteer(a, steer, env, activity);

    // One event at most can steer a fish through a measured corridor.
    this.habitat.steer(a,steer,dt,env);

    // 6) Feeding overrides almost everything — fish RACE for food.
    if (this.feedTimer > 0 && this.food.active && (a.mode !== 'rest' || this.food.hasCookie)) {
      const bottomFeeder = sp.zone === 'bottom';
      const target = this.food.nearest(a.pos, Math.max(.17,L*6), bottomFeeder);
      if (target) {
        this.habitat.cancelFor(a); // feeding outranks a sightseeing event
        const special=target.kind!=='normal';
        _v2.copy(target.pos).sub(a.pos);
        const d = _v2.length();
        // Food is detected locally, approached with a gradual slowdown and
        // only swallowed when it reaches the fish's mouth region.
        a.feedDistance=d;
        if(d<L*.43+(.003)){ 
          this.food.eat(target);
          a.jawTime=.24;
          a.mode='feed';a.modeT=.26;a.gulp=undefined;
        } else if(d>1e-6){
          const dir=_v2.divideScalar(d);
          const forward=a.vel.lengthSq()>1e-6?dir.dot(a.vel.clone().normalize()):1;
          // Do not spin 180 degrees instantly for a pellet directly behind the fish.
          if(forward>-.65||d<L*1.8){
            if(d<L*1.2)a.jawTime=Math.max(a.jawTime,.085);
            steer.addScaledVector(dir,special?3.15:2.35);
            a.mode='feed';a.modeT=Math.max(a.modeT,.45);
          }
        }
      }
    }

    // 7) Current: drift with the flow, and face into it when it's strong
    //    (rheotaxis) — sells "there is real water in this box".
    env.current.sample(a.pos, _v2);
    a.pos.addScaledVector(_v2, dt);
    const flow = _v2.length();
    if (flow > 0.03) steer.addScaledVector(_v2.normalize(), -0.25);

    // 8) Species movement personality without changing boids/collisions.
    const t=env.time*(env.reducedMotion?.5:1);
    if(sp.id==='guppy'){
      steer.y+=Math.sin(t*.73+a.rand*24)*.16;
      steer.x+=Math.sin(t*.85+a.rand*18)*.14;
    }else if(sp.id==='betta'||sp.id==='angelfish'){
      steer.y+=Math.sin(t*.33+a.rand*25)*.055;
    }else if(sp.id==='ocellaris-clown'){
      steer.x+=Math.cos(t*.8+a.rand*11)*.10;
      steer.y+=Math.sin(t*.63+a.rand*19)*.11;
    }else if(sp.id==='blue-tang'||sp.id==='yellow-tang'){
      steer.z+=Math.sin(t*.58+a.rand*21)*.09;
    }else if(sp.id==='dwarf-gourami'||sp.id==='honey-gourami'){
      steer.y+=Math.sin(t*.39+a.rand*14)*.065;
    }else if(sp.id.includes('corydoras')&&a.mode==='forage'){
      steer.y-=.13;
      steer.x+=Math.sin(t*1.7+a.rand*13)*.24;
    }else if(sp.archetype==='schooler'){
      steer.z+=Math.sin(t*1.13+a.rand*18)*.13;
    }
    steer.x += Math.sin(t * 0.7 + a.rand * 40) * 0.22;
    steer.z += Math.cos(t * 0.53 + a.rand * 71) * 0.22;
    steer.y += Math.sin(t * 0.41 + a.rand * 23) * 0.1;

    // — Integrate: steer → velocity, with mode-dependent target speed —
    let targetSpeed=cruise*activity;
    // Visual tempo by species, separate from shared movement archetypes.
    if(sp.id==='betta')targetSpeed*=.77;
    if(angel)targetSpeed*=1.06;
    if(sp.id==='guppy')targetSpeed*=1.08;
    if(sp.id==='ocellaris-clown')targetSpeed*=.88;
    if(sp.id==='dwarf-gourami'||sp.id==='honey-gourami')targetSpeed*=.82;
    if (a.mode === 'rest') targetSpeed = cruise * (angel?.42:.06);
    if(a.mode==='dart')
      targetSpeed=maxSpeed*(sp.id==='betta'?.63:sp.id==='angelfish'?.72:1);
    if(a.mode==='feed'){
      targetSpeed=cruise*(this.food.hasCookie?1.50:1.20);
      if(a.feedDistance!==undefined){
        const slowing=THREE.MathUtils.clamp(a.feedDistance/(L*2.6),.22,1);
        targetSpeed*=slowing;
      }
    }
    if (a.mode === 'forage') targetSpeed = cruise * 0.4;
    // A mild, comfortable ecology subtly changes activity, never stops swimming.
    if(env.ecoMode==='natural')targetSpeed*=Math.max(.86,Math.min(1.03,env.ecoComfort??1));
    if(env.ecoMode==='natural'&&a.mode==='rest')targetSpeed*=.75;

    const steerStrength = a.mode === 'dart' ? 4 : 1.8;
    a.vel.addScaledVector(steer, dt * steerStrength * Math.max(cruise, 0.05) * 6);

    // Clamp speed toward the target (fish accelerate fast, decelerate gently).
    const speed = a.vel.length();
    if (speed > 1e-6) {
      const newSpeed = THREE.MathUtils.damp(speed, targetSpeed, 2.2, dt);
      a.vel.multiplyScalar(newSpeed / speed);
    } else {
      a.vel.set(0.01, 0, 0);
    }
    // Fish barely pitch — flatten vertical motion a little (except a cory
    // rocketing for air, which climbs as steeply as it likes).
    if (!a.gulp) a.vel.y *= 1 - 0.6 * dt;

    a.pos.addScaledVector(a.vel, dt);

    // Body-aware containment and solid collision are resolved after this step
    // in update(), keeping the direction field and physical boundary separate.
  }

  private pickMode(a: Agent, env: SimEnv, activity: number): void {
    const sp = a.sp;
    const r = Math.random();
    // Gentle emergent behavior, one short activity at a time. No fish death,
    // breeding or forced maintenance in either mode.
    if(env.ecoMode==='natural'){
      const p=Math.random();
      if((sp.archetype==='bottom'||sp.archetype==='cleaner')&&p<.20){
        a.mode='forage';a.modeT=3+Math.random()*5;
        this.newAnchorNear(a,env,.20);
        this.onEcoEvent?.('graze');
        return;
      }
      if((sp.archetype==='solitary'||sp.archetype==='ambusher'
          ||sp.archetype==='hoverer')&&p<(sp.id==='angelfish'?.055:.16)){
        a.mode='rest';a.modeT=4+Math.random()*7;
        if(sp.id==='angelfish')a.anchor.copy(a.pos);
        else this.anchorToShelter(a,env);
        this.onEcoEvent?.(env.shelters.length?'shelter':'rest');
        return;
      }
      if(sp.archetype==='schooler'&&p<.045&&!env.reducedMotion){
        a.mode='dart';a.modeT=.35+.35*Math.random();
        this.onEcoEvent?.('school');
        return;
      }
    }
    switch (sp.archetype) {
      case 'schooler':
        // Mostly cruise; rare group-startling darts.
        if (r < 0.06 && !env.reducedMotion) { a.mode = 'dart'; a.modeT = 0.5; }
        else { a.mode = 'cruise'; a.modeT = 3 + Math.random() * 6; }
        break;
      case 'solitary':
        // Patrol between points of a territory.
        a.mode = r < 0.25 ? 'rest' : 'cruise';
        a.modeT = 3 + Math.random() * 5;
        if (a.mode === 'cruise') this.newAnchorNear(a, env, 0.6);
        break;
      case 'bottom':
        a.gulp = undefined;
        a.mode = r < 0.55 ? 'forage' : 'cruise';
        a.modeT = 2 + Math.random() * 5;
        if (r > 0.9 && sp.id.includes('corydoras')) {
          // The famous cory air gulp: rocket straight to the surface, grab a
          // mouthful of air, then dive right back to the bottom.
          a.mode = 'dart';
          a.gulp = 'up';
          a.anchor.set(a.pos.x, env.surfaceY - 0.02, a.pos.z);
          a.modeT = 5;
        } else this.newAnchorNear(a, env, 0.4);
        break;
      case 'hoverer':
        // Angelfish hover while still moving forward with their pectorals.
        // Six-second nearly-frozen rests looked like a stuck, twitching mesh.
        a.mode=r<(sp.id==='angelfish'?.12:.6)?'rest':'cruise';
        a.modeT=sp.id==='angelfish'?3+Math.random()*4:4+Math.random()*6;
        if(a.mode==='cruise')this.newAnchorNear(a,env,.5);
        else if(sp.id==='angelfish')a.anchor.copy(a.pos);
        break;
      case 'ambusher':
        if (r < 0.75 * (2 - activity)) { a.mode = 'rest'; a.modeT = 6 + Math.random() * 10; this.anchorToShelter(a, env); }
        else { a.mode = 'dart'; a.modeT = 0.8; this.newAnchorNear(a, env, 0.9); }
        break;
      case 'nocturnal':
        if (activity < 0.6) { a.mode = 'rest'; a.modeT = 8 + Math.random() * 8; this.anchorToShelter(a, env); }
        else { a.mode = r < 0.4 ? 'forage' : 'cruise'; a.modeT = 3 + Math.random() * 4; this.newAnchorNear(a, env, 0.5); }
        break;
      case 'surface':
        if (r < 0.12 && !env.reducedMotion) { a.mode = 'dart'; a.modeT = 0.4; }
        else { a.mode = 'cruise'; a.modeT = 2 + Math.random() * 4; }
        break;
      case 'cleaner':
        a.mode = r < 0.7 ? 'forage' : 'cruise';
        a.modeT = 2 + Math.random() * 4;
        if (a.mode === 'cruise') this.newAnchorNear(a, env, 0.25);
        break;
    }
  }

  private newAnchorNear(a: Agent, env: SimEnv, range: number): void {
    const [y0, y1] = this.zoneBand(a.sp, env);
    // Angelfish are tall: randomly sampled anchors must be reachable by the
    // full fin envelope. Try free swimming pockets rather than a position
    // behind the nearest log collider.
    const angel=a.sp.id==='angelfish';
    const safeY=angel?this.verticalClearance(a,env)+.014:0;
    const lo=Math.max(y0,env.floorY+safeY);
    const hi=Math.max(lo,Math.min(y1,env.surfaceY-safeY));
    const baseline=a.pos.clone();
    for(let attempt=0;attempt<(angel?18:1);attempt++){
      const nx=THREE.MathUtils.clamp(baseline.x+(Math.random()-.5)*env.halfW*2*range,
        -env.halfW*.72,env.halfW*.72);
      const nz=THREE.MathUtils.clamp(baseline.z+(Math.random()-.5)*env.halfD*2*range,
        -env.halfD*.68,env.halfD*.68);
      const ny=THREE.MathUtils.lerp(lo,hi,Math.random());
      a.anchor.set(nx,ny,nz);
      if(!angel||env.obstacles.every(ob=>a.anchor.distanceTo(ob.pos)>
        ob.radius+this.collisionRadius(a)+.035))break;
    }
  }

  private anchorToShelter(a: Agent, env: SimEnv): void {
    if (env.shelters.length > 0) {
      const s = env.shelters[Math.floor(a.rand * env.shelters.length) % env.shelters.length];
      a.anchor.copy(s).add(_v3.set((a.rand - 0.5) * 0.15, 0.02 + a.rand * 0.05, (a.rand - 0.5) * 0.15));
    } else {
      a.anchor.set(a.pos.x, env.floorY + 0.03, a.pos.z);
    }
  }

  // Reynolds boids with research-backed weights: separation 2.0 dominates,
  // alignment/cohesion 0.5 each, cohesion radius > separation radius, and a
  // rear blind spot (fish can't see directly behind themselves).
  private boids(a: Agent, school: Agent[], steer: THREE.Vector3, L: number): void {
    const sepR = L * 1.6, cohR = L * 7;
    const sep = _v2.set(0, 0, 0);
    const ali = _v3.set(0, 0, 0);
    const coh = new THREE.Vector3();
    let nSep = 0, nCoh = 0;
    for (const b of school) {
      if (b === a) continue;
      const dx = b.pos.x - a.pos.x, dy = b.pos.y - a.pos.y, dz = b.pos.z - a.pos.z;
      const d2 = dx * dx + dy * dy + dz * dz;
      if (d2 > cohR * cohR || d2 < 1e-8) continue;
      // Field-of-view check: skip neighbors in the blind cone behind us.
      const dot = (dx * a.vel.x + dy * a.vel.y + dz * a.vel.z);
      if (dot < 0 && d2 > sepR * sepR) continue;
      const d = Math.sqrt(d2);
      if (d < sepR) {
        // 1/r weighting: the closer the neighbor, the harder we push apart.
        sep.x -= (dx / d) * (sepR - d) / sepR;
        sep.y -= (dy / d) * (sepR - d) / sepR;
        sep.z -= (dz / d) * (sepR - d) / sepR;
        nSep++;
      }
      ali.add(b.vel);
      coh.set(coh.x + dx, coh.y + dy, coh.z + dz);
      nCoh++;
    }
    if (nSep > 0) steer.addScaledVector(sep.normalize(), 2.0);
    if (nCoh > 0) {
      steer.addScaledVector(ali.normalize(), 0.5);
      steer.addScaledVector(coh.normalize(), 0.5);
    }
  }

  private archetypeSteer(a: Agent, steer: THREE.Vector3, env: SimEnv, activity: number): void {
    // Pull toward the current anchor (territory point, forage spot, shelter…).
    // An air-gulp run pulls MUCH harder — it's a sprint, not a stroll.
    const anchorPull = a.gulp
      ? 3.5
      : { schooler: 0.15, solitary: 0.6, bottom: 0.8, hoverer: 0.5, ambusher: 1.4, nocturnal: 0.9, surface: 0.2, cleaner: 1.6 }[a.sp.archetype];
    _v2.copy(a.anchor).sub(a.pos);
    const d = _v2.length();
    if(d>(a.sp.id==='angelfish'?.018:.05))
      steer.addScaledVector(_v2.divideScalar(d),
        anchorPull*(a.sp.id==='angelfish'?2.5:1)*Math.min(1,d*(a.sp.id==='angelfish'?5:2)));

    // Bottom dwellers snub the water column: extra downward preference while foraging.
    if ((a.sp.archetype === 'bottom' || a.sp.archetype === 'nocturnal') && a.mode === 'forage') {
      steer.y -= 0.5;
    }
    // Surface fish hug the film.
    if (a.sp.archetype === 'surface') {
      steer.y += (env.surfaceY - 0.04 - a.pos.y) * 3;
    }
  }

  // ── Crawlers: snails & hillstream loaches on glass or substrate ──
  private updateCrawler(a: Agent, dt: number, env: SimEnv): void {
    // Snails ooze along; hillstream loaches graze in place, then scoot.
    const isLoach = a.sp.id.includes('hillstream');
    let speed = 0.004;
    if(env.ecoMode==='natural'&&!isLoach){
      // Snails intermittently graze on glass instead of gliding nonstop.
      a.modeT-=dt;
      if(a.modeT<=0){
        a.mode=a.mode==='forage'?'rest':'forage';
        a.modeT=a.mode==='rest'?1.5+Math.random()*3:4+Math.random()*7;
        if(a.mode==='forage')this.onEcoEvent?.('graze');
      }
      if(a.mode==='rest')speed=.00035;
    }
    if (isLoach) {
      a.modeT -= dt;
      if (a.modeT <= 0) {
        // Alternate long grazing pauses with short darts across the glass.
        a.mode = a.mode === 'dart' ? 'forage' : 'dart';
        a.modeT = a.mode === 'dart' ? 0.5 + Math.random() : 3 + Math.random() * 6;
        if (a.mode === 'dart') a.crawlDir = Math.random() * TAU;
      }
      speed = a.mode === 'dart' ? 0.06 : 0.003;
    }
    a.crawlDir! += (Math.random() - 0.5) * dt * 0.8;
    const dir = a.crawlDir!;
    if (a.wall === 'floor') {
      a.pos.y = env.floorY + 0.002;
      a.pos.x += Math.cos(dir) * speed * dt;
      a.pos.z += Math.sin(dir) * speed * dt;
      a.pos.x = THREE.MathUtils.clamp(a.pos.x, -env.halfW * 0.95, env.halfW * 0.95);
      a.pos.z = THREE.MathUtils.clamp(a.pos.z, -env.halfD * 0.95, env.halfD * 0.95);
    } else {
      // Glass grazing: constrained to a wall plane, crawling in 2D.
      const u = Math.cos(dir) * speed * dt;
      const v = Math.sin(dir) * speed * dt;
      if (a.wall === 'back') { a.pos.z = -env.halfD + 0.006; a.pos.x += u; a.pos.y += v; }
      if (a.wall === 'left') { a.pos.x = -env.halfW + 0.006; a.pos.z += u; a.pos.y += v; }
      if (a.wall === 'right') { a.pos.x = env.halfW - 0.006; a.pos.z += u; a.pos.y += v; }
      a.pos.y = THREE.MathUtils.clamp(a.pos.y, env.floorY + 0.03, env.surfaceY - 0.04);
      a.pos.x = THREE.MathUtils.clamp(a.pos.x, -env.halfW * 0.95, env.halfW * 0.95);
      a.pos.z = THREE.MathUtils.clamp(a.pos.z, -env.halfD * 0.95, env.halfD * 0.95);
      // Bounce the crawl direction at the edges so they keep moving.
      if (a.pos.y >= env.surfaceY - 0.041 || a.pos.y <= env.floorY + 0.031) a.crawlDir! = -dir;
    }
    // Velocity is only used for orientation + tail-beat pacing here.
    a.vel.set(Math.cos(dir), 0, Math.sin(dir)).multiplyScalar(Math.max(speed, 0.001));
  }

  // Compose the instance matrix + shader attributes for one agent.
  private writeInstance(pop: Population, a: Agent, dt: number): void {
    const sp = a.sp;
    const speed = a.vel.length();

    let yaw: number, pitch: number, up: THREE.Vector3 | null = null;
    if (isCrawler(sp) && a.wall && a.wall !== 'floor') {
      // On the glass: belly against the pane (local +Y along the wall normal),
      // nose pointing along the crawl direction within the pane.
      yaw = a.crawlDir!;
      pitch = 0;
      up = _v3.set(a.wall === 'back' ? 0 : a.wall === 'left' ? 1 : -1, 0, a.wall === 'back' ? 1 : 0);
    } else {
      // Limit body heading rate, avoiding robotic instantaneous 180° spins.
      const horizontal=Math.hypot(a.vel.x,a.vel.z);
      // Near-zero horizontal movement used to flip atan2 by 180° every frame
      // while the fish hovered against the glass. Hold the last stable heading.
      const desiredYaw=sp.id==='angelfish'&&horizontal<.0035?
        a.prevYaw:Math.atan2(-a.vel.z,a.vel.x);
      let difference=desiredYaw-a.prevYaw;
      while(difference>Math.PI)difference-=TAU;
      while(difference<-Math.PI)difference+=TAU;
      const turnRate=sp.swim.turnRate*dt*(sp.id==='betta'?.67:sp.id==='angelfish'?.43:1);
      yaw=a.prevYaw+THREE.MathUtils.clamp(difference,-turnRate,turnRate);
      pitch = Math.asin(THREE.MathUtils.clamp(speed > 1e-5 ? a.vel.y / speed : 0, -1, 1));
      // Normal swimming stays near level; an air-gulping cory points steeply.
      const maxPitch = a.gulp ? 1.25 : 0.5;
      pitch=THREE.MathUtils.clamp(pitch,-maxPitch,
        sp.id==='angelfish'?.19:maxPitch);
      if(sp.id==='angelfish')pitch=THREE.MathUtils.damp(a.prevPitch,pitch,2.8,dt);
    }

    // Bank into turns: roll proportional to yaw rate × speed (RESEARCH.md §3.2).
    let dYaw = yaw - a.prevYaw;
    if (dYaw > Math.PI) dYaw -= TAU;
    if (dYaw < -Math.PI) dYaw += TAU;
    a.prevYaw = yaw;
    a.prevPitch = pitch;
    const targetRoll=THREE.MathUtils.clamp((-dYaw/Math.max(dt,1e-4))*
      speed*(sp.id==='angelfish'?.55:1.4),
      sp.id==='angelfish'?-.18:-.6,sp.id==='angelfish'?.18:.6);
    a.bend = THREE.MathUtils.damp(a.bend, THREE.MathUtils.clamp((dYaw / Math.max(dt, 1e-4)) * 0.5, -0.5, 0.5), 6, dt);

    _e.set(targetRoll * 0.6, yaw, pitch, 'YZX');
    _q.setFromEuler(_e);
    if (up) {
      // Align object +Y to the wall normal (snail-on-glass).
      _q.setFromUnitVectors(_v2.set(0, 1, 0), up.normalize());
    }

    _m.compose(a.pos, _q, _s.set(a.scale, a.scale, a.scale));
    pop.mesh.setMatrixAt(a.index, _m);

    // Tail-beat frequency follows speed (U ≈ 0.7·L·f  →  f = U / 0.7·L).
    const L = a.scale;
    const f = sp.swim.freqBase * 0.35 + speed / (0.7 * L + 1e-6);
    a.phase += TAU * Math.min(f, 14) * dt;
    // Pectoral flutter fades in as forward speed fades out.
    const speedFactor = THREE.MathUtils.clamp(speed / (sp.swim.cruise * L * SPEED_SCALE + 1e-6), 0, 1);
    a.flap = THREE.MathUtils.damp(a.flap, 1 - speedFactor * 0.85, 4, dt);

    pop.dyn.setXYZW(a.index, a.phase, a.bend, a.flap, a.jaw);
  }
}
