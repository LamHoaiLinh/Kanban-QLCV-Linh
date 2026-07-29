import {listEvents,saveEvent,deleteEvent,clearAllEvents,loadSettings,saveSettings} from './storage.js';
import {deriveRoundSeed,seededShuffle} from './crypto-utils.js';
import {normalizeParticipant,validateParticipants,parsePastedTable,digitCountFor,digitLabels,eligibleParticipants,ballValues} from './participants.js';
import {lockParticipantList,finalizeShuffle} from './shuffle-engine.js';

const XLSX_URL='https://cdn.sheetjs.com/xlsx-0.20.3/package/dist/xlsx.full.min.js';
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const refs={
  main:$('#mainView'),raceStage:$('#raceStage'),canvas:$('#raceCanvas'),digitSlots:$('#digitSlots'),
  raceRoundLabel:$('#raceRoundLabel'),raceCandidateInfo:$('#raceCandidateInfo'),raceCountdown:$('#raceCountdown'),
  raceWinner:$('#raceWinner'),raceRanking:$('#raceRanking'),raceStatus:$('#raceStatus'),
  startDigitBtn:$('#startDigitBtn'),resetSequenceBtn:$('#resetSequenceBtn'),toast:$('#toast')
};
let events=[],current=null,settings=loadSettings(),raceEngine=null,RaceEngineClass=null;
let toastTimer=null,shuffleTimer=null,raceMode='official',raceAttempt=0,autoRoundTimer=null;

init().catch(showError);

async function init(){
  bindGlobal();
  events=await listEvents();
  if(!events.length){
    current=createEvent('Sự kiện mẫu');
    current.participants=sampleParticipants(30);
    await saveEvent(current);
    events=[current];
  }
  current=events.find(e=>e.id===settings.lastEventId)||events[0];
  migrateEvent(current);
  settings.lastEventId=current.id;saveSettings(settings);
  render();
}

function migrateEvent(event){
  event.marbleCount=Math.max(2,Math.min(10,Number(event.marbleCount)||10));
  event.gameVersion='1.2.0';
  event.trackVersion='marble-wide-track-v3';
  event.participants=(event.participants||[]).map((p,i)=>normalizeParticipant(p,i));
}

function bindGlobal(){
  $('#closeDrawBtn').onclick=closeToKanban;
  $('#exitRaceBtn').onclick=closeRaceStage;
  $('#settingsBtn').onclick=()=>{$('#qualitySelect').value=settings.quality;$('#volumeInput').value=settings.volume;$('#settingsDialog').showModal()};
  $('#qualitySelect').onchange=e=>{settings.quality=e.target.value;saveSettings(settings)};
  $('#volumeInput').oninput=e=>{settings.volume=+e.target.value;saveSettings(settings);if(raceEngine)raceEngine.volume=settings.volume};
  $('#soundBtn').onclick=toggleSound;
  $('#raceSoundBtn').onclick=toggleSound;
  $('#fullscreenBtn').onclick=toggleFullscreen;
  $('#deleteDrawDataBtn').onclick=deleteAllDrawData;
  refs.startDigitBtn.hidden=true;
  refs.resetSequenceBtn.hidden=true;
  window.addEventListener('keydown',e=>{if(e.key==='Escape'&&!refs.raceStage.hidden)closeRaceStage()});
}

function createEvent(name='Sự kiện mới'){
  const now=new Date().toISOString();
  return{
    id:`event_${crypto.randomUUID?.()||Date.now()}`,name,createdAt:now,updatedAt:now,status:'draft',
    participants:[],marbleCount:10,digitCount:1,shuffleCount:0,mapping:[],rounds:[],attempts:[],results:[],
    excludedParticipantIds:[],allowRepeatWinner:false,prizeName:'Giải may mắn',prizeDepartments:[],
    trackVersion:'marble-wide-track-v3',physicsVersion:'rapier-0.19.3',gameVersion:'1.2.0'
  };
}

