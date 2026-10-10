import puppeteer from 'puppeteer-core';
import {spawn,execFileSync} from 'node:child_process';

const chrome=['/usr/bin/google-chrome','/usr/bin/google-chrome-stable','/usr/bin/chromium',
  '/opt/google/chrome/chrome'].find(path=>{
    try{execFileSync('test',['-x',path]);return true}catch{return false}
  });
if(!chrome)throw Error('No Chromium/Chrome for visual hotfix smoke test');

const server=spawn(process.execPath,['node_modules/vite/bin/vite.js',
  'preview','--host','127.0.0.1','--port','4192','--strictPort'],{stdio:'pipe'});
server.stderr.on('data',b=>process.stderr.write(b));
let browser;
try{
  for(let i=0;i<100;i++){
    try{
      if((await fetch('http://127.0.0.1:4192/?kanban=1&qa=1')).ok)break;
    }catch{}
    if(i===99)throw Error('Vite preview timeout');
    await new Promise(r=>setTimeout(r,250));
  }
  browser=await puppeteer.launch({
    headless:true,executablePath:chrome,
    args:['--no-sandbox','--disable-setuid-sandbox','--enable-webgl',
      '--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']
  });
  const page=await browser.newPage();
  const errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  await page.setViewport({width:1365,height:768,deviceScaleFactor:1});
  await page.goto('http://127.0.0.1:4192/?kanban=1&qa=1',
    {waitUntil:'domcontentloaded',timeout:45000});
  await page.waitForFunction(()=>typeof window.__kanVisualHotfixScene==='function'&&
    window.__kanRealismProbe().fish.fish>0,{timeout:45000});
  const configured=await page.evaluate(()=>window.__kanVisualHotfixScene());
  if(!configured)throw Error('QA scenario could not be configured');
  await page.waitForFunction(()=>{
    const p=window.__kanRealismProbe();
    return p.fins.some(f=>f.id==='angelfish')&&p.hardscape.logs.length===2;
  },{timeout:20000});
  let probe=await page.evaluate(()=>window.__kanRealismProbe());
  const angel=probe.fins.find(f=>f.id==='angelfish');
  if(!angel?.medianStrip||angel.medianTips<40)
    throw Error('Angelfish dorsal/anal membranes still rigid fans '+JSON.stringify(angel));
  for(const f of probe.fins){
    if(f.id==='angelfish'||f.id==='betta'||f.id==='guppy'){
      if(f.flexible<30)throw Error('Not enough flexible vertices '+JSON.stringify(f));
    }
  }
  if(probe.hardscape.cappedBranches<5)
    throw Error('Branch/arch end caps missing '+JSON.stringify(probe.hardscape));
  for(const log of probe.hardscape.logs){
    if(log.sectors!==4||!log.fullCircle||!log.innerWall||!log.outerWall||
      log.cutFaces!==2||log.groups!==3||log.wallFraction<.35||log.triangles<800)
      throw Error('Wood still missing 360-degree shell or hollow ends '+JSON.stringify(log));
  }
  if(errors.length)throw Error('Visual scenario runtime errors: '+errors.join('; '));
  await new Promise(r=>setTimeout(r,950));
  await page.screenshot({path:'realism4-visual-fins-soft.png'});
  await page.evaluate(()=>window.__kanVisualFinToggle(false));
  await new Promise(r=>setTimeout(r,400));
  await page.screenshot({path:'realism4-visual-fins-classic.png'});
  await page.evaluate(()=>window.__kanVisualFinToggle(true));

  // Run actual fish physics beside many full-round log colliders.
  await page.evaluate(()=>window.__kanEcoFastForward(12));
  probe=await page.evaluate(()=>window.__kanRealismProbe());
  if(probe.fish.wallViolations!==0||probe.fish.maxOverlap>.025)
    throw Error('Wood / glass collision regression '+JSON.stringify(probe.fish));
  if(probe.fins.some(f=>!f.mouth.every(Number.isFinite)))
    throw Error('A mouth animation produced invalid vertex dynamics');
  if(errors.length)throw Error('WebGL runtime errors: '+errors.join('; '));
  console.log('PASS visual hotfix: 360-degree thick wood + TWO ring cuts; capped solid driftwood; 3D fish membranes, visible tip rows, reversible A/B fin mode and finite fish physics.');
} finally {
  if(browser)await browser.close();
  server.kill('SIGTERM');
}
