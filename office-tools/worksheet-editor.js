/*
 * LÂM GIA KHANG - LÀM BÀI TẬP
 * Trình làm bài PDF/IMG tích hợp Kanban, chạy hoàn toàn trong trình duyệt.
 * Ảnh/PDF là nền bất biến; chữ/nét/khoanh/highlight là lớp annotation riêng.
 */
const DB_NAME='linh_kanban_worksheet_editor_v1';
const DB_VERSION=1;
const STORE='projects';
const MAX_RECENTS=5;
const PDF_JS_URL='https://unpkg.com/pdfjs-dist@4.10.38/build/pdf.min.mjs';
const PDF_WORKER_URL='https://unpkg.com/pdfjs-dist@4.10.38/build/pdf.worker.min.mjs';
const PDF_LIB_URL='https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js';
const DEFAULTS={tool:'select',selectMode:'move',color:'#166fc0',fontSize:28,strokeWidth:4,zoom:1};
let activeEditor=null;
let pdfjsLib=null;

export function openWorksheetEditor(hostDialog,{onClose}={}){
  if(activeEditor){activeEditor.focus();return activeEditor;}
  activeEditor=new WorksheetEditor(hostDialog,onClose);
  activeEditor.open();
  return activeEditor;
}
export function isWorksheetEditorOpen(){return Boolean(activeEditor);}
export function closeWorksheetEditor(){activeEditor?.close();}

