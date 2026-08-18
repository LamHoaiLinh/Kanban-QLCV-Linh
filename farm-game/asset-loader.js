const MANIFEST_URL='./assets/manifest.json?v=1.0.0';
const imageCache=new Map();
let manifest=null;

function imageUrl(path){return new URL(`${manifest.basePath}${path}`,document.baseURI).href}
function loadImage(id,path){return new Promise(resolve=>{const image=new Image();image.decoding='async';image.onload=()=>{imageCache.set(id,image);resolve()};image.onerror=()=>{console.warn(`Farm asset fallback: ${id}`);resolve()};image.src=imageUrl(path)})}
function validate(data){return data?.schemaVersion==='1.0.0'&&data?.manifestId==='farm-assets-v1'&&data?.assets?.crops&&data?.assets?.materials&&data?.assets?.buildings&&data?.assets?.npcs}

export async function initFarmAssets(){
  try{
    const response=await fetch(MANIFEST_URL,{cache:'no-cache'});
    if(!response.ok)throw new Error(`HTTP ${response.status}`);
    const data=await response.json();
    if(!validate(data))throw new Error('Manifest không đúng schema Farm v1');
    manifest=data;
    const jobs=[];
    for(const [cropId,item] of Object.entries(data.assets.crops))for(const stage of item.readyVariants||[])if(item.files?.[stage])jobs.push(loadImage(`crop.${cropId}.${stage}`,item.files[stage]));
    for(const [group,prefix] of [['materials','material'],['buildings','building'],['npcs','npc']])for(const [id,item] of Object.entries(data.assets[group]))if(item.ready===true)jobs.push(loadImage(`${prefix}.${id}`,item.file));
    await Promise.all(jobs);
  }catch(error){manifest=null;imageCache.clear();console.warn('Farm asset manifest không tải được; dùng giao diện dự phòng.',error)}
}

export function getFarmAsset(id){return imageCache.get(id)||null}
export function farmAssetMarkup(id,className='farm-asset-icon'){
  const image=getFarmAsset(id);
  return image?`<img class="${className}" src="${image.src}" alt="" aria-hidden="true">`:'';
}
export function drawFarmAsset(ctx,id,{x,y,width,height,alpha=1}={}){
  const image=getFarmAsset(id);
  if(!image)return false;
  ctx.save();ctx.globalAlpha=alpha;ctx.drawImage(image,x-width/2,y-height,width,height);ctx.restore();return true;
}
