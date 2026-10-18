// Procedural fish builder.
//
// Geometry: each species's body is lofted from elliptical cross-sections along
// a spine (nose at x=+0.5, tail tip at x=-0.5, unit length — the instance
// matrix scales it to real size). Fins are thin double-sided sheets attached in
// a second geometry group so they can use a translucent material.
//
// Motion: swimming is done ENTIRELY in the vertex shader (RESEARCH.md §3.1) —
// a traveling sine wave runs nose→tail with amplitude growing toward the tail.
// The CPU only updates a per-fish accumulated phase, so a whole school is one
// instanced draw call. Speed is coupled to tail-beat frequency (U ≈ 0.7·L·f),
// which is what makes the movement read as *swimming* instead of gliding.

import * as THREE from 'three';
import type { SpeciesDef } from '../types';
import { fishTexture } from './textures';
import { applyUnderwater } from './shaders';

const TAU = Math.PI * 2;

// Vertex-shader declarations for the swim deformation.
const swimPars = /* glsl */ `
  attribute vec4 aDyn;      // per-instance dynamics: x = accumulated swim phase,
                            // y = turn bend (curls body into turns), z = pectoral flap amount
  attribute float aRand;    // per-instance random seed (desynchronizes idle motion)
  attribute float aPart;    // per-vertex: 0 body, 1 caudal fin, 2 median fins, 3 pectorals
  attribute float aFinFlex; // distance of fin membrane from its fixed root
  attribute float aFlutterD;// per-vertex: distance from a pectoral fin's root
  uniform float uWaveLen;   // undulation wavelength in body lengths
  uniform float uAmp;       // tail amplitude as a fraction of body length
  uniform float uMode;      // swim mode: 0 eel … 3 tail-only
  uniform float uFinSoftness; // subtle stiffness per species
`;

// The swim deformation itself, spliced in right after Three.js computes
// `transformed` (the local-space vertex position).
const swimHook = /* glsl */ `
{
  float s = clamp(0.5 - transformed.x, 0.0, 1.0); // 0 at nose → 1 at tail tip

  // Amplitude envelope: which part of the body undulates depends on the swim
  // mode (eels wave everything; tunas & boxfish only wave the tail).
  float env;
  if (uMode < 0.5)      env = 0.25 + 0.75 * s;                        // anguilliform
  else if (uMode < 1.5) env = 0.08 + 0.92 * smoothstep(0.30, 1.0, s); // subcarangiform
  else if (uMode < 2.5) env = 0.05 + 0.95 * smoothstep(0.55, 1.0, s); // carangiform
  else                  env = smoothstep(0.78, 1.0, s);               // ostraciiform

  // The traveling wave: aDyn.x is the phase accumulated on the CPU as
  // phase += 2π·f·dt, so changing speed never "pops" the animation.
  float wave = sin(s * 6.28318 / uWaveLen - aDyn.x);
  transformed.z += uAmp * env * wave;

  // Head recoil: the front of the body counter-sways slightly — without this
  // the fish looks like a flag on a stick instead of a swimmer.
  transformed.z -= uAmp * 0.065 * sin(-aDyn.x) * (1.0 - s) * (1.0 - s);

  // Bank/bend into turns: parabolic curvature along the spine.
  transformed.z += aDyn.y * s * s * 0.7;

  // Real membrane flexion: dorsal / anal tips visibly trail in the XY
  // silhouette (not only in Z, which was invisible from a side camera).
  // Fin roots are welded to the body; the quadratic span makes tips supple.
  // Tail responds to the actual tailbeat, median fins to slower water drift.
  if (aPart > 0.5 && aPart < 2.5 && aFinFlex > 0.0) {
    float finSpan = aFinFlex * aFinFlex;
    float finScale = uFinSoftness * finSpan * (0.72 + 0.32 * aDyn.z);
    if (aPart < 1.5) {
      float tailPhase = aDyn.x - 1.5 * aFinFlex + transformed.y * 4.2;
      transformed.z += finScale * 0.65 * sin(tailPhase);
      transformed.y += finScale * 0.23 * cos(tailPhase);
      transformed.x += finScale * 0.32 * sin(tailPhase + 0.7);
    } else {
      float rippling = uTime * 2.15 + aRand * 7.1
        - transformed.x * 5.3 - aFinFlex * 1.5;
      transformed.z += finScale * 0.72 * sin(rippling);
      transformed.x -= finScale * 0.74 * sin(rippling - 0.6);
      transformed.y += finScale * 0.22 * cos(rippling);
    }
  }
  // A brief jaw opening synchronized to real feeding, not a perpetual loop.
  if (aPart < 0.5 && uFinSoftness > 0.0) {
    float lip = 1.0 - smoothstep(0.01, 0.14, s);
    float lowerJaw = 1.0 - smoothstep(-0.01, 0.015, transformed.y);
    transformed.y -= lip * lowerJaw * aDyn.w * 0.042;
    transformed.x += lip * aDyn.w * 0.025;
    transformed.x -= lip * lowerJaw * aDyn.w * 0.007;
  }

  // Pectoral fin sculling: hovering fish constantly flutter their side fins
  // (a stationary fish is unstable — RESEARCH.md §3.2). aDyn.z rises as the
  // fish slows down, so flutter appears exactly when swimming stops.
  if (aPart > 2.5) {
    transformed.z += aFlutterD * aDyn.z * 0.35 * sin(uTime * 11.0 + aRand * 37.0);
    transformed.y += aFlutterD * aDyn.z * 0.18 * cos(uTime * 11.0 + aRand * 37.0);
  }

  // Gentle gill/breathing pulse near the head — barely visible, but it's the
  // difference between a fish and a statue when the fish is at rest.
  float headness = smoothstep(0.35, 0.05, s);
  transformed.z *= 1.0 + 0.03 * headness * sin(uTime * 2.4 + aRand * 51.0);
}
`;

