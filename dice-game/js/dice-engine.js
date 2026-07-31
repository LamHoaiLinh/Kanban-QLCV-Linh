import * as THREE from 'three';
import * as RAPIER from '@dimforge/rapier3d-compat';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';

const DIE_HALF=.68;
const FLOOR_Y=0;
const COLORS=['#c64545','#e49738','#d3b23d','#4b9b6e','#348e94','#436fbd','#7557ad','#ad4f84','#805b45','#3f7565'];
const FACE_NORMALS=[
  {value:1,normal:new THREE.Vector3(0,0,-1)},
  {value:2,normal:new THREE.Vector3(-1,0,0)},
  {value:3,normal:new THREE.Vector3(0,1,0)},
  {value:4,normal:new THREE.Vector3(0,-1,0)},
  {value:5,normal:new THREE.Vector3(1,0,0)},
  {value:6,normal:new THREE.Vector3(0,0,1)}
];
const UP=new THREE.Vector3(0,1,0);

function random01(){
  const arr=new Uint32Array(1);crypto.getRandomValues(arr);return arr[0]/4294967296;
}
function randomRange(min,max){return min+(max-min)*random01()}
function randomQuaternion(){
  const u1=random01(),u2=random01(),u3=random01();
  const s1=Math.sqrt(1-u1),s2=Math.sqrt(u1);
  return new THREE.Quaternion(
    s1*Math.sin(2*Math.PI*u2),
    s1*Math.cos(2*Math.PI*u2),
    s2*Math.sin(2*Math.PI*u3),
    s2*Math.cos(2*Math.PI*u3)
  );
}
function easeInOut(t){return t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2}
function wait(ms){return new Promise(resolve=>setTimeout(resolve,ms))}

