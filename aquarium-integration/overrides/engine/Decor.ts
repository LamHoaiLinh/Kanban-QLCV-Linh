// Hardscape & props: driftwood, rocks, reef rock, and the playful classics.
// Everything is assembled from displaced primitives + procedural textures.
// Decor also feeds the simulation: it exports obstacle spheres (fish steer
// around them), shelter points (nocturnal/ambush fish hide there), and anchor
// points (corals and epiphyte plants attach there).

import * as THREE from 'three';
import { applyUnderwater } from './shaders';
import { rockTexture, woodTexture } from './textures';
import type { AquascapeLayout } from '../types';
import { seededRandom } from '../data/Aquascapes';

// Machine-readable water corridors; unlike a spherical decor collider these
// store actual entrances, widths, and direction. Generated from the SAME
// procedural geometry used to render each hollow log or arch.
export interface SwimTunnel {
  id:string;
  entrance:THREE.Vector3;
  middle:THREE.Vector3;
  exit:THREE.Vector3;
  boreRadius:number;
  capacity:number;
  through:boolean;
}
export interface DecorOutput {
  obstacles: { pos: THREE.Vector3; radius: number }[];
  shelters: THREE.Vector3[];
  tunnels: SwimTunnel[];
  anchors: THREE.Vector3[];
  airstone: THREE.Vector3 | null;
}

// Displace a sphere/icosahedron radially with hash noise → believable rock.
function displace(geo: THREE.BufferGeometry, amount: number, seed = 1): THREE.BufferGeometry {
  const pos = geo.getAttribute('position');
  const v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.set(pos.getX(i), pos.getY(i), pos.getZ(i));
    const n = Math.sin(v.x * 12.3 * seed + v.y * 7.7) * Math.cos(v.z * 9.1 - v.y * 5.3) * 0.5
      + Math.sin(v.x * 27.1 + v.z * 19.7) * 0.25;
    v.multiplyScalar(1 + n * amount);
    pos.setXYZ(i, v.x, v.y, v.z);
  }
  geo.computeVertexNormals();
  return geo;
}

// A genuine 360-degree, thick-walled hollow trunk: exterior bark, darker
// inner bore and TWO annular cut faces. CylinderGeometry(openEnded=true) used
// to draw only a zero-thickness sheet, which looked like half a log in oblique
// views. This mesh is manifold around its entire circumference; the bore
// stays open along the local Y axis for swimming.
function createHollowBark(radius:number,length:number,seed:number):THREE.BufferGeometry {
  const radial=32,longitudinal=8,ring=radial+1;
  const positions:number[]=[],uvs:number[]=[],indices:number[]=[];
  const groups:Array<{start:number;count:number;material:number}>=[];
  const outer=(t:number,a:number)=>radius*(1-.065*t)*
    (1+.075*Math.sin(a*5+seed*3+t*5)+.038*Math.cos(a*9-seed*2+t*3));
  const inner=(t:number,a:number)=>radius*.59*
    (1+.025*Math.sin(a*7+t*5+seed));
  const yAt=(t:number,a:number)=>(t-.5)*length+
    .003*radius*Math.sin(a*5+seed+t*7);
  const vertex=(r:number,y:number,a:number,u:number,v:number)=>{
    positions.push(r*Math.cos(a),y,r*Math.sin(a));
    uvs.push(u,v);
    return positions.length/3-1;
  };
  for(const inside of [false,true]){
    const groupStart=indices.length,base=positions.length/3;
    for(let i=0;i<=longitudinal;i++){
      const t=i/longitudinal;
      for(let j=0;j<=radial;j++){
        const a=j/radial*Math.PI*2;
        vertex(inside?inner(t,a):outer(t,a),yAt(t,a),a,j/radial,t);
      }
    }
    for(let i=0;i<longitudinal;i++){
      for(let j=0;j<radial;j++){
        const a=base+i*ring+j,b=a+ring;
        if(inside)indices.push(a,a+1,b,b,a+1,b+1);
        else indices.push(a,b,a+1,b,b+1,a+1);
      }
    }
    groups.push({start:groupStart,count:indices.length-groupStart,
      material:inside?1:0});
  }
  const endStart=indices.length;
  for(const t of [0,1]){
    const base=positions.length/3;
    for(let j=0;j<=radial;j++){
      const a=j/radial*Math.PI*2,y=yAt(t,a);
      vertex(outer(t,a),y,a,j/radial,1);
      vertex(inner(t,a),y,a,j/radial,0);
    }
    for(let j=0;j<radial;j++){
      const k=base+j*2;
      if(t===1)indices.push(k,k+2,k+1,k+2,k+3,k+1);
      else indices.push(k,k+1,k+2,k+2,k+1,k+3);
    }
  }
  groups.push({start:endStart,count:indices.length-endStart,material:0});
  const geo=new THREE.BufferGeometry();
  geo.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));
  geo.setAttribute('uv',new THREE.Float32BufferAttribute(uvs,2));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  for(const g of groups)geo.addGroup(g.start,g.count,g.material);
  geo.userData.hollowBark={radial,longitudinal,innerFraction:.59,fullCircle:true,
    cutFaces:2,outerWall:true,innerWall:true};
  return geo;
}