function sampleParticipants(count){
  return Array.from({length:count},(_,i)=>normalizeParticipant({
    'Mã người tham dự':`NV${String(i+1).padStart(3,'0')}`,
    'Họ và tên':`Người tham dự ${i+1}`,
    'Phòng ban':`Phòng ${(i%5)+1}`,
    'Đủ điều kiện tham gia':'Có'
  },i));
}

function currentDigitCount(){
  return digitCountFor(Math.max(1,eligibleParticipants(current).length),current.marbleCount||10);
}

function ballRangeText(count){
  return count===10?'0–9':`1–${count}`;
}

function render(){
  if(!current){refs.main.innerHTML='<div class="md-card">Chưa có sự kiện.</div>';return}
  migrateEvent(current);syncSoundButtons();
  const validation=validateParticipants(current.participants||[]);
  const eligible=eligibleParticipants(current).length;
  const count=currentDigitCount();
  const marbleCount=current.marbleCount||10;
  refs.main.innerHTML=`
  <div class="md-grid md-dashboard simple-home">
    <section class="md-card">
      <div class="view-head compact">
        <div><div class="md-eyebrow">MARBLE DRAW</div><h2>Bốc thăm đường đua</h2></div>
        <div class="view-actions"><button id="newEventBtn" class="md-secondary-btn">＋ Sự kiện mới</button><button id="deleteEventBtn" class="md-danger-btn">Xóa sự kiện</button></div>
      </div>
      <div class="md-form-grid four-cols">
        <label class="md-field"><span>Sự kiện</span><select id="eventSelect">${events.map(e=>`<option value="${escAttr(e.id)}" ${e.id===current.id?'selected':''}>${esc(e.name)}</option>`).join('')}</select></label>
        <label class="md-field"><span>Tên sự kiện</span><input id="eventName" value="${escAttr(current.name)}"></label>
        <label class="md-field"><span>Tên giải</span><input id="prizeName" value="${escAttr(current.prizeName||'Giải may mắn')}"></label>
        <label class="md-field"><span>Số bi mỗi lượt</span><select id="marbleCount">${Array.from({length:9},(_,i)=>i+2).map(n=>`<option value="${n}" ${n===marbleCount?'selected':''}>${n} bi (${ballRangeText(n)})</option>`).join('')}</select></label>
      </div>
      <div class="md-toolbar compact-toolbar">
        <label class="md-field grow"><span>Phòng ban được tham gia</span><input id="prizeDepartments" value="${escAttr((current.prizeDepartments||[]).join(', '))}" placeholder="Để trống nếu tất cả đều được tham gia"></label>
        <label class="check-label"><input id="allowRepeat" type="checkbox" ${current.allowRepeatWinner?'checked':''}> Cho phép trúng nhiều lần</label>
        <button id="saveOverviewBtn" class="md-primary-btn">Lưu</button>
      </div>
      <div class="md-toolbar"><span class="status-pill">${eligible} người hợp lệ</span><span class="status-pill">${marbleCount} bi/lượt</span><span class="status-pill">${count} lượt để ra mã</span><span class="status-pill">Đã xáo ${current.shuffleCount||0} lần</span></div>
    </section>

    <section class="md-card">
      <div class="view-head compact"><div><h3>Danh sách người tham dự</h3></div><div class="view-actions"><a class="md-secondary-btn" href="samples/Danh_sach_nguoi_tham_du_mau.xlsx" download>Tải Excel mẫu</a><button id="validateBtn" class="md-secondary-btn">Kiểm tra</button></div></div>
      <div class="md-grid input-grid">
        <label class="dropzone" id="participantDrop"><strong>Chọn hoặc kéo thả Excel / CSV</strong><span>File chỉ được đọc trên thiết bị của bạn.</span><input id="participantFile" type="file" accept=".xlsx,.xls,.xlsm,.csv" hidden></label>
        <div class="paste-box"><textarea id="pasteParticipants" placeholder="Dán: Mã[TAB]Họ tên[TAB]Phòng ban\nNV001[TAB]Nguyễn Văn A[TAB]Kế toán"></textarea><div class="md-toolbar"><button id="appendPasteBtn" class="md-secondary-btn">Thêm dữ liệu</button><button id="addTenRowsBtn" class="md-secondary-btn">＋ 10 dòng</button><button id="clearParticipantsBtn" class="md-danger-btn">Xóa danh sách</button></div></div>
      </div>
      <div class="md-toolbar"><span class="status-pill ${validation.valid?'':'warn'}">${validation.valid?`Hợp lệ: ${validation.eligibleCount}/${validation.total}`:`Có ${validation.errors.length} lỗi`}</span><input id="participantSearch" placeholder="Tìm mã, tên, phòng ban" class="search-input"></div>
      <div id="participantTableHost"></div>
    </section>

    <section class="md-card half shuffle-card">
      <div class="view-head compact"><div><h3>Xáo danh sách</h3></div><div class="view-actions"><button id="shuffleBtn" class="md-primary-btn">Xáo danh sách</button></div></div>
      <div id="shuffleStage" class="shuffle-stage"><div id="shuffleCloud" class="shuffle-cloud">${shuffleNameHtml()}</div></div>
    </section>

    <section class="md-card half start-card">
      <div class="view-head compact"><div><h3>Bắt đầu</h3><p>${marbleCount} bi mang số ${ballRangeText(marbleCount)}; quay ${digitLabels(count).join(' → ')}.</p></div></div>
      <div class="start-actions"><button id="demoRaceBtn" class="md-secondary-btn large-btn">Xem thử</button><button id="officialRaceBtn" class="md-primary-btn large-btn">Bắt đầu đua</button></div>
      <div class="result-list mini-results">${renderResultsList()}</div>
      <div class="md-toolbar"><button id="exportResultsBtn" class="md-secondary-btn" ${current.results?.length?'':'disabled'}>Xuất Excel</button><button id="printResultsBtn" class="md-secondary-btn" ${current.results?.length?'':'disabled'}>In kết quả</button></div>
    </section>
  </div>`;
  bindMain();renderParticipantTable('');
}

