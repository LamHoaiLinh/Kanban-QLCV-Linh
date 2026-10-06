
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
  maxVouchersRedeemedRun: number;
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
    maxVouchersRedeemedRun: 0,
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
      maxVouchersRedeemedRun: asNumber((parsed as any).maxVouchersRedeemedRun ?? (parsed as any).maxVouchersInRun),
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
  if (profile.maxVouchersRedeemedRun >= 10) vouchers.add('liquidation');
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
    vouchersRedeemed: number;
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
    maxVouchersRedeemedRun: Math.max(input.maxVouchersRedeemedRun, state.vouchersRedeemed),
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
  if (key === 'liquidation') return `Redeem 10 Vouchers in one run (${Math.min(profile.maxVouchersRedeemedRun, 10)}/10).`;
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
  metaVouchersRedeemedRun = 0;
  metaCashoutSerial = 0;
  metaLastCashoutInterest = 0;
  metaLastCashoutCap = 5;
  metaClaimedTagSerial = 0;
  metaLastClaimedTagKey: TagKey | null = null;
  metaBossClearSerial = 0;
  metaLastClearedBossKey: BossBlindKey | null = null;
  metaLastClearedBossHandType: PokerHandType | null = null;
  metaBoosterChoiceSerial = 0;
  metaLastBoosterJokerKey: string | null = null;
  metaLastBoosterConsumableType: 'tarot' | 'planet' | 'spectral' | null = null;
  metaLastBoosterConsumableKey: string | null = null;""",
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
    this.metaVouchersRedeemedRun = 0;
    this.metaCashoutSerial = 0;
    this.metaLastCashoutInterest = 0;
    this.metaLastCashoutCap = 5;
    this.metaClaimedTagSerial = 0;
    this.metaLastClaimedTagKey = null;
    this.metaBossClearSerial = 0;
    this.metaLastClearedBossKey = null;
    this.metaLastClearedBossHandType = null;
    this.metaBoosterChoiceSerial = 0;
    this.metaLastBoosterJokerKey = null;
    this.metaLastBoosterConsumableType = null;
    this.metaLastBoosterConsumableKey = null;
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
    this.metaBoosterChoiceSerial += 1;
    this.metaLastBoosterJokerKey = choice.item.kind === 'joker' ? choice.item.joker.key : null;
    this.metaLastBoosterConsumableType = choice.item.kind === 'consumable' ? choice.item.consumable.type : null;
    this.metaLastBoosterConsumableKey = choice.item.kind === 'consumable' ? choice.item.consumable.key : null;
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
    this.metaVouchersRedeemedRun += 1;
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


# ===========================================================================
# UI/session integration: seeded practice isolation, 8-tab Collection, exact
# lock tooltips, per-Joker Stake stickers and progression event syncing.
# ===========================================================================
replace_once(
    "src/main.ts",
    """import {
  discoverBoss, discoverJoker, discoverTag, loadMetaProfile, makeMetaRunId,
  maxUnlockedStakeOrder, recordRunFinish, recordRunStart, refreshMetaUnlocks,
  saveMetaProfile, seedFromText,
} from './game/metaProgression';""",
    """import {
  canProgressMeta, collectionDiscoveryCount, deckUnlockDescription,
  discoverConsumable, discoverJoker, discoverTag, discoverVoucher,
  isSeededRunInput, jokerUnlockDescription, loadMetaProfile, makeMetaRunId,
  maxUnlockedStakeOrder, recordBossClear, recordCashout, recordLiveState,
  recordRunCounters, recordRunFinish, recordRunStart, refreshMetaUnlocks,
  saveMetaProfile, seedFromText, stakeStickerName, voucherUnlockDescription,
} from './game/metaProgression';""",
)

replace_once(
    "src/main.ts",
    """import { evaluateHand } from './game/pokerEngine';""",
    """import { evaluateHand } from './game/pokerEngine';
import { PLANET_CATALOG, SPECTRAL_CATALOG, TAROT_CATALOG, VOUCHERS } from './game/balatroShop';""",
)

replace_once(
    "src/main.ts",
    """  metaRunId?: string;
  savedAt: number;""",
    """  metaRunId?: string;
  seededRun?: boolean;
  savedAt: number;""",
)
replace_once(
    "src/main.ts",
    """      metaRunId,
      savedAt: Date.now(),""",
    """      metaRunId,
      seededRun,
      savedAt: Date.now(),""",
)

replace_once(
    "src/main.ts",
    """let metaProfile = refreshMetaUnlocks(loadMetaProfile(localStorage));
