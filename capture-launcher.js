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
      ? 'Chụp nhanh Alt+C · Chụp dài Alt+X · Chuột phải: Cài đặt / cập nhật KanBan Tools'
      : 'Chụp nhanh Alt+C · Chụp dài Alt+X · Chuột phải: Cài đặt / tải KanBan Tools';
    button.dataset.tooltip=tip;
    button.title=tip;
    refreshPanel();
  }

  async function request(action,timeout=1100){
    const controller=new AbortController();
    const timer=setTimeout(()=>controller.abort(),timeout);
    try{
      const response=await fetch(`${AGENT}/${action}?t=${Date.now()}`,{
        method:'GET',mode:'cors',cache:'no-store',signal:controller.signal,targetAddressSpace:'loopback'
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
    a.href=`kan-tools/KanTool.bat?t=${Date.now()}`;
    a.download='KanTool.bat';
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
      status.textContent=agentReady?'Đã kết nối · KanBan Tools đang chạy':'Chưa kết nối với KanBan Tools';
      status.classList.toggle('ready',agentReady);
    }
    if(desc){
      desc.innerHTML=agentReady
        ? 'Bạn có thể mở cài đặt JPG/PNG hoặc tải <strong>KanTool.bat</strong> để cập nhật lên bản mới nhất. BAT sẽ tự dừng bản cũ, tải Agent đã đóng gói sẵn, kiểm tra SHA256, ghi đè và khởi động lại.'
        : 'Tải <strong>KanTool.bat</strong> rồi mở file vừa tải. <strong>Bạn không cần tự cài Python hay FFmpeg</strong>; KanTool tự chuẩn bị các thành phần cần thiết.';
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
      <div class="capture-agent-status" data-capture-status>Đang kiểm tra KanBan Tools...</div>
      <p data-capture-description>Đang kiểm tra trạng thái...</p>
      <div class="capture-setup-steps">
        <span>1</span><b>Tải KanTool.bat</b>
        <span>2</span><b>Mở file BAT — không cần Python, tự ghi đè bản cũ</b>
        <span>3</span><b>Alt+C chụp nhanh · Alt+X chụp dài theo khung cố định</b>
      </div>
      <div class="capture-control-actions">
        <button type="button" data-capture-agent-settings>Mở cài đặt JPG/PNG</button>
        <button type="button" data-capture-download-bat class="primary">⬇ Tải / cập nhật KanTool.bat</button>
        <button type="button" data-capture-retry>↻ Kiểm tra lại</button>
      </div>
      <div class="capture-security-note">KanTool không tắt Windows Security. Trong bộ cài chung, Capture chạy từ source Python của chính repo KanBan để giảm cảnh báo nhầm của antivirus.</div>
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