function bindMain(){
  $('#eventSelect').onchange=async e=>{current=events.find(x=>x.id===e.target.value)||current;migrateEvent(current);settings.lastEventId=current.id;saveSettings(settings);render()};
  $('#newEventBtn').onclick=createNewEvent;
  $('#deleteEventBtn').onclick=removeCurrentEvent;
  $('#saveOverviewBtn').onclick=()=>saveOverview(true);
  $('#marbleCount').onchange=()=>saveOverview(false);

  $('#participantDrop').onclick=()=>$('#participantFile').click();
  $('#participantFile').onchange=e=>importParticipantFile(e.target.files?.[0]);
  bindDrop($('#participantDrop'),file=>importParticipantFile(file));
  $('#appendPasteBtn').onclick=appendPastedParticipants;
  $('#addTenRowsBtn').onclick=addTenRows;
  $('#clearParticipantsBtn').onclick=clearParticipants;
  $('#validateBtn').onclick=()=>{const v=validateParticipants(current.participants);showToast(v.valid?`Danh sách hợp lệ: ${v.eligibleCount} người.`:`Còn ${v.errors.length} lỗi.`);renderParticipantTable($('#participantSearch').value)};
  $('#participantSearch').oninput=e=>renderParticipantTable(e.target.value);

  $('#shuffleBtn').onclick=shuffleParticipants;
  $('#demoRaceBtn').onclick=()=>openRace('demo');
  $('#officialRaceBtn').onclick=()=>openRace('official');
  $('#exportResultsBtn').onclick=exportResultsExcel;
  $('#printResultsBtn').onclick=printResultReport;
}

async function createNewEvent(){
  const name=prompt('Tên sự kiện mới:','Bốc thăm may mắn');if(!name?.trim())return;
  current=createEvent(name.trim());await saveEvent(current);events=await listEvents();settings.lastEventId=current.id;saveSettings(settings);render();
}

