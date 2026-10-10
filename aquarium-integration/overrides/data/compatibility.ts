// Stocking & compatibility rules engine (RESEARCH.md §6.2–6.4).
// Produces gentle, plain-language warnings — the UI never blocks a choice,
// it just explains what a real aquarist would tell you.

import type { StockingWarning, TankConfig } from '../types';
import { speciesById } from './species';
import { floraById } from './flora';
import { tankDims } from './tanks';

export function totalBioload(fish: Record<string, number>): number {
  let sum = 0;
  for (const [id, count] of Object.entries(fish)) {
    const sp = speciesById.get(id);
    if (sp) sum += sp.bioload * count;
  }
  return sum;
}

export function stockingWarnings(config: TankConfig): StockingWarning[] {
  const warnings: StockingWarning[] = [];
  const dims = tankDims(config.gallons);
  const entries = Object.entries(config.fish).filter(([, n]) => n > 0);
  const species = entries.map(([id, n]) => ({ sp: speciesById.get(id)!, n })).filter((e) => e.sp);

  // 1. Bioload vs capacity — planted tanks earn a bonus (plants consume waste).
  const plantedBonus = Object.entries(config.flora).some(
    ([id, n]) => n > 0 && ['stem', 'rosette', 'carpet', 'moss', 'floating'].includes(floraById.get(id)?.kind ?? '')
  ) ? 1.15 : 1;
  const load = totalBioload(config.fish);
  const cap = dims.capacity * plantedBonus;
  if (load > cap * 1.25) {
    warnings.push({ severity: 'warning', message: `Bể đang nuôi quá dày (${Math.round((load / cap) * 100)}% sức chứa). Chất thải có thể tích tụ nhanh hơn khả năng xử lý của lọc và cây.` });
  } else if (load > cap) {
    warnings.push({ severity: 'caution', message: `Bể hơi đông cá (${Math.round((load / cap) * 100)}% sức chứa). Nên nâng cấp lọc hoặc giảm số cá.` });
  }

  for (const { sp, n } of species) {
    // 2. Schooling minimums — a lone schooler is a stressed schooler.
    if (sp.minGroup > 1 && n < sp.minGroup) {
      warnings.push({ severity: 'caution', message: `${sp.common} là cá sống theo đàn; ít hơn ${sp.minGroup} con có thể khiến chúng căng thẳng. Hãy thử nuôi ${sp.minGroup} con trở lên để thấy cá bơi theo đàn.` });
    }
    // 3. Tank size minimums.
    if (config.gallons < sp.minGallons) {
      warnings.push({ severity: 'caution', message: `Cá ${sp.common} cần bể tối thiểu ${sp.minGallons} gallon (bể hiện có ${Math.round(config.gallons)}). Cá trưởng thành cần đủ không gian bơi.` });
    }
    // 4. One-per-tank species (male bettas fight to the death).
    if (sp.maxPerTank && n > sp.maxPerTank) {
      warnings.push({ severity: 'warning', message: `Nuôi quá ${sp.maxPerTank} ${sp.common} trong một bể có thể dẫn tới tranh giành lãnh thổ${sp.id === 'betta' ? ' — cá Betta đực có thể đánh nhau nghiêm trọng' : ''}.` });
    }
    // 5. Predation: "if it fits in the mouth, it's food."
    if (sp.mouthIn) {
      for (const { sp: other } of species) {
        if (other.id !== sp.id && other.adultSizeIn <= sp.mouthIn) {
          warnings.push({ severity: 'warning', message: `Cá trưởng thành ${sp.common} có thể ăn ${other.common} nếu vừa miệng.` });
        }
      }
    }
    // 6. Aggressive fish with small peaceful tankmates.
    if (sp.temperament === 'aggressive') {
      for (const { sp: other } of species) {
        if (other.id !== sp.id && other.temperament === 'peaceful' && !other.invert && other.adultSizeIn < sp.adultSizeIn * 1.2) {
          warnings.push({ severity: 'caution', message: `${sp.common} có thể gây hấn với ${other.common} — chú ý nguy cơ rỉa vây.` });
        }
      }
    }
    // 7. Fin-nippers with long-finned fish.
    if (sp.id === 'tiger-barb') {
      for (const { sp: other } of species) {
        if (other.shape.finLong) {
          warnings.push({ severity: 'caution', message: `Cá tứ vân thường rỉa vây; vây dài của ${other.common} có thể bị tấn công.` });
        }
      }
    }
    // 8. Reef-safety: non-reef-safe fish with corals present.
    if (sp.water === 'saltwater' && sp.reefSafe === false) {
      const hasCoral = Object.entries(config.flora).some(([id, cnt]) => cnt > 0 && floraById.get(id));
      if (hasCoral) {
        warnings.push({ severity: 'caution', message: `${sp.common} có thể rỉa san hô, nên cân nhắc trước khi thả vào bể rạn.` });
      }
    }
    // 9. Shrimp as snacks for medium+ fish.
    if (sp.invert && sp.id.includes('shrimp')) {
      for (const { sp: other } of species) {
        if (!other.invert && other.adultSizeIn >= 3.5) {
          warnings.push({ severity: 'caution', message: `${other.common} có thể xem ${sp.common} là thức ăn.` });
        }
      }
    }
  }

  // Deduplicate identical messages.
  const seen = new Set<string>();
  return warnings.filter((w) => (seen.has(w.message) ? false : (seen.add(w.message), true)));
}
