import puppeteer from 'puppeteer-core';
import {spawn,execFileSync} from 'node:child_process';

const chrome=['/usr/bin/google-chrome','/usr/bin/google-chrome-stable','/usr/bin/chromium','/opt/google/chrome/chrome'].find(p=>{try{execFileSync('test',['-x',p]);return true}catch{return false}});
if(!chrome)throw Error('Missing Chromium');
const server=spawn(process.execPath,['node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port','4176','--strictPort'],{stdio:'pipe'});
server.stderr.on('data',c=>process.stderr.write(c));
let browser;
const failures=[];
try{
  for(let i=0;i<100;i++){
    try{if((await fetch('http://127.0.0.1:4176/?kanban=1&qa=1')).ok)break}catch{}
    if(i===99)throw Error('Vite preview timeout');
    await new Promise(r=>setTimeout(r,250));
  }
  browser=await puppeteer.launch({executablePath:chrome,headless:true,
    args:['--no-sandbox','--disable-setuid-sandbox','--enable-webgl','--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
  const page=await browser.newPage();
  await page.setViewport({width:1440,height:900,deviceScaleFactor:1});
  page.on('pageerror',e=>failures.push('Browser JS error: '+e.message));
  await page.goto('http://127.0.0.1:4176/?kanban=1&qa=1',{waitUntil:'domcontentloaded',timeout:40000});
  await page.waitForFunction(()=>!!window.__kanRealismProbe && window.__kanRealismProbe().fish.fish>0,{timeout:45000});
  async function audit(tag){
    // Wait for a couple of real simulation frames to enforce collision bounds.
    await new Promise(r=>setTimeout(r,650));
    const x=await page.evaluate(()=>window.__kanRealismProbe());
    if(x.fish.fish>60)throw Error(tag+': more than 60 fish '+JSON.stringify(x));
    if(x.fish.wallViolations!==0)throw Error(tag+': fish through glass '+JSON.stringify(x));
    if(x.flora.violations!==0)throw Error(tag+': flora outside glass '+JSON.stringify(x));
    if(x.fish.maxOverlap>.025)throw Error(tag+': deep penetration of solid '+JSON.stringify(x));
    if(x.fish.solidOverlaps>Math.max(5,Math.ceil(x.fish.fish*.24)))
      throw Error(tag+': too many obstacle penetrations '+JSON.stringify(x));
    console.log('QA '+tag+' fish='+x.fish.fish+' rock-overlap='+x.fish.solidOverlaps+' vertices='+x.flora.vertices+' name='+x.name);
  }
  await audit('initial');
  // KanBan closes the panel after 15 seconds; slow headless SwiftShader can
  // take minutes to rebuild 30 tanks. Reopen the real UI before each action,
  // never disable the production auto-close behavior just for a passing test.
  async function ensureTankPanel(){
    await page.evaluate(()=>{
      if(!document.querySelector('.panel'))document.querySelector('.open-panel')?.click();
    });
    await page.waitForSelector('.panel',{timeout:15000});
    await page.evaluate(()=>{
      [...document.querySelectorAll('.panel .tabs button')]
        .find(b=>b.textContent?.trim()==='Bể')?.click();
    });
    await page.waitForSelector('.preset-list button',{timeout:15000});
  }
  const presets=['Cộng đồng Amazon','Hồ thủy sinh mini','Đầm san hô','Ốc đảo Betta','Suối nước trà','Đại dương xanh'];
  for(const name of presets){
    await ensureTankPanel();
    await page.evaluate(n=>{
      const b=[...document.querySelectorAll('.preset-list button')].find(x=>x.textContent?.includes(n));
      if(!b)throw Error('Missing preset: '+n);
      b.click();
    },name);
    await audit('preset '+name);
  }
  for(let i=0;i<30;i++){
    await ensureTankPanel();
    await page.evaluate(()=>{
      const b=[...document.querySelectorAll('.panel button')].find(x=>x.textContent?.includes('Tạo ngẫu nhiên'));
      if(!b)throw Error('Missing random button');
      b.click();
    });
    const x=await page.evaluate(()=>window.__kanRealismProbe());
    if(x.name!=='Hồ cá ngẫu nhiên')throw Error('Random tank still English: '+x.name);
    await audit('random '+(i+1));
  }
  // A fish from the smallest aquarium must retain safe clearance from glass
  // after repeated changes to large tanks and back.
  await ensureTankPanel();
  await page.evaluate(()=>[...document.querySelectorAll('.preset-list button')].find(x=>x.textContent?.includes('Hồ thủy sinh mini'))?.click());
  await audit('return to nano');

  // The dedicated food-smoke suite checks exact 10px/25px sprite sizes and
  // visibility across 10 clicks. Here we check the feeding event and depth
  // metadata without requiring an uneaten sprite to survive slow headless GPU.
  await page.evaluate(()=>{
    window.__qaFeeds=[];
    window.addEventListener('kanaquarium-fed',e=>window.__qaFeeds.push(e.detail));
  });
  const canvas=await page.$('#canvas-host canvas');
  const bb=await canvas.boundingBox();
  if(!bb)throw Error('Missing aquarium canvas during feeding audit');
  await page.mouse.click(bb.x+bb.width*.44,bb.y+bb.height*.54);
  await page.waitForFunction(()=>window.__qaFeeds.length>0,{timeout:8000});
  const feedAudit=await page.evaluate(()=>({
    events:window.__qaFeeds,
    ecology:window.__kanRealismProbe?.().eco,
    rendered:[...document.querySelectorAll('.kan-food-item')].map(el=>({
      kind:el.dataset.kind,occluded:el.dataset.occluded,
      state:el.dataset.foodState,width:el.getBoundingClientRect().width
    }))
  }));
  if(feedAudit.events.length!==1||feedAudit.events[0].kind!=='normal')
    throw Error('Failed to record regular food drop: '+JSON.stringify(feedAudit.events));
  for(const food of feedAudit.rendered){
    if(!['true','false'].includes(food.occluded)||food.width!==10)
      throw Error('Wrong regular-food projection or size: '+JSON.stringify(food));
  }
  if(!feedAudit.ecology||!Number.isFinite(feedAudit.ecology.waste))
    throw Error('Food ecology state invalid: '+JSON.stringify(feedAudit.ecology));
  console.log('QA food event, ecology and optional depth projection passed');
  if(failures.length)throw Error('JS runtime problems: '+failures.join(' | '));
  console.log('PASS REALISM 1.0: 6 presets, 30 random tanks, return to nano, glass/rock/foliage bounds, food depth, Vietnamese random name');
}catch(err){
  console.error(err);
  process.exitCode=1;
}finally{
  await browser?.close();
  server.kill('SIGTERM');
}
