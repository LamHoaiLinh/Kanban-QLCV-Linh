
from __future__ import annotations
import sys
from pathlib import Path

if len(sys.argv) != 2:
    raise SystemExit("Usage: balatro_meta_exact.py <open-poker-root>")

root = Path(sys.argv[1]).resolve()

def replace_once(path: str, old: str, new: str) -> None:
    p = root / path
    s = p.read_text(encoding="utf-8")
    if old not in s:
        raise SystemExit(f"Meta exact anchor not found in {path}: {old[:180]!r}")
    p.write_text(s.replace(old, new, 1), encoding="utf-8")

def replace_method(path: str, signature: str, next_signature: str, body: str) -> None:
    p = root / path
    s = p.read_text(encoding="utf-8")
    a = s.find(signature)
    b = s.find(next_signature, a + len(signature))
    if a < 0 or b < 0:
        raise SystemExit(f"Meta exact method bounds not found in {path}: {signature!r} -> {next_signature!r}")
    p.write_text(s[:a] + body + s[b:], encoding="utf-8")

# ===========================================================================
# Balatro-accurate-ish persistent meta layer for the content implemented here.
# Seeded runs are explicitly ineligible for ALL profile progression.
# ===========================================================================
meta = r"""import { JOKER_CATALOG, STAKES } from './gameState';
import { PLANET_CATALOG, SPECTRAL_CATALOG, TAROT_CATALOG, VOUCHERS, VOUCHER_UPGRADE_BASE } from './balatroShop';
import type { BossBlindKey, DeckKey, PokerHandType, StakeKey, Suit, TagKey, VoucherKey } from './types';

export type ConsumableCollectionType = 'tarot' | 'planet' | 'spectral';

export interface MetaProfile {
  version: 2;
  runsStarted: number;
  runsFinished: number;
  wins: number;
  bestAnte: number;
  totalHands: number;
  totalCardsPlayed: number;
  totalFaceCardsPlayed: number;
  totalSkips: number;
  totalDiscards: number;
  totalCardsDiscarded: number;
  maxMoney: number;
  totalShopSpend: number;
  totalRerolls: number;
  tarotShopBought: number;
  planetShopBought: number;
  playingCardsShopBought: number;
  tarotPackUsed: number;
  planetPackUsed: number;
  blankRedeemed: number;
  interestStreak: number;
  maxInterestStreak: number;
  minHandSizeEver: number;
  maxPolychromeJokers: number;
  maxEditionJokers: number;
  maxVouchersInRun: number;
  maxSuitCards: Record<Suit, number>;

  unlockedDecks: DeckKey[];
  highestStakeCleared: Partial<Record<DeckKey, number>>;
  unlockedJokers: string[];
  discoveredJokers: string[];
  unlockedVouchers: VoucherKey[];
  discoveredVouchers: VoucherKey[];
  discoveredTarots: string[];
  discoveredPlanets: string[];
  discoveredSpectrals: string[];
  discoveredBosses: BossBlindKey[];
  discoveredTags: TagKey[];
  jokerStakeStickers: Record<string, number>;

  bossHighCardWin: boolean;
  wonWithoutPair: boolean;
  wonWithoutThreeKind: boolean;
  settledRunIds: string[];
  settledEventIds: string[];
}

export interface StorageLike {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
}

export interface MetaCounterDelta {
  hands?: number;
  cardsPlayed?: number;
  faceCardsPlayed?: number;
  discards?: number;
  cardsDiscarded?: number;
  shopSpend?: number;
  rerolls?: number;
  tarotShopBought?: number;
  planetShopBought?: number;
  playingCardsShopBought?: number;
  tarotPackUsed?: number;
  planetPackUsed?: number;
  blankRedeemed?: number;
}

export const META_KEY = 'kanban-open-poker:meta-v2';

const LOCKED_JOKERS = new Set([
  'hanging-chad',
  'acrobat',
  'sock-and-buskin',
  'rough-gem',
  'bloodstone',
  'arrowhead',
  'onyx-agate',
  'bootstraps',
  'the-duo',
  'the-trio',
]);

const BASE_VOUCHERS = (Object.keys(VOUCHERS) as VoucherKey[])
  .filter((key) => !VOUCHER_UPGRADE_BASE[key]);

const SPECIALTY_WIN_DECKS: Partial<Record<DeckKey, DeckKey>> = {
  magic: 'red',
  nebula: 'blue',
  ghost: 'yellow',
  abandoned: 'green',
  checkered: 'black',
};

const STAKE_DECK_REQUIREMENT: Partial<Record<DeckKey, number>> = {
  zodiac: STAKES.red.order,
  painted: STAKES.green.order,
  anaglyph: STAKES.black.order,
  plasma: STAKES.blue.order,
  erratic: STAKES.orange.order,
};

function unique<T>(values: readonly T[]): T[] {
  return [...new Set(values)];
}

function blankSuits(): Record<Suit, number> {
  return { spades: 0, hearts: 0, diamonds: 0, clubs: 0 };
}

export function canProgressMeta(seeded: boolean): boolean {
  return !seeded;
}

export function isSeededRunInput(value: string): boolean {
  return value.trim().length > 0;
}

export function createDefaultMetaProfile(): MetaProfile {
  const baseJokers = JOKER_CATALOG
    .filter((joker) => joker.rarity === 'mythic' || !LOCKED_JOKERS.has(joker.key))
    .map((joker) => joker.key);

  return {
    version: 2,
    runsStarted: 0,
    runsFinished: 0,
    wins: 0,
    bestAnte: 1,
    totalHands: 0,
    totalCardsPlayed: 0,
    totalFaceCardsPlayed: 0,
    totalSkips: 0,
    totalDiscards: 0,
    totalCardsDiscarded: 0,
    maxMoney: 4,
    totalShopSpend: 0,
    totalRerolls: 0,
    tarotShopBought: 0,
    planetShopBought: 0,
    playingCardsShopBought: 0,
    tarotPackUsed: 0,
    planetPackUsed: 0,
    blankRedeemed: 0,
    interestStreak: 0,
    maxInterestStreak: 0,
    minHandSizeEver: 8,
    maxPolychromeJokers: 0,
    maxEditionJokers: 0,
    maxVouchersInRun: 0,
    maxSuitCards: blankSuits(),

    unlockedDecks: ['red'],
    highestStakeCleared: {},
    unlockedJokers: baseJokers,
    discoveredJokers: [],
    unlockedVouchers: [...BASE_VOUCHERS],
    discoveredVouchers: [],
    discoveredTarots: [],
    discoveredPlanets: [],
    discoveredSpectrals: [],
    discoveredBosses: [],
    discoveredTags: [],
    jokerStakeStickers: {},

    bossHighCardWin: false,
    wonWithoutPair: false,
    wonWithoutThreeKind: false,
    settledRunIds: [],
    settledEventIds: [],
  };
}

function asNumber(value: unknown, fallback = 0): number {
  const num = Number(value);
  return Number.isFinite(num) ? num : fallback;
}

export function loadMetaProfile(storage: StorageLike): MetaProfile {
  try {
    const raw = storage.getItem(META_KEY) ?? storage.getItem('kanban-open-poker:meta-v1');
    if (!raw) return refreshMetaUnlocks(createDefaultMetaProfile());
    const parsed = JSON.parse(raw) as Partial<MetaProfile>;
    const base = createDefaultMetaProfile();

    const profile: MetaProfile = {
      ...base,
      ...parsed,
      version: 2,
      runsStarted: asNumber(parsed.runsStarted),
      runsFinished: asNumber(parsed.runsFinished),
      wins: asNumber(parsed.wins),
      bestAnte: Math.max(1, asNumber(parsed.bestAnte, 1)),
      totalHands: asNumber(parsed.totalHands),
      totalCardsPlayed: asNumber(parsed.totalCardsPlayed),
      totalFaceCardsPlayed: asNumber(parsed.totalFaceCardsPlayed),
      totalSkips: asNumber(parsed.totalSkips),
      totalDiscards: asNumber(parsed.totalDiscards),
      totalCardsDiscarded: asNumber(parsed.totalCardsDiscarded),
      maxMoney: Math.max(4, asNumber(parsed.maxMoney, 4)),
      totalShopSpend: asNumber(parsed.totalShopSpend),
      totalRerolls: asNumber(parsed.totalRerolls),
      tarotShopBought: asNumber(parsed.tarotShopBought),
      planetShopBought: asNumber(parsed.planetShopBought),
      playingCardsShopBought: asNumber(parsed.playingCardsShopBought),
      tarotPackUsed: asNumber(parsed.tarotPackUsed),
      planetPackUsed: asNumber(parsed.planetPackUsed),
      blankRedeemed: asNumber(parsed.blankRedeemed),
      interestStreak: asNumber(parsed.interestStreak),
      maxInterestStreak: asNumber(parsed.maxInterestStreak),
      minHandSizeEver: Math.max(1, asNumber(parsed.minHandSizeEver, 8)),
      maxPolychromeJokers: asNumber(parsed.maxPolychromeJokers),
      maxEditionJokers: asNumber(parsed.maxEditionJokers),
      maxVouchersInRun: asNumber(parsed.maxVouchersInRun),
      maxSuitCards: { ...blankSuits(), ...(parsed.maxSuitCards ?? {}) },
      highestStakeCleared: { ...(parsed.highestStakeCleared ?? {}) },
      discoveredJokers: unique(parsed.discoveredJokers ?? []),
      discoveredVouchers: unique((parsed.discoveredVouchers ?? []) as VoucherKey[]),
      discoveredTarots: unique(parsed.discoveredTarots ?? []),
      discoveredPlanets: unique(parsed.discoveredPlanets ?? []),
      discoveredSpectrals: unique(parsed.discoveredSpectrals ?? []),
      discoveredBosses: unique((parsed.discoveredBosses ?? []) as BossBlindKey[]),
      discoveredTags: unique((parsed.discoveredTags ?? []) as TagKey[]),
      jokerStakeStickers: { ...(parsed.jokerStakeStickers ?? {}) },
      settledRunIds: unique(parsed.settledRunIds ?? []).slice(-200),
      settledEventIds: unique(parsed.settledEventIds ?? []).slice(-1000),
      // v1's unlocked arrays were generated from simplified rules. Recompute them
      // from durable evidence instead of grandfathering accidental unlocks.
      unlockedDecks: ['red'],
      unlockedJokers: [...base.unlockedJokers],
      unlockedVouchers: [...BASE_VOUCHERS],
      bossHighCardWin: Boolean(parsed.bossHighCardWin),
      wonWithoutPair: Boolean(parsed.wonWithoutPair),
      wonWithoutThreeKind: Boolean(parsed.wonWithoutThreeKind),
    };

    // Anything truly discovered in the old profile remains legitimately available.
    for (const key of profile.discoveredJokers) if (!profile.unlockedJokers.includes(key)) profile.unlockedJokers.push(key);
    for (const key of profile.discoveredVouchers) if (!profile.unlockedVouchers.includes(key)) profile.unlockedVouchers.push(key);

    return refreshMetaUnlocks(profile);
  } catch {
    return refreshMetaUnlocks(createDefaultMetaProfile());
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

export function collectionDiscoveryCount(profile: MetaProfile): number {
  return unique([
    ...profile.unlockedDecks.map((key) => `deck:${key}`),
    ...profile.discoveredJokers.map((key) => `joker:${key}`),
    ...profile.discoveredVouchers.map((key) => `voucher:${key}`),
    ...profile.discoveredTarots.map((key) => `tarot:${key}`),
    ...profile.discoveredPlanets.map((key) => `planet:${key}`),
    ...profile.discoveredSpectrals.map((key) => `spectral:${key}`),
    ...profile.discoveredBosses.map((key) => `boss:${key}`),
    ...profile.discoveredTags.map((key) => `tag:${key}`),
  ]).length;
}

function hasDeckWin(profile: MetaProfile, deck: DeckKey): boolean {
  return Number(profile.highestStakeCleared[deck] ?? -1) >= 0;
}

export function refreshMetaUnlocks(input: MetaProfile): MetaProfile {
  const profile: MetaProfile = {
    ...input,
    highestStakeCleared: { ...input.highestStakeCleared },
    maxSuitCards: { ...input.maxSuitCards },
    jokerStakeStickers: { ...input.jokerStakeStickers },
  };

  const discovery = collectionDiscoveryCount(profile);
  const decks = new Set<DeckKey>(['red']);

  // Evidence that a deck was already legitimately played/won always preserves it.
  for (const key of Object.keys(profile.highestStakeCleared) as DeckKey[]) {
    if (Number(profile.highestStakeCleared[key] ?? -1) >= 0) decks.add(key);
  }

  if (discovery >= 20) decks.add('blue');
  if (discovery >= 50) decks.add('yellow');
  if (discovery >= 75) decks.add('green');
  if (discovery >= 100) decks.add('black');

  for (const [special, base] of Object.entries(SPECIALTY_WIN_DECKS) as Array<[DeckKey, DeckKey]>) {
    if (hasDeckWin(profile, base)) decks.add(special);
  }
  const cleared = maxClearedStake(profile);
  for (const [deck, order] of Object.entries(STAKE_DECK_REQUIREMENT) as Array<[DeckKey, number]>) {
    if (cleared >= order) decks.add(deck);
  }
  profile.unlockedDecks = [...decks];

  const jokers = new Set<string>(
    JOKER_CATALOG
      .filter((joker) => joker.rarity === 'mythic' || !LOCKED_JOKERS.has(joker.key))
      .map((joker) => joker.key),
  );
  profile.discoveredJokers.forEach((key) => jokers.add(key));
  if (profile.bossHighCardWin) jokers.add('hanging-chad');
  if (profile.totalHands >= 200) jokers.add('acrobat');
  if (profile.totalFaceCardsPlayed >= 300) jokers.add('sock-and-buskin');
  if (profile.maxSuitCards.diamonds >= 30) jokers.add('rough-gem');
  if (profile.maxSuitCards.hearts >= 30) jokers.add('bloodstone');
  if (profile.maxSuitCards.spades >= 30) jokers.add('arrowhead');
  if (profile.maxSuitCards.clubs >= 30) jokers.add('onyx-agate');
  if (profile.maxPolychromeJokers >= 2) jokers.add('bootstraps');
  if (profile.wonWithoutPair) jokers.add('the-duo');
  if (profile.wonWithoutThreeKind) jokers.add('the-trio');
  profile.unlockedJokers = [...jokers];

  const vouchers = new Set<VoucherKey>(BASE_VOUCHERS);
  profile.discoveredVouchers.forEach((key) => vouchers.add(key));
  if (profile.totalShopSpend >= 2500) vouchers.add('overstock-plus');
  if (profile.maxVouchersInRun >= 10) vouchers.add('liquidation');
  if (profile.maxEditionJokers >= 5) vouchers.add('glow-up');
  if (profile.totalRerolls >= 100) vouchers.add('reroll-glut');
  if (profile.tarotPackUsed >= 25) vouchers.add('omen-globe');
  if (profile.planetPackUsed >= 25) vouchers.add('observatory');
  if (profile.totalCardsPlayed >= 2500) vouchers.add('nacho-tong');
  if (profile.totalCardsDiscarded >= 2500) vouchers.add('recyclomancy');
  if (profile.tarotShopBought >= 50) vouchers.add('tarot-tycoon');
  if (profile.planetShopBought >= 50) vouchers.add('planet-tycoon');
  if (profile.maxInterestStreak >= 10) vouchers.add('money-tree');
  if (profile.blankRedeemed >= 10) vouchers.add('antimatter');
  if (profile.playingCardsShopBought >= 20) vouchers.add('illusion');
  if (profile.bestAnte >= 12) vouchers.add('petroglyph');
  if (profile.discoveredBosses.length >= 25) vouchers.add('retcon');
  if (profile.minHandSizeEver <= 5) vouchers.add('palette');
  profile.unlockedVouchers = [...vouchers];

  return profile;
}

export function recordRunStart(input: MetaProfile, seeded = false): MetaProfile {
  if (!canProgressMeta(seeded)) return input;
  return refreshMetaUnlocks({ ...input, runsStarted: input.runsStarted + 1 });
}

export function recordRunCounters(input: MetaProfile, delta: MetaCounterDelta, seeded = false): MetaProfile {
  if (!canProgressMeta(seeded)) return input;
  return refreshMetaUnlocks({
    ...input,
    totalHands: input.totalHands + Math.max(0, delta.hands ?? 0),
    totalCardsPlayed: input.totalCardsPlayed + Math.max(0, delta.cardsPlayed ?? 0),
    totalFaceCardsPlayed: input.totalFaceCardsPlayed + Math.max(0, delta.faceCardsPlayed ?? 0),
    totalDiscards: input.totalDiscards + Math.max(0, delta.discards ?? 0),
    totalCardsDiscarded: input.totalCardsDiscarded + Math.max(0, delta.cardsDiscarded ?? 0),
    totalShopSpend: input.totalShopSpend + Math.max(0, delta.shopSpend ?? 0),
    totalRerolls: input.totalRerolls + Math.max(0, delta.rerolls ?? 0),
    tarotShopBought: input.tarotShopBought + Math.max(0, delta.tarotShopBought ?? 0),
    planetShopBought: input.planetShopBought + Math.max(0, delta.planetShopBought ?? 0),
    playingCardsShopBought: input.playingCardsShopBought + Math.max(0, delta.playingCardsShopBought ?? 0),
    tarotPackUsed: input.tarotPackUsed + Math.max(0, delta.tarotPackUsed ?? 0),
    planetPackUsed: input.planetPackUsed + Math.max(0, delta.planetPackUsed ?? 0),
    blankRedeemed: input.blankRedeemed + Math.max(0, delta.blankRedeemed ?? 0),
  });
}

export function recordLiveState(
  input: MetaProfile,
  state: {
    ante: number;
    money: number;
    handSize: number;
    vouchers: number;
    polychromeJokers: number;
    editionJokers: number;
    suitCounts: Record<Suit, number>;
  },
  seeded = false,
): MetaProfile {
  if (!canProgressMeta(seeded)) return input;
  const next: MetaProfile = {
    ...input,
    maxSuitCards: { ...input.maxSuitCards },
    bestAnte: Math.max(input.bestAnte, state.ante),
    maxMoney: Math.max(input.maxMoney, state.money),
    minHandSizeEver: Math.min(input.minHandSizeEver, state.handSize),
    maxVouchersInRun: Math.max(input.maxVouchersInRun, state.vouchers),
    maxPolychromeJokers: Math.max(input.maxPolychromeJokers, state.polychromeJokers),
    maxEditionJokers: Math.max(input.maxEditionJokers, state.editionJokers),
  };
  (Object.keys(state.suitCounts) as Suit[]).forEach((suit) => {
    next.maxSuitCards[suit] = Math.max(next.maxSuitCards[suit] ?? 0, state.suitCounts[suit] ?? 0);
  });
  return refreshMetaUnlocks(next);
}

export function recordCashout(
  input: MetaProfile,
  interest: number,
  interestCap: number,
  eventId: string,
  seeded = false,
): MetaProfile {
  if (!canProgressMeta(seeded) || input.settledEventIds.includes(eventId)) return input;
  const hitCap = interestCap > 0 && interest >= interestCap;
  const interestStreak = hitCap ? input.interestStreak + 1 : 0;
  return refreshMetaUnlocks({
    ...input,
    interestStreak,
    maxInterestStreak: Math.max(input.maxInterestStreak, interestStreak),
    settledEventIds: [...input.settledEventIds, eventId].slice(-1000),
  });
}

export function recordBossClear(
  input: MetaProfile,
  key: BossBlindKey,
  lastHandType: PokerHandType | null,
  eventId: string,
  seeded = false,
): MetaProfile {
  if (!canProgressMeta(seeded) || input.settledEventIds.includes(eventId)) return input;
  const bosses = input.discoveredBosses.includes(key) ? input.discoveredBosses : [...input.discoveredBosses, key];
  return refreshMetaUnlocks({
    ...input,
    discoveredBosses: bosses,
    bossHighCardWin: input.bossHighCardWin || lastHandType === 'High Card',
    settledEventIds: [...input.settledEventIds, eventId].slice(-1000),
  });
}

export function recordRunFinish(
  input: MetaProfile,
  runId: string,
  stats: {
    won: boolean;
    deck: DeckKey;
    stake: StakeKey;
    ante: number;
    money: number;
    jokerKeys: string[];
    handPlayCounts: Partial<Record<PokerHandType, number>>;
  },
  seeded = false,
): MetaProfile {
  if (!canProgressMeta(seeded) || input.settledRunIds.includes(runId)) return input;

  const next: MetaProfile = {
    ...input,
    highestStakeCleared: { ...input.highestStakeCleared },
    jokerStakeStickers: { ...input.jokerStakeStickers },
    runsFinished: input.runsFinished + 1,
    wins: input.wins + (stats.won ? 1 : 0),
    bestAnte: Math.max(input.bestAnte, stats.ante),
    maxMoney: Math.max(input.maxMoney, stats.money),
    settledRunIds: [...input.settledRunIds, runId].slice(-200),
  };

  if (stats.won) {
    const order = STAKES[stats.stake].order;
    next.highestStakeCleared[stats.deck] = Math.max(
      Number(next.highestStakeCleared[stats.deck] ?? -1),
      order,
    );
    for (const key of unique(stats.jokerKeys)) {
      next.jokerStakeStickers[key] = Math.max(Number(next.jokerStakeStickers[key] ?? -1), order);
    }
    if ((stats.handPlayCounts['Pair'] ?? 0) === 0) next.wonWithoutPair = true;
    if ((stats.handPlayCounts['Three of a Kind'] ?? 0) === 0) next.wonWithoutThreeKind = true;
  }

  return refreshMetaUnlocks(next);
}

export function discoverJoker(profile: MetaProfile, key: string, seeded = false): MetaProfile {
  if (!canProgressMeta(seeded) || profile.discoveredJokers.includes(key)) return profile;
  return refreshMetaUnlocks({ ...profile, discoveredJokers: [...profile.discoveredJokers, key] });
}

export function discoverVoucher(profile: MetaProfile, key: VoucherKey, seeded = false): MetaProfile {
  if (!canProgressMeta(seeded) || profile.discoveredVouchers.includes(key)) return profile;
  return refreshMetaUnlocks({ ...profile, discoveredVouchers: [...profile.discoveredVouchers, key] });
}

export function discoverConsumable(
  profile: MetaProfile,
  type: ConsumableCollectionType,
  key: string,
  seeded = false,
): MetaProfile {
  if (!canProgressMeta(seeded)) return profile;
  if (type === 'tarot') {
    if (profile.discoveredTarots.includes(key)) return profile;
    return refreshMetaUnlocks({ ...profile, discoveredTarots: [...profile.discoveredTarots, key] });
  }
  if (type === 'planet') {
    if (profile.discoveredPlanets.includes(key)) return profile;
    return refreshMetaUnlocks({ ...profile, discoveredPlanets: [...profile.discoveredPlanets, key] });
  }
  if (profile.discoveredSpectrals.includes(key)) return profile;
  return refreshMetaUnlocks({ ...profile, discoveredSpectrals: [...profile.discoveredSpectrals, key] });
}

export function discoverTag(profile: MetaProfile, key: TagKey, seeded = false): MetaProfile {
  if (!canProgressMeta(seeded) || profile.discoveredTags.includes(key)) return profile;
  return refreshMetaUnlocks({ ...profile, discoveredTags: [...profile.discoveredTags, key] });
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

export function stakeStickerName(order: number): string {
  const key = (Object.keys(STAKES) as StakeKey[]).find((stake) => STAKES[stake].order === order) ?? 'white';
  return STAKES[key].name.replace(' Stake', '');
}

export function deckUnlockDescription(profile: MetaProfile, key: DeckKey): string {
  const count = collectionDiscoveryCount(profile);
  if (key === 'red') return 'Available from the start.';
  if (key === 'blue') return `Discover 20 Collection items (${Math.min(count, 20)}/20).`;
  if (key === 'yellow') return `Discover 50 Collection items (${Math.min(count, 50)}/50).`;
  if (key === 'green') return `Discover 75 Collection items (${Math.min(count, 75)}/75).`;
  if (key === 'black') return `Discover 100 Collection items (${Math.min(count, 100)}/100).`;
  const base = SPECIALTY_WIN_DECKS[key];
  if (base) return `Win a run with ${base[0].toUpperCase() + base.slice(1)} Deck.`;
  const order = STAKE_DECK_REQUIREMENT[key];
  if (order !== undefined) {
    const stake = (Object.keys(STAKES) as StakeKey[]).find((value) => STAKES[value].order === order) ?? 'white';
    return `Win any run on ${STAKES[stake].name} or higher.`;
  }
  return 'Progress through the Collection.';
}

export function jokerUnlockDescription(profile: MetaProfile, key: string): string {
  if (!LOCKED_JOKERS.has(key)) {
    const joker = JOKER_CATALOG.find((item) => item.key === key);
    return joker?.rarity === 'mythic' ? 'Custom Mythic content; available to this build.' : 'Available from the start.';
  }
  if (key === 'hanging-chad') return 'Defeat a Boss Blind with a High Card.';
  if (key === 'acrobat') return `Play 200 hands (${Math.min(profile.totalHands, 200)}/200).`;
  if (key === 'sock-and-buskin') return `Play 300 face cards (${Math.min(profile.totalFaceCardsPlayed, 300)}/300).`;
  if (key === 'rough-gem') return `Have at least 30 Diamonds in your deck (${Math.min(profile.maxSuitCards.diamonds, 30)}/30).`;
  if (key === 'bloodstone') return `Have at least 30 Hearts in your deck (${Math.min(profile.maxSuitCards.hearts, 30)}/30).`;
  if (key === 'arrowhead') return `Have at least 30 Spades in your deck (${Math.min(profile.maxSuitCards.spades, 30)}/30).`;
  if (key === 'onyx-agate') return `Have at least 30 Clubs in your deck (${Math.min(profile.maxSuitCards.clubs, 30)}/30).`;
  if (key === 'bootstraps') return `Have at least 2 Polychrome Jokers at once (${Math.min(profile.maxPolychromeJokers, 2)}/2).`;
  if (key === 'the-duo') return 'Win a run without playing a Pair.';
  if (key === 'the-trio') return 'Win a run without playing Three of a Kind.';
  return 'Meet its Balatro unlock condition.';
}

export function voucherUnlockDescription(profile: MetaProfile, key: VoucherKey): string {
  if (!VOUCHER_UPGRADE_BASE[key]) return 'Base Voucher; available from the start.';
  if (key === 'overstock-plus') return `Spend $2500 in Shops (${Math.min(profile.totalShopSpend, 2500)}/2500).`;
  if (key === 'liquidation') return `Redeem 10 Vouchers in one run (${Math.min(profile.maxVouchersInRun, 10)}/10).`;
  if (key === 'glow-up') return `Have 5 Foil/Holographic/Polychrome Jokers at once (${Math.min(profile.maxEditionJokers, 5)}/5).`;
  if (key === 'reroll-glut') return `Reroll Shops 100 times (${Math.min(profile.totalRerolls, 100)}/100).`;
  if (key === 'omen-globe') return `Use 25 Tarot cards from Booster Packs (${Math.min(profile.tarotPackUsed, 25)}/25).`;
  if (key === 'observatory') return `Use 25 Planet cards from Booster Packs (${Math.min(profile.planetPackUsed, 25)}/25).`;
  if (key === 'nacho-tong') return `Play 2500 cards (${Math.min(profile.totalCardsPlayed, 2500)}/2500).`;
  if (key === 'recyclomancy') return `Discard 2500 cards (${Math.min(profile.totalCardsDiscarded, 2500)}/2500).`;
  if (key === 'tarot-tycoon') return `Buy 50 Tarot cards from Shops (${Math.min(profile.tarotShopBought, 50)}/50).`;
  if (key === 'planet-tycoon') return `Buy 50 Planet cards from Shops (${Math.min(profile.planetShopBought, 50)}/50).`;
  if (key === 'money-tree') return `Max interest for 10 consecutive rounds (${Math.min(profile.maxInterestStreak, 10)}/10).`;
  if (key === 'antimatter') return `Redeem Blank 10 times (${Math.min(profile.blankRedeemed, 10)}/10).`;
  if (key === 'illusion') return `Buy 20 playing cards from Shops (${Math.min(profile.playingCardsShopBought, 20)}/20).`;
  if (key === 'petroglyph') return `Reach Ante 12 (${Math.min(profile.bestAnte, 12)}/12).`;
  if (key === 'retcon') return `Discover 25 Boss Blinds (${Math.min(profile.discoveredBosses.length, 25)}/25).`;
  if (key === 'palette') return `Reduce Hand Size to 5 or less (best ${profile.minHandSizeEver}).`;
  return 'Unlock its base Voucher and complete its condition.';
}

export const COLLECTION_CATALOGS = {
  tarot: TAROT_CATALOG,
  planet: PLANET_CATALOG,
  spectral: SPECTRAL_CATALOG,
};
"""
(root / "src/game/metaProgression.ts").write_text(meta, encoding="utf-8")

