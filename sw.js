/* Kanban PWA: cache lõi nhỏ, game chỉ lưu sau khi người dùng mở. */
const APP_CACHE = 'linh-kanban-app-v823-storage-music';
const GAME_CACHE = 'linh-kanban-games-v823';
const CORE_ASSETS = [
  "./index.html",
  "./styles.css?v=6.44",
  "./dragdrop.js?v=3.3",
  "./app.js?v=5.5",
  "./music-player.js?v=3.4",
  "./kalo-launcher.js?v=1.0.5",
  "./capture-launcher.js?v=1.5.0",
  "./kantool-launcher.js?v=1.7.0",
  "./kantool-extra.css?v=1.2.0",
  "./office-tools/office-tools.css?v=5.3.0",
  "./office-tools/worksheet-editor.css?v=1.2.0",
  "./office-tools/office-tools.js?v=6.3.0",
  "./office-tools/google-sheet-export.js?v=1.0.1",
  "./office-tools/kanmedia/kanmedia.js?v=1.5.3",
  "./office-tools/kanmedia/kanmedia.css?v=1.5.3",
  "./office-tools/vba-extractor.mjs?v=2.0.0",
  "./office-tools/worksheet-editor.js?v=1.2.0",
  "./office-tools/pdf-signing.js?v=1.5.1",
  "./office-tools/excel-ai-analysis.mjs?v=1.0.0",
  "./office-tools/vendor/jszip.min.js",
  "./manifest.webmanifest?v=3.2",
  "./assets/icon.svg",
  "./assets/backgrounds/Beautiful Background6.png",
  "./assets/backgrounds/Beautiful Background7.png",
  "./assets/backgrounds/Beautiful Background8.png",
  "./assets/backgrounds/Beautiful Background13.png",
  "./assets/backgrounds/Beautiful Background15.png",
  "./assets/backgrounds/Beautiful Background28.png",
  "./assets/backgrounds/Beautiful Background33.png",
  "./assets/backgrounds/Beautiful Background40.png",
  "./assets/backgrounds/Beautiful Background49.png"
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
    if (response.ok && response.type !== 'opaque') {
      const cache = await caches.open(cacheName);
      await cache.put(request,response.clone()).catch(error => console.debug('Cache put:',error));
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
