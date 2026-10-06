
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


# ===========================================================================
# 3. Full Deck behavior + Voucher mechanics + complete consumable execution.
# ===========================================================================

# Import Voucher upgrade map.
replace_once(
    "src/game/gameState.ts",
    """  VOUCHERS,
  boosterConfig,""",
    """  VOUCHERS,
  VOUCHER_UPGRADE_BASE,
  planetForHand,
  boosterConfig,""",
)

# Replace 5-deck catalog with all 15.
game_path = root / "src/game/gameState.ts"
s = game_path.read_text(encoding="utf-8")
a = s.find("export const DECKS: Record<DeckKey, DeckDef> = {")
b = s.find("export const STAKES:", a)
if a < 0 or b < 0:
    raise SystemExit("Could not locate DECKS block")
decks = r"""export const DECKS: Record<DeckKey, DeckDef> = {
  red: { key: 'red', name: 'Red Deck', description: '+1 Discard every round.' },
  blue: { key: 'blue', name: 'Blue Deck', description: '+1 Hand every round.' },
  yellow: { key: 'yellow', name: 'Yellow Deck', description: 'Start with $10 extra.' },
  green: { key: 'green', name: 'Green Deck', description: 'No interest; cashout pays $2 per unused Hand and $1 per unused Discard.' },
  black: { key: 'black', name: 'Black Deck', description: '+1 Joker slot, -1 Hand every round.' },
  magic: { key: 'magic', name: 'Magic Deck', description: 'Start with Crystal Ball and 2 copies of The Fool.' },
  nebula: { key: 'nebula', name: 'Nebula Deck', description: 'Start with Telescope and -1 consumable slot.' },
  ghost: { key: 'ghost', name: 'Ghost Deck', description: 'Spectral cards may appear in the Shop; start with Hex.' },
  abandoned: { key: 'abandoned', name: 'Abandoned Deck', description: 'Start with no face cards.' },
  checkered: { key: 'checkered', name: 'Checkered Deck', description: 'Start with 26 Spades and 26 Hearts.' },
  zodiac: { key: 'zodiac', name: 'Zodiac Deck', description: 'Start with Tarot Merchant, Planet Merchant and Overstock.' },
  painted: { key: 'painted', name: 'Painted Deck', description: '+2 Hand Size, -1 Joker slot.' },
  anaglyph: { key: 'anaglyph', name: 'Anaglyph Deck', description: 'Gain a Double Tag after defeating each Boss Blind.' },
  plasma: { key: 'plasma', name: 'Plasma Deck', description: 'Balance Chips and Mult when scoring; base Blind size is doubled.' },
  erratic: { key: 'erratic', name: 'Erratic Deck', description: 'All starting card ranks and suits are randomized.' },
};

"""
s = s[:a] + decks + s[b:]
game_path.write_text(s, encoding="utf-8")

# Extra persistent run fields.
replace_once(
    "src/game/gameState.ts",
    """  bossForcedCardId: string | null = null;
  private concealNextDraw = false;""",
    """  bossForcedCardId: string | null = null;
  lastConsumableKey: string | null = null;
  ectoplasmUses = 0;
  consumableSlotDelta = 0;
  jokerSlotDelta = 0;
  bossRerollsUsed = 0;
  private concealNextDraw = false;""",
)

# Capacity now respects Deck/Voucher/Spectral modifiers.
s = game_path.read_text(encoding="utf-8")
a = s.find("  jokerCapacity(): number {")
b = s.find("  consumableCapacity(): number {", a)
if a < 0 or b < 0:
    raise SystemExit("Could not locate jokerCapacity")
joker_capacity = r"""  jokerCapacity(): number {
    const deckBonus = this.deckKey === 'black' ? 1 : 0;
    return Math.max(1,
      MAX_JOKERS
      + deckBonus
      + this.jokerSlotDelta
      + this.jokers.filter((joker) => (joker.edition ?? 'base') === 'negative').length
    );
  }

"""
s = s[:a] + joker_capacity + s[b:]
game_path.write_text(s, encoding="utf-8")

replace_once(
    "src/game/gameState.ts",
    """  consumableCapacity(): number {
    const crystalBall = this.vouchers.includes('crystal-ball') ? 1 : 0;
    return MAX_CONSUMABLES
      + crystalBall
      + this.consumables.filter((card) => (card.edition ?? 'base') === 'negative').length;
  }""",
    """  consumableCapacity(): number {
    const crystalBall = this.vouchers.includes('crystal-ball') ? 1 : 0;
    return Math.max(0,
      MAX_CONSUMABLES
      + crystalBall
      + this.consumableSlotDelta
      + this.consumables.filter((card) => (card.edition ?? 'base') === 'negative').length
    );
  }""",
)

