/* KAN PHOTO Studio: simple local image library. All editing lives in Preview. */
import {openPhotoPreview} from './photo-preview.js?v=5.0.1';
import {applyAdjustments} from './photo-filters.js?v=1.0.0';
import {loadPhotoDraft,savePhotoDraft,removePhotoDraft} from './photo-drafts.js?v=2.0.0';
const onPhone=()=>globalThis.matchMedia?.('(pointer: coarse)').matches && Math.min(screen.width,screen.height)<=680;
const ITEMS=[];
let selected=0,host=null,api=null,opening=false,downloading=false;
const matches=name=>/\.(jpe?g|png|webp)$/i.test(name);
const safe=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const bytes=n=>n<1024?n+' B':n<1048576?(n/1024).toFixed(0)+' KB':(n/1048576).toFixed(1)+' MB';
const typeFor=name=>/\.png$/i.test(name)?'image/png':/\.webp$/i.test(name)?'image/webp':'image/jpeg';
const filename=name=>name.replace(/(\.[^.]+)$/, '_KAN$1');
function show(text,percent){if(!host)return;host.querySelector('#kanPhotoMessage').textContent=text;if(Number.isFinite(percent))host.querySelector('#kanPhotoProgress').value=percent;api?.setStatus?.(text,percent);}
function addFiles(files){
 const seen=new Set(ITEMS.map(x=>x.file.name+'|'+x.file.size+'|'+x.file.lastModified));
 let added=0;
 for(const file of files){
  if(!matches(file.name))continue;
  const key=file.name+'|'+file.size+'|'+file.lastModified;
  if(seen.has(key))continue;
  seen.add(key);const item={file,blob:null,editState:null,history:[],status:'Chưa chỉnh',draftChecked:false,hasDraft:false};
  ITEMS.push(item);added++;
  if(onPhone())loadPhotoDraft(file).then(saved=>{if(saved){item.hasDraft=true;item.status=saved.dirty?'Có bản nháp – mở Preview để tiếp tục':'Có bản đã lưu – mở Preview để khôi phục';renderList();}}).catch(()=>{});
 }
 renderList();renderImages();
 show('Đã nạp '+added+' ảnh mới. Chọn ảnh rồi bấm MỞ PREVIEW để chỉnh.');
}
function renderList(){
 if(!host)return;
 const list=host.querySelector('#kanPhotoList');
 list.innerHTML=ITEMS.map((item,i)=>'<button class="kphoto-file'+(i===selected?' selected':'')+'" type="button" data-photo="'+i+'"><span>'+safe(item.file.name)+'</span><small>'+bytes(item.file.size)+' · '+safe(item.status)+'</small></button>').join('');
 list.querySelectorAll('[data-photo]').forEach(b=>b.onclick=()=>{selected=Number(b.dataset.photo);renderList();renderImages();});
 host.querySelector('#kanPhotoCount').textContent=ITEMS.length+' ảnh';
 const ready=Boolean(ITEMS[selected]);
 host.querySelector('#kanPhotoOpen').disabled=!ready||opening||downloading;
 host.querySelector('#kanPhotoDownload').disabled=!ITEMS.some(x=>x.blob)||opening||downloading;
 host.querySelector('#kanPhotoClear').disabled=!ITEMS.length||opening||downloading;
 host.querySelectorAll('.kphoto-preview-launch').forEach(b=>b.disabled=!ready||opening||downloading);
}
function imageUrl(element,file){
 if(element.dataset.url){URL.revokeObjectURL(element.dataset.url);delete element.dataset.url;}
 element.removeAttribute('src');if(!file)return;
 const url=URL.createObjectURL(file);element.dataset.url=url;element.src=url;
}
function renderImages(){
 if(!host)return;
 const item=ITEMS[selected];
 imageUrl(host.querySelector('#kanPhotoBefore'),item?.file);
 imageUrl(host.querySelector('#kanPhotoAfter'),item?.blob||item?.file);
 host.querySelector('#kanPhotoDetail').textContent=item?(item.blob?'Đã có ảnh kết quả: tải ngay hoặc tiếp tục chỉnh trong Preview.':'Ảnh đang giữ nguyên. Mở Preview để kéo chỉnh và lưu bản kết quả.'):'Chọn hoặc kéo ảnh vào để bắt đầu.';
}
async function preview(){
 const item=ITEMS[selected];if(!item||opening)return;
 opening=true;renderList();
 try{
  if(onPhone()&&!item.draftChecked){
   item.draftChecked=true;
   const saved=await loadPhotoDraft(item.file).catch(()=>null);
   if(saved&&window.confirm('Tìm thấy bản chỉnh sửa lưu trên máy. Bạn muốn tiếp tục chỉnh bản này?')){
     item.editState={baseBlob:saved.baseBlob,maskBlob:saved.maskBlob,settings:saved.settings,scope:saved.scope,bodySettings:saved.bodySettings,manualOps:saved.manualOps,people:saved.people,chosenPerson:saved.chosenPerson};
     item.blob=saved.outputBlob||null;item.status=saved.dirty?'Đang tiếp tục bản nháp':'Đã phục hồi ảnh đã lưu';
     renderList();renderImages();
   }
  }
  await openPhotoPreview({
   file:item.file,blob:item.blob||item.file,type:typeFor(item.file.name),editState:item.editState,
   onAutoDraft:async draft=>{
     await savePhotoDraft(item.file,draft);
     item.editState={baseBlob:draft.baseBlob,maskBlob:draft.maskBlob,settings:draft.settings,scope:draft.scope,bodySettings:draft.bodySettings,manualOps:draft.manualOps,people:draft.people,chosenPerson:draft.chosenPerson};
     item.hasDraft=true;item.status='Đã tự lưu nháp (chưa xuất)';
     renderList();
   },
   onLoadPrevious:async ()=>{
    const old=item.history.pop();if(!old)return null;
    item.blob=old.blob;item.editState=old.state;item.status='Đã khôi phục bản lưu trước';renderList();renderImages();
    return old;
   },
   onApplyBatch:async (recipe,progress)=>{
    let done=0,failed=0;
    for(let i=0;i<ITEMS.length;i++){
     if(ITEMS[i]===item)continue;
     const target=ITEMS[i];
     try{
      progress?.('Đang áp màu '+(i+1)+'/'+ITEMS.length+': '+target.file.name);
      const bitmap=await createImageBitmap(target.file);
      try{
       if(bitmap.width*bitmap.height>18000000)throw Error('Ảnh quá lớn, bỏ qua để tránh hết bộ nhớ.');
       const base=document.createElement('canvas');base.width=bitmap.width;base.height=bitmap.height;
       base.getContext('2d').drawImage(bitmap,0,0);
       const adjusted=applyAdjustments(base,recipe);
       const mime=typeFor(target.file.name);
       const result=await new Promise((ok,no)=>adjusted.toBlob(b=>b&&b.type===mime?ok(b):no(Error('Không xuất được định dạng này')),mime,.96));
       if(target.blob){target.history.push({blob:target.blob,state:target.editState});if(target.history.length>3)target.history.shift();}
       target.blob=result;target.editState={baseBlob:target.file,settings:structuredClone(recipe),scope:'global',maskBlob:null};
       target.status='Đã áp màu hàng loạt';done++;
      }finally{bitmap.close();}
     }catch(error){target.status='Bỏ qua: '+error.message;failed++;}
     if(i%2===0)await new Promise(resolve=>setTimeout(resolve,0));
    }
    renderList();renderImages();show('Đã áp màu '+done+' ảnh'+(failed?' · bỏ qua '+failed+' ảnh':'')+'.');return {done,failed};
   },
   onSaved:async (blob,state)=>{
    if(item.blob){item.history.push({blob:item.blob,state:item.editState});if(item.history.length>3)item.history.shift();}
    item.blob=blob;item.editState=state;item.status='Đã lưu chỉnh sửa';
    if(onPhone()){
      try{await savePhotoDraft(item.file,{...state,outputBlob:blob,dirty:false});item.hasDraft=true;}
      catch(error){show('Ảnh đã lưu để tải, nhưng bản nháp không được giữ qua lần tải lại: '+error.message);}
    }
    renderList();renderImages();
    show('Đã lưu '+item.file.name+'. Có thể bấm TẢI TẤT CẢ hoặc tiếp tục chỉnh ảnh khác.');
   },
   onReset:async ()=>{if(item.blob){item.history.push({blob:item.blob,state:item.editState});if(item.history.length>3)item.history.shift();}item.blob=null;item.editState=null;item.hasDraft=false;item.status='Đã khôi phục ảnh gốc';renderList();renderImages();if(onPhone())await removePhotoDraft(item.file).catch(()=>{});}
  });
 }catch(error){show('Không mở được Preview: '+(error.message||error));}
 finally{opening=false;renderList();}
}
function saveLocal(blob,name){
 const url=URL.createObjectURL(blob),a=document.createElement('a');
 a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();
 setTimeout(()=>URL.revokeObjectURL(url),15000);
}
async function download(){
 const ready=ITEMS.filter(x=>x.blob);if(!ready.length||downloading)return;
 downloading=true;renderList();
 try{
  const used=new Map(),outputs=ready.map(item=>{
   const name=filename(item.file.name),count=(used.get(name)||0)+1;used.set(name,count);
   return {blob:item.blob,name:count===1?name:name.replace(/(\.[^.]+)$/,'_'+count+'$1')};
  });
  if(outputs.length===1)saveLocal(outputs[0].blob,outputs[0].name);
  else await api.downloadZip(outputs,'KAN_PHOTO_KET_QUA.zip');
  show('Đã chuẩn bị tải '+outputs.length+' ảnh đã chỉnh. Không xử lý lại.',100);
 }catch(e){show('Không tải được: '+(e.message||e));}
 finally{downloading=false;renderList();}
}
export function renderPhotoStudioTool(container,helpers){
 host=container;api=helpers;
 if(!document.getElementById('kan-photo-css')){
  const link=document.createElement('link');link.id='kan-photo-css';link.rel='stylesheet';
  link.href=new URL('./photo-studio.css?v=2.1.0',import.meta.url).href;document.head.appendChild(link);
 }
 host.innerHTML='<section class="office-tool-panel active kphoto">'+
  '<div class="office-tool-head"><div><h3>KAN PHOTO – Chỉnh ảnh trực tiếp</h3><p>Chỉnh ảnh trên thiết bị</p></div></div>'+
  '<div id="kanPhotoDrop" class="kphoto-drop" tabindex="0" role="button"><strong>＋ Kéo thả nhiều ảnh hoặc bấm chọn</strong><span>JPG · PNG · WebP · Không tải ảnh lên máy chủ</span><input type="file" accept="image/jpeg,image/png,image/webp" multiple hidden></div>'+
  '<div class="kphoto-head"><strong id="kanPhotoCount">0 ảnh</strong><button id="kanPhotoClear" class="office-btn" type="button">Xóa danh sách</button></div><div id="kanPhotoList" class="kphoto-list"></div>'+
  '<div class="kphoto-view"><div><div class="kphoto-view-title"><b>Ảnh gốc</b><button class="office-btn kphoto-preview-launch" type="button">XEM LỚN ↗</button></div><img id="kanPhotoBefore" alt="Ảnh gốc"></div>'+
  '<div><div class="kphoto-view-title"><b>Ảnh kết quả</b><button class="office-btn kphoto-preview-launch" type="button">CHỈNH ẢNH ↗</button></div><img id="kanPhotoAfter" alt="Ảnh kết quả"></div></div>'+
  '<p id="kanPhotoDetail" class="office-card-note">Ảnh gốc luôn được giữ nguyên.</p>'+
  '<div class="kphoto-actions"><progress id="kanPhotoProgress" max="100" value="0"></progress><span id="kanPhotoMessage">Sẵn sàng.</span>'+
  '<div class="kphoto-main-buttons"><button id="kanPhotoOpen" class="office-btn primary" type="button">MỞ PREVIEW CHỈNH SỬA</button><button id="kanPhotoDownload" class="office-btn" type="button">TẢI TẤT CẢ</button></div></div></section>';
 const drop=host.querySelector('#kanPhotoDrop'),picker=drop.querySelector('input');
 drop.addEventListener('click',()=>picker.click());
 drop.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();picker.click();}});
 drop.addEventListener('dragover',e=>{e.preventDefault();drop.classList.add('hover');});
 drop.addEventListener('dragleave',()=>drop.classList.remove('hover'));
 drop.addEventListener('drop',e=>{e.preventDefault();drop.classList.remove('hover');addFiles([...e.dataTransfer.files]);});
 picker.onchange=e=>{addFiles([...e.target.files]);picker.value='';};
 host.querySelector('#kanPhotoClear').onclick=()=>{
  // Clear active session only. Persisted drafts intentionally remain until user restores or resets.
  ITEMS.length=0;selected=0;renderList();renderImages();show('Đã xóa danh sách trong phiên. Bản nháp trên điện thoại vẫn được giữ.');
 };
 host.querySelector('#kanPhotoOpen').onclick=()=>void preview();
 host.querySelectorAll('.kphoto-preview-launch').forEach(btn=>btn.onclick=()=>void preview());
 host.querySelector('#kanPhotoDownload').onclick=()=>void download();
 renderList();renderImages();
}
