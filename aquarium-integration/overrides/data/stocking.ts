// Design stock and performance stock are deliberately separate; saved tanks are never edited here.
import type { TankConfig } from '../types';
import { speciesById } from './species';
import { tankDims } from './tanks';
export const ABSOLUTE_FISH_CAP = 100;
export function sizeFishCap(gallons:number):number {
  const knots=[[5,8],[20,28],[40,48],[75,68],[120,88],[180,100]];
  const g=Math.max(5,Math.min(180,gallons));
  for(let i=1;i<knots.length;i++)if(g<=knots[i][0]){
    const [x0,y0]=knots[i-1],[x1,y1]=knots[i];
    return Math.floor(y0+(y1-y0)*(g-x0)/(x1-x0));
  }
  return 100;
}
export function effectiveFishCap(config:TankConfig,performanceCap=100):number {
  const entries=Object.entries(config.fish).filter(([,n])=>n>0);
  let count=0,cost=0;
  for(const [id,n] of entries){const sp=speciesById.get(id);if(sp){count+=n;cost+=n*sp.bioload;}}
  const bio=count?Math.floor(tankDims(config.gallons).capacity/Math.max(.1,cost/count)):100;
  return Math.max(0,Math.min(100,sizeFishCap(config.gallons),bio,performanceCap));
}
// Retain named fish first, then complete social groups, then allocate spare capacity fairly.
// Original keys and names remain in the snapshot, including names outside a trimmed live view.
export function normalizeStock(config:TankConfig,performanceCap=100):TankConfig {
  const cap=Math.min(sizeFishCap(config.gallons),performanceCap,100);
  const budget=tankDims(config.gallons).capacity;
  const entries=Object.entries(config.fish).map(([id,n])=>({id,n:Math.max(0,Math.floor(Number.isFinite(n)?n:0)),sp:speciesById.get(id)}))
    .filter(e=>e.sp&&e.n>0&&e.sp.water===config.water&&e.sp.minGallons<=config.gallons);
  entries.sort((a,b)=>{
    const named=(id:string)=>Object.entries(config.fishNames??{}).some(([k,v])=>k.startsWith(id+':')&&!!v);
    return Number(named(b.id))-Number(named(a.id));
  });
  const fish:Record<string,number>={};let total=0,load=0;
  const limits=new Map(entries.map(e=>[e.id,Math.min(e.n,e.sp!.maxPerTank??100)]));
  for(const e of entries){
    const minimum=Math.min(e.n,Math.max(1,e.sp!.minGroup));
    if(minimum>limits.get(e.id)!||total+minimum>cap||load+minimum*e.sp!.bioload>budget)continue;
    fish[e.id]=minimum;total+=minimum;load+=minimum*e.sp!.bioload;
  }
  let progress=true;
  while(progress&&total<cap){progress=false;for(const e of entries){
    if(!(e.id in fish)||fish[e.id]>=limits.get(e.id)!||total>=cap||load+e.sp!.bioload>budget)continue;
    fish[e.id]++;total++;load+=e.sp!.bioload;progress=true;
  }}
  // Compact surviving named individuals into the live index range after a trim.
  // The resize snapshot still holds the original keys for an exact undo.
  const fishNames={...config.fishNames};
  for(const e of entries){
    const retained=fish[e.id]??0;
    if(retained>=e.n)continue;
    const displaced=Object.entries(fishNames).filter(([key,name])=>
      !!name&&key.startsWith(e.id+':')&&Number(key.slice(e.id.length+1))>=retained);
    const available=Array.from({length:retained},(_,i)=>e.id+':'+i).filter(key=>!fishNames[key]);
    for(const [oldKey,name] of displaced){
      const newKey=available.shift();if(!newKey)break;
      fishNames[newKey]=name;delete fishNames[oldKey];
    }
  }
  return {...config,fish,fishNames};
}


// Preserve the *intent* of a tank while resizing: use the original (pre-shrink)
// population as the source so 180 -> 40 -> 5 -> 180 cannot progressively
// erase species. Respect minimum tank sizes and minimum schooling groups.
// When all original species are too large, substitute a suitable nano animal
// instead of leaving a previously inhabited tank empty.
export function resizeStock(source:TankConfig,gallons:number):TankConfig {
  const target={...source,gallons};
  const originalCount=Object.values(source.fish).reduce((sum,n)=>sum+Math.max(0,n||0),0);
  if(!originalCount)return normalizeStock(target); // an intentionally empty tank stays empty

  const numberRatio=Math.min(1,sizeFishCap(gallons)/Math.max(1,sizeFishCap(source.gallons)));
  const bioRatio=Math.min(1,tankDims(gallons).capacity/Math.max(1,tankDims(source.gallons).capacity));
  const ratio=Math.min(numberRatio,bioRatio);
  const proposed:Record<string,number>={};
  for(const [id,rawCount] of Object.entries(source.fish)){
    const sp=speciesById.get(id),count=Math.max(0,Math.floor(rawCount));
    if(!sp||!count||sp.water!==source.water||sp.minGallons>gallons)continue;
    // Social groups should survive intact if they fit; individual animals may
    // scale down to one. Never manufacture additional members beyond original.
    const targetCount=Math.max(Math.min(count,sp.minGroup),Math.round(count*ratio));
    proposed[id]=Math.min(count,targetCount);
  }
  const fitting=normalizeStock({...target,fish:proposed});
  if(Object.keys(fitting.fish).length)return fitting;

  const priority=source.water==='freshwater'
    ? ['endler-guppy','cherry-shrimp','ember-tetra','guppy','betta','nerite-snail']
    : ['cerith-snail','turbo-snail'];
  const cap=sizeFishCap(gallons),budget=tankDims(gallons).capacity;
  for(const id of priority){
    const sp=speciesById.get(id);
    if(!sp||sp.water!==source.water||sp.minGallons>gallons)continue;
    const amount=Math.min(sp.maxPerTank??100,Math.max(1,sp.minGroup),cap);
    if(amount<sp.minGroup||amount*sp.bioload>budget)continue;
    const replacement=normalizeStock({...target,fish:{[id]:amount},fishNames:{}});
    if(Object.keys(replacement.fish).length)return replacement;
  }
  // Do not invent physically impossible stock when no suitable nano species exists.
  return fitting;
}
