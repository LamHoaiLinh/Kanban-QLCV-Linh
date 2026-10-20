import {DEFAULT_EDITS,applyAdjustments,hasAdjustments} from './photo-filters.js?v=1.0.0';
import {deformAt} from './photo-warp.js?v=1.0.0';
import {applyMasked,createMask,stamp,variantsFrom,recipeFrom} from './photo-local.js?v=1.0.1';
import {runPhotoModel} from './photo-ai.js?v=1.0.0';
/*
 KAN PHOTO preview/editor — all pixels modified in-browser, original never edited.
 Zoom and pan shared by both canvases; edit tools apply to processed image only.
*/
const limit=(n,a,b)=>Math.max(a,Math.min(b,n));
const make=(w,h)=>{const c=document.createElement('canvas');c.width=w;c.height=h;return c;};
const toCanvas=img=>{const c=make(img.width,img.height);c.getContext('2d').drawImage(img,0,0);return c;};
const snapshot=(c,type)=>new Promise((ok,no)=>c.toBlob(b=>b&&b.type===type?ok(b):no(Error('Không xuất được định dạng gốc.')),type,.96));
function matrix(points){
 const A=[],B=[],uv=[[0,0],[1,0],[1,1],[0,1]];
 for(let i=0;i<4;i++){const [u,v]=uv[i],[x,y]=points[i];
  A.push([u,v,1,0,0,0,-x*u,-x*v]);B.push(x);
  A.push([0,0,0,u,v,1,-y*u,-y*v]);B.push(y);}
 for(let i=0;i<8;i++){
  let best=i;for(let j=i+1;j<8;j++)if(Math.abs(A[j][i])>Math.abs(A[best][i]))best=j;
  if(Math.abs(A[best][i])<1e-10)throw Error('Bốn góc đang bị chồng. Đặt lại vùng chọn.');
  [A[best],A[i]]=[A[i],A[best]];[B[best],B[i]]=[B[i],B[best]];
  const p=A[i][i];for(let k=i;k<8;k++)A[i][k]/=p;B[i]/=p;
  for(let j=0;j<8;j++){if(j===i)continue;let f=A[j][i];for(let k=i;k<8;k++)A[j][k]-=f*A[i][k];B[j]-=f*B[i];}
 }return B;
}
async function correctPerspective(src,q,progress){
 const edge=(a,b)=>Math.hypot(a[0]-b[0],a[1]-b[1]);
 let w=Math.round((edge(q[0],q[1])+edge(q[2],q[3]))/2),h=Math.round((edge(q[1],q[2])+edge(q[3],q[0]))/2);
 if(w<24||h<24)throw Error('Vùng phối cảnh quá nhỏ.');
 const scale=Math.min(1,Math.sqrt(10000000/(w*h)));w=Math.max(24,Math.round(w*scale));h=Math.max(24,Math.round(h*scale));
 const [a,b,c,d,e,f,g,k]=matrix(q),sw=src.width,sh=src.height,source=src.getContext('2d',{willReadFrequently:true}).getImageData(0,0,sw,sh).data;
 const out=make(w,h),ctx=out.getContext('2d'),im=ctx.createImageData(w,h),dst=im.data;
 for(let y=0;y<h;y++){
  const v=y/Math.max(1,h-1);
  for(let x=0;x<w;x++){
   const u=x/Math.max(1,w-1),z=g*u+k*v+1;if(Math.abs(z)<1e-9)continue;
   const px=(a*u+b*v+c)/z,py=(d*u+e*v+f)/z;
   if(px<0||py<0||px>sw-1||py>sh-1)continue;
   const x0=Math.floor(px),y0=Math.floor(py),x1=Math.min(sw-1,x0+1),y1=Math.min(sh-1,y0+1),fx=px-x0,fy=py-y0;
   const a0=(y0*sw+x0)*4,b0=(y0*sw+x1)*4,c0=(y1*sw+x0)*4,d0=(y1*sw+x1)*4,t=(y*w+x)*4;
   for(let n=0;n<4;n++)dst[t+n]=source[a0+n]*(1-fx)*(1-fy)+source[b0+n]*fx*(1-fy)+source[c0+n]*(1-fx)*fy+source[d0+n]*fx*fy;
  }
  if(y%90===0){progress(Math.round(y/h*100));await new Promise(r=>setTimeout(r,0));}
 }
 ctx.putImageData(im,0,0);progress(100);return out;
}

