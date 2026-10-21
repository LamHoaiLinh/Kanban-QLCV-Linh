/*
 * Lightweight body landmark detection in browser via MediaPipe Tasks Vision.
 * The model identifies landmarks only; pixel manipulation stays in photo-auto-body.js.
 */
const base='https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.22';
const model='https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task';
let detectorPromise=null;
export async function getPoseDetector(){
 if(!detectorPromise)detectorPromise=(async()=>{
  const vision=await import(base+'/vision_bundle.mjs');
  const files=await vision.FilesetResolver.forVisionTasks(base+'/wasm');
  return vision.PoseLandmarker.createFromOptions(files,{
   baseOptions:{modelAssetPath:model,delegate:'CPU'},runningMode:'IMAGE',
   numPoses:4,minPoseDetectionConfidence:.48,minPosePresenceConfidence:.45,
   minTrackingConfidence:.45,outputSegmentationMasks:false
  });
 })().catch(error=>{detectorPromise=null;throw error;});
 return detectorPromise;
}
export function validPose(points){
 if(!Array.isArray(points)||points.length<33)return false;
 for(const i of [11,12,23,24]){
  const p=points[i];if(!p||!Number.isFinite(p.x)||!Number.isFinite(p.y)||p.visibility!==undefined&&p.visibility<.35)return false;
 }
 return true;
}
export async function detectBodies(image){
 const detector=await getPoseDetector();
 const w=image.width,h=image.height,scale=Math.min(1,960/Math.max(w,h));
 const canvas=document.createElement('canvas');canvas.width=Math.round(w*scale);canvas.height=Math.round(h*scale);
 canvas.getContext('2d').drawImage(image,0,0,canvas.width,canvas.height);
 const result=detector.detect(canvas);
 const poses=(result.landmarks||[]).filter(validPose).map(points=>points.map(({x,y,z,visibility})=>({x,y,z,visibility})));
 return poses;
}
