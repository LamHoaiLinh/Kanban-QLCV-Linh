import puppeteer from 'puppeteer-core';import {spawn} from 'node:child_process';import {writeFileSync,existsSync} from 'node:fs';
const chrome=[process.env.CHROMIUM_PATH,'/usr/bin/google-chrome','/usr/bin/google-chrome-stable','/usr/bin/chromium','/opt/google/chrome/chrome'].filter(Boolean).find(p=>existsSync(p));if(!chrome)throw Error('Chromium unavailable');
const server=spawn(process.execPath,['node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port','4236'],{stdio:'ignore'});let browser;
try{
 for(let i=0;i<100;i++){try{if((await fetch('http://127.0.0.1:4236/')).ok)break;}catch{}await new Promise(r=>setTimeout(r,100));}
 browser=await puppeteer.launch({executablePath:chrome,headless:true,args:['--no-sandbox','--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
 const page=await browser.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));await page.setViewport({width:640,height:400});await page.goto('http://127.0.0.1:4236/?kanban=1&qa=1');await page.waitForFunction(()=>window.__kanStabilityWorld);
 await page.evaluate(()=>{window.__kan42Pause();window.__kan42Quality('low');});
 const samples=[];
 for(let cycle=0;cycle<20;cycle++){
  const sample=await page.evaluate(cycle=>{
   const stage=(gallons,quality)=>{
    window.__kan42Scene({gallons,fish:{'neon-tetra':20},flora:{'java-fern':2},decor:['hollow-log','log-arch'],fishNames:{'neon-tetra:0':'QA-name'}});window.__kan42Quality(quality);window.__kan42Step(.05);
    const w=window.__kanStabilityWorld(),a=w.fish.populations[0].agents[0];w.fish.feed(a.pos.x,a.pos.z,w.env);window.__kan42Step(.05);
    for(const bit of [...w.fish.food.bits])w.fish.food.eat(bit);window.__kan42Step(.05);
    return {gallons,quality,memory:{...w.renderer.info.memory},drawCalls:w.renderer.info.render.calls,triangles:w.renderer.info.render.triangles,domFood:document.querySelectorAll('.kan-food-item').length,fish:window.__kan42Probe().telemetry.fish.length,name:window.__kan42Probe().config.fishNames['neon-tetra:0']};
   };
   return {cycle,small:stage(40,'low'),large:stage(75,'medium')};
  },cycle);samples.push(sample);writeFileSync('memory-cycles-report.json',JSON.stringify({samples,errors},null,2));console.log('MEMORY '+(cycle+1)+'/20 '+JSON.stringify(sample.large.memory));
 }
 for(const stage of ['small','large']){
  const warm=samples[2][stage].memory,last=samples.at(-1)[stage].memory;
  if(last.geometries>warm.geometries+2||last.textures>warm.textures+2)throw Error('GPU resource growth '+stage);
 }
 if(samples.some(s=>s.small.domFood||s.large.domFood||s.large.fish!==20||s.large.name!=='QA-name')||errors.length)throw Error('Cycle invariant failed');
 console.log('PASS 20 tank/quality cycles; bounded GPU resource counts, removed food DOM and named stock preserved');
}finally{await browser?.close();server.kill();}
