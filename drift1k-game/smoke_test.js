const fs = require('fs');
const vm = require('vm');

const dummyCtx = {
  imageSmoothingEnabled:false, fillStyle:'', font:'', textBaseline:'', textAlign:'',
  fillRect(){}, save(){}, restore(){}, fillText(){}
};
function element(id){
  return {
    id, textContent:'',
    getContext(){ return dummyCtx; },
    addEventListener(){}, focus(){}
  };
}
const elements = {game:element('game'),status:element('status'),p1Button:element('p1Button'),p2Button:element('p2Button')};
const sandbox = {
  console,
  Math,
  performance:{now:()=>0},
  requestAnimationFrame:()=>{},
  setTimeout:(fn)=>{fn();return 1;},
  document:{getElementById:(id)=>elements[id]},
  window:{addEventListener(){}, AudioContext:null, webkitAudioContext:null}
};
sandbox.window.window = sandbox.window;
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(__dirname+'/game.js','utf8'), sandbox, {filename:'game.js'});
const d=sandbox.window.DRIFT1K_DEBUG;
function ok(cond,msg){ if(!cond) throw new Error(msg); }

// 1P initial state and original constants
 d.startSingle();
let s=d.getState();
ok(s.mode===1,'1P mode failed');
ok(s.p1.x===64 && s.p1.y===72,'1P original start position changed');
ok(s.p1.speedMult===1 && s.p1.fuelTarget===1 && s.p1.score===0,'1P initial state changed');

// Turning remains one-button direction flip
const dir0=s.p1.turnDir;
d.handleAction(1);
s=d.getState();
ok(s.p1.turnDir===-dir0,'turn direction did not flip');

// Fixed-step update drains fuel and moves car
const x0=s.p1.x, fuel0=s.p1.fuelTarget;
d.fixedUpdate();
s=d.getState();
ok(s.p1.x!==x0 || s.p1.y!==72,'car did not move');
ok(s.p1.fuelTarget<fuel0,'fuel did not drain');
ok(s.p1.trail.length===1,'trail not appended');

// Pickup: refill, score +1, speed multiplier +0.125
// Put pickup exactly on player then step.
d.setPickup(s.p1.x,s.p1.y,0);
d.fixedUpdate();
s=d.getState();
ok(s.p1.score===1,'pickup did not increment score');
ok(Math.abs(s.p1.speedMult-1.125)<1e-9,'pickup did not raise speed multiplier by 0.125');
ok(s.p1.fuelTarget===1,'pickup did not refill fuel target');

// 2P initialization
 d.startTwo();
s=d.getState();
ok(s.mode===2 && s.p1 && s.p2,'2P mode failed');
ok(s.p1.x===44 && s.p2.x===84,'2P start positions wrong');

// Players can occupy same position; there is deliberately no collision response.
d.setPlayerPosition(1,64,64); d.setPlayerPosition(2,64,64);
d.fixedUpdate();
s=d.getState();
ok(s.p1.alive && s.p2.alive,'overlap incorrectly killed a player');

// P1 wins pickup while P2 keeps draining.
d.setPlayerPosition(1,40,40); d.setPlayerPosition(2,100,100);
d.setFuel(1,0.3,0.3); d.setFuel(2,0.3,0.3);
d.setPickup(40,40,0);
d.fixedUpdate();
s=d.getState();
ok(s.p1.score===1 && s.p2.score===0,'shared pickup winner incorrect');
ok(s.p1.fuelTarget===1,'P1 not refilled');
ok(s.p2.fuelTarget<0.3,'P2 fuel did not keep draining');

// Game over: force P2 essentially empty, then advance enough to hit JS-equivalent zero.
d.setFuel(2,0,0.00001);
d.fixedUpdate();
s=d.getState();
ok(s.mode===3,'2P game over did not trigger');
ok(s.winnerText==='NGƯỜI 1 THẮNG','wrong winner after P2 fuel depletion');

console.log('SMOKE TEST PASS');