state.setUnlockedJokerKeys(metaProfile.unlockedJokers);
let metaRunId = restoredRun?.metaRunId ?? makeMetaRunId(state.config.seed);""",
    """let metaProfile = refreshMetaUnlocks(loadMetaProfile(localStorage));
state.setUnlockedJokerKeys(metaProfile.unlockedJokers);
state.setUnlockedVoucherKeys(metaProfile.unlockedVouchers);
let metaRunId = restoredRun?.metaRunId ?? makeMetaRunId(state.config.seed);
let seededRun = restoredRun?.seededRun ?? false;

const metaSeen = {
  hands: 0,
  cardsPlayed: 0,
  faceCardsPlayed: 0,
  discards: 0,
  cardsDiscarded: 0,
  shopSpend: 0,
  rerolls: 0,
  tarotShopBought: 0,
  planetShopBought: 0,
  playingCardsShopBought: 0,
  tarotPackUsed: 0,
  planetPackUsed: 0,
  blankRedeemed: 0,
  cashouts: 0,
  claimedTags: 0,
  bossClears: 0,
  boosterChoices: 0,
};

function resetMetaSeen() {
  metaSeen.hands = state.metaHandsPlayedRun;
  metaSeen.cardsPlayed = state.metaCardsPlayedRun;
  metaSeen.faceCardsPlayed = state.metaFaceCardsPlayedRun;
  metaSeen.discards = state.metaDiscardActionsRun;
  metaSeen.cardsDiscarded = state.metaCardsDiscardedRun;
  metaSeen.shopSpend = state.metaShopSpendRun;
  metaSeen.rerolls = state.metaShopRerollsRun;
  metaSeen.tarotShopBought = state.metaTarotShopBoughtRun;
  metaSeen.planetShopBought = state.metaPlanetShopBoughtRun;
  metaSeen.playingCardsShopBought = state.metaPlayingCardsShopBoughtRun;
  metaSeen.tarotPackUsed = state.metaTarotPackUsedRun;
  metaSeen.planetPackUsed = state.metaPlanetPackUsedRun;
  metaSeen.blankRedeemed = state.metaBlankRedeemedRun;
  metaSeen.cashouts = state.metaCashoutSerial;
  metaSeen.claimedTags = state.metaClaimedTagSerial;
  metaSeen.bossClears = state.metaBossClearSerial;
  metaSeen.boosterChoices = state.metaBoosterChoiceSerial;
}""",
)

replace_once(
    "src/main.ts",
    """const collectionStats = $('collection-stats');
const collectionDecks = $('collection-decks');
const collectionJokers = $('collection-jokers');
const btnCollectionBack = $<HTMLButtonElement>('btn-collection-back');""",
    """const collectionStats = $('collection-stats');
const collectionTabs = $('collection-tabs');
const collectionGrid = $('collection-grid');
const btnCollectionBack = $<HTMLButtonElement>('btn-collection-back');
const setupSeedMode = $('setup-seed-mode');""",
)

main = root / "src/main.ts"
src = main.read_text(encoding="utf-8")
a = src.find("function renderCollection() {")
b = src.find("function renderSetup() {", a)
if a < 0 or b < 0:
    raise SystemExit("Could not locate Collection/meta sync block")

collection_sync = r"""type CollectionTab = 'decks' | 'jokers' | 'vouchers' | 'tarot' | 'planet' | 'spectral' | 'blinds' | 'tags';
let collectionTab: CollectionTab = 'decks';

const COLLECTION_TABS: Array<[CollectionTab, string]> = [
  ['decks', 'Decks'],
  ['jokers', 'Jokers'],
  ['vouchers', 'Vouchers'],
  ['tarot', 'Tarot'],
  ['planet', 'Planet'],
  ['spectral', 'Spectral'],
  ['blinds', 'Blinds'],
  ['tags', 'Tags'],
];