# ===========================================================================
# GameState: expose profile-gated Voucher pool and meta event/counter signals.
# These counters are intentionally runtime-only; the profile is synced after
# every state mutation, preventing reloads from farming or double-counting.
# ===========================================================================
replace_once(
    "src/game/gameState.ts",
    """  private unlockedJokerKeys: Set<string> | null = null;""",
    """  private unlockedJokerKeys: Set<string> | null = null;
  private unlockedVoucherKeys: Set<VoucherKey> | null = null;

  metaHandsPlayedRun = 0;
  metaCardsPlayedRun = 0;
  metaFaceCardsPlayedRun = 0;
  metaDiscardActionsRun = 0;
  metaCardsDiscardedRun = 0;
  metaShopSpendRun = 0;
  metaShopRerollsRun = 0;
  metaTarotShopBoughtRun = 0;
  metaPlanetShopBoughtRun = 0;
  metaPlayingCardsShopBoughtRun = 0;
  metaTarotPackUsedRun = 0;
  metaPlanetPackUsedRun = 0;
  metaBlankRedeemedRun = 0;
  metaCashoutSerial = 0;
  metaLastCashoutInterest = 0;
  metaLastCashoutCap = 5;
  metaClaimedTagSerial = 0;
  metaLastClaimedTagKey: TagKey | null = null;
  metaBossClearSerial = 0;
  metaLastClearedBossKey: BossBlindKey | null = null;
  metaLastClearedBossHandType: PokerHandType | null = null;""",
)

