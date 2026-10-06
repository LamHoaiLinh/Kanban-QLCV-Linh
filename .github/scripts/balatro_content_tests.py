
from __future__ import annotations
import sys
from pathlib import Path

if len(sys.argv) != 2:
    raise SystemExit("Usage: balatro_content_tests.py <open-poker-root>")

root = Path(sys.argv[1]).resolve()

tests = r"""import { describe, expect, it } from 'vitest';
import { DECKS, GameState, STAKES } from '../../src/game/gameState';
import {
  PLANET_CATALOG,
  SPECTRAL_CATALOG,
  TAROT_CATALOG,
  VOUCHERS,
  targetRule,
} from '../../src/game/balatroShop';
import type { DeckKey, JokerCard, VoucherKey } from '../../src/game/types';

function addTestJokers(state: GameState) {
  for (const key of ['joker', 'hanging-chad', 'photograph']) {
    const joker = state.createJokerByKey(key, false);
    if (joker) state.jokers.push(joker);
  }
}

describe('Balatro content parity pack', () => {
  it('ships all 15 Decks, 32 Vouchers, 22 Tarot, 12 Planet and 18 Spectral cards', () => {
    expect(Object.keys(DECKS)).toHaveLength(15);
    expect(Object.keys(VOUCHERS)).toHaveLength(32);
    expect(TAROT_CATALOG).toHaveLength(22);
    expect(PLANET_CATALOG).toHaveLength(12);
    expect(SPECTRAL_CATALOG).toHaveLength(18);
  });

  it('all 15 Decks can configure and enter a Blind without corrupting resources', () => {
    for (const key of Object.keys(DECKS) as DeckKey[]) {
      const state = new GameState({ seed: 7000 + Object.keys(DECKS).indexOf(key) });
      expect(() => state.configureRun(key, 'white', 7000 + Object.keys(DECKS).indexOf(key))).not.toThrow();
      expect(state.phase).toBe('blind-select');
      expect(state.ownedDeck.length).toBeGreaterThan(0);
      expect(state.jokerCapacity()).toBeGreaterThan(0);
      expect(state.consumableCapacity()).toBeGreaterThanOrEqual(0);
      expect(() => state.playSelectedBlind()).not.toThrow();
      expect(state.phase).toBe('play');
      expect(state.hand.length).toBeGreaterThan(0);
    }
  });

  it('special Deck starting states match their intended identities', () => {
    const magic = new GameState({ seed: 7101 });
    magic.configureRun('magic', 'white', 7101);
    expect(magic.vouchers).toContain('crystal-ball');
    expect(magic.consumables.filter((c) => c.key === 'the-fool')).toHaveLength(2);

    const nebula = new GameState({ seed: 7102 });
    nebula.configureRun('nebula', 'white', 7102);
    expect(nebula.vouchers).toContain('telescope');
    expect(nebula.consumableCapacity()).toBe(1);

    const ghost = new GameState({ seed: 7103 });
    ghost.configureRun('ghost', 'white', 7103);
    expect(ghost.consumables.some((c) => c.key === 'hex')).toBe(true);

    const abandoned = new GameState({ seed: 7104 });
    abandoned.configureRun('abandoned', 'white', 7104);
    expect(abandoned.ownedDeck).toHaveLength(40);
    expect(abandoned.ownedDeck.some((c) => c.rank >= 11 && c.rank <= 13)).toBe(false);

    const checkered = new GameState({ seed: 7105 });
    checkered.configureRun('checkered', 'white', 7105);
    expect(checkered.ownedDeck.filter((c) => c.suit === 'spades')).toHaveLength(26);
    expect(checkered.ownedDeck.filter((c) => c.suit === 'hearts')).toHaveLength(26);
    expect(checkered.ownedDeck.some((c) => c.suit === 'clubs' || c.suit === 'diamonds')).toBe(false);

    const zodiac = new GameState({ seed: 7106 });
    zodiac.configureRun('zodiac', 'white', 7106);
    expect(zodiac.vouchers).toEqual(expect.arrayContaining(['tarot-merchant', 'planet-merchant', 'overstock']));

    const painted = new GameState({ seed: 7107 });
    painted.configureRun('painted', 'white', 7107);
    expect(painted.config.handSize).toBe(10);
    expect(painted.jokerCapacity()).toBe(4);
  });

  it('Plasma doubles Blind target and balances final Chips/Mult', () => {
    const red = new GameState({ seed: 7201 });
    red.configureRun('red', 'white', 7201);
    const redTarget = red.targetForPreview();

    const plasma = new GameState({ seed: 7201 });
    plasma.configureRun('plasma', 'white', 7201);
    expect(plasma.targetForPreview()).toBe(redTarget * 2);
    plasma.playSelectedBlind();
    plasma.target = 999999999;
    plasma.selected = new Set([plasma.hand[0].id]);
    const result = plasma.playSelected(plasma.hand.map((c) => c.id));
    expect(result).not.toBeNull();
    expect(result!.finalChips).toBeCloseTo(result!.finalMult, 8);
  });

  it('every Voucher key can be granted without throwing and keeps finite capacities', () => {
    for (const key of Object.keys(VOUCHERS) as VoucherKey[]) {
      const state = new GameState({ seed: 7300 + Object.keys(VOUCHERS).indexOf(key) });
      state.configureRun('red', 'white', 7300 + Object.keys(VOUCHERS).indexOf(key));
      expect(() => (state as any).grantVoucherKey(key)).not.toThrow();
      expect(state.vouchers).toContain(key);
      expect(Number.isFinite(state.config.handSize)).toBe(true);
      expect(Number.isFinite(state.config.handsPerRound)).toBe(true);
      expect(Number.isFinite(state.config.discardsPerRound)).toBe(true);
      expect(state.jokerCapacity()).toBeGreaterThan(0);
      expect(state.consumableCapacity()).toBeGreaterThanOrEqual(0);
    }
  });

  it('all 22 Tarot effects execute safely against a live hand', () => {
    for (const template of TAROT_CATALOG) {
      const seed = 7400 + TAROT_CATALOG.indexOf(template);
      const state = new GameState({ seed });
      state.setUnlockedJokerKeys(null);
      state.configureRun('red', 'white', seed);
      state.playSelectedBlind();
      addTestJokers(state);
      state.money = 25;
      state.lastConsumableKey = 'pluto';

      const rule = targetRule(template.effect);
      const targets = rule ? state.hand.slice(0, rule.min).map((c) => c.id) : [];
      if (rule) {
        state.targetMode = {
          source: 'inventory',
          sourceId: 'test',
          consumable: {
            ...template,
            id: 'test',
            sellValue: 1,
            edition: 'base',
            effect: { ...template.effect },
          },
          candidateIds: state.hand.map((c) => c.id),
          selectedIds: [...targets],
          ...rule,
        };
      }
      expect(() => (state as any).applyConsumableWithTargets({
        ...template,
        id: `tarot-${seed}`,
        sellValue: 1,
        edition: 'base',
        effect: { ...template.effect },
      }, targets)).not.toThrow();
      expect(Number.isFinite(state.money)).toBe(true);
      expect(state.ownedDeck.length).toBeGreaterThan(0);
    }
  });

  it('all 18 Spectral effects execute safely and preserve valid run state', () => {
    for (const template of SPECTRAL_CATALOG) {
      const seed = 7600 + SPECTRAL_CATALOG.indexOf(template);
      const state = new GameState({ seed });
      state.setUnlockedJokerKeys(null);
      state.configureRun('red', 'white', seed);
      state.playSelectedBlind();
      addTestJokers(state);
      state.money = 20;

      const rule = targetRule(template.effect);
      const targets = rule ? state.hand.slice(0, rule.min).map((c) => c.id) : [];
      expect(() => (state as any).applyConsumableWithTargets({
        ...template,
        id: `spectral-${seed}`,
        sellValue: 2,
        edition: 'base',
        effect: { ...template.effect },
      }, targets)).not.toThrow();

      expect(Number.isFinite(state.money)).toBe(true);
      expect(state.config.handSize).toBeGreaterThanOrEqual(1);
      expect(state.jokerCapacity()).toBeGreaterThan(0);
      expect(state.ownedDeck.length).toBeGreaterThan(0);
    }
  });

  it('Anaglyph earns a Double Tag after a Boss clear', () => {
    const state = new GameState({ seed: 7801 });
    state.configureRun('anaglyph', 'white', 7801);
    state.blindIndex = 2;
    state.startBlind();
    state.target = 1;
    state.selected = new Set([state.hand[0].id]);
    state.playSelected(state.hand.map((c) => c.id));
    expect(state.doubleTags).toBeGreaterThanOrEqual(1);
  });

  it('Director Cut / Retcon Boss reroll API obeys price and per-Ante limit', () => {
    const state = new GameState({ seed: 7901 });
    state.configureRun('red', 'white', 7901);
    state.blindIndex = 2;
    state.prepareBlindSelect();
    state.money = 30;
    (state as any).grantVoucherKey('directors-cut');
    const first = state.bossBlindKey;
    expect(state.rerollBossBlind()).toBe(true);
    expect(state.money).toBe(20);
    expect(state.bossBlindKey).not.toBe(first);
    expect(state.rerollBossBlind()).toBe(false);

    (state as any).grantVoucherKey('retcon');
    expect(state.rerollBossBlind()).toBe(true);
    expect(state.money).toBe(10);
  });

  it('Snapshot V4 preserves content-parity run modifiers', () => {
    const state = new GameState({ seed: 8001 });
    state.configureRun('nebula', 'gold', 8001);
    state.lastConsumableKey = 'jupiter';
    state.ectoplasmUses = 2;
    state.jokerSlotDelta = 1;
    state.bossRerollsUsed = 1;
    const restored = GameState.fromSnapshot(state.toSnapshot());
    expect(restored.deckKey).toBe('nebula');
    expect(restored.stakeKey).toBe('gold');
    expect(restored.lastConsumableKey).toBe('jupiter');
    expect(restored.ectoplasmUses).toBe(2);
    expect(restored.jokerSlotDelta).toBe(1);
    expect(restored.bossRerollsUsed).toBe(1);
  });
});
"""
(root / "tests/unit/balatroContentParity.test.ts").write_text(tests, encoding="utf-8")

print("Full content parity regression suite applied.")
