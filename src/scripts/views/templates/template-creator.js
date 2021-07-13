const createLikeRestaurantButtonTemplate = () => `
<button aria-label="like this resto" id="likeButton" class="like">
   <i class="far fa-heart" aria-hidden="true"></i>
</button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
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

const createSkeletonRestoTemplate = (count) => {
  let template = "";

  for (let i = 0; i < count; i += 1) {
    template += `
      <article class="resto-item">
        <div class="resto-item-image">
            <img src="./images/placeholder.png" alt="skeleton" class="resto-item-thumbnail" >
        </div>
          <div class="resto-item-content">
              <h3 class="skeleton">Lorem ipsum dolor sit amet</h3>
              <p class="skeleton">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aspernatur, 
              assumenda aut consectetur consequuntur debitis deleniti dicta dolorem dolorum eos exercitatio</p>
              <span class="skeleton">Lorem ipsum</span>
          </div>
      </article>
  `;
  }
  return template;
};

export {
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  pageNotFoundTemplate,
  createSkeletonRestoTemplate,
};
