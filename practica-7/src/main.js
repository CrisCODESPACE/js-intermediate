// const baseUrl = "https://jsonplaceholder.typicode.com";

// GET request

async function getAllPosts() {
  const url = `${baseUrl}/posts`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.log(response.status);
      throw new Error("error", error);
    }

    console.log(response.status);
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// getAllPosts();

// POST request

async function postNewResource() {
  const url = `${baseUrl}/posts`;
  try {
    const response = await fetch(url, {
      method: "POST", // type of request
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "New Post",
        body: "this is a new post",
        userId: 2,
      }),
    });

    if (!response.ok) {
      throw new Error("error", response.status);
    }

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

// postNewResource();

// PUT request

async function putPost() {
  const url = `${baseUrl}/posts/1`;
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: "replaced post new content",
        userId: 1,
      }),
    });

    if (!response.ok) {
      throw new Error("error", response.status, error);
    }

    console.log(response.status);

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// putPost();

// PATCH request

async function patchPost() {
  const url = `${baseUrl}/posts/1`;

  try {
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "title edited",
      }),
    });

    if (!response.ok) {
      throw new Error("error", error, response.status);
    }

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// patchPost();

// DELETE request

async function deletePost() {
  const url = `${baseUrl}/posts/1`;

  try {
    const response = await fetch(url, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("error", error, response.status);
    }

    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
}

// deletePost();

//MOCKAPI REQUESTS

const baseUrl = "https://68511f618612b47a2c08b47f.mockapi.io/api/codespace";

async function getUsers() {
  const url = `${baseUrl}/users`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("error", error, response.status);
    }

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// getUsers();

// USER REGISTER MOCKAPI

// post new user request

async function createNewUser(userData) {
  const url = `${baseUrl}/users`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userData.name,
        email: userData.email,
        password: userData.password,
      }),
    });

    if (!response.ok) {
      throw new Error(response.status);
    }

    const data = await response.json();

    alert("usuario registrado con éxito");
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// createNewUser();

// login request

async function loginUser(password) {
  const url = `${baseUrl}/users`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("error");
    }

    const allUsers = await response.json();

    let user = allUsers.find((u) => u.password === password);

    if (user) {
      alert("log in succesful");
      console.log(user);
    } else {
      alert("email or password doesn't match");
    }
  } catch (error) {
    console.error(error);
  }
}

// all users request

async function getAllUsers() {
  const url = `${baseUrl}/users`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("error");
    }

    const allUsers = await response.json();

    allUsers.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = `${user.name}`;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "X";

      deleteButton.addEventListener("click", () => {
        deleteUser(user.id);
        li.remove();
      });

      li.appendChild(deleteButton);

      userList.appendChild(li);
    });
  } catch (error) {
    console.error(error);
  }
}

async function deleteUser(id) {
  const url = `${baseUrl}/users/${id}`;

  try {
    const response = await fetch(url, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("error");
    }
  } catch (error) {
    console.error(error);
  }
}

// HTML to JS

// REGISTER FORM

const registerForm = document.getElementById("register-form");

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (name === "") {
    alert("name must contain something");
  }

  if (email === "") {
    alert("email must contain something");
  }

  if (password === "") {
    alert("password must contain something");
  }

  const userData = {
    name,
    email,
    password,
  };

  createNewUser(userData);
});

// LOGIN FORM

const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  /// VERIFICACIONES

  loginUser(password);
});

// UNORDENATED LIST

const userList = document.getElementById("user-list");

getAllUsers();
