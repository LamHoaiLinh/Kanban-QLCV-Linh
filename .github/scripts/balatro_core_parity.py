from __future__ import annotations

import re
import sys
from pathlib import Path

if len(sys.argv) != 2:
    raise SystemExit("Usage: balatro_core_parity.py <open-poker-root>")

root = Path(sys.argv[1]).resolve()

def replace_once(path: str, old: str, new: str) -> None:
    p = root / path
    s = p.read_text(encoding="utf-8")
    if old not in s:
        raise SystemExit(f"Core parity anchor not found in {path}: {old[:180]!r}")
    p.write_text(s.replace(old, new, 1), encoding="utf-8")

# ---------------------------------------------------------------------------
# 1. Domain types: richer trigger log + Joker/Consumable editions
# ---------------------------------------------------------------------------
replace_once(
    "src/game/types.ts",
    """export interface ScoreBreakdown {
  hand: EvaluatedHand;
  baseChips: number;
  baseMult: number;
  finalChips: number;
  finalMult: number;
  total: number;
  steps: ScoreStep[]; // for animated readout
}

export interface ScoreStep {
  source: string;        // e.g. "10♥ +10 chips", "Joker: +4 Mult"
  chipsDelta?: number;
  multDelta?: number;
  multMul?: number;
  jokerId?: string;
}""",
    """export type TriggerStage =
  | 'base'
  | 'before_hand'
  | 'played_card'
  | 'held_card'
  | 'joker'
  | 'destruction'
  | 'end_hand'
  | 'end_round';

export interface ScoreBreakdown {
  hand: EvaluatedHand;
  baseChips: number;
  baseMult: number;
  finalChips: number;
  finalMult: number;
  total: number;
  moneyDelta: number;
  destroyedCardIds: string[];
  steps: ScoreStep[];
}

export interface ScoreStep {
  source: string;
  stage?: TriggerStage;
  chipsDelta?: number;
  multDelta?: number;
  multMul?: number;
  moneyDelta?: number;
  jokerId?: string;
  cardId?: string;
  retrigger?: boolean;
  chipsBefore?: number;
  chipsAfter?: number;
  multBefore?: number;
  multAfter?: number;
}""",
)

replace_once(
    "src/game/types.ts",
    """export interface JokerCard {
  id: string;
  key: string;
  name: string;
  description: string;
  rarity: JokerRarity;
  price: number;
  sellValue: number;
  effect: JokerEffect;
}""",
    """export interface JokerCard {
  id: string;
  key: string;
  name: string;
  description: string;
  rarity: JokerRarity;
  price: number;
  sellValue: number;
  effect: JokerEffect;
  edition?: Edition;
}""",
)

replace_once(
    "src/game/types.ts",
    """export interface ConsumableCard {
  id: string;
  key: string;
  name: string;
  description: string;
  type: ConsumableType;
  price: number;
  sellValue: number;
  effect: ConsumableEffect;
}""",
    """export interface ConsumableCard {
  id: string;
  key: string;
  name: string;
  description: string;
  type: ConsumableType;
  price: number;
  sellValue: number;
  effect: ConsumableEffect;
  edition?: Edition;
}""",
)

