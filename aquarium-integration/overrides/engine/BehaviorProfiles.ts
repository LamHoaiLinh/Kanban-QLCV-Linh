import type { SpeciesDef } from '../types';

// Runtime personality only: no persisted config or legacy species ID changes.
export interface BehaviorProfile {
  pace:number; feedBoost:number; perception:number; pitchRate:number; restSpeed:number;
  foodInterest:'high'|'medium'|'bottom'; social:'tight'|'loose'|'solitary'|'grazer';
}
const calm:BehaviorProfile={pace:1.08,feedBoost:1.8,perception:.65,pitchRate:1.1,restSpeed:.25,foodInterest:'medium',social:'solitary'};
const school:BehaviorProfile={pace:1.35,feedBoost:2.25,perception:.8,pitchRate:1.8,restSpeed:.3,foodInterest:'high',social:'tight'};
const bottom:BehaviorProfile={pace:1.05,feedBoost:1.65,perception:.4,pitchRate:1.25,restSpeed:.08,foodInterest:'bottom',social:'grazer'};
const profiles:Record<string,BehaviorProfile>={
 'zebra-danio':{...school,pace:1.7,feedBoost:2.65,pitchRate:2.1},
 'guppy':{...school,pace:1.5,feedBoost:2.5,social:'loose'},
 'endler-guppy':{...school,pace:1.65,feedBoost:2.6,social:'loose'},
 'cardinal-tetra':{...school,pace:1.35},
 'rummynose-tetra':{...school,pace:1.45},
 'cherry-barb':{...school,pace:1.1,feedBoost:1.95,social:'loose'},
 'congo-tetra':{...school,pace:1.13,feedBoost:1.9,pitchRate:1.05,social:'loose'},
 'angelfish':{...calm,pace:1.08,feedBoost:1.9,pitchRate:.85,restSpeed:.42},
 'betta':{...calm,pace:1,feedBoost:1.65,pitchRate:.95,restSpeed:.18},
 'yellow-tang':{...calm,pace:1.32,feedBoost:2.15,perception:.9,restSpeed:.42},
 'blue-tang':{...calm,pace:1.42,feedBoost:2.3,perception:.9,restSpeed:.42},
 'ocellaris-clown':{...calm,pace:1.3,feedBoost:2.3,perception:.8,social:'loose'},
 'kuhli-loach':{...bottom,pace:1.12},'zebra-oto':bottom,'bristlenose-pleco':bottom,
 'amano-shrimp':bottom,'nerite-snail':bottom,
};
export const behaviorFor=(sp:SpeciesDef):BehaviorProfile=>profiles[sp.id]??
 (sp.invert||['bottom','cleaner','nocturnal'].includes(sp.archetype)?bottom:sp.archetype==='schooler'?school:calm);

export interface HabitatTraits {
 zone:'top'|'mid'|'bottom'|'crawler'|'surface-grazer'|'cave-seeker';
 confidenceRadius:number; // body-length multiplier for early obstacle avoidance
 shelterPreference:number;
 surfaceBehavior:'swim'|'graze'|'crawl'|'cave';
 secondaryMotion:'fins'|'body-wave'|'legs-antennae'|'slow-foot';
 scenePreference:'open'|'planted'|'shade';
}
const traitCache=new Map<string,HabitatTraits>();
export function habitatFor(sp:SpeciesDef):HabitatTraits {
 const cached=traitCache.get(sp.id);if(cached)return cached;
 const shrimp=sp.id.includes('shrimp'),snail=sp.id.includes('snail');
 const grazer=sp.id==='zebra-oto'||sp.id.includes('bristlenose'),cave=sp.shape.eelLike;
 const planted=sp.id==='cherry-barb'||grazer;
 const traits:HabitatTraits={
  zone:shrimp||snail?'crawler':cave?'cave-seeker':grazer?'surface-grazer':sp.zone,
  confidenceRadius:grazer||cave?.65:sp.id==='rummynose-tetra'?1.1:1,
  shelterPreference:cave?.85:grazer?.7:planted?.4:.08,
  surfaceBehavior:shrimp||snail?'crawl':grazer?'graze':cave?'cave':'swim',
  secondaryMotion:shrimp?'legs-antennae':snail?'slow-foot':cave?'body-wave':'fins',
  scenePreference:cave?'shade':planted||shrimp?'planted':'open',
 };traitCache.set(sp.id,traits);return traits;
}
