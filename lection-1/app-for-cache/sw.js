const cacheName = 'app-cache';

const filesToCache = [ '/app.js' ];

self.addEventListener('install', (e) => {
  console.log('Service worker install');

  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log('[ServiceWorker] Caching app script');
      return cache.addAll(filesToCache);
    })
  );
});
