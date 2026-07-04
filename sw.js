const CACHE_NAME = 'jigsaw-notes-v6';
const ASSETS = [
  './',
  './jigsaw_notes_v3.html',
  './manifest.json',
  './icon-180.png',
  './icon-192.png',
  './icon-512.png'
];

// Install — cache app shell
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activate — clean old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch — cache first, network fallback
self.addEventListener('fetch', e => {
  // Never cache DeepSeek API calls — a cache-first hit would pin a stale
  // balance/chat response forever. Let them go straight to the network.
  if (new URL(e.request.url).hostname === 'api.deepseek.com') return;
  e.respondWith(
    // Ignore the query string for navigations so share-target URLs
    // (?shared_text=...) hit the cached app shell offline.
    caches.match(e.request, { ignoreSearch: e.request.mode === 'navigate' }).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(response => {
        // Cache successful GET requests
        if (response.ok && e.request.method === 'GET') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        }
        return response;
      });
    }).catch(() => {
      // Offline fallback for navigation
      if (e.request.mode === 'navigate') {
      return caches.match('./jigsaw_notes_v3.html');
      }
    })
  );
});
