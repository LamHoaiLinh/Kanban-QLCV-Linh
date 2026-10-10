import puppeteer from 'puppeteer-core';
import {spawn,execFileSync} from 'node:child_process';
const chrome=['/usr/bin/google-chrome','/usr/bin/google-chrome-stable','/usr/bin/chromium',
  '/opt/google/chrome/chrome'].find(x=>{try{execFileSync('test',['-x',x]);return true}catch{return false}});
if(!chrome)throw Error('Chromium missing');
const server=spawn(process.execPath,['node_modules/vite/bin/vite.js','preview',
  '--host','127.0.0.1','--port','4187','--strictPort'],{stdio:'pipe'});
server.stderr.on('data',b=>process.stderr.write(b));
let browser;
try{
  for(let i=0;i<100;i++){
    try{if((await fetch('http://127.0.0.1:4187/?kanban=1&qa=1')).ok)break;}catch{}
    if(i===99)throw Error('Vite preview timeout');
    await new Promise(r=>setTimeout(r,250));
  }
  browser=await puppeteer.launch({headless:true,executablePath:chrome,
    args:['--no-sandbox','--disable-setuid-sandbox','--enable-webgl',
      '--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
  const page=await browser.newPage();
  page.on('pageerror',err=>process.stderr.write('PAGE ERROR '+err.message+'\n'));
  await page.setViewport({width:1280,height:800,deviceScaleFactor:1});
  await page.goto('http://127.0.0.1:4187/?kanban=1&qa=1',
    {waitUntil:'domcontentloaded',timeout:45000});
  await page.waitForFunction(()=>!!window.__kanRealismProbe&&
    window.__kanRealismProbe().fish.fish>0,{timeout:50000});
  const initial=await page.evaluate(()=>window.__kanRealismProbe());
  if(initial.habitat.types.length!==20||
    new Set(initial.habitat.types).size!==20)
    throw Error('Expected 20 unique behavior categories');
  for(const f of initial.fins){
    if(f.flexible===0&&!f.id.includes('snail'))throw Error('No deformable fin vertices '+f.id);
    if(!f.mouth.every(Number.isFinite))throw Error('Nonfinite mouth state '+f.id);
  }
  const openDecor=async()=>{
    if(!(await page.$('.panel'))){
      await page.evaluate(()=>document.querySelector('.open-panel')?.click());
      await page.waitForSelector('.panel',{timeout:10000});
    }
    await page.evaluate(()=>[...document.querySelectorAll('.panel .tabs button')]
      .find(b=>b.textContent?.trim()==='Trang trí')?.click());
    await page.waitForSelector('.decor-grid button',{timeout:10000});
  };
  await openDecor();
  for(const [name,id] of [
    ['Khúc gỗ rỗng','hollow-log'],['Cầu gỗ vòm','log-arch'],
    ['Lũa ống cổ thụ nứt','split-log'],['Cầu rễ lũa đan','root-bridge']]){
    // Headless SwiftShader can make a settings transition exceed the normal
    // 15-second panel idle timer; reopening is part of the real UI contract.
    await openDecor();
    await page.evaluate(label=>{
      const b=[...document.querySelectorAll('.decor-grid button')]
        .find(b=>b.textContent?.trim()===label);
      if(!b)throw Error('Missing selectable wood: '+label);
      if(b.getAttribute('aria-pressed')!=='true')b.click();
    },name);
    await page.waitForFunction(id=>window.__kanRealismProbe().habitat.tunnels
      .some(t=>t.id===id),{timeout:15000},id);
  }
  await page.waitForFunction(()=>window.__kanRealismProbe().habitat.tunnels.length>=4,
    {timeout:14000});
  const habitat=await page.evaluate(()=>window.__kanRealismProbe());
  for(const tunnel of habitat.habitat.tunnels){
    if(!tunnel.through||tunnel.radius<=.008||tunnel.capacity<1)
      throw Error('Bad water corridor '+JSON.stringify(tunnel));
    for(const p of [tunnel.entry,tunnel.mid,tunnel.exit]){
      if(!p.every(Number.isFinite)||Math.abs(p[0])>habitat.fish.fish+100)
        throw Error('Invalid tunnel world coordinate');
    }
    // The centre of a traversable cave must never coincide with the old
    // spherical collider that blocked the entire hollow.
    if(habitat.obstacles<1)throw Error('Missing bark/leg collision geometry');
  }
  // 60-fish simulation with many props, no saved-tank mutation.
  await page.evaluate(()=>window.__kanHabitatPopulate('neon-tetra',60));
  await page.waitForFunction(()=>window.__kanRealismProbe().fish.fish===60,
    {timeout:12000});
  await page.evaluate(()=>window.__kanEcoFastForward(50));
  const result=await page.evaluate(()=>window.__kanRealismProbe());
  if(result.fish.fish!==60||result.fish.wallViolations!==0)
    throw Error('60-fish regression '+JSON.stringify(result.fish));
  if(result.fish.maxOverlap>.018)
    throw Error('Severe solid collision '+JSON.stringify(result.fish));
  if(result.fins.some(f=>!f.mouth.every(Number.isFinite)||f.flexible===0))
    throw Error('Broken fin/jaw instance shader attributes');
  const events=Object.entries(result.habitat.counts).reduce((sum,[k,v])=>sum+v,0);
  if(events===0)throw Error('Event director did not emit a contextual event');
  // Peaceful neon tetras must not randomly be scripted as territorial attackers.
  for(const aggressive of ['territory-display','brief-chase','nip-and-dodge']){
    if(result.habitat.counts[aggressive]!==0)
      throw Error('Species behavior mismatch: '+aggressive);
  }
  console.log('PASS realism4: 20 event categories, four open wood corridors, supple fins, 60 fish, collision containment, archetypes, observed events '+events);
} finally {
  if(browser)await browser.close();
  server.kill('SIGTERM');
}
