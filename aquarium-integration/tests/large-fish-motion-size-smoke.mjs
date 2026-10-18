// Regression for discus glide, angelfish caudal attachment and scale variety.
import puppeteer from 'puppeteer-core';
import {spawn,execFileSync} from 'node:child_process';
const chrome=['/usr/bin/google-chrome','/usr/bin/google-chrome-stable','/usr/bin/chromium','/opt/google/chrome/chrome']
  .find(p=>{try{execFileSync('test',['-x',p]);return true;}catch{return false;}});
if(!chrome)throw Error('Chrome missing');
const server=spawn(process.execPath,['node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port','4198','--strictPort'],{stdio:'pipe'});
server.stderr.on('data',x=>process.stderr.write(x));
let browser;
const assert=(ok,msg)=>{if(!ok)throw Error(msg);};
try{
  for(let i=0;i<100;i++){
    try{if((await fetch('http://127.0.0.1:4198/?kanban=1&qa=1')).ok)break;}catch{}
    await new Promise(r=>setTimeout(r,250));
    if(i===99)throw Error('Preview timeout');
  }
  browser=await puppeteer.launch({headless:true,executablePath:chrome,
    args:['--no-sandbox','--disable-setuid-sandbox','--enable-webgl',
      '--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
  const page=await browser.newPage();
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.setViewport({width:1280,height:800});
  await page.goto('http://127.0.0.1:4198/?kanban=1&qa=1',{waitUntil:'domcontentloaded',timeout:30000});
  await page.waitForFunction(()=>typeof window.__kanBigFishScene==='function'&&
    typeof window.__kanBigFishProbe==='function',{timeout:45000});
  await page.evaluate(()=>window.__kanBigFishScene());
  await page.waitForFunction(()=>window.__kanBigFishProbe().fish.some(x=>x.species==='discus'),{timeout:20000});
  let p=await page.evaluate(()=>window.__kanBigFishProbe());
  for(const id of ['angelfish','discus']){
    const group=p.fish.find(g=>g.species===id);
    assert(group?.fish.length===6,'Expected six '+id);
    const factors=group.fish.map(f=>f.ratio);
    assert(Math.min(...factors)<.84&&Math.max(...factors)>1.09,
      id+' lacks recognizable small and large adults: '+JSON.stringify(factors));
    assert(Math.max(...factors)-Math.min(...factors)>.25,id+' too uniform: '+JSON.stringify(factors));
  }
  const guppy=p.fish.find(g=>g.species==='guppy');
  assert(guppy?.fish.length===6,'No guppy control group');
  assert(guppy.fish.every(f=>f.ratio>=.82&&f.ratio<=1.18),
    'Small fish size distribution unexpectedly changed');
  const angel=p.fins.find(f=>f.id==='angelfish');
  assert(angel?.angelCaudalAttached&&angel.caudalAttachmentVertices>10,
    'Angelfish tail still only rooted at thin caudal stalk: '+JSON.stringify(angel));
  await page.evaluate(()=>{window.__kan42Pause();window.__kan42Step(8);});
  p=await page.evaluate(()=>window.__kanBigFishProbe());
  const discus=p.fish.find(g=>g.species==='discus').fish;
  assert(discus.every(f=>Number.isFinite(f.pitch)&&Math.abs(f.pitch)<.145),
    'Discus still nods too far: '+JSON.stringify(discus.map(f=>f.pitch)));
  assert(discus.reduce((a,f)=>a+f.speed,0)/discus.length>.0015,
    'Discus stops moving rather than swimming: '+JSON.stringify(discus));
  assert(p.physics.wallViolations===0,'Large fish clipped tank walls: '+JSON.stringify(p.physics));
  assert(!errors.length,'Browser errors: '+errors.join('; '));
  console.log('PASS: discus smooth pitch/cruise, angelfish tail body overlap and distinctive large-fish sizes; guppies unchanged');
}finally{await browser?.close();server.kill('SIGTERM');}