# Full run setup for every Deck.
s = game_path.read_text(encoding="utf-8")
a = s.find("  configureRun(deckKey: DeckKey, stakeKey: StakeKey, seed?: number) {")
b = s.find("  private rollAnteOptions()", a)
if a < 0 or b < 0:
    raise SystemExit("Could not locate configureRun")
configure = r"""  configureRun(deckKey: DeckKey, stakeKey: StakeKey, seed?: number) {
    if (typeof seed === 'number' && Number.isFinite(seed)) {
      this.config.seed = Math.max(1, Math.floor(seed)) >>> 0;
      this.rng = this.createTrackedRng(this.config.seed);
    }

    this.deckKey = deckKey;
    this.stakeKey = stakeKey;
    this.ante = 1;
    this.blindIndex = 0;
    this.config.handSize = 8;
    this.config.handsPerRound = 4;
    this.config.discardsPerRound = 3;
    this.config.startingMoney = 4;
    this.consumableSlotDelta = 0;
    this.jokerSlotDelta = 0;
    this.lastConsumableKey = null;
    this.ectoplasmUses = 0;
    this.bossRerollsUsed = 0;

    if (STAKES[stakeKey].order >= STAKES.blue.order) this.config.discardsPerRound -= 1;
    if (deckKey === 'red') this.config.discardsPerRound += 1;
    if (deckKey === 'blue') this.config.handsPerRound += 1;
    if (deckKey === 'black') this.config.handsPerRound -= 1;
    if (deckKey === 'painted') {
      this.config.handSize += 2;
      this.jokerSlotDelta -= 1;
    }
    if (deckKey === 'nebula') this.consumableSlotDelta -= 1;

    this.money = deckKey === 'yellow' ? 14 : 4;
    this.ownedDeck = buildStandardDeck();

    if (deckKey === 'abandoned') {
      this.ownedDeck = this.ownedDeck.filter((card) => card.rank < 11 || card.rank > 13);
    } else if (deckKey === 'checkered') {
      for (const card of this.ownedDeck) {
        if (card.suit === 'clubs') card.suit = 'spades';
        else if (card.suit === 'diamonds') card.suit = 'hearts';
      }
    } else if (deckKey === 'erratic') {
      for (const card of this.ownedDeck) {
        card.suit = this.pick(SUITS);
        card.rank = this.pick(RANKS);
        card.baseChips = card.rank === 14 ? 11 : card.rank >= 11 ? 10 : card.rank;
      }
    }

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
    this.discardsUsedRun = 0;
    this.antePlayedCardIds.clear();
    this.bossFaceDownCardIds.clear();
    this.verdantLeafActive = false;
    this.crimsonDebuffedJokerId = null;
    this.bossForcedCardId = null;
    this.handPlayCounts = Object.fromEntries(
      (Object.keys(HAND_BASE) as PokerHandType[]).map((type) => [type, 0]),
    ) as Record<PokerHandType, number>;
    this.shopVisit = 0;

    if (deckKey === 'magic') {
      this.grantVoucherKey('crystal-ball');
      const fool = TAROT_CATALOG.find((card) => card.key === 'the-fool');
      if (fool) {
        this.consumables.push(this.makeConsumableFromCatalog(fool));
        this.consumables.push(this.makeConsumableFromCatalog(fool));
      }
    } else if (deckKey === 'nebula') {
      this.grantVoucherKey('telescope');
    } else if (deckKey === 'ghost') {
      const hex = SPECTRAL_CATALOG.find((card) => card.key === 'hex');
      if (hex) this.consumables.push(this.makeConsumableFromCatalog(hex));
    } else if (deckKey === 'zodiac') {
      this.grantVoucherKey('tarot-merchant');
      this.grantVoucherKey('planet-merchant');
      this.grantVoucherKey('overstock');
    }

    this.rollAnteOptions();
    this.prepareBlindSelect();
  }

"""
s = s[:a] + configure + s[b:]
game_path.write_text(s, encoding="utf-8")

# Plasma doubles Blind requirements.
replace_once(
    "src/game/gameState.ts",
    """    return Math.round(base * blindMult);
  }""",
    """    const deckMult = this.deckKey === 'plasma' ? 2 : 1;
    return Math.round(base * blindMult * deckMult);
  }""",
)

# Full voucher application helper.
s = game_path.read_text(encoding="utf-8")
a = s.find("  private grantVoucherKey(key: VoucherKey): boolean {")
b = s.find("  private applySingleTag(", a)
if a < 0 or b < 0:
    raise SystemExit("Could not locate grantVoucherKey")
