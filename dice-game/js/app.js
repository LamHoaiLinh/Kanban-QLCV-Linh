const $=s=>document.querySelector(s);
const refs={
  stage:$('#diceStage'),count:$('#countRange'),out:$('#countOutput'),type:$('#dieTypeSelect'),minus:$('#minusBtn'),plus:$('#plusBtn'),
  roll:$('#rollBtn'),clear:$('#clearBtn'),modeSelect:$('#modeSelectBtn'),chargeFill:$('#chargeFill'),dialog:$('#modeDialog'),dialogCount:$('#dialogCount'),dialogType:$('#dialogDieType'),
  together:$('#togetherBtn'),sequence:$('#sequenceBtn'),mode:$('#modeLabel'),total:$('#totalLabel'),values:$('#valueList'),status:$('#statusText'),history:$('#historyList'),
  clearHistory:$('#clearHistoryBtn'),sound:$('#soundBtn'),fullscreen:$('#fullscreenBtn'),close:$('#closeDiceBtn'),toast:$('#toast'),
  combatMode:$('#combatModeBtn'),combatDialog:$('#combatDialog'),closeCombat:$('#closeCombatBtn'),combatSetup:$('#combatSetup'),combatGame:$('#combatGame'),combatSlotGrid:$('#combatSlotGrid'),
  combatMinusPlayer:$('#combatMinusPlayer'),combatPlusPlayer:$('#combatPlusPlayer'),combatPlayerCount:$('#combatPlayerCount'),combatRoundCount:$('#combatRoundCount'),combatStart:$('#combatStartBtn'),combatRestart:$('#combatRestartBtn'),combatHelp:$('#combatHelpBtn'),
  combatHelpOverlay:$('#combatHelpOverlay'),combatDontShowHelp:$('#combatDontShowHelp'),combatSkipHelp:$('#combatSkipHelp'),combatRoundLabel:$('#combatRoundLabel'),combatPhaseLabel:$('#combatPhaseLabel'),combatArena:$('#combatArena'),
  combatDiceStage:$('#combatDiceStage'),combatDiceSummary:$('#combatDiceSummary'),combatCurrentAvatar:$('#combatCurrentAvatar'),combatCurrentName:$('#combatCurrentName'),combatCurrentStats:$('#combatCurrentStats'),
  timingPanel:$('#timingPanel'),timingBar:$('#timingBar'),timingMarker:$('#timingMarker'),timingScoreText:$('#timingScoreText'),timingStop:$('#timingStopBtn'),targetPanel:$('#targetPanel'),targetHint:$('#targetHint'),fire:$('#fireBtn'),combatWait:$('#combatWaitPanel'),combatLog:$('#combatLog')
};
const SETTINGS_KEY='linh_dice_game_settings_v4';
const HISTORY_KEY='linh_dice_game_history_v2';
const COMBAT_SETUP_KEY='linh_dice_combat_setup_v1';
const COMBAT_HELP_KEY='linh_dice_combat_help_hidden_v1';
const CHARGE_MAX_MS=1400,QUICK_TAP_POWER=.5,MIN_HOLD_MS=85;
let settings=load(SETTINGS_KEY,{count:3,sound:true,type:'d6',rollMode:'together'}),history=load(HISTORY_KEY,[]),rolling=false,audio=null,toastTimer=null,d10Engine=null,d10EnginePromise=null;
let chargeState=null,chargeRaf=0;
const FACE_ROT={1:['-18deg','0deg','0deg'],6:['-18deg','180deg','0deg'],3:['-18deg','-90deg','0deg'],4:['-18deg','90deg','0deg'],2:['-105deg','0deg','0deg'],5:['75deg','0deg','0deg']};

