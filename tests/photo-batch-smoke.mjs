import {chromium} from 'playwright';

const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
const page=await browser.newPage({viewport:{width:1440,height:900},acceptDownloads:true});
// Test the standard download branch rather than Chromium's native Save File picker.
await page.addInitScript(()=>{try{delete window.showSaveFilePicker;}catch{}});
const errors=[];page.on('pageerror',e=>errors.push(String(e)));
function check(condition,message){if(!condition)throw Error(message);}
const wait=()=>page.waitForTimeout(120);
try{
 await page.goto('http://127.0.0.1:8766/',{waitUntil:'domcontentloaded',timeout:30000});
 await page.locator('[data-office-tool="pdf"]').first().click();
 await page.locator('[data-office-nav="photo"]').click();
 const raw=await page.evaluate(()=>{
  const c=document.createElement('canvas');c.width=360;c.height=520;const ctx=c.getContext('2d');
  const bg=ctx.createLinearGradient(0,0,360,520);bg.addColorStop(0,'#ba9b88');bg.addColorStop(1,'#70ba8a');
  ctx.fillStyle=bg;ctx.fillRect(0,0,360,520);ctx.fillStyle='#cc9365';ctx.fillRect(125,120,135,280);
  ctx.fillStyle='#305e50';ctx.fillRect(80,390,200,130);return c.toDataURL('image/png').split(',')[1];
 });
 await page.locator('#kanPhotoDrop input').setInputFiles([
  {name:'first.png',mimeType:'image/png',buffer:Buffer.from(raw,'base64')},
  {name:'second.png',mimeType:'image/png',buffer:Buffer.from(raw,'base64')}
 ]);
 await page.locator('#kanPhotoOpen').click();
 const dialog=page.locator('dialog.kpe-modal');await dialog.waitFor({state:'visible'});
 await dialog.locator('[data-tab="basic"]').click();
 await dialog.locator('[data-scope="local"]').click();
 const result=dialog.locator('[data-pane="1"]');
 const bounds=await result.boundingBox();check(bounds,'Missing visible preview canvas');
 // Local brush should mask exposure to just the selected part of the image.
 await dialog.locator('[data-adjust="exposure"]').fill('55');
 await page.mouse.move(bounds.x+bounds.width*.5,bounds.y+bounds.height*.5);
 await page.mouse.down();
 await page.mouse.move(bounds.x+bounds.width*.54,bounds.y+bounds.height*.5,{steps:4});
 await page.mouse.up();
 await dialog.locator('[data-click="save"]').click();
 await page.waitForFunction(()=>document.querySelector('.kpe-modal #kpeHint')?.textContent?.includes('Đã lưu'),null,{timeout:30000});
 const difference=await page.evaluate(async()=>{
  const left=document.querySelector('#kanPhotoBefore'),right=document.querySelector('#kanPhotoAfter');
  await Promise.all([left.decode(),right.decode()]);
  const c=document.createElement('canvas');c.width=360;c.height=520;const ctx=c.getContext('2d');
  ctx.drawImage(left,0,0,360,520);const a=ctx.getImageData(0,0,360,520).data;
  ctx.clearRect(0,0,360,520);ctx.drawImage(right,0,0,360,520);const b=ctx.getImageData(0,0,360,520).data;
  const idx=(x,y)=>(y*360+x)*4;
  const delta=(x,y)=>{let k=idx(x,y);return Math.abs(a[k]-b[k])+Math.abs(a[k+1]-b[k+1])+Math.abs(a[k+2]-b[k+2]);};
  return {center:delta(192,258),corner:delta(8,8)};
 });
 check(difference.center>5,'Local mask should visibly adjust the painted center: '+JSON.stringify(difference));
 check(difference.corner<4,'Unpainted background should be preserved: '+JSON.stringify(difference));
 // Creating variants must actually create 3 images.
 await dialog.locator('[data-tab="detail"]').click();
 await dialog.locator('[data-click="variants"]').click();
 await dialog.locator('#kpeVariants [data-variant]').first().waitFor({state:'visible',timeout:30000});
 check(await dialog.locator('#kpeVariants [data-variant]').count()===3,'Three real rescue options required');
 await dialog.locator('#kpeVariants [data-variant="balanced"]').click();
 // Run the browser capability check without requesting models on unsupported environments.
 const webgpu=await page.evaluate(()=>Boolean(navigator.gpu));
 if(!webgpu){
  await dialog.locator('[data-click="ai-scunet"]').click();
  check((await dialog.locator('#kpeHint').innerText()).includes('WebGPU'),'SCUNet must explain unavailable WebGPU');
 }
 // Save a second version and restore the preceding saved state.
 await dialog.locator('[data-click="save"]').click();
 await page.waitForFunction(()=>document.querySelector('.kpe-modal #kpeHint')?.textContent?.includes('Đã lưu'),null,{timeout:30000});
 page.once('dialog',d=>d.accept());
 await dialog.locator('[data-click="previous"]').click();
 await page.waitForFunction(()=>document.querySelector('.kpe-modal #kpeHint')?.textContent?.includes('bản lưu trước'),null,{timeout:30000});
 // Copy current exposure/HSL color recipe to remaining imported photos.
 await dialog.locator('[data-tab="basic"]').click();
 await dialog.locator('[data-adjust="exposure"]').fill('25');
 page.once('dialog',d=>d.accept());
 await dialog.locator('[data-click="applyBatch"]').click();
 await page.waitForFunction(()=>document.querySelector('.kpe-modal #kpeHint')?.textContent?.includes('Đã áp dụng màu'),null,{timeout:30000});
 await dialog.locator('[data-click="save"]').click();
 await page.waitForFunction(()=>document.querySelector('.kpe-modal #kpeHint')?.textContent?.includes('Đã lưu'),null,{timeout:30000});
 await dialog.locator('[data-click="close"]').last().click();
 await dialog.waitFor({state:'hidden'});
 check(!await page.locator('#kanPhotoDownload').isDisabled(),'Batch results ready for download');
 const downloadPromise=page.waitForEvent('download');
 await page.locator('#kanPhotoDownload').click();
 const downloaded=await downloadPromise;
 check(downloaded.suggestedFilename().endsWith('.zip'),'Multiple photos should download as ZIP');
 check(errors.length===0,'Uncaught page errors: '+errors.join('; '));
 console.log('KAN PHOTO ADVANCED SMOKE PASS: masked local edits, three variations, guarded AI, history rollback, batch color and ZIP export.');
}finally{await browser.close();}
