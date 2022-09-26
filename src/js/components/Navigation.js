import { selects, classes } from '../settings.js';

class Navigation {
  constructor() {
    this.dom = {
      nav: {}
    };

    this.getElements();
    this.initActions();
  }

  getElements() {
    this.dom.nav.home = document.querySelector(selects.nav.home);
    this.dom.nav.search = document.querySelector(selects.nav.search);
    this.dom.nav.discover = document.querySelector(selects.nav.discover);

    this.dom.homePage = document.querySelector(selects.pages.homePage);
    this.dom.searchPage = document.querySelector(selects.pages.searchPage);
    this.dom.discoverPage = document.querySelector(selects.pages.discoverPage);
  }

  initActions() {

    this.dom.nav.home.addEventListener(`click`, (e) => {
      this.changeActivButton(e.target);
      this.changeActivePage(this.dom.homePage);
    });

    this.dom.nav.search.addEventListener(`click`, (e) => {
      this.changeActivButton(e.target);
      this.changeActivePage(this.dom.searchPage);
    });

    this.dom.nav.discover.addEventListener(`click`, (e) => {
      this.changeActivButton(e.target);
      this.changeActivePage(this.dom.discoverPage);
    });

  }



  changeActivButton(button) {
    this.clearActiveButton();
    button.classList.add(classes.activeButton);
  }

  clearActiveButton() {
    document.querySelectorAll(selects.nav.navButtons)
      .forEach(button => button.classList.remove(classes.activeButton));
  }



  changeActivePage(page) {
    this.hideActivePage();
    this.activePage(page);
  }

  activePage(page) {
    page.classList.remove(classes.notActivePage);
    page.classList.add(classes.activePage);
  }

  hideActivePage() {
    const activePage = document.querySelector(`.${classes.activePage}`);

    if (activePage) {
      document.querySelector(`.${classes.activePage}`).classList.add(classes.notActivePage);
      document.querySelector(`.${classes.activePage}`).classList.remove(classes.activePage);
    }
  }

}

export default Navigation;