function showCollectionInfo(kind: string, name: string, desc: string, meta: string, anchor: HTMLElement) {
  itemInfoKind.textContent = kind;
  itemInfoName.textContent = name;
  itemInfoDesc.textContent = desc;
  itemInfoMeta.textContent = meta;
  itemInfo.classList.remove('hidden');
  const rect = anchor.getBoundingClientRect();
  const box = itemInfo.getBoundingClientRect();
  const left = Math.min(window.innerWidth - box.width - 12, Math.max(12, rect.left));
  const top = Math.min(window.innerHeight - box.height - 12, Math.max(12, rect.bottom + 8));
  itemInfo.style.left = `${left}px`;
  itemInfo.style.top = `${top}px`;
}

function makeCollectionCard(options: {
  kind: string;
  name: string;
  description: string;
  status: 'locked' | 'undiscovered' | 'discovered';
  meta?: string;
  condition?: string;
  className?: string;
}): HTMLElement {
  const card = document.createElement('article');
  card.className = `collection-card ${options.status}${options.className ? ` ${options.className}` : ''}`;
  const status = document.createElement('span');
  status.className = 'collection-card-status';
  status.textContent = options.status === 'locked'
    ? 'LOCKED'
    : options.status === 'undiscovered' ? 'NOT DISCOVERED' : 'DISCOVERED';
  const name = document.createElement('strong');
  name.textContent = options.status === 'undiscovered' ? '???' : options.name;
  const desc = document.createElement('p');
  desc.textContent = options.status === 'locked'
    ? (options.condition ?? 'Complete the unlock condition.')
    : options.status === 'undiscovered'
      ? 'Available, but not yet discovered in a normal unseeded run.'
      : options.description;
  const meta = document.createElement('small');
  meta.textContent = options.meta ?? '';
  card.append(status, name, desc, meta);
  const detail = options.status === 'locked'
    ? `Unlock: ${options.condition ?? 'Complete the unlock condition.'}`
    : options.meta ?? (options.status === 'undiscovered' ? 'Obtain this item in a normal unseeded run to discover it.' : '');
  card.title = `${options.name}\n${detail}`.trim();
  card.tabIndex = 0;
  const open = () => showCollectionInfo(
    options.status === 'locked' ? `LOCKED ${options.kind}` : options.kind,
    options.name,
    options.status === 'undiscovered' ? 'Not discovered yet.' : options.description,
    detail,
    card,
  );
  card.addEventListener('click', open);
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      open();
    }
  });
  return card;
}

