// Browser regression: fish satiety starts at 100 = full; HUD appears only
// on hover except 0-19%, supports stacked bars and survives a page reload.
import puppeteer from 'puppeteer-core';
import {spawn,execFileSync} from 'node:child_process';
const executablePath=['/usr/bin/google-chrome','/usr/bin/google-chrome-stable','/usr/bin/chromium','/opt/google/chrome/chrome']
  .find(p=>{try{execFileSync('test',['-x',p]);return true;}catch{return false}});
if(!executablePath)throw Error('Chrome unavailable');
const server=spawn(process.execPath,['node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port','4196','--strictPort'],{stdio:'pipe'});
server.stderr.on('data',s=>process.stderr.write(s));
let browser;
const assert=(v,message)=>{if(!v)throw Error(message);};
try{
  for(let i=0;i<100;i++){
    try{if((await fetch('http://127.0.0.1:4196/?kanban=1&qa=1')).ok)break;}catch{}
    await new Promise(r=>setTimeout(r,250));
    if(i===99)throw Error('Vite preview did not start');
  }
  browser=await puppeteer.launch({headless:true,executablePath,args:[
    '--no-sandbox','--disable-setuid-sandbox','--enable-webgl',
    '--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader'
  ]});
  const page=await browser.newPage();
  page.on('pageerror',e=>process.stderr.write('PAGE ERROR: '+e.message+'\n'));
  await page.setViewport({width:1280,height:800});
  await page.goto('http://127.0.0.1:4196/?kanban=1&qa=1',{waitUntil:'domcontentloaded',timeout:30000});
  await page.waitForFunction(()=>typeof window.__kanSatietySet==='function'&&
    typeof window.__kanFoodProbe==='function',{timeout:40000});
  const result=await page.evaluate(()=>{
    window.__kan42Pause();
    const probe=()=>window.__kanFoodProbe();
    const fish=probe().satiety.filter(f=>f.key);
    if(fish.length<2)throw Error('Need two fish to verify overlapping hover');
    const [a,b]=fish.map(f=>f.key);
    for(const f of fish)window.__kanSatietySet(f.key,100);
    window.__kanSatietyHover([]);
    const none=probe().satietyBars.length===0;
    window.__kanSatietyHover([a,b]);
    const both=probe().satietyBars;
    window.__kanSatietyHover([]);
    const gone=probe().satietyBars.length===0;
    window.__kanSatietySet(a,19);
    const critical=probe().satietyBars;
    window.__kanSatietySet(a,0);
    const empty=probe().satietyBars;
    window.__kanSatietySet(a,20);
    const hidden20=probe().satietyBars.length===0;
    window.__kanSatietySet(a,19);
    window.__kanSatietySave();
    return {a,b,none,gone,both,critical,empty,hidden20};
  });
  assert(result.none,'100% satiety unexpectedly displayed without hover');
  assert(result.both.length===2&&result.both.some(x=>x.key===result.a)&&
    result.both.some(x=>x.key===result.b),'Overlapping hovered fish must each have bars');
  assert(result.gone,'Hover HUD did not disappear when pointer left');
  assert(result.critical.length===1&&result.critical[0].satiety==='19',
    '19% satiety must show constantly');
  assert(result.empty.length===1&&result.empty[0].satiety==='0',
    '0% satiety must show constantly, without killing fish');
  assert(result.hidden20,'20% satiety should only show on hover');
  await page.reload({waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>typeof window.__kanFoodProbe==='function'&&
    window.__kanFoodProbe().satiety.length>1,{timeout:40000});
  const after=await page.evaluate(()=>({
    fish:window.__kanFoodProbe().satiety,
    bars:window.__kanFoodProbe().satietyBars
  }));
  assert(after.fish.find(x=>x.key===result.a)?.satiety===19,
    'Saved fish satiety did not persist after reload');
  assert(after.bars.some(x=>x.key===result.a&&x.satiety==='19'),
    'Critical satiety bar not restored after reload');
  console.log('PASS fish satiety: full 100%, hover-only, multi-fish hover, critical 19%, empty 0%, 20% hidden, local persistence');
}finally{
  await browser?.close();
  server.kill('SIGTERM');
}
