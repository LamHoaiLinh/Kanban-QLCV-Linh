const COLS=10,ROWS=20,HIDDEN=2;
const COLORS=['#000000','#25bb9b','#3397d9','#e67e23','#efc30f','#9ccd38','#9c5ab8','#e64b3c','#7b7b7b'];
const SHAPES={I:[[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]],J:[[2,0,0],[2,2,2],[0,0,0]],L:[[0,0,3],[3,3,3],[0,0,0]],O:[[4,4],[4,4]],S:[[0,5,5],[5,5,0],[0,0,0]],T:[[0,6,0],[6,6,6],[0,0,0]],Z:[[7,7,0],[0,7,7],[0,0,0]]};
const TYPES=Object.keys(SHAPES),STORE='linh_tetris_settings_v1',SCORE_KEY='linh_tetris_highscore_v1';
const $=s=>document.querySelector(s),boardsEl=$('#boards'),msg=$('#centerMessage'),statusEl=$('#matchStatus'),highEl=$('#highScore');
let players=[],running=false,paused=false,last=0,playerCount=1,startSpeed=3,raf=0;
const prefs=load(STORE,{players:1,speed:3});
for(let i=1;i<=10;i++){const o=document.createElement('option');o.value=i;o.textContent=`Cấp ${i}${i===1?' · Thư giãn':i===3?' · Vừa':i===6?' · Nhanh':i===10?' · Siêu tốc':''}`;$('#startSpeed').append(o)}
$('#playerCount').value=String(prefs.players||1);$('#startSpeed').value=String(prefs.speed||3);syncPlayerControls();syncHigh();
$('#playerCount').onchange=syncPlayerControls;$('#startBtn').onclick=startGame;$('#restartBtn').onclick=startGame;$('#pauseBtn').onclick=togglePause;$('#closeBtn').onclick=()=>parent.postMessage({type:'tetris-game-close'},'*');
function load(k,f){try{return {...f,...JSON.parse(localStorage.getItem(k)||'{}')}}catch{return f}}function save(k,v){localStorage.setItem(k,JSON.stringify(v))}
function syncPlayerControls(){const two=$('#playerCount').value==='2';$('#p2Controls').hidden=!two;}
function syncHigh(){highEl.textContent=`Kỷ lục: ${Number(localStorage.getItem(SCORE_KEY)||0).toLocaleString('vi-VN')}`}
function startGame(){playerCount=+$('#playerCount').value;startSpeed=+$('#startSpeed').value;save(STORE,{players:playerCount,speed:startSpeed});boardsEl.innerHTML='';players=[];for(let i=0;i<playerCount;i++){const p=new TetrisPlayer(i);players.push(p)}if(playerCount===2){boardsEl.append(players[1].el);boardsEl.append(players[0].el)}else{boardsEl.append(players[0].el)}players.forEach(p=>{p.resize();p.drawMini()});boardsEl.className=`boards ${playerCount===1?'one-player':'two-player'}`;running=true;paused=false;last=performance.now();msg.hidden=true;statusEl.textContent=playerCount===1?'Đang chơi.':'Đối kháng: xóa nhiều hàng để gửi hàng rác.';cancelAnimationFrame(raf);raf=requestAnimationFrame(loop)}
function togglePause(){if(!running)return;paused=!paused;msg.hidden=!paused;msg.innerHTML=paused?'<b>TẠM DỪNG</b><br>Nhấn Esc để tiếp tục':'';$('#pauseBtn').textContent=paused?'▶':'⏸';last=performance.now()}
function loop(now){raf=requestAnimationFrame(loop);if(!running||paused){last=now;return}const dt=Math.min(.05,(now-last)/1000);last=now;players.forEach(p=>p.update(dt));players.forEach(p=>p.render(dt));checkMatch()}
function checkMatch(){if(!running)return;const alive=players.filter(p=>!p.gameOver);if(playerCount===1&&alive.length===0){finishGame('Kết thúc! Bấm Chơi lại để thử lần nữa.')}else if(playerCount===2&&alive.length<=1){finishGame(alive.length?`${alive[0].name} chiến thắng!`:'Hòa!')}}
function finishGame(text){running=false;msg.hidden=false;msg.innerHTML=`<b>${text}</b>`;statusEl.textContent=text;const best=Math.max(0,...players.map(p=>p.score)),old=+localStorage.getItem(SCORE_KEY)||0;if(best>old){localStorage.setItem(SCORE_KEY,String(best));syncHigh()}}
function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function rotateMatrix(m,dir){const n=m.length,out=Array.from({length:n},()=>Array(n).fill(0));for(let y=0;y<n;y++)for(let x=0;x<n;x++){if(dir>0)out[x][n-1-y]=m[y][x];else out[n-1-x][y]=m[y][x]}return out}
function makeCanvas(cls){const c=document.createElement('canvas');c.className=cls;return c}
class TetrisPlayer{
 constructor(index){this.index=index;this.name=`Người chơi ${index+1}`;this.grid=Array.from({length:ROWS+HIDDEN},()=>Array(COLS).fill(0));this.bag=[];this.next=[];this.hold=null;this.holdUsed=false;this.score=0;this.lines=0;this.combo=0;this.level=startSpeed;this.pendingGarbage=0;this.dropAcc=0;this.lockAcc=0;this.gameOver=false;this.trails=[];this.flashes=[];this.input={soft:false};this.buildUI();for(let i=0;i<5;i++)this.next.push(this.pullBag());this.spawn();}
 buildUI(){this.el=document.createElement('div');this.el.className='player-board';this.el.innerHTML=`<div class="player-head"><span class="player-name">${this.name}</span><span class="level-pill">Cấp <b data-level>1</b></span></div><div class="side-box"><b>GIỮ</b><canvas class="mini hold"></canvas></div><div class="board-wrap"><canvas class="game-board"></canvas></div><div class="side-box"><b>TIẾP</b><canvas class="mini next"></canvas></div><div class="player-stats"><div class="stat"><span>Điểm</span><b data-score>0</b></div><div class="stat"><span>Hàng</span><b data-lines>0</b></div><div class="stat"><span>Combo</span><b data-combo>-</b></div><div class="stat"><span>Tốc độ</span><b data-speed>1x</b></div></div>`;this.canvas=this.el.querySelector('.game-board');this.ctx=this.canvas.getContext('2d');this.holdCanvas=this.el.querySelector('.hold');this.nextCanvas=this.el.querySelector('.next');this.resize();new ResizeObserver(()=>this.resize()).observe(this.canvas);}
 resize(){const dpr=Math.min(2,devicePixelRatio||1),r=this.canvas.getBoundingClientRect();if(r.width){this.canvas.width=Math.round(r.width*dpr);this.canvas.height=Math.round(r.height*dpr);this.ctx.setTransform(dpr,0,0,dpr,0,0);this.w=r.width;this.h=r.height;this.cell=this.w/COLS}for(const c of [this.holdCanvas,this.nextCanvas]){const rr=c.getBoundingClientRect();if(rr.width){c.width=rr.width*dpr;c.height=rr.height*dpr;c.getContext('2d').setTransform(dpr,0,0,dpr,0,0)}}}
 pullBag(){if(!this.bag.length)this.bag=shuffle([...TYPES]);return this.bag.pop()}
 spawn(){if(this.pendingGarbage&&!this.gameOver){this.applyGarbage(this.pendingGarbage);this.pendingGarbage=0}const type=this.next.shift()||this.pullBag();this.next.push(this.pullBag());const m=SHAPES[type].map(r=>r.slice());this.p={type,m,x:Math.floor((COLS-m.length)/2),y:-1,rx:Math.floor((COLS-m.length)/2),ry:-1};this.holdUsed=false;this.lockAcc=0;this.dropAcc=0;if(this.collide(this.p.x,this.p.y,this.p.m)){this.gameOver=true}this.drawMini()}
 collide(px,py,m){for(let y=0;y<m.length;y++)for(let x=0;x<m[y].length;x++)if(m[y][x]){const gx=px+x,gy=py+y+HIDDEN;if(gx<0||gx>=COLS||gy>=ROWS+HIDDEN)return true;if(gy>=0&&this.grid[gy]?.[gx])return true}return false}
 move(dx){if(this.gameOver)return;if(!this.collide(this.p.x+dx,this.p.y,this.p.m)){this.p.x+=dx;this.lockAcc=0}}
 rotate(dir){if(this.gameOver)return;const nm=rotateMatrix(this.p.m,dir);for(const k of [0,-1,1,-2,2])if(!this.collide(this.p.x+k,this.p.y,nm)){this.p.m=nm;this.p.x+=k;this.lockAcc=0;return}}
 soft(on){if(on&&!this.input.soft)this.softTrailBase=this.p?.y??0;if(!on)this.softTrailBase=null;this.input.soft=on}
 dropOne(manual=false){if(!this.collide(this.p.x,this.p.y+1,this.p.m)){this.p.y++;if(manual){this.score+=this.level;if(this.softTrailBase==null)this.softTrailBase=this.p.y-1;if(this.p.y-this.softTrailBase>=4){this.addTrail(this.softTrailBase,this.p.y);this.softTrailBase=this.p.y}}return true}return false}
 hardDrop(){if(this.gameOver)return;const sy=this.p.y;let d=0;while(this.dropOne(false))d++;if(d){this.score+=d*2*this.level;this.addTrail(sy,this.p.y)}this.lockPiece()}
 addTrail(from,to){const cells=[];for(let y=0;y<this.p.m.length;y++)for(let x=0;x<this.p.m[y].length;x++)if(this.p.m[y][x])cells.push({x:this.p.x+x,y0:from+y,y1:to+y,color:this.p.m[y][x]});this.trails.push({cells,t:.28,max:.28})}
 holdPiece(){if(this.holdUsed||this.gameOver)return;const cur=this.p.type;if(this.hold){const next=this.hold;this.hold=cur;const m=SHAPES[next].map(r=>r.slice());this.p={type:next,m,x:Math.floor((COLS-m.length)/2),y:-1,rx:Math.floor((COLS-m.length)/2),ry:-1}}else{this.hold=cur;this.spawn()}this.holdUsed=true;this.drawMini()}
 gravityMs(){return Math.max(48,820*Math.pow(.82,this.level-1))}
 update(dt){if(this.gameOver)return;this.level=Math.min(20,startSpeed+Math.floor(this.lines/10));const interval=this.input.soft?26:this.gravityMs();this.dropAcc+=dt*1000;while(this.dropAcc>=interval){this.dropAcc-=interval;if(!this.dropOne(this.input.soft))break}if(this.collide(this.p.x,this.p.y+1,this.p.m)){if(this.wouldCompleteLine()){this.lockPiece();return}this.lockAcc+=dt*1000;if(this.lockAcc>150){this.lockPiece();return}}else this.lockAcc=0;this.trails.forEach(t=>t.t-=dt);this.trails=this.trails.filter(t=>t.t>0);this.flashes.forEach(f=>f.t-=dt);this.flashes=this.flashes.filter(f=>f.t>0);this.updateStats()}
 lockPiece(){if(this.gameOver)return;for(let y=0;y<this.p.m.length;y++)for(let x=0;x<this.p.m[y].length;x++)if(this.p.m[y][x]){const gy=this.p.y+y+HIDDEN,gx=this.p.x+x;if(gy<0){this.gameOver=true;return}if(gy<this.grid.length)this.grid[gy][gx]=this.p.m[y][x]}const cleared=this.clearLines();if(cleared){this.combo++;const base=[0,100,300,500,800][cleared]||1000;const comboBonus=Math.max(0,this.combo-1)*50;this.score+=(base+comboBonus)*this.level;this.showPop(cleared);if(players.length===2){let atk=[0,0,1,2,4][cleared]||4;if(this.combo>=3)atk+=Math.floor((this.combo-1)/2);const other=players[1-this.index];if(other&&!other.gameOver)other.pendingGarbage+=atk}}else this.combo=0;this.spawn()}
 clearLines(){const rows=[];for(let y=HIDDEN;y<this.grid.length;y++)if(this.grid[y].every(Boolean))rows.push(y);const visual=[...rows];for(const y of [...rows].sort((a,b)=>b-a)){this.grid.splice(y,1);this.grid.unshift(Array(COLS).fill(0))}for(const y of visual)this.flashes.push({row:y-HIDDEN,t:.22,max:.22});this.lines+=rows.length;return rows.length}
 applyGarbage(n){for(let i=0;i<n;i++){this.grid.shift();const hole=Math.floor(Math.random()*COLS),row=Array(COLS).fill(8);row[hole]=0;this.grid.push(row)}if(this.grid.slice(0,HIDDEN).some(r=>r.some(Boolean)))this.gameOver=true}
 showPop(n){const pop=document.createElement('div');pop.className='line-pop';pop.style.left='50%';pop.style.top='42%';pop.textContent=n===4?'TETRIS!':n>1?`${n} HÀNG!`:'CLEAR';this.el.querySelector('.board-wrap').append(pop);setTimeout(()=>pop.remove(),750)}
 updateStats(){this.el.querySelector('[data-score]').textContent=this.score.toLocaleString('vi-VN');this.el.querySelector('[data-lines]').textContent=this.lines;const c=this.el.querySelector('[data-combo]');c.textContent=this.combo>1?`x${this.combo}`:'-';c.classList.toggle('combo-active',this.combo>1);this.el.querySelector('[data-level]').textContent=this.level;this.el.querySelector('[data-speed]').textContent=`${(820/this.gravityMs()).toFixed(1)}x`}
 drawMini(){drawMiniPiece(this.holdCanvas,this.hold);drawMiniPiece(this.nextCanvas,this.next[0])}
 wouldCompleteLine(){
  const added=new Set(),affected=new Set();
  for(let y=0;y<this.p.m.length;y++)for(let x=0;x<this.p.m[y].length;x++)if(this.p.m[y][x]){
    const gy=this.p.y+y+HIDDEN,gx=this.p.x+x;
    if(gy>=HIDDEN&&gy<this.grid.length&&gx>=0&&gx<COLS){
      added.add(`${gy}:${gx}`);affected.add(gy);
    }
  }
  for(const gy of affected){
    let full=true;
    for(let x=0;x<COLS;x++){
      if(!this.grid[gy][x]&&!added.has(`${gy}:${x}`)){full=false;break}
    }
    if(full)return true;
  }
  return false;
 }
 ghostY(){let y=this.p.y;while(!this.collide(this.p.x,y+1,this.p.m))y++;return y}
 render(dt){if(!this.w)return;this.p.rx+=(this.p.x-this.p.rx)*Math.min(1,dt*24);this.p.ry+=(this.p.y-this.p.ry)*Math.min(1,dt*28);const ctx=this.ctx,c=this.cell;ctx.clearRect(0,0,this.w,this.h);ctx.fillStyle='#061319';ctx.fillRect(0,0,this.w,this.h);ctx.strokeStyle='rgba(120,180,190,.09)';ctx.lineWidth=1;for(let x=1;x<COLS;x++){ctx.beginPath();ctx.moveTo(x*c,0);ctx.lineTo(x*c,this.h);ctx.stroke()}for(let y=1;y<ROWS;y++){ctx.beginPath();ctx.moveTo(0,y*c);ctx.lineTo(this.w,y*c);ctx.stroke()}for(let y=HIDDEN;y<this.grid.length;y++)for(let x=0;x<COLS;x++)if(this.grid[y][x])drawBlock(ctx,x*c,(y-HIDDEN)*c,c,this.grid[y][x],1);const gy=this.ghostY();drawMatrix(ctx,this.p.m,this.p.rx,gy,c,.18,true);for(const t of this.trails){const a=t.t/t.max;for(const q of t.cells){const x=q.x*c+c*.17,y0=Math.max(0,q.y0)*c,y1=(q.y1+1)*c;const g=ctx.createLinearGradient(0,y0,0,y1);g.addColorStop(0,`rgba(160,255,240,0)`);g.addColorStop(1,`rgba(140,255,225,${.45*a})`);ctx.fillStyle=g;ctx.shadowColor='#80ffe0';ctx.shadowBlur=18*a;ctx.fillRect(x,y0,c*.66,Math.max(c,y1-y0));ctx.shadowBlur=0}}drawMatrix(ctx,this.p.m,this.p.rx,this.p.ry,c,1,false);for(const f of this.flashes){const a=f.t/f.max;ctx.fillStyle=`rgba(255,244,150,${.7*a})`;ctx.shadowColor='#fff3a0';ctx.shadowBlur=28*a;ctx.fillRect(0,f.row*c,this.w,c);ctx.shadowBlur=0}if(this.gameOver){ctx.fillStyle='rgba(2,8,11,.76)';ctx.fillRect(0,0,this.w,this.h);ctx.fillStyle='#fff';ctx.font='900 20px Segoe UI';ctx.textAlign='center';ctx.fillText('GAME OVER',this.w/2,this.h/2)}}
}
function drawMatrix(ctx,m,px,py,c,a=1,ghost=false){ctx.save();ctx.globalAlpha=a;for(let y=0;y<m.length;y++)for(let x=0;x<m[y].length;x++)if(m[y][x]){const yy=(py+y)*c;if(yy>=-c&&yy<ROWS*c){if(ghost){ctx.strokeStyle=COLORS[m[y][x]];ctx.lineWidth=2;ctx.strokeRect((px+x)*c+3,yy+3,c-6,c-6)}else drawBlock(ctx,(px+x)*c,yy,c,m[y][x],1)}}ctx.restore()}
function drawBlock(ctx,x,y,c,id,a){ctx.save();ctx.globalAlpha=a;const base=COLORS[id]||'#888';const g=ctx.createLinearGradient(x,y,x+c,y+c);g.addColorStop(0,lighten(base,.34));g.addColorStop(.48,base);g.addColorStop(1,darken(base,.36));ctx.fillStyle=g;ctx.fillRect(x+1,y+1,c-2,c-2);ctx.fillStyle='rgba(255,255,255,.26)';ctx.beginPath();ctx.moveTo(x+2,y+2);ctx.lineTo(x+c-2,y+2);ctx.lineTo(x+c*.72,y+c*.24);ctx.lineTo(x+c*.25,y+c*.24);ctx.closePath();ctx.fill();ctx.strokeStyle='rgba(0,0,0,.28)';ctx.strokeRect(x+1.5,y+1.5,c-3,c-3);ctx.restore()}
function hexRgb(h){const v=h.replace('#','');return [parseInt(v.slice(0,2),16),parseInt(v.slice(2,4),16),parseInt(v.slice(4,6),16)]}function lighten(h,p){const [r,g,b]=hexRgb(h);return `rgb(${Math.min(255,r+(255-r)*p)},${Math.min(255,g+(255-g)*p)},${Math.min(255,b+(255-b)*p)})`}function darken(h,p){const [r,g,b]=hexRgb(h);return `rgb(${r*(1-p)},${g*(1-p)},${b*(1-p)})`}
function drawMiniPiece(canvas,type){const ctx=canvas.getContext('2d'),r=canvas.getBoundingClientRect();ctx.clearRect(0,0,r.width,r.height);if(!type)return;const m=SHAPES[type],c=Math.min(r.width/(m.length+1),r.height/(m.length+1)),ox=(r.width-m.length*c)/2,oy=(r.height-m.length*c)/2;for(let y=0;y<m.length;y++)for(let x=0;x<m[y].length;x++)if(m[y][x])drawBlock(ctx,ox+x*c,oy+y*c,c,m[y][x],1)}
function playerForControl(code){
  if(!players.length)return null;
  if(['ArrowLeft','ArrowRight','ArrowDown','ArrowUp','ControlRight','ShiftRight'].includes(code))return players[0];
  if(players.length>1&&['KeyA','KeyD','KeyS','KeyW','ControlLeft','ShiftLeft'].includes(code))return players[1];
  return null;
}
window.addEventListener('keydown',e=>{
  if(['INPUT','SELECT','TEXTAREA'].includes(document.activeElement?.tagName))return;
  if(e.code==='Escape'){e.preventDefault();togglePause();return}
  if(e.code==='KeyR'){e.preventDefault();startGame();return}
  const p=playerForControl(e.code);if(!p||paused||!running)return;
  e.preventDefault();
  if(e.code==='ArrowLeft'||e.code==='KeyA')p.move(-1);
  else if(e.code==='ArrowRight'||e.code==='KeyD')p.move(1);
  else if(e.code==='ArrowDown'||e.code==='KeyS')p.soft(true);
  else if(e.code==='ArrowUp'||e.code==='KeyW'){if(!e.repeat)p.rotate(1)}
  else if(e.code==='ControlRight'||e.code==='ControlLeft'){if(!e.repeat)p.holdPiece()}
  else if(e.code==='ShiftRight'||e.code==='ShiftLeft'){if(!e.repeat)p.hardDrop()}
});
window.addEventListener('keyup',e=>{
  const p=playerForControl(e.code);if(!p)return;
  if(e.code==='ArrowDown'||e.code==='KeyS')p.soft(false)
});
window.addEventListener('blur',()=>{players.forEach(p=>p.soft(false))});
