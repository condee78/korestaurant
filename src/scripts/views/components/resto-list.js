import "./resto-item";

class RestoList extends HTMLElement {
  set value(data) {
    this._data = data;
    this.render();
  }

  render() {
    this._data.forEach((item) => {
      const restoItem = document.createElement("resto-item");
      this.appendChild(restoItem);
      restoItem.value = item;
    });
  }
}

customElements.define("resto-list", RestoList);
