// Compose a populated tank when visiting a water ecosystem for the first time.
// Subsequent water switches restore independent drafts instead of rerandomizing.
import type { TankConfig } from '../types';
import { PRESETS } from './presets';
import { speciesById } from './species';
import { floraForWater } from './flora';
import { decorForWater } from './decor';

export function createRandomWaterTank(
  water: 'freshwater' | 'saltwater',
  gallons: number,
): TankConfig {
  const capacity = Math.max(5, Math.min(180, Math.round(gallons)));
  const themes = PRESETS.filter(p => p.water === water).sort((a,b) =>
    Math.abs(Math.log(capacity / a.gallons)) - Math.abs(Math.log(capacity / b.gallons))
  );
  // Pick one of the two closest-sized designed layouts, not a completely
  // incompatible 150-gallon reef for a 10-gallon nano tank.
  const template = themes[Math.floor(Math.random() * Math.min(2, themes.length))];
  const ratio = Math.max(.20, Math.min(1.4, Math.sqrt(capacity / template.gallons)));
  const fish: Record<string, number> = {};
  const fishes = Object.entries(template.fish).filter(([id]) => {
    const sp = speciesById.get(id);
    return !!sp && sp.water === water && sp.minGallons <= capacity;
  });
  // Prefer the original theme's proportions, but avoid packing an enormous
  // school into a nano aquarium. Warnings remain informational to the user.
  for (const [id, amount] of fishes.slice(0, capacity < 15 ? 2 : 6)) {
    const sp = speciesById.get(id)!;
    const scaled = Math.round(amount * ratio * (.88 + Math.random() * .25));
    const count = Math.min(capacity < 15 ? 3 : capacity < 35 ? 9 : 24,
      Math.max(1, scaled, Math.min(sp.minGroup, capacity < 15 ? 2 : 8)));
    fish[id] = count;
  }
  // Small saltwater templates start at 75 gal: without a fallback they can
  // have zero fish at 5-20 gal. The tiny 5-9g case is an *illustrative*
  // virtual display (an actual clownfish needs a larger tank).
  if (!Object.keys(fish).length) {
    const id = water === 'saltwater'
      ? (capacity >= 30 ? 'green-chromis' : 'ocellaris-clown')
      : (capacity < 10 ? 'guppy' : 'neon-tetra');
    fish[id] = capacity < 10 ? 1 : capacity < 30 ? 3 : 6;
  }
  const availableFlora = new Set(floraForWater(water).map(p => p.id));
  const flora: Record<string,number> = {};
  for (const [id, count] of Object.entries(template.flora)) {
    if (!availableFlora.has(id)) continue;
    flora[id] = Math.max(1, Math.min(10, Math.round(count * ratio)));
  }
  if (!Object.keys(flora).length) {
    const fallback = floraForWater(water)[0];
    if (fallback) flora[fallback.id] = 2;
  }
  const allowedDecor = new Set(decorForWater(water).map(d => d.id));
  const decor = template.decor.filter(id => allowedDecor.has(id));
  if (!decor.length) decor.push(water === 'freshwater' ? 'driftwood' : 'reef-rock');
  // Marine aquariums naturally use reef stone rather than wood; freshwater
  // aquascapes get driftwood, even if their template previously had just rocks.
  const landmark = water === 'freshwater' ? 'driftwood' : 'reef-rock';
  if (!decor.includes(landmark) && allowedDecor.has(landmark)) decor.push(landmark);
  return {
    ...structuredClone(template),
    water, gallons: capacity, name: 'Hồ cá ngẫu nhiên',
    fish, flora, decor, fishNames: {},
  };
}
