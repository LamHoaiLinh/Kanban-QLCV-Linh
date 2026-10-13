// Regression: the embedded aquarium must open in stationary Free Camera,
// respond quickly to horizontal drags, and expose the professional camera switch.
import puppeteer from 'puppeteer-core';
import {spawn,execFileSync} from 'node:child_process';
const chrome=['/usr/bin/google-chrome','/usr/bin/google-chrome-stable','/usr/bin/chromium','/opt/google/chrome/chrome'].find(p=>{try{execFileSync('test',['-x',p]);return true}catch{return false}});
if(!chrome)throw Error('Chromium unavailable');
const assert=(ok,msg)=>{if(!ok)throw Error(msg)};
const server=spawn(process.execPath,['node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port','4201','--strictPort'],{stdio:'pipe'});
let browser;
try{
  let started=false;
  for(let i=0;i<100;i++){try{if((await fetch('http://127.0.0.1:4201/')).ok){started=true;break;}}catch{}await new Promise(r=>setTimeout(r,100));}
  assert(started,'Vite preview did not start');
  browser=await puppeteer.launch({headless:true,executablePath:chrome,args:['--no-sandbox','--disable-setuid-sandbox','--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
  const page=await browser.newPage(),errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  await page.setViewport({width:1280,height:800});
  await page.evaluateOnNewDocument(()=>localStorage.clear());
  await page.goto('http://127.0.0.1:4201/?kanban=1&qa=1',{waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>window.__kan42Probe&&window.__kanEcoFastForward);
  await page.waitForSelector('.kanban-camera-toggle',{visible:true});
  await page.evaluate(()=>{window.__kan42Pause();window.__kan42Scene({gallons:40,fish:{},flora:{},decor:[]});});
  const initial=await page.evaluate(()=>window.__kan42Probe().camera);
  assert(initial.mode==='orbit','Embedded mode must open Free Camera');
  const label=await page.$eval('.kanban-camera-toggle',b=>b.textContent);
  assert(label.includes('Camera chuyên nghiệp'),'Named professional camera control missing');
  await page.evaluate(()=>window.__kanEcoFastForward(20));
  const idle=await page.evaluate(()=>window.__kan42Probe().camera);
  assert(Math.abs(idle.azimuth-initial.azimuth)<0.001,'Free Camera should not drift after 20s');
  await page.mouse.move(440,430);await page.mouse.down();await page.mouse.move(680,430,{steps:3});await page.mouse.up();
  await page.evaluate(()=>window.__kanEcoFastForward(.2));
  const moved=await page.evaluate(()=>window.__kan42Probe().camera);
  assert(moved.mode==='orbit','Mouse drag must stay in Free Camera');
  assert(Math.abs(moved.azimuth-idle.azimuth)>.3,'Horizontal mouse drag moved too slowly: '+JSON.stringify(moved));
  assert(Math.abs(moved.desiredAzimuth-idle.desiredAzimuth)>1.5,'Free Camera horizontal range or sensitivity is too small');
  await page.click('.kanban-camera-toggle');
  assert((await page.evaluate(()=>window.__kan42Probe().camera.mode))==='cinematic','Professional camera failed to activate');
  assert((await page.$eval('.kanban-camera-toggle',b=>b.textContent)).includes('Free Camera'),'Return-to-Free control not shown');
  await page.click('.kanban-camera-toggle');
  assert((await page.evaluate(()=>window.__kan42Probe().camera.mode))==='orbit','Professional camera failed to return to Free Camera');
  await page.evaluate(()=>window.__kanEcoFastForward(3));
  const stopped=await page.evaluate(()=>window.__kan42Probe().camera);
  await page.evaluate(()=>window.__kanEcoFastForward(20));
  const after=await page.evaluate(()=>window.__kan42Probe().camera);
  assert(Math.abs(after.azimuth-stopped.azimuth)<0.001,'Free Camera drifted after disabling professional camera');
  assert(errors.length===0,'Browser errors: '+errors.join(';'));
  console.log('PASS camera-controls-smoke: free on entry, no auto drift, responsive horizontal drag, professional camera toggle');
}finally{
  await browser?.close();
  server.kill('SIGTERM');
}
