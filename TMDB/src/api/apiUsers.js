const baseUsersUrl =
  "https://68511f618612b47a2c08b47f.mockapi.io/api/codespace/users";

// req getAllUsers

export async function getAllUsers() {
  const url = `${baseUsersUrl}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("error", error, response.status);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function addToFavorites(movieId) {
  let user = JSON.parse(localStorage.getItem("user"));
  const url = `${baseUsersUrl}/${user.id}`;
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        favorites,
      }),
    });
  } catch (error) {}
}
