
from __future__ import annotations

import sys
from pathlib import Path

if len(sys.argv) != 2:
    raise SystemExit("Usage: balatro_joker_exact_parity.py <open-poker-root>")

root = Path(sys.argv[1]).resolve()

def replace_once(path: str, old: str, new: str) -> None:
    p = root / path
    s = p.read_text(encoding="utf-8")
    if old not in s:
        raise SystemExit(f"Joker exact parity anchor not found in {path}: {old[:180]!r}")
    p.write_text(s.replace(old, new, 1), encoding="utf-8")

# ===========================================================================
# 1. Rarity + effect model: add MYTHIC above Rare and exact-parity primitives.
# ===========================================================================
replace_once(
    "src/game/types.ts",
    "export type JokerRarity = 'common' | 'uncommon' | 'rare';",
    "export type JokerRarity = 'common' | 'uncommon' | 'rare' | 'mythic';",
)

replace_once(
    "src/game/types.ts",
    "  | { kind: 'castle-scale-chips'; gain: number };",
    """  | { kind: 'castle-scale-chips'; gain: number }
  | { kind: 'random-mult'; min: number; max: number }
  | { kind: 'mythic-prism' }
  | { kind: 'mythic-chronos' }
  | { kind: 'mythic-phoenix' }
  | { kind: 'mythic-leviathan' }
  | { kind: 'mythic-eclipse' }
  | { kind: 'mythic-echo' }
  | { kind: 'mythic-royal' }
  | { kind: 'mythic-ace' }
  | { kind: 'mythic-quantum' }
  | { kind: 'mythic-dragon' }
  | { kind: 'mythic-void' }
  | { kind: 'mythic-kaleidoscope' }
  | { kind: 'mythic-oracle' }
  | { kind: 'mythic-forge' }
  | { kind: 'mythic-bloodmoon' }
  | { kind: 'mythic-blacklotus' }
  | { kind: 'mythic-grail' }
  | { kind: 'mythic-staircase' }
  | { kind: 'mythic-emperor' }
  | { kind: 'mythic-worldtree' };""",
)


# L4 no longer needs the shop helper planetForHand after exact parity rewiring.
replace_once(
    "src/game/gameState.ts",
    "  planetForHand,\n",
    "",
)

# ===========================================================================
# 2. Exact fixes to the original 50 + 20 custom Mythic Jokers.
# ===========================================================================
replace_once(
    "src/game/gameState.ts",
    """  { key: 'misprint', name: 'Misprint', description: '+11 Mult in this first balanced set.', rarity: 'common', price: 4, effect: { kind: 'mult', amount: 11 } },""",
    """  { key: 'misprint', name: 'Misprint', description: '+0–23 Mult, randomly rolled each played hand.', rarity: 'common', price: 4, effect: { kind: 'random-mult', min: 0, max: 23 } },""",
)

