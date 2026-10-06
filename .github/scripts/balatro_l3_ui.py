
from __future__ import annotations

import sys
from pathlib import Path

if len(sys.argv) != 2:
    raise SystemExit("Usage: balatro_l3_ui.py <open-poker-root>")

root = Path(sys.argv[1]).resolve()

def replace_once(path: str, old: str, new: str) -> None:
    p = root / path
    s = p.read_text(encoding="utf-8")
    if old not in s:
        raise SystemExit(f"L3 UI anchor not found in {path}: {old[:180]!r}")
    p.write_text(s.replace(old, new, 1), encoding="utf-8")

replace_once(
    "src/main.ts",
    "import { GameState } from './game/gameState';",
    "import { BOSS_BLINDS, DECKS, STAKES, TAGS, GameState } from './game/gameState';",
)
replace_once(
    "src/main.ts",
    "import type { ConsumableCard, InputAction, JokerCard, PlayingCard, PokerHandType, RunSnapshot, ScoreBreakdown, ShopItem } from './game/types';",
    "import type { ConsumableCard, DeckKey, InputAction, JokerCard, PlayingCard, PokerHandType, RunSnapshot, ScoreBreakdown, ShopItem, StakeKey } from './game/types';",
)
replace_once(
    "src/main.ts",
    """const btnTargetConfirm = $<HTMLButtonElement>('btn-target-confirm');""",
    """const btnTargetConfirm = $<HTMLButtonElement>('btn-target-confirm');
const itemInfo = $('item-info');
const itemInfoKind = $('item-info-kind');
const itemInfoName = $('item-info-name');
const itemInfoDesc = $('item-info-desc');
const itemInfoMeta = $('item-info-meta');
const btnItemInfoClose = $<HTMLButtonElement>('btn-item-info-close');
const setupOverlay = $('setup-overlay');
const setupDecksEl = $('setup-decks');
const setupStakeEl = $<HTMLSelectElement>('setup-stake');
const setupStakeDesc = $('setup-stake-desc');
const btnSetupStart = $<HTMLButtonElement>('btn-setup-start');
const blindSelectOverlay = $('blind-select-overlay');
const blindSelectCardsEl = $('blind-select-cards');""",
)

replace_once(
    "src/main.ts",
    """if (restoredRun?.snapshot) {
  try {
    state.reset(restoredRun.snapshot);
  } catch (err) {
    console.warn('[save] Could not restore Open Poker run:', err);
  }
}""",
    """if (restoredRun?.snapshot) {
  try {
    state.reset(restoredRun.snapshot);
  } catch (err) {
    console.warn('[save] Could not restore Open Poker run:', err);
    state.enterSetup();
  }
} else {
  state.enterSetup();
}""",
)

replace_once(
    "src/main.ts",
    "function renderInventorySlots() {",
    """let selectedSetupDeck: DeckKey = state.deckKey;

function closeItemInfo() {
  itemInfo.classList.add('hidden');
}

function showItemInfo(card: JokerCard | ConsumableCard, type: 'joker' | 'consumable', anchor: HTMLElement) {
  itemInfoKind.textContent = type === 'joker'
    ? `${card.rarity.toUpperCase()} JOKER`
    : card.type.toUpperCase();
  itemInfoName.textContent = card.name;
  itemInfoDesc.textContent = card.description;

  const meta: string[] = [`Sell $${card.sellValue}`];
  if ((card.edition ?? 'base') !== 'base') meta.push(card.edition ?? 'base');
  if (type === 'joker') {
    const joker = card as JokerCard;
    if (joker.sticker === 'eternal') meta.push('Eternal · cannot sell');
    if (joker.sticker === 'perishable') meta.push(`Perishable · ${joker.perishableRounds ?? 0} rounds`);
    if (joker.rental) meta.push('Rental · -$3/round');
    if (joker.counter !== undefined) meta.push(`Current ${joker.counter}`);
    if (joker.suit) meta.push(`Target ${joker.suit}`);
  }
  itemInfoMeta.textContent = meta.join(' · ');

  itemInfo.classList.remove('hidden');
  const rect = anchor.getBoundingClientRect();
  const box = itemInfo.getBoundingClientRect();
  const left = Math.min(window.innerWidth - box.width - 12, Math.max(12, rect.left));
  const top = Math.min(window.innerHeight - box.height - 12, rect.bottom + 10);
  itemInfo.style.left = `${left}px`;
  itemInfo.style.top = `${top}px`;
}

function renderInventorySlots() {""",
)

