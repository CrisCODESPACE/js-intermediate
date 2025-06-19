import { getAllMovies } from "./api/apiMovies";
import "./assets/styles/main.css";

const app = document.getElementById("app");

async function showMovies() {
  const container = document.createElement("div");
  container.setAttribute("id", "container");
  app.appendChild(container);

  let movies = await getAllMovies();
  movies = movies.results;
  console.log(movies);

  movies.forEach((e) => {
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    card.innerHTML = `<img src="https://image.tmdb.org/t/p/w500/${e.poster_path}">
    <h3>${e.title}</h3>
    <p>${e.release_date}</p>`;
    const favButton = document.createElement("button");
    favButton.textContent = "add to fav";
    favButton.setAttribute("data-id", `${e.id}`);

    favButton.addEventListener("click", () => {
      let currentUser = localStorage.getItem("user");

      if (!currentUser) {
        window.location.href = "login.html";
      } else {
        // funcion put (en mockapi no nos deja hacer patch :( )) para editar el usuario
      }
    });

    container.appendChild(card);
    card.appendChild(favButton);

    //añadir evento al botón
  });
}

showMovies();
