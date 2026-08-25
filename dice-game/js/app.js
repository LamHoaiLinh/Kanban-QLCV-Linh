const $=s=>document.querySelector(s);
const refs={
  stage:$('#diceStage'),count:$('#countRange'),out:$('#countOutput'),type:$('#dieTypeSelect'),minus:$('#minusBtn'),plus:$('#plusBtn'),
  roll:$('#rollBtn'),clear:$('#clearBtn'),modeSelect:$('#modeSelectBtn'),chargeFill:$('#chargeFill'),dialog:$('#modeDialog'),dialogCount:$('#dialogCount'),dialogType:$('#dialogDieType'),
  together:$('#togetherBtn'),sequence:$('#sequenceBtn'),mode:$('#modeLabel'),total:$('#totalLabel'),values:$('#valueList'),status:$('#statusText'),history:$('#historyList'),
  clearHistory:$('#clearHistoryBtn'),sound:$('#soundBtn'),fullscreen:$('#fullscreenBtn'),close:$('#closeDiceBtn'),toast:$('#toast'),
  beastRace:$('#beastRaceBtn'),raceDialog:$('#beastRaceDialog'),closeRace:$('#closeRaceBtn'),raceSetup:$('#raceSetup'),raceGame:$('#raceGame'),beastChoices:$('#beastChoices'),
  raceRound:$('#raceRound'),raceTerrain:$('#raceTerrain'),raceStats:$('#raceStats'),raceTrack:$('#raceTrack'),raceDiceStage:$('#raceDiceStage'),raceDiceChoices:$('#raceDiceChoices'),
  raceComboInfo:$('#raceComboInfo'),raceRoll:$('#raceRollBtn'),raceChargeFill:$('#raceChargeFill'),raceReroll:$('#raceRerollBtn'),raceLock:$('#raceLockBtn'),raceRestart:$('#raceRestartBtn'),raceLog:$('#raceLog')
};
const SETTINGS_KEY='linh_dice_game_settings_v4';
const HISTORY_KEY='linh_dice_game_history_v2';
const RACE_KEY='linh_dice_beast_race_v1';
const CHARGE_MAX_MS=1400,QUICK_TAP_POWER=.5,MIN_HOLD_MS=85;
let settings=load(SETTINGS_KEY,{count:3,sound:true,type:'d6',rollMode:'together'}),history=load(HISTORY_KEY,[]),rolling=false,audio=null,toastTimer=null,d10Engine=null,d10EnginePromise=null;
let chargeState=null,chargeRaf=0;
const FACE_ROT={1:['-18deg','0deg','0deg'],6:['-18deg','180deg','0deg'],3:['-18deg','-90deg','0deg'],4:['-18deg','90deg','0deg'],2:['-105deg','0deg','0deg'],5:['75deg','0deg','0deg']};

const BEASTS=[
  {id:'tianma',icon:'🐎',name:'Thiên Mã',desc:'Ưa tốc độ thuần túy.',passive:'Mỗi viên 5 hoặc 6: +1m.'},
  {id:'xuangui',icon:'🐢',name:'Huyền Quy',desc:'Ổn định, không sợ số thấp.',passive:'Có 1 hoặc 2: +2m; toàn chẵn thêm +1m.'},
  {id:'chihu',icon:'🦊',name:'Xích Hồ',desc:'Bậc thầy sửa vận.',passive:'Được reroll tối đa 3 viên thay vì 2.'},
  {id:'baihu',icon:'🐯',name:'Bạch Hổ',desc:'Càng bị dẫn càng bùng nổ.',passive:'Nếu chưa dẫn đầu: +2m.'},
  {id:'qingniao',icon:'🦅',name:'Thanh Điểu',desc:'Sở trường sảnh và vượt mặt.',passive:'Combo Sảnh nhận thêm +3m.'},
  {id:'kuangniu',icon:'🐂',name:'Cuồng Ngưu',desc:'Cặp và bộ ba càng mạnh.',passive:'Đôi +2m; Bộ ba +3m.'}
];
const TERRAINS=[
  {min:0,id:'grass',icon:'🌿',name:'Thảo Nguyên',desc:'Không có luật phụ.'},
  {min:25,id:'curve',icon:'↪️',name:'Khúc Cua',desc:'Sảnh +2m; lao quá mạnh bị -1m.'},
  {min:50,id:'mud',icon:'🟫',name:'Bùn Lầy',desc:'Toàn chẵn +3m.'},
  {min:72,id:'bridge',icon:'🌉',name:'Cầu Hẹp',desc:'Sảnh +3m; Bộ ba +1m.'},
  {min:90,id:'sprint',icon:'🔥',name:'Nước Rút',desc:'Có ít nhất hai viên 5/6: +3m.'}
];
let raceStats=load(RACE_KEY,{races:0,wins:0,bestRound:null});
let race=null,raceBusy=false;

