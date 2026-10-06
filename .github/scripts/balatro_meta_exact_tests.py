
from __future__ import annotations
import sys
from pathlib import Path

if len(sys.argv) != 2:
    raise SystemExit("Usage: balatro_meta_exact_tests.py <open-poker-root>")

root = Path(sys.argv[1]).resolve()

# Replace the one legacy test that encoded the old wins/best-Ante shortcut system.
legacy = root / "tests/unit/balatroMetaProgression.test.ts"
s = legacy.read_text(encoding="utf-8")
a = s.find("  it('unlocks Decks, Stakes and advanced Jokers through persistent progress'")
b = s.find("  it('Seed text is stable and numeric seeds remain numeric'", a)
if a < 0 or b < 0:
    raise SystemExit("Could not locate old simplified meta-progression regression")
replacement = r"""  it('uses per-Deck Stake progression and win-linked specialty Decks', () => {
    const base = refreshMetaUnlocks(createDefaultMetaProfile());
    expect(base.unlockedDecks).toEqual(['red']);
    expect(maxUnlockedStakeOrder(base, 'red')).toBe(0);

    const won = recordRunFinish(base, 'run-1', {
      won: true,
      deck: 'red',
      stake: 'white',
      ante: 9,
      money: 44,
      jokerKeys: ['joker'],
      handPlayCounts: { 'High Card': 1 },
    });
    expect(won.unlockedDecks).toContain('magic');
    expect(won.unlockedDecks).not.toContain('blue');
    expect(maxUnlockedStakeOrder(won, 'red')).toBe(1);
    expect(maxUnlockedStakeOrder(won, 'blue')).toBe(0);
  });

"""
s = s[:a] + replacement + s[b:]
legacy.write_text(s, encoding="utf-8")

