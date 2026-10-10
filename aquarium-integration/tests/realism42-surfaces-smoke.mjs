import puppeteer from 'puppeteer-core';import {spawn,execFileSync} from 'node:child_process';import {writeFileSync} from 'node:fs';
const chrome=['/usr/bin/google-chrome','/usr/bin/google-chrome-stable','/usr/bin/chromium','/opt/google/chrome/chrome'].find(p=>{try{execFileSync('test',['-x',p]);return true}catch{return false}});
if(!chrome)throw Error('Chromium unavailable');
const server=spawn(process.execPath,['node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port','4219','--strictPort'],{stdio:'pipe'});let browser;
try{
 for(let i=0;i<100;i++){try{if((await fetch('http://127.0.0.1:4219/')).ok)break}catch{}await new Promise(r=>setTimeout(r,100));}
 browser=await puppeteer.launch({headless:true,executablePath:chrome,protocolTimeout:180000,args:['--no-sandbox','--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});const page=await browser.newPage();page.setDefaultTimeout(120000);await page.setViewport({width:640,height:400});
 await page.evaluateOnNewDocument(()=>{let seed=42;Math.random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};localStorage.setItem('aquarium-v1',JSON.stringify({state:{quality:'medium',config:{name:'Surfaces',water:'freshwater',gallons:40,substrate:'sand',background:'natural',lighting:'daylight',dayNight:'day',fish:{corydoras:6,'zebra-oto':6,'bristlenose-pleco':1},fishNames:{},flora:{'anubias':6,'java-fern':6},decor:['hollow-log','split-log','driftwood']}},version:0}));});
 await page.goto('http://127.0.0.1:4219/?kanban=1&qa=1',{waitUntil:'domcontentloaded',timeout:120000});await page.waitForFunction(()=>window.__kan42Probe);await page.evaluate(()=>{window.__kan42Pause();window.__kan42EcoMode('relax');});const results=[];
 for(const surface of ['glass','wood','plant']){
  const r=await page.evaluate(surface=>{
   for(let attempt=0;attempt<100;attempt++){
    const actor=window.__kan42Probe().telemetry.fish.find(a=>window.__kan42Action(a.key,'peck',.25,surface));
    if(actor){const states=[];let overlap=0,walls=0;
     for(let i=0;i<650;i++){window.__kanEcoFastForward(.05);const p=window.__kan42Probe(),a=p.telemetry.fish.find(a=>a.key===actor.key);overlap=Math.max(overlap,p.physics.maxOverlap);walls=Math.max(walls,p.physics.wallViolations);if(a.peck)states.push(a.peck);else break;}
     if(states.some(x=>x.stage==='burst')&&states.some(x=>x.stage==='withdraw'))return {surface,actor:actor.key,states:[...new Set(states.map(x=>x.stage))],burst:states.find(x=>x.stage==='burst'),overlap,walls};
    }window.__kanEcoFastForward(10);
   }return {surface,failed:true};
  },surface);results.push(r);console.log(JSON.stringify(r));if(r.failed||r.walls||r.overlap>.025)throw Error('surface failed '+surface);
 }
 writeFileSync('realism42-surfaces-review.json',JSON.stringify(results,null,2));console.log('PASS all three real surfaces');
}finally{await browser?.close();server.kill();}
