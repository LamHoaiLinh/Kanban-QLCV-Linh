
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
