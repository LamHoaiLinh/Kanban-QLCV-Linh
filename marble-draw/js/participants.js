export function normalizeParticipant(row,index=0){
  const get=(...keys)=>{for(const k of keys){if(row&&row[k]!==undefined&&row[k]!==null)return String(row[k]).trim()}return''};
  const eligibleRaw=get('Đủ điều kiện tham gia','Du dieu kien tham gia','eligible','Đủ điều kiện','Eligible').toLowerCase();
  return{
    rowIndex:index+2,
    participantId:get('Mã người tham dự','Ma nguoi tham du','participantId','Mã','ID')||`P${String(index+1).padStart(4,'0')}`,
    name:get('Họ và tên','Ho va ten','name','Tên','Name'),
    department:get('Phòng ban','Phong ban','department','Bộ phận'),
    eligible:!['không','khong','false','0','no','n'].includes(eligibleRaw),
    note:get('Ghi chú','Ghi chu','note')
  };
}
export function validateParticipants(items){
  const ids=new Map(),errors=[];
  items.forEach((p,index)=>{
    p._errors=[];
    const id=String(p.participantId||'').trim();const name=String(p.name||'').trim();
    if(!id)p._errors.push('Thiếu mã người tham dự');
    if(!name)p._errors.push('Thiếu họ và tên');
    if(id){const count=ids.get(id.toLowerCase())||0;ids.set(id.toLowerCase(),count+1)}
    if(p._errors.length)errors.push({index,errors:[...p._errors]});
  });
  items.forEach((p,index)=>{const id=String(p.participantId||'').trim().toLowerCase();if(id&&ids.get(id)>1){p._errors.push('Mã người tham dự bị trùng');errors.push({index,errors:['Mã người tham dự bị trùng']})}});
  const eligible=items.filter(p=>p.eligible&&p._errors.length===0);
  return{valid:errors.length===0&&eligible.length>0,errors,eligibleCount:eligible.length,total:items.length};
}
export function parsePastedTable(text){
  const lines=String(text||'').split(/\r?\n/).filter(line=>line.trim());
  return lines.map((line,index)=>{
    const cells=line.includes('\t')?line.split('\t'):line.split(/[,;]/);
    return normalizeParticipant({
      'Mã người tham dự':cells[0]||'',
      'Họ và tên':cells[1]||cells[0]||'',
      'Phòng ban':cells[2]||'',
      'Đủ điều kiện tham gia':cells[3]||'Có',
      'Ghi chú':cells[4]||''
    },index);
  });
}
export function ballValues(count=10){
  const n=Math.max(2,Math.min(10,Number(count)||10));
  return n===10?[0,1,2,3,4,5,6,7,8,9]:Array.from({length:n},(_,i)=>i+1);
}
export function digitCountFor(number,marbleCount=10){
  const total=Math.max(1,Number(number)||1);const base=Math.max(2,Math.min(10,Number(marbleCount)||10));
  return Math.max(1,Math.ceil(Math.log(total)/Math.log(base)));
}
export function encodeParticipantCode(index,width,marbleCount=10){
  const digits=ballValues(marbleCount);const base=digits.length;let value=Math.max(0,index);const out=[];
  for(let i=0;i<width;i++){out.unshift(String(digits[value%base]));value=Math.floor(value/base)}
  return out.join('');
}
export function digitLabels(count){
  const vi=['Hàng đơn vị','Hàng chục','Hàng trăm','Hàng nghìn','Hàng chục nghìn','Hàng trăm nghìn','Hàng triệu','Hàng chục triệu'];
  return Array.from({length:count},(_,i)=>vi[count-1-i]||`Lượt ${i+1}`);
}
export function eligibleParticipants(event){return(event.participants||[]).filter(p=>p.eligible&&!p._errors?.length&&!event.excludedParticipantIds?.includes(p.participantId));}
