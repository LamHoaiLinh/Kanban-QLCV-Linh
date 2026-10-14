// The underwater environment — everything that makes the water read as WATER:
// lighting + day/night, animated surface, god rays, marine snow, bubbles,
// substrate, glass and background. (RESEARCH.md Area 1.)

import * as THREE from 'three';
import type { BackgroundId, LightingMood, SubstrateId, WaterType } from '../types';
import { backgroundTexture, radialSpriteTexture, substrateTexture } from './textures';
import { SharedUniforms, applyUnderwater, glslNoise } from './shaders';

export interface TankDimsWorld {
  halfW: number;
  halfD: number;
  height: number;   // water column height
  floorY: number;   // world y of the substrate surface
  surfaceY: number; // world y of the water surface
}

interface MoodDef {
  sun: string; sunNight: string;
  sunIntensity: number;
  hemi: string; hemiIntensity: number;
  fog: { fw: string; sw: string };
  fogDensity: number;
  caustic: number;
  rayColor: string;
}

const MOODS: Record<LightingMood, MoodDef> = {
  daylight:   { sun: '#fff2dc', sunNight: '#5f7fb8', sunIntensity: 2.6, hemi: '#a8d4e8', hemiIntensity: 0.55, fog: { fw: '#173f43', sw: '#0e3a55' }, fogDensity: 1.0, caustic: 1.0, rayColor: '#cfe8ff' },
  warm:       { sun: '#ffd9a8', sunNight: '#5f7fb8', sunIntensity: 2.3, hemi: '#e0c8a0', hemiIntensity: 0.5, fog: { fw: '#2a3a2c', sw: '#1a3a48' }, fogDensity: 1.05, caustic: 0.9, rayColor: '#ffe8c0' },
  actinic:    { sun: '#9cc4ff', sunNight: '#4a66a8', sunIntensity: 2.4, hemi: '#6a9ae0', hemiIntensity: 0.6, fog: { fw: '#0e3050', sw: '#0a2c50' }, fogDensity: 0.95, caustic: 0.85, rayColor: '#a8ccff' },
  blackwater: { sun: '#f0bf78', sunNight: '#54689a', sunIntensity: 1.7, hemi: '#8a7a50', hemiIntensity: 0.35, fog: { fw: '#2e2410', sw: '#1a3040' }, fogDensity: 1.7, caustic: 0.55, rayColor: '#e8c890' },
};

// ── Water surface (seen mostly from below/side): animated procedural waves ──
const surfaceVert = /* glsl */ `
  varying vec3 vWorld;
  varying vec2 vUv;
  uniform float uTime;
  void main() {
    vUv = uv;
    vec3 p = position;
    // Gentle long swell so the surface line itself moves a little.
    p.z += sin(p.x * 11.0 + uTime * 0.83) * 0.0018 + cos(p.y * 9.0 - uTime * 0.57) * 0.0013;
    vec4 wp = modelMatrix * vec4(p, 1.0);
    vWorld = wp.xyz;
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`;
const surfaceFrag = /* glsl */ `
  varying vec3 vWorld;
  varying vec2 vUv;
  uniform float uTime;
  uniform vec3 uDeep;
  uniform vec3 uSky;
  uniform float uBright;
  ${glslNoise}
  void main() {
    // Procedural wave normal from two scrolling noise layers.
    vec2 p = vWorld.xz * 18.0;
    float e = 0.09;
    float h  = fbm(p + vec2(uTime * 0.19, uTime * 0.14));
    float hx = fbm(p + vec2(e, 0.0) + vec2(uTime * 0.19, uTime * 0.14));
    float hz = fbm(p + vec2(0.0, e) + vec2(uTime * 0.19, uTime * 0.14));
    vec3 n = normalize(vec3((h - hx) / e * 0.35, 1.0, (h - hz) / e * 0.35));

    vec3 viewDir = normalize(cameraPosition - vWorld);
    // From below, steep angles mirror the water (total internal reflection):
    // darker + deeper; near-vertical shows the bright sky (Snell's window).
    float facing = clamp(abs(dot(viewDir,n)),0.0,1.0);
    float fresnel = .02 + .98*pow(1.0-facing,5.0);
    vec3 col = mix(uSky, uDeep, fresnel);
    // Sparkling glints where wave slopes catch the light.
    float glint = pow(clamp(n.x * 0.6 + n.z * 0.6 + h * 0.7, 0.0, 1.0), 8.0);
    col += vec3(1.0, 0.98, 0.9) * glint * 0.18;
    gl_FragColor = vec4(col * uBright, 0.76);
  }
`;