const FIGHTER_SKINS=[
  {id:'f01',name:'Bé Mây',gender:'Nữ',age:'7 tuổi',src:'assets/fighters/f01.svg'},
  {id:'f02',name:'Linh',gender:'Nữ',age:'13 tuổi',src:'assets/fighters/f02.svg'},
  {id:'f03',name:'An',gender:'Nữ',age:'20 tuổi',src:'assets/fighters/f03.svg'},
  {id:'f04',name:'Vy',gender:'Nữ',age:'31 tuổi',src:'assets/fighters/f04.svg'},
  {id:'f05',name:'Cô Mai',gender:'Nữ',age:'48 tuổi',src:'assets/fighters/f05.svg'},
  {id:'f06',name:'Bà Ngọc',gender:'Nữ',age:'67 tuổi',src:'assets/fighters/f06.svg'},
  {id:'m01',name:'Bé Tí',gender:'Nam',age:'8 tuổi',src:'assets/fighters/m01.svg'},
  {id:'m02',name:'Khang',gender:'Nam',age:'14 tuổi',src:'assets/fighters/m02.svg'},
  {id:'m03',name:'Nam',gender:'Nam',age:'21 tuổi',src:'assets/fighters/m03.svg'},
  {id:'m04',name:'Huy',gender:'Nam',age:'34 tuổi',src:'assets/fighters/m04.svg'},
  {id:'m05',name:'Chú Sơn',gender:'Nam',age:'50 tuổi',src:'assets/fighters/m05.svg'},
  {id:'m06',name:'Ông Minh',gender:'Nam',age:'69 tuổi',src:'assets/fighters/m06.svg'}
];
const COMBAT_MAX_HP=24,COMBAT_RESPAWN_HP=12;
const DEFAULT_COMBAT_SLOTS=[
  {name:'Sunny',kind:'human',skin:'f01'},
  {name:'Nít',kind:'human',skin:'m02'},
  {name:'Bố',kind:'human',skin:'m04'},
  {name:'Miu AI',kind:'ai',skin:'f03'},
  {name:'Tùng AI',kind:'ai',skin:'m03'},
  {name:'Mây AI',kind:'ai',skin:'f04'}
];
let combatSetupData=load(COMBAT_SETUP_KEY,{count:4,rounds:8,slots:DEFAULT_COMBAT_SLOTS});
if(!Array.isArray(combatSetupData.slots))combatSetupData.slots=DEFAULT_COMBAT_SLOTS.map(x=>({...x}));
while(combatSetupData.slots.length<6)combatSetupData.slots.push({...DEFAULT_COMBAT_SLOTS[combatSetupData.slots.length]});
let combat=null,combatBusy=false,timingRaf=0,targetTimer=0,targetAutoTimer=0;