async function removeCurrentEvent(){
  if(!confirm(`Xóa sự kiện “${current.name}”?`))return;
  await deleteEvent(current.id);events=await listEvents();
  if(!events.length){current=createEvent('Sự kiện mẫu');current.participants=sampleParticipants(10);await saveEvent(current);events=[current]}
  current=events[0];settings.lastEventId=current.id;saveSettings(settings);render();
}

async function saveOverview(showMessage=true){
  const oldCount=current.marbleCount||10;
  current.name=$('#eventName')?.value.trim()||current.name||'Sự kiện';
  current.prizeName=$('#prizeName')?.value.trim()||'Giải may mắn';
  current.prizeDepartments=($('#prizeDepartments')?.value||'').split(',').map(x=>x.trim()).filter(Boolean);
  current.allowRepeatWinner=!!$('#allowRepeat')?.checked;
  current.marbleCount=Math.max(2,Math.min(10,Number($('#marbleCount')?.value)||10));
  if(oldCount!==current.marbleCount)invalidateDrawSetup(false);
  current.digitCount=currentDigitCount();
  await saveEvent(current);events=await listEvents();current=events.find(e=>e.id===current.id)||current;
  render();if(showMessage)showToast('Đã lưu.');
}

function renderParticipantTable(query=''){
  const host=$('#participantTableHost');if(!host)return;
  const q=query.trim().toLowerCase();
  const rows=(current.participants||[]).map((p,index)=>({p,index})).filter(({p})=>!q||`${p.participantId} ${p.name} ${p.department}`.toLowerCase().includes(q));
  host.innerHTML=`<div class="participant-table-wrap"><table class="participant-table"><thead><tr><th>#</th><th>Mã</th><th>Họ và tên</th><th>Phòng ban</th><th>Đủ điều kiện</th><th></th></tr></thead><tbody>${rows.map(({p,index})=>`<tr data-index="${index}" class="${p._errors?.length?'row-error':''}"><td>${index+1}</td><td><input data-k="participantId" value="${escAttr(p.participantId)}"></td><td><input data-k="name" value="${escAttr(p.name)}"></td><td><input data-k="department" value="${escAttr(p.department)}"></td><td class="center-cell"><input data-k="eligible" type="checkbox" ${p.eligible?'checked':''}></td><td><button class="md-mini-btn remove-row" type="button">×</button></td></tr>`).join('')}</tbody></table></div>`;
  host.querySelectorAll('input').forEach(input=>input.onchange=async()=>{const tr=input.closest('tr'),p=current.participants[+tr.dataset.index],k=input.dataset.k;p[k]=input.type==='checkbox'?input.checked:input.value;invalidateDrawSetup();await saveEvent(current);renderParticipantTable(query)});
  host.querySelectorAll('.remove-row').forEach(btn=>btn.onclick=async()=>{current.participants.splice(+btn.closest('tr').dataset.index,1);invalidateDrawSetup();await persist('Đã xóa một người.')});
}

async function importParticipantFile(file){
  if(!file)return;
  try{
    const XLSX=await ensureXlsx(),data=await file.arrayBuffer(),wb=XLSX.read(data,{type:'array',cellDates:true});
    const sheet=wb.Sheets[wb.SheetNames.includes('DANH_SACH_THAM_DU')?'DANH_SACH_THAM_DU':wb.SheetNames[0]];
    const rows=XLSX.utils.sheet_to_json(sheet,{defval:''});
    current.participants=rows.map(normalizeParticipant);invalidateDrawSetup();await persist(`Đã đọc ${rows.length} người.`);
  }catch(e){showError(e)}
}

async function appendPastedParticipants(){
  const rows=parsePastedTable($('#pasteParticipants').value);if(!rows.length)return showToast('Chưa có dữ liệu để thêm.');
  current.participants.push(...rows);invalidateDrawSetup();await persist(`Đã thêm ${rows.length} người.`);
}