mythics = r"""
  { key: 'astral-crown', name: 'Astral Crown', description: 'X1 + X0.75 Mult for each distinct suit among scoring cards.', rarity: 'mythic', price: 12, effect: { kind: 'mythic-prism' } },
  { key: 'chronomancer', name: 'Chronomancer', description: 'Retrigger the first and last scoring card once.', rarity: 'mythic', price: 13, effect: { kind: 'mythic-chronos' } },
  { key: 'phoenix-ashes', name: 'Phoenix of Ashes', description: 'Starts at X1 Mult. Permanently gains X0.25 for each Glass card shattered.', rarity: 'mythic', price: 14, effect: { kind: 'mythic-phoenix' } },
  { key: 'leviathan', name: 'Leviathan', description: '+8 Chips for every card in your full deck.', rarity: 'mythic', price: 12, effect: { kind: 'mythic-leviathan' } },
  { key: 'total-eclipse', name: 'Total Eclipse', description: 'X4 Mult if all cards held in hand are the same color, or none remain.', rarity: 'mythic', price: 13, effect: { kind: 'mythic-eclipse' } },
  { key: 'echo-of-ages', name: 'Echo of Ages', description: 'Gains X0.5 Mult for each earlier play of this Poker Hand in the current Blind.', rarity: 'mythic', price: 12, effect: { kind: 'mythic-echo' } },
  { key: 'royal-sovereign', name: 'Royal Sovereign', description: 'Each scoring face card gives +40 Chips and +8 Mult.', rarity: 'mythic', price: 12, effect: { kind: 'mythic-royal' } },
  { key: 'ace-ascendant', name: 'Ace Ascendant', description: 'Retrigger scoring Aces once; each scoring Ace activation gives X1.25 Mult.', rarity: 'mythic', price: 13, effect: { kind: 'mythic-ace' } },
  { key: 'quantum-jester', name: 'Quantum Jester', description: 'Each hand becomes one fate: +250 Chips, +35 Mult, X3 Mult, or +$12.', rarity: 'mythic', price: 12, effect: { kind: 'mythic-quantum' } },
  { key: 'golden-dragon', name: 'Golden Dragon', description: 'Each scoring Gold Seal earns +$5 and gives X1.5 Mult.', rarity: 'mythic', price: 14, effect: { kind: 'mythic-dragon' } },
  { key: 'void-monarch', name: 'Void Monarch', description: 'X1 + X0.75 Mult for each empty Joker slot.', rarity: 'mythic', price: 13, effect: { kind: 'mythic-void' } },
  { key: 'kaleidoscope', name: 'Kaleidoscope', description: 'Each scoring Foil, Holographic, or Polychrome card gives X1.35 Mult.', rarity: 'mythic', price: 13, effect: { kind: 'mythic-kaleidoscope' } },
  { key: 'oracle-xiii', name: 'Oracle XIII', description: 'X5 Mult if the sum of scoring ranks is divisible by 13.', rarity: 'mythic', price: 14, effect: { kind: 'mythic-oracle' } },
  { key: 'celestial-forge', name: 'Celestial Forge', description: 'X1 Mult plus X0.08 for every Poker Hand level gained above level 1.', rarity: 'mythic', price: 13, effect: { kind: 'mythic-forge' } },
  { key: 'blood-moon', name: 'Blood Moon', description: 'Scoring Hearts give X1.3 Mult; scoring Diamonds earn +$2.', rarity: 'mythic', price: 13, effect: { kind: 'mythic-bloodmoon' } },
  { key: 'black-lotus', name: 'Black Lotus', description: 'Retrigger scoring Spades and Clubs once.', rarity: 'mythic', price: 13, effect: { kind: 'mythic-blacklotus' } },
  { key: 'gamblers-grail', name: "Gambler's Grail", description: '1 in 6 chance for X6 Mult; otherwise +6 Mult.', rarity: 'mythic', price: 12, effect: { kind: 'mythic-grail' } },
  { key: 'infinite-staircase', name: 'Infinite Staircase', description: 'X1 + X0.5 Mult for each different Poker Hand already played this Blind.', rarity: 'mythic', price: 12, effect: { kind: 'mythic-staircase' } },
  { key: 'last-emperor', name: 'Last Emperor', description: 'On the final Hand: retrigger every scoring card once and give X5 Mult.', rarity: 'mythic', price: 15, effect: { kind: 'mythic-emperor' } },
  { key: 'world-tree', name: 'World Tree', description: 'X1.25 Mult for every modified card held in hand.', rarity: 'mythic', price: 14, effect: { kind: 'mythic-worldtree' } },
"""
replace_once(
    "src/game/gameState.ts",
    """  { key: 'the-trio', name: 'The Trio', description: 'x3 Mult if the hand contains Three of a Kind.', rarity: 'rare', price: 8, effect: { kind: 'hand-xmult', handTypes: ['Three of a Kind','Full House','Four of a Kind','Five of a Kind','Flush House','Flush Five'], amount: 3 } },
];

export const JOKER_LIBRARY_SIZE = JOKER_TEMPLATES.length;""",
    """  { key: 'the-trio', name: 'The Trio', description: 'x3 Mult if the hand contains Three of a Kind.', rarity: 'rare', price: 8, effect: { kind: 'hand-xmult', handTypes: ['Three of a Kind','Full House','Four of a Kind','Five of a Kind','Flush House','Flush Five'], amount: 3 } },
""" + mythics + """];
export const OFFICIAL_JOKER_COUNT = JOKER_TEMPLATES.filter((joker) => joker.rarity !== 'mythic').length;
export const MYTHIC_JOKER_COUNT = JOKER_TEMPLATES.filter((joker) => joker.rarity === 'mythic').length;
export const JOKER_LIBRARY_SIZE = JOKER_TEMPLATES.length;""",
)

# ===========================================================================
# 3. Exact creation rules, rarity roll, sticker compatibility, Castle suit.
# ===========================================================================
game_path = root / "src/game/gameState.ts"
src = game_path.read_text(encoding="utf-8")

