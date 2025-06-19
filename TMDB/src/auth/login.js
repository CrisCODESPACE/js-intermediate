import { getAllUsers } from "../api/apiUsers";

function login() {
  const loginApp = document.getElementById("login-app");
  const form = document.createElement("form");

  form.innerHTML = `<input type="email" id="login-email" placeholder="email" />
    <input type="password" id="login-password" placeholder="password"/>
    <button type="submit">login</button>`;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;

    const users = await getAllUsers();

    const match = users.find(
      (e) => e.email === email && e.password === password
    );

    if (match) {
      alert("inicio de sesión exitoso");
      match.active = true;
      localStorage.setItem("user", JSON.stringify(match));
      window.location.href = "index.html";
    } else {
      alert("email o password equivocados");
      document.getElementById("login-email").value = "";
      document.getElementById("login-password").value = "";
    }
  });

  loginApp.appendChild(form);
}

login();
