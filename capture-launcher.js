(()=>{
  'use strict';
  const button=document.getElementById('screenCaptureBtn');
  if(!button)return;
  const AGENT='http://127.0.0.1:47631';
  let panel=null;

  function setReady(ready){
    button.classList.toggle('capture-agent-ready',ready);
    button.dataset.tooltip=ready
      ? 'Chụp nhanh toàn Windows (Alt+C) · Chuột phải: Cài đặt'
      : 'Chụp nhanh (Alt+C) · Chuột phải: Cài đặt · cần cài/chạy Capture Agent';
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

  function downloadInstaller(){
    const a=document.createElement('a');
    a.href='capture-agent/CAI_DAT_CHUP_NHANH.bat?v=4.0.0';
    a.download='CAI_DAT_CHUP_NHANH.bat';
    document.body.appendChild(a); a.click(); a.remove();
  }

  function hideSetup(){
    if(panel)panel.hidden=true;
  }

  function showSetup(){
    if(!panel){
      panel=document.createElement('div');
      panel.className='capture-setup-backdrop';
      panel.innerHTML=`<section class="capture-setup-card" role="dialog" aria-modal="true" aria-labelledby="captureSetupTitle">
        <button class="capture-setup-close" type="button" aria-label="Đóng">×</button>
        <div class="capture-setup-mark">✂</div>
        <h3 id="captureSetupTitle">Chụp nhanh chưa chạy</h3>
        <p>Kanban trên trình duyệt không thể tự đăng ký <strong>Alt+C toàn Windows</strong>. Máy cần chạy Capture Agent một lần. Nếu bạn đã cài bản trước, hãy chạy lại bộ cài để nâng lên bản v4.</p>
        <div class="capture-setup-steps"><span>1</span><b>Tải bộ cài</b><span>2</span><b>Chạy CAI_DAT_CHUP_NHANH.bat (không cần Python)</b><span>3</span><b>Quay lại bấm Thử lại</b></div>
        <div class="capture-setup-actions">
          <button type="button" data-capture-download>Tải bộ cài</button>
          <button type="button" data-capture-retry class="primary">Thử lại</button>
        </div>
      </section>`;
      document.body.appendChild(panel);
      panel.addEventListener('click',event=>{if(event.target===panel||event.target.closest('.capture-setup-close'))hideSetup()});
      panel.querySelector('[data-capture-download]').addEventListener('click',downloadInstaller);
      panel.querySelector('[data-capture-retry]').addEventListener('click',async()=>{
        if(await request('ping')){hideSetup();await request('capture',1800)}
      });
    }
    panel.hidden=false;
  }

  function protocolFallback(action){
    return new Promise(resolve=>{
      let settled=false,timer=null;
      const done=value=>{if(settled)return;settled=true;window.removeEventListener('blur',onBlur,true);if(timer)clearTimeout(timer);resolve(value)};
      const onBlur=()=>done(true);
      window.addEventListener('blur',onBlur,true);
      const iframe=document.createElement('iframe');
      iframe.hidden=true; iframe.src=`kanbancapture://${action}`; document.body.appendChild(iframe);
      setTimeout(()=>iframe.remove(),1600);
      timer=setTimeout(()=>done(false),900);
    });
  }

  async function invoke(action){
    if(await request(action,1800))return;
    if(await protocolFallback(action)){setReady(true);return}
    showSetup();
  }

  button.addEventListener('click',()=>invoke('capture'));
  button.addEventListener('contextmenu',event=>{event.preventDefault();invoke('settings')});
  button.addEventListener('auxclick',event=>{if(event.button===1){event.preventDefault();invoke('settings')}});

  request('ping',700);
})();