tests = r"""import { describe, expect, it } from 'vitest';
import { JOKER_CATALOG, STAKES } from '../../src/game/gameState';
import { VOUCHERS, VOUCHER_UPGRADE_BASE } from '../../src/game/balatroShop';
import {
  canProgressMeta,
  collectionDiscoveryCount,
  createDefaultMetaProfile,
  deckUnlockDescription,
  discoverJoker,
  discoverVoucher,
  isSeededRunInput,
  jokerUnlockDescription,
  maxUnlockedStakeOrder,
  recordBossClear,
  recordCashout,
  recordLiveState,
  recordRunCounters,
  recordRunFinish,
  recordRunStart,
  refreshMetaUnlocks,
  stakeStickerName,
  voucherUnlockDescription,
} from '../../src/game/metaProgression';

describe('Balatro exact meta progression', () => {
  it('treats typed Seeded Runs as practice and blocks every tested meta mutation', () => {
    const base = refreshMetaUnlocks(createDefaultMetaProfile());
    expect(isSeededRunInput('SUNNY-2026')).toBe(true);
    expect(isSeededRunInput('   ')).toBe(false);
    expect(canProgressMeta(true)).toBe(false);

    const started = recordRunStart(base, true);
    const counted = recordRunCounters(started, { hands: 999, cardsPlayed: 9999, rerolls: 999 }, true);
    const discovered = discoverJoker(counted, 'hanging-chad', true);
    const bossed = recordBossClear(discovered, 'wall', 'High Card', 'seeded-boss', true);
    const settled = recordRunFinish(bossed, 'seeded-win', {
      won: true,
      deck: 'red',
      stake: 'gold',
      ante: 9,
      money: 999,
      jokerKeys: ['joker', 'hanging-chad'],
      handPlayCounts: { 'High Card': 1 },
    }, true);

    expect(settled).toEqual(base);
  });

  it('unlocks the five color Decks by Collection discovery thresholds', () => {
    const profile = createDefaultMetaProfile();
    profile.discoveredJokers = Array.from({ length: 19 }, (_, i) => `discover-${i}`);
    let next = refreshMetaUnlocks(profile);
    expect(collectionDiscoveryCount(next)).toBeGreaterThanOrEqual(20);
    expect(next.unlockedDecks).toContain('blue');
    expect(next.unlockedDecks).not.toContain('yellow');

    next.discoveredJokers = Array.from({ length: 49 }, (_, i) => `discover-${i}`);
    next = refreshMetaUnlocks(next);
    expect(next.unlockedDecks).toContain('yellow');

    next.discoveredJokers = Array.from({ length: 74 }, (_, i) => `discover-${i}`);
    next = refreshMetaUnlocks(next);
    expect(next.unlockedDecks).toContain('green');

    next.discoveredJokers = Array.from({ length: 99 }, (_, i) => `discover-${i}`);
    next = refreshMetaUnlocks(next);
    expect(next.unlockedDecks).toContain('black');
  });

  it('unlocks specialty Decks from the matching Deck win and late Decks from Stake wins', () => {
    let profile = refreshMetaUnlocks(createDefaultMetaProfile());
    profile = recordRunFinish(profile, 'red-white', {
      won: true, deck: 'red', stake: 'white', ante: 9, money: 20,
      jokerKeys: [], handPlayCounts: {},
    });
    expect(profile.unlockedDecks).toContain('magic');
    expect(profile.unlockedDecks).not.toContain('zodiac');

    profile = recordRunFinish(profile, 'red-red', {
      won: true, deck: 'red', stake: 'red', ante: 9, money: 20,
      jokerKeys: [], handPlayCounts: {},
    });
    expect(profile.unlockedDecks).toContain('zodiac');

    profile = recordRunFinish(profile, 'red-green', {
      won: true, deck: 'red', stake: 'green', ante: 9, money: 20,
      jokerKeys: [], handPlayCounts: {},
    });
    expect(profile.unlockedDecks).toContain('painted');

    profile = recordRunFinish(profile, 'red-black', {
      won: true, deck: 'red', stake: 'black', ante: 9, money: 20,
      jokerKeys: [], handPlayCounts: {},
    });
    expect(profile.unlockedDecks).toContain('anaglyph');

    profile = recordRunFinish(profile, 'red-blue', {
      won: true, deck: 'red', stake: 'blue', ante: 9, money: 20,
      jokerKeys: [], handPlayCounts: {},
    });
    expect(profile.unlockedDecks).toContain('plasma');

    profile = recordRunFinish(profile, 'red-orange', {
      won: true, deck: 'red', stake: 'orange', ante: 9, money: 20,
      jokerKeys: [], handPlayCounts: {},
    });
    expect(profile.unlockedDecks).toContain('erratic');
  });

  it('keeps Stake progression independent for every Deck', () => {
    let profile = refreshMetaUnlocks(createDefaultMetaProfile());
    profile = recordRunFinish(profile, 'red-white', {
      won: true, deck: 'red', stake: 'white', ante: 9, money: 10,
      jokerKeys: [], handPlayCounts: {},
    });
    expect(maxUnlockedStakeOrder(profile, 'red')).toBe(STAKES.red.order);
    expect(maxUnlockedStakeOrder(profile, 'blue')).toBe(STAKES.white.order);

    profile.highestStakeCleared.blue = STAKES.green.order;
    profile = refreshMetaUnlocks(profile);
    expect(maxUnlockedStakeOrder(profile, 'blue')).toBe(STAKES.black.order);
    expect(maxUnlockedStakeOrder(profile, 'red')).toBe(STAKES.red.order);
  });

  it('starts with 16 base Vouchers and unlocks upgrade Vouchers from their own conditions', () => {
    let profile = refreshMetaUnlocks(createDefaultMetaProfile());
    const baseKeys = (Object.keys(VOUCHERS) as Array<keyof typeof VOUCHERS>)
      .filter((key) => !VOUCHER_UPGRADE_BASE[key]);
    expect(baseKeys).toHaveLength(16);
    expect(profile.unlockedVouchers.sort()).toEqual([...baseKeys].sort());

    profile.totalShopSpend = 2500;
    profile.maxVouchersInRun = 10;
    profile.maxEditionJokers = 5;
    profile.totalRerolls = 100;
    profile.tarotPackUsed = 25;
    profile.planetPackUsed = 25;
    profile.totalCardsPlayed = 2500;
    profile.totalCardsDiscarded = 2500;
    profile.tarotShopBought = 50;
    profile.planetShopBought = 50;
    profile.maxInterestStreak = 10;
    profile.blankRedeemed = 10;
    profile.playingCardsShopBought = 20;
    profile.bestAnte = 12;
    profile.discoveredBosses = Array.from({ length: 25 }, (_, i) => `boss-${i}` as any);
    profile.minHandSizeEver = 5;
    profile = refreshMetaUnlocks(profile);

    const upgrades = Object.keys(VOUCHER_UPGRADE_BASE) as Array<keyof typeof VOUCHERS>;
    for (const key of upgrades) expect(profile.unlockedVouchers).toContain(key);
  });

  it('distinguishes Voucher unlocked from discovered', () => {
    let profile = refreshMetaUnlocks(createDefaultMetaProfile());
    expect(profile.unlockedVouchers).toContain('grabber');
    expect(profile.discoveredVouchers).not.toContain('grabber');
    profile = discoverVoucher(profile, 'grabber');
    expect(profile.discoveredVouchers).toContain('grabber');
  });

  it('applies the individual unlock conditions for the locked real Jokers present in this build', () => {
    let profile = refreshMetaUnlocks(createDefaultMetaProfile());
    for (const key of ['hanging-chad','acrobat','sock-and-buskin','rough-gem','bloodstone','arrowhead','onyx-agate','bootstraps','the-duo','the-trio']) {
      expect(profile.unlockedJokers).not.toContain(key);
    }

    profile = recordBossClear(profile, 'wall', 'High Card', 'boss-high');
    profile = recordRunCounters(profile, { hands: 200, faceCardsPlayed: 300 });
    profile = recordLiveState(profile, {
      ante: 8, money: 20, handSize: 8, vouchers: 0,
      polychromeJokers: 2, editionJokers: 2,
      suitCounts: { spades: 30, hearts: 30, diamonds: 30, clubs: 30 },
    });
    profile = recordRunFinish(profile, 'special-win', {
      won: true, deck: 'red', stake: 'white', ante: 9, money: 20,
      jokerKeys: [], handPlayCounts: { 'High Card': 4 },
    });
    for (const key of ['hanging-chad','acrobat','sock-and-buskin','rough-gem','bloodstone','arrowhead','onyx-agate','bootstraps','the-duo','the-trio']) {
      expect(profile.unlockedJokers).toContain(key);
    }
  });

  it('awards the highest Stake sticker only to Jokers still held on a winning run', () => {
    let profile = refreshMetaUnlocks(createDefaultMetaProfile());
    profile = recordRunFinish(profile, 'sticker-red', {
      won: true, deck: 'red', stake: 'red', ante: 9, money: 20,
      jokerKeys: ['joker', 'photograph'], handPlayCounts: {},
    });
    expect(profile.jokerStakeStickers.joker).toBe(STAKES.red.order);
    expect(profile.jokerStakeStickers.photograph).toBe(STAKES.red.order);
    expect(profile.jokerStakeStickers['hanging-chad']).toBeUndefined();

    profile = recordRunFinish(profile, 'sticker-gold', {
      won: true, deck: 'red', stake: 'gold', ante: 9, money: 20,
      jokerKeys: ['joker'], handPlayCounts: {},
    });
    expect(profile.jokerStakeStickers.joker).toBe(STAKES.gold.order);
    expect(stakeStickerName(STAKES.gold.order)).toBe('Gold');
  });

  it('unlocks Money Tree only after ten consecutive max-interest cashouts', () => {
    let profile = refreshMetaUnlocks(createDefaultMetaProfile());
    for (let i = 1; i <= 9; i++) profile = recordCashout(profile, 5, 5, `cash-${i}`);
    expect(profile.unlockedVouchers).not.toContain('money-tree');
    profile = recordCashout(profile, 5, 5, 'cash-10');
    expect(profile.unlockedVouchers).toContain('money-tree');

    const reset = recordCashout(profile, 4, 5, 'cash-11');
    expect(reset.interestStreak).toBe(0);
    expect(reset.maxInterestStreak).toBe(10);
  });

  it('exposes exact lock text for Decks, Jokers and Vouchers', () => {
    const profile = refreshMetaUnlocks(createDefaultMetaProfile());
    expect(deckUnlockDescription(profile, 'blue')).toContain('20');
    expect(jokerUnlockDescription(profile, 'acrobat')).toContain('200');
    expect(jokerUnlockDescription(profile, 'sock-and-buskin')).toContain('300');
    expect(voucherUnlockDescription(profile, 'overstock-plus')).toContain('2500');
    expect(voucherUnlockDescription(profile, 'retcon')).toContain('25');
  });

  it('keeps custom Mythics available without tying them to the old win-count shortcut', () => {
    const profile = refreshMetaUnlocks(createDefaultMetaProfile());
    const mythics = JOKER_CATALOG.filter((joker) => joker.rarity === 'mythic');
    expect(mythics.length).toBeGreaterThan(0);
    for (const joker of mythics) expect(profile.unlockedJokers).toContain(joker.key);
  });
});
"""
(root / "tests/unit/balatroMetaExact.test.ts").write_text(tests, encoding="utf-8")

print("Balatro exact meta progression tests applied.")
