from __future__ import annotations

import sys
from pathlib import Path

if len(sys.argv) != 2:
    raise SystemExit("Usage: enhance_open_poker_ux.py <open-poker-root>")

root = Path(sys.argv[1]).resolve()

def replace_once(path: str, old: str, new: str) -> None:
    p = root / path
    s = p.read_text(encoding="utf-8")
    if old not in s:
        raise SystemExit(f"UX patch anchor not found in {path}: {old[:160]!r}")
    p.write_text(s.replace(old, new, 1), encoding="utf-8")

# ---------- main.ts: types + DOM refs ----------
replace_once(
    "src/main.ts",
    "import type { ConsumableCard, InputAction, JokerCard, PlayingCard, RunSnapshot, ScoreBreakdown, ShopItem } from './game/types';",
    "import type { ConsumableCard, InputAction, JokerCard, PlayingCard, PokerHandType, RunSnapshot, ScoreBreakdown, ShopItem } from './game/types';",
)

replace_once(
    "src/main.ts",
    "const btnSortStraight = $<HTMLButtonElement>('btn-sort-straight');\nconst btnSortFlush = $<HTMLButtonElement>('btn-sort-flush');",
    """const btnSortStraight = $<HTMLButtonElement>('btn-sort-straight');
const btnSortFlush = $<HTMLButtonElement>('btn-sort-flush');
const btnRunInfo = $<HTMLButtonElement>('btn-runinfo');
const btnOptions = $<HTMLButtonElement>('btn-options');
const runInfoOverlay = $('run-info-overlay');
const runInfoList = $('run-info-list');
const btnRunInfoBack = $<HTMLButtonElement>('btn-run-info-back');
const optionsOverlay = $('options-overlay');
const btnOptionsBack = $<HTMLButtonElement>('btn-options-back');
const btnOptionSfx = $<HTMLButtonElement>('btn-option-sfx');
const btnOptionMusic = $<HTMLButtonElement>('btn-option-music');
const btnOptionNewRun = $<HTMLButtonElement>('btn-option-new-run');
const btnOptionReturn = $<HTMLButtonElement>('btn-option-return');
const btnKanbanClose = $<HTMLButtonElement>('kanban-close-game');""",
)

# ---------- main.ts: restore the current run before assets/scene ----------
replace_once(
    "src/main.ts",
    "const state = new GameState();\nconst preloadResult = await preloadGameAssets(setSplashProgress, { cards: state.hand });",
    """type GamePanel = 'run-info' | 'options' | null;
type SortMode = 'straight' | 'flush' | null;

interface SavedKanbanRun {
  version: 1;
  snapshot: RunSnapshot;
  activeHandSort: SortMode;
  handPlayCounts: Partial<Record<PokerHandType, number>>;
  savedAt: number;
}

const RUN_SAVE_KEY = 'kanban-open-poker:run-v1';

function readSavedRun(): SavedKanbanRun | null {
  try {
    const raw = localStorage.getItem(RUN_SAVE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as SavedKanbanRun;
    return parsed?.version === 1 && parsed.snapshot ? parsed : null;
  } catch {
    return null;
  }
}

const restoredRun = readSavedRun();
const state = new GameState();
if (restoredRun?.snapshot) {
  try {
    state.reset(restoredRun.snapshot);
  } catch (err) {
    console.warn('[save] Could not restore Open Poker run:', err);
  }
}

const handPlayCounts = Object.fromEntries(
  (Object.keys(state.handLevels) as PokerHandType[]).map((type) => [type, 0]),
) as Record<PokerHandType, number>;
if (restoredRun?.handPlayCounts) {
  for (const type of Object.keys(handPlayCounts) as PokerHandType[]) {
    handPlayCounts[type] = Math.max(0, Number(restoredRun.handPlayCounts[type] ?? 0) || 0);
  }
}
let activeGamePanel: GamePanel = null;

function resetHandPlayCounts() {
  for (const type of Object.keys(handPlayCounts) as PokerHandType[]) handPlayCounts[type] = 0;
}

const preloadResult = await preloadGameAssets(setSplashProgress, { cards: state.hand });""",
)

replace_once(
    "src/main.ts",
    "let activeHandSort: 'straight' | 'flush' | null = null;",
    "let activeHandSort: SortMode = restoredRun?.activeHandSort ?? null;",
)

