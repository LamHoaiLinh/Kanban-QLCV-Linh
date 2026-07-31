// Dice Arena chạy độc lập trong iframe và không đọc hoặc sửa dữ liệu Kanban.
const button=document.querySelector('.dice-launch-btn');
let overlay=null,frame=null;
if(button){button.addEventListener('click',openDiceGame);window.addEventListener('message',event=>{if(event.data?.type==='dice-game-close')closeDiceGame()})}
function openDiceGame(){if(!overlay){overlay=document.createElement('div');overlay.className='marble-draw-overlay';overlay.setAttribute('role','dialog');overlay.setAttribute('aria-label','Dice Arena');frame=document.createElement('iframe');frame.className='marble-draw-frame';frame.title='Dice Arena';frame.allow='fullscreen';overlay.appendChild(frame);document.body.appendChild(overlay)}frame.src='dice-game/index.html?v=5.3.0';overlay.hidden=false;document.body.classList.add('marble-draw-open')}
function closeDiceGame(){if(!overlay)return;overlay.hidden=true;frame.src='about:blank';document.body.classList.remove('marble-draw-open')}
