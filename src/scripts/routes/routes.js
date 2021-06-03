import Home from "../views/pages/home";
import DetailResto from "../views/pages/detail-resto";
import Favorite from "../views/pages/favorite";

const routes = {
  "/": Home,
  "/detail/:id": DetailResto,
  "/favorite": Favorite,
};

export default routes;