class WorksheetEditor{
  constructor(hostDialog,onClose){
    this.hostDialog=hostDialog;
    this.onClose=onClose;
    this.root=null;
    this.pages=[];
    this.projectId=null;
    this.projectTitle='Bài tập';
    this.createdAt=Date.now();
    this.currentPageId=null;
    this.tool=DEFAULTS.tool;
    this.selectMode=DEFAULTS.selectMode;
    this.color=localStorage.getItem('gk_ws_color')||DEFAULTS.color;
    this.fontSize=Number(localStorage.getItem('gk_ws_font')||DEFAULTS.fontSize);
    this.strokeWidth=Number(localStorage.getItem('gk_ws_stroke')||DEFAULTS.strokeWidth);
    this.zoom=Number(localStorage.getItem('gk_ws_zoom')||DEFAULTS.zoom);
    this.selected={pageId:null,annId:null};
    this.undoStack=[]; this.redoStack=[]; this.historyLimit=100; this.lastHistory={key:'',time:0};
    this.dirty=false; this.saving=false; this.autosaveTimer=null; this.debounceTimer=null;
    this.objectUrls=new Set();
    this.pageDom=new Map();
    this.drawing=null; this.draggingShape=null; this.textDrag=null; this.editingTextKey=null;
    this.abortImport=false;
    this.boundKeydown=e=>this.onKeyDown(e);
    this.boundBeforeUnload=()=>this.autosaveNow(true);
    this.boundVisibility=()=>{if(document.hidden)this.autosaveNow(true)};
  }
  open(){
    this.root=document.createElement('section');
    this.root.className='ws-editor';
    this.root.tabIndex=-1;
    this.root.innerHTML=this.template();
    this.hostDialog.appendChild(this.root);
    this.hostDialog.classList.add('office-worksheet-host');
    this.bindUi();
    this.applyToolState();
    this.updateUndoRedo();
    this.renderPages();
    this.updateStatus();
    document.addEventListener('keydown',this.boundKeydown,true);
    window.addEventListener('beforeunload',this.boundBeforeUnload);
    document.addEventListener('visibilitychange',this.boundVisibility);
    this.autosaveTimer=setInterval(()=>{if(this.dirty)this.autosaveNow()},5000);
    this.refreshRecentCount();
    setTimeout(()=>this.root?.focus(),0);
  }
  async close(){
    if(!this.root)return;
    await this.autosaveNow(true).catch(()=>{});
    clearInterval(this.autosaveTimer);clearTimeout(this.debounceTimer);
    document.removeEventListener('keydown',this.boundKeydown,true);
    window.removeEventListener('beforeunload',this.boundBeforeUnload);
    document.removeEventListener('visibilitychange',this.boundVisibility);
    this.objectUrls.forEach(u=>URL.revokeObjectURL(u));this.objectUrls.clear();
    this.root.remove();this.root=null;
    this.hostDialog.classList.remove('office-worksheet-host');
    activeEditor=null;
    try{this.onClose?.()}catch{}
  }
  focus(){this.root?.focus()}
  template(){return `
    <div class="ws-top">
      <div class="ws-titlebar">
        <div class="ws-brand"><div class="ws-brand-mark">GK</div><div class="ws-brand-text"><strong>LÂM GIA KHANG - LÀM BÀI TẬP</strong><span id="wsProjectName">Chưa mở bài</span></div></div>
        <button class="ws-btn ws-icon-btn" id="wsBack" title="Quay lại bộ công cụ">←</button>
        <button class="ws-btn primary" id="wsOpen">＋ Nhập PDF/IMG</button>
        <button class="ws-btn" id="wsAdd">Thêm trang</button>
        <button class="ws-btn" id="wsRecent">🕘 Bài gần đây <span id="wsRecentCount"></span></button>
        <button class="ws-btn" id="wsSave">💾 Lưu ngay</button>
        <button class="ws-btn ws-icon-btn" id="wsUndo" title="Hoàn tác (Ctrl+Z)">↶</button>
        <button class="ws-btn ws-icon-btn" id="wsRedo" title="Làm lại (Ctrl+Y)">↷</button>
        <span class="ws-spacer"></span>
        <button class="ws-btn primary" id="wsExport">Xuất bài ▾</button>
      </div>
      <div class="ws-toolbar">
        <button class="ws-tool" data-ws-tool="select">Chọn</button>
        <div class="ws-mode" id="wsSelectMode"><button class="ws-seg" data-select-mode="move">↔ Di chuyển</button><button class="ws-seg" data-select-mode="edit">✎ Sửa chữ</button></div>
        <button class="ws-tool" data-ws-tool="text">Gõ chữ</button>
        <button class="ws-tool" data-ws-tool="pen">Bút</button>
        <button class="ws-tool" data-ws-tool="highlight">Highlight</button>
        <button class="ws-tool" data-ws-tool="ellipse">Khoanh</button>
        <button class="ws-tool" data-ws-tool="rect">Chữ nhật</button>
        <button class="ws-tool" data-ws-tool="line">Đường</button>
        <button class="ws-tool" data-ws-tool="arrow">Mũi tên</button>
        <button class="ws-tool" data-ws-tool="underline">Gạch chân</button>
        <button class="ws-tool" data-ws-tool="eraser">Tẩy</button>
        <span class="ws-divider"></span><span class="ws-label">Màu</span><input class="ws-color" id="wsColor" type="color" value="${escapeHtml(this.color)}" title="Màu chữ / nét">
        <span class="ws-label">Cỡ chữ</span><input class="ws-number" id="wsFontSize" type="number" min="10" max="100" value="${this.fontSize}">
        <span class="ws-label">Độ dày</span><input class="ws-number" id="wsStroke" type="number" min="1" max="40" value="${this.strokeWidth}">
        <span class="ws-divider"></span>
        <button class="ws-btn" id="wsFitWidth">Vừa chiều rộng</button><button class="ws-btn" id="wsZoomOut">−</button><span class="ws-label" id="wsZoomLabel">100%</span><button class="ws-btn" id="wsZoomIn">＋</button>
        <button class="ws-btn danger" id="wsClearPage">Xóa đáp án trang này</button>
      </div>
    </div>
    <div class="ws-body">
      <aside class="ws-sidebar">
        <div class="ws-side-head"><div class="ws-side-head-row"><strong>TRANG BÀI TẬP</strong><span id="wsPageCount">0 trang</span></div><small>↑ ↓ để đổi thứ tự. Các trang hiển thị nối dọc ở bên phải.</small></div>
        <div class="ws-page-list" id="wsPageList"></div>
      </aside>
      <main class="ws-workspace" id="wsWorkspace"><div id="wsCanvasHost"></div></main>
    </div>
    <div class="ws-statusbar"><span id="wsStatus">Sẵn sàng.</span><span id="wsPageStatus">Trang 0 / 0</span><span id="wsToolStatus">Công cụ: Chọn</span><span id="wsZoomStatus">Zoom: 100%</span><div class="ws-shortcuts"><span><kbd>Ctrl+Z</kbd> Undo</span><span><kbd>Ctrl+Y</kbd> Redo</span><span><kbd>↑↓←→</kbd> Di chuyển</span></div><span class="ws-save-state saved" id="wsSaveState">Tự lưu: sẵn sàng</span></div>
    <input id="wsFileInput" type="file" accept=".png,.jpg,.jpeg,.webp,.pdf,image/png,image/jpeg,image/webp,application/pdf" multiple hidden>
    <div class="ws-toast" id="wsToast"></div>`}
  bindUi(){
    const q=s=>this.root.querySelector(s);
    q('#wsBack').onclick=()=>this.close();
    q('#wsOpen').onclick=()=>this.pickFiles(true);
    q('#wsAdd').onclick=()=>this.pickFiles(false);
    q('#wsRecent').onclick=()=>this.showRecentModal();
    q('#wsSave').onclick=()=>this.autosaveNow(false,true);
    q('#wsUndo').onclick=()=>this.undo();q('#wsRedo').onclick=()=>this.redo();
    q('#wsExport').onclick=()=>this.showExportModal();
    q('#wsColor').oninput=e=>{this.color=e.target.value;localStorage.setItem('gk_ws_color',this.color)};
    q('#wsFontSize').onchange=e=>{this.fontSize=clamp(Number(e.target.value)||28,10,100);e.target.value=this.fontSize;localStorage.setItem('gk_ws_font',this.fontSize)};
    q('#wsStroke').onchange=e=>{this.strokeWidth=clamp(Number(e.target.value)||4,1,40);e.target.value=this.strokeWidth;localStorage.setItem('gk_ws_stroke',this.strokeWidth)};
    q('#wsZoomIn').onclick=()=>this.setZoom(this.zoom+.1);q('#wsZoomOut').onclick=()=>this.setZoom(this.zoom-.1);q('#wsFitWidth').onclick=()=>this.fitWidth();
    q('#wsClearPage').onclick=()=>this.clearCurrentPage();
    this.root.querySelectorAll('[data-ws-tool]').forEach(b=>b.onclick=()=>this.setTool(b.dataset.wsTool));
    this.root.querySelectorAll('[data-select-mode]').forEach(b=>b.onclick=()=>{this.selectMode=b.dataset.selectMode;this.setTool('select');this.applyToolState();this.renderAllTextLayers()});
    q('#wsFileInput').onchange=e=>{const files=[...e.target.files];e.target.value='';if(files.length)this.importFiles(files,this.pendingReplace)};
    q('#wsWorkspace').addEventListener('scroll',()=>this.updateCurrentPageFromScroll(),{passive:true});
    q('#wsWorkspace').addEventListener('dragover',e=>{if(hasFiles(e)){e.preventDefault();e.dataTransfer.dropEffect='copy'}});
    q('#wsWorkspace').addEventListener('drop',e=>{if(hasFiles(e)){e.preventDefault();const files=[...e.dataTransfer.files].filter(isAcceptedFile);if(files.length)this.importFiles(files,this.pages.length===0)}});
  }
  pickFiles(replace){this.pendingReplace=replace;this.root.querySelector('#wsFileInput').click()}
  setTool(tool){this.tool=tool;this.selected={pageId:null,annId:null};this.applyToolState();this.renderAllAnnotations();this.renderAllTextLayers();this.updateStatus()}
  applyToolState(){
    if(!this.root)return;
    this.root.querySelectorAll('[data-ws-tool]').forEach(b=>b.classList.toggle('active',b.dataset.wsTool===this.tool));
    this.root.querySelectorAll('[data-select-mode]').forEach(b=>b.classList.toggle('active',b.dataset.selectMode===this.selectMode));
    this.root.querySelector('#wsSelectMode').style.display=this.tool==='select'?'flex':'none';
    const cursors={select:'default',text:'text',pen:'crosshair',highlight:'crosshair',ellipse:'crosshair',rect:'crosshair',line:'crosshair',arrow:'crosshair',underline:'crosshair',eraser:'cell'};
    this.root.querySelectorAll('.ws-anno').forEach(c=>c.style.cursor=cursors[this.tool]||'default');
  }
  setZoom(value){this.zoom=clamp(Math.round(value*100)/100,.25,3);localStorage.setItem('gk_ws_zoom',this.zoom);this.applyZoom();this.updateStatus()}
  applyZoom(){
    for(const p of this.pages){const d=this.pageDom.get(p.id);if(!d)continue;d.wrap.style.width=`${Math.round(p.width*this.zoom)}px`;d.wrap.style.height=`${Math.round(p.height*this.zoom)}px`;d.stage.style.transform=`scale(${this.zoom})`;}
    if(this.root){this.root.querySelector('#wsZoomLabel').textContent=`${Math.round(this.zoom*100)}%`;this.root.querySelector('#wsZoomStatus').textContent=`Zoom: ${Math.round(this.zoom*100)}%`;}
  }
  fitWidth(){
    const page=this.getCurrentPage()||this.pages[0];if(!page)return;
    const w=this.root.querySelector('#wsWorkspace').clientWidth-70;
    this.setZoom(clamp(w/page.width,.25,2.2));
  }
  async importFiles(files,replace=false){
    files=files.filter(isAcceptedFile);if(!files.length)return;
    if(replace&&this.pages.length){if(!confirm('Mở bài mới sẽ thay bài đang hiển thị. Bản hiện tại đã được tự lưu vào 5 bài gần nhất. Tiếp tục?'))return;await this.autosaveNow(true).catch(()=>{});this.resetProject();}
    this.setBusy(`Đang nhập ${files.length} tệp…`);
    try{
      if(!this.projectId){const sig=await signatureForFiles(files);this.projectId=`src-${sig}`;this.createdAt=Date.now();this.projectTitle=deriveProjectTitle(files);}
      let added=0;
      for(let fi=0;fi<files.length;fi++){
        const f=files[fi];this.setStatus(`Đang đọc ${f.name} (${fi+1}/${files.length})…`);
        if(f.type==='application/pdf'||/\.pdf$/i.test(f.name)){const pages=await this.pagesFromPdf(f);for(const p of pages){this.pages.push(p);added++;}}
        else {const p=await this.pageFromImage(f);this.pages.push(p);added++;}
      }
      if(!this.currentPageId)this.currentPageId=this.pages[0]?.id||null;
      this.undoStack=[];this.redoStack=[];this.renderPages();this.markDirty();await this.autosaveNow();
      this.toast(`Đã nhập ${added} trang.`);
    }catch(err){console.error(err);this.toast(errorText(err),'error')}
    finally{this.setBusy('')}
  }
  resetProject(){
    this.objectUrls.forEach(u=>URL.revokeObjectURL(u));this.objectUrls.clear();this.pages=[];this.pageDom.clear();this.projectId=null;this.projectTitle='Bài tập';this.createdAt=Date.now();this.currentPageId=null;this.selected={pageId:null,annId:null};this.undoStack=[];this.redoStack=[];this.dirty=false;this.renderPages();
  }
  async pageFromImage(file){
    const blob=file.slice(0,file.size,file.type||guessMime(file.name));
    const dim=await imageDimensions(blob);
    return {id:uid(),name:file.name,width:dim.width,height:dim.height,mime:blob.type||'image/png',imageBlob:blob,annotations:[]};
  }
  async pagesFromPdf(file){
    const lib=await ensurePdfJs();const data=new Uint8Array(await file.arrayBuffer());const pdf=await lib.getDocument({data}).promise;const out=[];
    for(let i=1;i<=pdf.numPages;i++){
      this.setStatus(`Đang render ${file.name} - trang ${i}/${pdf.numPages}…`);
      const pg=await pdf.getPage(i);const base=pg.getViewport({scale:1});let scale=2;const maxPixels=4_000_000;if(base.width*base.height*scale*scale>maxPixels)scale=Math.sqrt(maxPixels/(base.width*base.height));
      const vp=pg.getViewport({scale});const canvas=document.createElement('canvas');canvas.width=Math.max(1,Math.round(vp.width));canvas.height=Math.max(1,Math.round(vp.height));const ctx=canvas.getContext('2d',{alpha:false});ctx.fillStyle='#fff';ctx.fillRect(0,0,canvas.width,canvas.height);await pg.render({canvasContext:ctx,viewport:vp}).promise;const blob=await canvasToBlob(canvas,'image/png',1);out.push({id:uid(),name:`${baseName(file.name)} - Trang ${i}.png`,width:canvas.width,height:canvas.height,mime:'image/png',imageBlob:blob,annotations:[]});await sleep(0);
    }
    try{pdf.destroy()}catch{}
    return out;
  }
  renderPages(){
    if(!this.root)return;
    this.pageDom.clear();const host=this.root.querySelector('#wsCanvasHost');host.innerHTML='';const list=this.root.querySelector('#wsPageList');list.innerHTML='';
    this.root.querySelector('#wsProjectName').textContent=this.pages.length?this.projectTitle:'Chưa mở bài';
    this.root.querySelector('#wsPageCount').textContent=`${this.pages.length} trang`;
    if(!this.pages.length){host.innerHTML=this.emptyTemplate();this.bindEmpty();this.updateStatus();return;}
    const pagesHost=document.createElement('div');pagesHost.className='ws-pages';host.appendChild(pagesHost);
    this.pages.forEach((page,index)=>{
      const thumb=this.makeThumb(page,index);list.appendChild(thumb);
      const wrap=document.createElement('div');wrap.className='ws-page-wrap';wrap.dataset.pageId=page.id;
      const label=document.createElement('div');label.className='ws-page-label';label.textContent=`Trang ${index+1}`;wrap.appendChild(label);
      const zoomShell=document.createElement('div');zoomShell.className='ws-page-shadow';zoomShell.style.width=`${page.width}px`;zoomShell.style.height=`${page.height}px`;
      const stage=document.createElement('div');stage.style.cssText=`position:relative;width:${page.width}px;height:${page.height}px;transform-origin:0 0;`;
      const base=document.createElement('canvas');base.className='ws-base';base.width=page.width;base.height=page.height;
      const anno=document.createElement('canvas');anno.className='ws-anno';anno.width=page.width;anno.height=page.height;anno.dataset.pageId=page.id;
      const textLayer=document.createElement('div');textLayer.className='ws-text-layer';textLayer.dataset.pageId=page.id;
      stage.append(base,anno,textLayer);zoomShell.appendChild(stage);wrap.appendChild(zoomShell);pagesHost.appendChild(wrap);
      this.pageDom.set(page.id,{wrap:zoomShell,outer:wrap,stage,base,anno,textLayer,thumb});
      this.drawBackground(page,base);this.bindCanvas(page,anno);this.renderAnnotations(page);this.renderTextLayer(page);
    });
    this.applyZoom();this.applyToolState();this.refreshSidebarActive();this.updateStatus();
    requestAnimationFrame(()=>this.updateCurrentPageFromScroll());
  }
  emptyTemplate(){return `<div class="ws-empty"><div class="ws-empty-card"><div class="ws-empty-icon">📝</div><h2>Làm bài trực tiếp trên PDF / hình ảnh</h2><p>Nhập 1 hoặc nhiều PNG, JPG, WEBP hoặc PDF. Các trang sẽ nối liền theo chiều dọc; bé có thể gõ chữ màu, khoanh, highlight, vẽ rồi xuất ảnh dài hoặc PDF.</p><div class="ws-dropzone" id="wsEmptyDrop"><strong>Browse hoặc kéo thả PDF / IMG vào đây</strong><div style="font-size:11px;color:#71847b;margin-top:4px">Tệp chỉ xử lý trên máy, không tải lên máy chủ.</div></div><div class="ws-empty-actions"><button class="ws-btn primary" id="wsEmptyOpen">Nhập PDF/IMG</button><button class="ws-btn" id="wsEmptyRecent">Mở 5 bài gần nhất</button></div></div></div>`}
  bindEmpty(){const dz=this.root.querySelector('#wsEmptyDrop');this.root.querySelector('#wsEmptyOpen').onclick=()=>this.pickFiles(true);this.root.querySelector('#wsEmptyRecent').onclick=()=>this.showRecentModal();dz.onclick=()=>this.pickFiles(true);dz.ondragover=e=>{e.preventDefault();dz.classList.add('dragover')};dz.ondragleave=()=>dz.classList.remove('dragover');dz.ondrop=e=>{e.preventDefault();dz.classList.remove('dragover');const files=[...e.dataTransfer.files].filter(isAcceptedFile);if(files.length)this.importFiles(files,true)}}
  makeThumb(page,index){
    const row=document.createElement('div');row.className='ws-thumb';row.dataset.pageId=page.id;row.onclick=e=>{if(e.target.closest('button'))return;this.currentPageId=page.id;this.pageDom.get(page.id)?.outer.scrollIntoView({behavior:'smooth',block:'start'});this.refreshSidebarActive();this.updateStatus()};
    const img=document.createElement('img');img.alt=`Trang ${index+1}`;if(!page._thumbUrl)page._thumbUrl=this.objectUrl(page.imageBlob);img.src=page._thumbUrl;
    const meta=document.createElement('div');meta.className='ws-thumb-meta';meta.innerHTML=`<div class="ws-thumb-title">Trang ${index+1}</div><div class="ws-thumb-sub">${escapeHtml(page.name||'')}</div><div class="ws-thumb-actions"><button data-dir="up" title="Đưa trang lên" ${index===0?'disabled':''}>↑</button><button data-dir="down" title="Đưa trang xuống" ${index===this.pages.length-1?'disabled':''}>↓</button><button data-dir="del" title="Xóa trang">×</button></div>`;
    meta.querySelector('[data-dir="up"]').onclick=e=>{e.stopPropagation();this.movePage(index,-1)};meta.querySelector('[data-dir="down"]').onclick=e=>{e.stopPropagation();this.movePage(index,1)};meta.querySelector('[data-dir="del"]').onclick=e=>{e.stopPropagation();this.deletePage(index)};
    row.append(img,meta);return row;
  }
  movePage(index,delta){const j=index+delta;if(j<0||j>=this.pages.length)return;this.pushHistory('page-order');[this.pages[index],this.pages[j]]=[this.pages[j],this.pages[index]];this.markDirty();this.renderPages();this.pageDom.get(this.currentPageId)?.outer.scrollIntoView({block:'nearest'})}
  deletePage(index){const p=this.pages[index];if(!p||!confirm(`Xóa Trang ${index+1}? Bản tự lưu trước đó vẫn còn trong lịch sử gần đây cho đến lần tự lưu tiếp theo.`))return;this.pushHistory('page-delete');this.pages.splice(index,1);if(this.currentPageId===p.id)this.currentPageId=this.pages[Math.min(index,this.pages.length-1)]?.id||null;this.markDirty();this.renderPages()}
  async drawBackground(page,canvas){try{const bmp=await blobToBitmap(page.imageBlob);const ctx=canvas.getContext('2d',{alpha:false});ctx.fillStyle='#fff';ctx.fillRect(0,0,canvas.width,canvas.height);ctx.drawImage(bmp,0,0,page.width,page.height);bmp.close?.()}catch(e){console.error(e)}}
  bindCanvas(page,canvas){
    canvas.addEventListener('pointerdown',e=>this.canvasPointerDown(e,page,canvas));canvas.addEventListener('pointermove',e=>this.canvasPointerMove(e,page,canvas));canvas.addEventListener('pointerup',e=>this.canvasPointerUp(e,page,canvas));canvas.addEventListener('pointercancel',e=>this.canvasPointerUp(e,page,canvas));
  }
  canvasPointerDown(e,page,canvas){
    if(e.button!==0)return;this.currentPageId=page.id;this.refreshSidebarActive();const pt=pointOnCanvas(e,canvas);canvas.setPointerCapture?.(e.pointerId);
    if(this.tool==='text'){e.preventDefault();this.createText(page,pt);return}
    if(this.tool==='select'){const hit=this.hitTest(page,pt);this.selectAnnotation(page,hit?.id||null);if(hit&&this.selectMode==='move'){this.pushHistory('shape-move');this.draggingShape={pageId:page.id,annId:hit.id,start:pt,last:pt}}return}
    if(this.tool==='eraser'){this.pushHistory('erase');this.drawing={type:'erase',pageId:page.id};this.eraseAt(page,pt);return}
    if(['pen','highlight'].includes(this.tool)){this.pushHistory(this.tool);const ann={id:uid(),type:this.tool,points:[pt],color:this.tool==='highlight'?'#ffd32a':this.color,width:this.tool==='highlight'?Math.max(16,this.strokeWidth*5):this.strokeWidth,alpha:this.tool==='highlight'?.34:1};page.annotations.push(ann);this.drawing={type:this.tool,pageId:page.id,annId:ann.id};this.renderAnnotations(page);return}
    if(['ellipse','rect','line','arrow','underline'].includes(this.tool)){this.pushHistory(this.tool);const ann={id:uid(),type:this.tool,x1:pt.x,y1:pt.y,x2:pt.x,y2:pt.y,color:this.color,width:this.strokeWidth};page.annotations.push(ann);this.drawing={type:this.tool,pageId:page.id,annId:ann.id};this.renderAnnotations(page)}
  }
  canvasPointerMove(e,page,canvas){const pt=pointOnCanvas(e,canvas);
    if(this.draggingShape&&this.draggingShape.pageId===page.id){const ann=findAnn(page,this.draggingShape.annId);if(!ann)return;const dx=pt.x-this.draggingShape.last.x,dy=pt.y-this.draggingShape.last.y;moveAnnotation(ann,dx,dy,page);this.draggingShape.last=pt;this.renderAnnotations(page);this.markDirty(false);return}
    if(!this.drawing||this.drawing.pageId!==page.id)return;
    if(this.drawing.type==='erase'){this.eraseAt(page,pt);return}
    const ann=findAnn(page,this.drawing.annId);if(!ann)return;
    if(ann.points){const last=ann.points[ann.points.length-1];if(distance(last,pt)>1.2)ann.points.push(pt)}else{ann.x2=pt.x;ann.y2=pt.y}
    this.renderAnnotations(page);this.markDirty(false);
  }
  canvasPointerUp(e,page,canvas){if(this.draggingShape){this.draggingShape=null;this.markDirty();return}if(this.drawing){this.drawing=null;this.markDirty();this.renderAnnotations(page)}}
  createText(page,pt){this.pushHistory('text-add');const ann={id:uid(),type:'text',x:pt.x,y:pt.y,text:'',color:this.color,fontSize:this.fontSize,bold:false,italic:false};page.annotations.push(ann);this.selected={pageId:page.id,annId:ann.id};this.renderTextLayer(page);this.markDirty(false);this.enterTextEdit(page,ann,true)}
  renderTextLayer(page){const d=this.pageDom.get(page.id);if(!d)return;const layer=d.textLayer;layer.innerHTML='';page.annotations.filter(a=>a.type==='text').forEach(ann=>{const el=document.createElement('div');el.className='ws-text-item';el.dataset.annId=ann.id;el.tabIndex=0;el.textContent=ann.text||'';this.positionTextEl(el,ann);const selected=this.selected.pageId===page.id&&this.selected.annId===ann.id;el.classList.toggle('selected',selected);el.classList.toggle('moveable',this.tool==='select'&&this.selectMode==='move');el.contentEditable='false';
      el.onpointerdown=e=>this.textPointerDown(e,page,ann,el);el.ondblclick=e=>{e.stopPropagation();this.selected={pageId:page.id,annId:ann.id};this.enterTextEdit(page,ann)};el.onkeydown=e=>this.textKeyDown(e,page,ann,el);layer.appendChild(el)});
  }
  renderAllTextLayers(){this.pages.forEach(p=>this.renderTextLayer(p))}
  positionTextEl(el,ann){el.style.left=`${ann.x}px`;el.style.top=`${ann.y}px`;el.style.color=ann.color||this.color;el.style.fontSize=`${ann.fontSize||this.fontSize}px`;el.style.fontWeight=ann.bold?'700':'400';el.style.fontStyle=ann.italic?'italic':'normal'}
  textPointerDown(e,page,ann,el){
    if(this.tool!=='select')return;e.stopPropagation();this.currentPageId=page.id;this.selected={pageId:page.id,annId:ann.id};this.refreshSidebarActive();
    if(this.selectMode==='edit'){this.enterTextEdit(page,ann);return}
    this.pageDom.get(page.id)?.textLayer.querySelectorAll('.ws-text-item').forEach(node=>node.classList.toggle('selected',node===el));el.classList.add('selected','moveable');el.focus();this.pushHistory('text-move');const start={x:e.clientX,y:e.clientY,ax:ann.x,ay:ann.y};this.textDrag={pageId:page.id,annId:ann.id,start};const move=ev=>{if(!this.textDrag)return;ann.x=clamp(start.ax+(ev.clientX-start.x)/this.zoom,0,page.width-5);ann.y=clamp(start.ay+(ev.clientY-start.y)/this.zoom,0,page.height-5);this.positionTextEl(el,ann);this.markDirty(false)};const up=()=>{document.removeEventListener('pointermove',move);document.removeEventListener('pointerup',up);this.textDrag=null;this.markDirty()};document.addEventListener('pointermove',move);document.addEventListener('pointerup',up,{once:true});
  }
  enterTextEdit(page,ann,selectAll=false){
    this.tool='select';this.selectMode='edit';this.applyToolState();this.selected={pageId:page.id,annId:ann.id};this.renderTextLayer(page);const el=this.pageDom.get(page.id)?.textLayer.querySelector(`[data-ann-id="${cssEscape(ann.id)}"]`);if(!el)return;this.pushHistory('text-edit');this.editingTextKey=`${page.id}:${ann.id}`;el.contentEditable='true';el.classList.add('editing');el.focus();if(selectAll){const range=document.createRange();range.selectNodeContents(el);const sel=getSelection();sel.removeAllRanges();sel.addRange(range)}else placeCaretEnd(el);
    el.oninput=()=>{ann.text=el.innerText.replace(/\r/g,'');ann.color=this.color;ann.fontSize=this.fontSize;this.markDirty(false)};
    el.onblur=()=>{ann.text=el.innerText.replace(/\r/g,'');this.editingTextKey=null;this.markDirty();el.contentEditable='false';el.classList.remove('editing');this.renderTextLayer(page)};
  }
  textKeyDown(e,page,ann,el){
    if(el.isContentEditable){if(e.key==='Escape'){e.preventDefault();el.blur();this.selectMode='move';this.applyToolState();this.renderTextLayer(page)}return}
    if(this.tool!=='select'||this.selectMode!=='move')return;
    const arrows={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]};if(arrows[e.key]){e.preventDefault();this.pushHistory('text-nudge',true);const step=e.shiftKey?10:1;ann.x=clamp(ann.x+arrows[e.key][0]*step,0,page.width-5);ann.y=clamp(ann.y+arrows[e.key][1]*step,0,page.height-5);this.positionTextEl(el,ann);this.markDirty();return}
    if(e.key==='Enter'||e.key==='F2'){e.preventDefault();this.selectMode='edit';this.enterTextEdit(page,ann);return}
    if(e.key==='Delete'){e.preventDefault();this.pushHistory('delete');page.annotations=page.annotations.filter(a=>a.id!==ann.id);this.selected={pageId:null,annId:null};this.renderTextLayer(page);this.markDirty()}
  }
  selectAnnotation(page,annId){this.selected={pageId:annId?page.id:null,annId};this.renderAnnotations(page);this.renderTextLayer(page);this.updateStatus()}
  hitTest(page,pt){for(let i=page.annotations.length-1;i>=0;i--){const a=page.annotations[i];if(a.type==='text')continue;if(annotationHit(a,pt))return a}return null}
  eraseAt(page,pt){let changed=false;for(let i=page.annotations.length-1;i>=0;i--){const a=page.annotations[i];if(a.type==='text')continue;if(annotationHit(a,pt,Math.max(8,this.strokeWidth*2))){page.annotations.splice(i,1);changed=true;break}}if(changed){this.renderAnnotations(page);this.markDirty(false)}}
  renderAnnotations(page){const d=this.pageDom.get(page.id);if(!d)return;const ctx=d.anno.getContext('2d');ctx.clearRect(0,0,d.anno.width,d.anno.height);for(const a of page.annotations){if(a.type==='text')continue;drawAnnotation(ctx,a)}const sel=this.selected.pageId===page.id&&findAnn(page,this.selected.annId);if(sel&&sel.type!=='text'){const b=annotationBounds(sel);ctx.save();ctx.setLineDash([7,5]);ctx.strokeStyle='#1684cf';ctx.lineWidth=2;ctx.strokeRect(b.x-4,b.y-4,b.w+8,b.h+8);ctx.restore()}}
  renderAllAnnotations(){this.pages.forEach(p=>this.renderAnnotations(p))}
  clearCurrentPage(){const p=this.getCurrentPage();if(!p||!p.annotations.length)return;if(!confirm('Bạn có chắc muốn xóa toàn bộ phần đã làm trên trang này?'))return;this.pushHistory('clear-page');p.annotations=[];this.selected={pageId:null,annId:null};this.renderAnnotations(p);this.renderTextLayer(p);this.markDirty()}
  getCurrentPage(){return this.pages.find(p=>p.id===this.currentPageId)||null}
  updateCurrentPageFromScroll(){if(!this.pages.length)return;const ws=this.root.querySelector('#wsWorkspace');const top=ws.getBoundingClientRect().top+70;let best=null,bestDist=Infinity;for(const p of this.pages){const el=this.pageDom.get(p.id)?.outer;if(!el)continue;const r=el.getBoundingClientRect();const dist=Math.abs(r.top-top);if(r.bottom>top&&dist<bestDist){best=p;bestDist=dist}}if(best&&best.id!==this.currentPageId){this.currentPageId=best.id;this.refreshSidebarActive();this.updateStatus()}}
  refreshSidebarActive(){this.root?.querySelectorAll('.ws-thumb').forEach(el=>el.classList.toggle('active',el.dataset.pageId===this.currentPageId))}
  pushHistory(key='',merge=false){
    const now=Date.now();if(merge&&this.lastHistory.key===key&&now-this.lastHistory.time<300){this.lastHistory.time=now;return}
    const snap=this.captureState();this.undoStack.push(snap);if(this.undoStack.length>this.historyLimit)this.undoStack.shift();this.redoStack=[];this.lastHistory={key,time:now};this.updateUndoRedo();
  }
  captureState(){return {pages:this.pages.map(p=>({id:p.id,name:p.name,width:p.width,height:p.height,mime:p.mime,imageBlob:p.imageBlob,annotations:deepClone(p.annotations)})),currentPageId:this.currentPageId}}
  restoreState(s){if(!s)return;const currentById=new Map(this.pages.map(p=>[p.id,p]));this.pages=(s.pages||[]).map(sp=>{const current=currentById.get(sp.id);return {id:sp.id,name:sp.name,width:sp.width,height:sp.height,mime:sp.mime,imageBlob:sp.imageBlob||current?.imageBlob,annotations:deepClone(sp.annotations||[]),_thumbUrl:current?._thumbUrl};});this.currentPageId=s.currentPageId&&this.pages.some(p=>p.id===s.currentPageId)?s.currentPageId:this.pages[0]?.id||null;this.selected={pageId:null,annId:null};this.renderPages();this.markDirty()}
  undo(){if(!this.undoStack.length)return;const cur=this.captureState();const prev=this.undoStack.pop();this.redoStack.push(cur);this.restoreState(prev);this.updateUndoRedo();this.toast('Đã hoàn tác.')}
  redo(){if(!this.redoStack.length)return;const cur=this.captureState();const next=this.redoStack.pop();this.undoStack.push(cur);this.restoreState(next);this.updateUndoRedo();this.toast('Đã làm lại.')}
  updateUndoRedo(){if(!this.root)return;this.root.querySelector('#wsUndo').disabled=!this.undoStack.length;this.root.querySelector('#wsRedo').disabled=!this.redoStack.length}
  onKeyDown(e){
    if(!this.root||!this.root.isConnected)return;const mod=e.ctrlKey||e.metaKey;const typing=Boolean(document.activeElement?.isContentEditable)||['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName);
    if(mod&&e.key.toLowerCase()==='z'){e.preventDefault();e.stopImmediatePropagation();e.shiftKey?this.redo():this.undo();return}
    if(mod&&e.key.toLowerCase()==='y'){e.preventDefault();e.stopImmediatePropagation();this.redo();return}
    if(mod&&e.key.toLowerCase()==='s'){e.preventDefault();e.stopImmediatePropagation();this.autosaveNow(false,true);return}
    if(e.key==='Escape'&&!typing){e.preventDefault();e.stopImmediatePropagation();this.close();return}
    if(typing)return;
    const shortcuts={v:'select',t:'text',p:'pen',h:'highlight',e:'eraser'};if(shortcuts[e.key.toLowerCase()]&&!mod){e.preventDefault();this.setTool(shortcuts[e.key.toLowerCase()]);return}
    const p=this.getCurrentPage();const a=p&&this.selected.pageId===p.id?findAnn(p,this.selected.annId):null;if(a&&a.type!=='text'&&this.tool==='select'){
      const dirs={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]};if(dirs[e.key]){e.preventDefault();this.pushHistory('shape-nudge',true);const step=e.shiftKey?10:1;moveAnnotation(a,dirs[e.key][0]*step,dirs[e.key][1]*step,p);this.renderAnnotations(p);this.markDirty();return}if(e.key==='Delete'){e.preventDefault();this.pushHistory('delete');p.annotations=p.annotations.filter(x=>x.id!==a.id);this.selected={pageId:null,annId:null};this.renderAnnotations(p);this.markDirty()}}
  }
  markDirty(schedule=true){this.dirty=true;this.setSaveState('Chưa tự lưu','saving');if(schedule){clearTimeout(this.debounceTimer);this.debounceTimer=setTimeout(()=>this.autosaveNow(),1200)}}
  async autosaveNow(silent=false,manual=false){
    if(!this.pages.length||!this.projectId||this.saving)return;clearTimeout(this.debounceTimer);this.saving=true;this.setSaveState('Đang tự lưu…','saving');try{await saveProjectRecord({id:this.projectId,title:this.projectTitle,createdAt:this.createdAt,updatedAt:Date.now(),pages:this.pages.map(p=>({id:p.id,name:p.name,width:p.width,height:p.height,mime:p.mime,imageBlob:p.imageBlob,annotations:deepClone(p.annotations)}))});this.dirty=false;this.setSaveState('Đã tự lưu','saved');await this.refreshRecentCount();if(manual&&!silent)this.toast('Đã lưu bài vào 5 project gần nhất.')}catch(e){console.error(e);this.setSaveState('Lỗi tự lưu','error');if(!silent)this.toast('Không tự lưu được: '+errorText(e),'error')}finally{this.saving=false}
  }
  async refreshRecentCount(){if(!this.root)return;try{const arr=await getRecentProjects();this.root.querySelector('#wsRecentCount').textContent=arr.length?`(${arr.length})`:''}catch{}}
  setSaveState(text,cls){if(!this.root)return;const el=this.root.querySelector('#wsSaveState');el.textContent=`Tự lưu: ${text}`;el.className=`ws-save-state ${cls||''}`}
  async showRecentModal(){
    let records=[];try{records=await getRecentProjects()}catch(e){this.toast(errorText(e),'error');return}
    const box=document.createElement('div');box.className='ws-modal-backdrop';box.innerHTML=`<div class="ws-modal"><h3>5 bài làm gần nhất</h3><p>Mỗi project chỉ giữ bản mới nhất. Khi đủ 5, bài cũ nhất sẽ tự bị loại khỏi danh sách.</p><div class="ws-recent-list">${records.length?records.map(r=>`<div class="ws-recent-card"><div><div class="ws-recent-title">${escapeHtml(r.title||'Bài tập')}</div><div class="ws-recent-meta">${r.pages?.length||0} trang · ${formatDate(r.updatedAt)}</div></div><div style="display:flex;gap:5px"><button class="ws-btn" data-open="${escapeHtml(r.id)}">Mở</button><button class="ws-btn danger" data-del="${escapeHtml(r.id)}">Xóa</button></div></div>`).join(''):'<div style="padding:24px;text-align:center;color:#74867e">Chưa có bài tự lưu.</div>'}</div><div class="ws-modal-actions"><button class="ws-btn" data-close>Đóng</button></div></div>`;
    this.root.appendChild(box);box.querySelector('[data-close]').onclick=()=>box.remove();box.onclick=e=>{if(e.target===box)box.remove()};box.querySelectorAll('[data-open]').forEach(b=>b.onclick=async()=>{await this.loadRecent(b.dataset.open);box.remove()});box.querySelectorAll('[data-del]').forEach(b=>b.onclick=async()=>{if(confirm('Xóa project tự lưu này?')){await deleteProjectRecord(b.dataset.del);box.remove();this.showRecentModal();this.refreshRecentCount()}})
  }
  async loadRecent(id){
    if(this.pages.length)await this.autosaveNow(true).catch(()=>{});this.setBusy('Đang mở bài tự lưu…');try{const rec=await getProjectRecord(id);if(!rec)throw new Error('Không tìm thấy project.');this.resetProject();this.projectId=rec.id;this.projectTitle=rec.title||'Bài tập';this.createdAt=rec.createdAt||Date.now();this.pages=(rec.pages||[]).map(p=>({...p,annotations:deepClone(p.annotations||[])}));this.currentPageId=this.pages[0]?.id||null;this.renderPages();this.dirty=false;this.setSaveState('Đã mở bản tự lưu','saved');this.toast('Đã mở bài gần đây.')}catch(e){this.toast(errorText(e),'error')}finally{this.setBusy('')}
  }
  showExportModal(){
    if(!this.pages.length){this.toast('Chưa có bài để xuất.','error');return}
    const box=document.createElement('div');box.className='ws-modal-backdrop';box.innerHTML=`<div class="ws-modal"><h3>Xuất bài</h3><p>Mặc định là ảnh PNG nối dài theo chiều dọc.</p><div class="ws-export-options"><label class="ws-export-choice"><input type="radio" name="wsExportType" value="long" checked><span><strong>Ảnh PNG nối dài — mặc định</strong><small>Nối Trang 1 → Trang 2 → Trang 3 thành một ảnh dài.</small></span></label><label class="ws-export-choice"><input type="radio" name="wsExportType" value="pdf"><span><strong>PDF nhiều trang</strong><small>Mỗi trang bài tập là một trang PDF.</small></span></label><label class="ws-export-choice"><input type="radio" name="wsExportType" value="pages"><span><strong>PNG từng trang</strong><small>Tải từng trang riêng; trình duyệt có thể hỏi cho phép nhiều lượt tải.</small></span></label></div><div class="ws-progress"><i></i></div><div id="wsExportMsg" style="font-size:10px;color:#708078;margin-top:7px"></div><div class="ws-modal-actions"><button class="ws-btn" data-close>Hủy</button><button class="ws-btn primary" data-run>Xuất bài</button></div></div>`;
    this.root.appendChild(box);const close=()=>box.remove();box.querySelector('[data-close]').onclick=close;box.querySelector('[data-run]').onclick=async()=>{const type=box.querySelector('input[name="wsExportType"]:checked').value;const run=box.querySelector('[data-run]');run.disabled=true;try{await this.export(type,(pct,msg)=>{box.querySelector('.ws-progress i').style.width=`${pct}%`;box.querySelector('#wsExportMsg').textContent=msg||''});close();this.toast('Đã xuất bài thành công.')}catch(e){console.error(e);run.disabled=false;box.querySelector('#wsExportMsg').textContent=errorText(e);this.toast(errorText(e),'error')}}
  }
  async export(type,progress=()=>{}){await this.autosaveNow(true).catch(()=>{});if(type==='long')return this.exportLong(progress);if(type==='pdf')return this.exportPdf(progress);if(type==='pages')return this.exportPages(progress)}
  async composePage(page,scale=1){const c=document.createElement('canvas');c.width=Math.max(1,Math.round(page.width*scale));c.height=Math.max(1,Math.round(page.height*scale));const ctx=c.getContext('2d',{alpha:false});ctx.save();ctx.scale(scale,scale);ctx.fillStyle='#fff';ctx.fillRect(0,0,page.width,page.height);const bmp=await blobToBitmap(page.imageBlob);ctx.drawImage(bmp,0,0,page.width,page.height);bmp.close?.();for(const a of page.annotations){if(a.type==='text')drawTextAnnotation(ctx,a);else drawAnnotation(ctx,a)}ctx.restore();return c}
  async exportLong(progress){
    const composed=[];let maxW=0,totalH=0;const gap=10;for(let i=0;i<this.pages.length;i++){progress(Math.round(i/this.pages.length*45),`Render trang ${i+1}/${this.pages.length}…`);const c=await this.composePage(this.pages[i]);composed.push(c);maxW=Math.max(maxW,c.width);totalH+=Math.round(c.height*(maxW?1:1));await sleep(0)}
    // Chuẩn hóa cùng bề ngang theo trang rộng nhất để nối dọc đẹp và không làm méo.
    totalH=composed.reduce((s,c)=>s+Math.round(c.height*(maxW/c.width)),0)+gap*(composed.length-1);
    if(totalH>32000||maxW>16000){if(confirm(`Ảnh nối dài dự kiến ${maxW} × ${totalH}px, vượt giới hạn an toàn của canvas trình duyệt. Chuyển sang xuất PDF để tránh mất bài?`))return this.exportPdf(progress);throw new Error('Ảnh quá dài để xuất PNG an toàn. Hãy chọn PDF.');}
    if(maxW*totalH>120_000_000){if(!confirm(`Ảnh sẽ khá lớn (${maxW} × ${totalH}px) và có thể tốn nhiều RAM. Tiếp tục xuất PNG?`))throw new Error('Đã hủy xuất ảnh dài.');}
    const out=document.createElement('canvas');out.width=maxW;out.height=totalH;const ctx=out.getContext('2d',{alpha:false});ctx.fillStyle='#fff';ctx.fillRect(0,0,out.width,out.height);let y=0;for(let i=0;i<composed.length;i++){const c=composed[i];const h=Math.round(c.height*(maxW/c.width));ctx.drawImage(c,0,y,maxW,h);y+=h+gap;progress(45+Math.round((i+1)/composed.length*45),`Đang nối trang ${i+1}/${composed.length}…`);await sleep(0)}const blob=await canvasToBlob(out,'image/png',1);progress(96,'Đang lưu ảnh…');downloadBlob(blob,safeFileName(`${this.projectTitle} - Bai lam.png`));progress(100,'Hoàn tất.')
  }
  async exportPdf(progress){
    const PDFLib=await ensurePdfLib();const doc=await PDFLib.PDFDocument.create();for(let i=0;i<this.pages.length;i++){progress(Math.round(i/this.pages.length*90),`Tạo PDF trang ${i+1}/${this.pages.length}…`);const c=await this.composePage(this.pages[i]);const blob=await canvasToBlob(c,'image/png',1);const bytes=new Uint8Array(await blob.arrayBuffer());const img=await doc.embedPng(bytes);const w=this.pages[i].width,h=this.pages[i].height;const scale=Math.min(1,842/h,595/w);const pw=w*scale,ph=h*scale;const p=doc.addPage([pw,ph]);p.drawImage(img,{x:0,y:0,width:pw,height:ph});await sleep(0)}const bytes=await doc.save();downloadBlob(new Blob([bytes],{type:'application/pdf'}),safeFileName(`${this.projectTitle} - Bai lam.pdf`));progress(100,'Hoàn tất.')
  }
  async exportPages(progress){for(let i=0;i<this.pages.length;i++){progress(Math.round(i/this.pages.length*95),`Xuất trang ${i+1}/${this.pages.length}…`);const c=await this.composePage(this.pages[i]);const b=await canvasToBlob(c,'image/png',1);downloadBlob(b,safeFileName(`${this.projectTitle} - Trang ${String(i+1).padStart(2,'0')}.png`));await sleep(120)}progress(100,'Hoàn tất.')}
  setBusy(text){if(text)this.setStatus(text);this.root.querySelectorAll('#wsOpen,#wsAdd,#wsExport').forEach(b=>b.disabled=Boolean(text))}
  setStatus(text){if(this.root)this.root.querySelector('#wsStatus').textContent=text||'Sẵn sàng.'}
  updateStatus(){if(!this.root)return;const idx=this.pages.findIndex(p=>p.id===this.currentPageId);this.root.querySelector('#wsPageStatus').textContent=`Trang ${idx>=0?idx+1:0} / ${this.pages.length}`;this.root.querySelector('#wsToolStatus').textContent=`Công cụ: ${toolLabel(this.tool)}${this.tool==='select'?` - ${this.selectMode==='move'?'Di chuyển':'Sửa chữ'}`:''}`;this.root.querySelector('#wsZoomStatus').textContent=`Zoom: ${Math.round(this.zoom*100)}%`;this.root.querySelector('#wsZoomLabel').textContent=`${Math.round(this.zoom*100)}%`;this.refreshSidebarActive()}
  toast(text,type=''){if(!this.root)return;const t=this.root.querySelector('#wsToast');t.textContent=text;t.className=`ws-toast ${type}`;requestAnimationFrame(()=>t.classList.add('show'));clearTimeout(this.toastTimer);this.toastTimer=setTimeout(()=>t.classList.remove('show'),2600)}
  objectUrl(blob){const u=URL.createObjectURL(blob);this.objectUrls.add(u);return u}
}