voucher_apply = r"""  private grantVoucherKey(key: VoucherKey): boolean {
    if (this.vouchers.includes(key)) return false;
    this.vouchers.push(key);

    if (key === 'grabber' || key === 'nacho-tong') this.config.handsPerRound += 1;
    if (key === 'wasteful' || key === 'recyclomancy') this.config.discardsPerRound += 1;
    if (key === 'antimatter') this.jokerSlotDelta += 1;
    if (key === 'paint-brush' || key === 'palette') this.config.handSize += 1;
    if (key === 'hieroglyph') {
      this.ante = Math.max(1, this.ante - 1);
      this.config.handsPerRound = Math.max(1, this.config.handsPerRound - 1);
    }
    if (key === 'petroglyph') {
      this.ante = Math.max(1, this.ante - 1);
      this.config.discardsPerRound = Math.max(0, this.config.discardsPerRound - 1);
    }
    return true;
  }

"""
s = s[:a] + voucher_apply + s[b:]
game_path.write_text(s, encoding="utf-8")

# Voucher pool respects base -> upgrade dependency.
s = game_path.read_text(encoding="utf-8")
a = s.find("  private createShopState(): ShopState {")
b = s.find("  private createShopOffers(", a)
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
      const voucherPool = (Object.keys(VOUCHERS) as VoucherKey[]).filter((key) => {
        if (this.vouchers.includes(key)) return false;
        const baseKey = VOUCHER_UPGRADE_BASE[key];
        return !baseKey || this.vouchers.includes(baseKey);
      });
      const key = voucherPool.length ? this.pick(voucherPool) : 'blank';
      this.anteVoucher = { ...VOUCHERS[key], sold: false };
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
s = s[:a] + shop_state + s[b:]
game_path.write_text(s, encoding="utf-8")

# Shop slot count + Magic Trick card access.
s = game_path.read_text(encoding="utf-8")
a = s.find("  private createShopOffers(visit: number, rerolls: number): ShopOffer[] {")
b = s.find("  private createBoosterOffers(", a)
if a < 0 or b < 0:
    raise SystemExit("Could not locate createShopOffers")
shop_offers = r"""  private createShopOffers(visit: number, rerolls: number): ShopOffer[] {
    const slotCount = 2
      + (this.vouchers.includes('overstock') ? 1 : 0)
      + (this.vouchers.includes('overstock-plus') ? 1 : 0);

    return Array.from({ length: slotCount }, (_, index) => {
      const roll = this.rng();
      let item: ShopItem;
      if (roll < 0.56) item = this.makeJokerItem();
      else if (this.vouchers.includes('magic-trick') && roll < 0.69) item = this.makePlayingCardItem();
      else item = this.makeConsumableItem();
      return this.makeShopOffer(visit, rerolls, index, item);
    });
  }

"""
s = s[:a] + shop_offers + s[b:]
game_path.write_text(s, encoding="utf-8")

# Voucher-aware reroll and discounts.
s = game_path.read_text(encoding="utf-8")
a = s.find("  private rerollBaseCost(): number {")
b = s.find("  private makeJokerFromTemplate", a)
if a < 0 or b < 0:
    raise SystemExit("Could not locate rerollBaseCost region")
prefix = s[a:b]
start = prefix.find("  private rerollBaseCost(): number {")
end = prefix.find("\n  }", start) + 4
old_func = prefix[start:end]
new_func = """  private rerollBaseCost(): number {
    let reduction = 0;
    if (this.vouchers.includes('reroll-surplus')) reduction += 2;
    if (this.vouchers.includes('reroll-glut')) reduction += 2;
    return Math.max(1, SHOP_REROLL_BASE_COST - reduction);
  }"""
s = s[:a] + prefix[:start] + new_func + prefix[end:] + s[b:]
game_path.write_text(s, encoding="utf-8")

replace_once(
    "src/game/gameState.ts",
    """    return this.vouchers.includes('clearance-sale')
      ? Math.max(1, Math.ceil(base * 0.75))
      : base;""",
    """    if (this.vouchers.includes('liquidation')) return Math.max(1, Math.floor(base * 0.5 + 0.5));
    if (this.vouchers.includes('clearance-sale')) return Math.max(1, Math.floor(base * 0.75 + 0.5));
    return base;""",
)

# Consumable shop probabilities: Spectral only naturally in Ghost Deck.
s = game_path.read_text(encoding="utf-8")
a = s.find("  private makeConsumableTemplate(): ConsumableCatalogEntry {")
b = s.find("  private makePlayingCardItem(): ShopItem {", a)
if a < 0 or b < 0:
    raise SystemExit("Could not locate makeConsumableTemplate")
