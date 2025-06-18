import { router, handleLinks } from "./router.js";

document.addEventListener("DOMContentLoaded", () => {
  handleLinks();
  router();
});
