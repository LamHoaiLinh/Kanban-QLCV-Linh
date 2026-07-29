import{sha256}from'./crypto-utils.js';
import{eligibleParticipants,digitCountFor,encodeParticipantCode}from'./participants.js';

export async function lockParticipantList(event){
  const eligible=eligibleParticipants(event);
  if(!eligible.length)throw new Error('Không có người tham dự hợp lệ.');
  const canonical=eligible.map(p=>({participantId:p.participantId,name:p.name,department:p.department,eligible:true}));
  event.participantListHash=await sha256(canonical);
  event.trackHash=await sha256({trackVersion:event.trackVersion||'marble-wide-track-v4',modules:['wide-slope','wide-gates','sparse-obstacles','finish-sensor']});
  event.physicsConfigHash=await sha256({engine:event.physicsVersion||'rapier-0.19.3',gravity:[0,-12,0],fixedTimeStep:1/180,marbleRadius:.34});
  event.baseSeed=randomSeed();
  event.baseSeedCommitment=await sha256(`${event.baseSeed}|${event.contributorSeed||''}`);
  event.mapping=[];event.mappingHash='';event.status='list_locked';
  event.marbleCount=Math.max(2,Math.min(10,Number(event.marbleCount)||10));
  event.digitCount=event.digitCountManual||digitCountFor(eligible.length,event.marbleCount);
  event.rounds=[];event.currentPrefix='';event.winningCode='';
  return event;
}
export async function finalizeShuffle(event){
  if(!event.baseSeed||!event.participantListHash)throw new Error('Danh sách chưa sẵn sàng.');
  const participants=eligibleParticipants(event);
  const width=event.digitCount||digitCountFor(participants.length,event.marbleCount||10);
  event.mapping=participants.map((p,index)=>({code:encodeParticipantCode(index,width,event.marbleCount||10),participantId:p.participantId,name:p.name,department:p.department}));
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