cons_template = r"""  private makeConsumableTemplate(): ConsumableCatalogEntry {
    let tarotWeight = this.vouchers.includes('tarot-tycoon') ? 4
      : this.vouchers.includes('tarot-merchant') ? 2 : 1;
    let planetWeight = this.vouchers.includes('planet-tycoon') ? 4
      : this.vouchers.includes('planet-merchant') ? 2 : 1;
    const spectralWeight = this.deckKey === 'ghost' ? 0.8 : 0;
    const total = tarotWeight + planetWeight + spectralWeight;
    let roll = this.rng() * total;
    if ((roll -= tarotWeight) < 0) return this.pick(TAROT_CATALOG);
    if ((roll -= planetWeight) < 0) return this.pick(PLANET_CATALOG);
    return this.pick(SPECTRAL_CATALOG);
  }

"""
s = s[:a] + cons_template + s[b:]
game_path.write_text(s, encoding="utf-8")

# Illusion controls modifications on playing cards sold in the Shop.
s = game_path.read_text(encoding="utf-8")
a = s.find("  private makePlayingCardItem(): ShopItem {")
b = s.find("  private findOffer(", a)
if a < 0 or b < 0:
    raise SystemExit("Could not locate makePlayingCardItem")
playing_item = r"""  private makePlayingCardItem(): ShopItem {
    const suit = this.pick(SUITS);
    const rank = this.pick(RANKS);
    const card = makeCard(suit, rank);

    if (this.vouchers.includes('illusion')) {
      if (this.rng() < 0.45) {
        card.enhancement = this.pick(ENHANCEMENT_OFFERS);
        if (card.enhancement === 'stone') card.baseChips = 50;
      }
      if (this.rng() < 0.22) card.edition = this.pick(EDITION_OFFERS);
      if (this.rng() < 0.25) card.seal = this.pick(['red','blue','gold','purple'] as const);
    }

    const name = `${RANK_LABEL[rank]} of ${titleCase(suit)}${card.edition !== 'base' ? ` (${titleCase(card.edition)})` : ''}`;
    return {
      kind: 'playing-card',
      card,
      name,
      description: card.enhancement === 'none' ? 'Add this card to your deck.' : `Add a ${titleCase(card.enhancement)} card to your deck.`,
      price: card.edition === 'base' ? 4 : 6,
      sellValue: 1,
    };
  }

"""
s = s[:a] + playing_item + s[b:]
game_path.write_text(s, encoding="utf-8")

# Editions appear on Jokers more often under Hone / Glow Up.
replace_once(
    "src/game/gameState.ts",
    """    return { kind: 'joker', joker: this.makeJokerFromTemplate(this.pick(chosen)) };""",
    """    const joker = this.makeJokerFromTemplate(this.pick(chosen));
    const editionBoost = this.vouchers.includes('glow-up') ? 4 : this.vouchers.includes('hone') ? 2 : 1;
    const editionRoll = this.rng();
    if (editionRoll < 0.02 * editionBoost) joker.edition = 'polychrome';
    else if (editionRoll < 0.06 * editionBoost) joker.edition = 'holographic';
    else if (editionRoll < 0.12 * editionBoost) joker.edition = 'foil';
    return { kind: 'joker', joker };""",
)

# Omen Globe + Telescope affect Pack composition.
replace_once(
    "src/game/gameState.ts",
    """    if (type === 'arcana') item = { kind: 'consumable', consumable: this.makeConsumableFromCatalog(this.pick(TAROT_CATALOG)) };
    else if (type === 'celestial') item = { kind: 'consumable', consumable: this.makeConsumableFromCatalog(this.pick(PLANET_CATALOG)) };""",
    """    if (type === 'arcana') {
      const catalog = this.vouchers.includes('omen-globe') && this.rng() < 0.20 ? SPECTRAL_CATALOG : TAROT_CATALOG;
      item = { kind: 'consumable', consumable: this.makeConsumableFromCatalog(this.pick(catalog)) };
    }
    else if (type === 'celestial') {
      const template = index === 0 && this.vouchers.includes('telescope')
        ? planetForHand(this.mostPlayedHandType())
        : this.pick(PLANET_CATALOG);
      item = { kind: 'consumable', consumable: this.makeConsumableFromCatalog(template) };
    }""",
)

print("Deck and Voucher behavior applied.")


print("CONTENT_DEBUG_PRE_STAGE4")
_debug_src = (root / "src/game/gameState.ts").read_text(encoding="utf-8")
print("playSelected@", _debug_src.find("playSelected("), "scoreHand@", _debug_src.find("scoreHand("), "breakdown@", _debug_src.find("breakdown ="))
print(_debug_src[_debug_src.find("playSelected("):_debug_src.find("playSelected(")+1800])

# ===========================================================================
# 4. Tarot / Spectral execution, Plasma/Observatory scoring, cashout, Anaglyph.
# ===========================================================================

# Replace consumable execution with the complete content set.
game_path = root / "src/game/gameState.ts"
s = game_path.read_text(encoding="utf-8")
a = s.find("  private applyConsumableWithTargets(card: ConsumableCard, targetIds: readonly string[]) {")
b = s.find("  private createShopState(): ShopState {", a)
if a < 0 or b < 0:
    raise SystemExit("Could not locate applyConsumableWithTargets")
