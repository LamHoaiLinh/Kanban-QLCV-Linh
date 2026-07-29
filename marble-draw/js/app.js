import {listEvents,saveEvent,deleteEvent,clearAllEvents,loadSettings,saveSettings} from './storage.js';
import {sha256,stableStringify,deriveRoundSeed,seededShuffle} from './crypto-utils.js';
import {normalizeParticipant,validateParticipants,parsePastedTable,digitCountFor,digitLabels,eligibleParticipants} from './participants.js';
import {lockParticipantList,finalizeShuffle,verifyMapping} from './shuffle-engine.js';

const XLSX_URL='https://cdn.sheetjs.com/xlsx-0.20.3/package/dist/xlsx.full.min.js';
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const refs={main:$('#mainView'),raceStage:$('#raceStage'),canvas:$('#raceCanvas'),digitSlots:$('#digitSlots'),raceRoundLabel:$('#raceRoundLabel'),raceCandidateInfo:$('#raceCandidateInfo'),raceCountdown:$('#raceCountdown'),raceWinner:$('#raceWinner'),raceRanking:$('#raceRanking'),raceStatus:$('#raceStatus'),startDigitBtn:$('#startDigitBtn'),resetSequenceBtn:$('#resetSequenceBtn'),toast:$('#toast')};
let events=[],current=null,settings=loadSettings(),raceEngine=null,RaceEngineClass=null,toastTimer=null,shuffleTimer=null,raceMode='demo',raceAttempt=0;

