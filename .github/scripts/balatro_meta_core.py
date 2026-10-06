
from __future__ import annotations

import sys
from pathlib import Path

if len(sys.argv) != 2:
    raise SystemExit("Usage: balatro_meta_core.py <open-poker-root>")

root = Path(sys.argv[1]).resolve()

def replace_once(path: str, old: str, new: str) -> None:
    p = root / path
    s = p.read_text(encoding="utf-8")
    if old not in s:
        raise SystemExit(f"Meta core anchor not found in {path}: {old[:180]!r}")
    p.write_text(s.replace(old, new, 1), encoding="utf-8")

# Complete Tag/Boss type keys.
replace_once(
    "src/game/types.ts",
    """export type TagKey =
  | 'investment'
  | 'coupon'
  | 'double'
  | 'juggle'
  | 'd6'
  | 'speed'
  | 'economy'
  | 'top-up'
  | 'boss';""",
    """export type TagKey =
  | 'uncommon' | 'rare' | 'negative' | 'foil' | 'holographic' | 'polychrome'
  | 'investment' | 'voucher' | 'boss' | 'standard' | 'charm' | 'meteor'
  | 'buffoon' | 'handy' | 'garbage' | 'ethereal' | 'coupon' | 'double'
  | 'juggle' | 'd6' | 'top-up' | 'speed' | 'orbital' | 'economy';""",
)

replace_once(
    "src/game/types.ts",
    """export type BossBlindKey =
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
  | 'flint';""",
    """export type BossBlindKey =
  | 'hook' | 'ox' | 'house' | 'wall' | 'wheel' | 'arm' | 'club' | 'fish'
  | 'psychic' | 'goad' | 'water' | 'window' | 'manacle' | 'eye' | 'mouth'
  | 'plant' | 'serpent' | 'pillar' | 'needle' | 'head' | 'tooth' | 'flint'
  | 'mark' | 'amber-acorn' | 'verdant-leaf' | 'violet-vessel'
  | 'crimson-heart' | 'cerulean-bell';""",
)

# Full Tag catalog.
game = root / "src/game/gameState.ts"
src = game.read_text(encoding="utf-8")
a = src.find("export const TAGS: Record<TagKey, TagDef> = {")
b = src.find("export const BOSS_BLINDS:", a)
if a < 0 or b < 0:
    raise SystemExit("Could not locate TAGS block")
tags = r"""export const TAGS: Record<TagKey, TagDef> = {
  uncommon: { key: 'uncommon', name: 'Uncommon Tag', description: 'Create a free Uncommon Joker if space exists.' },
  rare: { key: 'rare', name: 'Rare Tag', description: 'Create a free Rare Joker if space exists.' },
  negative: { key: 'negative', name: 'Negative Tag', description: 'Create a free Negative Joker.' },
  foil: { key: 'foil', name: 'Foil Tag', description: 'Create a free Foil Joker.' },
  holographic: { key: 'holographic', name: 'Holographic Tag', description: 'Create a free Holographic Joker.' },
  polychrome: { key: 'polychrome', name: 'Polychrome Tag', description: 'Create a free Polychrome Joker.' },
  investment: { key: 'investment', name: 'Investment Tag', description: 'Gain $25 after defeating the next Boss Blind.' },
  voucher: { key: 'voucher', name: 'Voucher Tag', description: 'Redeem a random unowned Voucher.' },
  boss: { key: 'boss', name: 'Boss Tag', description: 'Reroll the Boss Blind for this Ante.' },
  standard: { key: 'standard', name: 'Standard Tag', description: 'Add 2 random playing cards to the deck.' },
  charm: { key: 'charm', name: 'Charm Tag', description: 'Create a Tarot if room exists.' },
  meteor: { key: 'meteor', name: 'Meteor Tag', description: 'Create a Planet if room exists.' },
  buffoon: { key: 'buffoon', name: 'Buffoon Tag', description: 'Create a random unlocked Joker if room exists.' },
  handy: { key: 'handy', name: 'Handy Tag', description: 'Gain $1 for every Hand played this run.' },
  garbage: { key: 'garbage', name: 'Garbage Tag', description: 'Gain $1 for every Discard used this run.' },
  ethereal: { key: 'ethereal', name: 'Ethereal Tag', description: 'Create a Spectral if room exists.' },
  coupon: { key: 'coupon', name: 'Coupon Tag', description: 'Initial Shop cards and Booster Packs in the next Shop are free.' },
  double: { key: 'double', name: 'Double Tag', description: 'Copy the next non-Double Tag.' },
  juggle: { key: 'juggle', name: 'Juggle Tag', description: '+3 Hand Size for the next round.' },
  d6: { key: 'd6', name: 'D6 Tag', description: 'Next Shop starts with a free reroll.' },
  'top-up': { key: 'top-up', name: 'Top-up Tag', description: 'Create up to 2 Common Jokers if space exists.' },
  speed: { key: 'speed', name: 'Speed Tag', description: 'Gain $5 for every Blind skipped this run.' },
  orbital: { key: 'orbital', name: 'Orbital Tag', description: 'Upgrade the most-played Poker Hand by 3 levels.' },
  economy: { key: 'economy', name: 'Economy Tag', description: 'Double current money, adding at most $40.' },
};

"""
src = src[:a] + tags + src[b:]

