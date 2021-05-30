class RestoItem extends HTMLElement {
  set value(data) {
    this._data = data;
    this.render();
  }

  render() {
    this.innerHTML = `
            <article class="resto-item">
            <div class="resto-item-image">
                <img src="${this._data.pictureId}" alt="${
      this._data.name
    }" class="lazyload resto-item-thumbnail">
                  <div class="resto-item-tag">
                    <div class="resto-item-city">
                      ${this._data.city}
                    </div>
                  </div>
            </div>
                <div class="resto-item-content">
                    <h3 class="resto-item-title">${this._data.name}</h3>
                    
                    <p class="resto-item-description">${this._data.description.substring(
                      1,
                      180
                    )}...</p>
                    <i class="fas fa-star"></i>
                    <span class="resto-item-rating">${this._data.rating}</span>
                </div>
            </article>`;
  }
}

customElements.define("resto-item", RestoItem);