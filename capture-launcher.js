(()=>{
  'use strict';
  const button=document.getElementById('screenCaptureBtn');
  if(!button)return;
  const invoke=action=>{
    try{
      window.location.href=`kanbancapture://${action}`;
    }catch(error){
      console.error('Không thể gọi Kanban Capture Agent:',error);
    }
  };
  button.addEventListener('click',()=>invoke('capture'));
  button.addEventListener('contextmenu',event=>{event.preventDefault();invoke('settings')});
  button.addEventListener('auxclick',event=>{if(event.button===1){event.preventDefault();invoke('settings')}});
})();