# ---------------------------------------------------------------------------
# 2. Replace scoring engine with an ordered Balatro-style trigger pipeline.
# ---------------------------------------------------------------------------
poker_engine = r"""// Ordered Balatro-style scoring pipeline.
// Core rule: the engine decides score/order; the renderer only replays ScoreStep[].

import type {
  EvaluatedHand,
  HandLevel,
  JokerCard,
  PlayingCard,
  PokerHandType,
  Rank,
  ScoreBreakdown,
  ScoreStep,
} from './types';
import { HAND_BASE } from './types';

export interface ScoreHandOptions {
  jokers?: JokerCard[];
  heldCards?: PlayingCard[];
  handsLeftBeforePlay?: number;
  handsPerRound?: number;
  rng?: () => number;
}

interface RankGroup {
  rank: Rank;
  cards: PlayingCard[];
}

function groupByRank(cards: PlayingCard[]): RankGroup[] {
  const m = new Map<Rank, PlayingCard[]>();
  for (const c of cards) {
    if (c.enhancement === 'stone') continue;
    const arr = m.get(c.rank) ?? [];
    arr.push(c);
    m.set(c.rank, arr);
  }
  return [...m.entries()]
    .map(([rank, cs]) => ({ rank, cards: cs }))
    .sort((a, b) => b.cards.length - a.cards.length || b.rank - a.rank);
}

function flushScoringSet(cards: PlayingCard[]): PlayingCard[] | null {
  const real = cards.filter((c) => c.enhancement !== 'stone');
  if (real.length < 5) return null;

  const suits = ['spades', 'hearts', 'diamonds', 'clubs'] as const;
  for (const suit of suits) {
    const eligible = real.filter((c) => c.suit === suit || c.enhancement === 'wild');
    if (eligible.length >= 5) {
      const ids = new Set(eligible.slice(0, 5).map((c) => c.id));
      return cards.filter((c) => ids.has(c.id));
    }
  }
  return null;
}

function straightRankSet(cards: PlayingCard[]): Set<Rank> | null {
  const byRank = new Map<Rank, PlayingCard>();
  for (const c of cards) {
    if (c.enhancement === 'stone') continue;
    if (!byRank.has(c.rank)) byRank.set(c.rank, c);
  }
  if (byRank.size < 5) return null;

  if (byRank.has(14) && [2, 3, 4, 5].every((r) => byRank.has(r as Rank))) {
    return new Set<Rank>([14, 2, 3, 4, 5]);
  }

  const ranks = [...byRank.keys()].sort((a, b) => a - b);
  for (let i = ranks.length - 5; i >= 0; i--) {
    let ok = true;
    for (let k = 1; k < 5; k++) {
      if (ranks[i + k] !== ranks[i] + k) {
        ok = false;
        break;
      }
    }
    if (ok) return new Set(ranks.slice(i, i + 5));
  }
  return null;
}

function withAlwaysScoringStones(played: PlayingCard[], coreIds: Set<string>): PlayingCard[] {
  return played.filter((card) => coreIds.has(card.id) || card.enhancement === 'stone');
}

/**
 * Evaluate the best poker hand while preserving the player's visible left-to-right
 * card order in scoringCards. Stone cards do not participate in classification,
 * but always join the scoring set.
 */
export function evaluateHand(played: PlayingCard[]): EvaluatedHand {
  const nonStone = played.filter((c) => c.enhancement !== 'stone');
  const groups = groupByRank(nonStone);
  const counts = groups.map((g) => g.cards.length);
  const flushCards = flushScoringSet(nonStone);
  const straightRanks = straightRankSet(nonStone);

  const has = (n: number) => counts.includes(n);
  const countOf = (n: number) => counts.filter((c) => c === n).length;
  const idsForGroups = (...wanted: RankGroup[]) => new Set(wanted.flatMap((g) => g.cards.map((c) => c.id)));
  const allNonStoneIds = new Set(nonStone.map((c) => c.id));

  let type: PokerHandType = 'High Card';
  let coreIds = new Set<string>();

  if (has(5) && flushCards) {
    type = 'Flush Five';
    coreIds = idsForGroups(groups[0]);
  } else if (has(3) && has(2) && flushCards) {
    type = 'Flush House';
    coreIds = new Set(allNonStoneIds);
  } else if (has(5)) {
    type = 'Five of a Kind';
    coreIds = idsForGroups(groups[0]);
  } else if (straightRanks && flushCards) {
    const flushIds = new Set(flushCards.map((c) => c.id));
    const straightFlushIds = new Set(
      nonStone
        .filter((c) => straightRanks.has(c.rank) && flushIds.has(c.id))
        .map((c) => c.id),
    );
    if (straightFlushIds.size >= 5) {
      type = 'Straight Flush';
      coreIds = straightFlushIds;
    } else {
      type = 'Flush';
      coreIds = new Set(flushCards.map((c) => c.id));
    }
  } else if (has(4)) {
    type = 'Four of a Kind';
    coreIds = idsForGroups(groups[0]);
  } else if (has(3) && has(2)) {
    type = 'Full House';
    coreIds = idsForGroups(groups.find((g) => g.cards.length === 3)!, groups.find((g) => g.cards.length === 2)!);
  } else if (flushCards) {
    type = 'Flush';
    coreIds = new Set(flushCards.map((c) => c.id));
  } else if (straightRanks) {
    type = 'Straight';
    coreIds = new Set(nonStone.filter((c) => straightRanks.has(c.rank)).map((c) => c.id));
  } else if (has(3)) {
    type = 'Three of a Kind';
    coreIds = idsForGroups(groups[0]);
  } else if (countOf(2) >= 2) {
    const pairGroups = groups.filter((g) => g.cards.length === 2).slice(0, 2);
    type = 'Two Pair';
    coreIds = idsForGroups(...pairGroups);
  } else if (has(2)) {
    type = 'Pair';
    coreIds = idsForGroups(groups.find((g) => g.cards.length === 2)!);
  } else {
    type = 'High Card';
    const high = nonStone.slice().sort((a, b) => b.rank - a.rank)[0];
    if (high) coreIds.add(high.id);
  }

  return {
    type,
    scoringCards: withAlwaysScoringStones(played, coreIds),
    allPlayed: played.slice(),
  };
}

interface MutableScore {
  chips: number;
  mult: number;
  money: number;
  steps: ScoreStep[];
}

function applyStep(
  score: MutableScore,
  partial: Omit<ScoreStep, 'chipsBefore' | 'chipsAfter' | 'multBefore' | 'multAfter'>,
) {
  const chipsBefore = score.chips;
  const multBefore = score.mult;
  if (partial.chipsDelta) score.chips += partial.chipsDelta;
  if (partial.multDelta) score.mult += partial.multDelta;
  if (partial.multMul && partial.multMul !== 1) score.mult *= partial.multMul;
  if (partial.moneyDelta) score.money += partial.moneyDelta;
  score.steps.push({
    ...partial,
    chipsBefore,
    chipsAfter: score.chips,
    multBefore,
    multAfter: score.mult,
  });
}

function triggerPlayingCard(
  card: PlayingCard,
  score: MutableScore,
  rng: () => number,
  retrigger: boolean,
) {
  const suffix = retrigger ? ' (retrigger)' : '';

  if (card.enhancement === 'stone') {
    applyStep(score, {
      source: `Stone +50 Chips${suffix}`,
      stage: 'played_card',
      cardId: card.id,
      retrigger,
      chipsDelta: 50,
    });
  } else {
    applyStep(score, {
      source: `${labelShort(card)} +${card.baseChips} Chips${suffix}`,
      stage: 'played_card',
      cardId: card.id,
      retrigger,
      chipsDelta: card.baseChips,
    });

    if (card.enhancement === 'bonus') {
      applyStep(score, {
        source: `Bonus +30 Chips${suffix}`,
        stage: 'played_card',
        cardId: card.id,
        retrigger,
        chipsDelta: 30,
      });
    } else if (card.enhancement === 'mult') {
      applyStep(score, {
        source: `Mult Card +4 Mult${suffix}`,
        stage: 'played_card',
        cardId: card.id,
        retrigger,
        multDelta: 4,
      });
    } else if (card.enhancement === 'glass') {
      applyStep(score, {
        source: `Glass ×2 Mult${suffix}`,
        stage: 'played_card',
        cardId: card.id,
        retrigger,
        multMul: 2,
      });
    } else if (card.enhancement === 'lucky') {
      if (rng() < 1 / 5) {
        applyStep(score, {
          source: `Lucky +20 Mult${suffix}`,
          stage: 'played_card',
          cardId: card.id,
          retrigger,
          multDelta: 20,
        });
      }
      if (rng() < 1 / 15) {
        applyStep(score, {
          source: `Lucky +$20${suffix}`,
          stage: 'played_card',
          cardId: card.id,
          retrigger,
          moneyDelta: 20,
        });
      }
    }
  }

  // Gold Seal pays whenever this card scores.
  if (card.seal === 'gold') {
    applyStep(score, {
      source: `Gold Seal +$3${suffix}`,
      stage: 'played_card',
      cardId: card.id,
      retrigger,
      moneyDelta: 3,
    });
  }

  // Playing-card Editions resolve as the card scores.
  if (card.edition === 'foil') {
    applyStep(score, {
      source: `Foil +50 Chips${suffix}`,
      stage: 'played_card',
      cardId: card.id,
      retrigger,
      chipsDelta: 50,
    });
  } else if (card.edition === 'holographic') {
    applyStep(score, {
      source: `Holographic +10 Mult${suffix}`,
      stage: 'played_card',
      cardId: card.id,
      retrigger,
      multDelta: 10,
    });
  } else if (card.edition === 'polychrome') {
    applyStep(score, {
      source: `Polychrome ×1.5 Mult${suffix}`,
      stage: 'played_card',
      cardId: card.id,
      retrigger,
      multMul: 1.5,
    });
  }
}

function triggerHeldCard(card: PlayingCard, score: MutableScore, retrigger: boolean) {
  if (card.enhancement !== 'steel') return;
  applyStep(score, {
    source: `Steel ×1.5 Mult${retrigger ? ' (retrigger)' : ''}`,
    stage: 'held_card',
    cardId: card.id,
    retrigger,
    multMul: 1.5,
  });
}

function applyJokerMain(
  joker: JokerCard,
  hand: EvaluatedHand,
  options: ScoreHandOptions,
): Omit<ScoreStep, 'chipsBefore' | 'chipsAfter' | 'multBefore' | 'multAfter'> | null {
  const effect = joker.effect;
  if (effect.kind === 'chips') {
    return { source: `${joker.name} +${effect.amount} Chips`, stage: 'joker', chipsDelta: effect.amount, jokerId: joker.id };
  }
  if (effect.kind === 'mult') {
    return { source: `${joker.name} +${effect.amount} Mult`, stage: 'joker', multDelta: effect.amount, jokerId: joker.id };
  }
  if (effect.kind === 'pair-mult') {
    if (!isPairFamily(hand.type)) return null;
    return { source: `${joker.name} +${effect.amount} Mult`, stage: 'joker', multDelta: effect.amount, jokerId: joker.id };
  }
  if (effect.kind === 'flush-mult-mul') {
    if (!hand.type.includes('Flush')) return null;
    return { source: `${joker.name} ×${effect.amount} Mult`, stage: 'joker', multMul: effect.amount, jokerId: joker.id };
  }
  if (effect.kind === 'first-hand-chips') {
    if (options.handsLeftBeforePlay !== options.handsPerRound) return null;
    return { source: `${joker.name} +${effect.amount} Chips`, stage: 'joker', chipsDelta: effect.amount, jokerId: joker.id };
  }
  return null;
}

export function scoreHand(
  hand: EvaluatedHand,
  level: HandLevel,
  options: ScoreHandOptions = {},
): ScoreBreakdown {
  const base = HAND_BASE[hand.type];
  const lvl = Math.max(1, level.level);
  const baseChips = base.chips + base.chipsPerLvl * (lvl - 1);
  const baseMult = base.mult + base.multPerLvl * (lvl - 1);
  const rng = options.rng ?? Math.random;

  const score: MutableScore = {
    chips: baseChips,
    mult: baseMult,
    money: 0,
    steps: [{
      source: `${hand.type} (lvl ${lvl})`,
      stage: 'base',
      chipsDelta: baseChips,
      multDelta: baseMult,
      chipsBefore: 0,
      chipsAfter: baseChips,
      multBefore: 0,
      multAfter: baseMult,
    }],
  };

  // Played scoring cards: left -> right. Red Seal adds exactly one extra activation.
  for (const card of hand.scoringCards) {
    const activations = 1 + (card.seal === 'red' ? 1 : 0);
    for (let trigger = 0; trigger < activations; trigger++) {
      triggerPlayingCard(card, score, rng, trigger > 0);
    }
  }

  // Cards held in hand: left -> right. Steel is retriggerable by Red Seal.
  for (const card of options.heldCards ?? []) {
    if (card.enhancement !== 'steel') continue;
    const activations = 1 + (card.seal === 'red' ? 1 : 0);
    for (let trigger = 0; trigger < activations; trigger++) {
      triggerHeldCard(card, score, trigger > 0);
    }
  }

  // Independent Joker pass: left -> right. Foil/Holo before ability; Polychrome after.
  for (const joker of options.jokers ?? []) {
    const edition = joker.edition ?? 'base';
    if (edition === 'foil') {
      applyStep(score, {
        source: `${joker.name} Foil +50 Chips`,
        stage: 'joker',
        chipsDelta: 50,
        jokerId: joker.id,
      });
    } else if (edition === 'holographic') {
      applyStep(score, {
        source: `${joker.name} Holographic +10 Mult`,
        stage: 'joker',
        multDelta: 10,
        jokerId: joker.id,
      });
    }

    const main = applyJokerMain(joker, hand, options);
    if (main) applyStep(score, main);

    if (edition === 'polychrome') {
      applyStep(score, {
        source: `${joker.name} Polychrome ×1.5 Mult`,
        stage: 'joker',
        multMul: 1.5,
        jokerId: joker.id,
      });
    }
  }

  // Glass destruction rolls once per scoring Glass card, after all scoring.
  const destroyedCardIds: string[] = [];
  for (const card of hand.scoringCards) {
    if (card.enhancement !== 'glass') continue;
    if (rng() < 1 / 4) {
      destroyedCardIds.push(card.id);
      score.steps.push({
        source: `${labelShort(card)} Glass shattered`,
        stage: 'destruction',
        cardId: card.id,
        chipsBefore: score.chips,
        chipsAfter: score.chips,
        multBefore: score.mult,
        multAfter: score.mult,
      });
    }
  }

  return {
    hand,
    baseChips,
    baseMult,
    finalChips: score.chips,
    finalMult: score.mult,
    total: Math.floor(score.chips * score.mult),
    moneyDelta: score.money,
    destroyedCardIds,
    steps: score.steps,
  };
}

function isPairFamily(type: EvaluatedHand['type']): boolean {
  return type === 'Pair'
    || type === 'Two Pair'
    || type === 'Three of a Kind'
    || type === 'Full House'
    || type === 'Four of a Kind'
    || type === 'Five of a Kind'
    || type === 'Flush House'
    || type === 'Flush Five';
}

function labelShort(c: PlayingCard): string {
  const r = c.rank === 14 ? 'A' : c.rank === 13 ? 'K' : c.rank === 12 ? 'Q' : c.rank === 11 ? 'J' : `${c.rank}`;
  const s = c.suit === 'spades' ? '♠' : c.suit === 'hearts' ? '♥' : c.suit === 'diamonds' ? '♦' : '♣';
  return `${r}${s}`;
}
"""
(root / "src/game/pokerEngine.ts").write_text(poker_engine, encoding="utf-8")

