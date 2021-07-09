/* eslint-disable */
const assert = require("assert");

Feature("Liking Restaurants");

Before((I) => {
  I.amOnPage("/#/favorite");
});

Scenario("showing empty liked restaurants", (I) => {
  I.see("Kamu belum punya restaurant favorite", ".content-items");
});

Scenario("liking one restaurant", async (I) => {
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
});