// ===== IndexedDB: chỉ giữ 5 project gần nhất, mỗi id duy nhất =====
function openDb(){return new Promise((resolve,reject)=>{const req=indexedDB.open(DB_NAME,DB_VERSION);req.onupgradeneeded=()=>{const db=req.result;if(!db.objectStoreNames.contains(STORE)){const s=db.createObjectStore(STORE,{keyPath:'id'});s.createIndex('updatedAt','updatedAt')}};req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error)})}
async function saveProjectRecord(record){const db=await openDb();await txPromise(db,'readwrite',store=>store.put(record));const all=await getRecentProjects(db);for(const extra of all.slice(MAX_RECENTS))await txPromise(db,'readwrite',store=>store.delete(extra.id));db.close()}
async function getRecentProjects(existingDb=null){const db=existingDb||await openDb();const arr=await new Promise((resolve,reject)=>{const tx=db.transaction(STORE,'readonly');const s=tx.objectStore(STORE);const r=s.getAll();r.onsuccess=()=>resolve(r.result||[]);r.onerror=()=>reject(r.error)});if(!existingDb)db.close();return arr.sort((a,b)=>(b.updatedAt||0)-(a.updatedAt||0))}
async function getProjectRecord(id){const db=await openDb();const rec=await new Promise((resolve,reject)=>{const r=db.transaction(STORE,'readonly').objectStore(STORE).get(id);r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error)});db.close();return rec}
async function deleteProjectRecord(id){const db=await openDb();await txPromise(db,'readwrite',store=>store.delete(id));db.close()}
function txPromise(db,mode,fn){return new Promise((resolve,reject)=>{const tx=db.transaction(STORE,mode);fn(tx.objectStore(STORE));tx.oncomplete=()=>resolve();tx.onerror=()=>reject(tx.error);tx.onabort=()=>reject(tx.error)})}

