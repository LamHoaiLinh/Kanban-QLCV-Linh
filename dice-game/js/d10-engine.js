import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {clone as cloneSkeleton} from 'three/addons/utils/SkeletonUtils.js';

const WORLD_UP=new THREE.Vector3(0,1,0);
const SCREEN_UP_ON_TABLE=new THREE.Vector3(0,0,-1);
const LOCAL_Y=new THREE.Vector3(0,1,0);

// Hướng pháp tuyến của từng mặt được đọc trực tiếp từ asset D10.glb.
// Bảng này dùng để đưa đúng con số đã quay lên mặt trên.
const FACE_NORMAL_BY_VALUE={
  0:new THREE.Vector3( 0.64208255, 0.60836457,-0.46650032),
  1:new THREE.Vector3( 0.24525376,-0.60836457,-0.75481332),
  2:new THREE.Vector3(-0.24525375, 0.60836455,-0.75481334),
  3:new THREE.Vector3(-0.64208263,-0.60836449,-0.46650031),
  4:new THREE.Vector3(-0.79365774, 0.60836452, 0.00000006),
  5:new THREE.Vector3(-0.64208254,-0.60836463, 0.46650025),
  6:new THREE.Vector3(-0.24525377, 0.60836459, 0.75481330),
  7:new THREE.Vector3( 0.24525374,-0.60836463, 0.75481328),
  8:new THREE.Vector3( 0.64208256, 0.60836456, 0.46650033),
  9:new THREE.Vector3( 0.79365781,-0.60836443, 0.00000000)
};

function randomInt(min,max){
  const range=max-min+1,limit=Math.floor(0x100000000/range)*range,a=new Uint32Array(1);
  do{crypto.getRandomValues(a)}while(a[0]>=limit);
  return min+(a[0]%range);
}
function randomQuaternion(){
  const a=new Uint32Array(3);crypto.getRandomValues(a);
  const u1=a[0]/0x100000000,u2=a[1]/0x100000000,u3=a[2]/0x100000000;
  const s1=Math.sqrt(1-u1),s2=Math.sqrt(u1);
  return new THREE.Quaternion(
    s1*Math.sin(2*Math.PI*u2),s1*Math.cos(2*Math.PI*u2),
    s2*Math.sin(2*Math.PI*u3),s2*Math.cos(2*Math.PI*u3)
  );
}
function easeOutCubic(t){return 1-Math.pow(1-t,3)}
function easeInOutCubic(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2}
function wait(ms){return new Promise(resolve=>setTimeout(resolve,ms))}

function resultQuaternion(value){
  const normal=FACE_NORMAL_BY_VALUE[value].clone().normalize();
  const align=new THREE.Quaternion().setFromUnitVectors(normal,WORLD_UP);
  // Hướng “đầu chữ” trên từng mặt. Với nhóm mặt dưới phải đảo chiều trước khi đưa lên trên.
  const localFaceUp=LOCAL_Y.clone().addScaledVector(normal,-LOCAL_Y.dot(normal)).normalize();
  if(normal.y<0)localFaceUp.multiplyScalar(-1);
  const afterAlign=localFaceUp.applyQuaternion(align).setY(0).normalize();
  const cross=afterAlign.clone().cross(SCREEN_UP_ON_TABLE).dot(WORLD_UP);
  const dot=THREE.MathUtils.clamp(afterAlign.dot(SCREEN_UP_ON_TABLE),-1,1);
  const yaw=new THREE.Quaternion().setFromAxisAngle(WORLD_UP,Math.atan2(cross,dot));
  return yaw.multiply(align).normalize();
}

