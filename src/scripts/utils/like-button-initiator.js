import FavoriteRestaurantIdb from "../data/favorite-resto-idb";
import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from "../views/templates/template-creator";

const LikeButtonInitiator = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton(this._restaurant);
  },

  async _renderButton(restaurant) {
    const { id } = restaurant;

    if (await this._restaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _restaurantExist(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurantById(id);
    return !!restaurant;
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector("#likeButton");
    likeButton.addEventListener("click", async () => {
      FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
      this._renderButton(this._restaurant);
    });
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector("#likeButton");
    likeButton.addEventListener("click", async () => {
      FavoriteRestaurantIdb.putRestaurant(this._restaurant);
      this._renderButton(this._restaurant);
    });
  },
};

export default LikeButtonInitiator;
