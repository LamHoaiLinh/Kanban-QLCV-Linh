// Regression for new top-of-water feed and food that survives missed fish bites.
// Runs against the built aquarium with its real camera, raycasts, sprites and physics.
import puppeteer from 'puppeteer-core';
import {spawn,execFileSync} from 'node:child_process';
const chrome=['/usr/bin/google-chrome','/usr/bin/google-chrome-stable','/usr/bin/chromium','/opt/google/chrome/chrome']
  .find(p=>{try{execFileSync('test',['-x',p]);return true}catch{return false}});
if(!chrome)throw Error('Chrome/Chromium unavailable');
const server=spawn(process.execPath,['node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port','4195','--strictPort'],{stdio:'pipe'});
server.stderr.on('data',x=>process.stderr.write(x));
let browser;
try{
  for(let i=0;i<100;i++){
    try{if((await fetch('http://127.0.0.1:4195/?kanban=1&qa=1')).ok)break;}catch{}
    await new Promise(r=>setTimeout(r,250));
    if(i===99)throw Error('Preview server timeout');
  }
  browser=await puppeteer.launch({headless:true,executablePath:chrome,args:[
    '--no-sandbox','--disable-setuid-sandbox','--enable-webgl','--use-gl=angle',
    '--use-angle=swiftshader','--enable-unsafe-swiftshader'
  ]});
  const page=await browser.newPage();
  page.on('pageerror',e=>process.stderr.write('PAGE ERROR '+e.message+'\n'));
  await page.setViewport({width:1280,height:800,deviceScaleFactor:1});
  await page.goto('http://127.0.0.1:4195/?kanban=1&qa=1',{waitUntil:'domcontentloaded',timeout:30000});
  await page.waitForFunction(()=>typeof window.__kanFoodProbe==='function'&&
    typeof window.__kanFoodFindSurfaceTap==='function',{timeout:40000});
  await new Promise(r=>setTimeout(r,900));
  // Mouth geometry regression: the fish centre and dorsal fin must never
  // count as a bite; only the projected snout collider may consume pellets.
  const geometry=await page.evaluate(()=>window.__kanFoodProbe().mouthContact);
  if(!geometry||!geometry.mouthContact||geometry.bodyContact||geometry.dorsalContact||
     geometry.bodyToMouth<=geometry.reach)
    throw Error('Food is still disappearing on fish body/fin overlap: '+JSON.stringify(geometry));
  // Freeze fish while checking particle lifetimes, so a fish cannot eat a
  // pellet before the test can count the surface/sinking split.
  await page.evaluate(()=>window.__kan42Pause());
  const tap=await page.evaluate(()=>window.__kanFoodFindSurfaceTap());
  if(!tap)throw Error('No clickable region above the visible tank waterline');
  const before=await page.evaluate(()=>window.__kanFoodProbe().count);
  await page.mouse.click(tap.x,tap.y);
  await page.waitForFunction(n=>window.__kanFoodProbe().count===n,{timeout:6000},before+1);
  const p=await page.evaluate(()=>window.__kanFoodProbe());
  if(p.lastFeedOrigin!=='above'||!p.lastSurfaceSplit)
    throw Error('Click did not register as an above-water feed: '+JSON.stringify({tap,origin:p.lastFeedOrigin}));
  const {floating,sinking}=p.lastSurfaceSplit;
  if(floating<3||floating>4||floating+sinking!==10)
    throw Error('Food split must be exactly 30-40% floating: '+JSON.stringify(p.lastSurfaceSplit));
  const initial=p.food.slice(-10);
  if(initial.filter(b=>b.surfaceFloat).length!==floating ||
     !initial.every(b=>b.state==='air'||b.state==='float'||b.state==='sink'))
    throw Error('Surface pellets were not initialized correctly');
  // A pinch needs visible separation in both horizontal directions, plus
  // different starting heights. All ten must still count towards the
  // established 30–40% floating requirement.
  const extent=axis=>{
    const values=initial.map(bit=>bit.pos[axis]);
    return Math.max(...values)-Math.min(...values);
  };
  if(extent(0)<.03||extent(2)<.022||extent(1)<.035)
    throw Error('Food bunches up rather than scattering in 3D: '+
      JSON.stringify({x:extent(0),z:extent(2),height:extent(1)}));
  await page.evaluate(()=>window.__kanFoodStep(.1));
  const afterShort=await page.evaluate(()=>window.__kanFoodProbe());
  const shortBits=afterShort.food.slice(-10);
  const speeds=initial.map((bit,i)=>(bit.pos[1]-shortBits[i].pos[1])/.1);
  const speedRange=Math.max(...speeds)-Math.min(...speeds);
  if(speedRange<.032||shortBits.some(bit=>bit.state!=='air'))
    throw Error('Surface flakes do not have independent falling speeds: '+JSON.stringify(speeds));
  await page.evaluate(()=>window.__kanFoodStep(2.9));
  const after=await page.evaluate(()=>window.__kanFoodProbe());
  const spawned=after.food.slice(-10);
  if(spawned.filter(b=>b.state==='float').length!==floating)
    throw Error('Floating food did not settle onto the water film: '+JSON.stringify(spawned));
  if(spawned.filter(b=>b.state==='sink'||b.state==='settled').length!==sinking)
    throw Error('Nonfloating pellets did not resume sinking: '+JSON.stringify(spawned));
  const missed=await page.evaluate(()=>window.__kanFoodForceMiss());
  if(!missed||missed.state!=='toss'||missed.misses<1)
    throw Error('Missed bite did not nudge the pellet');
  await page.evaluate(()=>window.__kanFoodStep(.65));
  const final=await page.evaluate(()=>window.__kanFoodProbe());
  if(!final.food.some(b=>b.misses>=1&&(b.state==='sink'||b.state==='settled')))
    throw Error('Missed-bite food disappeared or failed to fall again');
  if(final.biteStats.misses!==1||final.biteStats.attempts!==1)
    throw Error('Missed-bite statistics inconsistent: '+JSON.stringify(final.biteStats));
  console.log('PASS: surface feeding '+floating+'/'+(floating+sinking)+' float, '+sinking+
    ' sink; failed bite rebounds and falls; clickable above-water tap='+JSON.stringify(tap));
}finally{
  await browser?.close();
  server.kill('SIGTERM');
}
