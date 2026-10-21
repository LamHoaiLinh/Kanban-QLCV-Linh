// Grouped command history; reference snapshots for sliders, pixel snapshots for brush strokes.
export function makePhotoHistory(mobile=false){
 const undos=[],redos=[],maxActions=mobile?12:24;
 const maxBytes=(mobile?100:300)*1024*1024;
 const cost=e=>(e?.imageCopied?e.image.width*e.image.height*4:0)+(e?.maskCopied?e.mask.width*e.mask.height*4:0);
 function trim(){
  while(undos.length>maxActions)undos.shift();
  let usage=undos.reduce((s,e)=>s+cost(e),0);
  while(usage>maxBytes&&undos.length>1)usage-=cost(undos.shift());
 }
 return {
  push(value){undos.push(value);redos.length=0;trim();},
  popUndo(value){if(!undos.length)return null;redos.push(value);return undos.pop();},
  popRedo(value){if(!redos.length)return null;undos.push(value);trim();return redos.pop();},
  cancelLast(){undos.pop();},
  clear(){undos.length=0;redos.length=0;},
  get canUndo(){return undos.length>0;},
  get canRedo(){return redos.length>0;}
 };
}