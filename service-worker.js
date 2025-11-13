const CACHE_NAME = 'calculator-cache-v1';
const urlsToCache = [
  '/calculator/',
  '/calculator/index.html',
  '/calculator/style.css',
  '/calculator/script.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});


