
from __future__ import annotations
import sys
from pathlib import Path

if len(sys.argv) != 2:
    raise SystemExit("Usage: balatro_meta_ui.py <open-poker-root>")

root = Path(sys.argv[1]).resolve()

def replace_once(path: str, old: str, new: str) -> None:
    p = root / path
    s = p.read_text(encoding="utf-8")
    if old not in s:
        raise SystemExit(f"Meta UI anchor not found in {path}: {old[:180]!r}")
    p.write_text(s.replace(old, new, 1), encoding="utf-8")

meta = r"""import { JOKER_CATALOG, STAKES } from './gameState';
import type { BossBlindKey, DeckKey, StakeKey, TagKey } from './types';

export interface MetaProfile {
  version: 1;
  runsStarted: number;
  runsFinished: number;
  wins: number;
  bestAnte: number;
  totalHands: number;
  totalSkips: number;
  totalDiscards: number;
  maxMoney: number;
  unlockedDecks: DeckKey[];
  highestStakeCleared: Partial<Record<DeckKey, number>>;
  unlockedJokers: string[];
  discoveredJokers: string[];
  discoveredBosses: BossBlindKey[];
  discoveredTags: TagKey[];
  settledRunIds: string[];
}

export interface StorageLike {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
}

export const META_KEY = 'kanban-open-poker:meta-v1';

const MYTHIC_KEYS = JOKER_CATALOG.filter((j) => j.rarity === 'mythic').map((j) => j.key);
const COMMON_KEYS = JOKER_CATALOG.filter((j) => j.rarity === 'common').map((j) => j.key);
const UNCOMMON_KEYS = JOKER_CATALOG.filter((j) => j.rarity === 'uncommon').map((j) => j.key);
const RARE_KEYS = JOKER_CATALOG.filter((j) => j.rarity === 'rare').map((j) => j.key);

export function createDefaultMetaProfile(): MetaProfile {
  return {
    version: 1,
    runsStarted: 0,
    runsFinished: 0,
    wins: 0,
    bestAnte: 1,
    totalHands: 0,
    totalSkips: 0,
    totalDiscards: 0,
    maxMoney: 4,
    unlockedDecks: ['red'],
    highestStakeCleared: {},
    unlockedJokers: [...COMMON_KEYS],
    discoveredJokers: [],
    discoveredBosses: [],
    discoveredTags: [],
    settledRunIds: [],
  };
}

function unique<T>(values: readonly T[]): T[] {
  return [...new Set(values)];
}

export function loadMetaProfile(storage: StorageLike): MetaProfile {
  try {
    const raw = storage.getItem(META_KEY);
    if (!raw) return createDefaultMetaProfile();
    const parsed = JSON.parse(raw) as Partial<MetaProfile>;
    const base = createDefaultMetaProfile();
    return refreshMetaUnlocks({
      ...base,
      ...parsed,
      version: 1,
      unlockedDecks: unique((parsed.unlockedDecks ?? base.unlockedDecks) as DeckKey[]),
      unlockedJokers: unique(parsed.unlockedJokers ?? base.unlockedJokers),
      discoveredJokers: unique(parsed.discoveredJokers ?? []),
      discoveredBosses: unique((parsed.discoveredBosses ?? []) as BossBlindKey[]),
      discoveredTags: unique((parsed.discoveredTags ?? []) as TagKey[]),
      settledRunIds: unique(parsed.settledRunIds ?? []).slice(-100),
      highestStakeCleared: { ...(parsed.highestStakeCleared ?? {}) },
    });
  } catch {
    return createDefaultMetaProfile();
  }
}

export function saveMetaProfile(storage: StorageLike, profile: MetaProfile) {
  storage.setItem(META_KEY, JSON.stringify(profile));
}

export function maxClearedStake(profile: MetaProfile): number {
  return Math.max(-1, ...Object.values(profile.highestStakeCleared).map((v) => Number(v ?? -1)));
}

export function maxUnlockedStakeOrder(profile: MetaProfile, deck: DeckKey): number {
  return Math.min(7, Math.max(0, Number(profile.highestStakeCleared[deck] ?? -1) + 1));
}

export function stakeUnlocked(profile: MetaProfile, deck: DeckKey, stake: StakeKey): boolean {
  return STAKES[stake].order <= maxUnlockedStakeOrder(profile, deck);
}

export function refreshMetaUnlocks(input: MetaProfile): MetaProfile {
  const profile = { ...input };
  const decks = new Set<DeckKey>(profile.unlockedDecks);
  decks.add('red');
  if (profile.bestAnte >= 4 || profile.wins >= 1) decks.add('blue');
  if (profile.wins >= 1) decks.add('yellow');
  if (profile.wins >= 2) decks.add('green');
  if (profile.wins >= 3) decks.add('black');
  profile.unlockedDecks = [...decks];

  const jokers = new Set(profile.unlockedJokers);
  COMMON_KEYS.forEach((key) => jokers.add(key));
  if (profile.bestAnte >= 4 || profile.wins >= 1) UNCOMMON_KEYS.forEach((key) => jokers.add(key));
  if (profile.wins >= 1) RARE_KEYS.forEach((key) => jokers.add(key));

  const cleared = maxClearedStake(profile);
  const mythicCount =
    profile.wins <= 0 ? 0 :
    cleared >= 5 ? 20 :
    cleared >= 3 ? 15 :
    cleared >= 1 ? 10 : 5;
  MYTHIC_KEYS.slice(0, mythicCount).forEach((key) => jokers.add(key));

  profile.unlockedJokers = [...jokers];
  return profile;
}

export function recordRunStart(profile: MetaProfile): MetaProfile {
  return refreshMetaUnlocks({ ...profile, runsStarted: profile.runsStarted + 1 });
}

export function recordRunFinish(
  input: MetaProfile,
  runId: string,
  stats: {
    won: boolean;
    deck: DeckKey;
    stake: StakeKey;
    ante: number;
    hands: number;
    skips: number;
    discards: number;
    money: number;
  },
): MetaProfile {
  if (input.settledRunIds.includes(runId)) return input;
  const next: MetaProfile = {
    ...input,
    runsFinished: input.runsFinished + 1,
    wins: input.wins + (stats.won ? 1 : 0),
    bestAnte: Math.max(input.bestAnte, stats.ante),
    totalHands: input.totalHands + stats.hands,
    totalSkips: input.totalSkips + stats.skips,
    totalDiscards: input.totalDiscards + stats.discards,
    maxMoney: Math.max(input.maxMoney, stats.money),
    highestStakeCleared: { ...input.highestStakeCleared },
    settledRunIds: [...input.settledRunIds, runId].slice(-100),
  };
  if (stats.won) {
    next.highestStakeCleared[stats.deck] = Math.max(
      Number(next.highestStakeCleared[stats.deck] ?? -1),
      STAKES[stats.stake].order,
    );
  }
  return refreshMetaUnlocks(next);
}

export function discoverJoker(profile: MetaProfile, key: string): MetaProfile {
  if (profile.discoveredJokers.includes(key)) return profile;
  return { ...profile, discoveredJokers: [...profile.discoveredJokers, key] };
}

export function discoverBoss(profile: MetaProfile, key: BossBlindKey): MetaProfile {
  if (profile.discoveredBosses.includes(key)) return profile;
  return { ...profile, discoveredBosses: [...profile.discoveredBosses, key] };
}

export function discoverTag(profile: MetaProfile, key: TagKey): MetaProfile {
  if (profile.discoveredTags.includes(key)) return profile;
  return { ...profile, discoveredTags: [...profile.discoveredTags, key] };
}

export function seedFromText(value: string): number {
  const trimmed = value.trim();
  if (!trimmed) return Math.max(1, Math.floor(Math.random() * 0x7fffffff));
  if (/^\d+$/.test(trimmed)) return Math.max(1, Number(trimmed) >>> 0);
  let hash = 2166136261;
  for (let i = 0; i < trimmed.length; i++) {
    hash ^= trimmed.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return Math.max(1, hash >>> 0);
}

export function makeMetaRunId(seed: number): string {
  return `${Date.now().toString(36)}-${seed.toString(36)}-${Math.floor(Math.random() * 1e8).toString(36)}`;
}
"""
(root / "src/game/metaProgression.ts").write_text(meta, encoding="utf-8")

