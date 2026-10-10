// Camera rig: a damped orbital camera with four modes.
//  orbit     — user drags to look, scrolls/pinches to zoom; gentle idle drift
//  cinematic — slow autonomous glide between framings (screensaver-friendly)
//  still     — locked "just watch" framing
//  follow    — smoothly tracks one fish (tap-a-fish)
// All motion is damped and slow by design — never nausea-inducing — and
// prefers-reduced-motion calms it further.

import * as THREE from 'three';
import type { CameraMode } from '../types';

export interface ObservedEvent {
  id:string;type:string;actorIds:string[];worldPositions:THREE.Vector3[];
  startAt:number;predictedDuration:number;confidence:number;visualInterest:number;
  routeOrBounds:THREE.Vector3[];eligibleCamera:boolean;
}
const _target = new THREE.Vector3();

export class CameraRig {
  camera: THREE.PerspectiveCamera;
  mode: CameraMode = 'orbit';
  reducedMotion = false;
  smartCinema = true;
  onManual?:()=>void;
  lastGestureWasPan=false;
  private halfW=.5;
  private height=.5;
  private midY=.25;
  private shot:ObservedEvent|null=null;
  private shotTime=0;
  private shotPause=0;
  private observed:ObservedEvent[]=[];
  private occluders:Array<{pos:THREE.Vector3;radius:number}>=[];
  private novelty=new Map<string,number>();
  private now=0;
  private decisionIn=0;
  readonly shotLog:Array<{time:number;type:string;reason:string}>=[];
  private pointers=new Map<number,{x:number;y:number}>();
  private gestures=0;
  private baseRadius=1.4;
  observe(events:ObservedEvent[],obstacles:Array<{pos:THREE.Vector3;radius:number}>):void{
    this.observed=events;this.occluders=obstacles;
  }
  snapshot(){return {mode:this.mode,shot:this.shot?.type??null,target:this.tLookAt.toArray(),
    radius:this.radius,manualTravel:this.lastPointerTravel,pan:this.lastGestureWasPan,log:[...this.shotLog]};}
  resetView():void{this.manual();this.frameTank(this.halfW,this.height,this.midY);}
  private manual():void{
    this.shot=null;this.shotPause=20;this.followTarget=null;this.mode='orbit';this.idleTime=0;
    this.onManual?.();
  }
  private clampTarget():void{
    const near=1-THREE.MathUtils.clamp((this.tRadius-this.minR)/(this.baseRadius-this.minR),0,1);
    // Zoomed-out target stays central, near views may inspect the whole tank.
    const range=.12+.70*near;
    this.tLookAt.x=THREE.MathUtils.clamp(this.tLookAt.x,-this.halfW*range,this.halfW*range);
    this.tLookAt.y=THREE.MathUtils.clamp(this.tLookAt.y,this.midY-this.height*range*.5,this.midY+this.height*range*.5);
    this.tLookAt.z=THREE.MathUtils.clamp(this.tLookAt.z,-this.halfW*.20,this.halfW*.20);
  }
  private pan(dx:number,dy:number):void{
    const worldPerPixel=2*this.tRadius*Math.tan(THREE.MathUtils.degToRad(this.camera.fov/2))/Math.max(1,this.dom.clientHeight);
    const right=new THREE.Vector3(1,0,0).applyQuaternion(this.camera.quaternion);
    const up=new THREE.Vector3(0,1,0).applyQuaternion(this.camera.quaternion);
    this.tLookAt.addScaledVector(right,-dx*worldPerPixel).addScaledVector(up,dy*worldPerPixel);
    this.clampTarget();
  }
  private visible(point:THREE.Vector3):boolean{
    const ray=point.clone().sub(this.camera.position),len=ray.length();ray.normalize();
    for(const ob of this.occluders){
      const along=ob.pos.clone().sub(this.camera.position).dot(ray);
      if(along<=0||along>=len-.035)continue;
      if(this.camera.position.clone().addScaledVector(ray,along).distanceTo(ob.pos)<ob.radius*.85)return false;
    }return true;
  }
  private direct(dt:number):void{
    this.shotTime+=dt;this.shotPause=Math.max(0,this.shotPause-dt);this.decisionIn-=dt;
    if(this.shot){
      const live=this.observed.find(e=>e.id===this.shot!.id);
      if((!live&&this.shotTime>=6)||this.shotTime>12){
        this.shotLog.push({time:this.now,type:this.shot.type,reason:live?'shot complete':'actor/action ended'});
        this.shot=null;this.shotPause=12;this.tLookAt.set(0,this.midY,0);this.tRadius=this.baseRadius;
      }else if(live){
        const center=new THREE.Vector3();live.worldPositions.forEach(p=>center.add(p));center.multiplyScalar(1/live.worldPositions.length);
        if(live.type==='surface-dash')center.y=Math.min(center.y,this.height*.94);
        this.tLookAt.copy(center);this.clampTarget();
        return;
      }else{return;}
    }
    if(this.shotPause>0||this.decisionIn>0)return;this.decisionIn=1;
    const options=this.observed.filter(e=>e.eligibleCamera&&e.confidence>.7&&e.worldPositions.length>0&&
      this.now-(this.novelty.get(e.type)??-180)>90&&e.worldPositions.some(p=>this.visible(p)));
    options.sort((a,b)=>b.visualInterest-a.visualInterest);
    const e=options[0];if(!e)return;
    this.shot=e;this.shotTime=0;this.novelty.set(e.type,this.now);
    const points=[...e.worldPositions,...e.routeOrBounds];const box=new THREE.Box3().setFromPoints(points),extent=box.getSize(new THREE.Vector3()).length();
    const frame=Math.max(extent*1.5,this.halfW*.80);
    this.tRadius=THREE.MathUtils.clamp(frame,this.baseRadius*.60,this.baseRadius);
    this.tTheta=THREE.MathUtils.clamp(this.theta,-.5,.5);this.tPhi=Math.PI/2.17;
    this.shotLog.push({time:this.now,type:e.type,reason:'live actors, novelty and clear line of sight'});
    if(this.shotLog.length>100)this.shotLog.shift();
  }

