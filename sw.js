const CACHE_NAME = 'gradus-cache-v014-safe';
const SHELL = [
  './',
  './index.html',
  './styles.css?v=014',
  './app.js?v=014',
  './manifest.json?v=014',
  './supabase-config.js?v=014',
  './assets/icon-192.png',
  './assets/icon-512.png'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => Promise.allSettled(
      SHELL.map(url => cache.add(new Request(url, { cache: 'reload' })))
    ))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith('gradus-cache-') && key !== CACHE_NAME).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('message', event => {
  if (event.data?.type === 'CLEAR_GRADUS_CACHE') {
    event.waitUntil(caches.keys().then(keys => Promise.all(keys.map(key => caches.delete(key)))));
  }
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith((async () => {
    try {
      const fresh = await fetch(event.request, { cache: 'no-store' });
      if (fresh && fresh.status === 200) {
        const cache = await caches.open(CACHE_NAME);
        cache.put(event.request, fresh.clone()).catch(() => {});
      }
      return fresh;
    } catch {
      const cached = await caches.match(event.request);
      if (cached) return cached;
      if (event.request.headers.get('accept')?.includes('text/html')) {
        return caches.match('./index.html') || caches.match('./');
      }
      return new Response('GRADUS offline', { status: 504 });
    }
  })());
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
    for (const client of list) {
      if ('focus' in client) return client.focus();
    }
    if (clients.openWindow) return clients.openWindow('./');
  }));
});
