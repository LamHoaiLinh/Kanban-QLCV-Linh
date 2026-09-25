(()=>{
  'use strict';

  const button=document.getElementById('kaloBtn');
  if(!button)return;

  const KALO_URL='https://lamhoailinh.github.io/Kalo/';
  const KALO_FALLBACK='https://raw.githack.com/LamHoaiLinh/Kalo/gh-pages/index.html';
  const ALLOWED_ORIGINS=new Set([window.location.origin,'https://raw.githack.com']);
  let resolvedUrl=null;
  let overlay=null;
  let frame=null;
  let loaded=false;
  let lastHotkeyAt=0;
  const boundWindows=new WeakSet();

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
            <button class="kalo-close" type="button" aria-label="Trở về Kanban" data-tooltip="Trở về Kanban (Esc)"><img class="kalo-close-icon" src="data:image/png;base64,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" alt="" /></button>
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

  async function resolveKaloUrl(){
    if(resolvedUrl)return resolvedUrl;
    try{
      const response=await fetch(KALO_URL,{method:'GET',cache:'no-store'});
      if(response.ok){
        resolvedUrl=KALO_URL;
        return resolvedUrl;
      }
    }catch(_){/* GitHub Pages may not be enabled yet. */}
    resolvedUrl=KALO_FALLBACK;
    return resolvedUrl;
  }

  async function openKalo(){
    ensureOverlay();
    overlay.hidden=false;
    document.body.classList.add('kalo-open');
    button.classList.add('kalo-active');
    button.setAttribute('aria-pressed','true');
    if(!frame.getAttribute('src')){
      frame.src=await resolveKaloUrl();
      const popout=overlay.querySelector('.kalo-popout');
      if(popout)popout.href=frame.src;
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

  function runAltK(event){
    if(!event?.altKey || String(event.key||'').toLowerCase()!=='k')return false;
    event.preventDefault?.();
    event.stopImmediatePropagation?.();
    event.stopPropagation?.();
    const now=performance.now();
    if(now-lastHotkeyAt<260)return true;
    lastHotkeyAt=now;
    toggleKalo();
    return true;
  }

  function bindWindowHotkey(targetWindow){
    if(!targetWindow || boundWindows.has(targetWindow))return;
    try{
      targetWindow.addEventListener('keydown',event=>{
        if(runAltK(event))return;
        if(targetWindow===window && event.key==='Escape' && overlay && !overlay.hidden){
          event.preventDefault();
          closeKalo();
        }
      },true);
      boundWindows.add(targetWindow);
    }catch(_){/* Cross-origin iframe: Kalo tự chuyển Alt+K bằng postMessage. */}
  }

  function bindIframeHotkey(iframe){
    if(!iframe || iframe.dataset.kaloHotkeyWatcher==='1')return;
    iframe.dataset.kaloHotkeyWatcher='1';
    const bind=()=>{
      try{bindWindowHotkey(iframe.contentWindow);}catch(_){}
    };
    iframe.addEventListener('load',bind);
    bind();
  }

  function bindAllIframeHotkeys(root=document){
    try{
      root.querySelectorAll?.('iframe').forEach(bindIframeHotkey);
    }catch(_){}
  }

  button.setAttribute('aria-pressed','false');
  button.addEventListener('click',toggleKalo);

  bindWindowHotkey(window);
  bindAllIframeHotkeys();
  new MutationObserver(records=>{
    for(const record of records){
      for(const node of record.addedNodes){
        if(!(node instanceof Element))continue;
        if(node.tagName==='IFRAME')bindIframeHotkey(node);
        bindAllIframeHotkeys(node);
      }
    }
  }).observe(document.documentElement,{childList:true,subtree:true});

  window.addEventListener('message',event=>{
    if(!ALLOWED_ORIGINS.has(event.origin))return;
    if(!frame||event.source!==frame.contentWindow)return;
    const data=event.data;
    if(!data||data.source!=='kalo')return;
    if(data.type==='close') closeKalo();
    if(data.type==='toggle'){
      const now=performance.now();
      if(now-lastHotkeyAt<260)return;
      lastHotkeyAt=now;
      toggleKalo();
    }
  });
})();
