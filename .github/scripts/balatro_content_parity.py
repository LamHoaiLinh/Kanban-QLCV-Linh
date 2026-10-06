
from __future__ import annotations
import sys
from pathlib import Path

if len(sys.argv) != 2:
    raise SystemExit("Usage: balatro_content_parity.py <open-poker-root>")

root = Path(sys.argv[1]).resolve()

def replace_once(path: str, old: str, new: str) -> None:
    p = root / path
    s = p.read_text(encoding="utf-8")
    if old not in s:
        raise SystemExit(f"Content parity anchor not found in {path}: {old[:180]!r}")
    p.write_text(s.replace(old, new, 1), encoding="utf-8")

# ===========================================================================
# 1. Complete Deck / Voucher / consumable domain.
# ===========================================================================
replace_once(
    "src/game/types.ts",
    """export type DeckKey = 'red' | 'blue' | 'yellow' | 'green' | 'black';""",
    """export type DeckKey =
  | 'red' | 'blue' | 'yellow' | 'green' | 'black'
  | 'magic' | 'nebula' | 'ghost' | 'abandoned' | 'checkered'
  | 'zodiac' | 'painted' | 'anaglyph' | 'plasma' | 'erratic';""",
)

replace_once(
    "src/game/types.ts",
    """export type VoucherKey =
  | 'grabber'
  | 'wasteful'
  | 'crystal-ball'
  | 'reroll-surplus'
  | 'clearance-sale';""",
    """export type VoucherKey =
  | 'overstock' | 'overstock-plus'
  | 'clearance-sale' | 'liquidation'
  | 'hone' | 'glow-up'
  | 'reroll-surplus' | 'reroll-glut'
  | 'crystal-ball' | 'omen-globe'
  | 'telescope' | 'observatory'
  | 'grabber' | 'nacho-tong'
  | 'wasteful' | 'recyclomancy'
  | 'tarot-merchant' | 'tarot-tycoon'
  | 'planet-merchant' | 'planet-tycoon'
  | 'seed-money' | 'money-tree'
  | 'blank' | 'antimatter'
  | 'magic-trick' | 'illusion'
  | 'hieroglyph' | 'petroglyph'
  | 'directors-cut' | 'retcon'
  | 'paint-brush' | 'palette';""",
)

replace_once(
    "src/game/types.ts",
    """  | { kind: 'immolate-selected'; min: number; max: number; money: number };""",
    """  | { kind: 'immolate-selected'; min: number; max: number; money: number }
  | { kind: 'create-consumables'; type: 'tarot' | 'planet'; count: number }
  | { kind: 'repeat-last-consumable' }
  | { kind: 'joker-edition-chance'; chance: number }
  | { kind: 'rank-up-selected'; min: number; max: number }
  | { kind: 'temperance'; cap: number }
  | { kind: 'create-random-joker'; rarity?: JokerRarity }
  | { kind: 'spectral-familiar'; mode: 'face' | 'ace' | 'number'; create: number }
  | { kind: 'spectral-wraith' }
  | { kind: 'spectral-sigil' }
  | { kind: 'spectral-ouija' }
  | { kind: 'spectral-ectoplasm' }
  | { kind: 'spectral-ankh' }
  | { kind: 'spectral-hex' }
  | { kind: 'spectral-soul' }
  | { kind: 'spectral-black-hole' };""",
)

# Snapshot V4 stores consumable/deck-specific transient state.
replace_once(
    "src/game/types.ts",
    """  bossForcedCardId: string | null;
}""",
    """  bossForcedCardId: string | null;
  lastConsumableKey: string | null;
  ectoplasmUses: number;
  consumableSlotDelta: number;
  jokerSlotDelta: number;
  bossRerollsUsed: number;
}""",
)