# Imports.
replace_once(
    "src/main.ts",
    "import { BOSS_BLINDS, DECKS, STAKES, TAGS, GameState } from './game/gameState';",
    "import { BOSS_BLINDS, DECKS, JOKER_CATALOG, STAKES, TAGS, GameState } from './game/gameState';",
)
replace_once(
    "src/main.ts",
    "import type { ConsumableCard, DeckKey, InputAction, JokerCard, PlayingCard, PokerHandType, RunSnapshot, ScoreBreakdown, ShopItem, StakeKey } from './game/types';",
    """import type { ConsumableCard, DeckKey, InputAction, JokerCard, PlayingCard, PokerHandType, RunSnapshot, ScoreBreakdown, ShopItem, StakeKey } from './game/types';
import {
  discoverBoss, discoverJoker, discoverTag, loadMetaProfile, makeMetaRunId,
  maxUnlockedStakeOrder, recordRunFinish, recordRunStart, refreshMetaUnlocks,
  saveMetaProfile, seedFromText,
} from './game/metaProgression';""",
)

# Panels and setup refs.
replace_once(
    "src/main.ts",
    "type GamePanel = 'run-info' | 'options' | null;",
    "type GamePanel = 'run-info' | 'options' | 'collection' | null;",
)
replace_once(
    "src/main.ts",
    """const btnKanbanClose = $<HTMLButtonElement>('kanban-close-game');""",
    """const btnKanbanClose = $<HTMLButtonElement>('kanban-close-game');
const btnOptionCollection = $<HTMLButtonElement>('btn-option-collection');
const collectionOverlay = $('collection-overlay');
const collectionStats = $('collection-stats');
const collectionDecks = $('collection-decks');
const collectionJokers = $('collection-jokers');
const btnCollectionBack = $<HTMLButtonElement>('btn-collection-back');
const setupSeedInput = $<HTMLInputElement>('setup-seed');
const btnSetupRandomSeed = $<HTMLButtonElement>('btn-setup-random-seed');""",
)

