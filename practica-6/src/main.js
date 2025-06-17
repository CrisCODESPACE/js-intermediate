const baseUrl = "https://api.themoviedb.org/3/";
const apiKey = import.meta.env.VITE_API_KEY;
const imgBase = "https://image.tmdb.org/t/p/w500/";

let app = document.getElementById("app");
let containerLista = document.createElement("div");
containerLista.setAttribute("id", "container");

app.appendChild(containerLista);

//http://api.themoviedb.org/3/series?api_key=3298348645738764643263932#fragmento
//https://host:port/ruta a seguir dentro del server?parametros opcionales#fragmento

// funcion para traerme todas las peliculas de la url now_playing

async function getAllMovies() {
  const url = `${baseUrl}movie/now_playing?api_key=${apiKey}&language=es-ES`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("error", error);
    }

    const data = await response.json();

    console.log(data);

    showMovies(data.results);
  } catch (error) {
    console.error(error);
  }
}

getAllMovies();

// funcion para mostrar las peliculas en el navegador/viewport

function showMovies(movies) {
  movies.forEach((movie) => {
    const card = document.createElement("div");

    card.innerHTML = `<img src="${imgBase}${movie.poster_path}" alt="${movie.title}"/><h2>Movie title: ${movie.title}</h2>
        <p>${movie.overview}</p>`;

    containerLista.appendChild(card);
  });
}
