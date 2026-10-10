// Realism 4.1: contextual, single-spotlight underwater life director.
// Real paths and fish-specific eligibility, never timers that blindly play an animation.
import * as THREE from 'three';
import type { SpeciesDef } from '../types';
import type { SimEnv } from './FishSystem';
import type { SwimTunnel } from './Decor';

export const HABITAT_EVENTS = [
  'wood-approach','cave-inspect','cave-through','wood-interior-graze','cave-rest',
  'second-visitor','cave-jostle','territory-display','brief-chase','nip-and-dodge',
  'school-scout','school-rejoin','school-startle','school-split','yield-to-large',
  'wood-graze','shrimp-root-forage','snail-film-graze','bottom-crumbs','shade-retreat'
] as const;
export type HabitatEvent = typeof HABITAT_EVENTS[number];
type Mode='cruise'|'rest'|'dart'|'feed'|'forage';
export interface HabitAgent {
  key:string;sp:SpeciesDef;pos:THREE.Vector3;vel:THREE.Vector3;
  anchor:THREE.Vector3;mode:Mode;modeT:number;scale:number;rand:number;
}
interface Route {
  fish:HabitAgent;
  waypoints:THREE.Vector3[];
  index:number;
  ttl:number;
  kind:HabitatEvent;
  lastDist:number;
  stalled:number;
}
const vec=(p:THREE.Vector3)=>p.clone();
const randomOf=<T>(a:T[]):T=>a[Math.floor(Math.random()*a.length)];
const dist=(a:HabitAgent,b:HabitAgent)=>a.pos.distanceTo(b.pos);
const isShrimp=(a:HabitAgent)=>a.sp.id.includes('shrimp');
const isSnail=(a:HabitAgent)=>a.sp.id.includes('snail');
const isSmallFish=(a:HabitAgent,t:SwimTunnel)=>!a.sp.invert&&
  a.scale*.38<t.boreRadius*.73&&a.scale<
    t.entrance.distanceTo(t.exit)*.55;
const isTerritorial=(a:HabitAgent)=>a.sp.temperament!=='peaceful'&&
  !a.sp.invert;
const forages=(a:HabitAgent)=>a.sp.archetype==='bottom'||
  a.sp.archetype==='cleaner'||isShrimp(a);