a = src.find("export const BOSS_BLINDS: Record<BossBlindKey, BossBlindDef> = {")
b = src.find("const STAKE_CURVE_BASE", a)
if a < 0 or b < 0:
    raise SystemExit("Could not locate Boss block")
bosses = r"""export const BOSS_BLINDS: Record<BossBlindKey, BossBlindDef> = {
  hook: { key: 'hook', name: 'The Hook', description: 'Discards 2 random cards after each played hand.', targetMult: 2 },
  ox: { key: 'ox', name: 'The Ox', description: 'Playing your most-played Poker Hand sets money to $0.', targetMult: 2 },
  house: { key: 'house', name: 'The House', description: 'First hand is concealed.', targetMult: 2 },
  wall: { key: 'wall', name: 'The Wall', description: 'Very large Blind.', targetMult: 4 },
  wheel: { key: 'wheel', name: 'The Wheel', description: 'Some cards are concealed when drawn.', targetMult: 2 },
  arm: { key: 'arm', name: 'The Arm', description: 'Playing a hand lowers that Poker Hand by 1 level.', targetMult: 2 },
  club: { key: 'club', name: 'The Club', description: 'Club cards are debuffed.', targetMult: 2 },
  fish: { key: 'fish', name: 'The Fish', description: 'Cards drawn after a played hand are concealed.', targetMult: 2 },
  psychic: { key: 'psychic', name: 'The Psychic', description: 'You must play exactly 5 cards.', targetMult: 2 },
  goad: { key: 'goad', name: 'The Goad', description: 'Spade cards are debuffed.', targetMult: 2 },
  water: { key: 'water', name: 'The Water', description: 'Start this Blind with 0 Discards.', targetMult: 2 },
  window: { key: 'window', name: 'The Window', description: 'Diamond cards are debuffed.', targetMult: 2 },
  manacle: { key: 'manacle', name: 'The Manacle', description: '-1 Hand Size for this Blind.', targetMult: 2 },
  eye: { key: 'eye', name: 'The Eye', description: 'No Poker Hand may be played more than once this Blind.', targetMult: 2 },
  mouth: { key: 'mouth', name: 'The Mouth', description: 'After the first hand, only that Poker Hand may be played.', targetMult: 2 },
  plant: { key: 'plant', name: 'The Plant', description: 'Face cards are debuffed.', targetMult: 2 },
  serpent: { key: 'serpent', name: 'The Serpent', description: 'After Play or Discard, draw exactly 3 cards.', targetMult: 2 },
  pillar: { key: 'pillar', name: 'The Pillar', description: 'Cards played earlier this Ante are debuffed.', targetMult: 2 },
  needle: { key: 'needle', name: 'The Needle', description: 'Play only 1 Hand.', targetMult: 1 },
  head: { key: 'head', name: 'The Head', description: 'Heart cards are debuffed.', targetMult: 2 },
  tooth: { key: 'tooth', name: 'The Tooth', description: 'Lose $1 for every card played.', targetMult: 2 },
  flint: { key: 'flint', name: 'The Flint', description: 'Base Chips and Mult are halved.', targetMult: 2 },
  mark: { key: 'mark', name: 'The Mark', description: 'Face cards are concealed.', targetMult: 2 },
  'amber-acorn': { key: 'amber-acorn', name: 'Amber Acorn', description: 'Joker order is shuffled at Blind start.', targetMult: 2 },
  'verdant-leaf': { key: 'verdant-leaf', name: 'Verdant Leaf', description: 'All cards are debuffed until a Joker is sold.', targetMult: 2 },
  'violet-vessel': { key: 'violet-vessel', name: 'Violet Vessel', description: 'Extremely large Blind.', targetMult: 6 },
  'crimson-heart': { key: 'crimson-heart', name: 'Crimson Heart', description: 'One random Joker is debuffed each hand.', targetMult: 2 },
  'cerulean-bell': { key: 'cerulean-bell', name: 'Cerulean Bell', description: 'One random card is forced selected.', targetMult: 2 },
};

const SHOWDOWN_BOSS_KEYS: BossBlindKey[] = ['amber-acorn','verdant-leaf','violet-vessel','crimson-heart','cerulean-bell'];
const REGULAR_BOSS_KEYS: BossBlindKey[] = (Object.keys(BOSS_BLINDS) as BossBlindKey[]).filter((key) => !SHOWDOWN_BOSS_KEYS.includes(key));

"""
src = src[:a] + bosses + src[b:]
src = src.replace("const BOSS_KEYS = Object.keys(BOSS_BLINDS) as BossBlindKey[];\n", "")
game.write_text(src, encoding="utf-8")

