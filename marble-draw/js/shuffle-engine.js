import{sha256,seededShuffle}from'./crypto-utils.js';
import{eligibleParticipants,digitCountFor}from'./participants.js';

export async function lockParticipantList(event){
  const eligible=eligibleParticipants(event);
  if(!eligible.length)throw new Error('Không có người tham dự hợp lệ để khóa danh sách.');
  const canonical=eligible.map(p=>({participantId:p.participantId,name:p.name,department:p.department,title:p.title,eligible:true}));
  event.participantListHash=await sha256(canonical);
  event.trackHash=await sha256({trackVersion:event.trackVersion||'marble-simple-track-v2',modules:['overlap-slopes','side-walls','pegboard','dividers','rotor','finish-sensor']});
  event.physicsConfigHash=await sha256({engine:event.physicsVersion||'rapier-0.19.3',gravity:[0,-12,0],fixedTimeStep:1/180,marbleRadius:.34,friction:.22,restitution:.18,density:1.15});
  event.baseSeed=randomSeed();
  event.baseSeedCommitment=await sha256(`${event.baseSeed}|${event.contributorSeed||''}`);
  event.shuffleCount=0;event.mapping=[];event.mappingHash='';event.status='list_locked';
  event.digitCount=event.digitCountManual||digitCountFor(eligible.length);
  event.rounds=[];event.currentPrefix='';event.winningCode='';
  return event;
}
export async function finalizeShuffle(event){
  if(!event.baseSeed||!event.participantListHash)throw new Error('Danh sách chưa được khóa.');
  const participants=eligibleParticipants(event);
  const seed=`${event.baseSeed}|${event.shuffleCount}|${event.participantListHash}|${event.contributorSeed||''}`;
  const shuffled=await seededShuffle(participants,seed);
  const width=event.digitCount||digitCountFor(shuffled.length);
  event.mapping=shuffled.map((p,index)=>({code:String(index).padStart(width,'0'),participantId:p.participantId,name:p.name,department:p.department,title:p.title}));
  event.mappingHash=await sha256(event.mapping);
  event.status='shuffled';event.mappingLockedAt=new Date().toISOString();
  return event;
}
export async function verifyMapping(event){
  if(!event.mapping?.length)return false;
  const clone={...event,mapping:[]};await finalizeShuffle(clone);
  return clone.mappingHash===event.mappingHash;
}
function randomSeed(){const data=new Uint8Array(32);crypto.getRandomValues(data);return[...data].map(v=>v.toString(16).padStart(2,'0')).join('');}
