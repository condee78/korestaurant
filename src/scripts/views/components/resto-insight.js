class RestoInsight extends HTMLElement {
  set value(data) {
    this._data = data;
    this.render();
  }

  render() {
    console.log("test", this._data);
    this.innerHTML = `
    <div class="title">
        <ul class="menu-list">
            <li>Categories</li>
            <li>Rating</li>
        </ul>
    </div>
    <div class="description">
        <ul class="menu-list">
            <li>${this._data.categories.map((category) => category.name)}</li>
            <li>${this._data.rating}</li>
        </ul>
    <div>
    
    `;
  }
}

customElements.define("resto-insight", RestoInsight);
