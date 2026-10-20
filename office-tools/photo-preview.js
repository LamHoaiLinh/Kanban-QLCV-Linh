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
export async function openPhotoPreview({file,blob,type,onSaved,onReset}){
 if(!blob)throw Error('Cần xử lý ảnh trước.');
 if(!document.getElementById('kan-photo-preview-style')){
  const st=document.createElement('link');st.id='kan-photo-preview-style';st.rel='stylesheet';st.href=new URL('./photo-preview.css?v=1.0.0',import.meta.url).href;document.head.appendChild(st);
 }
 const [original,result]=await Promise.all([createImageBitmap(file),createImageBitmap(blob)]);
 let working=toCanvas(result),scale=1,panX=0,panY=0,mode='view',rect=null,quad=null,textPoint=null,drag=null,dirty=false,busy=false,undo=[];
 const modal=document.createElement('dialog');modal.className='kpe-modal';
 modal.innerHTML='<div class="kpe-shell">'+
 '<header class="kpe-top"><div><strong>PREVIEW SO SÁNH</strong><small id="kpeFilename"></small></div><span id="kpeZoom">100%</span><button data-click="fit">Vừa khung</button><button data-click="pixel">100% gốc</button><button data-click="close" aria-label="Đóng">×</button></header>'+
 '<nav class="kpe-tools"><button data-click="rotateL">↶ Xoay trái</button><button data-click="rotateR">↷ Xoay phải</button><button data-click="flipH">⇋ Lật ngang</button><button data-click="flipV">⇅ Lật dọc</button><button data-mode="crop">▣ Cắt ảnh</button><button data-mode="perspective">◇ Phối cảnh</button><button data-mode="text">T Viết chữ</button><button data-click="undo">↩ Hoàn tác</button><button data-click="restore">Khôi phục bản xử lý</button></nav>'+
 '<div id="kpeFields" class="kpe-fields" hidden></div>'+
 '<div class="kpe-panes"><section class="kpe-side"><b>ẢNH GỐC</b><canvas data-pane="0"></canvas></section><section class="kpe-side"><b>ẢNH KẾT QUẢ</b><canvas data-pane="1"></canvas></section></div>'+
 '<footer class="kpe-bottom"><span id="kpeHint">Cuộn để zoom tại con trỏ; giữ chuột trái kéo để di chuyển đồng bộ.</span><button data-click="cancel" hidden>Hủy công cụ</button><button data-click="apply" hidden>Áp dụng</button><button data-click="save" class="kpe-green">Lưu chỉnh sửa</button><button data-click="close">Đóng</button></footer></div>';
 document.body.appendChild(modal);
 const canvases=[...modal.querySelectorAll('.kpe-side canvas')],by=id=>modal.querySelector(id),button=n=>modal.querySelector('[data-click="'+n+'"]');
 const fields=by('#kpeFields'),message=s=>by('#kpeHint').textContent=s;
 const fitting=(idx)=>{const cv=canvases[idx],img=idx?working:original;return Math.min(cv.clientWidth/img.width,cv.clientHeight/img.height);};
 const imagePoint=(event,side)=>{
  const canvas=canvases[side],bounds=canvas.getBoundingClientRect(),img=side?working:original,f=fitting(side)*scale;
  return {x:(event.clientX-bounds.left-canvas.clientWidth/2-panX)/f+img.width/2,y:(event.clientY-bounds.top-canvas.clientHeight/2-panY)/f+img.height/2};
 };
 const displayPoint=(x,y)=>{
  const canvas=canvases[1],f=fitting(1)*scale;
  return {x:canvas.clientWidth/2+panX+(x-working.width/2)*f,y:canvas.clientHeight/2+panY+(y-working.height/2)*f};
 };
 const reset=()=>{scale=1;panX=0;panY=0;paint();};
 const isFit=()=>Math.abs(scale-1)<.00001&&Math.abs(panX)<1&&Math.abs(panY)<1;
 function paint(){
  const ratio=Math.min(2,window.devicePixelRatio||1);
  for(let side=0;side<2;side++){
   const c=canvases[side],width=Math.max(1,c.clientWidth),height=Math.max(1,c.clientHeight);
   if(c.width!==Math.round(width*ratio)||c.height!==Math.round(height*ratio)){c.width=Math.round(width*ratio);c.height=Math.round(height*ratio);}
   const ctx=c.getContext('2d');ctx.setTransform(ratio,0,0,ratio,0,0);ctx.clearRect(0,0,width,height);ctx.fillStyle='#17211d';ctx.fillRect(0,0,width,height);
   const img=side?working:original,s=fitting(side)*scale;
   ctx.save();ctx.translate(width/2+panX,height/2+panY);ctx.scale(s,s);ctx.imageSmoothingEnabled=scale<18;ctx.drawImage(img,-img.width/2,-img.height/2);ctx.restore();
   if(side!==1)continue;
   ctx.strokeStyle='#8df7aa';ctx.lineWidth=2;ctx.fillStyle='#f6fff4';
   if(mode==='crop'&&rect){
    const tl=displayPoint(rect.x,rect.y),br=displayPoint(rect.x+rect.w,rect.y+rect.h);
    ctx.strokeRect(tl.x,tl.y,br.x-tl.x,br.y-tl.y);
    for(const [x,y] of [[tl.x,tl.y],[br.x,tl.y],[br.x,br.y],[tl.x,br.y]]){ctx.fillRect(x-6,y-6,12,12);ctx.strokeRect(x-6,y-6,12,12);}
   }
   if(mode==='perspective'&&quad){
    const p=quad.map(x=>displayPoint(x[0],x[1]));ctx.beginPath();ctx.moveTo(p[0].x,p[0].y);for(let k=1;k<4;k++)ctx.lineTo(p[k].x,p[k].y);ctx.closePath();ctx.stroke();
    for(let k=0;k<4;k++){ctx.beginPath();ctx.arc(p[k].x,p[k].y,7,0,Math.PI*2);ctx.fill();ctx.fillStyle='#1c3225';ctx.font='11px sans-serif';ctx.textAlign='center';ctx.fillText(String(k+1),p[k].x,p[k].y+4);ctx.fillStyle='#fff';}
   }
   if(mode==='text'){
    const input=by('#kpeText'),fontSize=+(by('#kpeFont')?.value||50),color=by('#kpeColor')?.value||'#ffffff';
    if(input?.value){const p=textPoint||{x:working.width*.15,y:working.height*.28},point=displayPoint(p.x,p.y);
     ctx.font='bold '+Math.max(1,s*fontSize)+'px Arial,sans-serif';ctx.lineWidth=Math.max(1,s*fontSize*.045);ctx.strokeStyle='#143b24';ctx.strokeText(input.value,point.x,point.y);ctx.fillStyle=color;ctx.fillText(input.value,point.x,point.y);}
   }
  }
  by('#kpeZoom').textContent=Math.round(scale*100)+'% · đồng bộ';
 }
 const pushUndo=()=>{undo.push(toCanvas(working));if(undo.length>8)undo.shift();};
 const leaveTool=()=>{
  mode='view';rect=null;quad=null;textPoint=null;fields.hidden=true;fields.innerHTML='';
  button('apply').hidden=true;button('cancel').hidden=true;
  modal.querySelectorAll('[data-mode]').forEach(b=>b.classList.remove('active'));paint();
 };
 function setMode(next){
  if(busy)return;mode=next;
  rect=next==='crop'?{x:working.width*.08,y:working.height*.08,w:working.width*.84,h:working.height*.84}:null;
  quad=next==='perspective'?[[.07,.07],[.93,.07],[.93,.93],[.07,.93]].map(v=>[v[0]*working.width,v[1]*working.height]):null;
  textPoint={x:working.width*.15,y:working.height*.25};
  fields.hidden=next!=='text';
  fields.innerHTML=next==='text'?'<label>Chữ tiếng Việt <input id="kpeText" maxlength="200" value="Chúc mừng" type="text"></label><label>Cỡ chữ <input id="kpeFont" type="number" min="8" max="500" value="50"></label><label>Màu <input id="kpeColor" type="color" value="#ffffff"></label><span>Bấm vào ảnh bên phải để đặt chữ.</span>':'';
  fields.querySelectorAll('input').forEach(x=>x.oninput=paint);
  button('apply').hidden=false;button('cancel').hidden=false;
  button('apply').textContent=next==='crop'?'Cắt ảnh':next==='perspective'?'Sửa phối cảnh':'Đặt chữ';
  modal.querySelectorAll('[data-mode]').forEach(b=>b.classList.toggle('active',b.dataset.mode===next));
  message(next==='crop'?'Kéo góc vùng cắt trên ảnh bên phải.':next==='perspective'?'Kéo bốn điểm để chọn vùng cần nắn thẳng.':'Nhập chữ có dấu rồi bấm chọn vị trí trên ảnh.');
  paint();
 }
 function transform(action){
  if(busy)return;pushUndo();const w=working.width,h=working.height,rot=action==='rotateL'||action==='rotateR';
  const out=make(rot?h:w,rot?w:h),ctx=out.getContext('2d');
  if(action==='rotateR'){ctx.translate(h,0);ctx.rotate(Math.PI/2);}
  if(action==='rotateL'){ctx.translate(0,w);ctx.rotate(-Math.PI/2);}
  if(action==='flipH'){ctx.translate(w,0);ctx.scale(-1,1);}
  if(action==='flipV'){ctx.translate(0,h);ctx.scale(1,-1);}
  ctx.drawImage(working,0,0);working=out;dirty=true;leaveTool();reset();message('Đã sửa ảnh kết quả. Bấm Lưu chỉnh sửa để giữ bản này.');
 }
 async function apply(){
  if(busy)return;busy=true;
  try{
   if(mode==='crop'){
    const x=limit(Math.round(rect.x),0,working.width-2),y=limit(Math.round(rect.y),0,working.height-2),w=limit(Math.round(rect.w),0,working.width-x),h=limit(Math.round(rect.h),0,working.height-y);
    if(w<12||h<12)throw Error('Vùng cắt quá nhỏ.');
    const out=make(w,h);out.getContext('2d').drawImage(working,x,y,w,h,0,0,w,h);pushUndo();working=out;
   }else if(mode==='perspective'){
    message('Đang nắn phối cảnh…');const out=await correctPerspective(working,quad,p=>message('Đang nắn phối cảnh… '+p+'%'));pushUndo();working=out;
   }else if(mode==='text'){
    const text=by('#kpeText')?.value?.trim();if(!text)throw Error('Chưa nhập chữ.');
    const size=limit(Number(by('#kpeFont').value)||50,8,500),color=by('#kpeColor').value;
    pushUndo();const ctx=working.getContext('2d');ctx.font='bold '+size+'px Arial,sans-serif';ctx.lineWidth=Math.max(1,size*.045);ctx.lineJoin='round';ctx.strokeStyle='#143b24';ctx.strokeText(text,textPoint.x,textPoint.y);ctx.fillStyle=color;ctx.fillText(text,textPoint.x,textPoint.y);
   }
   dirty=true;leaveTool();reset();message('Đã áp dụng. Bấm Lưu chỉnh sửa trước khi tải.');
  }catch(e){message('Lỗi: '+e.message);}finally{busy=false;}
 }
 async function save(){
  if(busy)return;busy=true;
  try{message('Đang lưu bản chỉnh sửa…');const output=await snapshot(working,type);await onSaved(output);dirty=false;undo=[];message('Đã lưu. Đóng Preview để tải ảnh, không cần xử lý lại.');}
  catch(e){message('Không lưu được: '+e.message);}finally{busy=false;}
 }
 async function restore(){
  if(busy)return;busy=true;
  try{working=toCanvas(result);await onReset?.();dirty=false;undo=[];leaveTool();reset();message('Đã khôi phục ảnh sau xử lý.');}
  catch(e){message('Không khôi phục được: '+e.message);}finally{busy=false;}
 }
 function close(){
  if(busy)return;if(dirty&&!window.confirm('Ảnh đang có thay đổi chưa lưu. Đóng và bỏ thay đổi?'))return;modal.close();
 }
 function escape(){
  if(busy)return;if(mode!=='view'){leaveTool();message('Đã thoát công cụ.');return;}
  if(!isFit()){reset();message('Đã đặt lại vị trí và zoom. Nhấn ESC lần nữa để đóng Preview.');return;}
  close();
 }
 function down(event,index){
  if(event.button!==0||busy)return;
  const c=canvases[index],pt=imagePoint(event,index),xy={x:event.offsetX,y:event.offsetY};
  if(index===1&&mode==='text'){textPoint={x:limit(pt.x,0,working.width),y:limit(pt.y,0,working.height)};paint();return;}
  if(index===1&&mode==='perspective'){
   let ix=-1,dist=20;quad.forEach((p,i)=>{const q=displayPoint(p[0],p[1]),d=Math.hypot(xy.x-q.x,xy.y-q.y);if(d<dist){dist=d;ix=i;}});
   if(ix<0)return;drag={type:'quad',ix};
  }else if(index===1&&mode==='crop'){
   const p=[[rect.x,rect.y],[rect.x+rect.w,rect.y],[rect.x+rect.w,rect.y+rect.h],[rect.x,rect.y+rect.h]];
   let ix=-1,dist=20;p.forEach((q,i)=>{const v=displayPoint(q[0],q[1]),d=Math.hypot(xy.x-v.x,xy.y-v.y);if(d<dist){dist=d;ix=i;}});
   drag=ix>=0?{type:'cropHandle',ix,start:{...rect}}:{type:'cropMove',start:{...rect},at:pt};
  }else if(mode==='view')drag={type:'pan',x:event.clientX,y:event.clientY};
  if(drag)c.setPointerCapture(event.pointerId);
 }
 function move(event,index){
  if(!drag||busy)return;const pt=imagePoint(event,index);
  if(drag.type==='pan'){panX+=event.clientX-drag.x;panY+=event.clientY-drag.y;drag.x=event.clientX;drag.y=event.clientY;}
  if(drag.type==='quad')quad[drag.ix]=[limit(pt.x,0,working.width-1),limit(pt.y,0,working.height-1)];
  if(drag.type==='cropMove'){rect.x=limit(drag.start.x+pt.x-drag.at.x,0,working.width-rect.w);rect.y=limit(drag.start.y+pt.y-drag.at.y,0,working.height-rect.h);}
  if(drag.type==='cropHandle'){
   const s=drag.start;let a=s.x,b=s.y,c=s.x+s.w,d=s.y+s.h;
   if(drag.ix===0||drag.ix===3)a=limit(pt.x,0,c-12);else c=limit(pt.x,a+12,working.width);
   if(drag.ix===0||drag.ix===1)b=limit(pt.y,0,d-12);else d=limit(pt.y,b+12,working.height);
   rect={x:a,y:b,w:c-a,h:d-b};
  }paint();
 }
 function wheel(e,index){
  e.preventDefault();if(busy)return;
  const c=canvases[index],bounds=c.getBoundingClientRect(),x=e.clientX-bounds.left-c.clientWidth/2,y=e.clientY-bounds.top-c.clientHeight/2;
  const prev=scale;scale=limit(scale*Math.exp(-e.deltaY*.0018),.1,256);
  const ratio=scale/prev;panX=x-(x-panX)*ratio;panY=y-(y-panY)*ratio;paint();
 }
 canvases.forEach((c,i)=>{
  c.addEventListener('wheel',e=>wheel(e,i),{passive:false});
  c.addEventListener('pointerdown',e=>down(e,i));
  c.addEventListener('pointermove',e=>move(e,i));
  c.addEventListener('pointerup',e=>{drag=null;try{c.releasePointerCapture(e.pointerId);}catch{}});
  c.addEventListener('pointercancel',()=>drag=null);
  c.addEventListener('dblclick',()=>{if(mode!=='view')return;if(scale>1.1)reset();else{scale=2;paint();}});
 });
 modal.querySelectorAll('[data-click]').forEach(b=>b.onclick=()=>{
  const action=b.dataset.click;
  if(action==='close')close();
  if(action==='fit')reset();
  if(action==='pixel'){scale=limit(1/Math.min(fitting(0),fitting(1)),.1,256);panX=panY=0;paint();}
  if(['rotateL','rotateR','flipH','flipV'].includes(action))transform(action);
  if(action==='apply')void apply();
  if(action==='save')void save();
  if(action==='restore')void restore();
  if(action==='cancel')leaveTool();
  if(action==='undo'){if(!undo.length)return message('Không có bước để hoàn tác.');working=undo.pop();dirty=true;leaveTool();reset();message('Đã hoàn tác.');}
 });
 modal.querySelectorAll('[data-mode]').forEach(b=>b.onclick=()=>setMode(b.dataset.mode));
 modal.addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();e.stopImmediatePropagation();escape();}},true);
 modal.addEventListener('cancel',e=>{e.preventDefault();escape();});
 const observer=new ResizeObserver(paint);observer.observe(modal.querySelector('.kpe-panes'));
 by('#kpeFilename').textContent=file.name+' · Ảnh bên trái luôn được giữ nguyên';
 modal.addEventListener('close',()=>{observer.disconnect();original.close?.();result.close?.();modal.remove();});
 modal.showModal();requestAnimationFrame(paint);
}
