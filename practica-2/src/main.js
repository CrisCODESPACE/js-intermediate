let app = document.getElementById("app");

// let boton = document.createElement("button");
// boton.textContent = "Pulsa aquí";

// app.appendChild(boton);

// sintaxis de addEventListener() (método para agregar una escucha de evento a un elemento).

// nombreElemento.addEventListener("nombreEvento", funcionCallback)
/* nombreElemento.addEventListener("nombreEvento", () => {
    bloque de código a ejecutar  
}) */

// boton.addEventListener("mousemove", () => {
//   console.log("HOLA!");
// });

// CALCULADORA BÁSICA

// creación de los botones
// let boton1 = document.createElement("button");
// boton1.textContent = 7;
// let boton2 = document.createElement("button");
// boton2.textContent = 8;
// let boton3 = document.createElement("button");
// boton3.textContent = 9;
// let boton4 = document.createElement("button");
// boton4.textContent = "*";
// let boton5 = document.createElement("button");
// boton5.textContent = 4;
// let boton6 = document.createElement("button");
// boton6.textContent = 5;
// let boton7 = document.createElement("button");
// boton7.textContent = 6;
// let boton8 = document.createElement("button");
// boton8.textContent = "-";
// let boton9 = document.createElement("button");
// boton9.textContent = 1;
// let boton10 = document.createElement("button");
// boton10.textContent = 2;
// let boton11 = document.createElement("button");
// boton11.textContent = 3;
// let boton12 = document.createElement("button");
// boton12.textContent = "+";
// let boton13 = document.createElement("button");
// boton13.textContent = 0;
// let boton14 = document.createElement("button");
// boton14.textContent = "=";
// let boton15 = document.createElement("button");
// boton15.textContent = "C";

// let botones = [
//   boton1,
//   boton2,
//   boton3,
//   boton4,
//   boton5,
//   boton6,
//   boton7,
//   boton8,
//   boton9,
//   boton10,
//   boton11,
//   boton12,
//   boton13,
//   boton14,
//   boton15,
// ];

// let operacion = "";

// botones.forEach((boton) => {
//   boton.addEventListener("click", () => {
//     let valor = boton.textContent;

//     // console.log(!isNaN(Number(valor)));
//     // if (!isNaN(Number(valor))) {
//     //   valor = Number(valor);
//     //   console.log(valor);
//     //   operacion += valor;
//     //   console.log(operacion);
//     // } else if (valor === "=") {
//     //   let resultado = eval(operacion);
//     //   operacion = resultado;
//     //   console.log(resultado);
//     // } else {
//     //   valor = boton.textContent;
//     //   console.log(valor);
//     //   operacion += valor;
//     //   console.log(operacion);
//     // }

//     if (valor === "=") {
//       let resultado = eval(operacion);
//       operacion = resultado;
//       console.log(resultado);
//     } else if (valor === "C") {
//       operacion = 0;
//       console.log(operacion);
//     } else {
//       try {
//         operacion += valor;
//         console.log(operacion);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   });
//   app.appendChild(boton);
// });

// console.log(operacion);

// pantalla para resultados
// const pantalla = document.createElement("input");
// pantalla.readOnly = true;
// app.appendChild(pantalla);

// let operation = "";

// botones.forEach((boton) => {
//   boton.addEventListener("click", () => {
//     if (boton.textContent === "=") {
//       try {
//         pantalla.value = eval(operation);
//         operation = pantalla.value;
//       } catch {
//         pantalla.value = "Err";
//       }
//     } else if (boton.textContent === "C") {
//       operation = "";
//       pantalla.value = "0";
//     } else {
//       operation += boton.textContent;
//       pantalla.value = operation;
//     }
//   });

//   app.appendChild(boton);
// });
// let txt = document.createElement("p");
// txt.textContent = "Lorem ipsum dolor sit amet.";
// txt.setAttribute("class", "primario");
// app.appendChild(txt);

// CAMBIAR EL TEXTO DE UN ELEMENTO
// txt.addEventListener("mouseover", () => {
//   // txt.textContent === "Lorem ipsum dolor sit amet."
//   //   ? (txt.textContent = "Texto Cambiado")
//   //   : (txt.textContent = "Lorem ipsum dolor sit amet.");
//   if (txt.textContent === "Lorem ipsum dolor sit amet.") {
//     txt.textContent = "Texto Cambiado";
//   } else {
//     txt.textContent = "Lorem ipsum dolor sit amet.";
//   }
//   txt.classList.toggle("secundario");
// });

// CAMBIO DE COLOR DE FONDO

// app.addEventListener("click", (evento) => {
//   // app.style.backgroundColor = "aqua";
//   app.classList.toggle("nueva-clase");
//   console.log("Este evento es de tipo:", evento.type);
//   console.log(evento.target);
//   console.log(evento);
//   app.removeEventListener("click");
// });

// function handler() {
//   console.log("Soy un mensaje que solo se mostrará una vez");

//   app.removeEventListener("click", handler);
// }

// app.addEventListener("click", handler);

// document.addEventListener("keyup", (objetoEvento) => {
//   console.log(`La tecla pulsada es ${objetoEvento.key}`);
//   console.log(`La tecla pulsada es ${objetoEvento.code}`);
// });

//

const dragItem = document.getElementById("draggable");
const dropZone = document.getElementById("drop");

dragItem.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text/plain", e.target.id);
});

dropZone.addEventListener("dragover", (e) => {
  e.preventDefault();
});

dropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  const id = e.dataTransfer.getData("text/plain");
  const draggedItem = document.getElementById(id);
  dropZone.appendChild(draggedItem);
});
