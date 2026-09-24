(()=>{
  'use strict';
  const button=document.getElementById('screenCaptureBtn');
  if(!button)return;

  const AGENT='http://127.0.0.1:47631';
  let panel=null;
  let agentReady=false;

  function setReady(ready){
    agentReady=!!ready;
    button.classList.toggle('capture-agent-ready',agentReady);
    const tip=agentReady
      ? 'Chụp nhanh toàn Windows (Alt+C) · Chuột phải: Cài đặt / cập nhật Capture Agent'
      : 'Chụp nhanh (Alt+C) · Chuột phải: Cài đặt / tải Capture Agent';
    button.dataset.tooltip=tip;
    button.title=tip;
    refreshPanel();
  }

  async function request(action,timeout=1100){
    const controller=new AbortController();
    const timer=setTimeout(()=>controller.abort(),timeout);
    try{
      const response=await fetch(`${AGENT}/${action}?t=${Date.now()}`,{
        method:'GET',mode:'cors',cache:'no-store',signal:controller.signal
      });
      clearTimeout(timer);
      if(!response.ok)throw new Error('Agent không phản hồi');
      setReady(true);
      return true;
    }catch(error){
      clearTimeout(timer);
      setReady(false);
      return false;
    }
  }

  function downloadFile(href,name){
    const a=document.createElement('a');
    a.href=href;
    a.download=name;
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  function downloadInstallerExe(){
    downloadFile(
      `capture-agent/bin/CAI_DAT_CHUP_NHANH.exe?t=${Date.now()}`,
      'CAI_DAT_CHUP_NHANH.exe'
    );
  }

  function downloadInstallerBat(){
    downloadFile(
      `capture-agent/CAI_DAT_CHUP_NHANH.bat?t=${Date.now()}`,
      'CAI_DAT_CHUP_NHANH.bat'
    );
  }

  function hidePanel(){
    if(panel)panel.hidden=true;
  }

  function refreshPanel(){
    if(!panel)return;
    const status=panel.querySelector('[data-capture-status]');
    const desc=panel.querySelector('[data-capture-description]');
    const settingsBtn=panel.querySelector('[data-capture-agent-settings]');
    if(status){
      status.textContent=agentReady?'Đã kết nối · Capture Agent đang chạy':'Chưa kết nối với Capture Agent';
      status.classList.toggle('ready',agentReady);
    }
    if(desc){
      desc.innerHTML=agentReady
        ? 'Bạn có thể mở cài đặt JPG/PNG hoặc tải bộ cập nhật mới nhất. File <strong>CAI_DAT_CHUP_NHANH.exe</strong> sẽ tự dừng bản cũ, ghi đè bản mới và khởi động lại.'
        : 'Tải <strong>CAI_DAT_CHUP_NHANH.exe</strong>, mở file vừa tải. Bộ cài sẽ tự ghi đè bản cũ; không cần gỡ thủ công.';
    }
    if(settingsBtn)settingsBtn.disabled=!agentReady;
  }

  function ensurePanel(){
    if(panel)return panel;
    panel=document.createElement('div');
    panel.className='capture-setup-backdrop';
    panel.hidden=true;
    panel.innerHTML=`<section class="capture-setup-card capture-control-card" role="dialog" aria-modal="true" aria-labelledby="captureControlTitle">
      <button class="capture-setup-close" type="button" aria-label="Đóng">×</button>
      <div class="capture-setup-mark">✂</div>
      <h3 id="captureControlTitle">Cài đặt Chụp nhanh</h3>
      <div class="capture-agent-status" data-capture-status>Đang kiểm tra Capture Agent...</div>
      <p data-capture-description>Đang kiểm tra trạng thái...</p>
      <div class="capture-setup-steps">
        <span>1</span><b>Tải CAI_DAT_CHUP_NHANH.exe</b>
        <span>2</span><b>Mở file vừa tải — bộ cài tự ghi đè bản cũ</b>
        <span>3</span><b>Quay lại Kanban và dùng Alt+C hoặc nút CHỤP</b>
      </div>
      <div class="capture-control-actions">
        <button type="button" data-capture-agent-settings>Mở cài đặt JPG/PNG</button>
        <button type="button" data-capture-download-exe class="primary">⬇ Tải / cập nhật .EXE</button>
        <button type="button" data-capture-retry>↻ Kiểm tra lại</button>
        <button type="button" data-capture-download-bat class="subtle">BAT dự phòng</button>
      </div>
      <div class="capture-security-note">Windows có thể hỏi xác nhận khi mở file tải từ Internet. Bộ cài dùng thư mục người dùng và không yêu cầu gỡ bản cũ trước.</div>
    </section>`;
    document.body.appendChild(panel);

    panel.addEventListener('click',event=>{
      if(event.target===panel||event.target.closest('.capture-setup-close'))hidePanel();
    });
    panel.querySelector('[data-capture-download-exe]').addEventListener('click',downloadInstallerExe);
    panel.querySelector('[data-capture-download-bat]').addEventListener('click',downloadInstallerBat);
    panel.querySelector('[data-capture-agent-settings]').addEventListener('click',async()=>{
      if(await request('settings',1600))hidePanel();
    });
    panel.querySelector('[data-capture-retry]').addEventListener('click',()=>request('ping',1200));
    return panel;
  }

  async function showControlPanel(){
    ensurePanel();
    panel.hidden=false;
    refreshPanel();
    await request('ping',800);
    refreshPanel();
  }

  function protocolFallback(action){
    return new Promise(resolve=>{
      let settled=false,timer=null;
      const done=value=>{
        if(settled)return;
        settled=true;
        window.removeEventListener('blur',onBlur,true);
        if(timer)clearTimeout(timer);
        resolve(value);
      };
      const onBlur=()=>done(true);
      window.addEventListener('blur',onBlur,true);
      const iframe=document.createElement('iframe');
      iframe.hidden=true;
      iframe.src=`kanbancapture://${action}`;
      document.body.appendChild(iframe);
      setTimeout(()=>iframe.remove(),1600);
      timer=setTimeout(()=>done(false),900);
    });
  }

  async function invokeCapture(){
    if(await request('capture',1800))return;
    if(await protocolFallback('capture')){
      setReady(true);
      return;
    }
    await showControlPanel();
  }

  button.addEventListener('click',invokeCapture);
  button.addEventListener('contextmenu',event=>{
    event.preventDefault();
    showControlPanel();
  });
  button.addEventListener('auxclick',event=>{
    if(event.button===1){
      event.preventDefault();
      showControlPanel();
    }
  });

  request('ping',700);
})();