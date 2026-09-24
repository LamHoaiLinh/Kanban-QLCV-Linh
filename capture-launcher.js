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

  function downloadInstallerBat(){
    const a=document.createElement('a');
    a.href=`capture-agent/CAI_DAT_CHUP_NHANH.bat?t=${Date.now()}`;
    a.download='CAI_DAT_CHUP_NHANH.bat';
    document.body.appendChild(a);
    a.click();
    a.remove();
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
        ? 'Bạn có thể mở cài đặt JPG/PNG hoặc tải <strong>CAI_DAT_CHUP_NHANH.bat</strong> để cập nhật lên bản mới nhất. BAT sẽ tự dừng bản cũ, tải Agent đã đóng gói sẵn, kiểm tra SHA256, ghi đè và khởi động lại.'
        : 'Tải <strong>CAI_DAT_CHUP_NHANH.bat</strong> rồi mở file vừa tải. <strong>Không cần cài Python</strong>; bộ cài tự tải Agent đã đóng gói sẵn và tự ghi đè bản cũ.';
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
        <span>1</span><b>Tải CAI_DAT_CHUP_NHANH.bat</b>
        <span>2</span><b>Mở file BAT — không cần Python, tự ghi đè bản cũ</b>
        <span>3</span><b>Quay lại Kanban và dùng Alt+C hoặc nút CHỤP</b>
      </div>
      <div class="capture-control-actions">
        <button type="button" data-capture-agent-settings>Mở cài đặt JPG/PNG</button>
        <button type="button" data-capture-download-bat class="primary">⬇ Tải / cập nhật .BAT</button>
        <button type="button" data-capture-retry>↻ Kiểm tra lại</button>
      </div>
      <div class="capture-security-note">Bộ cài BAT dùng PowerShell/curl có sẵn trong Windows để tải gói Agent đã biên dịch sẵn. Máy người dùng không cần Python và không cần xóa bản cũ thủ công.</div>
    </section>`;
    document.body.appendChild(panel);

    panel.addEventListener('click',event=>{
      if(event.target===panel||event.target.closest('.capture-setup-close'))hidePanel();
    });
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