import puppeteer from 'puppeteer-core';import{spawn}from'node:child_process';import{writeFileSync,mkdirSync,existsSync}from'node:fs';
const chrome=[process.env.CHROMIUM_PATH,'/usr/bin/google-chrome','/usr/bin/chromium'].filter(Boolean).find(existsSync);
const server=spawn(process.execPath,['node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port','4243'],{stdio:'ignore'});let browser;mkdirSync('evidence/content',{recursive:true});
try{for(let i=0;i<100;i++){try{if((await fetch('http://127.0.0.1:4243')).ok)break}catch{}await new Promise(r=>setTimeout(r,100));}
browser=await puppeteer.launch({executablePath:chrome,headless:true,protocolTimeout:240000,args:['--no-sandbox','--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});const p=await browser.newPage(),errors=[];p.on('pageerror',e=>errors.push(e.message));await p.setViewport({width:800,height:500});
await p.evaluateOnNewDocument(()=>{
 const config={name:'Legacy Linh',water:'freshwater',gallons:40,fish:{'neon-tetra':6},flora:{},decor:[],substrate:'sand',background:'natural',lighting:'daylight',dayNight:'day',fishNames:{'neon-tetra:0':'Linh'}};
 localStorage.setItem('aquarium-v1',JSON.stringify({version:0,state:{quality:'low',ecoMode:'relax',audioOn:false,config,savedTanks:{Keep:{...config,name:'Keep'}}}}));
});
await p.goto('http://127.0.0.1:4243/?qa=1&kanban=1');await p.waitForFunction(()=>window.__kanContentQA,{timeout:90000});await p.evaluate(()=>{window.__kan42Pause();window.__kan42Quality('low');});
const initial=await p.evaluate(()=>window.__kan42Store('read'));if(initial.savedTanks.Keep.fishNames['neon-tetra:0']!=='Linh'||initial.config.layout)throw Error('Legacy migration changed saved tank');
await p.addStyleTag({content:'.panel,.toolbar,.kanban-aquarium-stock,.kan-camera-help,.kanban-aquarium-help,.open-panel,.kan-help-toggle,.kanban-aquarium-exit{display:none!important}'});
const report=await p.evaluate(()=>{
 const rows=[];for(const species of ['amano-shrimp','nerite-snail'])for(const decor of ['hollow-log','river-rocks','log-arch']){
 window.__kan42Scene({water:'freshwater',gallons:75,fish:{[species]:1},flora:{},decor:[decor]});const{fish,env}=window.__kanStabilityWorld(),a=fish.populations[0].agents[0];a.drop=undefined;a.peck=undefined;a.wall='floor';a.mode='forage';a.modeT=999;env.ecoMode='relax';fish.habitat.reset();
 let hit=null;const radius=Math.max(.002,a.scale*.12);for(let xi=-8;xi<=8&&!hit;xi++)for(let zi=-5;zi<=5&&!hit;zi++){const from=a.pos.clone().set(xi*.035,env.surfaceY,zi*.035),to=from.clone().setY(.001);hit=env.solids.sweep(from,to,radius);}
 if(!hit)throw Error('Missing real surface '+decor);a.pos.copy(hit.point).addScaledVector(hit.normal,radius+.00002);a.surfaceNormal=hit.normal.clone();a.crawlDir=.3;let travel=0,maxStep=0,penetrations=0,unsupported=0;const start=a.pos.clone();
 for(let f=0;f<3600;f++){const before=a.pos.clone();env.time+=1/60;fish.update(1/60,env);const step=before.distanceTo(a.pos);maxStep=Math.max(maxStep,step);travel+=step;if(env.solids.contains(a.pos,radius*.85))penetrations++;if(a.surfaceNormal&&!env.solids.sweep(a.pos.clone().addScaledVector(a.surfaceNormal,.003),a.pos.clone().addScaledVector(a.surfaceNormal,-.012),radius))unsupported++;}
 rows.push({species,decor,travel,displacement:start.distanceTo(a.pos),maxStep,penetrations,unsupported});}
 return rows;});writeFileSync('crawler-content-report.json',JSON.stringify(report,null,2));console.log(report);if(report.some(r=>r.penetrations||r.unsupported||r.maxStep>.004||r.travel<.005))throw Error('Crawler surface contract');console.log('PASS real wood/stone contact, finite continuous crawling without floating or penetration');
}finally{await browser?.close();server.kill();}
