import { Landing } from "./views/landing.js";
import { Register } from "./views/register.js";
import { Login } from "./views/login.js";

const routes = {
  "/": Landing,
  "/login": Login,
  "/register": Register,
};

export function router() {
  const path = window.location.pathname;
  const view = routes[path] || Landing;
  view();
}

export function navigate(path) {
  window.history.pushState({}, "", path);
  router();
}

export function handleLinks() {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigate(e.target.getAttribute("href"));
    }
  });

  window.addEventListener("popstate", router);
}
