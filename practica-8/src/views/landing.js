import { getAllProducts } from "../api/api";
import "../assets/styles/main.css";
export async function Landing() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <h1>Market</h1>
    
  `;

  const container = document.createElement("div");

  const allProducts = await getAllProducts();
  console.log(allProducts);

  allProducts.forEach((e) => {
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    card.innerHTML = `<img src= ${e.image} />
    <h2>${e.prod_name}</h2>
    <p>${e.description}</p>
    <p>${e.price}</p>`;
    let button = document.createElement("button");
    button.textContent = "Add";

    button.addEventListener("click", () => {
      const product = e;

      let user = localStorage.getItem("currentUser");
      user = JSON.parse(user);
      console.log(user);

      user.shopping_cart.push(product);

      // TODO traer funcion para editar el user y añadir el producto al carrito.
    });

    card.appendChild(button);

    container.appendChild(card);
  });

  app.appendChild(container);
}