# ---------------------------------------------------------------------------
# 3. GameState: deterministic RNG, held effects, seals, shatter, Joker ordering.
# ---------------------------------------------------------------------------
replace_once(
    "src/game/gameState.ts",
    """  selectedCards(): PlayingCard[] {
    return this.hand.filter((c) => this.selected.has(c.id));
  }""",
    """  selectedCards(orderIds?: readonly string[]): PlayingCard[] {
    if (!orderIds) return this.hand.filter((c) => this.selected.has(c.id));
    const byId = new Map(this.hand.map((card) => [card.id, card]));
    return orderIds
      .filter((id) => this.selected.has(id))
      .map((id) => byId.get(id))
      .filter((card): card is PlayingCard => Boolean(card));
  }

  jokerCapacity(): number {
    return MAX_JOKERS + this.jokers.filter((joker) => (joker.edition ?? 'base') === 'negative').length;
  }

  consumableCapacity(): number {
    return MAX_CONSUMABLES + this.consumables.filter((card) => (card.edition ?? 'base') === 'negative').length;
  }

  moveJoker(jokerId: string, toIndex: number): boolean {
    const fromIndex = this.jokers.findIndex((joker) => joker.id === jokerId);
    if (fromIndex < 0) return false;
    const clamped = Math.max(0, Math.min(this.jokers.length - 1, toIndex));
    if (clamped === fromIndex) return true;
    const [joker] = this.jokers.splice(fromIndex, 1);
    this.jokers.splice(clamped, 0, joker);
    this.emit();
    return true;
  }""",
)