export class HabitatDirector {
  readonly counts:Record<HabitatEvent,number> = Object.fromEntries(
    HABITAT_EVENTS.map(x=>[x,0])) as Record<HabitatEvent,number>;
  private routes=new Map<string,Route>();
  private active:HabitatEvent|null=null;
  private activeTime=0;
  private nextIn=5;
  private recent=new Map<string,{type:HabitatEvent;tunnel:string|null;until:number}>();
  private now=0;
  reset():void{
    this.routes.clear();this.active=null;this.activeTime=0;this.nextIn=7;
    this.recent.clear();
  }
  snapshot(env:SimEnv){
    return {types:[...HABITAT_EVENTS],counts:{...this.counts},active:this.active,
      activeFish:[...this.routes.keys()],tunnels:env.tunnels.map(t=>({
        id:t.id,through:t.through,capacity:t.capacity,
        radius:t.boreRadius,entry:t.entrance.toArray(),mid:t.middle.toArray(),
        exit:t.exit.toArray()}))};
  }
  private occupy(t:SwimTunnel):number{
    return [...this.routes.values()].filter(r=>r.waypoints.some(p=>
      p.distanceToSquared(t.middle)<Math.pow(t.boreRadius*1.6,2))).length;
  }
  private assign(a:HabitAgent,type:HabitatEvent,waypoints:THREE.Vector3[],ttl=15){
    const cleaned=waypoints.map(vec);
    this.routes.set(a.key,{fish:a,waypoints:cleaned,index:0,ttl,
      kind:type,lastDist:Infinity,stalled:0});
    a.mode='cruise';a.modeT=ttl;
  }
  private nearWood(a:HabitAgent,env:SimEnv):THREE.Vector3|null{
    if(!env.tunnels.length)return null;
    return randomOf(env.tunnels).middle.clone();
  }
  update(dt:number,agents:HabitAgent[],env:SimEnv):void{
    this.now+=dt;
    // A spotlight can contain two or a small school, but never two unrelated scenes.
    for(const [key,r] of this.routes){
      r.ttl-=dt;
      if(r.ttl<=0||!agents.includes(r.fish))this.routes.delete(key);
    }
    if(this.active){
      this.activeTime-=dt;
      if(this.activeTime<=0||this.routes.size===0){
        this.routes.clear();this.active=null;
        this.nextIn=8+Math.random()*14;
      }
      return;
    }
    this.nextIn-=dt;
    if(this.nextIn>0||agents.length===0||env.ecoMode==='relax'){
      return;
    }
    this.nextIn=5+Math.random()*9;
    const candidates=[...HABITAT_EVENTS].sort(()=>Math.random()-.5);
    for(const type of candidates){
      if(this.launch(type,agents,env)){
        this.active=type;
        this.counts[type]++;
        this.activeTime=26;
        break;
      }
    }
  }
  private launch(type:HabitatEvent,agents:HabitAgent[],env:SimEnv):boolean{
    const fish=agents.filter(a=>!a.sp.invert);
    const schoolers=fish.filter(a=>a.sp.archetype==='schooler');
    const territorials=fish.filter(isTerritorial);
    const bottom=agents.filter(forages);
    const shrimps=agents.filter(isShrimp),snails=agents.filter(isSnail);
    const lowLight=env.dayFactor<.5;
    const t=env.tunnels.length?randomOf(env.tunnels):null;
    const eligible=t?fish.filter(a=>isSmallFish(a,t)&&
      this.recent.get(a.key)?.tunnel!==t.id):[];
    const near=(list:HabitAgent[],target:HabitAgent,limit=.38)=>
      list.filter(a=>a!==target&&dist(a,target)<limit);
    const memory=(a:HabitAgent,tid:string|null)=>{
      this.recent.set(a.key,{type,tunnel:tid,until:this.now+80});
    };
    for(const [key,value] of this.recent){
      if(value.until<this.now)this.recent.delete(key);
    }
    if(type==='wood-approach'||type==='cave-inspect'||
      type==='cave-through'||type==='wood-interior-graze'||type==='cave-rest'){
      if(!t||!eligible.length||this.occupy(t)>=t.capacity)return false;
      const a=randomOf(eligible);
      if(type==='wood-interior-graze'&&!forages(a))return false;
      const path=type==='wood-approach'?[t.entrance]:
        type==='cave-inspect'?[t.entrance,t.middle,t.entrance]:
        type==='cave-through'&&t.through?[t.entrance,t.middle,t.exit]:
        type==='wood-interior-graze'?[t.entrance,t.middle,t.entrance]:
        [t.entrance,t.middle,t.entrance];
      this.assign(a,type,path,type==='cave-through'?28:19);
      memory(a,t.id);return true;
    }
    if(type==='second-visitor'||type==='cave-jostle'){
      if(!t||eligible.length<2)return false;
      const a=eligible[0],b=eligible[1];
      if(this.occupy(t)>=t.capacity)return false;
      this.assign(a,type,[t.entrance,t.middle,t.entrance],21);
      this.assign(b,type,[t.entrance.clone().add(new THREE.Vector3(.035,0,.018)),t.entrance],20);
      memory(a,t.id);memory(b,t.id);return true;
    }
    if(type==='territory-display'||type==='brief-chase'||type==='nip-and-dodge'){
      const attacker=territorials.length?randomOf(territorials):null;
      if(!attacker)return false;
      const victims=near(fish,attacker).filter(x=>x.key!==attacker.key);
      if(!victims.length)return false;
      const target=randomOf(victims);
      const away=target.pos.clone().sub(attacker.pos).normalize();
      if(away.lengthSq()<.5)away.set(1,0,0);
      const safe=(p:THREE.Vector3)=>new THREE.Vector3(
        THREE.MathUtils.clamp(p.x,-env.halfW*.75,env.halfW*.75),
        THREE.MathUtils.clamp(p.y,env.floorY+.03,env.surfaceY-.03),
        THREE.MathUtils.clamp(p.z,-env.halfD*.75,env.halfD*.75));
      if(type==='territory-display'){
        this.assign(attacker,type,[safe(attacker.pos.clone().lerp(target.pos,.45)),attacker.pos],9);
      }else{
        const escape=safe(target.pos.clone().addScaledVector(away,.11));
        this.assign(target,type,[escape],8);
        // Pursuer follows the same open-water corridor, never a straight
        // through-the-wood teleport; the collision system still applies.
        this.assign(attacker,type,[safe(attacker.pos.clone().lerp(escape,.6))],7);
      }
      memory(attacker,null);memory(target,null);return true;
    }
    if(type==='school-scout'||type==='school-rejoin'||
       type==='school-startle'||type==='school-split'){
      const schools=new Map<string,HabitAgent[]>();
      for(const a of schoolers)schools.set(a.sp.id,[...(schools.get(a.sp.id)||[]),a]);
      const groups=[...schools.values()].filter(g=>g.length>=(type==='school-split'?4:3));
      if(!groups.length)return false;
      const group=randomOf(groups),lead=randomOf(group);
      const centroid=new THREE.Vector3();
      for(const a of group)centroid.add(a.pos);
      centroid.multiplyScalar(1/group.length);
      const offset=new THREE.Vector3(.06,0,.05);
      if(type==='school-scout')this.assign(lead,type,[lead.pos.clone().add(offset),centroid],17);
      if(type==='school-rejoin')this.assign(lead,type,[centroid],12);
      if(type==='school-startle'){
        for(const a of group.slice(0,Math.min(group.length,4)))
          this.assign(a,type,[a.pos.clone().add(offset.clone().multiplyScalar((a.rand-.5)*2))],5);
      }
      if(type==='school-split'){
        group.slice(0,4).forEach((a,i)=>{
          this.assign(a,type,[centroid.clone().add(new THREE.Vector3(i%2===0?-.07:.07,0,.03)),centroid],15);
        });
      }
      memory(lead,null);return true;
    }
    if(type==='yield-to-large'){
      const sorted=[...fish].sort((a,b)=>a.scale-b.scale);
      const small=sorted[0],large=sorted[sorted.length-1];
      if(!small||!large||large.scale<small.scale*1.4||dist(small,large)>.33)return false;
      this.assign(small,type,[small.pos.clone().add(new THREE.Vector3(0,.02,.06))],8);
      memory(small,null);return true;
    }
    if(type==='wood-graze'||type==='shrimp-root-forage'||
       type==='snail-film-graze'||type==='bottom-crumbs'||type==='shade-retreat'){
      const options=type==='shrimp-root-forage'?shrimps:
        type==='snail-film-graze'?snails:
        type==='bottom-crumbs'?bottom:
        type==='shade-retreat'?(lowLight?fish.filter(a=>a.sp.archetype==='nocturnal'||a.sp.archetype==='ambusher'):[]):
        bottom;
      if(!options.length)return false;
      const a=randomOf(options),wood=this.nearWood(a,env);
      if((type==='wood-graze'||type==='shrimp-root-forage')&&!wood)return false;
      const at=wood??new THREE.Vector3(a.pos.x,env.floorY+.025,a.pos.z);
      const path=type==='snail-film-graze'?
        [a.pos.clone().add(new THREE.Vector3(.015,0,.01))]:
        [at.clone().add(new THREE.Vector3(.03,.01,0)),at];
      this.assign(a,type,path,14);
      if(type.includes('graze')||type.includes('forage')||type==='bottom-crumbs')a.mode='forage';
      if(type==='shade-retreat')a.mode='rest';
      memory(a,null);return true;
    }
    return false;
  }
  // Called once per fish, after boids/obstacle steering but before integration.
  steer(a:HabitAgent,steer:THREE.Vector3,dt:number,env:SimEnv):void{
    const r=this.routes.get(a.key);
    if(!r)return;
    const next=r.waypoints[r.index];
    if(!next){this.routes.delete(a.key);return;}
    const delta=next.clone().sub(a.pos);
    const d=delta.length();
    if(d<Math.max(.018,a.scale*.45)){
      r.index++;
      if(r.index>=r.waypoints.length){this.routes.delete(a.key);return;}
    }else{
      // Obstacle avoidance and body-aware containment stay active. No snapping.
      const progress=r.lastDist-d;
      r.stalled=progress>.00005?0:r.stalled+dt;
      r.lastDist=d;
      if(r.stalled>6){this.routes.delete(a.key);return;}
      steer.addScaledVector(delta.divideScalar(Math.max(d,1e-6)),3.2);
      a.anchor.copy(next);
      a.mode=r.kind==='shade-retreat'?'rest':
        r.kind.includes('graze')||r.kind.includes('forage')?'forage':'cruise';
      a.modeT=Math.max(a.modeT,.3);
    }
  }
}
