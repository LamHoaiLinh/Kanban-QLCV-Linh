/*
 * KAN PHOTO — batch browser image enhancement. No upload endpoint, no executable.
 * Pose model provides coordinates/segmentation only; code performs pixel edits.
 * Browser-only: predictable fallbacks when model/network/GPU unavailable.
 */
const SUPPORTED=/\.(jpe?g|png|webp)$/i;
const ITEMS=[];
const DEFAULTS=Object.freeze({denoise:true,deblock:true,lighting:true,color:true,clarity:true,upscale:true,rescue:true,waist:true,arms:true,waistLevel:68,armLevel:68,extraSharp:0,extraNoise:0,extraLight:0});
let cfg={...DEFAULTS},poseLandmarker=null,posePromise=null,selected=0,processing=false,previewUrl=null;
let host=null,api=null;
const checkNames=[['denoise','Giảm hạt nhiễu'],['deblock','Giảm vỡ ảnh'],['lighting','Tăng sáng tự nhiên'],['color','Cân bằng màu'],['clarity','Làm rõ nét'],['upscale','Tăng độ phân giải khi ảnh nhỏ'],['rescue','Cứu ảnh yếu'],['waist','Thon eo'],['arms','Thon bắp tay']];
const clamp=(x,a,b)=>Math.min(b,Math.max(a,x));
const pause=()=>new Promise(resolve=>setTimeout(resolve,0));
const friendly=n=>n<1024?n+' B':n<1048576?(n/1024).toFixed(0)+' KB':(n/1048576).toFixed(1)+' MB';
const safeText=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const makeCanvas=(w,h)=>{const canvas=document.createElement('canvas');canvas.width=w;canvas.height=h;return canvas;};
const context=c=>c.getContext('2d',{willReadFrequently:true});
function outputType(name){const ext=name.split('.').pop().toLowerCase();return ext==='png'?'image/png':ext==='webp'?'image/webp':'image/jpeg';}
function filename(name){const dot=name.lastIndexOf('.');return (dot>0?name.slice(0,dot):name)+'_KAN'+(dot>0?name.slice(dot):'.jpg');}
function addFiles(files){
 const seen=new Set(ITEMS.map(x=>x.file.name+'|'+x.file.size+'|'+x.file.lastModified));
 for(const file of files){
   if(!SUPPORTED.test(file.name))continue;
   const key=file.name+'|'+file.size+'|'+file.lastModified;
   if(seen.has(key))continue;
   seen.add(key);
   ITEMS.push({file,status:'Chờ xử lý',blob:null,note:'',url:null});
 }
 if(!ITEMS.length){show('Chọn ảnh JPG, PNG hoặc WebP.');return;}
 renderList();renderPreview(selected);
 show('Đã nạp '+ITEMS.length+' ảnh. Các lựa chọn sẽ áp dụng cho tất cả.');
}
function show(message,percent){if(host){const p=host.querySelector('#kanPhotoMessage');if(p)p.textContent=message;const bar=host.querySelector('#kanPhotoProgress');if(bar&&Number.isFinite(percent))bar.value=clamp(percent,0,100);}api?.setStatus?.(message,percent);}
function renderList(){
 const list=host?.querySelector('#kanPhotoList');if(!list)return;
 list.innerHTML=ITEMS.map((item,i)=>'<button type="button" class="kphoto-file'+(i===selected?' selected':'')+'" data-photo-i="'+i+'"><span>'+safeText(item.file.name)+'</span><small>'+friendly(item.file.size)+' · '+safeText(item.status)+'</small></button>').join('');
 list.querySelectorAll('[data-photo-i]').forEach(b=>b.onclick=()=>{selected=+b.dataset.photoI;renderList();renderPreview(selected);});
 host.querySelector('#kanPhotoCount').textContent=ITEMS.length+' ảnh';
 host.querySelector('#kanPhotoRun').disabled=processing||!ITEMS.length;
 host.querySelector('#kanPhotoClear').disabled=processing||!ITEMS.length;
}
function showUrl(el,item,after){
 if(!el)return;
 if(el.dataset.imageUrl){URL.revokeObjectURL(el.dataset.imageUrl);delete el.dataset.imageUrl;}
 el.removeAttribute('src');
 const blob=after?item.blob:item.file;
 if(!blob)return;
 const url=URL.createObjectURL(blob);el.dataset.imageUrl=url;el.src=url;
}
function renderPreview(index){
 const item=ITEMS[index];if(!host)return;
 const a=host.querySelector('#kanPhotoBefore'),b=host.querySelector('#kanPhotoAfter');
 if(!item){a.removeAttribute('src');b.removeAttribute('src');return;}
 showUrl(a,item,false);showUrl(b,item,true);
 host.querySelector('#kanPhotoDetail').textContent=item.note||'Ảnh sẽ được xem tại đây sau khi xử lý.';
}
async function getLandmarker(){
 if(poseLandmarker)return poseLandmarker;
 if(!posePromise)posePromise=(async()=>{
   // Models are fetched automatically; users never install anything.
   const vision=await import('https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.22/+esm');
   const fs=await vision.FilesetResolver.forVisionTasks('https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.22/wasm');
   return vision.PoseLandmarker.createFromOptions(fs,{baseOptions:{modelAssetPath:'https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task',delegate:'CPU'},runningMode:'IMAGE',numPoses:2,outputSegmentationMasks:true,minPoseDetectionConfidence:0.60,minPosePresenceConfidence:0.60,minTrackingConfidence:0.55});
 })().then(x=>{poseLandmarker=x;return x;}).catch(err=>{posePromise=null;throw err;});
 return posePromise;
}
function inspect(image,w,h){
 const ctx=context(image),small=makeCanvas(160,Math.max(32,Math.round(h*160/w)));
 const c=context(small);c.drawImage(image,0,0,small.width,small.height);
 const d=c.getImageData(0,0,small.width,small.height).data;
 let sum=0,sum2=0,dark=0,edges=0,noise=0,samples=0;
 const gray=new Float32Array(small.width*small.height);
 for(let k=0,j=0;k<d.length;k+=4,j++){const v=.299*d[k]+.587*d[k+1]+.114*d[k+2];gray[j]=v;sum+=v;sum2+=v*v;if(v<68)dark++;}
 const sw=small.width,sh=small.height;
 for(let y=1;y<sh-1;y++)for(let x=1;x<sw-1;x++){let k=y*sw+x,a=gray[k],g=Math.abs(gray[k+1]-gray[k-1])+Math.abs(gray[k+sw]-gray[k-sw]);if(g>36)edges++;else{noise+=Math.abs(a-(gray[k-1]+gray[k+1]+gray[k-sw]+gray[k+sw])/4);samples++;}}
 const total=sw*sh,brightness=sum/total,contrast=Math.sqrt(Math.max(0,sum2/total-brightness*brightness));
 return {brightness,contrast,dark:dark/total,edges:edges/total,noise:noise/Math.max(1,samples),small:Math.min(w,h)<900,w,h};
}
function blurred(src,radius){
 const c=makeCanvas(src.width,src.height);const x=context(c);x.filter='blur('+radius+'px)';x.drawImage(src,0,0);return c;
}
function denoise(canvas,amount){
 const original=context(canvas),a=original.getImageData(0,0,canvas.width,canvas.height);
 const b=context(blurred(canvas,.8+amount*.009)).getImageData(0,0,canvas.width,canvas.height).data;
 for(let i=0;i<a.data.length;i+=4){const d=a.data,r=d[i],g=d[i+1],bl=d[i+2],edge=Math.abs(r-b[i])+Math.abs(g-b[i+1])+Math.abs(bl-b[i+2]);
   const f=clamp((.66-edge/135)*amount/100,0,.48);
   d[i]=r+(b[i]-r)*f;d[i+1]=g+(b[i+1]-g)*f;d[i+2]=bl+(b[i+2]-bl)*f;
 }
 original.putImageData(a,0,0);
}
function light(canvas,metrics,extra=0){
 const ctx=context(canvas),img=ctx.getImageData(0,0,canvas.width,canvas.height),d=img.data;
 const shadow=clamp((145-metrics.brightness)/110,0,.65)+extra*.0022;
 if(shadow<=0)return;
 const gamma=clamp(1-.46*shadow,.67,1);
 const lut=new Uint8Array(256);for(let k=0;k<256;k++)lut[k]=Math.round(255*Math.pow(k/255,gamma));
 for(let i=0;i<d.length;i+=4){const bright=(d[i]+d[i+1]+d[i+2])/3,alpha=clamp((225-bright)/190,0,1)*(.52+.38*shadow);for(let j=0;j<3;j++)d[i+j]+=(lut[d[i+j]]-d[i+j])*alpha;}
 ctx.putImageData(img,0,0);
}
function color(canvas){
 const c=context(canvas),img=c.getImageData(0,0,canvas.width,canvas.height),d=img.data;
 let totals=[0,0,0],step=Math.max(4,Math.floor(d.length/400000/4)*4);
 for(let i=0;i<d.length;i+=step)for(let j=0;j<3;j++)totals[j]+=d[i+j];
 const mean=(totals[0]+totals[1]+totals[2])/3,gain=totals.map(v=>clamp(mean/Math.max(1,v),.95,1.05));
 for(let i=0;i<d.length;i+=4)for(let j=0;j<3;j++)d[i+j]=clamp(d[i+j]*(1+.38*(gain[j]-1)),0,255);
 c.putImageData(img,0,0);
}
function sharpen(canvas,amount,noise){
 const ctx=context(canvas),img=ctx.getImageData(0,0,canvas.width,canvas.height);
 const blur=context(blurred(canvas,1.15)).getImageData(0,0,canvas.width,canvas.height).data;
 const d=img.data,cap=7+amount*.09;
 for(let i=0;i<d.length;i+=4){const diff=.299*(d[i]-blur[i])+.587*(d[i+1]-blur[i+1])+.114*(d[i+2]-blur[i+2]);
   const abs=Math.abs(diff);if(abs<Math.max(3,noise*.4))continue;
   const delta=clamp(diff*amount/110,-cap,cap),t=clamp((abs-3)/9,0,1);
   for(let j=0;j<3;j++)d[i+j]=clamp(d[i+j]+delta*t,0,255);
 }
 ctx.putImageData(img,0,0);
}
function upscale(canvas){
 if(Math.max(canvas.width,canvas.height)>=1900||canvas.width*canvas.height*4>12000000)return canvas;
 const out=makeCanvas(canvas.width*2,canvas.height*2),ctx=context(out);
 ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality='high';ctx.drawImage(canvas,0,0,out.width,out.height);return out;
}
function bodyWarp(canvas,landmarks,mask){
 if(!landmarks||landmarks.length<25||!mask)return {canvas,note:'Không đủ dữ liệu cơ thể, giữ nguyên eo và tay.'};
 const p=i=>landmarks[i],ok=i=>p(i)&&p(i).visibility>.62;
 if(!([11,12,23,24].every(ok)))return {canvas,note:'Không thấy rõ vai hoặc hông, giữ nguyên vùng dáng.'};
 const w=canvas.width,h=canvas.height,points=landmarks.map(pt=>[pt.x*w,pt.y*h]);
 const sx=points[11][0],ex=points[12][0],hy=(points[23][1]+points[24][1])/2,sy=(points[11][1]+points[12][1])/2;
 const shoulder=Math.hypot(sx-ex,points[11][1]-points[12][1]);
 if(shoulder<35||hy<=sy+shoulder*.12)return {canvas,note:'Không thấy đủ vùng eo, giữ nguyên dáng.'};
 const mx=(points[11][0]+points[12][0]+points[23][0]+points[24][0])/4;
 const waistY=sy+(hy-sy)*.59;
 const regions=[];
 if(cfg.waist)regions.push({kind:'waist',cx:mx,cy:waistY,rx:shoulder*.70,ry:(hy-sy)*.43,intensity:.32*cfg.waistLevel/100});
 if(cfg.arms)for(const triplet of [[11,13,15],[12,14,16]])if(triplet.every(ok)){
   const [a,b,c]=triplet.map(i=>points[i]);if(Math.hypot(a[0]-c[0],a[1]-c[1])<shoulder*.22)continue;
   for(const pair of [[a,b],[b,c]]){
     const x=(pair[0][0]+pair[1][0])/2,y=(pair[0][1]+pair[1][1])/2;
     const len=Math.hypot(pair[0][0]-pair[1][0],pair[0][1]-pair[1][1]);
     regions.push({kind:'arm',cx:x,cy:y,rx:Math.max(shoulder*.19,16),ry:len*.57,intensity:.36*cfg.armLevel/100});
   }
 }
 if(!regions.length)return {canvas,note:'Tay bị che hoặc tư thế không rõ, giữ nguyên dáng.'};
 const map=mask.getAsFloat32Array?.();if(!map)return {canvas,note:'Không xác định được đường viền cơ thể.'};
 const mw=mask.width,mh=mask.height;if(!mw||!mh)return {canvas,note:'Không xác định được vùng người.'};
 const original=context(canvas).getImageData(0,0,w,h),out=new ImageData(new Uint8ClampedArray(original.data),w,h);
 const maskAt=(x,y)=>map[clamp(Math.round(y/h*mh),0,mh-1)*mw+clamp(Math.round(x/w*mw),0,mw-1)]||0;
 // Only warp inside recognized person; restrict geometry to small safe areas.
 for(const r of regions){
   const x0=clamp(Math.floor(r.cx-r.rx*1.15),0,w),x1=clamp(Math.ceil(r.cx+r.rx*1.15),0,w);
   const y0=clamp(Math.floor(r.cy-r.ry*1.15),0,h),y1=clamp(Math.ceil(r.cy+r.ry*1.15),0,h);
   for(let y=y0;y<y1;y++)for(let x=x0;x<x1;x++){
     const dx=(x-r.cx)/r.rx,dy=(y-r.cy)/r.ry,d2=dx*dx+dy*dy;
     if(d2>=1)continue;
     const regionStrength=(1-d2)*(1-d2)*r.intensity;
     const px=clamp(Math.round(x+(x-r.cx)*regionStrength),0,w-1),py=y;
     const atDst=maskAt(x,y),atSrc=maskAt(px,py);if(atDst<.34&&atSrc<.34)continue;
     const dest=(y*w+x)*4,from=(py*w+px)*4,weight=clamp((Math.max(atDst,atSrc)-.34)*2.8,0,1);
     for(let c=0;c<3;c++)out.data[dest+c]=original.data[dest+c]*(1-weight)+original.data[from+c]*weight;
   }
 }
 context(canvas).putImageData(out,0,0);
 return {canvas,note:'Đã chỉnh dáng có giới hạn theo vùng nhận diện.'};
}
async function applyBody(canvas){
 if(!cfg.waist&&!cfg.arms)return '';
 try{
   const detector=await getLandmarker();
   const res=detector.detect(canvas);
   if(!res.landmarks||res.landmarks.length!==1)return res.landmarks?.length>1?'Ảnh nhiều người: giữ nguyên vóc dáng.':'Không tìm thấy người đủ rõ: bỏ qua chỉnh dáng.';
   return bodyWarp(canvas,res.landmarks[0],res.segmentationMasks?.[0]).note;
 }catch(e){console.warn('KAN PHOTO: body detection unavailable',e);return 'Không thể nhận diện cơ thể trên trình duyệt này, bỏ qua thon eo/tay.';}
}
async function processImage(item,step){
 const bitmap=await createImageBitmap(item.file,{imageOrientation:'from-image'});
 try{
   let w=bitmap.width,h=bitmap.height;
   const down=Math.min(1,Math.sqrt(10000000/(w*h)));
   const image=makeCanvas(Math.max(1,Math.round(w*down)),Math.max(1,Math.round(h*down)));
   const ctx=context(image);ctx.drawImage(bitmap,0,0,image.width,image.height);
   if(image.width<2||image.height<2)throw Error('Ảnh quá nhỏ.');
   const m=inspect(image,image.width,image.height);let notes=[];
   const dark=m.brightness<114||m.dark>.35,grain=m.noise>5.3,soft=m.edges<.075&&m.contrast>22;
   const needed=cfg.rescue&&(dark||grain||soft||m.small);
   let canvas=image;step(1,'Đã phân tích');
   // Efficient ordering: denoise before contrast/clarity; extra strength is bounded.
   if((cfg.denoise&&m.noise>2.7)||(needed&&grain)||cfg.extraNoise){denoise(canvas,clamp(43+(grain?27:0)+cfg.extraNoise*.46,0,100));notes.push('giảm hạt');}
   step(2,'Đã giảm hạt');await pause();
   if(cfg.deblock&&item.file.type==='image/jpeg'&&m.noise>3.3){denoise(canvas,24);notes.push('giảm vỡ ảnh');}
   if(cfg.lighting||(needed&&dark)||cfg.extraLight){light(canvas,m,cfg.extraLight+(needed&&dark?18:0));notes.push('tăng sáng');}
   if(cfg.color)color(canvas);
   step(3,'Đã chỉnh sáng và màu');await pause();
   if((cfg.clarity&&(soft||m.edges<.16))||cfg.extraSharp||(needed&&soft)){sharpen(canvas,clamp(30+(needed&&soft?18:0)+cfg.extraSharp*.52,0,84),m.noise);notes.push('làm rõ nét');}
   step(4,'Đã tăng nét');await pause();
   const bodyNote=await applyBody(canvas);if(bodyNote)notes.push(bodyNote);
   step(5,'Đã kiểm tra vóc dáng');await pause();
   if(cfg.upscale&&m.small){canvas=upscale(canvas);if(canvas!==image)notes.push('tăng kích thước 2×');}
   step(6,'Đang lưu kết quả');await pause();
   const type=outputType(item.file.name);
   const blob=await new Promise((resolve,reject)=>canvas.toBlob(b=>b?resolve(b):reject(Error('Không xuất được ảnh.')),type,.94));
   return {blob,note:notes.join(' · ')+(down<1?' · đã giảm cỡ ảnh rất lớn để tránh hết bộ nhớ':'')};
 }finally{bitmap.close?.();}
}
function saveLocal(blob,name){
 const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),20000);
}
async function run(){
 if(processing||!ITEMS.length)return;
 processing=true;renderList();const runBtn=host.querySelector('#kanPhotoRun'),clearBtn=host.querySelector('#kanPhotoClear');
 runBtn.disabled=true;clearBtn.disabled=true;
 api.startBusy('Đang xử lý ảnh…');let done=0,failed=0;const outputs=[];const usedNames=new Map();
 try{
   for(let i=0;i<ITEMS.length;i++){
     api.assertNotAborted();const item=ITEMS[i];item.status='Đang xử lý';selected=i;renderList();
     try{
       const result=await processImage(item,(s,note)=>{show('Ảnh '+(i+1)+'/'+ITEMS.length+': '+note,Math.round(((i+s/7)/ITEMS.length)*85));});
       item.blob=result.blob;item.note=result.note;item.status='Hoàn thành';const baseName=filename(item.file.name),n=(usedNames.get(baseName)||0)+1;usedNames.set(baseName,n);const uniqueName=n===1?baseName:baseName.replace(/(\.[^.]+)$/, '_'+n+'$1');outputs.push({blob:item.blob,name:uniqueName});
       done++;renderPreview(i);
     }catch(e){item.status='Lỗi: '+(e.message||e);item.note=item.status;failed++;}
     renderList();await pause();
   }
   if(!outputs.length)throw Error('Không xử lý được ảnh nào.');
   show('Đang chuẩn bị tải kết quả...',90);
   if(outputs.length===1)saveLocal(outputs[0].blob,outputs[0].name);
   else await api.downloadZip(outputs,'KAN_PHOTO_KET_QUA.zip');
   show('Hoàn tất '+done+'/'+ITEMS.length+' ảnh'+(failed?' · '+failed+' ảnh lỗi':'')+'.',100);
 }catch(e){show(e.name==='AbortError'?'Đã hủy xử lý. Ảnh gốc không thay đổi.':'Có lỗi: '+(e.message||e));}
 finally{processing=false;api.endBusy('Đã kết thúc xử lý ảnh.');renderList();}
}
export function renderPhotoStudioTool(container,helpers){
 host=container;api=helpers;
 if(!document.getElementById('kan-photo-css')){
   const link=document.createElement('link');link.id='kan-photo-css';link.rel='stylesheet';link.href=new URL('./photo-studio.css?v=1.0.0',import.meta.url).href;document.head.appendChild(link);
 }
 host.innerHTML='<section class="office-tool-panel active kphoto"><div class="office-tool-head"><div><h3>KAN PHOTO – Chỉnh ảnh nhanh</h3><p>Thêm ảnh → Xử lý tất cả → Tải kết quả. Không cần cài phần mềm.</p></div></div>'+
 '<div id="kanPhotoDrop" class="kphoto-drop" tabindex="0" role="button"><strong>＋ Kéo ảnh vào đây hoặc bấm để chọn</strong><span>JPG · PNG · WebP · Chọn nhiều ảnh cùng lúc</span><input type="file" multiple accept="image/jpeg,image/png,image/webp" hidden></div>'+
 '<div class="kphoto-head"><strong id="kanPhotoCount">0 ảnh</strong><button id="kanPhotoClear" class="office-btn" type="button">Xóa danh sách</button></div><div id="kanPhotoList" class="kphoto-list"></div>'+
 '<div class="kphoto-view"><div><b>Ảnh gốc</b><img id="kanPhotoBefore" alt="Ảnh gốc"></div><div><b>Ảnh kết quả</b><img id="kanPhotoAfter" alt="Ảnh sau xử lý"></div></div><p id="kanPhotoDetail" class="office-card-note">Xem ảnh trước và sau ngay tại đây.</p>'+
 '<div class="office-card"><h4>Tùy chọn xử lý</h4><p class="office-card-note">Đã bật sẵn chế độ mạnh phù hợp từng ảnh. Bạn có thể bỏ tick chức năng không muốn.</p><div class="kphoto-checks">'+
 checkNames.map(([key,title])=>'<label><input type="checkbox" data-kphoto="'+key+'"'+(cfg[key]?' checked':'')+'> '+title+'</label>').join('')+
 '</div><div class="kphoto-pair"><label>Thon eo <input type="range" min="0" max="100" data-kphoto-range="waistLevel" value="'+cfg.waistLevel+'"><output data-kphoto-val="waistLevel">'+cfg.waistLevel+'%</output></label><label>Thon bắp tay <input type="range" min="0" max="100" data-kphoto-range="armLevel" value="'+cfg.armLevel+'"><output data-kphoto-val="armLevel">'+cfg.armLevel+'%</output></label></div>'+
 '<details class="kphoto-advanced"><summary>Chỉnh thêm nếu cần</summary><div class="kphoto-pair">'+
 [['extraSharp','Làm nét thêm'],['extraNoise','Giảm hạt thêm'],['extraLight','Sáng hơn']].map(([key,title])=>'<label>'+title+' <input type="range" min="0" max="100" value="'+cfg[key]+'" data-kphoto-range="'+key+'"><output data-kphoto-val="'+key+'">'+cfg[key]+'%</output></label>').join('')+
 '</div></details><p class="office-card-note">Ảnh có nhiều người, thiếu vùng eo/tay hoặc không nhận diện đủ rõ sẽ không tự chỉnh vóc dáng. Mức 68% là mức điều khiển, không phải thu nhỏ 68% cơ thể.</p></div>'+
 '<div class="kphoto-actions"><progress id="kanPhotoProgress" max="100" value="0"></progress><span id="kanPhotoMessage">Sẵn sàng.</span><button id="kanPhotoRun" class="office-btn primary" type="button">XỬ LÝ TẤT CẢ &amp; TẢI KẾT QUẢ</button></div></section>';
 const drop=host.querySelector('#kanPhotoDrop'),picker=drop.querySelector('input');
 drop.addEventListener('click',()=>picker.click());drop.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();picker.click();}});
 picker.addEventListener('change',e=>{addFiles([...e.target.files]);picker.value='';});
 drop.addEventListener('dragover',e=>{e.preventDefault();drop.classList.add('hover');});
 drop.addEventListener('dragleave',()=>drop.classList.remove('hover'));
 drop.addEventListener('drop',e=>{e.preventDefault();drop.classList.remove('hover');addFiles([...e.dataTransfer.files]);});
 host.querySelectorAll('[data-kphoto]').forEach(input=>input.addEventListener('change',()=>{cfg[input.dataset.kphoto]=input.checked;}));
 host.querySelectorAll('[data-kphoto-range]').forEach(input=>input.addEventListener('input',()=>{const key=input.dataset.kphotoRange;cfg[key]=+input.value;host.querySelector('[data-kphoto-val="'+key+'"]').textContent=input.value+'%';}));
 host.querySelector('#kanPhotoClear').onclick=()=>{if(processing)return;ITEMS.length=0;selected=0;renderList();renderPreview(0);show('Đã xóa danh sách.');};
 host.querySelector('#kanPhotoRun').onclick=()=>void run();
 renderList();renderPreview(selected);
}