function renderCollection() {
  const discovered = collectionDiscoveryCount(metaProfile);
  collectionStats.textContent = seededRun
    ? `SEEDED PRACTICE · META OFF · Collection ${discovered} discovered · Profile is read-only this run`
    : `Collection ${discovered} · Runs ${metaProfile.runsFinished}/${metaProfile.runsStarted} · Wins ${metaProfile.wins} · Best Ante ${metaProfile.bestAnte}`;

  collectionTabs.replaceChildren();
  for (const [key, label] of COLLECTION_TABS) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `collection-tab${collectionTab === key ? ' active' : ''}`;
    button.textContent = label;
    button.addEventListener('click', () => {
      collectionTab = key;
      renderCollection();
      audio.play('buttonClick');
    });
    collectionTabs.appendChild(button);
  }

  collectionGrid.replaceChildren();

  if (collectionTab === 'decks') {
    (Object.keys(DECKS) as DeckKey[]).forEach((key) => {
      const unlocked = metaProfile.unlockedDecks.includes(key);
      const cleared = Number(metaProfile.highestStakeCleared[key] ?? -1);
      const sticker = cleared >= 0 ? `${stakeStickerName(cleared)} Stake sticker` : 'No win sticker yet';
      collectionGrid.appendChild(makeCollectionCard({
        kind: 'DECK',
        name: DECKS[key].name,
        description: DECKS[key].description,
        status: unlocked ? 'discovered' : 'locked',
        meta: unlocked ? sticker : '',
        condition: deckUnlockDescription(metaProfile, key),
        className: `deck-${key}`,
      }));
    });
    return;
  }

  if (collectionTab === 'jokers') {
    for (const joker of JOKER_CATALOG) {
      const unlocked = metaProfile.unlockedJokers.includes(joker.key);
      const found = metaProfile.discoveredJokers.includes(joker.key);
      const sticker = Number(metaProfile.jokerStakeStickers[joker.key] ?? -1);
      const stickerText = sticker >= 0 ? `${stakeStickerName(sticker)} Stake sticker` : 'No Stake sticker';
      const custom = joker.rarity === 'mythic' ? ' · CUSTOM MYTHIC' : '';
      collectionGrid.appendChild(makeCollectionCard({
        kind: `${joker.rarity.toUpperCase()} JOKER`,
        name: joker.name,
        description: joker.description,
        status: !unlocked ? 'locked' : found ? 'discovered' : 'undiscovered',
        meta: `${stickerText}${custom}`,
        condition: jokerUnlockDescription(metaProfile, joker.key),
        className: `joker-${joker.rarity}`,
      }));
    }
    return;
  }

  if (collectionTab === 'vouchers') {
    (Object.keys(VOUCHERS) as Array<keyof typeof VOUCHERS>).forEach((key) => {
      const voucher = VOUCHERS[key];
      const unlocked = metaProfile.unlockedVouchers.includes(key);
      const found = metaProfile.discoveredVouchers.includes(key);
      collectionGrid.appendChild(makeCollectionCard({
        kind: 'VOUCHER',
        name: voucher.name,
        description: voucher.description,
        status: !unlocked ? 'locked' : found ? 'discovered' : 'undiscovered',
        meta: `Redeem $${voucher.price}`,
        condition: voucherUnlockDescription(metaProfile, key),
      }));
    });
    return;
  }

  if (collectionTab === 'tarot' || collectionTab === 'planet' || collectionTab === 'spectral') {
    const catalog = collectionTab === 'tarot' ? TAROT_CATALOG : collectionTab === 'planet' ? PLANET_CATALOG : SPECTRAL_CATALOG;
    const foundKeys = collectionTab === 'tarot'
      ? metaProfile.discoveredTarots
      : collectionTab === 'planet' ? metaProfile.discoveredPlanets : metaProfile.discoveredSpectrals;
    for (const item of catalog) {
      const found = foundKeys.includes(item.key);
      collectionGrid.appendChild(makeCollectionCard({
        kind: collectionTab.toUpperCase(),
        name: item.name,
        description: item.description,
        status: found ? 'discovered' : 'undiscovered',
        meta: `Price $${item.price}`,
      }));
    }
    return;
  }

  if (collectionTab === 'blinds') {
    const smallFound = metaProfile.runsFinished > 0 || metaProfile.totalHands > 0;
    collectionGrid.appendChild(makeCollectionCard({
      kind: 'BLIND', name: 'Small Blind', description: 'First Blind of an Ante.', status: smallFound ? 'discovered' : 'undiscovered',
    }));
    collectionGrid.appendChild(makeCollectionCard({
      kind: 'BLIND', name: 'Big Blind', description: 'Second Blind of an Ante.', status: smallFound ? 'discovered' : 'undiscovered',
    }));
    (Object.keys(BOSS_BLINDS) as Array<keyof typeof BOSS_BLINDS>).forEach((key) => {
      const boss = BOSS_BLINDS[key];
      const found = metaProfile.discoveredBosses.includes(key);
      collectionGrid.appendChild(makeCollectionCard({
        kind: 'BOSS BLIND',
        name: boss.name,
        description: boss.description,
        status: found ? 'discovered' : 'undiscovered',
        meta: `Target ×${boss.targetMult}`,
      }));
    });
    return;
  }

  (Object.keys(TAGS) as Array<keyof typeof TAGS>).forEach((key) => {
    const tag = TAGS[key];
    const found = metaProfile.discoveredTags.includes(key);
    collectionGrid.appendChild(makeCollectionCard({
      kind: 'TAG',
      name: tag.name,
      description: tag.description,
      status: found ? 'discovered' : 'undiscovered',
    }));
  });
}