replace_once(
    "src/main.ts",
    """      slot.draggable = true;
      slot.addEventListener('dragstart', (event) => {""",
    """      slot.draggable = true;
      slot.addEventListener('click', (event) => {
        event.stopPropagation();
        showItemInfo(joker, 'joker', slot);
      });
      slot.addEventListener('dragstart', (event) => {""",
)

replace_once(
    "src/main.ts",
    """      slot.dataset.consumableId = consumable.id;
      slot.textContent = shortName(consumable.name);
      slot.title = `${consumable.name} - ${consumable.description}`;""",
    """      slot.dataset.consumableId = consumable.id;
      slot.textContent = shortName(consumable.name);
      slot.title = `${consumable.name} - ${consumable.description}`;
      slot.addEventListener('click', (event) => {
        event.stopPropagation();
        showItemInfo(consumable, 'consumable', slot);
      });""",
)

replace_once(
    "index.html",
    """<div class="shop-market">
              <div class="shop-section-title">Cards</div>
              <div id="shop-offers" class="shop-offers"></div>
              <div class="shop-section-title">Booster Packs</div>
              <div id="shop-boosters" class="shop-boosters"></div>
              <div class="shop-section-title">Voucher</div>
              <div id="shop-voucher" class="shop-voucher"></div>
            </div>""",
    """<div class="shop-market">
              <section class="shop-card-market">
                <div class="shop-section-title">Cards</div>
                <div id="shop-offers" class="shop-offers"></div>
              </section>
              <div class="shop-lower-market">
                <section class="shop-voucher-zone">
                  <div class="shop-section-title">Voucher</div>
                  <div id="shop-voucher" class="shop-voucher"></div>
                </section>
                <section class="shop-booster-zone">
                  <div class="shop-section-title">Booster Packs</div>
                  <div id="shop-boosters" class="shop-boosters"></div>
                </section>
              </div>
            </div>""",
)

replace_once(
    "index.html",
    """      <div id="booster-overlay" class="booster-overlay hidden" data-testid="booster-overlay">""",
    """      <aside id="item-info" class="item-info hidden" aria-live="polite">
        <button id="btn-item-info-close" class="item-info-close" type="button" aria-label="Close">×</button>
        <div id="item-info-kind" class="item-info-kind">JOKER</div>
        <h3 id="item-info-name">Joker</h3>
        <p id="item-info-desc"></p>
        <div id="item-info-meta" class="item-info-meta"></div>
      </aside>

      <div id="setup-overlay" class="setup-overlay hidden" data-testid="setup-overlay">
        <section class="setup-panel">
          <div class="setup-kicker">NEW RUN</div>
          <h2>Choose Deck &amp; Stake</h2>
          <div id="setup-decks" class="setup-decks"></div>
          <label class="setup-stake-label" for="setup-stake">Stake</label>
          <select id="setup-stake" class="setup-stake"></select>
          <p id="setup-stake-desc" class="setup-stake-desc"></p>
          <button id="btn-setup-start" class="btn btn-play" type="button">Play</button>
        </section>
      </div>

      <div id="blind-select-overlay" class="blind-select-overlay hidden" data-testid="blind-select-overlay">
        <section class="blind-select-panel">
          <div class="setup-kicker">ANTE <span id="blind-select-ante"></span></div>
          <h2>Choose Blind</h2>
          <div id="blind-select-cards" class="blind-select-cards"></div>
        </section>
      </div>

      <div id="booster-overlay" class="booster-overlay hidden" data-testid="booster-overlay">""",
)

