(()=>{
  'use strict';

  const button=document.getElementById('kaloBtn');
  if(!button)return;

  const KALO_URL='https://lamhoailinh.github.io/Kalo/';
  const SAME_ORIGIN=window.location.origin;
  let overlay=null;
  let frame=null;
  let loaded=false;

  function ensureOverlay(){
    if(overlay)return overlay;

    overlay=document.createElement('section');
    overlay.id='kaloOverlay';
    overlay.className='kalo-overlay';
    overlay.hidden=true;
    overlay.setAttribute('aria-label','Kalo');
    overlay.innerHTML=`
      <div class="kalo-shell">
        <header class="kalo-shell-bar">
          <div class="kalo-shell-brand">
            <span class="kalo-shell-logo">K</span>
            <div><strong>Kalo</strong><small>Trò chuyện · Alt+K</small></div>
          </div>
          <div class="kalo-shell-actions">
            <a class="kalo-popout" href="${KALO_URL}" target="_blank" rel="noopener" data-tooltip="Mở Kalo ở cửa sổ riêng">↗</a>
            <button class="kalo-close" type="button" aria-label="Trở về Kanban" data-tooltip="Trở về Kanban (Esc)">×</button>
          </div>
        </header>
        <div class="kalo-frame-wrap">
          <div class="kalo-loading" data-kalo-loading>
            <span class="kalo-loading-dot"></span>
            <strong>Đang mở Kalo…</strong>
            <small>Lần đầu có thể mất vài giây để tải ứng dụng chat.</small>
          </div>
          <iframe
            class="kalo-frame"
            title="Kalo"
            allow="clipboard-read; clipboard-write; microphone; camera"
            referrerpolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>`;

    document.body.appendChild(overlay);
    frame=overlay.querySelector('.kalo-frame');
    const loading=overlay.querySelector('[data-kalo-loading]');
    frame.addEventListener('load',()=>{
      loaded=true;
      loading.hidden=true;
      frame.focus();
    });
    overlay.querySelector('.kalo-close').addEventListener('click',closeKalo);
    return overlay;
  }

  function openKalo(){
    ensureOverlay();
    overlay.hidden=false;
    document.body.classList.add('kalo-open');
    button.classList.add('kalo-active');
    button.setAttribute('aria-pressed','true');
    if(!frame.src){
      frame.src=KALO_URL;
    }else if(loaded){
      frame.focus();
    }
  }

  function closeKalo(){
    if(!overlay||overlay.hidden)return;
    overlay.hidden=true;
    document.body.classList.remove('kalo-open');
    button.classList.remove('kalo-active');
    button.setAttribute('aria-pressed','false');
    button.focus({preventScroll:true});
  }

  function toggleKalo(){
    if(overlay && !overlay.hidden) closeKalo();
    else openKalo();
  }

  button.setAttribute('aria-pressed','false');
  button.addEventListener('click',toggleKalo);

  window.addEventListener('keydown',event=>{
    if(event.altKey && event.key.toLowerCase()==='k'){
      event.preventDefault();
      event.stopPropagation();
      toggleKalo();
      return;
    }
    if(event.key==='Escape' && overlay && !overlay.hidden){
      event.preventDefault();
      closeKalo();
    }
  },true);

  window.addEventListener('message',event=>{
    if(event.origin!==SAME_ORIGIN)return;
    const data=event.data;
    if(!data||data.source!=='kalo')return;
    if(data.type==='close') closeKalo();
    if(data.type==='toggle') toggleKalo();
  });
})();
