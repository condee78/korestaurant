/* eslint-disable */
const assert = require("assert");

Feature("Unliking Restaurants");

Before((I) => {
  I.amOnPage("/#/favorite");
});

Scenario("unliking one restaurant", async (I) => {
  I.see("Kamu belum punya restaurant favorite", ".content-items");

  I.amOnPage("/");

  I.seeElement(".resto-item-title a");

  const firstResto = locate(".resto-item-title a").first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstRestoTitle);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.seeElement(".resto-item");

  const likedRestoTitle = await I.grabTextFrom(".resto-item-title a");

  assert.strictEqual(firstRestoTitle, likedRestoTitle);

  I.click(likedRestoTitle);

  I.seeElement("#likeButton");
  I.seeElement(`[aria-label="unlike this resto"]`);

  I.click("#likeButton");

  I.amOnPage("/#/favorite");

  I.see("Kamu belum punya restaurant favorite", ".content-items");
});
