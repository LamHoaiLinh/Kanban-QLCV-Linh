// Plant and coral catalog (RESEARCH.md §4 and §6.5).
// All geometry is generated procedurally; `kind` selects the generator and the
// motion model (current-driven sway vs. self-driven pulsing vs. rigid).

import type { FloraDef } from '../types';

export const FLORA: FloraDef[] = [
  // ── Freshwater plants ──
  {
    id: 'amazon-sword', name: 'Kiếm Amazon', scientific: 'Echinodorus grisebachii',
    water: 'freshwater', kind: 'rosette', heightM: 0.3,
    colors: ['#2e6b2e', '#3f8a38', '#357a30'], careLevel: 'easy',
    info: 'Cây hậu cảnh với lá dài, rộng, đung đưa theo dòng nước.',
  },
  {
    id: 'vallisneria', name: 'Cỏ lươn', scientific: 'Vallisneria spiralis',
    water: 'freshwater', kind: 'stem', heightM: 0.42,
    colors: ['#4a9a3a', '#5cb04a', '#3a8a30'], careLevel: 'easy',
    info: 'Lá dài như dải lụa vươn tới mặt nước và uốn theo dòng chảy.',
  },
  {
    id: 'java-fern', name: 'Dương xỉ Java', scientific: 'Microsorum pteropus',
    water: 'freshwater', kind: 'rosette', heightM: 0.2,
    colors: ['#2a5c2a', '#356e30', '#244f24'], careLevel: 'easy',
    info: 'Lá dày, xanh đậm; nên buộc vào lũa hoặc đá, không chôn thân rễ.',
  },
  {
    id: 'anubias', name: 'Ráy Nana', scientific: 'Anubias barteri var. nana',
    water: 'freshwater', kind: 'rosette', heightM: 0.1,
    colors: ['#1e4a1e', '#2a5c26', '#183f18'], careLevel: 'easy',
    info: 'Lá tròn dày, bóng, tăng trưởng chậm và ít dao động theo dòng nước.',
  },
  {
    id: 'cryptocoryne', name: 'Tiêu thảo', scientific: 'Cryptocoryne wendtii',
    water: 'freshwater', kind: 'rosette', heightM: 0.14,
    colors: ['#5a4a2a', '#6e5230', '#4a6a30'], careLevel: 'easy',
    info: 'Lá gợn sóng xanh nâu dùng cho trung cảnh; có thể rụng lá khi thay đổi môi trường.',
  },
  {
    id: 'java-moss', name: 'Rêu Java', scientific: 'Taxiphyllum barbieri',
    water: 'freshwater', kind: 'moss', heightM: 0.04,
    colors: ['#3a7a2a', '#4a9036', '#2e6822'], careLevel: 'easy',
    info: 'Tạo thảm rêu mềm trên lũa và đá, là nơi tép tìm thức ăn.',
  },
  {
    id: 'dwarf-hairgrass', name: 'Cỏ tóc tiên lùn', scientific: 'Eleocharis parvula',
    water: 'freshwater', kind: 'carpet', heightM: 0.05,
    colors: ['#5ab040', '#6ec850', '#4a9a34'], careLevel: 'moderate',
    info: 'Cây tiền cảnh tạo thảm cỏ mảnh dao động theo dòng nước.',
  },
  {
    id: 'frogbit', name: 'Bèo Amazon', scientific: 'Limnobium laevigatum',
    water: 'freshwater', kind: 'floating', heightM: 0.08,
    colors: ['#4a9a3a', '#5cb44a'], careLevel: 'easy',
    info: 'Cây nổi có rễ dài giúp tạo bóng mát cho cá.',
  },

  {
    id: "rotala-rotundifolia", name: "Diệp tài hồng lá tròn", scientific: "Rotala rotundifolia",
    water: 'freshwater', kind: 'stem', heightM: 0.28,
    colors: ["#538e58","#be8177","#a95150"], careLevel: 'easy',
    info: "Cây thân đốt hậu cảnh, lá nhỏ đung đưa như vườn Hà Lan.",
  },
  {
    id: "ludwigia-repens", name: "Hồng liễu đỏ", scientific: "Ludwigia repens",
    water: 'freshwater', kind: 'stem', heightM: 0.27,
    colors: ["#627e3c","#ab5940","#c07349"], careLevel: 'easy',
    info: "Lá bầu xanh đỏ tía ở các ngọn sáng.",
  },
  {
    id: "hornwort", name: "Rong đuôi chó", scientific: "Ceratophyllum demersum",
    water: 'freshwater', kind: 'stem', heightM: 0.34,
    colors: ["#367e3b","#5eaa49","#4e8c50"], careLevel: 'easy',
    info: "Tán lá kim xốp, trú ẩn cho cá con.",
  },
  {
    id: "water-sprite", name: "Dương xỉ nước", scientific: "Ceratopteris thalictroides",
    water: 'freshwater', kind: 'rosette', heightM: 0.25,
    colors: ["#548d47","#86bb64","#4b8654"], careLevel: 'easy',
    info: "Lá xẻ tơi mềm thành cụm lớn ở trung cảnh.",
  },
  {
    id: "dwarf-sagittaria", name: "Hẹ nước lùn", scientific: "Sagittaria subulata",
    water: 'freshwater', kind: 'carpet', heightM: 0.08,
    colors: ["#5d9c38","#6db842","#398e40"], careLevel: 'easy',
    info: "Thảm lá dạng dải ở tiền cảnh.",
  },
  {
    id: "bacopa-caroliniana", name: "Bacopa lá dày", scientific: "Bacopa caroliniana",
    water: 'freshwater', kind: 'stem', heightM: 0.2,
    colors: ["#4f9959","#7fb86d","#5c8e5c"], careLevel: 'easy',
    info: "Cặp lá thịt dày trên thân thẳng, hợp hậu cảnh.",
  },
  {
    id: "hygrophila-polysperma", name: "Thủy cúc lá rộng", scientific: "Hygrophila polysperma",
    water: 'freshwater', kind: 'stem', heightM: 0.28,
    colors: ["#548f43","#75b360","#8cba6f"], careLevel: 'easy',
    info: "Cây thân đốt tán xanh rậm nhanh.",
  },
  {
    id: "red-tiger-lotus", name: "Súng hổ đỏ", scientific: "Nymphaea zenkeri",
    water: 'freshwater', kind: 'rosette', heightM: 0.22,
    colors: ["#813b47","#aa4b5b","#804852"], careLevel: 'easy',
    info: "Lá to màu đỏ nâu, điểm nhấn giữa hồ.",
  },
  {
    id: "bucephalandra", name: "Buce lá gợn", scientific: "Bucephalandra sp.",
    water: 'freshwater', kind: 'rosette', heightM: 0.08,
    colors: ["#244f50","#3a7168","#447b72"], careLevel: 'easy',
    info: "Cây bám lũa nhỏ, lá nhăn màu xanh ngọc.",
  },
  {
    id: "limnophila-sessiliflora", name: "Rong la hán xanh", scientific: "Limnophila sessiliflora",
    water: 'freshwater', kind: 'stem', heightM: 0.3,
    colors: ["#548c45","#6cad59","#4c965c"], careLevel: 'easy',
    info: "Tán lá mềm hình lông chim ở hậu cảnh.",
  },

  // ── Saltwater corals & anemones ──
  {
    id: 'pulsing-xenia', name: 'San hô Xenia nhịp đập', scientific: 'Xenia elongata',
    water: 'saltwater', kind: 'xenia', heightM: 0.09,
    colors: ['#c8b8d8', '#b8a8cc', '#d8cce4'], careLevel: 'easy',
    info: 'Các tua nhỏ co mở nhịp nhàng như đang vẫy tay.',
  },
  {
    id: 'kenya-tree', name: 'San hô cây Kenya', scientific: 'Capnella imbricata',
    water: 'saltwater', kind: 'softcoral', heightM: 0.14,
    colors: ['#c8a888', '#b89878', '#d8b898'], careLevel: 'easy',
    info: 'San hô mềm phân nhánh, đung đưa theo dòng chảy.',
  },
  {
    id: 'toadstool', name: 'San hô da nấm', scientific: 'Sarcophyton sp.',
    water: 'saltwater', kind: 'softcoral', heightM: 0.1,
    colors: ['#c8b878', '#d8c888', '#b8a868'], careLevel: 'easy',
    info: 'Thân hình nấm, phần mũ mang các polyp nhỏ dao động.',
  },
  {
    id: 'zoanthids', name: 'Vườn san hô nút áo', scientific: 'Zoanthus sp.',
    water: 'saltwater', kind: 'zoa', heightM: 0.025,
    colors: ['#e85a2a', '#3ab8a8', '#e8c82a', '#c84ae0'], careLevel: 'easy',
    info: 'Nhiều polyp nhỏ xếp như thảm hoa dưới nước.',
  },
  {
    id: 'hammer-coral', name: 'San hô búa', scientific: 'Euphyllia ancora',
    water: 'saltwater', kind: 'lps', heightM: 0.08,
    colors: ['#4ac8a8', '#5ad8b8', '#3ab090'], careLevel: 'moderate',
    info: 'Tua mềm có đầu hình búa, chuyển động trong dòng nước.',
  },
  {
    id: 'bubble-anemone', name: 'Hải quỳ bong bóng', scientific: 'Entacmaea quadricolor',
    water: 'saltwater', kind: 'anemone', heightM: 0.09,
    colors: ['#48b088', '#e0685a', '#58c098'], careLevel: 'moderate',
    info: 'Nơi cá hề thường trú ẩn; các xúc tu căng tròn, uốn theo dòng nước.',
  },
  {
    id: 'acropora', name: 'San hô sừng hươu', scientific: 'Acropora sp.',
    water: 'saltwater', kind: 'hardcoral', heightM: 0.12,
    colors: ['#8a5ac8', '#5a8ac8', '#c85a8a'], careLevel: 'advanced',
    info: 'San hô đá phân nhánh giúp tạo cấu trúc rạn.',
  },
  {
    id: 'brain-coral', name: 'San hô não', scientific: 'Trachyphyllia geoffroyi',
    water: 'saltwater', kind: 'hardcoral', heightM: 0.05,
    colors: ['#c8683a', '#3a9a7a', '#c8a83a'], careLevel: 'moderate',
    info: 'Bề mặt uốn nếp như não với những dải màu nổi bật.',
  },
  {
    id: 'montipora-plate', name: 'San hô đĩa Montipora', scientific: 'Montipora capricornis',
    water: 'saltwater', kind: 'hardcoral', heightM: 0.06,
    colors: ['#e07a3a', '#d86a8a'], careLevel: 'advanced',
    info: 'Các phiến san hô cứng chồng tầng như cánh hoa bằng đá.',
  },
];

export const floraById = new Map(FLORA.map((f) => [f.id, f]));
export const floraForWater = (water: 'freshwater' | 'saltwater') =>
  FLORA.filter((f) => f.water === water);