function syncMetaProgression() {
  if (!canProgressMeta(seededRun)) {
    state.setUnlockedJokerKeys(metaProfile.unlockedJokers);
    state.setUnlockedVoucherKeys(metaProfile.unlockedVouchers);
    resetMetaSeen();
    if (activeGamePanel === 'collection') renderCollection();
    return;
  }

  const delta = {
    hands: Math.max(0, state.metaHandsPlayedRun - metaSeen.hands),
    cardsPlayed: Math.max(0, state.metaCardsPlayedRun - metaSeen.cardsPlayed),
    faceCardsPlayed: Math.max(0, state.metaFaceCardsPlayedRun - metaSeen.faceCardsPlayed),
    discards: Math.max(0, state.metaDiscardActionsRun - metaSeen.discards),
    cardsDiscarded: Math.max(0, state.metaCardsDiscardedRun - metaSeen.cardsDiscarded),
    shopSpend: Math.max(0, state.metaShopSpendRun - metaSeen.shopSpend),
    rerolls: Math.max(0, state.metaShopRerollsRun - metaSeen.rerolls),
    tarotShopBought: Math.max(0, state.metaTarotShopBoughtRun - metaSeen.tarotShopBought),
    planetShopBought: Math.max(0, state.metaPlanetShopBoughtRun - metaSeen.planetShopBought),
    playingCardsShopBought: Math.max(0, state.metaPlayingCardsShopBoughtRun - metaSeen.playingCardsShopBought),
    tarotPackUsed: Math.max(0, state.metaTarotPackUsedRun - metaSeen.tarotPackUsed),
    planetPackUsed: Math.max(0, state.metaPlanetPackUsedRun - metaSeen.planetPackUsed),
    blankRedeemed: Math.max(0, state.metaBlankRedeemedRun - metaSeen.blankRedeemed),
  };
  metaProfile = recordRunCounters(metaProfile, delta, false);

  metaSeen.hands = state.metaHandsPlayedRun;
  metaSeen.cardsPlayed = state.metaCardsPlayedRun;
  metaSeen.faceCardsPlayed = state.metaFaceCardsPlayedRun;
  metaSeen.discards = state.metaDiscardActionsRun;
  metaSeen.cardsDiscarded = state.metaCardsDiscardedRun;
  metaSeen.shopSpend = state.metaShopSpendRun;
  metaSeen.rerolls = state.metaShopRerollsRun;
  metaSeen.tarotShopBought = state.metaTarotShopBoughtRun;
  metaSeen.planetShopBought = state.metaPlanetShopBoughtRun;
  metaSeen.playingCardsShopBought = state.metaPlayingCardsShopBoughtRun;
  metaSeen.tarotPackUsed = state.metaTarotPackUsedRun;
  metaSeen.planetPackUsed = state.metaPlanetPackUsedRun;
  metaSeen.blankRedeemed = state.metaBlankRedeemedRun;

  const suitCounts = { spades: 0, hearts: 0, diamonds: 0, clubs: 0 };
  for (const card of state.ownedDeck) suitCounts[card.suit] += 1;
  const editionJokers = state.jokers.filter((joker) =>
    joker.edition === 'foil' || joker.edition === 'holographic' || joker.edition === 'polychrome'
  ).length;
  metaProfile = recordLiveState(metaProfile, {
    ante: state.ante,
    money: state.money,
    handSize: state.config.handSize,
    vouchersRedeemed: state.metaVouchersRedeemedRun,
    polychromeJokers: state.jokers.filter((joker) => joker.edition === 'polychrome').length,
    editionJokers,
    suitCounts,
  }, false);

  for (const joker of state.jokers) metaProfile = discoverJoker(metaProfile, joker.key);
  for (const voucher of state.vouchers) metaProfile = discoverVoucher(metaProfile, voucher);
  for (const consumable of state.consumables) metaProfile = discoverConsumable(metaProfile, consumable.type, consumable.key);

  // Pack content becomes "discovered" only when actually taken/used, not merely
  // because it was visible among the choices.
  if (state.metaBoosterChoiceSerial > metaSeen.boosterChoices) {
    if (state.metaLastBoosterJokerKey) {
      metaProfile = discoverJoker(metaProfile, state.metaLastBoosterJokerKey);
    }
    if (state.metaLastBoosterConsumableType && state.metaLastBoosterConsumableKey) {
      metaProfile = discoverConsumable(
        metaProfile,
        state.metaLastBoosterConsumableType,
        state.metaLastBoosterConsumableKey,
      );
    }
    metaSeen.boosterChoices = state.metaBoosterChoiceSerial;
  }

  if (state.metaClaimedTagSerial > metaSeen.claimedTags && state.metaLastClaimedTagKey) {
    metaProfile = discoverTag(metaProfile, state.metaLastClaimedTagKey);
    metaSeen.claimedTags = state.metaClaimedTagSerial;
  }

  if (state.metaBossClearSerial > metaSeen.bossClears && state.metaLastClearedBossKey) {
    metaProfile = recordBossClear(
      metaProfile,
      state.metaLastClearedBossKey,
      state.metaLastClearedBossHandType,
      `${metaRunId}:boss:${state.metaBossClearSerial}`,
    );
    metaSeen.bossClears = state.metaBossClearSerial;
  }

  if (state.metaCashoutSerial > metaSeen.cashouts) {
    metaProfile = recordCashout(
      metaProfile,
      state.metaLastCashoutInterest,
      state.metaLastCashoutCap,
      `${metaRunId}:cashout:${state.metaCashoutSerial}`,
    );
    metaSeen.cashouts = state.metaCashoutSerial;
  }

  if ((state.phase === 'win' || state.phase === 'game-over') && !metaProfile.settledRunIds.includes(metaRunId)) {
    metaProfile = recordRunFinish(metaProfile, metaRunId, {
      won: state.phase === 'win',
      deck: state.deckKey,
      stake: state.stakeKey,
      ante: state.ante,
      money: state.money,
      jokerKeys: state.jokers.map((joker) => joker.key),
      handPlayCounts: state.handPlayCounts,
    }, false);
  }

  metaProfile = refreshMetaUnlocks(metaProfile);
  state.setUnlockedJokerKeys(metaProfile.unlockedJokers);
  state.setUnlockedVoucherKeys(metaProfile.unlockedVouchers);
  saveMetaProfile(localStorage, metaProfile);
  if (activeGamePanel === 'collection') renderCollection();
}

