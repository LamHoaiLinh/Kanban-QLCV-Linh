import { chromium } from 'playwright';

const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
const page=await browser.newPage({viewport:{width:1440,height:900},acceptDownloads:true});
const errors=[];
page.on('pageerror',error=>errors.push(String(error)));
function assert(value,message){if(!value)throw Error(message);}
try{
 await page.goto('http://127.0.0.1:8766/',{waitUntil:'domcontentloaded'});
 await page.locator('[data-office-tool="pdf"]').first().click();
 await page.locator('[data-office-nav="photo"]').click();
 await page.locator('#kanPhotoOpen').waitFor();
 assert(await page.locator('#kanPhotoOpen').isDisabled(),'Preview should be unavailable before upload');
 const data=await page.evaluate(()=>{
  const c=document.createElement('canvas');c.width=320;c.height=450;const ctx=c.getContext('2d');
  ctx.fillStyle='#83b3bf';ctx.fillRect(0,0,c.width,c.height);
  ctx.fillStyle='#eac2a3';ctx.fillRect(105,100,110,170);
  ctx.fillStyle='#4f7d62';ctx.fillRect(75,240,170,190);
  ctx.fillStyle='#fde08a';ctx.fillRect(10,15,100,55);
  return c.toDataURL('image/png').split(',')[1];
 });
 await page.locator('#kanPhotoDrop input').setInputFiles({name:'test.png',mimeType:'image/png',buffer:Buffer.from(data,'base64')});
 assert(!await page.locator('#kanPhotoOpen').isDisabled(),'Preview must be enabled after upload');
 await page.locator('#kanPhotoOpen').click();
 const modal=page.locator('dialog.kpe-modal');await modal.waitFor({state:'visible'});
 assert(await modal.locator('[data-tab]').count()===6,'Expected exactly six editing tabs');
 const result=modal.locator('[data-pane="1"]');
 await result.waitFor();
 // Direct manual body warp: drag a point 24px across the visible canvas.
 const rect=await result.boundingBox();assert(rect,'Canvas not visible');
 const beforeWarp=await result.evaluate(canvas=>canvas.toDataURL());
 await page.mouse.move(rect.x+rect.width*.48,rect.y+rect.height*.48);
 await page.mouse.down();await page.mouse.move(rect.x+rect.width*.42,rect.y+rect.height*.48,{steps:6});await page.mouse.up();
 const afterWarp=await result.evaluate(canvas=>canvas.toDataURL());
 assert(beforeWarp!==afterWarp,'Dragging shape brush must visibly modify pixels');
 await modal.locator('[data-tab="basic"]').click();
 await modal.locator('[data-adjust="exposure"]').fill('35');
 await modal.locator('[data-tab="hsl"]').click();
 await modal.locator('[data-color="green"]').click();
 await modal.locator('[data-adjust="hsl.s"]').fill('40');
 await modal.locator('[data-tab="detail"]').click();
 await modal.locator('[data-adjust="sharpness"]').fill('25');
 await modal.locator('[data-tab="geometry"]').click();
 await modal.locator('[data-click="rotateR"]').click();
 await modal.locator('[data-click="flipH"]').click();
 await modal.locator('[data-mode="crop"]').click();
 await modal.locator('[data-click="apply"]').click();
 await modal.locator('[data-mode="perspective"]').click();
 await modal.locator('[data-click="apply"]').click();
 await modal.locator('[data-tab="text"]').click();
 await modal.locator('[data-mode="text"]').click();
 await modal.locator('#kpeText').fill('Chữ tiếng Việt có dấu');
 await modal.locator('[data-click="apply"]').click();
 await modal.locator('[data-click="save"]').click();
 await page.waitForFunction(()=>document.querySelector('.kpe-modal #kpeHint')?.textContent?.includes('Đã lưu'),null,{timeout:30000});
 await result.hover();await page.mouse.wheel(0,-300);await page.waitForTimeout(200);
 await page.keyboard.press('Escape');
 assert(await modal.isVisible(),'First ESC should reset zoom');
 await page.keyboard.press('Escape');
 await modal.waitFor({state:'hidden'});
 assert(!await page.locator('#kanPhotoDownload').isDisabled(),'Download must be enabled after Save');
 const promise=page.waitForEvent('download');await page.locator('#kanPhotoDownload').click();
 const download=await promise;assert(download.suggestedFilename().endsWith('.png'),'PNG type must be preserved');
 assert(errors.length===0,'Browser errors: '+errors.join('; '));
 console.log('KAN PHOTO SIX-TAB SMOKE PASS: upload -> drag warp -> Basic -> HSL -> Detail -> Geometry -> Text -> Save -> ESC -> Download');
}finally{await browser.close();}