// ===== PDF / ảnh =====
async function ensurePdfJs(){if(pdfjsLib)return pdfjsLib;pdfjsLib=await import(PDF_JS_URL);pdfjsLib.GlobalWorkerOptions.workerSrc=PDF_WORKER_URL;return pdfjsLib}
async function ensurePdfLib(){if(globalThis.PDFLib)return globalThis.PDFLib;await loadScript(PDF_LIB_URL);if(!globalThis.PDFLib)throw new Error('Không tải được thư viện tạo PDF. Kiểm tra Internet rồi thử lại.');return globalThis.PDFLib}
function loadScript(src){return new Promise((resolve,reject)=>{const old=document.querySelector(`script[data-ws-lib="${src}"]`);if(old){if(old.dataset.loaded==='1')return resolve();old.addEventListener('load',resolve,{once:true});old.addEventListener('error',reject,{once:true});return}const s=document.createElement('script');s.src=src;s.async=true;s.dataset.wsLib=src;s.onload=()=>{s.dataset.loaded='1';resolve()};s.onerror=()=>reject(new Error('Không tải được thư viện cần thiết.'));document.head.appendChild(s)})}
async function imageDimensions(blob){const bmp=await blobToBitmap(blob);const d={width:bmp.width,height:bmp.height};bmp.close?.();return d}
async function blobToBitmap(blob){if('createImageBitmap'in window){try{return await createImageBitmap(blob)}catch{}}return await new Promise((resolve,reject)=>{const img=new Image();const u=URL.createObjectURL(blob);img.onload=()=>{URL.revokeObjectURL(u);resolve(img)};img.onerror=()=>{URL.revokeObjectURL(u);reject(new Error('Không đọc được hình ảnh.'))};img.src=u})}
function canvasToBlob(canvas,type='image/png',quality=.95){return new Promise((resolve,reject)=>canvas.toBlob(b=>b?resolve(b):reject(new Error('Không tạo được ảnh xuất.')),type,quality))}

