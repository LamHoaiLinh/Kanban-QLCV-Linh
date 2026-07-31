// Tarot Việt chạy độc lập trong iframe và chỉ lưu lịch sử Tarot bằng khóa riêng.
const tarotButton=document.querySelector('.tarot-launch-btn');
let tarotOverlay=null,tarotFrame=null;
if(tarotButton){tarotButton.addEventListener('click',openTarot);window.addEventListener('message',event=>{if(event.data?.type==='tarot-game-close')closeTarot()})}
function openTarot(){if(!tarotOverlay){tarotOverlay=document.createElement('div');tarotOverlay.className='marble-draw-overlay';tarotOverlay.setAttribute('role','dialog');tarotOverlay.setAttribute('aria-label','Tarot Việt');tarotFrame=document.createElement('iframe');tarotFrame.className='marble-draw-frame';tarotFrame.title='Tarot Việt';tarotFrame.allow='fullscreen';tarotOverlay.appendChild(tarotFrame);document.body.appendChild(tarotOverlay)}tarotFrame.src='tarot-game/index.html?v=5.0.0';tarotOverlay.hidden=false;document.body.classList.add('marble-draw-open')}
function closeTarot(){if(!tarotOverlay)return;tarotOverlay.hidden=true;tarotFrame.src='about:blank';document.body.classList.remove('marble-draw-open')}
