const V = 'sampify-v5';
const CORE = ['./', 'index.html', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(V).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
// кэш сначала, в фоне обновляем (работает офлайн, в том числе для файлов three.js)
self.addEventListener('fetch', e => {
  const r = e.request;
  if(r.method !== 'GET') return;
  e.respondWith(caches.match(r).then(hit => {
    const net = fetch(r).then(res => {
      if(res && (res.ok || res.type === 'opaque')){ const cp = res.clone(); caches.open(V).then(c => c.put(r, cp)); }
      return res;
    }).catch(() => hit);
    return hit || net;
  }));
});
