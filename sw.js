// Proefjournaal: werkt ook offline. Eerst het netwerk (zodat updates binnenkomen), anders de opgeslagen kopie.
const CACHE = 'proefjournaal-v4';
const FILES = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./apple-touch-icon.png", "./data/geo.js", "./data/wijnen.js", "./data/kennis.js", "./fonts/cormorant-garamond-latin-500-italic.woff2", "./fonts/cormorant-garamond-latin-500-normal.woff2", "./fonts/cormorant-garamond-latin-600-normal.woff2", "./fonts/cormorant-garamond-latin-700-normal.woff2", "./fonts/cormorant-garamond-latin-ext-500-italic.woff2", "./fonts/cormorant-garamond-latin-ext-500-normal.woff2", "./fonts/cormorant-garamond-latin-ext-600-normal.woff2", "./fonts/cormorant-garamond-latin-ext-700-normal.woff2", "./fonts/dm-sans-latin-400-normal.woff2", "./fonts/dm-sans-latin-500-normal.woff2", "./fonts/dm-sans-latin-600-normal.woff2", "./fonts/dm-sans-latin-ext-400-normal.woff2", "./fonts/dm-sans-latin-ext-500-normal.woff2", "./fonts/dm-sans-latin-ext-600-normal.woff2"];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    fetch(req).then(res => { if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); } return res; })
      .catch(() => caches.match(req, {ignoreSearch: true}).then(m => m || caches.match('./index.html')))
  );
});