apply_consumable = r"""  private applyConsumableWithTargets(card: ConsumableCard, targetIds: readonly string[]) {
    const effect = card.effect;

    if ((card.type === 'tarot' || card.type === 'planet') && card.key !== 'the-fool') {
      this.lastConsumableKey = card.key;
    }

    if (effect.kind === 'planet') {
      this.upgradeHandLevel(effect.handType);
      return;
    }
    if (effect.kind === 'money') {
      const gain = effect.mode === 'double-up-to-20'
        ? Math.min(20, this.money)
        : Math.max(0, effect.amount ?? 0);
      this.money += gain;
      return;
    }
    if (effect.kind === 'enhance-selected') {
      for (const id of targetIds) {
        this.mutateCardEverywhere(id, (target) => {
          target.enhancement = effect.enhancement;
          target.baseChips = effect.enhancement === 'stone'
            ? 50
            : target.rank === 14 ? 11 : target.rank >= 11 ? 10 : target.rank;
        });
      }
      return;
    }
    if (effect.kind === 'convert-suit') {
      for (const id of targetIds) this.mutateCardEverywhere(id, (target) => { target.suit = effect.suit; });
      return;
    }
    if (effect.kind === 'destroy-selected') {
      for (const id of targetIds) this.destroyCardEverywhere(id);
      return;
    }
    if (effect.kind === 'copy-right-to-left') {
      const order = this.targetMode?.candidateIds ?? targetIds;
      const sorted = targetIds.slice().sort((x, y) => order.indexOf(x) - order.indexOf(y));
      const leftId = sorted[0];
      const source = this.findRunCard(sorted[1]);
      if (!leftId || !source) return;
      this.mutateCardEverywhere(leftId, (target) => {
        target.suit = source.suit;
        target.rank = source.rank;
        target.enhancement = source.enhancement;
        target.seal = source.seal;
        target.edition = source.edition;
        target.baseChips = source.baseChips;
      });
      return;
    }
    if (effect.kind === 'edition-selected') {
      for (const id of targetIds) {
        const edition = effect.edition === 'random'
          ? this.pick(['foil', 'holographic', 'polychrome'] as const)
          : effect.edition;
        this.mutateCardEverywhere(id, (target) => { target.edition = edition; });
      }
      return;
    }
    if (effect.kind === 'seal-selected') {
      for (const id of targetIds) this.mutateCardEverywhere(id, (target) => { target.seal = effect.seal; });
      return;
    }
    if (effect.kind === 'duplicate-selected') {
      const source = targetIds[0] ? this.findRunCard(targetIds[0]) : null;
      if (!source) return;
      for (let i = 0; i < effect.copies; i++) {
        const copy = cloneCard(source);
        copy.id = this.makeRunId('copy');
        this.ownedDeck.push(copy);
        if (this.phase === 'play') this.hand.push(cloneCard(copy));
      }
      return;
    }
    if (effect.kind === 'immolate-selected') {
      for (const id of targetIds) this.destroyCardEverywhere(id);
      this.money += effect.money;
      return;
    }
    if (effect.kind === 'create-consumables') {
      const catalog = effect.type === 'tarot' ? TAROT_CATALOG : PLANET_CATALOG;
      for (let i = 0; i < effect.count && this.consumables.length < this.consumableCapacity(); i++) {
        this.consumables.push(this.makeConsumableFromCatalog(this.pick(catalog)));
      }
      return;
    }
    if (effect.kind === 'repeat-last-consumable') {
      if (!this.lastConsumableKey) return;
      const template = [...TAROT_CATALOG, ...PLANET_CATALOG].find((entry) => entry.key === this.lastConsumableKey);
      if (template && this.consumables.length < this.consumableCapacity()) {
        this.consumables.push(this.makeConsumableFromCatalog(template));
      }
      return;
    }
    if (effect.kind === 'joker-edition-chance') {
      if (this.jokers.length > 0 && this.rng() < effect.chance) {
        const target = this.pick(this.jokers);
        target.edition = this.pick(['foil','holographic','polychrome'] as const);
      }
      return;
    }
    if (effect.kind === 'rank-up-selected') {
      for (const id of targetIds) {
        this.mutateCardEverywhere(id, (target) => {
          target.rank = target.rank === 14 ? 2 : (target.rank + 1) as Rank;
          target.baseChips = target.rank === 14 ? 11 : target.rank >= 11 ? 10 : target.rank;
        });
      }
      return;
    }
    if (effect.kind === 'temperance') {
      const value = this.jokers.reduce((sum, joker) => sum + joker.sellValue, 0);
      this.money += Math.min(effect.cap, value);
      return;
    }
    if (effect.kind === 'create-random-joker') {
      if (this.jokers.length >= this.jokerCapacity()) return;
      const pool = this.availableJokerTemplates(effect.rarity);
      if (pool.length > 0) this.jokers.push(this.makeJokerFromTemplate(this.pick(pool), false));
      return;
    }
    if (effect.kind === 'spectral-familiar') {
      if (this.hand.length > 0) {
        const destroyed = this.pick(this.hand);
        this.destroyCardEverywhere(destroyed.id);
      }
      const standard = buildStandardDeck();
      const filtered = standard.filter((source) => {
        if (effect.mode === 'ace') return source.rank === 14;
        if (effect.mode === 'face') return source.rank >= 11 && source.rank <= 13;
        return source.rank >= 2 && source.rank <= 10;
      });
      const enhancePool = ENHANCEMENT_OFFERS.filter((value) => value !== 'stone');
      for (let i = 0; i < effect.create; i++) {
        const source = cloneCard(this.pick(filtered));
        source.id = this.makeRunId('spectral-card');
        source.enhancement = this.pick(enhancePool);
        source.baseChips = source.rank === 14 ? 11 : source.rank >= 11 ? 10 : source.rank;
        this.ownedDeck.push(cloneCard(source));
        if (this.phase === 'play') this.hand.push(source);
      }
      return;
    }
    if (effect.kind === 'spectral-wraith') {
      if (this.jokers.length < this.jokerCapacity()) {
        const pool = this.availableJokerTemplates('rare');
        if (pool.length > 0) this.jokers.push(this.makeJokerFromTemplate(this.pick(pool), false));
      }
      this.money = 0;
      return;
    }
    if (effect.kind === 'spectral-sigil') {
      const suit = this.pick(SUITS);
      for (const handCard of [...this.hand]) this.mutateCardEverywhere(handCard.id, (target) => { target.suit = suit; });
      return;
    }
    if (effect.kind === 'spectral-ouija') {
      const rank = this.pick(RANKS);
      for (const handCard of [...this.hand]) {
        this.mutateCardEverywhere(handCard.id, (target) => {
          target.rank = rank;
          target.baseChips = rank === 14 ? 11 : rank >= 11 ? 10 : rank;
        });
      }
      this.config.handSize = Math.max(1, this.config.handSize - 1);
      this.roundHandSize = Math.max(1, this.roundHandSize - 1);
      return;
    }
    if (effect.kind === 'spectral-ectoplasm') {
      if (this.jokers.length === 0) return;
      const target = this.pick(this.jokers);
      target.edition = 'negative';
      this.ectoplasmUses += 1;
      this.config.handSize = Math.max(1, this.config.handSize - this.ectoplasmUses);
      this.roundHandSize = Math.max(1, this.roundHandSize - this.ectoplasmUses);
      return;
    }
    if (effect.kind === 'spectral-ankh') {
      if (this.jokers.length === 0) return;
      const source = this.pick(this.jokers);
      const copy = cloneJoker(source);
      copy.id = this.makeRunId('ankh');
      if (copy.edition === 'negative') copy.edition = 'base';
      this.jokers = [source, copy];
      return;
    }
    if (effect.kind === 'spectral-hex') {
      if (this.jokers.length === 0) return;
      const source = this.pick(this.jokers);
      source.edition = 'polychrome';
      this.jokers = [source];
      return;
    }
    if (effect.kind === 'spectral-soul') {
      if (this.jokers.length >= this.jokerCapacity()) return;
      const pool = this.availableJokerTemplates('mythic');
      if (pool.length > 0) this.jokers.push(this.makeJokerFromTemplate(this.pick(pool), false));
      return;
    }
    if (effect.kind === 'spectral-black-hole') {
      for (const type of Object.keys(this.handLevels) as PokerHandType[]) this.upgradeHandLevel(type);
      return;
    }
  }

"""
s = s[:a] + apply_consumable + s[b:]
game_path.write_text(s, encoding="utf-8")