# Saved run also carries a unique meta run id.
replace_once(
    "src/main.ts",
    """  handPlayCounts: Partial<Record<PokerHandType, number>>;
  savedAt: number;""",
    """  handPlayCounts: Partial<Record<PokerHandType, number>>;
  metaRunId?: string;
  savedAt: number;""",
)
replace_once(
    "src/main.ts",
    """      handPlayCounts: { ...handPlayCounts },
      savedAt: Date.now(),""",
    """      handPlayCounts: { ...handPlayCounts },
      metaRunId,
      savedAt: Date.now(),""",
)

# Meta profile bootstrap after run restoration.
replace_once(
    "src/main.ts",
    """const handPlayCounts = Object.fromEntries(""",
    """let metaProfile = refreshMetaUnlocks(loadMetaProfile(localStorage));
state.setUnlockedJokerKeys(metaProfile.unlockedJokers);
let metaRunId = restoredRun?.metaRunId ?? makeMetaRunId(state.config.seed);

const handPlayCounts = Object.fromEntries(""",
)

# Setup deck locking.
replace_once(
    "src/main.ts",
    """    button.type = 'button';
    button.className = `setup-deck-card${selectedSetupDeck === key ? ' selected' : ''}`;
    const name = document.createElement('strong');
    name.textContent = deck.name;""",
    """    button.type = 'button';
    const deckUnlocked = metaProfile.unlockedDecks.includes(key);
    button.className = `setup-deck-card${selectedSetupDeck === key ? ' selected' : ''}${deckUnlocked ? '' : ' locked'}`;
    button.disabled = !deckUnlocked;
    const name = document.createElement('strong');
    name.textContent = deckUnlocked ? deck.name : `Locked · ${deck.name}`;""",
)
replace_once(
    "src/main.ts",
    """    button.addEventListener('click', () => {
      selectedSetupDeck = key;""",
    """    button.addEventListener('click', () => {
      if (!deckUnlocked) return;
      selectedSetupDeck = key;""",
)

