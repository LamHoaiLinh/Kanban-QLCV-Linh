
from __future__ import annotations

import sys
from pathlib import Path

if len(sys.argv) != 2:
    raise SystemExit("Usage: balatro_progression_core.py <open-poker-root>")

root = Path(sys.argv[1]).resolve()

def replace_once(path: str, old: str, new: str) -> None:
    p = root / path
    s = p.read_text(encoding="utf-8")
    if old not in s:
        raise SystemExit(f"L3 core anchor not found in {path}: {old[:180]!r}")
    p.write_text(s.replace(old, new, 1), encoding="utf-8")

# ---------------------------------------------------------------------------
# Types
# ---------------------------------------------------------------------------
replace_once(
    "src/game/types.ts",
    "export type RunPhase = 'blind-select' | 'play' | 'shop' | 'booster' | 'game-over' | 'win';",
    "export type RunPhase = 'setup' | 'blind-select' | 'play' | 'shop' | 'booster' | 'game-over' | 'win';",
)

replace_once(
    "src/game/types.ts",
    """export type JokerEffect =
  | { kind: 'chips'; amount: number }
  | { kind: 'mult'; amount: number }
  | { kind: 'pair-mult'; amount: number }
  | { kind: 'flush-mult-mul'; amount: number }
  | { kind: 'first-hand-chips'; amount: number }
  | { kind: 'economy-clear'; amount: number };""",
    """export type JokerEffect =
  | { kind: 'chips'; amount: number }
  | { kind: 'mult'; amount: number }
  | { kind: 'xmult'; amount: number }
  | { kind: 'pair-mult'; amount: number }
  | { kind: 'flush-mult-mul'; amount: number }
  | { kind: 'first-hand-chips'; amount: number }
  | { kind: 'economy-clear'; amount: number }
  | { kind: 'hand-mult'; handTypes: PokerHandType[]; amount: number }
  | { kind: 'hand-chips'; handTypes: PokerHandType[]; amount: number }
  | { kind: 'hand-xmult'; handTypes: PokerHandType[]; amount: number }
  | { kind: 'score-suit-mult'; suit: Suit; amount: number }
  | { kind: 'score-suit-chips'; suit: Suit; amount: number }
  | { kind: 'score-suit-money'; suit: Suit; amount: number }
  | { kind: 'score-rank-mult'; ranks: Rank[]; amount: number }
  | { kind: 'score-rank-chips'; ranks: Rank[]; amount: number }
  | { kind: 'score-rank-bonus'; ranks: Rank[]; chips: number; mult: number }
  | { kind: 'score-face-chips'; amount: number }
  | { kind: 'score-face-mult'; amount: number }
  | { kind: 'few-cards-mult'; maxCards: number; amount: number }
  | { kind: 'discard-chips'; amountPerDiscard: number }
  | { kind: 'zero-discard-mult'; amount: number }
  | { kind: 'joker-count-mult'; amountPerJoker: number }
  | { kind: 'held-black-xmult'; amount: number }
  | { kind: 'decay-chips'; start: number; decay: number }
  | { kind: 'straight-scale-chips'; gain: number; start?: number }
  | { kind: 'bus-scale-mult'; gain: number }
  | { kind: 'green-scale-mult'; handGain: number; discardLoss: number }
  | { kind: 'deck-remaining-chips'; amountPerCard: number }
  | { kind: 'lowest-held-mult'; multiplier: number }
  | { kind: 'retrigger-last-hand' }
  | { kind: 'retrigger-ranks'; ranks: Rank[] }
  | { kind: 'retrigger-held' }
  | { kind: 'retrigger-face' }
  | { kind: 'retrigger-first'; extra: number }
  | { kind: 'suit-chance-xmult'; suit: Suit; chance: number; amount: number }
  | { kind: 'first-face-xmult'; amount: number }
  | { kind: 'money-chips'; amountPerDollar: number }
  | { kind: 'money-mult'; dollarsPerStep: number; amountPerStep: number }
  | { kind: 'repeat-hand-xmult'; amount: number }
  | { kind: 'last-hand-xmult'; amount: number }
  | { kind: 'loyalty-xmult'; every: number; amount: number }
  | { kind: 'hand-count-mult'; amountPerPlay: number }
  | { kind: 'castle-scale-chips'; gain: number };""",
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
  edition?: Edition;
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
  counter?: number;
  suit?: Suit;
  sticker?: 'none' | 'eternal' | 'perishable';
  perishableRounds?: number;
  rental?: boolean;
}""",
)

replace_once(
    "src/game/types.ts",
    "export interface RunSnapshotV3 extends Omit<RunSnapshotV2, 'version' | 'shop'> {",
    """export type DeckKey = 'red' | 'blue' | 'yellow' | 'green' | 'black';
export type StakeKey = 'white' | 'red' | 'green' | 'black' | 'blue' | 'purple' | 'orange' | 'gold';
export type TagKey =
  | 'investment'
  | 'coupon'
  | 'double'
  | 'juggle'
  | 'd6'
  | 'speed'
  | 'economy'
  | 'top-up'
  | 'boss';
export type BossBlindKey =
  | 'wall'
  | 'arm'
  | 'psychic'
  | 'goad'
  | 'water'
  | 'window'
  | 'manacle'
  | 'eye'
  | 'mouth'
  | 'plant'
  | 'needle'
  | 'head'
  | 'tooth'
  | 'flint';

