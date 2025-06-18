import { createNewUser } from "../api/api";

export function Register() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <h1>Sign up</h1>
    <form id="register-form">
      <input type="text" placeholder="name" id="name" required />
      <input type="email" placeholder="email" id="email" required />
      <input type="password" placeholder="password" id="password" required />
      <input type="tel" placeholder="phone" id="phone" required />
      
      <button type="submit">Register</button>
    </form>
  `;

  const form = document.getElementById("register-form");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let phone = document.getElementById("phone").value;

    const userData = {
      name,
      email,
      password,
      phone,
    };

    await createNewUser(userData);
    window.location.href = "/login";
  });
}
