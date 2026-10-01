
const KANMEDIA_AGENT='http://127.0.0.1:47632';
const KANMEDIA_HEADERS={'X-KanBan-Agent':'linh-kanban-v1'};
const kmState={tab:'download',kind:'audio',format:'mp3',quality:'high',urls:[],urlText:'',allPlaylist:false,downloadDir:'',files:[],editFile:null,editUrl:null,jobId:null,poll:null,probe:null,aliveTimer:null,aliveStep:0};
let kmHost=null;

export function renderKanMediaTool(host){
  kmHost=host;
  ensureKanMediaCss();
  host.innerHTML=[
    '<section class="office-tool-panel active km-panel">',
    '<div class="office-tool-head km-head"><div><h3>KanMedia</h3><p>Tải, chuyển đổi và chỉnh nhanh audio/video với ít thao tác nhất.</p></div>',
    '<div class="km-agent-pill" id="kmAgentPill" data-tooltip="Trạng thái KanBan Tools trên máy tính"><i></i><span>Đang kiểm tra…</span><button type="button" id="kmUpdateBtn" data-tooltip="Cập nhật các thành phần KanMedia">↻ Cập nhật</button></div></div>',
    '<div class="km-tabs"><button type="button" data-km-tab="download">Tải Media</button><button type="button" data-km-tab="convert">Chuyển đổi Media</button><button type="button" data-km-tab="edit">Edit Media</button></div>',
    '<div id="kmTabHost"></div></section>'
  ].join('');
  host.querySelectorAll('[data-km-tab]').forEach(function(b){b.addEventListener('click',function(){kmState.tab=b.dataset.kmTab;renderKmTab();});});
  host.querySelector('#kmUpdateBtn').addEventListener('click',updateKanTools);
  renderKmTab();
  checkKanMediaAgent().then(resumeActiveJob);
}
function applyKmTooltips(){
  if(!kmHost)return;
  const tips={
    kmUpdateBtn:'Kiểm tra và cập nhật KanBan Tools cùng lõi tải Media.',
    kmClearUrls:'Xóa toàn bộ link đang dán.',
    kmOpenFolder:'Mở thư mục lưu hiện tại của KanMedia.',
    kmChooseFolder:'Chọn thư mục lưu khác trên máy. KanMedia sẽ nhớ lựa chọn cho lần sau.',
    kmConvertChooseFolder:'Chọn thư mục lưu file sau khi chuyển đổi. KanMedia sẽ nhớ lựa chọn này.',
    kmConvertOpenFolder:'Mở thư mục lưu hiện tại của KanMedia.',
    kmDownload:'Bắt đầu tải các link đã nhận.',
    kmCancel:'Hủy tác vụ Media đang chạy.',
    kmConvertRun:'Chuyển toàn bộ file đã chọn sang định dạng và chất lượng đang chọn.',
    kmSetStart:'Lấy thời điểm đang phát làm điểm bắt đầu.',
    kmSetEnd:'Lấy thời điểm đang phát làm điểm kết thúc.',
    kmPreviewStart:'Phát thử từ điểm bắt đầu đã chọn.',
    kmEditRun:'Xuất một file mới; file gốc luôn được giữ nguyên.'
  };
  kmHost.querySelectorAll('button').forEach(function(b){
    if(b.dataset.tooltip)return;
    let tip=tips[b.id]||'';
    if(!tip&&b.dataset.kmTab==='download')tip='Tải audio hoặc video từ link.';
    if(!tip&&b.dataset.kmTab==='convert')tip='Đổi định dạng file audio/video trên máy.';
    if(!tip&&b.dataset.kmTab==='edit')tip='Cắt và chỉnh nhanh audio/video.';
    if(!tip&&b.dataset.kind==='audio')tip='Chọn tải âm thanh; rê chuột để chọn MP3, M4A, OPUS, FLAC hoặc WAV.';
    if(!tip&&b.dataset.kind==='video')tip='Chọn tải video; rê chuột để chọn MP4, MKV hoặc WebM.';
    if(!tip&&b.dataset.format)tip='Chọn định dạng '+b.dataset.format.toUpperCase()+'.';
    if(!tip&&b.dataset.quality)tip='Chọn mức chất lượng '+b.textContent.trim()+'.';
    if(!tip&&b.dataset.out)tip='Chuyển file thành '+b.dataset.out.toUpperCase()+'.';
    if(!tip&&b.dataset.cq)tip='Chọn mức dung lượng/chất lượng '+b.textContent.trim()+'.';
    if(!tip&&b.dataset.cut==='keep')tip='Chỉ giữ lại đoạn giữa điểm đầu và điểm cuối.';
    if(!tip&&b.dataset.cut==='remove')tip='Xóa đoạn giữa điểm đầu và điểm cuối, giữ hai phần còn lại.';
    if(!tip&&b.dataset.speed)tip='Xuất file với tốc độ '+b.textContent.trim()+'.';
    if(!tip)tip='Thực hiện: '+b.textContent.trim();
    b.dataset.tooltip=tip;b.title=tip;
  });
}
function ensureKanMediaCss(){
  if(document.querySelector('link[data-kanmedia-css]'))return;
  const l=document.createElement('link');l.rel='stylesheet';l.href='office-tools/kanmedia/kanmedia.css?v=1.3.0';l.dataset.kanmediaCss='1';document.head.appendChild(l);
}
function esc(v){return String(v==null?'':v).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
function bytes(n){n=Number(n)||0;if(n<1024)return n+' B';const u=['KB','MB','GB','TB'];let i=-1;do{n/=1024;i++;}while(n>=1024&&i<u.length-1);return n.toFixed(n>=100?0:n>=10?1:2)+' '+u[i];}
function renderKmTab(){
  if(!kmHost)return;
  kmHost.querySelectorAll('[data-km-tab]').forEach(function(b){b.classList.toggle('active',b.dataset.kmTab===kmState.tab);});
  const h=kmHost.querySelector('#kmTabHost');
  if(kmState.tab==='download')renderDownload(h);
  else if(kmState.tab==='convert')renderConvert(h);
  else renderEdit(h);
  applyKmTooltips();
}
async function kmApi(path,opt){
  opt=opt||{};const headers=Object.assign({},KANMEDIA_HEADERS,opt.headers||{});
  let body=opt.body;if(Object.prototype.hasOwnProperty.call(opt,'json')){headers['Content-Type']='application/json';body=JSON.stringify(opt.json);}
  const ctl=new AbortController();const tm=setTimeout(function(){ctl.abort();},opt.timeout||5000);
  try{
    let r;
    try{
      r=await fetch(KANMEDIA_AGENT+path,{method:opt.method||'GET',headers:headers,body:body,cache:'no-store',signal:ctl.signal,targetAddressSpace:'loopback'});
    }catch(e){
      if(e&&e.name==='AbortError')throw new Error('KanMedia phản hồi quá chậm. Hãy kiểm tra KanBan Tools.');
      throw new Error('Không kết nối được KanMedia trên máy. Hãy chạy lại KanTool.bat rồi bấm Kiểm tra lại.');
    }
    if(!r.ok){let m='Lỗi '+r.status;try{const j=await r.json();m=j.error||m;}catch(e){}throw new Error(m);}
    return opt.raw?r:await r.json();
  }finally{clearTimeout(tm);}
}
async function checkKanMediaAgent(){
  const p=kmHost&&kmHost.querySelector('#kmAgentPill');if(!p)return;
  try{
    const s=await kmApi('/health',{timeout:1800});
    p.classList.toggle('ready',!!s.mediaReady);p.classList.toggle('warn',!s.mediaReady);
    p.querySelector('span').textContent=s.mediaReady?'Sẵn sàng':'Cần bổ sung thành phần';
    if(s.downloads){
      kmState.downloadDir=s.downloads;
      const pathEl=kmHost&&kmHost.querySelector('#kmDownloadPath');if(pathEl)pathEl.textContent=s.downloads;
      const convertPath=kmHost&&kmHost.querySelector('#kmConvertPath');if(convertPath)convertPath.textContent=s.downloads;
    }
  }catch(e){p.classList.remove('ready');p.classList.add('warn');p.querySelector('span').textContent='Chưa cài KanBan Tools';}
}
async function resumeActiveJob(){
  if(kmState.jobId)return;
  try{
    const r=await kmApi('/jobs/active',{timeout:1800});
    const j=r&&r.job;if(!j||!j.jobId)return;
    if(['download','convert','edit'].includes(j.mode)&&kmState.tab!==j.mode){
      kmState.tab=j.mode;renderKmTab();
    }
    startPolling(j.jobId,true);
    notice('Đã nối lại tác vụ đang chạy trên máy.','ok');
  }catch(e){}
}
async function updateKanTools(){
  try{await kmApi('/system/update',{method:'POST',json:{scope:'all'},timeout:3500});notice('Đã mở cập nhật KanBan Tools.','ok');}
  catch(e){notice('KanBan Tools chưa chạy. Chuột phải CÔNG CỤ để tải KanTool.bat.','warn');}
}
function notice(msg,type){
  const n=kmHost&&kmHost.querySelector('#kmInlineNotice');if(!n)return;n.hidden=false;n.textContent=msg;n.dataset.type=type||'info';
}
function parseUrls(text){
  const list=(String(text||'').match(/https?:\/\/[^\s,;<>"']+/gi)||[]).map(function(x){return x.replace(/[)\].!?]+$/g,'');});
  const out=[],seen=new Set();list.forEach(function(u){try{const x=new URL(u);if(!/^https?:$/.test(x.protocol))return;if(!seen.has(x.href)){seen.add(x.href);out.push(x.href);}}catch(e){}});return out;
}
function isPurePlaylistUrl(u){
  try{
    const x=new URL(u);return /(?:^|\.)youtube\.com$/i.test(x.hostname)&&x.pathname==='/playlist'&&!!x.searchParams.get('list');
  }catch(e){return false;}
}
function progressCard(){
  return [
    '<div class="km-card km-progress-card"><div class="km-section-title">Tiến độ</div>',
    '<div class="km-progress"><i id="kmProgressFill"></i></div>',
    '<div class="km-now-card"><div class="km-progress-line"><div id="kmProgressText" class="km-progress-text">Sẵn sàng</div><span id="kmAliveDots" class="km-alive-dots" hidden></span></div>',
    '<div id="kmProgressSub" class="km-progress-sub"></div></div>',
    '<div id="kmInlineNotice" class="km-notice" hidden></div>',
    '<div class="km-row km-progress-actions"><button type="button" class="office-btn danger" id="kmCancel" disabled>Hủy</button></div></div>'
  ].join('');
}
function setProgress(pct,text,sub){
  const f=kmHost&&kmHost.querySelector('#kmProgressFill'),t=kmHost&&kmHost.querySelector('#kmProgressText'),box=kmHost&&kmHost.querySelector('#kmProgressSub');
  if(f)f.style.width=Math.max(0,Math.min(100,Number(pct)||0))+'%';
  if(t)t.textContent=String(text||'').replace(/[.。]+\s*$/,'');
  if(box){
    const parts=String(sub||'').split(' · ').filter(Boolean);
    if(!parts.length){box.innerHTML='';}
    else{
      const first=parts.shift();
      box.innerHTML='<div class="km-current-title">'+esc(first)+'</div>'+(parts.length?'<div class="km-progress-meta">'+parts.map(function(x){return '<span>'+esc(x)+'</span>';}).join('')+'</div>':'');
    }
  }
}
function setAlive(v){
  clearInterval(kmState.aliveTimer);kmState.aliveTimer=null;kmState.aliveStep=0;
  const d=kmHost&&kmHost.querySelector('#kmAliveDots');if(!d)return;
  if(!v){d.hidden=true;d.textContent='';return;}
  d.hidden=false;
  const tick=function(){kmState.aliveStep=(kmState.aliveStep%3)+1;d.textContent='.'.repeat(kmState.aliveStep);};
  tick();kmState.aliveTimer=setInterval(tick,420);
}
function setBusy(v){
  if(!kmHost)return;kmHost.querySelectorAll('.km-run').forEach(function(b){b.disabled=!!v;});
  const c=kmHost.querySelector('#kmCancel');if(c)c.disabled=!v;setAlive(!!v);
}
function bindCancel(){
  const c=kmHost&&kmHost.querySelector('#kmCancel');if(c)c.addEventListener('click',async function(){if(!kmState.jobId)return;try{await kmApi('/jobs/'+encodeURIComponent(kmState.jobId)+'/cancel',{method:'POST',json:{}});setProgress(0,'Đang hủy…','');}catch(e){notice('Không gửi được lệnh hủy.','warn');}});
}
function startPolling(id,reconnected){
  kmState.jobId=id;clearInterval(kmState.poll);setBusy(true);bindCancel();
  const poll=async function(){
    try{
      const j=await kmApi('/jobs/'+encodeURIComponent(id),{timeout:3000});
      const parts=[];
      if(j.current)parts.push(j.current);
      if(j.index&&j.total)parts.push(j.index+'/'+j.total);
      if(j.state==='running'&&Number.isFinite(Number(j.percent)))parts.push(Math.round(Number(j.percent))+'%');
      if(j.speed)parts.push(j.speed);
      if(j.eta&&j.eta!=='NA')parts.push('còn khoảng '+j.eta);
      let mainText=j.message||'Đang xử lý';
      if(j.state==='done')mainText='Hoàn tất';
      else if(j.state==='cancelled')mainText='Đã hủy';
      else if(j.state==='error')mainText='Có lỗi';
      else if(j.stage==='download')mainText=(j.index&&j.total)?'Đang tải bài '+j.index+'/'+j.total:'Đang tải';
      else if(j.stage==='merge')mainText='Đang ghép hình và tiếng';
      else if(j.stage==='metadata')mainText='Đang ghi thông tin file';
      else if(j.stage==='convert')mainText='Đang chuyển định dạng';
      else if(j.stage==='ffmpeg')mainText=String(j.message||'Đang xử lý').replace(/“[^”]*”/g,'').replace(/—.*$/,'').trim();
      setProgress(j.percent||0,mainText,parts.join(' · '));
      if(['done','error','cancelled'].includes(j.state)){
        clearInterval(kmState.poll);kmState.poll=null;kmState.jobId=null;setBusy(false);
        if(j.state==='done')notice(j.output?'Đã lưu: '+j.output:'Đã hoàn tất.','ok');
        else if(j.state==='cancelled')notice('Đã hủy tác vụ.','warn');
        else notice(j.error||'Tác vụ không hoàn tất.','warn');
      }
    }catch(e){
      const sub=kmHost&&kmHost.querySelector('#kmProgressSub');if(sub&&!sub.textContent)sub.textContent='KanMedia vẫn đang xử lý trên máy…';
    }
  };
  poll();kmState.poll=setInterval(poll,700);
}
function qualityButtons(){
  return '<div class="km-quality" id="kmQuality"><button type="button" data-quality="ultra"></button><button type="button" data-quality="high"></button><button type="button" data-quality="medium"></button><button type="button" data-quality="low"></button></div>';
}
function setQualityButton(b,title,note){
  if(!b)return;
  b.innerHTML='<span class="km-q-title">'+esc(title)+'</span>'+(note?'<small class="km-q-note">'+esc(note)+'</small>':'');
}
function audioQualityLabels(){
  if(kmState.format==='mp3')return {
    ultra:{title:'Tốt nhất',note:'~245k VBR'},high:{title:'Cao',note:'~190k VBR'},medium:{title:'Trung bình',note:'~165k VBR'},low:{title:'Nhẹ',note:'~100k VBR'},
    tips:{ultra:'MP3 VBR chất lượng cao nhất từ nguồn.',high:'MP3 VBR chất lượng cao.',medium:'MP3 VBR cân bằng chất lượng và dung lượng.',low:'MP3 VBR nhẹ hơn, phù hợp lưu/gửi nhanh.'}
  };
  if(kmState.format==='m4a')return {ultra:{title:'Tốt nhất',note:'256 kbps'},high:{title:'Cao',note:'192 kbps'},medium:{title:'Trung bình',note:'128 kbps'},low:{title:'Nhẹ',note:'96 kbps'}};
  if(kmState.format==='opus')return {ultra:{title:'Tốt nhất',note:'192 kbps'},high:{title:'Cao',note:'160 kbps'},medium:{title:'Trung bình',note:'128 kbps'},low:{title:'Nhẹ',note:'96 kbps'}};
  if(kmState.format==='flac'||kmState.format==='wav')return {ultra:{title:'Theo nguồn',note:'không tăng giả'},lossless:true};
  return {ultra:{title:'Tốt nhất',note:''},high:{title:'Cao',note:''},medium:{title:'Trung bình',note:''},low:{title:'Nhẹ',note:''}};
}
function syncQualityUi(h){
  const buttons=[...h.querySelectorAll('[data-quality]')];
  if(kmState.kind==='video'){
    const labels={
      ultra:{title:'Tốt nhất',note:'1440p+'},
      high:{title:'Cao',note:'1080p'},
      medium:{title:'Trung bình',note:'720p'},
      low:{title:'Nhẹ',note:'480p'}
    };
    buttons.forEach(function(b){b.hidden=false;b.disabled=false;const x=labels[b.dataset.quality];setQualityButton(b,x.title,x.note);});
    const max=Number(kmState.probe&&kmState.probe.maxHeight)||0;
    const ultra=h.querySelector('[data-quality="ultra"]');if(ultra)ultra.disabled=max>0&&max<1440;
    return;
  }
  const spec=audioQualityLabels();
  if(spec.lossless)kmState.quality='ultra';
  buttons.forEach(function(b){
    const key=b.dataset.quality;const x=spec[key]||{title:key,note:''};
    b.hidden=!!spec.lossless&&key!=='ultra';
    b.disabled=!!spec.lossless&&key!=='ultra';
    setQualityButton(b,x.title,x.note);
    if(spec.tips&&spec.tips[key]){b.dataset.tooltip=spec.tips[key];b.title=spec.tips[key];}
  });
}
function formatMenu(kind){
  if(kind==='audio')return '<div class="km-format-menu"><button data-format="mp3">MP3 <small>mặc định</small></button><button data-format="m4a">M4A</button><button data-format="opus">OPUS</button><button data-format="flac">FLAC</button><button data-format="wav">WAV</button></div>';
  return '<div class="km-format-menu"><button data-format="mp4">MP4 <small>mặc định</small></button><button data-format="mkv">MKV</button><button data-format="webm">WebM</button></div>';
}
function renderDownload(h){
  h.innerHTML=[
    '<div class="km-grid-main"><div class="km-card"><label class="km-label">Dán link video / nhạc</label>',
    '<textarea id="kmUrls" class="km-urlbox" rows="6" placeholder="Dán một hoặc nhiều link. Không cần xuống dòng đúng, KanMedia sẽ tự tách link." data-tooltip="Bạn có thể dán nhiều link trên cùng một dòng; KanMedia tự tách và bỏ link trùng."></textarea>',
    '<div class="km-row km-url-status"><span id="kmUrlCount">Chưa có link</span><button class="km-link-btn" id="kmClearUrls" type="button">Xóa</button></div>',
    '<label class="km-playlist-option" data-tooltip="Mặc định tắt: link có video + playlist chỉ tải đúng video đang mở. Bật tùy chọn này nếu bạn muốn tải toàn bộ playlist."><input id="kmAllPlaylist" type="checkbox"> <span>Tải toàn bộ playlist nếu link có playlist</span></label>',
    '<div class="km-kind-row"><div class="km-format-wrap"><button class="km-kind" data-kind="audio" type="button">♪ Audio</button>'+formatMenu('audio')+'</div>',
    '<div class="km-format-wrap"><button class="km-kind" data-kind="video" type="button">▶ Video</button>'+formatMenu('video')+'</div></div>',
    '<div class="km-section-title">Chất lượng</div>',qualityButtons(),
    '<div class="km-hint" id="kmProbeHint">MP3 và MP4 được ưu tiên mặc định. KanMedia tự chọn chất lượng gần nhất phù hợp cho từng link.</div>',
    '<div class="km-download-folder"><span class="km-folder-label">Thư mục lưu</span><div class="km-folder-box"><span id="kmDownloadPath">'+esc(kmState.downloadDir||'Desktop\\KanDownload')+'</span><button class="office-btn" id="kmChooseFolder" type="button">Đổi thư mục</button></div></div>',
    '<div class="km-row km-actions"><button class="office-btn" id="kmOpenFolder" type="button">Mở thư mục</button><button class="office-btn primary km-run" id="kmDownload" type="button">Tải xuống</button></div></div>',
    progressCard(),'</div>'
  ].join('');
  const ta=h.querySelector('#kmUrls');ta.value=kmState.urlText||'';
  let timer=null;
  function sync(){kmState.urlText=ta.value;kmState.urls=parseUrls(ta.value);h.querySelector('#kmUrlCount').textContent=kmState.urls.length?kmState.urls.length+' link hợp lệ':'Chưa có link';clearTimeout(timer);if(kmState.urls.length)timer=setTimeout(probeDownload,700);}
  ta.addEventListener('input',sync);sync();
  const playlistBox=h.querySelector('#kmAllPlaylist');playlistBox.checked=!!kmState.allPlaylist;playlistBox.addEventListener('change',function(){kmState.allPlaylist=playlistBox.checked;kmState.probe=null;if(kmState.urls.length)probeDownload();});
  h.querySelector('#kmClearUrls').addEventListener('click',function(){ta.value='';kmState.probe=null;sync();});
  h.querySelectorAll('[data-kind]').forEach(function(b){b.addEventListener('click',function(){kmState.kind=b.dataset.kind;kmState.format=kmState.kind==='audio'?'mp3':'mp4';refreshDownloadSelection(h);});});
  h.querySelectorAll('[data-format]').forEach(function(b){b.addEventListener('click',function(e){e.stopPropagation();kmState.format=b.dataset.format;kmState.kind=b.closest('.km-format-wrap').querySelector('[data-kind]').dataset.kind;refreshDownloadSelection(h);});});
  h.querySelectorAll('[data-quality]').forEach(function(b){b.addEventListener('click',function(){if(b.disabled)return;kmState.quality=b.dataset.quality;refreshDownloadSelection(h);});});
  h.querySelector('#kmOpenFolder').addEventListener('click',function(){kmApi('/system/open-folder',{method:'POST',json:{}}).catch(function(){notice('Chưa mở được thư mục.','warn');});});
  h.querySelector('#kmChooseFolder').addEventListener('click',async function(){
    try{
      const r=await kmApi('/system/select-folder',{method:'POST',json:{},timeout:300000});
      if(!r.cancelled&&r.path){kmState.downloadDir=r.path;const el=h.querySelector('#kmDownloadPath');if(el)el.textContent=r.path;notice('Đã đổi thư mục lưu.','ok');}
    }catch(e){notice(e.message||'Chưa đổi được thư mục.','warn');}
  });
  h.querySelector('#kmDownload').addEventListener('click',startDownload);
  bindCancel();refreshDownloadSelection(h);
}
function refreshDownloadSelection(h){
  h.querySelectorAll('[data-kind]').forEach(function(b){
    b.classList.toggle('active',b.dataset.kind===kmState.kind);
    if(b.dataset.kind==='audio')b.textContent='♪ Audio · '+(kmState.kind==='audio'?kmState.format.toUpperCase():'MP3');
    if(b.dataset.kind==='video')b.textContent='▶ Video · '+(kmState.kind==='video'?kmState.format.toUpperCase():'MP4');
  });
  h.querySelectorAll('[data-format]').forEach(function(b){b.classList.toggle('active',b.dataset.format===kmState.format);});
  syncQualityUi(h);
  h.querySelectorAll('[data-quality]').forEach(function(b){b.classList.toggle('active',b.dataset.quality===kmState.quality);});
}
async function probeDownload(){
  if(kmState.tab!=='download'||!kmState.urls.length)return;
  const hint=kmHost&&kmHost.querySelector('#kmProbeHint');if(hint)hint.textContent='Đang đọc chất lượng khả dụng…';
  try{
    kmState.probe=await kmApi('/media/probe',{method:'POST',json:{urls:kmState.urls.slice(0,20),allPlaylist:!!kmState.allPlaylist},timeout:90000});
    const max=Number(kmState.probe.maxHeight)||0;
    const current=kmHost&&kmHost.querySelector('#kmTabHost');if(current)syncQualityUi(current);
    if(kmState.allPlaylist&&kmState.probe.playlistCount){
      const names=(kmState.probe.playlistTitles||[]).filter(Boolean).slice(0,2).join(' · ');
      if(hint)hint.textContent='Đã nhận playlist'+(names?' “'+names+'”':'')+': '+kmState.probe.playlistCount+' bài. Bài đã tải trước đó sẽ tự được bỏ qua.';
    }else if(hint)hint.textContent=max?'Nguồn video cao nhất: '+max+'p':'Đã đọc xong thông tin nguồn.';
  }catch(e){kmState.probe=null;if(hint)hint.textContent='Chưa đọc được trước chất lượng. Bạn vẫn có thể tải; KanMedia sẽ tự chọn khi bắt đầu.';}
}
async function startDownload(){
  if(!kmState.urls.length)return notice('Bạn hãy dán ít nhất một link hợp lệ.','warn');
  if(!kmState.allPlaylist&&kmState.urls.some(isPurePlaylistUrl))return notice('Link playlist thuần không có bài cụ thể. Hãy tick “Tải toàn bộ playlist” hoặc dán link của một bài trong playlist.','warn');
  const pc=Number(kmState.probe&&kmState.probe.playlistCount)||0;
  if(kmState.allPlaylist&&pc>=200&&!window.confirm('Playlist có '+pc+' bài. Bạn có muốn tải toàn bộ không?'))return;
  setProgress(1,'Đang chuẩn bị…','');setBusy(true);
  try{
    const r=await kmApi('/media/download',{method:'POST',json:{urls:kmState.urls,kind:kmState.kind,format:kmState.format,quality:kmState.quality,allPlaylist:!!kmState.allPlaylist},timeout:5000});
    startPolling(r.jobId);
  }catch(e){setBusy(false);setProgress(0,'KanMedia chưa kết nối.','');notice(e.message,'warn');}
}
function renderConvert(h){
  h.innerHTML=[
    '<div class="km-grid-main"><div class="km-card"><div class="km-drop" id="kmConvertDrop"><strong>Kéo audio/video vào đây</strong><br><span>hoặc bấm để chọn nhiều file</span><input id="kmConvertInput" type="file" accept="audio/*,video/*" multiple hidden></div>',
    '<div class="km-file-list" id="kmConvertFiles"></div><div class="km-section-title">Chuyển thành</div>',
    '<div class="km-choice" id="kmConvertFormat"><button data-out="mp4">MP4</button><button data-out="mkv">MKV</button><button data-out="webm">WebM</button><button data-out="mp3">MP3</button><button data-out="m4a">M4A</button><button data-out="wav">WAV</button><button data-out="flac">FLAC</button><button data-out="ogg">OGG</button></div>',
    '<div class="km-section-title">Chất lượng</div><div class="km-choice km-convert-quality" id="kmConvertQuality"><button data-cq="high"></button><button data-cq="medium"></button><button data-cq="light"></button></div>',
    '<div class="km-hint" id="kmConvertHint">Nếu định dạng tương thích, KanMedia tự chuyển nhanh mà không giảm chất lượng. Nếu cần, hệ thống mới mã hóa lại.</div>',
    '<div class="km-download-folder"><span class="km-folder-label">Thư mục lưu</span><div class="km-folder-box"><span id="kmConvertPath">'+esc(kmState.downloadDir||'Desktop\\KanDownload')+'</span><button class="office-btn" id="kmConvertChooseFolder" type="button">Đổi thư mục</button></div></div>',
    '<div class="km-row km-actions"><button class="office-btn" id="kmConvertOpenFolder" type="button">Mở thư mục</button><button class="office-btn primary km-run" id="kmConvertRun" type="button">Chuyển đổi</button></div></div>',progressCard(),'</div>'
  ].join('');
  kmState.convertFormat=kmState.convertFormat||'mp4';kmState.convertQuality=kmState.convertQuality||'medium';
  const inp=h.querySelector('#kmConvertInput'),drop=h.querySelector('#kmConvertDrop');
  function add(fs){kmState.files=Array.from(fs||[]).filter(function(f){return /^(audio|video)\//.test(f.type)||/\.(mp3|m4a|wav|flac|ogg|opus|mp4|mkv|mov|avi|webm)$/i.test(f.name);});renderConvertFiles(h);}
  inp.addEventListener('change',function(){add(inp.files);});drop.addEventListener('click',function(){inp.click();});drop.addEventListener('dragover',function(e){e.preventDefault();drop.classList.add('dragover');});drop.addEventListener('dragleave',function(){drop.classList.remove('dragover');});drop.addEventListener('drop',function(e){e.preventDefault();drop.classList.remove('dragover');add(e.dataTransfer.files);});
  h.querySelectorAll('[data-out]').forEach(function(b){b.addEventListener('click',function(){kmState.convertFormat=b.dataset.out;refreshConvert(h);});});
  h.querySelectorAll('[data-cq]').forEach(function(b){b.addEventListener('click',function(){if(b.disabled)return;kmState.convertQuality=b.dataset.cq;refreshConvert(h);});});
  h.querySelector('#kmConvertOpenFolder').addEventListener('click',function(){kmApi('/system/open-folder',{method:'POST',json:{}}).catch(function(){notice('Chưa mở được thư mục.','warn');});});
  h.querySelector('#kmConvertChooseFolder').addEventListener('click',async function(){
    try{
      const r=await kmApi('/system/select-folder',{method:'POST',json:{},timeout:300000});
      if(!r.cancelled&&r.path){
        kmState.downloadDir=r.path;
        const el=h.querySelector('#kmConvertPath');if(el)el.textContent=r.path;
        notice('Đã đổi thư mục lưu.','ok');
      }
    }catch(e){notice(e.message||'Chưa đổi được thư mục.','warn');}
  });
  h.querySelector('#kmConvertRun').addEventListener('click',startConvert);renderConvertFiles(h);refreshConvert(h);bindCancel();
}
function renderConvertFiles(h){
  const list=h.querySelector('#kmConvertFiles');if(!list)return;
  list.innerHTML=kmState.files.length?kmState.files.map(function(f){return '<div class="km-file"><span>'+esc(f.name)+'</span><b>'+bytes(f.size)+'</b></div>';}).join(''):'<div class="km-hint">Chưa chọn file.</div>';
}
function convertQualitySpec(fmt){
  if(fmt==='m4a')return {high:['Cao','256 kbps'],medium:['Trung bình','192 kbps'],light:['Nhẹ','128 kbps']};
  if(fmt==='mp3')return {high:['Cao','~245k VBR'],medium:['Trung bình','~175k VBR'],light:['Nhẹ','~115k VBR']};
  if(fmt==='ogg')return {high:['Cao','q7'],medium:['Trung bình','q5'],light:['Nhẹ','q3']};
  if(fmt==='wav'||fmt==='flac')return {lossless:true,high:['Theo nguồn','không giảm thêm']};
  return {high:['Cao','CRF 18'],medium:['Trung bình','CRF 23'],light:['Nhẹ','CRF 29']};
}
function refreshConvert(h){
  h.querySelectorAll('[data-out]').forEach(function(b){b.classList.toggle('active',b.dataset.out===kmState.convertFormat);});
  const spec=convertQualitySpec(kmState.convertFormat);
  if(spec.lossless)kmState.convertQuality='high';
  h.querySelectorAll('[data-cq]').forEach(function(b){
    const key=b.dataset.cq;const x=spec[key]||[key,''];
    b.hidden=!!spec.lossless&&key!=='high';
    b.disabled=!!spec.lossless&&key!=='high';
    setQualityButton(b,x[0],x[1]);
    b.classList.toggle('active',key===kmState.convertQuality);
  });
  const hint=h.querySelector('#kmConvertHint');
  if(hint){
    if(spec.lossless)hint.textContent='FLAC/WAV giữ chất lượng theo nguồn; tăng thông số không thể tạo thêm chi tiết âm thanh.';
    else if(['mp4','mkv','webm'].includes(kmState.convertFormat))hint.textContent='Số CRF chỉ để tham chiếu khi cần mã hóa lại: số càng thấp thì hình càng nét và file thường lớn hơn.';
    else hint.textContent='Bitrate bên dưới là mức tham chiếu đầu ra; chất lượng thực tế vẫn phụ thuộc file nguồn.';
  }
}
async function uploadFile(file){
  return kmApi('/media/upload',{method:'POST',body:file,headers:{'Content-Type':'application/octet-stream','X-KanBan-File-Name':encodeURIComponent(file.name),'X-KanBan-File-Type':file.type||''},timeout:Math.max(60000,Math.min(900000,file.size/10000))});
}
async function startConvert(){
  if(!kmState.files.length)return notice('Bạn hãy chọn ít nhất một file media.','warn');
  setBusy(true);setProgress(2,'Đang nhận file…','');
  try{
    const ids=[];for(let i=0;i<kmState.files.length;i++){const f=kmState.files[i];setProgress(Math.max(2,Math.round(i/kmState.files.length*15)),'Đang nhận “'+f.name+'”…',(i+1)+'/'+kmState.files.length);const u=await uploadFile(f);ids.push(u.uploadId);}
    const r=await kmApi('/media/convert',{method:'POST',json:{uploadIds:ids,format:kmState.convertFormat,quality:kmState.convertQuality,keepOriginal:true},timeout:5000});startPolling(r.jobId);
  }catch(e){setBusy(false);notice(e.message,'warn');}
}
function renderEdit(h){
  h.innerHTML=[
    '<div class="km-grid-main"><div class="km-card"><div class="km-drop" id="kmEditDrop"><strong>Kéo một file audio/video vào đây</strong><br><span>hoặc bấm để chọn file</span><input id="kmEditInput" type="file" accept="audio/*,video/*" hidden></div>',
    '<div id="kmEditWork"></div></div>',progressCard(),'</div>'
  ].join('');
  const inp=h.querySelector('#kmEditInput'),drop=h.querySelector('#kmEditDrop');
  function setFile(f){if(!f)return;kmState.editFile=f;if(kmState.editUrl)URL.revokeObjectURL(kmState.editUrl);kmState.editUrl=URL.createObjectURL(f);renderEditWork(h.querySelector('#kmEditWork'));}
  inp.addEventListener('change',function(){setFile(inp.files[0]);});drop.addEventListener('click',function(){inp.click();});drop.addEventListener('dragover',function(e){e.preventDefault();drop.classList.add('dragover');});drop.addEventListener('dragleave',function(){drop.classList.remove('dragover');});drop.addEventListener('drop',function(e){e.preventDefault();drop.classList.remove('dragover');setFile(Array.from(e.dataTransfer.files).find(function(f){return /^(audio|video)\//.test(f.type);}));});
  if(kmState.editFile)renderEditWork(h.querySelector('#kmEditWork'));bindCancel();
}
async function drawKmWaveform(file,canvas,media){
  if(!file||!canvas||file.size>80*1024*1024)return;
  try{
    const AC=window.AudioContext||window.webkitAudioContext;if(!AC)return;
    const ctx=new AC();const buf=await ctx.decodeAudioData(await file.arrayBuffer());const data=buf.getChannelData(0);
    const dpr=Math.max(1,Math.min(2,window.devicePixelRatio||1));const rect=canvas.getBoundingClientRect();const width=Math.max(320,Math.floor(rect.width||700)),height=90;
    canvas.width=width*dpr;canvas.height=height*dpr;const g=canvas.getContext('2d');g.scale(dpr,dpr);g.clearRect(0,0,width,height);
    const style=getComputedStyle(canvas);g.strokeStyle=style.color||'#4b8d70';g.lineWidth=1;const buckets=Math.min(width,900),step=Math.max(1,Math.floor(data.length/buckets));g.beginPath();
    for(let x=0;x<buckets;x++){let peak=0;const from=x*step,to=Math.min(data.length,from+step);for(let i=from;i<to;i++){const v=Math.abs(data[i]);if(v>peak)peak=v;}const px=x/buckets*width,amp=peak*(height*.46);g.moveTo(px,height/2-amp);g.lineTo(px,height/2+amp);}g.stroke();
    canvas.onclick=function(e){if(!media||!Number.isFinite(media.duration))return;const r=canvas.getBoundingClientRect();const ratio=Math.max(0,Math.min(1,(e.clientX-r.left)/r.width));media.currentTime=ratio*media.duration;};
    await ctx.close();
  }catch(e){}
}
function renderEditWork(w){
  const f=kmState.editFile;if(!f){w.innerHTML='';return;}
  const isVideo=f.type.indexOf('video/')===0||/\.(mp4|mkv|mov|avi|webm)$/i.test(f.name);
  const media=isVideo?'<video id="kmPreview" src="'+kmState.editUrl+'" controls preload="metadata"></video>':'<audio id="kmPreview" src="'+kmState.editUrl+'" controls preload="metadata"></audio><canvas id="kmWaveform" class="km-waveform" data-tooltip="Waveform giúp bạn nhìn nhanh vùng có tiếng và bấm để nhảy tới vị trí cần cắt."></canvas>';
  w.innerHTML=[
    '<div class="km-edit-file"><strong>'+esc(f.name)+'</strong><span>'+bytes(f.size)+'</span></div><div class="km-preview">'+media+'</div>',
    '<div class="km-time-box"><div class="km-row"><button class="office-btn" id="kmSetStart" type="button">Đặt điểm đầu</button><label>Bắt đầu <input id="kmStart" type="number" min="0" step="0.01" value="0"></label><button class="office-btn" id="kmSetEnd" type="button">Đặt điểm cuối</button><label>Kết thúc <input id="kmEnd" type="number" min="0" step="0.01" value="0"></label></div>',
    '<div class="km-choice"><button data-cut="keep" class="active">Giữ đoạn này</button><button data-cut="remove">Xóa đoạn này</button></div></div>',
    '<div class="km-edit-grid"><label><span>Âm lượng <b id="kmVolLabel">100%</b></span><input id="kmVolume" type="range" min="0" max="200" step="5" value="100"></label>',
    '<label><span>Tốc độ</span><div class="km-choice km-speed"><button data-speed="0.5">0.5×</button><button data-speed="0.75">0.75×</button><button data-speed="1" class="active">1×</button><button data-speed="1.25">1.25×</button><button data-speed="1.5">1.5×</button><button data-speed="2">2×</button></div></label>',
    '<label><span>Mờ âm đầu (giây)</span><input id="kmFadeIn" type="number" min="0" max="30" step="0.5" value="0"></label><label><span>Mờ âm cuối (giây)</span><input id="kmFadeOut" type="number" min="0" max="30" step="0.5" value="0"></label></div>',
    '<div class="km-row"><label class="km-check"><input id="kmNormalize" type="checkbox"> Tự cân bằng âm lượng</label>',
    isVideo?'<label class="km-check"><input id="kmMute" type="checkbox"> Xóa tiếng video</label><label class="km-check"><input id="kmExtract" type="checkbox"> Lấy âm thanh thành MP3</label>':'',
    '</div><div class="km-row km-actions"><button class="office-btn" id="kmPreviewStart" type="button">Phát từ điểm đầu</button><button class="office-btn primary km-run" id="kmEditRun" type="button">Xuất file</button></div>'
  ].join('');
  const p=w.querySelector('#kmPreview');kmState.edit={cut:'keep',speed:1};if(!isVideo)queueMicrotask(function(){drawKmWaveform(f,w.querySelector('#kmWaveform'),p);});
  p.addEventListener('loadedmetadata',function(){w.querySelector('#kmEnd').value=Number.isFinite(p.duration)?p.duration.toFixed(2):0;});
  w.querySelector('#kmSetStart').addEventListener('click',function(){w.querySelector('#kmStart').value=(p.currentTime||0).toFixed(2);});
  w.querySelector('#kmSetEnd').addEventListener('click',function(){w.querySelector('#kmEnd').value=(p.currentTime||0).toFixed(2);});
  w.querySelector('#kmPreviewStart').addEventListener('click',function(){p.currentTime=Math.max(0,Number(w.querySelector('#kmStart').value)||0);p.play().catch(function(){});});
  w.querySelectorAll('[data-cut]').forEach(function(b){b.addEventListener('click',function(){kmState.edit.cut=b.dataset.cut;w.querySelectorAll('[data-cut]').forEach(function(x){x.classList.toggle('active',x===b);});});});
  w.querySelectorAll('[data-speed]').forEach(function(b){b.addEventListener('click',function(){kmState.edit.speed=Number(b.dataset.speed);p.playbackRate=kmState.edit.speed;w.querySelectorAll('[data-speed]').forEach(function(x){x.classList.toggle('active',x===b);});});});
  w.querySelector('#kmVolume').addEventListener('input',function(e){w.querySelector('#kmVolLabel').textContent=e.target.value+'%';p.volume=Math.min(1,Number(e.target.value)/100);});
  w.querySelector('#kmEditRun').addEventListener('click',startEdit);applyKmTooltips();
}
async function startEdit(){
  const w=kmHost.querySelector('#kmEditWork');if(!kmState.editFile||!w)return notice('Bạn hãy chọn file trước.','warn');
  setBusy(true);setProgress(3,'Đang nhận file…','');
  try{
    const u=await uploadFile(kmState.editFile);
    const payload={uploadId:u.uploadId,start:Number(w.querySelector('#kmStart').value)||0,end:Number(w.querySelector('#kmEnd').value)||0,cut:kmState.edit&&kmState.edit.cut||'keep',volume:(Number(w.querySelector('#kmVolume').value)||100)/100,normalize:w.querySelector('#kmNormalize').checked,speed:kmState.edit&&kmState.edit.speed||1,fadeIn:Number(w.querySelector('#kmFadeIn').value)||0,fadeOut:Number(w.querySelector('#kmFadeOut').value)||0,mute:!!(w.querySelector('#kmMute')&&w.querySelector('#kmMute').checked),extractMp3:!!(w.querySelector('#kmExtract')&&w.querySelector('#kmExtract').checked)};
    const r=await kmApi('/media/edit',{method:'POST',json:payload,timeout:5000});startPolling(r.jobId);
  }catch(e){setBusy(false);notice(e.message,'warn');}
}
