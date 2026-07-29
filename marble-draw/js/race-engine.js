import * as THREE from 'three';
import * as RAPIER from '@dimforge/rapier3d-compat';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {seededShuffle,seededRng} from './crypto-utils.js';

const COLORS=['#f04f5f','#ff9f43','#ffd43b','#78c257','#35b7a5','#4ca6e8','#6e7ee8','#9b65d6','#d85cb1','#8b6b55'];
const START_Z=-9.2,FINISH_Z=13.1;

export class MarbleRaceEngine{
  constructor(canvas,{quality='medium',volume=.6,sound=true}={}){
    this.canvas=canvas;this.quality=quality;this.volume=volume;this.sound=sound;
    this.scene=null;this.camera=null;this.renderer=null;this.world=null;this.eventQueue=null;
    this.marbles=[];this.trackObjects=[];this.animFrame=0;this.running=false;this.initialized=false;
    this.fixed=1/120;this.accumulator=0;this.lastTime=0;this.finishOrder=[];this.sensorHandle=null;
    this.marbleColliderMap=new Map();this.rotors=[];this.listeners={};this.abortController=null;
  }
  async init(){
    if(this.initialized)return;
    await RAPIER.init();
    this.scene=new THREE.Scene();
    this.scene.background=new THREE.Color('#dcece6');
    this.scene.fog=new THREE.Fog('#dcece6',22,55);
    this.camera=new THREE.PerspectiveCamera(38,1,.1,100);
    this.camera.position.set(14,12,20);this.camera.lookAt(0,0,2);
    const pixelRatio=this.quality==='high'?Math.min(devicePixelRatio,2):this.quality==='low'?1:Math.min(devicePixelRatio,1.5);
    this.renderer=new THREE.WebGLRenderer({canvas:this.canvas,antialias:this.quality!=='low',powerPreference:'high-performance'});
    this.renderer.setPixelRatio(pixelRatio);this.renderer.shadowMap.enabled=this.quality!=='low';
    this.renderer.shadowMap.type=THREE.PCFSoftShadowMap;this.renderer.outputColorSpace=THREE.SRGBColorSpace;
    this.resize();
    this.scene.add(new THREE.HemisphereLight(0xffffff,0x47685c,2.2));
    const sun=new THREE.DirectionalLight(0xffffff,3);sun.position.set(7,18,-6);sun.castShadow=this.quality!=='low';
    sun.shadow.mapSize.set(this.quality==='high'?2048:1024,this.quality==='high'?2048:1024);this.scene.add(sun);
    this.initialized=true;
    this.resizeHandler=()=>this.resize();window.addEventListener('resize',this.resizeHandler);
  }
  resize(){
    if(!this.renderer)return;const rect=this.canvas.getBoundingClientRect();const w=Math.max(1,rect.width||innerWidth),h=Math.max(1,rect.height||innerHeight);
    this.renderer.setSize(w,h,false);this.camera.aspect=w/h;this.camera.updateProjectionMatrix();
  }
  async prepare(seed){
    await this.init();this.stop();this.clearWorld();
    this.world=new RAPIER.World({x:0,y:-9.81,z:0});this.world.timestep=this.fixed;this.eventQueue=new RAPIER.EventQueue(true);
    this.finishOrder=[];this.marbleColliderMap.clear();this.rotors=[];this.buildTrack();
    await this.loadDecorativeAssets();
    const positions=await seededShuffle([...Array(10).keys()],`${seed}|start-positions`);
    const rng=await seededRng(`${seed}|start-jitter`);
    positions.forEach((digit,slot)=>this.createMarble(digit,slot,rng));
    this.updateMeshes();this.renderOnce();return positions;
  }
  buildTrack(){
    const mat=new THREE.MeshStandardMaterial({color:'#e9f3ef',roughness:.48,metalness:.03});
    const wallMat=new THREE.MeshStandardMaterial({color:'#78bda3',roughness:.55});
    const startY=7.6,segmentLength=4.3,drop=2.15,angle=Math.atan2(drop,segmentLength);
    for(let i=0;i<6;i++){
      const z=-7.2+i*segmentLength;const y=startY-i*drop-drop/2;
      this.addFixedBox({x:0,y,z,w:10.8,h:.35,d:segmentLength+.15,rx:angle,material:mat});
      this.addFixedBox({x:-5.55,y:y+.65,z,w:.35,h:1.55,d:segmentLength+.2,rx:angle,material:wallMat});
      this.addFixedBox({x:5.55,y:y+.65,z,w:.35,h:1.55,d:segmentLength+.2,rx:angle,material:wallMat});
    }
    // Pegboard vật lý: tất cả cọc giống nhau, tạo nhiều lựa chọn đường đi.
    const pegMat=new THREE.MeshStandardMaterial({color:'#f2b45e',roughness:.42});
    for(let row=0;row<5;row++){
      const z=-3.1+row*3.0;const baseY=5.45-row*1.5;
      const offset=row%2?.55:0;
      for(let col=-4;col<=4;col++){
        const x=col*1.15+offset;if(Math.abs(x)>4.8)continue;
        this.addFixedCylinder({x,y:baseY+.48,z,r:.18,half:.62,material:pegMat});
      }
    }
    // Hai bộ chia đường công khai.
    const dividerMat=new THREE.MeshStandardMaterial({color:'#79aee8',roughness:.35});
    this.addFixedBox({x:-1.65,y:2.45,z:2.1,w:.22,h:.8,d:3.2,ry:.48,rx:angle,material:dividerMat});
    this.addFixedBox({x:1.65,y:2.45,z:2.1,w:.22,h:.8,d:3.2,ry:-.48,rx:angle,material:dividerMat});
    // Mâm quay/cánh quạt kinematic tác động công khai lên mọi viên trong khu vực.
    this.createRotor({x:0,y:.65,z:7.0});
    // Cổng xuất phát.
    const gateBody=this.world.createRigidBody(RAPIER.RigidBodyDesc.fixed().setTranslation(0,7.2,-8.0));
    const gateDesc=RAPIER.ColliderDesc.cuboid(5.3,.8,.18).setFriction(.4);
    this.gateCollider=this.world.createCollider(gateDesc,gateBody);this.gateBody=gateBody;
    const gateMesh=new THREE.Mesh(new THREE.BoxGeometry(10.6,1.6,.36),new THREE.MeshStandardMaterial({color:'#e86060',roughness:.4}));
    gateMesh.position.set(0,7.2,-8);gateMesh.castShadow=true;this.scene.add(gateMesh);this.trackObjects.push(gateMesh);this.gateMesh=gateMesh;
    // Cảm biến đích.
    const sensorBody=this.world.createRigidBody(RAPIER.RigidBodyDesc.fixed().setTranslation(0,-5.5,FINISH_Z));
    const sensorDesc=RAPIER.ColliderDesc.cuboid(5.4,2.2,.18).setSensor(true).setActiveEvents(RAPIER.ActiveEvents.COLLISION_EVENTS);
    const sensor=this.world.createCollider(sensorDesc,sensorBody);this.sensorHandle=sensor.handle;
    const finishVisual=new THREE.Mesh(new THREE.BoxGeometry(10.8,.12,.45),new THREE.MeshStandardMaterial({color:'#f5c94a',emissive:'#9b7610',emissiveIntensity:.35}));
    finishVisual.position.set(0,-5.15,FINISH_Z);this.scene.add(finishVisual);this.trackObjects.push(finishVisual);
    // Sàn gom bi sau đích.
    this.addFixedBox({x:0,y:-6.2,z:14.6,w:11,h:.35,d:3,material:mat});
    // Trang trí nền.
    const base=new THREE.Mesh(new THREE.PlaneGeometry(80,80),new THREE.MeshStandardMaterial({color:'#c8ded5',roughness:1}));
    base.rotation.x=-Math.PI/2;base.position.y=-7;base.receiveShadow=true;this.scene.add(base);this.trackObjects.push(base);
  }
  addFixedBox({x,y,z,w,h,d,rx=0,ry=0,rz=0,material}){
    const q=new THREE.Quaternion().setFromEuler(new THREE.Euler(rx,ry,rz));
    const body=this.world.createRigidBody(RAPIER.RigidBodyDesc.fixed().setTranslation(x,y,z).setRotation(q));
    const collider=this.world.createCollider(RAPIER.ColliderDesc.cuboid(w/2,h/2,d/2).setFriction(.55),body);
    const mesh=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),material);mesh.position.set(x,y,z);mesh.quaternion.copy(q);mesh.receiveShadow=true;mesh.castShadow=this.quality!=='low';
    this.scene.add(mesh);this.trackObjects.push(mesh);return{body,collider,mesh};
  }
  addFixedCylinder({x,y,z,r,half,material}){
    const body=this.world.createRigidBody(RAPIER.RigidBodyDesc.fixed().setTranslation(x,y,z));
    this.world.createCollider(RAPIER.ColliderDesc.cylinder(half,r).setFriction(.45),body);
    const mesh=new THREE.Mesh(new THREE.CylinderGeometry(r,r,half*2,16),material);mesh.position.set(x,y,z);mesh.castShadow=true;this.scene.add(mesh);this.trackObjects.push(mesh);
  }
  createRotor({x,y,z}){
    const body=this.world.createRigidBody(RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(x,y,z));
    const group=new THREE.Group();group.position.set(x,y,z);
    const mat=new THREE.MeshStandardMaterial({color:'#925fd0',roughness:.35});
    for(let i=0;i<4;i++){
      const angle=i*Math.PI/2;const q=new THREE.Quaternion().setFromEuler(new THREE.Euler(0,angle,0));
      const desc=RAPIER.ColliderDesc.cuboid(2.2,.25,.18).setTranslation(Math.cos(angle)*2.0,0,Math.sin(angle)*2.0).setRotation(q).setFriction(.4);
      this.world.createCollider(desc,body);
      const arm=new THREE.Mesh(new THREE.BoxGeometry(4.4,.5,.36),mat);arm.rotation.y=angle;group.add(arm);
    }
    this.scene.add(group);this.trackObjects.push(group);this.rotors.push({body,group,angle:0,speed:.75});
  }
  createMarble(digit,slot,rng){
    const radius=.38;const x=-4.05+slot*.9;const z=START_Z-(rng()-.5)*.05;const y=8.25+(rng()-.5)*.02;
    const body=this.world.createRigidBody(RAPIER.RigidBodyDesc.dynamic().setTranslation(x,y,z).setCanSleep(false).setCcdEnabled(true).setLinearDamping(.015).setAngularDamping(.015));
    const desc=RAPIER.ColliderDesc.ball(radius).setDensity(1).setRestitution(.12).setFriction(.12).setActiveEvents(RAPIER.ActiveEvents.COLLISION_EVENTS);
    const collider=this.world.createCollider(desc,body);this.marbleColliderMap.set(collider.handle,digit);
    const group=new THREE.Group();const ball=new THREE.Mesh(new THREE.SphereGeometry(radius,32,24),new THREE.MeshStandardMaterial({color:COLORS[digit],roughness:.22,metalness:.08}));ball.castShadow=true;group.add(ball);
    const label=this.makeLabel(String(digit));label.position.set(0,.62,0);group.add(label);group.position.set(x,y,z);this.scene.add(group);
    this.marbles.push({digit,body,collider,group,finished:false,finishTime:null});
  }
  makeLabel(text){
    const canvas=document.createElement('canvas');canvas.width=128;canvas.height=128;const ctx=canvas.getContext('2d');ctx.fillStyle='rgba(255,255,255,.94)';ctx.beginPath();ctx.arc(64,64,50,0,Math.PI*2);ctx.fill();ctx.strokeStyle='#173a30';ctx.lineWidth=5;ctx.stroke();ctx.fillStyle='#173a30';ctx.font='900 66px system-ui';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(text,64,68);
    const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;const sprite=new THREE.Sprite(new THREE.SpriteMaterial({map:texture,transparent:true,depthTest:false}));sprite.scale.set(.8,.8,.8);return sprite;
  }
  async loadDecorativeAssets(){
    const loader=new GLTFLoader();
    const items=[['../assets/models/starter.glb',new THREE.Vector3(0,7.6,-9.2),new THREE.Vector3(0,Math.PI/2,0),.85],['../assets/models/ring-long.glb',new THREE.Vector3(0,-1.0,9.0),new THREE.Vector3(0,Math.PI/2,0),1.4]];
    await Promise.all(items.map(async([url,pos,rot,scale])=>{try{const gltf=await loader.loadAsync(new URL(url,import.meta.url));const obj=gltf.scene;obj.position.copy(pos);obj.rotation.set(rot.x,rot.y,rot.z);obj.scale.setScalar(scale);obj.traverse(n=>{if(n.isMesh){n.castShadow=this.quality!=='low';n.receiveShadow=true}});this.scene.add(obj);this.trackObjects.push(obj)}catch(e){console.warn('Không tải được asset trang trí:',url,e)}}));
  }
  async run({seed,onCountdown=()=>{},onUpdate=()=>{},onFinish=()=>{},onStatus=()=>{}}={}){
    await this.prepare(seed);this.listeners={onCountdown,onUpdate,onFinish,onStatus};
    for(let n=3;n>=1;n--){onCountdown(n);this.playTone(420+n*100,.13);await wait(760)}onCountdown(0);await wait(250);
    this.releaseGate();this.playTone(220,.25);this.running=true;this.startPerf=performance.now();this.lastTime=performance.now();this.accumulator=0;onStatus('Cuộc đua đã bắt đầu. Kết quả được xác định tại cảm biến đích.');
    return new Promise((resolve,reject)=>{this.raceResolve=resolve;this.raceReject=reject;this.loop();this.timeoutId=setTimeout(()=>this.timeoutRace(),35000)});
  }
  releaseGate(){
    if(this.gateBody){this.world.removeRigidBody(this.gateBody);this.gateBody=null;}
    if(this.gateMesh){this.scene.remove(this.gateMesh);this.gateMesh.geometry.dispose();this.gateMesh.material.dispose();this.gateMesh=null;}
  }
  loop(){
    if(!this.running)return;const now=performance.now();const delta=Math.min(.05,(now-this.lastTime)/1000);this.lastTime=now;this.accumulator+=delta;
    let steps=0;while(this.accumulator>=this.fixed&&steps<8){this.stepPhysics();this.accumulator-=this.fixed;steps++}
    this.updateMeshes();this.updateCamera();this.renderOnce();this.emitUpdate();this.animFrame=requestAnimationFrame(()=>this.loop());
  }
  stepPhysics(){
    const elapsed=(performance.now()-this.startPerf)/1000;
    for(const r of this.rotors){r.angle+=r.speed*this.fixed;const q=new THREE.Quaternion().setFromEuler(new THREE.Euler(0,r.angle,0));r.body.setNextKinematicRotation(q);r.group.quaternion.copy(q)}
    this.world.step(this.eventQueue);
    this.eventQueue.drainCollisionEvents((h1,h2,started)=>{if(!started)return;let marbleHandle=null;if(h1===this.sensorHandle)marbleHandle=h2;else if(h2===this.sensorHandle)marbleHandle=h1;if(marbleHandle!==null&&this.marbleColliderMap.has(marbleHandle))this.recordFinish(this.marbleColliderMap.get(marbleHandle),elapsed)});
    // Fallback hình học nếu một phiên bản Rapier không phát event sensor như dự kiến.
    for(const marble of this.marbles){const p=marble.body.translation();if(!marble.finished&&p.z>=FINISH_Z-.05)this.recordFinish(marble.digit,elapsed)}
  }
  recordFinish(digit,time){
    const marble=this.marbles.find(m=>m.digit===digit);if(!marble||marble.finished)return;marble.finished=true;marble.finishTime=time;this.finishOrder.push({digit,time:Number(time.toFixed(4))});this.playTone(this.finishOrder.length===1?960:650,.1);
    if(this.finishOrder.length===1){this.firstFinishAt=performance.now();this.listeners.onStatus(`Viên số ${digit} đã chạm cảm biến đích đầu tiên.`)}
    if(this.finishOrder.length===10||(this.firstFinishAt&&performance.now()-this.firstFinishAt>4500))this.completeRace();
  }
  completeRace(){
    if(!this.running)return;this.running=false;cancelAnimationFrame(this.animFrame);clearTimeout(this.timeoutId);this.renderOnce();
    const result={winner:this.finishOrder[0]?.digit,finishOrder:[...this.finishOrder],duration:Number(((performance.now()-this.startPerf)/1000).toFixed(4))};
    this.listeners.onFinish(result);this.raceResolve?.(result);this.raceResolve=null;
  }
  timeoutRace(){
    if(!this.running)return;this.running=false;cancelAnimationFrame(this.animFrame);const err=new Error('Lượt đua vượt quá 35 giây và đã bị hủy. Không tự đẩy riêng viên bi nào.');this.listeners.onStatus(err.message);this.raceReject?.(err);this.raceReject=null;
  }
  emitUpdate(){
    const order=[...this.marbles].sort((a,b)=>b.body.translation().z-a.body.translation().z).map(m=>({digit:m.digit,z:m.body.translation().z,finished:m.finished}));this.listeners.onUpdate(order,this.finishOrder);
  }
  updateMeshes(){for(const m of this.marbles){const p=m.body.translation(),q=m.body.rotation();m.group.position.set(p.x,p.y,p.z);m.group.quaternion.set(q.x,q.y,q.z,q.w)}}
  updateCamera(){
    if(!this.marbles.length)return;const leader=[...this.marbles].sort((a,b)=>b.body.translation().z-a.body.translation().z)[0];const p=leader.body.translation();
    const target=new THREE.Vector3(0,Math.max(-2,p.y),Math.min(7,p.z+2));const desired=new THREE.Vector3(14,Math.max(8,p.y+6),Math.min(22,p.z+18));this.camera.position.lerp(desired,.018);this.camera.lookAt(target);
  }
  renderOnce(){this.renderer?.render(this.scene,this.camera)}
  playTone(freq,duration){
    if(!this.sound)return;try{this.audioCtx=this.audioCtx||new(window.AudioContext||window.webkitAudioContext)();const t=this.audioCtx.currentTime,o=this.audioCtx.createOscillator(),g=this.audioCtx.createGain();o.frequency.value=freq;o.type='sine';g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(Math.max(.01,this.volume*.12),t+.01);g.gain.exponentialRampToValueAtTime(.0001,t+duration);o.connect(g);g.connect(this.audioCtx.destination);o.start(t);o.stop(t+duration+.02)}catch{}
  }
  stop(){this.running=false;cancelAnimationFrame(this.animFrame);clearTimeout(this.timeoutId);}
  clearWorld(){
    this.stop();if(this.scene){for(const m of this.marbles){this.scene.remove(m.group);m.group.traverse(n=>{n.geometry?.dispose?.();if(n.material){Array.isArray(n.material)?n.material.forEach(x=>x.dispose?.()):n.material.dispose?.()}})}for(const o of this.trackObjects){this.scene.remove(o);o.traverse?.(n=>{n.geometry?.dispose?.();if(n.material){Array.isArray(n.material)?n.material.forEach(x=>{x.map?.dispose?.();x.dispose?.()}):(n.material.map?.dispose?.(),n.material.dispose?.())}})}}
    this.marbles=[];this.trackObjects=[];this.world?.free?.();this.world=null;
  }
  destroy(){this.clearWorld();window.removeEventListener('resize',this.resizeHandler);this.renderer?.dispose();this.audioCtx?.close?.();this.initialized=false;}
}
function wait(ms){return new Promise(r=>setTimeout(r,ms))}
