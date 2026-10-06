from __future__ import annotations

import sys
from pathlib import Path

if len(sys.argv) != 2:
    raise SystemExit("Usage: balatro_shop_parity.py <open-poker-root>")

root = Path(sys.argv[1]).resolve()

def replace_once(path: str, old: str, new: str) -> None:
    p = root / path
    s = p.read_text(encoding="utf-8")
    if old not in s:
        raise SystemExit(f"Shop parity anchor not found in {path}: {old[:180]!r}")
    p.write_text(s.replace(old, new, 1), encoding="utf-8")

# ---------------------------------------------------------------------------
# 1. Domain model: booster packs, target mode, vouchers, snapshot V3.
# ---------------------------------------------------------------------------
replace_once(
    "src/game/types.ts",
    "export type RunPhase = 'blind-select' | 'play' | 'shop' | 'game-over' | 'win';",
    "export type RunPhase = 'blind-select' | 'play' | 'shop' | 'booster' | 'game-over' | 'win';",
)

replace_once(
    "src/game/types.ts",
    """export type ConsumableEffect =
  | { kind: 'planet'; handType: PokerHandType }
  | { kind: 'enhance-card'; enhancement: Enhancement }
  | { kind: 'edition-card'; edition: Edition };""",
    """export type ConsumableEffect =
  | { kind: 'planet'; handType: PokerHandType }
  | { kind: 'money'; mode: 'double-up-to-20' | 'flat'; amount?: number }
  | { kind: 'enhance-selected'; enhancement: Enhancement; min: number; max: number }
  | { kind: 'convert-suit'; suit: Suit; min: number; max: number }
  | { kind: 'destroy-selected'; min: number; max: number }
  | { kind: 'copy-right-to-left'; min: 2; max: 2 }
  | { kind: 'edition-selected'; edition: Edition | 'random'; min: number; max: number }
  | { kind: 'seal-selected'; seal: Seal; min: number; max: number }
  | { kind: 'duplicate-selected'; copies: number; min: 1; max: 1 }
  | { kind: 'immolate-selected'; min: number; max: number; money: number };""",
)

insert_types = """
export type BoosterType = 'arcana' | 'celestial' | 'standard' | 'buffoon' | 'spectral';
export type BoosterSize = 'normal' | 'jumbo' | 'mega';

export interface BoosterOffer {
  id: string;
  type: BoosterType;
  size: BoosterSize;
  name: string;
  description: string;
  price: number;
  sold: boolean;
}

export interface BoosterChoice {
  id: string;
  item: ShopItem;
  taken: boolean;
}

export interface BoosterState {
  sourceOfferId: string;
  type: BoosterType;
  size: BoosterSize;
  name: string;
  choices: BoosterChoice[];
  picksLeft: number;
}

export interface TargetMode {
  source: 'inventory' | 'booster';
  sourceId: string;
  choiceId?: string;
  consumable: ConsumableCard;
  candidateIds: string[];
  selectedIds: string[];
  min: number;
  max: number;
  instruction: string;
}

export type VoucherKey =
  | 'grabber'
  | 'wasteful'
  | 'crystal-ball'
  | 'reroll-surplus'
  | 'clearance-sale';

export interface VoucherOffer {
  key: VoucherKey;
  name: string;
  description: string;
  price: number;
  sold: boolean;
}

export interface CashoutSummary {
  blindReward: number;
  handsBonus: number;
  interest: number;
  total: number;
}
"""
replace_once(
    "src/game/types.ts",
    "export interface ShopOffer {",
    insert_types + "\nexport interface ShopOffer {",
)

replace_once(
    "src/game/types.ts",
    """export interface ShopState {
  visit: number;
  offers: ShopOffer[];
  rerolls: number;
  rerollCost: number;
}""",
    """export interface ShopState {
  visit: number;
  offers: ShopOffer[];
  boosters: BoosterOffer[];
  voucher: VoucherOffer | null;
  rerolls: number;
  rerollCost: number;
}""",
)

replace_once(
    "src/game/types.ts",
    "export type RunSnapshot = RunSnapshotV1 | RunSnapshotV2;",
    """export interface RunSnapshotV3 extends Omit<RunSnapshotV2, 'version' | 'shop'> {
  version: 3;
  shop: ShopState | null;
  booster: BoosterState | null;
  targetMode: TargetMode | null;
  vouchers: VoucherKey[];
  anteVoucher: VoucherOffer | null;
  lastCashout: CashoutSummary | null;
}

export type RunSnapshot = RunSnapshotV1 | RunSnapshotV2 | RunSnapshotV3;""",
)

# ---------------------------------------------------------------------------
# 2. Catalog: familiar Balatro naming and effects, but no copied assets.
# ---------------------------------------------------------------------------
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
  { key: 'the-magician', name: 'The Magician', description: 'Enhance up to 2 selected cards into Lucky Cards.', type: 'tarot', price: 3, effect: { kind: 'enhance-selected', enhancement: 'lucky', min: 1, max: 2 } },
  { key: 'the-empress', name: 'The Empress', description: 'Enhance up to 2 selected cards into Mult Cards.', type: 'tarot', price: 3, effect: { kind: 'enhance-selected', enhancement: 'mult', min: 1, max: 2 } },
  { key: 'the-hierophant', name: 'The Hierophant', description: 'Enhance up to 2 selected cards into Bonus Cards.', type: 'tarot', price: 3, effect: { kind: 'enhance-selected', enhancement: 'bonus', min: 1, max: 2 } },
  { key: 'the-chariot', name: 'The Chariot', description: 'Enhance 1 selected card into a Steel Card.', type: 'tarot', price: 3, effect: { kind: 'enhance-selected', enhancement: 'steel', min: 1, max: 1 } },
  { key: 'justice', name: 'Justice', description: 'Enhance 1 selected card into a Glass Card.', type: 'tarot', price: 3, effect: { kind: 'enhance-selected', enhancement: 'glass', min: 1, max: 1 } },
  { key: 'the-devil', name: 'The Devil', description: 'Enhance 1 selected card into a Gold Card.', type: 'tarot', price: 3, effect: { kind: 'enhance-selected', enhancement: 'gold', min: 1, max: 1 } },
  { key: 'the-tower', name: 'The Tower', description: 'Enhance 1 selected card into a Stone Card.', type: 'tarot', price: 3, effect: { kind: 'enhance-selected', enhancement: 'stone', min: 1, max: 1 } },
  { key: 'the-star', name: 'The Star', description: 'Convert up to 3 selected cards to Diamonds.', type: 'tarot', price: 3, effect: { kind: 'convert-suit', suit: 'diamonds', min: 1, max: 3 } },
  { key: 'the-moon', name: 'The Moon', description: 'Convert up to 3 selected cards to Clubs.', type: 'tarot', price: 3, effect: { kind: 'convert-suit', suit: 'clubs', min: 1, max: 3 } },
  { key: 'the-sun', name: 'The Sun', description: 'Convert up to 3 selected cards to Hearts.', type: 'tarot', price: 3, effect: { kind: 'convert-suit', suit: 'hearts', min: 1, max: 3 } },
  { key: 'the-world', name: 'The World', description: 'Convert up to 3 selected cards to Spades.', type: 'tarot', price: 3, effect: { kind: 'convert-suit', suit: 'spades', min: 1, max: 3 } },
  { key: 'death', name: 'Death', description: 'Select 2 cards. The left card becomes a copy of the right card.', type: 'tarot', price: 3, effect: { kind: 'copy-right-to-left', min: 2, max: 2 } },
  { key: 'the-hanged-man', name: 'The Hanged Man', description: 'Destroy up to 2 selected cards.', type: 'tarot', price: 3, effect: { kind: 'destroy-selected', min: 1, max: 2 } },
  { key: 'the-hermit', name: 'The Hermit', description: 'Doubles money, up to a maximum gain of $20.', type: 'tarot', price: 3, effect: { kind: 'money', mode: 'double-up-to-20' } },
];

