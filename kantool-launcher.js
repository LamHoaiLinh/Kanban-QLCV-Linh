(function(){
'use strict';
const toolBtn=document.querySelector('.office-suite-launch-btn');if(!toolBtn)return;
const MEDIA='http://127.0.0.1:47632',CAPTURE='http://127.0.0.1:47631',SIGN='http://127.0.0.1:8765',BACKUP='http://127.0.0.1:47634',HEAD={'X-KanBan-Agent':'linh-kanban-v1'},PASS_HEAD={'X-KanBan-Agent':'linh-kanpass-v1'},BACKUP_HEAD={'X-KanBan-Agent':'linh-kanbackup-v1'};
const SETUP_URL='https://github.com/LamHoaiLinh/Kanban-QLCV-Linh/releases/download/kantool-installer-latest/KanTool-Setup.exe';
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

function downloadInstaller(manual){
  const status=panel&&panel.querySelector('[data-status]');
  const a=document.createElement('a');
  a.href=SETUP_URL;
  a.download='KanTool-Setup.exe';
  a.rel='noopener noreferrer';
  document.body.appendChild(a);
  a.click();
  a.remove();
  if(status)status.textContent='Đã yêu cầu trình duyệt tải KanTool-Setup.exe. Sau khi tải, mở file EXE để cài đặt/cập nhật bằng giao diện, không dùng cửa sổ CMD.';
  return true;
}
function supportsGuiInstaller(version){
  const values=String(version||'').split('.').map(Number);
  return values.length>=2 && (values[0]>2 || (values[0]===2 && (values[1]>9 || (values[1]===9 && (values[2]||0)>=0))));
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
      box.hidden=false;box.textContent='KanBan Tools chưa chạy nên chưa thể chẩn đoán. Nút chính sẽ tải bộ cài mới nhất; mở KanTool-Setup.exe vừa tải và bấm Cài đặt / Cập nhật.';
    }
    return null;
  }
}

async function smartUpdate(){
  ensurePanel();
  const status=panel.querySelector('[data-status]'),btn=panel.querySelector('[data-smart]');
  btn.disabled=true;status.textContent='Đang kiểm tra trình cài đặt Windows…';
  try{
    const media=await probe(MEDIA+'/health',HEAD,1400);
    const version=media?await probe(MEDIA+'/system/version',HEAD,2200):null;
    if(!media||!version||!supportsGuiInstaller(version.currentVersion)){
      downloadInstaller(false);
      return;
    }
    const d=await getDiagnostics(false);
    const broken=d&&(d.checks||[]).some(function(x){return !x.ok&&x.key!=='version';});
    const r=await fetch(MEDIA+(broken?'/system/repair':'/system/update'),{
      method:'POST',headers:Object.assign({'Content-Type':'application/json'},HEAD),
      body:'{}',targetAddressSpace:'loopback'
    });
    if(!r.ok)throw new Error('HTTP '+r.status);
    status.textContent='Đã yêu cầu mở KanTool-Setup.exe bằng giao diện Windows; bấm Cài đặt / Cập nhật trong cửa sổ mới.';
  }catch(e){
    downloadInstaller(false);
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
    '<button type="button" data-smart class="kantool-smart-btn">↻ Cài đặt / Cập nhật KanTool (EXE)</button>'+
    '<div class="kantool-smart-note">Nếu chưa cài, nút này tải KanTool-Setup.exe. Nếu đã cài bản mới, bộ cài mở trực tiếp. Mọi tác vụ được chạy qua giao diện Windows có tiến độ và nhật ký, không hiển thị CMD.</div>'+
    '<details class="kantool-advanced"><summary>Tùy chọn nâng cao</summary>'+
      '<div class="capture-control-actions kantool-secondary-actions">'+
        '<button type="button" data-retry>Kiểm tra lại</button>'+
        '<button type="button" data-download>⬇ Tải KanTool-Setup.exe</button>'+
        '<button type="button" data-copy-diag>Sao chép chẩn đoán</button>'+
      '</div>'+
      '<div class="kantool-diagnostics" data-diagnostics hidden></div>'+
    '</details>'+
    '<div class="capture-security-note">KanPass lưu mật khẩu trong KDBX mã hóa trên máy; KanBackup dùng Kopia mã hóa/dedup và chạy lịch bằng Windows Task Scheduler. Bộ cài không tắt Windows Security hoặc tạo Defender exclusion.</div>'+
    '</section>';
  document.body.appendChild(panel);
  panel.addEventListener('click',function(e){if(e.target===panel||e.target.closest('.capture-setup-close'))panel.hidden=true;});
  panel.querySelector('[data-smart]').addEventListener('click',smartUpdate);
  panel.querySelector('[data-download]').addEventListener('click',function(){downloadInstaller(true);});
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
    probe(BACKUP+'/status',BACKUP_HEAD,2200),
    probe(MEDIA+'/system/version',HEAD,3500)
  ]);
  const cap=result[0],pass=result[1],passWeb=result[2],media=result[3],sign=result[4],backup=result[5],ver=result[6];
  list.innerHTML=row('Chụp màn hình',!!cap)+row('KanPass',!!(pass&&pass.available))+row('KanPass Web',!!(passWeb&&passWeb.available))+row('KanMedia',!!(media&&media.mediaReady))+row('Ký số PDF',!!(sign&&sign.ok))+row('Backup · Kopia',!!(backup&&backup.available));
  const ready=!!cap&&!!(pass&&pass.available)&&!!(passWeb&&passWeb.available)&&!!(media&&media.mediaReady)&&!!(sign&&sign.ok)&&!!(backup&&backup.available);
  if(!media){
    status.textContent='Chưa cài hoặc KanBan Tools chưa chạy. Bấm Cài đặt / Cập nhật bên dưới.';
    status.classList.toggle('ready',false);
    return;
  }
  if(ver&&ver.latestVersion){
    status.textContent=ver.updateAvailable
      ?'Có bản mới '+ver.latestVersion+' · máy đang '+(ver.currentVersion||'chưa xác định')+'.'
      :'Đã là bản mới nhất '+ver.latestVersion+' trên máy.';
    status.classList.toggle('ready',ready&&!ver.updateAvailable);
  }else{
    status.textContent=ready?'KanBan Tools đã sẵn sàng.':'Có thành phần cần kiểm tra. Bấm Cài đặt / Cập nhật bên dưới.';
    status.classList.toggle('ready',ready);
  }
}

toolBtn.addEventListener('contextmenu',function(e){e.preventDefault();ensurePanel().hidden=false;refresh();});
toolBtn.addEventListener('auxclick',function(e){if(e.button===1){e.preventDefault();ensurePanel().hidden=false;refresh();}});
})();