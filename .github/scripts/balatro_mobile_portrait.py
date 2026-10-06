from __future__ import annotations
import sys
from pathlib import Path

if len(sys.argv) != 2:
    raise SystemExit("Usage: balatro_mobile_portrait.py <open-poker-root>")

root = Path(sys.argv[1]).resolve()

def replace_once(path: str, old: str, new: str) -> None:
    p = root / path
    s = p.read_text(encoding="utf-8")
    if old not in s:
        raise SystemExit(f"Mobile portrait anchor not found in {path}: {old[:180]!r}")
    p.write_text(s.replace(old, new, 1), encoding="utf-8")

replace_once(
    "index.html",
    '<meta name="viewport" content="width=device-width, initial-scale=1.0" />',
    '<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />',
)

main = root / "src/main.ts"
s = main.read_text(encoding="utf-8")
old = """function updateResponsiveHudVars() {
  const width = window.innerWidth || 1280;
  const height = window.innerHeight || 720;
  const scale = clamp(Math.min(width / 1280, height / 900), 0.72, 1);
  const edge = Math.round(14 * scale);
  const sidebarWidth = 260;
  const topGap = 16 * scale;
  const hudTopLeft = edge + sidebarWidth * scale + topGap;
  const hudTopWidth = Math.max(320, (width - hudTopLeft - edge) / scale);
  const sidebarHeight = Math.max(360, (height - edge * 2) / scale);

  const root = document.documentElement;
  root.style.setProperty('--ui-scale', scale.toFixed(3));
  root.style.setProperty('--ui-edge', `${edge}px`);
  root.style.setProperty('--sidebar-layout-height', `${sidebarHeight}px`);
  root.style.setProperty('--hud-top-left', `${hudTopLeft}px`);
  root.style.setProperty('--hud-top-layout-width', `${hudTopWidth}px`);
}"""
new = """function updateResponsiveHudVars() {
  const width = window.innerWidth || 1280;
  const height = window.innerHeight || 720;
  const portraitPhone = width <= 700 && height > width * 1.08;
  const root = document.documentElement;

  if (portraitPhone) {
    root.dataset.viewportMode = 'portrait-phone';
    root.style.setProperty('--ui-scale', '1');
    root.style.setProperty('--ui-edge', '6px');
    root.style.setProperty('--sidebar-layout-height', 'auto');
    root.style.setProperty('--hud-top-left', '6px');
    root.style.setProperty('--hud-top-layout-width', String(Math.max(280, width - 58)) + 'px');
    return;
  }

  delete root.dataset.viewportMode;
  const scale = clamp(Math.min(width / 1280, height / 900), 0.72, 1);
  const edge = Math.round(14 * scale);
  const sidebarWidth = 260;
  const topGap = 16 * scale;
  const hudTopLeft = edge + sidebarWidth * scale + topGap;
  const hudTopWidth = Math.max(320, (width - hudTopLeft - edge) / scale);
  const sidebarHeight = Math.max(360, (height - edge * 2) / scale);

  root.style.setProperty('--ui-scale', scale.toFixed(3));
  root.style.setProperty('--ui-edge', String(edge) + 'px');
  root.style.setProperty('--sidebar-layout-height', String(sidebarHeight) + 'px');
  root.style.setProperty('--hud-top-left', String(hudTopLeft) + 'px');
  root.style.setProperty('--hud-top-layout-width', String(hudTopWidth) + 'px');
}"""
if old not in s:
    raise SystemExit("Could not locate responsive HUD function")
s = s.replace(old, new, 1)

anchor = "updateResponsiveHudVars();"
guard = """
const blockGameSelection = (event: Event) => {
  const target = event.target instanceof HTMLElement ? event.target : null;
  if (target?.closest('input, textarea, select, [contenteditable="true"]')) return;
  event.preventDefault();
};
document.addEventListener('selectstart', blockGameSelection, { passive: false });
document.addEventListener('contextmenu', blockGameSelection, { passive: false });
"""
if anchor not in s:
    raise SystemExit("Could not locate responsive HUD initialization")
s = s.replace(anchor, anchor + "\n" + guard, 1)
main.write_text(s, encoding="utf-8")