export interface FishAsset {
  geometry: THREE.BufferGeometry;
  materials: THREE.Material[];   // [body, fins]
  uniforms: { uWaveLen: THREE.IUniform; uAmp: THREE.IUniform; uMode: THREE.IUniform; uFinSoftness: THREE.IUniform };
}

const assetCache = new Map<string, FishAsset>();

export function getFishAsset(sp: SpeciesDef,low=false): FishAsset {
  const key=sp.id+(low?':low':':full');
  let asset = assetCache.get(key);
  if (!asset) {
    if(low&&!sp.id.includes('snail')){const full=getFishAsset(sp);asset={geometry:buildFishGeometry(sp,true),materials:full.materials,uniforms:full.uniforms};}
    else asset = buildFishAsset(sp);
    assetCache.set(key, asset);
  }
  return asset;
}

function buildFishAsset(sp: SpeciesDef): FishAsset {
  const geometry = sp.id.includes('snail') ? buildSnailGeometry(sp) : buildFishGeometry(sp);

  const uniforms = {
    uWaveLen: { value: sp.swim.waveLen },
    // Snails are rigid — zero amplitude keeps the shell from wobbling.
    uAmp: { value: sp.id.includes('snail') ? 0 : sp.swim.amp },
    uMode: { value: sp.swim.mode },
    uFinSoftness: { value: sp.invert || sp.shape.eelLike ? 0 : sp.id==='angelfish' ? .085 : sp.id==='discus' ? .062 : sp.shape.finLong ? .045 : .018 },
  };

  const map = fishTextureWithEye(sp);
  const body = new THREE.MeshStandardMaterial({
    map,
    roughness: sp.shape.eelLike ? .49 : (sp.id==='angelfish'||sp.id==='discus'||sp.adultSizeIn>=6) ? .57 : sp.id==='betta'||sp.id==='guppy'?.44:.42,
    metalness: (sp.id==='angelfish'||sp.id==='discus'||sp.adultSizeIn>=6 ? .14 : .34)*sp.palette.iridescence,
    envMapIntensity: (sp.id==='angelfish'||sp.id==='discus'||sp.adultSizeIn>=6 ? .36 : .58)+sp.palette.iridescence*.42,
  });
  const fins = new THREE.MeshStandardMaterial({
    color: new THREE.Color(sp.palette.fin),
    roughness: sp.id==='angelfish'?.92:sp.shape.finLong?.78:.67,
    metalness: 0,
    transparent: true,
    opacity: sp.id==='angelfish'?sp.palette.finOpacity*.72:sp.palette.finOpacity,
    vertexColors: true, // thin ray-tinted fin membranes
    side: THREE.DoubleSide,
    depthWrite: false,
  });
  for (const m of [body, fins]) {
    applyUnderwater(m, {
      caustics: true,
      causticStrength: 0.7,
      vertexPars: swimPars,
      vertexHook: swimHook,
      extraUniforms: uniforms,
    });
  }
  return { geometry, materials: [body, fins], uniforms };
}

