let cacheName = "RECEITAS";
let filesToCache = ["/", "/index.html",
  "/css/style.css", "carnes", "doces", "massas", "saladas", "/receitas/carne", "/receitas/carne copy 2", "/receitas/carne copy 3", "/receitas/carne copy", "/receitas/doce copy 2", "/receitas/doce copy 3", "/receitas/doce copy", "/receitas/doce", "/receitas/massa copy 2", "/receitas/massa", "/receitas/massa copy 3", "/receitas/massa copy", "/receitas/salada copy 2", "/receitas/salada copy 3", "/receitas/salada copy", "/receitas/salada", "/imgs/carnes.jpg", "/imgs/doces.png", "/imgs/erick_jacquin.jpg", "/imgs/felipe bronze.jpg", "/imgs/massas.jpg", "/imgs/Rita Lobo.jpg", "/imgs/roberto-strongoli.jpg", "/imgs/saladas.jpg", "logo.png"];

/* inicializando a service worker e fazendo o 
download do conteúdo da aplicação */
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* disponibilizando o conteudo quando estiver offline */
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});