# Export Joker catalog for Collection/meta logic.
replace_once(
    "src/game/gameState.ts",
    """export const MYTHIC_JOKER_COUNT = JOKER_TEMPLATES.filter((joker) => joker.rarity === 'mythic').length;
export const JOKER_LIBRARY_SIZE = JOKER_TEMPLATES.length;""",
    """export const MYTHIC_JOKER_COUNT = JOKER_TEMPLATES.filter((joker) => joker.rarity === 'mythic').length;
export const JOKER_LIBRARY_SIZE = JOKER_TEMPLATES.length;
export const JOKER_CATALOG = JOKER_TEMPLATES.map((joker) => ({
  key: joker.key, name: joker.name, description: joker.description,
  rarity: joker.rarity, price: joker.price,
}));""",
)

# Meta-controlled Joker pool.
replace_once(
    "src/game/gameState.ts",
    """  handsPlayedRun = 0;

  private shopVisit = 0;""",
    """  handsPlayedRun = 0;
  discardsUsedRun = 0;
  antePlayedCardIds = new Set<string>();
  verdantLeafActive = false;
  crimsonDebuffedJokerId: string | null = null;
  bossForcedCardId: string | null = null;
  private unlockedJokerKeys: Set<string> | null = null;

  private shopVisit = 0;""",
)

replace_once(
    "src/game/gameState.ts",
    """  currentSkipTag(): TagKey | null {""",
    """  setUnlockedJokerKeys(keys: readonly string[] | null) {
    this.unlockedJokerKeys = keys ? new Set(keys) : null;
  }

  createJokerByKey(key: string, allowStickers = false): JokerCard | null {
    const template = JOKER_TEMPLATES.find((joker) => joker.key === key);
    return template ? this.makeJokerFromTemplate(template, allowStickers) : null;
  }

  currentSkipTag(): TagKey | null {""",
)

# Seeded runs.
replace_once(
    "src/game/gameState.ts",
    "  configureRun(deckKey: DeckKey, stakeKey: StakeKey) {",
    """  configureRun(deckKey: DeckKey, stakeKey: StakeKey, seed?: number) {
    if (typeof seed === 'number' && Number.isFinite(seed)) {
      this.config.seed = Math.max(1, Math.floor(seed)) >>> 0;
      this.rng = this.createTrackedRng(this.config.seed);
    }""",
)

replace_once(
    "src/game/gameState.ts",
    """    this.juggleNextBlind = 0;
    this.handsPlayedRun = 0;
    this.handPlayCounts = Object.fromEntries(""",
    """    this.juggleNextBlind = 0;
    this.handsPlayedRun = 0;
    this.discardsUsedRun = 0;
    this.antePlayedCardIds.clear();
    this.verdantLeafActive = false;
    this.crimsonDebuffedJokerId = null;
    this.bossForcedCardId = null;
    this.handPlayCounts = Object.fromEntries(""",
)

replace_once(
    "src/game/gameState.ts",
    """  private rollAnteOptions() {
    this.anteTags = [this.pick(TAG_KEYS), this.pick(TAG_KEYS)];
    this.bossBlindKey = this.pick(BOSS_KEYS);
  }""",
    """  private rollAnteOptions() {
    this.anteTags = [this.pick(TAG_KEYS), this.pick(TAG_KEYS)];
    this.bossBlindKey = this.ante === 8 ? this.pick(SHOWDOWN_BOSS_KEYS) : this.pick(REGULAR_BOSS_KEYS);
  }""",
)

