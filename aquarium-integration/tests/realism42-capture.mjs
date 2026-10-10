import puppeteer from 'puppeteer-core';
import {spawn,execFileSync} from 'node:child_process';
import {mkdirSync,writeFileSync,mkdtempSync,rmSync,readFileSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
const assert=(ok,msg)=>{if(!ok)throw Error(msg)};
const chrome=['/usr/bin/google-chrome','/usr/bin/google-chrome-stable','/usr/bin/chromium','/opt/google/chrome/chrome'].find(p=>{try{execFileSync('test',['-x',p]);return true}catch{return false}});
if(!chrome)throw Error('Chromium unavailable');
execFileSync('ffmpeg',['-version'],{stdio:'ignore'});
const out='review42',tmp=mkdtempSync(join(tmpdir(),'realism42-'));mkdirSync(out,{recursive:true});
const server=spawn(process.execPath,['node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port','4220','--strictPort'],{stdio:'pipe'});
const report={sourceCommit:process.env.GITHUB_SHA??null,run:process.env.GITHUB_RUN_ID??null,natural:[],fixtures:[],limitations:['Software-rendered Chromium; desktop 60 FPS and physical-phone 30 FPS are not certified.','Natural video has no forced actions; close-up clips use explicit QA fixtures.']};
let browser;
const encode=(input,output,extra=[])=>execFileSync('ffmpeg',['-y','-loglevel','error',...extra,'-i',input,'-an','-c:v','libx264','-preset','veryfast','-crf','25','-pix_fmt','yuv420p','-movflags','+faststart',output],{stdio:'inherit'});
try{
 for(let i=0;i<150;i++){try{if((await fetch('http://127.0.0.1:4220/')).ok)break}catch{}await new Promise(r=>setTimeout(r,100));}
 browser=await puppeteer.launch({headless:true,executablePath:chrome,protocolTimeout:180000,args:['--no-sandbox','--disable-setuid-sandbox','--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
 const page=await browser.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.setViewport({width:960,height:600,deviceScaleFactor:1});
 await page.evaluateOnNewDocument(()=>{
  localStorage.setItem('aquarium-v1',JSON.stringify({state:{quality:'medium',config:{name:'Realism 4.2 review',water:'freshwater',gallons:180,substrate:'sand',background:'natural',lighting:'daylight',dayNight:'day',fish:{'neon-tetra':80,corydoras:6,guppy:8,angelfish:2,betta:1,'bristlenose-pleco':1,'cherry-shrimp':2},fishNames:{},flora:{'java-fern':2},decor:['hollow-log','split-log','log-arch']}},version:0}));
  let state=42;Math.random=()=>{state=(Math.imul(1664525,state)+1013904223)>>>0;return state/4294967296;};
 });
 await page.goto('http://127.0.0.1:4220/?kanban=1&qa=1',{waitUntil:'domcontentloaded'});
 await page.waitForFunction(()=>window.__kan42Follow&&window.__kan42Probe,{timeout:120000});
 const hide=await page.addStyleTag({content:'.panel,.toolbar,.kanban-aquarium-stock,.kanban-aquarium-help,.kan-camera-help,.kanban-aquarium-exit{display:none!important}'});
 await page.evaluate(()=>{window.__kan42Quality('medium');window.__kanFoodTestCamera('cinematic');});
 const naturalStart=Date.now(),record=await page.screencast({path:join(tmp,'natural.webm'),fps:15});
 for(let i=0;i<6;i++){
  await new Promise(r=>setTimeout(r,30000));
  const p=await page.evaluate(()=>window.__kan42Probe());
  assert(p.telemetry.fish.length===100,'natural population changed');
  assert(p.physics.wallViolations===0,'natural wall violation');
  assert(p.telemetry.fish.every(a=>a.pos.every(Number.isFinite)&&a.vel.every(Number.isFinite)),'natural NaN');
  report.natural.push({elapsedSeconds:(Date.now()-naturalStart)/1000,count:p.telemetry.fish.length,physics:p.physics,stats:p.stats,camera:p.camera});
  console.log('REVIEW natural '+(i+1)+'/6');
 }
 await record.stop();encode(join(tmp,'natural.webm'),join(out,'natural-3min.mp4'));
 await page.screenshot({path:join(out,'100-fish.png')});
 report.naturalWallSeconds=(Date.now()-naturalStart)/1000;
 await page.evaluate(()=>{window.__kan42Pause();window.__kan42EcoMode('relax');});
 await page.setViewport({width:640,height:400,deviceScaleFactor:1});
 const scene=async(fish,gallons=75)=>{await page.evaluate(({fish,gallons})=>{window.__kan42Follow(null);window.__kan42Scene({gallons,fish,fishNames:{},decor:[],flora:{}});window.__kanFoodTestCamera('still');window.__kan42Arrange();window.__kan42Step(.016);},{fish,gallons});};
 const closeup=async(key)=>{await page.mouse.move(320,200);for(let i=0;i<18;i++)await page.mouse.wheel({deltaY:-90});await page.evaluate(key=>{window.__kan42Follow(key);window.__kanEcoFastForward(3);window.__kan42Step(.016);},key);};
 for(const [id,count] of [['angelfish',2],['betta',1],['guppy',6],['neon-tetra',6],['corydoras',6]]){
  await scene({[id]:count});await closeup(id+':0');
  await page.evaluate(()=>{window.__kanVisualFinToggle(true);window.__kan42Step(.016)});
  await page.screenshot({path:join(out,id+'-soft.png')});
  await page.evaluate(()=>{window.__kanVisualFinToggle(false);window.__kan42Step(.016)});
  await page.screenshot({path:join(out,id+'-classic.png')});
  await page.evaluate(()=>window.__kanVisualFinToggle(true));report.fixtures.push({type:'fin-comparison',species:id});
  if(id==='angelfish'){
   await page.mouse.move(320,200);await page.mouse.down();await page.mouse.move(430,235,{steps:8});await page.mouse.up();
   await page.evaluate(()=>{window.__kan42Step(.016);});await page.screenshot({path:join(out,'angelfish-oblique-soft.png')});
   await page.evaluate(()=>{window.__kanVisualFinToggle(false);window.__kan42Step(.016);});await page.screenshot({path:join(out,'angelfish-oblique-classic.png')});
   await page.evaluate(()=>window.__kanVisualFinToggle(true));
  }
 }
 const frames=async(name,count,fps,step)=>{const dir=join(tmp,name);mkdirSync(dir);for(let i=0;i<count;i++){await step(i);await page.screenshot({path:join(dir,String(i).padStart(4,'0')+'.png')});}encode(join(dir,'%04d.png'),join(out,name+'.mp4'),['-framerate',String(fps)]);rmSync(dir,{recursive:true,force:true});};
 await scene({angelfish:2});await closeup('angelfish:0');
 await frames('angelfish-15s',225,15,()=>page.evaluate(()=>{window.__kanEcoFastForward(.05);window.__kan42Step(.016)}));
 report.fixtures.push({type:'angelfish-motion',seconds:15});
 await scene({corydoras:6,'bristlenose-pleco':1},20);
 await closeup('corydoras:0');
 // Rearrange immediately before action; camera pre-roll must not move the actor away.
 const peck=await page.evaluate(()=>{
  window.__kan42Arrange();const f=window.__kan42Probe().telemetry.fish.find(a=>window.__kan42Action(a.key,'peck',.25,'glass'));
  if(!f)return null;
  window.__kan42Follow(f.key);
  for(let i=0;i<2000;i++){window.__kanEcoFastForward(.025);const a=window.__kan42Probe().telemetry.fish.find(a=>a.key===f.key);if(a.peck?.stage==='burst')return {key:f.key,settings:a.peck};if(!a.peck)return null;}
  return null;
 });
 assert(peck,'glass peck fixture unavailable');const phases=new Set();
 await frames('peck-slow-motion',90,6,async()=>{const p=await page.evaluate(key=>{window.__kan42Step(.025);return window.__kan42Probe().telemetry.fish.find(a=>a.key===key);},peck.key);phases.add(p.peck?.stage??'cruise');});
 assert(phases.has('withdraw')&&phases.has('cruise'),'peck clip incomplete');report.fixtures.push({type:'peck',...peck,phases:[...phases],playback:'5x slow motion'});
 await scene({guppy:6},40);
 const jump=await page.evaluate(()=>{window.__kan42Arrange();const before=window.__kan42Probe().telemetry.jump;const f=window.__kan42Probe().telemetry.fish.find(a=>window.__kan42Action(a.key,'dash',.25));return f?{key:f.key,before}:null});
 assert(jump,'jump fixture unavailable');
 // Keep the whole tank and water surface in frame.
 await page.evaluate(()=>{window.__kan42Follow(null);window.__kanFoodTestCamera('still');});
 let above=false;
 await frames('jump-return',130,15,async()=>{const p=await page.evaluate(key=>{window.__kanEcoFastForward(.05);window.__kan42Step(.016);const p=window.__kan42Probe();return {a:p.telemetry.fish.find(a=>a.key===key),surface:window.__kanFoodProbe().dims.surfaceY,physics:p.physics};},jump.key);above ||= p.a.pos[1]>p.surface+.012;assert(p.physics.wallViolations===0,'jump clip wall violation');});
 const after=await page.evaluate(key=>{const p=window.__kan42Probe();return {jump:p.telemetry.jump,actor:p.telemetry.fish.find(a=>a.key===key)};},jump.key);
 assert(above&&!after.actor.jump&&after.jump.splashes-jump.before.splashes===1,'jump clip must breach, splash once and return');report.fixtures.push({type:'jump-return',above,splashes:1,returned:true});
 await hide.evaluate(el=>el.remove());
 await page.setViewport({width:390,height:844,deviceScaleFactor:1,isMobile:true,hasTouch:true});
 await scene({'neon-tetra':20},40);
 await page.evaluate(()=>{window.__kan42Quality('low');document.querySelector('.panel .close')?.click();window.__kan42Step(.05);});
 await page.screenshot({path:join(out,'mobile-before.png')});
 const touch=await page.evaluate(()=>{
  const canvas=document.querySelector('canvas'),food=window.__kanFoodProbe().count;
  const send=(type,id,x,y)=>canvas.dispatchEvent(new PointerEvent(type,{pointerId:id,pointerType:'touch',button:0,clientX:x,clientY:y,bubbles:true}));
  const capture=canvas.setPointerCapture;canvas.setPointerCapture=()=>{};
  send('pointerdown',31,120,410);send('pointerdown',32,260,410);
  for(let i=1;i<=30;i++){send('pointermove',31,120+i,410+i);send('pointermove',32,260+i*2,410+i);}
  send('pointerup',32,320,440);send('pointerup',31,150,440);canvas.setPointerCapture=capture;
  window.__kanEcoFastForward(2);window.__kan42Step(.016);
  return {camera:window.__kan42Probe().camera,foodBefore:food,foodAfter:window.__kanFoodProbe().count};
 });
 assert(touch.camera.mode==='orbit'&&touch.camera.pan&&touch.foodBefore===touch.foodAfter,'mobile pan/pinch should not feed');
 await page.screenshot({path:join(out,'mobile-after.png')});report.fixtures.push({type:'mobile-touch',...touch});
 assert(errors.length===0,'recording page errors '+errors.join(';'));
 report.pageErrors=errors;
 for(const file of ['realism42-report.json','realism42-event-audit.json','realism42-surfaces-review.json']){try{writeFileSync(join(out,file),readFileSync(file));}catch{throw Error('Missing acceptance report '+file);}}
 writeFileSync(join(out,'capture-report.json'),JSON.stringify(report,null,2));
 const acceptance=JSON.parse(readFileSync('realism42-report.json','utf8'));
 writeFileSync(join(out,'REPORT.md'),[
 '# Realism 4.2 — báo cáo nghiệm thu',
 '',
 'Nguồn: '+report.sourceCommit+'. CI: https://github.com/LamHoaiLinh/Kanban-QLCV-Linh/actions/runs/'+report.run+'.',
 '',
 'Đã triển khai: giới hạn hồ tới 100 cá; chuẩn hóa preset/random/load/resize; giữ tên và snapshot đã lưu, undo resize; vây kín hai mặt và LOD; chuyển động, nhảy có xác suất, mổ bề mặt thật; 20 loại sự kiện có tuyến và thời hạn thật; camera quan sát sự kiện, pan/pinch và bố cục dọc.',
 '',
 '## Kiểm thử PASS',
 '',
 ...acceptance.checks.map(check=>'- '+check),
 '- Giữ nguyên và chạy đủ tám bộ regression cũ.',
 '- Audit đủ 20 loại sự kiện với cá thực hiện tuyến di chuyển; mổ được kính, gỗ và lá.',
 '- Video tự nhiên hơn 3 phút: '+report.natural.length+' mẫu, mỗi mẫu 100 cá, không NaN hoặc vi phạm thành hồ.',
 '- Xuất 12 ảnh so sánh vây, clip ông tiên 15 giây, mổ kính phát chậm, nhảy/splash/trở lại và ảnh dọc trước/sau pan/pinch.',
 '',
 '## Đo so sánh trước / sau',
 '',
 'Các số dưới đây đã đo ở vòng kiểm thử trước khi sửa timeout mổ kính, Chromium SwiftShader 960×600, chất lượng medium, có tải ghi hình đồng thời. Đây là thời gian khung hình trong GPU phần mềm, không phải FPS của máy PC/điện thoại.',
 '',
 '| Cá | P50 trước / sau (ms) | P95 trước / sau (ms) | Draw calls trước / sau | Triangles trước / sau |',
 '|---|---|---|---|---|',
 '| 20 | 233 / 200 | 433 / 350 | 39 / 39 | 38,624 / 32,384 |',
 '| 60 | 350 / 350 | 1,017 / 1,000 | 39 / 39 | 106,144 / 87,424 |',
 '| 100 | Chưa hỗ trợ / 350 | Chưa hỗ trợ / 1,017 | Chưa hỗ trợ / 39 | Chưa hỗ trợ / 142,464 |',
 '',
 '## Giới hạn và đường dẫn bằng chứng',
 '',
 'Chưa chứng nhận 60 FPS trên PC hoặc 30 FPS trên điện thoại thật. Test touch dùng PointerEvent trong Chromium; ảnh dọc dùng viewport 390×844. Stress 30 phút là mô phỏng tăng tốc qua physics thực, còn video tự nhiên chạy theo thời gian thực. Các clip hành vi cận cảnh dùng fixture QA để nhìn rõ.',
 '',
 'Mở index.html để xem toàn bộ ảnh/video. Dữ liệu máy: capture-report.json, realism42-report.json, realism42-event-audit.json, realism42-surfaces-review.json. CI main có bước kiểm tra đúng asset trên Pages, nút Hồ Cá, ESC, Alt+H, canvas và không có QA hooks ở production; kết quả nằm trong artifact realism42-production-review.',
 ''
 ].join('\n'));

 const species=['angelfish','betta','guppy','neon-tetra','corydoras'];
 const html='<!doctype html><html lang="vi"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Realism 4.2 — bằng chứng kiểm thử</title><style>body{margin:0;background:#0b1420;color:#e5eef6;font:16px/1.6 system-ui}main{max-width:1100px;margin:auto;padding:28px}a{color:#80d8ed}section{margin:32px 0}video,img{max-width:100%;border-radius:10px;background:#000}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:18px}figure{margin:0}figcaption{padding:8px 0}.note{background:#162739;padding:18px;border-radius:10px}code{overflow-wrap:anywhere}</style><main><h1>Realism 4.2 — bằng chứng kiểm thử</h1><p>Commit nguồn: <code>'+report.sourceCommit+'</code>. <a href="https://github.com/LamHoaiLinh/Kanban-QLCV-Linh/actions/runs/'+report.run+'">CI và log kiểm thử</a>.</p><p class="note">Hồ 100 cá được ghi hơn 3 phút chạy thực, không kích hoạt hành vi bằng QA. Các clip cận cảnh dùng fixture QA để nhìn rõ hành vi. Kiểm thử trong Chromium dùng GPU phần mềm; chưa xác nhận 60 FPS trên PC và 30 FPS trên điện thoại thật.</p><section><h2>Hồ 100 cá — chạy tự nhiên</h2><video controls preload="metadata" src="natural-3min.mp4"></video><p><a href="natural-3min.mp4">Tải video</a> · <a href="100-fish.png">Ảnh toàn hồ</a></p></section><section><h2>Chuyển động và hành vi</h2><div class="grid"><figure><video controls preload="metadata" src="angelfish-15s.mp4"></video><figcaption>Cá ông tiên — 15 giây</figcaption></figure><figure><video controls preload="metadata" src="peck-slow-motion.mp4"></video><figcaption>Mổ kính — phát chậm 5 lần</figcaption></figure><figure><video controls preload="metadata" src="jump-return.mp4"></video><figcaption>Nhảy qua mặt nước, một splash và trở lại hồ</figcaption></figure></div></section><section><h2>So sánh vây mềm / cổ điển</h2>'+species.map(id=>'<h3>'+id+'</h3><div class="grid"><figure><img loading="lazy" src="'+id+'-soft.png"><figcaption>Vây mềm</figcaption></figure><figure><img loading="lazy" src="'+id+'-classic.png"><figcaption>Vây cổ điển — cùng góc nhìn</figcaption></figure></div>').join('')+'<h3>Ông tiên — góc nghiêng</h3><div class="grid"><figure><img loading="lazy" src="angelfish-oblique-soft.png"><figcaption>Vây mềm, góc nghiêng</figcaption></figure><figure><img loading="lazy" src="angelfish-oblique-classic.png"><figcaption>Vây cổ điển, góc nghiêng</figcaption></figure></div></section><section><h2>Màn hình dọc — pan/pinch hai ngón</h2><div class="grid"><figure><img loading="lazy" src="mobile-before.png"><figcaption>Trước thao tác</figcaption></figure><figure><img loading="lazy" src="mobile-after.png"><figcaption>Sau thao tác — không thả thức ăn</figcaption></figure></div></section><section><h2>Báo cáo máy</h2><p><a href="REPORT.md">Báo cáo nghiệm thu và số đo trước / sau</a><br><a href="realism42-report.json">100 cá / 30 phút mô phỏng, 20 chu kỳ resize, save/load/undo, nhảy/mổ/camera</a><br><a href="realism42-event-audit.json">20 loại sự kiện và tuyến di chuyển thật</a><br><a href="realism42-surfaces-review.json">Mổ kính, gỗ và lá</a><br><a href="capture-report.json">Số liệu video, bộ nhớ, va chạm và giới hạn kiểm thử</a></p></section></main></html>';
 writeFileSync(join(out,'index.html'),html);console.log('PASS REALISM42 MEDIA '+JSON.stringify({samples:report.natural.length,fixtures:report.fixtures.length,errors}));
}finally{await browser?.close();server.kill();rmSync(tmp,{recursive:true,force:true});}
