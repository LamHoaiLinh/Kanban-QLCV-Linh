// Regression for sealed glass and solid substrate edges at every tank size.
import puppeteer from 'puppeteer-core';
import {spawn,execFileSync} from 'node:child_process';
const chrome=['/usr/bin/google-chrome','/usr/bin/google-chrome-stable','/usr/bin/chromium','/opt/google/chrome/chrome'].find(p=>{try{execFileSync('test',['-x',p]);return true}catch{return false}});
if(!chrome)throw Error('Chromium unavailable');
const assert=(ok,msg)=>{if(!ok)throw Error(msg)};
const server=spawn(process.execPath,['node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port','4222','--strictPort'],{stdio:'pipe'});
let browser;
try {
  let ready=false;
  for(let i=0;i<120;i++){try{if((await fetch('http://127.0.0.1:4222/')).ok){ready=true;break;}}catch{}await new Promise(r=>setTimeout(r,100));}
  assert(ready,'preview did not start');
  browser=await puppeteer.launch({headless:true,executablePath:chrome,args:['--no-sandbox','--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
  const page=await browser.newPage(),errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  await page.setViewport({width:1280,height:800});
  await page.evaluateOnNewDocument(()=>localStorage.clear());
  await page.goto('http://127.0.0.1:4222/?kanban=1&qa=1',{waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>window.__kan42Seams&&window.__kan42Scene);
  await page.evaluate(()=>window.__kan42Pause());
  const values=[5,7,10,20,29,40,75,120,160,180,5,180];
  for(const gallons of values){
    const s=await page.evaluate(g=>{window.__kan42Scene({gallons:g});return window.__kan42Seams();},gallons);
    const {halfW,halfD,floorY,height}=s.dims,eps=1e-4;
    assert(s.bottom && s.base && s.panes.every(Boolean) && s.skirts.every(Boolean),'missing surfaces '+gallons);
    assert(s.bottom.min[0]<-halfW && s.bottom.max[0]>halfW,'bottom glass width '+gallons);
    assert(s.bottom.min[2]<-halfD && s.bottom.max[2]>halfD,'bottom glass depth '+gallons);
    assert(s.bottom.min[1]<s.base.max[1]-eps,'bottom must overlap support plinth '+gallons);
    assert(s.bottom.max[1]>s.base.max[1]+eps,'bottom must extend above plinth '+gallons);
    for(const p of s.panes){
      assert(p.min[1]<s.base.max[1]-eps,'wall does not seal into base '+gallons);
      assert(p.max[1]>floorY+height,'wall top clipped '+gallons);
      assert(p.min[1]<s.bottom.max[1] && p.max[1]>s.bottom.min[1],'wall to bottom discontinuity '+gallons);
    }
    for(const sk of s.skirts){
      assert(sk.min[1]<s.base.max[1]-eps,'substrate skirt gap '+gallons);
      assert(sk.max[1]>=floorY-.0201,'substrate exposed gap '+gallons);
    }
    if([5,40,180].includes(gallons)){
      await page.evaluate(()=>window.__kan42Step(.02));
      await page.screenshot({path:'tank-seal-'+gallons+'g.png'});
    }
  }
  assert(errors.length===0,'Browser errors: '+errors.join(';'));
  console.log('PASS tank-seal-smoke: 5-180 gallons, 12 resizes, all four walls, all four substrate sides, plinth overlap');
}finally{await browser?.close();server.kill('SIGTERM');}
