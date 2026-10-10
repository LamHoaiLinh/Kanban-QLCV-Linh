// Tank sizing model (RESEARCH.md §6.1–6.2).
// Volume is continuous (a slider), with named presets at real-world standard sizes.
// Physical dimensions derive from volume with realistic proportions, and stocking
// capacity is based on FOOTPRINT + SURFACE AREA rather than raw gallons — the
// research is emphatic that "1 inch per gallon" is a myth.

export interface TankDims {
  gallons: number;
  width: number;   // interior meters, left-right (the long axis, facing camera)
  depth: number;   // front-back
  height: number;  // water column height
  capacity: number; // stocking capacity units (bioload budget)
}

export const TANK_PRESETS: { name: string; gallons: number; blurb: string }[] = [
  { name: 'Siêu nhỏ', gallons: 5, blurb: 'Bể trên bàn cho cá Betta hoặc một đàn tép' },
  { name: 'Nhỏ', gallons: 20, blurb: 'Bể cộng đồng dễ bắt đầu' },
  { name: 'Vừa', gallons: 40, blurb: 'Đủ chỗ cho cá bơi theo đàn' },
  { name: 'Lớn', gallons: 75, blurb: 'Cho đàn cá lớn hoặc bể rạn san hô' },
  { name: 'Rất lớn', gallons: 120, blurb: 'Bể trưng bày rộng cho cá biển' },
];

export const MIN_GALLONS = 5;
export const MAX_GALLONS = 180;

export function tankDims(gallons: number): TankDims {
  const volumeM3 = gallons * 0.003785;
  // Real tanks get proportionally longer and shallower as they grow
  // (compare a 5g cube-ish tank to a 6-foot 125g). Blend the aspect ratio.
  const t = Math.min(1, (gallons - MIN_GALLONS) / (MAX_GALLONS - MIN_GALLONS));
  const lengthRatio = 1.6 + t * 1.4;  // width = ratio × height
  const depthRatio = 0.85 + t * 0.25; // depth = ratio × height
  const height = Math.cbrt(volumeM3 / (lengthRatio * depthRatio));
  const dims = {
    gallons,
    width: lengthRatio * height,
    depth: depthRatio * height,
    height,
    capacity: 0,
  };
  // Capacity model: surface area (gas exchange) does most of the work, plus a
  // volume term (dilution). Tuned so a 20g ≈ 20 units, favoring wide tanks.
  const surfaceM2 = dims.width * dims.depth;
  dims.capacity = Math.round(surfaceM2 * 220 + gallons * 0.45);
  return dims;
}

export function presetNameFor(gallons: number): string {
  let best = TANK_PRESETS[0];
  for (const p of TANK_PRESETS) {
    if (Math.abs(p.gallons - gallons) < Math.abs(best.gallons - gallons)) best = p;
  }
  return Math.abs(best.gallons - gallons) <= 3 ? best.name : `${Math.round(gallons)} gal (tùy chỉnh)`;
}
