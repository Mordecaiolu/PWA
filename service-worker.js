var cacheName = 'petstore-v1';
var cacheFile = [
    'checkout.html',
    'products.js',
    'petstore.webmanifest',
    'images/cat-litter.jpg',
    'images/yarn.jpg',
    'images/laser-pointer.jpg',
    'images/cat-house.jpg',
    'images/product-fullsize.png',

];

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            console.log('[Service Worker] Caching all the files');
            return cache.addAll(cacheFiles);
        })
    );
});