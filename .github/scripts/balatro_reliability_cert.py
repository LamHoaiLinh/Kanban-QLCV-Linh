
from __future__ import annotations
import sys
from pathlib import Path

if len(sys.argv) != 2:
    raise SystemExit("Usage: balatro_reliability_cert.py <open-poker-root>")

root = Path(sys.argv[1]).resolve()

tests = r"""import { describe, expect, it } from 'vitest';
import {
  BOSS_BLINDS,
  DECKS,
  JOKER_CATALOG,
  STAKES,
  TAGS,
  GameState,
} from '../../src/game/gameState';
import { VOUCHERS } from '../../src/game/balatroShop';
import type { DeckKey, StakeKey, TagKey } from '../../src/game/types';

const RELIABILITY_SEEDS = Math.max(500, Math.min(1000, Number(process.env.RELIABILITY_SEEDS ?? 750)));
const MAX_STEPS = 260;

type MutableState = GameState & Record<string, any>;

function makeBotRng(seed: number) {
  let x = seed >>> 0 || 0x9e3779b9;
  return () => {
    x ^= x << 13;
    x ^= x >>> 17;
    x ^= x << 5;
    return (x >>> 0) / 0x100000000;
  };
}

function pick<T>(items: readonly T[], rng: () => number): T {
  return items[Math.min(items.length - 1, Math.floor(rng() * items.length))];
}

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

function choosePlayable(state: GameState): string[] | null {
  const forced = state.bossForcedCardId;
  const hand = state.hand.slice(0, 8);
  const groups = combinations(hand, 5);

  groups.sort((a, b) => {
    const aForced = forced && a.some((card) => card.id === forced) ? 0 : 1;
    const bForced = forced && b.some((card) => card.id === forced) ? 0 : 1;
    if (aForced !== bForced) return aForced - bForced;
    const aPsychic = state.blindIndex === 2 && state.bossBlindKey === 'psychic' ? Math.abs(5 - a.length) : a.length;
    const bPsychic = state.blindIndex === 2 && state.bossBlindKey === 'psychic' ? Math.abs(5 - b.length) : b.length;
    return aPsychic - bPsychic;
  });

  for (const group of groups) {
    if (state.blindIndex === 2 && state.bossBlindKey === 'psychic' && group.length !== 5) continue;
    if (forced && !group.some((card) => card.id === forced)) continue;
    state.selected = new Set(group.map((card) => card.id));
    if (state.canPlay()) return group.map((card) => card.id);
  }
  state.selected.clear();
  return null;
}

function setAllUnlocks(state: GameState) {
  state.setUnlockedJokerKeys(JOKER_CATALOG.map((joker) => joker.key));
  state.setUnlockedVoucherKeys(Object.keys(VOUCHERS) as Array<keyof typeof VOUCHERS>);
}

function addStressJokers(state: GameState, seedIndex: number, coverage: Set<string>) {
  const cap = state.jokerCapacity();
  for (let slot = 0; slot < Math.min(cap, 5); slot++) {
    const key = JOKER_CATALOG[(seedIndex * 5 + slot * 17) % JOKER_CATALOG.length].key;
    coverage.add(key);
    const joker = state.createJokerByKey(key, false);
    if (joker && state.jokers.length < state.jokerCapacity()) state.jokers.push(joker);
  }
}

function addCardStress(state: GameState, seedIndex: number) {
  // Exercise Red Seal + Glass + editions repeatedly without adding/removing IDs.
  const count = Math.min(8, state.ownedDeck.length);
  for (let i = 0; i < count; i++) {
    const card = state.ownedDeck[(seedIndex * 7 + i * 11) % state.ownedDeck.length] as any;
    if (i % 2 === 0) card.seal = 'red';
    if (i % 3 === 0) card.enhancement = 'glass';
    if (i % 5 === 0) card.edition = 'polychrome';
  }
}

function snapshotJson(state: GameState): string {
  return JSON.stringify(state.toSnapshot());
}

function assertFiniteDeep(value: unknown, path = 'snapshot') {
  if (typeof value === 'number') {
    expect(Number.isFinite(value), `${path} must be finite`).toBe(true);
    expect(Math.abs(value), `${path} runaway magnitude`).toBeLessThan(1e300);
    return;
  }
  if (!value || typeof value !== 'object') return;
  if (Array.isArray(value)) {
    value.forEach((item, index) => assertFiniteDeep(item, `${path}[${index}]`));
    return;
  }
  for (const [key, item] of Object.entries(value as Record<string, unknown>)) {
    assertFiniteDeep(item, `${path}.${key}`);
  }
}

function assertInvariants(state: GameState, label: string) {
  expect(Number.isFinite(state.money), `${label}: money`).toBe(true);
  expect(Number.isFinite(state.roundScore), `${label}: roundScore`).toBe(true);
  expect(Number.isFinite(state.target), `${label}: target`).toBe(true);
  expect(state.roundScore, `${label}: roundScore negative`).toBeGreaterThanOrEqual(0);
  expect(state.target, `${label}: target invalid`).toBeGreaterThan(0);
  expect(state.money, `${label}: money runaway negative`).toBeGreaterThan(-1_000_000);
  expect(state.handsLeft, `${label}: handsLeft`).toBeGreaterThanOrEqual(0);
  expect(state.discardsLeft, `${label}: discardsLeft`).toBeGreaterThanOrEqual(0);
  expect(state.ante, `${label}: ante low`).toBeGreaterThanOrEqual(1);
  expect(state.ante, `${label}: ante runaway`).toBeLessThanOrEqual(9);
  expect(state.jokers.length, `${label}: Joker capacity`).toBeLessThanOrEqual(state.jokerCapacity());
  expect(state.consumables.length, `${label}: consumable capacity`).toBeLessThanOrEqual(state.consumableCapacity());

  const ownedIds = state.ownedDeck.map((card) => card.id);
  expect(new Set(ownedIds).size, `${label}: duplicate owned card ID`).toBe(ownedIds.length);
  expect(state.ownedDeck.length, `${label}: deck vanished`).toBeGreaterThan(0);
  expect(state.ownedDeck.length, `${label}: runaway deck growth`).toBeLessThan(260);

  const runtime = [...state.hand, ...state.deck, ...state.discardPile];
  const runtimeIds = runtime.map((card) => card.id);
  expect(new Set(runtimeIds).size, `${label}: card duplicated across runtime zones`).toBe(runtimeIds.length);
  const owned = new Set(ownedIds);
  for (const id of runtimeIds) expect(owned.has(id), `${label}: runtime card not in owned deck`).toBe(true);
  for (const id of state.selected) {
    expect(state.hand.some((card) => card.id === id), `${label}: selected card not in hand`).toBe(true);
  }

  if (state.phase === 'play') {
    expect(runtimeIds.slice().sort(), `${label}: card lost during Blind`).toEqual(ownedIds.slice().sort());
  }

  for (const level of Object.values(state.handLevels)) {
    expect(Number.isFinite(level.level), `${label}: hand level`).toBe(true);
    expect(Number.isFinite(level.chips), `${label}: hand chips`).toBe(true);
    expect(Number.isFinite(level.mult), `${label}: hand mult`).toBe(true);
    expect(level.level, `${label}: level below 1`).toBeGreaterThanOrEqual(1);
  }

  assertFiniteDeep(state.toSnapshot(), label);
}

function roundTrip(state: GameState, phaseCoverage: Record<string, number>): GameState {
  const before = snapshotJson(state);
  const restored = GameState.fromSnapshot(state.toSnapshot());
  setAllUnlocks(restored);
  expect(snapshotJson(restored), `snapshot mismatch in ${state.phase}`).toBe(before);
  phaseCoverage[state.phase] = (phaseCoverage[state.phase] ?? 0) + 1;
  return restored;
}

function assertNextHandRestoreEquivalent(state: GameState) {
  if (state.phase !== 'play') return;
  const snap = state.toSnapshot();
  const left = GameState.fromSnapshot(snap);
  const right = GameState.fromSnapshot(snap);
  setAllUnlocks(left);
  setAllUnlocks(right);

  const ids = choosePlayable(left);
  if (!ids) return;
  right.selected = new Set(ids);
  left.selected = new Set(ids);

  const leftResult = left.playSelected(left.hand.map((card) => card.id));
  const rightResult = right.playSelected(right.hand.map((card) => card.id));
  expect(rightResult).toEqual(leftResult);
  expect(snapshotJson(right)).toBe(snapshotJson(left));
}

function useTargetMode(state: GameState): boolean {
  const mode = state.targetMode;
  if (!mode) return true;
  if (mode.candidateIds.length < mode.min) {
    state.cancelTargetMode();
    return false;
  }
  for (const id of mode.candidateIds.slice(0, mode.min)) state.toggleTargetCard(id);
  return state.confirmTargetMode();
}

function exerciseInventoryConsumable(state: GameState, rng: () => number) {
  if (state.consumables.length === 0 || rng() > 0.30) return;
  const card = pick(state.consumables, rng);
  const result = state.beginUseConsumable(card.id);
  if (result === 'targeting') useTargetMode(state);
}

describe('Reliability Certification', () => {
  it('same seed + same actions keep RNG and next scoring deterministic', () => {
    const decks = Object.keys(DECKS) as DeckKey[];
    const stakes = Object.keys(STAKES) as StakeKey[];

    for (let i = 0; i < 96; i++) {
      const seed = 0x51f15e + i * 104729;
      const deck = decks[i % decks.length];
      const stake = stakes[(i * 3) % stakes.length];
      const a = new GameState({ seed });
      const b = new GameState({ seed });
      setAllUnlocks(a);
      setAllUnlocks(b);
      a.configureRun(deck, stake, seed);
      b.configureRun(deck, stake, seed);
      expect(snapshotJson(a)).toBe(snapshotJson(b));

      a.playSelectedBlind();
      b.playSelectedBlind();
      a.target = 1;
      b.target = 1;
      const ids = choosePlayable(a);
      expect(ids, `seed ${seed} produced no playable opening`).not.toBeNull();
      if (!ids) continue;
      a.selected = new Set(ids);
      b.selected = new Set(ids);
      const ra = a.playSelected(a.hand.map((card) => card.id));
      const rb = b.playSelected(b.hand.map((card) => card.id));
      expect(rb).toEqual(ra);
      expect(snapshotJson(b)).toBe(snapshotJson(a));
    }
  }, 60_000);

  it(`certifies ${RELIABILITY_SEEDS} randomized full runs with save/restore and invariants`, () => {
    const decks = Object.keys(DECKS) as DeckKey[];
    const stakes = Object.keys(STAKES) as StakeKey[];
    const bosses = Object.keys(BOSS_BLINDS) as Array<keyof typeof BOSS_BLINDS>;
    const tags = Object.keys(TAGS) as TagKey[];
    const packTypes = ['arcana', 'celestial', 'standard', 'buffoon', 'spectral'] as const;

    const coverage = {
      decks: new Set<string>(),
      stakes: new Set<string>(),
      jokers: new Set<string>(),
      bosses: new Set<string>(),
      tags: new Set<string>(),
      packs: new Set<string>(),
      phasesRestored: {} as Record<string, number>,
      redSealGlassRuns: 0,
      nextHandRestoreChecks: 0,
      terminalRuns: 0,
    };

    for (let seedIndex = 0; seedIndex < RELIABILITY_SEEDS; seedIndex++) {
      const seed = (0x6d2b79f5 + Math.imul(seedIndex + 1, 2654435761)) >>> 0;
      const rng = makeBotRng(seed ^ 0xa5a5a5a5);
      const deck = decks[seedIndex % decks.length];
      const stake = stakes[(seedIndex * 5 + Math.floor(seedIndex / decks.length)) % stakes.length];
      coverage.decks.add(deck);
      coverage.stakes.add(stake);

      let state = new GameState({ seed });
      setAllUnlocks(state);
      state.configureRun(deck, stake, seed);
      state.money = Math.max(state.money, 30);
      addStressJokers(state, seedIndex, coverage.jokers);
      addCardStress(state, seedIndex);
      coverage.redSealGlassRuns += 1;
      assertInvariants(state, `seed ${seed} initial`);

      let steps = 0;
      let forcedPack = false;
      while (state.phase !== 'win' && state.phase !== 'game-over' && steps < MAX_STEPS) {
        steps += 1;
        assertInvariants(state, `seed ${seed} step ${steps} ${state.phase}`);

        if (state.phase === 'blind-select') {
          if (state.blindIndex === 2) {
            const boss = bosses[(seedIndex * 8 + state.ante - 1) % bosses.length];
            state.bossBlindKey = boss;
            coverage.bosses.add(boss);
          } else {
            const tag = tags[(seedIndex * 11 + state.ante * 2 + state.blindIndex) % tags.length];
            state.anteTags[state.blindIndex] = tag;
            if (rng() < 0.24) {
              coverage.tags.add(tag);
              state.skipCurrentBlind();
              if ((seedIndex + steps) % 19 === 0) state = roundTrip(state, coverage.phasesRestored);
              continue;
            }
          }

          expect(state.playSelectedBlind(), `seed ${seed}: cannot start Blind`).toBe(true);
          state.target = 1;
          if ((seedIndex + steps) % 7 === 0) state = roundTrip(state, coverage.phasesRestored);
          continue;
        }

        if (state.phase === 'play') {
          if ((seedIndex + steps) % 23 === 0) {
            assertNextHandRestoreEquivalent(state);
            coverage.nextHandRestoreChecks += 1;
          }
          if ((seedIndex + steps) % 11 === 0) state = roundTrip(state, coverage.phasesRestored);

          const ids = choosePlayable(state);
          if (ids) {
            const result = state.playSelected(state.hand.map((card) => card.id));
            expect(result, `seed ${seed}: playable hand returned null`).not.toBeNull();
            if (result) {
              expect(Number.isFinite(result.total), `seed ${seed}: score total`).toBe(true);
              expect(result.total, `seed ${seed}: negative score`).toBeGreaterThanOrEqual(0);
            }
          } else {
            state.selected = new Set(state.hand.slice(0, Math.min(3, state.hand.length)).map((card) => card.id));
            if (state.canDiscard()) {
              state.discardSelected(state.hand.map((card) => card.id));
            } else {
              throw new Error(`Reliability lock: seed=${seed} boss=${state.bossBlindKey} ante=${state.ante} hand=${state.hand.length}`);
            }
          }
          continue;
        }

        if (state.phase === 'shop') {
          state.money = Math.max(state.money, 40);
          if ((seedIndex + steps) % 5 === 0) state = roundTrip(state, coverage.phasesRestored);

          const anyState = state as MutableState;
          const unsoldOffers = state.shop?.offers.filter((offer) => !offer.sold) ?? [];
          if (unsoldOffers.length && rng() < 0.72 && typeof anyState.buyOffer === 'function') {
            const offer = pick(unsoldOffers, rng);
            anyState.buyOffer(offer.id);
          }

          if (state.jokers.length > 1 && rng() < 0.22 && typeof anyState.sellJoker === 'function') {
            const sellable = state.jokers.filter((joker) => joker.sticker !== 'eternal');
            if (sellable.length) anyState.sellJoker(pick(sellable, rng).id);
          }

          exerciseInventoryConsumable(state, rng);

          if (state.shop?.voucher && !state.shop.voucher.sold && rng() < 0.26) {
            state.buyVoucher();
          }

          if (state.shop && rng() < 0.28 && state.money >= state.shop.rerollCost && typeof anyState.rerollShop === 'function') {
            anyState.rerollShop();
          }

          const pack = state.shop?.boosters.find((offer) => !offer.sold);
          if (pack && (!forcedPack || rng() < 0.58)) {
            const packType = packTypes[(seedIndex + state.ante + state.blindIndex) % packTypes.length];
            pack.type = packType;
            pack.size = ((seedIndex + state.ante) % 11 === 0 ? 'mega' : (seedIndex + state.ante) % 4 === 0 ? 'jumbo' : 'normal') as any;
            pack.price = 0;
            coverage.packs.add(packType);
            if (state.openBooster(pack.id)) {
              forcedPack = true;
              continue;
            }
          }

          expect(state.continueFromShop(), `seed ${seed}: Shop cannot continue`).toBe(true);
          continue;
        }

        if (state.phase === 'booster') {
          state = roundTrip(state, coverage.phasesRestored);
          const choice = state.booster?.choices.find((item) => !item.taken);
          if (!choice) {
            state.skipBooster();
            continue;
          }

          const result = state.chooseBooster(choice.id);
          if (result === 'targeting') {
            // Critical certification point: save/restore while a Tarot/Spectral target is open.
            state = roundTrip(state, coverage.phasesRestored);
            if (!useTargetMode(state)) state.skipBooster();
          } else if (result === 'invalid') {
            state.skipBooster();
          } else if (state.phase === 'booster' && rng() < 0.72) {
            state.skipBooster();
          }
          continue;
        }

        throw new Error(`Reliability unknown phase: ${state.phase}`);
      }

      expect(steps, `seed ${seed}: state machine exceeded step budget`).toBeLessThan(MAX_STEPS);
      expect(['win', 'game-over'], `seed ${seed}: non-terminal phase`).toContain(state.phase);
      assertInvariants(state, `seed ${seed} terminal`);
      coverage.terminalRuns += 1;
    }

    expect(coverage.decks.size).toBe(Object.keys(DECKS).length);
    expect(coverage.stakes.size).toBe(Object.keys(STAKES).length);
    expect(coverage.jokers.size).toBe(JOKER_CATALOG.length);
    expect(coverage.bosses.size).toBe(Object.keys(BOSS_BLINDS).length);
    expect(coverage.tags.size).toBe(Object.keys(TAGS).length);
    expect(coverage.packs.size).toBe(5);
    expect(coverage.phasesRestored['play'] ?? 0).toBeGreaterThan(20);
    expect(coverage.phasesRestored['shop'] ?? 0).toBeGreaterThan(20);
    expect(coverage.phasesRestored['booster'] ?? 0).toBeGreaterThan(20);
    expect(coverage.nextHandRestoreChecks).toBeGreaterThan(20);
    expect(coverage.terminalRuns).toBe(RELIABILITY_SEEDS);

    console.log('[Reliability Certification]', JSON.stringify({
      seeds: RELIABILITY_SEEDS,
      terminalRuns: coverage.terminalRuns,
      decks: coverage.decks.size,
      stakes: coverage.stakes.size,
      jokers: coverage.jokers.size,
      bosses: coverage.bosses.size,
      tags: coverage.tags.size,
      packs: coverage.packs.size,
      restores: coverage.phasesRestored,
      nextHandRestoreChecks: coverage.nextHandRestoreChecks,
      redSealGlassRuns: coverage.redSealGlassRuns,
    }));
  }, 180_000);
});
"""
(root / "tests/unit/reliabilityCertification.test.ts").write_text(tests, encoding="utf-8")

print("Reliability Certification: randomized 500-1000 seed stress suite applied.")