replace_once(
    "src/game/gameState.ts",
    """  setUnlockedJokerKeys(keys: readonly string[] | null) {
    this.unlockedJokerKeys = keys ? new Set(keys) : null;
  }""",
    """  setUnlockedJokerKeys(keys: readonly string[] | null) {
    this.unlockedJokerKeys = keys ? new Set(keys) : null;
  }

  setUnlockedVoucherKeys(keys: readonly VoucherKey[] | null) {
    this.unlockedVoucherKeys = keys ? new Set(keys) : null;
  }

  private voucherMetaUnlocked(key: VoucherKey): boolean {
    return !this.unlockedVoucherKeys || this.unlockedVoucherKeys.has(key);
  }""",
)

# All voucher generation paths must respect profile unlock + per-run upgrade dependency.
game = root / "src/game/gameState.ts"
gs = game.read_text(encoding="utf-8")
gs = gs.replace(
    """        if (this.vouchers.includes(key)) return false;
        const baseKey = VOUCHER_UPGRADE_BASE[key];
        return !baseKey || this.vouchers.includes(baseKey);""",
    """        if (this.vouchers.includes(key) || !this.voucherMetaUnlocked(key)) return false;
        const baseKey = VOUCHER_UPGRADE_BASE[key];
        return !baseKey || this.vouchers.includes(baseKey);""",
)
game.write_text(gs, encoding="utf-8")

