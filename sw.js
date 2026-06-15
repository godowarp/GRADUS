const CACHE_NAME = 'gradus-cache-simple';
const CORE = ['./', './index.html', './styles.css', './app.js', './manifest.json'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request).then(res => res || caches.match('./index.html'))));
});

self.addEventListener('message', event => {
  const data = event.data || {};
  if (data.type === 'GRADUS_NOTIFY') {
    self.registration.showNotification(data.title || 'GRADUS', {
      body: data.body || '',
      icon: './assets/icon-192.png',
      badge: './assets/icon-192.png',
      tag: data.tag || 'gradus',
      renotify: false
    });
  }
});
