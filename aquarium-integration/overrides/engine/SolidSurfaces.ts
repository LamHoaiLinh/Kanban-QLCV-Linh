import * as THREE from 'three';

interface Face { triangle: THREE.Triangle; bounds: THREE.Box3 }
interface Node { bounds: THREE.Box3; faces?: Face[]; left?: Node; right?: Node }
export interface SurfaceHit { point: THREE.Vector3; normal: THREE.Vector3; fraction: number }
const EPS = 1e-6;

function tree(faces: Face[]): Node {
  const bounds = new THREE.Box3();
  faces.forEach(f => bounds.union(f.bounds));
  if (faces.length <= 12) return { bounds, faces };
  const size = bounds.getSize(new THREE.Vector3());
  const axis = size.x >= size.y && size.x >= size.z ? 'x' : size.y >= size.z ? 'y' : 'z';
  faces.sort((a,b) => a.bounds.min[axis]+a.bounds.max[axis]-b.bounds.min[axis]-b.bounds.max[axis]);
  const middle = Math.floor(faces.length/2);
  return { bounds, left:tree(faces.slice(0,middle)), right:tree(faces.slice(middle)) };
}
function query(node:Node, bounds:THREE.Box3, visit:(f:Face)=>void):void {
  if (!node.bounds.intersectsBox(bounds)) return;
  if (node.faces) { for (const f of node.faces) if(f.bounds.intersectsBox(bounds)) visit(f); }
  else { query(node.left!,bounds,visit); query(node.right!,bounds,visit); }
}

/** Immutable world-space triangles from the rendered hardscape. Rebuilt only
 * when decor changes. Per-mesh BVHs keep holes empty and overlapping solids a
 * union; no GPU resources, proxy spheres or changes to render materials. */
export class SolidSurfaces {
  private roots:Node[]=[];
  rebuild(group:THREE.Object3D):void {
    this.roots=[];
    group.updateWorldMatrix(true,true);
    group.traverse(object=>{
      if (!(object instanceof THREE.Mesh)) return;
      const geometry=object.geometry, positions=geometry.getAttribute('position'), index=geometry.index;
      if (!positions) return;
      const faces:Face[]=[];
      for(let i=0;i<(index?.count??positions.count);i+=3){
        const vertex=(j:number)=>new THREE.Vector3().fromBufferAttribute(positions,index?index.getX(j):j).applyMatrix4(object.matrixWorld);
        const triangle=new THREE.Triangle(vertex(i),vertex(i+1),vertex(i+2));
        if(triangle.getArea()<1e-12)continue;
        faces.push({triangle,bounds:new THREE.Box3().setFromPoints([triangle.a,triangle.b,triangle.c])});
      }
      if(faces.length)this.roots.push(tree(faces));
    });
  }
  /** Closed-mesh parity, separately per mesh: the bore of a hollow log is water.
   * Duplicate edge/diagonal hits count once, independent of material sidedness. */
  contains(point:THREE.Vector3,radius=0):boolean {
    const near=new THREE.Box3().setFromCenterAndSize(point,new THREE.Vector3().setScalar(2*(radius+EPS)));
    for(const root of this.roots){
      if(!root.bounds.clone().expandByScalar(radius+EPS).containsPoint(point))continue;
      let touching=false;
      query(root,near,f=>{if(f.triangle.closestPointToPoint(point,new THREE.Vector3()).distanceToSquared(point)<(radius+EPS)**2)touching=true;});
      if(touching)return true;
      const direction=new THREE.Vector3(1,.3713907,.529117).normalize();
      const ray=new THREE.Ray(point,direction),end=point.clone().addScaledVector(direction,root.bounds.getSize(new THREE.Vector3()).length()*2+1);
      const hits:number[]=[];
      query(root,new THREE.Box3().setFromPoints([point,end]),f=>{
        const p=ray.intersectTriangle(f.triangle.a,f.triangle.b,f.triangle.c,false,new THREE.Vector3());
        if(p)hits.push(p.distanceTo(point));
      });
      hits.sort((a,b)=>a-b);
      const unique=hits.filter((d,i)=>d>EPS&&(i===0||d-hits[i-1]>EPS*4));
      if(unique.length%2===1)return true;
    }
    return false;
  }
  /** Conservative continuous sphere/triangle advancement. Distance to a closed
   * triangle is 1-Lipschitz: advancing by (distance-radius)/travel cannot tunnel,
   * even at large dt. Includes faces, edges and vertices (not a centre ray). */
  sweep(from:THREE.Vector3,to:THREE.Vector3,radius:number):SurfaceHit|null {
    const movement=to.clone().sub(from),length=movement.length();
    if(length<EPS)return null;
    const bounds=new THREE.Box3().setFromPoints([from,to]).expandByScalar(radius+EPS*2);
    let first:SurfaceHit|null=null,best=1+EPS;
    for(const root of this.roots)query(root,bounds,f=>{
      let t=0;
      const center=new THREE.Vector3(),closest=new THREE.Vector3(),normal=new THREE.Vector3();
      for(let iteration=0;iteration<48&&t<=Math.min(1,best);iteration++){
        center.copy(from).addScaledVector(movement,t);
        f.triangle.closestPointToPoint(center,closest);
        normal.copy(center).sub(closest);
        const distance=normal.length();
        if(distance>EPS)normal.divideScalar(distance);
        else { f.triangle.getNormal(normal);if(normal.dot(movement)>0)normal.negate(); }
        if(distance<=radius+EPS){
          // Tangential or separating contact at the beginning is allowed. The
          // distance to a convex triangle cannot decrease later along this ray.
          if(t<EPS&&normal.dot(movement)>=-1e-12)return;
          if(t<best){best=t;first={point:closest.clone(),normal:normal.clone(),fraction:t};}
          return;
        }
        if(normal.dot(movement)>=0)return;
        const advance=(distance-radius)/length;
        if(iteration===47){
          // Safe conservative contact on numerical grazing, never tunnel.
          if(t<best){best=t;first={point:closest.clone(),normal:normal.clone(),fraction:t};}
          return;
        }
        t+=Math.max(advance,EPS*.1);
      }
    });
    return first;
  }
  clear():void {this.roots=[];}
}