# Runtime counter resets are inserted immediately before rolling new Ante options.
game = root / "src/game/gameState.ts"
gs = game.read_text(encoding="utf-8")
anchor = "    this.rollAnteOptions();\n    this.prepareBlindSelect();"
if anchor not in gs:
    raise SystemExit("Could not locate configureRun terminal anchor")
reset = r"""    this.metaHandsPlayedRun = 0;
    this.metaCardsPlayedRun = 0;
    this.metaFaceCardsPlayedRun = 0;
    this.metaDiscardActionsRun = 0;
    this.metaCardsDiscardedRun = 0;
    this.metaShopSpendRun = 0;
    this.metaShopRerollsRun = 0;
    this.metaTarotShopBoughtRun = 0;
    this.metaPlanetShopBoughtRun = 0;
    this.metaPlayingCardsShopBoughtRun = 0;
    this.metaTarotPackUsedRun = 0;
    this.metaPlanetPackUsedRun = 0;
    this.metaBlankRedeemedRun = 0;
    this.metaCashoutSerial = 0;
    this.metaLastCashoutInterest = 0;
    this.metaLastCashoutCap = 5;
    this.metaClaimedTagSerial = 0;
    this.metaLastClaimedTagKey = null;
    this.metaBossClearSerial = 0;
    this.metaLastClearedBossKey = null;
    this.metaLastClearedBossHandType = null;
    this.rollAnteOptions();
    this.prepareBlindSelect();"""
