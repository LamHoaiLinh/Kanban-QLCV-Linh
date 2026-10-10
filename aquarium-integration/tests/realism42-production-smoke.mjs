import puppeteer from 'puppeteer-core';
import {readFileSync,writeFileSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
const assert=(ok,msg)=>{if(!ok)throw Error(msg)};
const chrome=['/usr/bin/google-chrome','/usr/bin/google-chrome-stable','/usr/bin/chromium','/opt/google/chrome/chrome'].find(p=>{try{execFileSync('test',['-x',p]);return true}catch{return false}});
const base='https://lamhoailinh.github.io/Kanban-QLCV-Linh/';
const expected=readFileSync('dist/index.html','utf8').match(/src="([^"]+\.js)"/)?.[1];
assert(expected,'compiled JS asset missing');
let deployed=false;
for(let i=0;i<90;i++){
 try{const r=await fetch(base+'aquarium-game/index.html?verify='+Date.now(),{headers:{'Cache-Control':'no-cache'}});if(r.ok&&(await r.text()).includes(expected)){deployed=true;break;}}catch{}
 if(i%6===0)console.log('Waiting for Pages asset '+expected);
 await new Promise(r=>setTimeout(r,10000));
}
assert(deployed,'Pages did not publish the exact compiled asset within 15 minutes');
const asset=await fetch(new URL(expected,base+'aquarium-game/'));assert(asset.ok,'deployed asset HTTP '+asset.status);
let browser;
try{
 browser=await puppeteer.launch({headless:true,executablePath:chrome,protocolTimeout:180000,args:['--no-sandbox','--disable-setuid-sandbox','--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
 const page=await browser.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));page.setDefaultTimeout(120000);
 await page.setViewport({width:960,height:600});
 const response=await page.goto(base+'?verify='+Date.now(),{waitUntil:'domcontentloaded',timeout:120000});assert(response.ok(),'root HTTP '+response.status());
 await page.waitForSelector('#aquariumTopBtn');await page.click('#aquariumTopBtn');
 await page.waitForSelector('.kan-aquarium-overlay:not([hidden]) iframe');
 const handle=await page.$('.kan-aquarium-frame');const frame=await handle.contentFrame();
 await frame.waitForSelector('canvas',{visible:true});await frame.waitForSelector('.kanban-aquarium-stock');
 await frame.waitForFunction(()=>document.querySelector('canvas')?.width>0);
 const state=await frame.evaluate(()=>({url:location.href,qa:typeof window.__kan42Probe,title:document.title,note:document.querySelector('.kanban-aquarium-stock')?.innerText,canvas:[document.querySelector('canvas').width,document.querySelector('canvas').height]}));
 assert(state.qa==='undefined','QA hooks must not exist on production');
 await new Promise(r=>setTimeout(r,10000));await page.screenshot({path:'realism42-production.png'});
 await page.keyboard.press('Escape');await page.waitForFunction(()=>document.querySelector('.kan-aquarium-overlay')?.hidden===true);
 await page.keyboard.down('Alt');await page.keyboard.press('KeyH');await page.keyboard.up('Alt');await page.waitForSelector('.kan-aquarium-overlay:not([hidden]) iframe');
 assert(errors.length===0,'production JS errors '+errors.join(';'));
 const report={status:'PASS',sourceCommit:process.env.GITHUB_SHA,expectedAsset:expected,rootHTTP:response.status(),state,checks:['Exact deployed asset HTTP 200','Root Hồ Cá launcher opens canvas','Production QA hooks absent','Escape closes overlay','Alt+H reopens overlay','No page errors'],errors};
 writeFileSync('realism42-production-report.json',JSON.stringify(report,null,2));console.log('PASS REALISM42 PRODUCTION '+JSON.stringify(report));
}finally{await browser?.close();}
