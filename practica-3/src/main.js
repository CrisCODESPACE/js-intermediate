import "./styles/main.css";

let app = document.getElementById("app");

// addEventListener + removeEventListener

let button = document.createElement("button");
button.textContent = "Click me!";

function clickHandler(evento) {
  console.log("Se ha hecho click en el botón.");
  console.log(evento);
}

button.addEventListener("click", clickHandler);

button.removeEventListener("click", clickHandler);

// app.appendChild(button);

// DRAG AND DROP
// const dragItem = document.getElementById("draggable");
// const dropZone = document.getElementById("drop");

// dragItem.addEventListener("dragstart", (e) => {
//   e.dataTransfer.setData("text/plain", e.target.id);
// });

// dropZone.addEventListener("dragover", (e) => {
//   e.preventDefault();
// });

// dropZone.addEventListener("drop", (e) => {
//   e.preventDefault();
//   const id = e.dataTransfer.getData("text/plain");
//   const draggedItem = document.getElementById(id);
//   // dropZone.appendChild(draggedItem);
// });

// DELEGACION DE EVENTOS

// let ul = document.getElementById("lista");

// ul.addEventListener("click", (evento) => {
//   console.log(evento);

//   if (evento.target.tagName === "LI") {
//     console.log(`Has hecho click en ${evento.target.textContent}`);
//   }
// });

// app.addEventListener("click", (event) => {
//   if (event.target.classList.contains("delete")) {
//     event.target.parentElement.remove();
//   }
// });

// app.addEventListener("click", () => {
//   console.log("Se ha hecho click en el elemento PADRE");
// });

// let hijo = document.getElementById("hijo");

// hijo.addEventListener(
//   "click",
//   (e) => {
//     console.log("Se ha hecho click en el elemento HIJO");
//   },
//   false
// );

let shadowHost = document.getElementById("miElementoAnfitrion");
let shadowRoot = shadowHost.attachShadow({ mode: "open" });

shadowRoot.innerHTML = `
   <p>Hola, yo vivo en el shadowDOM</p>`;