// ── God rays: additive soft beams hanging from the surface ──
const rayVert = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;
const rayFrag = /* glsl */ `
  varying vec2 vUv;
  uniform float uTime;
  uniform float uIntensity;
  uniform float uSeed;
  uniform vec3 uColor;
  ${glslNoise}
  void main() {
    // Horizontal: soft gaussian beam. Vertical: bright at surface, fading down.
    float x = vUv.x - 0.5;
    float beam = exp(-x * x * 18.0);
    float fall = pow(vUv.y, 1.7);
    // The shimmer: the beam's brightness slowly crawls (light through waves).
    float shimmer = 0.55 + 0.45 * vnoise(vec2(vUv.x * 3.0 + uSeed * 17.0, uTime * 0.35 + uSeed * 9.0));
    float a = beam * fall * shimmer * uIntensity;
    gl_FragColor = vec4(uColor * a, a);
  }
`;

// ── Drifting particles (marine snow / bubbles), animated fully on the GPU ──
const particleVert = /* glsl */ `
  attribute float aSeed;
  uniform float uTime;
  uniform vec3 uBounds;   // halfW, height, halfD
  uniform float uRise;    // m/s upward (bubbles) — negative = slow sink (snow)
  uniform float uSize;
  uniform float uWobble;
  varying float vFade;
  void main() {
    vec3 p = position;
    // Wrap vertical travel inside the water column; each particle offset by seed.
    float travel = uTime * uRise * (0.6 + aSeed * 0.8);
    p.y = mod(p.y + travel, uBounds.y);
    vFade = smoothstep(0.0, 0.06, p.y) * smoothstep(uBounds.y, uBounds.y - 0.06, p.y);
    // Sideways wobble — snow drifts with the water, bubbles zigzag as they rise.
    p.x += sin(uTime * (0.5 + aSeed) + aSeed * 40.0 + p.y * 8.0) * uWobble;
    p.z += cos(uTime * (0.4 + aSeed * 0.7) + aSeed * 71.0 + p.y * 6.0) * uWobble;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    // Bubbles grow slightly as they rise (decompression), snow doesn't (seeded).
    float grow = uRise > 0.0 ? (0.6 + 0.6 * (p.y / uBounds.y)) : 1.0;
    // Perspective size: ~uSize px at 2.5 m; tiny motes, not blobs.
    gl_PointSize = uSize * grow * (0.5 + aSeed) * (2.5 / -mv.z);
    gl_Position = projectionMatrix * mv;
  }
`;
const particleFrag = /* glsl */ `
  uniform sampler2D uMap;
  uniform float uOpacity;
  varying float vFade;
  void main() {
    vec4 tex = texture2D(uMap, gl_PointCoord);
    gl_FragColor = vec4(tex.rgb, tex.a * uOpacity * vFade);
  }
`;

export class EnvironmentSystem {
  group = new THREE.Group();
  private sun: THREE.DirectionalLight;
  private hemi: THREE.HemisphereLight;
  private fill: THREE.PointLight;
  private fog: THREE.FogExp2;
  private surface: THREE.Mesh | null = null;
  private surfaceUniforms: Record<string, THREE.IUniform> | null = null;
  private rays: THREE.Mesh[] = [];
  private snow: THREE.Points | null = null;
  private bubbles: THREE.Points | null = null;
  private bubbleUniforms: Record<string, THREE.IUniform> | null = null;
  private disposables: (THREE.Material | THREE.BufferGeometry | THREE.Texture)[] = [];
  private mood: MoodDef = MOODS.daylight;
  private water: WaterType = 'freshwater';
  private sealDims: TankDimsWorld | null = null;
  private snowTex: THREE.Texture;
  private bubbleTex: THREE.Texture;

  constructor(private scene: THREE.Scene) {
    scene.add(this.group);
    this.sun = new THREE.DirectionalLight('#fff2dc', 2.6);
    this.sun.position.set(0.4, 2.5, 0.6);
    this.hemi = new THREE.HemisphereLight('#a8d4e8', '#3a3428', 0.55);
    this.fill = new THREE.PointLight('#88b8d8', 0.35, 0, 2);
    this.scene.add(this.sun, this.hemi, this.fill);
    this.fog = new THREE.FogExp2('#173f43', 0.9);
    scene.fog = this.fog;
    this.snowTex = radialSpriteTexture('rgba(255,255,255,0.75)', 'rgba(255,255,255,0)');
    this.bubbleTex = radialSpriteTexture('rgba(220,240,255,0.9)', 'rgba(255,255,255,0)', true);
  }