# ===========================================================================
# 2. Full 12 Planet / 22 Tarot / 18 Spectral / 32 Voucher catalog.
# ===========================================================================
catalog = r"""import type {
  BoosterSize,
  BoosterType,
  ConsumableCard,
  ConsumableEffect,
  PokerHandType,
  VoucherKey,
  VoucherOffer,
} from './types';

export interface ConsumableCatalogEntry {
  key: string;
  name: string;
  description: string;
  type: ConsumableCard['type'];
  price: number;
  effect: ConsumableEffect;
}

export const PLANET_CATALOG: ConsumableCatalogEntry[] = [
  { key: 'pluto', name: 'Pluto', description: 'Level up High Card.', type: 'planet', price: 3, effect: { kind: 'planet', handType: 'High Card' } },
  { key: 'mercury', name: 'Mercury', description: 'Level up Pair.', type: 'planet', price: 3, effect: { kind: 'planet', handType: 'Pair' } },
  { key: 'uranus', name: 'Uranus', description: 'Level up Two Pair.', type: 'planet', price: 3, effect: { kind: 'planet', handType: 'Two Pair' } },
  { key: 'venus', name: 'Venus', description: 'Level up Three of a Kind.', type: 'planet', price: 3, effect: { kind: 'planet', handType: 'Three of a Kind' } },
  { key: 'saturn', name: 'Saturn', description: 'Level up Straight.', type: 'planet', price: 3, effect: { kind: 'planet', handType: 'Straight' } },
  { key: 'jupiter', name: 'Jupiter', description: 'Level up Flush.', type: 'planet', price: 3, effect: { kind: 'planet', handType: 'Flush' } },
  { key: 'earth', name: 'Earth', description: 'Level up Full House.', type: 'planet', price: 3, effect: { kind: 'planet', handType: 'Full House' } },
  { key: 'mars', name: 'Mars', description: 'Level up Four of a Kind.', type: 'planet', price: 3, effect: { kind: 'planet', handType: 'Four of a Kind' } },
  { key: 'neptune', name: 'Neptune', description: 'Level up Straight Flush.', type: 'planet', price: 3, effect: { kind: 'planet', handType: 'Straight Flush' } },
  { key: 'planet-x', name: 'Planet X', description: 'Level up Five of a Kind.', type: 'planet', price: 3, effect: { kind: 'planet', handType: 'Five of a Kind' } },
  { key: 'ceres', name: 'Ceres', description: 'Level up Flush House.', type: 'planet', price: 3, effect: { kind: 'planet', handType: 'Flush House' } },
  { key: 'eris', name: 'Eris', description: 'Level up Flush Five.', type: 'planet', price: 3, effect: { kind: 'planet', handType: 'Flush Five' } },
];

export const TAROT_CATALOG: ConsumableCatalogEntry[] = [
  { key: 'the-fool', name: 'The Fool', description: 'Create the last Tarot or Planet used this run, excluding The Fool.', type: 'tarot', price: 3, effect: { kind: 'repeat-last-consumable' } },
  { key: 'the-magician', name: 'The Magician', description: 'Turn up to 2 selected cards into Lucky Cards.', type: 'tarot', price: 3, effect: { kind: 'enhance-selected', enhancement: 'lucky', min: 1, max: 2 } },
  { key: 'the-high-priestess', name: 'The High Priestess', description: 'Create up to 2 random Planet cards.', type: 'tarot', price: 3, effect: { kind: 'create-consumables', type: 'planet', count: 2 } },
  { key: 'the-empress', name: 'The Empress', description: 'Turn up to 2 selected cards into Mult Cards.', type: 'tarot', price: 3, effect: { kind: 'enhance-selected', enhancement: 'mult', min: 1, max: 2 } },
  { key: 'the-emperor', name: 'The Emperor', description: 'Create up to 2 random Tarot cards.', type: 'tarot', price: 3, effect: { kind: 'create-consumables', type: 'tarot', count: 2 } },
  { key: 'the-hierophant', name: 'The Hierophant', description: 'Turn up to 2 selected cards into Bonus Cards.', type: 'tarot', price: 3, effect: { kind: 'enhance-selected', enhancement: 'bonus', min: 1, max: 2 } },
  { key: 'the-lovers', name: 'The Lovers', description: 'Turn 1 selected card into a Wild Card.', type: 'tarot', price: 3, effect: { kind: 'enhance-selected', enhancement: 'wild', min: 1, max: 1 } },
  { key: 'the-chariot', name: 'The Chariot', description: 'Turn 1 selected card into a Steel Card.', type: 'tarot', price: 3, effect: { kind: 'enhance-selected', enhancement: 'steel', min: 1, max: 1 } },
  { key: 'justice', name: 'Justice', description: 'Turn 1 selected card into a Glass Card.', type: 'tarot', price: 3, effect: { kind: 'enhance-selected', enhancement: 'glass', min: 1, max: 1 } },
  { key: 'the-hermit', name: 'The Hermit', description: 'Double money, gaining at most $20.', type: 'tarot', price: 3, effect: { kind: 'money', mode: 'double-up-to-20' } },
  { key: 'wheel-of-fortune', name: 'The Wheel of Fortune', description: '1 in 4 chance to add Foil, Holographic or Polychrome to a random Joker.', type: 'tarot', price: 3, effect: { kind: 'joker-edition-chance', chance: 0.25 } },
  { key: 'strength', name: 'Strength', description: 'Increase the rank of up to 2 selected cards by 1.', type: 'tarot', price: 3, effect: { kind: 'rank-up-selected', min: 1, max: 2 } },
  { key: 'the-hanged-man', name: 'The Hanged Man', description: 'Destroy up to 2 selected cards.', type: 'tarot', price: 3, effect: { kind: 'destroy-selected', min: 1, max: 2 } },
  { key: 'death', name: 'Death', description: 'The left selected card becomes an exact copy of the right selected card.', type: 'tarot', price: 3, effect: { kind: 'copy-right-to-left', min: 2, max: 2 } },
  { key: 'temperance', name: 'Temperance', description: 'Gain the total sell value of your Jokers, capped at $50.', type: 'tarot', price: 3, effect: { kind: 'temperance', cap: 50 } },
  { key: 'the-devil', name: 'The Devil', description: 'Turn 1 selected card into a Gold Card.', type: 'tarot', price: 3, effect: { kind: 'enhance-selected', enhancement: 'gold', min: 1, max: 1 } },
  { key: 'the-tower', name: 'The Tower', description: 'Turn 1 selected card into a Stone Card.', type: 'tarot', price: 3, effect: { kind: 'enhance-selected', enhancement: 'stone', min: 1, max: 1 } },
  { key: 'the-star', name: 'The Star', description: 'Convert up to 3 selected cards to Diamonds.', type: 'tarot', price: 3, effect: { kind: 'convert-suit', suit: 'diamonds', min: 1, max: 3 } },
  { key: 'the-moon', name: 'The Moon', description: 'Convert up to 3 selected cards to Clubs.', type: 'tarot', price: 3, effect: { kind: 'convert-suit', suit: 'clubs', min: 1, max: 3 } },
  { key: 'the-sun', name: 'The Sun', description: 'Convert up to 3 selected cards to Hearts.', type: 'tarot', price: 3, effect: { kind: 'convert-suit', suit: 'hearts', min: 1, max: 3 } },
  { key: 'judgement', name: 'Judgement', description: 'Create a random unlocked Joker if there is room.', type: 'tarot', price: 3, effect: { kind: 'create-random-joker' } },
  { key: 'the-world', name: 'The World', description: 'Convert up to 3 selected cards to Spades.', type: 'tarot', price: 3, effect: { kind: 'convert-suit', suit: 'spades', min: 1, max: 3 } },
];

export const SPECTRAL_CATALOG: ConsumableCatalogEntry[] = [
  { key: 'familiar', name: 'Familiar', description: 'Destroy 1 random card in hand, then add 3 random enhanced face cards.', type: 'spectral', price: 4, effect: { kind: 'spectral-familiar', mode: 'face', create: 3 } },
  { key: 'grim', name: 'Grim', description: 'Destroy 1 random card in hand, then add 2 random enhanced Aces.', type: 'spectral', price: 4, effect: { kind: 'spectral-familiar', mode: 'ace', create: 2 } },
  { key: 'incantation', name: 'Incantation', description: 'Destroy 1 random card in hand, then add 4 random enhanced numbered cards.', type: 'spectral', price: 4, effect: { kind: 'spectral-familiar', mode: 'number', create: 4 } },
  { key: 'talisman', name: 'Talisman', description: 'Add a Gold Seal to 1 selected card.', type: 'spectral', price: 4, effect: { kind: 'seal-selected', seal: 'gold', min: 1, max: 1 } },
  { key: 'aura', name: 'Aura', description: 'Add Foil, Holographic or Polychrome to 1 selected card.', type: 'spectral', price: 4, effect: { kind: 'edition-selected', edition: 'random', min: 1, max: 1 } },
  { key: 'wraith', name: 'Wraith', description: 'Create a Rare Joker, then set money to $0.', type: 'spectral', price: 4, effect: { kind: 'spectral-wraith' } },
  { key: 'sigil', name: 'Sigil', description: 'Convert every card in hand to one random suit.', type: 'spectral', price: 4, effect: { kind: 'spectral-sigil' } },
  { key: 'ouija', name: 'Ouija', description: 'Convert every card in hand to one random rank and reduce Hand Size by 1.', type: 'spectral', price: 4, effect: { kind: 'spectral-ouija' } },
  { key: 'ectoplasm', name: 'Ectoplasm', description: 'Add Negative to a random Joker; each use reduces Hand Size further.', type: 'spectral', price: 4, effect: { kind: 'spectral-ectoplasm' } },
  { key: 'immolate', name: 'Immolate', description: 'Destroy up to 5 selected cards and gain $20.', type: 'spectral', price: 4, effect: { kind: 'immolate-selected', min: 1, max: 5, money: 20 } },
  { key: 'ankh', name: 'Ankh', description: 'Copy one random Joker, then destroy all other Jokers.', type: 'spectral', price: 4, effect: { kind: 'spectral-ankh' } },
  { key: 'deja-vu', name: 'Deja Vu', description: 'Add a Red Seal to 1 selected card.', type: 'spectral', price: 4, effect: { kind: 'seal-selected', seal: 'red', min: 1, max: 1 } },
  { key: 'hex', name: 'Hex', description: 'Add Polychrome to one random Joker, then destroy the rest.', type: 'spectral', price: 4, effect: { kind: 'spectral-hex' } },
  { key: 'trance', name: 'Trance', description: 'Add a Blue Seal to 1 selected card.', type: 'spectral', price: 4, effect: { kind: 'seal-selected', seal: 'blue', min: 1, max: 1 } },
  { key: 'medium', name: 'Medium', description: 'Add a Purple Seal to 1 selected card.', type: 'spectral', price: 4, effect: { kind: 'seal-selected', seal: 'purple', min: 1, max: 1 } },
  { key: 'cryptid', name: 'Cryptid', description: 'Create 2 exact copies of 1 selected card.', type: 'spectral', price: 4, effect: { kind: 'duplicate-selected', copies: 2, min: 1, max: 1 } },
  { key: 'the-soul', name: 'The Soul', description: 'Create a Mythic Joker in this custom build.', type: 'spectral', price: 4, effect: { kind: 'spectral-soul' } },
  { key: 'black-hole', name: 'Black Hole', description: 'Upgrade every Poker Hand by 1 level.', type: 'spectral', price: 4, effect: { kind: 'spectral-black-hole' } },
];

export const BOOSTER_TYPES: BoosterType[] = ['arcana', 'celestial', 'standard', 'buffoon', 'spectral'];
export const BOOSTER_SIZES: BoosterSize[] = ['normal', 'jumbo', 'mega'];

export function boosterConfig(type: BoosterType, size: BoosterSize) {
  const buffoon = type === 'buffoon';
  if (size === 'normal') return { choices: buffoon ? 2 : 3, picks: 1, price: 4 };
  if (size === 'jumbo') return { choices: buffoon ? 4 : 5, picks: 1, price: 6 };
  return { choices: buffoon ? 4 : 5, picks: 2, price: 8 };
}

export function boosterDisplayName(type: BoosterType, size: BoosterSize): string {
  const prefix = size === 'normal' ? '' : size === 'jumbo' ? 'Jumbo ' : 'Mega ';
  const core =
    type === 'arcana' ? 'Arcana Pack'
    : type === 'celestial' ? 'Celestial Pack'
    : type === 'standard' ? 'Standard Pack'
    : type === 'buffoon' ? 'Buffoon Pack'
    : 'Spectral Pack';
  return prefix + core;
}

export function targetRule(effect: ConsumableEffect): { min: number; max: number; instruction: string } | null {
  if (!(('min' in effect) && ('max' in effect))) return null;
  const instruction =
    effect.kind === 'copy-right-to-left' ? 'Select exactly 2 cards. Left becomes a copy of right.'
    : effect.kind === 'destroy-selected' ? 'Select cards to destroy.'
    : effect.kind === 'immolate-selected' ? 'Select cards to destroy for $20.'
    : effect.kind === 'rank-up-selected' ? 'Select cards to increase rank.'
    : effect.kind === 'convert-suit' ? 'Select cards to change suit.'
    : effect.kind === 'edition-selected' ? 'Select a card to receive an Edition.'
    : effect.kind === 'seal-selected' ? 'Select a card to receive a Seal.'
    : effect.kind === 'duplicate-selected' ? 'Select a card to copy.'
    : 'Select card(s) to enhance.';
  return { min: effect.min, max: effect.max, instruction };
}

export const VOUCHERS: Record<VoucherKey, Omit<VoucherOffer, 'sold'>> = {
  'overstock': { key: 'overstock', name: 'Overstock', description: '+1 card slot in the Shop.', price: 10 },
  'overstock-plus': { key: 'overstock-plus', name: 'Overstock Plus', description: '+1 additional card slot in the Shop.', price: 10 },
  'clearance-sale': { key: 'clearance-sale', name: 'Clearance Sale', description: 'Shop cards and Booster Packs are 25% off.', price: 10 },
  'liquidation': { key: 'liquidation', name: 'Liquidation', description: 'Shop cards and Booster Packs are 50% off.', price: 10 },
  'hone': { key: 'hone', name: 'Hone', description: 'Foil, Holographic and Polychrome appear more often.', price: 10 },
  'glow-up': { key: 'glow-up', name: 'Glow Up', description: 'Card Editions appear much more often.', price: 10 },
  'reroll-surplus': { key: 'reroll-surplus', name: 'Reroll Surplus', description: 'Rerolls cost $2 less.', price: 10 },
  'reroll-glut': { key: 'reroll-glut', name: 'Reroll Glut', description: 'Rerolls cost another $2 less.', price: 10 },
  'crystal-ball': { key: 'crystal-ball', name: 'Crystal Ball', description: '+1 consumable slot.', price: 10 },
  'omen-globe': { key: 'omen-globe', name: 'Omen Globe', description: 'Arcana Packs can contain Spectral cards.', price: 10 },
  'telescope': { key: 'telescope', name: 'Telescope', description: 'First Celestial Pack card matches your most-played Poker Hand.', price: 10 },
  'observatory': { key: 'observatory', name: 'Observatory', description: 'Held matching Planet cards give X1.5 Mult.', price: 10 },
  'grabber': { key: 'grabber', name: 'Grabber', description: '+1 Hand each round.', price: 10 },
  'nacho-tong': { key: 'nacho-tong', name: 'Nacho Tong', description: '+1 additional Hand each round.', price: 10 },
  'wasteful': { key: 'wasteful', name: 'Wasteful', description: '+1 Discard each round.', price: 10 },
  'recyclomancy': { key: 'recyclomancy', name: 'Recyclomancy', description: '+1 additional Discard each round.', price: 10 },
  'tarot-merchant': { key: 'tarot-merchant', name: 'Tarot Merchant', description: 'Tarot cards appear more often in the Shop.', price: 10 },
  'tarot-tycoon': { key: 'tarot-tycoon', name: 'Tarot Tycoon', description: 'Tarot cards appear far more often in the Shop.', price: 10 },
  'planet-merchant': { key: 'planet-merchant', name: 'Planet Merchant', description: 'Planet cards appear more often in the Shop.', price: 10 },
  'planet-tycoon': { key: 'planet-tycoon', name: 'Planet Tycoon', description: 'Planet cards appear far more often in the Shop.', price: 10 },
  'seed-money': { key: 'seed-money', name: 'Seed Money', description: 'Interest cap increases to $10.', price: 10 },
  'money-tree': { key: 'money-tree', name: 'Money Tree', description: 'Interest cap increases to $20.', price: 10 },
  'blank': { key: 'blank', name: 'Blank', description: 'Does nothing by itself.', price: 10 },
  'antimatter': { key: 'antimatter', name: 'Antimatter', description: '+1 Joker slot.', price: 10 },
  'magic-trick': { key: 'magic-trick', name: 'Magic Trick', description: 'Playing cards may appear in the Shop.', price: 10 },
  'illusion': { key: 'illusion', name: 'Illusion', description: 'Shop playing cards may carry Enhancements, Editions or Seals.', price: 10 },
  'hieroglyph': { key: 'hieroglyph', name: 'Hieroglyph', description: '-1 Ante and -1 Hand each round.', price: 10 },
  'petroglyph': { key: 'petroglyph', name: 'Petroglyph', description: '-1 Ante and -1 Discard each round.', price: 10 },
  'directors-cut': { key: 'directors-cut', name: "Director's Cut", description: 'Reroll the Boss Blind once per Ante for $10.', price: 10 },
  'retcon': { key: 'retcon', name: 'Retcon', description: 'Reroll the Boss Blind any number of times for $10.', price: 10 },
  'paint-brush': { key: 'paint-brush', name: 'Paint Brush', description: '+1 Hand Size.', price: 10 },
  'palette': { key: 'palette', name: 'Palette', description: '+1 additional Hand Size.', price: 10 },
};

export const VOUCHER_UPGRADE_BASE: Partial<Record<VoucherKey, VoucherKey>> = {
  'overstock-plus': 'overstock', 'liquidation': 'clearance-sale', 'glow-up': 'hone',
  'reroll-glut': 'reroll-surplus', 'omen-globe': 'crystal-ball', 'observatory': 'telescope',
  'nacho-tong': 'grabber', 'recyclomancy': 'wasteful', 'tarot-tycoon': 'tarot-merchant',
  'planet-tycoon': 'planet-merchant', 'money-tree': 'seed-money', 'antimatter': 'blank',
  'illusion': 'magic-trick', 'petroglyph': 'hieroglyph', 'retcon': 'directors-cut', 'palette': 'paint-brush',
};

export function planetForHand(type: PokerHandType): ConsumableCatalogEntry {
  return PLANET_CATALOG.find((entry) => entry.effect.kind === 'planet' && entry.effect.handType === type) ?? PLANET_CATALOG[0];
}
"""
(root / "src/game/balatroShop.ts").write_text(catalog, encoding="utf-8")

print("Full Balatro content catalogs applied: 15 Deck keys, 32 Vouchers, 22 Tarot, 18 Spectral.")
