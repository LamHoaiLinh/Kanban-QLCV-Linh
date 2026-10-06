from __future__ import annotations

import re
import sys
from pathlib import Path

if len(sys.argv) != 2:
    raise SystemExit("Usage: customize_open_poker.py <open-poker-root>")

root = Path(sys.argv[1]).resolve()
if not (root / "src/main.ts").exists():
    raise SystemExit(f"Open Poker source not found: {root}")


def replace_once(path: str, old: str, new: str) -> None:
    p = root / path
    s = p.read_text(encoding="utf-8")
    if old not in s:
        raise SystemExit(f"Patch anchor not found in {path}: {old[:120]!r}")
    p.write_text(s.replace(old, new, 1), encoding="utf-8")


# Hand sorting wiring.
replace_once(
    "src/main.ts",
    "import { evaluateHand } from './game/pokerEngine';",
    "import { evaluateHand } from './game/pokerEngine';\nimport { sortHandForFlush, sortHandForStraight } from './game/handSort';",
)
replace_once(
    "src/main.ts",
    "const btnPlay = $<HTMLButtonElement>('btn-play');\nconst btnDiscard = $<HTMLButtonElement>('btn-discard');",
    "const btnPlay = $<HTMLButtonElement>('btn-play');\nconst btnDiscard = $<HTMLButtonElement>('btn-discard');\nconst btnSortStraight = $<HTMLButtonElement>('btn-sort-straight');\nconst btnSortFlush = $<HTMLButtonElement>('btn-sort-flush');",
)
replace_once(
    "src/main.ts",
    "let handOrder: string[] = [];",
    "let handOrder: string[] = [];\nlet activeHandSort: 'straight' | 'flush' | null = null;",
)
replace_once(
    "src/main.ts",
    """function getOrderedHand(): CardObject[] {
  return handOrder.map((id) => objects.get(id)!).filter(Boolean);
}

function reflowHand(duration = 0.4) {""",
    """function getOrderedHand(): CardObject[] {
  return handOrder.map((id) => objects.get(id)!).filter(Boolean);
}

function refreshSortButtons() {
  btnSortStraight.classList.toggle('is-active', activeHandSort === 'straight');
  btnSortFlush.classList.toggle('is-active', activeHandSort === 'flush');
}

function sortHand(mode: 'straight' | 'flush') {
  if (isAnimating || state.phase !== 'play' || state.hand.length < 2) return;
  const sorted = mode === 'straight' ? sortHandForStraight(state.hand) : sortHandForFlush(state.hand);
  handOrder = sorted.map((card) => card.id);
  activeHandSort = mode;
  refreshSortButtons();
  audio.play('buttonClick');
  reflowHand(0.28);
}

function reflowHand(duration = 0.4) {""",
)
replace_once(
    "src/main.ts",
    """  btnPlay.disabled = isAnimating || !state.canPlay();
  btnDiscard.disabled = isAnimating || !state.canDiscard();""",
    """  btnPlay.disabled = isAnimating || !state.canPlay();
  btnDiscard.disabled = isAnimating || !state.canDiscard();
  const sortDisabled = isAnimating || state.phase !== 'play' || state.hand.length < 2;
  btnSortStraight.disabled = sortDisabled;
  btnSortFlush.disabled = sortDisabled;
  refreshSortButtons();""",
)
replace_once(
    "src/main.ts",
    """  objects.clear();
  handOrder = [];
  state.reset();""",
    """  objects.clear();
  handOrder = [];
  activeHandSort = null;
  state.reset();""",
)
replace_once(
    "src/main.ts",
    """for (const [id, action] of Object.entries(UI_ACTION_BINDINGS)) {
  const el = maybe<HTMLButtonElement>(id);
  if (!el) continue;
  el.addEventListener('click', () => {
    dispatchAction(action);
  });
}

btnShopReroll.addEventListener""",
    """for (const [id, action] of Object.entries(UI_ACTION_BINDINGS)) {
  const el = maybe<HTMLButtonElement>(id);
  if (!el) continue;
  el.addEventListener('click', () => {
    dispatchAction(action);
  });
}

btnSortStraight.addEventListener('click', () => sortHand('straight'));
btnSortFlush.addEventListener('click', () => sortHand('flush'));

btnShopReroll.addEventListener""",
)
replace_once(
    "src/main.ts",
    """const onKeyDown = (event: KeyboardEvent) => {
  const action = actionFromKeyboard(event);""",
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
)
replace_once(
    "src/main.ts",
    "  onReorder: (ids) => { handOrder = ids; },",
    """  onReorder: (ids) => {
    handOrder = ids;
    activeHandSort = null;
    refreshSortButtons();
  },""",
)

