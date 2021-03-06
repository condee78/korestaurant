import CONFIG from "../../globals/config";
import LikeButtonPresenter from "../../utils/like-button-presenter";
import FormReviewInitiator from "../../utils/form-review-initiator";
import imagePlaceholder from "../../../public/images/placeholder.png";

class RestoDetail extends HTMLElement {
  set value(data) {
    this._data = data;
    this.render();
    this._likeButtonPresenter();
    this._formReviewInitiator();
  }

  async _likeButtonPresenter() {
    await LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      restaurant: this._data,
    });
  }

  _generateIconRating() {
    const rating = [];

    for (let i = 0; i < parseInt(Math.floor(this._data.rating)); i++) {
      rating.push('<i class="fas fa-star"></i>');
    }
    return rating;
  }

  _formReviewInitiator() {
    FormReviewInitiator.init({
      form: this.querySelector("#review-form"),
      elementResult: this.querySelector("#response-result"),
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

    this.innerHTML = `
    <section class="content detail-resto-titles" id="content">
        <h2 class="content-title">${this._data.name}</h2>
        <p class="content-subtitle">${this._data.address}, ${
      this._data.city
    }</p>
        <div>
        <img src="${imagePlaceholder}" data-src="${
      CONFIG.BASE_IMAGE_URL("large") + this._data.pictureId
    }" alt="${this._data.name}"  class="lazyload detail-image-header"></src>
        </div>
    </section>
    <article class="detail-resto-abouts">
        <h3 class="detail-article-title">About the restaurant</h3>
        <p class="detail-article-description">${this._data.description}</p>
    </article>
    <aside class="detail-resto-insights">
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
                <li>${this._data.categories.map(
                  (category) => category.name
                )}</li>
                <li>${this._data.city}</li>
            </ul>
        </div>
      </div>
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
  
    <div class="review-form-group">
    <h3 class="detail-article">Make a Review Now!</h3>
    <form class="review-form" id="review-form">
        <input type="hidden" name="id" value="${this._data.id}">
        <div class="review-form-input">
            <label for="name">Name</label>
            <input type="text" name="name" id="name" autocomplete="off">
        </div>
        <div class="review-form-input">
            <label for="review">Review</label>
            <textarea name="review" id="review"></textarea>
        </div>
        <button type="submit" id="button-review">Add Review</button>
        <div id="response-result" class="response-result"></div>
    </form>
    </div>
    </article>
            `;
  }
}

customElements.define("resto-detail", RestoDetail);