replace_once(
    "src/game/gameState.ts",
    """  playSelected(): ScoreBreakdown | null {
    if (!this.canPlay()) return null;
    const cards = this.selectedCards();
    const hand = evaluateHand(cards);
    const level = this.handLevels[hand.type];
    const handsLeftBeforePlay = this.handsLeft;
    const breakdown = scoreHand(hand, level, {
      jokers: this.jokers,
      handsLeftBeforePlay,
      handsPerRound: this.config.handsPerRound,
    });

    this.roundScore += breakdown.total;
    this.handsLeft -= 1;
    this.lastScore = breakdown;

    // Remove played cards from hand, push to discard
    this.hand = this.hand.filter((c) => !this.selected.has(c.id));
    this.discardPile.push(...cards);
    this.selected.clear();
    this.drawToFull();

    // Check win / loss
    if (this.roundScore >= this.target) {
      this.onBlindCleared();
    } else if (this.handsLeft <= 0) {
      this.phase = 'game-over';
    }

    this.emit();
    return breakdown;
  }""",
    """  playSelected(orderIds?: readonly string[]): ScoreBreakdown | null {
    if (!this.canPlay()) return null;
    const cards = this.selectedCards(orderIds);
    const hand = evaluateHand(cards);
    const level = this.handLevels[hand.type];
    const handsLeftBeforePlay = this.handsLeft;
    const playedIds = new Set(cards.map((card) => card.id));
    const heldCards = this.hand.filter((card) => !playedIds.has(card.id));
    const breakdown = scoreHand(hand, level, {
      jokers: this.jokers,
      heldCards,
      handsLeftBeforePlay,
      handsPerRound: this.config.handsPerRound,
      rng: () => this.rng(),
    });

    this.roundScore += breakdown.total;
    this.money += breakdown.moneyDelta;
    this.handsLeft -= 1;
    this.lastScore = breakdown;

    // Remove played cards from hand, push survivors to discard.
    this.hand = this.hand.filter((c) => !this.selected.has(c.id));
    this.discardPile.push(...cards);
    this.selected.clear();

    // Glass cards shatter after scoring, once each even when retriggered.
    if (breakdown.destroyedCardIds.length > 0) {
      const destroyed = new Set(breakdown.destroyedCardIds);
      this.discardPile = this.discardPile.filter((card) => !destroyed.has(card.id));
      this.ownedDeck = this.ownedDeck.filter((card) => !destroyed.has(card.id));
    }

    // Balatro-style: if the Blind is cleared, do not draw a fresh hand first.
    if (this.roundScore >= this.target) {
      this.resolveEndOfRoundHeldCards(hand.type, breakdown);
      this.onBlindCleared();
    } else if (this.handsLeft <= 0) {
      this.phase = 'game-over';
    } else {
      this.drawToFull();
    }

    this.emit();
    return breakdown;
  }""",
)

replace_once(
    "src/game/gameState.ts",
    """  discardSelected(): PlayingCard[] | null {
    if (!this.canDiscard()) return null;
    const cards = this.selectedCards();
    this.hand = this.hand.filter((c) => !this.selected.has(c.id));
    this.discardPile.push(...cards);
    this.discardsLeft -= 1;
    this.selected.clear();
    this.drawToFull();
    this.emit();
    return cards;
  }""",
    """  discardSelected(orderIds?: readonly string[]): PlayingCard[] | null {
    if (!this.canDiscard()) return null;
    const cards = this.selectedCards(orderIds);
    this.hand = this.hand.filter((c) => !this.selected.has(c.id));
    this.discardPile.push(...cards);
    this.discardsLeft -= 1;
    this.selected.clear();

    // Purple Seal: create a Tarot on discard if there is consumable room.
    for (const card of cards) {
      if (card.seal !== 'purple') continue;
      if (this.consumables.length >= this.consumableCapacity()) break;
      this.consumables.push(this.makePurpleSealTarot());
    }

    this.drawToFull();
    this.emit();
    return cards;
  }""",
)

