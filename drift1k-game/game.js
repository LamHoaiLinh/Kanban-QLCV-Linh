'use strict';

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d', { alpha: false });
ctx.imageSmoothingEnabled = false;

const hudEl = document.getElementById('hud');
const turnControlsEl = document.getElementById('turnControls');
const matchInfoEl = document.getElementById('matchInfo');
const startBtn = document.getElementById('startBtn');
const menuBtn = document.getElementById('menuBtn');
const overlayTitle = document.getElementById('overlayTitle');
const overlayCard = document.getElementById('overlayCard');
const centerStartWrap = document.getElementById('centerStartWrap');
const pauseBtn = document.getElementById('pauseBtn');
const resumeBtn = document.getElementById('resumeBtn');
const restartBtn = document.getElementById('restartBtn');
const modeButtons = [...document.querySelectorAll('.mode-btn')];

const playerModalBackdrop = document.getElementById('playerModalBackdrop');
const modalTitle = document.getElementById('modalTitle');
const modalKeyBadge = document.getElementById('modalKeyBadge');
const modalNameInput = document.getElementById('modalNameInput');
const modalPaletteGrid = document.getElementById('modalPaletteGrid');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalContinueBtn = document.getElementById('modalContinueBtn');
const modalRestartBtn = document.getElementById('modalRestartBtn');
const resetNamesBtn = document.getElementById('resetNamesBtn');

const WORLD = 128;
const RENDER_SCALE = canvas.width / WORLD;

const CFG = Object.freeze({
  BASE_SPEED: 1,
  TURN_STEP: 1 / 90,
  BASE_FUEL_DRAIN: 0.00083,
  LOW_FUEL_SPEED_FACTOR: 2,
  MAX_DRAIN_MULT: 3,
  PICKUP_RADIUS_SQ: 64,
  SPAWN_MIN_DISTANCE_SQ: 1024,
  DROP_START: 128,
  DROP_STEP: 4,
  TRAIL_MAX: 128,
  SPEED_GAIN: 0.125,
  FIXED_DT: 1 / 60,
  WARMUP_TIME_1: 20,
  WARMUP_TIME_2: 45
});

const MODE = Object.freeze({ SETUP: 'setup', PLAYING: 'playing', PAUSED: 'paused', GAMEOVER: 'gameover' });
const KEY_BINDINGS = [
  { key: 'z', label: 'Z' },
  { key: 'b', label: 'B' },
  { key: '.', label: '.' },
  { key: 'arrowdown', label: 'Arrow Down' }
];
const RANK_LABELS = ['HẠNG 1', 'HẠNG 2', 'HẠNG 3', 'HẠNG 4'];

const COLORS = Object.freeze({
  black: '#000000', grayTrail: '#5f574f', ground: '#a28879', grass: '#ffccaa', white: '#fff7f1', fuelA: '#000000', fuelB: '#ab5236', fuelAccent: '#c2c3c7'
});

const PALETTES = [
  { id: 'basic-sky', label: 'Sky', swatch: ['#29adff'], body: '#29adff', accent: '#9ed8ff', marker: '#ff004d', ui: '#29adff' },
  { id: 'basic-sun', label: 'Sun', swatch: ['#ffec27'], body: '#ffec27', accent: '#fff7a8', marker: '#ab5236', ui: '#ffec27' },
  { id: 'basic-lime', label: 'Lime', swatch: ['#00e436'], body: '#00e436', accent: '#87f5a8', marker: '#1d2b53', ui: '#00e436' },
  { id: 'basic-coral', label: 'Coral', swatch: ['#ff6b6b'], body: '#ff6b6b', accent: '#ffc3c3', marker: '#1d2b53', ui: '#ff6b6b' },
  { id: 'basic-violet', label: 'Violet', swatch: ['#8b5cf6'], body: '#8b5cf6', accent: '#d5c4ff', marker: '#ffec27', ui: '#8b5cf6' },
  { id: 'basic-pink', label: 'Pink', swatch: ['#ff77a8'], body: '#ff77a8', accent: '#ffd3e5', marker: '#1d2b53', ui: '#ff77a8' },
  { id: 'basic-orange', label: 'Orange', swatch: ['#ffa300'], body: '#ffa300', accent: '#ffd089', marker: '#1d2b53', ui: '#ffa300' },
  { id: 'basic-ice', label: 'Ice', swatch: ['#c2f0ff'], body: '#c2f0ff', accent: '#ffffff', marker: '#1d2b53', ui: '#9ddaf6' },
  { id: 'grad-sunset', label: 'Sunset', swatch: ['#ff7b00','#ff006e'], body: '#ff7b00', accent: '#ff006e', marker: '#fff1e8', ui: '#ff7b00' },
  { id: 'grad-ocean', label: 'Ocean', swatch: ['#00b4d8','#0077b6'], body: '#00b4d8', accent: '#0077b6', marker: '#caf0f8', ui: '#00b4d8' },
  { id: 'grad-forest', label: 'Forest', swatch: ['#80ed99','#2d6a4f'], body: '#80ed99', accent: '#2d6a4f', marker: '#fff7d6', ui: '#52b788' },
  { id: 'grad-lava', label: 'Lava', swatch: ['#ffbe0b','#fb5607'], body: '#ffbe0b', accent: '#fb5607', marker: '#1d2b53', ui: '#ffbe0b' },
  { id: 'grad-candy', label: 'Candy', swatch: ['#ff70a6','#ffd670'], body: '#ff70a6', accent: '#ffd670', marker: '#fff1e8', ui: '#ff70a6' },
  { id: 'grad-royal', label: 'Royal', swatch: ['#7b2cbf','#3a0ca3'], body: '#7b2cbf', accent: '#3a0ca3', marker: '#ffd166', ui: '#7b2cbf' },
  { id: 'grad-mint', label: 'Mint', swatch: ['#72efdd','#48bfe3'], body: '#72efdd', accent: '#48bfe3', marker: '#1d2b53', ui: '#48bfe3' },
  { id: 'grad-cyber', label: 'Cyber', swatch: ['#f72585','#4cc9f0'], body: '#f72585', accent: '#4cc9f0', marker: '#fff1e8', ui: '#4cc9f0' }
];

