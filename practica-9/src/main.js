// const button = document.getElementById("btn-notify");
// // Registro del SW

// if ("serviceWorker" in navigator && "Notification" in window) {
//   navigator.serviceWorker
//     .register("/service-worker.js")
//     .then((reg) => {
//       console.log("Service worker registrado con éxito", reg);

//       if (Notification.permission === "granted") {
//         throwNotification(reg);
//       } else if (Notification.permission !== "denied") {
//         Notification.requestPermission().then((permission) => {
//           if (permission === "granted") {
//             throwNotification(reg);
//           } else {
//             console.warn("Permiso denegado");
//           }
//         });
//       }
//     })
//     .catch((error) => {
//       console.error("Error al registrar el SW", error);
//     });
// }

// // Permiso para notificaciones push

// // if ("Notificaciones" in window && Notification.permission !== "granted") {
// //   Notification.requestPermission().then((result) => {
// //     if (result === "granted") {
// //       console.log("podemos mandar notificaciones push");
// //       throwNotification();
// //       //func
// //     } else {
// //       console.warn("Permiso denegado para notificaciones push");
// //     }
// //   });
// // }

// function throwNotification(reg) {
//   // navigator.serviceWorker.getRegistration().then((reg) => {
//   if (reg) {
//     reg.showNotification("HOLA", {
//       body: "Esto es una notificacion push",
//       icon: "https://th.bing.com/th/id/OIP.h5jyzm0JUabTNZMr8ZwYnwHaHa?rs=1&pid=ImgDetMain",
//     });
//   }
// }

// // document.addEventListener("DOMContentLoaded", () => {
// //   button.addEventListener("click", () => {
// //     if (Notification.permission === "granted") {
// //       navigator.serviceWorker.getRegistration().then((reg) => {
// //         if (reg) throwNotification(reg);
// //       });
// //     } else if (Notification.permission !== "denied") {
// //       Notification.requestPermission().then((permission) => {
// //         if (permission === "granted") {
// //           navigator.serviceWorker.getRegistration().then((reg) => {
// //             if (reg) throwNotification(reg);
// //           });
// //         } else {
// //           console.warn("Permiso denegado");
// //         }
// //       });
// //     }
// //   });
// // });

// // FACTORY PATTERN EJEMPLO

// // function crearUsuario(nombre, rol) {
// //   return {
// //     nombre,
// //     rol,
// //     saludar() {
// //       console.log(`Hola, soy ${nombre} y soy ${rol}`);
// //     },
// //   };
// // }

// // const user1 = crearUsuario("Cristina", "admin");
// // const user2 = crearUsuario("Juan", "user");
// // const user3 = crearUsuario("Belén", "admin");
// // user1.saludar();
// // user2.saludar();
// // user3.saludar();

// // estructura básica de una clase

// // class Persona {
// //   constructor(name, lastName) {
// //     this.nombre = name;
// //     this.apellido = lastName;
// //   }

// //   saludar() {
// //     console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
// //   }
// // }

// // const persona1 = new Persona("Cristina", "Martín");
// // console.log(persona1);
// // persona1.saludar();

// class Animal {
//   constructor(nombre) {
//     this.nombreDeAnimal = nombre;
//   }

//   hablar() {
//     console.log(`${this.nombreDeAnimal} hace un sonido`);
//   }
// }

// const animal1 = new Animal("Mambo");
// console.log(animal1);

// animal1.hablar();

// class Perro extends Animal {
//   constructor(nombre, especie) {
//     super(nombre);
//     this.especie = especie;
//   }
//   hablar() {
//     console.log(`${this.nombreDeAnimal} dice guau`);
//   }
// }

// const miPerro = new Perro("Mambo", "perro");
// console.log(miPerro);
// miPerro.hablar();

// // COMPOSICION

// const puedeHablar = {
//   hablar() {
//     console.log(`${this.nombre} está hablando`);
//   },
// };

// const puedeCorrer = {
//   correr() {
//     console.log(`${this.nombre} puede correr`);
//   },
// };

// function crearPerro(nombre) {
//   let perro = { nombre };

//   Object.assign(perro, puedeCorrer, puedeHablar);
//   return perro;
// }

// const perreteComposicion = crearPerro("Mambito");
// perreteComposicion.hablar();
// perreteComposicion.correr();

// // OBSERVER PATTERN

// class Clima {
//   constructor() {
//     this.genteSuscrita = [];
//     this.temperatura = 20;
//   }

//   // Metodo para que la gente se suscriba
//   suscribir(persona) {
//     this.genteSuscrita.push(persona);
//   }

//   // metodo para avisar a todos los suscriptores del cambio de temperatura
//   notificar() {
//     this.genteSuscrita.forEach((miembro) =>
//       miembro.actualizar(this.temperatura)
//     );
//   }

//   nuevaTemperatura(temp) {
//     console.log("Ha cambiado la temperatura");
//     this.temperatura = temp;
//     this.notificar();
//   }
// }

// class Persona {
//   constructor(nombre) {
//     this.nombre = nombre;
//   }

//   actualizar(temperatura) {
//     console.log(
//       `${this.nombre}: la temperatura se ha actualizado en su zona. ${temperatura}ºC`
//     );
//   }
// }

// const chayanne = new Persona("Chayanne");
// const chenoa = new Persona("Chenoa");

// const clima = new Clima();

// clima.suscribir(chayanne);
// clima.suscribir(chenoa);

// clima.nuevaTemperatura(28);

// console.log(clima);

// const bola = document.getElementById("bola");
// let posX = 0;
// const velocidad = 2;

// function animar() {
//   posX += velocidad;

//   if (posX > window.innerWidth - 50) {
//     posX = 0;
//   }

//   bola.style.left = posX + "px";

//   requestAnimationFrame(animar);
// }

// animar();

const slides = document.querySelectorAll(".slide");
console.log(slides);
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentIndex = 0;

function mostrarSlide(index) {
  slides.forEach((foto, i) => {
    foto.classList.toggle("visible", i === index);
  });
}

prevButton.addEventListener("click", () => {
  currentIndex--;

  if (currentIndex < 0) currentIndex = slides.length - 1;
  mostrarSlide(currentIndex);
});

nextButton.addEventListener("click", () => {
  currentIndex++;

  if (currentIndex >= slides.length) currentIndex = 0;
  mostrarSlide(currentIndex);
});

mostrarSlide(currentIndex);