async function addTenRows(){
  const start=current.participants.length;
  current.participants.push(...Array.from({length:10},(_,i)=>normalizeParticipant({'Mã người tham dự':`P${String(start+i+1).padStart(4,'0')}`,'Họ và tên':'','Đủ điều kiện tham gia':'Có'},start+i)));
  invalidateDrawSetup();await persist('Đã thêm 10 dòng.');
}

async function clearParticipants(){
  if(!confirm('Xóa toàn bộ danh sách người tham dự?'))return;
  current.participants=[];invalidateDrawSetup();await persist('Đã xóa danh sách.');
}

function invalidateDrawSetup(resetShuffle=true){
  current.status='draft';current.participantListHash='';current.baseSeed='';current.baseSeedCommitment='';current.mapping=[];current.mappingHash='';current.rounds=[];current.winningCode='';
  if(resetShuffle)current.shuffleCount=0;
}

function shuffleNameHtml(){
  const list=(current.participants||[]).filter(p=>p.name).slice(0,100);
  return list.length?list.map((p,i)=>`<span class="shuffle-name" style="--dx:${(i%7-3)*3}px;--dy:${(i%5-2)*3}px;--rot:${(i%9-4)*2}deg">${esc(p.name)}</span>`).join(''):'<span>Chưa có danh sách.</span>';
}

async function shuffleParticipants(){
  const validation=validateParticipants(current.participants||[]);if(!validation.valid)return showError(new Error('Danh sách còn lỗi.'));
  const count=(current.shuffleCount||0)+1;
  const random=new Uint32Array(4);crypto.getRandomValues(random);
  const seed=`${current.id}|${Date.now()}|${count}|${[...random].join('-')}`;
  const shuffled=await seededShuffle(current.participants,seed);
  current.participants=shuffled.map((p,i)=>({...p,rowIndex:i+2}));
  current.shuffleCount=count;current.lastShuffleSeed=seed;
  current.status='draft';current.mapping=[];current.mappingHash='';current.participantListHash='';
  await saveEvent(current);
  animateShuffle();
  setTimeout(async()=>{events=await listEvents();current=events.find(e=>e.id===current.id)||current;render();showToast(`Đã xáo ${current.shuffleCount} lần.`)},1300);
}

function animateShuffle(){
  const stage=$('#shuffleStage'),cloud=$('#shuffleCloud');if(!stage||!cloud)return;
  stage.classList.add('running');let frames=0;clearInterval(shuffleTimer);
  shuffleTimer=setInterval(()=>{
    const sample=[...(current.participants||[])].sort(()=>Math.random()-.5).slice(0,100);
    cloud.innerHTML=sample.map(p=>`<span class="shuffle-name" style="--dx:${(Math.random()*44-22).toFixed(0)}px;--dy:${(Math.random()*34-17).toFixed(0)}px;--rot:${(Math.random()*20-10).toFixed(0)}deg">${esc(p.name)}</span>`).join('');
    if(++frames>10){clearInterval(shuffleTimer);stage.classList.remove('running');cloud.innerHTML=shuffleNameHtml()}
  },100);
}

async function createRaceEngine(canvas,options){
  if(!RaceEngineClass){const mod=await import('./race-engine.js');RaceEngineClass=mod.MarbleRaceEngine}
  return new RaceEngineClass(canvas,options);
}

