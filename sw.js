const CACHE_NAME = 'jigsaw-notes-v7';
const ASSETS = [
  './',
  './jigsaw_notes_v3.html',
  './manifest.json',
  './JigsawNote%20Design%20System/styles.css',
  './JigsawNote%20Design%20System/tokens/fonts.css',
  './JigsawNote%20Design%20System/tokens/colors.css',
  './JigsawNote%20Design%20System/tokens/typography.css',
  './JigsawNote%20Design%20System/tokens/spacing.css',
  './JigsawNote%20Design%20System/tokens/base.css',
  './icon-180.png',
  './icon-192.png',
  './icon-512.png'
];

// Cross-origin assets return opaque responses (status 0), which cache.addAll
// rejects — fetch them no-cors and cache.put manually. Without these the app
// loses every icon and webfont when opened offline.
const CDN_ASSETS = [
  'https://code.iconify.design/iconify-icon/2.1.0/iconify-icon.min.js',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Onest:wght@400;500;600;700&display=swap'
];

// Install — cache app shell
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS)
        .then(() => Promise.all(CDN_ASSETS.map(url =>
          fetch(url, { mode: 'no-cors' })
            .then(resp => cache.put(url, resp))
            .catch(() => { /* CDN unreachable during install — runtime fetch will retry */ })
        ))))
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