gs = gs.replace(anchor, reset, 1)
game.write_text(gs, encoding="utf-8")

# Play / discard aggregate counters.
replace_once(
    "src/game/gameState.ts",
    """    const cards = this.selectedCards(orderIds);
    const hand = evaluateHand(cards);""",
    """    const cards = this.selectedCards(orderIds);
    this.metaHandsPlayedRun += 1;
    this.metaCardsPlayedRun += cards.length;
    this.metaFaceCardsPlayedRun += cards.filter((card) => card.rank >= 11 && card.rank <= 13).length;
    const hand = evaluateHand(cards);""",
)

# Discard selected appears after play selected and keeps same local naming.
game = root / "src/game/gameState.ts"
gs = game.read_text(encoding="utf-8")
discard_at = gs.find("  discardSelected(orderIds?: readonly string[]): PlayingCard[] | null {")
if discard_at < 0:
    raise SystemExit("Could not locate discardSelected for exact meta counters")
cards_at = gs.find("    const cards = this.selectedCards(orderIds);", discard_at)
if cards_at < 0:
    raise SystemExit("Could not locate discard cards line")
cards_end = cards_at + len("    const cards = this.selectedCards(orderIds);")
gs = gs[:cards_end] + "\n    this.metaDiscardActionsRun += 1;\n    this.metaCardsDiscardedRun += cards.length;" + gs[cards_end:]
game.write_text(gs, encoding="utf-8")