export interface RunSnapshotV3 extends Omit<RunSnapshotV2, 'version' | 'shop'> {""",
)

replace_once(
    "src/game/types.ts",
    "export type RunSnapshot = RunSnapshotV1 | RunSnapshotV2 | RunSnapshotV3;",
    """export interface RunSnapshotV4 extends Omit<RunSnapshotV3, 'version'> {
  version: 4;
  deckKey: DeckKey;
  stakeKey: StakeKey;
  bossBlindKey: BossBlindKey;
  anteTags: [TagKey, TagKey];
  skippedBlinds: number;
  doubleTags: number;
  investmentTags: number;
  couponNextShop: boolean;
  couponShopVisit: number | null;
  d6NextShop: boolean;
  juggleNextBlind: number;
  roundHandSize: number;
  playedHandTypesThisRound: PokerHandType[];
  handPlayCounts: Record<PokerHandType, number>;
  handsPlayedRun: number;
}

export type RunSnapshot = RunSnapshotV1 | RunSnapshotV2 | RunSnapshotV3 | RunSnapshotV4;""",
)

# ---------------------------------------------------------------------------
# GameState imports and definitions
# ---------------------------------------------------------------------------
replace_once(
    "src/game/gameState.ts",
    "  RunSnapshotV3,",
    """  RunSnapshotV3,
  RunSnapshotV4,
  DeckKey,
  StakeKey,
  TagKey,
  BossBlindKey,
  Suit,""",
)

defs = r"""
export interface DeckDef { key: DeckKey; name: string; description: string; }
export interface StakeDef { key: StakeKey; name: string; description: string; order: number; }
export interface TagDef { key: TagKey; name: string; description: string; }
export interface BossBlindDef { key: BossBlindKey; name: string; description: string; targetMult: number; }

export const DECKS: Record<DeckKey, DeckDef> = {
  red: { key: 'red', name: 'Red Deck', description: '+1 Discard every round.' },
  blue: { key: 'blue', name: 'Blue Deck', description: '+1 Hand every round.' },
  yellow: { key: 'yellow', name: 'Yellow Deck', description: 'Start with $10 extra.' },
  green: { key: 'green', name: 'Green Deck', description: 'No interest; cashout pays $2 per unused Hand and $1 per unused Discard.' },
  black: { key: 'black', name: 'Black Deck', description: '+1 Joker slot, -1 Hand every round.' },
};

export const STAKES: Record<StakeKey, StakeDef> = {
  white: { key: 'white', name: 'White Stake', description: 'Base difficulty.', order: 0 },
  red: { key: 'red', name: 'Red Stake', description: 'Small Blind gives no base reward.', order: 1 },
  green: { key: 'green', name: 'Green Stake', description: 'Score requirements scale faster.', order: 2 },
  black: { key: 'black', name: 'Black Stake', description: 'Generated Jokers may be Eternal.', order: 3 },
  blue: { key: 'blue', name: 'Blue Stake', description: '-1 Discard every round.', order: 4 },
  purple: { key: 'purple', name: 'Purple Stake', description: 'Score requirements scale even faster.', order: 5 },
  orange: { key: 'orange', name: 'Orange Stake', description: 'Generated Jokers may be Perishable.', order: 6 },
  gold: { key: 'gold', name: 'Gold Stake', description: 'Generated Jokers may also be Rental.', order: 7 },
};

export const TAGS: Record<TagKey, TagDef> = {
  investment: { key: 'investment', name: 'Investment Tag', description: 'Gain $25 after defeating the next Boss Blind.' },
  coupon: { key: 'coupon', name: 'Coupon Tag', description: 'Initial Shop cards and Booster Packs in the next Shop are free.' },
  double: { key: 'double', name: 'Double Tag', description: 'Copies the next non-Double Tag.' },
  juggle: { key: 'juggle', name: 'Juggle Tag', description: '+3 Hand Size for the next round.' },
  d6: { key: 'd6', name: 'D6 Tag', description: 'Next Shop starts with a free reroll.' },
  speed: { key: 'speed', name: 'Speed Tag', description: 'Gain $5 for every Blind skipped this run.' },
  economy: { key: 'economy', name: 'Economy Tag', description: 'Double current money, adding at most $40.' },
  'top-up': { key: 'top-up', name: 'Top-up Tag', description: 'Create up to 2 Common Jokers if space exists.' },
  boss: { key: 'boss', name: 'Boss Tag', description: 'Reroll the Boss Blind for this Ante.' },
};

export const BOSS_BLINDS: Record<BossBlindKey, BossBlindDef> = {
  wall: { key: 'wall', name: 'The Wall', description: 'Very large Blind: score requirement is doubled again.', targetMult: 4 },
  arm: { key: 'arm', name: 'The Arm', description: 'Playing a hand lowers that Poker Hand by 1 level.', targetMult: 2 },
  psychic: { key: 'psychic', name: 'The Psychic', description: 'You must play exactly 5 cards.', targetMult: 2 },
  goad: { key: 'goad', name: 'The Goad', description: 'Spade cards are debuffed.', targetMult: 2 },
  water: { key: 'water', name: 'The Water', description: 'Start this Blind with 0 Discards.', targetMult: 2 },
  window: { key: 'window', name: 'The Window', description: 'Diamond cards are debuffed.', targetMult: 2 },
  manacle: { key: 'manacle', name: 'The Manacle', description: '-1 Hand Size for this Blind.', targetMult: 2 },
  eye: { key: 'eye', name: 'The Eye', description: 'No Poker Hand may be played more than once this Blind.', targetMult: 2 },
  mouth: { key: 'mouth', name: 'The Mouth', description: 'After the first hand, only that Poker Hand may be played.', targetMult: 2 },
  plant: { key: 'plant', name: 'The Plant', description: 'Face cards are debuffed.', targetMult: 2 },
  needle: { key: 'needle', name: 'The Needle', description: 'Play only 1 Hand; score requirement is 1x Ante base.', targetMult: 1 },
  head: { key: 'head', name: 'The Head', description: 'Heart cards are debuffed.', targetMult: 2 },
  tooth: { key: 'tooth', name: 'The Tooth', description: 'Lose $1 for every card played.', targetMult: 2 },
  flint: { key: 'flint', name: 'The Flint', description: 'Base Chips and Mult are halved.', targetMult: 2 },
};

const STAKE_CURVE_BASE = [300, 800, 2000, 5000, 11000, 20000, 35000, 50000];
const STAKE_CURVE_GREEN = [300, 900, 2600, 8000, 20000, 36000, 60000, 100000];
const STAKE_CURVE_PURPLE = [300, 1000, 3200, 9000, 25000, 60000, 110000, 200000];
const TAG_KEYS = Object.keys(TAGS) as TagKey[];
const BOSS_KEYS = Object.keys(BOSS_BLINDS) as BossBlindKey[];
"""
replace_once("src/game/gameState.ts", "export type Phase = RunPhase;\n", "export type Phase = RunPhase;\n" + defs)

# ---------------------------------------------------------------------------
# Replace prototype Joker pool with exactly 50 familiar, functional Jokers.
# ---------------------------------------------------------------------------
game_path = root / "src/game/gameState.ts"
src = game_path.read_text(encoding="utf-8")
start = src.find("const JOKER_TEMPLATES: JokerTemplate[] = [")
end = src.find("const ENHANCEMENT_OFFERS", start)
if start < 0 or end < 0:
    raise SystemExit("Could not locate Joker pool")

pool = r"""const JOKER_TEMPLATES: JokerTemplate[] = [
  { key: 'joker', name: 'Joker', description: '+4 Mult.', rarity: 'common', price: 2, effect: { kind: 'mult', amount: 4 } },
  { key: 'greedy-joker', name: 'Greedy Joker', description: 'Each scoring Diamond gives +3 Mult.', rarity: 'common', price: 5, effect: { kind: 'score-suit-mult', suit: 'diamonds', amount: 3 } },
  { key: 'lusty-joker', name: 'Lusty Joker', description: 'Each scoring Heart gives +3 Mult.', rarity: 'common', price: 5, effect: { kind: 'score-suit-mult', suit: 'hearts', amount: 3 } },
  { key: 'wrathful-joker', name: 'Wrathful Joker', description: 'Each scoring Spade gives +3 Mult.', rarity: 'common', price: 5, effect: { kind: 'score-suit-mult', suit: 'spades', amount: 3 } },
  { key: 'gluttonous-joker', name: 'Gluttonous Joker', description: 'Each scoring Club gives +3 Mult.', rarity: 'common', price: 5, effect: { kind: 'score-suit-mult', suit: 'clubs', amount: 3 } },
  { key: 'jolly-joker', name: 'Jolly Joker', description: '+8 Mult when the hand contains a Pair.', rarity: 'common', price: 3, effect: { kind: 'pair-mult', amount: 8 } },
  { key: 'crazy-joker', name: 'Crazy Joker', description: '+12 Mult on Straight hands.', rarity: 'common', price: 4, effect: { kind: 'hand-mult', handTypes: ['Straight','Straight Flush'], amount: 12 } },
  { key: 'droll-joker', name: 'Droll Joker', description: '+10 Mult on Flush hands.', rarity: 'common', price: 4, effect: { kind: 'hand-mult', handTypes: ['Flush','Straight Flush','Flush House','Flush Five'], amount: 10 } },
  { key: 'sly-joker', name: 'Sly Joker', description: '+50 Chips on Pair-family hands.', rarity: 'common', price: 3, effect: { kind: 'hand-chips', handTypes: ['Pair','Two Pair','Three of a Kind','Full House','Four of a Kind','Five of a Kind','Flush House','Flush Five'], amount: 50 } },
  { key: 'wily-joker', name: 'Wily Joker', description: '+100 Chips on Three-of-a-Kind-family hands.', rarity: 'common', price: 4, effect: { kind: 'hand-chips', handTypes: ['Three of a Kind','Full House','Four of a Kind','Five of a Kind','Flush House','Flush Five'], amount: 100 } },
  { key: 'clever-joker', name: 'Clever Joker', description: '+80 Chips on Two Pair or Full House.', rarity: 'common', price: 4, effect: { kind: 'hand-chips', handTypes: ['Two Pair','Full House','Flush House'], amount: 80 } },
  { key: 'devious-joker', name: 'Devious Joker', description: '+100 Chips on Straight hands.', rarity: 'common', price: 5, effect: { kind: 'hand-chips', handTypes: ['Straight','Straight Flush'], amount: 100 } },
  { key: 'crafty-joker', name: 'Crafty Joker', description: '+80 Chips on Flush hands.', rarity: 'common', price: 5, effect: { kind: 'hand-chips', handTypes: ['Flush','Straight Flush','Flush House','Flush Five'], amount: 80 } },
  { key: 'half-joker', name: 'Half Joker', description: '+20 Mult if 3 or fewer cards are played.', rarity: 'common', price: 5, effect: { kind: 'few-cards-mult', maxCards: 3, amount: 20 } },
  { key: 'banner', name: 'Banner', description: '+30 Chips for each remaining Discard.', rarity: 'common', price: 5, effect: { kind: 'discard-chips', amountPerDiscard: 30 } },
  { key: 'mystic-summit', name: 'Mystic Summit', description: '+15 Mult when no Discards remain.', rarity: 'common', price: 5, effect: { kind: 'zero-discard-mult', amount: 15 } },
  { key: 'raised-fist', name: 'Raised Fist', description: 'Adds twice the rank of the lowest held card to Mult.', rarity: 'common', price: 5, effect: { kind: 'lowest-held-mult', multiplier: 2 } },
  { key: 'misprint', name: 'Misprint', description: '+11 Mult in this first balanced set.', rarity: 'common', price: 4, effect: { kind: 'mult', amount: 11 } },
  { key: 'even-steven', name: 'Even Steven', description: 'Scoring even ranks give +4 Mult.', rarity: 'common', price: 4, effect: { kind: 'score-rank-mult', ranks: [2,4,6,8,10], amount: 4 } },
  { key: 'odd-todd', name: 'Odd Todd', description: 'Scoring odd ranks and Aces give +31 Chips.', rarity: 'common', price: 4, effect: { kind: 'score-rank-chips', ranks: [3,5,7,9,14], amount: 31 } },
  { key: 'scholar', name: 'Scholar', description: 'Scoring Aces give +20 Chips and +4 Mult.', rarity: 'common', price: 4, effect: { kind: 'score-rank-bonus', ranks: [14], chips: 20, mult: 4 } },
  { key: 'scary-face', name: 'Scary Face', description: 'Scoring face cards give +30 Chips.', rarity: 'common', price: 4, effect: { kind: 'score-face-chips', amount: 30 } },
  { key: 'smiley-face', name: 'Smiley Face', description: 'Scoring face cards give +5 Mult.', rarity: 'common', price: 4, effect: { kind: 'score-face-mult', amount: 5 } },
  { key: 'fibonacci', name: 'Fibonacci', description: 'A, 2, 3, 5 and 8 give +8 Mult when scored.', rarity: 'uncommon', price: 8, effect: { kind: 'score-rank-mult', ranks: [14,2,3,5,8], amount: 8 } },
  { key: 'abstract-joker', name: 'Abstract Joker', description: '+3 Mult for every Joker you own.', rarity: 'common', price: 4, effect: { kind: 'joker-count-mult', amountPerJoker: 3 } },
  { key: 'blackboard', name: 'Blackboard', description: 'x3 Mult if all held cards are Spades or Clubs.', rarity: 'uncommon', price: 6, effect: { kind: 'held-black-xmult', amount: 3 } },
  { key: 'ice-cream', name: 'Ice Cream', description: 'Starts at +100 Chips and loses 5 Chips after each hand.', rarity: 'common', price: 5, effect: { kind: 'decay-chips', start: 100, decay: 5 } },
  { key: 'runner', name: 'Runner', description: 'Gains +15 Chips whenever you play a Straight.', rarity: 'common', price: 5, effect: { kind: 'straight-scale-chips', gain: 15, start: 0 } },
  { key: 'ride-the-bus', name: 'Ride the Bus', description: 'Gains +1 Mult after a hand with no scoring face card; resets otherwise.', rarity: 'common', price: 6, effect: { kind: 'bus-scale-mult', gain: 1 } },
  { key: 'green-joker', name: 'Green Joker', description: 'Gains +1 Mult per hand and loses 1 per discard.', rarity: 'common', price: 4, effect: { kind: 'green-scale-mult', handGain: 1, discardLoss: 1 } },
  { key: 'blue-joker', name: 'Blue Joker', description: '+2 Chips per card remaining in the draw pile.', rarity: 'common', price: 5, effect: { kind: 'deck-remaining-chips', amountPerCard: 2 } },
  { key: 'dusk', name: 'Dusk', description: 'Retrigger all scoring cards on the final Hand of a Blind.', rarity: 'uncommon', price: 5, effect: { kind: 'retrigger-last-hand' } },
  { key: 'hack', name: 'Hack', description: 'Retrigger scoring 2, 3, 4 and 5 cards.', rarity: 'uncommon', price: 6, effect: { kind: 'retrigger-ranks', ranks: [2,3,4,5] } },
  { key: 'mime', name: 'Mime', description: 'Retrigger held-card abilities once.', rarity: 'uncommon', price: 5, effect: { kind: 'retrigger-held' } },
  { key: 'sock-and-buskin', name: 'Sock and Buskin', description: 'Retrigger scoring face cards once.', rarity: 'uncommon', price: 6, effect: { kind: 'retrigger-face' } },
  { key: 'hanging-chad', name: 'Hanging Chad', description: 'Retrigger the first scoring card 2 extra times.', rarity: 'common', price: 4, effect: { kind: 'retrigger-first', extra: 2 } },
  { key: 'bloodstone', name: 'Bloodstone', description: 'Each scoring Heart has a 1 in 2 chance to give x1.5 Mult.', rarity: 'uncommon', price: 7, effect: { kind: 'suit-chance-xmult', suit: 'hearts', chance: 0.5, amount: 1.5 } },
  { key: 'arrowhead', name: 'Arrowhead', description: 'Each scoring Spade gives +50 Chips.', rarity: 'uncommon', price: 7, effect: { kind: 'score-suit-chips', suit: 'spades', amount: 50 } },
  { key: 'onyx-agate', name: 'Onyx Agate', description: 'Each scoring Club gives +7 Mult.', rarity: 'uncommon', price: 7, effect: { kind: 'score-suit-mult', suit: 'clubs', amount: 7 } },
  { key: 'rough-gem', name: 'Rough Gem', description: 'Each scoring Diamond gives $1.', rarity: 'uncommon', price: 7, effect: { kind: 'score-suit-money', suit: 'diamonds', amount: 1 } },
  { key: 'photograph', name: 'Photograph', description: 'The first scoring face card gives x2 Mult.', rarity: 'common', price: 5, effect: { kind: 'first-face-xmult', amount: 2 } },
  { key: 'walkie-talkie', name: 'Walkie Talkie', description: 'Scoring 10s and 4s give +10 Chips and +4 Mult.', rarity: 'common', price: 4, effect: { kind: 'score-rank-bonus', ranks: [10,4], chips: 10, mult: 4 } },
  { key: 'castle', name: 'Castle', description: 'Gains +3 Chips for each discarded card of its target suit.', rarity: 'uncommon', price: 6, effect: { kind: 'castle-scale-chips', gain: 3 } },
  { key: 'bull', name: 'Bull', description: '+2 Chips for every $1 you have.', rarity: 'uncommon', price: 6, effect: { kind: 'money-chips', amountPerDollar: 2 } },
  { key: 'bootstraps', name: 'Bootstraps', description: '+2 Mult for every $5 you have.', rarity: 'uncommon', price: 7, effect: { kind: 'money-mult', dollarsPerStep: 5, amountPerStep: 2 } },
  { key: 'card-sharp', name: 'Card Sharp', description: 'x3 Mult if this Poker Hand was already played this Blind.', rarity: 'uncommon', price: 6, effect: { kind: 'repeat-hand-xmult', amount: 3 } },
  { key: 'acrobat', name: 'Acrobat', description: 'x3 Mult on the final Hand of the Blind.', rarity: 'uncommon', price: 6, effect: { kind: 'last-hand-xmult', amount: 3 } },
  { key: 'loyalty-card', name: 'Loyalty Card', description: 'Every 6th played hand gives x4 Mult.', rarity: 'uncommon', price: 5, effect: { kind: 'loyalty-xmult', every: 6, amount: 4 } },
  { key: 'the-duo', name: 'The Duo', description: 'x2 Mult if the hand contains a Pair.', rarity: 'rare', price: 8, effect: { kind: 'hand-xmult', handTypes: ['Pair','Two Pair','Three of a Kind','Full House','Four of a Kind','Five of a Kind','Flush House','Flush Five'], amount: 2 } },
  { key: 'the-trio', name: 'The Trio', description: 'x3 Mult if the hand contains Three of a Kind.', rarity: 'rare', price: 8, effect: { kind: 'hand-xmult', handTypes: ['Three of a Kind','Full House','Four of a Kind','Five of a Kind','Flush House','Flush Five'], amount: 3 } },
  { key: 'cashback', name: 'Cashback', description: '+$1 when a Blind is cleared.', rarity: 'common', price: 5, effect: { kind: 'economy-clear', amount: 1 } },
];

export const JOKER_LIBRARY_SIZE = JOKER_TEMPLATES.length;

"""
src = src[:start] + pool + src[end:]
game_path.write_text(src, encoding="utf-8")

# Remove the prototype Ante curve; L3 supplies Stake-specific curves above.
replace_once(
    "src/game/gameState.ts",
    "const ANTE_BASE: number[] = [300, 800, 2000, 5000, 11000, 20000, 35000, 50000];\n",
    "",
)

# ---------------------------------------------------------------------------
# Progression state
# ---------------------------------------------------------------------------
replace_once(
    "src/game/gameState.ts",
    """  lastCashout: CashoutSummary | null = null;
  private shopVisit = 0;""",
    """  lastCashout: CashoutSummary | null = null;