export async function openPhotoPreview({file,blob,type,onSaved,onReset,onApplyBatch,onLoadPrevious,onAutoDraft,editState=null}){
 if(!document.getElementById('kan-photo-preview-style')){
  const st=document.createElement('link');st.id='kan-photo-preview-style';st.rel='stylesheet';
  st.href=new URL('./photo-preview.css?v=4.0.1',import.meta.url).href;document.head.appendChild(st);
 }
 const original=await createImageBitmap(file),result=await createImageBitmap(editState?.baseBlob||blob||file);
 const phoneScreen=()=>globalThis.matchMedia?.('(pointer: coarse)').matches && Math.min(globalThis.screen.width,globalThis.screen.height)<=680;
 const mobile=Boolean(phoneScreen()||(window.innerWidth<=650&&navigator.maxTouchPoints>0));
 let compareHeld=false,closed=false,activeTouches=new Map(),pinch=null,suppressTouches=false;
 let sheetHeight=0,sheetDrag=null,redo=[],previewCache=null,previewDirty=true;
 let loupePoint=null,draftTimer=null,draftRunning=false,draftWarning=false;
 let working=toCanvas(result),settings=editState?.settings?structuredClone(editState.settings):DEFAULT_EDITS(),rendered=null,renderDirty=true;
 let editScope=editState?.scope||'global',localMask=createMask(working.width,working.height),paintMode='add',paintRadius=90,brushOpacity=90;
 let variantsCache=null,AIbusy=false;
 let zoom=1,panX=0,panY=0,tab='shape',tool='warp',crop=null,quad=null,textPoint=null;
 let drag=null,dirty=false,busy=false,space=false,brushRadius=130,brushPower=68,brush='waist',brushPoint=null;
 let undo=[],color='orange',repaintTimer=null;
 if(editState?.maskBlob){
   try{const bitmap=await createImageBitmap(editState.maskBlob);localMask.getContext('2d').drawImage(bitmap,0,0);bitmap.close();}catch{editScope='global';}
 }
 const channels=['red','orange','yellow','green','aqua','blue','purple','magenta'];
 const labels=['Đỏ','Cam','Vàng','Lục','Lam ngọc','Lam','Tím','Hồng'];
 const pigments=['#e85050','#ed9652','#d9c64c','#53b35c','#55c1be','#537ac7','#9c72cc','#cd69aa'];
 const modal=document.createElement('dialog');modal.className='kpe-modal';
 modal.innerHTML='<div class="kpe-shell">'+
  '<header class="kpe-top"><div><strong>KAN PHOTO · CHỈNH ẢNH</strong><small id="kpeFilename"></small></div><span id="kpeZoom">100%</span><button data-click="fit">Vừa khung</button><button data-click="pixel">100%</button><button data-click="undo" title="Hoàn tác">↩ Hoàn tác</button><button data-click="redo" title="Làm lại">↪ Làm lại</button><button data-click="previous">Bản lưu trước</button><button data-click="restore">Đặt lại</button><button data-click="close">×</button></header>'+
  '<div class="kpe-workspace"><div class="kpe-panes"><section class="kpe-side"><b>ẢNH GỐC</b><canvas data-pane="0"></canvas></section><section class="kpe-side"><b>ẢNH ĐANG CHỈNH</b><canvas data-pane="1"></canvas></section></div>'+
  '<aside class="kpe-sidebar"><div id="kpeSheetHandle" class="kpe-sheet-handle" aria-label="Kéo lên hoặc xuống để thay đổi bảng công cụ"><span></span></div><nav class="kpe-tabs" aria-label="Nhóm công cụ"><button data-tab="shape">Vóc dáng</button><button data-tab="basic">Ánh sáng</button><button data-tab="hsl">HSL</button><button data-tab="detail">Chi tiết</button><button data-tab="geometry">Hình học</button><button data-tab="text">Chữ</button></nav><div class="kpe-controls" id="kpeControls"></div></aside></div>'+
  '<footer class="kpe-bottom"><button type="button" data-click="compare" class="kpe-mobile-compare" aria-label="Giữ để xem ảnh gốc">Giữ xem gốc</button><span id="kpeHint">Vóc dáng: kéo mép eo hoặc cánh tay vào trong trên ảnh phải. Giữ Space + kéo để di chuyển ảnh.</span><button data-click="cancel" hidden>Hủy chỉnh</button><button data-click="apply" hidden>Áp dụng</button><button data-click="save" class="kpe-green">Lưu chỉnh sửa</button><button data-click="close">Đóng</button></footer></div>';
 if(mobile){modal.classList.add('kpe-is-mobile');modal.style.setProperty('--kpe-sheet-height','34dvh');}
 document.body.appendChild(modal);
 const by=s=>modal.querySelector(s),action=name=>by('[data-click="'+name+'"]'),panel=by('#kpeControls');
 const canvases=[...modal.querySelectorAll('.kpe-side canvas')],say=s=>by('#kpeHint').textContent=s;
 const loupe=document.createElement('div');loupe.className='kpe-loupe';loupe.hidden=true;loupe.innerHTML='<canvas width="136" height="136"></canvas>';
 modal.querySelector('.kpe-panes').appendChild(loupe);
 const compareButton=by('[data-click="compare"]');
 const showOriginal=show=>{compareHeld=show;compareButton?.classList.toggle('active',show);draw();};
 compareButton.addEventListener('pointerdown',e=>{if(!mobile)return;e.preventDefault();showOriginal(true);compareButton.setPointerCapture?.(e.pointerId);});
 for(const event of ['pointerup','pointercancel','lostpointercapture'])compareButton.addEventListener(event,()=>{if(compareHeld)showOriginal(false);});
 compareButton.addEventListener('click',()=>{if(mobile&&compareHeld)showOriginal(false);});
 const handle=by('#kpeSheetHandle');
 handle.addEventListener('pointerdown',e=>{if(!mobile)return;sheetDrag={id:e.pointerId,y:e.clientY,height:modal.querySelector('.kpe-sidebar').getBoundingClientRect().height};handle.setPointerCapture(e.pointerId);});
 handle.addEventListener('pointermove',e=>{if(!sheetDrag||e.pointerId!==sheetDrag.id)return;const height=limit(sheetDrag.height+sheetDrag.y-e.clientY,165,Math.round(window.innerHeight*.78));modal.style.setProperty('--kpe-sheet-height',height+'px');});
 for(const name of ['pointerup','pointercancel'])handle.addEventListener(name,e=>{if(sheetDrag?.id===e.pointerId)sheetDrag=null;});
 const filtered=()=>{if(renderDirty){rendered=hasAdjustments(settings)?applyMasked(working,settings,localMask,editScope==='local'):working;renderDirty=false;}return rendered;};
 const previewFiltered=()=>{
   if(!mobile)return filtered();
   if(!previewDirty&&previewCache)return previewCache;
   const source=drag?.type==='warp'&&drag.live?drag.live:working;
   const ratio=Math.min(1,1350/Math.max(source.width,source.height));
   const small=ratio===1?source:make(Math.max(1,Math.round(source.width*ratio)),Math.max(1,Math.round(source.height*ratio)));
   if(small!==source)small.getContext('2d').drawImage(source,0,0,small.width,small.height);
   if(!hasAdjustments(settings)){previewCache=small;previewDirty=false;return previewCache;}
   const mm=make(small.width,small.height);mm.getContext('2d').drawImage(localMask,0,0,mm.width,mm.height);
   previewCache=applyMasked(small,settings,mm,editScope==='local');previewDirty=false;return previewCache;
 };
 const draftNow=async()=>{
   if(!mobile||!onAutoDraft||closed||busy||!dirty||draftRunning)return;
   draftRunning=true;
   try{
     if(working.width*working.height>13000000)throw Error('Ảnh quá lớn để tự giữ nháp trên điện thoại.');
     const baseBlob=await snapshot(working,'image/png');
     const maskBlob=editScope==='local'?await snapshot(localMask,'image/png'):null;
     await onAutoDraft({baseBlob,maskBlob,settings:structuredClone(settings),scope:editScope,dirty:true});
     draftWarning=false;
   }catch(e){if(!draftWarning){say('Chưa tự lưu được nháp: '+e.message+' Hãy bấm Lưu chỉnh sửa.');draftWarning=true;}}
   finally{draftRunning=false;}
 };
 const queueDraft=()=>{if(!mobile||!onAutoDraft||closed)return;clearTimeout(draftTimer);draftTimer=setTimeout(()=>{void draftNow();},1800);};
 const changed=()=>{renderDirty=true;previewDirty=true;dirty=true;queueDraft();};
 const takeState=()=>({image:toCanvas(working),settings:structuredClone(settings),scope:editScope,mask:toCanvas(localMask)});
 const makeUndo=()=>{undo.push(takeState());if(undo.length>(mobile?(working.width*working.height>4500000?1:3):6))undo.shift();redo.length=0;};
 const useState=state=>{working=state.image;settings=state.settings;editScope=state.scope;localMask=state.mask;changed();renderPanel();endTool();fit();};
 const fitSide=i=>{const c=canvases[i],img=i?working:original;return Math.min(c.clientWidth/img.width,c.clientHeight/img.height);};
 const point=(e,i)=>{const c=canvases[i],rect=c.getBoundingClientRect(),im=i?working:original,f=fitSide(i)*zoom;return {x:(e.clientX-rect.left-c.clientWidth/2-panX)/f+im.width/2,y:(e.clientY-rect.top-c.clientHeight/2-panY)/f+im.height/2};};
 const screen=(x,y)=>{const c=canvases[1],f=fitSide(1)*zoom;return {x:c.clientWidth/2+panX+(x-working.width/2)*f,y:c.clientHeight/2+panY+(y-working.height/2)*f};};
 const fit=()=>{zoom=1;panX=0;panY=0;draw();};
 const isFit=()=>Math.abs(zoom-1)<.0001&&Math.abs(panX)<1&&Math.abs(panY)<1;
 function draw(){
  const dpi=Math.min(2,devicePixelRatio||1);
  for(let i=0;i<2;i++){
   const c=canvases[i],w=Math.max(1,c.clientWidth),h=Math.max(1,c.clientHeight);
   if(c.width!==Math.round(w*dpi)||c.height!==Math.round(h*dpi)){c.width=Math.round(w*dpi);c.height=Math.round(h*dpi);}
   const ctx=c.getContext('2d');ctx.setTransform(dpi,0,0,dpi,0,0);ctx.fillStyle='#15251c';ctx.fillRect(0,0,w,h);
   const img=i?(mobile&&compareHeld?original:previewFiltered()):original,s=fitSide(i)*zoom;
   ctx.save();ctx.translate(w/2+panX,h/2+panY);ctx.scale(s,s);ctx.imageSmoothingEnabled=zoom<18;
   const srcW=i&&mobile?working.width:img.width,srcH=i&&mobile?working.height:img.height;
   ctx.drawImage(img,-srcW/2,-srcH/2,srcW,srcH);ctx.restore();
   if(!i)continue;
   ctx.lineWidth=2;ctx.strokeStyle='#a3f39e';ctx.fillStyle='#fcffed';
   if((tool==='warp'||tool==='mask')&&brushPoint){const p=screen(brushPoint.x,brushPoint.y);ctx.beginPath();ctx.arc(p.x,p.y,(tool==='mask'?paintRadius:brushRadius)*fitSide(1)*zoom,0,Math.PI*2);ctx.stroke();}
   if(tool==='crop'&&crop){const a=screen(crop.x,crop.y),b=screen(crop.x+crop.w,crop.y+crop.h);ctx.strokeRect(a.x,a.y,b.x-a.x,b.y-a.y);
    for(const [x,y] of [[a.x,a.y],[b.x,a.y],[b.x,b.y],[a.x,b.y]]){ctx.fillRect(x-5,y-5,10,10);ctx.strokeRect(x-5,y-5,10,10);}}
   if(tool==='perspective'&&quad){const pts=quad.map(p=>screen(p[0],p[1]));ctx.beginPath();ctx.moveTo(pts[0].x,pts[0].y);for(let j=1;j<4;j++)ctx.lineTo(pts[j].x,pts[j].y);ctx.closePath();ctx.stroke();
    pts.forEach((p,j)=>{ctx.beginPath();ctx.arc(p.x,p.y,7,0,Math.PI*2);ctx.fill();ctx.fillStyle='#193323';ctx.font='11px Arial';ctx.textAlign='center';ctx.fillText(String(j+1),p.x,p.y+4);ctx.fillStyle='#fff';});}
   if(tool==='text'){const inp=by('#kpeText'),value=inp?.value||'',size=Number(by('#kpeFont')?.value||45),color=by('#kpeColor')?.value||'#ffffff';
    if(value){const p=textPoint||{x:working.width*.2,y:working.height*.25},t=screen(p.x,p.y);ctx.font='bold '+Math.max(1,size*s)+'px Arial,sans-serif';ctx.lineWidth=Math.max(1,2*s);ctx.strokeStyle='#18412c';ctx.strokeText(value,t.x,t.y);ctx.fillStyle=color;ctx.fillText(value,t.x,t.y);}}
  }
  by('#kpeZoom').textContent=Math.round(zoom*100)+'%'+(mobile?' · xem nhanh':' · đồng bộ');
  if(mobile&&loupePoint&&['warp','mask'].includes(tool)){
    const source=previewFiltered(),canvas=loupe.querySelector('canvas'),ctx=canvas.getContext('2d');
    const pointX=loupePoint.x/working.width*source.width,pointY=loupePoint.y/working.height*source.height;
    ctx.clearRect(0,0,136,136);ctx.fillStyle='#1a3021';ctx.fillRect(0,0,136,136);
    const zoomSize=Math.min(88,source.width*.4);
    ctx.drawImage(source,pointX-zoomSize/2,pointY-zoomSize/2,zoomSize,zoomSize,0,0,136,136);
    ctx.strokeStyle='#e0ff8d';ctx.lineWidth=1.5;ctx.beginPath();ctx.moveTo(68,49);ctx.lineTo(68,87);ctx.moveTo(49,68);ctx.lineTo(87,68);ctx.stroke();
    loupe.hidden=false;
  }else loupe.hidden=true;
 }
 const slider=(key,label,value,min=-100,max=100)=>'<label class="kpe-slider"><span>'+label+'</span><input data-adjust="'+key+'" type="range" min="'+min+'" max="'+max+'" value="'+value+'"><output data-value="'+key+'" tabindex="0" role="button" title="Chạm để nhập số">'+value+'</output><button type="button" class="kpe-reset-slider" data-reset="'+key+'" title="Đặt lại">↺</button></label>';
 const buttons=(list,attr='data-click')=>'<div class="kpe-button-group">'+list.map(([text,id])=>'<button type="button" '+attr+'="'+id+'">'+text+'</button>').join('')+'</div>';
 const maskControls=()=>'<div class="kpe-local"><strong>Phạm vi chỉnh</strong><div class="kpe-button-group"><button data-scope="global" class="'+(editScope==='global'?'active':'')+'">Toàn ảnh</button><button data-scope="local" class="'+(editScope==='local'?'active':'')+'">Tô vùng</button></div>'+
 (editScope==='local'?'<div class="kpe-button-group"><button data-paint="add" class="'+(paintMode==='add'?'active':'')+'">Cọ chọn vùng</button><button data-paint="erase" class="'+(paintMode==='erase'?'active':'')+'">Xóa vùng tô</button></div>'+
 slider('paintRadius','Cỡ cọ',paintRadius,10,350)+slider('brushOpacity','Độ phủ',brushOpacity,5,100)+
 '<p class="kpe-tip">Tô trên ảnh bên phải để đánh dấu phần được chỉnh. Space + kéo để di chuyển ảnh.</p>':'')+'</div>';
 const resetMask=()=>{localMask=createMask(working.width,working.height);variantsCache=null;changed();};

 function renderPanel(){
  modal.querySelectorAll('[data-tab]').forEach(b=>b.classList.toggle('active',b.dataset.tab===tab));
  if(tab==='shape')panel.innerHTML='<h3>Chỉnh vóc dáng</h3><p>Phóng to và <b>kéo trực tiếp</b> vùng muốn thu gọn trên ảnh bên phải.</p>'+
   '<div class="kpe-brushes">'+[['waist','Thon eo'],['arm','Thon tay'],['head','Thu đầu'],['free','Kéo tự do']].map(([id,name])=>'<button data-brush="'+id+'" class="'+(brush===id?'active':'')+'">'+name+'</button>').join('')+'</div>'+
   slider('brushPower','Lực kéo',brushPower,0,100)+slider('brushRadius','Bán kính tác động',brushRadius,20,450)+
   '<p class="kpe-tip">Kéo mép eo về tâm người, kéo mép tay vào trong; muốn thu đầu thì kéo từ đường viền tóc vào tâm. Space + chuột trái để di chuyển ảnh.</p>';
  else if(tab==='basic')panel.innerHTML='<h3>Ánh sáng & màu</h3>'+maskControls()+[
   ['exposure','Phơi sáng'],['contrast','Tương phản'],['highlights','Vùng sáng'],['shadows','Vùng tối'],['whites','Điểm trắng'],['blacks','Điểm đen'],['temperature','Nhiệt màu'],['tint','Ám màu'],['vibrance','Màu tươi'],['saturation','Bão hòa']].map(([k,v])=>slider(k,v,settings[k])).join('')+
 (onApplyBatch?buttons([['Áp màu cho các ảnh khác','applyBatch']]):'');
  else if(tab==='hsl')panel.innerHTML='<h3>Trộn màu HSL</h3><p>Chọn một màu rồi chỉnh ba thanh bên dưới.</p>'+maskControls()+
    '<div class="kpe-swatches">'+channels.map((ch,i)=>'<button data-color="'+ch+'" class="'+(color===ch?'active':'')+'" title="'+labels[i]+'" style="--swatch:'+pigments[i]+'"><span></span></button>').join('')+'</div>'+
    '<p class="kpe-color-name">'+labels[channels.indexOf(color)]+'</p>'+
    slider('hsl.h','Sắc độ',settings.hsl[color].h)+slider('hsl.s','Bão hòa',settings.hsl[color].s)+slider('hsl.l','Độ sáng',settings.hsl[color].l)+
    buttons([['Đặt lại màu đang chọn','resetHsl']]);
  else if(tab==='detail')panel.innerHTML='<h3>Chi tiết</h3>'+maskControls()+
    slider('sharpness','Làm nét',settings.sharpness,0,100)+slider('noise','Giảm hạt',settings.noise,0,100)+slider('clarity','Độ rõ',settings.clarity)+slider('texture','Bề mặt',settings.texture)+
    '<p class="kpe-tip">Nên xem ở Zoom 100% để tránh làm ảnh bị quá nét.</p>'+
 '<hr><h3>Cứu ảnh yếu: 3 lựa chọn</h3><p>Tạo ba bản thử trên chính ảnh này, chọn một bản rồi chỉnh thêm.</p>'+
 buttons([['Tạo 3 bản thử','variants']])+ '<div id="kpeVariants" class="kpe-variants"></div>'+
 '<hr><h3>AI nâng ảnh (tùy chọn)</h3><p>Cần Chrome/Edge PC hỗ trợ WebGPU. Mô hình tải lần đầu khá lớn; ảnh không được gửi đi để xử lý.</p>'+
 buttons([['SCUNet – khử hạt','ai-scunet'],['Real-ESRGAN – nâng 2×','ai-realesrgan']])+
 '<p class="kpe-tip">'+(mobile?'AI chuyên sâu chỉ bật trên PC để tránh hết bộ nhớ trên điện thoại.':'AI chỉ chạy khi bạn bấm. Nếu máy không hỗ trợ hoặc tải mô hình lỗi, ảnh hiện tại được giữ nguyên.')+'</p>';
  else if(tab==='geometry')panel.innerHTML='<h3>Hình học</h3>'+buttons([['↶ Xoay trái','rotateL'],['↷ Xoay phải','rotateR'],['⇋ Lật ngang','flipH'],['⇅ Lật dọc','flipV']])+
    buttons([['▣ Crop','crop'],['◇ Phối cảnh','perspective']],'data-mode')+
    '<p class="kpe-tip">Kéo các góc của vùng Crop hoặc Phối cảnh trên ảnh phải, rồi nhấn Áp dụng.</p>';
  else if(tab==='text')panel.innerHTML='<h3>Viết chữ</h3>'+buttons([['T + Chèn chữ','text']],'data-mode')+
    '<div id="kpeTextFields"></div><p class="kpe-tip">Nhập chữ có dấu, chọn màu và cỡ chữ, bấm trực tiếp lên ảnh để đặt vị trí.</p>';
 }
 function endTool(){
  loupePoint=null;
  tool=tab==='shape'?'warp':(editScope==='local'&&['basic','hsl','detail'].includes(tab)?'mask':'view');crop=null;quad=null;textPoint=null;brushPoint=null;
  action('apply').hidden=true;action('cancel').hidden=true;draw();
 }
 function switchTab(name){
  if(busy)return;tab=name;endTool();renderPanel();previewDirty=true;
  say(tab==='shape'?'Kéo trên ảnh bên phải để chỉnh dáng; giữ Space + chuột trái để kéo ảnh.':'Hai ảnh zoom và kéo đồng bộ; chỉ ảnh bên phải được chỉnh.');
 }
 function chooseMode(m){
  if(busy)return;tool=m;
  if(m==='crop')crop={x:working.width*.08,y:working.height*.08,w:working.width*.84,h:working.height*.84};
  if(m==='perspective')quad=[[.07,.07],[.93,.07],[.93,.93],[.07,.93]].map(([x,y])=>[x*working.width,y*working.height]);
  if(m==='text'){
   textPoint={x:working.width*.18,y:working.height*.28};
   const slot=by('#kpeTextFields');slot.innerHTML='<label>Chữ tiếng Việt <input type="text" id="kpeText" maxlength="200" value="Chúc mừng"></label><label>Cỡ chữ <input type="number" id="kpeFont" min="8" max="500" value="45"></label><label>Màu <input type="color" id="kpeColor" value="#ffffff"></label>';
   slot.querySelectorAll('input').forEach(i=>i.oninput=draw);
  }
  action('apply').hidden=false;action('cancel').hidden=false;
  action('apply').textContent=m==='crop'?'Cắt ảnh':m==='perspective'?'Nắn phối cảnh':'Đặt chữ';
  draw();
 }
 function rotate(which){
  makeUndo();const w=working.width,h=working.height,isRotate=which.startsWith('rotate'),out=make(isRotate?h:w,isRotate?w:h),ctx=out.getContext('2d');
  if(which==='rotateR'){ctx.translate(h,0);ctx.rotate(Math.PI/2);}
  if(which==='rotateL'){ctx.translate(0,w);ctx.rotate(-Math.PI/2);}
  if(which==='flipH'){ctx.translate(w,0);ctx.scale(-1,1);}
  if(which==='flipV'){ctx.translate(0,h);ctx.scale(1,-1);}
  ctx.drawImage(working,0,0);working=out;resetMask();endTool();fit();
 }
 async function applyMode(){
  if(busy)return;busy=true;
  try{
   if(tool==='crop'){
    const x=limit(Math.round(crop.x),0,working.width-2),y=limit(Math.round(crop.y),0,working.height-2),
      w=limit(Math.round(crop.w),0,working.width-x),h=limit(Math.round(crop.h),0,working.height-y);
    if(w<12||h<12)throw Error('Vùng cắt quá nhỏ');
    const out=make(w,h);out.getContext('2d').drawImage(working,x,y,w,h,0,0,w,h);makeUndo();working=out;
   }else if(tool==='perspective'){
    const out=await correctPerspective(working,quad,n=>say('Đang sửa phối cảnh '+n+'%'));makeUndo();working=out;
   }else if(tool==='text'){
    const str=by('#kpeText')?.value.trim();if(!str)throw Error('Chưa nhập chữ');
    makeUndo();const ctx=working.getContext('2d'),size=limit(+by('#kpeFont').value||45,8,500);
    ctx.font='bold '+size+'px Arial,sans-serif';ctx.lineWidth=Math.max(1,size*.045);ctx.lineJoin='round';
    ctx.strokeStyle='#173f23';ctx.strokeText(str,textPoint.x,textPoint.y);ctx.fillStyle=by('#kpeColor').value;ctx.fillText(str,textPoint.x,textPoint.y);
   }
   resetMask();endTool();fit();say('Đã áp dụng. Bấm Lưu chỉnh sửa để dùng bản này khi tải.');
  }catch(e){say('Không áp dụng được: '+e.message);}
  finally{busy=false;}
 }
 async function save(){
  if(busy)return;busy=true;
  try{say('Đang lưu ảnh…');
   const output=await snapshot(filtered(),type);
   // Keep a lossless working image + slider recipe to avoid repeated lossy recompression.
   const baseBlob=await snapshot(working,'image/png');
   const maskBlob=editScope==='local'?await snapshot(localMask,'image/png'):null;
   await onSaved(output,{baseBlob,maskBlob,settings:structuredClone(settings),scope:editScope});
   dirty=false;undo=[];redo=[];clearTimeout(draftTimer);say('Đã lưu. Đóng Preview rồi bấm Tải tất cả.');}
  catch(e){say('Không lưu được: '+e.message);}finally{busy=false;}
 }
 async function loadPrevious(){
  if(busy||!onLoadPrevious)return;
  if(!window.confirm('Khôi phục phiên bản đã lưu trước? Chỉnh sửa chưa lưu sẽ bị bỏ.'))return;
  busy=true;
  try{
   const old=await onLoadPrevious();if(!old){say('Chưa có bản lưu trước.');return;}
   const bitmap=await createImageBitmap(old.state?.baseBlob||old.blob);
   working=toCanvas(bitmap);bitmap.close();settings=old.state?.settings?structuredClone(old.state.settings):DEFAULT_EDITS();
   editScope=old.state?.scope||'global';localMask=createMask(working.width,working.height);
   if(old.state?.maskBlob){const image=await createImageBitmap(old.state.maskBlob);localMask.getContext('2d').drawImage(image,0,0);image.close();}
   undo=[];redo=[];renderDirty=true;previewDirty=true;dirty=false;endTool();renderPanel();fit();say('Đã khôi phục bản lưu trước.');
  }catch(error){say('Không khôi phục được bản lưu trước: '+error.message);}finally{busy=false;}
 }
 async function restore(){
  if(busy)return;busy=true;
  try{working=toCanvas(original);settings=DEFAULT_EDITS();editScope='global';localMask=createMask(working.width,working.height);renderDirty=true;previewDirty=true;await onReset?.();dirty=false;undo=[];redo=[];clearTimeout(draftTimer);endTool();renderPanel();fit();say('Đã khôi phục về ảnh gốc.');}
  catch(e){say('Lỗi khôi phục: '+e.message);}finally{busy=false;}
 }
 async function close(){
  if(busy)return;
  if(mobile&&dirty&&onAutoDraft){
    clearTimeout(draftTimer);await draftNow();
    if(draftWarning&&!window.confirm('Chưa tự giữ được bản nháp. Đóng và bỏ thay đổi chưa lưu?'))return;
  }else if(dirty&&!window.confirm('Bạn có thay đổi chưa lưu. Bỏ những thay đổi này?'))return;
  modal.close();
 }
 function escape(){if(busy)return;if(['crop','perspective','text'].includes(tool)){endTool();return;}if(!isFit()){fit();return;}void close();}
 let spaceDown=false;
 function touchStart(e,i){
   if(!mobile||e.pointerType!=='touch')return false;
   activeTouches.set(e.pointerId,{x:e.clientX,y:e.clientY});
   if(activeTouches.size===2){
     if(drag&&(drag.type==='warp'||drag.type==='mask')){
       const old=undo.pop();
       if(old){working=old.image;localMask=old.mask;settings=old.settings;editScope=old.scope;renderDirty=true;previewDirty=true;}
     }
     drag=null;loupePoint=null;suppressTouches=true;
     try{canvases[i].setPointerCapture(e.pointerId);}catch{}
     const pts=[...activeTouches.values()],cx=(pts[0].x+pts[1].x)/2,cy=(pts[0].y+pts[1].y)/2;
     const canvas=canvases[i],box=canvas.getBoundingClientRect();
     pinch={distance:Math.max(1,Math.hypot(pts[0].x-pts[1].x,pts[0].y-pts[1].y)),
       zoom,panX,panY,mx:cx-box.left-canvas.clientWidth/2,my:cy-box.top-canvas.clientHeight/2,canvas:i};
     draw();
   }
   return suppressTouches;
 }
 function touchMove(e){
   if(!mobile||e.pointerType!=='touch')return false;
   if(!activeTouches.has(e.pointerId))return true;
   activeTouches.set(e.pointerId,{x:e.clientX,y:e.clientY});
   if(activeTouches.size===2&&pinch){
     const pts=[...activeTouches.values()],dx=pts[0].x-pts[1].x,dy=pts[0].y-pts[1].y;
     const centerX=(pts[0].x+pts[1].x)/2,centerY=(pts[0].y+pts[1].y)/2;
     const canvas=canvases[pinch.canvas],rect=canvas.getBoundingClientRect();
     const mx=centerX-rect.left-canvas.clientWidth/2,my=centerY-rect.top-canvas.clientHeight/2;
     zoom=limit(pinch.zoom*Math.hypot(dx,dy)/pinch.distance,.15,128);
     const ratio=zoom/pinch.zoom;
     panX=mx-(pinch.mx-pinch.panX)*ratio;panY=my-(pinch.my-pinch.panY)*ratio;
     draw();return true;
   }
   return suppressTouches;
 }
 function touchEnd(e){
   if(!mobile||e.pointerType!=='touch')return;
   activeTouches.delete(e.pointerId);
   if(activeTouches.size<2)pinch=null;
   if(activeTouches.size===0)suppressTouches=false;
 }
 function pointerDown(e,i){
  if(e.button!==0||busy)return;
  if(touchStart(e,i))return;
  const c=canvases[i],pt=point(e,i),m={x:e.offsetX,y:e.offsetY};
  if(i===1&&tool==='mask'&&!spaceDown){
   makeUndo();drag={type:'mask',from:pt,last:pt,moved:false};c.setPointerCapture(e.pointerId);
   stamp(localMask,pt,pt,paintRadius,brushOpacity/100,paintMode==='erase');changed();draw();return;
  }
  if(i===1&&tool==='warp'&&!spaceDown){
   makeUndo();drag={type:'warp',from:pt,source:toCanvas(working),moved:false,end:pt};
    if(mobile){
      const r=Math.min(1,950/Math.max(working.width,working.height));
      const thumb=make(Math.max(1,Math.round(working.width*r)),Math.max(1,Math.round(working.height*r)));
      thumb.getContext('2d').drawImage(working,0,0,thumb.width,thumb.height);
      drag.previewSrc=thumb;drag.factor=r;
    }
    c.setPointerCapture(e.pointerId);return;
  }
  if(i===1&&tool==='text'){textPoint={x:limit(pt.x,0,working.width),y:limit(pt.y,0,working.height)};draw();return;}
  if(i===1&&tool==='perspective'){
   let index=-1,d=20;quad.forEach((v,j)=>{const p=screen(v[0],v[1]),vDist=Math.hypot(p.x-m.x,p.y-m.y);if(vDist<d){d=vDist;index=j;}});
   if(index<0)return;drag={type:'perspective',index};
  }else if(i===1&&tool==='crop'){
   const corners=[[crop.x,crop.y],[crop.x+crop.w,crop.y],[crop.x+crop.w,crop.y+crop.h],[crop.x,crop.y+crop.h]];
   let index=-1,d=20;corners.forEach((v,j)=>{const p=screen(v[0],v[1]),vDist=Math.hypot(p.x-m.x,p.y-m.y);if(vDist<d){d=vDist;index=j;}});
   drag=index>=0?{type:'cropCorner',index,start:{...crop}}:{type:'cropMove',from:pt,start:{...crop}};
  }else drag={type:'pan',x:e.clientX,y:e.clientY};
  c.setPointerCapture(e.pointerId);
 }
 function pointerMove(e,i){
  if(touchMove(e))return;
  if(i===1&&(tool==='warp'||tool==='mask'))brushPoint=point(e,i);
  if(!drag){if(i===1&&(tool==='warp'||tool==='mask'))draw();return;}
  const pt=point(e,i);
  if(drag.type==='pan'){panX+=e.clientX-drag.x;panY+=e.clientY-drag.y;drag.x=e.clientX;drag.y=e.clientY;}
  if(drag.type==='warp'){
   if(Math.hypot(pt.x-drag.from.x,pt.y-drag.from.y)>1){
     if(mobile&&drag.previewSrc){
       const r=drag.factor;drag.live=deformAt(drag.previewSrc,{x:drag.from.x*r,y:drag.from.y*r},{x:pt.x*r,y:pt.y*r},Math.max(6,brushRadius*r),brushPower,brush);
       drag.end=pt;previewDirty=true;dirty=true;
     }else{working=deformAt(drag.source,drag.from,pt,brushRadius,brushPower,brush);changed();}
     drag.moved=true;loupePoint=pt;
   }
  }
  if(drag.type==='mask'){stamp(localMask,drag.last,pt,paintRadius,brushOpacity/100,paintMode==='erase');drag.last=pt;drag.moved=true;loupePoint=pt;changed();}
  if(drag.type==='perspective')quad[drag.index]=[limit(pt.x,0,working.width),limit(pt.y,0,working.height)];
  if(drag.type==='cropMove'){crop.x=limit(drag.start.x+pt.x-drag.from.x,0,working.width-crop.w);crop.y=limit(drag.start.y+pt.y-drag.from.y,0,working.height-crop.h);}
  if(drag.type==='cropCorner'){
   const s=drag.start;let x=s.x,y=s.y,x2=s.x+s.w,y2=s.y+s.h;
   if(drag.index===0||drag.index===3)x=limit(pt.x,0,x2-12);else x2=limit(pt.x,x+12,working.width);
   if(drag.index===0||drag.index===1)y=limit(pt.y,0,y2-12);else y2=limit(pt.y,y+12,working.height);
   crop={x,y,w:x2-x,h:y2-y};
  }
  draw();
 }
 function pointerUp(e,i){
  touchEnd(e);
  if(drag?.type==='warp'){
    if(!drag.moved)undo.pop();
    else if(mobile&&drag.previewSrc){working=deformAt(drag.source,drag.from,drag.end,brushRadius,brushPower,brush);changed();}
  }
  if(drag?.type==='mask'&&mobile)queueDraft();
  drag=null;loupePoint=null;previewDirty=true;draw();
  try{canvases[i].releasePointerCapture(e.pointerId);}catch{}
 }
 function wheel(e,i){
  e.preventDefault();if(busy)return;
  const c=canvases[i],bounds=c.getBoundingClientRect(),x=e.clientX-bounds.left-c.clientWidth/2,y=e.clientY-bounds.top-c.clientHeight/2;
  const prev=zoom;zoom=limit(zoom*Math.exp(-e.deltaY*.0018),.1,256);const f=zoom/prev;
  panX=x-(x-panX)*f;panY=y-(y-panY)*f;draw();
 }
 canvases.forEach((c,i)=>{
  c.addEventListener('wheel',e=>wheel(e,i),{passive:false});
  c.addEventListener('pointerdown',e=>pointerDown(e,i));
  c.addEventListener('pointermove',e=>pointerMove(e,i));
  c.addEventListener('pointerup',e=>pointerUp(e,i));
  c.addEventListener('pointercancel',e=>pointerUp(e,i));
  c.addEventListener('dblclick',()=>{if(!['view','warp','mask'].includes(tool))return;if(zoom>1.1)fit();else{zoom=2;draw();}});
 });
 modal.querySelectorAll('[data-tab]').forEach(btn=>btn.onclick=()=>switchTab(btn.dataset.tab));
 modal.addEventListener('click',event=>{
  const btn=event.target.closest('[data-click],[data-mode],[data-color],[data-brush],[data-scope],[data-paint]');if(!btn)return;
  if(btn.dataset.color){color=btn.dataset.color;renderPanel();return;}
  if(btn.dataset.brush){brush=btn.dataset.brush;renderPanel();return;}
  if(btn.dataset.scope){editScope=btn.dataset.scope;changed();endTool();renderPanel();draw();return;}
  if(btn.dataset.paint){paintMode=btn.dataset.paint;renderPanel();return;}
  if(btn.dataset.mode){chooseMode(btn.dataset.mode);return;}
  const a=btn.dataset.click;
  if(a==='close')void close();if(a==='fit')fit();
  if(a==='pixel'){zoom=limit(1/Math.min(fitSide(0),fitSide(1)),.1,256);panX=panY=0;draw();}
  if(a==='undo'){if(!undo.length){say('Không có thao tác để hoàn tác');return;}redo.push(takeState());const old=undo.pop();useState(old);}
  if(a==='redo'){if(!redo.length){say('Không có thao tác để làm lại');return;}undo.push(takeState());const next=redo.pop();useState(next);}
  if(a==='restore')void restore();if(a==='previous')void loadPrevious();if(a==='save')void save();if(a==='apply')void applyMode();if(a==='cancel')endTool();
  if(['rotateL','rotateR','flipH','flipV'].includes(a))rotate(a);
  if(a==='resetHsl'){makeUndo();settings.hsl[color]={h:0,s:0,l:0};changed();renderPanel();draw();}
  if(a==='variants')void generateVariants();
  if(a==='ai-scunet'||a==='ai-realesrgan')void applyAI(a.slice(3));
  if(a==='applyBatch')void batchColor();
 });
 panel.addEventListener('click',e=>{
   const target=e.target.closest('[data-reset],[data-value]');
   if(!target||!mobile)return;
   e.stopPropagation();e.preventDefault();
   const key=target.dataset.reset||target.dataset.value;
   const input=panel.querySelector('[data-adjust="'+key+'"]');if(!input)return;
   const defaults={brushRadius:130,brushPower:68,paintRadius:90,brushOpacity:90};
   const value=target.dataset.reset!==undefined?(defaults[key]??0):window.prompt('Nhập '+input.closest('label').querySelector('span').textContent+' ('+input.min+' đến '+input.max+'):',input.value);
   if(value===null||String(value).trim()==='')return;
   const n=Number(value);if(!Number.isFinite(n))return;
   if(!key.startsWith('brush')&&key!=='paintRadius')makeUndo();
   input.value=String(limit(n,Number(input.min),Number(input.max)));
   input.dispatchEvent(new Event('input',{bubbles:true}));
 });
 panel.addEventListener('pointerdown',e=>{if(e.target.matches('[data-adjust]')&&!busy)makeUndo();});
 panel.addEventListener('input',e=>{
  const el=e.target.closest('[data-adjust]');if(!el)return;
  const key=el.dataset.adjust,value=Number(el.value);
  if(key==='paintRadius')paintRadius=value;
  else if(key==='brushOpacity')brushOpacity=value;
  else if(key==='brushPower')brushPower=value;
  else if(key==='brushRadius')brushRadius=value;
  else if(key.startsWith('hsl.'))settings.hsl[color][key.slice(4)]=value;
  else settings[key]=value;
  const out=panel.querySelector('[data-value="'+key+'"]');if(out)out.textContent=value;
  if(key.startsWith('brush')||key==='paintRadius'){draw();return;}
  changed();clearTimeout(repaintTimer);repaintTimer=setTimeout(draw,65);
 });
 // Variant and AI controls are defined below and called only on explicit clicks.
 async function generateVariants(){
  if(busy)return;busy=true;
  try{
   say('Đang tạo 3 bản thử…');
   await new Promise(resolve=>setTimeout(resolve,0));
   variantsCache=variantsFrom(working);
   const group=by('#kpeVariants');if(!group){say('Hãy mở tab Chi tiết để xem 3 bản thử.');return;}
   group.innerHTML=variantsCache.map(v=>{
    const preview=make(130,92),ctx=preview.getContext('2d');ctx.drawImage(v.canvas,0,0,130,92);
    return '<button type="button" data-variant="'+v.id+'"><img alt="" src="'+preview.toDataURL('image/jpeg',.7)+'"><strong>'+v.title+'</strong><small>'+v.summary+'</small></button>';
   }).join('');
   say('Đã có 3 bản thử. Bấm một bản để áp dụng.');
  }catch(error){say('Không tạo được 3 bản: '+error.message);}finally{busy=false;}
 }
 async function applyAI(kind){
  if(busy)return;
  if(mobile){say('AI chuyên sâu dành cho PC có WebGPU để tránh điện thoại hết bộ nhớ. Các công cụ chỉnh khác vẫn hoạt động.');return;}
  if(!globalThis.navigator?.gpu){say('AI yêu cầu Chrome/Edge trên PC có WebGPU; ảnh gốc vẫn được giữ nguyên.');return;}
  if(!window.confirm('Mô hình AI cần tải dữ liệu lớn và dùng GPU. Bạn muốn tiếp tục?'))return;
  busy=true;
  try{
   const current=filtered();
   const output=await runPhotoModel(current,kind,msg=>say(msg));
   makeUndo();working=output;settings=DEFAULT_EDITS();localMask=createMask(output.width,output.height);editScope='global';renderDirty=true;dirty=true;
   endTool();renderPanel();fit();say('Đã chạy '+kind+' thành công. Kiểm tra ảnh trước/sau rồi bấm Lưu.');
  }catch(error){say('AI không hoàn thành: '+error.message+' Ảnh hiện tại được giữ nguyên.');}
  finally{busy=false;}
 }
 async function batchColor(){
  if(!onApplyBatch||busy)return;
  if(!window.confirm('Áp dụng màu đang chỉnh cho các ảnh khác? Những ảnh đã chỉnh riêng sẽ bị thay thế.'))return;
  busy=true;
  try{await onApplyBatch(recipeFrom(settings),msg=>say(msg));say('Đã áp dụng màu cho các ảnh khác.');}
  catch(error){say('Không áp màu hàng loạt được: '+error.message);}
  finally{busy=false;}
 }
 panel.addEventListener('click',event=>{
  const el=event.target.closest('[data-variant]');if(!el||!variantsCache)return;
  const chosen=variantsCache.find(v=>v.id===el.dataset.variant);if(!chosen)return;
  makeUndo();settings=structuredClone(chosen.settings);editScope='global';changed();renderPanel();draw();
  say('Đã chọn bản '+chosen.title+'. Có thể chỉnh thêm rồi lưu.');
 });
 modal.addEventListener('keydown',e=>{
  if(e.key==='Escape'){e.preventDefault();e.stopImmediatePropagation();escape();}
  if(e.code==='Space'&&!['INPUT','TEXTAREA'].includes(e.target.tagName)){spaceDown=true;e.preventDefault();}
 },true);
 modal.addEventListener('keyup',e=>{if(e.code==='Space')spaceDown=false;},true);
 modal.addEventListener('cancel',e=>{e.preventDefault();escape();});
 const observer=new ResizeObserver(draw);observer.observe(by('.kpe-panes'));
 by('#kpeFilename').textContent=file.name+' · chỉnh trực tiếp trên ảnh kết quả';
 modal.addEventListener('close',()=>{closed=true;observer.disconnect();clearTimeout(repaintTimer);clearTimeout(draftTimer);document.removeEventListener('visibilitychange',saveOnHide);original.close?.();result.close?.();modal.remove();});
 const saveOnHide=()=>{if(mobile&&document.visibilityState==='hidden'&&dirty)void draftNow();};
 if(mobile)document.addEventListener('visibilitychange',saveOnHide);
 renderPanel();modal.showModal();requestAnimationFrame(draw);
}