init();
function init(){
  bind();
  refs.type.value=settings.type==='d10'?'d10':'d6';settings.rollMode=settings.rollMode==='sequence'?'sequence':'together';
  setCount(settings.count);syncSound();syncRollMode();renderHistory();renderEmpty();renderBeastChoices();
  if(getDieType()==='d10')preloadD10();
}
function bind(){
  refs.count.oninput=e=>setCount(+e.target.value);
  refs.type.onchange=async e=>{
    settings.type=e.target.value==='d10'?'d10':'d6';save(SETTINGS_KEY,settings);
    if(rolling)return;clearArena();renderEmpty();
    if(settings.type==='d10')await preloadD10();else d10Engine?.setVisible(false);
  };
  refs.minus.onclick=()=>setCount(getCount()-1);refs.plus.onclick=()=>setCount(getCount()+1);
  refs.modeSelect.onclick=()=>{if(rolling)return;refs.dialogCount.textContent=getCount();refs.dialogType.textContent=getDieLabel();refs.dialog.showModal()};
  refs.together.onclick=()=>{settings.rollMode='together';save(SETTINGS_KEY,settings);syncRollMode();refs.dialog.close()};
  refs.sequence.onclick=()=>{settings.rollMode='sequence';save(SETTINGS_KEY,settings);syncRollMode();refs.dialog.close()};
  bindChargeButton(refs.roll,'main');
  refs.clear.onclick=()=>{if(rolling)return;clearArena();renderEmpty();showToast('Đã dọn bàn.')};
  refs.clearHistory.onclick=()=>{history=[];save(HISTORY_KEY,history);renderHistory()};
  refs.sound.onclick=()=>{settings.sound=!settings.sound;save(SETTINGS_KEY,settings);syncSound()};
  refs.fullscreen.onclick=toggleFullscreen;refs.close.onclick=closeGame;
  refs.beastRace.onclick=openRace;refs.closeRace.onclick=closeRace;refs.raceRestart.onclick=resetRaceSetup;
  bindChargeButton(refs.raceRoll,'race');refs.raceReroll.onclick=rerollRaceSelection;refs.raceLock.onclick=commitRaceTurn;
  window.addEventListener('pointerup',releaseCharge,{passive:false});window.addEventListener('pointercancel',cancelCharge,{passive:true});
  window.addEventListener('keydown',handleShortcuts,{passive:false});
}
function bindChargeButton(btn,target){
  btn.addEventListener('pointerdown',e=>{
    if(e.button!==undefined&&e.button!==0)return;
    e.preventDefault();beginCharge(target,btn);
  });
  btn.addEventListener('contextmenu',e=>e.preventDefault());
}
function beginCharge(target,btn){
  if(chargeState)return;
  if(target==='main'&&rolling)return;
  if(target==='race'&&(!race||raceBusy||race.phase!=='awaitRoll'))return;
  chargeState={target,btn,start:performance.now(),power:0};btn.classList.add('charging');
  if(target==='main')refs.status.textContent='Đang tụ lực… thả tay để tung xúc xắc.';
  else refs.raceComboInfo.innerHTML='<b>Đang tụ lực…</b>Lực ném chỉ thay đổi chuyển động, không thay đổi xác suất mặt xúc xắc.';
  updateChargeFrame();
}
function updateChargeFrame(){
  if(!chargeState)return;
  const held=performance.now()-chargeState.start,power=Math.min(1,held/CHARGE_MAX_MS);chargeState.power=power;
  const fill=chargeState.target==='main'?refs.chargeFill:refs.raceChargeFill;fill.style.width=`${Math.round(power*100)}%`;
  chargeRaf=requestAnimationFrame(updateChargeFrame);
}
function releaseCharge(e){
  if(!chargeState)return;
  if(e?.button!==undefined&&e.button!==0)return;
  e?.preventDefault?.();
  const state=chargeState;chargeState=null;cancelAnimationFrame(chargeRaf);state.btn.classList.remove('charging');
  const held=performance.now()-state.start,power=held<MIN_HOLD_MS?QUICK_TAP_POWER:Math.min(1,held/CHARGE_MAX_MS);
  (state.target==='main'?refs.chargeFill:refs.raceChargeFill).style.width='0%';
  if(state.target==='main')startRoll(settings.rollMode,power);else startRaceDiceRoll(power);
}
function cancelCharge(){if(!chargeState)return;const state=chargeState;chargeState=null;cancelAnimationFrame(chargeRaf);state.btn.classList.remove('charging');(state.target==='main'?refs.chargeFill:refs.raceChargeFill).style.width='0%'}
function handleShortcuts(e){
  if(refs.raceDialog.open)return;
  const tag=(document.activeElement?.tagName||'').toUpperCase(),typing=document.activeElement?.isContentEditable||['INPUT','TEXTAREA','SELECT'].includes(tag);
  if(typing&&!(e.key==='1'||e.key==='2'))return;
  if(e.key===' '||e.code==='Space'){if(rolling)return;e.preventDefault();quickRoll();return}
  if(e.key==='1'){e.preventDefault();settings.rollMode='together';save(SETTINGS_KEY,settings);syncRollMode();showToast('Đã chọn: Thả đồng thời.');return}
  if(e.key==='2'){e.preventDefault();settings.rollMode='sequence';save(SETTINGS_KEY,settings);syncRollMode();showToast('Đã chọn: Thả từng viên.')}
}
function syncRollMode(){refs.modeSelect.textContent=settings.rollMode==='sequence'?'Từng viên':'Đồng thời'}
function quickRoll(){startRoll(settings.rollMode,QUICK_TAP_POWER)}
function getCount(){return Math.max(1,Math.min(10,+refs.count.value||3))}
function getDieType(){return refs.type.value==='d10'?'d10':'d6'}
function getDieLabel(){return getDieType()==='d10'?'D10':'D6'}
function setCount(v){v=Math.max(1,Math.min(10,+v||1));refs.count.value=v;refs.out.textContent=v;settings.count=v;save(SETTINGS_KEY,settings)}
async function preloadD10(){refs.status.textContent='Đang chuẩn bị asset D10…';try{await ensureD10Engine();d10Engine.setVisible(true);refs.status.textContent='Asset D10 đã sẵn sàng.'}catch(error){console.error(error);refs.status.textContent='Không tải được asset D10; hệ thống sẽ dùng hình D10 dự phòng.'}}
async function ensureD10Engine(){
  if(d10Engine)return d10Engine;
  if(!d10EnginePromise)d10EnginePromise=import('./d10-engine.js?v=6.0.0').then(async({D10AssetEngine})=>{const engine=new D10AssetEngine(refs.stage,{onSettle:value=>playTone(410+value*24,.09,.032)});await engine.init();d10Engine=engine;return engine}).finally(()=>{d10EnginePromise=null});
  return d10EnginePromise;
}
function clearArena(){refs.stage.querySelectorAll('.die-wrap,.die-result-badge').forEach(el=>el.remove());d10Engine?.clear();d10Engine?.setVisible(getDieType()==='d10')}
async function startRoll(mode,power=.5){
  if(rolling)return;rolling=true;toggleControls(true);clearArena();
  const dieType=getDieType();settings.type=dieType;save(SETTINGS_KEY,settings);
  refs.mode.textContent=`${mode==='together'?'Thả đồng thời':'Thả từng viên'} · ${dieType.toUpperCase()} · lực ${Math.round(power*100)}%`;refs.total.textContent='—';refs.values.innerHTML='';
  const count=getCount(),results=[];refs.status.textContent=mode==='together'?`Đang tung ${count} xúc xắc ${dieType.toUpperCase()}…`:`Đang tung lần lượt ${count} xúc xắc ${dieType.toUpperCase()}…`;playTone(145+power*70,.22,.07);
  try{
    if(dieType==='d10'){
      let usedAsset=false;
      try{const engine=await ensureD10Engine();engine.setVisible(true);usedAsset=true;const values=await engine.roll(count,mode,{power,onStatus:text=>refs.status.textContent=text,onPartial:values=>renderValues(values)});values.forEach((v,i)=>results[i]=v)}
      catch(error){console.error('D10 asset fallback:',error);d10Engine?.setVisible(false);showToast('Không tải được asset D10; đang dùng D10 dự phòng.');await rollWithCss(count,mode,'d10',results,power,refs.stage)}
      if(usedAsset)renderValues(results);
    }else{d10Engine?.setVisible(false);await rollWithCss(count,mode,'d6',results,power,refs.stage)}
    refs.total.textContent=results.reduce((a,b)=>a+b,0);refs.status.textContent='Đã có kết quả.';addHistory(results,mode,dieType);playResult();showToast(`Kết quả ${dieType.toUpperCase()}: ${results.join(' · ')}`);
  }finally{rolling=false;toggleControls(false)}
}
async function rollWithCss(count,mode,dieType,results,power=.5,stage=refs.stage){
  if(mode==='together'){
    const jobs=[];for(let i=0;i<count;i++){const die=createCssDie(i,count,dieType,stage);jobs.push(rollCssDie(die,i*45,power))}
    const values=await Promise.all(jobs);values.forEach((v,i)=>results[i]=v);if(stage===refs.stage)renderValues(results);
  }else{
    for(let i=0;i<count;i++){if(stage===refs.stage)refs.status.textContent=`Đang tung xúc xắc ${i+1}/${count}…`;const die=createCssDie(i,count,dieType,stage);results[i]=await rollCssDie(die,0,power);if(stage===refs.stage)renderValues(results);await wait(180)}
  }
}
function createCssDie(index,total,type,stage=refs.stage){
  const wrap=document.createElement('div');wrap.className=`die-wrap ${type==='d10'?'d10-wrap':''}`;const pos=positionFor(index,total);wrap.style.left=pos.x+'%';wrap.style.top=pos.y+'%';
  if(type==='d10'){const die=document.createElement('div');die.className='d10';die.innerHTML='<div class="d10-facets" aria-hidden="true"></div><strong class="d10-value">?</strong>';wrap.appendChild(die);stage.appendChild(wrap);return{type,el:die,valueEl:die.querySelector('.d10-value'),wrap}}
  const die=document.createElement('div');die.className='die';for(const [cls,value] of [['front',1],['back',6],['right',3],['left',4],['top',2],['bottom',5]]){const face=document.createElement('div');face.className=`face ${cls}`;face.innerHTML=pips(value);die.appendChild(face)}wrap.appendChild(die);stage.appendChild(wrap);return{type,el:die,wrap};
}
function positionFor(index,total){const cols=Math.min(5,total),rows=Math.ceil(total/cols),col=index%cols,row=Math.floor(index/cols);return{x:18+(cols===1?32:col*(64/(cols-1))),y:30+(rows===1?20:row*32)}}
function pips(n){const map={1:['p1'],2:['p2a','p2b'],3:['p3a','p3b','p3c'],4:['p4a','p4b','p4c','p4d'],5:['p5a','p5b','p5c','p5d','p5e'],6:['p6a','p6b','p6c','p6d','p6e','p6f']};return map[n].map(c=>`<i class="pip ${c}"></i>`).join('')}
async function rollCssDie(die,delay=0,power=.5,forcedValue=null){
  await wait(delay);const duration=900+Math.round(power*480);
  if(die.type==='d10'){
    const value=forcedValue??randomInt(0,9),spin=1+power*.65;die.el.style.setProperty('--spin-x',`${Math.round(randomInt(650,1100)*spin)}deg`);die.el.style.setProperty('--spin-y',`${Math.round(randomInt(700,1250)*spin)}deg`);die.el.style.setProperty('--spin-z',`${Math.round(randomInt(260,680)*spin)}deg`);die.el.style.setProperty('--lift-d10',`${-150-Math.round(power*110)}px`);die.el.style.animationDuration=`${duration}ms`;die.valueEl.textContent='';die.el.classList.remove('settled','rolling');void die.el.offsetWidth;die.el.classList.add('rolling');playTone(230+randomInt(0,90),.09,.027);await wait(duration+40);die.el.classList.remove('rolling');die.el.classList.add('settled');die.valueEl.textContent=String(value);playTone(410+value*24,.09,.032);return value;
  }
  const value=forcedValue??randomInt(1,6),rot=FACE_ROT[value],spin=1+power*.72;die.el.style.setProperty('--rx',rot[0]);die.el.style.setProperty('--ry',rot[1]);die.el.style.setProperty('--rz',rot[2]);die.el.style.setProperty('--lift',`${-135-Math.round(power*120)}px`);die.el.style.setProperty('--spin1x',`${Math.round(520*spin)}deg`);die.el.style.setProperty('--spin1y',`${Math.round(610*spin)}deg`);die.el.style.setProperty('--spin1z',`${Math.round(350*spin)}deg`);die.el.style.setProperty('--spin2x',`${Math.round(720*spin)}deg`);die.el.style.setProperty('--spin2y',`${Math.round(830*spin)}deg`);die.el.style.setProperty('--spin2z',`${Math.round(540*spin)}deg`);die.el.style.setProperty('--spin3x',`${Math.round(880*spin)}deg`);die.el.style.setProperty('--spin3y',`${Math.round(970*spin)}deg`);die.el.style.setProperty('--spin3z',`${Math.round(690*spin)}deg`);die.el.style.animationDuration=`${duration}ms`;die.el.classList.remove('rolling');void die.el.offsetWidth;die.el.classList.add('rolling');playTone(220+randomInt(0,80),.08,.025);await wait(duration+30);playTone(360+value*32,.08,.03);return value;
}
function setStaticD6(die,value){const rot=FACE_ROT[value];die.el.style.transform=`rotateX(${rot[0]}) rotateY(${rot[1]}) rotateZ(${rot[2]})`}
function renderValues(values){refs.values.innerHTML=values.length?values.map((v,i)=>`<div class="value-chip" title="Xúc xắc ${i+1}">${v}</div>`).join(''):'<span>Chưa có kết quả.</span>';refs.total.textContent=values.length?values.reduce((a,b)=>a+b,0):'—';renderStageBadges(values)}
function renderStageBadges(values){refs.stage.querySelectorAll('.die-result-badge').forEach(el=>el.remove());if(!values?.length)return;const total=getCount();values.forEach((v,i)=>{if(v===undefined||v===null||v==='')return;const pos=positionFor(i,total),badge=document.createElement('div');badge.className='die-result-badge';badge.style.left=pos.x+'%';badge.style.top=`${Math.max(16,pos.y-9)}%`;badge.innerHTML=`<small>Viên ${i+1}</small><strong>${v}</strong>`;refs.stage.appendChild(badge)})}
function renderEmpty(){refs.mode.textContent=`Chưa thả · ${getDieLabel()}`;refs.total.textContent='—';refs.values.innerHTML='<span>Chưa có kết quả.</span>';renderStageBadges([]);refs.status.textContent='Sẵn sàng. Giữ nút để tụ lực; Space = tung nhanh; 1/2 đổi kiểu thả.'}
function addHistory(values,mode,type){history.unshift({time:new Date().toISOString(),mode,type,values,total:values.reduce((a,b)=>a+b,0)});history=history.slice(0,20);save(HISTORY_KEY,history);renderHistory()}
function renderHistory(){refs.history.innerHTML=history.length?history.slice(0,10).map(x=>`<div class="history-row"><span>${(x.type||'d6').toUpperCase()} · ${x.mode==='together'?'Đồng thời':'Từng viên'} · ${formatTime(x.time)}</span><strong>${x.values.join(' – ')} = ${x.total}</strong></div>`).join(''):'<span>Chưa có lượt thả.</span>'}
function toggleControls(disabled){[refs.count,refs.type,refs.minus,refs.plus,refs.modeSelect,refs.clear,refs.beastRace].forEach(el=>el.disabled=disabled);refs.roll.disabled=disabled}