# ---------- main.ts: autosave helpers + sticky sort ----------
replace_once(
    "src/main.ts",
    """function syncHandOrder() {
  const ids = state.hand.map((c) => c.id);""",
    """function saveCurrentRun() {
  try {
    const payload: SavedKanbanRun = {
      version: 1,
      snapshot: state.toSnapshot(),
      activeHandSort,
      handPlayCounts: { ...handPlayCounts },
      savedAt: Date.now(),
    };
    localStorage.setItem(RUN_SAVE_KEY, JSON.stringify(payload));
  } catch (err) {
    console.warn('[save] Could not persist Open Poker run:', err);
  }
}

function saveAndReturnToKanban() {
  saveCurrentRun();
  if (window.parent !== window) {
    window.parent.postMessage({ type: 'open-poker-close' }, '*');
  }
}

function syncHandOrder() {
  const ids = state.hand.map((c) => c.id);""",
)

replace_once(
    "src/main.ts",
    """function sortHand(mode: 'straight' | 'flush') {
  if (isAnimating || state.phase !== 'play' || state.hand.length < 2) return;
  const sorted = mode === 'straight' ? sortHandForStraight(state.hand) : sortHandForFlush(state.hand);
  handOrder = sorted.map((card) => card.id);
  activeHandSort = mode;
  refreshSortButtons();
  audio.play('buttonClick');
  reflowHand(0.28);
}

function reflowHand(duration = 0.4) {
  syncHandOrder();""",
    """function applyActiveHandSort() {
  if (!activeHandSort || state.hand.length < 2) return;
  const sorted = activeHandSort === 'straight'
    ? sortHandForStraight(state.hand)
    : sortHandForFlush(state.hand);
  handOrder = sorted.map((card) => card.id);
}

function sortHand(mode: 'straight' | 'flush') {
  if (isAnimating || state.phase !== 'play' || state.hand.length < 2) return;
  activeHandSort = mode;
  applyActiveHandSort();
  refreshSortButtons();
  saveCurrentRun();
  audio.play('buttonClick');
  reflowHand(0.28);
}

function reflowHand(duration = 0.4) {
  applyActiveHandSort();
  syncHandOrder();""",
)

# Count only actual played hands (not previews/selections).
replace_once(
    "src/main.ts",
    """  if (!br) {
    suppressEndOverlay = false;
    suppressShopOverlay = false;
    isRoundScoreAnimating = false;
    frozenRoundScore = null;
    isAnimating = false;
    return;
  }

  // If this play ended the run""",
    """  if (!br) {
    suppressEndOverlay = false;
    suppressShopOverlay = false;
    isRoundScoreAnimating = false;
    frozenRoundScore = null;
    isAnimating = false;
    return;
  }

  handPlayCounts[br.hand.type] = (handPlayCounts[br.hand.type] ?? 0) + 1;
  saveCurrentRun();

  // If this play ended the run""",
)

# ---------- main.ts: Balatro-style Run Info + Options ----------
replace_once(
    "src/main.ts",
    """// ---------- Wire up ----------
function resetRun() {""",
    """const HAND_INFO_ORDER: PokerHandType[] = [
  'Flush Five',
  'Flush House',
  'Five of a Kind',
  'Straight Flush',
  'Four of a Kind',
  'Full House',
  'Flush',
  'Straight',
  'Three of a Kind',
  'Two Pair',
  'Pair',
  'High Card',
];

function renderRunInfo() {
  runInfoList.replaceChildren();
  for (const type of HAND_INFO_ORDER) {
    const level = state.handLevels[type];
    const row = document.createElement('div');
    row.className = 'run-info-row';

    const levelEl = document.createElement('span');
    levelEl.className = 'run-info-level';
    levelEl.textContent = `lvl.${level.level}`;

    const nameEl = document.createElement('strong');
    nameEl.className = 'run-info-name';
    nameEl.textContent = type;

    const scoreEl = document.createElement('span');
    scoreEl.className = 'run-info-score';

    const chipsEl = document.createElement('span');
    chipsEl.className = 'run-info-chips';
    chipsEl.textContent = level.chips.toLocaleString();

    const xEl = document.createElement('span');
    xEl.className = 'run-info-x';
    xEl.textContent = '×';

    const multEl = document.createElement('span');
    multEl.className = 'run-info-mult';
    multEl.textContent = level.mult.toLocaleString();

    scoreEl.append(chipsEl, xEl, multEl);

    const countEl = document.createElement('span');
    countEl.className = 'run-info-count';
    countEl.textContent = `# ${handPlayCounts[type] ?? 0}`;

    row.append(levelEl, nameEl, scoreEl, countEl);
    runInfoList.appendChild(row);
  }
}

function refreshOptionsControls() {
  btnOptionSfx.textContent = `Sound Effects: ${audio.isMuted() ? 'Off' : 'On'}`;
  btnOptionMusic.textContent = `Music: ${audio.isMusicMuted() ? 'Off' : 'On'}`;
}

function openGamePanel(panel: Exclude<GamePanel, null>) {
  activeGamePanel = panel;
  if (panel === 'run-info') {
    renderRunInfo();
    runInfoOverlay.classList.remove('hidden');
    optionsOverlay.classList.add('hidden');
  } else {
    refreshOptionsControls();
    optionsOverlay.classList.remove('hidden');
    runInfoOverlay.classList.add('hidden');
  }
  audio.play('buttonClick');
}

function closeGamePanel() {
  if (!activeGamePanel) return;
  runInfoOverlay.classList.add('hidden');
  optionsOverlay.classList.add('hidden');
  activeGamePanel = null;
  audio.play('buttonClick');
}

// ---------- Wire up ----------
function resetRun() {""",
)