hand_sort = """import type { PlayingCard, Rank, Suit } from './types';

const SUIT_ORDER: Record<Suit, number> = {
  spades: 0,
  hearts: 1,
  diamonds: 2,
  clubs: 3,
};

const STRAIGHT_WINDOWS: Rank[][] = [
  [14, 13, 12, 11, 10],
  [13, 12, 11, 10, 9],
  [12, 11, 10, 9, 8],
  [11, 10, 9, 8, 7],
  [10, 9, 8, 7, 6],
  [9, 8, 7, 6, 5],
  [8, 7, 6, 5, 4],
  [7, 6, 5, 4, 3],
  [6, 5, 4, 3, 2],
  [5, 4, 3, 2, 14],
];

function suitThenOriginal(a: PlayingCard, b: PlayingCard, original: Map<string, number>): number {
  return SUIT_ORDER[a.suit] - SUIT_ORDER[b.suit]
    || (original.get(a.id) ?? 0) - (original.get(b.id) ?? 0);
}

export function sortHandForStraight(cards: readonly PlayingCard[]): PlayingCard[] {
  const original = new Map(cards.map((card, index) => [card.id, index]));
  const rankSet = new Set(cards.filter((card) => card.enhancement !== 'stone').map((card) => card.rank));

  let bestWindow = STRAIGHT_WINDOWS[0];
  let bestMatches = -1;
  for (const window of STRAIGHT_WINDOWS) {
    const matches = window.reduce((sum, rank) => sum + (rankSet.has(rank) ? 1 : 0), 0);
    if (matches > bestMatches) {
      bestMatches = matches;
      bestWindow = window;
    }
  }

  const targetIndex = new Map<Rank, number>(bestWindow.map((rank, index) => [rank, index]));
  return cards.slice().sort((a, b) => {
    const aStone = a.enhancement === 'stone';
    const bStone = b.enhancement === 'stone';
    if (aStone !== bStone) return aStone ? 1 : -1;

    const ai = targetIndex.get(a.rank);
    const bi = targetIndex.get(b.rank);
    const aTarget = ai !== undefined;
    const bTarget = bi !== undefined;
    if (aTarget !== bTarget) return aTarget ? -1 : 1;
    if (aTarget && bTarget && ai !== bi) return ai! - bi!;

    if (a.rank !== b.rank) return b.rank - a.rank;
    return suitThenOriginal(a, b, original);
  });
}

export function sortHandForFlush(cards: readonly PlayingCard[]): PlayingCard[] {
  const original = new Map(cards.map((card, index) => [card.id, index]));
  const realCards = cards.filter((card) => card.enhancement !== 'stone');
  const wildCount = realCards.filter((card) => card.enhancement === 'wild').length;
  const nonWildCounts = new Map<Suit, number>();

  (Object.keys(SUIT_ORDER) as Suit[]).forEach((suit) => nonWildCounts.set(suit, 0));
  for (const card of realCards) {
    if (card.enhancement === 'wild') continue;
    nonWildCounts.set(card.suit, (nonWildCounts.get(card.suit) ?? 0) + 1);
  }

  const suits = (Object.keys(SUIT_ORDER) as Suit[]).sort((a, b) => {
    const aCount = (nonWildCounts.get(a) ?? 0) + wildCount;
    const bCount = (nonWildCounts.get(b) ?? 0) + wildCount;
    return bCount - aCount || SUIT_ORDER[a] - SUIT_ORDER[b];
  });
  const leadingSuit = suits[0];
  const suitGroup = new Map<Suit, number>(suits.map((suit, index) => [suit, index]));

  return cards.slice().sort((a, b) => {
    const aStone = a.enhancement === 'stone';
    const bStone = b.enhancement === 'stone';
    if (aStone !== bStone) return aStone ? 1 : -1;

    const aGroup = a.enhancement === 'wild' ? 0 : (suitGroup.get(a.suit) ?? 99);
    const bGroup = b.enhancement === 'wild' ? 0 : (suitGroup.get(b.suit) ?? 99);
    if (aGroup !== bGroup) return aGroup - bGroup;

    if (aGroup <= 0 && bGroup <= 0 && a.enhancement !== b.enhancement) {
      if (a.suit === leadingSuit && a.enhancement !== 'wild') return -1;
      if (b.suit === leadingSuit && b.enhancement !== 'wild') return 1;
    }

    if (a.rank !== b.rank) return b.rank - a.rank;
    return suitThenOriginal(a, b, original);
  });
}
"""
(root / "src/game/handSort.ts").write_text(hand_sort, encoding="utf-8")

# HUD sort controls and Kanban iframe close button.
p = root / "index.html"
s = p.read_text(encoding="utf-8")
anchor = '      <div class="actionbar">\n'
if anchor not in s:
    raise SystemExit("Actionbar anchor not found in index.html")
