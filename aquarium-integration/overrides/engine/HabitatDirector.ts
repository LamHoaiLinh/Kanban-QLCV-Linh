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
  startedAt:number;
  waypoints:THREE.Vector3[];
  index:number;
  ttl:number;
  kind:HabitatEvent;
  lastDist:number;
  stalled:number;
  hold:number;
}
const vec=(p:THREE.Vector3)=>p.clone();
const randomOf=<T>(a:T[]):T=>a[Math.floor(Math.random()*a.length)];
const dist=(a:HabitAgent,b:HabitAgent)=>a.pos.distanceTo(b.pos);
const isShrimp=(a:HabitAgent)=>a.sp.id.includes('shrimp');
const isSnail=(a:HabitAgent)=>a.sp.id.includes('snail');
const isSmallFish=(a:HabitAgent,t:SwimTunnel,env:SimEnv)=>{
  if(a.sp.invert||a.scale*.38>=t.boreRadius*.73||
    a.scale>=t.entrance.distanceTo(t.exit)*.55)return false;
  const margin=Math.max(.007,a.scale*.30);
  for(let i=0;i<=8;i++){
    const t01=i/8;
    const p=t01<.5?t.entrance.clone().lerp(t.middle,t01*2):
      t.middle.clone().lerp(t.exit,(t01-.5)*2);
    // Reject blocked corridors caused by other decorations overlapping a log.
    for(const ob of env.obstacles){
      if(p.distanceToSquared(ob.pos)<Math.pow(ob.radius+margin,2))return false;
    }
  }
  return true;
};
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
  liveEvents(_env:SimEnv){
    const groups=new Map<string,Route[]>();
    for(const r of this.routes.values())groups.set(r.kind,[...(groups.get(r.kind)??[]),r]);
    return [...groups].map(([type,rs])=>({id:type+':'+rs[0].fish.key,type,
      actorIds:rs.map(r=>r.fish.key),worldPositions:rs.map(r=>r.fish.pos.clone()),startAt:rs[0].startedAt,
      predictedDuration:Math.max(...rs.map(r=>r.ttl)),confidence:1,visualInterest:type.includes('cave')?.8:.65,
      routeOrBounds:rs.flatMap(r=>r.waypoints.map(vec)),eligibleCamera:true}));
  }
  qaLaunch(type:HabitatEvent,agents:HabitAgent[],env:SimEnv):boolean{
    if(!HABITAT_EVENTS.includes(type))return false;this.reset();
    if(!this.launch(type,agents,env))return false;
    this.active=type;this.activeTime=Math.max(26,...[...this.routes.values()].map(r=>r.ttl));this.counts[type]++;return true;
  }
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
  inCorridor(a:HabitAgent):boolean{
    const kind=this.routes.get(a.key)?.kind;
    return !!kind&&(kind.startsWith('cave-')||kind==='wood-interior-graze');
  }
  private assign(a:HabitAgent,type:HabitatEvent,waypoints:THREE.Vector3[],ttl=15){
    const cleaned=waypoints.map(vec);
    let distance=0,previous=a.pos;
    for(const point of cleaned){distance+=previous.distanceTo(point);previous=point;}
    ttl=Math.min(60,Math.max(ttl,distance/Math.max(.003,a.sp.swim.cruise*a.scale*.25)*1.25+3));
    this.routes.set(a.key,{fish:a,startedAt:this.now,waypoints:cleaned,index:0,ttl,
      kind:type,lastDist:Infinity,stalled:0,hold:0});
    a.mode='cruise';a.modeT=ttl;
  }
  // One deterministic, bounded detour around the first solid that crosses the
  // route; steering and final collision containment handle all other props.
  private safePath(from:THREE.Vector3,to:THREE.Vector3,env:SimEnv):THREE.Vector3[]{
    const line=to.clone().sub(from);
    const lenSq=line.lengthSq();
    if(lenSq<1e-6)return [to.clone()];
    for(const ob of env.obstacles){
      const t=THREE.MathUtils.clamp(ob.pos.clone().sub(from).dot(line)/lenSq,0,1);
      if(t<.04||t>.96)continue;
      const near=from.clone().addScaledVector(line,t);
      const clearance=ob.radius+.04;
      if(near.distanceToSquared(ob.pos)>clearance*clearance)continue;
      const across=new THREE.Vector3(-line.z,0,line.x).normalize();
      if(across.lengthSq()<.1)across.set(1,0,0);
      const left=ob.pos.clone().addScaledVector(across,clearance);
      const right=ob.pos.clone().addScaledVector(across,-clearance);
      const score=(v:THREE.Vector3)=>from.distanceTo(v)+v.distanceTo(to);
      const detour=score(left)<score(right)?left:right;
      detour.x=THREE.MathUtils.clamp(detour.x,-env.halfW*.82,env.halfW*.82);
      detour.y=THREE.MathUtils.clamp(to.y,env.floorY+.025,env.surfaceY-.025);
      detour.z=THREE.MathUtils.clamp(detour.z,-env.halfD*.82,env.halfD*.82);
      return [detour,to.clone()];
    }
    return [to.clone()];
  }
  private nearWood(a:HabitAgent,env:SimEnv):THREE.Vector3|null{
    const nearby=env.tunnels.filter(t=>a.pos.distanceTo(t.middle)<.34);
    if(!nearby.length)return null;
    nearby.sort((x,y)=>a.pos.distanceToSquared(x.middle)-a.pos.distanceToSquared(y.middle));
    return nearby[0].middle.clone();
  }
  update(dt:number,agents:HabitAgent[],env:SimEnv):void{
    this.now=env.time;
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
        this.activeTime=Math.max(26,...[...this.routes.values()].map(r=>r.ttl));
        break;
      }
    }
  }
  private launch(type:HabitatEvent,agents:HabitAgent[],env:SimEnv):boolean{
    agents=agents.filter(a=>this.recent.get(a.key)?.type!==type);
    const fish=agents.filter(a=>!a.sp.invert);
    const schoolers=fish.filter(a=>a.sp.archetype==='schooler');
    const territorials=fish.filter(isTerritorial);
    const bottom=agents.filter(forages);
    const shrimps=agents.filter(isShrimp),snails=agents.filter(isSnail);
    const lowLight=env.dayFactor<.5;
    const t=env.tunnels.length?randomOf(env.tunnels):null;
    const eligible=t?fish.filter(a=>a.pos.distanceTo(t.entrance)<.30&&isSmallFish(a,t,env)&&
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
        this.assign(attacker,type,this.safePath(attacker.pos,safe(attacker.pos.clone().lerp(target.pos,.45)),env),9);
      }else{
        const escape=safe(target.pos.clone().addScaledVector(away,.11));
        this.assign(target,type,this.safePath(target.pos,escape,env),8);
        // Pursuer follows the same open-water corridor, never a straight
        // through-the-wood teleport; the collision system still applies.
        this.assign(attacker,type,this.safePath(attacker.pos,safe(attacker.pos.clone().lerp(escape,.6)),env),7);
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
      if(type==='snail-film-graze'&&
        (a.pos.y>env.floorY+.08||a.pos.distanceTo(wood??a.pos)>.22))return false;
      const at=wood??new THREE.Vector3(a.pos.x,env.floorY+.025,a.pos.z);
      const shrimpTunnel=type==='shrimp-root-forage'?
        env.tunnels.find(t=>a.pos.distanceTo(t.entrance)<.32&&
          a.scale*.4<t.boreRadius*.7&&
          t.entrance.distanceTo(t.exit)>a.scale*2):null;
      const path=shrimpTunnel?
        [shrimpTunnel.entrance,shrimpTunnel.middle,shrimpTunnel.entrance]:
        type==='snail-film-graze'?
        [a.pos.clone().add(new THREE.Vector3(.015,0,.01))]:
        [at.clone().add(new THREE.Vector3(.03,.01,0)),at];
      this.assign(a,type,path,14);
      if(type.includes('graze')||type.includes('forage')||type==='bottom-crumbs')a.mode='forage';
      if(type==='shade-retreat')a.mode='rest';
      memory(a,null);return true;
    }
    return false;
  }
  cancelFor(a:HabitAgent):void{this.routes.delete(a.key);}
  // Crawlers keep their existing wall/floor mechanics. They only make a small
  // natural crawl along the substrate, not an impossible flight through wood.
  crawl(a:HabitAgent,dt:number,env:SimEnv):void{
    const r=this.routes.get(a.key);
    if(!r)return;
    const p=r.waypoints[r.index];
    if(!p){this.routes.delete(a.key);return;}
    const dx=p.x-a.pos.x,dz=p.z-a.pos.z;
    const d=Math.hypot(dx,dz);
    if(d<.012){this.routes.delete(a.key);return;}
    const step=Math.min(d,dt*.004);
    const x=THREE.MathUtils.clamp(a.pos.x+dx/d*step,-env.halfW*.95,env.halfW*.95);
    const z=THREE.MathUtils.clamp(a.pos.z+dz/d*step,-env.halfD*.95,env.halfD*.95);
    if(a.sp.id.includes('snail')||a.sp.id.includes('shrimp')){
      // Continue a deliberate film-grazing crawl along the floor; no teleport.
      a.pos.x=x;a.pos.z=z;
      a.mode='forage';
    }
  }
  // Called once per fish, after boids/obstacle steering but before integration.
  steer(a:HabitAgent,steer:THREE.Vector3,dt:number,env:SimEnv):void{
    const r=this.routes.get(a.key);
    if(!r)return;
    const next=r.waypoints[r.index];
    if(!next){this.routes.delete(a.key);return;}
    if(r.hold>0){
      r.hold-=dt;
      a.mode=r.kind==='cave-rest'?'rest':'forage';
      a.modeT=Math.max(a.modeT,.25);
      return;
    }
    const delta=next.clone().sub(a.pos);
    const d=delta.length();
    if(d<Math.max(.018,a.scale*.45)){
      if(r.index===1 && r.waypoints.length>=3 && (
        r.kind==='cave-rest'||r.kind==='cave-inspect'||
        r.kind==='wood-interior-graze')){
        r.hold=r.kind==='cave-rest'?5:r.kind==='cave-inspect'?1.5:3;
      }
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
      a.mode=r.kind==='brief-chase'||r.kind==='nip-and-dodge'||r.kind==='school-startle'?'dart':r.kind==='shade-retreat'?'rest':
        r.kind.includes('graze')||r.kind.includes('forage')?'forage':'cruise';
      a.modeT=Math.max(a.modeT,.3);
    }
  }
}