print("Balatro meta core stage 1 applied.")


# ---------------------------------------------------------------------------
# Stage 2: Tag effects, unlock-filtered generation, missing Boss behavior.
# ---------------------------------------------------------------------------

# Complete Tag behavior and helper pools.
src = game.read_text(encoding="utf-8")
a = src.find("  private applySingleTag(tag: Exclude<TagKey, 'double'>) {")
b = src.find("  targetForPreview(): number {", a)
if a < 0 or b < 0:
    raise SystemExit("Could not locate applySingleTag")

tag_logic = r"""  private availableJokerTemplates(rarity?: JokerRarity): JokerTemplate[] {
    let pool = JOKER_TEMPLATES;
    if (this.unlockedJokerKeys) pool = pool.filter((joker) => this.unlockedJokerKeys!.has(joker.key));
    if (rarity) pool = pool.filter((joker) => joker.rarity === rarity);
    return pool;
  }

  private addTaggedJoker(rarity: JokerRarity | null, edition: Edition = 'base'): boolean {
    const bonus = edition === 'negative' ? 1 : 0;
    if (this.jokers.length >= this.jokerCapacity() + bonus) return false;
    const pool = this.availableJokerTemplates(rarity ?? undefined);
    if (pool.length === 0) return false;
    const joker = this.makeJokerFromTemplate(this.pick(pool), false);
    joker.edition = edition;
    this.jokers.push(joker);
    return true;
  }

  private addTagConsumable(type: ConsumableCard['type']) {
    if (this.consumables.length >= this.consumableCapacity()) return;
    const catalog = type === 'tarot' ? TAROT_CATALOG : type === 'planet' ? PLANET_CATALOG : SPECTRAL_CATALOG;
    this.consumables.push(this.makeConsumableFromCatalog(this.pick(catalog)));
  }

  private mostPlayedHandType(): PokerHandType {
    return (Object.keys(this.handPlayCounts) as PokerHandType[])
      .sort((a, b) => (this.handPlayCounts[b] ?? 0) - (this.handPlayCounts[a] ?? 0))[0] ?? 'High Card';
  }

  private grantVoucherKey(key: VoucherKey): boolean {
    if (this.vouchers.includes(key)) return false;
    this.vouchers.push(key);
    if (key === 'grabber') this.config.handsPerRound += 1;
    if (key === 'wasteful') this.config.discardsPerRound += 1;
    return true;
  }

  private applySingleTag(tag: Exclude<TagKey, 'double'>) {
    if (tag === 'uncommon') this.addTaggedJoker('uncommon');
    else if (tag === 'rare') this.addTaggedJoker('rare');
    else if (tag === 'negative') this.addTaggedJoker(null, 'negative');
    else if (tag === 'foil') this.addTaggedJoker(null, 'foil');
    else if (tag === 'holographic') this.addTaggedJoker(null, 'holographic');
    else if (tag === 'polychrome') this.addTaggedJoker(null, 'polychrome');
    else if (tag === 'investment') this.investmentTags += 1;
    else if (tag === 'voucher') {
      const unowned = (Object.keys(VOUCHERS) as VoucherKey[]).filter((key) => !this.vouchers.includes(key));
      if (unowned.length > 0) this.grantVoucherKey(this.pick(unowned));
    } else if (tag === 'coupon') this.couponNextShop = true;
    else if (tag === 'juggle') this.juggleNextBlind += 3;
    else if (tag === 'd6') this.d6NextShop = true;
    else if (tag === 'speed') this.money += Math.max(5, this.skippedBlinds * 5);
    else if (tag === 'economy') this.money += Math.min(40, Math.max(0, this.money));
    else if (tag === 'standard') {
      const standard = buildStandardDeck();
      for (let i = 0; i < 2; i++) {
        const picked = this.pick(standard);
        this.ownedDeck.push({ ...picked, id: this.makeRunId('tag-card') });
      }
    } else if (tag === 'charm') this.addTagConsumable('tarot');
    else if (tag === 'meteor') this.addTagConsumable('planet');
    else if (tag === 'ethereal') this.addTagConsumable('spectral');
    else if (tag === 'buffoon') this.addTaggedJoker(null);
    else if (tag === 'handy') this.money += this.handsPlayedRun;
    else if (tag === 'garbage') this.money += this.discardsUsedRun;
    else if (tag === 'orbital') {
      const type = this.mostPlayedHandType();
      for (let i = 0; i < 3; i++) this.upgradeHandLevel(type);
    } else if (tag === 'top-up') {
      const common = this.availableJokerTemplates('common');
      for (let i = 0; i < 2 && common.length > 0 && this.jokers.length < this.jokerCapacity(); i++) {
        this.jokers.push(this.makeJokerFromTemplate(this.pick(common), false));
      }
    } else if (tag === 'boss') {
      const pool = this.ante === 8 ? SHOWDOWN_BOSS_KEYS : REGULAR_BOSS_KEYS;
      const choices = pool.filter((key) => key !== this.bossBlindKey);
      if (choices.length > 0) this.bossBlindKey = this.pick(choices);
    }
  }

"""
src = src[:a] + tag_logic + src[b:]
game.write_text(src, encoding="utf-8")

