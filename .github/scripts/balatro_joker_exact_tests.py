
from __future__ import annotations

import sys
from pathlib import Path

if len(sys.argv) != 2:
    raise SystemExit("Usage: balatro_joker_exact_tests.py <open-poker-root>")

root = Path(sys.argv[1]).resolve()

def replace_once(path: str, old: str, new: str) -> None:
    p = root / path
    s = p.read_text(encoding="utf-8")
    if old not in s:
        raise SystemExit(f"Exact Joker test anchor not found in {path}: {old[:180]!r}")
    p.write_text(s.replace(old, new, 1), encoding="utf-8")

replace_once(
    "tests/unit/balatroProgressionParity.test.ts",
    """  it('ships exactly 50 Jokers in the first deep Joker set', () => {
    expect(JOKER_LIBRARY_SIZE).toBe(50);
  });""",
    """  it('ships 50 exact-parity Jokers plus 20 Mythic Jokers', () => {
    expect(JOKER_LIBRARY_SIZE).toBe(70);
  });""",
)

tests = r"""import { describe, expect, it } from 'vitest';
import {
  JOKER_LIBRARY_SIZE,
  MYTHIC_JOKER_COUNT,
  OFFICIAL_JOKER_COUNT,
  GameState,
} from '../../src/game/gameState';
import { evaluateHand, scoreHand } from '../../src/game/pokerEngine';
import type { JokerCard, PlayingCard, Rank, Suit } from '../../src/game/types';

function baseChips(rank: Rank): number {
  if (rank === 14) return 11;
  if (rank >= 11) return 10;
  return rank;
}

function card(
  id: string,
  rank: Rank,
  suit: Suit = 'spades',
  patch: Partial<PlayingCard> = {},
): PlayingCard {
  return {
    id,
    rank,
    suit,
    enhancement: 'none',
    seal: 'none',
    edition: 'base',
    baseChips: baseChips(rank),
    ...patch,
  };
}

function joker(
  id: string,
  name: string,
  effect: JokerCard['effect'],
  patch: Partial<JokerCard> = {},
): JokerCard {
  return {
    id,
    key: id,
    name,
    description: name,
    rarity: 'common',
    price: 5,
    sellValue: 2,
    effect,
    edition: 'base',
    sticker: 'none',
    rental: false,
    ...patch,
  };
}

const LEVEL_ONE = { level: 1, chips: 5, mult: 1 };

describe('Joker Exact Parity + Mythic tier', () => {
  it('contains exactly 50 official-parity Jokers and 20 Mythics', () => {
    expect(OFFICIAL_JOKER_COUNT).toBe(50);
    expect(MYTHIC_JOKER_COUNT).toBe(20);
    expect(JOKER_LIBRARY_SIZE).toBe(70);
  });

  it('Misprint rolls an integer from 0 through 23 for each hand', () => {
    const hand = evaluateHand([card('k', 13)]);
    const misprint = joker('misprint', 'Misprint', { kind: 'random-mult', min: 0, max: 23 });
    const result = scoreHand(hand, LEVEL_ONE, { jokers: [misprint], rng: () => 0.999999 });
    expect(misprint.counter).toBe(23);
    expect(result.finalMult).toBe(24);
  });

  it('Hanging Chad retriggers Photograph exactly twice on the first scoring face', () => {
    const hand = evaluateHand([card('king', 13, 'hearts')]);
    const chad = joker('chad', 'Hanging Chad', { kind: 'retrigger-first', extra: 2 });
    const photo = joker('photo', 'Photograph', { kind: 'first-face-xmult', amount: 2 });
    const result = scoreHand(hand, LEVEL_ONE, { jokers: [chad, photo], rng: () => 0.9 });
    expect(result.finalMult).toBe(8);
    expect(result.steps.filter((step) => step.jokerId === 'photo')).toHaveLength(3);
  });

  it('Red Seal stacks additively with Hanging Chad and does not recursively retrigger itself', () => {
    const hand = evaluateHand([card('king-red', 13, 'hearts', { seal: 'red' })]);
    const chad = joker('chad', 'Hanging Chad', { kind: 'retrigger-first', extra: 2 });
    const photo = joker('photo', 'Photograph', { kind: 'first-face-xmult', amount: 2 });
    const result = scoreHand(hand, LEVEL_ONE, { jokers: [chad, photo], rng: () => 0.9 });
    expect(result.finalMult).toBe(16);
    expect(result.steps.filter((step) => step.jokerId === 'photo')).toHaveLength(4);
  });

  it('Glass shatters only once even when the scoring card is retriggered', () => {
    const glass = card('glass', 13, 'hearts', { enhancement: 'glass' });
    const hand = evaluateHand([glass]);
    const chad = joker('chad', 'Hanging Chad', { kind: 'retrigger-first', extra: 2 });
    const result = scoreHand(hand, LEVEL_ONE, { jokers: [chad], rng: () => 0 });
    expect(result.destroyedCardIds).toEqual(['glass']);
    expect(result.steps.filter((step) => step.stage === 'destruction')).toHaveLength(1);
    expect(result.steps.filter((step) => step.cardId === 'glass' && step.multMul === 2)).toHaveLength(3);
  });

  it('The Plant debuffs face-card chips, enhancements and Photograph', () => {
    const hand = evaluateHand([card('plant-king', 13, 'hearts')]);
    const photo = joker('photo', 'Photograph', { kind: 'first-face-xmult', amount: 2 });
    const result = scoreHand(hand, LEVEL_ONE, {
      jokers: [photo],
      bossDebuffFace: true,
      rng: () => 0,
    });
    expect(result.finalChips).toBe(5);
    expect(result.finalMult).toBe(1);
    expect(result.steps.some((step) => step.jokerId === 'photo')).toBe(false);
  });

  it('Raised Fist uses Balatro rank values and Red Seal + Mime retrigger held effects', () => {
    const played = evaluateHand([card('two', 2)]);
    const heldAce = card('held-ace', 14, 'clubs', { seal: 'red' });
    const fist = joker('fist', 'Raised Fist', { kind: 'lowest-held-mult', multiplier: 2 });
    const mime = joker('mime', 'Mime', { kind: 'retrigger-held' });
    const result = scoreHand(played, LEVEL_ONE, {
      jokers: [fist, mime],
      heldCards: [heldAce],
      rng: () => 0.9,
    });
    expect(result.finalMult).toBe(67);
    expect(result.steps.filter((step) => step.jokerId === 'fist')).toHaveLength(3);
  });

  it('Bloodstone rerolls its 1-in-2 chance on every card retrigger', () => {
    const hand = evaluateHand([card('heart', 10, 'hearts')]);
    const chad = joker('chad', 'Hanging Chad', { kind: 'retrigger-first', extra: 2 });
    const bloodstone = joker('blood', 'Bloodstone', {
      kind: 'suit-chance-xmult',
      suit: 'hearts',
      chance: 0.5,
      amount: 1.5,
    });
    const result = scoreHand(hand, LEVEL_ONE, { jokers: [chad, bloodstone], rng: () => 0 });
    expect(result.finalMult).toBeCloseTo(3.375, 8);
    expect(result.steps.filter((step) => step.jokerId === 'blood')).toHaveLength(3);
  });

  it('Runner scales before independent scoring so the triggering Straight gets the new Chips', () => {
    const state = new GameState({ seed: 301 });
    state.configureRun('red', 'white');
    state.phase = 'play';
    state.target = 999999999;
    state.handsLeft = 4;
    state.discardsLeft = 3;
    state.hand = [
      card('s1', 5, 'spades'),
      card('s2', 6, 'hearts'),
      card('s3', 7, 'diamonds'),
      card('s4', 8, 'clubs'),
      card('s5', 9, 'spades'),
    ];
    state.selected = new Set(state.hand.map((value) => value.id));
    state.deck = [];
    state.jokers = [
      joker('runner', 'Runner', { kind: 'straight-scale-chips', gain: 15, start: 0 }, { counter: 0 }),
    ];

    const result = state.playSelected(state.hand.map((value) => value.id));
    expect(result).not.toBeNull();
    expect(state.jokers[0].counter).toBe(15);
    expect(result!.steps.some((step) => step.jokerId === 'runner' && step.chipsDelta === 15)).toBe(true);
  });

  it('Ice Cream scores its current value, then decays and destroys itself at zero', () => {
    const state = new GameState({ seed: 302 });
    state.configureRun('red', 'white');
    state.phase = 'play';
    state.target = 999999999;
    state.handsLeft = 4;
    state.hand = [card('ice-card', 10)];
    state.selected = new Set(['ice-card']);
    state.deck = [];
    state.jokers = [
      joker('ice', 'Ice Cream', { kind: 'decay-chips', start: 100, decay: 5 }, { counter: 5 }),
    ];

    const result = state.playSelected(['ice-card']);
    expect(result!.steps.some((step) => step.jokerId === 'ice' && step.chipsDelta === 5)).toBe(true);
    expect(state.jokers.find((value) => value.id === 'ice')).toBeUndefined();
  });

  it('Mythic Chronomancer retriggers both scoring ends and Last Emperor is final-hand only', () => {
    const pair = evaluateHand([card('p1', 8, 'spades'), card('p2', 8, 'hearts')]);
    const chrono = joker('chrono', 'Chronomancer', { kind: 'mythic-chronos' }, { rarity: 'mythic' });
    const emperor = joker('emperor', 'Last Emperor', { kind: 'mythic-emperor' }, { rarity: 'mythic' });
    const result = scoreHand(pair, { level: 1, chips: 10, mult: 2 }, {
      jokers: [chrono, emperor],
      isFinalHand: true,
      rng: () => 0.9,
    });
    expect(result.steps.filter((step) => step.cardId === 'p1' && step.retrigger)).toHaveLength(2);
    expect(result.steps.filter((step) => step.cardId === 'p2' && step.retrigger)).toHaveLength(2);
    expect(result.steps.some((step) => step.jokerId === 'emperor' && step.multMul === 5)).toBe(true);
  });
});
"""
(root / "tests/unit/balatroJokerExactParity.test.ts").write_text(tests, encoding="utf-8")

print("Exact Joker + Mythic regression tests applied.")