// Paint the species texture, then add the eye directly into the map (the UV
// layout is deterministic, so we know exactly where the head is).
function fishTextureWithEye(sp: SpeciesDef): THREE.Texture {
  const tex = fishTexture(sp.palette, sp.shape);
  const canvas = tex.image as HTMLCanvasElement;
  const ctx = canvas.getContext('2d')!;
  const W = canvas.width, H = canvas.height;
  const ex = W * 0.115, ey = H * (1 - 0.62), r = H * sp.shape.eyeSize * 2.4;
  ctx.fillStyle = '#d8d2c0';
  ctx.beginPath(); ctx.arc(ex, ey, r * 1.25, 0, TAU); ctx.fill();
  // A dark limbal ring and radial iris give a small but genuine spherical
  // eye impression at close zoom, without introducing an extra mesh/draw call.
  ctx.fillStyle='#27252a';
  ctx.beginPath();ctx.arc(ex,ey,r*.92,0,TAU);ctx.fill();
  const iris=ctx.createRadialGradient(ex-r*.1,ey-r*.08,r*.05,ex,ey,r*.83);
  iris.addColorStop(0,sp.palette.eyeColor??'#101015');
  iris.addColorStop(.65,sp.palette.eyeColor??'#101015');
  iris.addColorStop(1,'#555352');
  ctx.fillStyle=iris;
  ctx.beginPath();ctx.arc(ex,ey,r*.79,0,TAU);ctx.fill();
  ctx.fillStyle = 'rgba(255,255,255,0.9)';
  ctx.beginPath(); ctx.arc(ex - r * 0.3, ey - r * 0.3, r * 0.28, 0, TAU); ctx.fill();
  // Gill cover on the skin texture; unlike separate gill meshes this adds
  // no per-fish draw calls and remains stable when the body bends.
  if(!sp.id.includes('snail')&&!sp.invert){
    const gx=W*.20,gy=H*.49,gh=H*.15;
    ctx.save();ctx.lineCap='round';
    ctx.strokeStyle='rgba(35,35,45,.22)';
    ctx.lineWidth=Math.max(.7,H*.003);
    ctx.beginPath();ctx.moveTo(gx-gh*.12,gy-gh*.55);
    ctx.bezierCurveTo(gx+gh*.25,gy-gh*.20,gx+gh*.30,gy+gh*.30,gx-gh*.10,gy+gh*.54);
    ctx.stroke();ctx.restore();
  }
  // Large fish have overlapping fine scale edges, not one smooth
  // flat plastic coat. Paint this once onto the existing body texture.
  if(!sp.invert && (sp.id==='angelfish'||sp.id==='discus'||sp.adultSizeIn>=6)){
    const midX=W*.46,midY=H*.5;
    const rx=W*(sp.id==='angelfish'?.24:.33);
    const ry=H*(sp.id==='angelfish'?.38:.40);
    ctx.save();
    ctx.beginPath();ctx.ellipse(midX,midY,rx,ry,0,0,TAU);ctx.clip();
    const sw=Math.max(5,W*.033),sh=Math.max(4,H*.035);
    ctx.lineWidth=Math.max(.55,H*.0017);
    for(let row=0,y=midY-ry-sh;y<midY+ry+sh;row++,y+=sh){
      for(let x=midX-rx-sw;x<midX+rx+sw;x+=sw){
        const xx=x+(row%2)*sw*.5;
        ctx.beginPath();ctx.ellipse(xx,y,sw*.50,sh*.40,0,.14*Math.PI,.88*Math.PI);
        ctx.strokeStyle=row%3===0?'rgba(255,248,230,.22)':'rgba(20,53,57,.095)';
        ctx.stroke();
      }
    }
    if(sp.id==='discus'){
      // Organic wavy, feathered turquoise markings instead of straight
      // bars looking like brush strokes. Low contrast preserves the scales.
      for(let band=0;band<11;band++){
        const x0=W*(.215+band*.055),phase=band*.73;
        for(const off of [-1,0,1]){
          ctx.beginPath();
          for(let i=0;i<=30;i++){
            const t=i/30,y=H*(.15+t*.7);
            const wave=W*(.014*Math.sin(t*12.4+phase)+.005*Math.sin(t*27.2-phase));
            const xx=x0+wave+off*W*.0025;
            if(i===0)ctx.moveTo(xx,y);else ctx.lineTo(xx,y);
          }
          ctx.strokeStyle=off===0?'rgba(51,135,164,.31)':'rgba(73,161,186,.09)';
          ctx.lineWidth=Math.max(.6,H*(off===0?.0036:.004));
          ctx.stroke();
        }
      }
      for(let band=0;band<5;band++){
        ctx.beginPath();
        for(let i=0;i<=22;i++){
          const t=i/22,x=W*(.23+t*.52);
          const y=H*(.29+band*.085)+H*.014*Math.sin(t*11+band*.9);
          if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);
        }
        ctx.strokeStyle='rgba(239,176,144,.17)';
        ctx.lineWidth=Math.max(.6,H*.002);ctx.stroke();
      }
    }
    ctx.restore();
  }
  tex.needsUpdate = true;
  return tex;
}