# Add end-of-round held-card settlement + Purple Seal Tarot factory.
replace_once(
    "src/game/gameState.ts",
    """  private createShopState(): ShopState {""",
    """  private resolveEndOfRoundHeldCards(lastHandType: PokerHandType, breakdown: ScoreBreakdown) {
    for (const card of this.hand) {
      if (card.enhancement === 'gold') {
        this.money += 3;
        breakdown.moneyDelta += 3;
        breakdown.steps.push({
          source: 'Gold Card +$3',
          stage: 'end_round',
          cardId: card.id,
          moneyDelta: 3,
          chipsBefore: breakdown.finalChips,
          chipsAfter: breakdown.finalChips,
          multBefore: breakdown.finalMult,
          multAfter: breakdown.finalMult,
        });
      }

      // Blue Seal: create the Planet matching the final played hand, if room exists.
      if (card.seal === 'blue' && this.consumables.length < this.consumableCapacity()) {
        const consumable: ConsumableCard = {
          id: this.makeRunId('blue-planet'),
          key: `planet-${lastHandType.toLowerCase().replaceAll(' ', '-')}`,
          name: `${lastHandType} Planet`,
          description: `Upgrade ${lastHandType} by 1 level.`,
          type: 'planet',
          price: 3,
          sellValue: 1,
          effect: { kind: 'planet', handType: lastHandType },
          edition: 'base',
        };
        this.consumables.push(consumable);
        breakdown.steps.push({
          source: `Blue Seal created ${consumable.name}`,
          stage: 'end_round',
          cardId: card.id,
          chipsBefore: breakdown.finalChips,
          chipsAfter: breakdown.finalChips,
          multBefore: breakdown.finalMult,
          multAfter: breakdown.finalMult,
        });
      }
    }
  }

  private makePurpleSealTarot(): ConsumableCard {
    const enhancement = this.pick(ENHANCEMENT_OFFERS.filter((value) => value !== 'stone'));
    return {
      id: this.makeRunId('purple-tarot'),
      key: `tarot-${enhancement}`,
      name: `${titleCase(enhancement)} Tarot`,
      description: `Add ${titleCase(enhancement)} to a deck card.`,
      type: 'tarot',
      price: 4,
      sellValue: 2,
      effect: { kind: 'enhance-card', enhancement },
      edition: 'base',
    };
  }

  private createShopState(): ShopState {""",
)

# Dynamic capacities, including Negative editions.
replace_once(
    "src/game/gameState.ts",
    """    if (offer.item.kind === 'joker') return this.jokers.length < MAX_JOKERS;
    if (offer.item.kind === 'consumable') return this.consumables.length < MAX_CONSUMABLES;""",
    """    if (offer.item.kind === 'joker') {
      const bonusForIncomingNegative = (offer.item.joker.edition ?? 'base') === 'negative' ? 1 : 0;
      return this.jokers.length < this.jokerCapacity() + bonusForIncomingNegative;
    }
    if (offer.item.kind === 'consumable') {
      const bonusForIncomingNegative = (offer.item.consumable.edition ?? 'base') === 'negative' ? 1 : 0;
      return this.consumables.length < this.consumableCapacity() + bonusForIncomingNegative;
    }""",
)

replace_once(
    "src/game/gameState.ts",
    """      effect: { ...template.effect },
    };
    return { kind: 'joker', joker };""",
    """      effect: { ...template.effect },
      edition: 'base',
    };
    return { kind: 'joker', joker };""",
)

replace_once(
    "src/game/gameState.ts",
    """      effect: { ...template.effect },
    };
    return { kind: 'consumable', consumable };""",
    """      effect: { ...template.effect },
      edition: 'base',
    };
    return { kind: 'consumable', consumable };""",
)

# ---------------------------------------------------------------------------
# 4. Main UI: pass visible order into engine + Joker drag/reorder + capacities.
# ---------------------------------------------------------------------------
# MAX_JOKERS/MAX_CONSUMABLES become dynamic because Negative editions add slots.
replace_once(
    "src/main.ts",
    "import { GameState, MAX_CONSUMABLES, MAX_JOKERS } from './game/gameState';",
    "import { GameState } from './game/gameState';",
)

replace_once(
    "src/main.ts",
    "  const br = state.playSelected();",
    "  const br = state.playSelected(playedCards.map((card) => card.id));",
)
replace_once(
    "src/main.ts",
    "  state.discardSelected();",
    "  state.discardSelected(cards.map((card) => card.id));",
)

replace_once(
    "src/main.ts",
    """  for (let i = 0; i < MAX_JOKERS; i++) {
    const slot = document.createElement('div');
    const joker = state.jokers[i];
    slot.className = `joker-slot${joker ? ' filled' : ''}`;
    if (joker) {
      slot.dataset.jokerId = joker.id;
      slot.textContent = shortName(joker.name);
      slot.title = `${joker.name} - ${joker.description}`;
    }
    jokerSlotsEl.appendChild(slot);
  }

  consumableSlotsEl.replaceChildren();
  for (let i = 0; i < MAX_CONSUMABLES; i++) {""",
    """  const jokerCapacity = state.jokerCapacity();
  for (let i = 0; i < jokerCapacity; i++) {
    const slot = document.createElement('div');
    const joker = state.jokers[i];
    slot.className = `joker-slot${joker ? ' filled' : ''}`;
    slot.dataset.jokerIndex = String(i);
    slot.addEventListener('dragover', (event) => {
      if (!event.dataTransfer?.types.includes('application/x-open-poker-joker')) return;
      event.preventDefault();
      slot.classList.add('drag-target');
    });
    slot.addEventListener('dragleave', () => slot.classList.remove('drag-target'));
    slot.addEventListener('drop', (event) => {
      event.preventDefault();
      slot.classList.remove('drag-target');
      const jokerId = event.dataTransfer?.getData('application/x-open-poker-joker');
      if (jokerId && state.moveJoker(jokerId, i)) {
        audio.play('buttonClick');
        updateHud();
      }
    });
    if (joker) {
      slot.dataset.jokerId = joker.id;
      slot.textContent = shortName(joker.name);
      slot.title = `${joker.name} - ${joker.description} · Drag to reorder`;
      slot.draggable = true;
      slot.addEventListener('dragstart', (event) => {
        event.dataTransfer?.setData('application/x-open-poker-joker', joker.id);
        if (event.dataTransfer) event.dataTransfer.effectAllowed = 'move';
        slot.classList.add('dragging');
      });
      slot.addEventListener('dragend', () => {
        slot.classList.remove('dragging');
        jokerSlotsEl.querySelectorAll('.drag-target').forEach((el) => el.classList.remove('drag-target'));
      });
    }
    jokerSlotsEl.appendChild(slot);
  }

  consumableSlotsEl.replaceChildren();
  const consumableCapacity = state.consumableCapacity();
  for (let i = 0; i < consumableCapacity; i++) {""",
)

