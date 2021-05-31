import "../components/nav-bar";
import "../components/hero";
import "../components/resto-list";
import RestaurantDbSource from "../../data/restaurantdb-source";

const Home = {
  async render() {
    return `
    <hero-element></hero-element>
    <div class="container">
    <section class="content" id="content">
        <h2 class="content-title">Explore Restaurant</h2>
        <div class="content-items" id="content-items">
            <resto-list></resto-list>
        </div>
    </section>
    </div>`;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSource.listRestaurant();
    const restoListElement = document.querySelector("resto-list");
    restoListElement.value = restaurants;
  },
};

export default Home;
