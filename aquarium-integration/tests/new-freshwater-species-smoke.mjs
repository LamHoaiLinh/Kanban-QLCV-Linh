// Keep the ten requested fish searchable, without duplicated species; exercise
// procedural geometry and movement of the three newly added freshwater fish.
import puppeteer from 'puppeteer-core';
import {spawn, execFileSync} from 'node:child_process';
const assert=(ok,msg)=>{if(!ok)throw Error(msg)};
const chrome=['/usr/bin/google-chrome','/usr/bin/google-chrome-stable','/usr/bin/chromium','/opt/google/chrome/chrome'].find(p=>{try{execFileSync('test',['-x',p]);return true}catch{return false}});
if(!chrome)throw Error('Chromium unavailable');
const server=spawn(process.execPath,['node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port','4225','--strictPort'],{stdio:'pipe'});
let browser;
try {
  let ready=false;
  for(let i=0;i<120;i++){try{if((await fetch('http://127.0.0.1:4225/')).ok){ready=true;break;}}catch{}await new Promise(r=>setTimeout(r,100));}
  assert(ready,'Preview server did not start');
  browser=await puppeteer.launch({headless:true,executablePath:chrome,args:['--no-sandbox','--disable-setuid-sandbox','--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
  const page=await browser.newPage(),errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  await page.setViewport({width:1280,height:800});
  await page.evaluateOnNewDocument(()=>localStorage.clear());
  await page.goto('http://127.0.0.1:4225/?kanban=1&qa=1',{waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>window.__kan42Probe&&window.__kan42Scene&&window.__kanRealismProbe);
  await page.evaluate(()=>{
    window.__kan42Pause();
    const tab=[...document.querySelectorAll('.panel .tabs button')].find(b=>b.textContent.trim()==='Cá');
    if(!tab)throw Error('Fish tab unavailable');
    tab.click();
  });
  await page.waitForSelector('.species-row .name');
  const names=await page.$$eval('.species-row .name',nodes=>nodes.map(n=>n.textContent.trim()));
  const requested=['Cá bảy màu','Cá neon xanh','Cá xiêm Betta','Cá vàng ba đuôi','Cá bình tích Molly','Cá phượng hoàng lam','Cá ngựa vằn','Cá dĩa','Cá ông tiên','Cá lau kiếng râu'];
  for(const name of requested)assert(names.filter(n=>n===name).length===1,'Missing or duplicated fish: '+name);
  assert(new Set(names).size===names.length,'Duplicate species display names');
  const cases=[['fancy-goldfish',75,3],['molly',40,6],['discus',120,5]];
  for(const [id,gallons,count] of cases) {
    const snapshot=await page.evaluate(({id,gallons,count})=>{
      window.__kan42Scene({gallons,fish:{[id]:count},fishNames:{},flora:{},decor:[]});
      window.__kanEcoFastForward(3);
      return {probe:window.__kan42Probe(),fin:window.__kanRealismProbe().fins};
    },{id,gallons,count});
    assert(snapshot.probe.telemetry.fish.length===count,'Fish spawn mismatch '+id);
    assert(snapshot.probe.telemetry.fish.every(f=>f.pos.every(Number.isFinite)&&f.vel.every(Number.isFinite)),'Invalid movement '+id);
    assert(snapshot.probe.physics.wallViolations===0,'Tank wall collision '+id);
    assert(snapshot.fin.some(f=>f.id===id&&f.tapered&&f.flexible>0),'Missing procedural fins '+id);
  }
  assert(errors.length===0,'Browser exceptions: '+errors.join(';'));
  console.log('PASS three missing freshwater species: unique UI entries, 3D fins, 3s behavior, no wall escapes');
}finally{
  await browser?.close();
  server.kill('SIGTERM');
}