  deckKey: DeckKey = 'red';
  stakeKey: StakeKey = 'white';
  bossBlindKey: BossBlindKey = 'wall';
  anteTags: [TagKey, TagKey] = ['investment', 'coupon'];
  skippedBlinds = 0;
  doubleTags = 0;
  investmentTags = 0;
  couponNextShop = false;
  couponShopVisit: number | null = null;
  d6NextShop = false;
  juggleNextBlind = 0;
  roundHandSize = 8;
  playedHandTypesThisRound: PokerHandType[] = [];
  handPlayCounts: Record<PokerHandType, number> = Object.fromEntries(
    (Object.keys(HAND_BASE) as PokerHandType[]).map((type) => [type, 0]),
  ) as Record<PokerHandType, number>;
  handsPlayedRun = 0;

  private shopVisit = 0;""",
)

replace_once(
    "src/game/gameState.ts",
    """  private targetForCurrentBlind(): number {
    const blindMult = this.blindIndex === 0 ? 1 : this.blindIndex === 1 ? 1.5 : 2;
    return Math.round(ANTE_BASE[Math.min(this.ante - 1, ANTE_BASE.length - 1)] * blindMult);
  }""",
    """  private targetForCurrentBlind(): number {
    const order = STAKES[this.stakeKey].order;
    const curve = order >= STAKES.purple.order
      ? STAKE_CURVE_PURPLE
      : order >= STAKES.green.order
        ? STAKE_CURVE_GREEN
        : STAKE_CURVE_BASE;
    const base = curve[Math.min(this.ante - 1, curve.length - 1)];
    const blindMult = this.blindIndex === 0
      ? 1
      : this.blindIndex === 1
        ? 1.5
        : BOSS_BLINDS[this.bossBlindKey].targetMult;
    return Math.round(base * blindMult);
  }""",
)

replace_once(
    "src/game/gameState.ts",
    "while (this.hand.length < this.config.handSize && this.deck.length > 0) {",
    "while (this.hand.length < this.roundHandSize && this.deck.length > 0) {",
)

replace_once(
    "src/game/gameState.ts",
    """  startBlind() {
    this.target = this.targetForCurrentBlind();
    this.roundScore = 0;
    this.handsLeft = this.config.handsPerRound;
    this.discardsLeft = this.config.discardsPerRound;
    this.deck = shuffle(cloneCards(this.ownedDeck), this.rng);
    this.discardPile = [];
    this.hand = [];
    this.selected.clear();
    this.shop = null;
    this.booster = null;
    this.targetMode = null;
    this.drawToFull();
    this.phase = 'play';
    this.emit();
  }""",
    """  startBlind() {
    this.target = this.targetForCurrentBlind();
    this.roundScore = 0;
    this.handsLeft = this.config.handsPerRound;
    this.discardsLeft = this.config.discardsPerRound;
    this.roundHandSize = this.config.handSize + this.juggleNextBlind;
    this.juggleNextBlind = 0;
    this.playedHandTypesThisRound = [];

    if (this.blindIndex === 2) {
      if (this.bossBlindKey === 'water') this.discardsLeft = 0;
      if (this.bossBlindKey === 'needle') this.handsLeft = 1;
      if (this.bossBlindKey === 'manacle') this.roundHandSize = Math.max(1, this.roundHandSize - 1);
    }

    this.deck = shuffle(cloneCards(this.ownedDeck), this.rng);
    this.discardPile = [];
    this.hand = [];
    this.selected.clear();
    this.shop = null;
    this.booster = null;
    this.targetMode = null;
    this.drawToFull();
    this.phase = 'play';
    this.emit();
  }

