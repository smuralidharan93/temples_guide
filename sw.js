// Temple Guide Service Worker v3 — Full Offline + Update Strategy
const CACHE_VERSION = 'temple-guide-v3';
const STATIC_CACHE = `${CACHE_VERSION}-static`;
const DYNAMIC_CACHE = `${CACHE_VERSION}-dynamic`;

const STATIC_ASSETS = [
    './',
    './index.html',
    './style.css',
    './script.js',
    './data.js',
    './divyadesam_data.js',
    './manifest.json',
    './icon.svg',
    './offline.html'
];

const FONT_URLS = [
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+Tamil:wght@400;500;700&display=swap'
];

// Install — cache all static assets
self.addEventListener('install', (event) => {
    console.log('[SW] Installing v3...');
    event.waitUntil(
        caches.open(STATIC_CACHE)
            .then(cache => {
                console.log('[SW] Caching static assets');
                return cache.addAll(STATIC_ASSETS);
            })
            .then(() => self.skipWaiting()) // Activate immediately
    );
});

// Activate — clean up old caches
self.addEventListener('activate', (event) => {
    console.log('[SW] Activating v3...');
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys
                    .filter(key => key !== STATIC_CACHE && key !== DYNAMIC_CACHE)
                    .map(key => {
                        console.log('[SW] Removing old cache:', key);
                        return caches.delete(key);
                    })
            );
        }).then(() => self.clients.claim()) // Take control of all pages
    );
});

// Fetch — Cache-first for static, Network-first for dynamic
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);

    // Skip non-GET requests
    if (request.method !== 'GET') return;

    // Skip chrome-extension and other non-http requests
    if (!url.protocol.startsWith('http')) return;

    // Strategy: Cache-first for static assets and fonts
    if (isStaticAsset(url) || isFontRequest(url)) {
        event.respondWith(cacheFirst(request));
        return;
    }

    // Strategy: Network-first for everything else (API calls, images, etc.)
    event.respondWith(networkFirst(request));
});

// Cache-first strategy
async function cacheFirst(request) {
    const cached = await caches.match(request);
    if (cached) return cached;

    try {
        const response = await fetch(request);
        if (response.ok) {
            const cache = await caches.open(STATIC_CACHE);
            cache.put(request, response.clone());
        }
        return response;
    } catch (err) {
        // Return offline page for navigation requests
        if (request.mode === 'navigate') {
            return caches.match('./offline.html');
        }
        return new Response('Offline', { status: 503 });
    }
}

// Network-first strategy
async function networkFirst(request) {
    try {
        const response = await fetch(request);
        if (response.ok) {
            const cache = await caches.open(DYNAMIC_CACHE);
            cache.put(request, response.clone());
        }
        return response;
    } catch (err) {
        const cached = await caches.match(request);
        if (cached) return cached;

        if (request.mode === 'navigate') {
            return caches.match('./offline.html');
        }

        // Return a placeholder for images
        if (request.destination === 'image') {
            return caches.match('./icon.svg');
        }

        return new Response('Offline', { status: 503 });
    }
}

function isStaticAsset(url) {
    const staticExts = ['.html', '.css', '.js', '.json', '.svg', '.png', '.ico'];
    return url.origin === self.location.origin &&
        staticExts.some(ext => url.pathname.endsWith(ext));
}

function isFontRequest(url) {
    return url.hostname.includes('fonts.googleapis.com') ||
        url.hostname.includes('fonts.gstatic.com');
}

// Listen for skip-waiting message from the app
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});
