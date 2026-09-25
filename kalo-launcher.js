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
  let unreadCount=Number(sessionStorage.getItem('kanban-kalo-unread')||0) || 0;
  let noticeTimer=null;
  const baseTitle=document.title;
  const seenMessageIds=new Set();
  const boundWindows=new WeakSet();

  const badge=document.createElement('span');
  badge.className='kalo-unread-badge';
  badge.hidden=true;
  badge.setAttribute('aria-label','Tin nhắn Kalo chưa xem');
  button.appendChild(badge);

  const notice=document.createElement('button');
  notice.type='button';
  notice.className='kalo-message-notice';
  notice.hidden=true;
  notice.innerHTML='<strong>KANBAN CÓ TIN NHẮN MỚI</strong><span data-kalo-notice-detail>Kalo vừa nhận tin nhắn mới.</span>';
  document.body.appendChild(notice);

  function updateUnreadUi(){
    badge.hidden=unreadCount<=0;
    badge.textContent=unreadCount>99?'99+':String(unreadCount);
    button.classList.toggle('kalo-has-unread',unreadCount>0);
    sessionStorage.setItem('kanban-kalo-unread',String(unreadCount));
    document.title=unreadCount>0?`(${unreadCount}) ${baseTitle}`:baseTitle;
  }

  function clearUnread(){
    unreadCount=0;
    updateUnreadUi();
    notice.hidden=true;
    clearTimeout(noticeTimer);
  }

  function showMessageNotice(data){
    const detail=notice.querySelector('[data-kalo-notice-detail]');
    const sender=String(data?.senderName||'Kalo').trim();
    const conversation=String(data?.conversationName||'').trim();
    detail.textContent=conversation && conversation!==sender
      ? `${sender} · ${conversation}`
      : `Tin nhắn mới từ ${sender}`;
    notice.hidden=false;
    notice.classList.remove('show');
    requestAnimationFrame(()=>notice.classList.add('show'));
    clearTimeout(noticeTimer);
    noticeTimer=setTimeout(()=>{
      notice.classList.remove('show');
      setTimeout(()=>{ notice.hidden=true; },180);
    },5200);
  }

  function registerIncomingMessage(data){
    const id=String(data?.messageId||'');
    if(id && seenMessageIds.has(id))return;
    if(id){
      seenMessageIds.add(id);
      if(seenMessageIds.size>120) seenMessageIds.delete(seenMessageIds.values().next().value);
    }
    if(overlay && !overlay.hidden)return;
    unreadCount+=1;
    updateUnreadUi();
    showMessageNotice(data);
  }

  notice.addEventListener('click',()=>{
    openKalo();
  });
  updateUnreadUi();

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
      if(overlay && !overlay.hidden) frame.focus();
    });

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
    clearUnread();
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

  async function startBackgroundKalo(){
    ensureOverlay();
    if(frame.getAttribute('src'))return;
    frame.src=await resolveKaloUrl();
    const popout=overlay.querySelector('.kalo-popout');
    if(popout)popout.href=frame.src;
  }

  startBackgroundKalo().catch(()=>{});

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
    if(data.type==='new-message'){
      registerIncomingMessage(data);
      return;
    }
    if(data.type==='toggle'){
      const now=performance.now();
      if(now-lastHotkeyAt<260)return;
      lastHotkeyAt=now;
      toggleKalo();
    }
  });
})();