# Natural shops/Buffoon obey meta unlocks.
replace_once(
    "src/game/gameState.ts",
    """    const pool = JOKER_TEMPLATES.filter((template) => template.rarity === rarity);
    return { kind: 'joker', joker: this.makeJokerFromTemplate(this.pick(pool.length ? pool : JOKER_TEMPLATES)) };""",
    """    const pool = this.availableJokerTemplates(rarity);
    const fallback = this.availableJokerTemplates();
    const chosen = pool.length ? pool : fallback.length ? fallback : JOKER_TEMPLATES.filter((joker) => joker.rarity === 'common');
    return { kind: 'joker', joker: this.makeJokerFromTemplate(this.pick(chosen)) };""",
)

# Boss debuffs: Club, Pillar, Verdant Leaf.
replace_once(
    "src/game/gameState.ts",
    """    if (this.bossBlindKey === 'plant' && card.rank >= 11 && card.rank <= 13) return true;
    return false;""",
    """    if (this.bossBlindKey === 'plant' && card.rank >= 11 && card.rank <= 13) return true;
    if (this.bossBlindKey === 'club' && card.suit === 'clubs') return true;
    if (this.bossBlindKey === 'pillar' && this.antePlayedCardIds.has(card.id)) return true;
    if (this.bossBlindKey === 'verdant-leaf' && this.verdantLeafActive) return true;
    return false;""",
)

replace_once(
    "src/game/gameState.ts",
    """    const bossDebuffSuits: Suit[] = boss === 'goad' ? ['spades']
      : boss === 'window' ? ['diamonds']
      : boss === 'head' ? ['hearts']
      : [];""",
    """    const bossDebuffSuits: Suit[] = boss === 'goad' ? ['spades']
      : boss === 'window' ? ['diamonds']
      : boss === 'head' ? ['hearts']
      : boss === 'club' ? ['clubs']
      : [];""",
)

replace_once(
    "src/game/gameState.ts",
    """  isJokerDebuffed(joker: JokerCard): boolean {
    if (joker.sticker === 'perishable' && (joker.perishableRounds ?? 0) <= 0) return true;
    return this.blindIndex === 2
      && this.bossBlindKey === 'crimson-heart'
      && this.crimsonDebuffedJokerId === joker.id;
  }""",
    """  isJokerDebuffed(joker: JokerCard): boolean {
    if (joker.sticker === 'perishable' && (joker.perishableRounds ?? 0) <= 0) return true;
    return this.blindIndex === 2 && this.bossBlindKey === 'crimson-heart' && this.crimsonDebuffedJokerId === joker.id;
  }""",
)

# If old L4 exact parity has not yet extended isJokerDebuffed with Crimson, patch the simpler form.
p = root / "src/game/gameState.ts"
s = p.read_text(encoding="utf-8")
simple = """  isJokerDebuffed(joker: JokerCard): boolean {
    return joker.sticker === 'perishable' && (joker.perishableRounds ?? 0) <= 0;
  }"""
if simple in s:
    s = s.replace(simple, """  isJokerDebuffed(joker: JokerCard): boolean {
    if (joker.sticker === 'perishable' && (joker.perishableRounds ?? 0) <= 0) return true;
    return this.blindIndex === 2 && this.bossBlindKey === 'crimson-heart' && this.crimsonDebuffedJokerId === joker.id;
  }""", 1)
    p.write_text(s, encoding="utf-8")

