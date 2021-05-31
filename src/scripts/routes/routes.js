import Home from "../views/pages/home";
import DetailResto from "../views/pages/detail-resto";

const routes = {
  "/": Home,
  "/detail/:id": DetailResto,
  "/favorite": DetailResto,
};

export default routes;
