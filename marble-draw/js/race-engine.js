import * as THREE from 'three';
import * as RAPIER from '@dimforge/rapier3d-compat';
import {seededShuffle,seededRng} from './crypto-utils.js';

const COLORS=['#ef5263','#ff9f43','#f5cf45','#77c45a','#35b7a5','#4ca6e8','#697de7','#9964d5','#d75db2','#8d6b55'];
const START_Z=-10.2;
const FINISH_Z=16.8;
const TRACK_LENGTH=29.5;
const TRACK_CENTER_Z=(START_Z+FINISH_Z)/2;
const TRACK_WIDTH=10.8;
const TRACK_HALF=TRACK_WIDTH/2;
const SLOPE_ANGLE=0.19;
const FLOOR_THICKNESS=.42;
const MARBLE_RADIUS=.34;

function quat(rx=0,ry=0,rz=0){
  const q=new THREE.Quaternion().setFromEuler(new THREE.Euler(rx,ry,rz));
  return{x:q.x,y:q.y,z:q.z,w:q.w};
}
function valuesFor(count){
  const n=Math.max(2,Math.min(10,Number(count)||10));
  return n===10?[0,1,2,3,4,5,6,7,8,9]:Array.from({length:n},(_,i)=>i+1);
}

export class MarbleRaceEngine{
  constructor(canvas,{quality='medium',volume=.6,sound=true,marbleCount=10}={}){
    this.canvas=canvas;this.quality=quality;this.volume=volume;this.sound=sound;
    this.marbleCount=Math.max(2,Math.min(10,Number(marbleCount)||10));
    this.digits=valuesFor(this.marbleCount);
    this.scene=null;this.camera=null;this.renderer=null;this.world=null;this.eventQueue=null;
    this.marbles=[];this.trackObjects=[];this.animFrame=0;this.running=false;this.initialized=false;
    this.fixed=1/180;this.accumulator=0;this.lastTime=0;this.finishOrder=[];this.sensorHandle=null;
    this.marbleColliderMap=new Map();this.listeners={};
  }
  surfaceYAt(z){return 6.7-Math.tan(SLOPE_ANGLE)*(z-START_Z)}
  async init(){
    if(this.initialized)return;
    await RAPIER.init();
    this.scene=new THREE.Scene();
    this.scene.background=new THREE.Color('#dcece6');
    this.scene.fog=new THREE.Fog('#dcece6',28,75);
    this.camera=new THREE.PerspectiveCamera(37,1,.1,140);
    this.camera.position.set(13.5,10.2,17.5);this.camera.lookAt(0,3,1);
    const ratio=this.quality==='high'?Math.min(devicePixelRatio,2):this.quality==='low'?1:Math.min(devicePixelRatio,1.5);
    this.renderer=new THREE.WebGLRenderer({canvas:this.canvas,antialias:this.quality!=='low',powerPreference:'high-performance'});
    this.renderer.setPixelRatio(ratio);this.renderer.shadowMap.enabled=this.quality!=='low';this.renderer.shadowMap.type=THREE.PCFSoftShadowMap;this.renderer.outputColorSpace=THREE.SRGBColorSpace;
    this.resize();
    this.scene.add(new THREE.HemisphereLight(0xffffff,0x54796a,2.2));
    const sun=new THREE.DirectionalLight(0xffffff,2.7);sun.position.set(10,20,-5);sun.castShadow=this.quality!=='low';sun.shadow.mapSize.set(this.quality==='high'?2048:1024,this.quality==='high'?2048:1024);this.scene.add(sun);
    this.resizeHandler=()=>this.resize();window.addEventListener('resize',this.resizeHandler);this.initialized=true;
  }
  resize(){
    if(!this.renderer)return;const rect=this.canvas.getBoundingClientRect();const w=Math.max(1,rect.width||innerWidth),h=Math.max(1,rect.height||innerHeight);
    this.renderer.setSize(w,h,false);this.camera.aspect=w/h;this.camera.updateProjectionMatrix();
  }
  async prepare(seed){
    await this.init();this.stop();this.clearWorld();
    this.digits=valuesFor(this.marbleCount);
    this.world=new RAPIER.World({x:0,y:-12,z:0});this.world.timestep=this.fixed;this.eventQueue=new RAPIER.EventQueue(true);
    this.finishOrder=[];this.marbleColliderMap.clear();this.buildTrack();
    const positions=await seededShuffle(this.digits,`${seed}|start-positions`);const rng=await seededRng(`${seed}|start-jitter`);
    positions.forEach((digit,slot)=>this.createMarble(digit,slot,rng));
    this.updateMeshes();this.renderOnce();return positions;
  }
  buildTrack(){
    const floorMat=new THREE.MeshStandardMaterial({color:'#f5f8f6',roughness:.52});
    const wallMat=new THREE.MeshStandardMaterial({color:'#6db394',roughness:.48});
    const pegMat=new THREE.MeshStandardMaterial({color:'#e6aa4d',roughness:.4});
    const accentMat=new THREE.MeshStandardMaterial({color:'#6498dd',roughness:.38});
    const centerY=this.surfaceYAt(TRACK_CENTER_Z)-FLOOR_THICKNESS/2;

    // Một mặt máng liền khối để không có khe làm lọt bi.
    this.addFixedBox({x:0,y:centerY,z:TRACK_CENTER_Z,w:TRACK_WIDTH,h:FLOOR_THICKNESS,d:TRACK_LENGTH,rx:SLOPE_ANGLE,material:floorMat,friction:.3});
    this.addFixedBox({x:-TRACK_HALF-.26,y:centerY+1.05,z:TRACK_CENTER_Z,w:.52,h:2.2,d:TRACK_LENGTH,rx:SLOPE_ANGLE,material:wallMat,friction:.35});
    this.addFixedBox({x:TRACK_HALF+.26,y:centerY+1.05,z:TRACK_CENTER_Z,w:.52,h:2.2,d:TRACK_LENGTH,rx:SLOPE_ANGLE,material:wallMat,friction:.35});

    // Tường sau giữ toàn bộ bi trong khu xuất phát.
    this.addFixedBox({x:0,y:this.surfaceYAt(START_Z)+.8,z:START_Z-.25,w:TRACK_WIDTH+.3,h:1.8,d:.5,material:wallMat,friction:.4});

    // Chướng ngại thưa, khe đi rộng hơn đường kính bi để hạn chế kẹt.
    const pegRows=[
      {z:-1.5,xs:[-3.2,0,3.2]},
      {z:4.0,xs:[-2.3,2.3]},
      {z:9.0,xs:[-3.3,0,3.3]}
    ];
    for(const row of pegRows){for(const x of row.xs)this.addFixedCylinder({x,y:this.surfaceYAt(row.z)+.52,z:row.z,r:.24,half:.55,material:pegMat})}

    // Hai thanh đổi hướng thấp, không tạo hốc kín.
    this.addFixedBox({x:-1.7,y:this.surfaceYAt(2.0)+.28,z:2.0,w:.3,h:.52,d:2.8,rx:SLOPE_ANGLE,ry:.34,material:accentMat,friction:.25});
    this.addFixedBox({x:1.7,y:this.surfaceYAt(7.0)+.28,z:7.0,w:.3,h:.52,d:2.8,rx:SLOPE_ANGLE,ry:-.34,material:accentMat,friction:.25});

    // Cổng xuất phát đặt trước bi.
    const gateZ=-8.0,gateY=this.surfaceYAt(gateZ)+.62;
    this.gateBody=this.world.createRigidBody(RAPIER.RigidBodyDesc.fixed().setTranslation(0,gateY,gateZ));
    this.gateCollider=this.world.createCollider(RAPIER.ColliderDesc.cuboid(TRACK_HALF-.08,.7,.18).setFriction(.35),this.gateBody);
    this.gateMesh=new THREE.Mesh(new THREE.BoxGeometry(TRACK_WIDTH-.16,1.4,.36),new THREE.MeshStandardMaterial({color:'#de6565',roughness:.4}));
    this.gateMesh.position.set(0,gateY,gateZ);this.gateMesh.castShadow=true;this.scene.add(this.gateMesh);this.trackObjects.push(this.gateMesh);

    // Cảm biến đích.
    const finishY=this.surfaceYAt(FINISH_Z)+.45;
    const sensorBody=this.world.createRigidBody(RAPIER.RigidBodyDesc.fixed().setTranslation(0,finishY,FINISH_Z));
    const sensor=this.world.createCollider(RAPIER.ColliderDesc.cuboid(TRACK_HALF-.05,1.5,.22).setSensor(true).setActiveEvents(RAPIER.ActiveEvents.COLLISION_EVENTS),sensorBody);
    this.sensorHandle=sensor.handle;
    const strip=new THREE.Mesh(new THREE.BoxGeometry(TRACK_WIDTH-.1,.12,.65),new THREE.MeshStandardMaterial({color:'#f3c447',emissive:'#9c7312',emissiveIntensity:.25}));
    strip.position.set(0,this.surfaceYAt(FINISH_Z)+.05,FINISH_Z);strip.rotation.x=SLOPE_ANGLE;this.scene.add(strip);this.trackObjects.push(strip);

    const base=new THREE.Mesh(new THREE.PlaneGeometry(100,100),new THREE.MeshStandardMaterial({color:'#cce0d7',roughness:1}));base.rotation.x=-Math.PI/2;base.position.y=-4;base.receiveShadow=true;this.scene.add(base);this.trackObjects.push(base);
  }
  addFixedBox({x,y,z,w,h,d,rx=0,ry=0,rz=0,material,friction=.4}){
    const q=quat(rx,ry,rz);const body=this.world.createRigidBody(RAPIER.RigidBodyDesc.fixed().setTranslation(x,y,z).setRotation(q));
    this.world.createCollider(RAPIER.ColliderDesc.cuboid(w/2,h/2,d/2).setFriction(friction),body);
    const mesh=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),material);mesh.position.set(x,y,z);mesh.quaternion.set(q.x,q.y,q.z,q.w);mesh.receiveShadow=true;mesh.castShadow=this.quality!=='low';this.scene.add(mesh);this.trackObjects.push(mesh);return{body,mesh};
  }
  addFixedCylinder({x,y,z,r,half,material}){
    const body=this.world.createRigidBody(RAPIER.RigidBodyDesc.fixed().setTranslation(x,y,z));this.world.createCollider(RAPIER.ColliderDesc.cylinder(half,r).setFriction(.25),body);
    const mesh=new THREE.Mesh(new THREE.CylinderGeometry(r,r,half*2,18),material);mesh.position.set(x,y,z);mesh.castShadow=true;this.scene.add(mesh);this.trackObjects.push(mesh);
  }
  createMarble(digit,slot,rng){
    const count=this.digits.length;const usableWidth=Math.min(8.4,(count-1)*.88);const startX=-usableWidth/2;const spacing=count>1?usableWidth/(count-1):0;
    const x=startX+slot*spacing;const z=-9.0+(rng()-.5)*.025;const y=this.surfaceYAt(z)+MARBLE_RADIUS+.12+(rng()-.5)*.01;
    const body=this.world.createRigidBody(RAPIER.RigidBodyDesc.dynamic().setTranslation(x,y,z).setCanSleep(false).setCcdEnabled(true).setLinearDamping(.008).setAngularDamping(.008));
    const collider=this.world.createCollider(RAPIER.ColliderDesc.ball(MARBLE_RADIUS).setDensity(1.1).setRestitution(.1).setFriction(.18).setActiveEvents(RAPIER.ActiveEvents.COLLISION_EVENTS),body);
    this.marbleColliderMap.set(collider.handle,digit);
    const colorIndex=this.marbleCount===10?Number(digit):Math.max(0,Number(digit)-1);const ball=new THREE.Mesh(new THREE.SphereGeometry(MARBLE_RADIUS,30,22),new THREE.MeshStandardMaterial({color:COLORS[colorIndex%COLORS.length],roughness:.23,metalness:.06}));ball.castShadow=true;ball.position.set(x,y,z);this.scene.add(ball);
    const label=this.makeSurfaceLabel(String(digit));label.position.set(x,y,z);this.scene.add(label);
    this.marbles.push({digit,body,collider,ball,label,finished:false,finishTime:null});
  }
  makeSurfaceLabel(text){
    const canvas=document.createElement('canvas');canvas.width=128;canvas.height=128;const ctx=canvas.getContext('2d');ctx.clearRect(0,0,128,128);
    ctx.fillStyle='rgba(255,255,255,.96)';ctx.beginPath();ctx.arc(64,64,47,0,Math.PI*2);ctx.fill();ctx.strokeStyle='#173a30';ctx.lineWidth=6;ctx.stroke();
    ctx.fillStyle='#173a30';ctx.font='900 66px system-ui';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(text,64,68);
    const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;
    const sprite=new THREE.Sprite(new THREE.SpriteMaterial({map:texture,transparent:true,depthTest:false,depthWrite:false}));sprite.scale.set(.28,.28,.28);sprite.renderOrder=50;return sprite;
  }
  async run({seed,onCountdown=()=>{},onUpdate=()=>{},onFinish=()=>{},onStatus=()=>{}}={}){
    await this.prepare(seed);this.listeners={onCountdown,onUpdate,onFinish,onStatus};
    for(let n=3;n>=1;n--){onCountdown(n);this.playTone(420+n*110,.12);await wait(650)}onCountdown(0);await wait(170);
    this.releaseGate();this.playTone(230,.2);this.running=true;this.startPerf=performance.now();this.lastTime=performance.now();this.accumulator=0;onStatus('Các viên bi đang chạy.');
    return new Promise((resolve,reject)=>{this.raceResolve=resolve;this.raceReject=reject;this.loop();this.timeoutId=setTimeout(()=>this.timeoutRace(),32000)});
  }
  releaseGate(){
    if(this.gateBody){this.world.removeRigidBody(this.gateBody);this.gateBody=null}
    if(this.gateMesh){this.scene.remove(this.gateMesh);this.gateMesh.geometry.dispose();this.gateMesh.material.dispose();this.gateMesh=null}
  }
  loop(){
    if(!this.running)return;const now=performance.now(),delta=Math.min(.05,(now-this.lastTime)/1000);this.lastTime=now;this.accumulator+=delta;
    let steps=0;while(this.accumulator>=this.fixed&&steps<12){this.stepPhysics();this.accumulator-=this.fixed;steps++}
    this.updateMeshes();this.updateCamera();this.renderOnce();this.emitUpdate();this.animFrame=requestAnimationFrame(()=>this.loop());
  }
  stepPhysics(){
    const elapsed=(performance.now()-this.startPerf)/1000;this.world.step(this.eventQueue);
    this.eventQueue.drainCollisionEvents((h1,h2,started)=>{if(!started)return;let marbleHandle=null;if(h1===this.sensorHandle)marbleHandle=h2;else if(h2===this.sensorHandle)marbleHandle=h1;if(marbleHandle!==null&&this.marbleColliderMap.has(marbleHandle))this.recordFinish(this.marbleColliderMap.get(marbleHandle),elapsed)});
    for(const marble of this.marbles){const p=marble.body.translation();if(!marble.finished&&p.z>=FINISH_Z-.1)this.recordFinish(marble.digit,elapsed)}
  }
  recordFinish(digit,time){
    const marble=this.marbles.find(m=>m.digit===digit);if(!marble||marble.finished)return;marble.finished=true;marble.finishTime=time;this.finishOrder.push({digit,time:Number(time.toFixed(4))});this.playTone(this.finishOrder.length===1?980:650,.09);
    if(this.finishOrder.length===1){this.firstFinishAt=performance.now();this.listeners.onStatus(`Bi ${digit} về đích đầu tiên.`)}
    if(this.finishOrder.length===this.digits.length||(this.firstFinishAt&&performance.now()-this.firstFinishAt>3600))this.completeRace();
  }
  completeRace(){
    if(!this.running)return;this.running=false;cancelAnimationFrame(this.animFrame);clearTimeout(this.timeoutId);this.renderOnce();
    const result={winner:this.finishOrder[0]?.digit,finishOrder:[...this.finishOrder],duration:Number(((performance.now()-this.startPerf)/1000).toFixed(4))};this.listeners.onFinish(result);this.raceResolve?.(result);this.raceResolve=null;
  }
  timeoutRace(){
    if(!this.running)return;this.running=false;cancelAnimationFrame(this.animFrame);const err=new Error('Lượt đua chưa hoàn thành. Hệ thống sẽ chạy lại.');this.listeners.onStatus(err.message);this.raceReject?.(err);this.raceReject=null;
  }
  emitUpdate(){
    const order=[...this.marbles].sort((a,b)=>b.body.translation().z-a.body.translation().z).map(m=>({digit:m.digit,z:m.body.translation().z,finished:m.finished}));this.listeners.onUpdate(order,this.finishOrder);
  }
  updateMeshes(){
    for(const m of this.marbles){
      const p=m.body.translation(),q=m.body.rotation();m.ball.position.set(p.x,p.y,p.z);m.ball.quaternion.set(q.x,q.y,q.z,q.w);
      const towardCamera=new THREE.Vector3().subVectors(this.camera.position,new THREE.Vector3(p.x,p.y,p.z)).normalize();m.label.position.set(p.x+towardCamera.x*(MARBLE_RADIUS+.008),p.y+towardCamera.y*(MARBLE_RADIUS+.008),p.z+towardCamera.z*(MARBLE_RADIUS+.008));
    }
  }
  updateCamera(){
    if(!this.marbles.length)return;const leader=[...this.marbles].sort((a,b)=>b.body.translation().z-a.body.translation().z)[0],p=leader.body.translation();
    const target=new THREE.Vector3(0,Math.max(1,p.y-.5),Math.min(10,p.z+1.2));const desired=new THREE.Vector3(12.5,Math.max(7,p.y+4.8),Math.min(23,p.z+14));this.camera.position.lerp(desired,.022);this.camera.lookAt(target);
  }
  renderOnce(){this.renderer?.render(this.scene,this.camera)}
  playTone(freq,duration){if(!this.sound)return;try{this.audioCtx=this.audioCtx||new(window.AudioContext||window.webkitAudioContext)();const t=this.audioCtx.currentTime,o=this.audioCtx.createOscillator(),g=this.audioCtx.createGain();o.frequency.value=freq;o.type='sine';g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(Math.max(.01,this.volume*.1),t+.01);g.gain.exponentialRampToValueAtTime(.0001,t+duration);o.connect(g);g.connect(this.audioCtx.destination);o.start(t);o.stop(t+duration+.02)}catch{}}
  stop(){this.running=false;cancelAnimationFrame(this.animFrame);clearTimeout(this.timeoutId)}
  clearWorld(){
    this.stop();if(this.scene){for(const m of this.marbles){this.scene.remove(m.ball);this.scene.remove(m.label);m.ball.geometry?.dispose?.();m.ball.material?.dispose?.();m.label.material?.map?.dispose?.();m.label.material?.dispose?.()}for(const o of this.trackObjects){this.scene.remove(o);o.traverse?.(n=>{n.geometry?.dispose?.();if(n.material){Array.isArray(n.material)?n.material.forEach(x=>x.dispose?.()):n.material.dispose?.()}})}}
    this.marbles=[];this.trackObjects=[];this.world?.free?.();this.world=null;
  }
  destroy(){this.clearWorld();window.removeEventListener('resize',this.resizeHandler);this.renderer?.dispose();this.audioCtx?.close?.();this.initialized=false}
}
function wait(ms){return new Promise(r=>setTimeout(r,ms))}
