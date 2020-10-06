const CACHE_NAME = "submitionpwa1-v2";

var urlsToCache = [
  "/",
  "/nav.html",
  "/index.html",
  // "/pages/home.html",
  "/pages/article.html",
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
  "/assets/images/articlemars.jpg",
  "/assets/images/articlemars2.jpg",
  "/assets/icons/icon192x192.png",
  "/assets/icons/icon256x256.png",
  "/assets/icons/icon384x384.png",
  "/assets/icons/icon512x512.png",
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(urlsToCache);
    }),
  );
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
