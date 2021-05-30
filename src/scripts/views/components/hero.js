class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
          <div class="hero">
              <div class="hero-color-filter">
                <div class="hero-inner">
                  <h1 class="hero-title">Serve Delicious Korean Foods</h1>
                  <p class="hero-subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sit ipsam maiores debitis, tempora itaque? Sed minima similique vero doloribus voluptatum, odit nisi.</p>
                </div>
              </div>
          </div>
          `;
  }
}

customElements.define("hero-element", Hero);