# Observatory XMult and Plasma balancing must change breakdown before GameState
# tallies it. Locate the final scoreHand call structurally, independent of later Boss rewrites.
game_path = root / "src/game/gameState.ts"
score_src = game_path.read_text(encoding="utf-8")
call_start = score_src.find("const breakdown = scoreHand(")
if call_start < 0:
    raise SystemExit("Could not locate final scoreHand call")
call_end = score_src.find("});", call_start)
if call_end < 0:
    raise SystemExit("Could not locate end of final scoreHand call")
call_end += len("});")
score_insert = r"""
    if (this.vouchers.includes('observatory')) {
      const matchingPlanets = this.consumables.filter((card) =>
        card.type === 'planet' && card.effect.kind === 'planet' && card.effect.handType === hand.type
      ).length;
      if (matchingPlanets > 0) {
        const before = breakdown.finalMult;
        const multiplier = Math.pow(1.5, matchingPlanets);
        breakdown.finalMult *= multiplier;
        breakdown.steps.push({
          source: `Observatory ×${multiplier.toFixed(2)} Mult`,
          stage: 'joker',
          multMul: multiplier,
          chipsBefore: breakdown.finalChips,
          chipsAfter: breakdown.finalChips,
          multBefore: before,
          multAfter: breakdown.finalMult,
        });
        breakdown.total = Math.floor(breakdown.finalChips * breakdown.finalMult);
      }
    }
    if (this.deckKey === 'plasma') {
      const balanced = (breakdown.finalChips + breakdown.finalMult) / 2;
      breakdown.steps.push({
        source: 'Plasma Deck balance',
        stage: 'joker',
        chipsBefore: breakdown.finalChips,
        chipsAfter: balanced,
        multBefore: breakdown.finalMult,
        multAfter: balanced,
      });
      breakdown.finalChips = balanced;
      breakdown.finalMult = balanced;
      breakdown.total = Math.floor(balanced * balanced);
    }
"""
score_src = score_src[:call_end] + score_insert + score_src[call_end:]
game_path.write_text(score_src, encoding="utf-8")

