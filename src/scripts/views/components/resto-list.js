import "./resto-item";
import restoDataSample from "../../../DATA.json";

class RestoList extends HTMLElement {
  constructor() {
    super();
    this._data = restoDataSample.restaurants;
    this.render();
  }

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