replace_once(
    "src/main.ts",
    """  jokerCountEl.textContent = `${state.jokers.length}/${MAX_JOKERS}`;
  consumableCountEl.textContent = `${state.consumables.length}/${MAX_CONSUMABLES}`;""",
    """  jokerCountEl.textContent = `${state.jokers.length}/${state.jokerCapacity()}`;
  consumableCountEl.textContent = `${state.consumables.length}/${state.consumableCapacity()}`;""",
)

replace_once(
    "src/main.ts",
    """    renderShopCardInventory(state.jokers, MAX_JOKERS, 'joker'),
    renderShopCardInventory(state.consumables, MAX_CONSUMABLES, 'consumable'),""",
    """    renderShopCardInventory(state.jokers, state.jokerCapacity(), 'joker'),
    renderShopCardInventory(state.consumables, state.consumableCapacity(), 'consumable'),""",
)

# ---------------------------------------------------------------------------
# 5. Main animation: replay actual ScoreStep trigger log instead of recalculating.
# ---------------------------------------------------------------------------
replace_once(
    "src/main.ts",
    """function labelsForJokerStep(step: { chipsDelta?: number; multDelta?: number; multMul?: number }) {
  const labels: { text: string; cls: string }[] = [];""",
    """function labelsForJokerStep(step: { chipsDelta?: number; multDelta?: number; multMul?: number; moneyDelta?: number }) {
  const labels: { text: string; cls: string }[] = [];""",
)
replace_once(
    "src/main.ts",
    """  if (step.multMul && step.multMul !== 1) {
    const m = Number.isInteger(step.multMul) ? step.multMul.toString() : step.multMul.toFixed(1);
    labels.push({ text: `×${m} Mult`, cls: 'is-mult-mul' });
  }
  return labels;
}""",
    """  if (step.multMul && step.multMul !== 1) {
    const m = Number.isInteger(step.multMul) ? step.multMul.toString() : step.multMul.toFixed(1);
    labels.push({ text: `×${m} Mult`, cls: 'is-mult-mul' });
  }
  if (step.moneyDelta) {
    labels.push({ text: `+$${Math.round(step.moneyDelta)}`, cls: 'is-money' });
  }
  return labels;
}""",
)

# Use the engine's exact step values for card visual labels.
replace_once(
    "src/main.ts",
    """function spawnCardScoreFloat(
  obj: CardObject,
  deltas: { chipsDelta: number; multDelta: number; multMul: number },
) {
  const labels: { text: string; cls: string }[] = [];
  if (deltas.chipsDelta !== 0) {
    labels.push({ text: `+${Math.round(deltas.chipsDelta)}`, cls: 'is-chips' });
  }
  if (deltas.multDelta !== 0) {
    labels.push({ text: `+${Math.round(deltas.multDelta)} Mult`, cls: 'is-mult-add' });
  }
  if (deltas.multMul !== 1) {
    const m = Number.isInteger(deltas.multMul) ? deltas.multMul.toString() : deltas.multMul.toFixed(1);
    labels.push({ text: `×${m} Mult`, cls: 'is-mult-mul' });
  }""",
    """function spawnCardScoreFloat(
  obj: CardObject,
  deltas: { chipsDelta?: number; multDelta?: number; multMul?: number; moneyDelta?: number },
) {
  const labels = labelsForJokerStep(deltas);""",
)

# Add CSS for money labels and Joker drag affordance.
style = root / "src/style.css"
with style.open("a", encoding="utf-8") as f:
    f.write(r"""
/* Balatro core parity: trigger feedback + Joker ordering */
.card-score-float.is-money { color: #ffd24a; }
.joker-slot.filled { cursor: grab; touch-action: none; }
.joker-slot.filled:active { cursor: grabbing; }
.joker-slot.dragging { opacity: .45; transform: scale(.94); }
.joker-slot.drag-target {
  outline: 3px solid #ffd24a;
  outline-offset: 2px;
  box-shadow: 0 0 18px rgba(255,210,74,.55);
}
""")

# ---------------------------------------------------------------------------
# 5b. Renderer replays the engine's exact trigger log.
# ---------------------------------------------------------------------------
replace_once(
    "src/main.ts",
    """function tweenNumber(el: HTMLElement, from: number, to: number, duration: number, tickName?: string) {
  const value = { v: from };""",
    """function formatScoreNumber(value: number): string {
  const rounded = Math.round(value * 100) / 100;
  return Number.isInteger(rounded)
    ? rounded.toLocaleString()
    : rounded.toLocaleString(undefined, { maximumFractionDigits: 2 });
}

function tweenNumber(el: HTMLElement, from: number, to: number, duration: number, tickName?: string) {
  const value = { v: from };""",
)
replace_once(
    "src/main.ts",
    "      el.textContent = Math.round(next).toLocaleString();",
    "      el.textContent = formatScoreNumber(next);",
)