# Boss start behaviors that affect game logic rather than only visuals.
replace_once(
    "src/game/gameState.ts",
    """    this.drawToFull();

    this.phase = 'play';""",
    """    this.drawToFull();

    if (this.blindIndex === 2) {
      if (this.bossBlindKey === 'amber-acorn' && this.jokers.length > 1) this.jokers = shuffle(this.jokers, this.rng);
      if (this.bossBlindKey === 'verdant-leaf') this.verdantLeafActive = true;
      if (this.bossBlindKey === 'crimson-heart') this.crimsonDebuffedJokerId = this.jokers.length ? this.pick(this.jokers).id : null;
      if (this.bossBlindKey === 'cerulean-bell') {
        this.bossForcedCardId = this.hand.length ? this.pick(this.hand).id : null;
        if (this.bossForcedCardId) this.selected.add(this.bossForcedCardId);
      }
    }

    this.phase = 'play';""",
)

# Forced selection cannot be removed.
replace_once(
    "src/game/gameState.ts",
    """    if (this.selected.has(cardId)) {
      this.selected.delete(cardId);
      this.emit();
      return false;
    }""",
    """    if (this.selected.has(cardId)) {
      if (this.blindIndex === 2 && this.bossBlindKey === 'cerulean-bell' && this.bossForcedCardId === cardId) return true;
      this.selected.delete(cardId);
      this.emit();
      return false;
    }""",
)

replace_once(
    "src/game/gameState.ts",
    """    if (this.bossBlindKey === 'psychic' && selected.length !== 5) return 'The Psychic: play exactly 5 cards';""",
    """    if (this.bossBlindKey === 'psychic' && selected.length !== 5) return 'The Psychic: play exactly 5 cards';
    if (this.bossBlindKey === 'cerulean-bell' && this.bossForcedCardId && !this.selected.has(this.bossForcedCardId)) {
      return 'Cerulean Bell: the forced card must be played';
    }""",
)

# Ox/Pillar/Crimson post-hand state.
replace_once(
    "src/game/gameState.ts",
    """    if (this.blindIndex === 2 && this.bossBlindKey === 'tooth') {
      this.money -= cards.length;
      breakdown.moneyDelta -= cards.length;
    }""",
    """    if (this.blindIndex === 2 && this.bossBlindKey === 'tooth') {
      this.money -= cards.length;
      breakdown.moneyDelta -= cards.length;
    }
    if (this.blindIndex === 2 && this.bossBlindKey === 'ox' && hand.type === this.mostPlayedHandType()) this.money = 0;
    for (const card of cards) this.antePlayedCardIds.add(card.id);
    if (this.blindIndex === 2 && this.bossBlindKey === 'crimson-heart') {
      this.crimsonDebuffedJokerId = this.jokers.length ? this.pick(this.jokers).id : null;
    }""",
)

# Hook / Serpent after-play draw behavior.
replace_once(
    "src/game/gameState.ts",
    """    } else {
      this.drawToFull();
    }

    this.emit();
    return breakdown;""",
    """    } else {
      if (this.blindIndex === 2 && this.bossBlindKey === 'hook') {
        for (let i = 0; i < 2 && this.hand.length > 0; i++) {
          const idx = Math.floor(this.rng() * this.hand.length);
          const [hooked] = this.hand.splice(idx, 1);
          this.discardPile.push(hooked);
        }
      }
      if (this.blindIndex === 2 && this.bossBlindKey === 'serpent') {
        for (let i = 0; i < 3 && this.deck.length > 0; i++) this.hand.push(this.deck.pop()!);
      } else {
        this.drawToFull();
      }
      if (this.blindIndex === 2 && this.bossBlindKey === 'cerulean-bell') {
        this.bossForcedCardId = this.hand.length ? this.pick(this.hand).id : null;
        if (this.bossForcedCardId) this.selected.add(this.bossForcedCardId);
      }
    }

    this.emit();
    return breakdown;""",
)

# Discard counter and Serpent behavior.
replace_once(
    "src/game/gameState.ts",
    """    this.discardsLeft -= 1;
    this.selected.clear();""",
    """    this.discardsLeft -= 1;
    this.discardsUsedRun += 1;
    this.selected.clear();""",
)

