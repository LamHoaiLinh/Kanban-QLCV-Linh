// Trình khởi chạy Marble Draw được tách riêng để không tác động logic và dữ liệu Kanban.
const button=document.querySelector('.marble-launch-btn');
let overlay=null,frame=null;
if(button){
  button.addEventListener('click',openMarbleDraw);
  window.addEventListener('message',event=>{if(event.data?.type==='marble-draw-close')closeMarbleDraw()});
}
function openMarbleDraw(){
  if(!overlay){
    overlay=document.createElement('div');overlay.className='marble-draw-overlay';overlay.setAttribute('role','dialog');overlay.setAttribute('aria-label','Marble Draw – Đường đua may mắn');
    frame=document.createElement('iframe');frame.className='marble-draw-frame';frame.title='Marble Draw – Đường đua may mắn';frame.allow='fullscreen';overlay.appendChild(frame);document.body.appendChild(overlay);
  }
  frame.src='marble-draw/index.html?v=1.3.0';overlay.hidden=false;document.body.classList.add('marble-draw-open');
}
function closeMarbleDraw(){
  if(!overlay)return;overlay.hidden=true;frame.src='about:blank';document.body.classList.remove('marble-draw-open');
}
