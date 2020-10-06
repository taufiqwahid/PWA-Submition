const CACHE_NAME = "submitionpwa1-v1";

var urlsToCache = [
  "/",
  "/nav.html",
  "/index.html",
  "/pages/home.html",
  "/pages/about.html",
  "/pages/contact.html",
  "/css/materialize.min.css",
  "/js/materialize.min.js",
  "/js/nav.js",
  "/manifest.json",
  "/assets/images/matahari.jpg",
  "/assets/images/merkurius.jpg",
  "/assets/images/venus.jpg",
  "/assets/images/bumi.jpg",
  "/assets/images/mars.jpg",
  "/assets/images/jupiter.jpg",
  "/assets/images/saturnus.jpg",
  "/assets/images/uranus.jpg",
  "/assets/images/neptunus.jpg",
];

self.addEventListener("install", function (event) {
  caches.open(CACHE_NAME).then(function (cache) {
    return cache.addAll(urlsToCache);
  });
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches
      .match(event.request, { cacheName: CACHE_NAME })
      .then(function (response) {
        if (response) {
          console.log("ServiceWorker: Gunakan Asset dari Cache", response.url);
          return response;
        }
        console.log(
          "ServiceWorker: Memuat Asset dari Server :",
          event.request.url,
        );
        return fetch(event.request);
      }),
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheName != CACHE_NAME) {
            console.log("ServiceWorker: cache " + cacheName + " dihapus");
            return caches.delete(cacheName);
          }
        }),
      );
    }),
  );
});
