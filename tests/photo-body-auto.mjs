import {chromium} from 'playwright';
const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
const page=await browser.newPage({viewport:{width:1280,height:800}});
try{
 await page.goto('http://127.0.0.1:8766/',{waitUntil:'domcontentloaded'});
 const outcome=await page.evaluate(async()=>{
  const {renderAutoBody,DEFAULT_BODY,bodyRegions}=await import('/office-tools/photo-auto-body.js');
  const {validPose}=await import('/office-tools/photo-pose.js');
  const w=360,h=480,source=document.createElement('canvas');source.width=w;source.height=h;
  const ctx=source.getContext('2d');
  const grad=ctx.createLinearGradient(0,0,w,h);grad.addColorStop(0,'#d8b58e');grad.addColorStop(1,'#34756b');
  ctx.fillStyle=grad;ctx.fillRect(0,0,w,h);
  ctx.fillStyle='#5a8eaa';ctx.fillRect(110,100,140,250);
  const p=Array.from({length:33},()=>({x:.5,y:.5,visibility:.98}));
  Object.assign(p[0],{x:.5,y:.11});Object.assign(p[7],{x:.43,y:.15});Object.assign(p[8],{x:.57,y:.15});
  Object.assign(p[11],{x:.34,y:.24});Object.assign(p[12],{x:.66,y:.24});
  Object.assign(p[13],{x:.22,y:.38});Object.assign(p[14],{x:.78,y:.38});
  Object.assign(p[15],{x:.21,y:.52});Object.assign(p[16],{x:.79,y:.52});
  Object.assign(p[23],{x:.39,y:.60});Object.assign(p[24],{x:.61,y:.60});
  Object.assign(p[25],{x:.37,y:.76});Object.assign(p[26],{x:.63,y:.76});
  Object.assign(p[27],{x:.35,y:.93});Object.assign(p[28],{x:.65,y:.93});
  if(!validPose(p)||!bodyRegions(p,w,h))throw Error('Synthetic landmarks should form a detected person');
  const a=renderAutoBody(source,p,DEFAULT_BODY());
  const b=renderAutoBody(source,p,DEFAULT_BODY());
  const stronger=renderAutoBody(source,p,{...DEFAULT_BODY(),waist:94,arms:82});
  const px=(c)=>c.getContext('2d').getImageData(0,0,w,h).data;
  const raw=px(source),one=px(a),two=px(b),more=px(stronger);
  let difference=0,adjustDifference=0,rerunDifference=0;
  for(let i=0;i<raw.length;i+=4){
   difference+=Math.abs(raw[i]-one[i])+Math.abs(raw[i+1]-one[i+1])+Math.abs(raw[i+2]-one[i+2]);
   adjustDifference+=Math.abs(one[i]-more[i])+Math.abs(one[i+1]-more[i+1])+Math.abs(one[i+2]-more[i+2]);
   rerunDifference+=Math.abs(one[i]-two[i])+Math.abs(one[i+1]-two[i+1])+Math.abs(one[i+2]-two[i+2]);
  }
  return {difference,adjustDifference,rerunDifference};
 });
 if(outcome.difference<200)throw Error('Eo/tay tự động không tác động lên ảnh thật: '+JSON.stringify(outcome));
 if(outcome.adjustDifference<50)throw Error('Thay đổi thanh tự động không đổi mức bóp: '+JSON.stringify(outcome));
 if(outcome.rerunDifference!==0)throw Error('Thuật toán tự động không tất định: '+JSON.stringify(outcome));
 console.log('BODY AUTO PASS',outcome);
}finally{await browser.close();}