# Voucher interest caps.
replace_once(
    "src/game/gameState.ts",
    """    const interest = isGreenDeck ? 0 : Math.min(5, Math.floor(Math.max(0, this.money) / 5));""",
    """    const interestCap = this.vouchers.includes('money-tree') ? 20 : this.vouchers.includes('seed-money') ? 10 : 5;
    const interest = isGreenDeck ? 0 : Math.min(interestCap, Math.floor(Math.max(0, this.money) / 5));""",
)

# Anaglyph produces one Double Tag after every Boss victory.
replace_once(
    "src/game/gameState.ts",
    """    let tagBonus = 0;
    if (clearedBlind === 2 && this.investmentTags > 0) {""",
    """    if (clearedBlind === 2 && this.deckKey === 'anaglyph') this.doubleTags += 1;

    let tagBonus = 0;
    if (clearedBlind === 2 && this.investmentTags > 0) {""",
)

# Boss reroll Vouchers.
replace_once(
    "src/game/gameState.ts",
    """  targetForPreview(): number {
    return this.targetForCurrentBlind();
  }""",
    """  rerollBossBlind(): boolean {
    if (this.phase !== 'blind-select' || this.blindIndex !== 2 || this.money < 10) return false;
    const unlimited = this.vouchers.includes('retcon');
    const oneShot = this.vouchers.includes('directors-cut');
    if (!unlimited && (!oneShot || this.bossRerollsUsed >= 1)) return false;
    const pool = this.ante === 8 ? SHOWDOWN_BOSS_KEYS : REGULAR_BOSS_KEYS;
    const choices = pool.filter((key) => key !== this.bossBlindKey);
    if (choices.length === 0) return false;
    this.money -= 10;
    this.bossRerollsUsed += 1;
    this.bossBlindKey = this.pick(choices);
    this.target = this.targetForCurrentBlind();
    this.emit();
    return true;
  }

  targetForPreview(): number {
    return this.targetForCurrentBlind();
  }""",
)

# Reset per-Ante Boss reroll count.
replace_once(
    "src/game/gameState.ts",
    """      this.anteVoucher = null;
      this.antePlayedCardIds.clear();""",
    """      this.anteVoucher = null;
      this.antePlayedCardIds.clear();
      this.bossRerollsUsed = 0;""",
)

# Snapshot V4: persist new content state.
replace_once(
    "src/game/gameState.ts",
    """      bossForcedCardId: this.bossForcedCardId,
    };""",
    """      bossForcedCardId: this.bossForcedCardId,
      lastConsumableKey: this.lastConsumableKey,
      ectoplasmUses: this.ectoplasmUses,
      consumableSlotDelta: this.consumableSlotDelta,
      jokerSlotDelta: this.jokerSlotDelta,
      bossRerollsUsed: this.bossRerollsUsed,
    };""",
)

replace_once(
    "src/game/gameState.ts",
    """    this.bossForcedCardId = next.bossForcedCardId ?? null;
    this.shopVisit = next.shop?.visit ?? this.completedShopCount();""",
    """    this.bossForcedCardId = next.bossForcedCardId ?? null;
    this.lastConsumableKey = next.lastConsumableKey ?? null;
    this.ectoplasmUses = next.ectoplasmUses ?? 0;
    this.consumableSlotDelta = next.consumableSlotDelta ?? 0;
    this.jokerSlotDelta = next.jokerSlotDelta ?? 0;
    this.bossRerollsUsed = next.bossRerollsUsed ?? 0;
    this.shopVisit = next.shop?.visit ?? this.completedShopCount();""",
)

