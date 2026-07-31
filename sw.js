const CACHE_NAME='linh-kanban-static-v57-d10-actual-face';
const ASSETS=[
  './','./index.html','./styles.css?v=4.0','./dragdrop.js?v=3.2','./app.js?v=3.7','./music-player.js?v=3.2',
  './office-tools/office-tools.css?v=3.2','./office-tools/office-tools.js?v=3.2','./office-tools/vendor/jszip.min.js',
  './dice-launcher.js?v=5.7','./dice-game/index.html?v=5.7.0','./dice-game/styles.css?v=5.7.0','./dice-game/js/app.js?v=5.7.0','./dice-game/js/d10-engine.js?v=5.7.0','./dice-game/assets/D10.glb',
  './tarot-launcher.js?v=5.3','./tarot-game/index.html?v=5.3.0','./tarot-game/styles.css?v=5.3.0','./tarot-game/js/app.js?v=5.3.0','./tarot-game/js/tarot-data.js',
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
  const isTool=url.pathname.includes('/dice-game/')||url.pathname.includes('/tarot-game/')||url.pathname.endsWith('/dice-launcher.js')||url.pathname.endsWith('/tarot-launcher.js');
  const mustBeFresh=event.request.mode==='navigate'||isTool;
  if(mustBeFresh){
    event.respondWith(fetch(event.request).then(response=>{if(response&&response.status===200){const copy=response.clone();caches.open(CACHE_NAME).then(cache=>cache.put(event.request,copy))}return response}).catch(()=>caches.match(event.request).then(cached=>cached||(event.request.mode==='navigate'?caches.match('./index.html'):undefined))));return;
  }
  event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(response=>{if(response&&response.status===200){const copy=response.clone();caches.open(CACHE_NAME).then(cache=>cache.put(event.request,copy))}return response})));
});
