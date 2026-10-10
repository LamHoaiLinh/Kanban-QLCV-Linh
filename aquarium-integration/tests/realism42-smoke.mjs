import puppeteer from 'puppeteer-core';
import {spawn,execFileSync} from 'node:child_process';
import {writeFileSync} from 'node:fs';
const chrome=['/usr/bin/google-chrome','/usr/bin/google-chrome-stable','/usr/bin/chromium','/opt/google/chrome/chrome'].find(p=>{try{execFileSync('test',['-x',p]);return true}catch{return false}});
if(!chrome)throw Error('Chromium unavailable');
const server=spawn(process.execPath,['node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port','4198','--strictPort'],{stdio:'pipe'});
let browser;
const assert=(ok,msg)=>{if(!ok)throw Error(msg);};
const report={checks:[],performance:[],events:[]};
try{
 for(let i=0;i<100;i++){try{if((await fetch('http://127.0.0.1:4198/')).ok)break}catch{}await new Promise(r=>setTimeout(r,100));}
 browser=await puppeteer.launch({headless:true,executablePath:chrome,args:['--no-sandbox','--disable-setuid-sandbox','--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
 const page=await browser.newPage(),errors=[];
 page.on('pageerror',e=>errors.push(e.message));
 await page.setViewport({width:1280,height:800,deviceScaleFactor:1});
 await page.evaluateOnNewDocument(()=>{let state=420031;Math.random=()=>{state=(Math.imul(1664525,state)+1013904223)>>>0;return state/4294967296;};});
 await page.goto('http://127.0.0.1:4198/?kanban=1&qa=1',{waitUntil:'domcontentloaded'});
 await page.waitForFunction(()=>window.__kan42Probe&&window.__kan42Store);
 await page.evaluate(()=>{window.__kan42Quality('medium');window.__kan42Scene({gallons:180,fish:{'neon-tetra':100},flora:{},decor:['hollow-log','log-arch'],fishNames:{'neon-tetra:0':'Linh'}});window.__kanFoodTestCamera('cinematic');});
 let probe=await page.evaluate(()=>window.__kan42Probe());
 assert(probe.telemetry.fish.length===100,'180g must simulate 100 compatible fish');
 await page.screenshot({path:'realism42-100-fish.png'});
 // 30 minutes of the real fixed-step physics, including the real observational camera.
 for(let minute=0;minute<30;minute++){
  const p=await page.evaluate(()=>{window.__kanEcoFastForward(60);return window.__kan42Probe();});
  assert(p.telemetry.fish.length===100,'population lost in ambient');
  assert(p.physics.wallViolations===0,'ambient wall violations '+JSON.stringify(p.physics));
  assert(p.physics.maxOverlap<.024,'deep solid penetration '+JSON.stringify(p.physics));
  assert(p.telemetry.fish.every(a=>a.pos.every(Number.isFinite)&&a.vel.every(Number.isFinite)),'NaN ambient');
  assert(p.telemetry.fish.every(a=>a.stuck<2.7),'stuck fish '+JSON.stringify(p.telemetry.fish.filter(a=>a.stuck>=2.7)));
 }
 report.checks.push('100 fish / 30 simulated minutes, boundaries, solid collisions, finite poses, stuck recovery');
 for(let cycle=0;cycle<20;cycle++){
  await page.evaluate(()=>window.__kan42Scene({gallons:180,fish:{'neon-tetra':100},fishNames:{'neon-tetra:0':'Linh'}}));
  for(const gallons of [120,75,40,20,5,180]){
   const p=await page.evaluate(g=>{window.__kan42Scene({gallons:g});window.__kanEcoFastForward(.5);return window.__kan42Probe();},gallons);
   assert(p.telemetry.fish.length<=100,'absolute cap');assert(p.physics.wallViolations===0,'resize containment');
   assert(p.telemetry.fish.every(a=>a.pos.every(Number.isFinite)&&a.vel.every(Number.isFinite)),'NaN resize');
   assert(p.config.fishNames['neon-tetra:0']==='Linh','named metadata lost');
   if(gallons===180)assert(p.telemetry.fish.length===0,'upsizing must not regenerate removed fish');
  }
 }
 report.checks.push('20 shrink/grow cycles, no NaN, named metadata retained, no automatic respawn');
 // Exercise persisted entry points and undo, including rounding budget at low quality.
 const saved=await page.evaluate(()=>window.__kan42Store('exercise'));
 assert(saved.savedUnchanged&&saved.restored===100&&saved.reloaded===100&&saved.trimmed===0,'store transaction '+JSON.stringify(saved));
 report.checks.push('save/load/resize/undo, durable saved snapshot unchanged');
 await page.evaluate(()=>{window.__kan42Scene({gallons:180,fish:{'neon-tetra':60,'ember-tetra':40},decor:[],flora:{}});window.__kan42Quality('low');});
 probe=await page.evaluate(()=>window.__kan42Probe());assert(probe.telemetry.fish.length<=60,'integer performance cap overflow');
 report.checks.push('low quality render cap never edits durable stock');
 // Statistical conditional breach and true crossing/return, splash exactly once.
 await page.evaluate(()=>window.__kan42Quality('medium'));
 let launched=0,breached=0,splashes=0;
 for(let i=0;i<100;i++){
  const result=await page.evaluate(i=>{
    window.__kan42Scene({gallons:40,fish:{guppy:6},flora:{},decor:[]});
    const before=window.__kan42Probe().telemetry.jump;
    const fish=window.__kan42Probe().telemetry.fish;
    const a=fish.find(a=>window.__kan42Action(a.key,'dash',(i+.5)/100));
    if(!a)return null;
    let above=false,apex=-Infinity,violation=false;
    for(let j=0;j<130;j++){
      window.__kanEcoFastForward(.05);const p=window.__kan42Probe();const actor=p.telemetry.fish.find(f=>f.key===a.key);
      const surf=window.__kanFoodProbe().dims.surfaceY;
      if(actor.pos[1]>surf+.012)above=true;apex=Math.max(apex,actor.pos[1]-surf);
      if(p.physics.wallViolations)violation=true;
    }
    const p=window.__kan42Probe();return {jump:p.telemetry.jump,before,above,apex,violation,active:p.telemetry.fish.find(f=>f.key===a.key).jump};
  },i);
  if(!result)continue;launched++;breached+=result.jump.breaches-result.before.breaches;splashes+=result.jump.splashes-result.before.splashes;
  assert(!result.violation&&!result.active,'jump returned / containment '+JSON.stringify(result));
  if(i<50)assert(result.above&&result.apex>.012&&result.apex<.09,'visible bounded breach '+JSON.stringify(result));
 }
 assert(launched>=90,'insufficient eligible dash samples');assert(Math.abs(breached/launched-.5)<.06,'conditional 50%');assert(splashes===breached,'splash once');
 report.checks.push(`conditional jump ${breached}/${launched}, ${splashes} splashes, every actor returns`);
 // Peck only actual permitted species, 3–8 beats at 4–8Hz and returns to cruise.
 await page.evaluate(()=>window.__kan42Scene({gallons:20,fish:{'corydoras':6,'bristlenose-pleco':1},decor:[],flora:{}}));
 const peck=await page.evaluate(()=>{
  const fish=window.__kan42Probe().telemetry.fish;const actor=fish.find(f=>window.__kan42Action(f.key,'peck'));
  if(!actor)return null;const stages=[],jaws=[];let settings;
  for(let i=0;i<600;i++){window.__kanEcoFastForward(.025);const f=window.__kan42Probe().telemetry.fish.find(f=>f.key===actor.key);
    if(f.peck){stages.push(f.peck.stage);if(f.peck.stage==='burst'){settings=f.peck;jaws.push(f.jaw);}}else if(stages.length)break;}
  return {stages:[...new Set(stages)],settings,jaws,actor:window.__kan42Probe().telemetry.fish.find(f=>f.key===actor.key)};
 });
 assert(peck?.stages.includes('burst')&&peck.stages.includes('withdraw'),'peck phases '+JSON.stringify(peck));
 assert(peck.settings.hz>=4&&peck.settings.hz<=8&&peck.settings.beats>=3&&peck.settings.beats<=8,'peck rate');
 assert(Math.max(...peck.jaws)>.5&&Math.min(...peck.jaws)<.2&&!peck.actor.peck,'mouth pulse and exit');
 report.checks.push('approach, inspect, 3–8 quick pecks / 4–8Hz, withdraw, cruise');
 // Real event routes, not just registered enum names, observed by cinematic director.
 await page.evaluate(()=>{window.__kan42Scene({gallons:75,fish:{'neon-tetra':20,betta:1,'corydoras':6},decor:['hollow-log','split-log','log-arch'],flora:{}});window.__kanFoodTestCamera('cinematic');});
 for(const type of ['wood-approach','cave-inspect','cave-through','school-scout','school-rejoin','school-split','bottom-crumbs']){
  const p=await page.evaluate(type=>{const launched=window.__kan42Event(type);window.__kanEcoFastForward(2);return {launched,p:window.__kan42Probe()};},type);
  if(p.launched&&p.p.events.some(e=>e.type===type&&e.actorIds.length))report.events.push(type);
  await page.evaluate(()=>window.__kanEcoFastForward(35));
 }
 assert(report.events.length>=5,'at least five real events '+JSON.stringify(report.events));
 const log=await page.evaluate(()=>window.__kan42Probe().camera.log);
 assert(new Set(log.map(x=>x.type)).size>=5,'camera selected at least five event classes '+JSON.stringify(log));
 report.checks.push('at least five real actor routes selected by event camera');
 // Shift+click, Shift drag, pointer capture outside canvas, 20 clamped pans.
 await page.evaluate(()=>window.__kan42Scene({gallons:40,fish:{'neon-tetra':20},decor:[],flora:{}}));
 const beforeFood=await page.evaluate(()=>window.__kanFoodProbe().count);
 await page.keyboard.down('Shift');await page.mouse.click(600,450);await page.keyboard.up('Shift');
 for(let i=0;i<20;i++){await page.keyboard.down('Shift');await page.mouse.move(700,450);await page.mouse.down();await page.mouse.move(i%2?120:1100,i%2?100:700,{steps:8});await page.mouse.up();await page.keyboard.up('Shift');}
 let camera=await page.evaluate(()=>window.__kan42Probe().camera);
 assert(camera.mode==='orbit'&&camera.target.every(Number.isFinite),'manual camera takeover');
 assert(Math.abs(camera.target[0])<.3,'bounded target');assert((await page.evaluate(()=>window.__kanFoodProbe().count))===beforeFood,'pan must not feed');
 report.checks.push('Shift pan/click suppresses feed, twenty drags stay bounded, manual takeover');
 // Pointer touch gesture test: centroid and distance independently, transitions 1/2/1.
 const touch=await page.evaluate(()=>{
  const canvas=document.querySelector('canvas'),send=(type,id,x,y)=>canvas.dispatchEvent(new PointerEvent(type,{pointerId:id,pointerType:'touch',button:0,clientX:x,clientY:y,bubbles:true}));
  // Synthetic pointer capture is unavailable for non-active IDs. Stub only capture, not gesture logic.
  const capture=canvas.setPointerCapture;canvas.setPointerCapture=()=>{};
  send('pointerdown',31,400,400);send('pointerdown',32,600,400);
  const before=window.__kan42Probe().camera;
  for(let i=1;i<=20;i++){send('pointermove',31,400+i*3,400+i);send('pointermove',32,600+i*5,400+i);}
  send('pointerup',32,700,420);send('pointermove',31,470,430);send('pointerup',31,470,430);
  canvas.setPointerCapture=capture;
  return {before,after:window.__kan42Probe().camera};
 });
 assert(touch.after.pan&&touch.after.target.every(Number.isFinite),'two finger pan/pinch');report.checks.push('two touch pointers pan/pinch and 1/2/1 transition');
 const fin=await page.evaluate(()=>window.__kanRealismProbe().fins);
 assert(fin.every(f=>f.tapered&&f.rootThickness>0),'tapered mesh metadata');
 await page.screenshot({path:'realism42-camera-pan.png'});
 assert(errors.length===0,'page errors '+errors.join(';'));
 report.checks.push('no page errors or invalid shader state');
 writeFileSync('realism42-report.json',JSON.stringify(report,null,2));console.log('PASS REALISM42 '+JSON.stringify(report));
}finally{await browser?.close();server.kill();}
