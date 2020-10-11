const CACHE_NAME = "submitionpwa1-v1";

const urlsToCache = [
  "/",
  "/nav.html",
  "/index.html",
  "/pages/home.html",
  "/pages/article.html",
  "/pages/about.html",
  "/pages/contact.html",
  "/css/materialize.min.css",
  "/js/materialize.min.js",
  "/js/nav.js",
  "/js/sw-register.js",
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
  "/assets/icons/android-icon-36x36.png",
  "/assets/icons/android-icon-48x48.png",
  "/assets/icons/android-icon-72x72.png",
  "/assets/icons/android-icon-96x96.png",
  "/assets/icons/android-icon-144x144.png",
  "/assets/icons/android-icon-192x192.png",
  "/assets/icons/icon256x256.png",
  "/assets/icons/icon384x384.png",
  "/assets/icons/icon512x512.png",
  "/assets/icons/ms-icon-144x144.png",
  "/assets/icons/apple-icon-57x57.png",
  "/assets/icons/apple-icon-60x60.png",
  "/assets/icons/apple-icon-72x72.png",
  "/assets/icons/apple-icon-76x76.png",
  "/assets/icons/apple-icon-114x114.png",
  "/assets/icons/apple-icon-120x120.png",
  "/assets/icons/apple-icon-144x144.png",
  "/assets/icons/apple-icon-152x152.png",
  "/assets/icons/favicon-16x16.png",
  "/assets/icons/favicon-32x32.png",
  "/assets/icons/favicon-96x96.png",
  "css/style.css",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    }),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request, { cacheName: CACHE_NAME }).then((response) => {
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

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName != CACHE_NAME) {
            console.log(`ServiceWorker: cache ${cacheName} dihapus`);
            return caches.delete(cacheName);
          }
        }),
      );
    }),
  );
});