async function openRace(mode){
  await saveOverview(false);
  const validation=validateParticipants(current.participants||[]);if(!validation.valid)return showError(new Error('Danh sách còn lỗi.'));
  raceMode=mode;
  if(mode==='official'){
    const shuffleCount=current.shuffleCount||0;
    await lockParticipantList(current);current.shuffleCount=shuffleCount;await finalizeShuffle(current);await saveEvent(current);
  }
  raceAttempt=mode==='official'?((current.results?.length||0)*100000+(current.attempts?.length||0)):Date.now();
  current.digitCount=currentDigitCount();current.rounds=[];current.currentPrefix='';current.winningCode='';
  current.status=mode==='official'?'running':current.status;if(mode==='official')await saveEvent(current);
  refs.raceStage.hidden=false;document.body.style.overflow='hidden';
  $('#raceModeBadge').textContent=mode==='official'?'ĐANG ĐUA':'XEM THỬ';$('#raceEventName').textContent=current.name;
  refs.raceWinner.hidden=true;refs.startDigitBtn.hidden=true;refs.resetSequenceBtn.hidden=true;
  setupDigitSlots();updateRaceCandidateInfo();
  refs.raceStatus.textContent=`Chuẩn bị ${current.marbleCount} viên bi…`;
  if(raceEngine)raceEngine.destroy();
  raceEngine=await createRaceEngine(refs.canvas,{quality:settings.quality,volume:settings.volume,sound:settings.sound,marbleCount:current.marbleCount});
  try{
    await raceEngine.prepare(await deriveRoundSeed(current,0,raceAttempt));
    refs.raceStatus.textContent='Sắp bắt đầu…';
    clearTimeout(autoRoundTimer);autoRoundTimer=setTimeout(runNextDigit,700);
  }catch(e){closeRaceStage();showError(new Error('Không mở được đường đua. '+e.message))}
}

function setupDigitSlots(){
  const count=currentDigitCount(),labels=digitLabels(count);
  refs.digitSlots.innerHTML=Array.from({length:count},(_,i)=>`<div class="digit-slot ${i===0?'active':''}" title="${labels[i]}">?</div>`).join('');
  refs.raceRoundLabel.textContent=labels[0]||'Lượt đầu';
}

async function runNextDigit(){
  if(!raceEngine||raceEngine.running)return;
  const count=current.digitCount||1,index=current.rounds.length;if(index>=count)return;
  refs.raceWinner.hidden=true;refs.raceRanking.innerHTML='';
  const seed=await deriveRoundSeed(current,index,raceAttempt),slots=$$('.digit-slot'),labels=digitLabels(count);
  slots.forEach((s,i)=>s.classList.toggle('active',i===index));refs.raceRoundLabel.textContent=labels[index];
  try{
    await raceEngine.run({seed,onCountdown:n=>{refs.raceCountdown.hidden=n===0;refs.raceCountdown.textContent=n||''},onUpdate:order=>{refs.raceRanking.innerHTML=order.slice(0,5).map((r,i)=>`<div class="rank-row"><span>${i+1}. Bi ${r.digit}</span><span>${r.finished?'Đích':r.z.toFixed(1)}</span></div>`).join('')},onStatus:t=>refs.raceStatus.textContent=t,onFinish:r=>showDigitWinner(r,index,seed)});
  }catch(e){refs.raceStatus.textContent=e.message;autoRoundTimer=setTimeout(runNextDigit,1600)}
}

async function showDigitWinner(result,index,seed){
  const round={index,label:digitLabels(current.digitCount)[index],seed,winner:result.winner,finishOrder:result.finishOrder,duration:result.duration,createdAt:new Date().toISOString()};
  current.rounds.push(round);current.currentPrefix=current.rounds.map(r=>r.winner).join('');
  const slots=$$('.digit-slot');slots[index].textContent=result.winner;slots[index].classList.remove('active');slots[index].classList.add('done');if(index+1<slots.length)slots[index+1].classList.add('active');
  refs.raceWinner.innerHTML=`<span>${round.label}</span><b>${result.winner}</b>`;refs.raceWinner.hidden=false;updateRaceCandidateInfo();await saveEvent(current);
  if(current.rounds.length<current.digitCount){refs.raceStatus.textContent='Chuẩn bị lượt tiếp theo…';autoRoundTimer=setTimeout(runNextDigit,1800);return}
  await completeSequence();
}

