/*
 * Bộ công cụ văn phòng cho Kanban Cá Nhân.
 * - Không đọc hoặc ghi vào khóa dữ liệu Kanban.
 * - Mọi tệp được xử lý cục bộ trong trình duyệt.
 * - Các thư viện PDF/Excel được tải lười khi người dùng mở đúng công cụ.
 */
const OFFICE_SETTINGS_KEY = 'linh_kanban_office_settings_v1';
const PINNED_LIBS = {
  pdfLib: 'https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js',
  pdfJs: 'https://unpkg.com/pdfjs-dist@4.10.38/build/pdf.min.mjs',
  pdfWorker: 'https://unpkg.com/pdfjs-dist@4.10.38/build/pdf.worker.min.mjs',
  xlsx: 'https://cdn.sheetjs.com/xlsx-0.20.3/package/dist/xlsx.full.min.js',
  jszip: new URL('./vendor/jszip.min.js', import.meta.url).href
};
const A4 = {portrait:[595.28,841.89],landscape:[841.89,595.28]};
const state = {
  tool:'pdf', sub:{pdf:'merge',image:'convert',rename:'preview',excel:'inspect'},
  pdfMergeFiles:[], pdfEdit:null, pdfSplit:null, pdfToPng:null, pdfImages:[], pdfA5File:null,
  imageFiles:[], renameEntries:[], renameRootHandle:null, excelFiles:[],
  busy:false, abort:false, settings:loadSettings()
};
let dialog, mainHost, statusText, progressFill;
let pdfjsLib = null;

init();