const DEFAULT_SETUP = [
  { name: 'Người 1', paletteId: 'basic-sky' },
  { name: 'Người 2', paletteId: 'basic-sun' },
  { name: 'Người 3', paletteId: 'grad-ocean' },
  { name: 'Người 4', paletteId: 'grad-sunset' }
];

const START_PRESETS = {
  1: [{ x: 64, y: 72, angle: 0, turnDir: 1 }],
  2: [{ x: 44, y: 72, angle: 0, turnDir: 1 }, { x: 84, y: 72, angle: 0, turnDir: -1 }],
  3: [{ x: 38, y: 92, angle: -0.08, turnDir: 1 }, { x: 90, y: 92, angle: 0.08, turnDir: -1 }, { x: 64, y: 38, angle: 0.5, turnDir: 1 }],
  4: [{ x: 30, y: 96, angle: -0.1, turnDir: 1 }, { x: 98, y: 96, angle: 0.1, turnDir: -1 }, { x: 30, y: 34, angle: 0.35, turnDir: -1 }, { x: 98, y: 34, angle: 0.65, turnDir: 1 }]
};

let selectedPlayerCount = 1;
let setupState = DEFAULT_SETUP.map(item => ({ ...item }));
let editingPlayerIndex = 0;
let screenMode = MODE.SETUP;
let players = [];
let pickups = [];
let grass = [];
let lastTime = performance.now();
let accumulator = 0;
let audioCtx = null;
let elapsedPlayTime = 0;
let resultLines = [];
let resultStartTime = 0;

function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }
function wrap(v) { v %= WORLD; return v < 0 ? v + WORLD : v; }
function distSq(x1, y1, x2, y2) { const dx = x1 - x2; const dy = y1 - y2; return dx * dx + dy * dy; }
function picoCos(turns) { return Math.cos(turns * Math.PI * 2); }
function picoSin(turns) { return -Math.sin(turns * Math.PI * 2); }
function rnd(max) { return Math.random() * max; }
function getPaletteById(id) { return PALETTES.find(p => p.id === id) || PALETTES[0]; }
function cssGradient(swatch) { return swatch.length === 1 ? swatch[0] : `linear-gradient(135deg, ${swatch[0]} 0%, ${swatch[1]} 100%)`; }
function activePlayersCount() { return players.filter(p => p.alive).length; }
function hexToRgba(hex, alpha) { const c = hex.replace('#',''); const full = c.length === 3 ? c.split('').map(x=>x+x).join('') : c; const num = parseInt(full,16); return `rgba(${(num>>16)&255},${(num>>8)&255},${num&255},${alpha})`; }
function escapeHtml(s) { return String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;'); }

function showOverlay(mode) {
  centerStartWrap.classList.remove('hidden');
  if (mode === 'setup') {
    overlayCard.classList.remove('result-panel');
    overlayTitle.textContent = 'DRIFT1K';
    overlayTitle.style.display = '';
    menuBtn.style.display = 'none';
    startBtn.style.display = '';
    startBtn.textContent = 'BẮT ĐẦU';
  } else if (mode === 'result') {
    overlayCard.classList.add('result-panel');
    overlayTitle.style.display = 'none';
    menuBtn.style.display = '';
    startBtn.style.display = '';
    startBtn.textContent = 'CHƠI LẠI';
  }
}
function hideOverlay() { centerStartWrap.classList.add('hidden'); }

function beep(freq = 440, duration = 0.035, volume = 0.025) {
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator(); const gain = audioCtx.createGain();
    osc.type = 'square'; osc.frequency.value = freq; gain.gain.value = volume;
    osc.connect(gain); gain.connect(audioCtx.destination);
    const t = audioCtx.currentTime; osc.start(t); osc.stop(t + duration);
  } catch (_) {}
}

