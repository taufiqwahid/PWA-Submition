const CACHE_NAME = "submitionpwa1";

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
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(urlsToCache);
    }),
  );
});