  // Spherical state around the look target.
  private theta = 0;          // azimuth (0 = looking at front glass)
  private phi = Math.PI / 2.2; // polar
  private radius = 1.4;
  private tTheta = 0;
  private tPhi = Math.PI / 2.2;
  private tRadius = 1.4;
  private lookAt = new THREE.Vector3();
  private tLookAt = new THREE.Vector3();

  private dragging = false;
  private idleTime = 0;
  private minR = 0.4;
  private maxR = 4;
  private cineT = 0;
  followTarget: (() => THREE.Vector3 | null) | null = null;

  // Track pointer movement so the engine can tell a click from a drag.
  lastPointerTravel = 0;

  constructor(private dom: HTMLElement, aspect: number) {
    this.camera = new THREE.PerspectiveCamera(46, aspect, 0.01, 60);
    dom.addEventListener('pointerdown', this.onDown);
    window.addEventListener('pointermove', this.onMove);
    dom.addEventListener('pointerup', this.onUp);
    dom.addEventListener('pointercancel', this.onUp);
    window.addEventListener('blur',this.onBlur);
    dom.addEventListener('wheel', this.onWheel, { passive: false });

  }

  dispose(): void {
    this.dom.removeEventListener('pointerdown', this.onDown);
    window.removeEventListener('pointermove', this.onMove);
    this.dom.removeEventListener('pointerup', this.onUp);
    this.dom.removeEventListener('pointercancel', this.onUp);
    window.removeEventListener('blur',this.onBlur);
    this.dom.removeEventListener('wheel', this.onWheel);

  }

  // Frame a (new) tank: pull back proportionally to its width.
  frameTank(halfW: number, height: number, midY: number): void {
    this.halfW=halfW;this.height=height;this.midY=midY;this.shot=null;
    this.tLookAt.set(0, midY, 0);
    this.lookAt.copy(this.tLookAt);
    this.tRadius = Math.max(0.5, halfW * 2.6);
    this.baseRadius=this.tRadius;
    this.radius = this.tRadius * 1.05;
    this.minR = Math.max(0.18, halfW * 0.5);
    this.maxR = halfW * 6 + 1;
    this.tTheta = this.theta = 0;
    this.tPhi = this.phi = Math.PI / 2.14;
  }