old_factory_start = src.find("  private makeJokerFromTemplate(template: JokerTemplate, allowStickers = true): JokerCard {")
old_factory_end = src.find("  private makeConsumableItem(): ShopItem {", old_factory_start)
if old_factory_start < 0 or old_factory_end < 0:
    raise SystemExit("Could not locate L3 Joker factory")

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
      joker.suit = this.pickCastleSuitWeighted();
    } else if (
      joker.effect.kind === 'straight-scale-chips'
      || joker.effect.kind === 'bus-scale-mult'
      || joker.effect.kind === 'green-scale-mult'
      || joker.effect.kind === 'loyalty-xmult'
      || joker.effect.kind === 'mythic-phoenix'
    ) {
      joker.counter = joker.effect.kind === 'straight-scale-chips' ? (joker.effect.start ?? 0) : 0;
    }

    // Official compatibility for the 50-Joker parity set:
    // scaling Jokers Runner/Ride the Bus/Green Joker/Castle cannot be Perishable;
    // Ice Cream cannot be Eternal. Custom Mythics are sticker-free.
    const noPerishable = new Set(['runner', 'ride-the-bus', 'green-joker', 'castle']);
    const noEternal = new Set(['ice-cream']);
    if (allowStickers && joker.rarity !== 'mythic') {
      const order = STAKES[this.stakeKey].order;
      if (order >= STAKES.black.order) {
        const roll = this.rng();
        if (roll < 0.30 && !noEternal.has(joker.key)) {
          joker.sticker = 'eternal';
        } else if (order >= STAKES.orange.order && roll < 0.60 && !noPerishable.has(joker.key)) {
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
    // Mythic is intentionally above Rare and much scarcer: 2% natural roll.
    const rarity: JokerRarity = roll < 0.68
      ? 'common'
      : roll < 0.93
        ? 'uncommon'
        : roll < 0.98
          ? 'rare'
          : 'mythic';
    const pool = JOKER_TEMPLATES.filter((template) => template.rarity === rarity);
    return { kind: 'joker', joker: this.makeJokerFromTemplate(this.pick(pool.length ? pool : JOKER_TEMPLATES)) };
  }

"""
src = src[:old_factory_start] + factory + src[old_factory_end:]
game_path.write_text(src, encoding="utf-8")

# Add exact helpers immediately before held-card settlement.
insert_anchor = "  private resolveEndOfRoundHeldCards(lastHandType: PokerHandType, breakdown: ScoreBreakdown) {"
p = root / "src/game/gameState.ts"
s = p.read_text(encoding="utf-8")
idx = s.find(insert_anchor)
if idx < 0:
    raise SystemExit("Could not locate held-card settlement anchor")

helpers = r"""  private cardDebuffedByBoss(card: PlayingCard): boolean {
    if (this.blindIndex !== 2) return false;
    if (this.bossBlindKey === 'goad' && card.suit === 'spades') return true;
    if (this.bossBlindKey === 'window' && card.suit === 'diamonds') return true;
    if (this.bossBlindKey === 'head' && card.suit === 'hearts') return true;
    if (this.bossBlindKey === 'plant' && card.rank >= 11 && card.rank <= 13) return true;
    return false;
  }

  private pickCastleSuitWeighted(): Suit {
    const weights = SUITS.map((suit) => ({
      suit,
      count: this.ownedDeck.filter((card) => card.enhancement !== 'stone' && card.suit === suit).length,
    }));
    const total = weights.reduce((sum, entry) => sum + entry.count, 0);
    if (total <= 0) return 'spades';
    let roll = this.rng() * total;
    for (const entry of weights) {
      roll -= entry.count;
      if (roll < 0) return entry.suit;
    }
    return weights[weights.length - 1].suit;
  }

  private prepareExactJokersForHand(hand: ReturnType<typeof evaluateHand>) {
    for (const joker of this.jokers) {
      if (this.isJokerDebuffed(joker)) continue;
      const effect = joker.effect;

      // Mixed/On-Played Jokers update BEFORE the independent scoring pass,
      // therefore the hand that scales them immediately receives the new value.
      if (effect.kind === 'straight-scale-chips' && hand.type.includes('Straight')) {
        joker.counter = (joker.counter ?? (effect.start ?? 0)) + effect.gain;
      } else if (effect.kind === 'bus-scale-mult') {
        const hasActiveScoringFace = hand.scoringCards.some(
          (card) => card.rank >= 11 && card.rank <= 13 && !this.cardDebuffedByBoss(card),
        );
        joker.counter = hasActiveScoringFace ? 0 : (joker.counter ?? 0) + effect.gain;
      } else if (effect.kind === 'green-scale-mult') {
        joker.counter = (joker.counter ?? 0) + effect.handGain;
      }
    }
  }

  jokerRuntimeText(jokerId: string): string {
    const joker = this.jokers.find((value) => value.id === jokerId);
    if (!joker) return '';
    const effect = joker.effect;
    const counter = joker.counter ?? 0;

    if (this.isJokerDebuffed(joker)) return 'DEBUFFED (Perishable expired)';
    if (effect.kind === 'random-mult') return `Last roll: +${counter} Mult · range ${effect.min}–${effect.max}`;
    if (effect.kind === 'decay-chips') return `Current: +${counter} Chips`;
    if (effect.kind === 'straight-scale-chips') return `Current: +${counter} Chips`;
    if (effect.kind === 'bus-scale-mult') return `Current: +${counter} Mult`;
    if (effect.kind === 'green-scale-mult') return `Current: +${counter} Mult`;
    if (effect.kind === 'deck-remaining-chips') return `Current: +${this.deck.length * effect.amountPerCard} Chips`;
    if (effect.kind === 'discard-chips') return `Current: +${Math.max(0, this.discardsLeft) * effect.amountPerDiscard} Chips`;
    if (effect.kind === 'zero-discard-mult') return this.discardsLeft === 0 ? `ACTIVE: +${effect.amount} Mult` : 'Inactive: Discards remain';
    if (effect.kind === 'joker-count-mult') return `Current: +${this.jokers.length * effect.amountPerJoker} Mult`;
    if (effect.kind === 'money-chips') return `Current: +${Math.max(0, this.money) * effect.amountPerDollar} Chips`;
    if (effect.kind === 'money-mult') return `Current: +${Math.floor(Math.max(0, this.money) / effect.dollarsPerStep) * effect.amountPerStep} Mult`;
    if (effect.kind === 'loyalty-xmult') {
      const phase = counter % effect.every;
      return phase === effect.every - 1 ? `ACTIVE: X${effect.amount} Mult` : `${effect.every - 1 - phase} hands remaining`;
    }
    if (effect.kind === 'castle-scale-chips') return `Current: +${counter} Chips · target ${joker.suit ?? 'spades'}`;
    if (effect.kind === 'last-hand-xmult' || effect.kind === 'retrigger-last-hand') {
      return this.handsLeft === 1 ? 'ACTIVE: final Hand' : `${Math.max(0, this.handsLeft - 1)} Hands until active`;
    }
    if (effect.kind === 'repeat-hand-xmult' && this.selected.size > 0) {
      const type = evaluateHand(this.selectedCards()).type;
      return this.playedHandTypesThisRound.includes(type) ? `ACTIVE: ${type} already played` : `Inactive: first ${type} this Blind`;
    }
    if (effect.kind === 'mythic-phoenix') return `Current: X${(1 + counter * 0.25).toFixed(2)} Mult · ${counter} Glass shattered`;
    if (effect.kind === 'mythic-leviathan') return `Current: +${this.ownedDeck.length * 8} Chips`;
    if (effect.kind === 'mythic-echo' && this.selected.size > 0) {
      const type = evaluateHand(this.selectedCards()).type;
      const n = this.playedHandTypesThisRound.filter((value) => value === type).length;
      return `Current for ${type}: X${(1 + n * 0.5).toFixed(2)}`;
    }
    if (effect.kind === 'mythic-void') {
      const empty = Math.max(0, this.jokerCapacity() - this.jokers.length);
      return `Current: X${(1 + empty * 0.75).toFixed(2)} · ${empty} empty slots`;
    }
    if (effect.kind === 'mythic-forge') {
      const extra = Object.values(this.handLevels).reduce((sum, value) => sum + Math.max(0, value.level - 1), 0);
      return `Current: X${(1 + extra * 0.08).toFixed(2)} · ${extra} bonus levels`;
    }
    if (effect.kind === 'mythic-staircase') {
      const distinct = new Set(this.playedHandTypesThisRound).size;
      return `Current: X${(1 + distinct * 0.5).toFixed(2)} · ${distinct} hand types`;
    }
    if (effect.kind === 'mythic-emperor') return this.handsLeft === 1 ? 'ACTIVE: X5 + full retrigger' : `${Math.max(0, this.handsLeft - 1)} Hands until active`;
    if (effect.kind === 'mythic-quantum') {
      const labels = ['+250 Chips', '+35 Mult', 'X3 Mult', '+$12'];
      return `Last fate: ${labels[Math.max(0, Math.min(3, counter))]}`;
    }
    return '';
  }

"""
s = s[:idx] + helpers + s[idx:]
p.write_text(s, encoding="utf-8")

# Exact end-round Gold/Blue Seal interactions with Red Seal + Mime.
src = p.read_text(encoding="utf-8")
a = src.find("  private resolveEndOfRoundHeldCards(lastHandType: PokerHandType, breakdown: ScoreBreakdown) {")
b = src.find("  private makePurpleSealTarot(): ConsumableCard {", a)
if a < 0 or b < 0:
    raise SystemExit("Could not replace held-card settlement")

held_settlement = r"""  private resolveEndOfRoundHeldCards(lastHandType: PokerHandType, breakdown: ScoreBreakdown) {
    const mimeCount = this.jokers.filter(
      (joker) => !this.isJokerDebuffed(joker) && joker.effect.kind === 'retrigger-held',
    ).length;

    for (const card of this.hand) {
      if (this.cardDebuffedByBoss(card)) continue;
      const activations = 1 + (card.seal === 'red' ? 1 : 0) + mimeCount;

      for (let trigger = 0; trigger < activations; trigger++) {
        if (card.enhancement === 'gold') {
          this.money += 3;
          breakdown.moneyDelta += 3;
          breakdown.steps.push({
            source: `Gold Card +$3${trigger > 0 ? ' (retrigger)' : ''}`,
            stage: 'end_round',
            cardId: card.id,
            retrigger: trigger > 0,
            moneyDelta: 3,
            chipsBefore: breakdown.finalChips,
            chipsAfter: breakdown.finalChips,
            multBefore: breakdown.finalMult,
            multAfter: breakdown.finalMult,
          });
        }

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
            source: `Blue Seal created ${consumable.name}${trigger > 0 ? ' (retrigger)' : ''}`,
            stage: 'end_round',
            cardId: card.id,
            retrigger: trigger > 0,
            chipsBefore: breakdown.finalChips,
            chipsAfter: breakdown.finalChips,
            multBefore: breakdown.finalMult,
            multAfter: breakdown.finalMult,
          });
        }
      }
    }
  }

