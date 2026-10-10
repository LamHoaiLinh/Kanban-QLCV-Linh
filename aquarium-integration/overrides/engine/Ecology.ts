// Realism 3: lightweight, non-punitive aquarium ecosystem.
// These are illustrative indices, NOT measured water chemistry. Running in
// simulation time means leaving a tab closed never kills or deletes livestock.
import type { TankConfig } from '../types';

export type EcoMode = 'natural' | 'relax';
export interface EcoSnapshot {
  temperature: number; // illustrative Celsius
  oxygen: number; // % comfort index, not actual dissolved oxygen
  cleanliness: number; // simulation index
  leftover: number; // visible uneaten pellets
  waste: number; // simulated level 0..1
  grazeEvents: number;
  restEvents: number;
  shelterEvents: number;
  schoolEvents: number;
  consumed: number;
  elapsed: number;
}
const clamp=(x:number,a:number,b:number)=>Math.max(a,Math.min(b,x));
export class EcoSystem {
  private elapsed=0;
  private waste=.10;
  private feeds=0;
  private consumed=0;
  private grazeEvents=0;
  private restEvents=0;
  private shelterEvents=0;
  private schoolEvents=0;
  private info:{water:'freshwater'|'saltwater';gallons:number;fish:number;plants:number}={
    water:'freshwater',gallons:30,fish:0,plants:0};
  private current:EcoSnapshot={
    temperature:25,oxygen:96,cleanliness:94,leftover:0,waste:.10,
    grazeEvents:0,restEvents:0,shelterEvents:0,schoolEvents:0,consumed:0,elapsed:0
  };
  configure(config:TankConfig):void{
    const next={
      water:config.water,gallons:config.gallons,
      fish:Object.values(config.fish).reduce((a,b)=>a+Math.max(0,b),0),
      plants:Object.values(config.flora).reduce((a,b)=>a+Math.max(0,b),0)
    };
    // A different aquascape starts a fresh observational session, but
    // no tank stock or saved configuration is ever changed here.
    if(this.info.water!==next.water||Math.abs(this.info.gallons-next.gallons)>1)
      this.waste=.10;
    this.info=next;
  }
  feed(kind:'normal'|'fish-cookie'|'bear-cookie'):void{
    this.feeds++;
    this.waste=clamp(this.waste+(kind==='normal'?.0018:.003),0,1);
  }
  eat():void{
    this.consumed++;
    this.waste=clamp(this.waste-.002,0,1);
  }
  event(event:'graze'|'rest'|'shelter'|'school'):void{
    if(event==='graze')this.grazeEvents++;
    else if(event==='rest')this.restEvents++;
    else if(event==='shelter')this.shelterEvents++;
    else this.schoolEvents++;
  }
  clean():void{
    this.waste=Math.min(this.waste,.08);
    // Only simulation water is cleaned: never touch livestock or food items.
  }
  advance(dt:number,mode:EcoMode,dayFactor:number,leftover:number):void{
    if(!Number.isFinite(dt)||dt<=0)return;
    dt=clamp(dt,0,.1);
    this.elapsed+=dt;
    const load=this.info.fish/Math.max(8,this.info.gallons);
    const plants=this.info.plants;
    // Non-punitive equilibrium: automatic filtration keeps values in a
    // comfortable range. In relaxation mode the background behaves quietly.
    const generated=mode==='natural' ? dt*(.00013*load+.000045*leftover) : 0;
    const filtration=dt*(.00024+Math.min(.00010,plants*.000008));
    this.waste=clamp(this.waste+generated-filtration,.02,.50);
    const daily=Math.sin(this.elapsed*.009)*.30;
    const tempBase=this.info.water==='saltwater'?25.3:24.7;
    const temperature=clamp(tempBase+daily+(dayFactor-.5)*.55,23.1,27.2);
    const oxygen=clamp(96+Math.min(3,plants*.25)-load*2.5-this.waste*13
      -(1-dayFactor)*1.4,78,99);
    const cleanliness=clamp(99-this.waste*47-Math.min(5,leftover*.18),70,99);
    this.current={temperature:+temperature.toFixed(1),
      oxygen:Math.round(oxygen),cleanliness:Math.round(cleanliness),
      leftover,waste:+this.waste.toFixed(4),grazeEvents:this.grazeEvents,
      restEvents:this.restEvents,shelterEvents:this.shelterEvents,
      schoolEvents:this.schoolEvents,
      consumed:this.consumed,elapsed:Math.round(this.elapsed)};
  }
  snapshot():EcoSnapshot{return {...this.current};}
}
