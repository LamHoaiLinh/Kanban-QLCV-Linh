import puppeteer from 'puppeteer-core';
import {spawn,execFileSync} from 'node:child_process';
const chrome=['/usr/bin/google-chrome','/usr/bin/google-chrome-stable','/usr/bin/chromium'].find(path=>{
  try{execFileSync('test',['-x',path]);return true}catch{return false}
});
if(!chrome)throw Error('Chromium missing');
const server=spawn(process.execPath,['node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port','4177','--strictPort'],{stdio:'pipe'});
server.stderr.on('data',x=>process.stderr.write(x));
let browser;
const errors=[];
try{
  for(let i=0;i<100;i++){
    try{if((await fetch('http://127.0.0.1:4177/?kanban=1&qa=1')).ok)break}catch{}
    if(i===99)throw Error('Vite server timeout');
    await new Promise(r=>setTimeout(r,250));
  }
  browser=await puppeteer.launch({headless:true,executablePath:chrome,args:[
    '--no-sandbox','--disable-setuid-sandbox','--enable-webgl','--use-gl=angle',
    '--use-angle=swiftshader','--enable-unsafe-swiftshader']});
  const page=await browser.newPage();
  page.on('pageerror',e=>errors.push(e.message));
  await page.setViewport({width:1366,height:768,deviceScaleFactor:1});
  await page.goto('http://127.0.0.1:4177/?kanban=1&qa=1',{waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>!!window.__kanRealismProbe?.().species?.length,{timeout:45000});
  async function verify(label){
    await new Promise(r=>setTimeout(r,1100));
    const state=await page.evaluate(()=>window.__kanRealismProbe());
    if(!state.optics?.surface)throw Error(label+': water surface still on old shader');
    if(!state.species?.length)throw Error(label+': no swimming creatures');
    if(!Number.isFinite(state.drawCalls)||state.drawCalls<1||state.drawCalls>400)throw Error(label+': unexpected render draw calls '+state.drawCalls);
    if(!Number.isFinite(state.triangles)||state.triangles<1||state.triangles>750000)throw Error(label+': excessive geometry '+state.triangles);
    for(const f of state.species){
      if(!Number.isFinite(f.meanSpeed)||!Number.isFinite(f.turns)||f.meanSpeed<0)throw Error(label+': invalid movement '+JSON.stringify(f));
      if(f.species!=='nerite-snail'&&f.species!=='turbo-snail'&&f.meshVertices<520)throw Error(label+': old jagged fish mesh '+JSON.stringify(f));
      if(f.finGroups<2)throw Error(label+': missing body/fin grouping '+JSON.stringify(f));
    }
    if(state.fish.wallViolations!==0||state.flora.violations!==0)
      throw Error(label+': Realism 1 boundary regression '+JSON.stringify(state));
    console.log('QA2 '+label+': '+state.species.length+' species; '+state.triangles+' triangles, '+state.drawCalls+' draw calls');
  }
  await verify('default');
  for(const name of ['Hồ thủy sinh mini','Đầm san hô','Ốc đảo Betta']){
    await page.evaluate(n=>{
      const b=[...document.querySelectorAll('.preset-list button')].find(x=>x.textContent?.includes(n));
      if(!b)throw Error('Missing preset '+n);
      b.click();
    },name);
    await verify(name);
  }
  // The random tank created from this version must carry the preferred name.
  await page.evaluate(()=>{
    const b=[...document.querySelectorAll('.panel button')].find(x=>x.textContent?.includes('Tạo ngẫu nhiên'));
    if(!b)throw Error('Missing random button');
    b.click();
  });
  await page.waitForFunction(()=>window.__kanRealismProbe?.().name==='Hồ cá ngẫu nhiên');
  await verify('random Vietnamese name');

  // Old persisted names should migrate safely; never drop fish/flora config.
  for(const legacy of ['Surprise Tank','Hồ cá bất ngờ']){
    await page.evaluate(n=>{
      const raw=localStorage.getItem('aquarium-v1');
      if(!raw)throw Error('No persisted aquarium config');
      const state=JSON.parse(raw);
      state.state.config.name=n;
      localStorage.setItem('aquarium-v1',JSON.stringify(state));
    },legacy);
    await page.reload({waitUntil:'domcontentloaded'});
    await page.waitForFunction(()=>window.__kanRealismProbe?.().name==='Hồ cá ngẫu nhiên',{timeout:30000});
    await verify('migration '+legacy);
  }
  if(errors.length)throw Error('Browser JS errors: '+errors.join(' | '));
  console.log('PASS REALISM 2.0: smoother fish meshes and fins, optics, 4 tanks, old-name migrations, bounded render costs');
}catch(e){
  console.error(e);process.exitCode=1;
}finally{await browser?.close();server.kill('SIGTERM')}
