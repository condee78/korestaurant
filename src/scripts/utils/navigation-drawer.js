const NavigationDrawer = {
  init({ drawer, hamburgerMenu, mainContent }) {
    drawer.addEventListener("click", (event) => {
      if (event.target.classList.contains("sidenav-link")) {
        this._closeDrawer(event, drawer);
      }
    });

    hamburgerMenu.addEventListener("click", (event) => {
      this._openDrawer(event, drawer);
    });

    mainContent.addEventListener("click", (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _openDrawer(event, drawer) {
    event.preventDefault();
    drawer.classList.toggle("open");
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove("open");
  },
};

export default NavigationDrawer;
