// End-to-end regression: a pellet is created on the actual pointer ray,
// at a randomized depth INSIDE the water and OUTSIDE solid obstacles.
// This is QA-only: user-facing interactions still use the normal canvas click.
import puppeteer from 'puppeteer-core';
import {spawn,execFileSync} from 'node:child_process';

const chrome=['/usr/bin/google-chrome','/usr/bin/google-chrome-stable','/usr/bin/chromium','/opt/google/chrome/chrome']
  .find(path=>{try{execFileSync('test',['-x',path]);return true;}catch{return false;}});
if(!chrome)throw Error('Chromium/Chrome executable not installed on CI agent');
const server=spawn(process.execPath,['node_modules/vite/bin/vite.js','preview',
  '--host','127.0.0.1','--port','4185','--strictPort'],{stdio:'pipe'});
server.stderr.on('data',x=>process.stderr.write(x));
let browser;
try{
  for(let i=0;i<80;i++){
    try{const r=await fetch('http://127.0.0.1:4185/?kanban=1&qa=1');if(r.ok)break;}catch{}
    await new Promise(r=>setTimeout(r,250));
    if(i===79)throw Error('Vite preview startup timeout');
  }
  browser=await puppeteer.launch({headless:true,executablePath:chrome,
    args:['--no-sandbox','--disable-setuid-sandbox','--enable-webgl',
      '--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
  const page=await browser.newPage();
  page.on('pageerror',e=>process.stderr.write('PAGE ERROR '+e.message+'\n'));
  await page.setViewport({width:1280,height:800,deviceScaleFactor:1});
  await page.goto('http://127.0.0.1:4185/?kanban=1&qa=1',
    {waitUntil:'domcontentloaded',timeout:30000});
  await page.waitForSelector('#canvas-host canvas',{timeout:40000});
  await page.waitForFunction(()=>typeof window.__kanFoodProbe==='function',{timeout:35000});
  await new Promise(r=>setTimeout(r,1400));
  const bounds=await (await page.$('#canvas-host canvas')).boundingBox();
  if(!bounds)throw Error('Canvas has no bounding rect');

  const snapshots=[];
  async function dropAt(fx,fy){
    const x=bounds.x+bounds.width*fx,y=bounds.y+bounds.height*fy;
    const before=await page.evaluate(()=>window.__kanFoodProbe().count);
    await page.mouse.click(x,y);
    await page.waitForFunction(n=>window.__kanFoodProbe().count===n,
      {timeout:7000},before+1);
    const probe=await page.evaluate(()=>window.__kanFoodProbe());
    if(!probe.lastSpawn||!probe.lastScreen)throw Error('No 3D spawn evidence');
    const [px,py,pz]=probe.lastSpawn;
    const d=probe.dims,eps=1e-5;
    if(![px,py,pz].every(Number.isFinite)||
      Math.abs(px)>=d.halfW-eps||Math.abs(pz)>=d.halfD-eps||
      py<=d.floorY+eps||py>=d.surfaceY-eps)
      throw Error('Pellet created outside water bounds '+JSON.stringify(probe));
    if(probe.obstacles.some(([ox,oy,oz,r])=>
      Math.hypot(px-ox,py-oy,pz-oz)<Math.max(.005,r)+.005))
      throw Error('Pellet intersects decor '+JSON.stringify(probe.lastSpawn));
    const [sx,sy,sz]=probe.lastScreen;
    const projectedX=bounds.x+(sx+1)*bounds.width/2;
    const projectedY=bounds.y+(1-sy)*bounds.height/2;
    if(Math.hypot(projectedX-x,projectedY-y)>2.5||sz<-1||sz>1)
      throw Error('Spawn missed click '+JSON.stringify({
        clicked:[x,y],projected:[projectedX,projectedY],spawn:probe.lastSpawn
      }));
    snapshots.push({screen:[fx,fy],spawn:probe.lastSpawn});
    return probe;
  }
  // Top, central and low click positions: none may be teleported to surface.
  for(const [x,y] of [[.40,.34],[.40,.48],[.40,.63]])
    await dropAt(x,y);
  // Same screen point should produce different physical depths, never drift
  // horizontally off the pointing ray at the moment the pellet is created.
  const depths=[];
  for(let i=0;i<8;i++)depths.push((await dropAt(.40,.48)).lastSpawn);
  const spread=Math.max(...depths.map(p=>p[2]))-Math.min(...depths.map(p=>p[2]));
  if(spread<.02)throw Error('3D food depth did not vary: '+JSON.stringify(depths));

  // Oblique camera: manually orbit, then inspect the same 3D->screen invariant.
  await page.mouse.move(bounds.x+bounds.width*.48,bounds.y+bounds.height*.44);
  await page.mouse.down();
  await page.mouse.move(bounds.x+bounds.width*.28,bounds.y+bounds.height*.45,{steps:8});
  await page.mouse.up();
  await new Promise(r=>setTimeout(r,850));
  await dropAt(.40,.48);

  // Existing cinematic mode is also a moving perspective, not a fixed front view.
  await page.evaluate(()=>window.__kanFoodTestCamera('cinematic'));
  await new Promise(r=>setTimeout(r,700));
  await dropAt(.40,.48);

  // Clicking the black/background region must not spawn at a clamped edge,
  // and must not advance the special-cookie cycle.
  const previous=await page.evaluate(()=>window.__kanFoodProbe().count);
  await page.mouse.click(bounds.x+bounds.width*.01,bounds.y+bounds.height*.01);
  await new Promise(r=>setTimeout(r,250));
  const after=await page.evaluate(()=>window.__kanFoodProbe().count);
  if(after!==previous)throw Error('Background click unexpectedly fed fish');
  const wood=await page.evaluate(()=>window.__kan42WoodTest());
  if(!wood||wood.support!=='wood'||wood.state!=='settled'||
     wood.pelletY<=wood.floorY+.012||wood.pelletY>wood.woodTop+.045)
    throw Error('Pellet did not settle on the real hollow-log shell: '+JSON.stringify(wood));
  console.log('PASS food3d: exact click ray, randomized depth, real wood collision, invalid clicks; samples='+snapshots.length);
} finally {
  if(browser)await browser.close();
  server.kill('SIGTERM');
}
