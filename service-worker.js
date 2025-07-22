const CACHE_NAME = 'krasnodar-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/places.html',
  '/css/style.css',
  '/css/normalize.css',
  '/img/Flag.png',
  '/img/Кр1.jpg',
  '/img/dol.jpg',
  '/img/park.jpg',
  '/img/peshera.jpg',
  '/img/abrau.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  ); 
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});