class FavoriteEmpty extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `

        <h2 class="content-title"><i class="far fa-heart"></i></h2>
        <div class="content-items" id="content-items">
            Kamu belum punya restaurant favorite
        </div>`;
  }
}

customElements.define("favorite-empty", FavoriteEmpty);
