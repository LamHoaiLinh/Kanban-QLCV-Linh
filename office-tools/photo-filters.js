/* Pixel-based tone, HSL and detail controls. No generative image operations. */
const clamp=(v,a=0,b=255)=>Math.max(a,Math.min(b,v));
const cloneCanvas=(source)=>{const c=document.createElement('canvas');c.width=source.width;c.height=source.height;c.getContext('2d').drawImage(source,0,0);return c;};
const CHANNELS=['red','orange','yellow','green','aqua','blue','purple','magenta'];
const CENTERS=[0,30,60,120,180,225,275,320];
export const DEFAULT_EDITS=()=>({
 exposure:0,contrast:0,highlights:0,shadows:0,whites:0,blacks:0,
 temperature:0,tint:0,vibrance:0,saturation:0,
 sharpness:0,noise:0,clarity:0,texture:0,
 hsl:Object.fromEntries(CHANNELS.map(k=>[k,{h:0,s:0,l:0}]))
});
function rgbToHsl(r,g,b){
 r/=255;g/=255;b/=255;
 const max=Math.max(r,g,b),min=Math.min(r,g,b),delta=max-min,l=(max+min)/2;
 let h=0,s=0;
 if(delta>1e-7){
   s=delta/(1-Math.abs(2*l-1));
   switch(max){case r:h=((g-b)/delta)%6;break;case g:h=(b-r)/delta+2;break;default:h=(r-g)/delta+4;}
   h=((h*60)%360+360)%360;
 }
 return [h,s,l];
}
function hslToRgb(h,s,l){
 h=((h%360)+360)%360;s=clamp(s,0,1);l=clamp(l,0,1);
 const c=(1-Math.abs(2*l-1))*s,x=c*(1-Math.abs((h/60)%2-1)),m=l-c/2;
 let r=0,g=0,b=0;
 if(h<60){r=c;g=x;}else if(h<120){r=x;g=c;}else if(h<180){g=c;b=x;}else if(h<240){g=x;b=c;}else if(h<300){r=x;b=c;}else{r=c;b=x;}
 return [(r+m)*255,(g+m)*255,(b+m)*255];
}
function blurPixels(source,radius){
 const tmp=cloneCanvas(source);const c=tmp.getContext('2d');c.clearRect(0,0,tmp.width,tmp.height);
 c.filter='blur('+radius+'px)';c.drawImage(source,0,0);return c.getImageData(0,0,tmp.width,tmp.height).data;
}
export function hasAdjustments(s){
 if(!s)return false;
 for(const [key,val] of Object.entries(s))if(key!=='hsl'&&Number(val)!==0)return true;
 return Object.values(s.hsl||{}).some(v=>v.h||v.s||v.l);
}
export function applyAdjustments(source,s){
 const result=cloneCanvas(source);if(!hasAdjustments(s))return result;
 const ctx=result.getContext('2d',{willReadFrequently:true}),image=ctx.getImageData(0,0,result.width,result.height),data=image.data;
 const doDetails=!!(s.sharpness||s.noise||s.clarity||s.texture);
 const blurSmall=doDetails?blurPixels(source,1.1):null;
 const blurLarge=(s.clarity||s.texture)?blurPixels(source,3.2):null;
 const hslActive=Object.values(s.hsl||{}).some(x=>x.h||x.s||x.l);
 const exposure=Math.pow(2,(s.exposure||0)/85),contrast=1+(s.contrast||0)/160;
 const warmth=(s.temperature||0)*.33,tint=(s.tint||0)*.23;
 const highlights=(s.highlights||0)/100,shadows=(s.shadows||0)/100,whites=(s.whites||0)/100,blacks=(s.blacks||0)/100;
 const vibrance=(s.vibrance||0)/100,saturation=(s.saturation||0)/100;
 const sharp=(s.sharpness||0)/100,noise=clamp((s.noise||0)/100,0,1),clarity=(s.clarity||0)/100,texture=(s.texture||0)/100;
 for(let i=0;i<data.length;i+=4){
  if(data[i+3]===0)continue;
  let r=data[i]*exposure,g=data[i+1]*exposure,b=data[i+2]*exposure;
  const brightness=(r+g+b)/3;
  const localShadow=clamp((165-brightness)/165,0,1),localHigh=clamp((brightness-112)/143,0,1);
  const shadowLift=shadows*55*localShadow,highlightLift=highlights*50*localHigh;
  const whiteLift=whites*40*clamp((brightness-185)/70,0,1),blackLift=blacks*37*clamp((75-brightness)/75,0,1);
  const lift=shadowLift+highlightLift+whiteLift+blackLift;
  r=(r-128)*contrast+128+lift+warmth+tint*.55;
  g=(g-128)*contrast+128+lift+tint*.12;
  b=(b-128)*contrast+128+lift-warmth-tint*.55;
  let lum=.299*r+.587*g+.114*b;
  const colored=Math.max(r,g,b)-Math.min(r,g,b),magnitude=clamp(colored/105,0,1);
  const satFactor=clamp(1+saturation+vibrance*(1-magnitude)*.74,0,2.4);
  r=lum+(r-lum)*satFactor;g=lum+(g-lum)*satFactor;b=lum+(b-lum)*satFactor;
  r=clamp(r);g=clamp(g);b=clamp(b);
  if(hslActive){
   let [h,ss,ll]=rgbToHsl(r,g,b),dh=0,ds=0,dl=0,den=0;
   for(let k=0;k<CHANNELS.length;k++){
    const v=s.hsl[CHANNELS[k]];if(!v||(v.h===0&&v.s===0&&v.l===0))continue;
    const dist=Math.abs(h-CENTERS[k]),d=Math.min(dist,360-dist);
    const halfWidth=k===3?51:42;
    const weight=clamp((halfWidth-d)/halfWidth,0,1)*Math.min(1,ss*5);
    dh+=(v.h||0)*weight;ds+=(v.s||0)*weight;dl+=(v.l||0)*weight;den+=weight;
   }
   if(den>0){[r,g,b]=hslToRgb(h+dh*.42,ss+ds/100,ll+dl/180);}
  }
  if(doDetails){
   const dr=(data[i]-blurSmall[i]),dg=data[i+1]-blurSmall[i+1],db=data[i+2]-blurSmall[i+2];
   const signal=Math.abs(.299*dr+.587*dg+.114*db);
   const edgeMask=clamp((signal-3)/14,0,1);
   const blend=clamp(noise*(1-edgeMask)*.68,0,.7);
   r=r*(1-blend)+blurSmall[i]*blend;g=g*(1-blend)+blurSmall[i+1]*blend;b=b*(1-blend)+blurSmall[i+2]*blend;
   const detailAmount=sharp*clamp((signal-2.0)/6,0,1)*.85+texture*.36;
   const longAmount=clarity*.4;
   const br=blurLarge?blurLarge[i]:0,bg=blurLarge?blurLarge[i+1]:0,bb=blurLarge?blurLarge[i+2]:0;
   r+=clamp(dr*detailAmount+(data[i]-br)*longAmount,-26,26);
   g+=clamp(dg*detailAmount+(data[i+1]-bg)*longAmount,-26,26);
   b+=clamp(db*detailAmount+(data[i+2]-bb)*longAmount,-26,26);
  }
  data[i]=clamp(r);data[i+1]=clamp(g);data[i+2]=clamp(b);
 }
 ctx.putImageData(image,0,0);
 return result;
}
