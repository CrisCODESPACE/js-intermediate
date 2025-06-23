// const CACHE_NAME = "mi-cache";
// const ARCHIVOS_GUARDAR = ["/", "index.html", "main.js", "style.css"];

// // instalación del SW

// self.addEventListener("install", (evento) => {
//   evento.waitUntil(
//     caches.open(CACHE_NAME).then((cache) => {
//       console.log("SW cacheando archivos...");
//       return cache.addAll(ARCHIVOS_GUARDAR);
//       // aquí irán los archivos a cachear cuando los tengamos (suele ser un array con los nombres de los archivos a cachear).
//     })
//   );
// });

// // Limpieza versiones viejas si hiciera falta

// self.addEventListener("activate", (evento) => {
//   console.log("SW activado...");

//   // aqui pondriamos la lógica de qué queremos limpiar y cómo
// });

// // intercepción de las peticiones

// self.addEventListener("fetch", (evento) => {
//   console.log(evento.request.url);
//   evento.respondWith(
//     caches
//       .match(evento.request)
//       .then((respuestaCache) => {
//         if (respuestaCache) {
//           return respuestaCache;
//         }
//         return fetch(evento.request);
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//   );
// });

// // mostrar notificaciones push desde SW

// self.addEventListener("push", (evento) => {
//   console.log("SW push recibido...");

//   let datos;

//   try {
//     datos = evento.data.json(); // ✅ CORRECTO
//   } catch (error) {
//     datos = {
//       titulo: "Notificación",
//       mensaje: "Tienes un nuevo mensaje",
//     };
//   }

//   const opciones = {
//     body: datos.mensaje,
//     icon: "https://th.bing.com/th/id/OIP.h5jyzm0JUabTNZMr8ZwYnwHaHa?rs=1&pid=ImgDetMain",
//   };

//   evento.waitUntil(self.registration.showNotification(datos.titulo, opciones));
// });