"""
src = src[:a] + held_settlement + src[b:]
p.write_text(src, encoding="utf-8")

# ===========================================================================
# 4. GameState scoring timing, visible held order, Glass/Phoenix, Castle.
# ===========================================================================
replace_once(
    "src/game/gameState.ts",
    """    const playedIds = new Set(cards.map((card) => card.id));
    const heldCards = this.hand.filter((card) => !playedIds.has(card.id));""",
    """    const playedIds = new Set(cards.map((card) => card.id));
    const byId = new Map(this.hand.map((card) => [card.id, card]));
    const visibleOrder = orderIds ?? this.hand.map((card) => card.id);
    const heldCards = visibleOrder
      .filter((id) => !playedIds.has(id))
      .map((id) => byId.get(id))
      .filter((card): card is PlayingCard => Boolean(card));""",
)

replace_once(
    "src/game/gameState.ts",
    """    const handAlreadyPlayedThisRound = this.playedHandTypesThisRound.includes(hand.type);
    const breakdown = scoreHand(hand, level, {""",
    """    const handAlreadyPlayedThisRound = this.playedHandTypesThisRound.includes(hand.type);
    this.prepareExactJokersForHand(hand);
    const handLevelExtra = Object.values(this.handLevels)
      .reduce((sum, value) => sum + Math.max(0, value.level - 1), 0);
    const breakdown = scoreHand(hand, level, {""",
)

replace_once(
    "src/game/gameState.ts",
    """      jokerCount: this.jokers.length,
      bossDebuffSuits,
      bossDebuffFace: boss === 'plant',
      bossHalveBase: boss === 'flint',
      rng: () => this.rng(),""",
    """      jokerCount: this.jokers.length,
      jokerCapacity: this.jokerCapacity(),
      fullDeckSize: this.ownedDeck.length,
      handLevelExtra,
      distinctHandTypesThisRound: new Set(this.playedHandTypesThisRound).size,
      priorSameHandCount: this.playedHandTypesThisRound.filter((value) => value === hand.type).length,
      bossDebuffSuits,
      bossDebuffFace: boss === 'plant',
      bossHalveBase: boss === 'flint',
      rng: () => this.rng(),""",
)

# Replace L3 after-play counter loop with exact timing/state settlement.
game_path = root / "src/game/gameState.ts"
src = game_path.read_text(encoding="utf-8")
old = r"""    for (const joker of this.jokers) {
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
    }"""
new = r"""    const exhaustedIceCream = new Set<string>();
    for (const joker of this.jokers) {
      if (this.isJokerDebuffed(joker)) continue;
      const effect = joker.effect;
      if (effect.kind === 'decay-chips') {
        joker.counter = Math.max(0, (joker.counter ?? effect.start) - effect.decay);
        if ((joker.counter ?? 0) <= 0) exhaustedIceCream.add(joker.id);
      } else if (effect.kind === 'loyalty-xmult') {
        joker.counter = ((joker.counter ?? 0) + 1) % effect.every;
      } else if (effect.kind === 'mythic-phoenix' && breakdown.destroyedCardIds.length > 0) {
        joker.counter = (joker.counter ?? 0) + breakdown.destroyedCardIds.length;
      }
    }
    if (exhaustedIceCream.size > 0) {
      this.jokers = this.jokers.filter((joker) => !exhaustedIceCream.has(joker.id));
    }"""
if old not in src:
    raise SystemExit("Could not locate L3 post-hand Joker loop")
src = src.replace(old, new, 1)
game_path.write_text(src, encoding="utf-8")

# Castle/Green discard exactness + boss debuff, Wild suit.
replace_once(
    "src/game/gameState.ts",
    """      } else if (effect.kind === 'castle-scale-chips' && joker.suit) {
        const hits = cards.filter((card) => card.suit === joker.suit).length;
        joker.counter = (joker.counter ?? 0) + hits * effect.gain;
      }""",
    """      } else if (effect.kind === 'castle-scale-chips' && joker.suit) {
        const hits = cards.filter((card) =>
          !this.cardDebuffedByBoss(card)
          && (card.suit === joker.suit || card.enhancement === 'wild')
        ).length;
        joker.counter = (joker.counter ?? 0) + hits * effect.gain;
      }""",
)

replace_once(
    "src/game/gameState.ts",
    """    for (const card of cards) {
      if (card.seal !== 'purple') continue;""",
    """    for (const card of cards) {
      if (this.cardDebuffedByBoss(card) || card.seal !== 'purple') continue;""",
)

# Castle suit changes every round using weighted current deck composition.
replace_once(
    "src/game/gameState.ts",
    """      if (joker.effect.kind === 'castle-scale-chips') {
        const current = joker.suit ?? 'spades';
        const idx = SUITS.indexOf(current);
        joker.suit = SUITS[(idx + 1) % SUITS.length];
      }""",
    """      if (joker.effect.kind === 'castle-scale-chips') {
        joker.suit = this.pickCastleSuitWeighted();
      }""",
)

# Main must pass the full visible hand order so held-card left/right timing is exact.
replace_once(
    "src/main.ts",
    "  const br = state.playSelected(playedCards.map((card) => card.id));",
    "  const br = state.playSelected(handOrder);",
)

# ===========================================================================
# 5. Exact scoring engine: per-card Joker timing, retriggers, held cards, Boss.
# ===========================================================================
replace_once(
    "src/game/pokerEngine.ts",
    """  jokerCount?: number;
  bossDebuffSuits?: PlayingCard['suit'][];""",
    """  jokerCount?: number;
  jokerCapacity?: number;
  fullDeckSize?: number;
  handLevelExtra?: number;
  distinctHandTypesThisRound?: number;
  priorSameHandCount?: number;
  bossDebuffSuits?: PlayingCard['suit'][];""",
)

engine = root / "src/game/pokerEngine.ts"
s = engine.read_text(encoding="utf-8")
start = s.find("function isFace(card: PlayingCard): boolean {")
end = s.find("function isPairFamily(type: EvaluatedHand['type']): boolean {", start)
if start < 0 or end < 0:
    raise SystemExit("Could not locate final Joker scoring block")

exact = r"""function isFace(card: PlayingCard): boolean {
  return card.rank >= 11 && card.rank <= 13;
}

function jokerDisabled(joker: JokerCard): boolean {
  return joker.sticker === 'perishable' && (joker.perishableRounds ?? 0) <= 0;
}

function isCardDebuffed(card: PlayingCard, options: ScoreHandOptions): boolean {
  return (options.bossDebuffSuits ?? []).includes(card.suit)
    || Boolean(options.bossDebuffFace && isFace(card));
}

function suitMatches(card: PlayingCard, suit: PlayingCard['suit'], options: ScoreHandOptions): boolean {
  if (isCardDebuffed(card, options)) return false;
  return card.enhancement === 'wild' || card.suit === suit;
}

function balatroHeldRankValue(card: PlayingCard): number {
  if (card.rank === 14) return 11;
  if (card.rank >= 11) return 10;
  return card.rank;
}

function firstActiveFaceIndex(hand: EvaluatedHand, options: ScoreHandOptions): number {
  return hand.scoringCards.findIndex((card) => isFace(card) && !isCardDebuffed(card, options));
}

function extraRetriggersForScoringCard(
  card: PlayingCard,
  cardIndex: number,
  options: ScoreHandOptions,
): number {
  let extra = 0;
  for (const joker of options.jokers ?? []) {
    if (jokerDisabled(joker)) continue;
    const effect = joker.effect;
    if (effect.kind === 'retrigger-last-hand' && options.isFinalHand) extra += 1;
    else if (effect.kind === 'retrigger-ranks' && effect.ranks.includes(card.rank)) extra += 1;
    else if (effect.kind === 'retrigger-face' && isFace(card)) extra += 1;
    else if (effect.kind === 'retrigger-first' && cardIndex === 0) extra += effect.extra;
    else if (effect.kind === 'mythic-chronos' && (cardIndex === 0 || cardIndex === hand.scoringCards.length - 1)) extra += 1;
    else if (effect.kind === 'mythic-ace' && card.rank === 14) extra += 1;
    else if (effect.kind === 'mythic-blacklotus' && (card.suit === 'spades' || card.suit === 'clubs' || card.enhancement === 'wild')) extra += 1;
    else if (effect.kind === 'mythic-emperor' && options.isFinalHand) extra += 1;
  }
  return extra;
}

function applyOnScoredJokers(
  card: PlayingCard,
  firstFaceIndex: number,
  cardIndex: number,
  hand: EvaluatedHand,
  options: ScoreHandOptions,
  score: MutableScore,
  rng: () => number,
  retrigger: boolean,
) {
  if (isCardDebuffed(card, options)) return;
  const suffix = retrigger ? ' (retrigger)' : '';

  for (const joker of options.jokers ?? []) {
    if (jokerDisabled(joker)) continue;
    const effect = joker.effect;
    const step = (partial: Parameters<typeof applyStep>[1]) =>
      applyStep(score, {
        ...partial,
        stage: 'played_card',
        jokerId: joker.id,
        cardId: card.id,
        retrigger,
      });

    if (effect.kind === 'score-suit-mult' && suitMatches(card, effect.suit, options)) {
      step({ source: `${joker.name} +${effect.amount} Mult${suffix}`, multDelta: effect.amount });
    } else if (effect.kind === 'score-suit-chips' && suitMatches(card, effect.suit, options)) {
      step({ source: `${joker.name} +${effect.amount} Chips${suffix}`, chipsDelta: effect.amount });
    } else if (effect.kind === 'score-suit-money' && suitMatches(card, effect.suit, options)) {
      step({ source: `${joker.name} +$${effect.amount}${suffix}`, moneyDelta: effect.amount });
    } else if (effect.kind === 'score-rank-mult' && effect.ranks.includes(card.rank)) {
      step({ source: `${joker.name} +${effect.amount} Mult${suffix}`, multDelta: effect.amount });
    } else if (effect.kind === 'score-rank-chips' && effect.ranks.includes(card.rank)) {
      step({ source: `${joker.name} +${effect.amount} Chips${suffix}`, chipsDelta: effect.amount });
    } else if (effect.kind === 'score-rank-bonus' && effect.ranks.includes(card.rank)) {
      step({ source: `${joker.name} +${effect.chips} Chips +${effect.mult} Mult${suffix}`, chipsDelta: effect.chips, multDelta: effect.mult });
    } else if (effect.kind === 'score-face-chips' && isFace(card)) {
      step({ source: `${joker.name} +${effect.amount} Chips${suffix}`, chipsDelta: effect.amount });
    } else if (effect.kind === 'score-face-mult' && isFace(card)) {
      step({ source: `${joker.name} +${effect.amount} Mult${suffix}`, multDelta: effect.amount });
    } else if (effect.kind === 'suit-chance-xmult' && suitMatches(card, effect.suit, options)) {
      if (rng() < effect.chance) step({ source: `${joker.name} ×${effect.amount} Mult${suffix}`, multMul: effect.amount });
    } else if (effect.kind === 'first-face-xmult' && cardIndex === firstFaceIndex) {
      step({ source: `${joker.name} ×${effect.amount} Mult${suffix}`, multMul: effect.amount });
    } else if (effect.kind === 'mythic-royal' && isFace(card)) {
      step({ source: `${joker.name} +40 Chips +8 Mult${suffix}`, chipsDelta: 40, multDelta: 8 });
    } else if (effect.kind === 'mythic-ace' && card.rank === 14) {
      step({ source: `${joker.name} ×1.25 Mult${suffix}`, multMul: 1.25 });
    } else if (effect.kind === 'mythic-dragon' && card.seal === 'gold') {
      step({ source: `${joker.name} +$5 ×1.5 Mult${suffix}`, moneyDelta: 5, multMul: 1.5 });
    } else if (effect.kind === 'mythic-kaleidoscope' && card.edition !== 'base' && card.edition !== 'negative') {
      step({ source: `${joker.name} ×1.35 Mult${suffix}`, multMul: 1.35 });
    } else if (effect.kind === 'mythic-bloodmoon') {
      if (suitMatches(card, 'hearts', options)) {
        step({ source: `${joker.name} Heart ×1.3${suffix}`, multMul: 1.3 });
      }
      if (suitMatches(card, 'diamonds', options)) {
        step({ source: `${joker.name} Diamond +$2${suffix}`, moneyDelta: 2 });
      }
    }
  }
}

function applyHeldActivation(
  card: PlayingCard,
  raisedFistCardId: string | null,
  options: ScoreHandOptions,
  score: MutableScore,
  retrigger: boolean,
) {
  if (isCardDebuffed(card, options)) return;

  // Enhancement resolves before On-Held Jokers.
  triggerHeldCard(card, score, retrigger);

  if (card.id !== raisedFistCardId) return;
  for (const joker of options.jokers ?? []) {
    if (jokerDisabled(joker) || joker.effect.kind !== 'lowest-held-mult') continue;
    const amount = balatroHeldRankValue(card) * joker.effect.multiplier;
    applyStep(score, {
      source: `${joker.name} +${amount} Mult${retrigger ? ' (retrigger)' : ''}`,
      stage: 'held_card',
      cardId: card.id,
      jokerId: joker.id,
      retrigger,
      multDelta: amount,
    });
  }
}

function applyIndependentJoker(
  joker: JokerCard,
  hand: EvaluatedHand,
  options: ScoreHandOptions,
  score: MutableScore,
  rng: () => number,
) {
  if (jokerDisabled(joker)) return;
  const effect = joker.effect;
  const held = options.heldCards ?? [];
  const step = (partial: Parameters<typeof applyStep>[1]) =>
    applyStep(score, { ...partial, stage: 'joker', jokerId: joker.id });

  if (effect.kind === 'chips') step({ source: `${joker.name} +${effect.amount} Chips`, chipsDelta: effect.amount });
  else if (effect.kind === 'mult') step({ source: `${joker.name} +${effect.amount} Mult`, multDelta: effect.amount });
  else if (effect.kind === 'xmult') step({ source: `${joker.name} ×${effect.amount} Mult`, multMul: effect.amount });
  else if (effect.kind === 'random-mult') {
    const amount = effect.min + Math.floor(rng() * (effect.max - effect.min + 1));
    joker.counter = amount;
    if (amount > 0) step({ source: `${joker.name} +${amount} Mult`, multDelta: amount });
    else step({ source: `${joker.name} +0 Mult` });
  } else if (effect.kind === 'pair-mult') {
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
    // Blackboard activates with an empty held hand. Non-debuffed Wild cards count
    // as black; Stone cards prevent activation.
    const valid = held.every((card) => {
      if (card.enhancement === 'stone') return false;
      if (card.enhancement === 'wild' && !isCardDebuffed(card, options)) return true;
      return card.suit === 'spades' || card.suit === 'clubs';
    });
    if (valid) step({ source: `${joker.name} ×${effect.amount} Mult`, multMul: effect.amount });
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
  } else if (effect.kind === 'mythic-prism') {
    const distinct = new Set(hand.scoringCards.filter((card) => !isCardDebuffed(card, options)).map((card) => card.suit)).size;
    const x = 1 + distinct * 0.75;
    if (x > 1) step({ source: `${joker.name} ×${x.toFixed(2)} Mult`, multMul: x });
  } else if (effect.kind === 'mythic-phoenix') {
    const x = 1 + Math.max(0, joker.counter ?? 0) * 0.25;
    if (x > 1) step({ source: `${joker.name} ×${x.toFixed(2)} Mult`, multMul: x });
  } else if (effect.kind === 'mythic-leviathan') {
    const value = Math.max(0, options.fullDeckSize ?? 0) * 8;
    if (value) step({ source: `${joker.name} +${value} Chips`, chipsDelta: value });
  } else if (effect.kind === 'mythic-eclipse') {
    const activeCards = held.filter((card) => card.enhancement !== 'stone');
    const allRed = activeCards.every((card) => card.enhancement === 'wild' || card.suit === 'hearts' || card.suit === 'diamonds');
    const allBlack = activeCards.every((card) => card.enhancement === 'wild' || card.suit === 'spades' || card.suit === 'clubs');
    const hasStone = held.some((card) => card.enhancement === 'stone');
    if (!hasStone && (allRed || allBlack)) step({ source: `${joker.name} ×4 Mult`, multMul: 4 });
  } else if (effect.kind === 'mythic-echo') {
    const x = 1 + Math.max(0, options.priorSameHandCount ?? 0) * 0.5;
    if (x > 1) step({ source: `${joker.name} ×${x.toFixed(2)} Mult`, multMul: x });
  } else if (effect.kind === 'mythic-quantum') {
    const fate = Math.floor(rng() * 4);
    joker.counter = fate;
    if (fate === 0) step({ source: `${joker.name} +250 Chips`, chipsDelta: 250 });
    else if (fate === 1) step({ source: `${joker.name} +35 Mult`, multDelta: 35 });
    else if (fate === 2) step({ source: `${joker.name} ×3 Mult`, multMul: 3 });
    else step({ source: `${joker.name} +$12`, moneyDelta: 12 });
  } else if (effect.kind === 'mythic-void') {
    const empty = Math.max(0, (options.jokerCapacity ?? options.jokerCount ?? 0) - (options.jokerCount ?? 0));
    const x = 1 + empty * 0.75;
    if (x > 1) step({ source: `${joker.name} ×${x.toFixed(2)} Mult`, multMul: x });
  } else if (effect.kind === 'mythic-oracle') {
    const sum = hand.scoringCards
      .filter((card) => !isCardDebuffed(card, options) && card.enhancement !== 'stone')
      .reduce((total, card) => total + card.rank, 0);
    if (sum > 0 && sum % 13 === 0) step({ source: `${joker.name} ×5 Mult`, multMul: 5 });
  } else if (effect.kind === 'mythic-forge') {
    const x = 1 + Math.max(0, options.handLevelExtra ?? 0) * 0.08;
    if (x > 1) step({ source: `${joker.name} ×${x.toFixed(2)} Mult`, multMul: x });
  } else if (effect.kind === 'mythic-grail') {
    if (rng() < 1 / 6) step({ source: `${joker.name} JACKPOT ×6 Mult`, multMul: 6 });
    else step({ source: `${joker.name} +6 Mult`, multDelta: 6 });
  } else if (effect.kind === 'mythic-staircase') {
    const x = 1 + Math.max(0, options.distinctHandTypesThisRound ?? 0) * 0.5;
    if (x > 1) step({ source: `${joker.name} ×${x.toFixed(2)} Mult`, multMul: x });
  } else if (effect.kind === 'mythic-emperor') {
    if (options.isFinalHand) step({ source: `${joker.name} ×5 Mult`, multMul: 5 });
  } else if (effect.kind === 'mythic-worldtree') {
    const modified = held.filter((card) =>
      card.enhancement !== 'none' || card.seal !== 'none' || (card.edition !== 'base' && card.edition !== 'negative')
    ).length;
    const x = Math.pow(1.25, modified);
    if (x > 1) step({ source: `${joker.name} ×${x.toFixed(2)} Mult`, multMul: x });
  }
}

export function scoreHand(
  hand: EvaluatedHand,
  level: HandLevel,
  options: ScoreHandOptions = {},
): ScoreBreakdown {
  const base = HAND_BASE[hand.type];
  const lvl = Math.max(1, level.level);
  const rawBaseChips = base.chips + base.chipsPerLvl * (lvl - 1);
  const rawBaseMult = base.mult + base.multPerLvl * (lvl - 1);
  const baseChips = options.bossHalveBase ? Math.max(1, Math.floor(rawBaseChips / 2)) : rawBaseChips;
  const baseMult = options.bossHalveBase ? Math.max(1, rawBaseMult / 2) : rawBaseMult;
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

  const faceIndex = firstActiveFaceIndex(hand, options);

  // 1) Scoring cards left -> right. Every retrigger replays the card AND every
  // eligible On-Scored Joker. Red Seal is one additive retrigger, never recursive.
  for (let cardIndex = 0; cardIndex < hand.scoringCards.length; cardIndex++) {
    const card = hand.scoringCards[cardIndex];
    const activations = 1
      + (card.seal === 'red' ? 1 : 0)
      + extraRetriggersForScoringCard(card, cardIndex, hand, options);

    for (let trigger = 0; trigger < activations; trigger++) {
      const retrigger = trigger > 0;
      const debuffed = isCardDebuffed(card, options);
      triggerPlayingCard(card, score, rng, retrigger, debuffed);
      if (!debuffed) applyOnScoredJokers(card, faceIndex, cardIndex, options, score, rng, retrigger);
    }
  }

  // 2) Held cards left -> right. Steel resolves before Raised Fist. Red Seal and
  // Mime stack additively and retrigger both the held card and Raised Fist.
  const held = options.heldCards ?? [];
  let raisedFistCardId: string | null = null;
  const rankedHeld = held
    .filter((card) => card.enhancement !== 'stone')
    .map((card, index) => ({ card, index, value: balatroHeldRankValue(card) }));
  if (rankedHeld.length > 0) {
    const minValue = Math.min(...rankedHeld.map((entry) => entry.value));
    const tied = rankedHeld.filter((entry) => entry.value === minValue);
    raisedFistCardId = tied[tied.length - 1].card.id; // official: rightmost lowest.
  }

  const mimeCount = (options.jokers ?? []).filter(
    (joker) => !jokerDisabled(joker) && joker.effect.kind === 'retrigger-held',
  ).length;

  for (const card of held) {
    const relevant = card.enhancement === 'steel' || card.id === raisedFistCardId;
    if (!relevant) continue;
    const activations = 1 + (card.seal === 'red' ? 1 : 0) + mimeCount;
    for (let trigger = 0; trigger < activations; trigger++) {
      applyHeldActivation(card, raisedFistCardId, options, score, trigger > 0);
    }
  }

  // 3) Independent Jokers left -> right. Joker Edition ordering matches Balatro:
  // Foil/Holographic -> ability -> Polychrome.
  for (const joker of options.jokers ?? []) {
    if (jokerDisabled(joker)) continue;
    const edition = joker.edition ?? 'base';

    if (edition === 'foil') {
      applyStep(score, { source: `${joker.name} Foil +50 Chips`, stage: 'joker', chipsDelta: 50, jokerId: joker.id });
    } else if (edition === 'holographic') {
      applyStep(score, { source: `${joker.name} Holographic +10 Mult`, stage: 'joker', multDelta: 10, jokerId: joker.id });
    }

    // On-scored / held / retrigger-only Jokers have already fired above.
    const timingOnly =
      joker.effect.kind === 'score-suit-mult'
      || joker.effect.kind === 'score-suit-chips'
      || joker.effect.kind === 'score-suit-money'
      || joker.effect.kind === 'score-rank-mult'
      || joker.effect.kind === 'score-rank-chips'
      || joker.effect.kind === 'score-rank-bonus'
      || joker.effect.kind === 'score-face-chips'
      || joker.effect.kind === 'score-face-mult'
      || joker.effect.kind === 'lowest-held-mult'
      || joker.effect.kind === 'retrigger-last-hand'
      || joker.effect.kind === 'retrigger-ranks'
      || joker.effect.kind === 'retrigger-held'
      || joker.effect.kind === 'retrigger-face'
      || joker.effect.kind === 'retrigger-first'
      || joker.effect.kind === 'suit-chance-xmult'
      || joker.effect.kind === 'first-face-xmult'
      || joker.effect.kind === 'mythic-chronos'
      || joker.effect.kind === 'mythic-royal'
      || joker.effect.kind === 'mythic-ace'
      || joker.effect.kind === 'mythic-dragon'
      || joker.effect.kind === 'mythic-kaleidoscope'
      || joker.effect.kind === 'mythic-bloodmoon'
      || joker.effect.kind === 'mythic-blacklotus';

    if (!timingOnly) applyIndependentJoker(joker, hand, options, score, rng);

    if (edition === 'polychrome') {
      applyStep(score, { source: `${joker.name} Polychrome ×1.5 Mult`, stage: 'joker', multMul: 1.5, jokerId: joker.id });
    }
  }

  // Glass shatters exactly once per scoring Glass card AFTER tally, regardless of
  // Red Seal/Hanging Chad/Dusk/etc. Debuffed Glass cards cannot shatter.
  const destroyedCardIds: string[] = [];
  for (const card of hand.scoringCards) {
    if (card.enhancement !== 'glass' || isCardDebuffed(card, options)) continue;
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

"""
s = s[:start] + exact + s[end:]
engine.write_text(s, encoding="utf-8")

print("50 Joker exact-parity + 20 Mythic Joker core applied.")