/* ======================== ĐẠI HỘI LINH THÚ ======================== */
function renderBeastChoices(){refs.beastChoices.innerHTML=BEASTS.map(b=>`<button class="beast-choice" data-beast="${b.id}"><span class="beast-icon">${b.icon}</span><strong>${b.name}</strong><small>${b.desc}</small><em>${b.passive}</em></button>`).join('');refs.beastChoices.querySelectorAll('[data-beast]').forEach(btn=>btn.onclick=()=>startBeastRace(btn.dataset.beast))}
function openRace(){if(rolling)return;resetRaceSetup();refs.raceDialog.showModal()}
function closeRace(){cancelCharge();refs.raceDialog.close()}
function resetRaceSetup(){cancelCharge();race=null;raceBusy=false;refs.raceSetup.hidden=false;refs.raceGame.hidden=true;refs.raceDiceStage.innerHTML='';refs.raceDiceChoices.innerHTML='<span>Giữ nút tung để bắt đầu lượt.</span>';renderBeastChoices()}
function startBeastRace(beastId){
  const playerBeast=BEASTS.find(x=>x.id===beastId)||BEASTS[0],others=shuffle(BEASTS.filter(x=>x.id!==playerBeast.id)).slice(0,5);
  const racers=[{id:'player',name:'Ngươi',beast:playerBeast,distance:0,player:true},...others.map((b,i)=>({id:`ai${i}`,name:['Hắc Phong','Lưu Vân','Tử Điện','Bạch Sa','Kim Vũ'][i],beast:b,distance:0,player:false}))];
  race={round:1,racers,player:racers[0],dice:[],selected:new Set(),rerollsLeft:1,phase:'awaitRoll',log:[],finished:false};
  refs.raceSetup.hidden=true;refs.raceGame.hidden=false;refs.raceRoll.disabled=false;refs.raceReroll.disabled=true;refs.raceLock.disabled=true;refs.raceDiceStage.innerHTML='';
  addRaceLog(`Ngươi chọn ${playerBeast.icon} ${playerBeast.name}. ${playerBeast.passive}`);renderRace();
}
function getTerrain(){const lead=Math.max(...race.racers.map(r=>r.distance));return [...TERRAINS].reverse().find(t=>lead>=t.min)||TERRAINS[0]}
function renderRace(){
  if(!race)return;const terrain=getTerrain();refs.raceRound.textContent=`Lượt ${race.round}`;refs.raceTerrain.textContent=`${terrain.icon} ${terrain.name} · ${terrain.desc}`;refs.raceStats.textContent=`${Math.floor(race.player.distance)}m / 100m`;
  refs.raceTrack.innerHTML=race.racers.map(r=>`<div class="race-lane ${r.player?'player-lane':''}"><span class="race-lane-label">${r.player?'★ ':''}${r.name} · ${r.beast.name}</span><span class="race-runner" style="left:calc(${Math.min(96,Math.max(0,r.distance))}% - 22px)"><i>${r.beast.icon}</i><b>${Math.floor(r.distance)}m</b></span></div>`).join('');
  refs.raceLog.innerHTML=race.log.slice(-8).reverse().map(x=>`<div>${x}</div>`).join('');
}
async function startRaceDiceRoll(power=.5){
  if(!race||raceBusy||race.phase!=='awaitRoll')return;raceBusy=true;refs.raceRoll.disabled=true;refs.raceReroll.disabled=true;refs.raceLock.disabled=true;race.selected.clear();race.rerollsLeft=1;refs.raceDiceStage.innerHTML='';
  refs.raceComboInfo.innerHTML='<b>Xúc xắc đang lăn…</b>Lực ném không tác động tới xác suất.';
  const values=[];try{await rollWithCss(5,'together','d6',values,power,refs.raceDiceStage);race.dice=values;race.phase='choose';renderRaceDiceChoices();renderRaceEvaluation();refs.raceLock.disabled=false;refs.raceReroll.disabled=true;playResult()}finally{raceBusy=false}
}
function renderRaceDiceChoices(){
  if(!race?.dice.length)return;const maxSelect=race.player.beast.id==='chihu'?3:2;
  refs.raceDiceChoices.innerHTML=race.dice.map((v,i)=>`<button class="race-die-chip ${race.selected.has(i)?'selected':''}" data-rdie="${i}" ${race.rerollsLeft<1?'disabled':''}>${v}</button>`).join('')+`<span>Chọn tối đa ${maxSelect} viên để reroll.</span>`;
  refs.raceDiceChoices.querySelectorAll('[data-rdie]').forEach(btn=>btn.onclick=()=>{const idx=Number(btn.dataset.rdie);if(race.selected.has(idx))race.selected.delete(idx);else{if(race.selected.size>=maxSelect){showToast(`Linh Thú này chỉ reroll tối đa ${maxSelect} viên.`);return}race.selected.add(idx)}renderRaceDiceChoices();refs.raceReroll.disabled=race.rerollsLeft<1||race.selected.size===0});
}
async function rerollRaceSelection(){
  if(!race||raceBusy||race.phase!=='choose'||race.rerollsLeft<1||!race.selected.size)return;raceBusy=true;refs.raceReroll.disabled=true;refs.raceLock.disabled=true;
  const indices=[...race.selected];race.rerollsLeft--;race.selected.clear();const power=.72;
  try{
    refs.raceDiceStage.innerHTML='';const jobs=[];
    for(let i=0;i<5;i++){
      const die=createCssDie(i,5,'d6',refs.raceDiceStage);
      if(indices.includes(i))jobs.push(rollCssDie(die,i*45,power).then(v=>{race.dice[i]=v}));else setStaticD6(die,race.dice[i]);
    }
    await Promise.all(jobs);renderRaceDiceChoices();renderRaceEvaluation();refs.raceLock.disabled=false;
  }finally{raceBusy=false}
}
function renderRaceEvaluation(){const ev=evaluateRaceDice(race.dice,race.player,getTerrain());refs.raceComboInfo.innerHTML=`<b>Dự kiến +${ev.distance}m</b>${ev.tags.length?ev.tags.join(' · '):'Không có combo phụ.'}<br><span>Tổng xúc xắc ${race.dice.reduce((a,b)=>a+b,0)} · quãng cơ bản ${ev.base}m.</span>`}
async function commitRaceTurn(){
  if(!race||raceBusy||race.phase!=='choose')return;raceBusy=true;refs.raceLock.disabled=true;refs.raceReroll.disabled=true;race.phase='resolving';
  const terrain=getTerrain(),pev=evaluateRaceDice(race.dice,race.player,terrain);race.player.distance+=pev.distance;addRaceLog(`★ Ngươi: ${race.dice.join('-')} → +${pev.distance}m${pev.tags.length?` (${pev.tags.join(', ')})`:''}`);renderRace();await wait(450);
  for(const ai of race.racers.filter(r=>!r.player)){
    let dice=Array.from({length:5},()=>randomInt(1,6));const reroll=chooseAIReroll(dice,ai);for(const idx of reroll)dice[idx]=randomInt(1,6);const ev=evaluateRaceDice(dice,ai,terrain);ai.distance+=ev.distance;addRaceLog(`${ai.beast.icon} ${ai.name}: ${dice.join('-')} → +${ev.distance}m`);
  }
  renderRace();await wait(620);
  const finishers=race.racers.filter(r=>r.distance>=100).sort((a,b)=>b.distance-a.distance);
  if(finishers.length){finishRace(finishers);raceBusy=false;return}
  race.round++;race.dice=[];race.selected.clear();race.rerollsLeft=1;race.phase='awaitRoll';refs.raceDiceStage.innerHTML='';refs.raceDiceChoices.innerHTML='<span>Giữ nút tung để bắt đầu lượt tiếp theo.</span>';refs.raceComboInfo.innerHTML='<b>Lượt mới</b>Quan sát địa hình rồi quyết định giữ hay reroll.';refs.raceRoll.disabled=false;renderRace();raceBusy=false;
}
function evaluateRaceDice(values,racer,terrain){
  const sum=values.reduce((a,b)=>a+b,0),counts={};values.forEach(v=>counts[v]=(counts[v]||0)+1);const groups=Object.values(counts),hasPair=groups.some(c=>c>=2),hasTriple=groups.some(c=>c>=3),hasDoubleSix=(counts[6]||0)>=2;
  const unique=new Set(values),hasStraight=[1,2,3].every(x=>unique.has(x))||[4,5,6].every(x=>unique.has(x)),allEven=values.every(v=>v%2===0),allOdd=values.every(v=>v%2===1);
  let base=Math.max(4,Math.round(sum/2.15)),bonus=0,tags=[];
  if(hasPair){bonus+=2;tags.push('Song Kình +2')};if(hasTriple){bonus+=5;tags.push('Tam Liên +5')};if(hasStraight){bonus+=4;tags.push('Lưu Thủy Bộ +4')};if(allEven){bonus+=3;tags.push('Ổn Định +3')};if(allOdd){bonus+=4;tags.push('Cuồng Tốc +4')};if(hasDoubleSix){bonus+=3;tags.push('Song Lục Bạo Phát +3')};
  const b=racer.beast;
  if(b.id==='tianma'){const n=values.filter(v=>v>=5).length;if(n){bonus+=n;tags.push(`Thiên Mã +${n}`)}}
  if(b.id==='xuangui'){if(values.some(v=>v<=2)){bonus+=2;tags.push('Huyền Quy +2')}if(allEven){bonus+=1;tags.push('Quy Giáp +1')}}
  if(b.id==='baihu'&&racer.distance<Math.max(...race.racers.map(r=>r.distance))){bonus+=2;tags.push('Bạch Hổ truy kích +2')}
  if(b.id==='qingniao'&&hasStraight){bonus+=3;tags.push('Thanh Điểu phá phong +3')}
  if(b.id==='kuangniu'){if(hasPair){bonus+=2;tags.push('Cuồng Ngưu đôi +2')}if(hasTriple){bonus+=3;tags.push('Cuồng Ngưu tam +3')}}
  if(terrain.id==='curve'){if(hasStraight){bonus+=2;tags.push('Ôm cua +2')}if(base>=11){bonus-=1;tags.push('Quá tốc -1')}}
  if(terrain.id==='mud'&&allEven){bonus+=3;tags.push('Bám bùn +3')}
  if(terrain.id==='bridge'){if(hasStraight){bonus+=3;tags.push('Vượt cầu +3')}if(hasTriple){bonus+=1;tags.push('Trấn cầu +1')}}
  if(terrain.id==='sprint'&&values.filter(v=>v>=5).length>=2){bonus+=3;tags.push('Nước rút +3')}
  const ahead=race?.racers?.filter(r=>r!==racer&&r.distance>racer.distance).sort((a,b)=>a.distance-b.distance)[0];if(ahead&&ahead.distance-racer.distance<=6){bonus+=1;tags.push('Bám gió +1')}
  return{base,bonus,distance:Math.max(2,base+bonus),tags};
}
function chooseAIReroll(values,racer){
  const max=racer.beast.id==='chihu'?3:2,counts={};values.forEach(v=>counts[v]=(counts[v]||0)+1),unique=new Set(values),keep=new Set();
  for(let i=0;i<values.length;i++)if((counts[values[i]]||0)>=2)keep.add(i);
  const straight=[1,2,3].every(x=>unique.has(x))?[1,2,3]:[4,5,6].every(x=>unique.has(x))?[4,5,6]:null;if(straight)values.forEach((v,i)=>{if(straight.includes(v))keep.add(i)});
  return values.map((v,i)=>({v,i})).filter(x=>!keep.has(x.i)).sort((a,b)=>a.v-b.v).slice(0,max).filter(x=>x.v<=3).map(x=>x.i);
}
function finishRace(finishers){
  race.finished=true;race.phase='finished';const winner=finishers[0],won=winner.player;raceStats.races++;if(won)raceStats.wins++;if(won&&(raceStats.bestRound==null||race.round<raceStats.bestRound))raceStats.bestRound=race.round;save(RACE_KEY,raceStats);
  refs.raceRoll.disabled=true;refs.raceReroll.disabled=true;refs.raceLock.disabled=true;
  refs.raceComboInfo.innerHTML=`<div class="race-finish"><h3>${won?'🏆 NGƯƠI ĐOẠT QUÁN QUÂN':'🏁 '+winner.name+' VỀ NHẤT'}</h3><p>${winner.beast.icon} ${winner.beast.name} cán đích ${Math.floor(winner.distance)}m ở lượt ${race.round}. Thành tích: ${raceStats.wins}/${raceStats.races} lần thắng${raceStats.bestRound?` · nhanh nhất ${raceStats.bestRound} lượt`:''}.</p></div>`;
  addRaceLog(won?'Đại Hội Linh Thú gọi tên ngươi.':'Hẹn lần sau phục thù.');renderRace();
}
function addRaceLog(msg){if(!race)return;race.log.push(`L${race.round} · ${msg}`);race.log=race.log.slice(-20);refs.raceLog.innerHTML=race.log.slice(-8).reverse().map(x=>`<div>${x}</div>`).join('')}

