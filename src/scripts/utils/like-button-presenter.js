import FavoriteRestaurantIdb from "../data/favorite-resto-idb";
import {
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
} from "../views/templates/template-creator";

const LikeButtonPresenter = {
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
    this._likeButtonContainer.innerHTML = createUnlikeRestaurantButtonTemplate();

    const likeButton = document.querySelector("#likeButton");
    likeButton.addEventListener("click", async () => {
      FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
      this._renderButton(this._restaurant);
    });
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeRestaurantButtonTemplate();

    const likeButton = document.querySelector("#likeButton");
    likeButton.addEventListener("click", async () => {
      FavoriteRestaurantIdb.putRestaurant(this._restaurant);
      this._renderButton(this._restaurant);
    });
  },
};

export default LikeButtonPresenter;
