/*
 * Optional WebGPU-only neural restoration. Models download to user's browser
 * on explicit click. Images are never uploaded to a processing server.
 * Runtime and models are third-party assets; failures are reported, not faked.
 */
const VERSION='1.22.0';
const RUNTIME='https://cdn.jsdelivr.net/npm/onnxruntime-web@'+VERSION+'/dist/';
const MODEL={
  scunet:{
    url:'https://huggingface.co/Heliosoph/scunet-onnx/resolve/main/scunet_color_real_psnr.onnx',
    extra:'https://huggingface.co/Heliosoph/scunet-onnx/resolve/main/scunet_color_real_psnr.onnx.data',
    extraName:'scunet_color_real_psnr.onnx.data',input:'image',output:'denoised',factor:1,tile:96
  },
  realesrgan:{
    url:'https://huggingface.co/skillsafe-ai/realesrgan-x2plus/resolve/main/model.onnx',
    input:'input',output:'output',factor:2,tile:96
  }
};
let runtimePromise=null;
const sessions=new Map();
const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
const canvas=(w,h)=>{const c=document.createElement('canvas');c.width=w;c.height=h;return c;};
async function fetchAsset(url,onProgress){
 const response=await fetch(url,{mode:'cors',credentials:'omit'});
 if(!response.ok)throw Error('Không tải được mô hình (HTTP '+response.status+').');
 if(!response.body)return new Uint8Array(await response.arrayBuffer());
 const len=Number(response.headers.get('Content-Length'))||0;
 const reader=response.body.getReader(),parts=[];let done=0;
 for(;;){
   const next=await reader.read();if(next.done)break;
   parts.push(next.value);done+=next.value.length;
   if(len)onProgress?.('Đang tải mô hình: '+Math.round(done/len*100)+'%');
 }
 const bytes=new Uint8Array(done);let pos=0;
 for(const chunk of parts){bytes.set(chunk,pos);pos+=chunk.length;}
 return bytes;
}
async function runtime(){
 if(!globalThis.navigator?.gpu)throw Error('Thiết bị/trình duyệt chưa hỗ trợ WebGPU. Hãy thử Chrome hoặc Edge trên PC.');
 if(!runtimePromise){
   runtimePromise=import(RUNTIME+'ort.webgpu.mjs').then(ort=>{ort.env.wasm.wasmPaths=RUNTIME;ort.env.wasm.numThreads=1;return ort;});
 }
 return runtimePromise;
}
async function model(kind,progress){
 if(sessions.has(kind))return sessions.get(kind);
 const config=MODEL[kind];if(!config)throw Error('Mô hình không hợp lệ.');
 const ort=await runtime();
 progress?.('Đang tải mô hình '+kind+' (lần đầu có thể mất vài phút)…');
 const data=await fetchAsset(config.url,progress);
 const options={executionProviders:['webgpu'],graphOptimizationLevel:'all'};
 if(config.extra){
   progress?.('Đang tải trọng số SCUNet (~73 MB)…');
   const extra=await fetchAsset(config.extra,progress);
   options.externalData=[{path:config.extraName,data:extra}];
 }
 progress?.('Đang khởi tạo mô hình trên GPU…');
 const session=await ort.InferenceSession.create(data,options);
 sessions.set(kind,{ort,session,config});return sessions.get(kind);
}
function toTensor(ctx,x,y,size){
 const source=ctx.getImageData(x,y,size,size).data;
 const channelSize=size*size,tensor=new Float32Array(channelSize*3);
 for(let j=0;j<channelSize;j++)for(let c=0;c<3;c++)tensor[c*channelSize+j]=source[j*4+c]/255;
 return tensor;
}
function makeTile(src,x,y,size){
 const part=canvas(size,size),ctx=part.getContext('2d');
 // Repeat edge pixels rather than using black padding.
 const xx=clamp(x,0,src.width-1),yy=clamp(y,0,src.height-1);
 ctx.drawImage(src,xx,yy,Math.min(size,src.width-xx),Math.min(size,src.height-yy),0,0,Math.min(size,src.width-xx),Math.min(size,src.height-yy));
 if(xx+size>src.width){
   ctx.drawImage(part,Math.max(0,src.width-xx-1),0,1,size,src.width-xx,0,size-(src.width-xx),size);
 }
 if(yy+size>src.height){
   ctx.drawImage(part,0,Math.max(0,src.height-yy-1),size,1,0,src.height-yy,size,size-(src.height-yy));
 }
 return part;
}
export async function runPhotoModel(source,kind,progress=()=>{}){
 if(source.width<8||source.height<8)throw Error('Ảnh quá nhỏ.');
 const px=source.width*source.height;
 if(px>2500000)throw Error('Ảnh trên 2,5 triệu điểm ảnh. Hãy crop vùng cần cứu trước để tránh hết bộ nhớ GPU.');
 const {ort,session,config}=await model(kind,progress);
 const size=config.tile,factor=config.factor,out=canvas(source.width*factor,source.height*factor),dest=out.getContext('2d');
 const list=[];
 for(let y=0;y<source.height;y+=size)for(let x=0;x<source.width;x+=size)list.push([x,y]);
 try{
  for(let i=0;i<list.length;i++){
   const [x,y]=list[i],tile=makeTile(source,x,y,size),image=tile.getContext('2d').getImageData(0,0,size,size);
   const tensor=new Float32Array(size*size*3);
   for(let j=0;j<size*size;j++)for(let ch=0;ch<3;ch++)tensor[ch*size*size+j]=image.data[j*4+ch]/255;
   const outputs=await session.run({[config.input]:new ort.Tensor('float32',tensor,[1,3,size,size])});
   const result=outputs[config.output];if(!result||!result.data)throw Error('Mô hình không trả về kết quả hợp lệ.');
   const ow=size*factor,oh=size*factor,part=canvas(ow,oh),ctx=part.getContext('2d'),rgba=ctx.createImageData(ow,oh);
   for(let j=0;j<ow*oh;j++){
    for(let ch=0;ch<3;ch++)rgba.data[j*4+ch]=clamp(Math.round(result.data[ch*ow*oh+j]*255),0,255);
    rgba.data[j*4+3]=255;
   }
   ctx.putImageData(rgba,0,0);
   dest.drawImage(part,0,0,Math.min(ow,(source.width-x)*factor),Math.min(oh,(source.height-y)*factor),x*factor,y*factor,Math.min(ow,(source.width-x)*factor),Math.min(oh,(source.height-y)*factor));
   progress?.('AI đang xử lý vùng '+(i+1)+'/'+list.length);
   await new Promise(r=>setTimeout(r,0));
  }
 }catch(e){throw Error('AI chưa xử lý thành công: '+e.message);}
 return out;
}
export const PHOTO_AI_MODELS=Object.freeze({scunet:'SCUNet – khử nhiễu ảnh thật',realesrgan:'Real-ESRGAN – nâng ảnh 2×'});
