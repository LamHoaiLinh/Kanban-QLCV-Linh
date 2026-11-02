/* KanScan v1.5.1: add an independent launcher tab to KanBan Tools. */
(() => {
  'use strict';
  const STORAGE='kanban_kanscan_endpoint_v1';
  const DEFAULT='http://127.0.0.1:18765/';
  const AGENT='http://127.0.0.1:47632';
  const AGENT_HEADERS={'X-KanBan-Agent':'linh-kanban-v1'};
  const css='.ks-panel{display:grid;gap:14px;max-width:870px;margin:0 auto}.ks-card{background:#fff;border:1px solid #d9e9df;border-radius:18px;padding:19px;color:#254837}.ks-card h3{font-size:23px;margin:0 0 9px}.ks-card h4{margin:0 0 10px}.ks-card p,.ks-card li{color:#61786a;line-height:1.65}.ks-card ol{padding-left:22px}.ks-card label{display:grid;gap:7px;font-weight:700;font-size:13px}.ks-card input{width:100%;padding:12px;border:1px solid #cadfd1;border-radius:12px;background:white;color:#234;font:14px system-ui}.ks-card button{background:#277655;color:white;border:0;border-radius:12px;padding:12px 16px;font:700 14px system-ui;cursor:pointer}.ks-card button:disabled{opacity:.65;cursor:wait}.ks-card .ks-note{background:#e9f6ee;border-radius:12px;padding:11px;font-size:13px}.ks-card .ks-actions{display:flex;gap:10px;flex-wrap:wrap;margin:12px 0}.ks-card .ks-muted{font-size:12px;color:#7c8e83}';
  function endpoint(value){
    try { const u=new URL(value.trim());if(!['http:','https:'].includes(u.protocol)||u.username||u.password||u.search||u.hash)return null;return u.origin+'/'; }
    catch(e){return null;}
  }
  function pane(host){
    host.innerHTML='<section class="office-tool-panel active ks-panel" aria-label="KanScan">'+
      '<div class="ks-card"><h3>▧ KanScan v1.5.1 · Chụp chứng từ</h3>'+
      '<p>Chụp iPhone/Android, nối dọc A4/A5; nhấn giữ từng trang để xoay trái/phải 90°, chỉnh bốn góc, xóa hoặc chụp lại; xuất JPEG về Windows.</p>'+
      '<div class="ks-note">Giữ nguyên KanScan v1.5.1 trên PC. KanBan chỉ mở công cụ; ảnh chứng từ không được tải lên GitHub.</div>'+
      '<div class="ks-actions"><button type="button" id="ksLaunch">Khởi động KanScan</button><button type="button" id="ksOpen">Mở giao diện PC</button><button type="button" id="ksSave">Lưu địa chỉ</button></div>'+
      '<label>Địa chỉ KanScan trên PC<input id="ksEndpoint" type="url" autocomplete="off" spellcheck="false" placeholder="http://127.0.0.1:18765/"></label>'+
      '<p id="ksMessage" class="ks-muted">Cổng mặc định 18765; nếu ứng dụng PC dùng cổng khác thì đổi tại đây.</p></div>'+
      '<div class="ks-card"><h4>Quy trình chụp</h4><ol>'+
      '<li>Nếu cài mới qua KanTool: đặt ZIP nền v1.4 đúng bản vào Downloads, rồi chạy Cập nhật / sửa KanBan Tools để tự nâng cấp lên v1.5.1.</li><li>Bấm Khởi động KanScan và xác nhận mở ứng dụng nếu trình duyệt hỏi.</li>'+
      '<li>iPhone/Android và PC cùng mạng Wi-Fi/LAN; quét mã QR trên cửa sổ KanScan của PC.</li>'+
      '<li>Chụp đơn hoặc nối nhiều tờ; chọn A4/A5, chỉnh từng trang và bấm Xong.</li>'+
      '<li>Ảnh JPEG xuất hiện trong thư mục đã chọn trên PC.</li></ol>'+
      '<p class="ks-muted">Máy đã cài KanScan qua KanTool chỉ cần cập nhật để sửa lỗi WinError 32; máy cài mới cần ZIP nền v1.4 chính xác. Nếu thiếu ZIP, KanTool bỏ qua KanScan mà không ảnh hưởng các công cụ khác. GitHub Pages không thể chạy Python hoặc ghi ảnh trực tiếp lên Windows.</p></div></section>';
    const input=host.querySelector('#ksEndpoint');
    const message=host.querySelector('#ksMessage');
    const launchBtn=host.querySelector('#ksLaunch');
    const report=(text,bad)=>{message.textContent=text;message.style.color=bad?'#ae6913':'#317552';};
    try{input.value=localStorage.getItem(STORAGE)||DEFAULT;}catch(e){input.value=DEFAULT;}
    const get=()=>{const u=endpoint(input.value);if(!u)message.textContent='Địa chỉ sai. Ví dụ http://127.0.0.1:18765/';return u;};
    const save=(url)=>{try{localStorage.setItem(STORAGE,url);}catch(e){}input.value=url;};
    host.querySelector('#ksSave').addEventListener('click',()=>{const u=get();if(u){save(u);message.textContent='Đã lưu địa chỉ trên trình duyệt này.';}});
    launchBtn.addEventListener('click',async ()=>{
      launchBtn.disabled=true;
      report('Đang gửi lệnh khởi động KanScan tới Windows…',false);
      const abort=new AbortController();
      const timer=setTimeout(()=>abort.abort(),6000);
      try{
        const response=await fetch(AGENT+'/system/kanscan/launch',{
          method:'POST',headers:Object.assign({'Content-Type':'application/json'},AGENT_HEADERS),
          body:'{}',cache:'no-store',signal:abort.signal,targetAddressSpace:'loopback'
        });
        const body=await response.json().catch(()=>({}));
        if(!response.ok||!body.ok){
          if(response.status===404)throw new Error('KanTool trên máy là bản cũ, chưa có chức năng khởi động KanScan có phản hồi. Tải EXE qua Chrome rồi chọn Cập nhật / Sửa lỗi.');
          report(body.message||'KanScan chưa khởi động được. Kiểm tra bộ cài và thử Sửa lỗi / Cài lại KanTool.',true);
          return;
        }
        report(body.message||'Đã gửi lệnh khởi động KanScan. Nếu cửa sổ nằm phía sau, bấm Alt+Tab.',false);
      }catch(e){
        report(e.name==='AbortError'?
          'Hết thời gian chờ dịch vụ Windows. Kiểm tra KanTool đang chạy; tải EXE qua Chrome để cập nhật nếu cần.':
          (e instanceof TypeError?
          'Không kết nối được KanTool trên Windows. Mở KanTool-Setup.exe, chọn Cài đặt / Cập nhật rồi thử lại.':
          e.message),true);
      }finally{clearTimeout(timer);launchBtn.disabled=false;}
    });
    host.querySelector('#ksOpen').addEventListener('click',()=>{const u=get();if(!u)return;save(u);window.open(u,'_blank','noopener,noreferrer');report('Đã mở địa chỉ cục bộ. Nếu Chrome báo không kết nối được, kiểm tra KanScan đang chạy và cổng.',false);});
    fetch(AGENT+'/system/kanscan/status',{headers:AGENT_HEADERS,cache:'no-store',targetAddressSpace:'loopback'})
      .then(r=>r.ok?r.json():null).then(info=>{if(!info)return;if(!info.installed)report(info.message,true);else report('KanScan '+(info.version||'')+' đã cài trên PC. Nhấn Khởi động KanScan để mở ứng dụng.',false);})
      .catch(()=>report('Chưa xác minh được KanScan. Cập nhật KanTool qua EXE nếu nút Khởi động không hoạt động.',true));
  }
  const style=document.createElement('style');style.textContent=css;document.head.appendChild(style);
  function mount(){
    const d=document.getElementById('officeToolsDialog');if(!d)return false;
    const nav=d.querySelector('.office-nav'),host=d.querySelector('#officeMain');if(!nav||!host)return false;
    if(nav.querySelector('[data-office-nav="kanscan"]'))return true;
    const b=document.createElement('button');b.type='button';b.dataset.officeNav='kanscan';b.title='KanScan - chụp chứng từ từ điện thoại';
    b.innerHTML='<span class="office-btn-mark">SCAN</span><span>KanScan</span>';nav.appendChild(b);
    b.addEventListener('click',()=>{
      nav.querySelectorAll('[data-office-nav]').forEach(x=>x.classList.toggle('active',x===b));
      const title=d.querySelector('#officeDialogTitle'),desc=d.querySelector('#officeDialogDesc'),status=d.querySelector('#officeStatus');
      if(title)title.textContent='KanScan · Chụp chứng từ';
      if(desc)desc.textContent='Chụp iPhone/Android và lưu JPEG về Windows.';
      if(status)status.textContent='KanScan cần ứng dụng PC đang chạy.';
      pane(host);
    });
    return true;
  }
  if(!mount()){
    const watcher=new MutationObserver(()=>{if(mount())watcher.disconnect();});
    watcher.observe(document.body,{childList:true,subtree:true});
  }
})();
