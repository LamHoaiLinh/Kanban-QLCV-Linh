/* Browser-local masked edits, tonal rescue variants and copyable color recipes.
   These functions operate on pixels and never request a server. */
import {applyAdjustments,DEFAULT_EDITS} from './photo-filters.js?v=1.0.0';
const clip=(n,min,max)=>Math.max(min,Math.min(max,n));
export const duplicateCanvas=(src)=>{const out=document.createElement('canvas');out.width=src.width;out.height=src.height;out.getContext('2d').drawImage(src,0,0);return out;};
export const createMask=(w,h)=>{const out=document.createElement('canvas');out.width=w;out.height=h;return out;};
export function hasPaint(mask){
 if(!mask)return false;const d=mask.getContext('2d',{willReadFrequently:true}).getImageData(0,0,mask.width,mask.height).data;
 for(let i=3;i<d.length;i+=4)if(d[i]>0)return true;return false;
}
export function stamp(mask,from,to,radius,strength=1,erase=false){
 const ctx=mask.getContext('2d'),dist=Math.hypot(to.x-from.x,to.y-from.y),count=Math.max(1,Math.ceil(dist/Math.max(3,radius*.15)));
 ctx.save();ctx.globalCompositeOperation=erase?'destination-out':'source-over';ctx.globalAlpha=clip(strength,0,1);
 for(let i=0;i<=count;i++){
  const t=i/count,x=from.x+(to.x-from.x)*t,y=from.y+(to.y-from.y)*t;
  const g=ctx.createRadialGradient(x,y,0,x,y,radius);g.addColorStop(0,'rgba(255,255,255,1)');g.addColorStop(.55,'rgba(255,255,255,.85)');g.addColorStop(1,'rgba(255,255,255,0)');
  ctx.fillStyle=g;ctx.fillRect(x-radius,y-radius,radius*2,radius*2);
 }
 ctx.restore();
}
export function applyMasked(source,settings,mask,masked){
 const edited=applyAdjustments(source,settings);
 if(!masked||!mask||!hasPaint(mask))return masked?duplicateCanvas(source):edited;
 const result=duplicateCanvas(source),ctx=result.getContext('2d');
 ctx.save();ctx.globalCompositeOperation='source-over';
 const content=document.createElement('canvas');content.width=source.width;content.height=source.height;
 const c=content.getContext('2d');c.drawImage(edited,0,0);c.globalCompositeOperation='destination-in';c.drawImage(mask,0,0);c.globalCompositeOperation='source-over';
 ctx.drawImage(content,0,0);ctx.restore();return result;
}
export function recipeFrom(settings){
 const copy=structuredClone(settings||DEFAULT_EDITS());
 // Exclude sharpness/denoise, which should not transfer automatically between different photos.
 copy.sharpness=0;copy.noise=0;copy.clarity=0;copy.texture=0;
 return copy;
}
export function variantsFrom(source){
 const presets=[
  {id:'natural',title:'Tự nhiên',summary:'Tăng sáng và màu nhẹ',values:{exposure:10,shadows:10,vibrance:8,sharpness:8,noise:12}},
  {id:'balanced',title:'Cân bằng',summary:'Sáng, trong và rõ hơn',values:{exposure:20,shadows:18,contrast:7,vibrance:12,sharpness:22,noise:24}},
  {id:'clear',title:'Rõ nét',summary:'Ưu tiên ảnh hơi mềm và nhiều hạt',values:{exposure:14,contrast:11,shadows:12,clarity:22,texture:12,sharpness:35,noise:35}}
 ];
 return presets.map(p=>{
  const settings=Object.assign(DEFAULT_EDITS(),p.values);
  const output=applyAdjustments(source,settings);
  return {...p,settings,canvas:output};
 });
}