replace_once(
    "src/game/gameState.ts",
    """    this.drawToFull();
    this.emit();
    return cards;""",
    """    if (this.blindIndex === 2 && this.bossBlindKey === 'serpent') {
      for (let i = 0; i < 3 && this.deck.length > 0; i++) this.hand.push(this.deck.pop()!);
    } else {
      this.drawToFull();
    }
    if (this.blindIndex === 2 && this.bossBlindKey === 'cerulean-bell') {
      this.bossForcedCardId = this.hand.length ? this.pick(this.hand).id : null;
      if (this.bossForcedCardId) this.selected.add(this.bossForcedCardId);
    }
    this.emit();
    return cards;""",
)

# Verdant Leaf ends after selling any Joker.
replace_once(
    "src/game/gameState.ts",
    """    this.money += this.jokers[idx].sellValue;
    this.jokers.splice(idx, 1);""",
    """    this.money += this.jokers[idx].sellValue;
    this.jokers.splice(idx, 1);
    if (this.blindIndex === 2 && this.bossBlindKey === 'verdant-leaf') this.verdantLeafActive = false;""",
)

# Voucher Tag and shop purchase share permanent voucher application.
replace_once(
    "src/game/gameState.ts",
    """    if (!this.vouchers.includes(voucher.key)) this.vouchers.push(voucher.key);

    if (voucher.key === 'grabber') this.config.handsPerRound += 1;
    if (voucher.key === 'wasteful') this.config.discardsPerRound += 1;""",
    """    this.grantVoucherKey(voucher.key);""",
)

# Pillar history resets each new Ante.
replace_once(
    "src/game/gameState.ts",
    """      this.blindIndex = 0;
      this.ante += 1;
      this.anteVoucher = null;""",
    """      this.blindIndex = 0;
      this.ante += 1;
      this.anteVoucher = null;
      this.antePlayedCardIds.clear();""",
)

print("Balatro meta core stage 2 applied.")


# ---------------------------------------------------------------------------
# Stage 3: concealment visuals + save/restore stability for Boss runtime.
# ---------------------------------------------------------------------------

replace_once(
    "src/game/types.ts",
    """  handsPlayedRun: number;
}""",
    """  handsPlayedRun: number;
  discardsUsedRun: number;
  antePlayedCardIds: string[];
  bossFaceDownCardIds: string[];
  verdantLeafActive: boolean;
  crimsonDebuffedJokerId: string | null;
  bossForcedCardId: string | null;
}""",
)

replace_once(
    "src/game/gameState.ts",
    """  antePlayedCardIds = new Set<string>();
  verdantLeafActive = false;""",
    """  antePlayedCardIds = new Set<string>();
  bossFaceDownCardIds = new Set<string>();
  verdantLeafActive = false;""",
)

replace_once(
    "src/game/gameState.ts",
    """  bossForcedCardId: string | null = null;
  private unlockedJokerKeys: Set<string> | null = null;""",
    """  bossForcedCardId: string | null = null;
  private concealNextDraw = false;
  private unlockedJokerKeys: Set<string> | null = null;""",
)

replace_once(
    "src/game/gameState.ts",
    """    this.antePlayedCardIds.clear();
    this.verdantLeafActive = false;""",
    """    this.antePlayedCardIds.clear();
    this.bossFaceDownCardIds.clear();
    this.verdantLeafActive = false;""",
)

replace_once(
    "src/game/gameState.ts",
    """  drawToFull() {
    while (this.hand.length < this.roundHandSize && this.deck.length > 0) {
      this.hand.push(this.deck.pop()!);
    }
  }""",
    """  private drawBossCards(count: number) {
    for (let i = 0; i < count && this.deck.length > 0; i++) {
      const card = this.deck.pop()!;
      this.hand.push(card);
      if (this.blindIndex !== 2) continue;
      if (this.bossBlindKey === 'wheel' && this.rng() < 1 / 7) this.bossFaceDownCardIds.add(card.id);
      if (this.bossBlindKey === 'mark' && card.rank >= 11 && card.rank <= 13) this.bossFaceDownCardIds.add(card.id);
      if (this.bossBlindKey === 'fish' && this.concealNextDraw) this.bossFaceDownCardIds.add(card.id);
    }
    this.concealNextDraw = false;
  }

  drawToFull() {
    this.drawBossCards(Math.max(0, this.roundHandSize - this.hand.length));
  }""",
)

replace_once(
    "src/game/gameState.ts",
    """    this.drawToFull();

    if (this.blindIndex === 2) {""",
    """    this.drawToFull();

    if (this.blindIndex === 2) {
      if (this.bossBlindKey === 'house') for (const card of this.hand) this.bossFaceDownCardIds.add(card.id);""",
)