# Stake select is rebuilt for the selected deck's unlocked tier.
replace_once(
    "src/main.ts",
    """  if (setupStakeEl.options.length === 0) {
    (Object.keys(STAKES) as StakeKey[]).forEach((key) => {
      const option = document.createElement('option');
      option.value = key;
      option.textContent = STAKES[key].name;
      setupStakeEl.appendChild(option);
    });
    setupStakeEl.value = state.stakeKey;
  }
  setupStakeDesc.textContent = STAKES[setupStakeEl.value as StakeKey]?.description ?? '';""",
    """  const priorStake = setupStakeEl.value as StakeKey || state.stakeKey;
  const maxStake = maxUnlockedStakeOrder(metaProfile, selectedSetupDeck);
  setupStakeEl.replaceChildren();
  (Object.keys(STAKES) as StakeKey[])
    .filter((key) => STAKES[key].order <= maxStake)
    .forEach((key) => {
      const option = document.createElement('option');
      option.value = key;
      option.textContent = STAKES[key].name;
      setupStakeEl.appendChild(option);
    });
  const allowedPrior = (Object.keys(STAKES) as StakeKey[]).some(
    (key) => key === priorStake && STAKES[key].order <= maxStake,
  );
  setupStakeEl.value = allowedPrior ? priorStake : 'white';
  setupStakeDesc.textContent = `${STAKES[setupStakeEl.value as StakeKey]?.description ?? ''} · Unlocked through ${STAKES[(Object.keys(STAKES) as StakeKey[]).find((key) => STAKES[key].order === maxStake) ?? 'white'].name}`;""",
)

# Collection renderer + meta sync inserted before setup renderer.
replace_once(
    "src/main.ts",
    """function renderSetup() {""",
    """function renderCollection() {
  collectionStats.textContent =
    `Runs ${metaProfile.runsFinished}/${metaProfile.runsStarted} · Wins ${metaProfile.wins} · Best Ante ${metaProfile.bestAnte} · Hands ${metaProfile.totalHands} · Skips ${metaProfile.totalSkips}`;

  collectionDecks.replaceChildren();
  (Object.keys(DECKS) as DeckKey[]).forEach((key) => {
    const row = document.createElement('div');
    row.className = `collection-deck${metaProfile.unlockedDecks.includes(key) ? '' : ' locked'}`;
    const highest = Number(metaProfile.highestStakeCleared[key] ?? -1);
    row.textContent = metaProfile.unlockedDecks.includes(key)
      ? `${DECKS[key].name} · ${highest < 0 ? 'White Stake ready' : `cleared ${STAKES[(Object.keys(STAKES) as StakeKey[]).find((s) => STAKES[s].order === highest) ?? 'white'].name}`}`
      : `${DECKS[key].name} · LOCKED`;
    collectionDecks.appendChild(row);
  });

  collectionJokers.replaceChildren();
  for (const joker of JOKER_CATALOG) {
    const unlocked = metaProfile.unlockedJokers.includes(joker.key);
    const discovered = metaProfile.discoveredJokers.includes(joker.key);
    const card = document.createElement('article');
    card.className = `collection-joker ${joker.rarity}${unlocked ? ' unlocked' : ' locked'}${discovered ? ' discovered' : ''}`;
    const name = document.createElement('strong');
    name.textContent = !unlocked ? 'LOCKED' : discovered ? joker.name : '???';
    const rarity = document.createElement('span');
    rarity.textContent = joker.rarity.toUpperCase();
    const desc = document.createElement('p');
    desc.textContent = !unlocked ? 'Meet progression requirements to unlock.' : discovered ? joker.description : 'Obtain this Joker to discover it.';
    card.append(name, rarity, desc);
    collectionJokers.appendChild(card);
  }
}

function syncMetaProgression() {
  let next = metaProfile;
  for (const joker of state.jokers) next = discoverJoker(next, joker.key);
  next = discoverBoss(next, state.bossBlindKey);
  next = discoverTag(discoverTag(next, state.anteTags[0]), state.anteTags[1]);
  next.bestAnte = Math.max(next.bestAnte, state.ante);
  next.maxMoney = Math.max(next.maxMoney, state.money);

  if ((state.phase === 'win' || state.phase === 'game-over') && !next.settledRunIds.includes(metaRunId)) {
    next = recordRunFinish(next, metaRunId, {
      won: state.phase === 'win',
      deck: state.deckKey,
      stake: state.stakeKey,
      ante: state.ante,
      hands: state.handsPlayedRun,
      skips: state.skippedBlinds,
      discards: state.discardsUsedRun,
      money: state.money,
    });
  }
  metaProfile = refreshMetaUnlocks(next);
  state.setUnlockedJokerKeys(metaProfile.unlockedJokers);
  saveMetaProfile(localStorage, metaProfile);
  if (activeGamePanel === 'collection') renderCollection();
}

function renderSetup() {""",
)

