import {DiceEngine} from './dice-engine.js';

const $=selector=>document.querySelector(selector);
const refs={
  canvas:$('#diceCanvas'),countInput:$('#diceCountInput'),countOutput:$('#diceCountOutput'),countMinus:$('#countMinusBtn'),countPlus:$('#countPlusBtn'),prepare:$('#prepareRollBtn'),clear:$('#clearTableBtn'),modeDialog:$('#modeDialog'),modeCount:$('#modeDiceCount'),together:$('#rollTogetherBtn'),sequence:$('#rollOneByOneBtn'),resultMode:$('#resultMode'),resultTotal:$('#resultTotal'),resultDice:$('#resultDice'),status:$('#rollStatus'),history:$('#historyList'),clearHistory:$('#clearHistoryBtn'),sound:$('#soundBtn'),fullscreen:$('#fullscreenBtn'),close:$('#closeDiceBtn'),loading:$('#loadingOverlay'),toast:$('#toast')
};
const SETTINGS_KEY='linh_dice_game_settings_v1';
const HISTORY_KEY='linh_dice_game_history_v1';
let settings=loadJson(SETTINGS_KEY,{count:3,sound:true,volume:.65});
let history=loadJson(HISTORY_KEY,[]);
let engine=null,rolling=false,toastTimer=null;

init().catch(error=>{
  console.error(error);refs.loading.innerHTML=`<strong>Không tải được bàn xúc xắc.</strong><span>${escapeHtml(error.message||String(error))}</span>`;
});

