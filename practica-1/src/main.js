// let divPrincipal = document.getElementById("app");
// console.log(divPrincipal);

// let elementosDeLista = document.getElementsByClassName("item");
// console.log(elementosDeLista);

// let parrafo = document.getElementsByName("parrafo");
// console.log(parrafo);

// let primerListItem = document.querySelector("li");
// console.log(primerListItem);

// let divs = document.querySelectorAll(".container");
// console.log(divs);

// Acceder a contenido de texto y elementos html a través de js

// let app = document.getElementById("app");
// console.log(app);

// console.log(app.innerHTML);

// app.innerHTML = "<p>Soy contenido generado desde JavaScript!.</p>";

// app.textContent = "<p>HOLA!</p>";

// let parrafo = document.querySelector("p");
// parrafo.setAttribute("class", "parrafo-primero");
// parrafo.setAttribute("id", "paragraph");

// parrafo.setAttribute("class", "cambio-de-clase");

// console.log(parrafo.getAttribute("class"));

// let divPrincipal = document.getElementById("app");
// divPrincipal.setAttribute("class", "modo-claro");

// let title = document.querySelector("h1");
// title.classList.add("modo-claro");

// // let button = document.querySelector(".theme");

// let viejoDiv = document.createElement("div");
// viejoDiv.textContent = "HOLA SOY UN DIV";

// divPrincipal.appendChild(viejoDiv);

// divPrincipal.removeChild(title);

// let superNuevoDiv = document.createElement("div");
// superNuevoDiv.textContent = "Soy un div super nuevo";

// viejoDiv.parentNode.replaceChild(superNuevoDiv, viejoDiv);

// PRACTICA

// accedemos al div con id app para tener un punto de acceso al DOM
let divPrincipal = document.getElementById("app");

// creamos un título a través del método createElement
let titulo = document.createElement("h1");
titulo.textContent = "Título de la página";
divPrincipal.appendChild(titulo);

// creamos un div para una "card"
let card = document.createElement("div");
let card2 = document.createElement("div");
divPrincipal.appendChild(card);
divPrincipal.appendChild(card2);

// creamos un subtitulo
let subtitle = document.createElement("h2");
let subtitle2 = document.createElement("h2");
subtitle.textContent = "Soy un subtítulo";
subtitle2.textContent = "Soy un subtítulo";
card.appendChild(subtitle);
card2.appendChild(subtitle2);

// creamos un párrafo
let parrafo = document.createElement("p");
let parrafo2 = document.createElement("p");
parrafo.textContent = "Lorem ipsum dolor sit amet.";
parrafo2.textContent = "Lorem ipsum dolor sit amet.";
card.appendChild(parrafo);
card2.appendChild(parrafo2);

// le damos atributo al elemento card
card.setAttribute("class", "card");
card2.setAttribute("class", "card");
subtitle.setAttribute("class", "subtitle");
subtitle2.setAttribute("class", "subtitle");
parrafo.setAttribute("class", "parrafo");
parrafo2.setAttribute("class", "parrafo");

// div extra
let divExtra = document.createElement("div");
divExtra.innerHTML = "<p>HOLA SOY UN DIV EXTRA</p>";

// eliminacion de la segunda card
// divPrincipal.removeChild(card2);

//reemplazo de hijos
card2.parentNode.replaceChild(divExtra, card2);

// inserción img desde JS
let img = document.createElement("img");
img.setAttribute(
  "src",
  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
);
img.setAttribute("alt", "imagen de perfil");

card.insertBefore(img, card.firstChild);

// card.appendChild(img);

// creacion de una lista
let ul = document.createElement("ul");
let li = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");
li.textContent = "soy un elemento de lista";
li2.textContent = "soy un elemento de lista";
li3.textContent = "soy un elemento de lista";

divPrincipal.appendChild(ul);
ul.appendChild(li);
ul.appendChild(li2);
ul.appendChild(li3);

let li4 = document.createElement("li");
li4.textContent = "yo soy el primer elemento de lista";

// ul.insertBefore(li4, ul.firstChild);

ul.prepend(li4);