// TubeGeometry provides the curved outer skin but intentionally leaves both
// terminal cross-sections EMPTY. Seen from a diagonal angle the broken branch
// seems to have lost half its diameter. Fill both ends in the same geometry,
// avoiding two extra draw calls per branch.
function cappedWoodTube(
  curve:THREE.Curve<THREE.Vector3>,segments:number,radius:number,
  radialSegments:number,closed=false,
):THREE.BufferGeometry{
  radialSegments=Math.max(10,radialSegments);
  const geo=new THREE.TubeGeometry(curve,segments,radius,radialSegments,closed);
  if(closed)return geo;
  const pos=Array.from(geo.getAttribute('position').array as Float32Array);
  const uv=Array.from(geo.getAttribute('uv').array as Float32Array);
  // Three TubeGeometry uses U along the curve; bark uses V along the trunk,
  // as do the hollow logs and cylinders. Share the same longitudinal grain.
  for(let i=0;i<uv.length;i+=2){const along=uv[i];uv[i]=uv[i+1];uv[i+1]=along;}
  const indices=Array.from(geo.getIndex()!.array);
  const start=pos.length/3;
  const p0=curve.getPoint(0),p1=curve.getPoint(1);
  pos.push(p0.x,p0.y,p0.z,p1.x,p1.y,p1.z);
  uv.push(.5,.5,.5,.5);
  const last=segments*(radialSegments+1);
  for(let k=0;k<radialSegments;k++){
    // One cap faces back down the curve, one faces forward.
    indices.push(start,k,k+1);
    indices.push(start+1,last+k+1,last+k);
  }
  geo.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));
  geo.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  geo.userData.cappedWoodEnds=2;
  return geo;
}

export class DecorSystem {
  group = new THREE.Group();
  private materials: THREE.Material[] = [];

  constructor(parent: THREE.Object3D) {
    parent.add(this.group);
  }

  // Lightweight structural inspection for QA: verifies rendered geometry, not
  // merely the existence of logical fish tunnels and shelter metadata.
  getVisualGeometrySnapshot(){
    const all:THREE.Mesh[]=[];
    this.group.traverse(obj=>{if(obj instanceof THREE.Mesh)all.push(obj)});
    const logs=all.filter(m=>m.name.startsWith('hollow-bark-')).map(m=>{
      const geo=m.geometry;
      const shape=geo.userData.hollowBark as {radial:number;longitudinal:number;
        innerFraction:number;fullCircle:boolean;cutFaces:number;outerWall:boolean;
        innerWall:boolean}|undefined;
      const p=geo.getAttribute('position');
      const sectors=new Set<number>();
      if(shape)for(let j=0;j<shape.radial;j++){
        const theta=Math.atan2(p.getZ(j),p.getX(j));
        sectors.add(Math.floor(((theta+Math.PI*2)%(Math.PI*2))/(Math.PI/2))%4);
      }
      return {
        name:m.name,vertices:p.count,triangles:(geo.getIndex()?.count??0)/3,
        sectors:sectors.size,groups:geo.groups.length,
        fullCircle:!!shape?.fullCircle,innerWall:!!shape?.innerWall,
        outerWall:!!shape?.outerWall,cutFaces:shape?.cutFaces??0,
        wallFraction:shape?1-shape.innerFraction:0,
      };
    });
    return {logs,cappedBranches:all.filter(m=>m.geometry.userData.cappedWoodEnds===2).length};
  }