"""
src = src[:a] + collection_sync + src[b:]
main.write_text(src, encoding="utf-8")

replace_once(
    "src/main.ts",
    """    button.disabled = !deckUnlocked;""",
    """    button.disabled = false;
    button.setAttribute('aria-disabled', String(!deckUnlocked));
    button.title = deckUnlocked ? deck.description : deckUnlockDescription(metaProfile, key);""",
)
replace_once(
    "src/main.ts",
    """    const desc = document.createElement('span');
    desc.textContent = deck.description;""",
    """    const desc = document.createElement('span');
    desc.textContent = deckUnlocked ? deck.description : deckUnlockDescription(metaProfile, key);""",
)
replace_once(
    "src/main.ts",
    """    button.addEventListener('click', () => {
      if (!deckUnlocked) return;
      selectedSetupDeck = key;""",
    """    button.addEventListener('click', () => {
      if (!deckUnlocked) {
        showCollectionInfo('LOCKED DECK', deck.name, deck.description, deckUnlockDescription(metaProfile, key), button);
        return;
      }
      selectedSetupDeck = key;""",
)

replace_once(
    "index.html",
    """          <div class="setup-seed-row">
            <input id="setup-seed" class="setup-seed" type="text" inputmode="text" placeholder="Blank = random seed">
            <button id="btn-setup-random-seed" class="btn btn-ghost" type="button">Random</button>
          </div>
          <button id="btn-setup-start" class="btn btn-play" type="button">Play</button>""",
    """          <div class="setup-seed-row">
            <input id="setup-seed" class="setup-seed" type="text" inputmode="text" placeholder="Blank = Normal Run">
            <button id="btn-setup-random-seed" class="btn btn-ghost" type="button">Practice Seed</button>
          </div>
          <p id="setup-seed-mode" class="setup-seed-mode normal">NORMAL RUN · Meta progression enabled</p>
          <button id="btn-setup-start" class="btn btn-play" type="button">Play</button>""",
)

html = root / "index.html"
hs = html.read_text(encoding="utf-8")
ha = hs.find('      <div id="collection-overlay"')
hb = hs.find('      <div id="options-overlay"', ha)
if ha < 0 or hb < 0:
    raise SystemExit("Could not locate Collection overlay bounds")
collection_markup = """      <div id="collection-overlay" class="kanban-game-panel-overlay hidden" aria-hidden="true">
        <section class="kanban-game-panel collection-panel" aria-label="Collection">
          <div class="panel-kicker">COLLECTION</div>
          <div id="collection-stats" class="collection-stats"></div>
          <nav id="collection-tabs" class="collection-tabs" aria-label="Collection categories"></nav>
          <div id="collection-grid" class="collection-grid"></div>
          <button id="btn-collection-back" class="panel-back-btn" type="button">Back</button>
        </section>
      </div>

"""
hs = hs[:ha] + collection_markup + hs[hb:]
html.write_text(hs, encoding="utf-8")

replace_once(
    "src/main.ts",
    """btnSetupStart.addEventListener('click', () => {
  const seed = seedFromText(setupSeedInput.value);
  metaRunId = makeMetaRunId(seed);
  metaProfile = recordRunStart(metaProfile);
  saveMetaProfile(localStorage, metaProfile);
  state.setUnlockedJokerKeys(metaProfile.unlockedJokers);
  state.configureRun(selectedSetupDeck, setupStakeEl.value as StakeKey, seed);
  setupSeedInput.value = String(seed);
  resetHandPlayCounts();""",
    """btnSetupStart.addEventListener('click', () => {
  const seedText = setupSeedInput.value.trim();
  seededRun = isSeededRunInput(seedText);
  const seed = seedFromText(seedText);
  metaRunId = makeMetaRunId(seed);
  metaProfile = recordRunStart(metaProfile, seededRun);
  saveMetaProfile(localStorage, metaProfile);
  state.setUnlockedJokerKeys(metaProfile.unlockedJokers);
  state.setUnlockedVoucherKeys(metaProfile.unlockedVouchers);
  state.configureRun(selectedSetupDeck, setupStakeEl.value as StakeKey, seed);
  resetMetaSeen();
  resetHandPlayCounts();""",
)

replace_once(
    "src/main.ts",
    """btnSetupRandomSeed.addEventListener('click', () => {
  setupSeedInput.value = String(seedFromText(''));
  audio.play('buttonClick');
});""",
    """function refreshSeedMode() {
  const practice = isSeededRunInput(setupSeedInput.value);
  setupSeedMode.textContent = practice
    ? 'SEEDED PRACTICE · Meta / unlocks / discovery / Stake stickers disabled'
    : 'NORMAL RUN · Meta progression enabled';
  setupSeedMode.classList.toggle('practice', practice);
  setupSeedMode.classList.toggle('normal', !practice);
}

setupSeedInput.addEventListener('input', refreshSeedMode);
btnSetupRandomSeed.addEventListener('click', () => {
  setupSeedInput.value = String(seedFromText(''));
  refreshSeedMode();
  audio.play('buttonClick');
});""",
)

replace_once(
    "src/main.ts",
    """  metaRunId = makeMetaRunId(state.config.seed);
  setupSeedInput.value = '';
  selectedSetupDeck = metaProfile.unlockedDecks.includes(state.deckKey) ? state.deckKey : 'red';""",
    """  metaRunId = makeMetaRunId(state.config.seed);
  seededRun = false;
  setupSeedInput.value = '';
  refreshSeedMode();
  resetMetaSeen();
  selectedSetupDeck = metaProfile.unlockedDecks.includes(state.deckKey) ? state.deckKey : 'red';""",
)

main = root / "src/main.ts"
src = main.read_text(encoding="utf-8")
info_at = src.find("function showItemInfo(")
meta_at = src.find("  itemInfoMeta.textContent = meta.join(' · ');", info_at)
if info_at < 0 or meta_at < 0:
    raise SystemExit("Could not locate final Joker info meta line")
stake_info = r"""  if (joker) {
    const permanentStake = Number(metaProfile.jokerStakeStickers[joker.key] ?? -1);
    if (permanentStake >= 0) meta.push(`${stakeStickerName(permanentStake)} Stake Sticker`);
  }
"""
src = src[:meta_at] + stake_info + src[meta_at:]

live_at = src.find("        if (live) baseMeta.push(live);", info_at)
if live_at >= 0:
    live_sticker = r"""        const permanentStake = Number(metaProfile.jokerStakeStickers[openJoker.key] ?? -1);
        if (permanentStake >= 0) baseMeta.push(`${stakeStickerName(permanentStake)} Stake Sticker`);
"""
    src = src[:live_at] + live_sticker + src[live_at:]
main.write_text(src, encoding="utf-8")

main = root / "src/main.ts"
src = main.read_text(encoding="utf-8")
needle = "      slot.textContent = shortName(joker.name);"
if needle not in src:
    raise SystemExit("Could not locate Joker inventory slot text")
src = src.replace(
    needle,
    """      slot.textContent = shortName(joker.name);
      const stakeSticker = Number(metaProfile.jokerStakeStickers[joker.key] ?? -1);
      if (stakeSticker >= 0) {
        const badge = document.createElement('span');
        badge.className = `joker-stake-sticker stake-${stakeSticker}`;
        badge.textContent = stakeStickerName(stakeSticker).slice(0, 1);
        badge.title = `${stakeStickerName(stakeSticker)} Stake Sticker`;
        slot.appendChild(badge);
      }""",
    1,
)
main.write_text(src, encoding="utf-8")

replace_once(
    "src/main.ts",
    """reflowHand(0.6);
updateHud();
saveCurrentRun();""",
    """refreshSeedMode();
reflowHand(0.6);
updateHud();
saveCurrentRun();""",
)

style = root / "src/style.css"
with style.open("a", encoding="utf-8") as f:
    f.write(r"""
.setup-deck-card.locked {
  pointer-events: auto !important;
  opacity: .55 !important;
}
.setup-seed-mode {
  margin: -5px 0 12px;
  padding: 8px 10px;
  border-radius: 8px;
  text-align: center;
  font: 9px "Silkscreen", monospace;
  line-height: 1.5;
}
.setup-seed-mode.normal { background: #244e3c; color: #bfffd8; border: 2px solid #4e9c72; }
.setup-seed-mode.practice { background: #5a3b20; color: #ffe0a2; border: 2px solid #b37c35; }

.collection-panel { width: min(1080px, calc(100vw - 28px)) !important; }
.collection-tabs {
  display: flex;
  gap: 6px;
  margin: 10px 0;
  padding-bottom: 5px;
  overflow-x: auto;
}
.collection-tab {
  flex: 0 0 auto;
  border: 2px solid #172326;
  border-radius: 8px;
  padding: 8px 10px;
  background: #68787b;
  color: #eef3f4;
  font: 9px "Silkscreen", monospace;
  cursor: pointer;
}
.collection-tab.active {
  background: linear-gradient(180deg,#ff695c,#d83c32);
  border-color: #69241e;
  box-shadow: 0 3px 0 #59221d;
}
.collection-grid {
  display: grid;
  grid-template-columns: repeat(5,minmax(0,1fr));
  gap: 8px;
  max-height: 56vh;
  overflow: auto;
  padding: 3px;
}
.collection-card {
  min-height: 132px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 7px;
  padding: 10px;
  border: 2px solid #566a6f;
  border-radius: 10px;
  background: linear-gradient(180deg,#dfe3e5,#b9c2c6);
  color: #27373a;
  cursor: pointer;
}
.collection-card strong { font: 10px "Silkscreen", monospace; line-height: 1.35; }
.collection-card p { margin: 0; flex: 1; font-size: 13px; line-height: 1.15; }
.collection-card small { min-height: 20px; font: 8px "Silkscreen", monospace; color: #76571b; line-height: 1.35; }
.collection-card-status {
  align-self: flex-start;
  padding: 3px 5px;
  border-radius: 5px;
  background: #44765a;
  color: #fff;
  font: 7px "Silkscreen", monospace;
}
.collection-card.locked {
  background: #3e4b4e;
  color: #bac4c6;
  border-color: #202b2d;
}
.collection-card.locked .collection-card-status { background: #803931; }
.collection-card.locked small { color: #d1aa77; }
.collection-card.undiscovered {
  filter: grayscale(.78);
  opacity: .72;
}
.collection-card.undiscovered .collection-card-status { background: #6a6d70; }
.collection-card.joker-mythic.discovered {
  background: linear-gradient(145deg,#39204e,#755026);
  color: #fff4ca;
  border-color: #e6c151;
}
.collection-card.joker-mythic.discovered small { color: #ffe29a; }

.joker-slot.filled { position: relative; }
.joker-stake-sticker {
  position: absolute;
  right: 4px;
  bottom: 4px;
  min-width: 19px;
  height: 19px;
  display: grid;
  place-items: center;
  padding: 0 3px;
  border-radius: 50%;
  border: 2px solid rgba(0,0,0,.55);
  background: #e9ecec;
  color: #172326;
  font: 8px "Silkscreen", monospace;
  box-shadow: 0 2px 0 rgba(0,0,0,.5);
}
.joker-stake-sticker.stake-7 { box-shadow: 0 0 0 2px #d6ab35, 0 2px 0 rgba(0,0,0,.5); }

@media (max-width: 980px) {
  .collection-grid { grid-template-columns: repeat(3,minmax(0,1fr)); }
}
@media (max-width: 650px) {
  .collection-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
}
""")

print("Balatro exact meta UI/session integration applied.")