// ===== Vẽ / hit test =====
function drawAnnotation(ctx,a){ctx.save();ctx.lineCap='round';ctx.lineJoin='round';ctx.strokeStyle=a.color||'#166fc0';ctx.lineWidth=a.width||3;ctx.globalAlpha=Number.isFinite(a.alpha)?a.alpha:1;
  if(a.points){if(a.points.length>0){ctx.beginPath();ctx.moveTo(a.points[0].x,a.points[0].y);for(let i=1;i<a.points.length;i++)ctx.lineTo(a.points[i].x,a.points[i].y);ctx.stroke()}ctx.restore();return}
  const x=Math.min(a.x1,a.x2),y=Math.min(a.y1,a.y2),w=Math.abs(a.x2-a.x1),h=Math.abs(a.y2-a.y1);ctx.beginPath();
  if(a.type==='ellipse')ctx.ellipse(x+w/2,y+h/2,Math.max(.5,w/2),Math.max(.5,h/2),0,0,Math.PI*2);
  else if(a.type==='rect')ctx.rect(x,y,w,h);
  else {ctx.moveTo(a.x1,a.y1);ctx.lineTo(a.x2,a.y2)}ctx.stroke();
  if(a.type==='arrow'){const ang=Math.atan2(a.y2-a.y1,a.x2-a.x1),len=Math.max(10,(a.width||3)*4);ctx.beginPath();ctx.moveTo(a.x2,a.y2);ctx.lineTo(a.x2-len*Math.cos(ang-Math.PI/6),a.y2-len*Math.sin(ang-Math.PI/6));ctx.moveTo(a.x2,a.y2);ctx.lineTo(a.x2-len*Math.cos(ang+Math.PI/6),a.y2-len*Math.sin(ang+Math.PI/6));ctx.stroke()}ctx.restore()}
