import CONFIG from "../../globals/config";
import LikeButtonInitiator from "../../utils/like-button-initiator";

class RestoDetail extends HTMLElement {
  set value(data) {
    this._data = data;
    this.render();
    this._likeButtonInitiator();
  }

  _generateIconRating() {
    const rating = [];

    for (let i = 0; i < parseInt(Math.floor(this._data.rating)); i++) {
      rating.push('<i class="fas fa-star"></i>');
    }
    return rating;
  }

  async _likeButtonInitiator() {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      restaurant: this._data,
    });
  }

  render() {
    const menu = `
      <div class="detail-menu">
                    <div class="menu-title-group">
                        <i class="fas fa-pizza-slice"></i>
                        <h2 class="menu-title">Food</h2>
                    </div>
                    <ul class="menu-list">
                        ${this._data.menus.foods
                          .map(
                            (food) => `<li class="menu-item">${food.name}</li>`
                          )
                          .join(" ")}
                    <ul>
                </div>
                <div class="detail-menu">
                    <div class="menu-title-group">
                        <i class="fas fa-cocktail"></i>
                        <h2 class="menu-title">Drinks</h2>
                    </div>
                    <ul class="menu-list">
                        ${this._data.menus.drinks
                          .map(
                            (drink) =>
                              `<li class="menu-item">${drink.name}</li>`
                          )
                          .join(" ")}
                    </ul>
                </div>
                `;

    const insight = `
    <div class="detail-insight-group">
    <h3 class="detail-article-title insight-title">Resto Insight</h3>
    <div class="insight-header">    
    <ul class="insight-list">
        <li>Rating</li>
        <li>Customers</li>
        <li>Categories</li>
        <li>City</li>
    </ul>
    </div>
    <div class="insight-value">
        <ul class="insight-list-value">  
            <li>
            ${this._generateIconRating()
              .map((item) => item)
              .join("")}
            </li>
            <li>${this._data.customerReviews.length} review(s)</li>
            <li>${this._data.categories.map((category) => category.name)}</li>
            <li>${this._data.city}</li>
        </ul>
    </div>
    </div>
    `;

    this.innerHTML = `
    <section class="content detail-resto-titles" id="content">
        <h2 class="content-title">${this._data.name}</h2>
        <p class="content-subtitle">${this._data.address}, ${
      this._data.city
    }</p>
        <div>
        <img src="${
          CONFIG.BASE_IMAGE_URL("large") + this._data.pictureId
        }" alt="${this._data.name}"  class="detail-image-header"></src>
        </div>
    </section>
    <article class="detail-resto-abouts">
        <h3 class="detail-article-title">About the restaurant</h3>
        <p class="detail-article-description">${this._data.description}</p>
    </article>
    <aside class="detail-resto-insights">
            ${insight}
    </aside>
    <article class="detail-resto-menus">
        <h3 class="detail-article-title">The menu</h3>
        <div class="detail-article-description">
            ${menu}
        </div>
    </article>
    <article class="detail-resto-reviews">
    <div id="review-group">
    <h3 class="detail-article">Customer Reviews</h3>
    ${this._data.customerReviews
      .map(
        (review) => `
        <div class="review-group">
            <div class="review-profile">
                <i class="fas fa-user-circle"></i>
            </div>
            <div class="review-body">
                <h3 class="review-consumer-name">${review.name}</h3>
                <small class="review-date-post">${review.date}</small>
                <p class="review-content">${review.review}</p>
            </div>
        </div>
        `
      )
      .join("")}
    </div>
    </article>
            `;
  }
}

customElements.define("resto-detail", RestoDetail);