scene = root / "src/render/ThreeScene.ts"
s = scene.read_text(encoding="utf-8")
old = """  const applyResponsiveLayout = () => {
    const w = Math.max(1, container.clientWidth);
    const h = Math.max(1, container.clientHeight);
    const compact = clamp(Math.min(w / 1440, h / 900), 0.78, 1);
    const narrowBias = clamp((1920 - w) / 1920, 0, 0.5);
    const handX = narrowBias * 1.15 + (1 - compact) * 0.35;
    const handY = -0.9 + (1 - compact) * 1.35;
    const playY = 0.4 + (1 - compact) * 0.28;
    const deckX = 4.6 - (1 - compact) * 0.85;
    const deckY = -1.75 + (1 - compact) * 0.45;

    handGroup.position.set(handX, handY, 0);
    handGroup.scale.setScalar(0.7 * compact);
    playGroup.position.set(handX, playY, 0);
    playGroup.scale.setScalar(0.78 * compact);
    deckGroup.position.set(deckX, deckY, 0);
    deckGroup.scale.setScalar(0.68 * compact);
  };"""
new = """  const applyResponsiveLayout = () => {
    const w = Math.max(1, container.clientWidth);
    const h = Math.max(1, container.clientHeight);
    const portraitPhone = w <= 700 && h > w * 1.08;

    if (portraitPhone) {
      handGroup.position.set(0, -1.50, 0);
      handGroup.scale.setScalar(0.58);
      playGroup.position.set(0, 0.05, 0);
      playGroup.scale.setScalar(0.62);
      deckGroup.position.set(1.68, -2.18, 0);
      deckGroup.scale.setScalar(0.46);
      return;
    }

    const compact = clamp(Math.min(w / 1440, h / 900), 0.78, 1);
    const narrowBias = clamp((1920 - w) / 1920, 0, 0.5);
    const handX = narrowBias * 1.15 + (1 - compact) * 0.35;
    const handY = -0.9 + (1 - compact) * 1.35;
    const playY = 0.4 + (1 - compact) * 0.28;
    const deckX = 4.6 - (1 - compact) * 0.85;
    const deckY = -1.75 + (1 - compact) * 0.45;

    handGroup.position.set(handX, handY, 0);
    handGroup.scale.setScalar(0.7 * compact);
    playGroup.position.set(handX, playY, 0);
    playGroup.scale.setScalar(0.78 * compact);
    deckGroup.position.set(deckX, deckY, 0);
    deckGroup.scale.setScalar(0.68 * compact);
  };"""
if old not in s:
    raise SystemExit("Could not locate ThreeScene responsive layout")
s = s.replace(old, new, 1)

old = """export function layoutHand(count: number): { x: number; y: number; z: number; rotZ: number }[] {
  if (count === 0) return [];
  const spacing = Math.min(CARD_W * 1.05, 9 / Math.max(count, 1));
  const totalW = (count - 1) * spacing;
  const startX = -totalW / 2;
  const fanAngle = 0.04; // radians per card from centre
  const lift = 0.05;     // y-arc"""
new = """export function layoutHand(count: number): { x: number; y: number; z: number; rotZ: number }[] {
  if (count === 0) return [];
  const portraitPhone = typeof window !== 'undefined'
    && window.innerWidth <= 700
    && window.innerHeight > window.innerWidth * 1.08;
  const maxSpan = portraitPhone ? 4.25 : 9;
  const spacing = Math.min(
    CARD_W * (portraitPhone ? 0.64 : 1.05),
    maxSpan / Math.max(count - 1, 1),
  );
  const totalW = (count - 1) * spacing;
  const startX = -totalW / 2;
  const fanAngle = portraitPhone ? 0.025 : 0.04;
  const lift = portraitPhone ? 0.025 : 0.05;"""
if old not in s:
    raise SystemExit("Could not locate layoutHand")
s = s.replace(old, new, 1)

old = """export function layoutPlay(count: number): { x: number; y: number; z: number; rotZ: number }[] {
  const spacing = CARD_W * 1.1;
  const totalW = (count - 1) * spacing;"""
new = """export function layoutPlay(count: number): { x: number; y: number; z: number; rotZ: number }[] {
  const portraitPhone = typeof window !== 'undefined'
    && window.innerWidth <= 700
    && window.innerHeight > window.innerWidth * 1.08;
  const spacing = portraitPhone
    ? Math.min(CARD_W * 0.72, 3.55 / Math.max(count - 1, 1))
    : CARD_W * 1.1;
  const totalW = (count - 1) * spacing;"""
if old not in s:
    raise SystemExit("Could not locate layoutPlay")
s = s.replace(old, new, 1)
scene.write_text(s, encoding="utf-8")