  enterSetup() {
    this.phase = 'setup';
    this.hand = [];
    this.deck = [];
    this.discardPile = [];
    this.selected.clear();
    this.shop = null;
    this.booster = null;
    this.targetMode = null;
    this.roundScore = 0;
    this.emit();
  }

  configureRun(deckKey: DeckKey, stakeKey: StakeKey) {
    this.deckKey = deckKey;
    this.stakeKey = stakeKey;
    this.ante = 1;
    this.blindIndex = 0;
    this.config.handSize = 8;
    this.config.handsPerRound = 4;
    this.config.discardsPerRound = 3;
    this.config.startingMoney = 4;

    if (STAKES[stakeKey].order >= STAKES.blue.order) this.config.discardsPerRound -= 1;
    if (deckKey === 'red') this.config.discardsPerRound += 1;
    if (deckKey === 'blue') this.config.handsPerRound += 1;
    if (deckKey === 'black') this.config.handsPerRound -= 1;

    this.money = deckKey === 'yellow' ? 14 : 4;
    this.ownedDeck = buildStandardDeck();
    this.deck = [];
    this.discardPile = [];
    this.hand = [];
    this.selected.clear();
    this.jokers = [];
    this.consumables = [];
    this.shop = null;
    this.booster = null;
    this.targetMode = null;
    this.vouchers = [];
    this.anteVoucher = null;
    this.lastCashout = null;
    this.handLevels = makeInitialHandLevels();
    this.skippedBlinds = 0;
    this.doubleTags = 0;
    this.investmentTags = 0;
    this.couponNextShop = false;
    this.couponShopVisit = null;
    this.d6NextShop = false;
    this.juggleNextBlind = 0;
    this.handsPlayedRun = 0;
    this.handPlayCounts = Object.fromEntries(
      (Object.keys(HAND_BASE) as PokerHandType[]).map((type) => [type, 0]),
    ) as Record<PokerHandType, number>;
    this.shopVisit = 0;
    this.rollAnteOptions();
    this.prepareBlindSelect();
  }

  private rollAnteOptions() {
    this.anteTags = [this.pick(TAG_KEYS), this.pick(TAG_KEYS)];
    this.bossBlindKey = this.pick(BOSS_KEYS);
  }

  prepareBlindSelect() {
    this.phase = 'blind-select';
    this.target = this.targetForCurrentBlind();
    this.hand = [];
    this.deck = [];
    this.discardPile = [];
    this.selected.clear();
    this.shop = null;
    this.booster = null;
    this.targetMode = null;
    this.emit();
  }

  playSelectedBlind(): boolean {
    if (this.phase !== 'blind-select') return false;
    this.startBlind();
    return true;
  }

  currentSkipTag(): TagKey | null {
    return this.blindIndex < 2 ? this.anteTags[this.blindIndex as 0 | 1] : null;
  }

  skipCurrentBlind(): boolean {
    if (this.phase !== 'blind-select' || this.blindIndex >= 2) return false;
    const tag = this.currentSkipTag();
    if (!tag) return false;
    this.skippedBlinds += 1;
    this.applyTag(tag);
    this.blindIndex = (this.blindIndex + 1) as 0 | 1 | 2;
    this.prepareBlindSelect();
    return true;
  }

  private applyTag(tag: TagKey) {
    if (tag === 'double') {
      this.doubleTags += 1;
      return;
    }
    const copies = 1 + this.doubleTags;
    this.doubleTags = 0;
    for (let i = 0; i < copies; i++) this.applySingleTag(tag);
  }

  private applySingleTag(tag: Exclude<TagKey, 'double'>) {
    if (tag === 'investment') this.investmentTags += 1;
    else if (tag === 'coupon') this.couponNextShop = true;
    else if (tag === 'juggle') this.juggleNextBlind += 3;
    else if (tag === 'd6') this.d6NextShop = true;
    else if (tag === 'speed') this.money += Math.max(5, this.skippedBlinds * 5);
    else if (tag === 'economy') this.money += Math.min(40, Math.max(0, this.money));
    else if (tag === 'top-up') {
      const common = JOKER_TEMPLATES.filter((template) => template.rarity === 'common');
      for (let i = 0; i < 2 && this.jokers.length < this.jokerCapacity(); i++) {
        this.jokers.push(this.makeJokerFromTemplate(this.pick(common), false));
      }
    } else if (tag === 'boss') {
      const choices = BOSS_KEYS.filter((key) => key !== this.bossBlindKey);
      if (choices.length > 0) this.bossBlindKey = this.pick(choices);
    }
  }

  targetForPreview(): number {
    return this.targetForCurrentBlind();
  }

