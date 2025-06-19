const baseMoviesUrl = "https://api.themoviedb.org/3/movie";
const API_KEY = import.meta.env.VITE_API_KEY;

// req movies

export async function getAllMovies() {
  const url = `${baseMoviesUrl}/popular?api_key=${API_KEY}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("error", error, response.status);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}
