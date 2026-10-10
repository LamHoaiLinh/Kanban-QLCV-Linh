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
  transformed.z -= uAmp * 0.22 * sin(-aDyn.x) * (1.0 - s) * (1.0 - s);

  // Bank/bend into turns: parabolic curvature along the spine.
  transformed.z += aDyn.y * s * s * 0.7;

  // Independent elastic fin deformation; root remains attached to the body.
  // The progressively lagging tip is deliberately restrained (not cloth).
  if (aPart > 0.5 && aPart < 2.5 && aFinFlex > 0.0) {
    float lag = aFinFlex * (aPart < 1.5 ? 1.25 : 0.65);
    float flex = uFinSoftness * aFinFlex * aFinFlex;
    transformed.z += flex * sin(aDyn.x - lag + aRand * 1.7);
    transformed.y += flex * 0.13 * cos(aDyn.x - lag);
  }
  // A brief jaw opening synchronized to real feeding, not a perpetual loop.
  if (aPart < 0.5 && uFinSoftness > 0.0) {
    float lip = 1.0 - smoothstep(0.01, 0.14, s);
    float lowerJaw = 1.0 - smoothstep(-0.01, 0.015, transformed.y);
    transformed.y -= lip * lowerJaw * aDyn.w * 0.042;
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
  uniforms: { uWaveLen: THREE.IUniform; uAmp: THREE.IUniform; uMode: THREE.IUniform };
}

const assetCache = new Map<string, FishAsset>();

export function getFishAsset(sp: SpeciesDef): FishAsset {
  let asset = assetCache.get(sp.id);
  if (!asset) {
    asset = buildFishAsset(sp);
    assetCache.set(sp.id, asset);
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
    uFinSoftness: { value: sp.invert || sp.shape.eelLike ? 0 : sp.shape.finLong ? 0.034 : 0.010 },
  };

  const map = fishTextureWithEye(sp);
  const body = new THREE.MeshStandardMaterial({
    map,
    roughness: sp.shape.eelLike ? 0.49 : sp.id==='betta' || sp.id==='guppy' ? 0.44 : 0.37,
    metalness: 0.34 * sp.palette.iridescence, // structural shimmer on tetras etc.
    envMapIntensity: 0.58 + sp.palette.iridescence * 0.65,
  });
  const fins = new THREE.MeshStandardMaterial({
    color: new THREE.Color(sp.palette.fin),
    roughness: sp.shape.finLong?0.78:0.67,
    metalness: 0,
    transparent: true,
    opacity: sp.palette.finOpacity,
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
  ctx.fillStyle = sp.palette.eyeColor ?? '#0a0a0c';
  ctx.beginPath(); ctx.arc(ex, ey, r * 0.85, 0, TAU); ctx.fill();
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

function buildFishGeometry(sp: SpeciesDef): THREE.BufferGeometry {
  const sh = sp.shape;
  const RINGS = 30, SIDES = 16;
  const positions: number[] = [];
  const uvs: number[] = [];
  const parts: number[] = [];
  const flutter: number[] = [];
  const finFlex: number[] = [];
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
      return v;
    };
    if(part===1||part===2){
      const rings=sh.finLong?5:3;
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

  // — Caudal (tail) fin — a fan from the peduncle, forked by tailFork.
  {
    const rootX = tailBaseX + 0.02;
    const tipX = -0.5;
    const H = sh.height * (0.55 + sh.tailFork * 0.45) * (sh.finLong ? 1.35 : 1);
    const pts: [number, number][] = [[rootX, 0]];
    const N = sh.finLong ? 28 : 16;
    for (let k = 0; k <= N; k++) {
      const t = k / N;                     // 0 top → 1 bottom of trailing edge
      const y = (0.5-t)*H*(1+.007*Math.sin(t*Math.PI*6));
      // Fork: pull the middle of the trailing edge forward.
      const notch = Math.pow(Math.abs(0.5 - t) * 2, 1.4);
      const x = tipX+(1-notch)*sh.tailFork*sh.tailSize*.85+(sh.finLong?.007*Math.sin(t*Math.PI*12):0);
      pts.push([x, y]);
    }
    addFin(pts, 1);
  }

  // — Dorsal fin — along the back.
  if (sh.dorsalHeight > 0.02) {
    const u0 = sh.finLong ? 0.28 : 0.34, u1 = sh.finLong ? 0.92 : 0.72;
    const pts: [number, number][] = [];
    const backAt = (u: number) => bodyProfile(u, sp) + bodyProfile(u, sp) * 0.12;
    pts.push([0.5 - u0 * bodyLen, backAt(u0)]);
    const N = sh.finLong ? 18 : 10;
    for (let k = 0; k <= N; k++) {
      const t = k / N, u = u0 + (u1 - u0) * t;
      const raise = Math.pow(Math.sin(Math.PI * t),sh.finLong?0.65:1.05);
      pts.push([0.5 - u * bodyLen, backAt(u) + sh.dorsalHeight * sh.height * raise]);
    }
    pts.push([0.5 - u1 * bodyLen, backAt(u1)]);
    addFin(pts, 2);
  }

  // — Anal fin — mirror of the dorsal, smaller.
  if (sh.analHeight > 0.02) {
    const u0 = 0.55, u1 = 0.85;
    const pts: [number, number][] = [];
    const bellyAt = (u: number) => -bodyProfile(u, sp);
    pts.push([0.5 - u0 * bodyLen, bellyAt(u0)]);
    const N = sh.finLong ? 12 : 8;
    for (let k = 0; k <= N; k++) {
      const t = k / N, u = u0 + (u1 - u0) * t;
      pts.push([0.5 - u * bodyLen, bellyAt(u) - sh.analHeight * sh.height * Math.pow(Math.sin(Math.PI*t),sh.finLong?.72:1)]);
    }
    addFin(pts, 2);
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
    for(const side of [-1,1]){
      const z=side*hh*sh.width*.63;
      addFin([[x0,-hh*.76],[x0-.025,-hh*.76-.023],
        [x0-.090,-hh*.76-.047],[x0-.055,-hh*.76-.005]],2,z,side*.12);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setAttribute('aPart', new THREE.Float32BufferAttribute(parts, 1));
  geo.setAttribute('aFlutterD', new THREE.Float32BufferAttribute(flutter, 1));
  geo.setAttribute('aFinFlex', new THREE.Float32BufferAttribute(finFlex, 1));
  geo.setIndex(indices);
  geo.computeVertexNormals();

  // Two material groups: body tube (0) and all fins (1).
  const finIndexStart = (() => {
    // Count body indices: RINGS*SIDES*6.
    return RINGS * SIDES * 6;
  })();
  geo.clearGroups();
  geo.addGroup(0, finIndexStart, 0);
  geo.addGroup(finIndexStart, indices.length - finIndexStart, 1);
  void finStart;
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