  playRestrictionMessage(): string | null {
    if (this.phase !== 'play' || this.blindIndex !== 2) return null;
    const selected = this.selectedCards();
    if (this.bossBlindKey === 'psychic' && selected.length !== 5) return 'The Psychic: play exactly 5 cards';
    if (selected.length === 0) return null;
    const type = evaluateHand(selected).type;
    if (this.bossBlindKey === 'eye' && this.playedHandTypesThisRound.includes(type)) {
      return 'The Eye: that Poker Hand was already played';
    }
    if (this.bossBlindKey === 'mouth' && this.playedHandTypesThisRound.length > 0 && this.playedHandTypesThisRound[0] !== type) {
      return `The Mouth: play only ${this.playedHandTypesThisRound[0]}`;
    }
    return null;
  }""",
)

replace_once(
    "src/game/gameState.ts",
    "  canPlay(): boolean { return this.phase === 'play' && this.selected.size > 0 && this.handsLeft > 0; }",
    """  canPlay(): boolean {
    return this.phase === 'play'
      && this.selected.size > 0
      && this.handsLeft > 0
      && this.playRestrictionMessage() === null;
  }""",
)

replace_once(
    "src/game/gameState.ts",
    """  jokerCapacity(): number {
    return MAX_JOKERS + this.jokers.filter((joker) => (joker.edition ?? 'base') === 'negative').length;
  }""",
    """  jokerCapacity(): number {
    const deckBonus = this.deckKey === 'black' ? 1 : 0;
    return MAX_JOKERS
      + deckBonus
      + this.jokers.filter((joker) => (joker.edition ?? 'base') === 'negative').length;
  }""",
)

# ---------------------------------------------------------------------------
# Joker generation + stickers
# ---------------------------------------------------------------------------
src = game_path.read_text(encoding="utf-8")
a = src.find("  private makeJokerItem(): ShopItem {")
b = src.find("  private makeConsumableItem(): ShopItem {", a)
if a < 0 or b < 0:
    raise SystemExit("Could not locate makeJokerItem")

factory = r"""  private makeJokerFromTemplate(template: JokerTemplate, allowStickers = true): JokerCard {
    const joker: JokerCard = {
      ...template,
      id: this.makeRunId('joker'),
      sellValue: Math.max(1, Math.floor(template.price / 2)),
      effect: { ...template.effect },
      edition: 'base',
      sticker: 'none',
      rental: false,
    };

    if (joker.effect.kind === 'decay-chips') joker.counter = joker.effect.start;
    else if (joker.effect.kind === 'castle-scale-chips') {
      joker.counter = 0;
      joker.suit = this.pick(SUITS);
    } else if (
      joker.effect.kind === 'straight-scale-chips'
      || joker.effect.kind === 'bus-scale-mult'
      || joker.effect.kind === 'green-scale-mult'
      || joker.effect.kind === 'loyalty-xmult'
    ) {
      joker.counter = joker.effect.kind === 'straight-scale-chips' ? (joker.effect.start ?? 0) : 0;
    }

    if (allowStickers) {
      const order = STAKES[this.stakeKey].order;
      if (order >= STAKES.black.order) {
        const roll = this.rng();
        if (roll < 0.30) joker.sticker = 'eternal';
        else if (order >= STAKES.orange.order && roll < 0.60) {
          joker.sticker = 'perishable';
          joker.perishableRounds = 5;
        }
      }
      if (order >= STAKES.gold.order && this.rng() < 0.30) joker.rental = true;
    }
    return joker;
  }

