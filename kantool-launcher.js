(function(){
'use strict';
const toolBtn=document.querySelector('.office-suite-launch-btn');if(!toolBtn)return;
const MEDIA='http://127.0.0.1:47632',CAPTURE='http://127.0.0.1:47631',SIGN='http://127.0.0.1:8765',HEAD={'X-KanBan-Agent':'linh-kanban-v1'},PASS_HEAD={'X-KanBan-Agent':'linh-kanpass-v1'};
const RAW_BAT='https://raw.githubusercontent.com/LamHoaiLinh/Kanban-QLCV-Linh/main/kan-tools/KanTool.bat';
let panel=null,lastDiagnostics=null;

async function probe(url,headers,timeout){
  const c=new AbortController(),t=setTimeout(function(){c.abort();},timeout||1100);
  try{
    const r=await fetch(url,{headers:headers||{},cache:'no-store',signal:c.signal,targetAddressSpace:'loopback'});
    return r.ok?await r.json().catch(function(){return {ok:true};}):null;
  }catch(e){return null;}finally{clearTimeout(t);}
}
function esc(v){return String(v==null?'':v).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
function row(name,ok){return '<div class="kantool-row"><span>'+esc(name)+'</span><strong class="'+(ok?'ok':'miss')+'">'+(ok?'✓ Sẵn sàng':'— Chưa sẵn sàng')+'</strong></div>';}

async function downloadBat(manual){
  const status=panel&&panel.querySelector('[data-status]');
  if(status)status.textContent='Đang lấy KanTool.bat mới nhất từ GitHub…';
  try{
    const r=await fetch(RAW_BAT+'?t='+Date.now(),{cache:'no-store'});
    if(!r.ok)throw new Error('HTTP '+r.status);
    const text=await r.text();
    if(text.length<700||!text.toUpperCase().includes('KANBAN TOOLS'))throw new Error('File không hợp lệ');
    const url=URL.createObjectURL(new Blob([text],{type:'application/octet-stream'}));
    const a=document.createElement('a');a.href=url;a.download='CAI_KANTOOL_1_LAN_BAM.bat';document.body.appendChild(a);a.click();a.remove();
    setTimeout(function(){URL.revokeObjectURL(url);},1500);
    if(status)status.textContent=manual?'Đã tải CAI_KANTOOL_1_LAN_BAM.bat mới nhất.':'KanBan Tools chưa chạy. Đã tải bộ cài mới nhất — chỉ cần mở file CAI_KANTOOL_1_LAN_BAM.bat một lần, các bước còn lại tự động.';
    return true;
  }catch(e){
    try{
      const a=document.createElement('a');a.href='kan-tools/KanTool.bat?t='+Date.now();a.download='CAI_KANTOOL_1_LAN_BAM.bat';document.body.appendChild(a);a.click();a.remove();
      if(status)status.textContent=manual?'Đã tải bộ cài dự phòng từ GitHub Pages.':'Đã tải bộ cài dự phòng — hãy mở KanTool.bat vừa tải.';
      return true;
    }catch(x){
      if(status)status.textContent='Không tải được KanTool.bat. Hãy kiểm tra Internet.';
      return false;
    }
  }
}

async function getDiagnostics(show){
  try{
    const r=await fetch(MEDIA+'/system/diagnostics',{headers:HEAD,cache:'no-store',targetAddressSpace:'loopback'});
    if(!r.ok)throw new Error('offline');
    lastDiagnostics=await r.json();
    if(show){
      const box=panel.querySelector('[data-diagnostics]');
      const bad=(lastDiagnostics.checks||[]).filter(function(x){return !x.ok;});
      box.hidden=false;
      box.innerHTML=(lastDiagnostics.checks||[]).map(function(x){
        return '<div class="kantool-diag-row"><span>'+(x.ok?'✓':'!')+' '+esc(x.label)+'</span><small>'+esc(x.detail||'')+'</small></div>';
      }).join('')+'<strong>'+(bad.length?'Có '+bad.length+' mục cần xử lý.':'Không phát hiện lỗi.')+'</strong>';
    }
    return lastDiagnostics;
  }catch(e){
    lastDiagnostics=null;
    if(show){
      const box=panel.querySelector('[data-diagnostics]');
      box.hidden=false;box.textContent='KanBan Tools chưa chạy nên chưa thể chẩn đoán. Nút chính sẽ tải bộ cài mới nhất; mở CAI_KANTOOL_1_LAN_BAM.bat một lần để tự cài.';
    }
    return null;
  }
}

async function smartUpdate(){
  ensurePanel();
  const status=panel.querySelector('[data-status]'),btn=panel.querySelector('[data-smart]');
  btn.disabled=true;status.textContent='Đang kiểm tra và chọn cách xử lý phù hợp…';
  try{
    const media=await probe(MEDIA+'/health',HEAD,1800);
    if(!media){
      await downloadBat(false);
      return;
    }
    const d=await getDiagnostics(false);
    const broken=d&&(d.checks||[]).some(function(x){return !x.ok&&x.key!=='version';});
    const endpoint=broken?'/system/repair':'/system/update';
    const r=await fetch(MEDIA+endpoint,{
      method:'POST',
      headers:Object.assign({'Content-Type':'application/json'},HEAD),
      body:'{}',
      targetAddressSpace:'loopback'
    });
    if(!r.ok)throw new Error('HTTP '+r.status);
    status.textContent=broken
      ?'Đã mở KanTool mới nhất để tự sửa và cập nhật. Chờ cửa sổ cài đặt báo hoàn tất.'
      :'Đã mở KanTool mới nhất để cập nhật. Chờ cửa sổ cài đặt báo hoàn tất.';
  }catch(e){
    await downloadBat(false);
  }finally{
    setTimeout(function(){btn.disabled=false;},1200);
  }
}

function ensurePanel(){
  if(panel)return panel;
  panel=document.createElement('div');panel.className='capture-setup-backdrop';panel.hidden=true;
  panel.innerHTML='<section class="capture-setup-card capture-control-card kantool-card" role="dialog" aria-modal="true">'+
    '<button class="capture-setup-close" type="button" aria-label="Đóng">×</button>'+
    '<div class="capture-setup-mark">K</div><h3>KanBan Tools</h3>'+
    '<div class="capture-agent-status" data-status>Đang kiểm tra…</div>'+
    '<p>Bạn chỉ cần dùng <strong>một nút</strong>. KanBan tự kiểm tra, cập nhật hoặc sửa thành phần cần thiết.</p>'+
    '<div class="kantool-list" data-list></div>'+
    '<button type="button" data-smart class="kantool-smart-btn">↻ Cập nhật / sửa KanBan Tools</button>'+
    '<div class="kantool-smart-note">Nếu chưa cài, nút này tải KanTool.bat mới nhất; mở file một lần là tự cài và tự sửa nếu lần đầu chưa xong. Nếu đã cài, KanBan tự cập nhật hoặc sửa lỗi bằng cùng một bộ cài.</div>'+
    '<details class="kantool-advanced"><summary>Tùy chọn nâng cao</summary>'+
      '<div class="capture-control-actions kantool-secondary-actions">'+
        '<button type="button" data-retry>Kiểm tra lại</button>'+
        '<button type="button" data-download>⬇ Tải bộ cài 1 lần bấm</button>'+
        '<button type="button" data-copy-diag>Sao chép chẩn đoán</button>'+
      '</div>'+
      '<div class="kantool-diagnostics" data-diagnostics hidden></div>'+
    '</details>'+
    '<div class="capture-security-note">KanPass lưu mật khẩu trong KDBX mã hóa trên máy; bộ cài không tắt Windows Security hoặc tạo Defender exclusion. KanMedia có thể tự cập nhật yt-dlp khi YouTube thay đổi.</div>'+
    '</section>';
  document.body.appendChild(panel);
  panel.addEventListener('click',function(e){if(e.target===panel||e.target.closest('.capture-setup-close'))panel.hidden=true;});
  panel.querySelector('[data-smart]').addEventListener('click',smartUpdate);
  panel.querySelector('[data-download]').addEventListener('click',function(){downloadBat(true);});
  panel.querySelector('[data-retry]').addEventListener('click',refresh);
  panel.querySelector('[data-copy-diag]').addEventListener('click',async function(){
    const d=lastDiagnostics||await getDiagnostics(true);if(!d)return;
    const lines=['KANBAN TOOLS DIAGNOSTICS'];
    (d.checks||[]).forEach(function(x){lines.push((x.ok?'OK':'LOI')+' | '+x.label+' | '+(x.detail||''));});
    if(d.installed&&d.installed.kanToolVersion)lines.push('KanTool | '+d.installed.kanToolVersion);
    try{await navigator.clipboard.writeText(lines.join('\n'));panel.querySelector('[data-status]').textContent='Đã sao chép chẩn đoán.';}
    catch(e){panel.querySelector('[data-status]').textContent='Trình duyệt không cho sao chép tự động.';}
  });
  return panel;
}

async function refresh(){
  ensurePanel();
  const status=panel.querySelector('[data-status]'),list=panel.querySelector('[data-list]');
  status.textContent='Đang kiểm tra…';
  const result=await Promise.all([
    probe(CAPTURE+'/ping'),
    probe(CAPTURE+'/kanpass/status',PASS_HEAD,1700),
    probe(CAPTURE+'/kanpass/web/status',PASS_HEAD,1700),
    probe(MEDIA+'/health',HEAD,1700),
    probe(SIGN+'/health',HEAD,1700),
    probe(MEDIA+'/system/version',HEAD,3500)
  ]);
  const cap=result[0],pass=result[1],passWeb=result[2],media=result[3],sign=result[4],ver=result[5];
  list.innerHTML=row('Chụp màn hình',!!cap)+row('KanPass',!!(pass&&pass.available))+row('KanPass Web',!!(passWeb&&passWeb.available))+row('KanMedia',!!(media&&media.mediaReady))+row('Ký số PDF',!!(sign&&sign.ok));
  const ready=!!cap&&!!(pass&&pass.available)&&!!(passWeb&&passWeb.available)&&!!(media&&media.mediaReady)&&!!(sign&&sign.ok);
  if(!media){
    status.textContent='Chưa cài hoặc KanBan Tools chưa chạy. Bấm nút xanh bên dưới.';
    status.classList.toggle('ready',false);
    return;
  }
  if(ver&&ver.latestVersion){
    status.textContent=ver.updateAvailable
      ?'Có bản mới '+ver.latestVersion+' · máy đang '+(ver.currentVersion||'chưa xác định')+'.'
      :'Đã là bản mới nhất '+ver.latestVersion+' trên máy.';
    status.classList.toggle('ready',ready&&!ver.updateAvailable);
  }else{
    status.textContent=ready?'KanBan Tools đã sẵn sàng.':'Có thành phần cần kiểm tra. Bấm nút xanh bên dưới.';
    status.classList.toggle('ready',ready);
  }
}

toolBtn.addEventListener('contextmenu',function(e){e.preventDefault();ensurePanel().hidden=false;refresh();});
toolBtn.addEventListener('auxclick',function(e){if(e.button===1){e.preventDefault();ensurePanel().hidden=false;refresh();}});
})();