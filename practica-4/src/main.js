import "./styles/main.css";

// const form = document.getElementById("my-form");
// const email = document.getElementById("email");
// const preview = document.getElementById("preview");
// const username = document.getElementById("name");
// const select = document.getElementById("country");
// const countryOutput = document.getElementById("selected-country");

// form.addEventListener("submit", (event) => {
//   let currentName = username.value;
//   let currentEmail = email.value;

//   if (currentName === "") {
//     alert("Please, write your name.");
//     event.preventDefault();
//   }
//   if (currentEmail === "") {
//     alert("Please, write your email.");
//     event.preventDefault();
//   }
// });

// // email.addEventListener("input", () => {
// //   preview.textContent = `email: ${email.value} y name: ${username.value}`;
// // });

// select.addEventListener("change", () => {
//   preview.textContent = "Selected country: " + select.value;
// });

// email.addEventListener("focus", () => {
//   // email.style.backgroundColor = "#ccc";
//   email.classList.add("focus");
// });

// email.addEventListener("blur", () => {
//   // email.style.backgroundColor = "white";
//   email.classList.remove("focus");
// });

// const form = document.getElementById("register-form"); // esta variable guarda todo el form

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const username = document.getElementById("username").value;
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;
//   const repPassword = document.getElementById("repeat-password").value;
//   const terms = document.getElementById("terms").checked;
//   let succeed = true;

//   if (username === "") {
//     succeed = false;
//     document.getElementById("error-username").textContent =
//       "username is required";
//   } else {
//     document.getElementById("error-username").textContent = "";
//   }

//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   if (!emailRegex.test(email) || email === "") {
//     succeed = false;
//     document.getElementById("error-email").textContent = "invalid email";
//   } else {
//     document.getElementById("error-email").textContent = "";
//   }

//   if (password.length < 6) {
//     succeed = false;
//     document.getElementById("error-password").textContent =
//       "password must have at least 6 characters";
//   } else {
//     document.getElementById("error-password").textContent = "";
//   }

//   if (password !== repPassword) {
//     succeed = false;
//     document.getElementById("error-repeat").textContent =
//       "password doesn't match";
//   } else {
//     document.getElementById("error-repeat").textContent = "";
//   }

//   if (!terms) {
//     succeed = false;
//     document.getElementById("error-terms").textContent =
//       "accept terms before continue";
//   } else {
//     document.getElementById("error-terms").textContent = "";
//   }

//   if (succeed) {
//     document.getElementById("succeed").textContent = "Register succeed";
//   }
// });

function saludo() {
  console.log("HOLA");
}

// setTimeout(saludo, 2000);

// console.log("hola");

// let saludito = setInterval(saludo, 2000);

// console.log(saludito);

// let boton = document.createElement("button");
let app = document.getElementById("app");

// boton.textContent = "Parar intervalo";

// boton.addEventListener("click", () => {
//   // clearInterval(saludito);
//   console.log("intervalo parado");
// });

// app.appendChild(boton);

// setTimeout(() => {
//   console.log("parando intervalo");
//   clearInterval(saludito);
// }, 10000);

function run() {
  console.log(1);
  setTimeout(() => {
    console.log(2);
  }, 1000);
  setTimeout(() => {
    console.log(3);
  }, 0);
  console.log(4);
}

// let count = 5;

// let countdown = setInterval(() => {
//   console.log(count);
//   count--;

//   if (count === 0) {
//     clearInterval(countdown);
//     console.log("fin de la cuenta atrás");
//   }
// }, 1000);

let estructura = document.createElement("div");
estructura.setAttribute("id", "estructura");

let bombilla1 = document.createElement("div");
bombilla1.setAttribute("id", "b1");
bombilla1.setAttribute("class", "apagada");
let bombilla2 = document.createElement("div");
bombilla2.setAttribute("id", "b2");
bombilla2.setAttribute("class", "apagada");
let bombilla3 = document.createElement("div");
bombilla3.setAttribute("id", "b3");
bombilla3.setAttribute("class", "apagada");

app.appendChild(estructura);
estructura.appendChild(bombilla1);
estructura.appendChild(bombilla2);
estructura.appendChild(bombilla3);

function semaforo() {
  // setInterval(() => {
  //   bombilla1.classList.add("rojo");
  //   bombilla2.classList.remove("naranja");
  //   bombilla3.classList.remove("verde");
  // }, 1000);
  // setInterval(() => {
  //   bombilla1.classList.remove("rojo");
  //   bombilla2.classList.add("naranja");
  //   bombilla3.classList.remove("verde");
  // }, 2000);
  // setInterval(() => {
  //   bombilla1.classList.remove("rojo");
  //   bombilla2.classList.remove("naranja");
  //   bombilla3.classList.add("verde");
  // }, 3000);
  // if (bombilla1.classList.contains("rojo")) {
  //   setTimeout(() => {
  //     bombilla2.classList.add("naranja");
  //     bombilla1.classList.remove("red");
  //   }, 2000);
  // } else if (bombilla2.contains("naranja")) {
  //   setTimeout(() => {
  //     bombilla3.classList.add("verde");
  //     bombilla2.classList.remove("naranja");
  //   }, 2000);
  // } else if (bombilla3.contains("verde")) {
  //   setTimeout(() => {
  //     bombilla1.classList.add("rojo");
  //     bombilla3.classList.remove("verde");
  //   }, 2000);
  // } else {
  //   console.log("error");
  // }
  // setTimeout(() => {
  //   bombilla1.classList.add("rojo");
  // }, 0);
  // setTimeout(() => {
  //   bombilla1.classList.remove("rojo");
  //   bombilla2.classList.add("naranja");
  //   bombilla3.classList.remove("verde");
  // }, 2000);
  // setTimeout(() => {
  //   bombilla1.classList.remove("rojo");
  //   bombilla2.classList.remove("naranja");
  //   bombilla3.classList.add("verde");
  // }, 3000);
}

// setInterval(semaforo, 2000);

function iniciar() {
  let estado = "verde";

  function cambioEstado() {
    switch (estado) {
      case "verde":
        estado = "naranja";
        bombilla2.classList.add("naranja");
        bombilla1.classList.remove("verde");
        setTimeout(cambioEstado, 3000);
        break;
      case "naranja":
        estado = "rojo";
        bombilla3.classList.add("rojo");
        bombilla2.classList.remove("naranja");
        setTimeout(cambioEstado, 3000);
        break;
      case "rojo":
        estado = "verde";
        bombilla1.classList.add("verde");
        bombilla3.classList.remove("rojo");
        setTimeout(cambioEstado, 3000);
        break;
    }
  }

  cambioEstado();
}

iniciar();
