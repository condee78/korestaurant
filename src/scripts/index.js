import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/main-responsive.css";
import "./views/components/nav-bar";
import "./views/components/hero";
import "./views/components/resto-list";

import NavigationDrawer from "./utils/navigation-drawer";

NavigationDrawer.init({
  drawer: document.querySelector(".sidenav"),
  hamburgerMenu: document.querySelector("#menu"),
  mainContent: document.querySelector("#main-content"),
});