  setMode(mode: CameraMode): void {
    this.mode = mode;this.shot=null;this.shotPause=2;
    this.cineT = 0;
  }

  private onDown = (e: PointerEvent): void => {
    if (e.button !== 0) return;
    if(this.pointers.size===0){this.lastPointerTravel=0;this.lastGestureWasPan=e.shiftKey;}
    this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});this.dom.setPointerCapture(e.pointerId);
    this.gestures=this.pointers.size;this.dragging=true;this.manual();
    if(this.pointers.size>1)this.lastGestureWasPan=true;
  };
  private onMove = (e: PointerEvent): void => {
    const old=this.pointers.get(e.pointerId);if(!old)return;
    const before=[...this.pointers.values()];
    this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});const after=[...this.pointers.values()];
    const dx=e.clientX-old.x,dy=e.clientY-old.y;
    this.lastPointerTravel+=Math.hypot(dx,dy);this.idleTime=0;
    if(after.length===2){
      const c=(p:Array<{x:number;y:number}>)=>({x:(p[0].x+p[1].x)/2,y:(p[0].y+p[1].y)/2});
      const a=c(before),b=c(after);this.pan(b.x-a.x,b.y-a.y);
      const dist=(p:Array<{x:number;y:number}>)=>Math.hypot(p[0].x-p[1].x,p[0].y-p[1].y);
      const d0=dist(before),d1=dist(after);
      if(d0>2&&d1>2)this.tRadius=THREE.MathUtils.clamp(this.tRadius*d0/d1,this.minR,this.maxR);
      this.clampTarget();this.lastGestureWasPan=true;
    }else if(e.shiftKey){this.lastGestureWasPan=true;this.pan(dx,dy);}
    else{
      this.tTheta=THREE.MathUtils.clamp(this.tTheta-dx*.005,-1.15,1.15);
      this.tPhi=THREE.MathUtils.clamp(this.tPhi-dy*.004,.9,2.0);
    }
  };
  private onUp = (e:PointerEvent): void => {
    this.pointers.delete(e.pointerId);this.gestures=this.pointers.size;this.dragging=this.gestures>0;
    if(this.dom.hasPointerCapture(e.pointerId))this.dom.releasePointerCapture(e.pointerId);
  };
  private onBlur=():void=>{this.pointers.clear();this.dragging=false;this.gestures=0;this.lastPointerTravel=999;};
  private onWheel = (e: WheelEvent): void => {
    e.preventDefault();this.manual();
    this.tRadius=THREE.MathUtils.clamp(this.tRadius*Math.exp(Math.sign(e.deltaY)*.09),this.minR,this.maxR);
    this.clampTarget();
  };

  update(dt: number): void {
    const damp = (a: number, b: number, l: number) => THREE.MathUtils.damp(a, b, l, dt);
    this.idleTime += dt;this.now+=dt;
    const calm = this.reducedMotion ? 0.3 : 1;

    if(this.mode==='cinematic'&&this.smartCinema&&!this.reducedMotion){
      this.direct(dt);
    } else if (this.mode === 'cinematic') {
      // A slow figure-eight glide: azimuth sweeps, elevation bobs, zoom breathes.
      this.cineT += dt * 0.05 * calm;
      this.tTheta = Math.sin(this.cineT) * 0.55;
      this.tPhi = Math.PI / 2.15 + Math.sin(this.cineT * 0.7) * 0.1;
      this.tRadius = THREE.MathUtils.clamp(this.tRadius, this.minR, this.maxR);
      this.tRadius=THREE.MathUtils.clamp(this.baseRadius*(1+.025*Math.sin(this.cineT*.43)),this.minR,this.maxR);
    } else if (this.mode === 'orbit' && this.idleTime > 14 && !this.dragging) {
      // After 14s untouched, a barely-perceptible drift keeps the scene alive.
      this.tTheta=THREE.MathUtils.clamp(this.tTheta+dt*.006*calm,-1.15,1.15);
    }

    if (this.mode === 'follow' && this.followTarget) {
      const p = this.followTarget();
      if (p) {
        this.tLookAt.copy(p);
        this.tRadius = THREE.MathUtils.clamp(this.tRadius, this.minR, this.maxR * 0.4);
      }
    } else {
      // lookAt eases back to the framed center set by frameTank.
    }

    const cinematic=this.mode==='cinematic';
    const thetaTarget=this.theta+THREE.MathUtils.clamp(this.tTheta-this.theta,-dt*.18,dt*.18);
    this.theta = damp(this.theta,thetaTarget,cinematic?1.2:9);
    this.phi = damp(this.phi, this.tPhi, cinematic?1.2:3);
    this.radius = damp(this.radius, this.tRadius, cinematic?1.0:3);
    this.lookAt.x = damp(this.lookAt.x, this.tLookAt.x, cinematic?1.0:2.5);
    this.lookAt.y = damp(this.lookAt.y, this.tLookAt.y, cinematic?1.0:2.5);
    this.lookAt.z = damp(this.lookAt.z, this.tLookAt.z, cinematic?1.0:2.5);

    const sinPhi = Math.sin(this.phi);
    this.camera.position.set(
      this.lookAt.x + this.radius * sinPhi * Math.sin(this.theta),
      this.lookAt.y + this.radius * Math.cos(this.phi),
      this.lookAt.z + this.radius * sinPhi * Math.cos(this.theta)
    );
    _target.copy(this.lookAt);
    this.camera.lookAt(_target);
  }

  // Return look target to tank center (when follow ends).
  releaseFollow(midY: number): void {
    this.tLookAt.set(0, midY, 0);
    this.followTarget = null;
  }

  /**
   * Lock a dead-front, perfectly static framing (used by the tvOS ambient
   * capture, scripts/capture-scene.mjs).
   *
   * Why static: the cinematic glide *integrates* a sine into tRadius rather
   * than oscillating it, and at cineT's 0.05/s rate the sine's full period is
   * ~292s — so across a 70s capture it never goes negative and the camera only
   * ever dollies OUT. v1.0.0's loops doubled their radius mid-render: the tank
   * shrank to a small box, the dark room around it filled the frame, and the
   * tail no longer matched the head so the seam crossfade ghosted a dark
   * rectangle over everything. A fixed camera makes every frame's framing
   * identical, so the loop wraps invisibly.
   *
   * `coverDepth` picks which plane must fill the viewport:
   *   0 → the front pane (the whole glass box is composed in frame, with the
   *       room visible around it — the "aquarium in a dark room" look)
   *   1 → the back wall (nothing but water reaches the frame edges — the
   *       full-bleed, pressed-against-the-glass look)
   * `overfill` scales the fit: > 1 pushes in past the edges for safety margin,
   * < 1 pulls back so the covered plane sits *inside* the frame with room
   * around it (that's how the bordered look leaves the box fully composed).
   *
   * halfH is the vertical half-extent to cover around midY (the tank is not
   * centered on midY, so the caller passes the larger of the two halves).
   */
  lockFrontView(
    halfW: number,
    halfH: number,
    halfD: number,
    midY: number,
    coverDepth = 1,
    overfill = 1.04,
  ): void {
    const tan = Math.tan(THREE.MathUtils.degToRad(this.camera.fov / 2));
    // Distance from the camera at which the tank's extents exactly fill the
    // frame. The tighter of the two axes wins so BOTH over-fill, never one.
    const throwDist = Math.min(halfH / tan, halfW / (tan * this.camera.aspect)) / overfill;
    // That distance is measured to the plane we want to cover; the camera then
    // sits that far in front of it. Front pane is at +halfD, back wall at -halfD.
    const coverZ = THREE.MathUtils.lerp(halfD, -halfD, THREE.MathUtils.clamp(coverDepth, 0, 1));
    // Never push the camera through the front glass — that would clip the pane
    // and lose the caustics/refraction that sell the shot.
    const radius = Math.max(throwDist + coverZ, halfD * 1.06);

    this.mode = 'still';
    this.tLookAt.set(0, midY, 0);
    this.lookAt.copy(this.tLookAt);
    this.tTheta = this.theta = 0;        // dead front
    this.tPhi = this.phi = Math.PI / 2;  // level — no tilt, no drift
    this.minR = Math.min(this.minR, radius);
    this.tRadius = this.radius = radius; // snap; capture records from frame 0
  }
}
