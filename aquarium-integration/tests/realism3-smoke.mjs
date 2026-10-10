import puppeteer from 'puppeteer-core';
import {spawn,execFileSync} from 'node:child_process';
const chrome=['/usr/bin/google-chrome','/usr/bin/google-chrome-stable','/usr/bin/chromium'].find(p=>{
  try{execFileSync('test',['-x',p]);return true}catch{return false}
});
if(!chrome)throw Error('Chromium not available');
const server=spawn(process.execPath,['node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port','4178','--strictPort'],{stdio:'pipe'});
server.stderr.on('data',b=>process.stderr.write(b));
let browser;
const errors=[];
try{
  for(let i=0;i<100;i++){
    try{if((await fetch('http://127.0.0.1:4178/?kanban=1&qa=1')).ok)break}catch{}
    if(i===99)throw Error('Preview server did not start');
    await new Promise(r=>setTimeout(r,250));
  }
  browser=await puppeteer.launch({executablePath:chrome,headless:true,args:[
    '--no-sandbox','--disable-setuid-sandbox','--enable-webgl','--use-gl=angle',
    '--use-angle=swiftshader','--enable-unsafe-swiftshader']});
  const page=await browser.newPage();
  page.on('pageerror',e=>errors.push(e.message));
  await page.setViewport({width:1366,height:900,deviceScaleFactor:1});
  await page.goto('http://127.0.0.1:4178/?kanban=1&qa=1',{waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>window.__kanRealismProbe?.().eco?.temperature>0,{timeout:30000});
  const snap=()=>page.evaluate(()=>window.__kanRealismProbe());
  const initial=await snap();
  if(initial.ecoMode!=='natural')throw Error('New aquarium does not default to natural: '+initial.ecoMode);
  const beforeFish=initial.fish.fish;
  const section=await page.$('.section[aria-label="Hệ sinh thái mô phỏng"]');
  if(!section)throw Error('Missing Vietnamese ecology controls');
  const labels=await section.$eval('.seg',node=>[...node.querySelectorAll('button')].map(b=>b.textContent.trim()));
  if(!labels.includes('Ngắm cá tự nhiên')||!labels.includes('Thư giãn tương tác'))
    throw Error('Missing natural/relax mode: '+labels);
  const metrics=await section.$eval('.eco-metrics',node=>node.textContent);
  for(const label of ['Nhiệt độ','Oxy','Nước sạch','Thức ăn dư'])
    if(!metrics.includes(label))throw Error('Missing ecology metric '+label);
  const sane=(v,label)=>{
    if(v.temperature<22||v.temperature>28||v.oxygen<70||v.oxygen>100||v.cleanliness<65||v.cleanliness>100||
       !Number.isFinite(v.waste)||v.waste<0||v.waste>1||v.leftover<0)
      throw Error(label+': unrealistic, invalid ecology snapshot: '+JSON.stringify(v));
  };
  sane(initial.eco,'initial');
  await page.evaluate(()=>{
    const btn=[...document.querySelectorAll('.section[aria-label="Hệ sinh thái mô phỏng"] button')]
      .find(x=>x.textContent.trim()==='Thư giãn tương tác');
    btn.click();
  });
  await page.waitForFunction(()=>window.__kanRealismProbe?.().ecoMode==='relax',{timeout:7000});
  const persisted=await page.evaluate(()=>JSON.parse(localStorage.getItem('aquarium-v1')||'null')?.state);
  if(persisted?.ecoMode!=='relax')throw Error('Relax mode did not persist');
  if(!persisted?.config||JSON.stringify(persisted.config.fish)!==JSON.stringify((await page.evaluate(()=>JSON.parse(localStorage.getItem('aquarium-v1')).state.config.fish))))
    throw Error('Tank lost from persisted state');
  await page.reload({waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>window.__kanRealismProbe?.().ecoMode==='relax',{timeout:30000});
  const loaded=await snap();
  if(loaded.fish.fish!==beforeFish)throw Error('Reload changed number of fish');
  sane(loaded.eco,'after reload');
  // The original panel auto-closes after 15s without interaction: open
  // it again if needed, and preserve this existing KanBan functionality.
  await page.evaluate(()=>{
    if(!document.querySelector('.panel'))document.querySelector('.open-panel')?.click();
    [...document.querySelectorAll('.section[aria-label="Hệ sinh thái mô phỏng"] button')]
      .find(x=>x.textContent.trim()==='Ngắm cá tự nhiên')?.click();
  });
  await page.waitForFunction(()=>window.__kanRealismProbe?.().ecoMode==='natural',{timeout:7000});
  const start=await snap();
  // Interaction remains optional. User can feed and choose a gentle clean;
  // neither is allowed to remove fish or mutate the saved tank layout.
  await page.mouse.click(530,390);
  await page.waitForFunction(()=>window.__kanRealismProbe?.().eco?.waste > .1,{timeout:7000});
  await page.evaluate(()=>{
    const btn=[...document.querySelectorAll('.section[aria-label="Hệ sinh thái mô phỏng"] button')]
      .find(x=>x.textContent.trim()==='Làm sạch nước mô phỏng');
    if(!btn)throw Error('No gentle clean button');
    btn.click();
  });
  await page.waitForFunction(()=>window.__kanRealismProbe?.().eco?.waste<=.081,{timeout:7000});
  const after=await snap();
  if(after.fish.fish!==beforeFish)throw Error('Cleaning removed fish');
  if(after.fish.wallViolations!==0||after.flora.violations!==0)throw Error('Realism 1 boundary regression');
  sane(after.eco,'after clean');
  // Autonomous events must occur without user tapping the fish. Wait using
  // simulation time; do not force random state by patching internals.
  await page.waitForFunction(()=>{
    const e=window.__kanRealismProbe?.().eco;
    return e&&(e.grazeEvents+e.restEvents+e.shelterEvents)>0;
  },{timeout:35000,polling:1000});
  const natural=await snap();
  if(natural.fish.fish!==beforeFish)throw Error('Natural mode changed tank stock');
  if(natural.fish.wallViolations!==0||natural.flora.violations!==0)
    throw Error('Natural mode escaped tank boundaries');
  if(errors.length)throw Error('Browser JS runtime errors: '+errors.join(' / '));
  console.log('PASS REALISM 3: natural/relax persisted and restored; live ecology indicators, simulated feeding/cleaning, autonomous activity, no fish loss, Realism 1 boundary checks; events='+
    JSON.stringify({graze:natural.eco.grazeEvents,rest:natural.eco.restEvents,shelter:natural.eco.shelterEvents}));
}catch(error){
  console.error(error);process.exitCode=1;
}finally{
  await browser?.close();
  server.kill('SIGTERM');
}
