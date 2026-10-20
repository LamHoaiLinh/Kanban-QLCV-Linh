/* Local brush based shape adjustment by displacement mapping, no model or server. */
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const canvas=(w,h)=>{const c=document.createElement('canvas');c.width=w;c.height=h;return c;};
export function deformAt(source,from,to,radius,power,mode='waist'){
 const w=source.width,h=source.height,r=Math.max(12,radius),dx=(to.x-from.x),dy=(to.y-from.y);
 const output=canvas(w,h);const cc=output.getContext('2d');cc.drawImage(source,0,0);
 const before=source.getContext('2d',{willReadFrequently:true}).getImageData(0,0,w,h);
 const img=cc.getImageData(0,0,w,h),src=before.data,dst=img.data;
 const strength=clamp(Number(power)||0,0,100)/100;
 const distance=Math.hypot(dx,dy);
 if(strength===0||distance<.5)return output;
 // Max displacement is limited to preserve continuity of neighboring details.
 const amount=clamp(distance*strength*1.45,0,r*.72);
 const ux=dx/distance,uy=dy/distance;
 const x0=clamp(Math.floor(Math.min(from.x,to.x)-r),0,w-1),x1=clamp(Math.ceil(Math.max(from.x,to.x)+r),0,w-1);
 const y0=clamp(Math.floor(Math.min(from.y,to.y)-r),0,h-1),y1=clamp(Math.ceil(Math.max(from.y,to.y)+r),0,h-1);
 const stepX=to.x-from.x,stepY=to.y-from.y,len2=stepX*stepX+stepY*stepY;
 for(let y=y0;y<=y1;y++)for(let x=x0;x<=x1;x++){
  const t=clamp(((x-from.x)*stepX+(y-from.y)*stepY)/len2,0,1);
  const cx=from.x+stepX*t,cy=from.y+stepY*t,dist=Math.hypot(x-cx,y-cy);
  if(dist>=r)continue;
  const q=1-(dist/r)**2,falloff=q*q;
  // Option head uses a narrower, softer radius. Manual "eo"/"tay" share intuitive dragging.
  const weight=falloff*amount;
  const sampleX=clamp(x-ux*weight,0,w-1),sampleY=clamp(y-uy*weight,0,h-1);
  const left=Math.floor(sampleX),top=Math.floor(sampleY),right=Math.min(w-1,left+1),bottom=Math.min(h-1,top+1),fx=sampleX-left,fy=sampleY-top;
  const a=(top*w+left)*4,b=(top*w+right)*4,c=(bottom*w+left)*4,d=(bottom*w+right)*4,dest=(y*w+x)*4;
  for(let k=0;k<4;k++)dst[dest+k]=src[a+k]*(1-fx)*(1-fy)+src[b+k]*fx*(1-fy)+src[c+k]*(1-fx)*fy+src[d+k]*fx*fy;
 }
 cc.putImageData(img,0,0);return output;
}