  rebuild(
    dims: TankDimsWorld,
    water: WaterType,
    substrate: SubstrateId,
    background: BackgroundId,
    mood: LightingMood,
    quality: { godRayCount: number; snowCount: number; bubbleCount: number },
    airstone: THREE.Vector3 | null,
  ): void {
    // Tear down previous build.
    this.group.clear();
    for (const d of this.disposables) d.dispose();
    this.disposables = [];
    this.rays = [];
    this.mood = MOODS[mood];
    this.water = water;

    const { halfW, halfD, height, floorY, surfaceY } = dims;
    this.sealDims = { ...dims };
    this.fill.position.set(0, surfaceY + 0.3, halfD * 2);

    // — Fog density scales inversely with tank size so a nano tank isn't a
    //   green void and a 6-foot tank still gets real depth attenuation.
    //   Kept subtle: you should see the sand crisply through the front glass,
    //   with the blue-shift building across the tank's depth.
    this.fog.density = (this.mood.fogDensity * 0.3) / Math.max(0.35, halfW);

    // — Substrate: a gently duned plane —
    {
      const tex = substrateTexture(substrate);
      const seg = 48;
      const geo = new THREE.PlaneGeometry(halfW * 2, halfD * 2, seg, Math.round(seg * (halfD / halfW)));
      geo.rotateX(-Math.PI / 2);
      // Keep the exposed sand and its solid side skirt on the exact same dune curve.
      const duneY = (x: number, z: number) =>
        Math.sin(x * 9 + 2) * Math.cos(z * 7) * 0.008 + Math.sin(x * 3.2) * 0.012;
      const pos = geo.getAttribute('position');
      for (let i = 0; i < pos.count; i++) {
        pos.setY(i, duneY(pos.getX(i), pos.getZ(i)));
      }
      geo.computeVertexNormals();
      const mat = new THREE.MeshStandardMaterial({ map: tex.map, bumpMap: tex.bumpMap, bumpScale: 0.13, roughness: 0.91 });
      applyUnderwater(mat, { caustics: true, causticStrength: 1.9 }); // sand shows caustics most
      const floor = new THREE.Mesh(geo, mat);
      floor.position.y = floorY;
      floor.name = 'aquarium-substrate-top';
      this.group.add(floor);

      // The original sand was an infinitely thin plane. From a low angle its
      // raised edges revealed the empty 20 mm space down to the support base.
      // Build four real, closed side skirts following the SAME edge vertices;
      // this works for every footprint without covering the natural dunes.
      const skirtBottom = floorY - 0.023; // overlaps the existing plinth top (-0.020)
      const skirtMat = new THREE.MeshStandardMaterial({
        map: tex.map, roughness: 0.91, side: THREE.DoubleSide,
      });
      applyUnderwater(skirtMat, { caustics: true, causticStrength: 1.9 });
      for (const [axis, edge] of [
        ['x', -halfD], ['x', halfD], ['z', -halfW], ['z', halfW],
      ] as const) {
        const sections = 48;
        const verts: number[] = [], uvs: number[] = [];
        const extent = axis === 'x' ? halfW : halfD;
        for (let i = 0; i < sections; i++) {
          const u0 = i / sections, u1 = (i + 1) / sections;
          const v0 = (u0 * 2 - 1) * extent, v1 = (u1 * 2 - 1) * extent;
          const x0 = axis === 'x' ? v0 : edge, z0 = axis === 'x' ? edge : v0;
          const x1 = axis === 'x' ? v1 : edge, z1 = axis === 'x' ? edge : v1;
          const y0 = floorY + duneY(x0, z0), y1 = floorY + duneY(x1, z1);
          verts.push(
            x0,y0,z0, x0,skirtBottom,z0, x1,y1,z1,
            x1,y1,z1, x0,skirtBottom,z0, x1,skirtBottom,z1,
          );
          uvs.push(u0,1, u0,0, u1,1, u1,1, u0,0, u1,0);
        }
        const skirtGeo = new THREE.BufferGeometry();
        skirtGeo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
        skirtGeo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
        skirtGeo.computeVertexNormals();
        const skirt = new THREE.Mesh(skirtGeo, skirtMat);
        skirt.name = axis === 'x'
          ? (edge < 0 ? 'aquarium-substrate-back' : 'aquarium-substrate-front')
          : (edge < 0 ? 'aquarium-substrate-left' : 'aquarium-substrate-right');
        this.group.add(skirt);
        this.disposables.push(skirtGeo);
      }
      this.disposables.push(geo, mat, skirtMat, tex.map, tex.bumpMap);
    }

    // — Background poster behind the back glass (like a real tank) —
    {
      const tex = backgroundTexture(background, water);
      const mat = new THREE.MeshBasicMaterial({ map: tex, fog: true });
      const back = new THREE.Mesh(new THREE.PlaneGeometry(halfW * 2.06, height * 1.15), mat);
      back.position.set(0, floorY + height * 0.52, -halfD - 0.02);
      this.group.add(back);
      this.disposables.push(mat, tex, back.geometry);
    }

    // — Water surface —
    {
      this.surfaceUniforms = {
        uTime: SharedUniforms.uTime,
        uDeep: { value: new THREE.Color(this.mood.fog[water === 'saltwater' ? 'sw' : 'fw']) },
        uSky: { value: new THREE.Color('#bfe4f8') },
        uBright: { value: 1 },
      };
      const mat = new THREE.ShaderMaterial({
        vertexShader: surfaceVert,
        fragmentShader: surfaceFrag,
        uniforms: this.surfaceUniforms,
        transparent: true,
        side: THREE.DoubleSide,
        depthWrite: false,
      });
      this.surface = new THREE.Mesh(new THREE.PlaneGeometry(halfW * 2, halfD * 2, 24, 24), mat);
      this.surface.rotation.x = -Math.PI / 2;
      this.surface.position.y = surfaceY;
      this.surface.renderOrder = 5;
      this.group.add(this.surface);
      this.disposables.push(mat, this.surface.geometry);
    }

    // — Glass box + silicone frame —
    {
      const glassMat = new THREE.MeshPhysicalMaterial({
        color: '#cfe8ee',
        transparent: true,
        opacity: 0.048,
        roughness: 0.04,
        metalness: 0,
        envMapIntensity: 1.2,
        side: THREE.DoubleSide,
        depthWrite: false,
      });
      // Geometry is recomputed on every tank resize. Slightly overlap all four
      // wall corners and the real bottom plate: exact coplanar contact can show
      // hairline gaps at oblique camera angles.
      const t = Math.max(0.006, halfW * 0.012);
      const seal = Math.max(t * 0.75, Math.min(halfW, halfD) * 0.004);
      const plinthTop = floorY - 0.020; // see base plinth below
      const wallBottom = plinthTop - seal;
      const wallTop = floorY + height * 1.06;
      const wallHeight = wallTop - wallBottom, wallMid = (wallTop + wallBottom) / 2;
      const panes: [string, number, number, [number, number, number], [number, number, number]][] = [
        ['front', halfW * 2 + seal * 2, wallHeight, [0, wallMid, halfD], [0, 0, 0]],
        ['back', halfW * 2 + seal * 2, wallHeight, [0, wallMid, -halfD], [0, Math.PI, 0]],
        ['left', halfD * 2 + seal * 2, wallHeight, [-halfW, wallMid, 0], [0, Math.PI / 2, 0]],
        ['right', halfD * 2 + seal * 2, wallHeight, [halfW, wallMid, 0], [0, -Math.PI / 2, 0]],
      ];
      for (const [name, w, h, p, r] of panes) {
        const pane = new THREE.Mesh(new THREE.PlaneGeometry(w, h), glassMat);
        pane.name = 'aquarium-glass-' + name;
        pane.position.set(...p);
        pane.rotation.set(...r);
        pane.renderOrder = 6;
        this.group.add(pane);
        this.disposables.push(pane.geometry);
      }
      // The tank used to have no bottom glass at all. This continuous plate
      // bridges the substrate, side panes and the support base with small
      // overlaps, while staying below the sand and above the opaque plinth.
      const bottomThickness = Math.max(t * 2.5, 0.016);
      const bottomTop = plinthTop + Math.max(t * 1.25, 0.010);
      const bottomPane = new THREE.Mesh(
        new THREE.BoxGeometry(halfW * 2 + seal * 2, bottomThickness, halfD * 2 + seal * 2),
        glassMat,
      );
      bottomPane.name = 'aquarium-glass-bottom';
      bottomPane.position.y = bottomTop - bottomThickness / 2;
      bottomPane.renderOrder = 6;
      this.group.add(bottomPane);
      this.disposables.push(bottomPane.geometry, glassMat);

      // Silicone edges follow the extended walls and bottom plate.
      const edgeMat = new THREE.MeshStandardMaterial({ color: '#101418', roughness: 0.6 });
      const mkEdge = (sx: number, sy: number, sz: number, x: number, y: number, z: number) => {
        const e = new THREE.Mesh(new THREE.BoxGeometry(sx, sy, sz), edgeMat);
        e.name = 'aquarium-silicone-edge';
        e.position.set(x, y, z);
        this.group.add(e);
        this.disposables.push(e.geometry);
      };
      for (const [x, z] of [[-halfW, -halfD], [halfW, -halfD], [-halfW, halfD], [halfW, halfD]]) {
        mkEdge(t, wallHeight, t, x, wallMid, z);
      }
      for (const y of [wallBottom + t * 0.5, wallTop - t * 0.5]) {
        mkEdge(halfW * 2 + t, t, t, 0, y, halfD);
        mkEdge(halfW * 2 + t, t, t, 0, y, -halfD);
        mkEdge(t, t, halfD * 2 + t, -halfW, y, 0);
        mkEdge(t, t, halfD * 2 + t, halfW, y, 0);
      }
      this.disposables.push(edgeMat);
      // A dark base plinth under the tank grounds the whole composition.
      const base = new THREE.Mesh(
        new THREE.BoxGeometry(halfW * 2 + 0.1, 0.05, halfD * 2 + 0.1),
        new THREE.MeshStandardMaterial({ color: '#0a0c10', roughness: 0.4 })
      );
      base.position.y = floorY - 0.045;
      base.name = 'aquarium-base-plinth';
      this.group.add(base);
      this.disposables.push(base.geometry, base.material as THREE.Material);
    }

    // — God rays —
    for (let i = 0; i < quality.godRayCount; i++) {
      const w = 0.1 + Math.random() * halfW * 0.5;
      const uniforms = {
        uTime: SharedUniforms.uTime,
        uIntensity: { value: 0.3 + Math.random() * 0.15 },
        uSeed: { value: Math.random() },
        uColor: { value: new THREE.Color(this.mood.rayColor) },
      };
      const mat = new THREE.ShaderMaterial({
        vertexShader: rayVert, fragmentShader: rayFrag, uniforms,
        transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide,
      });
      const ray = new THREE.Mesh(new THREE.PlaneGeometry(w, height * 1.05), mat);
      ray.position.set((Math.random() - 0.5) * halfW * 1.8, floorY + height * 0.52, (Math.random() - 0.5) * halfD * 1.6);
      ray.rotation.z = (Math.random() - 0.5) * 0.14; // slight sun angle
      ray.renderOrder = 4;
      ray.userData.driftSeed = Math.random() * 100;
      this.rays.push(ray);
      this.group.add(ray);
      this.disposables.push(mat, ray.geometry);
    }

    // — Marine snow —
    if (quality.snowCount > 0) {
      const n = quality.snowCount;
      const posArr = new Float32Array(n * 3);
      const seedArr = new Float32Array(n);
      for (let i = 0; i < n; i++) {
        posArr[i * 3] = (Math.random() - 0.5) * halfW * 1.9;
        posArr[i * 3 + 1] = Math.random() * height;
        posArr[i * 3 + 2] = (Math.random() - 0.5) * halfD * 1.9;
        seedArr[i] = Math.random();
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(posArr, 3));
      geo.setAttribute('aSeed', new THREE.BufferAttribute(seedArr, 1));
      const mat = new THREE.ShaderMaterial({
        vertexShader: particleVert, fragmentShader: particleFrag,
        uniforms: {
          uTime: SharedUniforms.uTime,
          uBounds: { value: new THREE.Vector3(halfW, height, halfD) },
          uRise: { value: -0.006 },  // snow sinks, barely
          uSize: { value: 1.6 },
          uWobble: { value: 0.02 },
          uMap: { value: this.snowTex },
          uOpacity: { value: 0.35 },
        },
        transparent: true, depthWrite: false,
      });
      this.snow = new THREE.Points(geo, mat);
      this.snow.position.y = floorY;
      this.snow.frustumCulled = false;
      this.group.add(this.snow);
      this.disposables.push(geo, mat);
    }

    // — Air-stone bubble column —
    if (airstone && quality.bubbleCount > 0) {
      const n = quality.bubbleCount;
      const posArr = new Float32Array(n * 3);
      const seedArr = new Float32Array(n);
      for (let i = 0; i < n; i++) {
        posArr[i * 3] = airstone.x + (Math.random() - 0.5) * 0.02;
        posArr[i * 3 + 1] = Math.random() * height;
        posArr[i * 3 + 2] = airstone.z + (Math.random() - 0.5) * 0.02;
        seedArr[i] = Math.random();
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(posArr, 3));
      geo.setAttribute('aSeed', new THREE.BufferAttribute(seedArr, 1));
      this.bubbleUniforms = {
        uTime: SharedUniforms.uTime,
        uBounds: { value: new THREE.Vector3(halfW, height * 0.98, halfD) },
        uRise: { value: 0.22 },
        uSize: { value: 2.4 },
        uWobble: { value: 0.012 },
        uMap: { value: this.bubbleTex },
        uOpacity: { value: 0.85 },
      };
      const mat = new THREE.ShaderMaterial({
        vertexShader: particleVert, fragmentShader: particleFrag,
        uniforms: this.bubbleUniforms,
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      });
      this.bubbles = new THREE.Points(geo, mat);
      this.bubbles.position.y = floorY;
      this.bubbles.frustumCulled = false;
      this.group.add(this.bubbles);
      this.disposables.push(geo, mat);
    } else {
      this.bubbles = null;
    }
  }