function generateBackground() {
  grass = [];
  for (let gx = 0; gx < 4; gx++) for (let gy = 0; gy < 4; gy++) grass.push({ x: gx * 32 + rnd(32), y: gy * 32 + rnd(32) });
}

function createPlayerFromSetup(index, count) {
  const cfg = setupState[index]; const palette = getPaletteById(cfg.paletteId); const preset = START_PRESETS[count][index];
  return {
    id:index+1,
    key:KEY_BINDINGS[index].key,
    keyLabel:KEY_BINDINGS[index].label,
    name:(cfg.name||`Người ${index+1}`).trim()||`Người ${index+1}`,
    palette, x:preset.x, y:preset.y, angle:preset.angle, turnDir:preset.turnDir,
    speed:CFG.BASE_SPEED, speedMult:1, trail:[], score:0, fuelDisplay:1, fuelTarget:1,
    alive:true, eliminatedAt:null
  };
}

function resetSetupState() {
  setupState = DEFAULT_SETUP.map(item => ({ ...item }));
  editingPlayerIndex = 0;
  renderHud(); renderTurnButtons();
  if (playerModalBackdrop.classList.contains('show')) openPlayerModal(0);
}
function setSelectedPlayerCount(count) {
  selectedPlayerCount = count;
  if (editingPlayerIndex >= count) editingPlayerIndex = 0;
  modeButtons.forEach(btn => btn.classList.toggle('active', Number(btn.dataset.count) === count));
  renderHud(); renderTurnButtons();
  if (screenMode === MODE.SETUP) matchInfoEl.textContent = 'Chưa bắt đầu';
}
function isPaletteTaken(paletteId, currentIndex) { for (let i = 0; i < selectedPlayerCount; i++) if (i !== currentIndex && setupState[i].paletteId === paletteId) return true; return false; }
function getEditablePlayerCount() { return Math.max(selectedPlayerCount, players.length); }
function applySetupToActivePlayers() {
  if (!players.length) return;
  const count = Math.min(players.length, setupState.length);
  for (let i = 0; i < count; i++) {
    if (!players[i]) continue;
    players[i].name = (setupState[i].name || `Người ${i + 1}`).trim() || `Người ${i + 1}`;
    players[i].palette = getPaletteById(setupState[i].paletteId);
  }
  renderHud();
  renderTurnButtons();
}
function pickPalette(playerIndex, paletteId) {
  if (isPaletteTaken(paletteId, playerIndex)) return;
  setupState[playerIndex].paletteId = paletteId;
  applySetupToActivePlayers();
  renderHud();
  renderTurnButtons();
  if (playerModalBackdrop.classList.contains('show')) openPlayerModal(playerIndex);
}

function desiredPickupCount() { return activePlayersCount() > 2 ? 2 : 1; }
function spawnSinglePickup() {
  let x, y, good;
  do {
    x = rnd(96) + 16; y = rnd(64) + 32; good = true;
    for (const p of players) if (p.alive && distSq(p.x, p.y, x, y) <= CFG.SPAWN_MIN_DISTANCE_SQ) { good = false; break; }
    if (good) for (const pk of pickups) if (distSq(pk.x, pk.y, x, y) <= CFG.SPAWN_MIN_DISTANCE_SQ * 0.65) { good = false; break; }
  } while (!good);
  pickups.push({ x, y, drop: CFG.DROP_START });
}
function ensurePickupCount() { const target = desiredPickupCount(); while (pickups.length < target) spawnSinglePickup(); while (pickups.length > target) pickups.pop(); }

