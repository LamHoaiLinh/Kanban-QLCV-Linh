import puppeteer from 'puppeteer-core';
import {spawn,execFileSync} from 'node:child_process';
import {mkdirSync,writeFileSync} from 'node:fs';
const label=process.env.CAPTURE_LABEL||'response-after',out='evidence/'+label,baseline=label==='response-before';mkdirSync(out,{recursive:true});
const args=['node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port','4234'];if(baseline)args.push('--outDir',process.env.CAPTURE_BASELINE_DIR||'evidence/baseline-dist');
const server=spawn(process.execPath,args,{stdio:'ignore'});let browser;
const report={label,renderer:'Chromium SwiftShader (software)',clips:[],samples:[],limitations:['No real iPhone or desktop GPU certification.','Seeded waterline fixtures support motion diagnosis; encoded FPS is not device FPS.','Forced embedded-food fixture tests defensive target rejection; it is not a permitted spawn.']};
try{
 for(let i=0;i<100;i++){try{if((await fetch('http://127.0.0.1:4234/')).ok)break;}catch{}await new Promise(r=>setTimeout(r,100));}
 browser=await puppeteer.launch({executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',headless:true,protocolTimeout:240000,args:['--no-sandbox','--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
 const page=await browser.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));await page.setViewport({width:800,height:500});
 await page.evaluateOnNewDocument(()=>{let s=20261010;Math.random=()=>{s=(Math.imul(s,1664525)+1013904223)>>>0;return s/4294967296;};});
 await page.goto('http://127.0.0.1:4234/?kanban=1&qa=1');await page.waitForFunction(()=>window.__kanStabilityWorld,{timeout:90000});
 const hidden=await page.addStyleTag({content:'.panel,.toolbar{display:none!important}'});
 const scene=async(name)=>page.evaluate(name=>{
   window.__kan42Pause();window.__kan42EcoMode('relax');window.__kan42Day(1);window.__kan42Follow(null);
   window.__kan42Scene({water:name==='yellow-waterline'?'saltwater':'freshwater',gallons:75,fish:name==='waterline'?{angelfish:3}:name==='yellow-waterline'?{'yellow-tang':1,'ocellaris-clown':2}:name==='food-roof'?{}:{'zebra-danio':6,'betta':1},flora:{},decor:name.includes('waterline')?[]:['hollow-log'],lighting:'daylight',dayNight:'day'});
   const {fish,env,decor,rig}=window.__kanStabilityWorld();
   for(const bit of [...fish.food.bits])fish.food.eat(bit);
   if(name.includes('waterline'))for(const [i,a] of fish.populations.flatMap(p=>p.agents).entries()){
    a.pos.set(-.12+i*.13,env.surfaceY-fish.verticalClearance(a,env)-.002,0);a.vel.set(.015,0,.001);a.anchor.copy(a.pos);if(name==='yellow-waterline')a.anchor.y=env.surfaceY;a.mode='rest';a.modeT=10;a.drop=undefined;
   }
   window.__kanFoodTestCamera('still');
   if(!name.includes('waterline')){
    const log=decor.group.children.find(o=>o.name.startsWith('hollow-bark'));
    const pos=log.position.clone();
    if(name==='food-roof')pos.y=env.surfaceY-.012;
    else if(name==='reachable-food'){pos.set(-.18,env.surfaceY*.55,.15);for(const a of fish.populations.flatMap(p=>p.agents)){a.pos.set(.18,env.surfaceY*.55,.15);a.drop=undefined;a.mode='cruise';a.anchor.copy(a.pos);}}
    else{
     pos.fromBufferAttribute(log.geometry.attributes.position,5).multiplyScalar(.85).applyMatrix4(log.matrixWorld);
     for(const [i,a] of fish.populations.flatMap(p=>p.agents).entries()){
      a.pos.copy(pos).add(log.position.clone().set(0,.10+i*.018,0));a.anchor.copy(a.pos);a.vel.set(.01,0,0);a.mode='cruise';a.modeT=3;a.drop=undefined;
     }
    }
    fish.feed(pos.x,pos.z,env,'fish-cookie',pos.y);
    if(name==='blocked-food')fish.food.bits.at(-1).state='settled';
   }
   window.__kan42Step(.016);
   return {name,fish:fish.populations.reduce((n,p)=>n+p.agents.length,0),quality:window.__kan42Probe().quality};
 },name);
 const record=async(name,seconds)=>{
  const fixture=await scene(name),start=Date.now();
  await page.screenshot({path:out+'/'+name+'.png'});
  const rec=await page.screencast({path:out+'/'+name+'.webm',fps:15});
  await page.evaluate(()=>window.__kan42Resume());
  for(let n=0;n<seconds;n+=5){await new Promise(r=>setTimeout(r,5000));const sample=await page.evaluate(()=>{const w=window.__kanStabilityWorld();return {stats:window.__kan42Probe().stats,physics:w.fish.getPhysicsSnapshot(w.env),food:w.fish.food.bits.map(b=>({pos:b.pos.toArray(),state:b.state})),memory:w.renderer.info.memory,calls:w.renderer.info.render.calls,triangles:w.renderer.info.render.triangles};});report.samples.push({clip:name,wallSeconds:(Date.now()-start)/1000,...sample});}
  await rec.stop();report.clips.push({...fixture,wallSeconds:(Date.now()-start)/1000,file:name+'.webm'});console.log(label+' '+name+' recorded');
 };
 await record('yellow-waterline',35);await record('waterline',35);await record('food-roof',25);await record('blocked-food',25);await record('reachable-food',25);
 if(!baseline){
  await hidden.evaluate(el=>el.remove());
  await page.setViewport({width:390,height:844,isMobile:true,hasTouch:true});await scene('waterline');await page.screenshot({path:out+'/portrait-emulation.png'});
 }
 report.pageErrors=errors;writeFileSync(out+'/capture-report.json',JSON.stringify(report,null,2));
 if(errors.length)throw Error(errors.join('; '));
}finally{await browser?.close();server.kill();}