replace_once(
    "src/game/gameState.ts",
    """      bossForcedCardId: null,
    };
  }""",
    """      bossForcedCardId: null,
      lastConsumableKey: null,
      ectoplasmUses: 0,
      consumableSlotDelta: 0,
      jokerSlotDelta: 0,
      bossRerollsUsed: 0,
    };
  }""",
)

print("Tarot/Spectral execution and advanced Deck/Voucher scoring applied.")


# ===========================================================================
# 5. Deck unlock availability + Boss reroll UI + import fixes.
# ===========================================================================

replace_once(
    "src/game/gameState.ts",
    """  BossBlindKey,
  Suit,""",
    """  BossBlindKey,
  Suit,
  Rank,""",
)

meta_path = root / "src/game/metaProgression.ts"
meta_src = meta_path.read_text(encoding="utf-8")
old = r"""  if (profile.bestAnte >= 4 || profile.wins >= 1) decks.add('blue');
  if (profile.wins >= 1) decks.add('yellow');
  if (profile.wins >= 2) decks.add('green');
  if (profile.wins >= 3) decks.add('black');
  profile.unlockedDecks = [...decks];"""
new = r"""  if (profile.bestAnte >= 4 || profile.wins >= 1) decks.add('blue');
  if (profile.wins >= 1) decks.add('yellow');
  if (profile.wins >= 2) decks.add('green');
  if (profile.wins >= 3) decks.add('black');

  if (Number(profile.highestStakeCleared.red ?? -1) >= 0) decks.add('magic');
  if (Number(profile.highestStakeCleared.blue ?? -1) >= 0) decks.add('nebula');
  if (Number(profile.highestStakeCleared.yellow ?? -1) >= 0) decks.add('ghost');
  if (Number(profile.highestStakeCleared.green ?? -1) >= 0) decks.add('abandoned');
  if (Number(profile.highestStakeCleared.black ?? -1) >= 0) decks.add('checkered');

  const globalStake = maxClearedStake(profile);
  if (globalStake >= STAKES.red.order) decks.add('zodiac');
  if (globalStake >= STAKES.green.order) decks.add('painted');
  if (globalStake >= STAKES.black.order) decks.add('anaglyph');
  if (globalStake >= STAKES.blue.order) decks.add('plasma');
  if (globalStake >= STAKES.orange.order) decks.add('erratic');

  profile.unlockedDecks = [...decks];"""
if old not in meta_src:
    raise SystemExit("Meta deck unlock anchor not found")
meta_path.write_text(meta_src.replace(old, new, 1), encoding="utf-8")

replace_once(
    "src/game/gameState.ts",
    """      const unowned = (Object.keys(VOUCHERS) as VoucherKey[]).filter((key) => !this.vouchers.includes(key));
      if (unowned.length > 0) this.grantVoucherKey(this.pick(unowned));""",
    """      const unowned = (Object.keys(VOUCHERS) as VoucherKey[]).filter((key) => {
        if (this.vouchers.includes(key)) return false;
        const baseKey = VOUCHER_UPGRADE_BASE[key];
        return !baseKey || this.vouchers.includes(baseKey);
      });
      if (unowned.length > 0) this.grantVoucherKey(this.pick(unowned));""",
)

replace_once(
    "src/main.ts",
    """      actions.appendChild(play);

      if (index < 2) {""",
    """      actions.appendChild(play);

      if (index === 2 && (state.vouchers.includes('directors-cut') || state.vouchers.includes('retcon'))) {
        const rerollBoss = document.createElement('button');
        rerollBoss.type = 'button';
        rerollBoss.className = 'btn btn-ghost';
        rerollBoss.textContent = `Reroll Boss · $10`;
        rerollBoss.disabled = state.money < 10
          || (state.vouchers.includes('directors-cut') && !state.vouchers.includes('retcon') && state.bossRerollsUsed >= 1);
        rerollBoss.addEventListener('click', () => {
          if (!state.rerollBossBlind()) return;
          audio.play('buttonClick');
          updateHud();
        });
        actions.appendChild(rerollBoss);
      }

      if (index < 2) {""",
)

style = root / "src/style.css"
with style.open("a", encoding="utf-8") as f:
    f.write(r"""
.setup-decks {
  grid-template-columns: repeat(5,minmax(0,1fr)) !important;
  max-height: 46vh;
  overflow: auto;
  padding: 4px;
}
.setup-deck-card { min-height: 112px !important; }
@media (max-width: 1100px) {
  .setup-decks { grid-template-columns: repeat(3,minmax(0,1fr)) !important; }
}
@media (max-width: 700px) {
  .setup-decks { grid-template-columns: repeat(2,minmax(0,1fr)) !important; }
}
""")

print("Meta Deck availability and voucher Boss-reroll UI applied.")
