
(function(){
'use strict';
const toolBtn=document.querySelector('.office-suite-launch-btn');if(!toolBtn)return;
const MEDIA='http://127.0.0.1:47632',CAPTURE='http://127.0.0.1:47631',SIGN='http://127.0.0.1:8765',HEAD={'X-KanBan-Agent':'linh-kanban-v1'};
let panel=null;
async function probe(url,headers,timeout){const c=new AbortController(),t=setTimeout(function(){c.abort();},timeout||1100);try{const r=await fetch(url,{headers:headers||{},cache:'no-store',signal:c.signal,targetAddressSpace:'loopback'});return r.ok?await r.json().catch(function(){return {ok:true};}):null;}catch(e){return null;}finally{clearTimeout(t);}}
function downloadBat(){const a=document.createElement('a');a.href='kan-tools/KanTool.bat?t='+Date.now();a.download='KanTool.bat';document.body.appendChild(a);a.click();a.remove();}
function row(name,ok){return '<div class="kantool-row"><span>'+name+'</span><strong class="'+(ok?'ok':'miss')+'">'+(ok?'✓ Sẵn sàng':'— Chưa sẵn sàng')+'</strong></div>';}
function ensurePanel(){
 if(panel)return panel;
 panel=document.createElement('div');panel.className='capture-setup-backdrop';panel.hidden=true;
 panel.innerHTML='<section class="capture-setup-card capture-control-card kantool-card" role="dialog" aria-modal="true"><button class="capture-setup-close" type="button" aria-label="Đóng">×</button><div class="capture-setup-mark">K</div><h3>KanBan Tools</h3><div class="capture-agent-status" data-status>Đang kiểm tra…</div><p>Chỉ cần <strong>một file KanTool.bat</strong> để cài hoặc cập nhật Chụp, KanMedia và bộ hỗ trợ ký số.</p><div class="kantool-list" data-list></div><div class="capture-control-actions"><button type="button" data-download class="primary">⬇ Tải bộ cài mới nhất</button><button type="button" data-update>↻ Cập nhật bản đã cài</button><button type="button" data-retry>Kiểm tra lại</button></div><div class="capture-security-note">Bộ cài không tắt Windows Security, không tạo Defender exclusion và không giấu EXE trong Base64. Capture chạy từ source Python của chính repo KanBan; Node/FFmpeg và các thành phần khác lấy từ nguồn công khai.</div></section>';
 document.body.appendChild(panel);
 panel.addEventListener('click',function(e){if(e.target===panel||e.target.closest('.capture-setup-close'))panel.hidden=true;});
 panel.querySelector('[data-download]').addEventListener('click',downloadBat);
 panel.querySelector('[data-retry]').addEventListener('click',refresh);
 panel.querySelector('[data-update]').addEventListener('click',async function(){const b=panel.querySelector('[data-update]');if(b.disabled)return;try{const r=await fetch(MEDIA+'/system/update',{method:'POST',headers:Object.assign({'Content-Type':'application/json'},HEAD),body:'{}',targetAddressSpace:'loopback'});if(!r.ok)throw new Error('offline');panel.querySelector('[data-status]').textContent='Đã mở bộ cập nhật mới nhất trên máy.';}catch(e){panel.querySelector('[data-status]').textContent='KanBan Tools chưa chạy. Hãy dùng nút xanh “Tải bộ cài mới nhất”.';}});
 return panel;
}
async function refresh(){
 ensurePanel();const status=panel.querySelector('[data-status]'),list=panel.querySelector('[data-list]');status.textContent='Đang kiểm tra…';
 const result=await Promise.all([probe(CAPTURE+'/ping'),probe(MEDIA+'/health',HEAD,1700),probe(SIGN+'/health',HEAD,1700)]);
 const cap=result[0],media=result[1],sign=result[2];list.innerHTML=row('Chụp màn hình',!!cap)+row('KanMedia',!!(media&&media.mediaReady))+row('Ký số PDF',!!(sign&&sign.ok));
 const updateBtn=panel.querySelector('[data-update]');if(updateBtn){updateBtn.disabled=!media;updateBtn.title=media?'Cập nhật bộ KanBan Tools đã cài trên máy.':'Chỉ dùng khi KanBan Tools đang chạy; nếu chưa chạy hãy tải bộ cài mới nhất.';}
 const ready=!!cap&&!!(media&&media.mediaReady);status.textContent=ready?'KanBan Tools đã sẵn sàng.':'Thiếu một hoặc nhiều thành phần; chạy KanTool.bat để cài/sửa/cập nhật.';status.classList.toggle('ready',ready);
}
toolBtn.addEventListener('contextmenu',function(e){e.preventDefault();ensurePanel().hidden=false;refresh();});
toolBtn.addEventListener('auxclick',function(e){if(e.button===1){e.preventDefault();ensurePanel().hidden=false;refresh();}});
})();
