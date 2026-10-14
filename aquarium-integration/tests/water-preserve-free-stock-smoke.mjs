// Regression: water toggles preserve both ecosystems and independent fish counts,
// while a manually added fish visibly drops from above the water surface.
import puppeteer from 'puppeteer-core';
import {spawn,execFileSync} from 'node:child_process';
const chrome=['/usr/bin/google-chrome','/usr/bin/google-chrome-stable','/usr/bin/chromium','/opt/google/chrome/chrome'].find(p=>{try{execFileSync('test',['-x',p]);return true}catch{return false}});
if(!chrome)throw Error('Chromium missing');
const assert=(ok,msg)=>{if(!ok)throw Error(msg)};
const server=spawn(process.execPath,['node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port','4228','--strictPort'],{stdio:'pipe'});
let browser;
try{
 let ready=false;
 for(let i=0;i<120;i++){try{if((await fetch('http://127.0.0.1:4228/')).ok){ready=true;break;}}catch{}await new Promise(r=>setTimeout(r,100));}
 assert(ready,'Preview did not start');
 browser=await puppeteer.launch({headless:true,executablePath:chrome,protocolTimeout:120000,
   args:['--no-sandbox','--disable-setuid-sandbox','--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
 const page=await browser.newPage(),errors=[];
 page.on('pageerror',e=>errors.push(e.message));
 await page.setViewport({width:1280,height:800});
 await page.evaluateOnNewDocument(()=>localStorage.clear());
 await page.goto('http://127.0.0.1:4228/?kanban=1&qa=1',{waitUntil:'domcontentloaded'});
 await page.waitForFunction(()=>window.__kan42Store&&window.__kan42Probe&&window.__kanEcoFastForward);
 await page.evaluate(()=>window.__kan42Pause());
 const inspect=()=>page.evaluate(()=>window.__kan42Store('get').config);
 const toTab=async(label)=>page.evaluate(label=>{
   const b=[...document.querySelectorAll('.panel .tabs button')].find(x=>x.textContent.trim()===label);
   if(!b)throw Error('Missing tab '+label);b.click();
 },label);
 const addByLabel=async(label,n=1)=>page.evaluate(({label,n})=>{
   for(let i=0;i<n;i++){
     const b=[...document.querySelectorAll('.species-row button[aria-label]')]
       .find(x=>x.getAttribute('aria-label')==='Thêm một '+label);
     if(!b)throw Error('Missing add button '+label);
     b.click();
   }
 },{label,n});
 const selectWater=async(water)=>page.evaluate(water=>{
   const b=[...document.querySelectorAll('.seg[role="radiogroup"] button')]
     .find(x=>x.textContent.includes(water==='freshwater'?'Nước ngọt':'Nước mặn'));
   if(!b)throw Error('Missing water button '+water);b.click();
 },water);
 // First, force freshwater if the embedded default changes.
 await toTab('Bể');
 await selectWater('freshwater');
 await toTab('Cá');
 const before=await inspect(),start=before.fish['guppy']??0;
 await addByLabel('Cá bảy màu',1);
 const atEntry=await page.evaluate((start)=>{
   const p=window.__kan42Probe();
   return {surface:p.dims.surfaceY,agent:p.telemetry.fish.find(x=>x.key==='guppy:'+start)};
 },start);
 assert(atEntry.agent?.drop?.stage==='fall','Manual fish did not start an entry animation');
 assert(atEntry.agent.pos[1]>atEntry.surface+.08,'New fish must start visibly above the surface');
 await page.evaluate(()=>window.__kanEcoFastForward(3));
 const landed=await page.evaluate(i=>window.__kan42Probe().telemetry.fish.find(x=>x.key==='guppy:'+i),start);
 assert(landed && !landed.drop,'New fish did not complete surface entry');
 await addByLabel('Cá bảy màu',3);
 await addByLabel('Cá vàng ba đuôi',3);
 let fresh=await inspect();
 assert(fresh.fish.guppy===start+4,'Guppy addition capped at 1');
 assert(fresh.fish['fancy-goldfish']===(before.fish['fancy-goldfish']??0)+3,
  'Goldfish must accept repeated clicks even if over biological guideline');
 await toTab('Cây');await addByLabel('Dương xỉ Java',2);
 fresh=await inspect();
 await toTab('Bể');await selectWater('saltwater');
 let salt=await inspect();
 assert(salt.water==='saltwater','Could not switch to saltwater');
 await toTab('Cá');await addByLabel('Cá thia xanh ngọc',3);
 await toTab('San hô');
 const floraLabels=await page.$$eval('.species-row .name',els=>els.map(e=>e.textContent.trim()));
 assert(floraLabels.length>0,'Saltwater flora catalog missing');
 await addByLabel(floraLabels[0],2);
 salt=await inspect();
 await toTab('Bể');await selectWater('freshwater');
 let restored=await inspect();
 for(const key of ['fish','flora','fishNames','decor','substrate','background','lighting'])
   assert(JSON.stringify(restored[key])===JSON.stringify(fresh[key]),'Freshwater lost '+key);
 await selectWater('saltwater');
 restored=await inspect();
 for(const key of ['fish','flora','fishNames','decor','substrate','background','lighting'])
   assert(JSON.stringify(restored[key])===JSON.stringify(salt[key]),'Saltwater lost '+key);
 // LocalStorage persistence across a real reload (not just a React transition).
 await page.reload({waitUntil:'domcontentloaded'});
 await page.waitForFunction(()=>window.__kan42Store);
 await page.evaluate(()=>{window.__kan42Pause();});
 const afterReload=await inspect();
 assert(JSON.stringify(afterReload.fish)===JSON.stringify(salt.fish),'Saltwater lost on reload');
 await toTab('Bể');await selectWater('freshwater');
 restored=await inspect();
 assert(JSON.stringify(restored.fish)===JSON.stringify(fresh.fish),'Freshwater lost on reload');
 assert(JSON.stringify(restored.flora)===JSON.stringify(fresh.flora),'Freshwater plants lost on reload');
 assert(errors.length===0,'Browser errors '+errors.join(';'));
 console.log('PASS water-preserve-free-stock: both ecosystems and flora survive swaps and reload; repeated + accepts 4 guppies and 3 goldfish; new fish fell from above surface');
}finally{await browser?.close();server.kill('SIGTERM')}