init().catch(showError);
async function init(){
  bindGlobal();
  events=await listEvents();
  if(!events.length){current=createEvent('Sự kiện mẫu');current.participants=sampleParticipants(30);await saveEvent(current);events=[current];}
  current=events.find(e=>e.id===settings.lastEventId)||events[0];
  settings.lastEventId=current.id;saveSettings(settings);
  render();
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
  $('#startDigitBtn').onclick=runNextDigit;
  $('#resetSequenceBtn').onclick=resetSequence;
  window.addEventListener('keydown',e=>{if(e.key==='Escape'&&!refs.raceStage.hidden)closeRaceStage()});
}
function createEvent(name='Sự kiện mới'){
  const now=new Date().toISOString();
  return{id:`event_${crypto.randomUUID?.()||Date.now()}`,name,createdAt:now,updatedAt:now,status:'draft',participants:[],digitCountManual:null,digitCount:1,shuffleCount:0,mapping:[],rounds:[],attempts:[],results:[],excludedParticipantIds:[],allowRepeatWinner:false,prizeName:'Giải may mắn',prizeDepartments:[],contributorSeed:'',trackVersion:'marble-simple-track-v2',physicsVersion:'rapier-0.19.3',gameVersion:'1.1.0'};
}
function sampleParticipants(count){return Array.from({length:count},(_,i)=>normalizeParticipant({'Mã người tham dự':`NV${String(i+1).padStart(3,'0')}`,'Họ và tên':`Người tham dự ${i+1}`,'Phòng ban':`Phòng ${(i%5)+1}`,'Đủ điều kiện tham gia':'Có'},i));}
function statusLabel(s){return({draft:'Bản nháp',list_locked:'Danh sách đã khóa',shuffled:'Đã khóa mapping',ready:'Sẵn sàng',running:'Đang chạy',completed:'Đã hoàn thành',invalidated:'Đã mất hiệu lực'})[s]||s||'Bản nháp'}
function currentDigitCount(){return current.digitCountManual||current.digitCount||digitCountFor(Math.max(1,eligibleParticipants(current).length));}
function render(){if(!current){refs.main.innerHTML='<div class="md-card">Chưa có sự kiện.</div>';return}syncSoundButtons();const validation=validateParticipants(current.participants||[]);const eligible=eligibleParticipants(current).length;const mapped=!!current.mapping?.length;const locked=['list_locked','shuffled','ready','running','completed'].includes(current.status);const count=currentDigitCount();refs.main.innerHTML=`
  <div class="md-grid md-dashboard">
    <section class="md-card half">
      <div class="view-head compact"><div><div class="md-eyebrow">THIẾT LẬP NHANH</div><h2>Bốc thăm Marble Draw</h2><p>Giao diện đã rút gọn còn 1 màn: đặt tên giải, nạp danh sách, xáo và bắt đầu đua.</p></div><div class="view-actions"><button id="newEventBtn" class="md-secondary-btn">＋ Sự kiện mới</button><button id="deleteEventBtn" class="md-danger-btn">Xóa sự kiện</button></div></div>
      <div class="md-form-grid">
        <label class="md-field"><span>Sự kiện hiện tại</span><select id="eventSelect">${events.map(e=>`<option value="${escAttr(e.id)}" ${e.id===current.id?'selected':''}>${esc(e.name)}</option>`).join('')}</select></label>
        <label class="md-field"><span>Tên sự kiện</span><input id="eventName" value="${escAttr(current.name)}"></label>
        <label class="md-field"><span>Tên giải</span><input id="prizeName" value="${escAttr(current.prizeName||'Giải may mắn')}"></label>
      </div>
      <div class="md-form-grid" style="margin-top:10px">
        <label class="md-field"><span>Số chữ số</span><select id="digitCount"><option value="auto">Tự động</option>${[1,2,3,4,5,6].map(n=>`<option value="${n}" ${current.digitCountManual===n?'selected':''}>${n} chữ số</option>`).join('')}</select></label>
        <label class="md-field"><span>Phòng ban áp dụng giải</span><input id="prizeDepartments" value="${escAttr((current.prizeDepartments||[]).join(', '))}" placeholder="Để trống = tất cả"></label>
        <label class="md-field"><span>Chuỗi đóng góp thêm</span><input id="contributorSeed" value="${escAttr(current.contributorSeed||'')}" placeholder="Không bắt buộc"></label>
      </div>
      <div class="md-toolbar"><label style="display:flex;gap:8px;align-items:center"><input id="allowRepeat" type="checkbox" ${current.allowRepeatWinner?'checked':''}> Cho phép một người trúng nhiều giải</label><button id="saveOverviewBtn" class="md-primary-btn">Lưu cấu hình</button></div>
      <div class="md-toolbar"><span class="status-pill ${current.status==='draft'?'warn':''}">${statusLabel(current.status)}</span><span class="status-pill">${eligible} người hợp lệ</span><span class="status-pill">${count} chữ số</span><span class="status-pill">${current.results?.length||0} kết quả</span></div>
    </section>
    <section class="md-card half">
      <h3>Trạng thái minh bạch</h3>
      <p>Mọi thứ vẫn lưu cục bộ trên trình duyệt. Khi anh bấm bắt đầu đua, ứng dụng sẽ tự khóa danh sách hiện tại và tự tạo mapping từ số lần xáo đã ghi nhận.</p>
      ${current.participantListHash?`<div class="hash-box">Hash danh sách: ${current.participantListHash}</div>`:'<div class="inline-note">Chưa khóa danh sách.</div>'}
      ${current.baseSeedCommitment?`<div class="hash-box" style="margin-top:8px">Cam kết seed: ${current.baseSeedCommitment}</div>`:''}
      ${current.mappingHash?`<div class="hash-box" style="margin-top:8px">Hash mapping: ${current.mappingHash}</div>`:''}
      <div class="md-toolbar" style="margin-top:14px"><button id="verifyMappingBtn" class="md-secondary-btn" ${mapped?'':'disabled'}>Kiểm tra mapping</button><button id="exportVerificationBtn" class="md-secondary-btn">Xuất verification.json</button></div>
    </section>

    <section class="md-card">
      <div class="view-head compact"><div><h3>Người tham dự</h3><p>Nạp danh sách một lần trên màn hình này. Hệ thống sẽ tự khóa dữ liệu khi anh bấm bắt đầu đua.</p></div><div class="view-actions"><a class="md-secondary-btn" href="samples/Danh_sach_nguoi_tham_du_mau.xlsx" download>Tải file mẫu</a><button id="validateBtn" class="md-secondary-btn">Kiểm tra dữ liệu</button></div></div>
      <div class="md-grid">
        <section class="md-card half" style="padding:0;border:none;box-shadow:none;background:transparent">
          <label class="dropzone" id="participantDrop" ${locked?'aria-disabled="true" style="opacity:.55;pointer-events:none"':''}><strong>Browse hoặc kéo thả Excel / CSV</strong><span>XLSX, XLS, XLSM hoặc CSV. Không tải file lên máy chủ.</span><input id="participantFile" type="file" accept=".xlsx,.xls,.xlsm,.csv" hidden></label>
        </section>
        <section class="md-card half" style="padding:0;border:none;box-shadow:none;background:transparent">
          <textarea id="pasteParticipants" style="width:100%;min-height:105px;padding:12px;border:1px solid var(--line);border-radius:14px;background:var(--panel2)" ${locked?'disabled':''} placeholder="Dán dữ liệu theo cột: Mã[TAB]Họ tên[TAB]Phòng ban\nNV001[TAB]Nguyễn Văn A[TAB]Kế toán"></textarea>
          <div class="md-toolbar"><button id="appendPasteBtn" class="md-secondary-btn" ${locked?'disabled':''}>Thêm dữ liệu đã dán</button><button id="addTenRowsBtn" class="md-secondary-btn" ${locked?'disabled':''}>＋ 10 dòng trống</button><button id="clearParticipantsBtn" class="md-danger-btn" ${locked?'disabled':''}>Xóa danh sách</button></div>
        </section>
      </div>
      <div class="md-toolbar"><span class="status-pill ${validation.valid?'':'warn'}">${validation.valid?`Hợp lệ: ${validation.eligibleCount}/${validation.total}`:`Có ${validation.errors.length} lỗi cần sửa`}</span><input id="participantSearch" placeholder="Tìm mã, tên, phòng ban" style="padding:8px 10px;border:1px solid var(--line);border-radius:10px;min-width:220px"></div>
      <div id="participantTableHost"></div>
    </section>

    <section class="md-card half">
      <div class="view-head compact"><div><h3>Xáo danh sách & gán mã</h3><p>Bạn có thể bấm xáo nhiều lần để trình diễn, sau đó mới khóa kết quả xáo.</p></div><div class="view-actions"><button id="trialShuffleBtn" class="md-secondary-btn">Xáo tên</button><button id="officialShuffleBtn" class="md-primary-btn">Ghi nhận 1 lần xáo</button><button id="resetShuffleBtn" class="md-secondary-btn">Đặt lại số lần xáo</button></div></div>
      <div class="md-toolbar"><span class="status-pill">Đã xáo chính thức: ${current.shuffleCount||0} lần</span>${mapped?'<span class="status-pill">Mapping đã sẵn sàng</span>':'<span class="status-pill warn">Mapping sẽ tự tạo khi bắt đầu đua</span>'}</div>
      <div id="shuffleStage" class="shuffle-stage"><div id="shuffleCloud" class="shuffle-cloud">${shuffleNameHtml()}</div></div>
      <div class="inline-note" style="margin-top:10px">Chỉ cần bấm xáo vài lần cho vui. Khi anh bấm <b>Bắt đầu đua</b>, hệ thống sẽ tự khóa danh sách và tự tạo mapping ở nền.</div>
    </section>
    <section class="md-card half">
      <h3>Danh sách mã số chính thức</h3>
      ${mapped?`<div class="mapping-list">${current.mapping.map(m=>`<div class="mapping-item"><span class="mapping-code">${m.code}</span><span><strong>${esc(m.name)}</strong><small>${esc(m.participantId)} · ${esc(m.department||'')}</small></span></div>`).join('')}</div>`:'<div class="inline-note">Chưa tạo mapping. Điều này là bình thường trước khi anh bấm bắt đầu đua.</div>'}
    </section>

    <section class="md-card half">
      <div class="view-head compact"><div><h3>Bắt đầu đua</h3><p>Kết quả quay từ hàng cao nhất xuống hàng thấp nhất: ${digitLabels(count).join(' → ')}.</p></div><div class="view-actions"><button id="demoRaceBtn" class="md-secondary-btn">Xem thử đường đua</button><button id="officialRaceBtn" class="md-primary-btn">Bắt đầu đua</button></div></div>
      <div class="md-toolbar"><span class="status-pill">${eligible} người đang đủ điều kiện</span><span class="status-pill">${count} lượt thả / chuỗi</span></div>
      <div class="inline-note">Anh chỉ cần nạp danh sách, bấm xáo vài lần rồi bấm <b>Bắt đầu đua</b>. Ứng dụng sẽ tự kiểm tra dữ liệu, tự khóa, tự tạo mã và mở màn hình đua.</div>
    </section>
    <section class="md-card half">
      <div class="view-head compact"><div><h3>Kết quả & xuất dữ liệu</h3><p>Lưu lịch sử trúng thưởng, xuất Excel hoặc in biên bản.</p></div><div class="view-actions"><button id="exportResultsBtn" class="md-secondary-btn" ${current.results?.length?'':'disabled'}>Xuất Excel</button><button id="printResultsBtn" class="md-secondary-btn" ${current.results?.length?'':'disabled'}>In / lưu PDF</button></div></div>
      <div class="result-list">${renderResultsList()}</div>
    </section>
  </div>`;
  bindMain();
  renderParticipantTable('');
}
function bindMain(){
  $('#eventSelect').onchange=async e=>{current=events.find(x=>x.id===e.target.value)||current;settings.lastEventId=current.id;saveSettings(settings);render()};
  $('#newEventBtn').onclick=createNewEvent;
  $('#deleteEventBtn').onclick=removeCurrentEvent;
  $('#saveOverviewBtn').onclick=saveOverview;
  $('#verifyMappingBtn').onclick=async()=>showToast(await verifyMapping(current)?'Mapping khớp seed và số lần xáo.':'Mapping không khớp hoặc chưa được khóa.');
  $('#exportVerificationBtn').onclick=()=>downloadJson(verificationPayload(),`${safeName(current.name)}_verification.json`);

  $('#participantDrop').onclick=()=>$('#participantFile').click();
  $('#participantFile').onchange=e=>importParticipantFile(e.target.files?.[0]);
  bindDrop($('#participantDrop'),file=>importParticipantFile(file));
  $('#appendPasteBtn').onclick=appendPastedParticipants;
  $('#addTenRowsBtn').onclick=addTenRows;
  $('#clearParticipantsBtn').onclick=clearParticipants;
  $('#validateBtn').onclick=()=>{const v=validateParticipants(current.participants);showToast(v.valid?`Dữ liệu hợp lệ: ${v.eligibleCount} người.`:`Còn ${v.errors.length} lỗi.`);render()};
  $('#participantSearch').oninput=e=>renderParticipantTable(e.target.value);

  $('#trialShuffleBtn').onclick=()=>animateShuffle(false);
  $('#officialShuffleBtn').onclick=recordOfficialShuffle;
  $('#resetShuffleBtn').onclick=resetShuffleCount;

  $('#demoRaceBtn').onclick=()=>openRace('demo');
  $('#officialRaceBtn').onclick=()=>openRace('official');
  $('#exportResultsBtn').onclick=exportResultsExcel;
  $('#printResultsBtn').onclick=printResultReport;
}
async function createNewEvent(){const name=prompt('Tên sự kiện mới:','Bốc thăm may mắn');if(!name?.trim())return;current=createEvent(name.trim());await saveEvent(current);events=await listEvents();settings.lastEventId=current.id;saveSettings(settings);render()}
async function removeCurrentEvent(){if(!confirm(`Xóa sự kiện “${current.name}”? Dữ liệu Kanban không bị ảnh hưởng.`))return;await deleteEvent(current.id);events=await listEvents();if(!events.length){current=createEvent('Sự kiện mẫu');current.participants=sampleParticipants(10);await saveEvent(current);events=[current]}current=events[0];settings.lastEventId=current.id;saveSettings(settings);render()}
async function saveOverview(){const oldContributor=current.contributorSeed||'',oldDigits=current.digitCountManual;current.name=$('#eventName').value.trim()||'Sự kiện';current.prizeName=$('#prizeName').value.trim()||'Giải may mắn';current.prizeDepartments=$('#prizeDepartments').value.split(',').map(x=>x.trim()).filter(Boolean);current.digitCountManual=$('#digitCount').value==='auto'?null:+$('#digitCount').value;current.contributorSeed=$('#contributorSeed').value.trim();current.allowRepeatWinner=$('#allowRepeat').checked;if((oldContributor!==current.contributorSeed||oldDigits!==current.digitCountManual)&&current.status!=='draft')invalidateOfficialData();await persist('Đã lưu cấu hình sự kiện.')}
function renderParticipantTable(query=''){const host=$('#participantTableHost');if(!host)return;const q=query.trim().toLowerCase();const rows=(current.participants||[]).map((p,index)=>({p,index})).filter(({p})=>!q||`${p.participantId} ${p.name} ${p.department}`.toLowerCase().includes(q));host.innerHTML=`<div class="participant-table-wrap"><table class="participant-table"><thead><tr><th>#</th><th>Mã</th><th>Họ và tên</th><th>Phòng ban</th><th>Chức danh</th><th>Đủ điều kiện</th><th></th></tr></thead><tbody>${rows.map(({p,index})=>`<tr data-index="${index}" class="${p._errors?.length?'row-error':''}"><td>${index+1}</td><td><input data-k="participantId" value="${escAttr(p.participantId)}" ${current.status!=='draft'?'disabled':''}></td><td><input data-k="name" value="${escAttr(p.name)}" ${current.status!=='draft'?'disabled':''}></td><td><input data-k="department" value="${escAttr(p.department)}" ${current.status!=='draft'?'disabled':''}></td><td><input data-k="title" value="${escAttr(p.title||'')}" ${current.status!=='draft'?'disabled':''}></td><td><input data-k="eligible" type="checkbox" ${p.eligible?'checked':''} ${current.status!=='draft'?'disabled':''}></td><td><button class="md-mini-btn remove-row" type="button" ${current.status!=='draft'?'disabled':''}>×</button></td></tr>`).join('')}</tbody></table></div>`;host.querySelectorAll('input').forEach(input=>input.onchange=async()=>{const tr=input.closest('tr'),p=current.participants[+tr.dataset.index],k=input.dataset.k;p[k]=input.type==='checkbox'?input.checked:input.value;invalidateOfficialData();await saveEvent(current)});host.querySelectorAll('.remove-row').forEach(btn=>btn.onclick=async()=>{current.participants.splice(+btn.closest('tr').dataset.index,1);invalidateOfficialData();await persist('Đã xóa một dòng.')})}
async function importParticipantFile(file){if(!file)return;try{const XLSX=await ensureXlsx(),data=await file.arrayBuffer(),wb=XLSX.read(data,{type:'array',cellDates:true});const sheet=wb.Sheets[wb.SheetNames.includes('DANH_SACH_THAM_DU')?'DANH_SACH_THAM_DU':wb.SheetNames[0]];const rows=XLSX.utils.sheet_to_json(sheet,{defval:''});current.participants=rows.map(normalizeParticipant);invalidateOfficialData();await persist(`Đã đọc ${rows.length} dòng từ ${file.name}.`)}catch(e){showError(e)}}
async function appendPastedParticipants(){const rows=parsePastedTable($('#pasteParticipants').value);if(!rows.length)return showToast('Chưa có dữ liệu để thêm.');current.participants.push(...rows);invalidateOfficialData();await persist(`Đã thêm ${rows.length} người.`)}
async function addTenRows(){const start=current.participants.length;current.participants.push(...Array.from({length:10},(_,i)=>normalizeParticipant({'Mã người tham dự':`P${String(start+i+1).padStart(4,'0')}`,'Họ và tên':'','Đủ điều kiện tham gia':'Có'},start+i)));await persist('Đã thêm 10 dòng trống.')}
async function clearParticipants(){if(!confirm('Xóa toàn bộ danh sách người tham dự của sự kiện này?'))return;current.participants=[];invalidateOfficialData();await persist('Đã xóa danh sách.')}
async function lockList(){const v=validateParticipants(current.participants);if(!v.valid)return showError(new Error('Hãy sửa toàn bộ lỗi trước khi khóa danh sách.'));if(!confirm(`Khóa ${v.eligibleCount} người hợp lệ? Sau khi khóa, mọi chỉnh sửa sẽ làm mất hiệu lực mapping cũ.`))return;await lockParticipantList(current);await persist('Đã khóa danh sách và tạo mã cam kết seed.')}
async function unlockList(){if(!confirm('Mở khóa sẽ làm mất hiệu lực hash, seed, mapping và các lượt quay. Tiếp tục?'))return;invalidateOfficialData();await persist('Đã mở khóa danh sách. Hãy khóa lại trước khi chạy chính thức.')}
function invalidateOfficialData(){if(current.status!=='draft')current.status='draft';current.participantListHash='';current.baseSeed='';current.baseSeedCommitment='';current.mapping=[];current.mappingHash='';current.shuffleCount=0;current.rounds=[];current.winningCode=''}
function shuffleNameHtml(){const list=eligibleParticipants(current).slice(0,100);return list.length?list.map((p,i)=>`<span class="shuffle-name" style="--dx:${(i%7-3)*3}px;--dy:${(i%5-2)*3}px;--rot:${(i%9-4)*2}deg">${esc(p.name)}</span>`).join(''):'<span>Chưa có danh sách hợp lệ.</span>'}
function animateShuffle(official){const stage=$('#shuffleStage'),cloud=$('#shuffleCloud');if(!stage||!cloud)return;stage.classList.add('running');const names=eligibleParticipants(current).map(p=>p.name);let frames=0;clearInterval(shuffleTimer);shuffleTimer=setInterval(()=>{const sample=[...names].sort(()=>Math.random()-.5).slice(0,Math.min(100,names.length));cloud.innerHTML=sample.map(n=>`<span class="shuffle-name" style="--dx:${(Math.random()*40-20).toFixed(0)}px;--dy:${(Math.random()*30-15).toFixed(0)}px;--rot:${(Math.random()*18-9).toFixed(0)}deg">${esc(n)}</span>`).join('');if(++frames>12){clearInterval(shuffleTimer);stage.classList.remove('running');cloud.innerHTML=official?`<strong>Đã ghi nhận thêm 1 lần xáo. Hiện tại: ${current.shuffleCount||0} lần.</strong>`:shuffleNameHtml()}},110)}
async function recordOfficialShuffle(){current.shuffleCount=(current.shuffleCount||0)+1;await saveEvent(current);animateShuffle(true);setTimeout(async()=>{events=await listEvents();current=events.find(e=>e.id===current.id)||current;render()},1700)}
async function finalizeCurrentShuffle(){const counted=current.shuffleCount||0;await lockParticipantList(current);current.shuffleCount=counted;await finalizeShuffle(current);await persist('Đã tự khóa và tạo mapping.')}