  // QA-only geometry information: browser tests verify physical intersections
  // at every tank size instead of relying on a single screenshot/pixel color.
  getSealSnapshot() {
    const read = (name: string) => {
      const object = this.group.getObjectByName(name);
      if (!object) return null;
      const box = new THREE.Box3().setFromObject(object);
      return { min: box.min.toArray(), max: box.max.toArray() };
    };
    return {
      dims: this.sealDims,
      base: read('aquarium-base-plinth'),
      bottom: read('aquarium-glass-bottom'),
      panes: ['front', 'back', 'left', 'right'].map(name => read('aquarium-glass-' + name)),
      skirts: ['front', 'back', 'left', 'right'].map(name => read('aquarium-substrate-' + name)),
    };
  }

  // Called every frame: day/night interpolation + ray billboarding.
  update(dayFactor: number, camera: THREE.Camera): void {
    const m = this.mood;
    const sunCol = new THREE.Color(m.sun).lerp(new THREE.Color(m.sunNight), 1 - dayFactor);
    this.sun.color.copy(sunCol);
    this.sun.intensity = THREE.MathUtils.lerp(0.18, m.sunIntensity, dayFactor);
    this.hemi.color.set(m.hemi);
    this.hemi.intensity = THREE.MathUtils.lerp(0.06, m.hemiIntensity, dayFactor);
    this.fill.intensity = THREE.MathUtils.lerp(0.06, 0.35, dayFactor);

    // Caustics dim at night; water color darkens.
    SharedUniforms.uCausticIntensity.value = m.caustic * THREE.MathUtils.lerp(0.12, 1, dayFactor);
    SharedUniforms.uSunTint.value.copy(sunCol);
    const fogCol = new THREE.Color(m.fog[this.water === 'saltwater' ? 'sw' : 'fw']);
    fogCol.multiplyScalar(THREE.MathUtils.lerp(0.18, 1, dayFactor));
    this.fog.color.copy(fogCol);
    if (this.surfaceUniforms) {
      (this.surfaceUniforms.uBright.value as number) = THREE.MathUtils.lerp(0.12, 1, dayFactor);
      this.surfaceUniforms.uBright.value = THREE.MathUtils.lerp(0.12, 1, dayFactor);
      (this.surfaceUniforms.uDeep.value as THREE.Color).copy(fogCol);
    }

    // God rays: billboard toward the camera around Y, drift slowly, fade at night.
    const t = SharedUniforms.uTime.value;
    for (const ray of this.rays) {
      const seed = ray.userData.driftSeed as number;
      ray.position.x += Math.sin(t * 0.05 + seed) * 0.0004;
      ray.rotation.y = Math.atan2(camera.position.x - ray.position.x, camera.position.z - ray.position.z);
      const mat = ray.material as THREE.ShaderMaterial;
      mat.uniforms.uIntensity.value = (0.3 + 0.14 * Math.sin(seed * 40)) * dayFactor * dayFactor;
    }
  }
}