replace_once(
    "src/main.ts",
    "function updateHud() {",
    r"""function renderSetup() {
  const visible = state.phase === 'setup';
  setupOverlay.classList.toggle('hidden', !visible);
  if (!visible) return;

  setupDecksEl.replaceChildren();
  (Object.keys(DECKS) as DeckKey[]).forEach((key) => {
    const deck = DECKS[key];
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `setup-deck-card${selectedSetupDeck === key ? ' selected' : ''}`;
    const name = document.createElement('strong');
    name.textContent = deck.name;
    const desc = document.createElement('span');
    desc.textContent = deck.description;
    button.append(name, desc);
    button.addEventListener('click', () => {
      selectedSetupDeck = key;
      renderSetup();
      audio.play('buttonClick');
    });
    setupDecksEl.appendChild(button);
  });

  if (setupStakeEl.options.length === 0) {
    (Object.keys(STAKES) as StakeKey[]).forEach((key) => {
      const option = document.createElement('option');
      option.value = key;
      option.textContent = STAKES[key].name;
      setupStakeEl.appendChild(option);
    });
    setupStakeEl.value = state.stakeKey;
  }
  setupStakeDesc.textContent = STAKES[setupStakeEl.value as StakeKey]?.description ?? '';
}

function targetForBlindIndex(index: 0 | 1 | 2): number {
  const current = state.blindIndex;
  state.blindIndex = index;
  const value = state.targetForPreview();
  state.blindIndex = current;
  return value;
}

function renderBlindSelect() {
  const visible = state.phase === 'blind-select';
  blindSelectOverlay.classList.toggle('hidden', !visible);
  if (!visible) return;

  const anteEl = document.getElementById('blind-select-ante');
  if (anteEl) anteEl.textContent = String(state.ante);
  blindSelectCardsEl.replaceChildren();

  ([0, 1, 2] as const).forEach((index) => {
    const current = index === state.blindIndex;
    const done = index < state.blindIndex;
    const article = document.createElement('article');
    article.className = `blind-select-card${index === 2 ? ' boss' : ''}${current ? ' current' : ''}${done ? ' done' : ''}`;

    const kind = document.createElement('span');
    kind.className = 'blind-select-kind';
    kind.textContent = index === 0 ? 'SMALL' : index === 1 ? 'BIG' : 'BOSS';

    const title = document.createElement('strong');
    title.textContent = index === 0 ? 'Small Blind' : index === 1 ? 'Big Blind' : BOSS_BLINDS[state.bossBlindKey].name;

    const target = document.createElement('div');
    target.className = 'blind-select-target';
    target.textContent = `Score ${targetForBlindIndex(index).toLocaleString()}`;

    const reward = document.createElement('div');
    reward.className = 'blind-select-reward';
    const baseReward = index === 0 && STAKES[state.stakeKey].order >= STAKES.red.order ? 0 : 3 + index;
    reward.textContent = `Reward $${baseReward}`;

    const info = document.createElement('p');
    if (index < 2) {
      const tag = TAGS[state.anteTags[index as 0 | 1]];
      info.textContent = `Skip → ${tag.name}: ${tag.description}`;
    } else {
      info.textContent = BOSS_BLINDS[state.bossBlindKey].description;
    }

    const actions = document.createElement('div');
    actions.className = 'blind-select-actions';
    if (current) {
      const play = document.createElement('button');
      play.type = 'button';
      play.className = 'btn btn-play';
      play.textContent = 'Play';
      play.addEventListener('click', () => {
        if (!state.playSelectedBlind()) return;
        audio.play('buttonClick');
        updateHud();
        reflowHand(0.55);
      });
      actions.appendChild(play);

      if (index < 2) {
        const tag = TAGS[state.anteTags[index as 0 | 1]];
        const skip = document.createElement('button');
        skip.type = 'button';
        skip.className = 'btn btn-ghost';
        skip.textContent = `Skip · ${tag.name}`;
        skip.addEventListener('click', () => {
          if (!state.skipCurrentBlind()) return;
          audio.play('chaching');
          updateHud();
        });
        actions.appendChild(skip);
      }
    } else {
      const status = document.createElement('span');
      status.className = 'blind-select-status';
      status.textContent = done ? 'Done / Skipped' : 'Locked';
      actions.appendChild(status);
    }

    article.append(kind, title, target, reward, info, actions);
    blindSelectCardsEl.appendChild(article);
  });
}

function updateHud() {""",
)

replace_once(
    "src/main.ts",
    """  renderShop();
  renderBooster();
  renderTargetMode();
}""",
    """  renderShop();
  renderBooster();
  renderTargetMode();
  renderSetup();
  renderBlindSelect();
  const restriction = state.playRestrictionMessage();
  if (restriction && state.selected.size > 0) handTypeEl.textContent = restriction;
}""",
)

replace_once(
    "src/main.ts",
    "  blindName.textContent = BLIND_LABELS[idx];",
    "  blindName.textContent = idx === 2 ? BOSS_BLINDS[state.bossBlindKey].name : BLIND_LABELS[idx];",
)