function init(){
  document.querySelectorAll('[data-office-tool]').forEach(btn=>btn.addEventListener('click',()=>openOffice(btn.dataset.officeTool)));
  injectDialog();
  document.addEventListener('keydown',handleOfficeKeyboard);
}
function handleOfficeKeyboard(event){
  if(!dialog?.open||state.busy)return;
  const typing=['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName)||Boolean(document.activeElement?.isContentEditable);
  if(state.tool==='pdf'&&state.sub.pdf==='edit'&&state.pdfEdit&&!typing){
    if((event.ctrlKey||event.metaKey)&&event.key.toLowerCase()==='a'){
      event.preventDefault();state.pdfEdit.pages.forEach(p=>p.selected=true);state.pdfEdit.anchorId=state.pdfEdit.pages[0]?.id||null;renderPdfTool();return;
    }
    if(event.key==='Delete'&&state.pdfEdit.pages.some(p=>p.selected)){
      event.preventDefault();deleteSelectedPdfPages();
    }
  }
}

function injectDialog(){
  dialog=document.createElement('dialog');
  dialog.id='officeToolsDialog';
  dialog.className='office-tools-dialog';
  dialog.innerHTML=`<div class="office-shell">
    <header class="office-header">
      <div class="office-title-wrap"><div class="eyebrow">BỘ CÔNG CỤ VĂN PHÒNG</div><h2 id="officeDialogTitle">Công cụ PDF</h2><p id="officeDialogDesc">Xử lý tệp trực tiếp trên máy tính.</p></div>
      <div class="office-privacy">🔒 Tệp không được tải lên máy chủ</div>
      <button class="icon-btn" id="officeCloseBtn" type="button" aria-label="Đóng" data-tooltip="Đóng bộ công cụ văn phòng">×</button>
    </header>
    <div class="office-body">
      <nav class="office-nav">
        ${navButton('pdf','PDF','Tách, ghép, xoay PDF')}
        ${navButton('image','IMG','Xử lý hình ảnh')}
        ${navButton('rename','Rename','Đổi tên hàng loạt')}
        ${navButton('excel','Excel','Đọc và gộp Excel')}
      </nav>
      <main class="office-main" id="officeMain"></main>
    </div>
    <footer class="office-status-bar">
      <div class="office-progress-wrap"><div class="office-status-text" id="officeStatus">Sẵn sàng.</div><div class="office-progress"><i id="officeProgressFill"></i></div></div>
      <div class="office-footer-actions"><button class="office-btn" id="officeCancelBtn" type="button" disabled>Hủy tác vụ</button><button class="office-btn primary" id="officeDoneBtn" type="button">Đóng</button></div>
    </footer>
  </div>`;
  document.body.appendChild(dialog);
  mainHost=dialog.querySelector('#officeMain'); statusText=dialog.querySelector('#officeStatus'); progressFill=dialog.querySelector('#officeProgressFill');
  dialog.querySelector('#officeCloseBtn').addEventListener('click',closeOffice);
  dialog.querySelector('#officeDoneBtn').addEventListener('click',closeOffice);
  dialog.querySelector('#officeCancelBtn').addEventListener('click',()=>{state.abort=true;setStatus('Đang hủy tác vụ…');});
  dialog.querySelectorAll('[data-office-nav]').forEach(btn=>btn.addEventListener('click',()=>switchTool(btn.dataset.officeNav)));
  dialog.addEventListener('close',cleanupTransient);
}

function navButton(id,label,title){return `<button type="button" data-office-nav="${id}" title="${escapeHtml(title)}"><span class="office-btn-mark">${label}</span><span>${label}</span></button>`;}

function openOffice(tool='pdf'){
  state.tool=['pdf','image','rename','excel'].includes(tool)?tool:'pdf';
  if(!dialog.open) dialog.showModal();
  renderTool();
}
function closeOffice(){ if(state.busy){setStatus('Hãy hủy hoặc chờ tác vụ đang chạy hoàn tất.');return;} dialog.close(); }
function switchTool(tool){ if(state.busy)return; state.tool=tool; renderTool(); }
function renderTool(){
  dialog.querySelectorAll('[data-office-nav]').forEach(btn=>btn.classList.toggle('active',btn.dataset.officeNav===state.tool));
  const meta={pdf:['Công cụ PDF','Gộp, chuẩn hóa kích thước, sắp xếp, xoay, tách và chuyển trang PDF.'],image:['Công cụ hình ảnh','Chuyển đổi, resize, xoay, lật, ghép và đóng dấu ảnh.'],rename:['Đổi tên hàng loạt','Xem trước tên mới trước khi tạo bản sao hoặc đổi tên tại chỗ.'],excel:['Công cụ Excel','Đọc giá trị/công thức, xuất JSON và gộp sheet hoặc workbook.']}[state.tool];
  dialog.querySelector('#officeDialogTitle').textContent=meta[0];dialog.querySelector('#officeDialogDesc').textContent=meta[1];
  if(state.tool==='pdf')renderPdfTool(); if(state.tool==='image')renderImageTool(); if(state.tool==='rename')renderRenameTool(); if(state.tool==='excel')renderExcelTool();
  setStatus('Sẵn sàng.',0);
}
function cleanupTransient(){ state.abort=false; revokeAllPreviews(); }
function revokeAllPreviews(){ document.querySelectorAll('[data-object-url]').forEach(el=>{try{URL.revokeObjectURL(el.dataset.objectUrl)}catch{};}); }

// ===== HẠ TẦNG CHUNG =====
function loadSettings(){try{return {...{pdfNormalize:'keep',imageQuality:90},...JSON.parse(localStorage.getItem(OFFICE_SETTINGS_KEY)||'{}')}}catch{return {pdfNormalize:'keep',imageQuality:90}}}
function saveSettings(){localStorage.setItem(OFFICE_SETTINGS_KEY,JSON.stringify(state.settings));}
function loadClassicScript(src,globalName){
  if(globalThis[globalName])return Promise.resolve(globalThis[globalName]);
  return new Promise((resolve,reject)=>{const old=document.querySelector(`script[data-office-lib="${globalName}"]`);if(old){old.addEventListener('load',()=>resolve(globalThis[globalName]),{once:true});old.addEventListener('error',reject,{once:true});return;}const s=document.createElement('script');s.src=src;s.async=true;s.dataset.officeLib=globalName;s.onload=()=>resolve(globalThis[globalName]);s.onerror=()=>reject(new Error(`Không tải được thư viện ${globalName}. Kiểm tra kết nối Internet rồi thử lại.`));document.head.appendChild(s);});
}
async function ensurePdfLib(){return await loadClassicScript(PINNED_LIBS.pdfLib,'PDFLib');}
async function ensurePdfJs(){if(pdfjsLib)return pdfjsLib;try{pdfjsLib=await import(PINNED_LIBS.pdfJs);pdfjsLib.GlobalWorkerOptions.workerSrc=PINNED_LIBS.pdfWorker;return pdfjsLib}catch(e){throw new Error('Không tải được bộ hiển thị PDF.js. Kiểm tra kết nối Internet rồi thử lại.');}}
async function ensureXlsx(){return await loadClassicScript(PINNED_LIBS.xlsx,'XLSX');}
async function ensureZip(){return await loadClassicScript(PINNED_LIBS.jszip,'JSZip');}
function startBusy(text){state.busy=true;state.abort=false;dialog.querySelector('#officeCancelBtn').disabled=false;setStatus(text,1)}
function endBusy(text='Hoàn thành.'){state.busy=false;dialog.querySelector('#officeCancelBtn').disabled=true;setStatus(text,100)}
function setStatus(text,percent){statusText.textContent=text;if(Number.isFinite(percent))progressFill.style.width=`${Math.max(0,Math.min(100,percent))}%`;}
function assertNotAborted(){if(state.abort)throw new DOMException('Tác vụ đã được hủy.','AbortError');}
function formatBytes(n=0){if(n<1024)return `${n} B`;if(n<1048576)return `${(n/1024).toFixed(1)} KB`;if(n<1073741824)return `${(n/1048576).toFixed(1)} MB`;return `${(n/1073741824).toFixed(2)} GB`;}
function escapeHtml(v=''){return String(v).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}
function safeName(name,ext=''){let base=String(name||'ket-qua').replace(/[<>:"/\\|?*\x00-\x1F]/g,'_').replace(/[. ]+$/g,'').trim()||'ket-qua';if(ext&&!base.toLowerCase().endsWith(ext.toLowerCase()))base+=ext;return base.slice(0,180);}
// Giữ cấu trúc thư mục trong ZIP nhưng làm sạch từng đoạn tên để tránh đường dẫn nguy hiểm.
function safeZipPath(path){return String(path||'ket-qua').replace(/\\/g,'/').split('/').filter(part=>part&&part!=='.'&&part!=='..').map(part=>safeName(part)).join('/')||'ket-qua';}
function baseName(name){return name.replace(/\.[^.]+$/,'')}
function fileExt(name){const m=name.match(/(\.[^.]+)$/);return m?m[1].toLowerCase():''}
function uid(){return globalThis.crypto?.randomUUID?.()||`${Date.now()}-${Math.random().toString(16).slice(2)}`}
function sleep(){return new Promise(r=>setTimeout(r,0))}
function fileInput(accept,multiple=true,directory=false){return new Promise(resolve=>{const input=document.createElement('input');input.type='file';input.accept=accept||'';input.multiple=multiple;if(directory){input.webkitdirectory=true;input.setAttribute('directory','');}input.onchange=()=>resolve([...input.files]);input.click();});}
async function saveBlob(blob,name,description='Tệp kết quả'){
  const filename=safeName(name);
  if('showSaveFilePicker'in window){try{const handle=await showSaveFilePicker({suggestedName:filename,types:[{description,accept:{[blob.type||'application/octet-stream']:[fileExt(filename)||'.bin']}}]});const writable=await handle.createWritable();await writable.write(blob);await writable.close();return;}catch(e){if(e.name==='AbortError')return;}}
  const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=filename;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),2500);
}
async function downloadZip(items,name){const JSZip=await ensureZip();const zip=new JSZip();items.forEach(item=>zip.file(safeZipPath(item.name),item.blob));const blob=await zip.generateAsync({type:'blob',compression:'DEFLATE',compressionOptions:{level:6}},m=>setStatus(`Đang đóng gói ZIP… ${Math.round(m.percent)}%`,m.percent));await saveBlob(blob,safeName(name,'.zip'),'Tệp ZIP');}
function bindDropzone(zone,acceptFn,onFiles){zone.addEventListener('click',()=>zone.querySelector('input[type=file]')?.click());zone.addEventListener('dragover',e=>{e.preventDefault();zone.classList.add('dragover')});zone.addEventListener('dragleave',()=>zone.classList.remove('dragover'));zone.addEventListener('drop',e=>{e.preventDefault();zone.classList.remove('dragover');const files=[...e.dataTransfer.files].filter(acceptFn);if(files.length)onFiles(files)});}
function listRows(items,detailsFn,removeFn,reorderFn){if(!items.length)return '<div class="office-empty">Chưa có tệp nào.</div>';return `<div class="office-file-list">${items.map((it,i)=>`<div class="office-file-row" data-id="${it.id}" draggable="true"><span>⋮⋮</span><div class="office-file-meta"><div class="office-file-name">${escapeHtml(it.file?.name||it.name)}</div><div class="office-file-detail">${escapeHtml(detailsFn(it,i)||'')}</div></div><div class="office-row-actions"><button class="office-mini-btn" type="button" data-up="${it.id}" title="Lên">↑</button><button class="office-mini-btn" type="button" data-down="${it.id}" title="Xuống">↓</button><button class="office-mini-btn" type="button" data-remove="${it.id}" title="Bỏ khỏi danh sách">×</button></div></div>`).join('')}</div>`;}
function bindListActions(host,items,onChange){host.querySelectorAll('[data-remove]').forEach(b=>b.onclick=()=>{const i=items.findIndex(x=>x.id===b.dataset.remove);if(i>=0)items.splice(i,1);onChange()});host.querySelectorAll('[data-up]').forEach(b=>b.onclick=()=>moveItem(items,b.dataset.up,-1,onChange));host.querySelectorAll('[data-down]').forEach(b=>b.onclick=()=>moveItem(items,b.dataset.down,1,onChange));let dragId=null;host.querySelectorAll('.office-file-row').forEach(row=>{row.addEventListener('dragstart',e=>{if(e.target.closest('button')){e.preventDefault();return}dragId=row.dataset.id;e.dataTransfer.effectAllowed='move';row.classList.add('dragging')});row.addEventListener('dragend',()=>row.classList.remove('dragging'));row.addEventListener('dragover',e=>{e.preventDefault();row.classList.add('drop-target')});row.addEventListener('dragleave',()=>row.classList.remove('drop-target'));row.addEventListener('drop',e=>{e.preventDefault();row.classList.remove('drop-target');const from=items.findIndex(x=>x.id===dragId),to=items.findIndex(x=>x.id===row.dataset.id);if(from<0||to<0||from===to)return;const [m]=items.splice(from,1);items.splice(from<to?to-1:to,0,m);onChange()})});}
function moveItem(items,id,delta,onChange){const i=items.findIndex(x=>x.id===id),j=i+delta;if(i<0||j<0||j>=items.length)return;[items[i],items[j]]=[items[j],items[i]];onChange();}
function switchSub(tool,sub){state.sub[tool]=sub;if(tool==='pdf')renderPdfTool();if(tool==='image')renderImageTool();if(tool==='rename')renderRenameTool();if(tool==='excel')renderExcelTool();}
function subTabs(tool,tabs){return `<div class="office-subtabs">${tabs.map(([id,label])=>`<button class="office-subtab ${state.sub[tool]===id?'active':''}" type="button" data-sub="${id}">${label}</button>`).join('')}</div>`}
function bindSubtabs(tool){mainHost.querySelectorAll('[data-sub]').forEach(b=>b.onclick=()=>switchSub(tool,b.dataset.sub));}
function showError(error){console.error(error);endBusy(error?.name==='AbortError'?'Đã hủy tác vụ.':`Lỗi: ${error?.message||error}`);}

// ===== PDF =====
const PDF_SUB_TOOLTIPS={
  merge:'Gộp nhiều file PDF theo đúng thứ tự danh sách; có thể chuẩn hóa kích thước trang.',
  edit:'Sắp xếp lại trang, xoay riêng từng trang, nhân bản, trích xuất hoặc xóa trang.',
  a5:'Lấy nửa trên của mỗi trang A4 dọc và tạo thành trang A5 ngang.',
  split:'Tách một PDF thành từng trang, trang lẻ/chẵn hoặc các khoảng trang tùy chọn.',
  png:'Chuyển các trang PDF thành ảnh PNG theo độ phân giải đã chọn.',
  images:'Gộp nhiều ảnh JPG/PNG/WebP thành một file PDF.'
};
const PDF_CONTROL_TOOLTIPS={
  pdfMergeDrop:'Kéo thả hoặc chọn nhiều file PDF. Thứ tự đang hiển thị chính là thứ tự file sau khi gộp.',
  pdfMergeAdd:'Thêm PDF vào cuối danh sách hiện tại.',
  pdfMergeSort:'Sắp xếp danh sách PDF theo tên từ A đến Z.',
  pdfMergeClear:'Bỏ toàn bộ file khỏi danh sách gộp; không xóa file gốc trên máy.',
  pdfNormalize:'Chọn cách đưa các trang khác kích thước về cùng một chuẩn khi gộp.',
  pdfMargin:'Chỉ áp dụng khi chọn chuẩn A4; tạo khoảng trắng quanh nội dung để tránh sát mép.',
  pdfMergeName:'Tên file PDF mới sẽ lưu về máy.',
  pdfMergeRun:'Bắt đầu gộp các PDF theo thứ tự và chế độ đã chọn.',
  pdfEditBrowse:'Chọn một PDF để xem thumbnail, sắp xếp và xoay từng trang.',
  pdfSelectAll:'Chọn tất cả trang để thao tác cùng lúc.',
  pdfMoveTop:'Đưa toàn bộ trang đang chọn lên đầu tài liệu.',
  pdfMoveBottom:'Đưa toàn bộ trang đang chọn xuống cuối tài liệu.',
  pdfRotateLeft:'Xoay các trang đang chọn 90° sang trái.',
  pdfRotateRight:'Xoay các trang đang chọn 90° sang phải.',
  pdfDuplicatePages:'Tạo thêm một bản sao của các trang đang chọn ngay sau trang gốc.',
  pdfExtractPages:'Tạo một PDF mới chỉ gồm các trang đang chọn.',
  pdfDeletePages:'Bỏ các trang đang chọn khỏi bản PDF mới; file gốc trên máy không bị xóa.',
  pdfEditName:'Tên file PDF sau khi sắp xếp/xoay.',
  pdfEditExport:'Xuất một PDF mới đúng theo thứ tự và chiều đang thấy ở thumbnail.',
  pdfA5Drop:'Chọn một PDF có các trang A4 dọc; mỗi trang sẽ lấy nửa trên để tạo A5 ngang.',
  pdfA5Browse:'Chọn file PDF A4 dọc cần chuyển.',
  pdfA5Part:'Hiện dùng đúng chế độ nửa trên như file Python mẫu.',
  pdfA5Name:'Tên file PDF A5 ngang sau khi chuyển.',
  pdfA5Run:'Chuyển mỗi trang A4 dọc thành một trang A5 ngang mà không raster hóa nội dung.',
  pdfSplitFile:'Chọn PDF cần tách.',
  pdfSplitMode:'Chọn cách tách: từng trang, trang lẻ, trang chẵn hoặc khoảng trang tự nhập.',
  pdfSplitRanges:'Nhập các khoảng trang, ví dụ 1-3,5,8-10.',
  pdfSplitRun:'Bắt đầu tách; nếu tạo nhiều file, kết quả sẽ được đóng thành ZIP.',
  pdfPngFile:'Chọn PDF cần chuyển thành ảnh PNG.',
  pdfPngDpi:'DPI càng cao ảnh càng rõ nhưng file lớn và xử lý chậm hơn. 200 DPI phù hợp đa số nhu cầu.',
  pdfPngPages:'Để trống để xuất tất cả trang; hoặc nhập 1-3,5 để chỉ xuất các trang đó.',
  pdfPngRun:'Render các trang được chọn thành PNG.',
  pdfImageDrop:'Chọn hoặc kéo thả nhiều ảnh để tạo một PDF.',
  pdfImageAdd:'Thêm ảnh vào danh sách hiện tại.',
  pdfImageClear:'Bỏ toàn bộ ảnh khỏi danh sách; không xóa ảnh gốc.',
  pdfImageMode:'Chọn kích thước trang PDF: theo ảnh gốc, A4 dọc/ngang hoặc vừa bề ngang A4.',
  pdfImageMargin:'Khoảng trắng bao quanh ảnh khi đặt vào trang A4.',
  pdfImageName:'Tên file PDF được tạo từ ảnh.',
  pdfImageRun:'Tạo PDF theo đúng thứ tự ảnh hiện tại.'
};
function applyPdfTooltips(){
  mainHost.querySelectorAll('[data-sub]').forEach(el=>{
    const tip=PDF_SUB_TOOLTIPS[el.dataset.sub];
    if(tip){el.dataset.tooltip=tip;el.title=tip}
  });
  Object.entries(PDF_CONTROL_TOOLTIPS).forEach(([id,tip])=>{
    const el=mainHost.querySelector('#'+id);
    if(el){el.dataset.tooltip=tip;el.title=tip}
  });
  mainHost.querySelectorAll('.office-page-actions button').forEach(el=>{
    const tip=el.title||'Di chuyển trang trong tài liệu';
    el.dataset.tooltip=tip;
  });
}
function renderPdfTool(){
  const tabs=[['merge','Gộp PDF'],['edit','Sắp xếp & xoay trang'],['a5','A4 → A5 ngang'],['split','Tách PDF'],['png','PDF → PNG'],['images','Ảnh → PDF']];
  mainHost.innerHTML=`<section class="office-tool-panel active"><div class="office-tool-head"><div><h3>PDF</h3><p>Gộp, chuẩn hóa bề ngang, sắp xếp, xoay riêng từng trang, tách trang và chuyển đổi PDF.</p></div></div>${subTabs('pdf',tabs)}<div id="pdfSubHost"></div><div class="office-warning">PDF có chữ ký số có thể mất hiệu lực sau khi chỉnh sửa. Phiên bản này không OCR, không chỉnh trực tiếp chữ có sẵn và không mở PDF được bảo vệ bằng mật khẩu.</div><div class="office-library-warning">Các thư viện PDF được tải theo phiên bản cố định khi mở công cụ lần đầu; tệp của bạn vẫn chỉ được xử lý trong trình duyệt.</div></section>`;
  bindSubtabs('pdf'); const h=mainHost.querySelector('#pdfSubHost');
  if(state.sub.pdf==='merge')renderPdfMerge(h);if(state.sub.pdf==='edit')renderPdfEdit(h);if(state.sub.pdf==='a5')renderPdfA4ToA5(h);if(state.sub.pdf==='split')renderPdfSplit(h);if(state.sub.pdf==='png')renderPdfPng(h);if(state.sub.pdf==='images')renderPdfImages(h);
  applyPdfTooltips();
}
function renderPdfMerge(h){h.innerHTML=`<div class="office-card"><h4>Gộp nhiều PDF</h4><p class="office-card-note">Chọn nhiều file, sắp xếp thứ tự rồi chọn cách chuẩn hóa kích thước trang. Chế độ đồng nhất bề ngang giữ đúng tỷ lệ, không làm méo nội dung.</p><div class="office-dropzone" id="pdfMergeDrop"><strong>Browse hoặc kéo thả nhiều file PDF</strong><span>Thứ tự trong danh sách là thứ tự gộp.</span><input type="file" accept="application/pdf,.pdf" multiple hidden></div><div class="office-toolbar"><button class="office-btn" id="pdfMergeAdd">Chọn thêm PDF</button><button class="office-btn" id="pdfMergeSort">Sắp xếp A–Z</button><button class="office-btn danger" id="pdfMergeClear">Xóa danh sách</button></div><div id="pdfMergeList"></div></div><div class="office-card"><div class="office-grid three"><label class="office-field" id="pdfNormalizeField"><span>Chuẩn hóa trang</span><select id="pdfNormalize"><option value="keep">Giữ nguyên từng trang</option><option value="first-width">Đồng nhất bề ngang theo trang đầu</option><option value="widest">Đồng nhất bề ngang theo trang rộng nhất</option><option value="a4p">Chuẩn A4 dọc</option><option value="a4l">Chuẩn A4 ngang</option></select><small id="pdfNormalizeHelp" class="office-field-help"></small></label><label class="office-field"><span>Lề A4</span><select id="pdfMargin"><option value="0">0 mm</option><option value="5">5 mm</option><option value="10">10 mm</option><option value="15">15 mm</option></select></label><label class="office-field"><span>Tên file đầu ra</span><input id="pdfMergeName" value="PDF_da_gop.pdf"></label></div><div class="office-toolbar"><span class="spacer"></span><button class="office-btn primary" id="pdfMergeRun" ${state.pdfMergeFiles.length?'':'disabled'}>Gộp PDF</button></div></div>`;
  h.querySelector('#pdfNormalize').value=state.settings.pdfNormalize||'keep';
  const add=files=>{state.pdfMergeFiles.push(...files.filter(f=>f.type==='application/pdf'||/\.pdf$/i.test(f.name)).map(file=>({id:uid(),file})));renderPdfTool()};
  bindDropzone(h.querySelector('#pdfMergeDrop'),f=>/\.pdf$/i.test(f.name),add);h.querySelector('#pdfMergeDrop input').onchange=e=>add([...e.target.files]);h.querySelector('#pdfMergeAdd').onclick=async()=>add(await fileInput('.pdf,application/pdf',true));h.querySelector('#pdfMergeSort').onclick=()=>{state.pdfMergeFiles.sort((a,b)=>a.file.name.localeCompare(b.file.name,'vi'));renderPdfTool()};h.querySelector('#pdfMergeClear').onclick=()=>{state.pdfMergeFiles=[];renderPdfTool()};
  const list=h.querySelector('#pdfMergeList');list.innerHTML=listRows(state.pdfMergeFiles,it=>formatBytes(it.file.size));bindListActions(list,state.pdfMergeFiles,renderPdfTool);
  const norm=h.querySelector('#pdfNormalize'),normHelp=h.querySelector('#pdfNormalizeHelp');
  const syncNormHelp=()=>{const map={
    'keep':'Giữ nguyên đúng kích thước từng trang. File gộp có thể gồm trang rộng/hẹp khác nhau.',
    'first-width':'Lấy bề ngang của trang đầu làm chuẩn; các trang sau co/giãn đồng tỷ lệ theo bề ngang đó.',
    'widest':'Lấy trang rộng nhất làm chuẩn; các trang hẹp hơn được phóng đồng tỷ lệ để cùng bề ngang.',
    'a4p':'Đưa nội dung vào khổ A4 dọc 210 × 297 mm, giữ đúng tỷ lệ và căn giữa.',
    'a4l':'Đưa nội dung vào khổ A4 ngang 297 × 210 mm, giữ đúng tỷ lệ và căn giữa.'
  };normHelp.textContent=map[norm.value]||'';norm.dataset.tooltip=map[norm.value]||'';norm.title=map[norm.value]||'';};
  norm.onchange=e=>{state.settings.pdfNormalize=e.target.value;saveSettings();syncNormHelp()};syncNormHelp();
  h.querySelector('#pdfMergeRun').onclick=runPdfMerge;
}
async function runPdfMerge(){try{startBusy('Đang đọc các file PDF…');const {PDFDocument}=await ensurePdfLib();const mode=mainHost.querySelector('#pdfNormalize').value;const marginMm=Number(mainHost.querySelector('#pdfMargin').value||0);const loaded=[];let total=0;for(let i=0;i<state.pdfMergeFiles.length;i++){assertNotAborted();const bytes=await state.pdfMergeFiles[i].file.arrayBuffer();const doc=await PDFDocument.load(bytes,{ignoreEncryption:false});loaded.push({doc,file:state.pdfMergeFiles[i].file});total+=doc.getPageCount();setStatus(`Đang đọc PDF ${i+1}/${state.pdfMergeFiles.length}`,Math.round((i+1)/state.pdfMergeFiles.length*20));}
  const firstSize=loaded[0].doc.getPages()[0].getSize();let widest=firstSize.width;if(mode==='widest')loaded.forEach(x=>x.doc.getPages().forEach(p=>widest=Math.max(widest,p.getWidth())));const out=await PDFDocument.create();let done=0;
  for(const item of loaded){for(let i=0;i<item.doc.getPageCount();i++){assertNotAborted();const src=item.doc.getPage(i);if(mode==='keep'){const [copied]=await out.copyPages(item.doc,[i]);out.addPage(copied);}else{const embedded=await out.embedPage(src);const sw=src.getWidth(),sh=src.getHeight();let tw,th,scale,x=0,y=0;if(mode==='first-width'||mode==='widest'){tw=mode==='first-width'?firstSize.width:widest;scale=tw/sw;th=sh*scale;}else{[tw,th]=mode==='a4l'?A4.landscape:A4.portrait;const margin=marginMm*72/25.4;scale=Math.min((tw-2*margin)/sw,(th-2*margin)/sh);x=(tw-sw*scale)/2;y=(th-sh*scale)/2;}const page=out.addPage([tw,th]);page.drawPage(embedded,{x,y,width:sw*scale,height:sh*scale});}done++;setStatus(`Đang gộp trang ${done}/${total}`,20+Math.round(done/total*75));await sleep();}}
  const bytes=await out.save({useObjectStreams:true});const name=mainHost.querySelector('#pdfMergeName').value||'PDF_da_gop.pdf';await saveBlob(new Blob([bytes],{type:'application/pdf'}),safeName(name,'.pdf'),'PDF');endBusy(`Đã gộp ${total} trang PDF.`);}catch(e){showError(e)}}

function renderPdfA4ToA5(h){
  h.innerHTML=`<div class="office-card">
    <h4>A4 dọc → A5 ngang</h4>
    <p class="office-card-note">Dành cho mẫu PDF có nội dung nằm ở nửa trên của trang A4 dọc. Mỗi trang A4 tạo thành 1 trang A5 ngang bằng cách lấy đúng nửa trên, không chuyển thành ảnh.</p>
    <div class="office-dropzone" id="pdfA5Drop">
      <strong>Browse hoặc kéo thả một file PDF A4 dọc</strong>
      <span>Lấy nửa trên của từng trang và giữ nguyên chất lượng vector/chữ.</span>
      <input type="file" accept=".pdf,application/pdf" hidden>
    </div>
    <div class="office-toolbar">
      <button class="office-btn" id="pdfA5Browse">Chọn PDF</button>
      ${state.pdfA5File?`<strong>${escapeHtml(state.pdfA5File.name)}</strong><span class="office-card-note">${formatBytes(state.pdfA5File.size)}</span>`:''}
    </div>
  </div>
  <div class="office-card">
    <div class="office-grid">
      <label class="office-field">
        <span>Phần trang được giữ</span>
        <select id="pdfA5Part"><option value="top" selected>Nửa trên trang A4</option></select>
        <small class="office-field-help">Đúng theo công cụ Python mẫu: phần dưới của trang A4 sẽ bị loại bỏ.</small>
      </label>
      <label class="office-field">
        <span>Tên file đầu ra</span>
        <input id="pdfA5Name" value="${state.pdfA5File?escapeHtml(baseName(state.pdfA5File.name)+'_A5_ngang.pdf'):'PDF_A5_ngang.pdf'}">
      </label>
    </div>
    <div class="office-a5-diagram" data-tooltip="Trang A4 dọc được cắt theo đường ngang giữa trang; nửa trên trở thành một trang A5 ngang mới.">
      <div class="office-a4-sheet"><span>NỬA TRÊN<br><b>GIỮ LẠI</b></span><i></i><span>NỬA DƯỚI<br><b>LOẠI BỎ</b></span></div>
      <b>→</b>
      <div class="office-a5-sheet">A5 NGANG</div>
    </div>
    <div class="office-toolbar">
      <span class="office-card-note">Yêu cầu: mỗi trang đầu vào phải là trang dọc. Nội dung không bị raster hóa.</span>
      <span class="spacer"></span>
      <button class="office-btn primary" id="pdfA5Run" ${state.pdfA5File?'':'disabled'}>Chuyển sang A5 ngang</button>
    </div>
  </div>`;
  const setFile=file=>{if(file&&(/\.pdf$/i.test(file.name)||file.type==='application/pdf')){state.pdfA5File=file;renderPdfTool()}};
  bindDropzone(h.querySelector('#pdfA5Drop'),f=>/\.pdf$/i.test(f.name),files=>setFile(files[0]));
  h.querySelector('#pdfA5Drop input').onchange=e=>setFile(e.target.files?.[0]);
  h.querySelector('#pdfA5Browse').onclick=async()=>{const [file]=await fileInput('.pdf,application/pdf',false);setFile(file)};
  h.querySelector('#pdfA5Run').onclick=runPdfA4ToA5;
}
async function runPdfA4ToA5(){
  try{
    const file=state.pdfA5File;
    if(!file)throw new Error('Hãy chọn một file PDF A4 dọc.');
    startBusy('Đang chuyển A4 sang A5 ngang…');
    const {PDFDocument}=await ensurePdfLib();
    const src=await PDFDocument.load(await file.arrayBuffer(),{ignoreEncryption:false});
    const out=await PDFDocument.create();
    const pageCount=src.getPageCount();
    for(let i=0;i<pageCount;i++){
      assertNotAborted();
      const page=src.getPage(i);
      const sw=page.getWidth(),sh=page.getHeight();
      if(sw>=sh)throw new Error(`Trang ${i+1} không phải trang dọc (${Math.round(sw)} × ${Math.round(sh)} pt).`);
      const half=sh/2;
      // PDF dùng gốc tọa độ ở góc dưới trái: vùng nửa trên nằm từ y=half đến y=sh.
      const embedded=await out.embedPage(page,{left:0,bottom:half,right:sw,top:sh});
      const outPage=out.addPage([sw,half]);
      outPage.drawPage(embedded,{x:0,y:0,width:sw,height:half});
      setStatus(`Đang chuyển trang ${i+1}/${pageCount}`,Math.round((i+1)/pageCount*95));
      await sleep();
    }
    const bytes=await out.save({useObjectStreams:true});
    const name=mainHost.querySelector('#pdfA5Name').value||`${baseName(file.name)}_A5_ngang.pdf`;
    await saveBlob(new Blob([bytes],{type:'application/pdf'}),safeName(name,'.pdf'),'PDF A5 ngang');
    endBusy(`Đã chuyển ${pageCount} trang sang A5 ngang.`);
  }catch(e){showError(e)}
}

function renderPdfEdit(h){h.innerHTML=`<div class="office-card"><h4>Sắp xếp và xoay trang trong một PDF</h4><p class="office-card-note">Kéo thả thumbnail để đổi thứ tự. Hình xem trước giữ đúng tỷ lệ và đúng chiều sẽ xuất ra. Ctrl+click chọn rời rạc, Shift+click chọn liên tục, Ctrl+A chọn tất cả; Delete xóa trang đang chọn.</p><div class="office-toolbar"><button class="office-btn" id="pdfEditBrowse">Browse một PDF</button>${state.pdfEdit?`<strong>${escapeHtml(state.pdfEdit.file.name)}</strong>`:''}<span class="spacer"></span><button class="office-btn" id="pdfSelectAll" ${state.pdfEdit?'':'disabled'}>Chọn tất cả</button><button class="office-btn" id="pdfMoveTop" ${state.pdfEdit?'':'disabled'}>Lên đầu</button><button class="office-btn" id="pdfMoveBottom" ${state.pdfEdit?'':'disabled'}>Xuống cuối</button><button class="office-btn" id="pdfRotateLeft" ${state.pdfEdit?'':'disabled'}>↶ Xoay trái</button><button class="office-btn" id="pdfRotateRight" ${state.pdfEdit?'':'disabled'}>↷ Xoay phải</button><button class="office-btn" id="pdfDuplicatePages" ${state.pdfEdit?'':'disabled'}>Nhân bản</button><button class="office-btn" id="pdfExtractPages" ${state.pdfEdit?'':'disabled'}>Trích xuất</button><button class="office-btn danger" id="pdfDeletePages" ${state.pdfEdit?'':'disabled'}>Xóa trang</button></div><div id="pdfPages" class="office-pages">${state.pdfEdit?'<div class="office-empty">Đang chờ hiển thị thumbnail…</div>':'<div class="office-empty">Chưa chọn PDF.</div>'}</div><div class="office-toolbar"><label class="office-field" style="min-width:260px"><span>Tên file đầu ra</span><input id="pdfEditName" value="${state.pdfEdit?escapeHtml(baseName(state.pdfEdit.file.name)+'_da_sap_xep.pdf'):'PDF_da_sap_xep.pdf'}"></label><span class="spacer"></span><button class="office-btn primary" id="pdfEditExport" ${state.pdfEdit?'':'disabled'}>Xuất PDF mới</button></div></div>`;
  h.querySelector('#pdfEditBrowse').onclick=async()=>{const [file]=await fileInput('.pdf,application/pdf',false);if(file)await loadPdfEditor(file)};if(state.pdfEdit)renderPdfPageCards(h.querySelector('#pdfPages'));
  h.querySelector('#pdfSelectAll').onclick=()=>{state.pdfEdit.pages.forEach(p=>p.selected=true);state.pdfEdit.anchorId=state.pdfEdit.pages[0]?.id||null;renderPdfTool()};h.querySelector('#pdfMoveTop').onclick=()=>moveSelectedPdfPages('top');h.querySelector('#pdfMoveBottom').onclick=()=>moveSelectedPdfPages('bottom');h.querySelector('#pdfRotateLeft').onclick=()=>editSelectedPages(p=>p.rotation=normalizePdfRotation(p.rotation-90));h.querySelector('#pdfRotateRight').onclick=()=>editSelectedPages(p=>p.rotation=normalizePdfRotation(p.rotation+90));h.querySelector('#pdfDuplicatePages').onclick=duplicateSelectedPdfPages;h.querySelector('#pdfExtractPages').onclick=extractSelectedPdfPages;h.querySelector('#pdfDeletePages').onclick=deleteSelectedPdfPages;h.querySelector('#pdfEditExport').onclick=exportEditedPdf;
}
function normalizePdfRotation(value){const n=((Number(value)||0)%360+360)%360;return Math.round(n/90)*90%360}async function loadPdfEditor(file){try{startBusy('Đang đọc các trang PDF…');const lib=await ensurePdfJs();const data=new Uint8Array(await file.arrayBuffer());const doc=await lib.getDocument({data}).promise;const pages=[];for(let i=0;i<doc.numPages;i++){assertNotAborted();const pdfPage=await doc.getPage(i+1);const originalRotation=normalizePdfRotation(pdfPage.rotate||0);pages.push({id:uid(),sourceIndex:i,originalRotation,rotation:originalRotation,selected:false});setStatus(`Đang đọc trang ${i+1}/${doc.numPages}`,Math.round((i+1)/doc.numPages*95));}state.pdfEdit={file,data,doc,anchorId:null,dragId:null,pages};endBusy(`Đã đọc ${doc.numPages} trang.`);renderPdfTool();}catch(e){showError(e)}}
function renderPdfPageCards(host){host.innerHTML='';state.pdfEdit.pages.forEach((page,i)=>{const card=document.createElement('article');card.className=`office-page-card ${page.selected?'selected':''}`;card.dataset.id=page.id;card.draggable=true;card.tabIndex=0;card.innerHTML=`<div class="office-page-preview"><canvas></canvas></div><div class="office-page-label">Trang ${i+1}${page.rotation?` · góc ${page.rotation}°`:''}</div><div class="office-page-actions"><button class="office-mini-btn" data-page-up="${page.id}" title="Lên một vị trí">↑</button><button class="office-mini-btn" data-page-down="${page.id}" title="Xuống một vị trí">↓</button></div>`;card.onclick=e=>{if(e.target.closest('button'))return;handlePdfPageClick(e,page)};card.ondragstart=e=>{state.pdfEdit.dragId=page.id;e.dataTransfer.effectAllowed='move';e.dataTransfer.setData('text/plain',page.id);card.classList.add('dragging')};card.ondragend=()=>card.classList.remove('dragging');card.ondragover=e=>{e.preventDefault();e.dataTransfer.dropEffect='move';card.classList.add('drop-target')};card.ondragleave=()=>card.classList.remove('drop-target');card.ondrop=e=>{e.preventDefault();card.classList.remove('drop-target');reorderPdfPage(state.pdfEdit.dragId||e.dataTransfer.getData('text/plain'),page.id)};host.appendChild(card);renderPageThumbnail(page,card.querySelector('canvas'));});host.querySelectorAll('[data-page-up]').forEach(b=>b.onclick=()=>movePdfPage(b.dataset.pageUp,-1));host.querySelectorAll('[data-page-down]').forEach(b=>b.onclick=()=>movePdfPage(b.dataset.pageDown,1));}
function handlePdfPageClick(event,page){const pages=state.pdfEdit.pages;if(event.shiftKey&&state.pdfEdit.anchorId){const a=pages.findIndex(p=>p.id===state.pdfEdit.anchorId),b=pages.findIndex(p=>p.id===page.id);if(a>=0&&b>=0){pages.forEach(p=>p.selected=false);pages.slice(Math.min(a,b),Math.max(a,b)+1).forEach(p=>p.selected=true)}}else if(event.ctrlKey||event.metaKey){page.selected=!page.selected;state.pdfEdit.anchorId=page.id}else{pages.forEach(p=>p.selected=false);page.selected=true;state.pdfEdit.anchorId=page.id}renderPdfPageCards(mainHost.querySelector('#pdfPages'))}
async function renderPageThumbnail(item,canvas){try{const page=await state.pdfEdit.doc.getPage(item.sourceIndex+1);const v=page.getViewport({scale:.28,rotation:item.rotation});canvas.width=v.width;canvas.height=v.height;await page.render({canvasContext:canvas.getContext('2d'),viewport:v}).promise}catch{}}
function reorderPdfPage(dragId,targetId){if(!dragId||dragId===targetId)return;const a=state.pdfEdit.pages,from=a.findIndex(p=>p.id===dragId),to=a.findIndex(p=>p.id===targetId);if(from<0||to<0)return;const [moved]=a.splice(from,1);a.splice(from<to?to-1:to,0,moved);renderPdfTool()}
function movePdfPage(id,d){const a=state.pdfEdit.pages,i=a.findIndex(p=>p.id===id),j=i+d;if(j<0||j>=a.length)return;[a[i],a[j]]=[a[j],a[i]];renderPdfTool()}
function moveSelectedPdfPages(where){const selected=state.pdfEdit.pages.filter(p=>p.selected),other=state.pdfEdit.pages.filter(p=>!p.selected);if(!selected.length)return setStatus('Hãy chọn ít nhất một trang.');state.pdfEdit.pages=where==='top'?[...selected,...other]:[...other,...selected];renderPdfTool()}
function editSelectedPages(fn){if(!state.pdfEdit.pages.some(p=>p.selected))return setStatus('Hãy chọn ít nhất một trang.');state.pdfEdit.pages.filter(p=>p.selected).forEach(fn);renderPdfTool()}
function duplicateSelectedPdfPages(){const arr=[];state.pdfEdit.pages.forEach(p=>{arr.push(p);if(p.selected)arr.push({...p,id:uid(),selected:false})});state.pdfEdit.pages=arr;renderPdfTool()}
function deleteSelectedPdfPages(){if(!state.pdfEdit.pages.some(p=>p.selected))return setStatus('Hãy chọn trang cần xóa.');state.pdfEdit.pages=state.pdfEdit.pages.filter(p=>!p.selected);state.pdfEdit.anchorId=null;renderPdfTool()}
async function buildPdfFromPageItems(items,filename,successText){if(!items.length)throw new Error('Hãy chọn ít nhất một trang.');startBusy('Đang tạo PDF mới…');const {PDFDocument,degrees}=await ensurePdfLib();const src=await PDFDocument.load(await state.pdfEdit.file.arrayBuffer());const out=await PDFDocument.create();for(let i=0;i<items.length;i++){assertNotAborted();const item=items[i];const [p]=await out.copyPages(src,[item.sourceIndex]);p.setRotation(degrees(normalizePdfRotation(item.rotation)));out.addPage(p);setStatus(`Đang tạo trang ${i+1}/${items.length}`,Math.round((i+1)/items.length*95));}const bytes=await out.save();await saveBlob(new Blob([bytes],{type:'application/pdf'}),safeName(filename,'.pdf'),'PDF');endBusy(successText)}
async function extractSelectedPdfPages(){try{const items=state.pdfEdit.pages.filter(p=>p.selected);await buildPdfFromPageItems(items,`${baseName(state.pdfEdit.file.name)}_trich_xuat.pdf`,`Đã trích xuất ${items.length} trang.`)}catch(e){showError(e)}}
async function exportEditedPdf(){try{if(!state.pdfEdit.pages.length)throw new Error('PDF phải còn ít nhất một trang.');await buildPdfFromPageItems(state.pdfEdit.pages,mainHost.querySelector('#pdfEditName').value,'Đã xuất PDF sau khi sắp xếp.')}catch(e){showError(e)}}
function renderPdfSplit(h){h.innerHTML=`<div class="office-card"><h4>Tách PDF</h4><p class="office-card-note">Tách mỗi trang thành một PDF hoặc nhập nhóm trang như: 1-3, 4-7, 8, 10-12. Nhiều kết quả sẽ được đóng gói ZIP.</p><div class="office-grid"><label class="office-field"><span>File PDF</span><input id="pdfSplitFile" type="file" accept=".pdf,application/pdf"></label><label class="office-field"><span>Chế độ</span><select id="pdfSplitMode"><option value="each">Mỗi trang một PDF</option><option value="ranges">Tách theo nhóm trang</option><option value="odd">Trang lẻ</option><option value="even">Trang chẵn</option></select></label></div><label class="office-field" style="margin-top:10px"><span>Nhóm trang</span><input id="pdfSplitRanges" value="1-3,4-7,8" placeholder="1-3,4-7,8"></label><div class="office-toolbar"><span class="spacer"></span><button class="office-btn primary" id="pdfSplitRun">Tách PDF</button></div></div>`;h.querySelector('#pdfSplitRun').onclick=runPdfSplit;}
function parseRanges(text,max){return String(text).split(',').map(s=>s.trim()).filter(Boolean).map(seg=>{const m=seg.match(/^(\d+)(?:-(\d+))?$/);if(!m)throw new Error(`Khoảng trang không hợp lệ: ${seg}`);const a=+m[1],b=+(m[2]||m[1]);if(a<1||b<a||b>max)throw new Error(`Khoảng ${seg} vượt số trang.`);return Array.from({length:b-a+1},(_,i)=>a-1+i)});}
async function runPdfSplit(){try{const file=mainHost.querySelector('#pdfSplitFile').files[0];if(!file)throw new Error('Hãy chọn file PDF.');startBusy('Đang tách PDF…');const {PDFDocument}=await ensurePdfLib();const src=await PDFDocument.load(await file.arrayBuffer());const n=src.getPageCount(),mode=mainHost.querySelector('#pdfSplitMode').value;let groups;if(mode==='each')groups=Array.from({length:n},(_,i)=>[i]);else if(mode==='odd')groups=[Array.from({length:n},(_,i)=>i).filter(i=>(i+1)%2===1)];else if(mode==='even')groups=[Array.from({length:n},(_,i)=>i).filter(i=>(i+1)%2===0)];else groups=parseRanges(mainHost.querySelector('#pdfSplitRanges').value,n);const outputs=[];for(let i=0;i<groups.length;i++){assertNotAborted();const out=await PDFDocument.create();const pages=await out.copyPages(src,groups[i]);pages.forEach(p=>out.addPage(p));const bytes=await out.save();const suffix=mode==='each'?`page_${String(groups[i][0]+1).padStart(3,'0')}`:`part_${String(i+1).padStart(2,'0')}`;outputs.push({name:`${baseName(file.name)}_${suffix}.pdf`,blob:new Blob([bytes],{type:'application/pdf'})});setStatus(`Đang tạo phần ${i+1}/${groups.length}`,Math.round((i+1)/groups.length*90));}if(outputs.length===1)await saveBlob(outputs[0].blob,outputs[0].name,'PDF');else await downloadZip(outputs,`${baseName(file.name)}_tach.zip`);endBusy(`Đã tạo ${outputs.length} file.`);}catch(e){showError(e)}}
function renderPdfPng(h){h.innerHTML=`<div class="office-card"><h4>PDF thành PNG</h4><p class="office-card-note">Mỗi trang được render tuần tự để tránh chiếm quá nhiều RAM.</p><div class="office-grid"><label class="office-field"><span>File PDF</span><input id="pdfPngFile" type="file" accept=".pdf,application/pdf"></label><label class="office-field"><span>Độ phân giải</span><select id="pdfPngDpi"><option>96</option><option>150</option><option selected>200</option><option>300</option></select></label></div><label class="office-field" style="margin-top:10px"><span>Trang cần xuất</span><input id="pdfPngPages" placeholder="Để trống = tất cả; ví dụ 1-3,5"></label><div class="office-toolbar"><span class="spacer"></span><button class="office-btn primary" id="pdfPngRun">Xuất PNG</button></div></div>`;h.querySelector('#pdfPngRun').onclick=runPdfToPng;}
async function runPdfToPng(){try{const file=mainHost.querySelector('#pdfPngFile').files[0];if(!file)throw new Error('Hãy chọn PDF.');startBusy('Đang mở PDF…');const lib=await ensurePdfJs();const doc=await lib.getDocument({data:new Uint8Array(await file.arrayBuffer())}).promise;const text=mainHost.querySelector('#pdfPngPages').value.trim();const indexes=text?parseRanges(text,doc.numPages).flat():Array.from({length:doc.numPages},(_,i)=>i);const dpi=+mainHost.querySelector('#pdfPngDpi').value,outs=[];for(let i=0;i<indexes.length;i++){assertNotAborted();const page=await doc.getPage(indexes[i]+1),v=page.getViewport({scale:dpi/72});const canvas=document.createElement('canvas');canvas.width=Math.ceil(v.width);canvas.height=Math.ceil(v.height);await page.render({canvasContext:canvas.getContext('2d',{alpha:false}),viewport:v}).promise;const blob=await new Promise(r=>canvas.toBlob(r,'image/png'));outs.push({name:`${baseName(file.name)}_page_${String(indexes[i]+1).padStart(3,'0')}.png`,blob});canvas.width=canvas.height=1;setStatus(`Đang xuất trang ${i+1}/${indexes.length}`,Math.round((i+1)/indexes.length*90));await sleep();}if(outs.length===1)await saveBlob(outs[0].blob,outs[0].name,'PNG');else await downloadZip(outs,`${baseName(file.name)}_PNG.zip`);endBusy(`Đã xuất ${outs.length} ảnh PNG.`);}catch(e){showError(e)}}
function renderPdfImages(h){h.innerHTML=`<div class="office-card"><h4>Ảnh thành PDF</h4><p class="office-card-note">Hỗ trợ JPG, PNG và WebP. Ảnh trong suốt sẽ đặt trên nền trắng.</p><div class="office-dropzone" id="pdfImageDrop"><strong>Browse hoặc kéo thả ảnh</strong><span>Kéo thứ tự bằng nút ↑ ↓ trong danh sách.</span><input type="file" accept="image/jpeg,image/png,image/webp" multiple hidden></div><div class="office-toolbar"><button class="office-btn" id="pdfImageAdd">Chọn thêm ảnh</button><button class="office-btn danger" id="pdfImageClear">Xóa danh sách</button></div><div id="pdfImageList"></div></div><div class="office-card"><div class="office-grid three"><label class="office-field"><span>Kích thước trang</span><select id="pdfImageMode"><option value="image">Theo kích thước ảnh</option><option value="a4p">A4 dọc</option><option value="a4l">A4 ngang</option><option value="width">Fit theo bề ngang A4</option></select></label><label class="office-field"><span>Lề</span><select id="pdfImageMargin"><option>0</option><option>5</option><option selected>10</option><option>15</option></select></label><label class="office-field"><span>Tên file</span><input id="pdfImageName" value="Anh_thanh_PDF.pdf"></label></div><div class="office-toolbar"><span class="spacer"></span><button class="office-btn primary" id="pdfImageRun" ${state.pdfImages.length?'':'disabled'}>Tạo PDF</button></div></div>`;const add=fs=>{state.pdfImages.push(...fs.filter(f=>/^image\/(jpeg|png|webp)/.test(f.type)).map(file=>({id:uid(),file})));renderPdfTool()};bindDropzone(h.querySelector('#pdfImageDrop'),f=>f.type.startsWith('image/'),add);h.querySelector('#pdfImageDrop input').onchange=e=>add([...e.target.files]);h.querySelector('#pdfImageAdd').onclick=async()=>add(await fileInput('image/jpeg,image/png,image/webp',true));h.querySelector('#pdfImageClear').onclick=()=>{state.pdfImages=[];renderPdfTool()};const list=h.querySelector('#pdfImageList');list.innerHTML=listRows(state.pdfImages,it=>formatBytes(it.file.size));bindListActions(list,state.pdfImages,renderPdfTool);h.querySelector('#pdfImageRun').onclick=runImagesToPdf;}
async function imageFileToPngBytes(file){if(file.type==='image/png')return new Uint8Array(await file.arrayBuffer());const bitmap=await createImageBitmap(file);const c=document.createElement('canvas');c.width=bitmap.width;c.height=bitmap.height;const ctx=c.getContext('2d');ctx.fillStyle='#fff';ctx.fillRect(0,0,c.width,c.height);ctx.drawImage(bitmap,0,0);bitmap.close();const blob=await new Promise(r=>c.toBlob(r,'image/png'));return new Uint8Array(await blob.arrayBuffer())}
async function runImagesToPdf(){try{startBusy('Đang tạo PDF từ ảnh…');const {PDFDocument}=await ensurePdfLib();const out=await PDFDocument.create(),mode=mainHost.querySelector('#pdfImageMode').value,marginMm=+mainHost.querySelector('#pdfImageMargin').value,margin=marginMm*72/25.4;for(let i=0;i<state.pdfImages.length;i++){assertNotAborted();const f=state.pdfImages[i].file;let img;if(f.type==='image/jpeg')img=await out.embedJpg(await f.arrayBuffer());else img=await out.embedPng(await imageFileToPngBytes(f));let pw,ph,scale,x=0,y=0;if(mode==='image'){pw=img.width;ph=img.height;scale=1}else{[pw,ph]=mode==='a4l'?A4.landscape:A4.portrait;scale=Math.min((pw-2*margin)/img.width,(ph-2*margin)/img.height);if(mode==='width')scale=(pw-2*margin)/img.width;x=(pw-img.width*scale)/2;y=(ph-img.height*scale)/2}out.addPage([pw,ph]).drawImage(img,{x,y,width:img.width*scale,height:img.height*scale});setStatus(`Đang thêm ảnh ${i+1}/${state.pdfImages.length}`,Math.round((i+1)/state.pdfImages.length*95));}const bytes=await out.save();await saveBlob(new Blob([bytes],{type:'application/pdf'}),safeName(mainHost.querySelector('#pdfImageName').value,'.pdf'),'PDF');endBusy('Đã tạo PDF từ ảnh.');}catch(e){showError(e)}}

// ===== IMAGE =====
function renderImageTool(){const tabs=[['convert','Chuyển đổi & resize'],['compress','Nén ảnh'],['merge','Ghép ảnh'],['watermark','Đóng dấu']];mainHost.innerHTML=`<section class="office-tool-panel active"><div class="office-tool-head"><div><h3>IMG</h3><p>Xử lý ảnh bằng Canvas API; ảnh không được lưu vào Local Storage.</p></div></div>${subTabs('image',tabs)}<div id="imageSubHost"></div></section>`;bindSubtabs('image');const h=mainHost.querySelector('#imageSubHost');if(state.sub.image==='convert')renderImageConvert(h);if(state.sub.image==='compress')renderImageCompress(h);if(state.sub.image==='merge')renderImageMerge(h);if(state.sub.image==='watermark')renderImageWatermark(h)}
function imageLibrary(h,after=''){h.innerHTML=`<div class="office-card"><div class="office-dropzone" id="imageDrop"><strong>Browse hoặc kéo thả nhiều ảnh</strong><span>JPG, PNG, WebP, BMP và GIF tĩnh.</span><input type="file" accept="image/*,.bmp" multiple hidden></div><div class="office-toolbar"><button class="office-btn" id="imageAdd">Chọn thêm ảnh</button><button class="office-btn" id="imageSort">Sắp xếp A–Z</button><button class="office-btn danger" id="imageClear">Xóa danh sách</button></div><div id="imageList"></div></div>${after}`;const add=fs=>{state.imageFiles.push(...fs.filter(f=>f.type.startsWith('image/')||/\.(bmp)$/i.test(f.name)).map(file=>({id:uid(),file})));renderImageTool()};bindDropzone(h.querySelector('#imageDrop'),f=>f.type.startsWith('image/'),add);h.querySelector('#imageDrop input').onchange=e=>add([...e.target.files]);h.querySelector('#imageAdd').onclick=async()=>add(await fileInput('image/*,.bmp',true));h.querySelector('#imageSort').onclick=()=>{state.imageFiles.sort((a,b)=>a.file.name.localeCompare(b.file.name,'vi'));renderImageTool()};h.querySelector('#imageClear').onclick=()=>{state.imageFiles=[];renderImageTool()};const l=h.querySelector('#imageList');l.innerHTML=listRows(state.imageFiles,it=>`${formatBytes(it.file.size)} · ${it.file.type||fileExt(it.file.name)}`);bindListActions(l,state.imageFiles,renderImageTool)}
function renderImageConvert(h){imageLibrary(h,`<div class="office-card"><h4>Chuyển đổi, resize, xoay và lật hàng loạt</h4><div class="office-grid three"><label class="office-field"><span>Định dạng đầu ra</span><select id="imgFormat"><option value="image/jpeg">JPG</option><option value="image/png">PNG</option><option value="image/webp">WebP</option></select></label><label class="office-field"><span>Chất lượng JPG/WebP</span><input id="imgQuality" type="number" min="10" max="100" value="${state.settings.imageQuality||90}"></label><label class="office-field"><span id="imgBgLabel">Nền khi xuất JPG</span><input id="imgBg" type="color" value="#ffffff"><small id="imgBgHelp">JPG không hỗ trợ nền trong suốt.</small></label><label class="office-field"><span>Resize theo</span><select id="imgResizeMode"><option value="none">Không resize</option><option value="width">Chiều rộng</option><option value="height">Chiều cao</option><option value="percent">Phần trăm</option><option value="longest">Cạnh dài nhất</option></select></label><label class="office-field"><span>Giá trị resize</span><input id="imgResizeValue" type="number" min="1" value="1200"></label><label class="office-field"><span>Xoay</span><select id="imgRotate"><option value="0">Không xoay</option><option value="90">Phải 90°</option><option value="-90">Trái 90°</option><option value="180">180°</option></select></label></div><div class="office-toolbar"><label class="office-check"><input id="imgNoUpscale" type="checkbox" checked> Không phóng to ảnh nhỏ</label><label class="office-check"><input id="imgFlipX" type="checkbox"> Lật ngang</label><label class="office-check"><input id="imgFlipY" type="checkbox"> Lật dọc</label><span class="spacer"></span><button class="office-btn primary" id="imgConvertRun" ${state.imageFiles.length?'':'disabled'}>Xử lý và tải kết quả</button></div></div>`);
  const format=h.querySelector('#imgFormat'),bg=h.querySelector('#imgBg'),label=h.querySelector('#imgBgLabel'),help=h.querySelector('#imgBgHelp');
  const syncBg=()=>{const v=format.value;if(v==='image/jpeg'){label.textContent='Nền khi xuất JPG';help.textContent='JPG không hỗ trợ nền trong suốt; màu này sẽ lấp vùng trong suốt.';bg.disabled=false}else if(v==='image/png'){label.textContent='Nền PNG';help.textContent='PNG giữ nền trong suốt, không cần chọn màu nền.';bg.disabled=true}else{label.textContent='Nền WebP';help.textContent='WebP giữ nền trong suốt, không cần chọn màu nền.';bg.disabled=true}};
  format.onchange=syncBg;syncBg();h.querySelector('#imgConvertRun').onclick=runImageConvert;}
async function transformImage(file,opt){const bitmap=await createImageBitmap(file);let sw=bitmap.width,sh=bitmap.height,tw=sw,th=sh;const val=Math.max(1,+opt.resizeValue||1);if(opt.resizeMode==='width'){tw=val;th=Math.round(sh*tw/sw)}if(opt.resizeMode==='height'){th=val;tw=Math.round(sw*th/sh)}if(opt.resizeMode==='percent'){tw=Math.round(sw*val/100);th=Math.round(sh*val/100)}if(opt.resizeMode==='longest'){const scale=val/Math.max(sw,sh);tw=Math.round(sw*scale);th=Math.round(sh*scale)}if(opt.noUpscale&&tw>sw&&th>sh){tw=sw;th=sh}const rotate=+opt.rotate||0,swap=Math.abs(rotate)%180===90,c=document.createElement('canvas');c.width=swap?th:tw;c.height=swap?tw:th;const ctx=c.getContext('2d');if(opt.format==='image/jpeg'){ctx.fillStyle=opt.bg;ctx.fillRect(0,0,c.width,c.height)}ctx.translate(c.width/2,c.height/2);ctx.rotate(rotate*Math.PI/180);ctx.scale(opt.flipX?-1:1,opt.flipY?-1:1);ctx.drawImage(bitmap,-tw/2,-th/2,tw,th);bitmap.close();const blob=await new Promise(r=>c.toBlob(r,opt.format,opt.quality/100));c.width=c.height=1;return blob}
async function runImageConvert(){try{startBusy('Đang xử lý hình ảnh…');const opt={format:mainHost.querySelector('#imgFormat').value,quality:+mainHost.querySelector('#imgQuality').value,bg:mainHost.querySelector('#imgBg').value,resizeMode:mainHost.querySelector('#imgResizeMode').value,resizeValue:+mainHost.querySelector('#imgResizeValue').value,rotate:+mainHost.querySelector('#imgRotate').value,noUpscale:mainHost.querySelector('#imgNoUpscale').checked,flipX:mainHost.querySelector('#imgFlipX').checked,flipY:mainHost.querySelector('#imgFlipY').checked};state.settings.imageQuality=opt.quality;saveSettings();const ext={'image/jpeg':'.jpg','image/png':'.png','image/webp':'.webp'}[opt.format],outs=[];for(let i=0;i<state.imageFiles.length;i++){assertNotAborted();const f=state.imageFiles[i].file,blob=await transformImage(f,opt);outs.push({name:baseName(f.name)+ext,blob});setStatus(`Đang xử lý ảnh ${i+1}/${state.imageFiles.length}`,Math.round((i+1)/state.imageFiles.length*90));await sleep()}if(outs.length===1)await saveBlob(outs[0].blob,outs[0].name,'Ảnh');else await downloadZip(outs,'Anh_da_xu_ly.zip');endBusy(`Đã xử lý ${outs.length} ảnh.`);}catch(e){showError(e)}}
function renderImageCompress(h){imageLibrary(h,`<div class="office-card"><h4>Nén ảnh hàng loạt</h4><p class="office-card-note">Giảm dung lượng bằng JPG hoặc WebP và có thể giới hạn chiều rộng lớn nhất. Ảnh được xử lý tuần tự để tiết kiệm RAM.</p><div class="office-grid three"><label class="office-field"><span>Định dạng</span><select id="imgCompressFormat"><option value="image/webp">WebP</option><option value="image/jpeg">JPG</option></select></label><label class="office-field"><span>Chất lượng %</span><input id="imgCompressQuality" type="number" min="10" max="100" value="82"></label><label class="office-field"><span>Chiều rộng tối đa px</span><input id="imgCompressWidth" type="number" min="0" value="1920"><small>Nhập 0 để giữ nguyên kích thước.</small></label><label class="office-field"><span id="imgCompressBgLabel">Nền WebP</span><input id="imgCompressBg" type="color" value="#ffffff"><small id="imgCompressBgHelp">WebP giữ nền trong suốt.</small></label></div><div class="office-toolbar"><span id="imgCompressEstimate" class="office-card-note"></span><span class="spacer"></span><button class="office-btn primary" id="imgCompressRun" ${state.imageFiles.length?'':'disabled'}>Nén và tải kết quả</button></div></div>`);
  const format=h.querySelector('#imgCompressFormat'),bg=h.querySelector('#imgCompressBg'),label=h.querySelector('#imgCompressBgLabel'),help=h.querySelector('#imgCompressBgHelp');
  const syncBg=()=>{if(format.value==='image/jpeg'){label.textContent='Nền khi xuất JPG';help.textContent='JPG không hỗ trợ nền trong suốt; màu này sẽ lấp vùng trong suốt.';bg.disabled=false}else{label.textContent='Nền WebP';help.textContent='WebP giữ nền trong suốt, không cần chọn màu nền.';bg.disabled=true}};
  format.onchange=syncBg;syncBg();h.querySelector('#imgCompressRun').onclick=runImageCompress;const original=state.imageFiles.reduce((n,x)=>n+x.file.size,0);h.querySelector('#imgCompressEstimate').textContent=state.imageFiles.length?`Dung lượng nguồn: ${formatBytes(original)}`:'Chưa chọn ảnh.';}
async function runImageCompress(){try{startBusy('Đang nén hình ảnh…');const format=mainHost.querySelector('#imgCompressFormat').value,quality=Math.max(10,Math.min(100,+mainHost.querySelector('#imgCompressQuality').value||82)),maxWidth=Math.max(0,+mainHost.querySelector('#imgCompressWidth').value||0),bg=mainHost.querySelector('#imgCompressBg').value,ext=format==='image/webp'?'.webp':'.jpg',outs=[];let sourceBytes=0,outBytes=0;for(let i=0;i<state.imageFiles.length;i++){assertNotAborted();const f=state.imageFiles[i].file;sourceBytes+=f.size;const bitmap=await createImageBitmap(f);const targetWidth=maxWidth&&bitmap.width>maxWidth?maxWidth:bitmap.width,targetHeight=Math.round(bitmap.height*targetWidth/bitmap.width),c=document.createElement('canvas');c.width=targetWidth;c.height=targetHeight;const ctx=c.getContext('2d');if(format==='image/jpeg'){ctx.fillStyle=bg;ctx.fillRect(0,0,c.width,c.height)}ctx.drawImage(bitmap,0,0,c.width,c.height);bitmap.close();const blob=await new Promise(resolve=>c.toBlob(resolve,format,quality/100));c.width=c.height=1;if(!blob)throw new Error(`Không thể nén ${f.name}.`);outBytes+=blob.size;outs.push({name:`${baseName(f.name)}_compressed${ext}`,blob});setStatus(`Đang nén ảnh ${i+1}/${state.imageFiles.length}`,Math.round((i+1)/state.imageFiles.length*90));await sleep()}if(outs.length===1)await saveBlob(outs[0].blob,outs[0].name,'Ảnh');else await downloadZip(outs,'Anh_da_nen.zip');const pct=sourceBytes?Math.round((1-outBytes/sourceBytes)*100):0;endBusy(`Đã nén ${outs.length} ảnh: ${formatBytes(sourceBytes)} → ${formatBytes(outBytes)}${pct>0?` (giảm ${pct}%)`:''}.`);}catch(e){showError(e)}}
function renderImageMerge(h){imageLibrary(h,`<div class="office-card"><h4>Ghép ảnh</h4><div class="office-grid three"><label class="office-field"><span>Kiểu ghép</span><select id="imgMergeMode"><option value="vertical">Ghép dọc</option><option value="horizontal">Ghép ngang</option><option value="grid">Dạng lưới</option></select></label><label class="office-field"><span>Khoảng cách px</span><input id="imgMergeSpacing" type="number" min="0" value="16"></label><label class="office-field"><span>Lề ngoài px</span><input id="imgMergeMargin" type="number" min="0" value="20"></label><label class="office-field"><span id="imgMergeBgLabel">Màu nền ảnh ghép (PNG)</span><input id="imgMergeBg" type="color" value="#ffffff"><small>Màu này dùng cho khoảng cách, lề và vùng trống giữa các ảnh.</small></label><label class="office-field"><span>Số cột khi ghép lưới</span><input id="imgMergeCols" type="number" min="1" value="3"></label><label class="office-field"><span>Chuẩn hóa</span><select id="imgMergeNormalize"><option value="fit">Đồng nhất chiều rộng/chiều cao</option><option value="none">Giữ nguyên kích thước</option></select></label><label class="office-field"><span>Định dạng</span><select id="imgMergeFormat"><option value="image/png">PNG</option><option value="image/jpeg">JPG</option><option value="image/webp">WebP</option></select></label></div><div class="office-toolbar"><span class="spacer"></span><button class="office-btn primary" id="imgMergeRun" ${state.imageFiles.length>1?'':'disabled'}>Ghép ảnh</button></div></div>`);
  const format=h.querySelector('#imgMergeFormat'),label=h.querySelector('#imgMergeBgLabel');const sync=()=>{label.textContent=`Màu nền ảnh ghép (${format.options[format.selectedIndex].text})`};format.onchange=sync;sync();h.querySelector('#imgMergeRun').onclick=runImageMerge;}
async function runImageMerge(){try{startBusy('Đang đọc ảnh để ghép…');const mode=mainHost.querySelector('#imgMergeMode').value,spacing=+mainHost.querySelector('#imgMergeSpacing').value,margin=Math.max(0,+mainHost.querySelector('#imgMergeMargin').value||0),bg=mainHost.querySelector('#imgMergeBg').value,cols=Math.max(1,+mainHost.querySelector('#imgMergeCols').value),normalize=mainHost.querySelector('#imgMergeNormalize').value==='fit',format=mainHost.querySelector('#imgMergeFormat').value;const imgs=[];for(let i=0;i<state.imageFiles.length;i++){imgs.push(await createImageBitmap(state.imageFiles[i].file));setStatus(`Đang đọc ảnh ${i+1}/${state.imageFiles.length}`,Math.round((i+1)/state.imageFiles.length*25))}let sizes=imgs.map(x=>({w:x.width,h:x.height}));if(normalize&&mode==='vertical'){const w=Math.max(...sizes.map(s=>s.w));sizes=sizes.map(s=>({w,h:Math.round(s.h*w/s.w)}))}if(normalize&&mode==='horizontal'){const h=Math.max(...sizes.map(s=>s.h));sizes=sizes.map(s=>({h,w:Math.round(s.w*h/s.h)}))}let cw,ch,positions=[];if(mode==='vertical'){cw=Math.max(...sizes.map(s=>s.w));ch=sizes.reduce((a,s)=>a+s.h,0)+spacing*(sizes.length-1);let y=0;sizes.forEach(s=>{positions.push({x:(cw-s.w)/2,y,w:s.w,h:s.h});y+=s.h+spacing})}else if(mode==='horizontal'){ch=Math.max(...sizes.map(s=>s.h));cw=sizes.reduce((a,s)=>a+s.w,0)+spacing*(sizes.length-1);let x=0;sizes.forEach(s=>{positions.push({x,y:(ch-s.h)/2,w:s.w,h:s.h});x+=s.w+spacing})}else{const rows=Math.ceil(sizes.length/cols),cellW=Math.max(...sizes.map(s=>s.w)),cellH=Math.max(...sizes.map(s=>s.h));cw=cols*cellW+(cols-1)*spacing;ch=rows*cellH+(rows-1)*spacing;sizes.forEach((s,i)=>{const c=i%cols,r=Math.floor(i/cols),scale=normalize?Math.min(cellW/s.w,cellH/s.h):1,w=s.w*scale,h=s.h*scale;positions.push({x:c*(cellW+spacing)+(cellW-w)/2,y:r*(cellH+spacing)+(cellH-h)/2,w,h})})}positions=positions.map(p=>({...p,x:p.x+margin,y:p.y+margin}));cw+=margin*2;ch+=margin*2;if(cw*ch>120000000)throw new Error('Ảnh ghép quá lớn; hãy giảm kích thước ảnh trước.');const canvas=document.createElement('canvas');canvas.width=Math.ceil(cw);canvas.height=Math.ceil(ch);const ctx=canvas.getContext('2d');ctx.fillStyle=bg;ctx.fillRect(0,0,cw,ch);imgs.forEach((img,i)=>{ctx.drawImage(img,positions[i].x,positions[i].y,positions[i].w,positions[i].h);img.close()});const blob=await new Promise(r=>canvas.toBlob(r,format,.92));canvas.width=canvas.height=1;const ext={'image/png':'.png','image/jpeg':'.jpg','image/webp':'.webp'}[format];await saveBlob(blob,`Anh_ghep_${mode}${ext}`,'Ảnh');endBusy('Đã ghép ảnh.');}catch(e){showError(e)}}
function renderImageWatermark(h){imageLibrary(h,`<div class="office-card"><h4>Đóng dấu văn bản</h4><div class="office-grid three"><label class="office-field"><span>Nội dung</span><input id="imgWaterText" placeholder="Ví dụ: Lâm Hoài Linh"></label><label class="office-field"><span>Vị trí</span><select id="imgWaterPosition"><option value="br">Góc phải dưới</option><option value="bl">Góc trái dưới</option><option value="tr">Góc phải trên</option><option value="tl">Góc trái trên</option><option value="center">Giữa ảnh</option></select></label><label class="office-field"><span>Độ trong suốt %</span><input id="imgWaterOpacity" type="number" min="5" max="100" value="65"></label><label class="office-field"><span>Cỡ chữ tương đối %</span><input id="imgWaterSize" type="number" min="1" max="20" value="4"></label><label class="office-field"><span>Màu chữ</span><input id="imgWaterColor" type="color" value="#ffffff"></label><label class="office-field"><span>Định dạng đầu ra</span><select id="imgWaterFormat"><option value="image/png">PNG</option><option value="image/jpeg">JPG</option><option value="image/webp">WebP</option></select></label></div><div class="office-toolbar"><span class="spacer"></span><button class="office-btn primary" id="imgWaterRun" ${state.imageFiles.length?'':'disabled'}>Đóng dấu hàng loạt</button></div></div>`);h.querySelector('#imgWaterRun').onclick=runImageWatermark;}
async function runImageWatermark(){try{const text=mainHost.querySelector('#imgWaterText').value.trim();if(!text)throw new Error('Hãy nhập nội dung watermark.');startBusy('Đang đóng dấu ảnh…');const pos=mainHost.querySelector('#imgWaterPosition').value,opacity=+mainHost.querySelector('#imgWaterOpacity').value/100,sizePct=+mainHost.querySelector('#imgWaterSize').value,color=mainHost.querySelector('#imgWaterColor').value,format=mainHost.querySelector('#imgWaterFormat').value,ext={'image/png':'.png','image/jpeg':'.jpg','image/webp':'.webp'}[format],outs=[];for(let i=0;i<state.imageFiles.length;i++){assertNotAborted();const f=state.imageFiles[i].file,b=await createImageBitmap(f),c=document.createElement('canvas');c.width=b.width;c.height=b.height;const x=c.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,c.width,c.height);x.drawImage(b,0,0);b.close();const fs=Math.max(14,Math.round(c.width*sizePct/100));x.font=`700 ${fs}px system-ui`;x.globalAlpha=opacity;x.fillStyle=color;x.strokeStyle='rgba(0,0,0,.45)';x.lineWidth=Math.max(1,fs/16);const m=x.measureText(text),pad=Math.max(12,fs*.5);let tx=pad,ty=pad+fs;if(pos.includes('r'))tx=c.width-m.width-pad;if(pos.includes('b'))ty=c.height-pad;if(pos==='center'){tx=(c.width-m.width)/2;ty=c.height/2}x.strokeText(text,tx,ty);x.fillText(text,tx,ty);x.globalAlpha=1;const blob=await new Promise(r=>c.toBlob(r,format,.92));outs.push({name:`${baseName(f.name)}_watermark${ext}`,blob});c.width=c.height=1;setStatus(`Đang đóng dấu ${i+1}/${state.imageFiles.length}`,Math.round((i+1)/state.imageFiles.length*90))}if(outs.length===1)await saveBlob(outs[0].blob,outs[0].name,'Ảnh');else await downloadZip(outs,'Anh_watermark.zip');endBusy(`Đã đóng dấu ${outs.length} ảnh.`);}catch(e){showError(e)}}

// ===== RENAME =====
function renderRenameTool(){mainHost.innerHTML=`<section class="office-tool-panel active"><div class="office-tool-head"><div><h3>Batch Rename</h3><p>Luôn xem trước tên mới. Chế độ an toàn tạo ZIP chứa bản sao tên mới; không xóa tệp nguồn.</p></div></div><div class="office-card"><div class="office-toolbar"><button class="office-btn primary" id="renameBrowseDir">Browse thư mục</button><button class="office-btn" id="renameFallback">Chọn thư mục kiểu tương thích</button><button class="office-btn danger" id="renameClear">Xóa danh sách</button><span class="spacer"></span><span>${state.renameEntries.length} mục</span></div><input id="renameDirInput" type="file" webkitdirectory directory multiple hidden><div class="office-grid three"><label class="office-field"><span>Tiền tố</span><input id="renPrefix" value=""></label><label class="office-field"><span>Hậu tố</span><input id="renSuffix" value=""></label><label class="office-field"><span>Tìm</span><input id="renFind"></label><label class="office-field"><span>Thay bằng</span><input id="renReplace"></label><label class="office-field"><span>Đánh số từ</span><input id="renStart" type="number" value="1"></label><label class="office-field"><span>Số chữ số</span><input id="renPad" type="number" min="1" max="8" value="3"></label><label class="office-field"><span>Kiểu chữ</span><select id="renCase"><option value="keep">Giữ nguyên</option><option value="lower">chữ thường</option><option value="upper">CHỮ HOA</option><option value="title">Viết Hoa Đầu Từ</option></select></label><label class="office-field"><span>Thay khoảng trắng</span><select id="renSpace"><option value="keep">Giữ nguyên</option><option value="-">Dấu gạch ngang</option><option value="_">Dấu gạch dưới</option></select></label><label class="office-field"><span>Mẫu tên</span><input id="renPattern" placeholder="Ví dụ: file_{n} hoặc {name}_{n}"></label></div><div class="office-toolbar"><label class="office-check"><input id="renRegex" type="checkbox"> Tìm bằng Regex</label><label class="office-check"><input id="renStrip" type="checkbox"> Xóa dấu tiếng Việt</label><label class="office-check"><input id="renExtLower" type="checkbox" checked> Đuôi file chữ thường</label><label class="office-check"><input id="renRecursive" type="checkbox" checked> Giữ cấu trúc thư mục con</label><span class="spacer"></span><button class="office-btn" id="renPreview">Cập nhật preview</button></div></div><div class="office-card"><h4>Preview</h4><div id="renameTable" class="office-table-wrap"></div><div class="office-toolbar"><button class="office-btn" id="renManifest">Tải manifest JSON</button><span class="spacer"></span><button class="office-btn primary" id="renSafeZip" ${state.renameEntries.length?'':'disabled'}>Tạo ZIP tên mới (an toàn)</button></div></div><div class="office-danger-box"><strong>Đổi tên tại chỗ – nâng cao</strong><p class="office-card-note">Chỉ áp dụng cho tệp khi thư mục đã được cấp quyền ghi. Ứng dụng tạo tệp tên mới, kiểm tra dung lượng rồi mới xóa tệp cũ. Không đổi tên thư mục tại chỗ.</p><div class="office-grid"><label class="office-field"><span>Gõ DOI TEN</span><input id="renConfirm" placeholder="DOI TEN"></label><div class="office-toolbar"><button class="office-btn danger" id="renInPlace" ${state.renameRootHandle?'':'disabled'}>Đổi tên tại chỗ</button></div></div></div></section>`;
  const input=mainHost.querySelector('#renameDirInput');mainHost.querySelector('#renameFallback').onclick=()=>input.click();input.onchange=e=>loadRenameFiles([...e.target.files]);mainHost.querySelector('#renameBrowseDir').onclick=pickRenameDirectory;mainHost.querySelector('#renameClear').onclick=()=>{state.renameEntries=[];state.renameRootHandle=null;renderRenameTool()};mainHost.querySelector('#renPreview').onclick=()=>{updateRenamePreview();renderRenameTable()};['renPrefix','renSuffix','renFind','renReplace','renStart','renPad','renCase','renSpace','renPattern','renRegex','renStrip','renExtLower'].forEach(id=>mainHost.querySelector('#'+id).addEventListener('input',()=>{updateRenamePreview();renderRenameTable()}));updateRenamePreview();renderRenameTable();mainHost.querySelector('#renSafeZip').onclick=runRenameSafeZip;mainHost.querySelector('#renManifest').onclick=downloadRenameManifest;mainHost.querySelector('#renInPlace').onclick=runRenameInPlace;
}
function loadRenameFiles(files){state.renameRootHandle=null;state.renameEntries=files.map(file=>({id:uid(),file,name:file.name,relativePath:file.webkitRelativePath||file.name,type:'file'}));renderRenameTool()}
async function pickRenameDirectory(){if(!window.showDirectoryPicker){mainHost.querySelector('#renameDirInput').click();return;}try{const root=await showDirectoryPicker({mode:'readwrite'});state.renameRootHandle=root;state.renameEntries=[];await scanHandle(root,'',state.renameEntries);renderRenameTool()}catch(e){if(e.name!=='AbortError')setStatus(e.message)}}
async function scanHandle(dir,path,out){for await(const [name,handle] of dir.entries()){assertNotAborted();const rel=path?`${path}/${name}`:name;if(handle.kind==='file'){const file=await handle.getFile();out.push({id:uid(),file,handle,parentHandle:dir,name,relativePath:rel,type:'file'})}else{out.push({id:uid(),handle,parentHandle:dir,name,relativePath:rel,type:'folder'});await scanHandle(handle,rel,out)}}}
function renameOptions(){const q=id=>mainHost.querySelector('#'+id);return {prefix:q('renPrefix').value,suffix:q('renSuffix').value,find:q('renFind').value,replace:q('renReplace').value,start:+q('renStart').value||1,pad:+q('renPad').value||3,caseMode:q('renCase').value,space:q('renSpace').value,pattern:q('renPattern').value,regex:q('renRegex').checked,strip:q('renStrip').checked,extLower:q('renExtLower').checked}}
function transformRename(name,index,opt,isFolder=false){const ext=isFolder?'':fileExt(name),orig=isFolder?name:baseName(name);let stem=orig.trim().replace(/\s+/g,' ');if(opt.find){try{stem=stem.replace(opt.regex?new RegExp(opt.find,'g'):opt.find,opt.replace)}catch{}}if(opt.strip)stem=stem.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d').replace(/Đ/g,'D');if(opt.caseMode==='lower')stem=stem.toLocaleLowerCase('vi');if(opt.caseMode==='upper')stem=stem.toLocaleUpperCase('vi');if(opt.caseMode==='title')stem=stem.toLocaleLowerCase('vi').replace(/(^|\s)\S/g,m=>m.toLocaleUpperCase('vi'));if(opt.space!=='keep')stem=stem.replace(/\s+/g,opt.space);const n=String(opt.start+index).padStart(opt.pad,'0');if(opt.pattern)stem=opt.pattern.replaceAll('{name}',stem).replaceAll('{n}',n).replaceAll('{ext}',ext.replace('.',''));stem=`${opt.prefix}${stem}${opt.suffix}`.replace(/[<>:"/\\|?*\x00-\x1F]/g,'_').replace(/[. ]+$/,'')||`file_${n}`;return stem+(isFolder?'':opt.extLower?ext.toLowerCase():ext)}
function updateRenamePreview(){if(!mainHost.querySelector('#renPrefix'))return;const opt=renameOptions(),used=new Set();state.renameEntries.forEach((e,i)=>{e.newName=transformRename(e.name,i,opt,e.type==='folder');const parent=e.relativePath.includes('/')?e.relativePath.slice(0,e.relativePath.lastIndexOf('/')):'';e.newRelativePath=parent?`${parent}/${e.newName}`:e.newName;const key=e.newRelativePath.toLocaleLowerCase('vi');e.valid=!used.has(key)&&e.newName!=='';e.conflict=used.has(key);used.add(key)})}
function renderRenameTable(){const host=mainHost.querySelector('#renameTable');if(!state.renameEntries.length){host.innerHTML='<div class="office-empty">Chưa chọn thư mục.</div>';return}host.innerHTML=`<table class="office-table"><thead><tr><th>#</th><th>Tên hiện tại</th><th>Tên mới</th><th>Loại</th><th>Trạng thái</th></tr></thead><tbody>${state.renameEntries.slice(0,1500).map((e,i)=>`<tr><td>${i+1}</td><td>${escapeHtml(e.relativePath)}</td><td>${escapeHtml(e.newRelativePath)}</td><td>${e.type==='folder'?'Thư mục':'Tệp'}</td><td class="${e.valid?'good':'bad'}">${e.conflict?'Trùng tên':e.valid?'Hợp lệ':'Không hợp lệ'}</td></tr>`).join('')}</tbody></table>${state.renameEntries.length>1500?'<div class="office-warning">Preview chỉ hiển thị 1.500 mục đầu để tránh làm chậm trình duyệt.</div>':''}`}
function renameManifest(){return state.renameEntries.map(e=>({oldName:e.name,newName:e.newName,relativePath:e.relativePath,newRelativePath:e.newRelativePath,type:e.type,status:e.valid?'ready':'invalid',processedAt:new Date().toISOString()}))}
async function downloadRenameManifest(){await saveBlob(new Blob([JSON.stringify(renameManifest(),null,2)],{type:'application/json'}),'rename_manifest.json','JSON')}
function applyRenamedFolders(path){const parts=path.split('/');return parts.map((part,i)=>{const folder=state.renameEntries.find(e=>e.type==='folder'&&e.relativePath===parts.slice(0,i+1).join('/'));return folder?.newName||part}).join('/')}
async function runRenameSafeZip(){try{updateRenamePreview();if(state.renameEntries.some(e=>!e.valid))throw new Error('Có tên mới bị trùng hoặc không hợp lệ.');startBusy('Đang tạo bản sao tên mới…');const JSZip=await ensureZip(),zip=new JSZip(),files=state.renameEntries.filter(e=>e.type==='file'),keepStructure=mainHost.querySelector('#renRecursive')?.checked!==false;for(let i=0;i<files.length;i++){assertNotAborted();const e=files[i];let parent=keepStructure&&e.relativePath.includes('/')?e.relativePath.slice(0,e.relativePath.lastIndexOf('/')):'';parent=applyRenamedFolders(parent);let target=parent?`${parent}/${e.newName}`:e.newName;if(!keepStructure){let n=2,base=baseName(target),ext=fileExt(target);while(zip.file(target))target=`${base}_${n++}${ext}`;}zip.file(safeZipPath(target),e.file);setStatus(`Đang thêm tệp ${i+1}/${files.length}`,Math.round((i+1)/files.length*65));}if(keepStructure)state.renameEntries.filter(e=>e.type==='folder').forEach(e=>zip.folder(safeZipPath(applyRenamedFolders(e.relativePath))));const blob=await zip.generateAsync({type:'blob',compression:'DEFLATE',compressionOptions:{level:6}},m=>setStatus(`Đang đóng gói ${Math.round(m.percent)}%`,65+m.percent*.34));await saveBlob(blob,'Thu_muc_da_doi_ten.zip','ZIP');endBusy('Đã tạo ZIP an toàn; dữ liệu nguồn không bị thay đổi.');}catch(e){showError(e)}}
async function runRenameInPlace(){try{if(!state.renameRootHandle)throw new Error('Hãy chọn thư mục bằng nút Browse thư mục và cấp quyền ghi.');if(mainHost.querySelector('#renConfirm').value.trim()!=='DOI TEN')throw new Error('Hãy gõ chính xác DOI TEN.');updateRenamePreview();if(state.renameEntries.some(e=>!e.valid))throw new Error('Có tên bị trùng hoặc không hợp lệ.');const files=state.renameEntries.filter(e=>e.type==='file'&&e.newName!==e.name);startBusy('Đang đổi tên tại chỗ…');for(let i=0;i<files.length;i++){assertNotAborted();const e=files[i];const target=await e.parentHandle.getFileHandle(e.newName,{create:true});const writable=await target.createWritable();await writable.write(e.file);await writable.close();const check=await target.getFile();if(check.size!==e.file.size)throw new Error(`Kiểm tra dung lượng thất bại: ${e.name}`);await e.parentHandle.removeEntry(e.name);setStatus(`Đã đổi ${i+1}/${files.length}`,Math.round((i+1)/files.length*100));}endBusy(`Đã đổi tên ${files.length} tệp. Thư mục không được đổi tên tại chỗ.`);await pickRenameDirectory();}catch(e){showError(e)}}

// ===== EXCEL =====
function renderExcelTool(){const tabs=[['inspect','Đọc & xuất JSON'],['manage','Quản lý sheet'],['combine','Gộp sheet'],['workbooks','Gộp nhiều file'],['split','Tách sheet']];mainHost.innerHTML=`<section class="office-tool-panel active"><div class="office-tool-head"><div><h3>Excel</h3><p>Đọc XLSX, XLS, XLSM và CSV; phân biệt ô giá trị với ô công thức.</p></div></div>${subTabs('excel',tabs)}<div id="excelSubHost"></div><div class="office-warning">Ứng dụng đọc công thức và giá trị cached được lưu trong file. Không tự tính lại toàn bộ công thức như Microsoft Excel; không chạy VBA hoặc macro.</div><div class="office-library-warning">Thư viện SheetJS được tải theo phiên bản cố định khi công cụ Excel được mở lần đầu.</div></section>`;bindSubtabs('excel');const h=mainHost.querySelector('#excelSubHost');if(state.sub.excel==='inspect')renderExcelInspect(h);if(state.sub.excel==='manage')renderExcelManage(h);if(state.sub.excel==='combine')renderExcelCombine(h);if(state.sub.excel==='workbooks')renderExcelWorkbooks(h);if(state.sub.excel==='split')renderExcelSplit(h)}
function excelBrowseCard(extra=''){return `<div class="office-card"><div class="office-dropzone" id="excelDrop"><strong>Browse hoặc kéo thả file Excel/CSV</strong><span>XLSX, XLS, XLSM và CSV.</span><input type="file" accept=".xlsx,.xls,.xlsm,.csv" multiple hidden></div><div class="office-toolbar"><button class="office-btn" id="excelAdd">Chọn thêm file</button><button class="office-btn danger" id="excelClear">Xóa danh sách</button></div><div id="excelFileList"></div></div>${extra}`}
function bindExcelLibrary(){const add=async files=>{try{startBusy('Đang đọc workbook…');const XLSX=await ensureXlsx();for(let i=0;i<files.length;i++){const file=files[i];if(!/\.(xlsx|xls|xlsm|csv)$/i.test(file.name))continue;const data=await file.arrayBuffer();const wb=XLSX.read(data,{type:'array',cellFormula:true,cellDates:true,cellNF:true,cellText:true,bookVBA:false});state.excelFiles.push({id:uid(),file,wb});setStatus(`Đang đọc ${i+1}/${files.length}`,Math.round((i+1)/files.length*100));}endBusy(`Đã đọc ${state.excelFiles.length} file.`);renderExcelTool()}catch(e){showError(e)}};const drop=mainHost.querySelector('#excelDrop');bindDropzone(drop,f=>/\.(xlsx|xls|xlsm|csv)$/i.test(f.name),add);drop.querySelector('input').onchange=e=>add([...e.target.files]);mainHost.querySelector('#excelAdd').onclick=async()=>add(await fileInput('.xlsx,.xls,.xlsm,.csv',true));mainHost.querySelector('#excelClear').onclick=()=>{state.excelFiles=[];renderExcelTool()};const l=mainHost.querySelector('#excelFileList');l.innerHTML=listRows(state.excelFiles,it=>`${formatBytes(it.file.size)} · ${it.wb.SheetNames.length} sheet`);bindListActions(l,state.excelFiles,renderExcelTool)}
function renderExcelInspect(h){h.innerHTML=excelBrowseCard(`<div class="office-card"><h4>Cấu trúc workbook</h4><div id="excelOverview"></div><div class="office-toolbar"><label class="office-check"><input id="excelFormatted" type="checkbox" checked> Xuất formattedValue</label><label class="office-check"><input id="excelHyperlinks" type="checkbox" checked> Hyperlink/comment</label><label class="office-check" title="Chỉ nên bật với workbook nhỏ. Với vùng dùng rất lớn, việc xuất cả ô trống có thể tạo hàng triệu hoặc hàng tỷ ô JSON."><input id="excelEmpty" type="checkbox"> Cả ô trống trong vùng dùng</label><span class="spacer"></span><button class="office-btn" id="excelPreviewJson" ${state.excelFiles.length?'':'disabled'}>Xem trước JSON</button><button class="office-btn primary" id="excelExportJson" ${state.excelFiles.length?'':'disabled'}>Xuất 1 JSON</button></div><div class="office-card-note" style="margin-top:8px">File Excel lớn sẽ được xuất JSON tuần tự theo từng sheet/ô để tránh vượt giới hạn bộ nhớ của trình duyệt.</div><pre id="excelJsonPreview" class="office-json-preview" hidden></pre></div>
  <div class="office-card excel-chatgpt-split"><div class="office-card-title-row"><div><h4>Chia JSON để gửi ChatGPT</h4><p class="office-card-note">Mỗi phần là một file JSON độc lập, được đánh số theo thứ tự. Khuyến nghị mặc định 5 MB/phần.</p></div><span class="office-recommend-badge">ChatGPT · 5 MB khuyến nghị</span></div><div class="office-grid three"><label class="office-field"><span>Dung lượng mỗi phần</span><select id="excelSplitMb"><option value="5" selected>5 MB — khuyến nghị</option><option value="8">8 MB — ít file hơn</option><option value="10">10 MB</option><option value="20">20 MB</option><option value="50">50 MB</option></select><small>5 MB là mức bảo thủ để giảm nguy cơ chạm giới hạn token của file văn bản.</small></label><label class="office-field"><span>Cách lưu</span><select id="excelSplitSave"><option value="folder" selected>Thư mục gồm nhiều JSON</option></select><small>Chrome/Edge sẽ hỏi chọn thư mục rồi tạo một thư mục con chứa các phần.</small></label><label class="office-field"><span>Ước tính đầu ra</span><div id="excelSplitEstimate" class="office-estimate-box">${state.excelFiles.length?'Đang chờ ước tính…':'Chưa chọn workbook.'}</div><small id="excelSplitAdvice">Nếu JSON lớn hơn khoảng 5 MB, nên dùng chế độ chia nhỏ.</small></label></div><div class="office-chatgpt-note"><strong>Gợi ý:</strong> ChatGPT có giới hạn file và giới hạn token riêng. Với JSON, nên ưu tiên nhiều file nhỏ thay vì một file rất lớn. File <b>manifest.json</b> đi kèm cho biết thứ tự các phần.</div><div class="office-toolbar"><span class="spacer"></span><button class="office-btn primary" id="excelExportSplit" ${state.excelFiles.length?'':'disabled'}>Xuất JSON chia nhỏ</button></div></div>`);
  bindExcelLibrary();renderExcelOverview();
  mainHost.querySelector('#excelPreviewJson').onclick=()=>{
    try{
      const obj=buildWorkbookJsonPreview(state.excelFiles[0],1200);
      const pre=mainHost.querySelector('#excelJsonPreview');
      pre.hidden=false;
      pre.textContent=JSON.stringify(obj,null,2);
    }catch(e){showError(e)}
  };
  mainHost.querySelector('#excelExportJson').onclick=()=>exportWorkbookJsonStream(state.excelFiles[0]);
  mainHost.querySelector('#excelExportSplit').onclick=()=>exportWorkbookJsonSplit(state.excelFiles[0]);
  const refreshEstimate=()=>updateExcelSplitEstimate(state.excelFiles[0]);
  mainHost.querySelector('#excelSplitMb').onchange=refreshEstimate;
  ['#excelFormatted','#excelHyperlinks','#excelEmpty'].forEach(sel=>mainHost.querySelector(sel)?.addEventListener('change',refreshEstimate));
  setTimeout(refreshEstimate,0);
}
function renderExcelOverview(){const host=mainHost.querySelector('#excelOverview');if(!state.excelFiles.length){host.innerHTML='<div class="office-empty">Chưa chọn workbook.</div>';return}const item=state.excelFiles[0];host.innerHTML=`<strong>${escapeHtml(item.file.name)}</strong><div class="office-sheet-list" style="margin-top:9px">${item.wb.SheetNames.map(n=>{const ws=item.wb.Sheets[n],ref=ws['!ref']||'Trống';return `<span class="office-sheet-chip">${escapeHtml(n)} · ${escapeHtml(ref)}</span>`}).join('')}</div>`}
function excelCellType(cell){return cell.t==='n'?'number':cell.t==='b'?'boolean':cell.t==='d'?'date':cell.t==='e'?'error':'string'}
function excelJsonOptions(){
  return {
    formatted:mainHost.querySelector('#excelFormatted')?.checked??true,
    links:mainHost.querySelector('#excelHyperlinks')?.checked??true,
    includeEmpty:mainHost.querySelector('#excelEmpty')?.checked??false
  };
}
function excelRangeCellCount(range){
  const XLSX=globalThis.XLSX,r=XLSX.utils.decode_range(range||'A1:A1');
  return (r.e.r-r.s.r+1)*(r.e.c-r.s.c+1);
}
function validateExcelEmptyExport(item,includeEmpty){
  if(!includeEmpty)return;
  let total=0;
  for(const name of item.wb.SheetNames){
    const ws=item.wb.Sheets[name],range=ws['!ref']||'A1:A1';
    const count=excelRangeCellCount(range);
    if(count>2000000)throw new Error(`Sheet “${name}” có vùng dùng ${range}, tương đương ${count.toLocaleString('vi-VN')} ô. Không nên bật “Cả ô trống trong vùng dùng” cho sheet này. Hãy bỏ chọn tùy chọn đó rồi xuất lại.`);
    total+=count;
    if(total>5000000)throw new Error(`Tổng vùng dùng vượt ${total.toLocaleString('vi-VN')} ô. Hãy bỏ chọn “Cả ô trống trong vùng dùng” để chỉ xuất những ô thực sự có dữ liệu/công thức.`);
  }
}
function buildWorkbookJsonPreview(item,maxCells=1200){
  if(!item)throw new Error('Chưa chọn workbook.');
  const {formatted,links,includeEmpty}=excelJsonOptions(),XLSX=globalThis.XLSX;
  validateExcelEmptyExport(item,includeEmpty);
  let remaining=maxCells,totalShown=0,truncated=false;
  const sheets=[];
  for(const name of item.wb.SheetNames){
    const ws=item.wb.Sheets[name],range=ws['!ref']||'A1:A1',cells={};
    if(remaining>0){
      if(includeEmpty){
        const r=XLSX.utils.decode_range(range);
        outer:for(let R=r.s.r;R<=r.e.r;R++)for(let C=r.s.c;C<=r.e.c;C++){
          if(remaining<=0){truncated=true;break outer}
          const addr=XLSX.utils.encode_cell({r:R,c:C});
          cells[addr]=cellJson(ws[addr],formatted,links);
          remaining--;totalShown++;
        }
      }else{
        for(const addr of Object.keys(ws)){
          if(addr.startsWith('!'))continue;
          if(remaining<=0){truncated=true;break}
          cells[addr]=cellJson(ws[addr],formatted,links);
          remaining--;totalShown++;
        }
      }
    }else truncated=true;
    sheets.push({name,range,mergedRanges:(ws['!merges']||[]).map(r=>XLSX.utils.encode_range(r)),cells});
  }
  return {
    formatVersion:1,
    preview:true,
    previewLimitCells:maxCells,
    previewCellsShown:totalShown,
    previewTruncated:truncated,
    sourceFile:{name:item.file.name,size:item.file.size,exportedAt:new Date().toISOString()},
    workbook:{sheetOrder:[...item.wb.SheetNames]},
    sheets
  };
}
function estimateWorkbookJsonSize(item,sampleLimit=5000){
  if(!item)return {bytes:0,cells:0,sampled:0};
  const {formatted,links,includeEmpty}=excelJsonOptions(),XLSX=globalThis.XLSX,encoder=new TextEncoder();
  validateExcelEmptyExport(item,includeEmpty);
  let totalCells=0,sampled=0,sampleBytes=0;
  for(const name of item.wb.SheetNames){
    const ws=item.wb.Sheets[name],range=ws['!ref']||'A1:A1';
    if(includeEmpty){
      const count=excelRangeCellCount(range);totalCells+=count;
      if(sampled<sampleLimit){
        const r=XLSX.utils.decode_range(range);
        outer:for(let R=r.s.r;R<=r.e.r;R++)for(let C=r.s.c;C<=r.e.c;C++){
          const addr=XLSX.utils.encode_cell({r:R,c:C});
          sampleBytes+=encoder.encode(`${JSON.stringify(addr)}:${JSON.stringify(cellJson(ws[addr],formatted,links))},`).length;
          sampled++;if(sampled>=sampleLimit)break outer;
        }
      }
    }else{
      for(const addr in ws){
        if(addr.startsWith('!'))continue;
        totalCells++;
        if(sampled<sampleLimit){
          sampleBytes+=encoder.encode(`${JSON.stringify(addr)}:${JSON.stringify(cellJson(ws[addr],formatted,links))},`).length;
          sampled++;
        }
      }
    }
  }
  const avg=sampled?sampleBytes/sampled:40;
  const metadata=4096+item.wb.SheetNames.length*512;
  return {bytes:Math.ceil(metadata+avg*totalCells),cells:totalCells,sampled};
}
function updateExcelSplitEstimate(item){
  const host=mainHost.querySelector('#excelSplitEstimate'),advice=mainHost.querySelector('#excelSplitAdvice');
  if(!host||!advice)return;
  if(!item){host.textContent='Chưa chọn workbook.';return}
  try{
    const estimate=estimateWorkbookJsonSize(item),mb=Math.max(1,+mainHost.querySelector('#excelSplitMb')?.value||5),parts=Math.max(1,Math.ceil(estimate.bytes/(mb*1024*1024*.90)));
    host.innerHTML=`<strong>~ ${formatBytes(estimate.bytes)}</strong><span>${estimate.cells.toLocaleString('vi-VN')} ô · khoảng ${parts} file</span>`;
    if(estimate.bytes<=5*1024*1024)advice.textContent='Ước tính nhỏ: có thể xuất 1 JSON; chia nhỏ vẫn dùng được nếu muốn.';
    else if(parts<=20)advice.textContent=`Khuyến nghị ${mb===5?'giữ 5 MB':'5 MB'} mỗi phần; dự kiến khoảng ${Math.ceil(estimate.bytes/(5*1024*1024*.90))} file ở mức 5 MB.`;
    else advice.textContent='Workbook rất lớn: nên giữ 5 MB/phần và upload các part theo từng nhóm nếu ChatGPT không nhận hết một lần.';
  }catch(e){host.textContent='Không ước tính được.';advice.textContent=e.message}
}
async function createSplitJsonDestination(item){
  if(!('showDirectoryPicker'in window))throw new Error('Tính năng chia nhiều file cần Chrome hoặc Edge hỗ trợ chọn thư mục.');
  const rootHandle=await showDirectoryPicker({mode:'readwrite'});
  const folderName=safeName(`${baseName(item.file.name)}_JSON_ChatGPT`);
  const folder=await rootHandle.getDirectoryHandle(folderName,{create:true});
  return {
    folderName,
    async writeFile(name,text){
      const handle=await folder.getFileHandle(safeName(name),{create:true});
      const writable=await handle.createWritable();await writable.write(text);await writable.close();
    }
  };
}
async function exportWorkbookJsonSplit(item){
  let destination=null;
  try{
    if(!item)throw new Error('Chưa chọn workbook.');
    const {formatted,links,includeEmpty}=excelJsonOptions(),XLSX=globalThis.XLSX,encoder=new TextEncoder();
    validateExcelEmptyExport(item,includeEmpty);
    const targetMb=Math.max(1,+mainHost.querySelector('#excelSplitMb')?.value||5),targetBytes=targetMb*1024*1024;
    destination=await createSplitJsonDestination(item);
    startBusy('Đang chia JSON thành nhiều phần…');

    const sourceFile={name:item.file.name,size:item.file.size,exportedAt:new Date().toISOString()};
    const workbook={sheetOrder:[...item.wb.SheetNames]};
    const outputs=[];
    let partNo=1,currentChunks=[],currentApprox=1200,currentSheet=null,currentChunk=null,chunkIndexBySheet=new Map();

    const newChunk=(name,range,merges)=>{
      const next=(chunkIndexBySheet.get(name)||0)+1;chunkIndexBySheet.set(name,next);
      const chunk={sheetName:name,sheetRange:range,chunkIndex:next,mergedRanges:next===1?merges:[],cells:{}};
      currentChunks.push(chunk);currentSheet=name;currentChunk=chunk;currentApprox+=encoder.encode(JSON.stringify({sheetName:name,sheetRange:range,chunkIndex:next,mergedRanges:chunk.mergedRanges,cells:{}})).length+64;
      return chunk;
    };
    const flushPart=async()=>{
      if(!currentChunks.length)return;
      const payload={formatVersion:2,sourceFile,workbook,splitExport:{partNumber:partNo,targetSizeMB:targetMb},chunks:currentChunks};
      const text=JSON.stringify(payload);
      const filename=`${baseName(item.file.name)}_part_${String(partNo).padStart(3,'0')}.json`;
      await destination.writeFile(filename,text);
      outputs.push({file:filename,bytes:encoder.encode(text).length,sheets:[...new Set(currentChunks.map(c=>c.sheetName))]});
      partNo++;currentChunks=[];currentApprox=1200;currentSheet=null;currentChunk=null;
    };
    const appendCell=async(name,range,merges,addr,cell)=>{
      const record=cellJson(cell,formatted,links),entryBytes=encoder.encode(`${JSON.stringify(addr)}:${JSON.stringify(record)},`).length;
      if(!currentChunk||currentSheet!==name)newChunk(name,range,merges);
      if(currentApprox+entryBytes>targetBytes*.90&&Object.keys(currentChunk.cells).length){
        await flushPart();newChunk(name,range,merges);
      }
      currentChunk.cells[addr]=record;currentApprox+=entryBytes;
    };

    const sheetCount=item.wb.SheetNames.length;
    for(let si=0;si<sheetCount;si++){
      assertNotAborted();
      const name=item.wb.SheetNames[si],ws=item.wb.Sheets[name],range=ws['!ref']||'A1:A1',merges=(ws['!merges']||[]).map(r=>XLSX.utils.encode_range(r));
      if(includeEmpty){
        const r=XLSX.utils.decode_range(range),totalRows=r.e.r-r.s.r+1;
        for(let R=r.s.r;R<=r.e.r;R++){
          assertNotAborted();
          for(let C=r.s.c;C<=r.e.c;C++){
            const addr=XLSX.utils.encode_cell({r:R,c:C});await appendCell(name,range,merges,addr,ws[addr]);
          }
          if((R-r.s.r)%50===0){setStatus(`Sheet ${si+1}/${sheetCount}: ${name}`,((si+(R-r.s.r+1)/Math.max(1,totalRows))/sheetCount)*95);await sleep()}
        }
      }else{
        let done=0,total=0;for(const key in ws)if(!key.startsWith('!'))total++;
        for(const addr in ws){
          if(addr.startsWith('!'))continue;assertNotAborted();await appendCell(name,range,merges,addr,ws[addr]);done++;
          if(done%2500===0){setStatus(`Sheet ${si+1}/${sheetCount}: ${name} · ${done}/${total} ô`,((si+done/Math.max(1,total))/sheetCount)*95);await sleep()}
        }
      }
      setStatus(`Đã xử lý sheet ${si+1}/${sheetCount}: ${name}`,((si+1)/sheetCount)*95);await sleep();
    }
    await flushPart();
    const totalBytes=outputs.reduce((n,p)=>n+p.bytes,0);
    const manifest={formatVersion:1,purpose:'Excel JSON parts for ChatGPT',sourceFile,split:{targetSizeMB:targetMb,totalParts:outputs.length,totalBytes,createdAt:new Date().toISOString()},workbook,parts:outputs,instructions:['Các file part được đánh số theo thứ tự.','Khi gửi cho AI, nên gửi manifest.json cùng các part cần phân tích.','Nếu không thể upload toàn bộ part cùng lúc, hãy upload theo nhóm và nói rõ số part đang gửi.']};
    await destination.writeFile(`${baseName(item.file.name)}_manifest.json`,JSON.stringify(manifest,null,2));
    endBusy(`Đã tạo ${outputs.length} file JSON (~${targetMb} MB/phần) + manifest trong thư mục ${destination.folderName}.`);
  }catch(e){
    if(e?.name==='AbortError'){endBusy('Đã hủy tác vụ.');return}
    showError(e);
  }
}

async function createJsonOutputSink(filename){
  const safe=safeName(filename,'.json');
  if('showSaveFilePicker'in window){
    const handle=await showSaveFilePicker({
      suggestedName:safe,
      types:[{description:'JSON',accept:{'application/json':['.json']}}]
    });
    const writable=await handle.createWritable();
    return {
      write:chunk=>writable.write(chunk),
      close:()=>writable.close(),
      abort:()=>writable.abort?.()
    };
  }
  const parts=[];
  return {
    write:chunk=>{parts.push(chunk)},
    close:async()=>{
      const blob=new Blob(parts,{type:'application/json'});
      const url=URL.createObjectURL(blob),a=document.createElement('a');
      a.href=url;a.download=safe;document.body.appendChild(a);a.click();a.remove();
      setTimeout(()=>URL.revokeObjectURL(url),3000);
    },
    abort:()=>{parts.length=0}
  };
}
async function exportWorkbookJsonStream(item){
  let sink=null;
  try{
    if(!item)throw new Error('Chưa chọn workbook.');
    const {formatted,links,includeEmpty}=excelJsonOptions(),XLSX=globalThis.XLSX;
    validateExcelEmptyExport(item,includeEmpty);

    // Mở hộp thoại lưu ngay khi người dùng vừa click, tránh mất user activation.
    sink=await createJsonOutputSink(`${baseName(item.file.name)}_cells.json`);
    startBusy('Đang xuất JSON tuần tự…');

    const meta={
      formatVersion:1,
      sourceFile:{name:item.file.name,size:item.file.size,exportedAt:new Date().toISOString()},
      workbook:{sheetOrder:[...item.wb.SheetNames]}
    };
    await sink.write('{\n');
    await sink.write(`  "formatVersion": ${meta.formatVersion},\n`);
    await sink.write(`  "sourceFile": ${JSON.stringify(meta.sourceFile)},\n`);
    await sink.write(`  "workbook": ${JSON.stringify(meta.workbook)},\n`);
    await sink.write('  "sheets": [\n');

    const sheetCount=item.wb.SheetNames.length;
    for(let si=0;si<sheetCount;si++){
      assertNotAborted();
      const name=item.wb.SheetNames[si],ws=item.wb.Sheets[name],range=ws['!ref']||'A1:A1';
      const merges=(ws['!merges']||[]).map(r=>XLSX.utils.encode_range(r));

      if(si)await sink.write(',\n');
      await sink.write('    {\n');
      await sink.write(`      "name": ${JSON.stringify(name)},\n`);
      await sink.write(`      "range": ${JSON.stringify(range)},\n`);
      await sink.write(`      "mergedRanges": ${JSON.stringify(merges)},\n`);
      await sink.write('      "cells": {\n');

      let first=true,buffer='',writtenCells=0;
      const flush=async(force=false)=>{
        if(buffer.length>=524288||force){
          if(buffer){await sink.write(buffer);buffer=''}
        }
      };

      const appendCell=async(addr,cell)=>{
        const prefix=first?'':',\n';
        first=false;
        buffer+=`${prefix}        ${JSON.stringify(addr)}: ${JSON.stringify(cellJson(cell,formatted,links))}`;
        writtenCells++;
        if(buffer.length>=524288){await sink.write(buffer);buffer=''}
      };

      if(includeEmpty){
        const r=XLSX.utils.decode_range(range);
        const totalRows=r.e.r-r.s.r+1;
        for(let R=r.s.r;R<=r.e.r;R++){
          assertNotAborted();
          for(let C=r.s.c;C<=r.e.c;C++){
            const addr=XLSX.utils.encode_cell({r:R,c:C});
            await appendCell(addr,ws[addr]);
          }
          if((R-r.s.r)%100===0){
            const sheetProgress=(R-r.s.r+1)/Math.max(1,totalRows);
            const overall=((si+sheetProgress)/sheetCount)*100;
            setStatus(`Sheet ${si+1}/${sheetCount}: ${name} · ${writtenCells.toLocaleString('vi-VN')} ô`,overall);
            await sleep();
          }
        }
      }else{
        const keys=Object.keys(ws).filter(k=>!k.startsWith('!'));
        for(let ki=0;ki<keys.length;ki++){
          assertNotAborted();
          const addr=keys[ki];
          await appendCell(addr,ws[addr]);
          if(ki%3000===0){
            const sheetProgress=(ki+1)/Math.max(1,keys.length);
            const overall=((si+sheetProgress)/sheetCount)*100;
            setStatus(`Sheet ${si+1}/${sheetCount}: ${name} · ${ki+1}/${keys.length} ô`,overall);
            await sleep();
          }
        }
      }
      if(buffer)await sink.write(buffer);
      await sink.write('\n      }\n    }');
      setStatus(`Đã xuất sheet ${si+1}/${sheetCount}: ${name}`,((si+1)/sheetCount)*100);
      await sleep();
    }

    await sink.write('\n  ]\n}\n');
    await sink.close();
    sink=null;
    endBusy(`Đã xuất JSON ${item.wb.SheetNames.length} sheet mà không tạo một chuỗi JSON khổng lồ trong RAM.`);
  }catch(e){
    try{await sink?.abort?.()}catch{}
    if(e?.name==='AbortError'){endBusy('Đã hủy tác vụ.');return}
    showError(e);
  }
}
function cellJson(cell,formatted,links){if(!cell)return {kind:'blank',valueType:'blank',rawValue:null};const o=cell.f?{kind:'formula',formula:cell.f,cachedValue:cell.v}:{kind:'value',valueType:excelCellType(cell),rawValue:cell.v};if(formatted&&cell.w!=null)o.formattedValue=cell.w;if(links&&cell.l)o.hyperlink=cell.l.Target||cell.l.target;if(links&&cell.c)o.comments=cell.c.map(c=>({author:c.a,text:c.t}));return o}
function renderExcelManage(h){h.innerHTML=excelBrowseCard(`<div class="office-card"><h4>Quản lý sheet trong bản kết quả</h4><p class="office-card-note">Các thao tác chỉ áp dụng cho bản đang mở trong trình duyệt. File gốc trên máy không bị thay đổi.</p><div class="office-grid"><label class="office-field"><span>Sheet đang chọn</span><select id="excelManageSheet"></select></label><label class="office-field"><span>Tên mới</span><input id="excelManageName" maxlength="31"></label></div><div class="office-toolbar"><button class="office-btn" id="excelSheetUp">↑ Lên</button><button class="office-btn" id="excelSheetDown">↓ Xuống</button><button class="office-btn" id="excelSheetRename">Đổi tên</button><button class="office-btn" id="excelSheetDuplicate">Nhân bản</button><button class="office-btn danger" id="excelSheetDelete">Xóa sheet</button><span class="spacer"></span><button class="office-btn primary" id="excelManageExport">Xuất workbook XLSX</button></div></div><div class="office-card"><h4>Làm sạch dữ liệu cơ bản</h4><p class="office-card-note">Trim/chuyển số không tác động ô công thức. Xóa hàng/cột trống hoặc dòng trùng sẽ dựng lại sheet và có thể bỏ định dạng phức tạp; nếu sheet có công thức, ứng dụng sẽ không cho chạy thao tác cấu trúc.</p><div class="office-toolbar"><label class="office-check"><input id="excelCleanTrim" type="checkbox" checked> Trim khoảng trắng</label><label class="office-check"><input id="excelCleanSpaces" type="checkbox" checked> Gộp nhiều khoảng trắng</label><label class="office-check"><input id="excelCleanNumbers" type="checkbox"> Text số → number</label><label class="office-check"><input id="excelCleanRows" type="checkbox"> Xóa hàng trống</label><label class="office-check"><input id="excelCleanCols" type="checkbox"> Xóa cột trống</label><label class="office-check"><input id="excelCleanDup" type="checkbox"> Xóa dòng trùng</label><span class="spacer"></span><button class="office-btn" id="excelCleanRun">Làm sạch sheet</button></div><div id="excelManagePreview" class="office-table-wrap"></div></div>`);bindExcelLibrary();renderExcelManageControls();}
function renderExcelManageControls(){const item=state.excelFiles[0],sel=mainHost.querySelector('#excelManageSheet'),preview=mainHost.querySelector('#excelManagePreview');if(!item){sel.innerHTML='<option>Chưa có workbook</option>';['excelSheetUp','excelSheetDown','excelSheetRename','excelSheetDuplicate','excelSheetDelete','excelManageExport','excelCleanRun'].forEach(id=>mainHost.querySelector('#'+id).disabled=true);preview.innerHTML='<div class="office-empty">Chưa chọn workbook.</div>';return}sel.innerHTML=item.wb.SheetNames.map(n=>`<option value="${escapeHtml(n)}">${escapeHtml(n)}</option>`).join('');const sync=()=>{mainHost.querySelector('#excelManageName').value=sel.value;renderExcelSheetPreview(item,sel.value)};sel.onchange=sync;sync();mainHost.querySelector('#excelSheetUp').onclick=()=>reorderExcelSheet(-1);mainHost.querySelector('#excelSheetDown').onclick=()=>reorderExcelSheet(1);mainHost.querySelector('#excelSheetRename').onclick=renameExcelSheet;mainHost.querySelector('#excelSheetDuplicate').onclick=duplicateExcelSheet;mainHost.querySelector('#excelSheetDelete').onclick=deleteExcelSheet;mainHost.querySelector('#excelManageExport').onclick=exportManagedWorkbook;mainHost.querySelector('#excelCleanRun').onclick=cleanExcelSheet;}
function renderExcelSheetPreview(item,name){const host=mainHost.querySelector('#excelManagePreview'),XLSX=globalThis.XLSX,rows=XLSX.utils.sheet_to_json(item.wb.Sheets[name],{header:1,defval:'',raw:false}).slice(0,20),cols=Math.min(12,Math.max(1,...rows.map(r=>r.length)));host.innerHTML=`<table class="office-table"><tbody>${rows.map((r,i)=>`<tr>${Array.from({length:cols},(_,c)=>`<${i?'td':'th'}>${escapeHtml(r[c]??'')}</${i?'td':'th'}>`).join('')}</tr>`).join('')}</tbody></table><div class="office-card-note" style="padding:8px">Xem trước tối đa 20 dòng và 12 cột.</div>`}
function currentExcelManage(){const item=state.excelFiles[0],name=mainHost.querySelector('#excelManageSheet')?.value;return {item,name}}
function reorderExcelSheet(delta){const {item,name}=currentExcelManage();if(!item)return;const i=item.wb.SheetNames.indexOf(name),j=i+delta;if(i<0||j<0||j>=item.wb.SheetNames.length)return;[item.wb.SheetNames[i],item.wb.SheetNames[j]]=[item.wb.SheetNames[j],item.wb.SheetNames[i]];renderExcelTool();requestAnimationFrame(()=>{const s=mainHost.querySelector('#excelManageSheet');if(s){s.value=name;s.dispatchEvent(new Event('change'))}})}
function validSheetName(name){return String(name||'').trim().replace(/[\\/?*\[\]:]/g,'_').slice(0,31)}
function renameExcelSheet(){const {item,name}=currentExcelManage();if(!item)return;const next=validSheetName(mainHost.querySelector('#excelManageName').value);if(!next)return setStatus('Tên sheet không được để trống.');if(next!==name&&item.wb.SheetNames.includes(next))return setStatus('Tên sheet đã tồn tại.');item.wb.Sheets[next]=item.wb.Sheets[name];if(next!==name)delete item.wb.Sheets[name];item.wb.SheetNames[item.wb.SheetNames.indexOf(name)]=next;renderExcelTool();}
function duplicateExcelSheet(){const {item,name}=currentExcelManage();if(!item)return;let next=validSheetName(name+'_copy'),n=2;while(item.wb.SheetNames.includes(next))next=validSheetName(`${name}_copy_${n++}`);item.wb.Sheets[next]=cloneWorksheet(item.wb.Sheets[name]);item.wb.SheetNames.splice(item.wb.SheetNames.indexOf(name)+1,0,next);renderExcelTool();}
function deleteExcelSheet(){const {item,name}=currentExcelManage();if(!item||item.wb.SheetNames.length<=1)return setStatus('Workbook phải còn ít nhất một sheet.');item.wb.SheetNames=item.wb.SheetNames.filter(n=>n!==name);delete item.wb.Sheets[name];renderExcelTool();}
async function exportManagedWorkbook(){try{const item=state.excelFiles[0];if(!item)throw new Error('Chưa chọn workbook.');startBusy('Đang xuất workbook…');const arr=globalThis.XLSX.write(item.wb,{type:'array',bookType:'xlsx'});await saveBlob(new Blob([arr],{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'}),`${baseName(item.file.name)}_da_chinh_sua.xlsx`,'XLSX');endBusy('Đã xuất workbook mới.')}catch(e){showError(e)}}
function cleanExcelSheet(){try{const {item,name}=currentExcelManage();if(!item)throw new Error('Chưa chọn workbook.');const XLSX=globalThis.XLSX,ws=item.wb.Sheets[name],trim=mainHost.querySelector('#excelCleanTrim').checked,spaces=mainHost.querySelector('#excelCleanSpaces').checked,numbers=mainHost.querySelector('#excelCleanNumbers').checked,rowsOpt=mainHost.querySelector('#excelCleanRows').checked,colsOpt=mainHost.querySelector('#excelCleanCols').checked,dupOpt=mainHost.querySelector('#excelCleanDup').checked;Object.keys(ws).filter(a=>!a.startsWith('!')).forEach(a=>{const cell=ws[a];if(cell.f||typeof cell.v!=='string')return;let v=cell.v;if(trim)v=v.trim();if(spaces)v=v.replace(/\s+/g,' ');if(numbers&&v!==''&&/^[-+]?\d+(?:[.,]\d+)?$/.test(v)){const num=Number(v.replace(',','.'));if(Number.isFinite(num)){cell.v=num;cell.t='n';delete cell.w;return}}cell.v=v;delete cell.w});if(rowsOpt||colsOpt||dupOpt){const hasFormula=Object.keys(ws).some(a=>!a.startsWith('!')&&ws[a]?.f);if(hasFormula)throw new Error('Sheet có công thức; không thực hiện xóa hàng/cột hoặc dòng trùng để tránh sai tham chiếu. Hãy chỉ dùng Trim/chuyển số.');let rows=XLSX.utils.sheet_to_json(ws,{header:1,defval:null,raw:true});if(rowsOpt)rows=rows.filter(r=>r.some(v=>v!==null&&v!==''));if(dupOpt){const seen=new Set();rows=rows.filter(r=>{const key=JSON.stringify(r);if(seen.has(key))return false;seen.add(key);return true})}if(colsOpt){const max=Math.max(0,...rows.map(r=>r.length));const keep=Array.from({length:max},(_,c)=>rows.some(r=>r[c]!==null&&r[c]!==''));rows=rows.map(r=>r.filter((_,c)=>keep[c]));}item.wb.Sheets[name]=XLSX.utils.aoa_to_sheet(rows)}setStatus(`Đã làm sạch sheet “${name}”. Hãy xuất workbook để lưu kết quả.`,100);renderExcelTool();}catch(e){showError(e)}}
function renderExcelCombine(h){h.innerHTML=excelBrowseCard(`<div class="office-card"><h4>Gộp các sheet đã chọn</h4><p class="office-card-note">Chọn các sheet cần nối thành một bảng dữ liệu. Mặc định, ứng dụng nối dữ liệu theo đúng vị trí cột A, B, C… của từng sheet.</p><div id="excelCombineSheets" class="office-sheet-list"></div><div class="office-grid three" style="margin-top:10px"><label class="office-field" data-tooltip="Chọn cách đối chiếu cột giữa các sheet khi gộp" title="Chọn cách đối chiếu cột giữa các sheet khi gộp"><span>Chế độ</span><select id="excelCombineMode" data-tooltip="Gộp theo vị trí cột: cột A nối với A, B nối với B…; phù hợp khi các sheet có cùng bố cục" title="Gộp theo vị trí cột: cột A nối với A, B nối với B…; phù hợp khi các sheet có cùng bố cục"><option value="position" selected>Gộp theo vị trí cột</option><option value="header">Gộp theo tên tiêu đề</option></select><small id="excelCombineModeHelp" class="office-field-help">Nối dữ liệu theo đúng vị trí cột: A với A, B với B, C với C… Dùng khi các sheet có cùng thứ tự cột.</small></label><label class="office-field" data-tooltip="Dòng chứa tên cột của mỗi sheet; dữ liệu sẽ bắt đầu từ dòng kế tiếp" title="Dòng chứa tên cột của mỗi sheet; dữ liệu sẽ bắt đầu từ dòng kế tiếp"><span>Hàng tiêu đề</span><input id="excelHeaderRow" type="number" min="1" value="1" data-tooltip="Ví dụ nhập 1 nếu tên cột nằm ở dòng đầu tiên" title="Ví dụ nhập 1 nếu tên cột nằm ở dòng đầu tiên"></label><label class="office-field" data-tooltip="Định dạng file kết quả sau khi gộp" title="Định dạng file kết quả sau khi gộp"><span>Đầu ra</span><select id="excelCombineOutput"><option value="xlsx">XLSX</option><option value="csv">CSV</option><option value="json">JSON</option></select></label></div><div class="office-toolbar"><label class="office-check" data-tooltip="Thêm một cột ghi tên sheet nguồn của từng dòng" title="Thêm một cột ghi tên sheet nguồn của từng dòng"><input id="excelAddSource" type="checkbox" checked> Thêm cột Nguồn sheet</label><label class="office-check" data-tooltip="Không đưa những dòng hoàn toàn trống vào kết quả" title="Không đưa những dòng hoàn toàn trống vào kết quả"><input id="excelSkipBlank" type="checkbox" checked> Bỏ dòng trống</label><span class="spacer"></span><button class="office-btn primary" id="excelCombineRun" ${state.excelFiles.length?'':'disabled'} data-tooltip="Bắt đầu gộp các sheet đã tích chọn" title="Bắt đầu gộp các sheet đã tích chọn">Gộp sheet</button></div></div>`);bindExcelLibrary();renderCombineSheetChecks();const modeSelect=mainHost.querySelector('#excelCombineMode'),modeHelp=mainHost.querySelector('#excelCombineModeHelp');const syncHelp=()=>{if(modeSelect.value==='position'){modeHelp.textContent='Nối dữ liệu theo đúng vị trí cột: A với A, B với B, C với C… Dùng khi các sheet có cùng thứ tự cột.';modeSelect.dataset.tooltip='Gộp theo vị trí cột: cột A nối với A, B nối với B…; phù hợp khi các sheet có cùng bố cục';modeSelect.title=modeSelect.dataset.tooltip;}else{modeHelp.textContent='Đối chiếu theo đúng tên tiêu đề. Dùng khi các sheet có cùng tên cột nhưng thứ tự cột khác nhau.';modeSelect.dataset.tooltip='Gộp theo tên tiêu đề: tìm cột có cùng tên rồi đưa dữ liệu vào đúng cột, kể cả khi thứ tự cột giữa các sheet khác nhau';modeSelect.title=modeSelect.dataset.tooltip;}};modeSelect.addEventListener('change',syncHelp);syncHelp();mainHost.querySelector('#excelCombineRun').onclick=runExcelCombine;}
function renderCombineSheetChecks(){const host=mainHost.querySelector('#excelCombineSheets');if(!state.excelFiles.length){host.innerHTML='<div class="office-empty">Chưa có workbook.</div>';return}const item=state.excelFiles[0];host.innerHTML=item.wb.SheetNames.map(n=>`<label class="office-sheet-chip"><input type="checkbox" value="${escapeHtml(n)}" checked> ${escapeHtml(n)}</label>`).join('')}
function combineRows(item,names,mode,headerRow,addSource,skipBlank){const XLSX=globalThis.XLSX,sheets=names.map(name=>({name,rows:XLSX.utils.sheet_to_json(item.wb.Sheets[name],{header:1,defval:null,raw:true})}));if(mode==='position'){let out=[],header=sheets[0]?.rows[headerRow-1]||[];out.push(addSource?['Nguồn sheet',...header]:header);sheets.forEach(s=>s.rows.slice(headerRow).forEach(r=>{if(skipBlank&&r.every(v=>v==null||v===''))return;out.push(addSource?[s.name,...r]:r)}));return out}const headers=[];sheets.forEach(s=>(s.rows[headerRow-1]||[]).forEach(h=>{const v=String(h??'').trim();if(v&&!headers.includes(v))headers.push(v)}));const out=[addSource?['Nguồn sheet',...headers]:headers];sheets.forEach(s=>{const sh=(s.rows[headerRow-1]||[]).map(v=>String(v??'').trim());s.rows.slice(headerRow).forEach(r=>{if(skipBlank&&r.every(v=>v==null||v===''))return;const row=headers.map(h=>r[sh.indexOf(h)]??null);out.push(addSource?[s.name,...row]:row)})});return out}
async function runExcelCombine(){try{const item=state.excelFiles[0];if(!item)throw new Error('Chưa chọn workbook.');const names=[...mainHost.querySelectorAll('#excelCombineSheets input:checked')].map(x=>x.value);if(!names.length)throw new Error('Hãy chọn ít nhất một sheet.');startBusy('Đang gộp sheet…');const mode=mainHost.querySelector('#excelCombineMode').value,header=+mainHost.querySelector('#excelHeaderRow').value||1,rows=combineRows(item,names,mode,header,mainHost.querySelector('#excelAddSource').checked,mainHost.querySelector('#excelSkipBlank').checked),type=mainHost.querySelector('#excelCombineOutput').value,XLSX=globalThis.XLSX;if(type==='json')await saveBlob(new Blob([JSON.stringify(rows,null,2)],{type:'application/json'}),`${baseName(item.file.name)}_tong_hop.json`,'JSON');else if(type==='csv'){const ws=XLSX.utils.aoa_to_sheet(rows);await saveBlob(new Blob(['\ufeff'+XLSX.utils.sheet_to_csv(ws)],{type:'text/csv;charset=utf-8'}),`${baseName(item.file.name)}_tong_hop.csv`,'CSV')}else{const wb=XLSX.utils.book_new();XLSX.utils.book_append_sheet(wb,XLSX.utils.aoa_to_sheet(rows),'Tổng hợp');const arr=XLSX.write(wb,{type:'array',bookType:'xlsx'});await saveBlob(new Blob([arr],{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'}),`${baseName(item.file.name)}_tong_hop.xlsx`,'XLSX')}endBusy(`Đã gộp ${names.length} sheet.`);}catch(e){showError(e)}}
function renderExcelWorkbooks(h){h.innerHTML=excelBrowseCard(`<div class="office-card"><h4>Gộp nhiều workbook</h4><p class="office-card-note">Mỗi sheet được giữ thành một sheet riêng. Nếu trùng tên, tự thêm _2, _3. Dữ liệu ô và công thức được sao chép; định dạng phức tạp có thể không giữ nguyên hoàn toàn.</p><div class="office-toolbar"><span class="spacer"></span><button class="office-btn primary" id="excelMergeBooks" ${state.excelFiles.length>1?'':'disabled'}>Gộp thành một XLSX</button></div></div>`);bindExcelLibrary();mainHost.querySelector('#excelMergeBooks').onclick=runExcelMergeBooks;}
function cloneWorksheet(ws){const out={};Object.keys(ws).forEach(k=>{if(k==='!merges')out[k]=(ws[k]||[]).map(x=>({...x,s:{...x.s},e:{...x.e}}));else if(k.startsWith('!'))out[k]=ws[k];else out[k]={...ws[k],c:ws[k].c?.map(c=>({...c})),l:ws[k].l?{...ws[k].l}:undefined}});return out}
async function runExcelMergeBooks(){try{startBusy('Đang gộp workbook…');const XLSX=globalThis.XLSX,out=XLSX.utils.book_new(),used=new Set();for(let i=0;i<state.excelFiles.length;i++){const item=state.excelFiles[i];for(const old of item.wb.SheetNames){let name=old.slice(0,31)||'Sheet',n=2;while(used.has(name))name=`${old.slice(0,27)}_${n++}`.slice(0,31);used.add(name);XLSX.utils.book_append_sheet(out,cloneWorksheet(item.wb.Sheets[old]),name)}setStatus(`Đang gộp file ${i+1}/${state.excelFiles.length}`,Math.round((i+1)/state.excelFiles.length*85))}const arr=XLSX.write(out,{type:'array',bookType:'xlsx',cellStyles:false});await saveBlob(new Blob([arr],{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'}),'Workbook_da_gop.xlsx','XLSX');endBusy(`Đã gộp ${state.excelFiles.length} file.`);}catch(e){showError(e)}}
function renderExcelSplit(h){h.innerHTML=excelBrowseCard(`<div class="office-card"><h4>Tách mỗi sheet thành file riêng</h4><p class="office-card-note">Chọn XLSX để tách mỗi sheet thành XLSX hoặc CSV; kết quả được đóng gói ZIP.</p><label class="office-field"><span>Định dạng</span><select id="excelSplitFormat"><option value="xlsx">Mỗi sheet thành XLSX</option><option value="csv">Mỗi sheet thành CSV</option></select></label><div class="office-toolbar"><span class="spacer"></span><button class="office-btn primary" id="excelSplitRun" ${state.excelFiles.length?'':'disabled'}>Tách sheet</button></div></div>`);bindExcelLibrary();mainHost.querySelector('#excelSplitRun').onclick=runExcelSplit;}
async function runExcelSplit(){try{const item=state.excelFiles[0];if(!item)throw new Error('Chưa chọn workbook.');startBusy('Đang tách sheet…');const XLSX=globalThis.XLSX,fmt=mainHost.querySelector('#excelSplitFormat').value,outs=[];for(let i=0;i<item.wb.SheetNames.length;i++){const name=item.wb.SheetNames[i],ws=item.wb.Sheets[name];if(fmt==='csv')outs.push({name:`${safeName(name)}.csv`,blob:new Blob(['\ufeff'+XLSX.utils.sheet_to_csv(ws)],{type:'text/csv;charset=utf-8'})});else{const wb=XLSX.utils.book_new();XLSX.utils.book_append_sheet(wb,cloneWorksheet(ws),name.slice(0,31));outs.push({name:`${safeName(name)}.xlsx`,blob:new Blob([XLSX.write(wb,{type:'array',bookType:'xlsx'})],{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'})})}setStatus(`Đang tạo sheet ${i+1}/${item.wb.SheetNames.length}`,Math.round((i+1)/item.wb.SheetNames.length*80))}await downloadZip(outs,`${baseName(item.file.name)}_sheets.zip`);endBusy(`Đã tách ${outs.length} sheet.`);}catch(e){showError(e)}}
