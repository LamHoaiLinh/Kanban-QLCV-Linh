// End-to-end persistence regression: favorite tank plus deterministic hardscape.
import puppeteer from 'puppeteer-core';
import {spawn,execFileSync} from 'node:child_process';
const chrome=['/usr/bin/google-chrome','/usr/bin/google-chrome-stable','/usr/bin/chromium','/opt/google/chrome/chrome']
  .find(p=>{try{execFileSync('test',['-x',p]);return true;}catch{return false;}});
if(!chrome)throw Error('Chrome unavailable');
const server=spawn(process.execPath,['node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port','4197','--strictPort'],{stdio:'pipe'});
server.stderr.on('data',x=>process.stderr.write(x));
let browser;
const assert=(v,message)=>{if(!v)throw Error(message)};
try {
  for(let i=0;i<100;i++){
    try{if((await fetch('http://127.0.0.1:4197/?kanban=1&qa=1')).ok)break;}catch{}
    await new Promise(r=>setTimeout(r,250));
    if(i===99)throw Error('Vite preview timeout');
  }
  browser=await puppeteer.launch({headless:true,executablePath:chrome,args:[
    '--no-sandbox','--disable-setuid-sandbox','--enable-webgl',
    '--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader'
  ]});
  const page=await browser.newPage();
  page.on('pageerror',e=>process.stderr.write('PAGE ERROR '+e.message+'\n'));
  await page.setViewport({width:1280,height:800});
  const url='http://127.0.0.1:4197/?kanban=1&qa=1';
  await page.goto(url,{waitUntil:'domcontentloaded',timeout:30000});
  await page.waitForFunction(()=>typeof window.__kanFavoriteLayout==='function'&&
    window.__kanFavoriteLayout().flora.length>0,{timeout:40000});
  const first=await page.evaluate(()=>({
    layout:window.__kanFavoriteLayout(),
    config:JSON.parse(localStorage.getItem('aquarium-v1')).state.config
  }));
  const openTab=async(label)=>page.evaluate(label=>{
    const tab=[...document.querySelectorAll('.tabs button')].find(b=>b.textContent.includes(label));
    if(!tab)throw Error('Missing tab: '+label);
    tab.click();
  },label);
  await openTab('Yêu thích');
  const field='input[aria-label="Đặt tên bể yêu thích"]';
  await page.waitForSelector(field);
  await page.click(field,{clickCount:3});
  await page.keyboard.press('Control+A');
  await page.type(field,'Be yeu thich cua anh');
  await page.evaluate(()=>{
    const button=[...document.querySelectorAll('.panel button')].find(b=>b.textContent.includes('Lưu bể'));
    if(!button)throw Error('Missing save favorite button');
    button.click();
  });
  await page.waitForFunction(()=>JSON.parse(localStorage.getItem('aquarium-v1')).state.favoriteNames.includes('Be yeu thich cua anh'));
  await page.click('[aria-label="Tự mở khi vào hồ: Be yeu thich cua anh"]');
  await page.waitForFunction(()=>JSON.parse(localStorage.getItem('aquarium-v1')).state.defaultFavorite==='Be yeu thich cua anh');
  await openTab('Bể');
  await page.evaluate(()=>{
    const button=[...document.querySelectorAll('.panel button')].find(b=>b.textContent.includes('Tạo ngẫu nhiên'));
    if(!button)throw Error('Missing random tank button');
    button.click();
  });
  await page.waitForFunction(()=>JSON.parse(localStorage.getItem('aquarium-v1')).state.config.name==='Hồ cá ngẫu nhiên');
  const current=await page.evaluate(()=>JSON.parse(localStorage.getItem('aquarium-v1')).state);
  assert(current.favoriteNames.length===1,'Generating a random tank erased favorites');
  assert(JSON.stringify(current.savedTanks['Be yeu thich cua anh'].fish)===JSON.stringify(first.config.fish),
    'Favorite fish counts changed after randomizing');
  await page.reload({waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>typeof window.__kanFavoriteLayout==='function'&&
    window.__kanFavoriteLayout().flora.length>0,{timeout:40000});
  const restored=await page.evaluate(()=>({
    config:JSON.parse(localStorage.getItem('aquarium-v1')).state.config,
    state:JSON.parse(localStorage.getItem('aquarium-v1')).state,
    layout:window.__kanFavoriteLayout()
  }));
  assert(restored.state.defaultFavorite==='Be yeu thich cua anh','Preferred favorite not persisted');
  assert(JSON.stringify(restored.config)===JSON.stringify(current.savedTanks['Be yeu thich cua anh']),
    'Favorite config not restored on next visit');
  assert(restored.layout.decor===first.layout.decor,
    'Hardscape location or geometry changed after reopening favorite');
  assert(restored.layout.flora===first.layout.flora,
    'Plants/corals location or geometry changed after reopening favorite');
  await openTab('Yêu thích');
  assert(await page.$('[aria-label="Tự mở khi vào hồ: Be yeu thich cua anh"]'),
    'Favorite missing from UI after reload');
  console.log('PASS aquarium favorites: save, preserve after random, auto-open, exact decor and flora geometry across reload');
} finally {await browser?.close();server.kill('SIGTERM');}
