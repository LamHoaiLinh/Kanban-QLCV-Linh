// Starter tank presets — one click to a beautiful, correctly-stocked tank.

import type { TankConfig } from '../types';

const base = {
  dayNight: 'cycle' as const,
  fishNames: {},
};

export const PRESETS: TankConfig[] = [
  {
    ...base,
    name: 'Cộng đồng Amazon',
    water: 'freshwater', gallons: 55, substrate: 'sand', background: 'natural', lighting: 'daylight',
    fish: { 'cardinal-tetra': 12, 'rummynose-tetra': 8, 'angelfish': 2, 'corydoras': 6, 'bristlenose-pleco': 1 },
    flora: { 'amazon-sword': 3, 'vallisneria': 5, 'cryptocoryne': 4, 'java-fern': 2 },
    decor: ['driftwood', 'river-rocks'],
  },
  {
    ...base,
    name: 'Hồ thủy sinh mini',
    water: 'freshwater', gallons: 8, substrate: 'blacksand', background: 'planted', lighting: 'daylight',
    fish: { 'neon-tetra': 8, 'cherry-shrimp': 10, 'nerite-snail': 2 },
    flora: { 'java-moss': 3, 'dwarf-hairgrass': 6, 'anubias': 2, 'cryptocoryne': 2 },
    decor: ['river-rocks'],
  },
  {
    ...base,
    name: 'Đầm san hô',
    water: 'saltwater', gallons: 75, substrate: 'crushedcoral', background: 'reef', lighting: 'actinic',
    fish: { 'ocellaris-clown': 2, 'green-chromis': 7, 'firefish': 2, 'royal-gramma': 1, 'lawnmower-blenny': 1, 'cleaner-shrimp': 1, 'turbo-snail': 3 },
    flora: { 'pulsing-xenia': 2, 'hammer-coral': 2, 'zoanthids': 3, 'bubble-anemone': 1, 'kenya-tree': 2, 'acropora': 2, 'brain-coral': 1 },
    decor: ['reef-rock', 'airstone'],
  },
  {
    ...base,
    name: 'Ốc đảo Betta',
    water: 'freshwater', gallons: 10, substrate: 'gravel', background: 'planted', lighting: 'warm',
    fish: { 'betta': 1, 'nerite-snail': 1 },
    flora: { 'anubias': 3, 'java-fern': 2, 'frogbit': 4, 'cryptocoryne': 3 },
    decor: ['driftwood'],
  },
  {
    ...base,
    name: 'Suối nước trà',
    water: 'freshwater', gallons: 29, substrate: 'sand', background: 'black', lighting: 'blackwater',
    fish: { 'rummynose-tetra': 10, 'harlequin-rasbora': 8, 'kuhli-loach': 6 },
    flora: { 'java-fern': 3, 'cryptocoryne': 5, 'java-moss': 2, 'frogbit': 5 },
    decor: ['driftwood', 'slate-stack'],
  },
  {
    ...base,
    name: 'Đại dương xanh',
    water: 'saltwater', gallons: 150, substrate: 'sand', background: 'deepblue', lighting: 'actinic',
    fish: { 'blue-tang': 1, 'yellow-tang': 1, 'green-chromis': 9, 'sixline-wrasse': 1, 'banggai-cardinal': 3, 'turbo-snail': 4 },
    flora: { 'acropora': 3, 'montipora-plate': 2, 'toadstool': 2, 'zoanthids': 2 },
    decor: ['reef-rock', 'airstone'],
  },
  {...base,name:"Rừng lũa tĩnh lặng",water:'freshwater',gallons:75,substrate:'sand',background:'natural',lighting:'warm',fish:{"angelfish":3,"rummynose-tetra":12,"pygmy-corydoras":8,"bristlenose-pleco":1},flora:{"java-fern":5,"anubias":4,"bucephalandra":6},decor:["driftwood","hollow-log"]},
  {...base,name:"Vườn tép tí hon",water:'freshwater',gallons:15,substrate:'blacksand',background:'planted',lighting:'daylight',fish:{"amano-shrimp":8,"cherry-shrimp":9,"nerite-snail":2},flora:{"java-moss":5,"bucephalandra":3,"dwarf-hairgrass":6},decor:["spider-wood","river-rocks"]},
  {...base,name:"Suối chạch Kuhli",water:'freshwater',gallons:40,substrate:'sand',background:'black',lighting:'blackwater',fish:{"kuhli-loach":8,"chili-rasbora":12,"pygmy-corydoras":8},flora:{"java-fern":5,"cryptocoryne":6,"hornwort":4},decor:["hollow-log","driftwood"]},
  {...base,name:"Vườn ánh đỏ",water:'freshwater',gallons:40,substrate:'blacksand',background:'planted',lighting:'warm',fish:{"celestial-pearl-danio":12,"ember-tetra":12,"amano-shrimp":5},flora:{"red-tiger-lotus":2,"ludwigia-repens":6,"rotala-rotundifolia":7},decor:["spider-wood"]},
  {...base,name:"Toàn cảnh ông tiên",water:'freshwater',gallons:120,substrate:'sand',background:'natural',lighting:'daylight',fish:{"angelfish":4,"cardinal-tetra":18,"rummynose-tetra":14,"bristlenose-pleco":2},flora:{"amazon-sword":5,"vallisneria":9,"anubias":4},decor:["driftwood","hollow-log"]},
  {...base,name:"Vũ điệu vây chỉ",water:'freshwater',gallons:75,substrate:'blacksand',background:'natural',lighting:'warm',fish:{"threadfin-rainbow":10,"boesemani-rainbow":6,"pygmy-corydoras":8},flora:{"limnophila-sessiliflora":5,"vallisneria":5,"rotala-rotundifolia":5},decor:["river-rocks"]},
  {...base,name:"Thung lũng xanh",water:'freshwater',gallons:75,substrate:'gravel',background:'planted',lighting:'daylight',fish:{"endler-guppy":10,"cardinal-tetra":14,"cherry-barb":8,"amano-shrimp":7},flora:{"amazon-sword":3,"hygrophila-polysperma":6,"water-sprite":4,"dwarf-sagittaria":8},decor:["river-rocks","driftwood"]},
  {...base,name:"Lũa đá hài hòa",water:'freshwater',gallons:55,substrate:'sand',background:'natural',lighting:'daylight',fish:{"congo-tetra":7,"cherry-barb":8,"corydoras":6},flora:{"java-fern":4,"anubias":4,"cryptocoryne":5,"bucephalandra":4},decor:["log-arch","slate-stack"]},
  {...base,name:"Rừng sặc ánh sao",water:'freshwater',gallons:29,substrate:'sand',background:'black',lighting:'warm',fish:{"sparkling-gourami":2,"chili-rasbora":10,"kuhli-loach":6},flora:{"water-sprite":4,"java-fern":3,"cryptocoryne":6},decor:["driftwood","root-bridge"]},
  {...base,name:"Sắc xanh trong suốt",water:'freshwater',gallons:75,substrate:'blacksand',background:'natural',lighting:'daylight',fish:{"glass-catfish":8,"cardinal-tetra":12,"cherry-barb":8,"zebra-oto":4},flora:{"amazon-sword":4,"java-fern":3,"bacopa-caroliniana":5},decor:["driftwood","river-rocks"]},
  {...base,name:"Trăng xanh san hô",water:'saltwater',gallons:120,substrate:'sand',background:'reef',lighting:'actinic',fish:{"ocellaris-clown":2,"green-chromis":10,"banggai-cardinal":4,"lawnmower-blenny":1,"cleaner-shrimp":2},flora:{"zoanthids":5,"hammer-coral":4,"kenya-tree":3,"bubble-anemone":2},decor:["reef-rock","airstone"]},
  {...base,name:"Bình minh đại dương",water:'saltwater',gallons:75,substrate:'crushedcoral',background:'deepblue',lighting:'daylight',fish:{"firefish":2,"green-chromis":8,"royal-gramma":1,"ocellaris-clown":2},flora:{"acropora":2,"toadstool":3,"zoanthids":4,"pulsing-xenia":3},decor:["reef-rock"]},
];

export const DEFAULT_TANK: TankConfig = PRESETS[0];
