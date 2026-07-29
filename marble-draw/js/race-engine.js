import * as THREE from 'three';
import * as RAPIER from '@dimforge/rapier3d-compat';
import {seededShuffle, seededRng} from './crypto-utils.js';

const COLORS=['#f04f5f','#ff9f43','#ffd43b','#78c257','#35b7a5','#4ca6e8','#6e7ee8','#9b65d6','#d85cb1','#8b6b55'];
const START_EDGE_Z=-10.5;
const SLOPE_ANGLE=0.31; // độ dốc đủ rõ nhưng vẫn ổn định
const FINISH_Z=17.2;
const TRACK_HALF_WIDTH=5.3;
const LANE_W=10.6;
const MARBLE_RADIUS=0.34;

function rapierQuatFromEuler(rx=0,ry=0,rz=0){
  const q=new THREE.Quaternion().setFromEuler(new THREE.Euler(rx,ry,rz));
  return {x:q.x,y:q.y,z:q.z,w:q.w};
}

export class MarbleRaceEngine{
  constructor(canvas,{quality='medium',volume=.6,sound=true}={}){
    this.canvas=canvas;this.quality=quality;this.volume=volume;this.sound=sound;
    this.scene=null;this.camera=null;this.renderer=null;this.world=null;this.eventQueue=null;
    this.marbles=[];this.trackObjects=[];this.rotors=[];this.animFrame=0;this.running=false;this.initialized=false;
    this.fixed=1/180;this.accumulator=0;this.lastTime=0;this.finishOrder=[];this.sensorHandle=null;
    this.marbleColliderMap=new Map();this.listeners={};
  }
  surfaceYAt(z){
    return 8.0-Math.tan(SLOPE_ANGLE)*(z-START_EDGE_Z);
  }
  async init(){
    if(this.initialized)return;
    await RAPIER.init();
    this.scene=new THREE.Scene();
    this.scene.background=new THREE.Color('#dcece6');
    this.scene.fog=new THREE.Fog('#dcece6',25,70);
    this.camera=new THREE.PerspectiveCamera(34,1,.1,150);
    this.camera.position.set(14,10,18);
    this.camera.lookAt(0,2,1);
    const pixelRatio=this.quality==='high'?Math.min(devicePixelRatio,2):this.quality==='low'?1:Math.min(devicePixelRatio,1.5);
    this.renderer=new THREE.WebGLRenderer({canvas:this.canvas,antialias:this.quality!=='low',powerPreference:'high-performance'});
    this.renderer.setPixelRatio(pixelRatio);
    this.renderer.shadowMap.enabled=this.quality!=='low';
    this.renderer.shadowMap.type=THREE.PCFSoftShadowMap;
    this.renderer.outputColorSpace=THREE.SRGBColorSpace;
    this.resize();

    this.scene.add(new THREE.HemisphereLight(0xffffff,0x5f8776,2.15));
    const sun=new THREE.DirectionalLight(0xffffff,2.8);
    sun.position.set(12,22,-3);
    sun.castShadow=this.quality!=='low';
    sun.shadow.mapSize.set(this.quality==='high'?2048:1024,this.quality==='high'?2048:1024);
    this.scene.add(sun);

    this.resizeHandler=()=>this.resize();
    window.addEventListener('resize',this.resizeHandler);
    this.initialized=true;
  }
  resize(){
    if(!this.renderer)return;
    const rect=this.canvas.getBoundingClientRect();
    const w=Math.max(1,rect.width||innerWidth),h=Math.max(1,rect.height||innerHeight);
    this.renderer.setSize(w,h,false);
    this.camera.aspect=w/h;
    this.camera.updateProjectionMatrix();
  }
  async prepare(seed){
    await this.init();
    this.stop();
    this.clearWorld();
    this.world=new RAPIER.World({x:0,y:-12.0,z:0});
    this.world.timestep=this.fixed;
    this.eventQueue=new RAPIER.EventQueue(true);
    this.finishOrder=[];this.marbleColliderMap.clear();this.rotors=[];
    this.buildTrack();
    const positions=await seededShuffle([...Array(10).keys()],`${seed}|start-positions`);
    const rng=await seededRng(`${seed}|start-jitter`);
    positions.forEach((digit,slot)=>this.createMarble(digit,slot,rng));
    this.updateMeshes();
    this.renderOnce();
    return positions;
  }
  buildTrack(){
    const trackMat=new THREE.MeshStandardMaterial({color:'#eff7f3',roughness:.46,metalness:.02});
    const wallMat=new THREE.MeshStandardMaterial({color:'#78bda3',roughness:.55});
    const pegMat=new THREE.MeshStandardMaterial({color:'#f0b55b',roughness:.4});
    const accentMat=new THREE.MeshStandardMaterial({color:'#6ea1e7',roughness:.35});
    const stepZ=3.65;
    const segLen=4.15;

    // Sàn nền và sàn hứng để tránh cảm giác bi rơi mất vào "vực".
    const base=new THREE.Mesh(new THREE.PlaneGeometry(100,100),new THREE.MeshStandardMaterial({color:'#cde0d7',roughness:1}));
    base.rotation.x=-Math.PI/2;base.position.y=-10;base.receiveShadow=true;this.scene.add(base);this.trackObjects.push(base);
    this.addFixedBox({x:0,y:-10.3,z:8,w:90,h:.5,d:90,material:new THREE.MeshStandardMaterial({color:'#cde0d7',roughness:1})});

    // Máng trượt chính bằng nhiều đoạn chồng nhẹ lên nhau để tránh khe hở collider.
    for(let i=0;i<8;i++){
      const z=START_EDGE_Z+segLen/2+i*stepZ;
      const y=this.surfaceYAt(z);
      this.addFixedBox({x:0,y,z,w:LANE_W,h:.8,d:segLen,rx:SLOPE_ANGLE,material:trackMat});
      this.addFixedBox({x:-TRACK_HALF_WIDTH-.25,y:y+.86,z,w:.45,h:1.75,d:segLen+.15,rx:SLOPE_ANGLE,material:wallMat});
      this.addFixedBox({x:TRACK_HALF_WIDTH+.25,y:y+.86,z,w:.45,h:1.75,d:segLen+.15,rx:SLOPE_ANGLE,material:wallMat});
    }

    // Khu xuất phát.
    const bowlZ=-9.0;
    this.addFixedBox({x:0,y:this.surfaceYAt(bowlZ)+.05,z:bowlZ,w:LANE_W,h:.9,d:3.2,rx:SLOPE_ANGLE,material:trackMat});
    this.addFixedBox({x:0,y:this.surfaceYAt(-10.7)+1.35,z:-10.7,w:LANE_W+.2,h:1.1,d:.45,material:wallMat});

    // Cọc vật lý để tạo độ ngẫu nhiên công khai.
    for(let row=0;row<7;row++){
      const z=-2.2+row*2.55;
      const y=this.surfaceYAt(z)+.62;
      const offset=row%2?0.52:0;
      for(let col=-4;col<=4;col++){
        const x=col*1.05+offset;
        if(Math.abs(x)>4.55)continue;
        this.addFixedCylinder({x,y,z,r:.2,half:.56,material:pegMat});
      }
    }

    // Vách chia đường và đổi hướng.
    this.addFixedBox({x:-1.5,y:this.surfaceYAt(2.4)+.62,z:2.4,w:.28,h:.85,d:2.8,rx:SLOPE_ANGLE,ry:.42,material:accentMat});
    this.addFixedBox({x:1.5,y:this.surfaceYAt(2.4)+.62,z:2.4,w:.28,h:.85,d:2.8,rx:SLOPE_ANGLE,ry:-.42,material:accentMat});
    this.addFixedBox({x:0,y:this.surfaceYAt(10.5)+.58,z:10.5,w:.28,h:.85,d:3.1,rx:SLOPE_ANGLE,ry:.18,material:accentMat});

    // Cánh quạt tác động công khai.
    this.createRotor({x:0,y:this.surfaceYAt(7.2)+.95,z:7.2});

    // Cổng xuất phát.
    const gateZ=-8.15;const gateY=this.surfaceYAt(gateZ)+.78;
    const gateBody=this.world.createRigidBody(RAPIER.RigidBodyDesc.fixed().setTranslation(0,gateY,gateZ));
    const gateDesc=RAPIER.ColliderDesc.cuboid(5.25,.85,.18).setFriction(.55);
    this.gateCollider=this.world.createCollider(gateDesc,gateBody);this.gateBody=gateBody;
    const gateMesh=new THREE.Mesh(new THREE.BoxGeometry(10.5,1.7,.36),new THREE.MeshStandardMaterial({color:'#de6565',roughness:.4}));
    gateMesh.position.set(0,gateY,gateZ);gateMesh.castShadow=true;this.scene.add(gateMesh);this.trackObjects.push(gateMesh);this.gateMesh=gateMesh;

    // Cảm biến đích và máng hứng cuối.
    const finishY=this.surfaceYAt(FINISH_Z)+.3;
    const sensorBody=this.world.createRigidBody(RAPIER.RigidBodyDesc.fixed().setTranslation(0,finishY,FINISH_Z));
    const sensorDesc=RAPIER.ColliderDesc.cuboid(5.25,1.9,.22).setSensor(true).setActiveEvents(RAPIER.ActiveEvents.COLLISION_EVENTS);
    const sensor=this.world.createCollider(sensorDesc,sensorBody);this.sensorHandle=sensor.handle;
    const finishStrip=new THREE.Mesh(new THREE.BoxGeometry(10.7,.14,.6),new THREE.MeshStandardMaterial({color:'#f5c94a',emissive:'#a57d17',emissiveIntensity:.3}));
    finishStrip.position.set(0,finishY-.08,FINISH_Z);this.scene.add(finishStrip);this.trackObjects.push(finishStrip);
    this.addFixedBox({x:0,y:this.surfaceYAt(18.8)-.12,z:18.8,w:LANE_W,h:.8,d:4.2,rx:SLOPE_ANGLE*.32,material:trackMat});
    this.addFixedBox({x:-TRACK_HALF_WIDTH-.25,y:this.surfaceYAt(18.8)+.75,z:18.8,w:.45,h:1.55,d:4.2,rx:SLOPE_ANGLE*.32,material:wallMat});
    this.addFixedBox({x:TRACK_HALF_WIDTH+.25,y:this.surfaceYAt(18.8)+.75,z:18.8,w:.45,h:1.55,d:4.2,rx:SLOPE_ANGLE*.32,material:wallMat});
  }
  addFixedBox({x,y,z,w,h,d,rx=0,ry=0,rz=0,material}){
    const rq=rapierQuatFromEuler(rx,ry,rz);
    const body=this.world.createRigidBody(RAPIER.RigidBodyDesc.fixed().setTranslation(x,y,z).setRotation(rq));
    this.world.createCollider(RAPIER.ColliderDesc.cuboid(w/2,h/2,d/2).setFriction(.62),body);
    const mesh=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),material);
    mesh.position.set(x,y,z);
    mesh.quaternion.set(rq.x,rq.y,rq.z,rq.w);
    mesh.receiveShadow=true;mesh.castShadow=this.quality!=='low';
    this.scene.add(mesh);this.trackObjects.push(mesh);
    return {body,mesh};
  }
  addFixedCylinder({x,y,z,r,half,material}){
    const body=this.world.createRigidBody(RAPIER.RigidBodyDesc.fixed().setTranslation(x,y,z));
    this.world.createCollider(RAPIER.ColliderDesc.cylinder(half,r).setFriction(.48),body);
    const mesh=new THREE.Mesh(new THREE.CylinderGeometry(r,r,half*2,18),material);
    mesh.position.set(x,y,z);mesh.castShadow=true;this.scene.add(mesh);this.trackObjects.push(mesh);
  }
  createRotor({x,y,z}){
    const body=this.world.createRigidBody(RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(x,y,z));
    const group=new THREE.Group();group.position.set(x,y,z);
    const mat=new THREE.MeshStandardMaterial({color:'#925fd0',roughness:.35});
    for(let i=0;i<4;i++){
      const angle=i*Math.PI/2;
      const rq=rapierQuatFromEuler(0,angle,0);
      const desc=RAPIER.ColliderDesc.cuboid(2.15,.22,.16).setTranslation(Math.cos(angle)*1.9,0,Math.sin(angle)*1.9).setRotation(rq).setFriction(.35);
      this.world.createCollider(desc,body);
      const arm=new THREE.Mesh(new THREE.BoxGeometry(4.3,.44,.34),mat);arm.rotation.y=angle;group.add(arm);
    }
    const hub=new THREE.Mesh(new THREE.CylinderGeometry(.45,.45,.55,18),mat);hub.rotation.x=Math.PI/2;group.add(hub);
    this.scene.add(group);this.trackObjects.push(group);this.rotors.push({body,group,angle:0,speed:1.2});
  }
  createMarble(digit,slot,rng){
    const x=-3.85+slot*.86;
    const z=-8.55+(rng()-.5)*.05;
    const y=this.surfaceYAt(z)+1.25+(rng()-.5)*.015;
    const body=this.world.createRigidBody(RAPIER.RigidBodyDesc.dynamic().setTranslation(x,y,z).setCanSleep(false).setCcdEnabled(true).setLinearDamping(.01).setAngularDamping(.01));
    const desc=RAPIER.ColliderDesc.ball(MARBLE_RADIUS).setDensity(1.15).setRestitution(.18).setFriction(.22).setActiveEvents(RAPIER.ActiveEvents.COLLISION_EVENTS);
    const collider=this.world.createCollider(desc,body);
    this.marbleColliderMap.set(collider.handle,digit);

    const group=new THREE.Group();
    const ball=new THREE.Mesh(new THREE.SphereGeometry(MARBLE_RADIUS,28,20),new THREE.MeshStandardMaterial({color:COLORS[digit],roughness:.2,metalness:.08}));
    ball.castShadow=true;group.add(ball);
    const label=this.makeLabel(String(digit));label.position.set(0,.56,0);group.add(label);
    group.position.set(x,y,z);this.scene.add(group);
    this.marbles.push({digit,body,collider,group,finished:false,finishTime:null});
  }
  makeLabel(text){
    const canvas=document.createElement('canvas');canvas.width=128;canvas.height=128;
    const ctx=canvas.getContext('2d');
    ctx.fillStyle='rgba(255,255,255,.96)';ctx.beginPath();ctx.arc(64,64,50,0,Math.PI*2);ctx.fill();
    ctx.strokeStyle='#173a30';ctx.lineWidth=5;ctx.stroke();ctx.fillStyle='#173a30';
    ctx.font='900 66px system-ui';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(text,64,69);
    const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;
    const sprite=new THREE.Sprite(new THREE.SpriteMaterial({map:texture,transparent:true,depthTest:false}));sprite.scale.set(.78,.78,.78);return sprite;
  }
  async run({seed,onCountdown=()=>{},onUpdate=()=>{},onFinish=()=>{},onStatus=()=>{}}={}){
    await this.prepare(seed);
    this.listeners={onCountdown,onUpdate,onFinish,onStatus};
    for(let n=3;n>=1;n--){onCountdown(n);this.playTone(420+n*120,.13);await wait(760)}
    onCountdown(0);await wait(220);
    this.releaseGate();this.playTone(220,.22);
    this.running=true;this.startPerf=performance.now();this.lastTime=performance.now();this.accumulator=0;
    onStatus('Bi đã được thả. Kết quả được xác định tại cảm biến đích ở cuối máng.');
    return new Promise((resolve,reject)=>{this.raceResolve=resolve;this.raceReject=reject;this.loop();this.timeoutId=setTimeout(()=>this.timeoutRace(),40000)});
  }
  releaseGate(){
    if(this.gateBody){this.world.removeRigidBody(this.gateBody);this.gateBody=null;}
    if(this.gateMesh){this.scene.remove(this.gateMesh);this.gateMesh.geometry.dispose();this.gateMesh.material.dispose();this.gateMesh=null;}
  }
  loop(){
    if(!this.running)return;
    const now=performance.now();const delta=Math.min(.05,(now-this.lastTime)/1000);this.lastTime=now;this.accumulator+=delta;
    let steps=0;while(this.accumulator>=this.fixed&&steps<12){this.stepPhysics();this.accumulator-=this.fixed;steps++}
    this.updateMeshes();this.updateCamera();this.renderOnce();this.emitUpdate();this.animFrame=requestAnimationFrame(()=>this.loop());
  }
  stepPhysics(){
    const elapsed=(performance.now()-this.startPerf)/1000;
    for(const r of this.rotors){
      r.angle+=r.speed*this.fixed;
      const q=rapierQuatFromEuler(0,r.angle,0);
      r.body.setNextKinematicRotation(q);
      r.group.quaternion.set(q.x,q.y,q.z,q.w);
    }
    this.world.step(this.eventQueue);
    this.eventQueue.drainCollisionEvents((h1,h2,started)=>{
      if(!started)return;
      let marbleHandle=null;
      if(h1===this.sensorHandle)marbleHandle=h2;else if(h2===this.sensorHandle)marbleHandle=h1;
      if(marbleHandle!==null&&this.marbleColliderMap.has(marbleHandle))this.recordFinish(this.marbleColliderMap.get(marbleHandle),elapsed);
    });
    for(const marble of this.marbles){
      const p=marble.body.translation();
      if(!marble.finished&&p.z>=FINISH_Z-.1&&p.y<=this.surfaceYAt(FINISH_Z)+1.4)this.recordFinish(marble.digit,elapsed);
    }
  }
  recordFinish(digit,time){
    const marble=this.marbles.find(m=>m.digit===digit);
    if(!marble||marble.finished)return;
    marble.finished=true;marble.finishTime=time;
    this.finishOrder.push({digit,time:Number(time.toFixed(4))});
    this.playTone(this.finishOrder.length===1?980:660,.1);
    if(this.finishOrder.length===1){
      this.firstFinishAt=performance.now();
      this.listeners.onStatus(`Viên số ${digit} đã về đích đầu tiên.`);
    }
    if(this.finishOrder.length===10||(this.firstFinishAt&&performance.now()-this.firstFinishAt>5000))this.completeRace();
  }
  completeRace(){
    if(!this.running)return;
    this.running=false;cancelAnimationFrame(this.animFrame);clearTimeout(this.timeoutId);this.renderOnce();
    const result={winner:this.finishOrder[0]?.digit,finishOrder:[...this.finishOrder],duration:Number(((performance.now()-this.startPerf)/1000).toFixed(4))};
    this.listeners.onFinish(result);this.raceResolve?.(result);this.raceResolve=null;
  }
  timeoutRace(){
    if(!this.running)return;
    this.running=false;cancelAnimationFrame(this.animFrame);
    const err=new Error('Lượt đua vượt quá 40 giây và đã bị hủy.');
    this.listeners.onStatus(err.message);this.raceReject?.(err);this.raceReject=null;
  }
  emitUpdate(){
    const order=[...this.marbles].sort((a,b)=>b.body.translation().z-a.body.translation().z).map(m=>({digit:m.digit,z:m.body.translation().z,y:m.body.translation().y,finished:m.finished}));
    this.listeners.onUpdate(order,this.finishOrder);
  }
  updateMeshes(){
    for(const m of this.marbles){
      const p=m.body.translation(),q=m.body.rotation();
      m.group.position.set(p.x,p.y,p.z);m.group.quaternion.set(q.x,q.y,q.z,q.w);
    }
  }
  updateCamera(){
    if(!this.marbles.length)return;
    const leader=[...this.marbles].sort((a,b)=>b.body.translation().z-a.body.translation().z)[0];
    const p=leader.body.translation();
    const target=new THREE.Vector3(0,Math.max(0,p.y-1),Math.min(10,p.z+1.8));
    const desired=new THREE.Vector3(13.8,Math.max(7.8,p.y+4.6),Math.min(24,p.z+14.5));
    this.camera.position.lerp(desired,.02);
    this.camera.lookAt(target);
  }
  renderOnce(){this.renderer?.render(this.scene,this.camera)}
  playTone(freq,duration){
    if(!this.sound)return;
    try{this.audioCtx=this.audioCtx||new(window.AudioContext||window.webkitAudioContext)();const t=this.audioCtx.currentTime,o=this.audioCtx.createOscillator(),g=this.audioCtx.createGain();o.frequency.value=freq;o.type='sine';g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(Math.max(.01,this.volume*.12),t+.01);g.gain.exponentialRampToValueAtTime(.0001,t+duration);o.connect(g);g.connect(this.audioCtx.destination);o.start(t);o.stop(t+duration+.02)}catch{}
  }
  stop(){this.running=false;cancelAnimationFrame(this.animFrame);clearTimeout(this.timeoutId)}
  clearWorld(){
    this.stop();
    if(this.scene){
      for(const m of this.marbles){
        this.scene.remove(m.group);
        m.group.traverse(n=>{n.geometry?.dispose?.();if(n.material){Array.isArray(n.material)?n.material.forEach(x=>x.dispose?.()):n.material.dispose?.()}});
      }
      for(const o of this.trackObjects){
        this.scene.remove(o);
        o.traverse?.(n=>{n.geometry?.dispose?.();if(n.material){Array.isArray(n.material)?n.material.forEach(x=>{x.map?.dispose?.();x.dispose?.()}):(n.material.map?.dispose?.(),n.material.dispose?.())}});
      }
    }
    this.marbles=[];this.trackObjects=[];this.world?.free?.();this.world=null;
  }
  destroy(){this.clearWorld();window.removeEventListener('resize',this.resizeHandler);this.renderer?.dispose();this.audioCtx?.close?.();this.initialized=false}
}
function wait(ms){return new Promise(r=>setTimeout(r,ms))}
