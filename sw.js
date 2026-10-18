/* Kanban PWA: cache lõi nhỏ, game chỉ lưu sau khi người dùng mở. */
const APP_CACHE = 'linh-kanban-app-v826-aquarium-music';
const GAME_CACHE = 'linh-kanban-games-v826';
const CORE_ASSETS = [
  "./index.html",
  "./styles.css?v=6.46",
  "./dragdrop.js?v=3.3",
  "./app.js?v=5.5",
  "./music-player.js?v=3.7",
  "./manifest.webmanifest?v=3.2",
  "./assets/icon.svg",
  "./assets/backgrounds/Beautiful Background6.png"
];
const gameRoots = [
  '/dice-game/','/tarot-game/','/tetris-game/','/farm-game/',
  '/thuong-lo-viet/','/doi-lap-nghiep/','/vuong-quoc-so-lieu/',
  '/bach-chieu-game/','/dai-luc-nghe-nghiep/','/tinh-nhanh-game/',
  '/drift1k-game/','/stock-sim-vn/','/aquarium-game/','/open-poker-game/'
];
const dynamicLaunchers = [
  '/aquarium-launcher.js','/game-launcher.js','/tarot-launcher.js','/tetris-launcher.js'
];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(APP_CACHE);
    // Một ảnh/game lỗi tải không được làm toàn bộ Service Worker cài đặt thất bại.
    const results = await Promise.allSettled(CORE_ASSETS.map(async path => {
      const response = await fetch(new Request(path,{cache:'reload'}));
      if (!response.ok) throw new Error('HTTP '+response.status+' '+path);
      await cache.put(path,response);
    }));
    const failed = results.filter(result => result.status === 'rejected');
    if (failed.length) console.warn('Kanban cache: có '+failed.length+' tệp tùy chọn chưa tải được');
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keep = new Set([APP_CACHE,GAME_CACHE]);
    const keys = await caches.keys();
    await Promise.all(keys.filter(name => name.startsWith('linh-kanban-') && !keep.has(name)).map(name => caches.delete(name)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.endsWith('/kan-tools/KanTool.bat')) return;
  const isGame = gameRoots.some(root => url.pathname.includes(root)) ||
    dynamicLaunchers.some(launcher => url.pathname.endsWith(launcher));
  const cacheName = isGame ? GAME_CACHE : APP_CACHE;
  const freshFirst = request.mode === 'navigate' || isGame;

  async function fetchAndCache() {
    const response = await fetch(request);
    const heavyGameMedia = isGame && /\.(glb|bin|mp4|webm|mov|mp3|wav|ogg|flac|m4a|png|jpe?g|webp|gif)$/i.test(url.pathname);
    const size = Number(response.headers.get('content-length') || 0);
    if (response.ok && response.type !== 'opaque' && !heavyGameMedia && (!size || size < 2*1024*1024)) {
      const cacheCopy = response.clone(); // Clone trước khi trả response cho trình duyệt.
      const cacheJob = caches.open(cacheName)
        .then(cache => cache.put(request,cacheCopy))
        .catch(error => console.debug('Cache put:',error));
      event.waitUntil(cacheJob);
    }
    return response;
  }

  if (freshFirst) {
    event.respondWith(fetchAndCache().catch(async () => {
      const cached = await caches.match(request);
      if (cached) return cached;
      if (request.mode === 'navigate' && !isGame) {
        const fallback = await caches.match('./index.html');
        if (fallback) return fallback;
      }
      return Response.error();
    }));
  } else {
    event.respondWith(caches.match(request).then(cached => cached || fetchAndCache()));
  }
});