replace_once(
    "src/main.ts",
    """  objects.clear();
  handOrder = [];
  activeHandSort = null;
  state.reset();""",
    """  objects.clear();
  handOrder = [];
  activeHandSort = null;
  resetHandPlayCounts();
  closeGamePanel();
  state.reset();""",
)

replace_once(
    "src/main.ts",
    """btnSortStraight.addEventListener('click', () => sortHand('straight'));
btnSortFlush.addEventListener('click', () => sortHand('flush'));

btnShopReroll.addEventListener""",
    """btnSortStraight.addEventListener('click', () => sortHand('straight'));
btnSortFlush.addEventListener('click', () => sortHand('flush'));
btnRunInfo.addEventListener('click', () => openGamePanel('run-info'));
btnOptions.addEventListener('click', () => openGamePanel('options'));
btnRunInfoBack.addEventListener('click', closeGamePanel);
btnOptionsBack.addEventListener('click', closeGamePanel);
btnKanbanClose.addEventListener('click', saveAndReturnToKanban);
btnOptionReturn.addEventListener('click', saveAndReturnToKanban);
btnOptionSfx.addEventListener('click', () => {
  audio.toggleMute();
  if (!audio.isMuted()) audio.play('buttonClick');
  refreshOptionsControls();
});
btnOptionMusic.addEventListener('click', () => {
  audio.toggleMusicMute();
  refreshOptionsControls();
});
btnOptionNewRun.addEventListener('click', () => {
  resetRun();
});

btnShopReroll.addEventListener""",
)

# ---------- main.ts: keyboard behavior ----------
replace_once(
    "src/main.ts",
    """const onKeyDown = (event: KeyboardEvent) => {
  if (!event.ctrlKey && !event.metaKey && !event.altKey) {
    if (event.code === 'KeyS') {
      event.preventDefault();
      sortHand('straight');
      return;
    }
    if (event.code === 'KeyF') {
      event.preventDefault();
      sortHand('flush');
      return;
    }
  }

  const action = actionFromKeyboard(event);""",
    """const onKeyDown = (event: KeyboardEvent) => {
  if (event.code === 'Escape') {
    event.preventDefault();
    event.stopPropagation();
    if (activeGamePanel) closeGamePanel();
    else saveAndReturnToKanban();
    return;
  }

  if (activeGamePanel) return;

  if (!event.repeat && (event.code === 'ControlLeft' || event.code === 'ControlRight')) {
    event.preventDefault();
    dispatchAction('play_hand');
    return;
  }

  if (!event.repeat && (event.code === 'ShiftLeft' || event.code === 'ShiftRight')) {
    event.preventDefault();
    dispatchAction('discard');
    return;
  }

  if (!event.ctrlKey && !event.metaKey && !event.altKey) {
    if (event.code === 'KeyS') {
      event.preventDefault();
      sortHand('straight');
      return;
    }
    if (event.code === 'KeyF') {
      event.preventDefault();
      sortHand('flush');
      return;
    }
  }

  const action = actionFromKeyboard(event);""",
)

replace_once(
    "src/main.ts",
    """  onReorder: (ids) => {
    handOrder = ids;
    activeHandSort = null;
    refreshSortButtons();
  },""",
    """  onReorder: (ids) => {
    handOrder = ids;
    activeHandSort = null;
    refreshSortButtons();
    saveCurrentRun();
  },""",
)

# Save every game-state mutation and keep Run Info live.
replace_once(
    "src/main.ts",
    """const unsubscribeState = state.subscribe(() => {
  updateHud();
});""",
    """const unsubscribeState = state.subscribe(() => {
  saveCurrentRun();
  updateHud();
  if (activeGamePanel === 'run-info') renderRunInfo();
});""",
)