style = root / "src/style.css"
with style.open("a", encoding="utf-8") as f:
    f.write("""
html, body, #app {
  width:100%; max-width:100vw; height:100%; min-height:100dvh; max-height:100dvh;
  overflow:hidden !important; overscroll-behavior:none; overscroll-behavior-x:none;
}
body, #app, #canvas-host, canvas, .hud-top, .sidebar, .actionbar,
.joker-slot, .consumable-slot, .shop-overlay, .booster-overlay, .target-overlay,
.setup-overlay, .blind-select-overlay, .kanban-game-panel-overlay {
  -webkit-user-select:none; user-select:none; -webkit-touch-callout:none;
}
input, textarea, select, [contenteditable="true"] {
  -webkit-user-select:text !important; user-select:text !important; -webkit-touch-callout:default;
}
canvas { width:100% !important; max-width:100vw !important; touch-action:none; }
button, .joker-slot, .consumable-slot, .blind-select-card, .setup-deck-card,
.collection-card, .target-card, .shop-offer, .booster-choice {
  touch-action:manipulation; -webkit-tap-highlight-color:transparent;
}

@media (max-width:700px) and (orientation:portrait) {
  :root { --pt:max(6px, env(safe-area-inset-top)); --pb:max(8px, env(safe-area-inset-bottom)); }
  #kanban-close-game { top:var(--pt)!important; right:5px!important; width:36px!important; height:36px!important; font-size:24px!important; }

  .hud-top { top:var(--pt)!important; left:5px!important; right:46px!important; width:auto!important; transform:none!important; gap:4px!important; align-items:flex-start!important; }
  .slot-row { gap:3px!important; align-items:center!important; min-width:0; }
  .joker-slots,.consumable-slots { gap:2px!important; }
  .joker-slot { width:34px!important; height:47px!important; border-width:1px!important; font-size:9px!important; box-shadow:0 2px #000!important; }
  .consumable-slot { width:30px!important; height:43px!important; border-width:1px!important; font-size:8px!important; box-shadow:0 2px #000!important; }
  .slot-count { margin:0!important; padding:2px 4px!important; border-width:1px!important; font-size:7px!important; box-shadow:0 2px #000!important; }

  .sidebar {
    top:calc(var(--pt) + 52px)!important; left:4px!important; right:4px!important;
    width:auto!important; height:auto!important; transform:none!important;
    display:grid!important; grid-template-columns:1.18fr .82fr!important; gap:4px!important;
    padding:4px!important; border-width:2px!important; border-radius:9px!important;
  }
  .sidebar .block { min-width:0!important; padding:4px!important; border-width:1px!important; border-radius:7px!important; }
  .blind-block { grid-column:1; grid-row:1 / span 2; }
  .round-score-block { grid-column:2; grid-row:1; }
  .hand-block { grid-column:2; grid-row:2; }
  .actions-block { grid-column:1 / -1; grid-row:3; display:grid!important; grid-template-columns:1fr 1fr 62px!important; gap:3px!important; align-items:stretch!important; }
  .block-header { margin-bottom:3px!important; padding:3px 5px!important; border-width:1px!important; font-size:9px!important; box-shadow:0 2px #000!important; }
  .blind-body { gap:5px!important; }
  .blind-badge { width:36px!important; height:36px!important; border-width:2px!important; }
  .blind-badge span { font-size:5px!important; }
  .blind-info-label { font-size:6px!important; }
  .blind-target { margin:0!important; gap:2px!important; font-size:18px!important; }
  .gold { font-size:7px!important; }
  .round-score-block { gap:3px!important; }
  .block-label { min-width:34px!important; padding:3px!important; border-width:1px!important; font-size:6px!important; }
  .round-score-value { padding:2px 4px!important; border-width:1px!important; font-size:20px!important; }
  .hand-type { min-height:8px!important; margin-bottom:2px!important; font-size:7px!important; }
  .chips-mult-row { gap:3px!important; }
  .chips-pill,.mult-pill { padding:2px 4px!important; border-width:1px!important; font-size:18px!important; }
  .x-sep { font-size:11px!important; }
  .action-grid { gap:2px!important; margin:0!important; grid-template-columns:1fr .72fr .72fr!important; }
  .big-btn { min-height:34px!important; padding:2px!important; border-width:1px!important; box-shadow:0 2px #000!important; }
  .big-btn-label { font-size:7px!important; } .big-btn-sub { font-size:6px!important; }
  .counter-card { padding:2px!important; border-width:1px!important; }
  .counter-label { font-size:5px!important; letter-spacing:0!important; }
  .counter-value { font-size:17px!important; } .counter-total { font-size:10px!important; }
  .money-row { margin:0!important; padding:3px!important; display:grid; place-items:center; border-width:1px!important; }
  .money { font-size:12px!important; }

  .actionbar { left:5px!important; right:5px!important; bottom:var(--pb)!important; width:auto!important; transform:none!important; display:grid!important; grid-template-columns:1fr 1fr!important; gap:5px!important; }
  .sort-controls { grid-column:1 / -1; width:100%; justify-content:center; gap:4px!important; padding:3px!important; border-width:1px!important; box-shadow:0 2px #000!important; }
  .sort-label,.sort-key,.action-hotkey { display:none!important; }
  .sort-btn { flex:1; min-width:0!important; min-height:32px; padding:5px!important; font-size:8px!important; }
  .actionbar>.btn-play,.actionbar>.btn-discard { min-width:0!important; min-height:46px; padding:8px 6px!important; font-size:10px!important; }
  .hand-counter { left:50%!important; bottom:calc(var(--pb) + 89px)!important; transform:translateX(-50%)!important; padding:2px 5px!important; font-size:7px!important; }
  .deck-counter { right:5px!important; bottom:calc(var(--pb) + 89px)!important; transform:none!important; padding:2px 5px!important; font-size:7px!important; }
  .mute-btn { width:30px!important; height:30px!important; right:5px!important; bottom:calc(var(--pb) + 116px)!important; transform:none!important; font-size:14px!important; }
  .music-mute-btn { bottom:calc(var(--pb) + 150px)!important; }

  .shop-overlay,.booster-overlay,.target-overlay,.setup-overlay,.blind-select-overlay,.kanban-game-panel-overlay {
    width:100vw!important; max-width:100vw!important; padding:calc(var(--pt) + 6px) 6px calc(var(--pb) + 6px)!important; overflow-x:hidden!important;
  }
  .shop-panel,.booster-panel,.target-panel,.setup-panel,.blind-select-panel,.kanban-game-panel {
    width:calc(100vw - 12px)!important; max-width:calc(100vw - 12px)!important;
    max-height:calc(100dvh - 28px)!important; margin:0!important; padding:10px!important;
    border-width:2px!important; border-radius:12px!important; overflow-x:hidden!important; overflow-y:auto!important;
  }
  .shop-header { align-items:flex-start!important; gap:6px!important; }
  .shop-header h2 { font-size:20px!important; }
  .shop-status { gap:4px!important; }
  .shop-money,.shop-next-blind { padding:4px 5px!important; font-size:8px!important; }
  .shop-offers,.shop-boosters { grid-template-columns:repeat(2,minmax(0,1fr))!important; gap:6px!important; }
  .shop-lower-market { grid-template-columns:1fr!important; gap:6px!important; }
  .shop-offer { min-height:126px!important; padding:7px!important; gap:5px!important; }
  .shop-offer h3 { font-size:10px!important; } .shop-offer p { font-size:13px!important; }
  .shop-buy-btn { padding:7px 6px!important; font-size:8px!important; }
  .shop-footer { position:sticky; bottom:-10px; z-index:4; padding-top:7px; }
  .shop-footer .btn { flex:1; padding:9px 6px!important; font-size:9px!important; }
  .booster-choices { grid-template-columns:repeat(2,minmax(0,1fr))!important; gap:7px!important; }
  .target-cards { grid-template-columns:repeat(3,minmax(0,1fr))!important; gap:6px!important; }
  .setup-decks,.collection-grid { grid-template-columns:repeat(2,minmax(0,1fr))!important; gap:6px!important; }
  .blind-select-cards { grid-template-columns:1fr!important; gap:7px!important; }
  .blind-select-card { min-height:150px!important; padding:10px!important; }
  .collection-tabs { gap:4px!important; }
  .collection-tab { padding:7px 8px!important; font-size:7px!important; }
  .run-info-head,.run-info-row { grid-template-columns:44px minmax(86px,1fr) 106px 42px!important; gap:3px!important; }
  .run-info-head { font-size:5px!important; } .run-info-row { padding:3px!important; }
  .run-info-level,.run-info-name { font-size:7px!important; }
  .run-info-chips,.run-info-mult { min-width:42px!important; padding:3px!important; font-size:15px!important; }
  .item-info { left:6px!important; right:6px!important; width:auto!important; max-width:calc(100vw - 12px)!important; }
}
@media (max-width:380px) and (orientation:portrait) {
  .joker-slot { width:31px!important; height:44px!important; }
  .consumable-slot { width:27px!important; height:40px!important; }
  .slot-count { font-size:6px!important; padding-inline:3px!important; }
  .sidebar { top:calc(var(--pt) + 49px)!important; }
  .actions-block { grid-template-columns:1fr 1fr 54px!important; }
}
""")

print("Mobile portrait UI + touch/selection hardening applied.")
