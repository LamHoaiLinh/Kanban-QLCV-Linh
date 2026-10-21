import {chromium} from 'playwright';
const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
const page=await browser.newPage({viewport:{width:1440,height:900}});
const errors=[];page.on('pageerror',e=>errors.push(String(e)));
const requireTrue=(cond,message)=>{if(!cond)throw Error(message);};
const modelStub=String.raw`export const FilesetResolver={forVisionTasks:async()=>({})};
export const PoseLandmarker={createFromOptions:async()=>({detect:()=>{
  const points=Array.from({length:33},()=>({x:.5,y:.5,visibility:.99,z:0}));
  Object.assign(points[0],{x:.5,y:.10});Object.assign(points[7],{x:.43,y:.15});Object.assign(points[8],{x:.57,y:.15});
  Object.assign(points[11],{x:.32,y:.24});Object.assign(points[12],{x:.68,y:.24});
  Object.assign(points[13],{x:.22,y:.40});Object.assign(points[14],{x:.78,y:.40});
  Object.assign(points[15],{x:.18,y:.52});Object.assign(points[16],{x:.82,y:.52});
  Object.assign(points[23],{x:.39,y:.60});Object.assign(points[24],{x:.61,y:.60});
  Object.assign(points[25],{x:.39,y:.79});Object.assign(points[26],{x:.61,y:.79});
  Object.assign(points[27],{x:.38,y:.95});Object.assign(points[28],{x:.62,y:.95});
  return {landmarks:[points]};
}})};`;
try{
 await page.route('**/vision_bundle.mjs',route=>route.fulfill({status:200,contentType:'text/javascript',headers:{'access-control-allow-origin':'*'},body:modelStub}));
 await page.goto('http://127.0.0.1:8766/',{waitUntil:'domcontentloaded'});
 await page.locator('[data-office-tool="pdf"]').first().click();
 await page.locator('[data-office-nav="photo"]').click();
 const bytes=await page.evaluate(()=>{
  const c=document.createElement('canvas');c.width=400;c.height=580;
  const ctx=c.getContext('2d');ctx.fillStyle='#b5caa8';ctx.fillRect(0,0,400,580);
  ctx.fillStyle='#795b3a';ctx.fillRect(120,110,160,250);ctx.fillStyle='#a5c0ec';ctx.fillRect(115,360,170,220);
  return c.toDataURL('image/png').split(',')[1];
 });
 await page.locator('#kanPhotoDrop input').setInputFiles({name:'auto.png',mimeType:'image/png',buffer:Buffer.from(bytes,'base64')});
 await page.locator('#kanPhotoOpen').click();
 const modal=page.locator('dialog.kpe-modal');await modal.waitFor({state:'visible'});
 await page.waitForFunction(()=>document.querySelector('#kpePoseStatus')?.textContent?.includes('Đã nhận diện'),null,{timeout:12000});
 const image=modal.locator('[data-pane="1"]');
 const base=await image.evaluate(c=>c.toDataURL());
 const waist=modal.locator('[data-adjust="body.waist"]');
 requireTrue(await waist.inputValue()==='65','Default waist strength should equal 65');
 await waist.fill('91');await page.waitForTimeout(350);
 const strong=await image.evaluate(c=>c.toDataURL());
 requireTrue(strong!==base,'Automatic waist slider must alter pixels using pose landmarks');
 await waist.dblclick();await page.waitForTimeout(300);
 requireTrue(await waist.inputValue()==='65','Double click must restore original waist level');
 await page.keyboard.press('Control+z');
 requireTrue(await waist.inputValue()==='91','Ctrl+Z must undo double-click slider reset');
 await page.keyboard.press('Control+y');
 requireTrue(await waist.inputValue()==='65','Ctrl+Y must redo slider reset');
 const coords=await image.boundingBox();requireTrue(coords,'Image canvas not visible');
 // Each complete pointer stroke is exactly one undo action.
 const before=await image.evaluate(c=>c.toDataURL());
 async function drag(from,to){
  await page.mouse.move(coords.x+coords.width*from,coords.y+coords.height*.5);
  await page.mouse.down();
  await page.mouse.move(coords.x+coords.width*to,coords.y+coords.height*.5,{steps:4});
  await page.mouse.up();
 }
 await drag(.46,.42);
 const first=await image.evaluate(c=>c.toDataURL());
 requireTrue(first!==before,'First manual brush stroke must alter pixels');
 await drag(.58,.62);
 const second=await image.evaluate(c=>c.toDataURL());
 requireTrue(second!==first,'Second manual stroke must alter pixels');
 await page.keyboard.press('Control+z');
 const afterUndo1=await image.evaluate(c=>c.toDataURL());
 if(afterUndo1!==first)console.log('UNDO DEBUG',{undoMatchesBefore:afterUndo1===before,undoMatchesSecond:afterUndo1===second,firstLength:first.length,afterLength:afterUndo1.length,tool:await modal.locator('#kpeHint').textContent()});
 requireTrue(afterUndo1===first,'One undo must revert exactly one brush stroke');
 await page.keyboard.press('Control+z');
 const afterUndo2=await image.evaluate(c=>c.toDataURL());
 requireTrue(afterUndo2===before,'Two undo calls must revert two brush strokes');
 await page.keyboard.press('Control+Shift+z');
 await page.keyboard.press('Control+y');
 const afterRedo=await image.evaluate(c=>c.toDataURL());
 requireTrue(afterRedo===second,'Redo must restore both brush strokes');
 requireTrue(errors.length===0,'Browser script errors: '+errors.join('; '));
 console.log('KAN PHOTO V2 PASS: mocked landmark wiring, auto waist pixel effect, doubleclick reset, repeated Ctrl+Z and Ctrl+Y brush undo');
}finally{await browser.close();}