# Claiming—not merely seeing—a Tag discovers it.
replace_once(
    "src/game/gameState.ts",
    """    this.skippedBlinds += 1;
    this.applyTag(tag);""",
    """    this.skippedBlinds += 1;
    this.metaClaimedTagSerial += 1;
    this.metaLastClaimedTagKey = tag;
    this.applyTag(tag);""",
)

# Track shop spend/purchases without altering gameplay.
game = root / "src/game/gameState.ts"
gs = game.read_text(encoding="utf-8")
buy_at = gs.find("  buyOffer(")
if buy_at < 0:
    raise SystemExit("Could not locate buyOffer")
buy_end = gs.find("\n  }", buy_at)
buy_block = gs[buy_at:buy_end+4]
money_line = "    this.money -= price;"
if money_line not in buy_block:
    raise SystemExit("Could not locate buyOffer money deduction")
buy_block = buy_block.replace(
    money_line,
    """    this.money -= price;
    this.metaShopSpendRun += price;
    if (offer.item.kind === 'consumable') {
      if (offer.item.consumable.type === 'tarot') this.metaTarotShopBoughtRun += 1;
      if (offer.item.consumable.type === 'planet') this.metaPlanetShopBoughtRun += 1;
    } else if (offer.item.kind === 'playing-card') {
      this.metaPlayingCardsShopBoughtRun += 1;
    }""",
    1,
)
gs = gs[:buy_at] + buy_block + gs[buy_end+4:]
game.write_text(gs, encoding="utf-8")