function startGame() {
  players = [];
  for (let i = 0; i < selectedPlayerCount; i++) players.push(createPlayerFromSetup(i, selectedPlayerCount));
  elapsedPlayTime = 0;
  resultLines = [];
  resultStartTime = 0;
  pickups = [];
  screenMode = MODE.PLAYING;
  generateBackground();
  ensurePickupCount();
  renderHud(); renderTurnButtons();
  matchInfoEl.textContent = `${selectedPlayerCount} người`;
  hideOverlay();
  closePlayerModal();
  canvas.focus();
}
function pauseGame() { if (screenMode !== MODE.PLAYING) return; screenMode = MODE.PAUSED; }
function resumeGame() { if (screenMode !== MODE.PAUSED) return; screenMode = MODE.PLAYING; }
function restartGame() { startGame(); }
function backToSetup() {
  screenMode = MODE.SETUP;
  players = [];
  pickups = [];
  resultLines = [];
  renderHud(); renderTurnButtons();
  matchInfoEl.textContent = 'Chưa bắt đầu';
  showOverlay('setup');
}

function getWarmupDrainFactor(player) { if (elapsedPlayTime < CFG.WARMUP_TIME_1 || player.score < 2) return 0.58; if (elapsedPlayTime < CFG.WARMUP_TIME_2 || player.score < 4) return 0.78; return 1; }
function toggleTurn(player) { if (!player || !player.alive || screenMode !== MODE.PLAYING) return; player.turnDir = -player.turnDir; beep(180, 0.02, 0.016); }
function updatePlayer(player) {
  if (!player || !player.alive) return;
  player.fuelDisplay += (player.fuelTarget - player.fuelDisplay) * 0.125;
  const drain = CFG.BASE_FUEL_DRAIN * getWarmupDrainFactor(player);
  player.fuelTarget = Math.max(0, player.fuelTarget - drain * Math.min(CFG.MAX_DRAIN_MULT, player.speedMult));
  if (player.fuelDisplay < 0.00005 && player.fuelTarget === 0) {
    player.fuelDisplay = 0;
    player.alive = false;
    player.speed = 0;
    player.eliminatedAt = elapsedPlayTime;
    ensurePickupCount();
    beep(110, 0.08, 0.02);
    return;
  }
  player.speed = player.speedMult * Math.min(1, player.fuelDisplay * CFG.LOW_FUEL_SPEED_FACTOR);
  player.angle += player.turnDir * CFG.TURN_STEP * Math.min(1, player.fuelDisplay * CFG.LOW_FUEL_SPEED_FACTOR);
  const fx = picoCos(player.angle), fy = picoSin(player.angle);
  player.x = wrap(player.x + fx * player.speed); player.y = wrap(player.y + fy * player.speed);
  player.trail.push({ lx: player.x - fx * 5 - fy * 3, ly: player.y - fy * 5 + fx * 3, rx: player.x - fx * 5 + fy * 3, ry: player.y - fy * 5 - fx * 3 });
  if (player.trail.length > CFG.TRAIL_MAX) player.trail.shift();
}
function awardPickup(player) { player.score += 1; player.speedMult += CFG.SPEED_GAIN; player.fuelTarget = 1; beep(650,0.05,0.035); setTimeout(() => beep(900,0.04,0.025),25); }
function checkPickups() {
  for (let i = pickups.length - 1; i >= 0; i--) {
    const pk = pickups[i]; if (pk.drop > 0) continue;
    const contenders = players.filter(p => p.alive && distSq(p.x,p.y,pk.x,pk.y) < CFG.PICKUP_RADIUS_SQ); if (!contenders.length) continue;
    let best = Infinity; for (const p of contenders) best = Math.min(best, distSq(p.x,p.y,pk.x,pk.y));
    const winners = contenders.filter(p => Math.abs(distSq(p.x,p.y,pk.x,pk.y) - best) < 1e-9); winners.forEach(awardPickup);
    pickups.splice(i,1); ensurePickupCount();
  }
}
function buildResultLines() {
  const ranked = [...players].sort((a, b) => {
    if (a.alive !== b.alive) return a.alive ? -1 : 1;
    const ta = a.alive ? Infinity : (a.eliminatedAt ?? 0);
    const tb = b.alive ? Infinity : (b.eliminatedAt ?? 0);
    if (tb !== ta) return tb - ta;
    return b.score - a.score;
  });
  return ranked.map((player, idx) => ({
    rank: RANK_LABELS[idx] || `HẠNG ${idx + 1}`,
    name: player.name,
    carColor: player.palette.label.toUpperCase(),
    color: player.palette.ui
  }));
}
function finishGame() {
  if (screenMode === MODE.GAMEOVER) return;
  const alive = players.filter(p => p.alive);
  if (alive.length) alive.forEach(p => { if (p.eliminatedAt == null) p.eliminatedAt = Number.POSITIVE_INFINITY; });
  screenMode = MODE.GAMEOVER;
  resultLines = buildResultLines();
  resultStartTime = performance.now();
  matchInfoEl.textContent = 'Kết thúc';
  showOverlay('result');
}
function checkGameOver() { if (players.length === 1) { if (!players[0].alive) finishGame(); return; } if (activePlayersCount() <= 1) finishGame(); }
function fixedUpdate() {
  if (screenMode !== MODE.PLAYING) return;
  elapsedPlayTime += CFG.FIXED_DT;
  pickups.forEach(pk => { pk.drop = Math.max(0, pk.drop - CFG.DROP_STEP); });
  for (const p of players) updatePlayer(p);
  checkPickups(); ensurePickupCount(); checkGameOver();
  matchInfoEl.textContent = `${activePlayersCount()} còn sống • ${pickups.length} pin`;
  renderHud();
}

