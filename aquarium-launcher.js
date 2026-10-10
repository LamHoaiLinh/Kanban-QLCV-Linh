(()=>{'use strict';const btn=document.getElementById('aquariumTopBtn');if(!btn)return;let overlay,frame,previous;
function close(){if(!overlay||overlay.hidden)return;overlay.hidden=true;frame.src='about:blank';document.body.classList.remove('kan-aquarium-open');previous?.focus?.()}
function open(){if(!overlay){overlay=document.createElement('div');overlay.className='kan-aquarium-overlay';overlay.setAttribute('role','dialog');overlay.setAttribute('aria-modal','true');frame=document.createElement('iframe');frame.className='kan-aquarium-frame';frame.title='Hồ Cá KanAquarium';frame.allow='fullscreen';overlay.append(frame);document.body.append(overlay)}previous=document.activeElement;frame.src='aquarium-game/index.html?kanban=1';overlay.hidden=false;document.body.classList.add('kan-aquarium-open');frame.focus()}
btn.addEventListener('click',open);
window.addEventListener('keydown',e=>{
  // Shortcut is active in KanBan's parent document, not inside the iframe.
  // code handles Vietnamese keyboard layouts more reliably than the character.
  if(e.altKey&&!e.ctrlKey&&!e.metaKey&&e.code==='KeyH'){
    if(overlay&&!overlay.hidden)return;
    e.preventDefault();e.stopPropagation();
    if(!e.repeat)open();
    return;
  }
  if(e.key==='Escape'&&overlay&&!overlay.hidden){e.preventDefault();e.stopPropagation();close()}
},true);
window.addEventListener('message',e=>{if(frame&&e.source===frame.contentWindow&&e.origin===location.origin&&e.data?.type==='aquarium-game-close')close()});})();