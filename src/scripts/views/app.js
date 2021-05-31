import NavigationDrawer from "../utils/navigation-drawer";
import UrlParser from "../routes/url-parser";
import routes from "../routes/routes";

class App {
  constructor({ drawer, hamburgerMenu, mainContent }) {
    this._drawer = drawer;
    this._hamburgerMenu = hamburgerMenu;
    this._mainContent = mainContent;

    this._initialAppShell();
  }

  _initialAppShell() {
    NavigationDrawer.init({
      drawer: this._drawer,
      hamburgerMenu: this._hamburgerMenu,
      mainContent: this._mainContent,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._mainContent.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
