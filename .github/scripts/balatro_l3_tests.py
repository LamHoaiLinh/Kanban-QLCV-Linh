
from __future__ import annotations

import sys
from pathlib import Path

if len(sys.argv) != 2:
    raise SystemExit("Usage: balatro_l3_tests.py <open-poker-root>")

root = Path(sys.argv[1]).resolve()

def replace_once(path: str, old: str, new: str) -> None:
    p = root / path
    s = p.read_text(encoding="utf-8")
    if old not in s:
        raise SystemExit(f"L3 test anchor not found in {path}: {old[:180]!r}")
    p.write_text(s.replace(old, new, 1), encoding="utf-8")

# Existing shop test: L3 moves Shop -> Blind Select -> Play.
replace_once(
    "tests/unit/gameState.test.ts",
    """    expect(continued).toBe(true);
    expect(state.phase).toBe('play');
    expect(state.hand).toHaveLength(state.config.handSize);
    expect(state.handsLeft).toBe(state.config.handsPerRound);
    expect(state.blindIndex).toBe(1);""",
    """    expect(continued).toBe(true);
    expect(state.phase).toBe('blind-select');
    expect(state.hand).toHaveLength(0);
    expect(state.blindIndex).toBe(1);
    expect(state.playSelectedBlind()).toBe(true);
    expect(state.phase).toBe('play');
    expect(state.hand).toHaveLength(state.roundHandSize);""",
)

# Snapshot parity is now V4.
replace_once(
    "tests/unit/balatroShopParity.test.ts",
    "expect(snap.version).toBe(3);",
    "expect(snap.version).toBe(4);",
)

tests = r"""import { describe, expect, it } from 'vitest';
import {
  BOSS_BLINDS,
  DECKS,
  JOKER_LIBRARY_SIZE,
  STAKES,
  GameState,
} from '../../src/game/gameState';
import type { RunSnapshotV4 } from '../../src/game/types';

describe('Balatro progression parity L3', () => {
  it('ships exactly 50 Jokers in the first deep Joker set', () => {
    expect(JOKER_LIBRARY_SIZE).toBe(50);
  });

  it('exposes five Decks and all eight Stakes', () => {
    expect(Object.keys(DECKS)).toHaveLength(5);
    expect(Object.keys(STAKES)).toHaveLength(8);
  });

  it('applies Red, Blue, Yellow and Black deck resources', () => {
    const red = new GameState({ seed: 101 });
    red.configureRun('red', 'white');
    expect(red.phase).toBe('blind-select');
    expect(red.playSelectedBlind()).toBe(true);
    expect(red.discardsLeft).toBe(4);

    const blue = new GameState({ seed: 102 });
    blue.configureRun('blue', 'white');
    blue.playSelectedBlind();
    expect(blue.handsLeft).toBe(5);

    const yellow = new GameState({ seed: 103 });
    yellow.configureRun('yellow', 'white');
    expect(yellow.money).toBe(14);

    const black = new GameState({ seed: 104 });
    black.configureRun('black', 'white');
    expect(black.jokerCapacity()).toBe(6);
    black.playSelectedBlind();
    expect(black.handsLeft).toBe(3);
  });

  it('uses the Purple/Orange/Gold Ante curve', () => {
    const state = new GameState({ seed: 105 });
    state.configureRun('red', 'purple');
    state.ante = 8;
    state.blindIndex = 0;
    expect(state.targetForPreview()).toBe(200000);
    state.blindIndex = 1;
    expect(state.targetForPreview()).toBe(300000);
  });

  it('skips Small/Big Blind, grants Tags, and never skips Boss', () => {
    const state = new GameState({ seed: 106 });
    state.configureRun('red', 'white');
    state.anteTags = ['economy', 'speed'];
    state.money = 10;

    expect(state.skipCurrentBlind()).toBe(true);
    expect(state.money).toBe(20);
    expect(state.blindIndex).toBe(1);

    expect(state.skipCurrentBlind()).toBe(true);
    expect(state.blindIndex).toBe(2);
    expect(state.skippedBlinds).toBe(2);
    expect(state.skipCurrentBlind()).toBe(false);
  });

  it('The Psychic requires exactly five played cards', () => {
    const state = new GameState({ seed: 107 });
    state.configureRun('red', 'white');
    state.blindIndex = 2;
    state.bossBlindKey = 'psychic';
    state.startBlind();

    state.toggleSelect(state.hand[0].id);
    expect(state.canPlay()).toBe(false);

    for (const card of state.hand.slice(1, 5)) state.toggleSelect(card.id);
    expect(state.selected.size).toBe(5);
    expect(state.canPlay()).toBe(true);
  });

  it('The Water removes Discards and The Needle limits Hands', () => {
    const water = new GameState({ seed: 108 });
    water.configureRun('red', 'white');
    water.blindIndex = 2;
    water.bossBlindKey = 'water';
    water.startBlind();
    expect(water.discardsLeft).toBe(0);

    const needle = new GameState({ seed: 109 });
    needle.configureRun('red', 'white');
    needle.blindIndex = 2;
    needle.bossBlindKey = 'needle';
    needle.startBlind();
    expect(needle.handsLeft).toBe(1);
    expect(BOSS_BLINDS.needle.targetMult).toBe(1);
  });

  it('V4 snapshot preserves Deck, Stake, Boss and Tags', () => {
    const state = new GameState({ seed: 110 });
    state.configureRun('black', 'gold');
    state.anteTags = ['investment', 'double'];
    state.bossBlindKey = 'flint';

    const snap = state.toSnapshot() as RunSnapshotV4;
    expect(snap.version).toBe(4);

    const restored = GameState.fromSnapshot(snap);
    expect(restored.toSnapshot()).toEqual(snap);
    expect(restored.deckKey).toBe('black');
    expect(restored.stakeKey).toBe('gold');
    expect(restored.bossBlindKey).toBe('flint');
  });
});
"""
(root / "tests/unit/balatroProgressionParity.test.ts").write_text(tests, encoding="utf-8")

print("Balatro L3 regression tests applied.")