# Meta sync in HUD.
replace_once(
    "src/main.ts",
    """function updateHud() {
  renderInventorySlots();""",
    """function updateHud() {
  syncMetaProgression();
  renderInventorySlots();""",
)

# Setup uses user seed and records run start.
replace_once(
    "src/main.ts",
    """btnSetupStart.addEventListener('click', () => {
  state.configureRun(selectedSetupDeck, setupStakeEl.value as StakeKey);
  resetHandPlayCounts();""",
    """btnSetupStart.addEventListener('click', () => {
  const seed = seedFromText(setupSeedInput.value);
  metaRunId = makeMetaRunId(seed);
  metaProfile = recordRunStart(metaProfile);
  saveMetaProfile(localStorage, metaProfile);
  state.setUnlockedJokerKeys(metaProfile.unlockedJokers);
  state.configureRun(selectedSetupDeck, setupStakeEl.value as StakeKey, seed);
  setupSeedInput.value = String(seed);
  resetHandPlayCounts();""",
)

# Panel behavior includes Collection.
replace_once(
    "src/main.ts",
    """  if (panel === 'run-info') {
    renderRunInfo();
    runInfoOverlay.classList.remove('hidden');
    optionsOverlay.classList.add('hidden');
  } else {
    refreshOptionsControls();
    optionsOverlay.classList.remove('hidden');
    runInfoOverlay.classList.add('hidden');
  }""",
    """  if (panel === 'run-info') {
    renderRunInfo();
    runInfoOverlay.classList.remove('hidden');
    optionsOverlay.classList.add('hidden');
    collectionOverlay.classList.add('hidden');
  } else if (panel === 'collection') {
    renderCollection();
    collectionOverlay.classList.remove('hidden');
    runInfoOverlay.classList.add('hidden');
    optionsOverlay.classList.add('hidden');
  } else {
    refreshOptionsControls();
    optionsOverlay.classList.remove('hidden');
    runInfoOverlay.classList.add('hidden');
    collectionOverlay.classList.add('hidden');
  }""",
)
replace_once(
    "src/main.ts",
    """  runInfoOverlay.classList.add('hidden');
  optionsOverlay.classList.add('hidden');""",
    """  runInfoOverlay.classList.add('hidden');
  optionsOverlay.classList.add('hidden');
  collectionOverlay.classList.add('hidden');""",
)

# Wire Collection and random seed.
replace_once(
    "src/main.ts",
    """btnOptionsBack.addEventListener('click', closeGamePanel);
btnKanbanClose.addEventListener""",
    """btnOptionsBack.addEventListener('click', closeGamePanel);
btnOptionCollection.addEventListener('click', () => openGamePanel('collection'));
btnCollectionBack.addEventListener('click', closeGamePanel);
btnSetupRandomSeed.addEventListener('click', () => {
  setupSeedInput.value = String(seedFromText(''));
  audio.play('buttonClick');
});
btnKanbanClose.addEventListener""",
)

# New run gets a fresh setup seed field.
replace_once(
    "src/main.ts",
    """  state.reset();
  selectedSetupDeck = state.deckKey;""",
    """  state.reset();
  metaRunId = makeMetaRunId(state.config.seed);
  setupSeedInput.value = '';
  selectedSetupDeck = metaProfile.unlockedDecks.includes(state.deckKey) ? state.deckKey : 'red';""",
)

# HTML: Seed controls.
replace_once(
    "index.html",
    """          <p id="setup-stake-desc" class="setup-stake-desc"></p>
          <button id="btn-setup-start" class="btn btn-play" type="button">Play</button>""",
    """          <p id="setup-stake-desc" class="setup-stake-desc"></p>
          <label class="setup-stake-label" for="setup-seed">Seed</label>
          <div class="setup-seed-row">
            <input id="setup-seed" class="setup-seed" type="text" inputmode="text" placeholder="Blank = random seed">
            <button id="btn-setup-random-seed" class="btn btn-ghost" type="button">Random</button>
          </div>
          <button id="btn-setup-start" class="btn btn-play" type="button">Play</button>""",
)