export class D10AssetEngine{
  constructor(stage,{onSettle=()=>{}}={}){
    this.stage=stage;this.onSettle=onSettle;this.canvas=null;this.renderer=null;this.scene=null;this.camera=null;
    this.template=null;this.clip=null;this.instances=[];this.running=true;this.frame=0;this.last=performance.now();
    this.ready=false;this.visible=false;this.resizeObserver=null;
  }
  async init(){
    if(this.ready)return;
    this.canvas=document.createElement('canvas');
    this.canvas.className='d10-asset-canvas';
    this.canvas.setAttribute('aria-label','Xúc xắc D10 bằng asset 3D');
    this.stage.prepend(this.canvas);
    this.scene=new THREE.Scene();
    this.camera=new THREE.PerspectiveCamera(32,1,.1,100);
    this.camera.position.set(0,8.8,11.8);this.camera.lookAt(0,.55,0);
    this.renderer=new THREE.WebGLRenderer({canvas:this.canvas,alpha:true,antialias:true,powerPreference:'high-performance'});
    this.renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.75));
    this.renderer.outputColorSpace=THREE.SRGBColorSpace;
    this.renderer.shadowMap.enabled=true;this.renderer.shadowMap.type=THREE.PCFSoftShadowMap;
    this.renderer.toneMapping=THREE.ACESFilmicToneMapping;this.renderer.toneMappingExposure=1.1;
    this.scene.add(new THREE.HemisphereLight(0xfff4dc,0x315749,2.2));
    const key=new THREE.DirectionalLight(0xfff0d0,3.1);key.position.set(6,11,7);key.castShadow=true;key.shadow.mapSize.set(1024,1024);this.scene.add(key);
    const fill=new THREE.PointLight(0x8bd8bc,12,25);fill.position.set(-7,5,3);this.scene.add(fill);
    const warm=new THREE.PointLight(0xffba69,9,22);warm.position.set(7,4,-3);this.scene.add(warm);
    const ground=new THREE.Mesh(new THREE.PlaneGeometry(18,11),new THREE.ShadowMaterial({color:0x071b14,opacity:.28}));
    ground.rotation.x=-Math.PI/2;ground.position.y=0;ground.receiveShadow=true;this.scene.add(ground);

    const assetUrl=new URL('../assets/D10.glb',import.meta.url).href;
    const response=await fetch(assetUrl,{cache:'force-cache'});
    if(!response.ok)throw new Error(`Không đọc được D10.glb (${response.status}).`);
    const buffer=await response.arrayBuffer();
    const loader=new GLTFLoader();
    // Parse ArrayBuffer với base path dạng chuỗi để tránh lỗi lastIndexOf của GLTFLoader.
    const gltf=await loader.parseAsync(buffer,new URL('../assets/',import.meta.url).href);
    this.template=gltf.scene;
    this.clip=gltf.animations?.find(a=>a.name==='D10_SHAKE_ROLL_LOOP')||gltf.animations?.[0]||null;
    this.template.traverse(node=>{if(node.isMesh){node.castShadow=true;node.receiveShadow=true}});
    this.resizeObserver=new ResizeObserver(()=>this.resize());this.resizeObserver.observe(this.stage);
    this.resize();this.setVisible(false);this.ready=true;this.loop();
  }
  setVisible(show){this.visible=!!show;if(this.canvas)this.canvas.hidden=!show}
  resize(){
    if(!this.renderer||!this.canvas)return;
    const rect=this.stage.getBoundingClientRect(),w=Math.max(1,rect.width),h=Math.max(1,rect.height);
    this.renderer.setSize(w,h,false);this.camera.aspect=w/h;this.camera.updateProjectionMatrix();
  }
  clear(){
    for(const item of this.instances){
      this.scene.remove(item.group);item.mixer?.stopAllAction();
      item.model.traverse(node=>{if(node.isMesh&&node.material&&node.material.userData?.d10CloneMaterial)node.material.dispose?.()});
    }
    this.instances=[];
  }
  createInstance(index,total){
    const source=cloneSkeleton(this.template);
    source.traverse(node=>{
      if(node.isMesh){
        node.castShadow=true;node.receiveShadow=true;
        if(node.material){node.material=node.material.clone();node.material.userData.d10CloneMaterial=true}
      }
    });
    const modelHolder=new THREE.Group();modelHolder.add(source);
    source.scale.setScalar(.78);
    const box=new THREE.Box3().setFromObject(source),center=box.getCenter(new THREE.Vector3()),size=box.getSize(new THREE.Vector3());
    source.position.sub(center);
    const group=new THREE.Group();group.add(modelHolder);
    const position=this.layoutPosition(index,total);group.position.set(position.x,size.y*.5+.03,position.z);
    this.scene.add(group);
    const mixer=this.clip?new THREE.AnimationMixer(source):null;
    const action=mixer&&this.clip?mixer.clipAction(this.clip):null;
    const animatedRoot=source.getObjectByName('DiceRoot');
    const initialRoot=animatedRoot?{position:animatedRoot.position.clone(),quaternion:animatedRoot.quaternion.clone(),scale:animatedRoot.scale.clone()}:null;
    const item={group,model:modelHolder,source,mixer,action,animatedRoot,initialRoot,restY:size.y*.5+.03,targetPosition:position,value:null};
    this.instances.push(item);return item;
  }
  layoutPosition(index,total){
    const cols=Math.min(5,total),rows=Math.ceil(total/cols),col=index%cols,row=Math.floor(index/cols);
    const gapX=total<=3?3.25:total<=5?2.6:2.35,gapZ=2.45;
    return{x:(col-(Math.min(total,cols)-1)/2)*gapX,z:(row-(rows-1)/2)*gapZ};
  }
  async roll(count,mode,{onStatus=()=>{},onPartial=()=>{}}={}){
    await this.init();this.setVisible(true);this.clear();
    const results=[];
    if(mode==='together'){
      onStatus(`Đang thả ${count} xúc xắc D10 bằng asset 3D…`);
      const items=Array.from({length:count},(_,i)=>this.createInstance(i,count));
      const values=await Promise.all(items.map((item,i)=>this.animateOne(item,i*65)));
      values.forEach((v,i)=>results[i]=v);onPartial([...results]);
    }else{
      for(let i=0;i<count;i++){
        onStatus(`Đang thả xúc xắc D10 ${i+1}/${count}…`);
        const item=this.createInstance(i,count);results[i]=await this.animateOne(item,0);onPartial([...results]);await wait(300);
      }
    }
    return results;
  }
  async animateOne(item,delay){
    await wait(delay);
    const value=randomInt(0,9);item.value=value;
    const targetQ=resultQuaternion(value),startQ=randomQuaternion(),spinQ=randomQuaternion();
    item.group.quaternion.copy(startQ);
    item.group.position.y=item.restY+5.2;
    item.group.position.x=item.targetPosition.x+(Math.random()-.5)*.5;
    item.group.position.z=item.targetPosition.z+(Math.random()-.5)*.4;
    if(item.action){item.action.reset();item.action.setLoop(THREE.LoopRepeat,2);item.action.timeScale=2.2;item.action.play()}
    const duration=1750,start=performance.now();
    await new Promise(resolve=>{
      const tick=now=>{
        const t=Math.min(1,(now-start)/duration),drop=easeOutCubic(t),settle=Math.max(0,(t-.63)/.37);
        const bounce=Math.abs(Math.sin(t*Math.PI*3.2))*Math.pow(1-t,1.7)*.85;
        item.group.position.y=THREE.MathUtils.lerp(item.restY+5.2,item.restY,drop)+bounce;
        item.group.position.x=THREE.MathUtils.lerp(item.group.position.x,item.targetPosition.x,.08);
        item.group.position.z=THREE.MathUtils.lerp(item.group.position.z,item.targetPosition.z,.08);
        if(t<.63)item.group.quaternion.slerp(spinQ,.055);else item.group.quaternion.slerp(targetQ,easeInOutCubic(settle)*.22+.05);
        if(t<1)requestAnimationFrame(tick);else resolve();
      };requestAnimationFrame(tick);
    });
    if(item.action){item.action.stop();item.mixer.setTime(0)}
    if(item.animatedRoot&&item.initialRoot){item.animatedRoot.position.copy(item.initialRoot.position);item.animatedRoot.quaternion.copy(item.initialRoot.quaternion);item.animatedRoot.scale.copy(item.initialRoot.scale)}
    item.group.position.set(item.targetPosition.x,item.restY,item.targetPosition.z);item.group.quaternion.copy(targetQ);
    this.onSettle(value);return value;
  }
  loop(){
    if(!this.running)return;
    const now=performance.now(),dt=Math.min(.05,(now-this.last)/1000);this.last=now;
    for(const item of this.instances)item.mixer?.update(dt);
    if(this.visible)this.renderer?.render(this.scene,this.camera);
    this.frame=requestAnimationFrame(()=>this.loop());
  }
  destroy(){
    this.running=false;cancelAnimationFrame(this.frame);this.clear();this.resizeObserver?.disconnect();
    this.renderer?.dispose();this.canvas?.remove();this.ready=false;
  }
}
