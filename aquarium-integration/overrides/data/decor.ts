// Decor library — all procedurally generated hardscape and props.

import type { DecorDef } from '../types';

export const DECOR: DecorDef[] = [
  { id: 'driftwood', name: 'Cành lũa tự nhiên', water: 'freshwater', kind: 'driftwood',
    info: 'Cành gỗ lâu năm làm điểm tựa cho cây và chỗ trú của cá.' },
  { id: 'spider-wood', name: 'Lũa rễ nhện', water: 'freshwater', kind: 'spiderwood',
    info: 'Các nhánh rễ mảnh đan xen, phù hợp cho tép và cá con trú ẩn.' },
  { id: 'driftwood-stump', name: 'Gốc lũa chìm', water: 'freshwater', kind: 'stump',
    info: 'Gốc cây phân nhánh tạo bóng râm và hốc trú ẩn.' },
  { id: 'hollow-log', name: 'Khúc gỗ rỗng', water: 'both', kind: 'log',
    info: 'Đường hầm bằng gỗ để cá chui qua và nghỉ ngơi.' },
  { id: 'log-arch', name: 'Cầu gỗ vòm', water: 'both', kind: 'log',
    info: 'Khúc gỗ hình vòm tạo lối bơi bên dưới.' },
  { id: 'river-rocks', name: 'Đá cuội suối', water: 'both', kind: 'rock',
    info: 'Cụm đá tròn nhẵn trang trí nền tự nhiên.' },
  { id: 'slate-stack', name: 'Đá phiến xếp tầng', water: 'freshwater', kind: 'slate',
    info: 'Các tấm đá phẳng tạo khe trú ẩn.' },
  { id: 'reef-rock', name: 'Đá tạo rạn san hô', water: 'saltwater', kind: 'reefrock',
    info: 'Đá xốp nhiều khe hở làm nơi bám cho san hô.' },
  { id: 'airstone', name: 'Đá sủi bọt', water: 'both', kind: 'airstone',
    info: 'Tạo cột bọt khí nổi đều lên mặt nước.' },
  { id: 'sunken-ship', name: 'Tàu đắm mini', water: 'both', kind: 'ship', playful: true,
    info: 'Mô hình tàu đắm nhỏ nằm trên nền cát.' },
  { id: 'castle', name: 'Lâu đài cổ', water: 'both', kind: 'castle', playful: true,
    info: 'Lâu đài trang trí có ô cửa để cá bơi xuyên qua.' },
];

export const decorById = new Map(DECOR.map((d) => [d.id, d]));
export const decorForWater = (water: 'freshwater' | 'saltwater') =>
  DECOR.filter((d) => d.water === 'both' || d.water === water);