sort_markup = """        <div class="sort-controls" aria-label="Sort hand">
          <span class="sort-label">Sort</span>
          <button id="btn-sort-straight" class="btn sort-btn" type="button" title="Sort for Straight (S)">Straight <span class="sort-key">S</span></button>
          <button id="btn-sort-flush" class="btn sort-btn" type="button" title="Sort for Flush (F)">Flush <span class="sort-key">F</span></button>
        </div>
"""
s = s.replace(anchor, anchor + sort_markup, 1)
close_style = """<style>
#kanban-close-game{position:fixed;z-index:100000;right:12px;top:12px;width:42px;height:42px;border:1px solid rgba(255,255,255,.35);border-radius:12px;background:rgba(15,24,22,.72);color:#fff;font:700 28px/1 system-ui;cursor:pointer;backdrop-filter:blur(8px)}
#kanban-close-game:hover{background:rgba(180,45,45,.86)}
</style>
"""
close_markup = """<button id="kanban-close-game" type="button" aria-label="Đóng game">×</button>
<script>document.getElementById('kanban-close-game').addEventListener('click',()=>parent.postMessage({type:'open-poker-close'},'*'));</script>
"""
s = s.replace("</head>", close_style + "</head>", 1)
s = s.replace("</body>", close_markup + "</body>", 1)
p.write_text(s, encoding="utf-8")

# Styling for sort controls.
style = root / "src/style.css"
with style.open("a", encoding="utf-8") as f:
    f.write("""
/* Kanban Open Poker: fast Straight / Flush sorting */
.actionbar { align-items: flex-end; }
.sort-controls {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 6px;
  border: 2px solid #000;
  border-radius: 10px;
  background: rgba(22, 16, 12, 0.94);
  box-shadow: 0 5px 0 #000, inset 0 0 0 1px #4a382a;
}
.sort-label {
  padding: 0 4px;
  font-family: "Silkscreen", monospace;
  font-size: 10px;
  color: #ffe8a8;
  text-transform: uppercase;
}
.sort-btn {
  min-width: 92px;
  padding: 8px 10px;
  font-size: 11px;
  background: linear-gradient(180deg, #5b6f83, #2f3b48);
}
.sort-btn.is-active {
  background: linear-gradient(180deg, #6ec7ff, #2e6fa2);
  box-shadow: 0 3px 0 #000, inset 0 0 0 2px rgba(255,255,255,.35);
}
.sort-key {
  display: inline-grid;
  place-items: center;
  min-width: 18px;
  height: 18px;
  margin-left: 4px;
  padding: 0 3px;
  border-radius: 4px;
  background: rgba(0,0,0,.32);
  font-size: 9px;
  color: #fff4c8;
}
@media (max-width: 860px), (max-height: 620px) {
  .sort-label, .sort-key { display: none; }
  .sort-btn { min-width: 72px; padding: 8px 7px; font-size: 9px; }
  .actionbar { gap: 7px; }
  .btn { padding-left: 14px; padding-right: 14px; }
}
""")

# Enlarge generated card rank corners (>2x) while keeping 10 inside the card.
p = root / "scripts/generate-dummy-art.mjs"
s = p.read_text(encoding="utf-8")
pattern = r"function cornerIndex\(rank, suit\) \{.*?\n\}"
replacement = """function cornerIndex(rank, suit) {
  // Oversized rank index for quick reading on smaller screens/cards.
  // 10 needs a slightly smaller font so both digits stay safely inside.
  const rankSize = rank === '10' ? 78 : 98;
  const rankX = rank === '10' ? 64 : 55;
  return `    <g>
      ${rankText(rank, suit, rankX, 68, rankSize)}
      ${suitText(suit, 48, 132, 34)}
    </g>
    <g transform="translate(256 360) rotate(180)">
      ${rankText(rank, suit, rankX, 68, rankSize)}
      ${suitText(suit, 48, 132, 34)}
    </g>`;
}"""
s, n = re.subn(pattern, lambda _m: replacement, s, count=1, flags=re.S)
if n != 1:
    raise SystemExit("cornerIndex patch failed")
p.write_text(s, encoding="utf-8")

# Match the same oversized rank in the procedural fallback texture.
p = root / "src/render/cardTextures.ts"
s = p.read_text(encoding="utf-8")
pattern = r"""    ctx\.fillStyle = color;
    ctx\.textAlign = 'left';
    ctx\.font = 'bold 56px "Trebuchet MS", sans-serif';.*?    ctx\.restore\(\);"""
replacement = """    ctx.fillStyle = color;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const rankSize = rankStr === '10' ? 78 : 98;
    const rankX = rankStr === '10' ? 64 : 55;
    ctx.font = `900 ${rankSize}px "Trebuchet MS", sans-serif`;
    ctx.fillText(rankStr, rankX, 68);
    ctx.font = 'bold 34px serif';
    ctx.fillText(suitGlyph, 48, 132);

    ctx.save();
    ctx.translate(W, H);
    ctx.rotate(Math.PI);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `900 ${rankSize}px "Trebuchet MS", sans-serif`;
    ctx.fillText(rankStr, rankX, 68);
    ctx.font = 'bold 34px serif';
    ctx.fillText(suitGlyph, 48, 132);
    ctx.restore();"""
s, n = re.subn(pattern, lambda _m: replacement, s, count=1, flags=re.S)
if n != 1:
    raise SystemExit("cardTextures rank patch failed")
p.write_text(s, encoding="utf-8")

print("Open Poker customization applied.")