function beginWorld() { ctx.setTransform(RENDER_SCALE, 0, 0, RENDER_SCALE, 0, 0); ctx.imageSmoothingEnabled = false; }
function pset(x,y,color){x=Math.round(x);y=Math.round(y);if(x<0||x>=WORLD||y<0||y>=WORLD)return;ctx.fillStyle=color;ctx.fillRect(x,y,1,1)}
function rectfill(x1,y1,x2,y2,color){x1=Math.round(x1);y1=Math.round(y1);x2=Math.round(x2);y2=Math.round(y2);if(x2<x1)[x1,x2]=[x2,x1];if(y2<y1)[y1,y2]=[y2,y1];ctx.fillStyle=color;ctx.fillRect(x1,y1,x2-x1+1,y2-y1+1)}
function line(x0,y0,x1,y1,color){x0=Math.round(x0);y0=Math.round(y0);x1=Math.round(x1);y1=Math.round(y1);let dx=Math.abs(x1-x0),sx=x0<x1?1:-1,dy=-Math.abs(y1-y0),sy=y0<y1?1:-1,err=dx+dy;while(true){pset(x0,y0,color);if(x0===x1&&y0===y1)break;const e2=2*err;if(e2>=dy){err+=dy;x0+=sx}if(e2<=dx){err+=dx;y0+=sy}}}
function rect(x1,y1,x2,y2,color){line(x1,y1,x2,y1,color);line(x2,y1,x2,y2,color);line(x2,y2,x1,y2,color);line(x1,y2,x1,y1,color)}
function circfill(cx,cy,r,color){const minX=Math.floor(cx-r),maxX=Math.ceil(cx+r),minY=Math.floor(cy-r),maxY=Math.ceil(cy+r),rr=(r+0.2)*(r+0.2);ctx.fillStyle=color;for(let y=minY;y<=maxY;y++)for(let x=minX;x<=maxX;x++){const dx=x-cx,dy=y-cy;if(dx*dx+dy*dy<=rr&&x>=0&&x<WORLD&&y>=0&&y<WORLD)ctx.fillRect(x,y,1,1)}}
function text(str,x,y,color='#fff',align='left',size=6){ctx.save();ctx.fillStyle=color;ctx.font=`${size}px Consolas,"Courier New",monospace`;ctx.textBaseline='top';ctx.textAlign=align;ctx.fillText(str,x,y);ctx.restore()}
function drawGrassMark(x,y){pset(x,y+2,COLORS.grass);pset(x+1,y+1,COLORS.grass);pset(x+2,y+2,COLORS.grass);pset(x+1,y+3,COLORS.grass)}
function drawBackground(){ctx.fillStyle=COLORS.ground;ctx.fillRect(0,0,WORLD,WORLD);for(const g of grass)drawGrassMark(Math.round(g.x),Math.round(g.y))}
function drawTrail(player){for(let i=1;i<player.trail.length;i++){const a=player.trail[i-1],b=player.trail[i];if(Math.abs(b.lx-a.lx)<64&&Math.abs(b.ly-a.ly)<64)line(a.lx,a.ly,b.lx,b.ly,COLORS.grayTrail);if(Math.abs(b.rx-a.rx)<64&&Math.abs(b.ry-a.ry)<64)line(a.rx,a.ry,b.rx,b.ry,COLORS.grayTrail)}}
function localToWorld(player,wrapY,wrapX,lx,ly){return{x:player.x+wrapX*WORLD+lx*(-picoSin(player.angle))+ly*picoCos(player.angle),y:player.y+wrapY*WORLD+lx*picoCos(player.angle)+ly*picoSin(player.angle)}}
function drawCarInstance(player,wy,wx){let q=localToWorld(player,wy,wx,0,-2);circfill(q.x,q.y,5,'#5e5e5e');q=localToWorld(player,wy,wx,0,2);circfill(q.x,q.y,5,'#5e5e5e');for(const [lx,ly] of [[-3,4],[3,4],[-3,-4],[3,-4]]){q=localToWorld(player,wy,wx,lx,ly);circfill(q.x,q.y,2,COLORS.black)}for(let s=-2;s<=2;s++){q=localToWorld(player,wy,wx,-2,s*2.5);circfill(q.x,q.y-2,2.5,player.palette.body);q=localToWorld(player,wy,wx,2,s*2.5);circfill(q.x,q.y-2,2.5,player.palette.body);q=localToWorld(player,wy,wx,0,s*3);circfill(q.x,q.y-2,2.5,player.palette.body)}for(let s=-1.5;s<=1.5;s+=1.5){q=localToWorld(player,wy,wx,0,s*3.2);circfill(q.x,q.y-2,1.6,player.palette.accent)}q=localToWorld(player,wy,wx,0,-2.5);circfill(q.x,q.y-3,3,COLORS.black);q=localToWorld(player,wy,wx,0,2.5);circfill(q.x,q.y-3,3,COLORS.black);circfill(player.x+wx*WORLD,player.y+wy*WORLD-3,3,player.palette.body);const flame=localToWorld(player,wy,wx,0,-7-player.speed),tail=localToWorld(player,wy,wx,0,-7);line(tail.x,tail.y-2,flame.x,flame.y-8,COLORS.white);circfill(flame.x,flame.y-8,1.2,player.palette.marker)}
function drawPillBar(x,y,width,height,fillRatio,fillColor){
  const x2=x+width-1,y2=y+height-1;
  rectfill(x,y,x2,y2,'rgba(6,12,24,0.92)');
  rect(x,y,x2,y2,'#e8f2ff');
  const innerX=x+1,innerY=y+1,innerW=Math.max(0,width-2),innerH=Math.max(0,height-2);
  rectfill(innerX,innerY,innerX+innerW-1,innerY+innerH-1,'#111827');
  const fillW=Math.max(0,Math.round(innerW*clamp(fillRatio,0,1)));
  if(fillW>0) rectfill(innerX,innerY,innerX+fillW-1,innerY+innerH-1,fillColor);
}
function drawPlayerFloatingHud(player){
  const barWidth=22,barHeight=4;
  let x=Math.round(player.x-barWidth/2), y=Math.round(player.y-12);
  x=clamp(x,1,WORLD-barWidth-1);
  y=clamp(y,2,WORLD-10);
  drawPillBar(x,y,barWidth,barHeight,player.fuelDisplay,player.palette.body);
}
function drawPlayer(player){
  drawTrail(player);
  for(let wy=-1;wy<=1;wy++)for(let wx=-1;wx<=1;wx++)drawCarInstance(player,wy,wx);
  if(screenMode!==MODE.GAMEOVER && player.alive) drawPlayerFloatingHud(player);
  if(screenMode!==MODE.GAMEOVER && !player.alive) text('OUT',player.x,player.y-2,'#180202','center',6);
}
function drawPickup(pk){const x=pk.x,y=pk.y,d=pk.drop;circfill(x-3,y+1,2,'#6c5b4f');circfill(x,y+1,2,'#6c5b4f');circfill(x+3,y+1,2,'#6c5b4f');pset(x+4,y-d,COLORS.fuelAccent);rectfill(x-1,y-d-2,x+3,y-d+2,COLORS.fuelB);rectfill(x-3,y-d-2,x,y-d+2,COLORS.fuelA)}
function drawTypedResultBoard() {
  rectfill(12, 34, 116, 94, 'rgba(4,10,22,0.92)');
  rect(12, 34, 116, 94, '#dce8ff');
  text('BẢNG XẾP HẠNG', 64, 40, '#ffe082', 'center', 8);
  const elapsed = Math.max(0, performance.now() - resultStartTime);
  let remaining = Math.floor(elapsed / 26);
  let y = 52;
  for (const lineInfo of resultLines) {
    const prefix = `${lineInfo.rank}: `;
    const fullText = `${lineInfo.name} • XE ${lineInfo.carColor}`;
    const totalText = prefix + fullText;
    const showCount = Math.max(0, Math.min(totalText.length, remaining));
    const shownPrefix = prefix.slice(0, showCount);
    const restCount = Math.max(0, showCount - prefix.length);
    const shownRest = restCount > 0 ? fullText.slice(0, restCount) : '';
    rectfill(18, y + 1, 20, y + 3, lineInfo.color);
    rect(18, y + 1, 20, y + 3, '#ffffff');
    text(shownPrefix, 24, y, '#fff7f1', 'left', 5);
    if (shownRest) {
      const prefixOffset = shownPrefix.length * 3;
      text(shownRest, 24 + prefixOffset, y, lineInfo.color, 'left', 5);
    }
    remaining -= totalText.length;
    y += 9;
    if (remaining < 0) remaining = 0;
  }
}
function drawWorldUiOverlays(){
  if(screenMode===MODE.SETUP){rectfill(12,40,115,89,'rgba(5,10,20,0.78)');rect(12,40,115,89,'#d4e4ff');text('DRIFT1K',64,48,'#ffe082','center',11);return}
  if(screenMode===MODE.PAUSED){rectfill(18,44,110,82,'rgba(6,12,25,0.82)');rect(18,44,110,82,'#fff7f1');text('TẠM DỪNG',64,56,'#fff7f1','center',10);return}
  if(screenMode===MODE.GAMEOVER){drawTypedResultBoard()}
}
function render(){beginWorld();drawBackground();pickups.forEach(drawPickup);for(const p of players)drawPlayer(p);drawWorldUiOverlays()}