async function init(){
  bindEvents();setCount(settings.count);syncSound();renderHistory();
  engine=new DiceEngine(refs.canvas,{quality:'medium',sound:settings.sound,volume:settings.volume});
  await engine.init();
  refs.loading.classList.add('hidden');setTimeout(()=>refs.loading.remove(),450);
}
function bindEvents(){
  refs.countInput.addEventListener('input',event=>setCount(+event.target.value));
  refs.countMinus.addEventListener('click',()=>setCount(getCount()-1));
  refs.countPlus.addEventListener('click',()=>setCount(getCount()+1));
  refs.prepare.addEventListener('click',openModeDialog);
  refs.together.addEventListener('click',()=>startRoll('together'));
  refs.sequence.addEventListener('click',()=>startRoll('sequence'));
  refs.clear.addEventListener('click',()=>{if(rolling)return;engine?.clearDice();resetResult();showToast('Đã dọn bàn.')});
  refs.clearHistory.addEventListener('click',()=>{history=[];saveJson(HISTORY_KEY,history);renderHistory();showToast('Đã xóa lịch sử.')});
  refs.sound.addEventListener('click',()=>{settings.sound=!settings.sound;saveSettings();engine?.setSound(settings.sound);syncSound()});
  refs.fullscreen.addEventListener('click',toggleFullscreen);
  refs.close.addEventListener('click',closeDiceGame);
  window.addEventListener('keydown',event=>{if(event.key==='Escape'&&!refs.modeDialog.open)closeDiceGame();if(event.code==='Space'&&event.ctrlKey){event.preventDefault();openModeDialog()}});
}
function getCount(){return Math.max(1,Math.min(10,+refs.countInput.value||3))}
function setCount(value){const count=Math.max(1,Math.min(10,+value||1));refs.countInput.value=String(count);refs.countOutput.textContent=String(count);settings.count=count;saveSettings()}
function openModeDialog(){if(rolling)return;refs.modeCount.textContent=String(getCount());refs.modeDialog.showModal()}
async function startRoll(mode){
  if(rolling||!engine)return;refs.modeDialog.close();rolling=true;setControlsDisabled(true);resetResult();refs.resultMode.textContent=mode==='together'?'Thả đồng thời':'Thả từng viên';
  const count=getCount();refs.status.textContent=mode==='together'?`Đang thả ${count} xúc xắc cùng lúc…`:`Chuẩn bị thả lần lượt ${count} xúc xắc…`;
  try{
    const values=await engine.roll(count,mode,{onStatus:text=>refs.status.textContent=text,onPartial:partial=>renderPartialResults(partial)});
    showFinalResults(values,mode);addHistory(values,mode);showToast(`Kết quả: ${values.join(' · ')}`);
  }catch(error){console.error(error);refs.status.textContent='Lượt thả gặp lỗi. Bạn có thể thử lại.';showToast(error.message||'Không thể hoàn tất lượt thả.')}
  finally{rolling=false;setControlsDisabled(false)}
}
function resetResult(){refs.resultMode.textContent='Chưa thả';refs.resultTotal.textContent='—';refs.resultDice.innerHTML='<div class="empty-result">Kết quả sẽ hiện tại đây.</div>';refs.status.textContent='Sẵn sàng.'}
function renderPartialResults(values){refs.resultDice.innerHTML=values.map((value,index)=>value?`<div class="result-chip new" title="Xúc xắc ${index+1}">${value}</div>`:`<div class="result-chip">?</div>`).join('');const valid=values.filter(Boolean);refs.resultTotal.textContent=valid.length?String(valid.reduce((sum,value)=>sum+value,0)):'—'}
function showFinalResults(values,mode){refs.resultMode.textContent=mode==='together'?'Thả đồng thời':'Thả từng viên';refs.resultDice.innerHTML=values.map((value,index)=>`<div class="result-chip new" title="Xúc xắc ${index+1}: ${value}">${value}</div>`).join('');refs.resultTotal.textContent=String(values.reduce((sum,value)=>sum+value,0));refs.status.textContent=`Đã hoàn tất ${values.length} xúc xắc.`}
function addHistory(values,mode){history.unshift({id:Date.now(),createdAt:new Date().toISOString(),mode,values,total:values.reduce((a,b)=>a+b,0)});history=history.slice(0,20);saveJson(HISTORY_KEY,history);renderHistory()}
function renderHistory(){if(!history.length){refs.history.innerHTML='<span>Chưa có lượt thả.</span>';return}refs.history.innerHTML=history.slice(0,10).map(item=>`<div class="history-row"><span>${item.mode==='together'?'Đồng thời':'Từng viên'} · ${formatTime(item.createdAt)}</span><b>${item.values.join('-')} = ${item.total}</b></div>`).join('')}
function setControlsDisabled(disabled){refs.prepare.disabled=disabled;refs.countMinus.disabled=disabled;refs.countPlus.disabled=disabled;refs.countInput.disabled=disabled;refs.clear.disabled=disabled}
function syncSound(){refs.sound.classList.toggle('active',settings.sound);refs.sound.textContent=settings.sound?'♪':'∅';refs.sound.title=settings.sound?'Tắt âm thanh':'Bật âm thanh'}
async function toggleFullscreen(){if(!document.fullscreenElement)await document.documentElement.requestFullscreen?.();else await document.exitFullscreen?.()}
function closeDiceGame(){engine?.destroy();if(parent!==window)parent.postMessage({type:'dice-game-close'},'*');else location.href='../index.html'}
function saveSettings(){saveJson(SETTINGS_KEY,settings)}
function loadJson(key,fallback){try{const parsed=JSON.parse(localStorage.getItem(key)||'null');if(Array.isArray(fallback))return Array.isArray(parsed)?parsed:fallback;return parsed&&typeof parsed==='object'?{...fallback,...parsed}:fallback}catch{return fallback}}
function saveJson(key,value){localStorage.setItem(key,JSON.stringify(value))}
function formatTime(value){const date=new Date(value);return Number.isFinite(date.getTime())?date.toLocaleTimeString('vi-VN',{hour:'2-digit',minute:'2-digit'}):''}
function showToast(message){clearTimeout(toastTimer);refs.toast.textContent=message;refs.toast.classList.add('show');toastTimer=setTimeout(()=>refs.toast.classList.remove('show'),2400)}
function escapeHtml(value){return String(value??'').replace(/[&<>'"]/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'})[char])}