  private mat(opts: THREE.MeshStandardMaterialParameters): THREE.MeshStandardMaterial {
    const m = new THREE.MeshStandardMaterial(opts);
    if(opts.map?.userData.woodGrain){
      m.bumpMap=opts.map;m.bumpScale=.0014;m.roughness=Math.min(.94,Math.max(.82,opts.roughness??.9));
    }
    applyUnderwater(m, { caustics: true, causticStrength: 1 });
    this.materials.push(m);
    return m;
  }

  rebuild(decorIds: string[], dims: { halfW: number; halfD: number; floorY: number; height: number },layout?:AquascapeLayout): DecorOutput {
    const random=seededRandom(layout?.seed);
    this.group.scale.x=1;
    // Each rebuild creates new procedurally tessellated meshes. Dispose old
    // geometries first so editing wood does not leak GPU buffers over time.
    this.group.traverse(obj=>{
      if(obj instanceof THREE.Mesh)obj.geometry.dispose();
    });
    this.group.clear();
    // These procedural maps are owned by this decor rebuild, never shared
    // with fish/environment assets. Several materials can share one bark map.
    const maps=new Set<THREE.Texture>();
    for(const m of this.materials){
      for(const value of Object.values(m))if(value instanceof THREE.Texture)maps.add(value);
      m.dispose();
    }
    for(const map of maps)map.dispose();
    this.materials = [];

    const out: DecorOutput = { obstacles: [], shelters: [], tunnels: [], anchors: [], airstone: null };
    const { halfW, halfD, floorY } = dims;
    const scale = Math.min(1.2, halfW * 1.6); // props scale with tank size

    for (const id of decorIds) {
      switch (id) {
        case 'driftwood': {
          // A main bough with two branches, arching across the left third.
          const wood = this.mat({ map: woodTexture(random), color: '#a58359', roughness: 0.92 });
          const curve = new THREE.CatmullRomCurve3([
            new THREE.Vector3(-halfW * 0.7, floorY, -halfD * 0.2),
            new THREE.Vector3(-halfW * 0.3, floorY + dims.height * 0.35, 0),
            new THREE.Vector3(halfW * 0.15, floorY + dims.height * 0.55, halfD * 0.25),
          ]);
          const bough = new THREE.Mesh(cappedWoodTube(curve, 24, 0.02 * scale + 0.008, 9), wood);
          this.group.add(bough);
          for (let b = 0; b < 4; b++) {
            const t0 = 0.17 + b * 0.20;
            const p0 = curve.getPoint(t0);
            const sign=b%2===0?-1:1;
            const branch = new THREE.CatmullRomCurve3([
              p0,
              p0.clone().add(new THREE.Vector3(sign*halfW*.075,dims.height*(.08+.015*b),-sign*halfD*.07)),
              p0.clone().add(new THREE.Vector3(sign*halfW*(.14+.03*b),dims.height*(.13+.01*b),sign*halfD*.20)),
            ]);
            this.group.add(new THREE.Mesh(cappedWoodTube(branch, 8, 0.012 * scale + 0.004, 6), wood));
          }
          const mid = curve.getPoint(0.5);
          out.obstacles.push({ pos: mid, radius: 0.1 * scale });
          out.shelters.push(new THREE.Vector3(-halfW * 0.5, floorY + 0.02, -halfD * 0.1));
          out.anchors.push(curve.getPoint(0.3), curve.getPoint(0.7));
          break;
        }
        case 'spider-wood': {
          // A short trunk with several thin roots fanning up and outward.
          const wood = this.mat({ map: woodTexture(random), color: '#6a5236', roughness: 0.9 });
          const cx = halfW * 0.35, cz = -halfD * 0.1;
          const base = new THREE.Vector3(cx, floorY + 0.01, cz);
          const trunkTop = base.clone().add(new THREE.Vector3(0.02 * scale, dims.height * 0.2, 0.01 * scale));
          this.group.add(new THREE.Mesh(
            cappedWoodTube(new THREE.CatmullRomCurve3([
              base, base.clone().add(new THREE.Vector3(0, dims.height * 0.09, 0)), trunkTop,
            ]), 8, 0.014 * scale + 0.005, 6), wood));
          const spokes = 8;
          for (let i = 0; i < spokes; i++) {
            // Fan the branches around the trunk, each reaching to a different height.
            const ang = (i / spokes) * Math.PI * 2 + 0.5;
            const spread = 0.12 * scale + 0.04;
            const h = (0.22 + (i % 3) * 0.06) * dims.height;
            const tip = new THREE.Vector3(cx + Math.cos(ang) * spread, floorY + h, cz + Math.sin(ang) * spread);
            const mid = new THREE.Vector3(
              (trunkTop.x + tip.x) / 2 + Math.cos(ang) * 0.02, (trunkTop.y + tip.y) / 2,
              (trunkTop.z + tip.z) / 2 + Math.sin(ang) * 0.02);
            this.group.add(new THREE.Mesh(
              cappedWoodTube(new THREE.CatmullRomCurve3([trunkTop, mid, tip]), 8, 0.007 * scale + 0.002, 5), wood));
            out.anchors.push(tip);
            if(i%2===0){
              const fork=new THREE.CatmullRomCurve3([
                mid,mid.clone().add(new THREE.Vector3(.02, h*.08,-.014)),
                tip.clone().add(new THREE.Vector3(-.025, h*.14,.012))]);
              this.group.add(new THREE.Mesh(cappedWoodTube(fork,8,.003*scale+.0015,5),wood));
            }
          }
          out.obstacles.push({ pos: trunkTop.clone(), radius: 0.07 * scale });
          out.shelters.push(base.clone().add(new THREE.Vector3(0, 0.02, 0.03)));
          break;
        }
        case 'driftwood-stump': {
          // A gnarled stump with roots splaying down into the sand.
          const wood = this.mat({ map: woodTexture(random), color: '#5f4a30', roughness: 0.92 });
          const cx = -halfW * 0.35, cz = halfD * 0.25;
          const R = 0.06 * scale + 0.02, H = 0.09 * scale + 0.03;
          const stump = new THREE.Mesh(displace(new THREE.CylinderGeometry(R * 0.85, R, H, 10, 2), 0.12, 3), wood);
          stump.position.set(cx, floorY + H / 2, cz);
          this.group.add(stump);
          const roots = 7;
          for (let i = 0; i < roots; i++) {
            const ang = (i / roots) * Math.PI * 2 + 0.3;
            const reach = R + 0.08 * scale + 0.03;
            const start = new THREE.Vector3(cx + Math.cos(ang) * R * 0.8, floorY + H * 0.3, cz + Math.sin(ang) * R * 0.8);
            const end = new THREE.Vector3(cx + Math.cos(ang) * reach, floorY + 0.008, cz + Math.sin(ang) * reach);
            const mid = new THREE.Vector3((start.x + end.x) / 2, floorY + H * 0.15, (start.z + end.z) / 2);
            this.group.add(new THREE.Mesh(
              cappedWoodTube(new THREE.CatmullRomCurve3([start, mid, end]), 8, 0.01 * scale + 0.003, 5), wood));
          }
          out.obstacles.push({ pos: stump.position.clone(), radius: R * 1.3 });
          out.shelters.push(new THREE.Vector3(cx, floorY + 0.02, cz + R + 0.03)); // hollow beneath the roots
          out.anchors.push(stump.position.clone().add(new THREE.Vector3(0, H / 2, 0)));
          break;
        }
        case 'split-log':
        case 'hollow-log': {
          const split=id==='split-log';
          const barkMap=woodTexture(random);
          const wood=this.mat({map:barkMap,color:split?'#8b6945':'#ac8253',
            roughness:.94,side:THREE.DoubleSide});
          const innerWood=this.mat({map:barkMap,color:split?'#423024':'#523e2d',
            roughness:.98,side:THREE.DoubleSide});
          const R=(split?.072:.06)*scale+.03,len=(split?.34:.26)*scale+.08;
          const cx=halfW*(split?-.06:.1),cz=halfD*(split?-.3:.2);
          // Real bark thickness with a full round outside and visible annular
          // end cuts. The hole remains empty and the end rims are solid wood.
          const bark=createHollowBark(R,len,split?3.4:2.2);
          const log=new THREE.Mesh(bark,[wood,innerWood]);
          log.name='hollow-bark-'+id;
          // Aim the hollow mouth diagonally into the scene: a strictly
          // sideways cylinder reads as a flat rectangular half-log.
          const lookAxis=new THREE.Vector3(split?-.72:.66,0,split?.69:.75).normalize();
          log.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),lookAxis);
          log.position.set(cx,floorY+R*1.12,cz);
          this.group.add(log);
          // A couple of broken branch stubs poking off the bark for character.
          for (const [along, angle] of [[-.22,.65],[.22,2.25]] as const) {
            const stubLength=.05*scale+.02;
            const stub = new THREE.Mesh(new THREE.CylinderGeometry(.008,.012,stubLength,6),wood);
            // Attach stubs OUTSIDE the shell in log-local coordinates. The old
            // world offsets accidentally put one branch across the split-log bore.
            const radial=new THREE.Vector3(Math.cos(angle),0,Math.sin(angle));
            stub.position.copy(radial).multiplyScalar(R+stubLength*.42);
            stub.position.y=along*len;
            stub.position.applyQuaternion(log.quaternion).add(log.position);
            stub.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),radial.applyQuaternion(log.quaternion));
            this.group.add(stub);
          }
          // Hollow interior MUST be clear. Spheres approximate only the bark,
          // not the centre of the bore. Shell colliders remain in effect for all
          // free-swimming fish even if they aren't following the tunnel route.
          const axis=new THREE.Vector3(0,1,0).applyQuaternion(log.quaternion).normalize();
          // The collision shell uses the SAME local orientation as the visual
          // mesh. Unlike the old upper half-circle, it wraps all 360 degrees.
          // The collar stays outside the usable bore, so fish can pass through.
          const colliderR=R*.83;
          for(const u of [-.38,0,.38]){
            for(let j=0;j<12;j++){
              const a=j/12*Math.PI*2;
              const local=new THREE.Vector3(colliderR*Math.cos(a),len*u,
                colliderR*Math.sin(a));
              const shell=local.applyQuaternion(log.quaternion).add(log.position);
              if(shell.y>floorY+.005){
                out.obstacles.push({pos:shell,
                  radius:Math.max(.006,R*.24)});
              }
            }
          }
          const innerR=R*.56;
          out.tunnels.push({
            id,entrance:log.position.clone().addScaledVector(axis,-len*.58),
            middle:log.position.clone(),
            exit:log.position.clone().addScaledVector(axis,len*.58),
            boreRadius:innerR,capacity:split?2:1,through:true
          });
          out.shelters.push(log.position.clone()); // genuinely inside the hollow bore
          out.anchors.push(log.position.clone().add(new THREE.Vector3(0,R,0)));
          break;
        }
        case 'root-bridge':
        case 'log-arch': {
          // A hollow log bowed into an archway fish swim under and through.
          const roots=id==='root-bridge';
          const wood = this.mat({ map: woodTexture(random), color: roots?'#675039':'#6f5232', roughness: 0.9, side: THREE.DoubleSide });
          const cx = -halfW * 0.2, cz = -halfD * 0.05;
          const R = 0.05 * scale + 0.022;
          const foot = 0.14 * scale + 0.05, rise = 0.1 * scale + 0.05, lean = halfD * 0.05;
          const curve = new THREE.CatmullRomCurve3([
            new THREE.Vector3(cx - foot, floorY + R * 0.9, cz),
            new THREE.Vector3(cx - foot * 0.4, floorY + rise, cz + lean),
            new THREE.Vector3(cx + foot * 0.4, floorY + rise, cz - lean),
            new THREE.Vector3(cx + foot, floorY + R * 0.9, cz),
          ]);
          this.group.add(new THREE.Mesh(cappedWoodTube(curve, 24, roots?R*.8:R, 12, false), wood));
          if(roots){
            // Smaller intertwined roots give the familiar arch a less regular silhouette.
            for(let i=0;i<3;i++){
              const b=new THREE.CatmullRomCurve3([
                curve.getPoint(.12+i*.12),
                curve.getPoint(.35+i*.10).add(new THREE.Vector3(0,.012,-.015+i*.012)),
                curve.getPoint(.72+i*.06)]);
              this.group.add(new THREE.Mesh(cappedWoodTube(b,12,R*.16,6,false),wood));
            }
          }
          out.obstacles.push({ pos: curve.getPoint(0.06), radius: R * 1.1 }); // footings only,
          out.obstacles.push({ pos: curve.getPoint(0.94), radius: R * 1.1 }); // leave the arch open
          const mid=curve.getPoint(.5).setY(floorY + R*.6);
          const span=Math.min(halfD*.64,Math.max(.045,R*.8));
          out.tunnels.push({
            id,entrance:mid.clone().add(new THREE.Vector3(0,0,-span)),
            middle:mid.clone(),exit:mid.clone().add(new THREE.Vector3(0,0,span)),
            boreRadius:Math.min(R*.78,Math.max(.008,rise-R*.55)),
            capacity:roots?2:1,through:true
          });
          out.shelters.push(mid);
          out.anchors.push(curve.getPoint(0.5));
          break;
        }
        case 'river-rocks': {
          const rock = this.mat({ map: rockTexture('#5e5852',random), roughness: 0.9 });
          for (let i = 0; i < 5; i++) {
            const r = (0.03 + random() * 0.05) * scale + 0.015;
            const g = displace(new THREE.SphereGeometry(r, 10, 8), 0.25, i + 2);
            const m = new THREE.Mesh(g, rock);
            m.position.set(halfW * (0.15 + random() * 0.5), floorY + r * 0.55, halfD * (random() * 0.8 - 0.5));
            m.rotation.set(random(), random() * Math.PI, random());
            this.group.add(m);
            out.obstacles.push({ pos: m.position.clone(), radius: r * 1.1 });
            out.anchors.push(m.position.clone().add(new THREE.Vector3(0, r * 0.8, 0)));
          }
          break;
        }
        case 'slate-stack': {
          const slate = this.mat({ map: rockTexture('#565a60',random), roughness: 0.8 });
          const cx = -halfW * 0.45, cz = halfD * 0.15;
          let y = floorY;
          for (let i = 0; i < 3; i++) {
            const w = (0.16 - i * 0.03) * scale + 0.04, d = (0.12 - i * 0.02) * scale + 0.03, h = 0.014 * scale + 0.006;
            const m = new THREE.Mesh(displace(new THREE.BoxGeometry(w, h, d, 4, 1, 4), 0.08, i + 5), slate);
            m.position.set(cx + (random() - 0.5) * 0.03, y + h / 2 + (i > 0 ? 0.02 : 0), cz + (random() - 0.5) * 0.03);
            m.rotation.y = random() * 0.6;
            this.group.add(m);
            y = m.position.y + h / 2;
          }
          out.obstacles.push({ pos: new THREE.Vector3(cx, y, cz), radius: 0.12 * scale });
          out.shelters.push(new THREE.Vector3(cx, floorY + 0.025, cz + 0.05)); // the cave gap
          out.anchors.push(new THREE.Vector3(cx, y + 0.01, cz));
          break;
        }
        case 'reef-rock': {
          // A porous rock wall across the back — the reef's skeleton.
          const rockMat = this.mat({ map: rockTexture('#6a625a',random), roughness: 0.95 });
          for (let i = 0; i < 7; i++) {
            const r = (0.06 + random() * 0.09) * scale + 0.02;
            const g = displace(new THREE.SphereGeometry(r, 12, 9), 0.45, i * 1.7 + 1);
            const m = new THREE.Mesh(g, rockMat);
            const x = -halfW * 0.8 + (i / 6) * halfW * 1.6;
            m.position.set(x + (random() - 0.5) * 0.06, floorY + r * (0.4 + random() * 0.5), -halfD * (0.35 + random() * 0.3));
            m.rotation.set(random(), random() * Math.PI, random());
            this.group.add(m);
            out.obstacles.push({ pos: m.position.clone(), radius: r });
            out.shelters.push(m.position.clone().add(new THREE.Vector3(0.03, r * 0.3, r * 0.9)));
            out.anchors.push(m.position.clone().add(new THREE.Vector3((random() - 0.5) * r, r * 0.85, (random() - 0.5) * r * 0.5)));
          }
          break;
        }
        case 'sunken-ship': {
          const hullMat = this.mat({ map: woodTexture(random), color: '#7a6a52', roughness: 0.9 });
          const ship = new THREE.Group();
          // Hull: a stretched, pointed box; listing to one side in the sand.
          const hull = new THREE.Mesh(new THREE.CapsuleGeometry(0.045 * scale + 0.02, 0.22 * scale + 0.06, 4, 8), hullMat);
          hull.scale.set(1, 0.7, 1.4);
          hull.rotation.z = Math.PI / 2;
          ship.add(hull);
          const deckhouse = new THREE.Mesh(new THREE.BoxGeometry(0.07 * scale + 0.02, 0.04 * scale + 0.01, 0.05 * scale + 0.015), hullMat);
          deckhouse.position.y = 0.045 * scale + 0.015;
          ship.add(deckhouse);
          for (const mx of [-0.07, 0.05]) {
            const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.004, 0.006, 0.18 * scale + 0.05, 5), hullMat);
            mast.position.set(mx * scale, 0.1 * scale + 0.03, 0);
            mast.rotation.z = 0.15;
            ship.add(mast);
          }
          ship.position.set(halfW * 0.45, floorY + 0.03 * scale, -halfD * 0.15);
          ship.rotation.set(0.18, -0.5, -0.28); // wrecked list
          this.group.add(ship);
          out.obstacles.push({ pos: ship.position.clone(), radius: 0.16 * scale });
          out.shelters.push(ship.position.clone().add(new THREE.Vector3(0, 0.02, 0.08)));
          break;
        }
        case 'castle': {
          const stone = this.mat({ map: rockTexture('#8a8288',random), roughness: 0.85 });
          const castle = new THREE.Group();
          const keep = new THREE.Mesh(new THREE.CylinderGeometry(0.05 * scale + 0.015, 0.06 * scale + 0.02, 0.16 * scale + 0.05, 8), stone);
          keep.position.y = 0.08 * scale + 0.025;
          castle.add(keep);
          const roof = new THREE.Mesh(new THREE.ConeGeometry(0.055 * scale + 0.018, 0.06 * scale + 0.02, 8), this.mat({ color: '#5a4a7a', roughness: 0.7 }));
          roof.position.y = 0.19 * scale + 0.06;
          castle.add(roof);
          for (const [tx, tz] of [[-0.07, 0.04], [0.07, 0.04], [0, -0.07]] as const) {
            const tower = new THREE.Mesh(new THREE.CylinderGeometry(0.02 * scale + 0.008, 0.025 * scale + 0.01, 0.1 * scale + 0.03, 7), stone);
            tower.position.set(tx * scale, 0.05 * scale + 0.015, tz * scale);
            castle.add(tower);
            const tr = new THREE.Mesh(new THREE.ConeGeometry(0.024 * scale + 0.009, 0.035 * scale + 0.012, 7), roof.material);
            tr.position.set(tx * scale, 0.115 * scale + 0.038, tz * scale);
            castle.add(tr);
          }
          castle.position.set(-halfW * 0.15, floorY, halfD * 0.3);
          castle.rotation.y = 0.4;
          this.group.add(castle);
          out.obstacles.push({ pos: castle.position.clone().add(new THREE.Vector3(0, 0.08 * scale, 0)), radius: 0.13 * scale });
          out.shelters.push(castle.position.clone().add(new THREE.Vector3(0.06 * scale, 0.02, 0.03)));
          break;
        }
        case 'airstone': {
          const stoneMat = this.mat({ map: rockTexture('#b8b4ac',random), roughness: 1 });
          const stone = new THREE.Mesh(new THREE.CylinderGeometry(0.016, 0.02, 0.02, 10), stoneMat);
          stone.position.set(halfW * 0.72, floorY + 0.01, -halfD * 0.55);
          this.group.add(stone);
          out.airstone = stone.position.clone();
          break;
        }
      }
    }
    if(layout?.focalSide===1){
      this.group.scale.x=-1;
      const points=new Set<THREE.Vector3>([...out.obstacles.map(o=>o.pos),...out.shelters,...out.anchors,...out.tunnels.flatMap(t=>[t.entrance,t.middle,t.exit]),...(out.airstone?[out.airstone]:[])]);
      for(const point of points)point.x*=-1;
    }
    this.group.updateMatrixWorld(true);
    return out;
  }
}
