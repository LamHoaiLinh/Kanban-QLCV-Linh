KanAquarium uses the MIT-licensed upstream 3D aquarium by jamisonhill/aquarium (pinned commit). The fish-shaped cookie and bear-shaped cookie PNG sprites are resized and palette-optimized from the user's supplied RAR. The normal feed SVG art is an original approximation for speed. GitHub Actions builds aquarium-game/ automatically; do not edit compiled files directly.

## Favorite aquariums and fish visual refinement (2026-10-18)
- Save curated aquariums under ★ Yêu thích and optionally auto-open a preferred one.
- Recreate plants/decor deterministically from saved tank settings; existing saved tanks remain intact.
- Angelfish tail joins the body more closely; discus caudal fin has a short rounded silhouette.
- Larger fish show gentle scale texture and less plastic reflections; discus has softer organic markings.
- Browser smoke test checks favorite save, randomize, reload and exact scenery geometry.
- Release validation: the compiled GitHub Pages aquarium includes the favorite tank persistence and fish-mesh update.

## Large fish movement and proportion update (2026-10-18)
- Discus glide more naturally with fewer near-stationary rests and less head/pitch jitter.
- Angelfish caudal fins now grow from a connected strip embedded in the rear body rather than a point at the peduncle.
- Larger fish (adult size at least 5 inches) vary across three recognizable size cohorts; smaller species retain their existing size distribution.
- 3D browser regression checks discus movement, angelfish caudal root and per-fish size ranges.