replace_once(
    "src/main.ts",
    "window.addEventListener('resize', updateResponsiveHudVars);",
    "window.addEventListener('resize', updateResponsiveHudVars);\nwindow.addEventListener('pagehide', saveCurrentRun);",
)
replace_once(
    "src/main.ts",
    "    window.removeEventListener('resize', updateResponsiveHudVars);",
    "    window.removeEventListener('resize', updateResponsiveHudVars);\n    window.removeEventListener('pagehide', saveCurrentRun);",
)
replace_once(
    "src/main.ts",
    "reflowHand(0.6);\nupdateHud();",
    "reflowHand(0.6);\nupdateHud();\nsaveCurrentRun();",
)

# ---------- index.html: panels + close button managed by main.ts ----------
p = root / "index.html"
s = p.read_text(encoding="utf-8")
s = s.replace(
    """<button id="kanban-close-game" type="button" aria-label="Đóng game">×</button>
<script>document.getElementById('kanban-close-game').addEventListener('click',()=>parent.postMessage({type:'open-poker-close'},'*'));</script>""",
    """<button id="kanban-close-game" type="button" aria-label="Đóng game">×</button>""",
    1,
)
panel_markup = """
      <div id="run-info-overlay" class="kanban-game-panel-overlay hidden" aria-hidden="true">
        <section class="kanban-game-panel run-info-panel" aria-label="Run Info">
          <div class="panel-kicker">RUN INFO</div>
          <div class="panel-tabs"><button class="panel-tab active" type="button">Poker Hands</button></div>
          <div class="run-info-head"><span>Level</span><span>Hand</span><span>Chips × Mult</span><span>Played</span></div>
          <div id="run-info-list" class="run-info-list"></div>
          <button id="btn-run-info-back" class="panel-back-btn" type="button">Back</button>
        </section>
      </div>

      <div id="options-overlay" class="kanban-game-panel-overlay hidden" aria-hidden="true">
        <section class="kanban-game-panel options-panel" aria-label="Options">
          <div class="panel-kicker">OPTIONS</div>
          <div class="options-stack">
            <button id="btn-option-sfx" class="options-menu-btn" type="button">Sound Effects: On</button>
            <button id="btn-option-music" class="options-menu-btn" type="button">Music: On</button>
            <button id="btn-option-new-run" class="options-menu-btn danger" type="button">New Run</button>
            <button id="btn-option-return" class="options-menu-btn" type="button">Save &amp; Return to Kanban</button>
          </div>
          <button id="btn-options-back" class="panel-back-btn" type="button">Back</button>
        </section>
      </div>
"""
anchor = '      <div id="overlay" class="overlay hidden">'
if anchor not in s:
    raise SystemExit("Could not insert Run Info / Options panels")
s = s.replace(anchor, panel_markup + "\n" + anchor, 1)
p.write_text(s, encoding="utf-8")

