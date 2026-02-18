const CACHE_NAME = 'shiva-temples-v1';
const ASSETS = [
    './',
    './index.html',
    './style.css',
    './script.js',
    './data.js',
    './manifest.json',
    './icon.svg',
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+Tamil:wght@400;500;700&display=swap',
    'https://unpkg.com/lucide@latest'
];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});