# Remove the old renderer-side score calculator. The engine is now authoritative.
main_path = root / "src/main.ts"
main_source = main_path.read_text(encoding="utf-8")
main_source, removed = re.subn(
    r"function cardScoreDeltas\\(card: PlayingCard\\): \\{ chipsDelta: number; multDelta: number; multMul: number \\} \\{.*?\\n\\}\\n\\n// Floating value above a scoring card\\.",
    "// Floating value above a scoring card.",
    main_source,
    count=1,
    flags=re.S,
)
if removed != 1:
    raise SystemExit("Could not remove legacy cardScoreDeltas()")

event_replay = r"""  const scoringIds = new Set(br.hand.scoringCards.map((card) => card.id));

  // Non-scoring played cards fade, but remain on the table until tally finishes.
  for (const card of playedCards) {
    if (scoringIds.has(card.id)) continue;
    const obj = objects.get(card.id);
    if (!obj) continue;
    const material = obj.faceMesh.material as Material;
    material.transparent = true;
    gsap.to(material, { opacity: 0.5, duration: 0.2 });
  }

  // Replay the exact engine log. This keeps Red Seal, Steel, Lucky, Editions and
  // left-to-right Joker order visually consistent with the actual score.
  const replaySteps = br.steps.filter((step) =>
    step.stage !== 'base'
    && step.stage !== 'destruction'
    && step.stage !== 'end_round'
  );
  const replayStagger = 0.19;
  const firstDelay = 0.15;

  replaySteps.forEach((step, index) => {
    const delay = firstDelay + index * replayStagger;
    gsap.delayedCall(delay, () => {
      if (step.cardId) {
        const obj = objects.get(step.cardId);
        if (obj) {
          obj.pulse(step.retrigger ? 1.28 : 1.18, 0.34);
          obj.flash(step.retrigger ? 0x8de8ff : 0xffd24a, 0.42);
          spawnCardScoreFloat(obj, step);
          audio.play(step.retrigger ? 'multTick' : 'chipTick', {
            volume: 0.22,
            pitch: step.retrigger ? 1.18 : 1,
            pan: panFromX(obj.position.x),
          });
        }
      }

      if (step.jokerId) {
        const slot = jokerSlotsEl.querySelector<HTMLElement>(\`[data-joker-id="\${step.jokerId}"]\`);
        if (slot) {
          gsap.fromTo(
            slot,
            { scale: 1, y: 0 },
            { scale: 1.18, y: -8, duration: 0.16, yoyo: true, repeat: 1, ease: 'power2.out' },
          );
          spawnSlotScoreFloat(slot, labelsForJokerStep(step));
        }
        audio.play('multTick', { volume: 0.24, pitch: 1.06 });
      }

      if (step.chipsAfter !== undefined && step.chipsBefore !== undefined && step.chipsAfter !== step.chipsBefore) {
        tweenNumber(chipsEl, step.chipsBefore, step.chipsAfter, 0.18, 'chipTick');
        gsap.fromTo(chipsEl, { scale: 1 }, { scale: 1.14, duration: 0.12, yoyo: true, repeat: 1 });
      }
      if (step.multAfter !== undefined && step.multBefore !== undefined && step.multAfter !== step.multBefore) {
        tweenNumber(multEl, step.multBefore, step.multAfter, 0.18, 'multTick');
        gsap.fromTo(multEl, { scale: 1 }, { scale: 1.18, duration: 0.12, yoyo: true, repeat: 1 });
      }
    });
  });

  const destructionSteps = br.steps.filter((step) => step.stage === 'destruction');
  const destructionStart = firstDelay + replaySteps.length * replayStagger;
  destructionSteps.forEach((step, index) => {
    gsap.delayedCall(destructionStart + index * 0.22, () => {
      if (!step.cardId) return;
      const obj = objects.get(step.cardId);
      if (!obj) return;
      obj.flash(0xff3f4f, 0.65);
      obj.pulse(1.3, 0.4);
      const worldPos = sceneHandle.createVector3();
      obj.getWorldPosition(worldPos);
      sceneHandle.emitBurst(worldPos, {
        count: 26,
        color: sceneHandle.createColor('#8de8ff'),
        speed: 3.2,
        spread: 1.2,
        life: 1.1,
        size: 18,
      });
      audio.play('scorePop', { volume: 0.38, pitch: 1.25 });
    });
  });

  const totalAt = destructionStart + destructionSteps.length * 0.22 + 0.35;
  gsap.delayedCall(totalAt, () => revealScoreTotal(br));

  const prev = state.roundScore - br.total;
  gsap.delayedCall(totalAt + 0.05, () => {
    tweenNumber(roundScoreEl, prev, state.roundScore, 1.0, 'chipTick');
    gsap.fromTo(roundScoreEl, { scale: 1 }, { scale: 1.25, duration: 0.18, yoyo: true, repeat: 1, ease: 'power2.out' });
  });

"""
main_source, replaced = re.subn(
    r"  const scoringIds = new Set\\(br\\.hand\\.scoringCards\\.map\\(\\(c\\) => c\\.id\\)\\);.*?(?=  gsap\\.delayedCall\\(totalAt \\+ 1\\.2, \\(\\) => \\{)",
    lambda _m: event_replay,
    main_source,
    count=1,
    flags=re.S,
)
if replaced != 1:
    raise SystemExit("Could not replace legacy score animation with trigger-log replay")
main_path.write_text(main_source, encoding="utf-8")

# ---------------------------------------------------------------------------
# 6. Parity regression tests: deterministic modifier/order behavior.
# ---------------------------------------------------------------------------
# Upstream prototype rounded final Chips × Mult; Balatro floors the result.
replace_once(
    "tests/unit/pokerEngine.test.ts",
    "expect(score.total).toBe(113);",
    "expect(score.total).toBe(112);",
)

