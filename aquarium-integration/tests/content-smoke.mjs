import puppeteer from 'puppeteer-core';import{spawn}from'node:child_process';import{writeFileSync,mkdirSync,existsSync}from'node:fs';
const chrome=[process.env.CHROMIUM_PATH,'/usr/bin/google-chrome','/usr/bin/chromium'].filter(Boolean).find(existsSync);
const server=spawn(process.execPath,['node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port','4241'],{stdio:'ignore'});let browser;mkdirSync('evidence/content',{recursive:true});
try{for(let i=0;i<100;i++){try{if((await fetch('http://127.0.0.1:4241')).ok)break}catch{}await new Promise(r=>setTimeout(r,100));}
browser=await puppeteer.launch({executablePath:chrome,headless:true,protocolTimeout:240000,args:['--no-sandbox','--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});const p=await browser.newPage(),errors=[];p.on('pageerror',e=>errors.push(e.message));await p.setViewport({width:800,height:500});
await p.evaluateOnNewDocument(()=>{
 const config={name:'Legacy Linh',water:'freshwater',gallons:40,fish:{'neon-tetra':6},flora:{},decor:[],substrate:'sand',background:'natural',lighting:'daylight',dayNight:'day',fishNames:{'neon-tetra:0':'Linh'}};
 localStorage.setItem('aquarium-v1',JSON.stringify({version:0,state:{quality:'low',ecoMode:'relax',audioOn:false,config,savedTanks:{Keep:{...config,name:'Keep'}}}}));
});
await p.goto('http://127.0.0.1:4241/?qa=1&kanban=1');await p.waitForFunction(()=>window.__kanContentQA,{timeout:90000});await p.evaluate(()=>{window.__kan42Pause();window.__kan42Quality('low');});
const initial=await p.evaluate(()=>window.__kan42Store('read'));if(initial.savedTanks.Keep.fishNames['neon-tetra:0']!=='Linh'||initial.config.layout)throw Error('Legacy migration changed saved tank');
await p.addStyleTag({content:'.panel,.toolbar,.kanban-aquarium-stock,.kan-camera-help,.kanban-aquarium-help,.open-panel,.kan-help-toggle,.kanban-aquarium-exit{display:none!important}'});
const rows=[];for(let index=0;index<112;index++){
 const row=await p.evaluate(index=>{
  const catalog=window.__kanContentQA();const config=index<100?window.__kanContentSeed(index+1):catalog.presets[index-100];
  if(index<100&&JSON.stringify(config)!==JSON.stringify(window.__kanContentSeed(index+1)))throw Error('Seed not deterministic');
  if(!Object.keys(config.fish).some(id=>!catalog.species.find(sp=>sp.id===id)?.invert))throw Error('No swimming life after size filtering');
  if(config.decor.filter(d=>d.includes('log')||d.includes('driftwood')).length>1)throw Error('Overpacked logs');
  window.__kan42Scene(config);window.__kan42Day(1);window.__kanEcoFastForward(2);window.__kanFoodTestCamera('still');window.__kan42Step(.016);
  const{env,fish,flora,decor,renderer}=window.__kanStabilityWorld();let invalid=0;let fingerprint=2166136261;const mix=v=>{fingerprint=Math.imul(fingerprint^(Math.round(v*1e6)|0),16777619)>>>0;};
  for(const mesh of flora.group.children){const pos=mesh.geometry.attributes.position;for(let i=0;i<pos.count;i++){const x=pos.getX(i),y=pos.getY(i),z=pos.getZ(i);if(!Number.isFinite(x+y+z)||Math.abs(x)>env.halfW+.0001||Math.abs(z)>env.halfD+.0001||y>env.surfaceY+.0001||y<env.floorY-.0001)invalid++;mix(x);mix(y);mix(z);}}
  const physics=fish.getPhysicsSnapshot(env),count=fish.populations.reduce((s,p)=>s+p.agents.length,0);
  if(invalid||physics.wallViolations)throw Error('Layout bounds '+JSON.stringify({index,invalid,physics}));
  return {index,name:config.name,seed:config.layout.seed,theme:config.layout.layoutTheme,gallons:config.gallons,fish:count,floraFingerprint:fingerprint,physics,render:{...renderer.info.render},memory:{...renderer.info.memory},config};
 },index);rows.push(row);
 if(index<30||index>=100)await p.screenshot({path:'evidence/content/'+(index<100?'seed-'+(index+1):'preset-'+(index-99))+'.png'});
 writeFileSync('content-report.json',JSON.stringify({rows,errors},null,2));console.log('CONTENT '+(index+1)+'/112 '+row.theme+' '+row.fish+' fish');
}
const repeat=await p.evaluate(()=>{const c=window.__kanContentSeed(1);window.__kan42Scene(c);const{flora}=window.__kanStabilityWorld();let hash=2166136261;for(const m of flora.group.children){const a=m.geometry.attributes.position;for(let i=0;i<a.count;i++)for(const v of [a.getX(i),a.getY(i),a.getZ(i)])hash=Math.imul(hash^(Math.round(v*1e6)|0),16777619)>>>0;}return hash;});
if(repeat!==rows[0].floraFingerprint)throw Error('Seed geometry did not reproduce');const saved=await p.evaluate(()=>window.__kan42Store('read'));if(JSON.stringify(saved.savedTanks)!==JSON.stringify(initial.savedTanks))throw Error('Saved tank changed during content generation');if(errors.length)throw Error(errors.join(';'));
if(new Set(rows.slice(0,100).map(r=>r.gallons)).size!==6)throw Error('Seed size coverage');if(new Set(rows.slice(0,100).map(r=>r.theme)).size<8)throw Error('Theme coverage');
console.log('PASS 100 deterministic seeded tanks, 12 showcases, finite planted geometry inside tank, legacy names/save unchanged');
}finally{await browser?.close();server.kill();}