replace_once(
    "src/main.ts",
    "btnBoosterSkip.addEventListener",
    """btnItemInfoClose.addEventListener('click', (event) => {
  event.stopPropagation();
  closeItemInfo();
});
document.addEventListener('click', (event) => {
  if (itemInfo.classList.contains('hidden')) return;
  if (event.target instanceof Node && itemInfo.contains(event.target)) return;
  closeItemInfo();
});
setupStakeEl.addEventListener('change', renderSetup);
btnSetupStart.addEventListener('click', () => {
  state.configureRun(selectedSetupDeck, setupStakeEl.value as StakeKey);
  resetHandPlayCounts();
  audio.play('buttonClick');
  updateHud();
});

btnBoosterSkip.addEventListener""",
)

replace_once(
    "src/main.ts",
    """  closeGamePanel();
  state.reset();""",
    """  closeGamePanel();
  state.reset();
  selectedSetupDeck = state.deckKey;
  setupStakeEl.value = state.stakeKey;""",
)

replace_once(
    "src/main.ts",
    """  handPlayCounts[br.hand.type] = (handPlayCounts[br.hand.type] ?? 0) + 1;
  saveCurrentRun();""",
    """  handPlayCounts[br.hand.type] = state.handPlayCounts[br.hand.type] ?? ((handPlayCounts[br.hand.type] ?? 0) + 1);
  saveCurrentRun();""",
)

replace_once(
    "src/main.ts",
    """    if (state.targetMode) {
      state.cancelTargetMode();
      updateHud();
    } else if (state.phase === 'booster') {""",
    """    if (!itemInfo.classList.contains('hidden')) {
      closeItemInfo();
    } else if (state.targetMode) {
      state.cancelTargetMode();
      updateHud();
    } else if (state.phase === 'booster') {""",
)