# ---------- style.css: Balatro-like panel styling ----------
style = root / "src/style.css"
with style.open("a", encoding="utf-8") as f:
    f.write(r"""
/* Kanban: Balatro-like Run Info / Options */
.kanban-game-panel-overlay {
  position: absolute;
  inset: 0;
  z-index: 99990;
  display: grid;
  place-items: center;
  padding: 24px;
  background: rgba(39, 70, 69, .62);
  backdrop-filter: blur(3px) saturate(.82);
}
.kanban-game-panel-overlay.hidden { display: none; }
.kanban-game-panel {
  width: min(760px, calc(100vw - 48px));
  max-height: min(88vh, 790px);
  overflow: auto;
  background: linear-gradient(180deg, #43585d, #33464b);
  border: 4px solid #d8e1e5;
  border-radius: 18px;
  padding: 18px;
  box-shadow: 0 9px 0 #172428, 0 18px 46px rgba(0,0,0,.45), inset 0 0 0 3px #64777c;
}
.panel-kicker {
  text-align: center;
  margin-bottom: 12px;
  font-family: "Silkscreen", monospace;
  font-size: 23px;
  color: #f5f7f8;
  text-shadow: 0 3px 0 #223337;
}
.panel-tabs { display: flex; justify-content: center; margin-bottom: 14px; }
.panel-tab {
  border: 2px solid #64251f;
  border-radius: 10px;
  padding: 10px 28px;
  background: linear-gradient(180deg, #ff6658, #dd3b31);
  color: #fff;
  font-family: "Silkscreen", monospace;
  font-size: 14px;
  box-shadow: 0 4px 0 #61231d;
}
.run-info-head,
.run-info-row {
  display: grid;
  grid-template-columns: 84px minmax(180px,1fr) 190px 76px;
  align-items: center;
  gap: 8px;
}
.run-info-head {
  padding: 0 8px 7px;
  color: #d4dcdf;
  font-family: "Silkscreen", monospace;
  font-size: 9px;
  text-align: center;
}
.run-info-list { display: flex; flex-direction: column; gap: 5px; }
.run-info-row {
  min-height: 40px;
  padding: 4px 8px;
  background: linear-gradient(180deg, #dfe3e5, #b9c2c6);
  border: 2px solid #566a6f;
  border-radius: 9px;
  color: #293a3e;
  box-shadow: inset 0 0 0 1px rgba(255,255,255,.55);
}
.run-info-level {
  border-radius: 13px;
  padding: 4px 7px;
  text-align: center;
  background: #f5f6f3;
  border: 2px solid #c6d0d4;
  font-family: "Silkscreen", monospace;
  font-size: 10px;
}
.run-info-name {
  text-align: center;
  font-family: "Silkscreen", monospace;
  font-size: 12px;
}
.run-info-score {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}
.run-info-chips,
.run-info-mult {
  display: inline-grid;
  place-items: center;
  min-width: 72px;
  border-radius: 11px;
  padding: 5px 8px;
  color: #fff;
  font-family: "VT323", monospace;
  font-size: 25px;
  text-shadow: 0 2px 0 rgba(0,0,0,.35);
}
.run-info-chips { background: linear-gradient(180deg,#47c4f6,#168ccc); }
.run-info-mult { background: linear-gradient(180deg,#ff6d6d,#db3535); }
.run-info-x {
  font-family: "Silkscreen", monospace;
  font-size: 15px;
  color: #df3030;
}
.run-info-count {
  justify-self: center;
  font-family: "Silkscreen", monospace;
  font-size: 11px;
  color: #70501e;
}
.panel-back-btn {
  width: 100%;
  margin-top: 14px;
  padding: 12px 18px;
  border: 2px solid #95570c;
  border-radius: 10px;
  background: linear-gradient(180deg, #ffb52b, #ed8b05);
  color: #fff;
  font-family: "Silkscreen", monospace;
  font-size: 16px;
  text-shadow: 0 2px 0 rgba(0,0,0,.35);
  box-shadow: 0 5px 0 #714009;
  cursor: pointer;
}
.options-panel { width: min(520px, calc(100vw - 48px)); }
.options-stack { display: flex; flex-direction: column; gap: 10px; padding: 0 44px; }
.options-menu-btn {
  width: 100%;
  padding: 13px 14px;
  border: 2px solid #67241e;
  border-radius: 10px;
  background: linear-gradient(180deg, #ff6456, #df392f);
  color: #fff;
  font-family: "Silkscreen", monospace;
  font-size: 13px;
  cursor: pointer;
  text-shadow: 0 2px 0 rgba(0,0,0,.4);
  box-shadow: 0 5px 0 #6b241e;
}
.options-menu-btn:hover, .panel-back-btn:hover { transform: translateY(-1px); }
.options-menu-btn:active, .panel-back-btn:active { transform: translateY(2px); }
.options-menu-btn.danger { background: linear-gradient(180deg,#ff554d,#bd2925); }
@media (max-width: 720px) {
  .kanban-game-panel-overlay { padding: 10px; }
  .run-info-head { display: none; }
  .run-info-row { grid-template-columns: 60px minmax(100px,1fr) 134px 48px; gap: 4px; padding: 4px; }
  .run-info-name { font-size: 9px; }
  .run-info-chips, .run-info-mult { min-width: 48px; font-size: 20px; padding: 4px; }
  .run-info-count { font-size: 9px; }
  .options-stack { padding: 0 6px; }
}
""")

# ---------- Cards: move suit symbols visibly upward ----------
replace_once(
    "scripts/generate-dummy-art.mjs",
    "${suitText(suit, 128, 188, 150)}",
    "${suitText(suit, 128, 168, 150)}",
)
replace_once(
    "scripts/generate-dummy-art.mjs",
    "${suitText(suit, 48, 132, 34)}",
    "${suitText(suit, 48, 116, 34)}",
)
replace_once(
    "src/render/cardTextures.ts",
    "ctx.fillText(suitGlyph, 48, 132);",
    "ctx.fillText(suitGlyph, 48, 116);",
)
replace_once(
    "src/render/cardTextures.ts",
    "ctx.fillText(suitGlyph, 48, 132);",
    "ctx.fillText(suitGlyph, 48, 116);",
)
replace_once(
    "src/render/cardTextures.ts",
    "ctx.fillText(suitGlyph, W / 2, H / 2 + 56);",
    "ctx.fillText(suitGlyph, W / 2, H / 2 + 32);",
)

print("Open Poker UX enhancements applied.")