function renderHud() {
  const cards = [];
  const source = players.length ? players : setupState.slice(0, selectedPlayerCount).map((cfg, i) => ({ ...cfg, id:i+1, keyLabel:KEY_BINDINGS[i].label, palette:getPaletteById(cfg.paletteId), score:0, fuelDisplay:1, alive:true }));
  for (let i = 0; i < 4; i++) {
    const p = source[i];
    if (!p) { cards.push(`<button class="player-card inactive" disabled><div class="player-top"><div class="player-name">Trống</div><div class="player-score">—</div></div><div class="fuel-track"><div class="fuel-fill" style="width:0%"></div></div><div class="player-meta"><span>—</span><span>—</span></div></button>`); continue; }
    const fuel = Math.round(clamp((p.fuelDisplay ?? 1) * 100, 0, 100));
    const scoreText = players.length ? (p.alive ? `Điểm ${p.score}` : 'Bị loại') : p.palette.label;
    cards.push(`<button class="player-card ${players.length && !p.alive ? 'inactive' : ''}" data-player-index="${i}"><div class="player-top"><div class="player-name" style="color:${p.palette.ui}">${escapeHtml(p.name || `Người ${i+1}`)}</div><div class="player-score">${scoreText}</div></div><div class="fuel-track"><div class="fuel-fill" style="width:${fuel}%;background:${cssGradient(p.palette.swatch)}"></div></div><div class="player-meta"><span>${p.keyLabel}</span><span>${players.length ? `${fuel}% pin` : 'Sửa'}</span></div></button>`);
  }
  hudEl.innerHTML = cards.join('');
  hudEl.querySelectorAll('[data-player-index]').forEach(btn => btn.addEventListener('click', () => openPlayerModal(Number(btn.dataset.playerIndex))));
}

