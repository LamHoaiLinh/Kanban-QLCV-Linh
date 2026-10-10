import puppeteer from 'puppeteer-core';
import {spawn,execFileSync} from 'node:child_process';
const chrome=['/usr/bin/google-chrome','/usr/bin/google-chrome-stable','/usr/bin/chromium',
 '/opt/google/chrome/chrome'].find(p=>{try{execFileSync('test',['-x',p]);return true}catch{return false}});
if(!chrome)throw Error('Chromium unavailable');
const server=spawn(process.execPath,['node_modules/vite/bin/vite.js','preview','--host',
  '127.0.0.1','--port','4196','--strictPort'],{stdio:'pipe'});
server.stderr.on('data',d=>process.stderr.write(d));
let browser;
try {
 for(let i=0;i<100;i++){
  try{if((await fetch('http://127.0.0.1:4196/?kanban=1&qa=1')).ok)break}catch{}
  if(i===99)throw Error('Preview failed to start');
  await new Promise(r=>setTimeout(r,250));
 }
 browser=await puppeteer.launch({headless:true,executablePath:chrome,
  args:['--no-sandbox','--disable-setuid-sandbox','--enable-webgl','--use-gl=angle',
  '--use-angle=swiftshader','--enable-unsafe-swiftshader']});
 const page=await browser.newPage(),errors=[];
 page.on('pageerror',e=>errors.push(e.message));
 await page.setViewport({width:1280,height:800,deviceScaleFactor:1});
 await page.goto('http://127.0.0.1:4196/?kanban=1&qa=1',
  {waitUntil:'domcontentloaded',timeout:45000});
 await page.waitForFunction(()=>typeof window.__kanAngelfishMotionScene==='function',
  {timeout:45000});
 for(const withDecor of [false,true]){
  await page.evaluate(b=>window.__kanAngelfishMotionScene(b),withDecor);
  await page.waitForFunction(()=>window.__kanAngelfishMotionProbe().fish.length===6,
    {timeout:15000});
  const tracks=new Map(),modes=new Map();
  let maxStuck=0,maxAngleJump=0,violations=0;
  let previous=new Map();
  for(let second=0;second<46;second++){
    const probe=await page.evaluate(()=>{
      window.__kanEcoFastForward(1);
      return window.__kanAngelfishMotionProbe();
    });
    if(probe.fish.length!==6)throw Error('Fish count changed');
    violations+=probe.physics.wallViolations;
    if(probe.physics.maxOverlap>.024)
      throw Error('Fish stuck in decor '+JSON.stringify(probe.physics));
    for(const f of probe.fish){
      if(!f.pos.every(Number.isFinite)||!f.vel.every(Number.isFinite)||
        !Number.isFinite(f.yaw)||!Number.isFinite(f.pitch))
        throw Error('Bad fish pose '+JSON.stringify(f));
      if(f.pos[1]<probe.dims.floorY+f.finClearance-.003||
         f.pos[1]>probe.dims.surfaceY-f.finClearance+.003)
        throw Error('Fin crossed water surface or floor '+JSON.stringify(f));
      if(!tracks.has(f.key)){tracks.set(f.key,{travel:0,maxDrift:0,start:f.pos,rest:0,slow:0,frames:0});}
      const tr=tracks.get(f.key);
      tr.frames++;
      if(f.mode==='rest')tr.rest++;
      if(f.speed<.0025)tr.slow++;
      tr.maxDrift=Math.max(tr.maxDrift,Math.hypot(...f.pos.map((v,i)=>v-tr.start[i])));
      const prev=previous.get(f.key);
      if(prev){
        tr.travel+=Math.hypot(...f.pos.map((v,i)=>v-prev.pos[i]));
        let angle=f.yaw-prev.yaw;
        angle=(angle+Math.PI)%(2*Math.PI)-Math.PI;
        maxAngleJump=Math.max(maxAngleJump,Math.abs(angle));
      }
      maxStuck=Math.max(maxStuck,f.stuckTime);
    }
    previous=new Map(probe.fish.map(f=>[f.key,f]));
    if(second===8){
      await page.screenshot({path:withDecor?'angelfish-motion-with-wood.png':
        'angelfish-motion-open-water.png'});
    }
  }
  for(const [key,tr] of tracks){
    if(tr.maxDrift<.027||tr.travel<.065)
      throw Error('Angelfish barely moved in 46s '+key+' '+JSON.stringify(tr));
    if(tr.rest/tr.frames>.47||tr.slow/tr.frames>.47)
      throw Error('Angelfish over-resting or near stationary '+key+' '+JSON.stringify(tr));
  }
  if(violations>0)throw Error('Boundary violations '+violations);
  if(maxStuck>2.65)throw Error('Stalled too long '+maxStuck);
  if(maxAngleJump>1.8)throw Error('Robotic heading jump '+maxAngleJump);
  console.log('PASS angelfish-motion '+(withDecor?'decorated':'open')+
    ' 6 individuals tracked for 46 simulated seconds; '+
    JSON.stringify([...tracks].map(([key,t])=>({key,travel:+t.travel.toFixed(3),
      furthest:+t.maxDrift.toFixed(3),rest:+(t.rest/t.frames).toFixed(2)}))));
 }
 if(errors.length)throw Error('Browser runtime error: '+errors.join('; '));
 console.log('PASS no angular snapping, no static twitching, healthy fin clearance, 92s total across two scenes');
} finally {
 if(browser)await browser.close();
 server.kill('SIGTERM');
}