function drawTextAnnotation(ctx,a){ctx.save();ctx.fillStyle=a.color||'#166fc0';ctx.font=`${a.italic?'italic ':''}${a.bold?'700 ':'400 '}${a.fontSize||28}px "Segoe UI", Arial, sans-serif`;ctx.textBaseline='top';const lines=String(a.text||'').split('\n');const lh=(a.fontSize||28)*1.18;lines.forEach((line,i)=>ctx.fillText(line,a.x,a.y+i*lh));ctx.restore()}
function annotationBounds(a){if(a.points){const xs=a.points.map(p=>p.x),ys=a.points.map(p=>p.y);const x=Math.min(...xs),y=Math.min(...ys),x2=Math.max(...xs),y2=Math.max(...ys);return{x,y,w:Math.max(1,x2-x),h:Math.max(1,y2-y)}}const x=Math.min(a.x1,a.x2),y=Math.min(a.y1,a.y2);return{x,y,w:Math.abs(a.x2-a.x1),h:Math.abs(a.y2-a.y1)}}
function annotationHit(a,p,tol=10){const b=annotationBounds(a);return p.x>=b.x-tol&&p.x<=b.x+b.w+tol&&p.y>=b.y-tol&&p.y<=b.y+b.h+tol}
function moveAnnotation(a,dx,dy,page){if(a.type==='text'){a.x=clamp(a.x+dx,0,page.width);a.y=clamp(a.y+dy,0,page.height);return}if(a.points){a.points=a.points.map(p=>({x:clamp(p.x+dx,0,page.width),y:clamp(p.y+dy,0,page.height)}));return}a.x1=clamp(a.x1+dx,0,page.width);a.x2=clamp(a.x2+dx,0,page.width);a.y1=clamp(a.y1+dy,0,page.height);a.y2=clamp(a.y2+dy,0,page.height)}

