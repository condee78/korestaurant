import RestaurantDbSource from "../../data/restaurantdb-source";
import UrlParser from "../../routes/url-parser";

import "../components/resto-detail";
import { createLikeRestaurantButtonTemplate } from "../templates/template-creator";

const DetailResto = {
  async render() {
    return `
    <div class="container">
      <resto-detail></resto-detail>
      <div id="likeButtonContainer"></div>
    </div>`;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailRestaurant = await RestaurantDbSource.detailRestaurant(url.id);
    const detailRestaurantElement = document.querySelector("resto-detail");
    detailRestaurantElement.value = detailRestaurant;

    const likeButtonContainer = document.querySelector("#likeButtonContainer");
    likeButtonContainer.innerHTML = createLikeRestaurantButtonTemplate();
  },
};

export default DetailResto;