# HTML: Collection button in Options.
replace_once(
    "index.html",
    """            <button id="btn-option-music" class="options-menu-btn" type="button">Music: On</button>
            <button id="btn-option-new-run" class="options-menu-btn danger" type="button">New Run</button>""",
    """            <button id="btn-option-music" class="options-menu-btn" type="button">Music: On</button>
            <button id="btn-option-collection" class="options-menu-btn" type="button">Collection</button>
            <button id="btn-option-new-run" class="options-menu-btn danger" type="button">New Run</button>""",
)

# HTML: Collection overlay before Options.
replace_once(
    "index.html",
    """      <div id="options-overlay" class="kanban-game-panel-overlay hidden" aria-hidden="true">""",
    """      <div id="collection-overlay" class="kanban-game-panel-overlay hidden" aria-hidden="true">
        <section class="kanban-game-panel collection-panel" aria-label="Collection">
          <div class="panel-kicker">COLLECTION</div>
          <div id="collection-stats" class="collection-stats"></div>
          <h3 class="collection-title">Deck / Stake Progress</h3>
          <div id="collection-decks" class="collection-decks"></div>
          <h3 class="collection-title">Jokers</h3>
          <div id="collection-jokers" class="collection-jokers"></div>
          <button id="btn-collection-back" class="panel-back-btn" type="button">Back</button>
        </section>
      </div>

      <div id="options-overlay" class="kanban-game-panel-overlay hidden" aria-hidden="true">""",
)

style = root / "src/style.css"
with style.open("a", encoding="utf-8") as f:
    f.write(r"""
.setup-deck-card.locked { opacity: .42; filter: grayscale(.8); cursor: not-allowed; transform: none !important; }
.setup-seed-row { display:grid; grid-template-columns:1fr auto; gap:8px; margin:6px 0 12px; }
.setup-seed {
  min-width:0; padding:10px 12px; border:2px solid #172326; border-radius:8px;
  background:#eee9dc; color:#253438; font:12px "Silkscreen",monospace;
}
.collection-panel { width:min(980px,calc(100vw - 36px)); }
.collection-stats {
  margin:0 0 12px; padding:10px; border-radius:9px; background:#24383c;
  color:#e7eef0; text-align:center; font:10px "Silkscreen",monospace; line-height:1.6;
}
.collection-title { margin:14px 0 8px; color:#ffd24a; font:11px "Silkscreen",monospace; }
.collection-decks { display:grid; grid-template-columns:repeat(5,minmax(0,1fr)); gap:7px; }
.collection-deck {
  padding:9px; border:2px solid #172326; border-radius:8px; background:#d8d3c6;
  color:#283639; font:9px "Silkscreen",monospace; line-height:1.45;
}
.collection-deck.locked { opacity:.42; filter:grayscale(1); }
.collection-jokers {
  display:grid; grid-template-columns:repeat(5,minmax(0,1fr)); gap:7px;
  max-height:46vh; overflow:auto; padding:2px;
}
.collection-joker {
  min-height:116px; padding:8px; border:2px solid #52666b; border-radius:9px;
  background:linear-gradient(180deg,#dfe3e5,#b7c0c3); color:#26373a;
}
.collection-joker strong { display:block; min-height:28px; font:9px "Silkscreen",monospace; }
.collection-joker span { font:8px "Silkscreen",monospace; color:#775815; }
.collection-joker p { margin:7px 0 0; font-size:13px; line-height:1.12; }
.collection-joker.locked { opacity:.34; filter:grayscale(1); }
.collection-joker.unlocked:not(.discovered) { opacity:.68; }
.collection-joker.mythic.discovered {
  border-color:#e6c151; background:linear-gradient(145deg,#39204e,#755026); color:#fff4ca;
}
@media (max-width:800px) {
  .collection-decks { grid-template-columns:repeat(2,minmax(0,1fr)); }
  .collection-jokers { grid-template-columns:repeat(2,minmax(0,1fr)); }
}
""")

print("Balatro meta profile, Collection, Seed/New Run UI applied.")