tests = r"""import { describe, expect, it } from 'vitest';
import { makeCard } from '../../src/game/cards';
import { evaluateHand, scoreHand } from '../../src/game/pokerEngine';
import type { JokerCard, PlayingCard } from '../../src/game/types';

function card(suit: PlayingCard['suit'], rank: PlayingCard['rank'], patch: Partial<PlayingCard> = {}) {
  return Object.assign(makeCard(suit, rank), patch);
}

function levelFor(type: ReturnType<typeof evaluateHand>['type']) {
  const map: Record<string, { level: number; chips: number; mult: number }> = {
    'High Card': { level: 1, chips: 5, mult: 1 },
    Pair: { level: 1, chips: 10, mult: 2 },
    'Two Pair': { level: 1, chips: 20, mult: 2 },
    'Three of a Kind': { level: 1, chips: 30, mult: 3 },
    Straight: { level: 1, chips: 30, mult: 4 },
    Flush: { level: 1, chips: 35, mult: 4 },
    'Full House': { level: 1, chips: 40, mult: 4 },
    'Four of a Kind': { level: 1, chips: 60, mult: 7 },
    'Straight Flush': { level: 1, chips: 100, mult: 8 },
    'Five of a Kind': { level: 1, chips: 120, mult: 12 },
    'Flush House': { level: 1, chips: 140, mult: 14 },
    'Flush Five': { level: 1, chips: 160, mult: 16 },
  };
  return map[type];
}

describe('Balatro core parity', () => {
  it('preserves visible order for Straight scoring cards', () => {
    const played = [
      card('hearts', 10),
      card('clubs', 14),
      card('spades', 12),
      card('diamonds', 11),
      card('hearts', 13),
    ];
    const hand = evaluateHand(played);
    expect(hand.type).toBe('Straight');
    expect(hand.scoringCards.map((c) => c.id)).toEqual(played.map((c) => c.id));
  });

  it('Stone always scores without participating in Pair classification', () => {
    const a = card('hearts', 7);
    const b = card('clubs', 7);
    const stone = card('spades', 2, { enhancement: 'stone', baseChips: 50 });
    const hand = evaluateHand([stone, a, b]);
    expect(hand.type).toBe('Pair');
    expect(hand.scoringCards.map((c) => c.id)).toEqual([stone.id, a.id, b.id]);
  });

  it('Red Seal retriggers a scoring Bonus card once', () => {
    const c = card('hearts', 10, { enhancement: 'bonus', seal: 'red' });
    const hand = evaluateHand([c]);
    const br = scoreHand(hand, levelFor(hand.type), { rng: () => 0.99 });
    expect(br.finalChips).toBe(85); // 5 base + (10 + 30) * 2
    expect(br.steps.filter((s) => s.cardId === c.id && s.retrigger).length).toBeGreaterThan(0);
  });

  it('Red Seal retriggers held Steel', () => {
    const played = card('clubs', 2);
    const steel = card('hearts', 9, { enhancement: 'steel', seal: 'red' });
    const hand = evaluateHand([played]);
    const br = scoreHand(hand, levelFor(hand.type), { heldCards: [steel], rng: () => 0.99 });
    expect(br.finalMult).toBeCloseTo(2.25, 6);
    expect(br.total).toBe(15); // floor((5+2) * 2.25)
  });

  it('Lucky rolls +20 Mult and $20 independently', () => {
    const lucky = card('diamonds', 2, { enhancement: 'lucky' });
    const hand = evaluateHand([lucky]);
    const rolls = [0.1, 0.01, 0.99];
    const br = scoreHand(hand, levelFor(hand.type), { rng: () => rolls.shift() ?? 0.99 });
    expect(br.finalMult).toBe(21);
    expect(br.moneyDelta).toBe(20);
  });

  it('Gold Seal pays $3 when the card scores', () => {
    const gold = card('spades', 4, { seal: 'gold' });
    const hand = evaluateHand([gold]);
    const br = scoreHand(hand, levelFor(hand.type), { rng: () => 0.99 });
    expect(br.moneyDelta).toBe(3);
  });

  it('Glass retriggers multiply each time but destruction rolls once', () => {
    const glass = card('hearts', 5, { enhancement: 'glass', seal: 'red' });
    const hand = evaluateHand([glass]);
    const br = scoreHand(hand, levelFor(hand.type), { rng: () => 0.1 });
    expect(br.finalMult).toBe(4);
    expect(br.destroyedCardIds).toEqual([glass.id]);
  });

  it('Joker order changes the result: +Mult before XMult is stronger', () => {
    const flushCards = [2, 4, 6, 8, 10].map((rank) => card('hearts', rank as PlayingCard['rank']));
    const hand = evaluateHand(flushCards);
    expect(hand.type).toBe('Flush');

    const add: JokerCard = {
      id: 'add', key: 'add', name: 'Add', description: '', rarity: 'common',
      price: 1, sellValue: 1, effect: { kind: 'mult', amount: 6 }, edition: 'base',
    };
    const x: JokerCard = {
      id: 'x', key: 'x', name: 'X', description: '', rarity: 'rare',
      price: 1, sellValue: 1, effect: { kind: 'flush-mult-mul', amount: 1.5 }, edition: 'base',
    };

    const addThenX = scoreHand(hand, levelFor(hand.type), { jokers: [add, x], rng: () => 0.99 });
    const xThenAdd = scoreHand(hand, levelFor(hand.type), { jokers: [x, add], rng: () => 0.99 });
    expect(addThenX.total).toBeGreaterThan(xThenAdd.total);
  });

  it('Joker Foil/Holographic resolve before ability and Polychrome after', () => {
    const c = card('clubs', 2);
    const hand = evaluateHand([c]);
    const poly: JokerCard = {
      id: 'p', key: 'p', name: 'Poly Add', description: '', rarity: 'rare',
      price: 1, sellValue: 1, effect: { kind: 'mult', amount: 4 }, edition: 'polychrome',
    };
    const br = scoreHand(hand, levelFor(hand.type), { jokers: [poly], rng: () => 0.99 });
    expect(br.finalMult).toBe(7.5); // (1 + 4) * 1.5
  });

  it('uses floor(Chips × Mult)', () => {
    const c = card('clubs', 2);
    const steel = card('hearts', 9, { enhancement: 'steel' });
    const hand = evaluateHand([c]);
    const br = scoreHand(hand, levelFor(hand.type), { heldCards: [steel], rng: () => 0.99 });
    expect(br.total).toBe(Math.floor(br.finalChips * br.finalMult));
  });
});
"""
test_path = root / "tests/unit/balatroParity.test.ts"
test_path.write_text(tests, encoding="utf-8")

print("Balatro Core Gameplay Parity patch applied.")
