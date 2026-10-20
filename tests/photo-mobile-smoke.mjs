import {chromium} from 'playwright';

const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
const context=await browser.newContext({viewport:{width:390,height:844},screen:{width:390,height:844},isMobile:true,hasTouch:true,deviceScaleFactor:2,acceptDownloads:true});
const page=await context.newPage(),failures=[];
page.on('pageerror',error=>failures.push(String(error)));
const assert=(v,msg)=>{if(!v)throw Error(msg)};
const server='http://127.0.0.1:8766/';
async function openPhotoTool(){
 await page.locator('[data-office-tool="pdf"]').first().click();
 await page.locator('[data-office-nav="photo"]').click();
 await page.locator('#kanPhotoOpen').waitFor();
}
async function uploadSame(){
 await page.locator('#kanPhotoDrop input').evaluate(input=>{
   const c=document.createElement('canvas');c.width=960;c.height=1440;
   const ctx=c.getContext('2d');ctx.fillStyle='#75a894';ctx.fillRect(0,0,c.width,c.height);
   ctx.fillStyle='#c0895f';ctx.fillRect(320,190,310,900);
   ctx.fillStyle='#f6d086';ctx.fillRect(150,1100,650,340);
   const bytes=Uint8Array.from(atob(c.toDataURL('image/png').split(',')[1]),s=>s.charCodeAt(0));
   const file=new File([bytes],'mobile_photo.png',{type:'image/png',lastModified:1760000000000});
   const data=new DataTransfer();data.items.add(file);input.files=data.files;
   input.dispatchEvent(new Event('change',{bubbles:true}));
 });
}
function percent(value){const number=parseInt(String(value));return Number.isFinite(number)?number:0;}
async function touchGesture(touches){
 const cdp=await context.newCDPSession(page);
 for(const step of touches){await cdp.send('Input.dispatchTouchEvent',{type:step.type,touchPoints:step.points.map(([x,y],i)=>({x:Math.round(x),y:Math.round(y),id:i+1}))});await page.waitForTimeout(80);}
 await cdp.detach();
}
try{
 await page.goto(server,{waitUntil:'domcontentloaded'});
 await openPhotoTool();
 await uploadSame();
 await page.locator('#kanPhotoOpen').click();
 const modal=page.locator('dialog.kpe-modal');await modal.waitFor({state:'visible',timeout:15000});
 assert(await modal.evaluate(el=>el.classList.contains('kpe-is-mobile')),'Phone should be auto detected');
 assert(await modal.locator('[data-tab]').count()===6,'All six tabs must remain');
 assert(await modal.locator('.kpe-side').first().isHidden(),'Original image panel should be hidden on phone');
 const compare=modal.locator('[data-click="compare"]');
 assert(await compare.isVisible(),'Hold-to-compare button should be visible');
 const result=modal.locator('[data-pane="1"]'),r=await result.boundingBox();assert(r&&r.width>250,'Large single mobile preview is required');
 await touchGesture([{type:'touchStart',points:[[r.x+r.width*.42,r.y+r.height*.44]]},{type:'touchStart',points:[[r.x+r.width*.42,r.y+r.height*.44],[r.x+r.width*.63,r.y+r.height*.44]]},{type:'touchMove',points:[[r.x+r.width*.27,r.y+r.height*.44],[r.x+r.width*.76,r.y+r.height*.44]]},{type:'touchEnd',points:[]}]);
 const zoom=percent(await modal.locator('#kpeZoom').innerText());assert(zoom>105,'Two finger pinch should zoom, got '+zoom);
 await modal.locator('[data-click="fit"]').click();
 // Hold-to-compare uses pointer events and should restore automatically on release.
 const compareBox=await compare.boundingBox();assert(compareBox,'Compare unavailable');
 await touchGesture([{type:'touchStart',points:[[compareBox.x+compareBox.width/2,compareBox.y+compareBox.height/2]]}]);
 assert(await compare.evaluate(el=>el.classList.contains('active')),'Before image should show during hold');
 await touchGesture([{type:'touchEnd',points:[]}]);
 assert(!await compare.evaluate(el=>el.classList.contains('active')),'After image should return on release');
 // Expand sheet with finger drag.
 const sheet=modal.locator('#kpeSheetHandle'),before=await modal.locator('.kpe-sidebar').evaluate(el=>el.getBoundingClientRect().height);
 const sb=await sheet.boundingBox();assert(sb,'Mobile sheet handle missing');
 await touchGesture([{type:'touchStart',points:[[sb.x+sb.width/2,sb.y+sb.height/2]]},{type:'touchMove',points:[[sb.x+sb.width/2,sb.y+sb.height/2-75]]},{type:'touchEnd',points:[]}]);
 const after=await modal.locator('.kpe-sidebar').evaluate(el=>el.getBoundingClientRect().height);
 assert(after>=before+35,'Bottom sheet should grow on pull up: '+before+' -> '+after);
 // On phone, one finger draws locally; the delayed local draft should persist.
 await modal.locator('[data-tab="basic"]').click();
 await modal.locator('[data-scope="local"]').click();
 await modal.locator('[data-adjust="exposure"]').fill('45');
 const b=await result.boundingBox();
 await touchGesture([{type:'touchStart',points:[[b.x+b.width*.47,b.y+b.height*.46]]},{type:'touchMove',points:[[b.x+b.width*.53,b.y+b.height*.51]]},{type:'touchEnd',points:[]}]);
 await page.waitForFunction(()=>document.querySelector('#kanPhotoList')?.textContent?.includes('Đã tự lưu nháp'),null,{timeout:12000});
 // Reload, reselect same file, confirm recovery, and validate controls.
 await page.goto(server,{waitUntil:'domcontentloaded'});
 await openPhotoTool();await uploadSame();
 page.once('dialog',d=>d.accept());
 await page.locator('#kanPhotoOpen').click();
 const reopened=page.locator('dialog.kpe-modal');await reopened.waitFor({state:'visible'});
 await reopened.locator('[data-tab="basic"]').click();
 assert(await reopened.locator('[data-adjust="exposure"]').inputValue()==='45','Restored exposure must equal saved draft');
 await reopened.locator('[data-click="save"]').click();
 await page.waitForFunction(()=>document.querySelector('.kpe-modal #kpeHint')?.textContent?.includes('Đã lưu'),null,{timeout:30000});
 const resolution=await page.locator('#kanPhotoAfter').evaluate(async image=>{await image.decode();return {width:image.naturalWidth,height:image.naturalHeight};});
 assert(resolution.width===960&&resolution.height===1440,'Full resolution PNG must survive mobile preview edits: '+JSON.stringify(resolution));
 await reopened.locator('[data-click="close"]').last().click();
 const promise=page.waitForEvent('download',{timeout:15000});
 await page.locator('#kanPhotoDownload').click();
 const file=await promise;
 assert(file.suggestedFilename()==='mobile_photo_KAN.png','Mobile saved PNG must download');
 assert(failures.length===0,'Unexpected JavaScript errors: '+failures.join('; '));
 console.log('KAN PHOTO MOBILE E2E PASS: auto mobile UI, pinch, compare-hold, sheet, local brush, offline draft recovery, full-res export.');
}finally{await browser.close();}