  private makeJokerItem(): ShopItem {
    const roll = this.rng();
    const rarity: JokerRarity = roll < 0.70 ? 'common' : roll < 0.95 ? 'uncommon' : 'rare';
    const pool = JOKER_TEMPLATES.filter((template) => template.rarity === rarity);
    return { kind: 'joker', joker: this.makeJokerFromTemplate(this.pick(pool.length ? pool : JOKER_TEMPLATES)) };
  }

"""
src = src[:a] + factory + src[b:]
game_path.write_text(src, encoding="utf-8")

replace_once(
    "src/game/gameState.ts",
    """  sellJoker(jokerId: string): boolean {
    const idx = this.jokers.findIndex((joker) => joker.id === jokerId);
    if (idx < 0) return false;""",
    """  sellJoker(jokerId: string): boolean {
    const idx = this.jokers.findIndex((joker) => joker.id === jokerId);
    if (idx < 0 || this.jokers[idx].sticker === 'eternal') return false;""",
)

replace_once(
    "src/game/gameState.ts",
    """  private priceForItem(item: ShopItem): number {
    const base = item.kind === 'joker' ? item.joker.price
      : item.kind === 'consumable' ? item.consumable.price
      : item.price;
    return this.discountedPrice(base);
  }""",
    """  private priceForItem(item: ShopItem): number {
    const base = item.kind === 'joker'
      ? (item.joker.rental ? 1 : item.joker.price)
      : item.kind === 'consumable' ? item.consumable.price
      : item.price;
    return this.discountedPrice(base);
  }""",
)

replace_once(
    "src/game/gameState.ts",
    """  private discountedPrice(base: number): number {
    return this.vouchers.includes('clearance-sale')
      ? Math.max(1, Math.ceil(base * 0.75))
      : base;
  }""",
    """  private discountedPrice(base: number): number {
    if (this.shop && this.couponShopVisit === this.shop.visit) return 0;
    return this.vouchers.includes('clearance-sale')
      ? Math.max(1, Math.ceil(base * 0.75))
      : base;
  }""",
)

# Shop tag consumption: rewrite createShopState to keep logic clear.
src = game_path.read_text(encoding="utf-8")
a = src.find("  private createShopState(): ShopState {")
b = src.find("  private createShopOffers(", a)
if a < 0 or b < 0:
    raise SystemExit("Could not locate createShopState")
shop_state = r"""  private createShopState(): ShopState {
    const visit = ++this.shopVisit;
    if (this.couponNextShop) {
      this.couponShopVisit = visit;
      this.couponNextShop = false;
    } else {
      this.couponShopVisit = null;
    }

    if (!this.anteVoucher || this.anteVoucher.sold) {
      const unowned = (Object.keys(VOUCHERS) as VoucherKey[]).filter((key) => !this.vouchers.includes(key));
      this.anteVoucher = unowned.length > 0
        ? { ...VOUCHERS[this.pick(unowned)], sold: false }
        : null;
    }

    const state: ShopState = {
      visit,
      offers: this.createShopOffers(visit, 0),
      boosters: this.createBoosterOffers(visit),
      voucher: cloneVoucherOffer(this.anteVoucher),
      rerolls: 0,
      rerollCost: this.d6NextShop ? 0 : this.rerollBaseCost(),
    };
    this.d6NextShop = false;
    return state;
  }

"""
src = src[:a] + shop_state + src[b:]
game_path.write_text(src, encoding="utf-8")

replace_once(
    "src/game/gameState.ts",
    """    this.shop.rerolls += 1;
    this.shop.rerollCost = this.rerollBaseCost() + this.shop.rerolls;""",
    """    const d6Free = this.shop.rerollCost === 0 && this.shop.rerolls === 0;
    this.shop.rerolls += 1;
    this.shop.rerollCost = d6Free ? 1 : this.rerollBaseCost() + this.shop.rerolls;""",
)

replace_once(
    "src/game/gameState.ts",
    """  continueFromShop(): boolean {
    if (this.phase !== 'shop') return false;
    this.startBlind();
    return true;
  }""",
    """  continueFromShop(): boolean {
    if (this.phase !== 'shop') return false;
    this.prepareBlindSelect();
    return true;
  }""",
)

# ---------------------------------------------------------------------------
# Scoring context + scaling updates
# ---------------------------------------------------------------------------
replace_once(
    "src/game/gameState.ts",
    """    const breakdown = scoreHand(hand, level, {
      jokers: this.jokers,
      heldCards,
      handsLeftBeforePlay,
      handsPerRound: this.config.handsPerRound,
      rng: () => this.rng(),
    });""",
    """    const boss = this.blindIndex === 2 ? this.bossBlindKey : null;
    const bossDebuffSuits: Suit[] = boss === 'goad' ? ['spades']
      : boss === 'window' ? ['diamonds']
      : boss === 'head' ? ['hearts']
      : [];
    const handAlreadyPlayedThisRound = this.playedHandTypesThisRound.includes(hand.type);
    const breakdown = scoreHand(hand, level, {
      jokers: this.jokers,
      heldCards,
      handsLeftBeforePlay,
      handsPerRound: this.playedHandTypesThisRound.length === 0 ? handsLeftBeforePlay : this.config.handsPerRound,
      discardsLeft: this.discardsLeft,
      deckRemaining: this.deck.length,
      money: this.money,
      handPlayCount: this.handPlayCounts[hand.type] ?? 0,
      handAlreadyPlayedThisRound,
      isFinalHand: this.handsLeft === 1,
      jokerCount: this.jokers.length,
      bossDebuffSuits,
      bossDebuffFace: boss === 'plant',
      bossHalveBase: boss === 'flint',
      rng: () => this.rng(),
    });""",
)

replace_once(
    "src/game/gameState.ts",
    """    this.roundScore += breakdown.total;
    this.money += breakdown.moneyDelta;
    this.handsLeft -= 1;
    this.lastScore = breakdown;""",
    """    this.roundScore += breakdown.total;
    this.money += breakdown.moneyDelta;
    if (this.blindIndex === 2 && this.bossBlindKey === 'tooth') {
      this.money -= cards.length;
      breakdown.moneyDelta -= cards.length;
    }
    this.handsLeft -= 1;
    this.lastScore = breakdown;
    this.playedHandTypesThisRound.push(hand.type);
    this.handPlayCounts[hand.type] = (this.handPlayCounts[hand.type] ?? 0) + 1;
    this.handsPlayedRun += 1;

    for (const joker of this.jokers) {
      const effect = joker.effect;
      if (effect.kind === 'straight-scale-chips' && hand.type.includes('Straight')) {
        joker.counter = (joker.counter ?? (effect.start ?? 0)) + effect.gain;
      } else if (effect.kind === 'decay-chips') {
        joker.counter = Math.max(0, (joker.counter ?? effect.start) - effect.decay);
      } else if (effect.kind === 'bus-scale-mult') {
        const hasFace = hand.scoringCards.some((card) => card.rank >= 11 && card.rank <= 13);
        joker.counter = hasFace ? 0 : (joker.counter ?? 0) + effect.gain;
      } else if (effect.kind === 'green-scale-mult') {
        joker.counter = (joker.counter ?? 0) + effect.handGain;
      } else if (effect.kind === 'loyalty-xmult') {
        joker.counter = ((joker.counter ?? 0) + 1) % effect.every;
      }
    }

    if (this.blindIndex === 2 && this.bossBlindKey === 'arm') {
      const base = HAND_BASE[hand.type];
      const current = this.handLevels[hand.type];
      const nextLevel = Math.max(1, current.level - 1);
      this.handLevels[hand.type] = {
        level: nextLevel,
        chips: base.chips + base.chipsPerLvl * (nextLevel - 1),
        mult: base.mult + base.multPerLvl * (nextLevel - 1),
      };
    }""",
)

replace_once(
    "src/game/gameState.ts",
    """    this.discardsLeft -= 1;
    this.selected.clear();

    // Purple Seal:""",
    """    this.discardsLeft -= 1;
    this.selected.clear();

    for (const joker of this.jokers) {
      const effect = joker.effect;
      if (effect.kind === 'green-scale-mult') {
        joker.counter = Math.max(0, (joker.counter ?? 0) - effect.discardLoss);
      } else if (effect.kind === 'castle-scale-chips' && joker.suit) {
        const hits = cards.filter((card) => card.suit === joker.suit).length;
        joker.counter = (joker.counter ?? 0) + hits * effect.gain;
      }
    }

    // Purple Seal:""",
)

# Replace cashout/round transition.
src = game_path.read_text(encoding="utf-8")
a = src.find("  private onBlindCleared() {")
b = src.find("  continueFromShop(): boolean {", a)
if a < 0 or b < 0:
    raise SystemExit("Could not locate onBlindCleared")
cashout = r"""  private onBlindCleared() {
    const clearedBlind = this.blindIndex;
    const order = STAKES[this.stakeKey].order;
    const baseReward = clearedBlind === 0 && order >= STAKES.red.order ? 0 : 3 + clearedBlind;
    const jokerMoney = this.jokers.reduce((sum, joker) => (
      joker.effect.kind === 'economy-clear' && !this.isJokerDebuffed(joker)
        ? sum + joker.effect.amount
        : sum
    ), 0);

    const isGreenDeck = this.deckKey === 'green';
    const handsBonus = isGreenDeck
      ? Math.max(0, this.handsLeft) * 2 + Math.max(0, this.discardsLeft)
      : Math.max(0, this.handsLeft);
    const interest = isGreenDeck ? 0 : Math.min(5, Math.floor(Math.max(0, this.money) / 5));

    let tagBonus = 0;
    if (clearedBlind === 2 && this.investmentTags > 0) {
      tagBonus = this.investmentTags * 25;
      this.investmentTags = 0;
    }

    const total = baseReward + handsBonus + interest + jokerMoney + tagBonus;
    this.money += total;
    this.lastCashout = {
      blindReward: baseReward + jokerMoney + tagBonus,
      handsBonus,
      interest,
      total,
    };

    for (const joker of this.jokers) {
      if (joker.rental) this.money -= 3;
      if (joker.sticker === 'perishable' && (joker.perishableRounds ?? 0) > 0) {
        joker.perishableRounds = Math.max(0, (joker.perishableRounds ?? 0) - 1);
      }
      if (joker.effect.kind === 'castle-scale-chips') {
        const current = joker.suit ?? 'spades';
        const idx = SUITS.indexOf(current);
        joker.suit = SUITS[(idx + 1) % SUITS.length];
      }
    }

    if (this.blindIndex < 2) {
      this.blindIndex = (this.blindIndex + 1) as 0 | 1 | 2;
    } else {
      this.blindIndex = 0;
      this.ante += 1;
      this.anteVoucher = null;
      if (this.ante > 8) {
        this.phase = 'win';
        return;
      }
      this.rollAnteOptions();
    }

    this.target = this.targetForCurrentBlind();
    this.roundScore = 0;
    this.handsLeft = 0;
    this.discardsLeft = 0;
    this.deck = [];
    this.discardPile = [];
    this.hand = [];
    this.selected.clear();
    this.shop = this.createShopState();
    this.phase = 'shop';
  }

  isJokerDebuffed(joker: JokerCard): boolean {
    return joker.sticker === 'perishable' && (joker.perishableRounds ?? 0) <= 0;
  }

"""
src = src[:a] + cashout + src[b:]
game_path.write_text(src, encoding="utf-8")

# ---------------------------------------------------------------------------
# V4 save migration
# ---------------------------------------------------------------------------
replace_once(
    "src/game/gameState.ts",
    """    this.lastCashout = null;
    this.shopVisit = 0;
    this.handLevels = makeInitialHandLevels();
    this.lastScore = null;
    this.startBlind();""",
    """    this.lastCashout = null;
    this.deckKey = 'red';
    this.stakeKey = 'white';
    this.bossBlindKey = 'wall';
    this.anteTags = ['investment', 'coupon'];
    this.skippedBlinds = 0;
    this.doubleTags = 0;
    this.investmentTags = 0;
    this.couponNextShop = false;
    this.couponShopVisit = null;
    this.d6NextShop = false;
    this.juggleNextBlind = 0;
    this.roundHandSize = this.config.handSize;
    this.playedHandTypesThisRound = [];
    this.handPlayCounts = Object.fromEntries(
      (Object.keys(HAND_BASE) as PokerHandType[]).map((type) => [type, 0]),
    ) as Record<PokerHandType, number>;
    this.handsPlayedRun = 0;
    this.shopVisit = 0;
    this.handLevels = makeInitialHandLevels();
    this.lastScore = null;
    this.enterSetup();""",
)

replace_once(
    "src/game/gameState.ts",
    """  toSnapshot(): RunSnapshot {
    return {
      version: 3,""",
    """  toSnapshot(): RunSnapshot {
    return {
      version: 4,""",
)

replace_once(
    "src/game/gameState.ts",
    """      lastCashout: this.lastCashout ? { ...this.lastCashout } : null,
    };""",
    """      lastCashout: this.lastCashout ? { ...this.lastCashout } : null,
      deckKey: this.deckKey,
      stakeKey: this.stakeKey,
      bossBlindKey: this.bossBlindKey,
      anteTags: [...this.anteTags] as [TagKey, TagKey],
      skippedBlinds: this.skippedBlinds,
      doubleTags: this.doubleTags,
      investmentTags: this.investmentTags,
      couponNextShop: this.couponNextShop,
      couponShopVisit: this.couponShopVisit,
      d6NextShop: this.d6NextShop,
      juggleNextBlind: this.juggleNextBlind,
      roundHandSize: this.roundHandSize,
      playedHandTypesThisRound: [...this.playedHandTypesThisRound],
      handPlayCounts: { ...this.handPlayCounts },
      handsPlayedRun: this.handsPlayedRun,
    };""",
)

replace_once(
    "src/game/gameState.ts",
    """    if (version !== 1 && version !== 2 && version !== 3) {
      throw new Error(`Unsupported snapshot version: ${version}`);
    }""",
    """    if (version !== 1 && version !== 2 && version !== 3 && version !== 4) {
      throw new Error(`Unsupported snapshot version: ${version}`);
    }""",
)

replace_once(
    "src/game/gameState.ts",
    """    this.lastCashout = next.lastCashout ? { ...next.lastCashout } : null;
    this.shopVisit = next.shop?.visit ?? this.completedShopCount();""",
    """    this.lastCashout = next.lastCashout ? { ...next.lastCashout } : null;
    this.deckKey = next.deckKey;
    this.stakeKey = next.stakeKey;
    this.bossBlindKey = next.bossBlindKey;
    this.anteTags = [...next.anteTags] as [TagKey, TagKey];
    this.skippedBlinds = next.skippedBlinds;
    this.doubleTags = next.doubleTags;
    this.investmentTags = next.investmentTags;
    this.couponNextShop = next.couponNextShop;
    this.couponShopVisit = next.couponShopVisit;
    this.d6NextShop = next.d6NextShop;
    this.juggleNextBlind = next.juggleNextBlind;
    this.roundHandSize = next.roundHandSize;
    this.playedHandTypesThisRound = [...next.playedHandTypesThisRound];
    this.handPlayCounts = { ...next.handPlayCounts };
    this.handsPlayedRun = next.handsPlayedRun;
    this.shopVisit = next.shop?.visit ?? this.completedShopCount();""",
)

src = game_path.read_text(encoding="utf-8")
a = src.find("  private normalizeSnapshot(snapshot: RunSnapshot):")
b = src.find("  private completedShopCount(): number {", a)
if a < 0 or b < 0:
    raise SystemExit("Could not locate snapshot normalizer")
normalizer = r"""  private normalizeSnapshot(snapshot: RunSnapshot): RunSnapshotV4 {
    if (snapshot.version === 4) return snapshot;

    let v3: RunSnapshotV3;
    if (snapshot.version === 3) {
      v3 = snapshot;
    } else if (snapshot.version === 2) {
      v3 = {
        ...snapshot,
        version: 3,
        booster: null,
        targetMode: null,
        vouchers: [],
        anteVoucher: null,
        lastCashout: null,
      };
    } else {
      const legacy = snapshot as RunSnapshotV1;
      const combined = [...legacy.deck, ...legacy.discardPile, ...legacy.hand];
      const seen = new Set<string>();
      const ownedDeck = combined.filter((card) => {
        if (seen.has(card.id)) return false;
        seen.add(card.id);
        return true;
      });
      v3 = {
        ...legacy,
        version: 3,
        ownedDeck: ownedDeck.length ? ownedDeck : buildStandardDeck(),
        jokers: [],
        consumables: [],
        shop: null,
        booster: null,
        targetMode: null,
        vouchers: [],
        anteVoucher: null,
        lastCashout: null,
      };
    }

    return {
      ...v3,
      version: 4,
      deckKey: 'red',
      stakeKey: 'white',
      bossBlindKey: 'wall',
      anteTags: ['investment', 'coupon'],
      skippedBlinds: 0,
      doubleTags: 0,
      investmentTags: 0,
      couponNextShop: false,
      couponShopVisit: null,
      d6NextShop: false,
      juggleNextBlind: 0,
      roundHandSize: v3.config.handSize,
      playedHandTypesThisRound: [],
      handPlayCounts: Object.fromEntries(
        (Object.keys(HAND_BASE) as PokerHandType[]).map((type) => [type, 0]),
      ) as Record<PokerHandType, number>,
      handsPlayedRun: 0,
    };
  }

"""
src = src[:a] + normalizer + src[b:]
game_path.write_text(src, encoding="utf-8")

# ---------------------------------------------------------------------------
# Scoring engine: Boss debuffs + 50-Joker trigger families.
# ---------------------------------------------------------------------------
engine = root / "src/game/pokerEngine.ts"
s = engine.read_text(encoding="utf-8")

s = s.replace(
"""export interface ScoreHandOptions {
  jokers?: JokerCard[];
  heldCards?: PlayingCard[];
  handsLeftBeforePlay?: number;
  handsPerRound?: number;
  rng?: () => number;
}""",
"""export interface ScoreHandOptions {
  jokers?: JokerCard[];
  heldCards?: PlayingCard[];
  handsLeftBeforePlay?: number;
  handsPerRound?: number;
  discardsLeft?: number;
  deckRemaining?: number;
  money?: number;
  handPlayCount?: number;
  handAlreadyPlayedThisRound?: boolean;
  isFinalHand?: boolean;
  jokerCount?: number;
  bossDebuffSuits?: PlayingCard['suit'][];
  bossDebuffFace?: boolean;
  bossHalveBase?: boolean;
  rng?: () => number;
}""",
1)

s = s.replace(
"""function triggerPlayingCard(
  card: PlayingCard,
  score: MutableScore,
  rng: () => number,
  retrigger: boolean,
) {
  const suffix = retrigger ? ' (retrigger)' : '';""",
"""function triggerPlayingCard(
  card: PlayingCard,
  score: MutableScore,
  rng: () => number,
  retrigger: boolean,
  debuffed: boolean,
) {
  const suffix = retrigger ? ' (retrigger)' : '';
  if (debuffed) {
    score.steps.push({
      source: `${labelShort(card)} debuffed${suffix}`,
      stage: 'played_card',
      cardId: card.id,
      retrigger,
      chipsBefore: score.chips,
      chipsAfter: score.chips,
      multBefore: score.mult,
      multAfter: score.mult,
    });
    return;
  }""",
1)

a = s.find("function applyJokerMain(")
b = s.find("export function scoreHand(", a)
if a < 0 or b < 0:
    raise SystemExit("Could not locate Joker scoring helper")

helper = r"""function isFace(card: PlayingCard): boolean {
  return card.rank >= 11 && card.rank <= 13;
}

function jokerDisabled(joker: JokerCard): boolean {
  return joker.sticker === 'perishable' && (joker.perishableRounds ?? 0) <= 0;
}

function applyJokerEffects(
  joker: JokerCard,
  hand: EvaluatedHand,
  options: ScoreHandOptions,
  score: MutableScore,
  rng: () => number,
) {
  if (jokerDisabled(joker)) return;
  const effect = joker.effect;
  const scoring = hand.scoringCards;
  const held = options.heldCards ?? [];
  const step = (partial: Parameters<typeof applyStep>[1]) =>
    applyStep(score, { ...partial, jokerId: joker.id, stage: 'joker' });

  if (effect.kind === 'chips') step({ source: `${joker.name} +${effect.amount} Chips`, chipsDelta: effect.amount });
  else if (effect.kind === 'mult') step({ source: `${joker.name} +${effect.amount} Mult`, multDelta: effect.amount });
  else if (effect.kind === 'xmult') step({ source: `${joker.name} ×${effect.amount} Mult`, multMul: effect.amount });
  else if (effect.kind === 'pair-mult') {
    if (isPairFamily(hand.type)) step({ source: `${joker.name} +${effect.amount} Mult`, multDelta: effect.amount });
  } else if (effect.kind === 'flush-mult-mul') {
    if (hand.type.includes('Flush')) step({ source: `${joker.name} ×${effect.amount} Mult`, multMul: effect.amount });
  } else if (effect.kind === 'first-hand-chips') {
    if (options.handsLeftBeforePlay === options.handsPerRound) step({ source: `${joker.name} +${effect.amount} Chips`, chipsDelta: effect.amount });
  } else if (effect.kind === 'hand-mult') {
    if (effect.handTypes.includes(hand.type)) step({ source: `${joker.name} +${effect.amount} Mult`, multDelta: effect.amount });
  } else if (effect.kind === 'hand-chips') {
    if (effect.handTypes.includes(hand.type)) step({ source: `${joker.name} +${effect.amount} Chips`, chipsDelta: effect.amount });
  } else if (effect.kind === 'hand-xmult') {
    if (effect.handTypes.includes(hand.type)) step({ source: `${joker.name} ×${effect.amount} Mult`, multMul: effect.amount });
  } else if (effect.kind === 'score-suit-mult') {
    const n = scoring.filter((c) => c.suit === effect.suit || c.enhancement === 'wild').length;
    if (n) step({ source: `${joker.name} +${n * effect.amount} Mult`, multDelta: n * effect.amount });
  } else if (effect.kind === 'score-suit-chips') {
    const n = scoring.filter((c) => c.suit === effect.suit || c.enhancement === 'wild').length;
    if (n) step({ source: `${joker.name} +${n * effect.amount} Chips`, chipsDelta: n * effect.amount });
  } else if (effect.kind === 'score-suit-money') {
    const n = scoring.filter((c) => c.suit === effect.suit || c.enhancement === 'wild').length;
    if (n) step({ source: `${joker.name} +$${n * effect.amount}`, moneyDelta: n * effect.amount });
  } else if (effect.kind === 'score-rank-mult') {
    const n = scoring.filter((c) => effect.ranks.includes(c.rank)).length;
    if (n) step({ source: `${joker.name} +${n * effect.amount} Mult`, multDelta: n * effect.amount });
  } else if (effect.kind === 'score-rank-chips') {
    const n = scoring.filter((c) => effect.ranks.includes(c.rank)).length;
    if (n) step({ source: `${joker.name} +${n * effect.amount} Chips`, chipsDelta: n * effect.amount });
  } else if (effect.kind === 'score-rank-bonus') {
    const n = scoring.filter((c) => effect.ranks.includes(c.rank)).length;
    if (n) step({ source: `${joker.name} bonus`, chipsDelta: n * effect.chips, multDelta: n * effect.mult });
  } else if (effect.kind === 'score-face-chips') {
    const n = scoring.filter(isFace).length;
    if (n) step({ source: `${joker.name} +${n * effect.amount} Chips`, chipsDelta: n * effect.amount });
  } else if (effect.kind === 'score-face-mult') {
    const n = scoring.filter(isFace).length;
    if (n) step({ source: `${joker.name} +${n * effect.amount} Mult`, multDelta: n * effect.amount });
  } else if (effect.kind === 'few-cards-mult') {
    if (hand.allPlayed.length <= effect.maxCards) step({ source: `${joker.name} +${effect.amount} Mult`, multDelta: effect.amount });
  } else if (effect.kind === 'discard-chips') {
    const value = Math.max(0, options.discardsLeft ?? 0) * effect.amountPerDiscard;
    if (value) step({ source: `${joker.name} +${value} Chips`, chipsDelta: value });
  } else if (effect.kind === 'zero-discard-mult') {
    if ((options.discardsLeft ?? 0) === 0) step({ source: `${joker.name} +${effect.amount} Mult`, multDelta: effect.amount });
  } else if (effect.kind === 'joker-count-mult') {
    const value = Math.max(0, options.jokerCount ?? 0) * effect.amountPerJoker;
    if (value) step({ source: `${joker.name} +${value} Mult`, multDelta: value });
  } else if (effect.kind === 'held-black-xmult') {
    const cards = held.filter((c) => c.enhancement !== 'stone');
    if (cards.length && cards.every((c) => c.suit === 'spades' || c.suit === 'clubs')) {
      step({ source: `${joker.name} ×${effect.amount} Mult`, multMul: effect.amount });
    }
  } else if (effect.kind === 'decay-chips') {
    const value = Math.max(0, joker.counter ?? effect.start);
    if (value) step({ source: `${joker.name} +${value} Chips`, chipsDelta: value });
  } else if (effect.kind === 'straight-scale-chips') {
    const value = Math.max(0, joker.counter ?? effect.start ?? 0);
    if (value) step({ source: `${joker.name} +${value} Chips`, chipsDelta: value });
  } else if (effect.kind === 'bus-scale-mult' || effect.kind === 'green-scale-mult') {
    const value = Math.max(0, joker.counter ?? 0);
    if (value) step({ source: `${joker.name} +${value} Mult`, multDelta: value });
  } else if (effect.kind === 'deck-remaining-chips') {
    const value = Math.max(0, options.deckRemaining ?? 0) * effect.amountPerCard;
    if (value) step({ source: `${joker.name} +${value} Chips`, chipsDelta: value });
  } else if (effect.kind === 'lowest-held-mult') {
    const ranks = held.filter((c) => c.enhancement !== 'stone').map((c) => c.rank);
    if (ranks.length) step({ source: `${joker.name}`, multDelta: Math.min(...ranks) * effect.multiplier });
  } else if (effect.kind === 'suit-chance-xmult') {
    for (const card of scoring) {
      if ((card.suit === effect.suit || card.enhancement === 'wild') && rng() < effect.chance) {
        step({ source: `${joker.name} ×${effect.amount} Mult`, multMul: effect.amount, cardId: card.id });
      }
    }
  } else if (effect.kind === 'first-face-xmult') {
    const face = scoring.find(isFace);
    if (face) step({ source: `${joker.name} ×${effect.amount} Mult`, multMul: effect.amount, cardId: face.id });
  } else if (effect.kind === 'money-chips') {
    const value = Math.max(0, Math.floor(options.money ?? 0)) * effect.amountPerDollar;
    if (value) step({ source: `${joker.name} +${value} Chips`, chipsDelta: value });
  } else if (effect.kind === 'money-mult') {
    const value = Math.floor(Math.max(0, options.money ?? 0) / effect.dollarsPerStep) * effect.amountPerStep;
    if (value) step({ source: `${joker.name} +${value} Mult`, multDelta: value });
  } else if (effect.kind === 'repeat-hand-xmult') {
    if (options.handAlreadyPlayedThisRound) step({ source: `${joker.name} ×${effect.amount} Mult`, multMul: effect.amount });
  } else if (effect.kind === 'last-hand-xmult') {
    if (options.isFinalHand) step({ source: `${joker.name} ×${effect.amount} Mult`, multMul: effect.amount });
  } else if (effect.kind === 'loyalty-xmult') {
    if ((joker.counter ?? 0) === effect.every - 1) step({ source: `${joker.name} ×${effect.amount} Mult`, multMul: effect.amount });
  } else if (effect.kind === 'hand-count-mult') {
    const value = Math.max(0, options.handPlayCount ?? 0) * effect.amountPerPlay;
    if (value) step({ source: `${joker.name} +${value} Mult`, multDelta: value });
  } else if (effect.kind === 'castle-scale-chips') {
    const value = Math.max(0, joker.counter ?? 0);
    if (value) step({ source: `${joker.name} +${value} Chips`, chipsDelta: value });
  }
}

"""
s = s[:a] + helper + s[b:]

s = s.replace(
"""  const baseChips = base.chips + base.chipsPerLvl * (lvl - 1);
  const baseMult = base.mult + base.multPerLvl * (lvl - 1);""",
"""  const rawBaseChips = base.chips + base.chipsPerLvl * (lvl - 1);
  const rawBaseMult = base.mult + base.multPerLvl * (lvl - 1);
  const baseChips = options.bossHalveBase ? Math.max(1, Math.floor(rawBaseChips / 2)) : rawBaseChips;
  const baseMult = options.bossHalveBase ? Math.max(1, rawBaseMult / 2) : rawBaseMult;""",
1)

old = """  // Played scoring cards: left -> right. Red Seal adds exactly one extra activation.
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
  }"""
new = """  for (let cardIndex = 0; cardIndex < hand.scoringCards.length; cardIndex++) {
    const card = hand.scoringCards[cardIndex];
    let activations = 1 + (card.seal === 'red' ? 1 : 0);
    for (const joker of options.jokers ?? []) {
      if (jokerDisabled(joker)) continue;
      const effect = joker.effect;
      if (effect.kind === 'retrigger-last-hand' && options.isFinalHand) activations += 1;
      else if (effect.kind === 'retrigger-ranks' && effect.ranks.includes(card.rank)) activations += 1;
      else if (effect.kind === 'retrigger-face' && isFace(card)) activations += 1;
      else if (effect.kind === 'retrigger-first' && cardIndex === 0) activations += effect.extra;
    }
    const debuffed = (options.bossDebuffSuits ?? []).includes(card.suit)
      || Boolean(options.bossDebuffFace && isFace(card));
    for (let trigger = 0; trigger < activations; trigger++) {
      triggerPlayingCard(card, score, rng, trigger > 0, debuffed);
    }
  }

  const mimeCount = (options.jokers ?? []).filter(
    (joker) => !jokerDisabled(joker) && joker.effect.kind === 'retrigger-held',
  ).length;
  for (const card of options.heldCards ?? []) {
    if (card.enhancement !== 'steel') continue;
    const activations = 1 + (card.seal === 'red' ? 1 : 0) + mimeCount;
    for (let trigger = 0; trigger < activations; trigger++) triggerHeldCard(card, score, trigger > 0);
  }"""
if old not in s:
    raise SystemExit("Could not locate trigger loops")
s = s.replace(old, new, 1)

s = s.replace(
"""  for (const joker of options.jokers ?? []) {
    const edition = joker.edition ?? 'base';""",
"""  for (const joker of options.jokers ?? []) {
    if (jokerDisabled(joker)) continue;
    const edition = joker.edition ?? 'base';""",
1)

s = s.replace(
"""    const main = applyJokerMain(joker, hand, options);
    if (main) applyStep(score, main);""",
"""    applyJokerEffects(joker, hand, options, score, rng);""",
1)

engine.write_text(s, encoding="utf-8")

print("Balatro L3 progression core applied.")