// ── Body profile helpers ──
// u runs 0 (nose) → 1 (tail base). Returns half-height of the body there.
function bodyProfile(u: number, sp: SpeciesDef): number {
  const sh = sp.shape;
  // A skewed sine bump: peak position slides forward for deep-bodied fish.
  const peak = sh.eelLike ? 0.5 : 0.42;
  const x = u < peak ? u / peak : (1 - u) / (1 - peak);
  let h = Math.pow(Math.sin((Math.PI / 2) * THREE.MathUtils.clamp(x, 0, 1)), sh.eelLike ? 0.35 : 0.8 + sh.noseSharp * 0.7);
  // Eel-like bodies stay near-constant thickness.
  if (sh.eelLike) h = 0.35 + 0.65 * h;
  return (sh.height / 2) * h;
}

function buildFishGeometry(sp: SpeciesDef,low=false): THREE.BufferGeometry {
  const sh = sp.shape;
  const RINGS = low?18:30, SIDES = low?12:16;
  const positions: number[] = [];
  const uvs: number[] = [];
  const parts: number[] = [];
  const flutter: number[] = [];
  const finFlex: number[] = [];
  const colors: number[] = [];
  const indices: number[] = [];

  const bodyLen = 1 - sh.tailSize;          // body occupies [tailBaseX, +0.5]
  const tailBaseX = 0.5 - bodyLen;

  // — Body tube —
  for (let i = 0; i <= RINGS; i++) {
    const u = i / RINGS;                     // 0 nose → 1 tail base
    const x = 0.5 - u * bodyLen;
    const hh = Math.max(0.004, bodyProfile(u, sp));
    const ww = hh * sh.width * (1.0-.07*Math.cos(u*Math.PI*2));
    // Fish backs arch more than bellies drop — shift the section center up a touch.
    const cy = hh * 0.12 * Math.sin(u * Math.PI);
    for (let j = 0; j <= SIDES; j++) {
      const th = (j / SIDES) * TAU;
      positions.push(x, cy + hh * Math.cos(th), ww * Math.sin(th));
      uvs.push(0.03 + u * 0.82, 0.5 + 0.5 * Math.cos(th));
      parts.push(0); flutter.push(0); finFlex.push(0);
      colors.push(1,1,1);
    }
  }
  for (let i = 0; i < RINGS; i++) {
    for (let j = 0; j < SIDES; j++) {
      const a = i * (SIDES + 1) + j, b = a + SIDES + 1;
      indices.push(a, b, a + 1, b, b + 1, a + 1);
    }
  }

  const finStart = positions.length / 3;

  // Subdivide the fan radially; fins flex from root to edge without extra draw calls.
  const addFin = (
    outline: [number, number][], part: number, zOff = 0, zTilt = 0, flutterRoot?: [number, number]
  ) => {
    const root=outline[0];
    const append=(x:number,y:number,t:number)=>{
      const v=positions.length/3;
      positions.push(x,y,zOff+zTilt*Math.abs(x-root[0]));
      uvs.push(0.87+(x+0.5)*.08,0.5+y*.35);
      parts.push(part);
      flutter.push(flutterRoot?Math.hypot(x-flutterRoot[0],y-flutterRoot[1]):0);
      finFlex.push(part===1||part===2?t:0);
      const pigment=part===1||part===2?1-.13*t:.98;
      colors.push(pigment,pigment*.99,pigment*.98);
      return v;
    };
    if(part===1||part===2){
      const rings=low?2:sh.finLong?5:3;
      for(let k=1;k<outline.length-1;k++){
        const ea=outline[k],eb=outline[k+1];
        const centre=append(root[0],root[1],0);
        let pa=centre,pb=centre;
        for(let rr=1;rr<=rings;rr++){
          const t=rr/rings;
          const a=append(THREE.MathUtils.lerp(root[0],ea[0],t),THREE.MathUtils.lerp(root[1],ea[1],t),t);
          const b=append(THREE.MathUtils.lerp(root[0],eb[0],t),THREE.MathUtils.lerp(root[1],eb[1],t),t);
          if(rr===1)indices.push(centre,a,b);
          else indices.push(pa,a,pb,a,b,pb);
          pa=a;pb=b;
        }
      }
    }else{
      const base=positions.length/3;
      for(const [px,py] of outline)append(px,py,0);
      for(let k=1;k<outline.length-1;k++)indices.push(base,base+k,base+k+1);
    }
  };

  // Long continuous membrane: every row is attached to the fish's back/
  // belly along the *whole* root, not triangulated from ONE point. The old
  // fan created a rigid, plastic-looking triangular sail, especially on angels.
  let minAnalRootInset=Infinity;
  let maxPelvicRootRadius=0;
  const addMedianFin = (startU:number,endU:number,sign:1|-1,rise:number) => {
    const columns=low?9:sh.finLong?22:13,rows=low?3:sh.finLong?8:5;
    const base=positions.length/3;
    const stride=rows+1;
    const angelAnal=sp.id==='angelfish'&&sign<0;
    for(let j=0;j<=columns;j++){
      const t=j/columns,u=THREE.MathUtils.lerp(startU,endU,t);
      const x=.5-u*bodyLen;
      const hh=bodyProfile(u,sp);
      const centerY=hh*.12*Math.sin(u*Math.PI);
      // The body section is centred slightly ABOVE its spline. Previously
      // the anal root used -hh, below the actual belly (centerY-hh), leaving
      // a dark detached seam along the entire lower fin. Embed its root
      // 6% of body half-height inside the belly; at w=0 shader flexion is
      // zero, so both parts still move together without a visible slit.
      const bellyY=centerY-hh;
      const rootY=sign>0
        ?hh*1.12 // preserve the original dorsal fin silhouette
        :bellyY+hh*(angelAnal?.09:.06);
      if(sign<0)minAnalRootInset=Math.min(minAnalRootInset,rootY-bellyY);
      // Real angel dorsals are asymmetric, gently serrated rays — NOT a
      // uniformly inflated triangular sail. The main lobe curves backward.
      const arc=angelAnal
        ?Math.pow(Math.max(0,Math.sin(Math.PI*Math.pow(t,.90))),1.05)
        :sp.id==='angelfish'
          ?Math.pow(Math.max(0,Math.sin(Math.PI*Math.pow(t,.79))),.83)
          :Math.pow(Math.max(0,Math.sin(Math.PI*t)),sh.finLong?.48:1.12);
      // Anal fin of an angelfish has a smooth, continuous edge; strong
      // serrations here looked like detached triangular shards from the side.
      const rayEdge=angelAnal?1:sp.id==='angelfish'?1+.018*Math.cos(t*Math.PI*16):1;
      const tipEnvelope=arc*rayEdge*(.86+.14*t);
      const tipHeight=rise*sh.height*tipEnvelope*
        (angelAnal?.40:sp.id==='angelfish'?.46:1);
      for(let k=0;k<=rows;k++){
        const w=k/rows;
        const soft=w*w*(3-2*w);
        // Trailing edge bends aft; center is gently curved across Z so
        // specular lighting catches the membrane instead of a flat triangle.
        const trail=angelAnal?.041:sp.id==='angelfish'?.075:sh.finLong?.060:.013;
        const px=x-trail*soft*(.55+.45*t);
        // Reattach the lower edge WITHOUT shrinking the visible fin:
        // the old tip used -hh as its origin. Fade the correction from
        // zero at the embedded root to full at the free outer edge.
        const originalAnalRoot=-hh;
        const lowerTipCorrection=sign<0?(rootY-originalAnalRoot)*soft:0;
        const py=rootY+sign*tipHeight*w*
          (1+.012*Math.sin(t*16*Math.PI)*w)-lowerTipCorrection;
        // Rounded membrane cross-section: a little lateral ridge along each
        // ray catches light as it folds, unlike a zero-curvature flat plate.
        const pz=(Math.sin(Math.PI*t)*(angelAnal?.009:sp.id==='angelfish'?.033:.018)
          +Math.sin(t*15+u*3)*(angelAnal?.0015:.004)
          +Math.sin(t*34)*(angelAnal?.0008:.003))
          *soft*sign;
        positions.push(px,py,pz);
        uvs.push(.87+t*.08,.13+.74*w);
        parts.push(2);
        flutter.push(0);
        finFlex.push(w);
        // Subtle fin rays and edge translucency, not a uniform plastic sheet.
        const ray=angelAnal?.95+.05*(.5+.5*Math.cos(t*Math.PI*20))
          :.80+.20*(.5+.5*Math.cos(t*Math.PI*20));
        const pigment=(1-.30*w)*ray;
        colors.push(pigment,pigment*.995,pigment*.98);
      }
    }
    for(let j=0;j<columns;j++){
      for(let k=0;k<rows;k++){
        const a=base+j*stride+k,b=a+stride;
        indices.push(a,b,a+1,b,b+1,a+1);
      }
    }
  };

  // — Caudal fin: special forms for angelfish and discus.
  // Other species retain their existing outlines and animation.
  {
    const angel=sp.id==='angelfish',discus=sp.id==='discus';
    // Positive X enters the body, preventing a detached tail seam.
    const rootX=tailBaseX+(angel?.044:discus?.037:.02);
    const tipX=-.5;
    if(discus){
      // A short rounded paddle with a broad peduncle, built from connected
      // cross-sections: unlike a single fan root it does not form a triangle.
      const rows=low?4:8,cols=low?12:22,base=positions.length/3;
      for(let row=0;row<=rows;row++){
        const t=row/rows,advance=t*t*(3-2*t);
        const x=THREE.MathUtils.lerp(rootX,tipX+.012,t);
        const halfH=THREE.MathUtils.lerp(.038,.115,Math.sin(t*Math.PI*.76));
        for(let j=0;j<=cols;j++){
          const v=j/cols,rounded=1-.095*Math.pow(Math.abs(v*2-1),4);
          const px=x+.009*advance*Math.pow(Math.abs(v*2-1),2);
          positions.push(px,(.5-v)*2*halfH*rounded,.006*Math.sin(v*Math.PI)*Math.sin(t*Math.PI));
          uvs.push(.89+t*.08,.16+v*.68);
          parts.push(1);flutter.push(0);finFlex.push(t);
          const c=1-.16*t;
          colors.push(c,c*.99,c*.98);
        }
      }
      for(let row=0;row<rows;row++)for(let j=0;j<cols;j++){
        const a=base+row*(cols+1)+j,b=a+cols+1;
        indices.push(a,b,a+1,b,b+1,a+1);
      }
    }else if(angel){
      // Angelfish caudal is a CONTINUOUS membrane, not a point-rooted fan
      // stuck onto the narrow tail stem. Start a broad strip inside the
      // actual rear body and taper smoothly through the peduncle before
      // opening into a soft, slightly forked tail.
      const base=positions.length/3;
      const rows=low?9:19,cols=low?12:24;
      const attachmentX=tailBaseX+.135;
      const bodyU=THREE.MathUtils.clamp((.5-attachmentX)/bodyLen,0,1);
      const attachHalfH=bodyProfile(bodyU,sp)*.53;
      for(let i=0;i<=rows;i++){
        const t=i/rows;
        const x=THREE.MathUtils.lerp(attachmentX,tipX+.006,t);
        // At the narrow peduncle the fin remains slim, then grows towards
        // the rear edge; the first part overlaps opaque body geometry.
        const halfH=t<.32
          ?THREE.MathUtils.lerp(attachHalfH,.035,THREE.MathUtils.smoothstep(t,0,.32))
          :THREE.MathUtils.lerp(.035,sh.height*.38,THREE.MathUtils.smoothstep(t,.32,1));
        for(let j=0;j<=cols;j++){
          const v=j/cols,edge=Math.abs(v*2-1);
          const ptX=x+(t>.68?.010*Math.sin((t-.68)/.32*Math.PI)*edge:0);
          const ptY=(1-2*v)*halfH*(1-.045*Math.pow(edge,4));
          positions.push(ptX,ptY,.003*Math.sin(v*Math.PI)*Math.sin(t*Math.PI));
          uvs.push(.88+t*.1,.12+v*.76);
          parts.push(1);flutter.push(0);finFlex.push(t);
          const pigment=1-.15*t;
          colors.push(pigment,pigment*.99,pigment*.98);
        }
      }
      for(let i=0;i<rows;i++)for(let j=0;j<cols;j++){
        const a=base+i*(cols+1)+j,b=a+cols+1;
        indices.push(a,b,a+1,b,b+1,a+1);
      }
    }else{
      const H=sh.height*(.55+sh.tailFork*.45)*(sh.finLong?1.35:1);
      const pts:[number,number][]=[[rootX,0]];
      const N=low?10:sh.finLong?28:16;
      for(let k=0;k<=N;k++){
        const t=k/N,y=(.5-t)*H*(1+.007*Math.sin(t*Math.PI*6));
        const notch=Math.pow(Math.abs(.5-t)*2,angel?1.2:1.4);
        const x=angel
          ?tipX+.018*(1-notch)+.004*Math.sin(t*Math.PI*4)
          :tipX+(1-notch)*sh.tailFork*sh.tailSize*.85+(sh.finLong?.007*Math.sin(t*Math.PI*12):0);
        pts.push([x,y]);
      }
      if(sp.id==='fancy-goldfish'){
        addFin(pts,1,-.013,-.28);
        addFin(pts,1,.013,.28);
      }else addFin(pts,1);
    }
  }

  // — Dorsal: rounded continuous translucent membrane, smooth at both ends.
  if(sh.dorsalHeight>.02){
    addMedianFin(sh.finLong?.28:.34,sh.finLong?.92:.72,1,sh.dorsalHeight);
  }
  // — Anal: independent membrane with the same fixed-root elasticity.
  if(sh.analHeight>.02){
    addMedianFin(sp.id==='angelfish'?.51:.55,
      sp.id==='angelfish'?.89:.85,-1,sh.analHeight);
  }

  // — Pectoral fins — small side sheets near the head; these scull/flutter.
  {
    const u = 0.24;
    const x0 = 0.5 - u * bodyLen;
    const ww = bodyProfile(u, sp) * sh.width;
    const L = 0.13 * (sh.finLong ? 1.5 : 1);
    for (const side of [1, -1]) {
      const pts: [number, number][] = [
        [x0, -0.02],
        [x0 - L * 0.35, -0.02 - L * 0.5],
        [x0 - L, -0.03 - L * 0.55],
        [x0 - L * 0.8, -0.01],
      ];
      addFin(pts, 3, side * ww * 0.95, side * 0.25, [x0, -0.02]);
    }
  }

  // Two small pelvic fins complete the fish silhouette at side angles.
  // Keep them in the same batched geometry and material as the other fins.
  if(!sh.eelLike&&!sp.invert){
    const x0=.5-.39*bodyLen;
    const hh=bodyProfile(.39,sp);
    const cy=hh*.12*Math.sin(.39*Math.PI);
    // Pelvic roots were too far out on the lower side of the body (z=.63*width
    // while y=-.76*height). Place each root slightly inside the curved flank;
    // the fin fans still extend freely below the belly.
    const pelvicY=cy-hh*.72;
    for(const side of [-1,1]){
      const z=side*hh*sh.width*.43;
      const bodyHalfWidth=hh*sh.width*(1-.07*Math.cos(.39*Math.PI*2));
      // Normalized ellipse score <1 confirms the pelvic fin root is inside
      // the solid flank rather than floating beside the fish.
      const radial=(pelvicY-cy)**2/(hh*hh)+(z/bodyHalfWidth)**2;
      maxPelvicRootRadius=Math.max(maxPelvicRootRadius,radial);
      if(sp.id==='angelfish'){
        // Two thin, trailing ventral filaments rather than broad triangles.
        // The shared root is embedded inside the flank, so it cannot appear
        // to float separately from the pale belly at oblique camera angles.
        addFin([[x0,pelvicY],[x0-.047,pelvicY-.19],
          [x0-.059,pelvicY-.198],[x0-.013,pelvicY-.009]],2,z,side*.018);
      }else{
        addFin([[x0,pelvicY],[x0-.025,pelvicY-.023],
          [x0-.090,pelvicY-.047],[x0-.055,pelvicY-.005]],2,z,side*.12);
      }
    }
  }
  if(sp.id.includes('shrimp')){
    // Five pairs of small walking/feeding appendages and two long antennae,
    // batched with the existing mesh. aPart=3 sculls locally while the crawler rests.
    for(const side of [-1,1]){
      for(let leg=0;leg<5;leg++){
        const x=.28-leg*.085,y=-sh.height*.35,z=side*sh.width*.16;
        addFin([[x,y],[x-.045,y-.09],[x-.025,y-.085],[x+.01,y]],3,z,side*.55,[x,y]);
      }
      addFin([[.39,.015],[.71,.09*side],[.69,.09*side+.008],[.38,.025]],3,side*.05,side*.17,[.39,.015]);
    }
  }
  // Closed tapered fin sheets in the existing material group: no extra draw calls.
  // Thickness is 0.4–1% body length at roots, fading to a thin rim.
  const originalVertices=positions.length/3,originalIndices=indices.length;
  const back=new Map<number,number>();
  for(let v=finStart;v<originalVertices;v++){
    const w=parts[v]===3?Math.min(1,flutter[v]/.18):finFlex[v];
    const thickness=(sh.finLong?.010:.004)*Math.pow(1-w,1.8)+.00035;
    const z=positions[v*3+2];positions[v*3+2]=z+thickness*.5;
    const b=positions.length/3;back.set(v,b);
    positions.push(positions[v*3],positions[v*3+1],z-thickness*.5);
    uvs.push(uvs[v*2],uvs[v*2+1]);parts.push(parts[v]);flutter.push(flutter[v]);finFlex.push(finFlex[v]);
    colors.push(colors[v*3],colors[v*3+1],colors[v*3+2]);
  }
  const boundary=new Map<string,{a:number;b:number;n:number}>();
  const pointKey=(v:number)=>[positions[v*3],positions[v*3+1],positions[v*3+2]].map(x=>x.toFixed(5)).join(',');
  for(let k=RINGS*SIDES*6;k<originalIndices;k+=3){
    const a=indices[k],b=indices[k+1],c=indices[k+2];
    indices.push(back.get(c)!,back.get(b)!,back.get(a)!);
    for(const [u,v] of [[a,b],[b,c],[c,a]]){
      const x=pointKey(u),y=pointKey(v),key=x<y?x+'|'+y:y+'|'+x;
      const edge=boundary.get(key);if(edge)edge.n++;else boundary.set(key,{a:u,b:v,n:1});
    }
  }
  for(const {a,b,n} of boundary.values())if(n===1){
    const aa=back.get(a)!,bb=back.get(b)!;indices.push(a,aa,b,b,aa,bb);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setAttribute('aPart', new THREE.Float32BufferAttribute(parts, 1));
  geo.setAttribute('aFlutterD', new THREE.Float32BufferAttribute(flutter, 1));
  geo.setAttribute('aFinFlex', new THREE.Float32BufferAttribute(finFlex, 1));
  geo.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  geo.userData.medianMembraneStrip=sh.dorsalHeight>.02||sh.analHeight>.02;

  // Two material groups: body tube (0) and all fins (1).
  const finIndexStart = (() => {
    // Count body indices: RINGS*SIDES*6.
    return RINGS * SIDES * 6;
  })();
  geo.clearGroups();
  geo.addGroup(0, finIndexStart, 0);
  geo.addGroup(finIndexStart, indices.length - finIndexStart, 1);
  geo.userData.lod=low?'low':'full';
  geo.userData.taperedFins=true;
  geo.userData.rootThickness=sh.finLong?.010:.004;
  geo.userData.analRootInset=Number.isFinite(minAnalRootInset)?minAnalRootInset:null;
  geo.userData.angelLowerFinRefined=sp.id==='angelfish';
  geo.userData.angelCaudalAttached=sp.id==='angelfish';
  geo.userData.angelCaudalInset=sp.id==='angelfish'?.135:0;
  geo.userData.pelvicRootRadius=maxPelvicRootRadius||null;
  return geo;
}

// Snails: a squashed spiral-ish shell over a low foot. They don't undulate —
// the shader still runs but uMode=3 with amp≈0 keeps them rigid.
function buildSnailGeometry(sp: SpeciesDef): THREE.BufferGeometry {
  const shell = new THREE.SphereGeometry(0.32, 14, 10);
  shell.scale(1, 0.85, 0.8);
  shell.translate(0.02, 0.3, 0);
  const foot = new THREE.CylinderGeometry(0.3, 0.36, 0.14, 12);
  foot.translate(0, 0.07, 0);

  // Merge the two by hand (avoids importing BufferGeometryUtils for one case).
  const geos = [shell, foot];
  const positions: number[] = [], uvs: number[] = [], parts: number[] = [], flutter: number[] = [], finFlex: number[] = [], indices: number[] = [];
  let offset = 0;
  for (const g of geos) {
    const pos = g.getAttribute('position'), uv = g.getAttribute('uv');
    const idx = g.getIndex()!;
    for (let i = 0; i < pos.count; i++) {
      positions.push(pos.getX(i), pos.getY(i), pos.getZ(i));
      uvs.push(uv.getX(i), uv.getY(i));
      parts.push(0); flutter.push(0); finFlex.push(0);
    }
    for (let i = 0; i < idx.count; i++) indices.push(idx.getX(i) + offset);
    offset += pos.count;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setAttribute('aPart', new THREE.Float32BufferAttribute(parts, 1));
  geo.setAttribute('aFlutterD', new THREE.Float32BufferAttribute(flutter, 1));
  geo.setAttribute('aFinFlex', new THREE.Float32BufferAttribute(finFlex, 1));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  geo.clearGroups();
  geo.addGroup(0, indices.length, 0);
  geo.addGroup(indices.length, 0, 1); // empty fin group keeps material array valid
  return geo;
}
