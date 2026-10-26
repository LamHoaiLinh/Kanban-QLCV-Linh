/* KanScan v1.4: add an independent launcher tab to KanBan Tools. */
(() => {
  'use strict';
  const STORAGE='kanban_kanscan_endpoint_v1';
  const DEFAULT='http://127.0.0.1:18765/';
  const css='.ks-panel{display:grid;gap:14px;max-width:870px;margin:0 auto}.ks-card{background:#fff;border:1px solid #d9e9df;border-radius:18px;padding:19px;color:#254837}.ks-card h3{font-size:23px;margin:0 0 9px}.ks-card h4{margin:0 0 10px}.ks-card p,.ks-card li{color:#61786a;line-height:1.65}.ks-card ol{padding-left:22px}.ks-card label{display:grid;gap:7px;font-weight:700;font-size:13px}.ks-card input{width:100%;padding:12px;border:1px solid #cadfd1;border-radius:12px;background:white;color:#234;font:14px system-ui}.ks-card button{background:#277655;color:white;border:0;border-radius:12px;padding:12px 16px;font:700 14px system-ui;cursor:pointer}.ks-card .ks-note{background:#e9f6ee;border-radius:12px;padding:11px;font-size:13px}.ks-card .ks-actions{display:flex;gap:10px;flex-wrap:wrap;margin:12px 0}.ks-card .ks-muted{font-size:12px;color:#7c8e83}';
  function endpoint(value){
    try { const u=new URL(value.trim());if(!['http:','https:'].includes(u.protocol)||u.username||u.password||u.search||u.hash)return null;return u.origin+'/'; }
    catch(e){return null;}
  }
  function pane(host){
    host.innerHTML='<section class="office-tool-panel active ks-panel" aria-label="KanScan">'+
      '<div class="ks-card"><h3>▧ KanScan v1.4 · Chụp chứng từ</h3>'+
      '<p>Chụp iPhone/Android, nối dọc khổ A4/A5, chỉnh thủ công bốn góc, xóa hoặc chụp lại riêng từng ảnh, xuất JPEG về Windows.</p>'+
      '<div class="ks-note">Giữ nguyên KanScan v1.4 trên PC. KanBan chỉ mở công cụ; ảnh chứng từ không được tải lên GitHub.</div>'+
      '<div class="ks-actions"><button type="button" id="ksOpen">Mở KanScan trên PC</button><button type="button" id="ksSave">Lưu địa chỉ</button></div>'+
      '<label>Địa chỉ KanScan trên PC<input id="ksEndpoint" type="url" autocomplete="off" spellcheck="false" placeholder="http://127.0.0.1:18765/"></label>'+
      '<p id="ksMessage" class="ks-muted">Cổng mặc định 18765; nếu ứng dụng PC dùng cổng khác thì đổi tại đây.</p></div>'+
      '<div class="ks-card"><h4>Quy trình chụp</h4><ol>'+
      '<li>Chạy KanScan_v1_4.exe hoặc KHOI_DONG_KHONG_CMD.vbs trên Windows.</li>'+
      '<li>iPhone/Android và PC cùng mạng Wi-Fi/LAN; quét mã QR trên cửa sổ KanScan của PC.</li>'+
      '<li>Chụp đơn hoặc nối nhiều tờ; chọn A4/A5, chỉnh từng trang và bấm Xong.</li>'+
      '<li>Ảnh JPEG xuất hiện trong thư mục đã chọn trên PC.</li></ol>'+
      '<p class="ks-muted">Nếu chưa cài, dùng gói ZIP KanScan v1.4 và bộ lệnh build EXE đã cung cấp. GitHub Pages không thể tự chạy Python hoặc ghi ảnh vào ổ cứng Windows.</p></div></section>';
    const input=host.querySelector('#ksEndpoint');
    const message=host.querySelector('#ksMessage');
    try{input.value=localStorage.getItem(STORAGE)||DEFAULT;}catch(e){input.value=DEFAULT;}
    const get=()=>{const u=endpoint(input.value);if(!u)message.textContent='Địa chỉ sai. Ví dụ http://127.0.0.1:18765/';return u;};
    const save=(url)=>{try{localStorage.setItem(STORAGE,url);}catch(e){}input.value=url;};
    host.querySelector('#ksSave').addEventListener('click',()=>{const u=get();if(u){save(u);message.textContent='Đã lưu địa chỉ trên trình duyệt này.';}});
    host.querySelector('#ksOpen').addEventListener('click',()=>{const u=get();if(!u)return;save(u);window.open(u,'_blank','noopener,noreferrer');message.textContent='Nếu trang không mở, hãy khởi động KanScan trên PC và kiểm tra cổng.';});
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
