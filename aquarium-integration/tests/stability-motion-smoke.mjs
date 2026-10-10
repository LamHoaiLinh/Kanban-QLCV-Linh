import puppeteer from 'puppeteer-core';
import {spawn,execFileSync} from 'node:child_process';
import {writeFileSync} from 'node:fs';
const chrome=[process.env.CHROMIUM_PATH,'/usr/bin/google-chrome','/usr/bin/google-chrome-stable','/usr/bin/chromium','/opt/google/chrome/chrome'].filter(Boolean).find(p=>{try{execFileSync('test',['-x',p]);return true;}catch{return false;}});
if(!chrome)throw Error('Chromium unavailable');
const server=spawn(process.execPath,['node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port','4233'],{stdio:'ignore'});
let browser;
try{
 for(let i=0;i<100;i++){try{if((await fetch('http://127.0.0.1:4233/')).ok)break;}catch{} await new Promise(r=>setTimeout(r,100));}
 browser=await puppeteer.launch({executablePath:chrome,headless:true,protocolTimeout:180000,args:['--no-sandbox','--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
 const page=await browser.newPage();await page.setViewport({width:960,height:600});
 await page.evaluateOnNewDocument(()=>{let s=20261010;Math.random=()=>{s=(Math.imul(s,1664525)+1013904223)>>>0;return s/4294967296;};});
 await page.goto('http://127.0.0.1:4233/?kanban=1&qa=1');await page.waitForFunction(()=>window.__kanStabilityWorld);
 await page.evaluate(()=>window.__kan42Pause());
 const motion=await page.evaluate(()=>{
  const reports=[];
  for(const count of [1,3,12])for(const decor of [false,true])for(const fps of [30,60]){
   window.__kan42Scene({gallons:180,fish:{angelfish:count},flora:{},decor:decor?['hollow-log','split-log','driftwood','river-rocks']:[]});window.__kan42EcoMode('relax');window.__kan42Day(1);
   const {fish,env}=window.__kanStabilityWorld(); const agents=fish.populations.flatMap(p=>p.agents);
   for(const [i,a] of agents.entries()){a.pos.set(-env.halfW*.65+i*.065,env.surfaceY-fish.verticalClearance(a,env)-.001,env.halfD*.6);a.vel.set(.015,0,.002);a.anchor.copy(a.pos);a.mode='cruise';a.modeT=3;a.drop=undefined;a.jump=undefined;a.peck=undefined;}
   const trace=[];
   for(let frame=0;frame<600*fps;frame++){
    const dt=frame>0&&frame%(fps*31)===0?.25:1/fps;
    env.time+=Math.min(dt,.05);env.current.time=env.time;fish.update(dt,env);
    if(frame===fps*2)fish.feed(0,env.halfD*.6,env,'fish-cookie',env.surfaceY-.014);
    for(const a of agents)if(!Number.isFinite(a.prevPitch)||!a.pos.toArray().every(Number.isFinite)||a.pos.y>env.surfaceY-fish.verticalClearance(a,env)+.002)throw Error('Non-finite or waterline violation');
    trace.push(agents.map(a=>[a.pos.x,a.pos.y,a.pos.z,a.vel.x,a.vel.y,a.vel.z,a.prevYaw,a.prevPitch,a.collisions,a.recoveries,a.stuckTime]));
   }
   let reversals=0,rapid=0,maxRate=0;const last=agents.map(()=>({s:0,frame:0}));
   for(let f=1;f<trace.length;f++)for(let i=0;i<agents.length;i++){
    const dp=trace[f][i][7]-trace[f-1][i][7];maxRate=Math.max(maxRate,Math.abs(dp)*fps);
    if(Math.abs(dp)*fps<.02)continue;const s=Math.sign(dp);
    if(last[i].s&&last[i].s!==s){reversals++;if(f-last[i].frame<fps*.5)rapid++;last[i].frame=f;}
    last[i].s=s;
   }
   let nodWindows=0;
   for(let i=0;i<agents.length;i++)for(let start=0;start<trace.length-fps*2;start+=fps){
     // Count substantial alternating excursions, not numerical sign noise.
     let extremum=trace[start][i][7],direction=0,turns=0;
     for(let f=start+1;f<start+fps*2;f++){
       const pitch=trace[f][i][7],diff=pitch-extremum;
       if(direction===0){if(Math.abs(diff)>.06){direction=Math.sign(diff);extremum=pitch;}}
       else if(Math.sign(diff)===direction)extremum=pitch;
       else if(Math.abs(diff)>.06){turns++;direction=-direction;extremum=pitch;}
     }
     if(turns>=4)nodWindows++;
   }
   const movement=agents.map((a,i)=>({key:a.key,travel:a.travel,recoveries:a.recoveries,
      slowFraction:trace.filter(f=>Math.hypot(...f[i].slice(3,6))<.0025).length/trace.length}));
   reports.push({count:agents.length,requested:count,decor,fps,seconds:600,reversals,rapid,maxPitchRate:maxRate,nodWindows,movement});
  }
  return reports;
 });

 writeFileSync('stability-motion-report.json',JSON.stringify(motion,null,2));
 for(const r of motion){
  if(r.count!==r.requested||r.nodWindows||r.movement.some(a=>a.travel<.1||a.slowFraction>.3))throw Error('Motion regression '+JSON.stringify(r));
 }
 console.log('PASS 1/3/12 angelfish, empty/decorated, 30/60 FPS, ten simulated minutes per scene, frame spikes; no window with four >=.06 rad pitch reversals in two seconds. Exact iPhone symptom still needs device reproduction.');
}finally{await browser?.close();server.kill();}
