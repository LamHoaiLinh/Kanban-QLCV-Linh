export function randomHex(bytes=32){
  const data=new Uint8Array(bytes);crypto.getRandomValues(data);return [...data].map(v=>v.toString(16).padStart(2,'0')).join('');
}
export async function sha256(value){
  const bytes=value instanceof Uint8Array?value:new TextEncoder().encode(typeof value==='string'?value:stableStringify(value));
  const digest=await crypto.subtle.digest('SHA-256',bytes);
  return [...new Uint8Array(digest)].map(v=>v.toString(16).padStart(2,'0')).join('');
}
export function stableStringify(value){
  if(value===null||typeof value!=='object')return JSON.stringify(value);
  if(Array.isArray(value))return`[${value.map(stableStringify).join(',')}]`;
  return`{${Object.keys(value).sort().map(k=>`${JSON.stringify(k)}:${stableStringify(value[k])}`).join(',')}}`;
}
export async function seededRng(seedText){
  const hex=await sha256(seedText);const seed=[0,8,16,24].map(i=>parseInt(hex.slice(i,i+8),16)>>>0);
  let [a,b,c,d]=seed;
  return()=>{
    const t=(b<<9)>>>0;let r=(a*5)>>>0;r=((r<<7)|(r>>>25))>>>0;r=(r*9)>>>0;
    c^=a;d^=b;b^=c;a^=d;c^=t;d=((d<<11)|(d>>>21))>>>0;
    return(r>>>0)/4294967296;
  };
}
export async function seededShuffle(items,seedText){
  const out=[...items],rand=await seededRng(seedText);
  for(let i=out.length-1;i>0;i--){const j=Math.floor(rand()*(i+1));[out[i],out[j]]=[out[j],out[i]];}
  return out;
}
export async function deriveRoundSeed(event,roundIndex,attempt=0){
  return sha256(`${event.baseSeed}|${event.participantListHash}|${event.mappingHash||''}|${event.id}|${roundIndex}|${attempt}`);
}