async function completeSequence(){
  const code=current.rounds.map(r=>r.winner).join('');current.winningCode=code;
  const match=current.mapping?.find(m=>m.code===code);
  if(raceMode==='demo'){
    refs.raceWinner.innerHTML=`<span>Kết quả xem thử</span><b>${code}</b>`;refs.raceWinner.hidden=false;refs.raceStatus.textContent='Đã hoàn thành lượt xem thử.';return;
  }
  const alreadyWon=match&&!current.allowRepeatWinner&&(current.excludedParticipantIds||[]).includes(match.participantId);
  const wrongDepartment=match&&(current.prizeDepartments||[]).length&&!current.prizeDepartments.some(d=>d.toLowerCase()===String(match.department||'').toLowerCase());
  if(!match||alreadyWon||wrongDepartment){
    current.attempts=current.attempts||[];current.attempts.push({attempt:raceAttempt,code,rounds:structuredClone(current.rounds),status:'retry',createdAt:new Date().toISOString()});await saveEvent(current);
    refs.raceWinner.innerHTML=`<span>Quay lại</span><b>${code}</b><small>Mã này chưa có người phù hợp.</small>`;refs.raceWinner.hidden=false;refs.raceStatus.textContent='Hệ thống sẽ tự quay lại.';
    autoRoundTimer=setTimeout(resetSequenceAndRun,2400);return;
  }
  const result={id:`result_${Date.now()}`,prizeName:current.prizeName||'Giải may mắn',code,participantId:match.participantId,name:match.name,department:match.department,rounds:structuredClone(current.rounds),attempt:raceAttempt,createdAt:new Date().toISOString(),mode:raceMode};
  current.results=current.results||[];current.results.push(result);if(!current.allowRepeatWinner)current.excludedParticipantIds=[...new Set([...(current.excludedParticipantIds||[]),match.participantId])];current.status='completed';await saveEvent(current);
  refs.raceWinner.innerHTML=`<span>${esc(result.prizeName)}</span><b>${code}</b><strong>${esc(match.name)}</strong><small>${esc(match.participantId)} · ${esc(match.department||'')}</small>`;
  refs.raceWinner.hidden=false;refs.raceStatus.textContent='Đã lưu kết quả.';showToast(`${code}: ${match.name}`);
}

async function resetSequenceAndRun(){
  raceAttempt++;current.rounds=[];current.currentPrefix='';current.winningCode='';setupDigitSlots();refs.raceWinner.hidden=true;updateRaceCandidateInfo();await saveEvent(current);await raceEngine.prepare(await deriveRoundSeed(current,0,raceAttempt));autoRoundTimer=setTimeout(runNextDigit,700);
}

function updateRaceCandidateInfo(){
  const prefix=current.currentPrefix||'';
  if(!current.mapping?.length){refs.raceCandidateInfo.textContent='';return}
  const candidates=current.mapping.filter(m=>m.code.startsWith(prefix)&&((current.allowRepeatWinner||!(current.excludedParticipantIds||[]).includes(m.participantId)))&&(!(current.prizeDepartments||[]).length||current.prizeDepartments.some(d=>d.toLowerCase()===String(m.department||'').toLowerCase())));
  refs.raceCandidateInfo.textContent=prefix?`Còn ${candidates.length} người có cơ hội.`:`${candidates.length} người tham gia.`;
}

function closeRaceStage(){
  clearTimeout(autoRoundTimer);refs.raceStage.hidden=true;document.body.style.overflow='';raceEngine?.stop();render();
}

function renderResultsList(){
  const rows=[...(current.results||[])].reverse().slice(0,4);
  return rows.length?rows.map(r=>`<div class="result-row"><span class="result-code">${r.code}</span><span><strong>${esc(r.name)}</strong><small>${esc(r.department||'')} · ${esc(r.prizeName)}</small></span></div>`).join(''):'<div class="inline-note">Chưa có kết quả.</div>';
}

async function exportResultsExcel(){
  const XLSX=await ensureXlsx(),rows=(current.results||[]).map((r,i)=>({STT:i+1,'Tên giải':r.prizeName,'Mã trúng':r.code,'Mã người tham dự':r.participantId,'Họ và tên':r.name,'Phòng ban':r.department,'Thời điểm':r.createdAt}));
  const ws=XLSX.utils.json_to_sheet(rows),wb=XLSX.utils.book_new();XLSX.utils.book_append_sheet(wb,ws,'KET_QUA');XLSX.writeFile(wb,`${safeName(current.name)}_ket_qua.xlsx`);
}

