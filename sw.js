// Babie Blue — Clinical Asset Service Worker (Network-First & Cache-Safe)
const CACHE_NAME = 'babieblue-clinical-v2026.9';

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
      .catch(() => {})
  );
});

self.addEventListener('fetch', () => {
  // Always let the browser fetch fresh network assets
});

