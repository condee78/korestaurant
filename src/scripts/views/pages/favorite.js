import FavoriteRestaurantIdb from "../../data/favorite-resto-idb";

import "../components/favorite-empty";

const Favorite = {
  async render() {
    return `
    <div class="container">
        <section class="content" id="content">
            <h2 class="content-title">Favorite Restaurant</h2>
            <p class="content-subtitle"></p>
            <div class="content-items" id="content-items">
                <resto-list></resto-list>
            </div>
        </section>
    </div>`;
  },

  async afterRender() {
    const listRestaurant = await FavoriteRestaurantIdb.getAllRestaurants();
    const restoListElement = document.querySelector("resto-list");
    if (listRestaurant.length > 0) {
      restoListElement.value = listRestaurant;
    } else {
      document.querySelector(".content-subtitle").innerHTML =
        "<favorite-empty></favorite-empty>";
    }
  },
};

export default Favorite;