export const SPECTRAL_CATALOG: ConsumableCatalogEntry[] = [
  { key: 'aura', name: 'Aura', description: 'Add Foil, Holographic or Polychrome to 1 selected card.', type: 'spectral', price: 4, effect: { kind: 'edition-selected', edition: 'random', min: 1, max: 1 } },
  { key: 'talisman', name: 'Talisman', description: 'Add a Gold Seal to 1 selected card.', type: 'spectral', price: 4, effect: { kind: 'seal-selected', seal: 'gold', min: 1, max: 1 } },
  { key: 'deja-vu', name: 'Deja Vu', description: 'Add a Red Seal to 1 selected card.', type: 'spectral', price: 4, effect: { kind: 'seal-selected', seal: 'red', min: 1, max: 1 } },
  { key: 'trance', name: 'Trance', description: 'Add a Blue Seal to 1 selected card.', type: 'spectral', price: 4, effect: { kind: 'seal-selected', seal: 'blue', min: 1, max: 1 } },
  { key: 'medium', name: 'Medium', description: 'Add a Purple Seal to 1 selected card.', type: 'spectral', price: 4, effect: { kind: 'seal-selected', seal: 'purple', min: 1, max: 1 } },
  { key: 'cryptid', name: 'Cryptid', description: 'Create 2 copies of 1 selected card in your deck.', type: 'spectral', price: 4, effect: { kind: 'duplicate-selected', copies: 2, min: 1, max: 1 } },
  { key: 'immolate', name: 'Immolate', description: 'Destroy up to 5 selected cards and gain $20.', type: 'spectral', price: 4, effect: { kind: 'immolate-selected', min: 1, max: 5, money: 20 } },
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
    : effect.kind === 'convert-suit' ? 'Select cards to change suit.'
    : effect.kind === 'edition-selected' ? 'Select a card to receive an Edition.'
    : effect.kind === 'seal-selected' ? 'Select a card to receive a Seal.'
    : effect.kind === 'duplicate-selected' ? 'Select a card to copy.'
    : 'Select card(s) to enhance.';
  return { min: effect.min, max: effect.max, instruction };
}

export const VOUCHERS: Record<VoucherKey, Omit<VoucherOffer, 'sold'>> = {
  'grabber': { key: 'grabber', name: 'Grabber', description: '+1 hand every round.', price: 10 },
  'wasteful': { key: 'wasteful', name: 'Wasteful', description: '+1 discard every round.', price: 10 },
  'crystal-ball': { key: 'crystal-ball', name: 'Crystal Ball', description: '+1 consumable slot.', price: 10 },
  'reroll-surplus': { key: 'reroll-surplus', name: 'Reroll Surplus', description: 'Rerolls cost $2 less.', price: 10 },
  'clearance-sale': { key: 'clearance-sale', name: 'Clearance Sale', description: 'Shop cards and Booster Packs are 25% off.', price: 10 },
};

export function planetForHand(type: PokerHandType): ConsumableCatalogEntry {
  return PLANET_CATALOG.find((entry) => (
    entry.effect.kind === 'planet' && entry.effect.handType === type
  )) ?? PLANET_CATALOG[0];
}
"""
(root / "src/game/balatroShop.ts").write_text(catalog, encoding="utf-8")

# ---------------------------------------------------------------------------
# 3. GameState: imports/catalog wiring.
# ---------------------------------------------------------------------------
# Remove prototype-only declarations made obsolete by L2.
replace_once(
    "src/game/gameState.ts",
    "  RunSnapshotV2,\n",
    "",
)
replace_once(
    "src/game/gameState.ts",
    "  ConsumableEffect,\n",
    "",
)
replace_once(
    "src/game/gameState.ts",
    """interface ConsumableTemplate {
  key: string;
  name: string;
  description: string;
  type: ConsumableCard['type'];
  price: number;
  effect: ConsumableEffect;
}

""",
    "",
)
replace_once(
    "src/game/gameState.ts",
    """const PLANET_HANDS: PokerHandType[] = [
  'High Card',
  'Pair',
  'Two Pair',
  'Three of a Kind',
  'Straight',
  'Flush',
  'Full House',
  'Four of a Kind',
];

""",
    "",
)

# ---------------------------------------------------------------------------
# 3. GameState: imports/catalog wiring.
# ---------------------------------------------------------------------------
replace_once(
    "src/game/gameState.ts",
    "  ShopItem,\n  ShopOffer,\n  ShopState,\n  ScoreBreakdown,",
    "  BoosterChoice,\n  BoosterOffer,\n  BoosterState,\n  CashoutSummary,\n  ShopItem,\n  ShopOffer,\n  ShopState,\n  TargetMode,\n  VoucherKey,\n  VoucherOffer,\n  ScoreBreakdown,",
)
replace_once(
    "src/game/gameState.ts",
    "  RunSnapshotV1,",
    "  RunSnapshotV1,\n  RunSnapshotV3,",
)
replace_once(
    "src/game/gameState.ts",
    "import { HAND_BASE } from './types';",
    """import { HAND_BASE } from './types';
import {
  BOOSTER_TYPES,
  PLANET_CATALOG,
  SPECTRAL_CATALOG,
  TAROT_CATALOG,
  VOUCHERS,
  boosterConfig,
  boosterDisplayName,
  planetForHand,
  targetRule,
  type ConsumableCatalogEntry,
} from './balatroShop';""",
)

# Clone helpers for V3 state.
replace_once(
    "src/game/gameState.ts",
    "function cloneShop(shop: ShopState | null): ShopState | null {",
    """function cloneBoosterOffer(offer: BoosterOffer): BoosterOffer {
  return { ...offer };
}

function cloneVoucherOffer(offer: VoucherOffer | null): VoucherOffer | null {
  return offer ? { ...offer } : null;
}

function cloneTargetMode(mode: TargetMode | null): TargetMode | null {
  return mode ? {
    ...mode,
    consumable: cloneConsumable(mode.consumable),
    candidateIds: [...mode.candidateIds],
    selectedIds: [...mode.selectedIds],
  } : null;
}

function cloneBooster(state: BoosterState | null): BoosterState | null {
  return state ? {
    ...state,
    choices: state.choices.map((choice) => ({
      id: choice.id,
      taken: choice.taken,
      item: cloneShopItem(choice.item),
    })),
  } : null;
}

