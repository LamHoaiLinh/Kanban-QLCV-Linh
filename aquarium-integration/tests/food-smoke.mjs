import puppeteer from 'puppeteer-core';
import {spawn,execFileSync} from 'node:child_process';
const chrome=['/usr/bin/google-chrome','/usr/bin/google-chrome-stable','/usr/bin/chromium','/opt/google/chrome/chrome'].find(path=>{try{execFileSync('test',['-x',path]);return true}catch{return false}});
if(!chrome)throw Error('Chromium/Chrome executable not installed on CI agent');
const server=spawn(process.execPath,['node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port','4175','--strictPort'],{stdio:'pipe'});
server.stderr.on('data',x=>process.stderr.write(x));
let browser=null;
try{
  for(let i=0;i<80;i++){
    try{const r=await fetch('http://127.0.0.1:4175/?kanban=1');if(r.ok)break;}catch{}
    await new Promise(r=>setTimeout(r,250));
    if(i===79)throw Error('Vite preview startup timeout');
  }
  browser=await puppeteer.launch({headless:true,executablePath:chrome,
    args:['--no-sandbox','--disable-setuid-sandbox','--enable-webgl','--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
  const page=await browser.newPage();
  page.on('pageerror',e=>process.stderr.write('PAGE ERROR '+e.message+'\n'));
  await page.setViewport({width:1280,height:800,deviceScaleFactor:1});
  await page.goto('http://127.0.0.1:4175/?kanban=1',{waitUntil:'domcontentloaded',timeout:30000});
  await page.waitForSelector('#kan-food-layer',{timeout:40000});
  await page.waitForFunction(()=>!!document.querySelector('#canvas-host canvas'),{timeout:20000});
  await new Promise(r=>setTimeout(r,3000));
  const canvas=await page.$('#canvas-host canvas');
  if(!canvas)throw Error('WebGL canvas missing');
  let target=await canvas.boundingBox();
  if(!target)throw Error('Canvas has no box');
  // Coordinates purposely in lower-middle glass: formerly disappeared.
  // Verify that the first pellet starts moving down immediately, not after 1–2 seconds.
  await page.mouse.click(target.x+target.width*.43,target.y+target.height*.60);
  await page.waitForSelector('.kan-food-item');
  const foodY1=await page.$eval('.kan-food-item',el=>Number(el.dataset.worldY));
  await new Promise(r=>setTimeout(r,480));
  const foodY2=await page.$eval('.kan-food-item',el=>Number(el.dataset.worldY));
  if(!(foodY2<foodY1-0.0015))throw Error('Food is not sinking immediately: '+foodY1+' -> '+foodY2);
  // Refresh page to reset the feed counter before verifying the 10th rare cookie.
  await page.reload({waitUntil:'domcontentloaded'});
  await page.waitForSelector('#kan-food-layer');
  await page.waitForFunction(()=>!!document.querySelector('#canvas-host canvas'));
  await new Promise(r=>setTimeout(r,1300));
  target=await (await page.$('#canvas-host canvas')).boundingBox();
  if(!target)throw Error('Canvas disappeared after reload');
  for(let k=1;k<=10;k++){
    await page.mouse.click(target.x+target.width*(.33+(k%3)*.08),target.y+target.height*.60);
    const needed=k;
    await page.waitForFunction(n=>Number(document.querySelector('#kan-food-layer')?.dataset.foodCount||0)>=n,{timeout:6000},needed);
    if(k===1||k===10){
      const check=await page.evaluate(()=>{
        const els=[...document.querySelectorAll('.kan-food-item')];
        return els.map(e=>({kind:e.dataset.kind,w:e.getBoundingClientRect().width,h:e.getBoundingClientRect().height,
          left:e.getBoundingClientRect().left,top:e.getBoundingClientRect().top,
          opacity:getComputedStyle(e).opacity,visible:getComputedStyle(e).visibility}));
      });
      if(check.length<k)throw Error('Food indicators absent despite feeding; '+JSON.stringify(check));
      for(const item of check){
        if((item.kind==='normal'&&item.w!==10)||(item.kind!=='normal'&&item.w!==25))throw Error('Food size invalid '+JSON.stringify(item));
        if(item.visible!=='visible'||item.opacity==='0')throw Error('Food is hidden: '+JSON.stringify(item));
        if(item.left<0||item.left>1280||item.top<0||item.top>800)throw Error('Food outside viewport '+JSON.stringify(item));
      }
      if(k===10&&!check.some(v=>v.kind==='fish-cookie'))throw Error('10th click cookie not drawn');
    }
  }
  // Regression: all six control tabs and representative translations render in Chromium.
  await page.click('.open-panel');
  await page.waitForSelector('.panel');
  const tabs=await page.$eval('.panel .tabs button',a=>a.map(x=>x.textContent?.trim()));
  for(const name of ['Bể','Cá','Cây','Trang trí','Đã lưu','Cài đặt']){
    if(!tabs.includes(name))throw Error('Control tab not translated: '+name+'; got '+JSON.stringify(tabs));
  }
  for(const [tab,expected] of [['Bể','Nền đáy'],['Cá','Tìm cá theo tên'],['Cây','Dương xỉ Java'],['Trang trí','Đá và lũa'],['Đã lưu','Lưu hồ hiện tại'],['Cài đặt','Chất lượng đồ họa']]){
    await page.evaluate(name=>{[...document.querySelectorAll('.panel .tabs button')].find(x=>x.textContent?.trim()===name)?.click()},tab);
    await page.waitForFunction(s=>document.querySelector('.panel .panel-body')?.textContent?.includes(s)||document.querySelector('.panel .panel-body input')?.getAttribute('placeholder')?.includes(s),{timeout:5000},expected);
  }
  const counter=await page.evaluate(()=>document.querySelector('.kanban-aquarium-feed-count')?.textContent);
  console.log('PASS: immediate sink; 10px pellets/25px cookies; 10th cookie; six Vietnamese control tabs; counter='+counter);
}catch(e){console.error(e);process.exitCode=1}finally{await browser?.close();server.kill('SIGTERM')}
