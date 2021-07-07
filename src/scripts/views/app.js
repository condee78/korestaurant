import NavigationDrawer from "../utils/navigation-drawer";
import UrlParser from "../routes/url-parser";
import routes from "../routes/routes";
import { pageNotFoundTemplate } from "./templates/template-creator";

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

    try {
      this._mainContent.innerHTML = await page.render();
      await page.afterRender();
    } catch (error) {
      // shows information or redirect to homepage if routes not found
      this._mainContent.innerHTML = pageNotFoundTemplate();
    }
  }
}

export default App;
