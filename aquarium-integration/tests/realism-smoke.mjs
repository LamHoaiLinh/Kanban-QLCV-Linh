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
  const presets=['Cộng đồng Amazon','Hồ thủy sinh mini','Đầm san hô','Ốc đảo Betta','Suối nước trà','Đại dương xanh'];
  for(const name of presets){
    await page.evaluate(n=>{
      const b=[...document.querySelectorAll('.preset-list button')].find(x=>x.textContent?.includes(n));
      if(!b)throw Error('Missing preset: '+n);
      b.click();
    },name);
    await audit('preset '+name);
  }
  for(let i=0;i<12;i++){
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
  await page.evaluate(()=>[...document.querySelectorAll('.preset-list button')].find(x=>x.textContent?.includes('Hồ thủy sinh mini'))?.click());
  await audit('return to nano');

  // Verify the rare-event evidence even if nearby fish eat the pellet fast.
  await page.evaluate(()=>{
    window.__qaFoods=[];
    window.__qaFeeds=[];
    window.addEventListener('kanaquarium-fed',e=>window.__qaFeeds.push(e.detail));
    const layer=document.querySelector('#kan-food-layer');
    const observer=new MutationObserver(records=>{
      for(const record of records)for(const el of record.addedNodes){
        if(el instanceof HTMLElement&&el.matches('.kan-food-item')){
          requestAnimationFrame(()=>window.__qaFoods.push({
            kind:el.dataset.kind,state:el.dataset.foodState,occluded:el.dataset.occluded,
            width:el.getBoundingClientRect().width
          }));
        }
      }
    });
    observer.observe(layer,{childList:true});
    window.__qaFoodObserver=observer;
  });
  const canvas=await page.$('#canvas-host canvas');
  const bb=await canvas.boundingBox();
  if(!bb)throw Error('Missing canvas during feeding audit');
  await page.mouse.click(bb.x+bb.width*.44,bb.y+bb.height*.54);
  await page.waitForFunction(()=>window.__qaFeeds.length>0,{timeout:8000});
  await page.waitForFunction(()=>window.__qaFoods.length>0,{timeout:8000});
  const food=await page.evaluate(()=>window.__qaFoods[0]);
  if(!['true','false'].includes(food.occluded))throw Error('Missing food depth occlusion: '+JSON.stringify(food));
  if(food.width!==10||food.state!=='sink')throw Error('Food regression: '+JSON.stringify(food));
  if(failures.length)throw Error('JS runtime problems: '+failures.join(' | '));
  console.log('PASS REALISM 1.0: 6 presets, 12 random tanks, return to nano, glass/rock/foliage bounds, food depth, Vietnamese random name');
}catch(err){
  console.error(err);
  process.exitCode=1;
}finally{
  await browser?.close();
  server.kill('SIGTERM');
}
