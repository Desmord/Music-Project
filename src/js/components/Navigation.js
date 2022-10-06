import { selects, classes } from '../settings.js';
import { refreshMusicList } from '../utils.js';

class Navigation {
  constructor(songs) {
    this.dom = {
      nav: {}
    };
    this.songs = songs;

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
    this.dom.categorySelect = document.querySelector(selects.categorySection);
  }

  initActions() {

    this.dom.nav.home.addEventListener(`click`, (e) => {
      this.changeActivButton(e.target);
      this.changeActivePage(this.dom.homePage);
      this.changeActivePage(this.dom.categorySelect);

      refreshMusicList(this.songs);
    });

    this.dom.nav.search.addEventListener(`click`, (e) => {
      this.changeActivButton(e.target);
      this.changeActivePage(this.dom.searchPage);

      refreshMusicList(this.songs);
    });

    this.dom.nav.discover.addEventListener(`click`, (e) => {
      this.changeActivButton(e.target);
      this.changeActivePage(this.dom.discoverPage);

      const randomNumber = parseInt(Math.random() * (this.songs.length - 0) + 0);
      const randomSong = this.songs[randomNumber];

      refreshMusicList([randomSong]);
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