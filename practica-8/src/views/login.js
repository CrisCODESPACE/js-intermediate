import { getAllUsers } from "../api/api";

export function Login() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <h1>Login</h1>
    <form id="login-form">
      <input type="email" placeholder="email" id="login-email" required />
      <input type="password" placeholder="password" id="login-password" required />
      <button type="submit">Login</button>
    </form>
  `;

  const form = document.getElementById("login-form");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;

    try {
      const users = await getAllUsers();
      const currentUser = users.find(
        (e) => e.email === email && e.password === password
      );
      console.log(currentUser);
      if (currentUser) {
        currentUser.active = true;
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        alert("Login successful");
        window.location.href = "landing.html";
      } else {
        alert("login fail");
      }
    } catch (error) {
      console.error(error);
    }
  });
}
