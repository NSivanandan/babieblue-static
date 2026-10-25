// Babie Blue — Offline-Ready Clinical Service Worker (AdSense-Safe Network-First Architecture)
const CACHE_NAME = 'babieblue-clinical-v2026.4';
const CORE_ASSETS = [
  '/assets/style.css',
  '/assets/flagship-protocol.css',
  '/assets/flagship-tools.js',
  '/assets/search-index.json',
  '/assets/images/babieblue-og-clinical.svg',
  '/assets/images/clinical/clinical-obstetrics-pathway.svg',
  '/assets/images/clinical/clinical-pediatric-neonatal.svg',
  '/assets/images/clinical/clinical-maternal-medicine.svg',
  '/calculators/due-date-calculator/',
  '/calculators/hcg-calculator/',
  '/calculators/ovulation-calculator/',
  '/baby-care/infant-fever-acetaminophen-ibuprofen-dosing-chart/',
  '/baby-care/wake-windows-nap-transitions-by-age/',
  '/baby-care/newborn-poop-color-texture-chart/'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // Never intercept Google AdSense, DoubleClick, Analytics, or external ad auction requests
  if (
    url.origin !== self.location.origin ||
    url.hostname.includes('googlesyndication') ||
    url.hostname.includes('doubleclick') ||
    url.hostname.includes('googletagmanager') ||
    url.hostname.includes('google-analytics') ||
    url.hostname.includes('googleadservices')
  ) {
    return;
  }

  // Static CSS/JS/SVG/JSON assets: Stale-While-Revalidate for 0ms load
  if (url.pathname.startsWith('/assets/') || url.pathname.startsWith('/wp-content/')) {
    event.respondWith(
      caches.match(req).then((cached) => {
        const networkFetch = fetch(req)
          .then((res) => {
            if (res && res.status === 200) {
              const copy = res.clone();
              caches.open(CACHE_NAME).then((c) => c.put(req, copy));
            }
            return res;
          })
          .catch(() => cached);
        return cached || networkFetch;
      })
    );
    return;
  }

  // HTML Documents: Network-First so AdSense pageviews & auctions are always fresh online, with Offline Cache Fallback for 3 AM emergencies
  if (req.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          if (res && res.status === 200) {
            const copy = res.clone();
            caches.open(CACHE_NAME).then((c) => c.put(req, copy));
          }
          return res;
        })
        .catch(() => caches.match(req))
    );
  }
});
