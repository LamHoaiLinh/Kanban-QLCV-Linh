/*
 * Pose-based automatic shape deformation. Always computes from unchanged base
 * pixels and normalized landmarks, never cumulatively on already-warped output.
 */
import {deformAt} from './photo-warp.js?v=1.0.0';
const cap=(n,min,max)=>Math.max(min,Math.min(max,n));
const canvas=(w,h)=>{const c=document.createElement('canvas');c.width=w;c.height=h;return c;};
const copy=source=>{const c=canvas(source.width,source.height);c.getContext('2d').drawImage(source,0,0);return c;};
export const DEFAULT_BODY=()=>({waist:65,arms:65,legs:0,shoulders:0,head:0,overall:0,natural:70});
const lerp=(a,b,t)=>a+(b-a)*t;
function pos(points,index,w,h){const p=points[index];return {x:p.x*w,y:p.y*h};}
function warpToward(src,from,to,radius,rate){
 if(rate<.01)return src;
 return deformAt(src,from,to,Math.max(12,radius),cap(rate,0,100));
}
function shrinkRegion(src,center,radX,radY,level,softness){
 if(level<=0||radX<3||radY<3)return src;
 const ctx=src.getContext('2d',{willReadFrequently:true}),w=src.width,h=src.height;
 const before=ctx.getImageData(0,0,w,h),after=ctx.createImageData(w,h);
 after.data.set(before.data);const input=before.data,dst=after.data;
 const x0=Math.max(0,Math.floor(center.x-radX)),x1=Math.min(w-1,Math.ceil(center.x+radX));
 const y0=Math.max(0,Math.floor(center.y-radY)),y1=Math.min(h-1,Math.ceil(center.y+radY));
 const amount=cap(level/100,0,1)*.29*(1-softness*.18);
 for(let y=y0;y<=y1;y++)for(let x=x0;x<=x1;x++){
  const nx=(x-center.x)/radX,ny=(y-center.y)/radY,d2=nx*nx+ny*ny;if(d2>=1)continue;
  const falloff=Math.pow(1-d2,2),fac=1+amount*falloff; // inverse map: sample farther from center
  const sx=cap(center.x+(x-center.x)*fac,0,w-1),sy=cap(center.y+(y-center.y)*fac,0,h-1);
  const px=Math.floor(sx),py=Math.floor(sy),qx=Math.min(w-1,px+1),qy=Math.min(h-1,py+1),fx=sx-px,fy=sy-py;
  const a=(py*w+px)*4,b=(py*w+qx)*4,c=(qy*w+px)*4,d=(qy*w+qx)*4,o=(y*w+x)*4;
  for(let k=0;k<4;k++)dst[o+k]=input[a+k]*(1-fx)*(1-fy)+input[b+k]*fx*(1-fy)+input[c+k]*(1-fx)*fy+input[d+k]*fx*fy;
 }
 ctx.putImageData(after,0,0);return src;
}
export function bodyRegions(points,width,height){
 if(!points||points.length<33)return null;
 const p=i=>pos(points,i,width,height);
 const ls=p(11),rs=p(12),lh=p(23),rh=p(24),nose=p(0);
 const shoulderWidth=Math.max(20,Math.abs(rs.x-ls.x)),hipWidth=Math.max(18,Math.abs(rh.x-lh.x));
 const midShoulder={x:(ls.x+rs.x)/2,y:(ls.y+rs.y)/2},midHip={x:(lh.x+rh.x)/2,y:(lh.y+rh.y)/2};
 const torsoHeight=Math.abs(midHip.y-midShoulder.y);if(torsoHeight<25)return null;
 const leftWaist={x:lerp(ls.x,lh.x,.65),y:lerp(ls.y,lh.y,.65)},rightWaist={x:lerp(rs.x,rh.x,.65),y:lerp(rs.y,rh.y,.65)};
 const head={x:nose.x,y:Math.min(nose.y,midShoulder.y-torsoHeight*.36)};
 return {ls,rs,lh,rh,midShoulder,midHip,leftWaist,rightWaist,shoulderWidth,hipWidth,torsoHeight,head,person:points};
}
export function drawBodyGuides(ctx,regions,viewport){
 if(!regions)return;
 const map=p=>viewport(p.x,p.y);
 const groups=[
  ['#aaf4c4',[regions.leftWaist,regions.rightWaist]],
  ['#f8d080',[regions.ls,regions.rs]],
  ['#adbefa',[regions.head]]
 ];
 ctx.save();ctx.lineWidth=2;
 for(const [color,pts] of groups){
  ctx.strokeStyle=color;ctx.fillStyle=color;for(const p of pts){const a=map(p);ctx.beginPath();ctx.arc(a.x,a.y,5,0,2*Math.PI);ctx.stroke();}
 }ctx.restore();
}
export function renderAutoBody(input,landmarks,amounts,quality='preview'){
 const regions=bodyRegions(landmarks,input.width,input.height);if(!regions)return copy(input);
 let out=copy(input);
 const {midHip,midShoulder,leftWaist,rightWaist,shoulderWidth,hipWidth,torsoHeight}=regions;
 const softness=cap((amounts.natural??70)/100,0,1);
 const factor=.45+(.55*(1-softness));
 const waist=cap(((amounts.waist||0)+.3*(amounts.overall||0))*factor,0,100);
 const arms=cap(((amounts.arms||0)+.2*(amounts.overall||0))*factor,0,100);
 const shoulder=cap(((amounts.shoulders||0)+.25*(amounts.overall||0))*factor,0,100);
 const legs=cap(((amounts.legs||0)+.2*(amounts.overall||0))*factor,0,100);
 const head=cap((amounts.head||0)*factor,0,100);
 // Impact is localized to each near-outline landmark region.
 const pull=cap(shoulderWidth*.13,3,65);
 const cx=midHip.x;
 if(waist>0){
  for(const side of [leftWaist,rightWaist]){
   const sign=side.x<cx?1:-1;
   out=warpToward(out,side,{x:side.x+sign*pull*waist/100,y:side.y},Math.max(26,torsoHeight*.39),waist);
  }
 }
 if(shoulder>0){
  for(const shoulderPt of [regions.ls,regions.rs]){
   const sign=shoulderPt.x<midShoulder.x?1:-1;
   out=warpToward(out,shoulderPt,{x:shoulderPt.x+sign*shoulderWidth*.075*shoulder/100,y:shoulderPt.y},Math.max(24,shoulderWidth*.35),shoulder);
  }
 }
 if(arms>0){
  for(const [a,b] of [[11,13],[13,15],[12,14],[14,16]]){
   const from=pos(landmarks,a,input.width,input.height),to=pos(landmarks,b,input.width,input.height);
   const mid={x:(from.x+to.x)/2,y:(from.y+to.y)/2},toward=mid.x<midShoulder.x?1:-1;
   const limb=Math.max(18,Math.hypot(to.x-from.x,to.y-from.y));
   out=warpToward(out,mid,{x:mid.x+toward*limb*.08*arms/100,y:mid.y},Math.max(17,limb*.48),arms);
  }
 }
 if(legs>0){
  for(const [a,b] of [[23,25],[25,27],[24,26],[26,28]]){
   const from=pos(landmarks,a,input.width,input.height),to=pos(landmarks,b,input.width,input.height);
   const mid={x:(from.x+to.x)/2,y:(from.y+to.y)/2},sgn=mid.x<midHip.x?1:-1,limb=Math.hypot(to.x-from.x,to.y-from.y);
   out=warpToward(out,mid,{x:mid.x+sgn*limb*.045*legs/100,y:mid.y},Math.max(20,limb*.4),legs);
  }
 }
 if(head>0){
  const earL=pos(landmarks,7,input.width,input.height),earR=pos(landmarks,8,input.width,input.height);
  const hc={x:(earL.x+earR.x)/2,y:regions.head.y},rw=Math.max(18,Math.abs(earR.x-earL.x)*.95),rh=Math.max(25,Math.abs(midShoulder.y-hc.y)*1.08);
  out=shrinkRegion(out,hc,rw,rh,head,softness);
 }
 return out;
}