# Reroll: use the price paid before it mutates to next reroll cost.
game = root / "src/game/gameState.ts"
gs = game.read_text(encoding="utf-8")
rr_at = gs.find("  rerollShop(")
if rr_at < 0:
    raise SystemExit("Could not locate rerollShop")
rr_end = gs.find("\n  }", rr_at)
rr_block = gs[rr_at:rr_end+4]
rr_money = "    this.money -= this.shop.rerollCost;"
if rr_money not in rr_block:
    raise SystemExit("Could not locate rerollShop money deduction")
rr_block = rr_block.replace(
    rr_money,
    """    const paidRerollCost = this.shop.rerollCost;
    this.money -= paidRerollCost;
    this.metaShopSpendRun += paidRerollCost;
    this.metaShopRerollsRun += 1;""",
    1,
)
gs = gs[:rr_at] + rr_block + gs[rr_end+4:]
game.write_text(gs, encoding="utf-8")

# Booster purchase counts toward shop spend.
replace_once(
    "src/game/gameState.ts",
    """    this.money -= price;
    offer.sold = true;
    const config = boosterConfig(offer.type, offer.size);""",
    """    this.money -= price;
    this.metaShopSpendRun += price;
    offer.sold = true;
    const config = boosterConfig(offer.type, offer.size);""",
)

