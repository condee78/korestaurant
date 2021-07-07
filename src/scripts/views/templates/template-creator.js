const createLikeButtonTemplate = () => `
<button aria-label="like this resto" id="likeButton" class="like">
   <i class="far fa-heart" aria-hidden="true"></i>
</button>
`;

const createLikedButtonTemplate = () => `
<button aria-label="unlike this resto" id="likeButton" class="like">
  <i class="fas fa-heart" aria-hidden="true"></i>
</button>
`;

const pageNotFoundTemplate = () => `
<div class="container">
  <section class="content" id="content">
    <h2 class="content-title">Sorry, Page Not Found!</h2>
    <p class="content-subtitle">
      <div class="content-items" id="content-items">
      You can go to <a href="#" >Home</a> to find other interesting Restaurants.
      </div>
    </p>
  </section>
</div>
`;

export {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  pageNotFoundTemplate,
};