replace_once(
    "src/game/gameState.ts",
    """    } else {
      if (this.blindIndex === 2 && this.bossBlindKey === 'hook') {""",
    """    } else {
      if (this.blindIndex === 2 && this.bossBlindKey === 'fish') this.concealNextDraw = true;
      if (this.blindIndex === 2 && this.bossBlindKey === 'hook') {""",
)

replace_once(
    "src/game/gameState.ts",
    """      if (this.blindIndex === 2 && this.bossBlindKey === 'serpent') {
        for (let i = 0; i < 3 && this.deck.length > 0; i++) this.hand.push(this.deck.pop()!);
      } else {""",
    """      if (this.blindIndex === 2 && this.bossBlindKey === 'serpent') {
        this.drawBossCards(3);
      } else {""",
)

replace_once(
    "src/game/gameState.ts",
    """    if (this.blindIndex === 2 && this.bossBlindKey === 'serpent') {
      for (let i = 0; i < 3 && this.deck.length > 0; i++) this.hand.push(this.deck.pop()!);
    } else {""",
    """    if (this.blindIndex === 2 && this.bossBlindKey === 'serpent') {
      this.drawBossCards(3);
    } else {""",
)

replace_once(
    "src/game/gameState.ts",
    """  currentSkipTag(): TagKey | null {""",
    """  isCardFaceDown(cardId: string): boolean {
    return this.bossFaceDownCardIds.has(cardId);
  }

  currentSkipTag(): TagKey | null {""",
)

replace_once(
    "src/game/gameState.ts",
    """      handsPlayedRun: this.handsPlayedRun,
    };""",
    """      handsPlayedRun: this.handsPlayedRun,
      discardsUsedRun: this.discardsUsedRun,
      antePlayedCardIds: [...this.antePlayedCardIds],
      bossFaceDownCardIds: [...this.bossFaceDownCardIds],
      verdantLeafActive: this.verdantLeafActive,
      crimsonDebuffedJokerId: this.crimsonDebuffedJokerId,
      bossForcedCardId: this.bossForcedCardId,
    };""",
)

replace_once(
    "src/game/gameState.ts",
    """    this.handsPlayedRun = next.handsPlayedRun;
    this.shopVisit = next.shop?.visit ?? this.completedShopCount();""",
    """    this.handsPlayedRun = next.handsPlayedRun;
    this.discardsUsedRun = next.discardsUsedRun ?? 0;
    this.antePlayedCardIds = new Set(next.antePlayedCardIds ?? []);
    this.bossFaceDownCardIds = new Set(next.bossFaceDownCardIds ?? []);
    this.verdantLeafActive = next.verdantLeafActive ?? false;
    this.crimsonDebuffedJokerId = next.crimsonDebuffedJokerId ?? null;
    this.bossForcedCardId = next.bossForcedCardId ?? null;
    this.shopVisit = next.shop?.visit ?? this.completedShopCount();""",
)

replace_once(
    "src/game/gameState.ts",
    """      handsPlayedRun: 0,
    };
  }""",
    """      handsPlayedRun: 0,
      discardsUsedRun: 0,
      antePlayedCardIds: [],
      bossFaceDownCardIds: [],
      verdantLeafActive: false,
      crimsonDebuffedJokerId: null,
      bossForcedCardId: null,
    };
  }""",
)

# Insert setFaceDown immediately before the moveTo method (avoid relying on comments).
replace_once(
    "src/render/CardObject.ts",
    """  moveTo(target: { x: number; y: number; z?: number; rotZ?: number }, duration = 0.45, delay = 0) {""",
    """  setFaceDown(hidden: boolean) {
    const front = this.faceMesh.material as THREE.MeshStandardMaterial;
    front.map = hidden ? getBackTexture() : getCardTexture(this.card);
    front.needsUpdate = true;
  }

  moveTo(target: { x: number; y: number; z?: number; rotZ?: number }, duration = 0.45, delay = 0) {""",
)

replace_once(
    "src/main.ts",
    """function reflowHand(duration = 0.4) {
  applyActiveHandSort();
  syncHandOrder();""",
    """function reflowHand(duration = 0.4) {
  applyActiveHandSort();
  syncHandOrder();
  for (const card of state.hand) objects.get(card.id)?.setFaceDown(state.isCardFaceDown(card.id));""",
)

print("Balatro meta core stage 3 applied.")
