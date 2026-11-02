(function(){
'use strict';
const toolBtn=document.querySelector('.office-suite-launch-btn');
if(!toolBtn)return;
const MEDIA='http://127.0.0.1:47632',CAPTURE='http://127.0.0.1:47631',SIGN='http://127.0.0.1:8765',BACKUP='http://127.0.0.1:47634';
const HEAD={'X-KanBan-Agent':'linh-kanban-v1'},PASS_HEAD={'X-KanBan-Agent':'linh-kanpass-v1'},BACKUP_HEAD={'X-KanBan-Agent':'linh-kanbackup-v1'};
const SETUP_URL='https://github.com/LamHoaiLinh/Kanban-QLCV-Linh/releases/download/kantool-installer-latest/KanTool-Setup.exe';
let panel=null,lastDiagnostics=null;

async function probe(url,headers,timeout){
  const c=new AbortController(),t=setTimeout(function(){c.abort();},timeout||1500);
  try{
    const r=await fetch(url,{headers:headers||{},cache:'no-store',signal:c.signal,targetAddressSpace:'loopback'});
    return r.ok?await r.json().catch(function(){return {ok:true};}):null;
  }catch(e){return null;}finally{clearTimeout(t);}
}
function esc(v){return String(v==null?'':v).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
function older(a,b){
  const x=String(a||'').split('.').map(Number),y=String(b||'').split('.').map(Number);
  for(let i=0;i<Math.max(x.length,y.length);i++){if((x[i]||0)<(y[i]||0))return true;if((x[i]||0)>(y[i]||0))return false;}
  return false;
}
function makeSoftware(name,available,keys,versions,note,actualVersion){
  const entries=(keys||[]).map(function(k){return versions&&versions.components&&versions.components[k];}).filter(Boolean);
  const latest=keys&&keys.length===1&&entries[0]?entries[0].latestVersion:'';
  const current=actualVersion||(keys&&keys.length===1&&entries[0]?entries[0].currentVersion:'');
  const mismatch=entries.some(function(x){return !!x.updateAvailable;})||
    !!(actualVersion&&latest&&older(actualVersion,latest));
  const versionKnown=!!(versions&&versions.ok&&entries.length===(keys||[]).length);
  const state=!available?'miss':mismatch?'outdated':versionKnown?'ok':'unknown';
  const stateText=state==='miss'?'Chưa sẵn sàng':state==='outdated'?'Cần cập nhật':state==='ok'?'Đã cập nhật':'Chưa kiểm tra bản';
  let detail=note||'';
  if(latest)detail+=' Phiên bản trên máy: '+(current||'chưa xác định')+'; mới nhất: '+latest+'.';
  else if(entries.length)detail+=' '+entries.map(function(x,i){return (keys[i]||'Thành phần')+': '+(x.currentVersion||'?')+' / '+(x.latestVersion||'?');}).join(' · ')+'.';
  if(!versionKnown&&available)detail+=' Không xác minh được phiên bản mới nhất; vui lòng kiểm tra lại khi có Internet.';
  return {name:name,state:state,stateText:stateText,detail:detail};
}
function itemHtml(x){
  return '<details class="kantool-software is-'+x.state+'">'+
    '<summary><span class="kantool-name">'+esc(x.name)+'</span><strong>'+esc(x.stateText)+'</strong></summary>'+
    '<div class="kantool-software-detail">'+esc(x.detail)+'</div></details>';
}

async function getDiagnostics(show){
  try{
    const r=await fetch(MEDIA+'/system/diagnostics',{headers:HEAD,cache:'no-store',targetAddressSpace:'loopback'});
    if(!r.ok)throw new Error('offline');
    lastDiagnostics=await r.json();
    if(show){
      const box=panel.querySelector('[data-diagnostics]'),bad=(lastDiagnostics.checks||[]).filter(function(x){return !x.ok;});
      box.hidden=false;
      box.innerHTML=(lastDiagnostics.checks||[]).map(function(x){
        return '<div class="kantool-diag-row"><span>'+(x.ok?'✓':'!')+' '+esc(x.label)+'</span><small>'+esc(x.detail||'')+'</small></div>';
      }).join('')+'<strong>'+(bad.length?'Có '+bad.length+' mục cần xử lý.':'Không phát hiện lỗi trong các mục đã kiểm tra.')+'</strong>';
    }
    return lastDiagnostics;
  }catch(e){
    lastDiagnostics=null;
    if(show){
      const box=panel.querySelector('[data-diagnostics]');
      box.hidden=false;
      box.textContent='Dịch vụ KanTool trên PC chưa kết nối. Nút tải EXE hoạt động độc lập qua Chrome; tải về rồi mở bộ cài và chọn Cài đặt / Cập nhật.';
    }
    return null;
  }
}
function ensurePanel(){
  if(panel)return panel;
  panel=document.createElement('div');panel.className='capture-setup-backdrop';panel.hidden=true;
  panel.innerHTML='<section class="capture-setup-card capture-control-card kantool-card" role="dialog" aria-modal="true" aria-label="KanBan Tools">'+
    '<button class="capture-setup-close" type="button" aria-label="Đóng">×</button>'+
    '<div class="capture-setup-mark">K</div><h3>KanBan Tools</h3>'+
    '<div class="capture-agent-status" data-status>Đang kiểm tra…</div>'+
    '<p>Kiểm tra phần mềm theo từng mục. Chỉ mở chi tiết khi cần.</p>'+
    '<details class="kantool-tools" data-tools><summary><span>Phần mềm KanTool</span><strong data-tools-summary>Đang kiểm tra…</strong></summary>'+
    '<div class="kantool-list" data-list></div></details>'+
    '<a class="kantool-smart-btn" data-download href="'+SETUP_URL+'" target="_blank" rel="noopener noreferrer">⬇ Tải KanTool-Setup.exe qua Chrome</a>'+
    '<div class="kantool-smart-note">Chrome quản lý quá trình tải (Ctrl+J để xem). Sau khi tải xong, mở KanTool-Setup.exe và chọn Cài đặt / Cập nhật. Không yêu cầu dịch vụ Windows để tải file.</div>'+
    '<details class="kantool-advanced"><summary>Tùy chọn nâng cao</summary>'+
      '<div class="capture-control-actions kantool-secondary-actions">'+
        '<button type="button" data-retry>Kiểm tra lại</button>'+
        '<button type="button" data-check>Chẩn đoán</button>'+
        '<button type="button" data-copy-diag>Sao chép chẩn đoán</button>'+
      '</div><div class="kantool-diagnostics" data-diagnostics hidden></div>'+
    '</details>'+
    '<div class="capture-security-note">KanPass lưu KDBX mã hóa trên máy; KanBackup dùng Kopia mã hóa và lịch Windows. KanScan là tiện ích cài riêng, cần ZIP gốc v1.4 hợp lệ nếu cài lần đầu.</div></section>';
  document.body.appendChild(panel);
  panel.addEventListener('click',function(e){if(e.target===panel||e.target.closest('.capture-setup-close'))panel.hidden=true;});
  panel.querySelector('[data-download]').addEventListener('click',function(){
    panel.querySelector('[data-status]').textContent='Đã mở liên kết tải qua Chrome. Bấm Ctrl+J để theo dõi; nếu không thấy tệp, kiểm tra thông báo chặn tải của Chrome.';
  });
  panel.querySelector('[data-retry]').addEventListener('click',refresh);
  panel.querySelector('[data-check]').addEventListener('click',function(){getDiagnostics(true);});
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
  const status=panel.querySelector('[data-status]'),list=panel.querySelector('[data-list]'),summary=panel.querySelector('[data-tools-summary]');
  status.textContent='Đang kiểm tra trạng thái và phiên bản…';
  const r=await Promise.all([
    probe(CAPTURE+'/ping'),
    probe(CAPTURE+'/kanpass/status',PASS_HEAD,1700),
    probe(CAPTURE+'/kanpass/web/status',PASS_HEAD,1700),
    probe(MEDIA+'/health',HEAD,1700),
    probe(SIGN+'/health',HEAD,1700),
    probe(BACKUP+'/status',BACKUP_HEAD,2200),
    probe(MEDIA+'/system/version',HEAD,6500),
    probe(MEDIA+'/system/kanscan/status',HEAD,1800)
  ]);
  const cap=r[0],pass=r[1],passWeb=r[2],media=r[3],sign=r[4],backup=r[5],ver=r[6],scan=r[7];
  const s=[
    makeSoftware('Chụp màn hình',!!cap,['capture'],ver,'Ứng dụng chụp nhanh Alt+C/Alt+X trên Windows.'),
    makeSoftware('KanPass',!!(pass&&pass.available),['capture'],ver,'Trình quản lý mật khẩu KanPass trên máy.'),
    makeSoftware('KanPass Web',!!(passWeb&&passWeb.available),['capture'],ver,'Kết nối KanPass cho trình duyệt.'),
    makeSoftware('KanMedia',!!(media&&media.mediaReady),['runtime','ytDlp','node','ffmpeg'],ver,'Tải, xử lý và chuyển đổi video/âm thanh.'),
    makeSoftware('Ký số PDF',!!(sign&&sign.ok),['signing'],ver,'Dịch vụ ký PDF bằng chứng thư số trên PC.'),
    makeSoftware('KanBackup · Kopia',!!(backup&&backup.available),['backup','kopia'],ver,'Sao lưu dữ liệu trên máy Windows.'),
    makeSoftware('KanScan',!!(scan&&scan.installed),['kanscan'],ver,scan?scan.message:'Cần cập nhật KanTool để kiểm tra KanScan; ứng dụng chỉ được cài nếu có ZIP nền v1.4 hợp lệ.',scan&&scan.version)
  ];
  // Older KanTool versions do not have KanScan status; do not mislabel an unknown installation as absent.
  if(!scan&&media){s[6].state='unknown';s[6].stateText='Chưa xác minh';}
  list.innerHTML=s.map(itemHtml).join('');
  const needs=s.filter(function(x){return x.state==='miss'||x.state==='outdated';});
  const updated=s.filter(function(x){return x.state==='ok';}).length;
  summary.textContent=needs.length?needs.length+' mục cần kiểm tra':updated+' đã cập nhật · '+s.length+' phần mềm';
  summary.classList.toggle('warn',needs.length>0);
  if(!media){
    status.textContent='Không kết nối được KanTool trên Windows. Vẫn có thể tải EXE qua Chrome.';
    status.classList.toggle('ready',false);return;
  }
  if(ver&&ver.updateAvailable){
    status.textContent='Có bản mới KanTool '+(ver.latestVersion||'')+' · máy đang '+(ver.currentVersion||'chưa xác định')+'.';
  }else if(needs.length){
    status.textContent='Có '+needs.length+' phần mềm cần cài, cập nhật hoặc kiểm tra.';
  }else{
    status.textContent=ver&&ver.ok?'KanTool đang hoạt động. Các mục đã kết nối.':'KanTool đang hoạt động; chưa xác minh được đầy đủ phiên bản.';
  }
  status.classList.toggle('ready',!needs.length&&!!(ver&&ver.ok&&!ver.updateAvailable));
}

toolBtn.addEventListener('contextmenu',function(e){e.preventDefault();ensurePanel().hidden=false;refresh();});
toolBtn.addEventListener('auxclick',function(e){if(e.button===1){e.preventDefault();ensurePanel().hidden=false;refresh();}});
})();