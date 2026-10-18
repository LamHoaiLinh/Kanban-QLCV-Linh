// Regression: large fish must avoid and resolve cross-species body contacts.
import puppeteer from 'puppeteer-core';
import {spawn,execFileSync} from 'node:child_process';
const chrome=['/usr/bin/google-chrome','/usr/bin/google-chrome-stable','/usr/bin/chromium','/opt/google/chrome/chrome']
  .find(p=>{try{execFileSync('test',['-x',p]);return true;}catch{return false;}});
if(!chrome)throw Error('Chrome missing');
const server=spawn(process.execPath,['node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port','4199','--strictPort'],{stdio:'pipe'});
server.stderr.on('data',x=>process.stderr.write(x));
let browser;
const assert=(ok,msg)=>{if(!ok)throw Error(msg);};
try{
  for(let i=0;i<100;i++){
    try{if((await fetch('http://127.0.0.1:4199/?kanban=1&qa=1')).ok)break;}catch{}
    await new Promise(r=>setTimeout(r,250));
    if(i===99)throw Error('Preview timeout');
  }
  browser=await puppeteer.launch({headless:true,executablePath:chrome,
    args:['--no-sandbox','--disable-setuid-sandbox','--enable-webgl',
      '--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
  const page=await browser.newPage();
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.setViewport({width:1280,height:800});
  await page.goto('http://127.0.0.1:4199/?kanban=1&qa=1',{waitUntil:'domcontentloaded',timeout:30000});
  await page.waitForFunction(()=>typeof window.__kanLargeContactScene==='function'&&
    typeof window.__kanLargeContactProbe==='function',{timeout:45000});
  assert(await page.evaluate(()=>window.__kanLargeContactScene()),'Could not create large-fish collision test scene');
  await page.waitForFunction(()=>window.__kanLargeContactProbe().fish.some(p=>p.species==='discus'),{timeout:20000});
  await page.evaluate(()=>window.__kan42Pause());
  const forced=await page.evaluate(()=>window.__kanLargeContactArrange());
  assert(forced,'Could not overlap large fish for actual resolution test');
  const before=await page.evaluate(()=>window.__kanLargeContactProbe());
  assert(before.overlap.overlaps>0&&before.overlap.maxPenetration>.03,
    'Forced geometry did not actually intersect: '+JSON.stringify(before.overlap));
  // First frame must NOT "teleport" the pair. Previous solver shifted each
  // fish 10-30mm EVERY FRAME, making collisions look like sudden dashes.
  await page.evaluate(()=>window.__kan42Step(1/60));
  const first=await page.evaluate(()=>window.__kanLargeContactProbe());
  assert(first.overlap.maxFramePush<=.022/60+.00008,
    'Instantaneous collision push too fast: '+JSON.stringify(first.overlap));
  assert(first.overlap.maxPenetration>before.overlap.maxPenetration*.60,
    'Collision instantly ejected fish instead of separating smoothly');
  // Collisions should recover progressively rather than in one frame.
  await page.evaluate(()=>window.__kan42Step(3));
  const after=await page.evaluate(()=>window.__kanLargeContactProbe());
  assert(after.overlap.maxPenetration<before.overlap.maxPenetration-.015,
    'Large fish did not gradually separate: '+JSON.stringify({before:before.overlap,after:after.overlap}));
  assert(after.overlap.pushSpeed<=.0221,
    'Sustained contact speed exceeded permitted gentle push: '+JSON.stringify(after.overlap));
  assert(after.overlap.events>0,'No physical fish collision was recorded');
  assert(after.physics.wallViolations===0,'Fish collision pushes into glass: '+JSON.stringify(after.physics));
  // Under varied fish sizes, collision scales with each individual rather
  // than assigning one single size to the entire species.
  const discus=after.fish.find(g=>g.species==='discus')?.fish??[];
  assert(Math.max(...discus.map(x=>x.ratio))-Math.min(...discus.map(x=>x.ratio))>.25,
    'Large fish size groups were changed unexpectedly');
  assert(!errors.length,'Browser runtime errors: '+errors.join('; '));
  console.log('PASS: contact push speed capped per agent, gradual fish separation, no wall clipping, size groups unchanged');
}finally{await browser?.close();server.kill('SIGTERM');}