function renderTurnButtons() {
  const source = players.length ? players : setupState.slice(0, selectedPlayerCount).map((cfg, i) => ({ name: cfg.name || `Người ${i + 1}`, keyLabel: KEY_BINDINGS[i].label, palette: getPaletteById(cfg.paletteId), alive: true }));
  const list = [];
  for (let i = 0; i < 4; i++) {
    const p = source[i];
    if (!p) { list.push(`<button class="turn-btn" disabled>Chưa dùng<small>—</small></button>`); continue; }
    const disabled = !players.length || screenMode !== MODE.PLAYING || !players[i]?.alive ? 'disabled' : '';
    list.push(`<button class="turn-btn" data-player-index="${i}" ${disabled} style="border-color:${p.palette.ui};background:linear-gradient(180deg, ${hexToRgba(p.palette.ui, .28)}, rgba(12,22,40,.96))">${escapeHtml(p.name)}<small>${p.keyLabel}</small></button>`);
  }
  turnControlsEl.innerHTML = list.join('');
  turnControlsEl.querySelectorAll('.turn-btn[data-player-index]').forEach(btn => btn.addEventListener('pointerdown', e => { e.preventDefault(); const idx = Number(btn.dataset.playerIndex); if (players[idx]) toggleTurn(players[idx]); }));
}