function printResultReport(){
  const win=open('','_blank');win.document.write(`<html><head><meta charset="utf-8"><title>Kết quả ${esc(current.name)}</title><style>body{font-family:Arial;padding:40px}h1{color:#173a30}table{border-collapse:collapse;width:100%}td,th{border:1px solid #ccc;padding:8px;text-align:left}</style></head><body><h1>KẾT QUẢ MARBLE DRAW</h1><p>Sự kiện: <b>${esc(current.name)}</b></p><table><tr><th>Giải</th><th>Mã</th><th>Người thắng</th><th>Phòng ban</th><th>Thời điểm</th></tr>${(current.results||[]).map(r=>`<tr><td>${esc(r.prizeName)}</td><td>${r.code}</td><td>${esc(r.name)} (${esc(r.participantId)})</td><td>${esc(r.department||'')}</td><td>${formatDate(r.createdAt)}</td></tr>`).join('')}</table><script>print()<\/script></body></html>`);win.document.close();
}

async function persist(message){
  await saveEvent(current);events=await listEvents();current=events.find(e=>e.id===current.id)||current;migrateEvent(current);settings.lastEventId=current.id;saveSettings(settings);render();if(message)showToast(message);
}

function toggleSound(){settings.sound=!settings.sound;saveSettings(settings);if(raceEngine)raceEngine.sound=settings.sound;syncSoundButtons()}
function syncSoundButtons(){$('#soundBtn').classList.toggle('active',settings.sound);$('#raceSoundBtn').classList.toggle('active',settings.sound);$('#soundBtn').textContent=$('#raceSoundBtn').textContent=settings.sound?'♪':'∅'}
async function toggleFullscreen(){if(!document.fullscreenElement)await document.documentElement.requestFullscreen?.();else await document.exitFullscreen?.()}
function closeToKanban(){raceEngine?.destroy();if(parent!==window)parent.postMessage({type:'marble-draw-close'},'*');else location.href='../index.html'}
async function deleteAllDrawData(){const backup=confirm('Bạn có muốn xuất bản sao trước khi xóa không?');if(backup)downloadJson({events,settings,exportedAt:new Date().toISOString()},'Marble_Draw_backup.json');const typed=prompt('Gõ chính xác OK để xóa toàn bộ dữ liệu Marble Draw.','');if(typed!=='OK')return;await clearAllEvents();location.reload()}
async function ensureXlsx(){if(globalThis.XLSX)return globalThis.XLSX;await new Promise((resolve,reject)=>{const s=document.createElement('script');s.src=XLSX_URL;s.onload=resolve;s.onerror=()=>reject(new Error('Không đọc được file Excel.'));document.head.appendChild(s)});return globalThis.XLSX}
function bindDrop(el,handler){el.ondragover=e=>{e.preventDefault();el.style.filter='brightness(.95)'};el.ondragleave=()=>el.style.filter='';el.ondrop=e=>{e.preventDefault();el.style.filter='';handler(e.dataTransfer.files[0])}}
function downloadJson(data,name){const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:'application/json'}));a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)}
function showToast(msg){clearTimeout(toastTimer);refs.toast.textContent=msg;refs.toast.classList.add('show');toastTimer=setTimeout(()=>refs.toast.classList.remove('show'),2500)}
function showError(err){console.error(err);showToast(err?.message||String(err))}
function formatDate(v){const d=new Date(v);return Number.isFinite(d.getTime())?d.toLocaleString('vi-VN'):'—'}
function safeName(s){return String(s||'file').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-zA-Z0-9_-]+/g,'_').replace(/^_+|_+$/g,'')||'file'}
function esc(v){return String(v??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'})[c])}
function escAttr(v){return esc(v).replace(/`/g,'&#96;')}
