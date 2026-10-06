
from __future__ import annotations
import sys
from pathlib import Path

if len(sys.argv) != 2:
    raise SystemExit("Usage: balatro_meta_tests.py <open-poker-root>")

root = Path(sys.argv[1]).resolve()

tests = r"""import { describe, expect, it } from 'vitest';
import {
  BOSS_BLINDS,
  JOKER_CATALOG,
  STAKES,
  TAGS,
  GameState,
} from '../../src/game/gameState';
import { evaluateHand } from '../../src/game/pokerEngine';
import {
  createDefaultMetaProfile,
  maxUnlockedStakeOrder,
  recordRunFinish,
  refreshMetaUnlocks,
  seedFromText,
} from '../../src/game/metaProgression';
import type { BossBlindKey, TagKey } from '../../src/game/types';

function combinations<T>(items: readonly T[], maxSize = 5): T[][] {
  const out: T[][] = [];
  const walk = (start: number, picked: T[]) => {
    if (picked.length > 0) out.push([...picked]);
    if (picked.length >= maxSize) return;
    for (let i = start; i < items.length; i++) {
      picked.push(items[i]);
      walk(i + 1, picked);
      picked.pop();
    }
  };
  walk(0, []);
  return out;
}

function choosePlayable(state: GameState): boolean {
  const cards = state.hand.slice(0, 8);
  const options = combinations(cards, 5);
  options.sort((a, b) => a.length - b.length);

  for (const group of options) {
    if (state.bossBlindKey === 'psychic' && state.blindIndex === 2 && group.length !== 5) continue;
    if (state.bossForcedCardId && !group.some((card) => card.id === state.bossForcedCardId)) continue;
    state.selected = new Set(group.map((card) => card.id));
    if (state.canPlay()) return true;
  }
  state.selected.clear();
  return false;
}

function equipJokers(state: GameState, seed: number) {
  const keys = JOKER_CATALOG.map((joker) => joker.key);
  for (let i = 0; i < 5; i++) {
    const key = keys[(seed + i * 13) % keys.length];
    const joker = state.createJokerByKey(key, false);
    if (joker) state.jokers.push(joker);
  }
}

describe('Balatro meta progression L5', () => {
  it('has all 24 Tags, all 28 Boss Blinds and the existing 70-Joker pool', () => {
    expect(Object.keys(TAGS)).toHaveLength(24);
    expect(Object.keys(BOSS_BLINDS)).toHaveLength(28);
    expect(JOKER_CATALOG).toHaveLength(70);
  });

  it('unlocks Decks, Stakes and advanced Jokers through persistent progress', () => {
    const base = refreshMetaUnlocks(createDefaultMetaProfile());
    expect(base.unlockedDecks).toEqual(['red']);
    expect(maxUnlockedStakeOrder(base, 'red')).toBe(0);
    expect(base.unlockedJokers.some((key) => JOKER_CATALOG.find((j) => j.key === key)?.rarity === 'mythic')).toBe(false);

    const won = recordRunFinish(base, 'run-1', {
      won: true,
      deck: 'red',
      stake: 'white',
      ante: 9,
      hands: 20,
      skips: 2,
      discards: 3,
      money: 44,
    });
    expect(won.unlockedDecks).toContain('blue');
    expect(won.unlockedDecks).toContain('yellow');
    expect(maxUnlockedStakeOrder(won, 'red')).toBe(1);
    expect(won.unlockedJokers.filter((key) => JOKER_CATALOG.find((j) => j.key === key)?.rarity === 'mythic').length).toBe(5);
  });

  it('Seed text is stable and numeric seeds remain numeric', () => {
    expect(seedFromText('SUNNY-2026')).toBe(seedFromText('SUNNY-2026'));
    expect(seedFromText('123456')).toBe(123456);
    expect(seedFromText('SUNNY-2026')).not.toBe(seedFromText('KHANG-2026'));
  });

  it('every Tag can be skipped into without throwing or corrupting the phase', () => {
    for (const tag of Object.keys(TAGS) as TagKey[]) {
      const state = new GameState({ seed: 4000 + Object.keys(TAGS).indexOf(tag) });
      state.setUnlockedJokerKeys(JOKER_CATALOG.map((joker) => joker.key));
      state.configureRun('red', 'white', 4000 + Object.keys(TAGS).indexOf(tag));
      state.anteTags = [tag, 'economy'];
      expect(() => state.skipCurrentBlind()).not.toThrow();
      expect(state.phase).toBe('blind-select');
      expect(state.blindIndex).toBe(1);
      expect(Number.isFinite(state.money)).toBe(true);
    }
  });

  it('every Boss Blind starts and resolves a scoring hand without trigger errors', () => {
    for (const key of Object.keys(BOSS_BLINDS) as BossBlindKey[]) {
      const seed = 5000 + Object.keys(BOSS_BLINDS).indexOf(key);
      const state = new GameState({ seed });
      state.setUnlockedJokerKeys(JOKER_CATALOG.map((joker) => joker.key));
      state.configureRun('red', 'white', seed);
      equipJokers(state, seed);
      state.blindIndex = 2;
      state.bossBlindKey = key;
      expect(() => state.startBlind()).not.toThrow();
      state.target = 1;
      const playable = choosePlayable(state);
      if (playable) {
        expect(() => state.playSelected(state.hand.map((card) => card.id))).not.toThrow();
      } else {
        state.selected = new Set(state.hand.slice(0, Math.min(5, state.hand.length)).map((card) => card.id));
        if (state.canDiscard()) expect(() => state.discardSelected()).not.toThrow();
      }
      expect(['play', 'shop', 'game-over', 'win']).toContain(state.phase);
    }
  });

  it('snapshot V4 preserves meta-sensitive Boss runtime state', () => {
    const state = new GameState({ seed: 6123 });
    state.configureRun('red', 'white', 6123);
    state.blindIndex = 2;
    state.bossBlindKey = 'pillar';
    state.startBlind();
    state.antePlayedCardIds.add(state.hand[0].id);
    state.bossFaceDownCardIds.add(state.hand[1].id);
    state.discardsUsedRun = 4;
    const restored = GameState.fromSnapshot(state.toSnapshot());
    expect(restored.discardsUsedRun).toBe(4);
    expect(restored.antePlayedCardIds.has(state.hand[0].id)).toBe(true);
    expect(restored.isCardFaceDown(state.hand[1].id)).toBe(true);
  });

  it('smoke-plays 10 reproducible random seeds through full state-machine runs', () => {
    const seeds = [
      918273645, 420691337, 771230114, 602145983, 135792468,
      864209753, 314159265, 271828182, 509173624, 730241986,
    ];

    for (const seed of seeds) {
      const state = new GameState({ seed });
      state.setUnlockedJokerKeys(JOKER_CATALOG.map((joker) => joker.key));
      state.configureRun('red', 'white', seed);
      equipJokers(state, seed);

      let steps = 0;
      while (state.phase !== 'win' && state.phase !== 'game-over' && steps < 220) {
        steps += 1;

        if (state.phase === 'blind-select') {
          if (state.blindIndex < 2 && (seed + steps) % 7 === 0) {
            state.skipCurrentBlind();
          } else {
            state.playSelectedBlind();
            state.target = 1;
          }
          continue;
        }

        if (state.phase === 'play') {
          if (!choosePlayable(state)) {
            state.selected = new Set(state.hand.slice(0, Math.min(3, state.hand.length)).map((card) => card.id));
            if (state.canDiscard()) state.discardSelected();
            else break;
          } else {
            state.playSelected(state.hand.map((card) => card.id));
          }
          continue;
        }

        if (state.phase === 'shop') {
          const pack = state.shop?.boosters.find((offer) => !offer.sold && state.money >= state.boosterPrice(offer));
          if (pack && (seed + steps) % 3 === 0) {
            state.openBooster(pack.id);
          } else {
            state.continueFromShop();
          }
          continue;
        }

        if (state.phase === 'booster') {
          state.skipBooster();
          continue;
        }
      }

      expect(steps).toBeLessThan(220);
      expect(['win', 'game-over']).toContain(state.phase);
      expect(Number.isFinite(state.money)).toBe(true);
      expect(Number.isFinite(state.roundScore)).toBe(true);
      expect(state.jokers.length).toBeLessThanOrEqual(state.jokerCapacity());
      for (const type of Object.keys(state.handLevels) as Array<keyof typeof state.handLevels>) {
        expect(state.handLevels[type].level).toBeGreaterThanOrEqual(1);
      }
    }
  });
});
"""
(root / "tests/unit/balatroMetaProgression.test.ts").write_text(tests, encoding="utf-8")

print("Balatro meta progression + 10-seed smoke tests applied.")
