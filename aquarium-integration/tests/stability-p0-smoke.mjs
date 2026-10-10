import puppeteer from 'puppeteer-core';
import {spawn,execFileSync} from 'node:child_process';import {writeFileSync} from 'node:fs';
const chrome=[process.env.CHROMIUM_PATH,'/usr/bin/google-chrome','/usr/bin/google-chrome-stable','/usr/bin/chromium','/opt/google/chrome/chrome'].filter(Boolean).find(p=>{try{execFileSync('test',['-x',p]);return true;}catch{return false;}});
if(!chrome)throw Error('Chromium unavailable');
const server=spawn(process.execPath,['node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port','4231'],{stdio:'ignore'});let browser;
try{
 for(let i=0;i<100;i++){try{if((await fetch('http://127.0.0.1:4231/')).ok)break;}catch{}await new Promise(r=>setTimeout(r,100));}
 browser=await puppeteer.launch({executablePath:chrome,headless:true,protocolTimeout:240000,args:['--no-sandbox','--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
 const page=await browser.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:4231/?kanban=1&qa=1');await page.waitForFunction(()=>window.__kanStabilityWorld);await page.evaluate(()=>window.__kan42Pause());
 const collision=await page.evaluate(()=>{
  let seed=420;Math.random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
  const results=[];
  for(const id of ['hollow-log','split-log','log-arch','driftwood-stump','river-rocks','slate-stack']){
   window.__kan42Scene({fish:{},gallons:75,flora:{},decor:[id]});
   const {fish,env,decor}=window.__kanStabilityWorld(),v=decor.group.position.clone();
   const faces=[];
   decor.group.traverse(mesh=>{
    if(!mesh.isMesh)return; const p=mesh.geometry.attributes.position,ix=mesh.geometry.index;
    for(let i=0;i<(ix?.count??p.count);i+=3){
     const at=j=>v.clone().fromBufferAttribute(p,ix?ix.getX(j):j).applyMatrix4(mesh.matrixWorld);
     const a=at(i),b=at(i+1),c=at(i+2),normal=b.clone().sub(a).cross(c.clone().sub(a)).normalize();
     if(normal.y>.4)faces.push({center:a.add(b).add(c).multiplyScalar(1/3),normal});
    }
   });
   let checked=0,inside=0,sweeps=0,settled=0,invalid=0;const bad=[];
   for(const dt of [1/30,1/60,1/120])for(let n=0;n<100;n++){
    const face=faces[Math.floor(Math.random()*faces.length)];if(!face)continue;
    const from=face.center.clone().add(v.clone().set(0,.024,0));
    if(env.solids.contains(from,.0061)){invalid++;continue;}
    const hit=env.solids.sweep(from,from.clone().add(v.clone().set(0,-.06,0)),.0025);if(hit)sweeps++;
    for(const bit of [...fish.food.bits])fish.food.eat(bit);
    fish.food.scatter(from.x,from.z,from.y,n%2?'normal':'fish-cookie');const bit=fish.food.bits[0];checked++;
    for(let step=0;step<1/dt;step++){
      fish.food.update(dt,env.floorY,env.solids);
      if(env.solids.contains(bit.pos,Math.max(0,bit.radius-.00002))){inside++;if(bad.length<3)bad.push({pos:bit.pos.toArray(),from:from.toArray(),state:bit.state,step,dt});break;}
    }
    if(bit.state==='settled')settled++;
   }
   const tunnels=env.tunnels.map(t=>({inside:env.solids.contains(t.middle,.0025),blocked:!!env.solids.sweep(t.entrance,t.exit,.0025),id:t.id}));
   results.push({id,triangles:faces.length,checked,inside,sweeps,settled,invalid,bad,tunnels});
  }
  return results;
 });
 for(const r of collision){if(r.checked<100||r.inside||r.sweeps!==r.checked||r.tunnels.some(t=>t.inside||t.blocked))throw Error('Solid collision regression '+JSON.stringify(r));}
 console.log('PASS swept pellets and cookies: '+collision.reduce((s,r)=>s+r.checked,0)+' valid trajectories; all three bores open');
 writeFileSync('stability-p0-report.json',JSON.stringify({collision},null,2));
 const feeding=await page.evaluate(()=>{
  const output=[];
  for(const mode of ['open','blocked','stalled','crowd']){
   window.__kan42Scene({fish:{'neon-tetra':mode==='crowd'?60:6},gallons:180,flora:{},decor:mode==='blocked'?['hollow-log']:[]});window.__kan42EcoMode('relax');
   const {fish,env,decor}=window.__kanStabilityWorld(),actors=fish.populations.flatMap(p=>p.agents),v=actors[0].pos.clone();
   for(const b of [...fish.food.bits])fish.food.eat(b);
   actors.forEach((a,i)=>{a.pos.set(-.12-i*.016,env.surfaceY*.5,0);a.vel.set(.01,0,0);a.prevYaw=0;a.prevPitch=0;a.anchor.set(.2,a.pos.y,0);a.mode='cruise';a.modeT=20;a.drop=undefined;a.foodTarget=undefined;a.foodProgress=undefined;a.foodCooldown=0;});
   let food=v.clone().set(-.08,env.surfaceY*.5,0);
   if(mode==='blocked'){
    const log=decor.group.children.find(o=>o.name.startsWith('hollow-bark'));
    const p=log.geometry.attributes.position;
    food.fromBufferAttribute(p,5).multiplyScalar(.85).applyMatrix4(log.matrixWorld);
    actors.forEach((a,i)=>{a.pos.copy(food).add(v.clone().set(0,.11+i*.015,0));a.anchor.copy(food);});
   }
   fish.feed(food.x,food.z,env,'fish-cookie',food.y);const bit=fish.food.bits.at(-1);bit.state='settled';bit.age=.5;
   let eaten=0,maxClaimants=0,lastFeed=0,abandonedAt=null,hadTarget=false;const first=actors[0],initial=first.pos.clone(),trace=[];
   // Fault injection starts with an acquired target. Random reaction latency
   // must not allow another fish to win before the actor can be frozen.
   if(mode==='stalled'){first.foodTarget=bit;first.foodProgress={best:first.pos.distanceTo(bit.pos),stalled:0,elapsed:0,checkAt:env.time+.25};}
   fish.food.onEat=()=>eaten++;
   for(let i=0;i<60*20;i++){
    if(mode==='stalled')first.pos.copy(initial);
    env.time+=1/60;fish.update(1/60,env);
    const claimants=actors.filter(a=>a.foodTarget===bit).length;maxClaimants=Math.max(maxClaimants,claimants);
    if(first.foodTarget)hadTarget=true;else if(hadTarget&&abandonedAt===null)abandonedAt=i/60;
    if(actors.some(a=>a.mode==='feed'))lastFeed=i/60;
    if(i%60===0)trace.push({t:i/60,claimants,mode:first.mode,food:bit.state,first:first.pos.toArray(),progress:first.foodProgress?{...first.foodProgress}:null});
   }
   output.push({mode,eaten,maxClaimants,lastFeed,abandonedAt,hadTarget,trace});
  }
  return output;
 });
 const open=feeding.find(r=>r.mode==='open'),blocked=feeding.find(r=>r.mode==='blocked'),stalled=feeding.find(r=>r.mode==='stalled');
 if(open.eaten!==1||blocked.eaten||blocked.maxClaimants||!stalled.hadTarget||stalled.abandonedAt>2.7)throw Error('Feeding regression '+JSON.stringify(feeding));
 if(feeding.some(r=>r.maxClaimants>3||r.lastFeed>12.6))throw Error('Unbounded chase');
 console.log('PASS reachable bite, blocked rejection, 2.5s stall timeout, three-cookie-claimant cap, finite excitement');

 writeFileSync('stability-p0-report.json',JSON.stringify({collision,feeding},null,2));
 if(errors.length)throw Error(errors.join('; '));
}finally{await browser?.close();server.kill();}
