
from __future__ import annotations

import sys
from pathlib import Path

if len(sys.argv) != 2:
    raise SystemExit("Usage: balatro_mythic_ui.py <open-poker-root>")

root = Path(sys.argv[1]).resolve()

def replace_once(path: str, old: str, new: str) -> None:
    p = root / path
    s = p.read_text(encoding="utf-8")
    if old not in s:
        raise SystemExit(f"Mythic UI anchor not found in {path}: {old[:180]!r}")
    p.write_text(s.replace(old, new, 1), encoding="utf-8")

replace_once(
    "src/main.ts",
    """function shopItemKindLabel(item: ShopItem): string {
  if (item.kind === 'playing-card') return 'Deck Card';
  return item.kind;
}""",
    """function shopItemKindLabel(item: ShopItem): string {
  if (item.kind === 'playing-card') return 'Deck Card';
  if (item.kind === 'joker') return `${item.joker.rarity.toUpperCase()} JOKER`;
  return item.kind;
}""",
)

replace_once(
    "src/main.ts",
    """      slot.dataset.jokerId = joker.id;
      slot.textContent = shortName(joker.name);
      slot.title = `${joker.name} - ${joker.description} · Drag to reorder`;""",
    """      slot.dataset.jokerId = joker.id;
      slot.textContent = shortName(joker.name);
      if (joker.rarity === 'mythic') slot.classList.add('mythic');
      const live = state.jokerRuntimeText(joker.id);
      slot.title = `${joker.name} - ${joker.description}${live ? ` · ${live}` : ''} · Drag to reorder`;""",
)

replace_once(
    "src/main.ts",
    """function showItemInfo(card: JokerCard | ConsumableCard, type: 'joker' | 'consumable', anchor: HTMLElement) {
  itemInfoKind.textContent = type === 'joker'
    ? `${(card as JokerCard).rarity.toUpperCase()} JOKER`
    : (card as ConsumableCard).type.toUpperCase();
  itemInfoName.textContent = card.name;
  itemInfoDesc.textContent = card.description;

  const meta: string[] = [`Sell $${card.sellValue}`];
  if ((card.edition ?? 'base') !== 'base') meta.push(card.edition ?? 'base');
  if (type === 'joker') {
    const joker = card as JokerCard;
    if (joker.sticker === 'eternal') meta.push('Eternal · cannot sell');
    if (joker.sticker === 'perishable') meta.push(`Perishable · ${joker.perishableRounds ?? 0} rounds`);
    if (joker.rental) meta.push('Rental · -$3/round');
    if (joker.counter !== undefined) meta.push(`Current ${joker.counter}`);
    if (joker.suit) meta.push(`Target ${joker.suit}`);
  }
  itemInfoMeta.textContent = meta.join(' · ');""",
    """function showItemInfo(card: JokerCard | ConsumableCard, type: 'joker' | 'consumable', anchor: HTMLElement) {
  const joker = type === 'joker' ? card as JokerCard : null;
  itemInfo.dataset.rarity = joker?.rarity ?? 'consumable';
  itemInfo.dataset.jokerId = joker?.id ?? '';
  itemInfoKind.textContent = joker
    ? `${joker.rarity.toUpperCase()} JOKER`
    : (card as ConsumableCard).type.toUpperCase();
  itemInfoName.textContent = card.name;
  itemInfoDesc.textContent = card.description;

  const meta: string[] = [`Sell $${card.sellValue}`];
  if ((card.edition ?? 'base') !== 'base') meta.push(card.edition ?? 'base');
  if (joker) {
    if (joker.sticker === 'eternal') meta.push('Eternal · cannot sell');
    if (joker.sticker === 'perishable') meta.push(`Perishable · ${joker.perishableRounds ?? 0} rounds`);
    if (joker.rental) meta.push('Rental · -$3/round');
    const live = state.jokerRuntimeText(joker.id);
    if (live) meta.push(live);
  }
  itemInfoMeta.textContent = meta.join(' · ');""",
)

replace_once(
    "src/main.ts",
    """    card.className = `shop-offer ${offer.item.kind}${offer.sold ? ' sold' : ''}`;

    const kind = document.createElement('div');""",
    """    card.className = `shop-offer ${offer.item.kind}${offer.sold ? ' sold' : ''}`;
    if (offer.item.kind === 'joker' && offer.item.joker.rarity === 'mythic') {
      card.classList.add('mythic');
    }

    const kind = document.createElement('div');""",
)