function randomInt(min,max){const range=max-min+1,limit=Math.floor(0x100000000/range)*range,a=new Uint32Array(1);do{crypto.getRandomValues(a)}while(a[0]>=limit);return min+(a[0]%range)}
function shuffle(arr){const a=[...arr];for(let i=a.length-1;i>0;i--){const j=randomInt(0,i);[a[i],a[j]]=[a[j],a[i]]}return a}
function playTone(freq,duration,gain){if(!settings.sound)return;try{audio=audio||new(window.AudioContext||window.webkitAudioContext)();const t=audio.currentTime,o=audio.createOscillator(),g=audio.createGain();o.frequency.value=freq;o.type='sine';g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(gain,t+.008);g.gain.exponentialRampToValueAtTime(.0001,t+duration);o.connect(g);g.connect(audio.destination);o.start(t);o.stop(t+duration+.02)}catch{}}
function playResult(){[520,660,820].forEach((f,i)=>setTimeout(()=>playTone(f,.14,.05),i*100))}
function syncSound(){refs.sound.textContent=settings.sound?'♪':'∅';refs.sound.classList.toggle('active',settings.sound)}
async function toggleFullscreen(){if(!document.fullscreenElement)await document.documentElement.requestFullscreen?.();else await document.exitFullscreen?.()}
function closeGame(){cancelCharge();d10Engine?.destroy();if(parent!==window)parent.postMessage({type:'dice-game-close'},'*');else location.href='../index.html'}
function showToast(s){clearTimeout(toastTimer);refs.toast.textContent=s;refs.toast.classList.add('show');toastTimer=setTimeout(()=>refs.toast.classList.remove('show'),2300)}
function load(k,f){try{const v=JSON.parse(localStorage.getItem(k));if(Array.isArray(f))return Array.isArray(v)?v:f;return v&&typeof v==='object'?{...f,...v}:f}catch{return f}}
function save(k,v){localStorage.setItem(k,JSON.stringify(v))}
function formatTime(v){return new Date(v).toLocaleTimeString('vi-VN',{hour:'2-digit',minute:'2-digit'})}
function wait(ms){return new Promise(r=>setTimeout(r,ms))}
