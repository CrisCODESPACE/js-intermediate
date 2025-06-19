const baseUsersUrl =
  "https://68511f618612b47a2c08b47f.mockapi.io/api/codespace/users";

async function createNewUser(parametro) {
  const url = `${baseUsersUrl}`;
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
    return response.ok;
  } catch (error) {
    console.error(error);
  }
}

//Formulario sign up

function registerForm() {
  const signupApp = document.getElementById("signup-app");
  const form = document.createElement("form");
  form.innerHTML = `<input type="text" id="name" required placeholder="Name">
    <input type="email" id="email" required placeholder="Email">
    <input type="password" id="password" required placeholder="Password">
    <input type="tel" id="phone_number" required placeholder="Phone number">
    <button type="submit">Sign up</button>
    <small id="alert"></small>`;

  signupApp.appendChild(form);

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone_number").value;

    //aqui van validaciones

    const userData = {
      name,
      email,
      password,
      phone,
    };
    try {
      let response = await createNewUser(userData);
      const alert = document.getElementById("alert");
      if (response) {
        alert.textContent = "Usuario creado correctamente";
        window.location.href = "login.html";
      } else {
        alert.textContent = "Error";
      }
    } catch (error) {
      console.error(error);
    }
  });
}

registerForm();