init();
function init(){
  bind();
  refs.type.value=settings.type==='d10'?'d10':'d6';settings.rollMode=settings.rollMode==='sequence'?'sequence':'together';
  setCount(settings.count);syncSound();syncRollMode();renderHistory();renderEmpty();renderCombatSetup();
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
  refs.combatMode.onclick=openCombat;refs.closeCombat.onclick=closeCombat;refs.combatRestart.onclick=resetCombatSetup;refs.combatHelp.onclick=showCombatHelp;refs.combatSkipHelp.onclick=hideCombatHelp;
  refs.combatMinusPlayer.onclick=()=>setCombatPlayerCount((+refs.combatPlayerCount.value||4)-1);refs.combatPlusPlayer.onclick=()=>setCombatPlayerCount((+refs.combatPlayerCount.value||4)+1);
  refs.combatRoundCount.onchange=()=>{combatSetupData.rounds=+refs.combatRoundCount.value||8;saveCombatSetup()};refs.combatStart.onclick=startCombat;refs.timingStop.onclick=stopTimingForHuman;refs.fire.onclick=fireCurrentTarget;
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
  chargeState={target,btn,start:performance.now(),power:0};btn.classList.add('charging');
  refs.status.textContent='Đang tụ lực… thả tay để tung xúc xắc.';
  updateChargeFrame();
}
function updateChargeFrame(){
  if(!chargeState)return;
  const held=performance.now()-chargeState.start,power=Math.min(1,held/CHARGE_MAX_MS);chargeState.power=power;
  refs.chargeFill.style.width=`${Math.round(power*100)}%`;
  chargeRaf=requestAnimationFrame(updateChargeFrame);
}
function releaseCharge(e){
  if(!chargeState)return;
  if(e?.button!==undefined&&e.button!==0)return;
  e?.preventDefault?.();
  const state=chargeState;chargeState=null;cancelAnimationFrame(chargeRaf);state.btn.classList.remove('charging');
  const held=performance.now()-state.start,power=held<MIN_HOLD_MS?QUICK_TAP_POWER:Math.min(1,held/CHARGE_MAX_MS);
  refs.chargeFill.style.width='0%';
  startRoll(settings.rollMode,power);
}
function cancelCharge(){if(!chargeState)return;const state=chargeState;chargeState=null;cancelAnimationFrame(chargeRaf);state.btn.classList.remove('charging');refs.chargeFill.style.width='0%'}
function handleShortcuts(e){
  if(refs.combatDialog.open)return;
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
  if(!d10EnginePromise)d10EnginePromise=import('./d10-engine.js?v=7.0.0').then(async({D10AssetEngine})=>{const engine=new D10AssetEngine(refs.stage,{onSettle:value=>playTone(410+value*24,.09,.032)});await engine.init();d10Engine=engine;return engine}).finally(()=>{d10EnginePromise=null});
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
function toggleControls(disabled){[refs.count,refs.type,refs.minus,refs.plus,refs.modeSelect,refs.clear,refs.combatMode].forEach(el=>el.disabled=disabled);refs.roll.disabled=disabled}

/* ======================== ĐẤU TRƯỜNG CHẴN LẺ ======================== */
function saveCombatSetup(){
  combatSetupData.count=Math.max(2,Math.min(6,+refs.combatPlayerCount.value||combatSetupData.count||4));
  combatSetupData.rounds=+refs.combatRoundCount.value||8;
  const cards=[...refs.combatSlotGrid.querySelectorAll('.combat-slot-card')];
  if(cards.length)cards.forEach((card,i)=>{combatSetupData.slots[i]={name:card.querySelector('[data-role="name"]').value.trim()||`Slot ${i+1}`,kind:card.querySelector('[data-role="kind"]').value,skin:card.querySelector('[data-role="skin"]').value}});
  save(COMBAT_SETUP_KEY,combatSetupData);
}
function renderCombatSetup(){
  const count=Math.max(2,Math.min(6,+combatSetupData.count||4));refs.combatPlayerCount.value=count;refs.combatPlayerCount.textContent=count;refs.combatRoundCount.value=String(combatSetupData.rounds||8);
  refs.combatSlotGrid.innerHTML=Array.from({length:6},(_,i)=>{
    const cfg={...DEFAULT_COMBAT_SLOTS[i],...(combatSetupData.slots[i]||{})},skin=getSkin(cfg.skin),enabled=i<count;
    return `<article class="combat-slot-card ${enabled?'':'slot-hidden'}" data-slot="${i}">
      <div class="slot-label">SLOT ${i+1}</div><img data-role="preview" src="${skin.src}" alt="${escapeHTML(skin.name)}">
      <label><span>Tên</span><input data-role="name" maxlength="14" value="${escapeHTML(cfg.name)}"></label>
      <label><span>Điều khiển</span><select data-role="kind"><option value="human" ${cfg.kind==='human'?'selected':''}>Người chơi</option><option value="ai" ${cfg.kind==='ai'?'selected':''}>AI</option></select></label>
      <label><span>Nhân vật</span><select data-role="skin">${FIGHTER_SKINS.map(x=>`<option value="${x.id}" ${x.id===skin.id?'selected':''}>${x.name} · ${x.gender} · ${x.age}</option>`).join('')}</select></label>
    </article>`;
  }).join('');
  refs.combatSlotGrid.querySelectorAll('.combat-slot-card').forEach(card=>{
    const sel=card.querySelector('[data-role="skin"]'),preview=card.querySelector('[data-role="preview"]');
    sel.onchange=()=>{preview.src=getSkin(sel.value).src;saveCombatSetup()};
    card.querySelector('[data-role="name"]').onchange=saveCombatSetup;card.querySelector('[data-role="kind"]').onchange=saveCombatSetup;
  });
}
function setCombatPlayerCount(v){combatSetupData.count=Math.max(2,Math.min(6,+v||4));refs.combatPlayerCount.value=combatSetupData.count;refs.combatPlayerCount.textContent=combatSetupData.count;renderCombatSetup();saveCombatSetup()}
function getSkin(id){return FIGHTER_SKINS.find(x=>x.id===id)||FIGHTER_SKINS[0]}
function openCombat(){if(rolling)return;resetCombatSetup();refs.combatDialog.showModal();if(localStorage.getItem(COMBAT_HELP_KEY)!=='1')showCombatHelp()}
function closeCombat(){clearCombatTimers();refs.combatDialog.close()}
function resetCombatSetup(){clearCombatTimers();combat=null;combatBusy=false;refs.combatSetup.hidden=false;refs.combatGame.hidden=true;refs.combatArena.innerHTML='';refs.combatDiceStage.innerHTML='';refs.combatDiceSummary.innerHTML='<span>Chưa tung.</span>';renderCombatSetup()}
function showCombatHelp(){refs.combatHelpOverlay.hidden=false;refs.combatDontShowHelp.checked=localStorage.getItem(COMBAT_HELP_KEY)==='1'}
function hideCombatHelp(){if(refs.combatDontShowHelp.checked)localStorage.setItem(COMBAT_HELP_KEY,'1');refs.combatHelpOverlay.hidden=true}
function clearCombatTimers(){cancelAnimationFrame(timingRaf);timingRaf=0;clearInterval(targetTimer);clearTimeout(targetAutoTimer);targetTimer=0;targetAutoTimer=0}
function startCombat(){
  if(combatBusy)return;saveCombatSetup();const count=combatSetupData.count,rounds=+refs.combatRoundCount.value||8;
  const fighters=Array.from({length:count},(_,i)=>{const cfg=combatSetupData.slots[i],skin=getSkin(cfg.skin);return{id:`p${i}`,slot:i+1,name:cfg.name||`Slot ${i+1}`,kind:cfg.kind||'human',skin,hp:COMBAT_MAX_HP,maxHp:COMBAT_MAX_HP,shield:0,attack:0,dice:[],stars:0,down:false}});
  combat={round:1,maxRounds:rounds,fighters,turnIndex:0,phase:'rolling',current:null,timingScore:0,timingPos:0,targetIndex:0,targetCandidates:[],log:[]};
  refs.combatSetup.hidden=true;refs.combatGame.hidden=false;refs.combatHelpOverlay.hidden=true;renderCombatArena();addCombatLog('Trận đấu bắt đầu. Mỗi người luôn tung 2 D6.');beginCombatRound();
}
async function beginCombatRound(){
  if(!combat||combatBusy)return;combatBusy=true;clearCombatTimers();combat.phase='rolling';refs.timingPanel.hidden=true;refs.targetPanel.hidden=true;refs.combatWait.hidden=false;refs.combatWait.innerHTML='<b>🎲 TUNG ĐỒNG THỜI!</b><span>Mỗi đấu thủ 2 viên. Lẻ đỏ = Công, chẵn xanh = Khiên.</span>';refs.combatRoundLabel.textContent=`Vòng ${combat.round}/${combat.maxRounds}`;refs.combatPhaseLabel.textContent='Tất cả xúc xắc đang lăn…';
  for(const f of combat.fighters){if(f.down){f.down=false;f.hp=COMBAT_RESPAWN_HP;addCombatLog(`${f.name} trở lại với ❤️ ${COMBAT_RESPAWN_HP}.`)}f.shield=0;f.attack=0;f.dice=[]}
  renderCombatArena();refs.combatDiceStage.innerHTML='';const results=[];playTone(170,.16,.055);
  try{await rollWithCss(combat.fighters.length*2,'together','d6',results,.72,refs.combatDiceStage)}catch(e){console.error(e);for(let i=0;i<combat.fighters.length*2;i++)results[i]=randomInt(1,6)}
  combat.fighters.forEach((f,i)=>{f.dice=[results[i*2],results[i*2+1]];f.attack=f.dice.filter(v=>v%2===1).reduce((a,b)=>a+b,0);f.shield=f.dice.filter(v=>v%2===0).reduce((a,b)=>a+b,0)});
  renderCombatDiceSummary();renderCombatArena();playResult();combat.turnIndex=0;combatBusy=false;await wait(450);beginCombatTurn();
}
function renderCombatDiceSummary(){
  refs.combatDiceSummary.innerHTML=combat.fighters.map(f=>`<div class="combat-dice-row"><b>${escapeHTML(f.name)}</b><span>${f.dice.map(v=>`<i class="combat-result-die ${v%2?'odd':'even'}">${v}</i>`).join('')}</span><small>🔴 ${f.attack} · 🛡️ ${f.shield}</small></div>`).join('')
}
function arenaPosition(i,n){const angle=(-90+i*(360/n))*Math.PI/180,rx=n>=5?38:36,ry=n>=5?36:34;return{x:50+Math.cos(angle)*rx,y:50+Math.sin(angle)*ry}}
function renderCombatArena(){
  if(!combat)return;const n=combat.fighters.length;
  refs.combatArena.innerHTML='<div class="arena-center-mark">DICE<br>ARENA</div>'+combat.fighters.map((f,i)=>{const pos=arenaPosition(i,n),mirror=pos.x>52?'mirror':'';return `<div id="fighter-${f.id}" class="combat-fighter ${f.down?'down':''}" style="left:${pos.x}%;top:${pos.y}%" data-id="${f.id}">
    <div class="fighter-status"><strong>${escapeHTML(f.name)}</strong><span class="fighter-icons"><i>❤️ ${f.hp}</i><i>🛡️ ${f.shield}</i><i>⭐ ${f.stars}</i></span><span class="fighter-dice">${f.dice.map(v=>`<i class="${v%2?'odd':'even'}">${v}</i>`).join('')}</span></div>
    <img class="fighter-avatar ${mirror}" src="${f.skin.src}" alt="${escapeHTML(f.name)}"><div class="fighter-ground"></div><div class="target-light"></div><div class="fighter-float"></div>
  </div>`}).join('');
}
function updateCombatFighter(f){
  const el=document.getElementById(`fighter-${f.id}`);if(!el)return;const icons=el.querySelector('.fighter-icons');if(icons)icons.innerHTML=`<i>❤️ ${Math.max(0,f.hp)}</i><i>🛡️ ${Math.max(0,f.shield)}</i><i>⭐ ${f.stars}</i>`;el.classList.toggle('down',f.down)
}
function setCombatActive(shooter,target=null){
  refs.combatArena.querySelectorAll('.combat-fighter').forEach(el=>{el.classList.toggle('active-turn',el.dataset.id===shooter?.id);el.classList.toggle('targeted',el.dataset.id===target?.id)});
}
async function beginCombatTurn(){
  if(!combat||combatBusy)return;clearCombatTimers();
  while(combat.turnIndex<combat.fighters.length&&combat.fighters[combat.turnIndex].down)combat.turnIndex++;
  if(combat.turnIndex>=combat.fighters.length){finishCombatRound();return}
  const f=combat.fighters[combat.turnIndex];combat.current=f;setCombatActive(f);refs.combatCurrentAvatar.src=f.skin.src;refs.combatCurrentName.textContent=f.name;refs.combatCurrentStats.textContent=`❤️ ${f.hp} · 🛡️ ${f.shield} · 🔴 ${f.attack}`;refs.combatPhaseLabel.textContent=`Lượt ${f.name}`;refs.timingScoreText.textContent='—';refs.targetPanel.hidden=true;
  if(f.attack<=0){refs.timingPanel.hidden=true;refs.combatWait.hidden=false;refs.combatWait.innerHTML=`<b>🛡️ ${f.name} toàn thủ</b><span>Không có xúc xắc đỏ, lượt bắn được bỏ qua.</span>`;playShieldSound();await wait(760);combat.turnIndex++;beginCombatTurn();return}
  refs.combatWait.hidden=true;startTiming(f)
}
function timingHalfCycleMs(attack){return Math.max(205,700-Math.min(10,attack)*48)}
function startTiming(f){
  combat.phase='timing';combat.timingScore=0;refs.timingPanel.hidden=false;refs.timingStop.disabled=f.kind==='ai';refs.targetPanel.hidden=true;refs.timingScoreText.textContent=`🔴 ${f.attack} · Canh tâm`;const half=timingHalfCycleMs(f.attack),start=performance.now();combat.timingStart=start;combat.timingHalf=half;let lastSide=-1;
  const frame=now=>{if(!combat||combat.phase!=='timing')return;const t=(now-start)/half,frac=t%2<=1?t%2:2-(t%2);combat.timingPos=frac*100;refs.timingMarker.style.left=`${combat.timingPos}%`;const side=Math.floor(t);if(side!==lastSide){lastSide=side;playTone(350+Math.min(10,f.attack)*12,.025,.009)}timingRaf=requestAnimationFrame(frame)};timingRaf=requestAnimationFrame(frame);
  if(f.kind==='ai'){const delay=randomInt(Math.max(280,half),Math.max(520,half*2));targetAutoTimer=setTimeout(()=>stopTiming(true),delay)}
}
function scoreTiming(pos){const dist=Math.abs(50-pos);if(dist<=2.5)return 100;return Math.max(5,Math.min(99,Math.round(100-dist*1.9)))}
function stopTimingForHuman(){if(!combat||combat.phase!=='timing'||combat.current?.kind==='ai')return;stopTiming(false)}
function stopTiming(isAI=false){
  if(!combat||combat.phase!=='timing')return;cancelAnimationFrame(timingRaf);timingRaf=0;clearTimeout(targetAutoTimer);let score=isAI?aiTimingScore(combat.current.attack):scoreTiming(combat.timingPos);combat.timingScore=score;const label=score===100?'PERFECT!':score>=82?'TUYỆT!':score>=62?'TỐT!':score>=35?'LỆCH':'TRƯỢT';refs.timingScoreText.textContent=`${label} · ${score}%`;refs.timingMarker.style.left=`${50+(100-score)/1.9*(Math.random()<.5?-1:1)}%`;if(score===100)playPerfectSound();else playTone(380+score*3,.11,.045);combat.phase='target';setTimeout(startTargetCycle,320)
}
function aiTimingScore(attack){let base=randomInt(38,91)-Math.max(0,attack-5)*2;if(randomInt(1,100)<=5)return 100;return Math.max(18,Math.min(96,base))}
function startTargetCycle(){
  if(!combat||combat.phase!=='target')return;refs.timingPanel.hidden=false;refs.targetPanel.hidden=false;const shooter=combat.current,candidates=combat.fighters.filter(x=>x!==shooter&&!x.down);combat.targetCandidates=candidates;if(!candidates.length){combat.turnIndex++;beginCombatTurn();return}combat.targetIndex=randomInt(0,candidates.length-1);highlightTarget();
  const interval=Math.max(95,Math.round((timingHalfCycleMs(shooter.attack))*.43));targetTimer=setInterval(()=>{combat.targetIndex=(combat.targetIndex+1)%candidates.length;highlightTarget();playTargetTick()},interval);refs.fire.disabled=shooter.kind==='ai';refs.targetHint.textContent=shooter.kind==='ai'?'AI đang khóa mục tiêu…':'Vòng sáng đang chạy…';
  if(shooter.kind==='ai')targetAutoTimer=setTimeout(()=>fireCurrentTarget(true),randomInt(720,1450));
  else targetAutoTimer=setTimeout(()=>fireCurrentTarget(false),4200)
}
function highlightTarget(){const target=combat.targetCandidates[combat.targetIndex];setCombatActive(combat.current,target);refs.targetHint.textContent=target?`⭕ ${target.name}`:'—'}
function fireCurrentTarget(auto=false){
  if(!combat||combat.phase!=='target'||combatBusy)return;clearInterval(targetTimer);clearTimeout(targetAutoTimer);targetTimer=0;targetAutoTimer=0;const shooter=combat.current,target=combat.targetCandidates[combat.targetIndex];if(!target)return;combat.phase='firing';refs.fire.disabled=true;refs.targetHint.textContent=`🎯 ${target.name}`;launchProjectile(shooter,target,combat.timingScore).then(()=>finishCombatTurn())
}
async function launchProjectile(shooter,target,score){
  combatBusy=true;const arena=refs.combatArena,sEl=document.getElementById(`fighter-${shooter.id}`),tEl=document.getElementById(`fighter-${target.id}`);if(!arena||!sEl||!tEl){combatBusy=false;return}
  const ar=arena.getBoundingClientRect(),sr=sEl.getBoundingClientRect(),tr=tEl.getBoundingClientRect(),sx=sr.left-ar.left+sr.width*.5,sy=sr.top-ar.top+sr.height*.58,tx=tr.left-ar.left+tr.width*.5,ty=tr.top-ar.top+tr.height*.55;
  const attack=shooter.attack,raw=Math.max(0,Math.round(attack*score/100)),perfect=score===100,size=Math.min(94,14+attack*3+score*.16+(perfect?22:0)),dx=tx-sx,dy=ty-sy,angle=Math.atan2(dy,dx)*180/Math.PI;
  const bullet=document.createElement('div');bullet.className=`combat-projectile ${perfect?'perfect-shot':''}`;bullet.style.cssText=`left:${sx}px;top:${sy}px;width:${size}px;height:${size}px;--trail:${Math.max(44,size*2.7)}px;transform:translate(-50%,-50%) rotate(${angle}deg)`;bullet.innerHTML='<i></i>';arena.appendChild(bullet);playShootSound(perfect,attack);
  const miss=raw<=0,mdx=miss?dx+(Math.random()<.5?-55:55):dx,mdy=miss?dy-45:dy;const anim=bullet.animate([{transform:`translate(-50%,-50%) rotate(${angle}deg) scale(.72)`},{transform:`translate(calc(-50% + ${mdx}px),calc(-50% + ${mdy}px)) rotate(${angle}deg) scale(1)`}],{duration:perfect?610:480,easing:'cubic-bezier(.18,.78,.22,1)',fill:'forwards'});await anim.finished.catch(()=>{});bullet.remove();
  if(miss){showFighterFloat(target,'💨 HỤT','miss');playTone(190,.12,.04);addCombatLog(`${shooter.name} bắn ${target.name} nhưng trượt.`);combatBusy=false;return}
  const blocked=Math.min(target.shield,raw),hpDamage=Math.max(0,raw-blocked);target.shield-=blocked;target.hp-=hpDamage;if(target.hp<=0){target.hp=0;target.down=true;shooter.stars+=2}else if(hpDamage>0)shooter.stars+=1;
  updateCombatFighter(target);updateCombatFighter(shooter);if(blocked>0)playShieldSound();if(hpDamage>0)playHitSound();showImpact(target,perfect);showFighterFloat(target,`${blocked?`🛡️ -${blocked}  `:''}${hpDamage?`❤️ -${hpDamage}`:'❤️ 0'}`,hpDamage?'damage':'shield');addCombatLog(`${shooter.name} → ${target.name}: ${score}% · 🛡️ -${blocked} · ❤️ -${hpDamage}${target.down?' · GỤC!':''}`);
  await wait(520);combatBusy=false
}
function showImpact(target,perfect){const el=document.getElementById(`fighter-${target.id}`);if(!el)return;el.classList.remove('impact','impact-perfect');void el.offsetWidth;el.classList.add(perfect?'impact-perfect':'impact');setTimeout(()=>el.classList.remove('impact','impact-perfect'),520)}
function showFighterFloat(target,text,type){const el=document.getElementById(`fighter-${target.id}`),box=el?.querySelector('.fighter-float');if(!box)return;box.textContent=text;box.className=`fighter-float show ${type||''}`;setTimeout(()=>box.className='fighter-float',900)}
function finishCombatTurn(){combat.turnIndex++;setTimeout(()=>{combatBusy=false;beginCombatTurn()},180)}
async function finishCombatRound(){
  combat.phase='roundEnd';setCombatActive(null);refs.timingPanel.hidden=true;refs.targetPanel.hidden=true;refs.combatWait.hidden=false;refs.combatWait.innerHTML='<b>✅ HẾT VÒNG</b><span>Khiên sẽ được tạo lại từ xúc xắc ở vòng kế tiếp.</span>';refs.combatPhaseLabel.textContent=`Kết thúc vòng ${combat.round}`;await wait(800);
  if(combat.round>=combat.maxRounds){finishCombat();return}combat.round++;beginCombatRound()
}
function finishCombat(){
  clearCombatTimers();combat.phase='finished';const ranked=[...combat.fighters].sort((a,b)=>b.stars-a.stars||b.hp-a.hp),winner=ranked[0];refs.combatPhaseLabel.textContent=`🏆 ${winner.name} thắng!`;refs.combatWait.hidden=false;refs.combatWait.innerHTML=`<b>🏆 ${escapeHTML(winner.name)} · ⭐ ${winner.stars}</b><span>Hết ${combat.maxRounds} vòng. Nếu bằng Sao, người còn nhiều Tim hơn xếp trên.</span>`;refs.combatLog.innerHTML=`<div class="combat-finish"><strong>🏆 ${escapeHTML(winner.name)} chiến thắng</strong>${ranked.map((f,i)=>`<span>${i+1}. ${escapeHTML(f.name)} · ⭐ ${f.stars} · ❤️ ${f.hp}</span>`).join('')}</div>`+refs.combatLog.innerHTML
}
function addCombatLog(msg){if(!combat)return;combat.log.push(`V${combat.round} · ${msg}`);combat.log=combat.log.slice(-24);refs.combatLog.innerHTML=combat.log.slice(-10).reverse().map(x=>`<div>${escapeHTML(x)}</div>`).join('')}
function playTargetTick(){playTone(640,.025,.012)}
function playShootSound(perfect=false,attack=1){playTone(perfect?980:760+attack*14,.07,perfect?.085:.055);setTimeout(()=>playTone(perfect?520:430,.10,perfect?.06:.038),55)}
function playShieldSound(){playTone(920,.055,.045);setTimeout(()=>playTone(680,.08,.035),45)}
function playHitSound(){playTone(180,.10,.055);setTimeout(()=>playTone(125,.13,.04),55)}
function playPerfectSound(){[740,960,1220].forEach((f,i)=>setTimeout(()=>playTone(f,.13,.06),i*70))}
function escapeHTML(v){return String(v??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}

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