async function resetShuffleCount(){current.shuffleCount=0;current.mapping=[];current.mappingHash='';if(current.status!=='draft')current.status='draft';await persist('Đã đặt lại số lần xáo về 0.')}

async function createRaceEngine(canvas,options){if(!RaceEngineClass){const mod=await import('./race-engine.js');RaceEngineClass=mod.MarbleRaceEngine}return new RaceEngineClass(canvas,options)}
async function openRace(mode){if(mode==='official'){const v=validateParticipants(current.participants||[]);if(!v.valid)return showError(new Error('Danh sách còn lỗi, hãy sửa trước khi đua.'));const counted=current.shuffleCount||0;await lockParticipantList(current);current.shuffleCount=counted;await finalizeShuffle(current);}raceMode=mode;raceAttempt=mode==='official'?((current.results?.length||0)*100000+(current.attempts?.length||0)):Date.now();current.digitCount=currentDigitCount();current.rounds=[];current.currentPrefix='';current.winningCode='';current.status=mode==='official'?'running':current.status;if(mode==='official')await saveEvent(current);refs.raceStage.hidden=false;document.body.style.overflow='hidden';$('#raceModeBadge').textContent=mode==='official'?'CHẠY CHÍNH THỨC':'CHẠY THỬ';$('#raceEventName').textContent=current.name;refs.raceWinner.hidden=true;refs.resetSequenceBtn.hidden=true;refs.startDigitBtn.hidden=false;refs.startDigitBtn.disabled=false;refs.startDigitBtn.textContent='Bắt đầu lượt đầu tiên';setupDigitSlots();updateRaceCandidateInfo();refs.raceStatus.textContent='Sẵn sàng. Bấm Bắt đầu lượt để thả 10 viên.';if(raceEngine)raceEngine.destroy();raceEngine=await createRaceEngine(refs.canvas,{quality:settings.quality,volume:settings.volume,sound:settings.sound});try{await raceEngine.prepare(await deriveRoundSeed(current,0,raceAttempt))}catch(e){closeRaceStage();showError(new Error('Không tải được Three.js/Rapier. Hãy kiểm tra Internet ở lần mở đầu tiên. '+e.message))}}
function setupDigitSlots(){const count=currentDigitCount();const labels=digitLabels(count);refs.digitSlots.innerHTML=Array.from({length:count},(_,i)=>`<div class="digit-slot ${i===0?'active':''}" title="${labels[i]}">?</div>`).join('');refs.raceRoundLabel.textContent=labels[0]||'Chữ số'}
async function runNextDigit(){if(!raceEngine||raceEngine.running)return;const count=current.digitCount||1,index=current.rounds.length;if(index>=count)return;refs.startDigitBtn.disabled=true;refs.raceWinner.hidden=true;refs.raceRanking.innerHTML='';const seed=await deriveRoundSeed(current,index,raceAttempt);const slots=$$('.digit-slot');slots.forEach((s,i)=>s.classList.toggle('active',i===index));const labels=digitLabels(count);refs.raceRoundLabel.textContent=labels[index];try{return await raceEngine.run({seed,onCountdown:n=>{refs.raceCountdown.hidden=n===0;refs.raceCountdown.textContent=n||''},onUpdate:order=>{refs.raceRanking.innerHTML=order.slice(0,5).map((r,i)=>`<div class="rank-row"><span>${i+1}. Viên ${r.digit}</span><span>${r.finished?'Đích':r.z.toFixed(1)}</span></div>`).join('')},onStatus:t=>refs.raceStatus.textContent=t,onFinish:r=>showDigitWinner(r,index,seed)})}catch(e){refs.raceStatus.textContent=e.message;refs.startDigitBtn.disabled=false;refs.startDigitBtn.textContent='Quay lại lượt này'}}
async function showDigitWinner(result,index,seed){const round={index,label:digitLabels(current.digitCount)[index],seed,winner:result.winner,finishOrder:result.finishOrder,duration:result.duration,createdAt:new Date().toISOString()};current.rounds.push(round);current.currentPrefix=current.rounds.map(r=>r.winner).join('');const slots=$$('.digit-slot');slots[index].textContent=result.winner;slots[index].classList.remove('active');slots[index].classList.add('done');if(index+1<slots.length)slots[index+1].classList.add('active');refs.raceWinner.innerHTML=`<span>Chữ số chiến thắng</span><b>${result.winner}</b><small>${round.label} · ${result.finishOrder[0]?.time?.toFixed(3)||'—'} giây</small>`;refs.raceWinner.hidden=false;updateRaceCandidateInfo();await saveEvent(current);if(current.rounds.length<current.digitCount){refs.startDigitBtn.disabled=false;refs.startDigitBtn.textContent=`Bắt đầu ${digitLabels(current.digitCount)[current.rounds.length]}`;refs.raceStatus.textContent='Đã ghi nhận chữ số. Sẵn sàng cho lượt tiếp theo.';return}await completeSequence()}
async function completeSequence(){const code=current.rounds.map(r=>r.winner).join('');current.winningCode=code;const match=current.mapping?.find(m=>m.code===code);if(raceMode==='demo'&&!current.mapping?.length){refs.raceWinner.innerHTML=`<span>Kết quả chạy thử</span><b>${code}</b><small>Chưa có mapping chính thức nên không công bố người thắng.</small>`;refs.raceWinner.hidden=false;refs.startDigitBtn.hidden=true;refs.raceStatus.textContent='Kết quả chỉ dùng để kiểm tra đường đua.';return}const alreadyWon=match&&!current.allowRepeatWinner&&(current.excludedParticipantIds||[]).includes(match.participantId);const wrongDepartment=match&&(current.prizeDepartments||[]).length&&!current.prizeDepartments.some(d=>d.toLowerCase()===String(match.department||'').toLowerCase());const ineligible=alreadyWon||wrongDepartment;if(!match||ineligible){current.attempts=current.attempts||[];current.attempts.push({attempt:raceAttempt,code,rounds:structuredClone(current.rounds),status:alreadyWon?'excluded_winner':wrongDepartment?'department_not_eligible':'empty_code',createdAt:new Date().toISOString()});await saveEvent(current);refs.raceWinner.innerHTML=`<span>${alreadyWon?'Người đã trúng':wrongDepartment?'Sai phạm vi phòng ban':'Mã trống'}</span><b>${code}</b><small>${alreadyWon?'Mã thuộc người đã trúng và không được lặp lại.':wrongDepartment?'Mã thuộc người ngoài phạm vi phòng ban của giải.':'Mã không tồn tại trong mapping.'} Hệ thống yêu cầu quay lại toàn bộ chuỗi.</small>`;refs.resetSequenceBtn.hidden=false;refs.startDigitBtn.hidden=true;refs.raceStatus.textContent='Kết quả không hợp lệ, hãy quay lại toàn bộ chuỗi.';return}const result={id:`result_${Date.now()}`,prizeName:current.prizeName||'Giải may mắn',code,participantId:match.participantId,name:match.name,department:match.department,rounds:structuredClone(current.rounds),attempt:raceAttempt,createdAt:new Date().toISOString(),mode:raceMode};if(raceMode==='official'){current.results=current.results||[];current.results.push(result);if(!current.allowRepeatWinner)current.excludedParticipantIds=[...new Set([...(current.excludedParticipantIds||[]),match.participantId])];current.status='completed';await saveEvent(current)}refs.raceWinner.innerHTML=`<span>${esc(result.prizeName)}</span><b>${code}</b><strong>${esc(match.name)}</strong><small>${esc(match.participantId)} · ${esc(match.department||'')}</small>`;refs.raceWinner.hidden=false;refs.startDigitBtn.hidden=true;refs.raceStatus.textContent=raceMode==='official'?'Kết quả chính thức đã được lưu.':'Kết quả chạy thử, không ghi vào giải thưởng.';showToast(`Mã ${code}: ${match.name}`)}
async function resetSequence(){raceAttempt++;current.rounds=[];current.currentPrefix='';current.winningCode='';setupDigitSlots();refs.raceWinner.hidden=true;refs.resetSequenceBtn.hidden=true;refs.startDigitBtn.hidden=false;refs.startDigitBtn.disabled=false;refs.startDigitBtn.textContent='Bắt đầu lại từ hàng cao nhất';updateRaceCandidateInfo();await saveEvent(current);await raceEngine.prepare(await deriveRoundSeed(current,0,raceAttempt));refs.raceStatus.textContent='Đã tạo seed mới cho toàn bộ chuỗi.'}
function updateRaceCandidateInfo(){const prefix=current.currentPrefix||'';if(!current.mapping?.length){refs.raceCandidateInfo.textContent='Chế độ thử nghiệm: chưa có mapping chính thức.';return}const candidates=current.mapping.filter(m=>m.code.startsWith(prefix)&&((current.allowRepeatWinner||!(current.excludedParticipantIds||[]).includes(m.participantId)))&&(!(current.prizeDepartments||[]).length||current.prizeDepartments.some(d=>d.toLowerCase()===String(m.department||'').toLowerCase())));refs.raceCandidateInfo.textContent=prefix?`Tiền tố ${prefix}: còn ${candidates.length} người có khả năng trúng.`:`${candidates.length} người đang có cơ hội.`}
function closeRaceStage(){refs.raceStage.hidden=true;document.body.style.overflow='';raceEngine?.stop();render()}
function renderResultsList(){const rows=[...(current.results||[])].reverse().slice(0,10);return rows.length?rows.map(r=>`<div class="result-row"><span class="result-code">${r.code}</span><span><strong>${esc(r.name)}</strong><small>${esc(r.participantId)} · ${esc(r.department||'')}<br>${esc(r.prizeName)}</small></span><time>${formatDate(r.createdAt)}</time></div>`).join(''):'<div class="inline-note">Chưa có kết quả chính thức.</div>'}
async function exportResultsExcel(){const XLSX=await ensureXlsx(),rows=(current.results||[]).map((r,i)=>({STT:i+1,'Tên giải':r.prizeName,'Mã trúng':r.code,'Mã người tham dự':r.participantId,'Họ và tên':r.name,'Phòng ban':r.department,'Thời điểm':r.createdAt}));const ws=XLSX.utils.json_to_sheet(rows),wb=XLSX.utils.book_new();XLSX.utils.book_append_sheet(wb,ws,'KET_QUA');XLSX.writeFile(wb,`${safeName(current.name)}_ket_qua.xlsx`)}
function printResultReport(){const win=open('','_blank');win.document.write(`<html><head><meta charset="utf-8"><title>Biên bản ${esc(current.name)}</title><style>body{font-family:Arial;padding:40px}h1{color:#173a30}table{border-collapse:collapse;width:100%}td,th{border:1px solid #ccc;padding:8px;text-align:left}</style></head><body><h1>BIÊN BẢN KẾT QUẢ MARBLE DRAW</h1><p>Sự kiện: <b>${esc(current.name)}</b></p><p>Hash danh sách: ${esc(current.participantListHash||'—')}</p><table><tr><th>Giải</th><th>Mã</th><th>Người thắng</th><th>Phòng ban</th><th>Thời điểm</th></tr>${(current.results||[]).map(r=>`<tr><td>${esc(r.prizeName)}</td><td>${r.code}</td><td>${esc(r.name)} (${esc(r.participantId)})</td><td>${esc(r.department||'')}</td><td>${formatDate(r.createdAt)}</td></tr>`).join('')}</table><script>print()<\/script></body></html>`);win.document.close()}
function verificationPayload(){return{formatVersion:1,eventId:current.id,eventName:current.name,participantListHash:current.participantListHash,trackHash:current.trackHash||null,trackVersion:current.trackVersion,physicsConfigHash:current.physicsConfigHash||null,physicsVersion:current.physicsVersion,mappingHash:current.mappingHash,baseSeedCommitment:current.baseSeedCommitment,revealedBaseSeed:current.mapping?.length?current.baseSeed:null,shuffleCount:current.shuffleCount,digitCount:current.digitCount,digitOrder:digitLabels(current.digitCount),mapping:current.mapping,attempts:current.attempts,results:current.results,gameVersion:current.gameVersion,exportedAt:new Date().toISOString()}}
async function persist(message){await saveEvent(current);events=await listEvents();current=events.find(e=>e.id===current.id)||current;settings.lastEventId=current.id;saveSettings(settings);render();if(message)showToast(message)}
function toggleSound(){settings.sound=!settings.sound;saveSettings(settings);if(raceEngine)raceEngine.sound=settings.sound;syncSoundButtons()}
function syncSoundButtons(){$('#soundBtn').classList.toggle('active',settings.sound);$('#raceSoundBtn').classList.toggle('active',settings.sound);$('#soundBtn').textContent=$('#raceSoundBtn').textContent=settings.sound?'♪':'∅'}
async function toggleFullscreen(){if(!document.fullscreenElement)await document.documentElement.requestFullscreen?.();else await document.exitFullscreen?.()}
function closeToKanban(){raceEngine?.destroy();if(parent!==window)parent.postMessage({type:'marble-draw-close'},'*');else location.href='../index.html'}
async function deleteAllDrawData(){const backup=confirm('Bạn có muốn xuất backup Marble Draw trước khi xóa không?');if(backup)downloadJson({events,settings,exportedAt:new Date().toISOString()},'Marble_Draw_backup.json');const typed=prompt('Gõ chính xác OK để xóa toàn bộ dữ liệu Marble Draw. Dữ liệu Kanban không bị ảnh hưởng.','');if(typed!=='OK')return;await clearAllEvents();location.reload()}
async function ensureXlsx(){if(globalThis.XLSX)return globalThis.XLSX;await new Promise((resolve,reject)=>{const s=document.createElement('script');s.src=XLSX_URL;s.onload=resolve;s.onerror=()=>reject(new Error('Không tải được thư viện SheetJS.'));document.head.appendChild(s)});return globalThis.XLSX}
function bindDrop(el,handler){el.ondragover=e=>{e.preventDefault();el.style.filter='brightness(.95)'};el.ondragleave=()=>el.style.filter='';el.ondrop=e=>{e.preventDefault();el.style.filter='';handler(e.dataTransfer.files[0])}}
function downloadJson(data,name){const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:'application/json'}));a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)}
function showToast(msg){clearTimeout(toastTimer);refs.toast.textContent=msg;refs.toast.classList.add('show');toastTimer=setTimeout(()=>refs.toast.classList.remove('show'),2500)}
function showError(err){console.error(err);showToast(err?.message||String(err))}
function formatDate(v){const d=new Date(v);return Number.isFinite(d.getTime())?d.toLocaleString('vi-VN'):'—'}
function safeName(s){return String(s||'file').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-zA-Z0-9_-]+/g,'_').replace(/^_+|_+$/g,'')||'file'}
function esc(v){return String(v??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'})[c])}
function escAttr(v){return esc(v).replace(/`/g,'&#96;')}
