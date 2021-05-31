import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/main-responsive.css";

import App from "./views/app";

const app = new App({
  drawer: document.querySelector(".sidenav"),
  hamburgerMenu: document.querySelector("#menu"),
  mainContent: document.querySelector("#main-content"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
});