replace_once(
    "src/main.ts",
    """    card.className = `booster-choice ${choice.item.kind}${choice.taken ? ' taken' : ''}`;

    const type = document.createElement('span');""",
    """    card.className = `booster-choice ${choice.item.kind}${choice.taken ? ' taken' : ''}`;
    if (choice.item.kind === 'joker' && choice.item.joker.rarity === 'mythic') {
      card.classList.add('mythic');
    }

    const type = document.createElement('span');""",
)

replace_once(
    "src/main.ts",
    """  renderSetup();
  renderBlindSelect();
  const restriction = state.playRestrictionMessage();""",
    """  renderSetup();
  renderBlindSelect();

  if (!itemInfo.classList.contains('hidden')) {
    const openJokerId = itemInfo.dataset.jokerId;
    if (openJokerId) {
      const openJoker = state.jokers.find((joker) => joker.id === openJokerId);
      if (openJoker) {
        const live = state.jokerRuntimeText(openJoker.id);
        const baseMeta = [`Sell $${openJoker.sellValue}`];
        if ((openJoker.edition ?? 'base') !== 'base') baseMeta.push(openJoker.edition ?? 'base');
        if (openJoker.sticker === 'eternal') baseMeta.push('Eternal · cannot sell');
        if (openJoker.sticker === 'perishable') baseMeta.push(`Perishable · ${openJoker.perishableRounds ?? 0} rounds`);
        if (openJoker.rental) baseMeta.push('Rental · -$3/round');
        if (live) baseMeta.push(live);
        itemInfoMeta.textContent = baseMeta.join(' · ');
      }
    }
  }

  const restriction = state.playRestrictionMessage();""",
)

style = root / "src/style.css"
with style.open("a", encoding="utf-8") as f:
    f.write(r"""
@keyframes mythic-shimmer {
  0% { background-position: 0% 50%; filter: saturate(1); }
  50% { background-position: 100% 50%; filter: saturate(1.18); }
  100% { background-position: 0% 50%; filter: saturate(1); }
}
.joker-slot.mythic {
  background:
    radial-gradient(circle at 50% 26%, rgba(255,255,255,.82) 0 7%, transparent 24%),
    linear-gradient(135deg,#3d1a66,#8b3fd4,#e5b84d,#5d2aa2,#2b1748);
  background-size: 220% 220%;
  color: #fff8d1;
  border-color: #f2ce69;
  box-shadow:
    inset 0 0 0 2px rgba(255,244,177,.5),
    0 4px 0 #1a0d29,
    0 0 18px rgba(180,91,255,.55);
  animation: mythic-shimmer 4.5s ease-in-out infinite;
}
.shop-offer.mythic,
.booster-choice.mythic {
  border-color: #e8c65b !important;
  background:
    radial-gradient(circle at 75% 18%, rgba(255,237,157,.18), transparent 30%),
    linear-gradient(145deg,#28143e,#4f276f 48%,#6f5120 110%) !important;
  box-shadow:
    0 5px 0 #13091e,
    inset 0 0 0 2px rgba(238,201,91,.56),
    0 0 24px rgba(151,75,219,.28) !important;
}
.shop-offer.mythic .shop-offer-kind,
.booster-choice.mythic .booster-choice-type {
  color: #ffe994 !important;
  text-shadow: 0 0 9px rgba(255,217,91,.65);
}
.item-info {
  transition: opacity .14s ease, transform .14s ease;
  transform-origin: top left;
}
.item-info:not(.hidden) {
  animation: item-info-pop .15s ease-out;
}
@keyframes item-info-pop {
  from { opacity: 0; transform: translateY(-5px) scale(.97); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
.item-info[data-rarity="mythic"] {
  border-color: #e6c151;
  background:
    radial-gradient(circle at 90% 10%, rgba(133,67,195,.22), transparent 35%),
    linear-gradient(180deg,#fff2c3,#dac78f);
  box-shadow: 0 7px 0 #3d2453, 0 16px 42px rgba(96,44,143,.5);
}
.item-info[data-rarity="mythic"] .item-info-kind {
  background: linear-gradient(135deg,#6732a3,#9b52d7,#b88825);
  color: #fff7cb;
  border: 1px solid rgba(255,236,148,.8);
}
@media (prefers-reduced-motion: reduce) {
  .joker-slot.mythic { animation: none; }
  .item-info:not(.hidden) { animation: none; }
}
""")

print("Mythic Joker UI + live tooltip applied.")
