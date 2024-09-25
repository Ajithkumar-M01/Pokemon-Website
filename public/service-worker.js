const CACHE_NAME = 'pokemon-cache-v1';

self.addEventListener('install', event => {
  console.log('Service Worker installing.');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
      })
  );
});

self.addEventListener('fetch', event => {
  console.log('Fetching:', event.request.url);
  if (event.request.url.includes('pokeapi.co/api/v2/pokemon')) {
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          if (response) {
            console.log('Serving from cache:', event.request.url);
            return response; // Return the cached response if found
          }
          return fetch(event.request).then(
            response => {
              if (!response || response.status !== 200 || response.type !== 'basic') {
                return response;
              }
              const responseToCache = response.clone();
              caches.open(CACHE_NAME)
                .then(cache => {
                  console.log('Caching new resource:', event.request.url);
                  cache.put(event.request, responseToCache);
                });
              return response;
            }
          );
        })
    );
  }
});