style = root / "src/style.css"
with style.open("a", encoding="utf-8") as f:
    f.write(r"""
.shop-overlay {
  z-index: 4 !important;
  place-items: start center !important;
  padding-top: calc(118px * var(--ui-scale) + var(--ui-edge)) !important;
  background: rgba(17, 67, 60, .46) !important;
  backdrop-filter: blur(2px) !important;
}
.shop-panel {
  width: min(820px, calc(100vw - 360px)) !important;
  max-height: calc(100vh - 150px) !important;
  margin-left: 270px;
  gap: 9px !important;
  padding: 13px !important;
  background: linear-gradient(180deg,#394c50,#293b3f) !important;
}
.shop-body { display: block !important; min-height: 0; overflow: auto; }
#shop-inventory { display: none !important; }
.shop-market { display: flex; flex-direction: column; gap: 8px; }
.shop-card-market, .shop-voucher-zone, .shop-booster-zone {
  border: 3px solid #172427;
  border-radius: 13px;
  padding: 8px;
  background: #26383c;
  box-shadow: inset 0 0 0 2px #506267;
}
.shop-offers { grid-template-columns: repeat(2,minmax(0,1fr)) !important; }
.shop-offer { min-height: 145px !important; }
.shop-lower-market { display: grid; grid-template-columns: .8fr 1.6fr; gap: 10px; }
.shop-boosters { grid-template-columns: repeat(2,minmax(0,1fr)); }
.shop-header h2 { font-size: 25px !important; }
.shop-kicker { font-size: 9px !important; }
.hud-top, .sidebar { z-index: 6; }

.item-info {
  position: fixed;
  z-index: 100500;
  width: min(330px, calc(100vw - 24px));
  padding: 14px;
  border: 3px solid #19272a;
  border-radius: 12px;
  background: linear-gradient(180deg,#eee8d9,#cec3aa);
  color: #253438;
  box-shadow: 0 7px 0 #132023, 0 16px 36px rgba(0,0,0,.45);
}
.item-info.hidden { display: none; }
.item-info-kind { display: inline-block; padding: 3px 7px; border-radius: 6px; background: #d74737; color: #fff; font: 9px "Silkscreen", monospace; }
.item-info h3 { margin: 9px 28px 7px 0; font: 17px "Silkscreen", monospace; color: #1e2c2f; }
.item-info p { margin: 0 0 10px; font-size: 18px; line-height: 1.12; }
.item-info-meta { padding-top: 8px; border-top: 1px solid rgba(34,48,51,.25); font: 10px "Silkscreen", monospace; color: #5c4a2b; line-height: 1.5; }
.item-info-close {
  position: absolute; right: 8px; top: 7px; width: 27px; height: 27px;
  border: 2px solid #26373a; border-radius: 7px; background: #455b60; color: #fff; font-size: 19px; cursor: pointer;
}
.joker-slot.filled, .consumable-slot.filled { cursor: pointer; }

.setup-overlay, .blind-select-overlay {
  position: absolute; inset: 0; z-index: 99970; display: grid; place-items: center; padding: 18px;
  background: rgba(20,67,61,.78); backdrop-filter: blur(4px);
}
.setup-overlay.hidden, .blind-select-overlay.hidden { display: none; }
.setup-panel, .blind-select-panel {
  width: min(1000px, calc(100vw - 36px)); max-height: calc(100vh - 36px); overflow: auto; padding: 18px;
  border: 4px solid #d6dfe1; border-radius: 18px; background: linear-gradient(180deg,#40575b,#2c4145);
  box-shadow: 0 10px 0 #142124, inset 0 0 0 3px #65787c;
}
.setup-panel h2, .blind-select-panel h2 { margin: 3px 0 16px; text-align: center; color: #fff; font: 23px "Silkscreen", monospace; }
.setup-kicker { text-align: center; color: #ffd24a; font: 10px "Silkscreen", monospace; }
.setup-decks { display: grid; grid-template-columns: repeat(5,minmax(0,1fr)); gap: 10px; }
.setup-deck-card {
  min-height: 132px; display: flex; flex-direction: column; gap: 8px; border: 3px solid #182629;
  border-radius: 12px; padding: 12px; background: #d8d3c6; color: #283639; cursor: pointer; box-shadow: 0 5px 0 #172326;
}
.setup-deck-card strong { font: 11px "Silkscreen", monospace; }
.setup-deck-card span { font-size: 14px; line-height: 1.12; }
.setup-deck-card.selected { transform: translateY(-5px); border-color: #ffd24a; box-shadow: 0 8px 0 #8b6011, 0 0 22px rgba(255,210,74,.35); }
.setup-stake-label { display: block; margin-top: 18px; color: #ffd24a; font: 10px "Silkscreen", monospace; }
.setup-stake {
  width: 100%; margin-top: 6px; padding: 10px; border: 2px solid #172326; border-radius: 8px;
  background: #e9e4d8; color: #243337; font: 12px "Silkscreen", monospace;
}
.setup-stake-desc { min-height: 24px; color: #d9e2e4; font-size: 15px; }
#btn-setup-start { width: 100%; }

.blind-select-cards { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 13px; }
.blind-select-card {
  min-height: 300px; display: flex; flex-direction: column; gap: 10px; padding: 15px;
  border: 4px solid #182629; border-radius: 15px; background: linear-gradient(180deg,#466d78,#2c4b53);
  color: #eef4f5; box-shadow: 0 7px 0 #152326; opacity: .65;
}
.blind-select-card.current { opacity: 1; border-color: #ffd24a; transform: translateY(-5px); box-shadow: 0 10px 0 #855b10, 0 0 24px rgba(255,210,74,.27); }
.blind-select-card.done { opacity: .35; filter: grayscale(.55); }
.blind-select-card.boss { background: linear-gradient(180deg,#8a493e,#542b27); }
.blind-select-kind { width: max-content; padding: 4px 7px; border-radius: 6px; background: #e65243; font: 9px "Silkscreen", monospace; }
.blind-select-card > strong { font: 17px "Silkscreen", monospace; color: #fff; }
.blind-select-target { font: 23px "VT323", monospace; color: #62d4ff; }
.blind-select-reward { color: #ffd24a; font: 11px "Silkscreen", monospace; }
.blind-select-card p { flex: 1; margin: 0; font-size: 16px; line-height: 1.12; }
.blind-select-actions { display: flex; flex-direction: column; gap: 7px; }
.blind-select-status { text-align: center; color: #bbc5c7; font: 10px "Silkscreen", monospace; }

@media (max-width: 900px) {
  .shop-panel { width: calc(100vw - 24px) !important; margin-left: 0; }
  .shop-lower-market { grid-template-columns: 1fr; }
  .setup-decks { grid-template-columns: repeat(2,minmax(0,1fr)); }
  .blind-select-cards { grid-template-columns: 1fr; }
  .blind-select-card { min-height: 190px; }
}
""")

print("Balatro L3 UI applied.")
