class NavBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const itemNavigation = `
        <li class="nav-item">
            <a href="index.html" class="nav-link">Home</a>
        </li>
        <li class="nav-item">
            <a href="#" class="nav-link">Favorite</a>
        </li>
        <li class="nav-item">
            <a href="https://www.instagram.com/aziesland/" class="nav-link" target="_blank">About</a>
        </li>
    `;

    const itemSideNavigation = `
        <li class="sidenav-item">
          <a href="index.html" class="sidenav-link">Home</a>
        </li>
        <li class="sidenav-item">
          <a href="#" class="sidenav-link">Favorite</a>
        </li>
        <li class="sidenav-item">
          <a href="https://www.instagram.com/aziesland/" class="nav-link" target="_blank">About</a>
        </li>
    `;

    this.innerHTML = `
    <nav>
        <h1 class="nav-logo">Koresto</h1>
        
        <ul class="nav-list">
            ${itemNavigation}
        </ul> 
        <a class="nav-menu" id="menu" href="#" aria-label="menu">
            <i class="fas fa-bars"></i>
        </a>
    </nav>

    <ul class="sidenav">
        ${itemSideNavigation}
    </ul> 

    `;
  }
}

customElements.define("nav-bar", NavBar);