function cloneShop(shop: ShopState | null): ShopState | null {""",
)
replace_once(
    "src/game/gameState.ts",
    """    rerolls: shop.rerolls,
    rerollCost: shop.rerollCost,
    offers: shop.offers.map((offer) => ({""",
    """    rerolls: shop.rerolls,
    rerollCost: shop.rerollCost,
    boosters: shop.boosters.map(cloneBoosterOffer),
    voucher: cloneVoucherOffer(shop.voucher),
    offers: shop.offers.map((offer) => ({""",
)

# Fields.
replace_once(
    "src/game/gameState.ts",
    """  consumables: ConsumableCard[] = [];
  shop: ShopState | null = null;
  private shopVisit = 0;""",
    """  consumables: ConsumableCard[] = [];
  shop: ShopState | null = null;
  booster: BoosterState | null = null;
  targetMode: TargetMode | null = null;
  vouchers: VoucherKey[] = [];
  anteVoucher: VoucherOffer | null = null;
  lastCashout: CashoutSummary | null = null;
  private shopVisit = 0;""",
)

# Start blind closes transient shop layers.
replace_once(
    "src/game/gameState.ts",
    """    this.selected.clear();
    this.shop = null;
    this.drawToFull();""",
    """    this.selected.clear();
    this.shop = null;
    this.booster = null;
    this.targetMode = null;
    this.drawToFull();""",
)

# Core parity already supplies capacities; add Crystal Ball.
replace_once(
    "src/game/gameState.ts",
    """  consumableCapacity(): number {
    return MAX_CONSUMABLES + this.consumables.filter((card) => (card.edition ?? 'base') === 'negative').length;
  }""",
    """  consumableCapacity(): number {
    const crystalBall = this.vouchers.includes('crystal-ball') ? 1 : 0;
    return MAX_CONSUMABLES
      + crystalBall
      + this.consumables.filter((card) => (card.edition ?? 'base') === 'negative').length;
  }""",
)

# Cashout = blind reward + unused hands + interest.
replace_once(
    "src/game/gameState.ts",
    """  private onBlindCleared() {
    const reward = 3 + this.blindIndex; // simple placeholder reward
    this.money += reward;
    this.money += this.jokers.reduce((sum, joker) => (
      joker.effect.kind === 'economy-clear' ? sum + joker.effect.amount : sum
    ), 0);""",
    """  private onBlindCleared() {
    const reward = 3 + this.blindIndex;
    const handsBonus = Math.max(0, this.handsLeft);
    const jokerMoney = this.jokers.reduce((sum, joker) => (
      joker.effect.kind === 'economy-clear' ? sum + joker.effect.amount : sum
    ), 0);
    const moneyBeforeCashout = this.money;
    const interest = Math.min(5, Math.floor(moneyBeforeCashout / 5));
    const total = reward + handsBonus + interest + jokerMoney;
    this.money += total;
    this.lastCashout = { blindReward: reward + jokerMoney, handsBonus, interest, total };""",
)

# When moving to a new ante, refresh voucher.
replace_once(
    "src/game/gameState.ts",
    """      this.blindIndex = 0;
      this.ante += 1;
      if (this.ante > 8) { this.phase = 'win'; return; }""",
    """      this.blindIndex = 0;
      this.ante += 1;
      this.anteVoucher = null;
      if (this.ante > 8) { this.phase = 'win'; return; }""",
)

# Shop state, regular offers, boosters, voucher.
replace_once(
    "src/game/gameState.ts",
    """  private createShopState(): ShopState {
    const visit = ++this.shopVisit;
    return {
      visit,
      offers: this.createShopOffers(visit, 0),
      rerolls: 0,
      rerollCost: SHOP_REROLL_BASE_COST,
    };
  }

  private createShopOffers(visit: number, rerolls: number): ShopOffer[] {
    return [
      this.makeShopOffer(visit, rerolls, 0, this.makeJokerItem()),
      this.makeShopOffer(visit, rerolls, 1, this.makeJokerItem()),
      this.makeShopOffer(visit, rerolls, 2, this.makeConsumableItem()),
      this.makeShopOffer(visit, rerolls, 3, this.makeConsumableItem()),
      this.makeShopOffer(visit, rerolls, 4, this.makePlayingCardItem()),
      this.makeShopOffer(visit, rerolls, 5, this.makePlayingCardItem()),
    ];
  }""",
    """  private createShopState(): ShopState {
    const visit = ++this.shopVisit;
    if (!this.anteVoucher || this.anteVoucher.sold) {
      const unowned = (Object.keys(VOUCHERS) as VoucherKey[]).filter((key) => !this.vouchers.includes(key));
      this.anteVoucher = unowned.length > 0
        ? { ...VOUCHERS[this.pick(unowned)], sold: false }
        : null;
    }
    return {
      visit,
      offers: this.createShopOffers(visit, 0),
      boosters: this.createBoosterOffers(visit),
      voucher: cloneVoucherOffer(this.anteVoucher),
      rerolls: 0,
      rerollCost: this.rerollBaseCost(),
    };
  }

  private createShopOffers(visit: number, rerolls: number): ShopOffer[] {
    return [0, 1].map((index) => {
      const item = this.rng() < 0.7 ? this.makeJokerItem() : this.makeConsumableItem();
      return this.makeShopOffer(visit, rerolls, index, item);
    });
  }

  private createBoosterOffers(visit: number): BoosterOffer[] {
    return [0, 1].map((index) => {
      const type = this.pick(BOOSTER_TYPES);
      const roll = this.rng();
      const size = roll < 0.68 ? 'normal' : roll < 0.9 ? 'jumbo' : 'mega';
      const config = boosterConfig(type, size);
      return {
        id: `booster-${visit}-${index}`,
        type,
        size,
        name: boosterDisplayName(type, size),
        description: `Choose ${config.picks} from ${config.choices}.`,
        price: config.price,
        sold: false,
      };
    });
  }

  private rerollBaseCost(): number {
    return Math.max(1, SHOP_REROLL_BASE_COST - (this.vouchers.includes('reroll-surplus') ? 2 : 0));
  }""",
)

# Reroll respects voucher base and does not replace packs/voucher.
replace_once(
    "src/game/gameState.ts",
    """    this.shop.rerolls += 1;
    this.shop.rerollCost = SHOP_REROLL_BASE_COST + this.shop.rerolls;
    this.shop.offers = this.createShopOffers(this.shop.visit, this.shop.rerolls);""",
    """    this.shop.rerolls += 1;
    this.shop.rerollCost = this.rerollBaseCost() + this.shop.rerolls;
    this.shop.offers = this.createShopOffers(this.shop.visit, this.shop.rerolls);""",
)

# Shop price discount.
replace_once(
    "src/game/gameState.ts",
    """  private priceForItem(item: ShopItem): number {
    if (item.kind === 'joker') return item.joker.price;
    if (item.kind === 'consumable') return item.consumable.price;
    return item.price;
  }""",
    """  private priceForItem(item: ShopItem): number {
    const base = item.kind === 'joker' ? item.joker.price
      : item.kind === 'consumable' ? item.consumable.price
      : item.price;
    return this.discountedPrice(base);
  }

  shopPriceForItem(item: ShopItem): number {
    return this.priceForItem(item);
  }

  private discountedPrice(base: number): number {
    return this.vouchers.includes('clearance-sale')
      ? Math.max(1, Math.ceil(base * 0.75))
      : base;
  }""",
)

# Consumable catalog replaces random generic effects.
start = (root / "src/game/gameState.ts").read_text(encoding="utf-8")
old_start = start.find("  private makeConsumableTemplate(): ConsumableTemplate {")
old_end = start.find("  private makePlayingCardItem(): ShopItem {", old_start)
if old_start < 0 or old_end < 0:
    raise SystemExit("Could not locate makeConsumableTemplate")
new_block = """  private makeConsumableTemplate(): ConsumableCatalogEntry {
    const roll = this.rng();
    const catalog = roll < 0.45 ? PLANET_CATALOG : roll < 0.88 ? TAROT_CATALOG : SPECTRAL_CATALOG;
    return this.pick(catalog);
  }

"""
start = start[:old_start] + new_block + start[old_end:]
(root / "src/game/gameState.ts").write_text(start, encoding="utf-8")

# Booster, voucher, target APIs inserted before createShopState.
replace_once(
    "src/game/gameState.ts",
    "  private createShopState(): ShopState {",
    """  openBooster(offerId: string): boolean {
    if (this.phase !== 'shop' || !this.shop) return false;
    const offer = this.shop.boosters.find((item) => item.id === offerId);
    if (!offer || offer.sold) return false;
    const price = this.discountedPrice(offer.price);
    if (this.money < price) return false;

    this.money -= price;
    offer.sold = true;
    const config = boosterConfig(offer.type, offer.size);
    this.booster = {
      sourceOfferId: offer.id,
      type: offer.type,
      size: offer.size,
      name: offer.name,
      choices: Array.from({ length: config.choices }, (_, index) => this.makeBoosterChoice(offer.type, index)),
      picksLeft: config.picks,
    };
    this.phase = 'booster';
    this.targetMode = null;
    this.emit();
    return true;
  }

  boosterPrice(offer: BoosterOffer): number {
    return this.discountedPrice(offer.price);
  }

  private makeBoosterChoice(type: BoosterOffer['type'], index: number): BoosterChoice {
    let item: ShopItem;
    if (type === 'arcana') item = { kind: 'consumable', consumable: this.makeConsumableFromCatalog(this.pick(TAROT_CATALOG)) };
    else if (type === 'celestial') item = { kind: 'consumable', consumable: this.makeConsumableFromCatalog(this.pick(PLANET_CATALOG)) };
    else if (type === 'spectral') item = { kind: 'consumable', consumable: this.makeConsumableFromCatalog(this.pick(SPECTRAL_CATALOG)) };
    else if (type === 'buffoon') item = this.makeJokerItem();
    else item = this.makePlayingCardItem();

    return {
      id: `pack-choice-${this.rngDrawCount}-${index}-${Math.floor(this.rng() * 1_000_000)}`,
      item,
      taken: false,
    };
  }

  private makeConsumableFromCatalog(template: ConsumableCatalogEntry): ConsumableCard {
    return {
      ...template,
      id: this.makeRunId('consumable'),
      sellValue: Math.max(1, Math.floor(template.price / 2)),
      effect: { ...template.effect },
      edition: 'base',
    };
  }

  chooseBooster(choiceId: string): 'applied' | 'targeting' | 'invalid' {
    if (this.phase !== 'booster' || !this.booster || this.booster.picksLeft <= 0) return 'invalid';
    const choice = this.booster.choices.find((item) => item.id === choiceId);
    if (!choice || choice.taken) return 'invalid';

    if (choice.item.kind === 'joker') {
      const incoming = choice.item.joker;
      const bonus = (incoming.edition ?? 'base') === 'negative' ? 1 : 0;
      if (this.jokers.length >= this.jokerCapacity() + bonus) return 'invalid';
      this.jokers.push(cloneJoker(incoming));
      return this.finishBoosterChoice(choice);
    }

    if (choice.item.kind === 'playing-card') {
      this.ownedDeck.push(cloneCard(choice.item.card));
      return this.finishBoosterChoice(choice);
    }

    const card = choice.item.consumable;
    const rule = targetRule(card.effect);
    if (!rule) {
      this.applyConsumableWithTargets(card, []);
      return this.finishBoosterChoice(choice);
    }

    this.targetMode = {
      source: 'booster',
      sourceId: this.booster.sourceOfferId,
      choiceId: choice.id,
      consumable: cloneConsumable(card),
      candidateIds: this.makeTargetCandidateIds(),
      selectedIds: [],
      ...rule,
    };
    this.emit();
    return 'targeting';
  }

  private finishBoosterChoice(choice: BoosterChoice): 'applied' {
    choice.taken = true;
    if (this.booster) this.booster.picksLeft -= 1;
    if (this.booster && this.booster.picksLeft <= 0) {
      this.booster = null;
      this.phase = 'shop';
    }
    this.targetMode = null;
    this.emit();
    return 'applied';
  }

  skipBooster(): boolean {
    if (this.phase !== 'booster') return false;
    this.booster = null;
    this.targetMode = null;
    this.phase = 'shop';
    this.emit();
    return true;
  }

  buyVoucher(): boolean {
    if (this.phase !== 'shop' || !this.shop?.voucher || this.shop.voucher.sold) return false;
    const voucher = this.shop.voucher;
    if (this.money < voucher.price) return false;
    this.money -= voucher.price;
    voucher.sold = true;
    if (this.anteVoucher?.key === voucher.key) this.anteVoucher.sold = true;
    if (!this.vouchers.includes(voucher.key)) this.vouchers.push(voucher.key);

    if (voucher.key === 'grabber') this.config.handsPerRound += 1;
    if (voucher.key === 'wasteful') this.config.discardsPerRound += 1;
    if (voucher.key === 'reroll-surplus' && this.shop) {
      this.shop.rerollCost = Math.max(1, this.shop.rerollCost - 2);
    }
    this.emit();
    return true;
  }

  beginUseConsumable(consumableId: string): 'applied' | 'targeting' | 'invalid' {
    const card = this.consumables.find((item) => item.id === consumableId);
    if (!card) return 'invalid';
    const rule = targetRule(card.effect);
    if (!rule) {
      const idx = this.consumables.findIndex((item) => item.id === consumableId);
      this.consumables.splice(idx, 1);
      this.applyConsumableWithTargets(card, []);
      this.emit();
      return 'applied';
    }

    this.targetMode = {
      source: 'inventory',
      sourceId: consumableId,
      consumable: cloneConsumable(card),
      candidateIds: this.makeTargetCandidateIds(),
      selectedIds: [],
      ...rule,
    };
    this.emit();
    return 'targeting';
  }

  toggleTargetCard(cardId: string): boolean {
    const mode = this.targetMode;
    if (!mode || !mode.candidateIds.includes(cardId)) return false;
    const index = mode.selectedIds.indexOf(cardId);
    if (index >= 0) {
      mode.selectedIds.splice(index, 1);
      this.emit();
      return false;
    }
    if (mode.selectedIds.length >= mode.max) return false;
    mode.selectedIds.push(cardId);
    this.emit();
    return true;
  }

  cancelTargetMode(): boolean {
    if (!this.targetMode) return false;
    this.targetMode = null;
    this.emit();
    return true;
  }

  confirmTargetMode(): boolean {
    const mode = this.targetMode;
    if (!mode || mode.selectedIds.length < mode.min || mode.selectedIds.length > mode.max) return false;
    this.applyConsumableWithTargets(mode.consumable, mode.selectedIds);

    if (mode.source === 'inventory') {
      const idx = this.consumables.findIndex((card) => card.id === mode.sourceId);
      if (idx >= 0) this.consumables.splice(idx, 1);
      this.targetMode = null;
      this.emit();
      return true;
    }

    const choice = this.booster?.choices.find((item) => item.id === mode.choiceId);
    if (!choice) {
      this.targetMode = null;
      this.emit();
      return false;
    }
    this.targetMode = null;
    this.finishBoosterChoice(choice);
    return true;
  }

  getTargetCandidateCards(): PlayingCard[] {
    if (!this.targetMode) return [];
    return this.targetMode.candidateIds
      .map((id) => this.findRunCard(id))
      .filter((card): card is PlayingCard => Boolean(card))
      .map(cloneCard);
  }

  private makeTargetCandidateIds(): string[] {
    if (this.hand.length > 0) return this.hand.map((card) => card.id);
    const ids = this.ownedDeck.map((card) => card.id);
    return shuffle(ids, this.rng).slice(0, Math.min(this.config.handSize, ids.length));
  }

  private findRunCard(id: string): PlayingCard | null {
    return this.hand.find((card) => card.id === id)
      ?? this.deck.find((card) => card.id === id)
      ?? this.discardPile.find((card) => card.id === id)
      ?? this.ownedDeck.find((card) => card.id === id)
      ?? null;
  }

  private mutateCardEverywhere(id: string, mutate: (card: PlayingCard) => void) {
    for (const collection of [this.ownedDeck, this.hand, this.deck, this.discardPile]) {
      for (const card of collection) if (card.id === id) mutate(card);
    }
  }

  private destroyCardEverywhere(id: string) {
    this.ownedDeck = this.ownedDeck.filter((card) => card.id !== id);
    this.hand = this.hand.filter((card) => card.id !== id);
    this.deck = this.deck.filter((card) => card.id !== id);
    this.discardPile = this.discardPile.filter((card) => card.id !== id);
    this.selected.delete(id);
  }

  private applyConsumableWithTargets(card: ConsumableCard, targetIds: readonly string[]) {
    const effect = card.effect;
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
      const sorted = targetIds
        .slice()
        .sort((a, b) => this.targetMode!.candidateIds.indexOf(a) - this.targetMode!.candidateIds.indexOf(b));
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
      }
      return;
    }
    if (effect.kind === 'immolate-selected') {
      for (const id of targetIds) this.destroyCardEverywhere(id);
      this.money += effect.money;
    }
  }

  private createShopState(): ShopState {""",
)

# Legacy useConsumable delegates to new target-aware API only for immediate cards.
replace_once(
    "src/game/gameState.ts",
    """  useConsumable(consumableId: string): boolean {
    const idx = this.consumables.findIndex((card) => card.id === consumableId);
    if (idx < 0) return false;
    const [card] = this.consumables.splice(idx, 1);
    this.applyConsumable(card);
    this.emit();
    return true;
  }""",
    """  useConsumable(consumableId: string): boolean {
    return this.beginUseConsumable(consumableId) === 'applied';
  }""",
)

# Remove old random applyConsumable; keep upgradeHandLevel.
game_path = root / "src/game/gameState.ts"
game_source = game_path.read_text(encoding="utf-8")
old_start = game_source.find("  private applyConsumable(card: ConsumableCard) {")
old_end = game_source.find("  private upgradeHandLevel(type: PokerHandType) {", old_start)
if old_start < 0 or old_end < 0:
    raise SystemExit("Could not locate legacy applyConsumable")
game_source = game_source[:old_start] + game_source[old_end:]
game_path.write_text(game_source, encoding="utf-8")

# Blue Seal planet factory uses proper familiar planet name.
replace_once(
    "src/game/gameState.ts",
    """        const consumable: ConsumableCard = {
          id: this.makeRunId('blue-planet'),
          key: `planet-${lastHandType.toLowerCase().replaceAll(' ', '-')}`,
          name: `${lastHandType} Planet`,
          description: `Upgrade ${lastHandType} by 1 level.`,
          type: 'planet',
          price: 3,
          sellValue: 1,
          effect: { kind: 'planet', handType: lastHandType },
          edition: 'base',
        };""",
    """        const template = planetForHand(lastHandType);
        const consumable: ConsumableCard = {
          ...template,
          id: this.makeRunId('blue-planet'),
          sellValue: 1,
          effect: { ...template.effect },
          edition: 'base',
        };""",
)

# Purple Seal creates a real Tarot catalog entry.
start = (root / "src/game/gameState.ts").read_text(encoding="utf-8")
purple_start = start.find("  private makePurpleSealTarot(): ConsumableCard {")
purple_end = start.find("  openBooster(", purple_start)
if purple_start < 0 or purple_end < 0:
    raise SystemExit("Could not locate Purple Seal Tarot factory")
purple_block = """  private makePurpleSealTarot(): ConsumableCard {
    return this.makeConsumableFromCatalog(this.pick(TAROT_CATALOG));
  }

"""
start = start[:purple_start] + purple_block + start[purple_end:]
(root / "src/game/gameState.ts").write_text(start, encoding="utf-8")

# Reset new state.
replace_once(
    "src/game/gameState.ts",
    """    this.consumables = [];
    this.shop = null;
    this.shopVisit = 0;""",
    """    this.consumables = [];
    this.shop = null;
    this.booster = null;
    this.targetMode = null;
    this.vouchers = [];
    this.anteVoucher = null;
    this.lastCashout = null;
    this.shopVisit = 0;""",
)

# Old random target picker is obsolete now that consumables use explicit target mode.
game_path = root / "src/game/gameState.ts"
game_source = game_path.read_text(encoding="utf-8")
picker_start = game_source.find("  private pickOwnedDeckCard(")
picker_end = game_source.find("  private pick<T>(", picker_start)
if picker_start < 0 or picker_end < 0:
    raise SystemExit("Could not locate obsolete pickOwnedDeckCard")
game_source = game_source[:picker_start] + game_source[picker_end:]
game_path.write_text(game_source, encoding="utf-8")

# Snapshot V3.
replace_once(
    "src/game/gameState.ts",
    """  toSnapshot(): RunSnapshot {
    return {
      version: 2,""",
    """  toSnapshot(): RunSnapshot {
    return {
      version: 3,""",
)
replace_once(
    "src/game/gameState.ts",
    """      consumables: cloneConsumables(this.consumables),
      shop: cloneShop(this.shop),
    };""",
    """      consumables: cloneConsumables(this.consumables),
      shop: cloneShop(this.shop),
      booster: cloneBooster(this.booster),
      targetMode: cloneTargetMode(this.targetMode),
      vouchers: [...this.vouchers],
      anteVoucher: cloneVoucherOffer(this.anteVoucher),
      lastCashout: this.lastCashout ? { ...this.lastCashout } : null,
    };""",
)
replace_once(
    "src/game/gameState.ts",
    """    if (version !== 1 && version !== 2) {
      throw new Error(`Unsupported snapshot version: ${version}`);
    }""",
    """    if (version !== 1 && version !== 2 && version !== 3) {
      throw new Error(`Unsupported snapshot version: ${version}`);
    }""",
)
replace_once(
    "src/game/gameState.ts",
    """    this.shop = cloneShop(next.shop);
    this.shopVisit = next.shop?.visit ?? this.completedShopCount();
    this.lastScore = null;""",
    """    this.shop = cloneShop(next.shop);
    this.booster = cloneBooster(next.booster);
    this.targetMode = cloneTargetMode(next.targetMode);
    this.vouchers = [...next.vouchers];
    this.anteVoucher = cloneVoucherOffer(next.anteVoucher);
    this.lastCashout = next.lastCashout ? { ...next.lastCashout } : null;
    this.shopVisit = next.shop?.visit ?? this.completedShopCount();
    this.lastScore = null;""",
)
replace_once(
    "src/game/gameState.ts",
    "  private normalizeSnapshot(snapshot: RunSnapshot): RunSnapshotV2 {\n    if (snapshot.version === 2) return snapshot;",
    """  private normalizeSnapshot(snapshot: RunSnapshot): RunSnapshotV3 {
    if (snapshot.version === 3) return snapshot;
    if (snapshot.version === 2) {
      return {
        ...snapshot,
        version: 3,
        booster: null,
        targetMode: null,
        vouchers: [],
        anteVoucher: null,
        lastCashout: null,
      };
    }""",
)
replace_once(
    "src/game/gameState.ts",
    """    return {
      ...legacy,
      version: 2,""",
    """    return {
      ...legacy,
      version: 3,""",
)
replace_once(
    "src/game/gameState.ts",
    """      consumables: [],
      shop: null,
    };""",
    """      consumables: [],
      shop: null,
      booster: null,
      targetMode: null,
      vouchers: [],
      anteVoucher: null,
      lastCashout: null,
    };""",
)

# ---------------------------------------------------------------------------
# 4. UI HTML: shop boosters/voucher + booster and target overlays.
# ---------------------------------------------------------------------------
replace_once(
    "index.html",
    '<div id="shop-offers" class="shop-offers"></div>',
    """<div class="shop-market">
              <div class="shop-section-title">Cards</div>
              <div id="shop-offers" class="shop-offers"></div>
              <div class="shop-section-title">Booster Packs</div>
              <div id="shop-boosters" class="shop-boosters"></div>
              <div class="shop-section-title">Voucher</div>
              <div id="shop-voucher" class="shop-voucher"></div>
            </div>""",
)
replace_once(
    "index.html",
    """      <div id="overlay" class="overlay hidden">""",
    """      <div id="booster-overlay" class="booster-overlay hidden" data-testid="booster-overlay">
        <section class="booster-panel">
          <header class="booster-header">
            <div>
              <div id="booster-kind" class="booster-kicker">Arcana Pack</div>
              <h2 id="booster-name">Arcana Pack</h2>
            </div>
            <div id="booster-picks" class="booster-picks">Choose 1</div>
          </header>
          <div id="booster-choices" class="booster-choices"></div>
          <footer class="booster-footer">
            <button id="btn-booster-skip" class="btn btn-ghost" type="button">Skip</button>
          </footer>
        </section>
      </div>

      <div id="target-overlay" class="target-overlay hidden" data-testid="target-overlay">
        <section class="target-panel">
          <header>
            <div class="booster-kicker">Use Consumable</div>
            <h2 id="target-name">The Magician</h2>
            <p id="target-instruction">Select card(s)</p>
          </header>
          <div id="target-cards" class="target-cards"></div>
          <footer class="target-footer">
            <button id="btn-target-cancel" class="btn btn-ghost" type="button">Cancel</button>
            <button id="btn-target-confirm" class="btn btn-play" type="button">Use</button>
          </footer>
        </section>
      </div>

      <div id="overlay" class="overlay hidden">""",
)

# ---------------------------------------------------------------------------
# 5. Main UI/controller wiring.
# ---------------------------------------------------------------------------
replace_once(
    "src/main.ts",
    """const btnShopReroll = $<HTMLButtonElement>('btn-shop-reroll');
const btnShopNext = $<HTMLButtonElement>('btn-shop-next');""",
    """const btnShopReroll = $<HTMLButtonElement>('btn-shop-reroll');
const btnShopNext = $<HTMLButtonElement>('btn-shop-next');
const shopBoostersEl = $('shop-boosters');
const shopVoucherEl = $('shop-voucher');
const boosterOverlay = $('booster-overlay');
const boosterNameEl = $('booster-name');
const boosterKindEl = $('booster-kind');
const boosterPicksEl = $('booster-picks');
const boosterChoicesEl = $('booster-choices');
const btnBoosterSkip = $<HTMLButtonElement>('btn-booster-skip');
const targetOverlay = $('target-overlay');
const targetNameEl = $('target-name');
const targetInstructionEl = $('target-instruction');
const targetCardsEl = $('target-cards');
const btnTargetCancel = $<HTMLButtonElement>('btn-target-cancel');
const btnTargetConfirm = $<HTMLButtonElement>('btn-target-confirm');""",
)

# Inventory consumable Use is target-aware.
replace_once(
    "src/main.ts",
    """      use.addEventListener('click', () => {
        if (state.useConsumable(card.id)) {
          audio.play('chaching');
          updateHud();
        }
      });""",
    """      use.addEventListener('click', () => {
        const result = state.beginUseConsumable(card.id);
        if (result !== 'invalid') {
          audio.play(result === 'targeting' ? 'buttonClick' : 'chaching');
          updateHud();
        }
      });""",
)

replace_once(
    "src/main.ts",
    """function shopItemPrice(item: ShopItem): number {
  if (item.kind === 'joker') return item.joker.price;
  if (item.kind === 'consumable') return item.consumable.price;
  return item.price;
}

""",
    "",
)

# Shop UI uses discounted price.
replace_once(
    "src/main.ts",
    "    buy.textContent = offer.sold ? 'Sold' : `Buy $${shopItemPrice(offer.item)}`;",
    "    buy.textContent = offer.sold ? 'Sold' : `Buy $${state.shopPriceForItem(offer.item)}`;",
)

# Shop render packs/voucher and cashout kicker.
replace_once(
    "src/main.ts",
    """  shopOffersEl.replaceChildren();
  state.shop.offers.forEach((offer, index) => {""",
    """  const cashout = state.lastCashout;
  const kicker = shopPanel.querySelector<HTMLElement>('.shop-kicker');
  if (kicker) {
    kicker.textContent = cashout
      ? `Cashout $${cashout.total} · Blind $${cashout.blindReward} · Hands $${cashout.handsBonus} · Interest $${cashout.interest}`
      : 'Blind cleared';
  }

  shopOffersEl.replaceChildren();
  state.shop.offers.forEach((offer, index) => {""",
)

replace_once(
    "src/main.ts",
    """  shopInventoryEl.replaceChildren(
    renderShopCardInventory(state.jokers, state.jokerCapacity(), 'joker'),
    renderShopCardInventory(state.consumables, state.consumableCapacity(), 'consumable'),
  );
}""",
    """  shopBoostersEl.replaceChildren();
  state.shop.boosters.forEach((offer) => {
    const card = document.createElement('article');
    card.className = `booster-shop-card ${offer.type}${offer.sold ? ' sold' : ''}`;

    const kind = document.createElement('span');
    kind.className = 'booster-shop-kind';
    kind.textContent = offer.size === 'normal' ? offer.type : `${offer.size} · ${offer.type}`;

    const name = document.createElement('strong');
    name.textContent = offer.name;

    const desc = document.createElement('span');
    desc.textContent = offer.description;

    const open = document.createElement('button');
    open.className = 'shop-buy-btn';
    const price = state.boosterPrice(offer);
    open.disabled = offer.sold || state.money < price;
    open.textContent = offer.sold ? 'Opened' : `Buy & Open $${price}`;
    open.addEventListener('click', () => {
      if (state.openBooster(offer.id)) {
        audio.play('scorePop');
        updateHud();
      }
    });

    card.append(kind, name, desc, open);
    shopBoostersEl.appendChild(card);
  });

  shopVoucherEl.replaceChildren();
  const voucher = state.shop.voucher;
  if (voucher) {
    const card = document.createElement('article');
    card.className = `voucher-card${voucher.sold ? ' sold' : ''}`;
    const title = document.createElement('strong');
    title.textContent = voucher.name;
    const desc = document.createElement('span');
    desc.textContent = voucher.description;
    const buy = document.createElement('button');
    buy.className = 'shop-buy-btn';
    buy.disabled = voucher.sold || state.money < voucher.price;
    buy.textContent = voucher.sold ? 'Redeemed' : `Redeem $${voucher.price}`;
    buy.addEventListener('click', () => {
      if (state.buyVoucher()) {
        audio.play('chaching');
        updateHud();
      }
    });
    card.append(title, desc, buy);
    shopVoucherEl.appendChild(card);
  } else {
    const empty = document.createElement('div');
    empty.className = 'voucher-empty';
    empty.textContent = 'All Vouchers redeemed';
    shopVoucherEl.appendChild(empty);
  }

  shopInventoryEl.replaceChildren(
    renderShopCardInventory(state.jokers, state.jokerCapacity(), 'joker'),
    renderShopCardInventory(state.consumables, state.consumableCapacity(), 'consumable'),
  );
}""",
)

# Render booster and target overlays before updateHud.
replace_once(
    "src/main.ts",
    "function updateHud() {",
    """function rankLabel(card: PlayingCard): string {
  const rank = card.rank === 14 ? 'A' : card.rank === 13 ? 'K' : card.rank === 12 ? 'Q' : card.rank === 11 ? 'J' : String(card.rank);
  const suit = card.suit === 'spades' ? '♠' : card.suit === 'hearts' ? '♥' : card.suit === 'diamonds' ? '♦' : '♣';
  return `${rank}${suit}`;
}

function boosterItemName(item: ShopItem): string {
  return shopItemName(item);
}

function boosterItemDescription(item: ShopItem): string {
  return shopItemDescription(item);
}

function renderBooster() {
  const visible = state.phase === 'booster' && Boolean(state.booster);
  boosterOverlay.classList.toggle('hidden', !visible);
  if (!visible || !state.booster) return;

  boosterNameEl.textContent = state.booster.name;
  boosterKindEl.textContent = state.booster.type.toUpperCase();
  boosterPicksEl.textContent = `Choose ${state.booster.picksLeft}`;
  boosterChoicesEl.replaceChildren();

  state.booster.choices.forEach((choice) => {
    const card = document.createElement('article');
    card.className = `booster-choice ${choice.item.kind}${choice.taken ? ' taken' : ''}`;

    const type = document.createElement('span');
    type.className = 'booster-choice-type';
    type.textContent = choice.item.kind === 'consumable'
      ? choice.item.consumable.type
      : choice.item.kind === 'playing-card' ? 'playing card' : 'joker';

    const title = document.createElement('strong');
    title.textContent = boosterItemName(choice.item);

    const desc = document.createElement('span');
    desc.textContent = boosterItemDescription(choice.item);

    if (choice.item.kind === 'playing-card') {
      title.textContent = rankLabel(choice.item.card);
      desc.textContent = `${choice.item.description} · ${choice.item.card.enhancement} · ${choice.item.card.seal} · ${choice.item.card.edition}`;
    }

    const take = document.createElement('button');
    take.className = 'shop-buy-btn';
    take.disabled = choice.taken;
    take.textContent = choice.taken ? 'Taken' : (choice.item.kind === 'consumable' ? 'Use' : 'Take');
    take.addEventListener('click', () => {
      const result = state.chooseBooster(choice.id);
      if (result !== 'invalid') {
        audio.play(result === 'targeting' ? 'buttonClick' : 'chaching');
        updateHud();
      }
    });

    card.append(type, title, desc, take);
    boosterChoicesEl.appendChild(card);
  });
}

function renderTargetMode() {
  const mode = state.targetMode;
  targetOverlay.classList.toggle('hidden', !mode);
  if (!mode) return;

  targetNameEl.textContent = mode.consumable.name;
  targetInstructionEl.textContent = `${mode.instruction} (${mode.min}–${mode.max})`;
  targetCardsEl.replaceChildren();

  const selected = new Set(mode.selectedIds);
  state.getTargetCandidateCards().forEach((card) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `target-card${selected.has(card.id) ? ' selected' : ''}`;

    const rank = document.createElement('strong');
    rank.textContent = rankLabel(card);
    const mods = document.createElement('span');
    const details = [card.enhancement, card.seal, card.edition].filter((value) => value !== 'none' && value !== 'base');
    mods.textContent = details.length > 0 ? details.join(' · ') : 'Base card';

    button.append(rank, mods);
    button.addEventListener('click', () => {
      state.toggleTargetCard(card.id);
      updateHud();
    });
    targetCardsEl.appendChild(button);
  });

  btnTargetConfirm.disabled = mode.selectedIds.length < mode.min || mode.selectedIds.length > mode.max;
  btnTargetConfirm.textContent = `Use (${mode.selectedIds.length}/${mode.max})`;
}

function updateHud() {""",
)

replace_once(
    "src/main.ts",
    "  renderShop();\n}",
    "  renderShop();\n  renderBooster();\n  renderTargetMode();\n}",
)

# Add button listeners before shop reroll listener.
replace_once(
    "src/main.ts",
    "btnShopReroll.addEventListener",
    """btnBoosterSkip.addEventListener('click', () => {
  if (state.skipBooster()) {
    audio.play('buttonClick');
    updateHud();
  }
});
btnTargetCancel.addEventListener('click', () => {
  if (state.cancelTargetMode()) {
    audio.play('buttonClick');
    updateHud();
  }
});
btnTargetConfirm.addEventListener('click', () => {
  if (state.confirmTargetMode()) {
    audio.play('chaching');
    updateHud();
  }
});

btnShopReroll.addEventListener""",
)

# ESC closes target -> pack -> panel -> Kanban.
replace_once(
    "src/main.ts",
    """  if (event.code === 'Escape') {
    event.preventDefault();
    event.stopPropagation();
    if (activeGamePanel) closeGamePanel();
    else saveAndReturnToKanban();
    return;
  }""",
    """  if (event.code === 'Escape') {
    event.preventDefault();
    event.stopPropagation();
    if (state.targetMode) {
      state.cancelTargetMode();
      updateHud();
    } else if (state.phase === 'booster') {
      state.skipBooster();
      updateHud();
    } else if (activeGamePanel) {
      closeGamePanel();
    } else {
      saveAndReturnToKanban();
    }
    return;
  }""",
)

# ---------------------------------------------------------------------------
# 6. CSS: familiar pack/shop/target interaction.
# ---------------------------------------------------------------------------
style = root / "src/style.css"
with style.open("a", encoding="utf-8") as f:
    f.write(r"""
/* Balatro Shop + Booster parity */
.shop-market { min-width: 0; }
.shop-section-title {
  margin: 10px 0 6px;
  font-family: "Silkscreen", monospace;
  font-size: 10px;
  color: #f2d58f;
  text-transform: uppercase;
  letter-spacing: .08em;
}
.shop-boosters {
  display: grid;
  grid-template-columns: repeat(2, minmax(0,1fr));
  gap: 10px;
}
.booster-shop-card,
.voucher-card {
  display: flex;
  flex-direction: column;
  gap: 7px;
  padding: 11px;
  border: 2px solid #182627;
  border-radius: 12px;
  background: linear-gradient(180deg, #566c70, #34474b);
  box-shadow: 0 4px 0 #152224;
}
.booster-shop-card strong,
.voucher-card strong { font-family: "Silkscreen", monospace; font-size: 11px; color: #fff; }
.booster-shop-card > span:not(.booster-shop-kind),
.voucher-card > span { font-size: 12px; color: #d8e0e2; line-height: 1.35; }
.booster-shop-kind {
  width: max-content;
  padding: 3px 6px;
  border-radius: 5px;
  background: #d64035;
  color: #fff;
  font-family: "Silkscreen", monospace;
  font-size: 8px;
  text-transform: uppercase;
}
.booster-shop-card.celestial .booster-shop-kind { background: #4078cf; }
.booster-shop-card.standard .booster-shop-kind { background: #315b42; }
.booster-shop-card.buffoon .booster-shop-kind { background: #b47b20; }
.booster-shop-card.spectral .booster-shop-kind { background: #6744a4; }
.booster-shop-card.sold, .voucher-card.sold { opacity: .48; }
.voucher-card { background: linear-gradient(180deg,#75643d,#4b402a); }
.voucher-empty { padding: 12px; color: #aeb8ba; border: 1px dashed #607175; border-radius: 9px; }

.booster-overlay,
.target-overlay {
  position: absolute;
  inset: 0;
  z-index: 99980;
  display: grid;
  place-items: center;
  padding: 22px;
  background: rgba(20, 45, 43, .70);
  backdrop-filter: blur(4px);
}
.booster-overlay.hidden,
.target-overlay.hidden { display: none; }
.booster-panel,
.target-panel {
  width: min(920px, calc(100vw - 36px));
  max-height: min(88vh, 800px);
  overflow: auto;
  border: 4px solid #d9e1e4;
  border-radius: 18px;
  padding: 18px;
  background: linear-gradient(180deg,#3f5559,#2f4246);
  box-shadow: 0 10px 0 #142124, 0 20px 54px rgba(0,0,0,.48), inset 0 0 0 3px #63767a;
}
.booster-header,
.target-panel > header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 16px;
}
.booster-header h2,
.target-panel h2 { margin: 2px 0; color: #fff; font-family: "Silkscreen", monospace; font-size: 22px; }
.booster-kicker { color: #ffcf56; font-family: "Silkscreen", monospace; font-size: 9px; text-transform: uppercase; }
.booster-picks {
  padding: 9px 13px;
  border: 2px solid #7e280f;
  border-radius: 9px;
  background: #e95b34;
  color: #fff;
  font-family: "Silkscreen", monospace;
}
.booster-choices {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(145px,1fr));
  gap: 12px;
}
.booster-choice {
  min-height: 170px;
  display: flex;
  flex-direction: column;
  gap: 9px;
  padding: 14px;
  border: 3px solid #1b292c;
  border-radius: 13px;
  background: linear-gradient(180deg,#e0d5bb,#bcae90);
  color: #243236;
  box-shadow: 0 6px 0 #172326;
}
.booster-choice strong { font-family: "Silkscreen", monospace; font-size: 12px; }
.booster-choice > span:not(.booster-choice-type) { font-size: 12px; line-height: 1.35; flex: 1; }
.booster-choice-type {
  width: max-content;
  padding: 3px 6px;
  border-radius: 5px;
  background: #5d6b6e;
  color: #fff;
  font-family: "Silkscreen", monospace;
  font-size: 8px;
  text-transform: uppercase;
}
.booster-choice.taken { opacity: .42; filter: grayscale(.5); }
.booster-footer,
.target-footer { display: flex; justify-content: flex-end; gap: 10px; margin-top: 16px; }

.target-panel > header { display: block; }
.target-panel > header p { color: #d6e0e2; margin: 7px 0 0; }
.target-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(96px,1fr));
  gap: 10px;
}
.target-card {
  min-height: 118px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 3px solid #202f32;
  border-radius: 12px;
  background: #efe7d6;
  color: #253337;
  cursor: pointer;
  box-shadow: 0 5px 0 #172326;
}
.target-card strong { font-family: "Silkscreen", monospace; font-size: 22px; }
.target-card span { font-size: 10px; text-align: center; }
.target-card.selected {
  transform: translateY(-8px);
  border-color: #ffd24a;
  box-shadow: 0 8px 0 #8e6110, 0 0 24px rgba(255,210,74,.42);
}
@media (max-width: 760px) {
  .shop-boosters { grid-template-columns: 1fr; }
  .booster-overlay, .target-overlay { padding: 8px; }
  .booster-panel, .target-panel { width: calc(100vw - 16px); padding: 11px; }
  .booster-choices { grid-template-columns: repeat(2,minmax(0,1fr)); }
}
""")

# ---------------------------------------------------------------------------
# 7. Unit tests for L2.
# ---------------------------------------------------------------------------
tests = r"""import { describe, expect, it } from 'vitest';
import { GameState } from '../../src/game/gameState';
import type {
  BoosterOffer,
  ConsumableCard,
  RunSnapshotV3,
  ShopState,
} from '../../src/game/types';

function shopState(boosters: BoosterOffer[] = []): ShopState {
  return {
    visit: 1,
    offers: [],
    boosters,
    voucher: null,
    rerolls: 0,
    rerollCost: 5,
  };
}

describe('Balatro shop / booster parity', () => {
  it('targeted Tarot waits for card selection and mutates persistent deck', () => {
    const state = new GameState({ seed: 123 });
    const target = state.hand[0];
    const tarot: ConsumableCard = {
      id: 'tarot-test',
      key: 'the-empress',
      name: 'The Empress',
      description: '',
      type: 'tarot',
      price: 3,
      sellValue: 1,
      effect: { kind: 'enhance-selected', enhancement: 'mult', min: 1, max: 2 },
      edition: 'base',
    };
    state.consumables.push(tarot);

    expect(state.beginUseConsumable(tarot.id)).toBe('targeting');
    expect(state.toggleTargetCard(target.id)).toBe(true);
    expect(state.confirmTargetMode()).toBe(true);
    expect(state.consumables.find((c) => c.id === tarot.id)).toBeUndefined();
    expect(state.ownedDeck.find((c) => c.id === target.id)?.enhancement).toBe('mult');
  });

  it('Planet applies immediately with no target mode', () => {
    const state = new GameState({ seed: 456 });
    const before = state.handLevels.Straight.level;
    const planet: ConsumableCard = {
      id: 'saturn-test',
      key: 'saturn',
      name: 'Saturn',
      description: '',
      type: 'planet',
      price: 3,
      sellValue: 1,
      effect: { kind: 'planet', handType: 'Straight' },
      edition: 'base',
    };
    state.consumables.push(planet);
    expect(state.beginUseConsumable(planet.id)).toBe('applied');
    expect(state.handLevels.Straight.level).toBe(before + 1);
    expect(state.targetMode).toBeNull();
  });

  it('opening a booster enters booster phase and Skip returns to shop', () => {
    const state = new GameState({ seed: 789 });
    const snap = state.toSnapshot() as RunSnapshotV3;
    const offer: BoosterOffer = {
      id: 'arcana-1',
      type: 'arcana',
      size: 'normal',
      name: 'Arcana Pack',
      description: 'Choose 1 from 3.',
      price: 4,
      sold: false,
    };
    snap.phase = 'shop';
    snap.money = 20;
    snap.shop = shopState([offer]);
    snap.booster = null;
    snap.targetMode = null;
    state.loadSnapshot(snap);

    expect(state.openBooster(offer.id)).toBe(true);
    expect(state.phase).toBe('booster');
    expect(state.booster?.choices).toHaveLength(3);
    expect(state.skipBooster()).toBe(true);
    expect(state.phase).toBe('shop');
  });

  it('Mega pack gives two picks', () => {
    const state = new GameState({ seed: 321 });
    const snap = state.toSnapshot() as RunSnapshotV3;
    const offer: BoosterOffer = {
      id: 'mega-celestial',
      type: 'celestial',
      size: 'mega',
      name: 'Mega Celestial Pack',
      description: '',
      price: 8,
      sold: false,
    };
    snap.phase = 'shop';
    snap.money = 20;
    snap.shop = shopState([offer]);
    state.loadSnapshot(snap);

    expect(state.openBooster(offer.id)).toBe(true);
    expect(state.booster?.picksLeft).toBe(2);
    const first = state.booster!.choices[0];
    expect(state.chooseBooster(first.id)).toBe('applied');
    expect(state.phase).toBe('booster');
    expect(state.booster?.picksLeft).toBe(1);
  });

  it('Crystal Ball adds one consumable slot', () => {
    const state = new GameState({ seed: 11 });
    expect(state.consumableCapacity()).toBe(2);
    state.vouchers.push('crystal-ball');
    expect(state.consumableCapacity()).toBe(3);
  });

  it('V3 snapshot preserves booster and target mode', () => {
    const state = new GameState({ seed: 22 });
    const tarot: ConsumableCard = {
      id: 'tarot-save',
      key: 'the-hierophant',
      name: 'The Hierophant',
      description: '',
      type: 'tarot',
      price: 3,
      sellValue: 1,
      effect: { kind: 'enhance-selected', enhancement: 'bonus', min: 1, max: 2 },
      edition: 'base',
    };
    state.consumables.push(tarot);
    state.beginUseConsumable(tarot.id);
    const snap = state.toSnapshot();
    expect(snap.version).toBe(3);

    const restored = GameState.fromSnapshot(snap);
    expect(restored.targetMode?.consumable.name).toBe('The Hierophant');
    expect(restored.targetMode?.candidateIds.length).toBeGreaterThan(0);
  });
});
"""
(root / "tests/unit/balatroShopParity.test.ts").write_text(tests, encoding="utf-8")

print("Balatro Shop + Booster + Consumable parity patch applied.")
