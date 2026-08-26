const CACHE_NAME='linh-kanban-static-v724-dailuc-unlock-audit';
const ASSETS=[
  './','./index.html','./styles.css?v=6.21','./dragdrop.js?v=3.3','./app.js?v=3.7','./music-player.js?v=3.2',
  './office-tools/office-tools.css?v=3.8','./office-tools/office-tools.js?v=4.3','./office-tools/excel-ai-analysis.mjs?v=1.0.0','./office-tools/vendor/jszip.min.js',
  './game-launcher.js?v=1.63','./assets/game-hub/tu-tien-hub.png','./bach-chieu-game/index.html?v=1.0.0','./bach-chieu-game/styles.css','./bach-chieu-game/game.js','./dai-luc-nghe-nghiep/index.html?v=1.0.3','./dai-luc-nghe-nghiep/styles.css?v=1.0.3','./dai-luc-nghe-nghiep/data.js?v=1.0.3','./dai-luc-nghe-nghiep/app.js?v=1.0.3','./doi-lap-nghiep/index.html?v=1.8.0','./doi-lap-nghiep/styles.css?v=1.8.0','./doi-lap-nghiep/game.js?v=1.8.0','./farm-game/index.html?v=3.3.0','./farm-game/styles.css?v=3.3.0','./farm-game/asset-loader.css?v=2.0.0','./farm-game/config.js?v=3.3.0','./farm-game/game-loader.js?v=3.3.0','./farm-game/game.js?v=3.3.0','./farm-game/asset-loader.js?v=2.1.0','./farm-game/assets/manifest.json?v=3.0.0','./farm-game/LICENSE_SOURCE.txt','./farm-game/assets/villa/stage_01.png','./farm-game/assets/villa/stage_02.png','./farm-game/assets/villa/stage_03.png','./farm-game/assets/villa/stage_04.png','./farm-game/assets/villa/stage_05.png','./farm-game/assets/villa/stage_06.png','./farm-game/assets/villa/stage_07.png','./farm-game/assets/villa/stage_08.png','./farm-game/assets/villa/stage_09.png','./farm-game/assets/villa/stage_10.png','./farm-game/assets/villa/stage_11.png','./farm-game/assets/villa/stage_12.png','./farm-game/assets/villa/stage_13.png','./farm-game/assets/villa/stage_14.png','./farm-game/assets/villa/stage_15.png','./farm-game/assets/villa/stage_16.png',
  './vuong-quoc-so-lieu/index.html?v=1.0.0','./vuong-quoc-so-lieu/assets/styles.css?v=1.0.0','./vuong-quoc-so-lieu/assets/game.js?v=1.0.0','./vuong-quoc-so-lieu/LICENSE_AGPL.txt','./vuong-quoc-so-lieu/SOURCE_INFO.txt',
  './thuong-lo-viet/index.html?v=7.1.0','./thuong-lo-viet/styles.css?v=7.1.0','./thuong-lo-viet/game.js?v=7.1.0',
  './dice-game/index.html?v=7.2.1','./dice-game/styles.css?v=7.2.1','./dice-game/js/app.js?v=7.2.1','./dice-game/js/d10-engine.js?v=7.2.0','./dice-game/assets/D10.glb',
  './dice-game/assets/fighters/f01.svg','./dice-game/assets/fighters/f02.svg','./dice-game/assets/fighters/f03.svg','./dice-game/assets/fighters/f04.svg','./dice-game/assets/fighters/f05.svg','./dice-game/assets/fighters/f06.svg','./dice-game/assets/fighters/m01.svg','./dice-game/assets/fighters/m02.svg','./dice-game/assets/fighters/m03.svg','./dice-game/assets/fighters/m04.svg','./dice-game/assets/fighters/m05.svg','./dice-game/assets/fighters/m06.svg',
  './tarot-launcher.js?v=5.4','./tarot-game/index.html?v=5.4.0','./tarot-game/styles.css?v=5.4.0','./tarot-game/js/app.js?v=5.4.0','./tarot-game/js/tarot-data.js',
  './tetris-launcher.js?v=1.04','./tetris-game/index.html?v=1.0.4','./tetris-game/styles.css?v=1.0.4','./tetris-game/game.js?v=1.0.4','./tetris-game/LICENSE.txt',
  './tarot-game/LICENSE_SOURCE.txt','./manifest.webmanifest?v=3.2','./assets/icon.svg',
  './assets/backgrounds/Beautiful Background6.png','./assets/backgrounds/Beautiful Background7.png',
  './assets/backgrounds/Beautiful Background8.png','./assets/backgrounds/Beautiful Background13.png',
  './assets/backgrounds/Beautiful Background15.png','./assets/backgrounds/Beautiful Background28.png',
  './assets/backgrounds/Beautiful Background33.png','./assets/backgrounds/Beautiful Background40.png',
  './assets/backgrounds/Beautiful Background49.png'
];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(ASSETS)));self.skipWaiting()});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE_NAME).map(key=>caches.delete(key)))));self.clients.claim()});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const url=new URL(event.request.url);
  const isTool=url.pathname.includes('/dice-game/')||url.pathname.includes('/tarot-game/')||url.pathname.includes('/tetris-game/')||url.pathname.includes('/farm-game/')||url.pathname.includes('/thuong-lo-viet/')||url.pathname.includes('/doi-lap-nghiep/')||url.pathname.includes('/vuong-quoc-so-lieu/')||url.pathname.includes('/bach-chieu-game/')||url.pathname.includes('/dai-luc-nghe-nghiep/')||url.pathname.endsWith('/game-launcher.js')||url.pathname.endsWith('/tarot-launcher.js')||url.pathname.endsWith('/tetris-launcher.js');
  const mustBeFresh=event.request.mode==='navigate'||isTool;
  if(mustBeFresh){
    event.respondWith(fetch(event.request).then(response=>{if(response&&response.status===200){const copy=response.clone();caches.open(CACHE_NAME).then(cache=>cache.put(event.request,copy))}return response}).catch(()=>caches.match(event.request).then(cached=>cached||(event.request.mode==='navigate'?caches.match('./index.html'):undefined))));return;
  }
  event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(response=>{if(response&&response.status===200){const copy=response.clone();caches.open(CACHE_NAME).then(cache=>cache.put(event.request,copy))}return response})));
});