# Pack Tarot/Planet usage is counted only after a choice is successfully consumed.
replace_once(
    "src/game/gameState.ts",
    """  private finishBoosterChoice(choice: BoosterChoice): 'applied' {
    choice.taken = true;""",
    """  private finishBoosterChoice(choice: BoosterChoice): 'applied' {
    if (choice.item.kind === 'consumable') {
      if (choice.item.consumable.type === 'tarot') this.metaTarotPackUsedRun += 1;
      if (choice.item.consumable.type === 'planet') this.metaPlanetPackUsedRun += 1;
    }
    choice.taken = true;""",
)

# Voucher purchase uses profile gate, shop-spend totals and Blank progress.
game = root / "src/game/gameState.ts"
gs = game.read_text(encoding="utf-8")
v_at = gs.find("  buyVoucher(): boolean {")
if v_at < 0:
    raise SystemExit("Could not locate buyVoucher")
v_end = gs.find("\n  }", v_at)
v_block = gs[v_at:v_end+4]
v_block = v_block.replace(
    "    if (this.money < voucher.price) return false;",
    "    if (!this.voucherMetaUnlocked(voucher.key) || this.money < voucher.price) return false;",
    1,
)
v_block = v_block.replace(
    "    this.money -= voucher.price;",
    """    this.money -= voucher.price;
    this.metaShopSpendRun += voucher.price;
    if (voucher.key === 'blank') this.metaBlankRedeemedRun += 1;""",
    1,
)
gs = gs[:v_at] + v_block + gs[v_end+4:]
game.write_text(gs, encoding="utf-8")

# Cashout / Boss-clear signals. Use stable semantic anchors after content parity.
game = root / "src/game/gameState.ts"
gs = game.read_text(encoding="utf-8")
interest_line = "    const interest = isGreenDeck ? 0 : Math.min(interestCap, Math.floor(Math.max(0, this.money) / 5));"
if interest_line not in gs:
    raise SystemExit("Could not locate exact interest line for meta progression")
gs = gs.replace(
    interest_line,
    interest_line + """
    this.metaCashoutSerial += 1;
    this.metaLastCashoutInterest = interest;
    this.metaLastCashoutCap = interestCap;""",
    1,
)
boss_anchor = "    const clearedBlind = this.blindIndex;"
if boss_anchor not in gs:
    raise SystemExit("Could not locate clearedBlind anchor")
gs = gs.replace(
    boss_anchor,
    boss_anchor + """
    if (clearedBlind === 2) {
      this.metaBossClearSerial += 1;
      this.metaLastClearedBossKey = this.bossBlindKey;
      this.metaLastClearedBossHandType = this.lastScore?.hand.type ?? null;
    }""",
    1,
)
game.write_text(gs, encoding="utf-8")

print("Balatro exact meta core applied.")