export class DiceEngine{
  constructor(canvas,{quality='medium',sound=true,volume=.65}={}){
    this.canvas=canvas;this.quality=quality;this.sound=sound;this.volume=volume;
    this.renderer=null;this.scene=null;this.camera=null;this.world=null;this.eventQueue=null;
    this.dice=[];this.staticVisuals=[];this.running=true;this.rolling=false;this.lastTime=performance.now();this.accumulator=0;this.fixed=1/120;
    this.dieTemplate=null;this.cup=null;this.assetScene=null;this.audioCtx=null;this.frame=0;
  }
  async init(){
    await RAPIER.init();
    this.scene=new THREE.Scene();
    this.scene.background=new THREE.Color('#d9ebe4');
    this.scene.fog=new THREE.Fog('#d9ebe4',24,48);
    this.camera=new THREE.PerspectiveCamera(37,1,.1,100);
    this.camera.position.set(13.5,11.5,16.5);
    this.camera.lookAt(0,0.8,0);
    const ratio=this.quality==='high'?Math.min(devicePixelRatio,2):this.quality==='low'?1:Math.min(devicePixelRatio,1.5);
    this.renderer=new THREE.WebGLRenderer({canvas:this.canvas,antialias:this.quality!=='low',powerPreference:'high-performance'});
    this.renderer.setPixelRatio(ratio);this.renderer.outputColorSpace=THREE.SRGBColorSpace;
    this.renderer.shadowMap.enabled=this.quality!=='low';this.renderer.shadowMap.type=THREE.PCFSoftShadowMap;
    this.resize();
    this.scene.add(new THREE.HemisphereLight(0xfff8eb,0x315a4c,2.45));
    const key=new THREE.DirectionalLight(0xfff6de,3.3);key.position.set(8,17,8);key.castShadow=this.quality!=='low';key.shadow.mapSize.set(this.quality==='high'?2048:1024,this.quality==='high'?2048:1024);this.scene.add(key);
    const rim=new THREE.PointLight(0x83d8b5,18,30);rim.position.set(-9,8,-7);this.scene.add(rim);
    const warm=new THREE.PointLight(0xffc66b,12,25);warm.position.set(8,5,5);this.scene.add(warm);
    await this.loadAsset();
    this.buildWorld();
    this.resizeHandler=()=>this.resize();window.addEventListener('resize',this.resizeHandler);
    this.loop();
  }
  async loadAsset(){
    const loader=new GLTFLoader();
    const assetUrl=new URL('../assets/dice_animation_2.glb',import.meta.url).href;
    const gltf=await loader.loadAsync(assetUrl);
    this.assetScene=gltf.scene;
    const die=gltf.scene.getObjectByName('Die 1');
    const cup=gltf.scene.getObjectByName('Cup');
    if(!die)throw new Error('Asset không có model xúc xắc Die 1.');
    this.dieTemplate=die.clone(true);this.dieTemplate.position.set(0,0,0);this.dieTemplate.rotation.set(0,0,0);this.dieTemplate.quaternion.identity();this.dieTemplate.scale.setScalar(DIE_HALF);
    if(cup){
      this.cup=cup.clone(true);this.cup.position.set(-6.7,3.4,-3.7);this.cup.rotation.set(-Math.PI/2,0,.18);this.cup.scale.setScalar(.43);
      this.cup.traverse(node=>{if(node.isMesh){node.material=node.material.clone();node.material.transparent=true;node.material.opacity=.48;node.material.roughness=.08;node.material.metalness=.1;node.castShadow=true}});
      this.scene.add(this.cup);
    }
  }
  buildWorld(){
    this.world?.free?.();
    this.world=new RAPIER.World({x:0,y:-17,z:0});this.world.timestep=this.fixed;this.eventQueue=new RAPIER.EventQueue(true);
    const feltMaterial=this.findAssetMaterial('table')||new THREE.MeshStandardMaterial({color:'#174e3d',roughness:.68,metalness:.05});
    feltMaterial.color?.set('#174f3e');feltMaterial.roughness=.72;feltMaterial.metalness=.04;
    const wood=new THREE.MeshStandardMaterial({color:'#d1a04c',roughness:.42,metalness:.04});
    const darkWood=new THREE.MeshStandardMaterial({color:'#6f4b28',roughness:.5});
    const glass=new THREE.MeshPhysicalMaterial({color:'#9ce3c6',transparent:true,opacity:.24,roughness:.12,metalness:0,transmission:.45,thickness:.3});
    this.addStaticBox(0,-.42,0,18,.84,12,feltMaterial,'floor');
    this.addStaticBox(0,-.86,0,19,.22,13,darkWood,'base');
    this.addStaticBox(0,-.66,-6.15,19,.48,.55,wood,'rim');
    this.addStaticBox(0,-.66,6.15,19,.48,.55,wood,'rim');
    this.addStaticBox(-9.25,-.66,0,.55,.48,12.8,wood,'rim');
    this.addStaticBox(9.25,-.66,0,.55,.48,12.8,wood,'rim');
    this.addStaticBox(0,.8,-6.2,18.7,2.4,.25,glass,'wall');
    this.addStaticBox(0,.8,6.2,18.7,2.4,.25,glass,'wall');
    this.addStaticBox(-9.3,.8,0,.25,2.4,12.6,glass,'wall');
    this.addStaticBox(9.3,.8,0,.25,2.4,12.6,glass,'wall');
    // Tường va chạm cao nhưng vô hình để xúc xắc không văng khỏi bàn.
    this.addInvisibleBox(0,4.2,-6.35,19,9,.2);this.addInvisibleBox(0,4.2,6.35,19,9,.2);
    this.addInvisibleBox(-9.45,4.2,0,.2,9,13);this.addInvisibleBox(9.45,4.2,0,.2,9,13);
    const centerRing=new THREE.Mesh(new THREE.RingGeometry(2.6,2.7,80),new THREE.MeshBasicMaterial({color:'#d7ac55',transparent:true,opacity:.42,side:THREE.DoubleSide}));centerRing.rotation.x=-Math.PI/2;centerRing.position.y=.012;this.scene.add(centerRing);this.staticVisuals.push(centerRing);
    const logo=this.makeTextPlane('DICE ARENA');logo.position.set(0,.018,4.65);logo.rotation.x=-Math.PI/2;this.scene.add(logo);this.staticVisuals.push(logo);
  }
  findAssetMaterial(name){
    let found=null;this.assetScene?.traverse(node=>{if(!found&&node.isMesh&&node.material?.name===name)found=node.material.clone()});return found;
  }
  addStaticBox(x,y,z,w,h,d,material,type){
    const body=this.world.createRigidBody(RAPIER.RigidBodyDesc.fixed().setTranslation(x,y,z));
    const desc=RAPIER.ColliderDesc.cuboid(w/2,h/2,d/2).setFriction(type==='floor'?.74:.55).setRestitution(type==='wall'?.28:.18);
    this.world.createCollider(desc,body);
    const mesh=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),material);mesh.position.set(x,y,z);mesh.receiveShadow=true;mesh.castShadow=type!=='floor'&&this.quality!=='low';this.scene.add(mesh);this.staticVisuals.push(mesh);
  }
  addInvisibleBox(x,y,z,w,h,d){
    const body=this.world.createRigidBody(RAPIER.RigidBodyDesc.fixed().setTranslation(x,y,z));
    this.world.createCollider(RAPIER.ColliderDesc.cuboid(w/2,h/2,d/2).setFriction(.45).setRestitution(.18),body);
  }
  makeTextPlane(text){
    const canvas=document.createElement('canvas');canvas.width=1024;canvas.height=180;const ctx=canvas.getContext('2d');ctx.clearRect(0,0,1024,180);ctx.fillStyle='rgba(255,245,218,.25)';ctx.font='900 92px system-ui';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(text,512,92);const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;const mat=new THREE.MeshBasicMaterial({map:texture,transparent:true,depthWrite:false});return new THREE.Mesh(new THREE.PlaneGeometry(8.2,1.45),mat);
  }
  createDieVisual(index){
    const group=this.dieTemplate.clone(true);group.position.set(0,0,0);group.quaternion.identity();group.scale.setScalar(DIE_HALF);
    group.traverse(node=>{
      if(!node.isMesh)return;
      node.castShadow=true;node.receiveShadow=true;node.material=node.material.clone();
      if(node.material.name==='material'){node.material.color.set(COLORS[index%COLORS.length]);node.material.roughness=.33;node.material.metalness=.08}
      else{node.material.color?.set('#fff4d8');node.material.roughness=.42;node.material.metalness=.12}
    });
    return group;
  }
  spawnDie(index,total,{sequence=false}={}){
    const columns=Math.min(total,5);const row=Math.floor(index/columns),col=index%columns;
    const x=sequence?randomRange(-2.2,2.2):(col-(Math.min(total,columns)-1)/2)*1.55+randomRange(-.18,.18);
    const z=sequence?randomRange(-2,1.5):(row-(Math.ceil(total/columns)-1)/2)*1.6+randomRange(-.18,.18);
    const y=sequence?8.3+index*.08:7.5+row*.45+randomRange(0,.7);
    const q=randomQuaternion();
    const body=this.world.createRigidBody(RAPIER.RigidBodyDesc.dynamic().setTranslation(x,y,z).setRotation(q).setCanSleep(false).setCcdEnabled(true).setLinearDamping(.06).setAngularDamping(.08));
    const collider=this.world.createCollider(RAPIER.ColliderDesc.cuboid(DIE_HALF*.9,DIE_HALF*.9,DIE_HALF*.9).setDensity(1.2).setFriction(.62).setRestitution(.32),body);
    body.setLinvel({x:randomRange(-3.7,3.7),y:randomRange(-1.5,.5),z:randomRange(-3.2,3.2)},true);
    body.setAngvel({x:randomRange(-13,13),y:randomRange(-13,13),z:randomRange(-13,13)},true);
    const visual=this.createDieVisual(index);this.scene.add(visual);
    let resolveResult;const resultPromise=new Promise(resolve=>resolveResult=resolve);
    const die={index,body,collider,visual,age:0,stillFor:0,resolved:false,result:null,resolveResult,resultPromise,resets:0};this.dice.push(die);return die;
  }
  async roll(count,mode,{onStatus=()=>{},onPartial=()=>{}}={}){
    if(this.rolling)return[];this.rolling=true;this.clearDice();
    const results=[];
    try{
      if(mode==='together'){
        onStatus(`Đang lắc ${count} xúc xắc…`);await this.animateCup('together');
        const dice=Array.from({length:count},(_,i)=>this.spawnDie(i,count));this.playRollSound(count);
        const values=await Promise.all(dice.map(d=>d.resultPromise));values.forEach((v,i)=>results[i]=v);onPartial([...results]);
      }else{
        for(let i=0;i<count;i++){
          onStatus(`Đang thả xúc xắc ${i+1}/${count}…`);await this.animateCup('sequence',i);
          const die=this.spawnDie(i,count,{sequence:true});this.playRollSound(1);
          results[i]=await die.resultPromise;onPartial([...results]);await wait(420);
        }
      }
      onStatus('Đã có kết quả.');this.playResultSound();return results;
    }finally{this.rolling=false;this.resetCup()}
  }
  async animateCup(mode,index=0){
    if(!this.cup){await wait(450);return}
    const start={p:this.cup.position.clone(),q:this.cup.quaternion.clone()};
    const center=new THREE.Vector3(mode==='sequence'?randomRange(-1.2,1.2):0,5.1,mode==='sequence'?-.8:-1.2);
    const qCenter=new THREE.Quaternion().setFromEuler(new THREE.Euler(-Math.PI/2,.1,.1));
    await this.tweenCup(start.p,start.q,center,qCenter,280);
    for(let i=0;i<4;i++){
      const p=center.clone().add(new THREE.Vector3(i%2?.35:-.35,(i%2)*.12,i%2?.18:-.18));
      const q=new THREE.Quaternion().setFromEuler(new THREE.Euler(-Math.PI/2+randomRange(-.14,.14),randomRange(-.2,.2),randomRange(-.25,.25)));
      await this.tweenCup(this.cup.position.clone(),this.cup.quaternion.clone(),p,q,90);
    }
    const tilt=new THREE.Quaternion().setFromEuler(new THREE.Euler(-.38,0,-1.15));
    await this.tweenCup(this.cup.position.clone(),this.cup.quaternion.clone(),new THREE.Vector3(3.6,4.4,-1),tilt,230);
    this.cup.visible=false;setTimeout(()=>{if(this.cup){this.resetCup();this.cup.visible=true}},mode==='sequence'?480:680);
  }
  tweenCup(fromP,fromQ,toP,toQ,duration){
    return new Promise(resolve=>{const start=performance.now();const tick=now=>{const t=Math.min(1,(now-start)/duration),e=easeInOut(t);this.cup.position.lerpVectors(fromP,toP,e);this.cup.quaternion.slerpQuaternions(fromQ,toQ,e);if(t<1)requestAnimationFrame(tick);else resolve()};requestAnimationFrame(tick)});
  }
  resetCup(){if(!this.cup)return;this.cup.position.set(-6.7,3.4,-3.7);this.cup.rotation.set(-Math.PI/2,0,.18)}
  resolveDie(die){
    if(die.resolved)return;
    die.resolved=true;const value=this.getTopValue(die.body.rotation());die.result=value;
    die.body.setLinvel({x:0,y:0,z:0},true);die.body.setAngvel({x:0,y:0,z:0},true);
    this.snapFaceUp(die,value);die.body.sleep();die.resolveResult(value);this.playDieSettle(value);
  }
  getTopValue(rotation){
    const q=new THREE.Quaternion(rotation.x,rotation.y,rotation.z,rotation.w);let best=FACE_NORMALS[0],bestDot=-Infinity;
    for(const face of FACE_NORMALS){const dot=face.normal.clone().applyQuaternion(q).dot(UP);if(dot>bestDot){bestDot=dot;best=face}}
    return best.value;
  }
  snapFaceUp(die,value){
    const face=FACE_NORMALS.find(f=>f.value===value)||FACE_NORMALS[0];const align=new THREE.Quaternion().setFromUnitVectors(face.normal,UP);const yaw=new THREE.Quaternion().setFromAxisAngle(UP,randomRange(0,Math.PI*2));const target=yaw.multiply(align);die.body.setRotation(target,true);const p=die.body.translation();die.body.setTranslation({x:p.x,y:Math.max(DIE_HALF+.03,Math.min(p.y,DIE_HALF+.25)),z:p.z},true);
  }
  updateDice(dt){
    for(const die of this.dice){
      const p=die.body.translation(),q=die.body.rotation();die.visual.position.set(p.x,p.y,p.z);die.visual.quaternion.set(q.x,q.y,q.z,q.w);
      if(die.resolved)continue;die.age+=dt;
      if(p.y<-4||Math.abs(p.x)>13||Math.abs(p.z)>10){
        if(die.resets<2){die.resets++;die.body.setTranslation({x:randomRange(-2,2),y:7,z:randomRange(-1.5,1.5)},true);die.body.setLinvel({x:randomRange(-2,2),y:-1,z:randomRange(-2,2)},true);die.body.setAngvel({x:8,y:10,z:7},true);die.stillFor=0;continue}
        this.resolveDie(die);continue;
      }
      const lv=die.body.linvel(),av=die.body.angvel();const linear=Math.hypot(lv.x,lv.y,lv.z),angular=Math.hypot(av.x,av.y,av.z);
      if(die.age>.75&&linear<.16&&angular<.22&&p.y<1.4)die.stillFor+=dt;else die.stillFor=0;
      if(die.stillFor>.48||die.age>8.2)this.resolveDie(die);
    }
  }
  clearDice(){for(const die of this.dice){this.scene.remove(die.visual);die.visual.traverse(node=>{if(node.isMesh)node.material?.dispose?.()});if(this.world&&die.body)this.world.removeRigidBody(die.body)}this.dice=[]}
  resize(){if(!this.renderer)return;const rect=this.canvas.getBoundingClientRect();const w=Math.max(1,rect.width||innerWidth),h=Math.max(1,rect.height||innerHeight);this.renderer.setSize(w,h,false);this.camera.aspect=w/h;this.camera.updateProjectionMatrix()}
  loop(){
    if(!this.running)return;const now=performance.now(),dt=Math.min(.05,(now-this.lastTime)/1000);this.lastTime=now;this.accumulator+=dt;let steps=0;while(this.accumulator>=this.fixed&&steps<8){this.world?.step(this.eventQueue);this.updateDice(this.fixed);this.accumulator-=this.fixed;steps++}
    const t=now*.00016;const desired=new THREE.Vector3(13.5+Math.sin(t)*1.2,11.5,16.5+Math.cos(t)*1.1);this.camera.position.lerp(desired,.01);this.camera.lookAt(0,.65,0);this.renderer.render(this.scene,this.camera);this.frame=requestAnimationFrame(()=>this.loop())
  }
  setSound(enabled){this.sound=enabled}
  playRollSound(count){if(!this.sound)return;this.tone(135,.25,.08);setTimeout(()=>this.tone(190+count*8,.18,.06),110)}
  playDieSettle(value){if(!this.sound)return;this.tone(260+value*35,.08,.025)}
  playResultSound(){if(!this.sound)return;[520,660,820].forEach((f,i)=>setTimeout(()=>this.tone(f,.15,.06),i*110))}
  tone(freq,duration,gain){try{this.audioCtx=this.audioCtx||new(window.AudioContext||window.webkitAudioContext)();const t=this.audioCtx.currentTime,o=this.audioCtx.createOscillator(),g=this.audioCtx.createGain();o.type='sine';o.frequency.value=freq;g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(Math.max(.002,gain*this.volume),t+.008);g.gain.exponentialRampToValueAtTime(.0001,t+duration);o.connect(g);g.connect(this.audioCtx.destination);o.start(t);o.stop(t+duration+.02)}catch{}}
  destroy(){this.running=false;cancelAnimationFrame(this.frame);window.removeEventListener('resize',this.resizeHandler);this.clearDice();this.world?.free?.();this.renderer?.dispose();this.audioCtx?.close?.()}
}