// ===== Tiện ích =====
function pointOnCanvas(e,canvas){const r=canvas.getBoundingClientRect();return{x:clamp((e.clientX-r.left)*canvas.width/r.width,0,canvas.width),y:clamp((e.clientY-r.top)*canvas.height/r.height,0,canvas.height)}}
function distance(a,b){return Math.hypot(a.x-b.x,a.y-b.y)}
function findAnn(page,id){return page?.annotations?.find(a=>a.id===id)||null}
function deepClone(v){return globalThis.structuredClone?structuredClone(v):JSON.parse(JSON.stringify(v))}
function uid(){return crypto.randomUUID?.()||`${Date.now()}-${Math.random().toString(16).slice(2)}`}
function clamp(n,min,max){return Math.max(min,Math.min(max,n))}
function sleep(ms=0){return new Promise(r=>setTimeout(r,ms))}
function baseName(name=''){return String(name).replace(/\.[^.]+$/,'')}
function guessMime(name=''){return /\.jpe?g$/i.test(name)?'image/jpeg':/\.webp$/i.test(name)?'image/webp':'image/png'}
function isAcceptedFile(f){return f&&(f.type==='application/pdf'||f.type.startsWith('image/')||/\.(pdf|png|jpe?g|webp)$/i.test(f.name||''))}
function hasFiles(e){return [...(e.dataTransfer?.types||[])].includes('Files')}
function deriveProjectTitle(files){if(files.length===1)return baseName(files[0].name)||'Bài tập';return `${baseName(files[0].name)||'Bài tập'} + ${files.length-1} trang/tệp`}
async function signatureForFiles(files){const parts=[];for(const f of files){const buf=await f.arrayBuffer();const dig=await crypto.subtle.digest('SHA-256',buf);parts.push(`${f.name}|${f.size}|${f.lastModified}|${hex(dig)}`)}const all=new TextEncoder().encode(parts.join('\n'));return hex(await crypto.subtle.digest('SHA-256',all)).slice(0,32)}
function hex(buf){return [...new Uint8Array(buf)].map(b=>b.toString(16).padStart(2,'0')).join('')}
function safeFileName(name){return String(name||'Bai_lam').replace(/[<>:"/\\|?*\x00-\x1F]/g,'_').replace(/[. ]+$/,'').slice(0,180)}
function downloadBlob(blob,name){const a=document.createElement('a');const u=URL.createObjectURL(blob);a.href=u;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),3000)}
function escapeHtml(v=''){return String(v).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
function cssEscape(v){return globalThis.CSS?.escape?CSS.escape(v):String(v).replace(/[^a-zA-Z0-9_-]/g,'\\$&')}
function formatDate(ts){try{return new Intl.DateTimeFormat('vi-VN',{dateStyle:'short',timeStyle:'short'}).format(new Date(ts))}catch{return new Date(ts).toLocaleString()}}
function toolLabel(t){return({select:'Chọn',text:'Gõ chữ',pen:'Bút',highlight:'Highlight',ellipse:'Khoanh',rect:'Chữ nhật',line:'Đường',arrow:'Mũi tên',underline:'Gạch chân',eraser:'Tẩy'})[t]||t}
function errorText(e){if(!e)return'Lỗi không xác định.';if(e.name==='QuotaExceededError')return'Bộ nhớ trình duyệt đã đầy. Hãy xóa bớt project cũ hoặc xuất bài ra file.';return e.message||String(e)}
function placeCaretEnd(el){const range=document.createRange();range.selectNodeContents(el);range.collapse(false);const sel=getSelection();sel.removeAllRanges();sel.addRange(range)}
