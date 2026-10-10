import type { AquascapeLayout, TankConfig } from '../types';
import { speciesById } from './species';
import { normalizeStock } from './stocking';

export function seededRandom(seed?:number):()=>number {
 if(seed===undefined)return Math.random;
 // Mix adjacent seed integers before the first draw so 1..100 covers sizes
 // and themes instead of sharing almost the same initial LCG fraction.
 let n=seed>>>0;n=Math.imul(n^(n>>>16),0x7feb352d);n=Math.imul(n^(n>>>15),0x846ca68b);n=(n^(n>>>16))>>>0;
 return()=>{n=(Math.imul(n,1664525)+1013904223)>>>0;return n/4294967296;};
}
const themes=['nature','driftwood','rock','open-school','bottom-life','nano','angelfish','peaceful'] as const;
type Theme=typeof themes[number];
const layouts:Record<Theme,{decor:string[];flora:Record<string,number>;stock:Record<string,number>;open:number;density:number;description:string;tags:string[]}>= {
 nature:{decor:['driftwood','river-rocks'],flora:{'java-fern':3,anubias:3,'cryptocoryne':4,'rotala-rotundifolia':4,'dwarf-sagittaria':4},stock:{'cardinal-tetra':12,'endler-guppy':5,corydoras:6,'nerite-snail':2},open:.45,density:.65,description:'Một khối lũa, cây theo tầng và đường cát thoáng phía trước.',tags:['Thư giãn','Cây xanh']},
 driftwood:{decor:['hollow-log'],flora:{'java-fern':4,anubias:5,'cryptocoryne':3,'java-moss':2},stock:{'cardinal-tetra':14,'zebra-oto':6,'kuhli-loach':6},open:.5,density:.5,description:'Lũa rỗng làm chủ thể, cây bám và đàn cá vòng qua cửa hang.',tags:['Lũa đẹp','Cá đàn']},
 rock:{decor:['slate-stack','river-rocks'],flora:{anubias:3,'cryptocoryne':3,'dwarf-sagittaria':5},stock:{'rummynose-tetra':14,corydoras:6,'nerite-snail':3},open:.58,density:.38,description:'Đá lệch tâm, mảng cây thấp và khoảng nước giữa rộng.',tags:['Đá','Thoáng']},
 'open-school':{decor:['river-rocks'],flora:{vallisneria:4,'rotala-rotundifolia':3,'dwarf-sagittaria':3},stock:{'rummynose-tetra':18,'zebra-danio':8,corydoras:6},open:.68,density:.35,description:'Hành lang ngang rộng cho đàn cá nhanh và nhóm đáy chậm.',tags:['Cá đàn','Sinh động']},
 'bottom-life':{decor:['split-log','river-rocks'],flora:{anubias:4,'java-fern':3,'water-sprite':2,'cryptocoryne':3},stock:{'kuhli-loach':6,corydoras:6,'zebra-oto':6,'cardinal-tetra':8},open:.48,density:.5,description:'Cửa hang nhìn từ trước và vùng cát để quan sát sinh vật đáy.',tags:['Đáy sống','Hang lũa']},
 nano:{decor:['river-rocks'],flora:{'java-moss':3,anubias:2,'dwarf-sagittaria':4,'cryptocoryne':2},stock:{'endler-guppy':4,'amano-shrimp':5,'nerite-snail':2},open:.45,density:.55,description:'Vườn thấp, đá nhỏ và sinh vật nano có nhịp sống khác nhau.',tags:['Nano','Tép']},
 angelfish:{decor:['driftwood-stump'],flora:{'amazon-sword':3,vallisneria:4,'cryptocoryne':3},stock:{angelfish:3,'cardinal-tetra':16,corydoras:6,'nerite-snail':2},open:.65,density:.38,description:'Cây cao lùi sau, giữa hồ dành cho cá ông tiên lướt.',tags:['Ông tiên','Thoáng']},
 peaceful:{decor:['log-arch','river-rocks'],flora:{'java-fern':3,'ludwigia-repens':2,'water-sprite':2,'cryptocoryne':3,'dwarf-sagittaria':4},stock:{'cherry-barb':8,'endler-guppy':6,'zebra-oto':6,'nerite-snail':2},open:.5,density:.55,description:'Nhóm cá nhanh/chậm xen kẽ, cây đỏ nâu làm một điểm nhấn.',tags:['Cộng đồng','Êm dịu']},
};
export function makeAquascape(seed:number,gallons:number,theme:Theme):TankConfig {
 const random=seededRandom(seed),spec=layouts[theme],factor=Math.min(1.6,Math.max(.45,Math.sqrt(gallons/55)));
 const fish:Record<string,number>={},flora:Record<string,number>={};
 for(const[id,n]of Object.entries(spec.stock)){
  const sp=speciesById.get(id)!;if(sp.minGallons>gallons)continue;
  fish[id]=Math.min(sp.maxPerTank??100,Math.max(sp.minGroup,Math.round(n*factor*(.85+random()*.3))));
 }
 // Tiny rock tanks otherwise retain only one snail after minGallons filtering.
 // Keep an appropriate small swimming group alongside the slow bottom life.
 if(!Object.keys(fish).some(id=>!speciesById.get(id)!.invert))fish['endler-guppy']=4;
 for(const[id,n]of Object.entries(spec.flora))flora[id]=Math.max(1,Math.round(n*factor*(.8+random()*.3)));
 return normalizeStock({name:'Hồ cá ngẫu nhiên',water:'freshwater',gallons,substrate:theme==='nano'?'blacksand':'sand',background:theme==='angelfish'?'deepblue':'natural',lighting:'daylight',dayNight:'cycle',fish,flora,fishNames:{},decor:gallons<=20?['river-rocks']:spec.decor.slice(),layout:{generatorVersion:1,seed:seed>>>0,layoutTheme:theme,plantDensity:spec.density,openWaterRatio:spec.open,hardscapeType:theme==='rock'?'stone':theme==='nano'?'nano-rock':'wood',stockingProfile:theme,focalSide:random()<.5?-1:1,description:spec.description,tags:spec.tags.slice(),signatureShot:theme==='bottom-life'?'bottom':theme==='open-school'?'front':'diagonal'}});
}
export function randomAquascape(seed:number):TankConfig {
 const random=seededRandom(seed),gallons=[5,20,40,75,120,180][Math.floor(random()*6)];
 const eligible=themes.filter(t=>gallons>=40||['nano','nature','peaceful','rock'].includes(t));
 const config=makeAquascape(seed,gallons,eligible[Math.floor(random()*eligible.length)]);
 // Keep marine random tanks, with one reef mass instead of overlapping logs.
 if(random()<.28&&gallons>=40){
  return normalizeStock({...config,water:'saltwater',substrate:'crushedcoral',background:'reef',lighting:'actinic',fish:{'green-chromis':gallons>=120?18:10,'ocellaris-clown':2,'royal-gramma':1,'cleaner-shrimp':2,'turbo-snail':2,...(gallons>=75?{'yellow-tang':1}:{})},flora:{'toadstool':2,'acropora':3,'zoanthids':3,'montipora-plate':2},decor:['reef-rock','airstone'],layout:{...config.layout!,layoutTheme:'reef-open',hardscapeType:'reef',stockingProfile:'marine-community',openWaterRatio:.62,description:'Rạn san hô phía sau, đàn cá nhỏ và cá vàng có khoảng bơi rộng.',tags:['Biển','Cá đàn']}});
 }
 return config;
}
export const SHOWCASES:TankConfig[]=[
 ['Nature Driftwood Calm',75,'driftwood',4101],['Angelfish Showcase',120,'angelfish',4102],
 ['Nano Shrimp Garden',20,'nano',4103],['Schooling River Light',75,'open-school',4104],
 ['Lush Green Community',75,'nature',4105],['Wood & Stones Balance',75,'nature',4106],
 ['Bottom Life Habitat',75,'bottom-life',4107],['Red Accent Garden',55,'peaceful',4108],
 ['Soft Jungle Corners',120,'nature',4109],['Large Showcase Panorama',180,'open-school',4110],
 ['Peaceful Family Tank',40,'peaceful',4111],['Twilight Calm',75,'bottom-life',4112],
].map(([name,gallons,theme,seed])=>{
 const c=makeAquascape(Number(seed),Number(gallons),theme as Theme);c.name=String(name);
 if(seed===4105){c.flora={'amazon-sword':3,'rotala-rotundifolia':6,'water-sprite':3,anubias:4,'cryptocoryne':5};c.layout!.plantDensity=.78;c.layout!.openWaterRatio=.36;}
 if(seed===4106){c.decor=['log-arch','slate-stack'];c.layout!.focalSide=-1;}
 if(seed===4108){c.flora={'ludwigia-repens':5,'rotala-rotundifolia':3,anubias:4,'dwarf-sagittaria':5};c.layout!.tags=['Cây đỏ','Thư giãn'];}
 if(seed===4109){c.flora={'hornwort':4,'water-sprite':4,vallisneria:5,'cryptocoryne':5};c.layout!.layoutTheme='jungle-corners';c.layout!.openWaterRatio=.5;}
 if(seed===4110){c.fish={'congo-tetra':10,'cardinal-tetra':24,corydoras:8,'amano-shrimp':6};c.flora={vallisneria:6,'amazon-sword':3,'rotala-rotundifolia':5,'dwarf-sagittaria':6};}
 if(seed===4112){c.lighting='blackwater';c.background='black';c.fish={'kuhli-loach':8,'albino-bristlenose':1,'cherry-barb':10,'nerite-snail':2};c.layout!.tags=['Ban tối','Êm dịu'];}
 return normalizeStock(c);
});
// Additive migration: legacy tanks keep their exact placement path. Never seed
// or regenerate a saved legacy tank merely because this release is installed.
export function migrateLayout(config:TankConfig):TankConfig {
 const l=config.layout;if(!l)return config;
 if(l.generatorVersion===1&&Number.isFinite(l.seed)&&[-1,1].includes(l.focalSide))return config;
 const {layout:ignored,...legacy}=config;return legacy;
}
export function migrateAquariumState(state:unknown):unknown {
 if(!state||typeof state!=='object')return state;
 const s=state as {config?:TankConfig;savedTanks?:Record<string,TankConfig>};
 return {...s,...(s.config?{config:migrateLayout(s.config)}:{}),...(s.savedTanks?{savedTanks:Object.fromEntries(Object.entries(s.savedTanks).map(([name,c])=>[name,migrateLayout(c)]))}:{})};
}
