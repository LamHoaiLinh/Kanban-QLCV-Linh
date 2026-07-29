const CACHE_NAME='linh-kanban-static-v37';
const ASSETS=[
  './','./index.html','./styles.css?v=3.2','./dragdrop.js?v=3.2','./app.js?v=3.7','./music-player.js?v=3.2',
  './office-tools/office-tools.css?v=3.2','./office-tools/office-tools.js?v=3.2','./office-tools/vendor/jszip.min.js',
  './marble-draw-launcher.js?v=3.7','./marble-draw/index.html?v=1.3.1','./marble-draw/styles.css?v=1.3.1',
  './marble-draw/js/app.js?v=1.3.1','./marble-draw/js/storage.js','./marble-draw/js/crypto-utils.js','./marble-draw/js/participants.js','./marble-draw/js/shuffle-engine.js','./marble-draw/js/race-engine.js',
  './manifest.webmanifest?v=3.2','./assets/icon.svg',
  './assets/backgrounds/Beautiful Background6.png','./assets/backgrounds/Beautiful Background7.png',
  './assets/backgrounds/Beautiful Background8.png','./assets/backgrounds/Beautiful Background13.png',
  './assets/backgrounds/Beautiful Background15.png','./assets/backgrounds/Beautiful Background28.png',
  './assets/backgrounds/Beautiful Background33.png','./assets/backgrounds/Beautiful Background40.png',
  './assets/backgrounds/Beautiful Background49.png'
];
self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE_NAME).map(key=>caches.delete(key)))));
  self.clients.claim();
});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const url=new URL(event.request.url);
  const mustBeFresh=event.request.mode==='navigate'||url.pathname.includes('/marble-draw/')||url.pathname.endsWith('/marble-draw-launcher.js');
  if(mustBeFresh){
    event.respondWith(fetch(event.request).then(response=>{
      if(response&&response.status===200){const copy=response.clone();caches.open(CACHE_NAME).then(cache=>cache.put(event.request,copy));}
      return response;
    }).catch(()=>caches.match(event.request).then(cached=>cached||(event.request.mode==='navigate'?caches.match('./index.html'):undefined))));
    return;
  }
  event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(response=>{
    if(response&&response.status===200){const copy=response.clone();caches.open(CACHE_NAME).then(cache=>cache.put(event.request,copy));}
    return response;
  })));
});
