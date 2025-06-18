const baseUrl = import.meta.env.VITE_API_BASE;

// newUser request (POST)

export async function createNewUser(parametro) {
  const url = `${baseUrl}/users`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: parametro.name,
        email: parametro.email,
        password: parametro.password,
        phone_number: parametro.phone,
      }),
    });

    if (!response.ok) {
      throw new Error("error", error, response.status);
    }

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error("Error", error);
  }
}

// GET --> Login request

export async function getAllUsers() {
  const url = `${baseUrl}/users`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("error", response.status, error);
    }

    const allUsers = await response.json();

    return allUsers;
  } catch (error) {
    console.error(error);
  }
}

// GET request --> Products

export async function getAllProducts() {
  const url = `${baseUrl}/products`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("error", response.status);
    }

    const products = await response.json();

    return products;
  } catch (error) {
    console.error(error);
  }
}