function openPlayerModal(index) {
  if (index >= getEditablePlayerCount()) return;
  editingPlayerIndex = index;
  const cfg = setupState[index]; const palette = getPaletteById(cfg.paletteId);
  modalTitle.textContent = `Sửa Người ${index + 1}`;
  modalKeyBadge.textContent = `Phím: ${KEY_BINDINGS[index].label}`;
  modalNameInput.value = cfg.name;
  modalPaletteGrid.innerHTML = PALETTES.map(p => {
    const taken = isPaletteTaken(p.id, index); const selected = p.id === palette.id;
    return `<button type="button" class="swatch ${selected ? 'selected' : ''} ${taken ? 'taken' : ''}" data-palette-id="${p.id}" ${taken ? 'disabled' : ''} style="background:${cssGradient(p.swatch)}"><span class="tag">${p.label}</span></button>`;
  }).join('');
  modalPaletteGrid.querySelectorAll('.swatch').forEach(btn => btn.addEventListener('click', () => pickPalette(index, btn.dataset.paletteId)));
  modalContinueBtn.style.display = screenMode === MODE.PAUSED ? '' : 'none';
  modalRestartBtn.style.display = (screenMode === MODE.PAUSED || screenMode === MODE.PLAYING || screenMode === MODE.GAMEOVER) ? '' : 'none';
  playerModalBackdrop.classList.add('show');
  playerModalBackdrop.setAttribute('aria-hidden', 'false');
  setTimeout(() => modalNameInput.focus(), 0);
}
function closePlayerModal() { playerModalBackdrop.classList.remove('show'); playerModalBackdrop.setAttribute('aria-hidden', 'true'); }

function handleControlKey(key) { if (screenMode !== MODE.PLAYING) return false; const index = KEY_BINDINGS.findIndex(item => item.key === key); if (index < 0 || !players[index]) return false; toggleTurn(players[index]); return true; }

window.addEventListener('keydown', e => {
  if (e.repeat) return;
  if (playerModalBackdrop.classList.contains('show') && e.key === 'Escape') { closePlayerModal(); return; }
  const key = e.key.toLowerCase();
  if (handleControlKey(key)) { e.preventDefault(); return; }
  if (key === 'escape') { e.preventDefault(); if (screenMode === MODE.PLAYING) pauseGame(); else if (screenMode === MODE.PAUSED) resumeGame(); return; }
  if (key === 'enter' && screenMode !== MODE.PLAYING) { e.preventDefault(); restartGame(); }
});

modeButtons.forEach(btn => btn.addEventListener('click', () => setSelectedPlayerCount(Number(btn.dataset.count))));
startBtn.addEventListener('click', restartGame);
menuBtn.addEventListener('click', backToSetup);
pauseBtn.addEventListener('click', pauseGame);
resumeBtn.addEventListener('click', resumeGame);
restartBtn.addEventListener('click', restartGame);
modalCloseBtn.addEventListener('click', closePlayerModal);
modalContinueBtn.addEventListener('click', () => { applySetupToActivePlayers(); closePlayerModal(); if (screenMode === MODE.PAUSED) resumeGame(); });
modalRestartBtn.addEventListener('click', () => { applySetupToActivePlayers(); closePlayerModal(); restartGame(); });
resetNamesBtn.addEventListener('click', () => resetSetupState());
playerModalBackdrop.addEventListener('click', e => { if (e.target === playerModalBackdrop) closePlayerModal(); });
modalNameInput.addEventListener('input', () => { setupState[editingPlayerIndex].name = modalNameInput.value.slice(0, 16); applySetupToActivePlayers(); renderHud(); renderTurnButtons(); });
canvas.addEventListener('pointerdown', () => canvas.focus());
canvas.addEventListener('dblclick', () => { if (screenMode === MODE.PLAYING) pauseGame(); else if (screenMode === MODE.PAUSED) resumeGame(); });

function frame(now) {
  let dt = (now - lastTime) / 1000;
  lastTime = now;
  dt = Math.min(dt, 0.1);
  accumulator += dt;
  while (accumulator >= CFG.FIXED_DT) { fixedUpdate(); accumulator -= CFG.FIXED_DT; }
  render();
  renderTurnButtons();
  requestAnimationFrame(frame);
}
function bootstrap() {
  generateBackground();
  renderHud();
  renderTurnButtons();
  setSelectedPlayerCount(1);
  backToSetup();
  requestAnimationFrame(frame);
}
bootstrap();

window.DRIFT1K_DEBUG = {
  getState: () => ({ screenMode, players: players.map(p => ({ ...p, trail: [...p.trail] })), pickups: pickups.map(p => ({ ...p })), selectedPlayerCount, elapsedPlayTime, resultLines }),
  setSelectedPlayerCount, startGame, pauseGame, resumeGame, fixedUpdate, pressKey: key => handleControlKey(key.toLowerCase())
};
