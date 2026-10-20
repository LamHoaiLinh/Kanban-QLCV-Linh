import { chromium } from 'playwright';

const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
const page=await browser.newPage({viewport:{width:1440,height:900},acceptDownloads:true});
const failures=[];
page.on('pageerror',e=>failures.push(String(e)));
function check(condition,message){if(!condition)throw Error(message);}
try{
 await page.goto('http://127.0.0.1:8766/',{waitUntil:'domcontentloaded',timeout:30000});
 await page.locator('[data-office-tool="pdf"]').first().click({timeout:20000});
 await page.locator('[data-office-nav="photo"]').click();
 await page.locator('#kanPhotoRun').waitFor();
 check(await page.locator('#kanPhotoRun').isDisabled(),'Process must initially be disabled');
 const base64=await page.evaluate(()=>{
  const c=document.createElement('canvas');c.width=240;c.height=340;
  const ctx=c.getContext('2d');ctx.fillStyle='#8ca8c8';ctx.fillRect(0,0,240,340);
  ctx.fillStyle='#f7dcc2';ctx.fillRect(65,80,110,170);ctx.fillStyle='#496443';ctx.fillRect(15,15,70,50);
  return c.toDataURL('image/png').split(',')[1];
 });
 await page.locator('#kanPhotoDrop input').setInputFiles({name:'mau.png',mimeType:'image/png',buffer:Buffer.from(base64,'base64')});
 await page.locator('[data-kphoto="waist"]').uncheck();
 await page.locator('[data-kphoto="arms"]').uncheck();
 await page.locator('#kanPhotoRun').click();
 await page.waitForFunction(()=>!document.querySelector('#kanPhotoDownload').disabled,null,{timeout:60000});
 const processed=await page.locator('#kanPhotoAfter').getAttribute('src');
 check(processed?.startsWith('blob:'),'Expected processed blob URL');
 await page.locator('#kanPhotoPreviewB').click();
 const modal=page.locator('dialog.kpe-modal');
 await modal.waitFor({state:'visible',timeout:20000});
 await modal.locator('[data-click="rotateR"]').click();
 await modal.locator('[data-click="flipH"]').click();
 await modal.locator('[data-mode="text"]').click();
 await modal.locator('#kpeText').fill('Tiếng Việt có dấu');
 await modal.locator('[data-click="apply"]').click();
 await modal.locator('[data-mode="crop"]').click();
 await modal.locator('[data-click="apply"]').click();
 await modal.locator('[data-mode="perspective"]').click();
 await modal.locator('[data-click="apply"]').click();
 await modal.locator('[data-click="save"]').click();
 await page.waitForFunction(()=>document.querySelector('.kpe-modal #kpeHint')?.textContent?.includes('Đã lưu'),null,{timeout:20000});
 await modal.locator('[data-pane="1"]').hover();
 await page.mouse.wheel(0,-400);
 await page.waitForTimeout(200);
 await page.keyboard.press('Escape');
 check(await modal.isVisible(),'First ESC should reset zoom without closing');
 await page.keyboard.press('Escape');
 await modal.waitFor({state:'hidden',timeout:5000});
 const download=page.waitForEvent('download',{timeout:10000});
 await page.locator('#kanPhotoDownload').click();
 const file=await download;check(file.suggestedFilename().endsWith('.png'),'Download should preserve PNG format');
 check(!failures.length,'Browser errors: '+failures.join('; '));
 console.log('PHOTO WEB SMOKE OK: upload > process > preview > rotate > flip > text > crop > perspective > save > zoom ESC > download');
}finally{await browser.close();}
