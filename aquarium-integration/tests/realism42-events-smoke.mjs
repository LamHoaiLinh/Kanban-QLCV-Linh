import puppeteer from 'puppeteer-core';import {spawn,execFileSync} from 'node:child_process';import {writeFileSync} from 'node:fs';
const chrome=['/usr/bin/google-chrome','/usr/bin/google-chrome-stable','/usr/bin/chromium','/opt/google/chrome/chrome'].find(p=>{try{execFileSync('test',['-x',p]);return true}catch{return false}});
const server=spawn(process.execPath,['node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port','4203','--strictPort'],{stdio:'pipe'});let browser;
try{
 for(let i=0;i<100;i++){try{if((await fetch('http://127.0.0.1:4203/')).ok)break}catch{}await new Promise(r=>setTimeout(r,100));}
 browser=await puppeteer.launch({executablePath:chrome,headless:true,args:['--no-sandbox','--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});const page=await browser.newPage();
 await page.evaluateOnNewDocument(()=>localStorage.setItem('aquarium-v1',JSON.stringify({state:{quality:'medium',config:{name:'Event audit',water:'freshwater',gallons:75,substrate:'sand',background:'natural',lighting:'daylight',dayNight:'night',fish:{'neon-tetra':12,corydoras:6,'zebra-oto':6,'cherry-shrimp':6,'nerite-snail':4,'kuhli-loach':6,angelfish:2,betta:1},fishNames:{},flora:{},decor:['hollow-log','split-log','log-arch']}},version:0})));
 await page.goto('http://127.0.0.1:4203/?kanban=1&qa=1',{waitUntil:'domcontentloaded'});await page.waitForFunction(()=>window.__kan42Arrange);
 await page.evaluate(()=>{window.__kan42Pause();window.__kan42Day(.2);});
 const types=await page.evaluate(()=>window.__kanRealismProbe().habitat.types),audit=[];
 for(const type of types){
  const result=await page.evaluate(type=>{
    let started=false;
    for(let attempt=0;attempt<24&&!started;attempt++){window.__kan42Arrange();started=window.__kan42Event(type);}
    if(!started)return {type,started:false};
    const event=window.__kan42Probe().events.find(e=>e.type===type);
    if(!event)return {type,started:true,actors:0};
    const before=window.__kan42Probe().telemetry.fish.filter(f=>event.actorIds.includes(f.key));
    let peakTravel=0,finite=true;
    for(let i=0;i<50;i++){
      window.__kanEcoFastForward(.5);const fish=window.__kan42Probe().telemetry.fish.filter(f=>event.actorIds.includes(f.key));
      finite&&=fish.every(f=>f.pos.every(Number.isFinite)&&f.vel.every(Number.isFinite));
      for(const f of fish){const b=before.find(b=>b.key===f.key);peakTravel=Math.max(peakTravel,Math.hypot(...f.pos.map((x,i)=>x-b.pos[i])));}
    }
    window.__kanEcoFastForward(45);
    const ended=!window.__kan42Probe().events.some(e=>e.id===event.id);
    return {type,started,actors:event.actorIds.length,finite,peakTravel,ended};
  },type);
  audit.push(result);console.log('audit',JSON.stringify(result));
  if(!result.started||!result.actors||!result.finite||!result.ended||result.peakTravel<.001)throw Error('Event did not actually run '+JSON.stringify(result));
 }
 // Single, pair and triple surface-breach schedules use actual delayed actions.
 await page.evaluate(()=>{window.__kan42Scene({gallons:40,fish:{guppy:8},decor:[],flora:{}});window.__kan42EcoMode('relax');});
 for(const count of [1,2,3]){
  const r=await page.evaluate(count=>{
    window.__kan42Arrange();const before=window.__kan42Probe().telemetry.jump;const queued=window.__kan42Burst(count),phases=[];
    for(let i=0;i<200;i++){window.__kanEcoFastForward(.05);phases.push(window.__kan42Probe().telemetry.fish.filter(f=>f.jump).length);}
    const p=window.__kan42Probe();return {queued,before,after:p.telemetry.jump,active:p.telemetry.fish.some(f=>f.jump),finite:p.telemetry.fish.every(f=>f.pos.every(Number.isFinite)),phases:[...new Set(phases)]};
  },count);
  if(r.queued!==count||r.active||!r.finite||r.after.splashes-r.before.splashes!==count)throw Error('Burst schedule '+count+' '+JSON.stringify(r));
 }
 writeFileSync('realism42-event-audit.json',JSON.stringify(audit,null,2));console.log('PASS twenty real event routes: valid actors, displacement, bounded lifetime; staggered one/two/three breaches');
}finally{await browser?.close();server.kill();}
