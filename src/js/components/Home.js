import { selects, classes } from '../settings.js';
import { refreshMusicList } from '../utils.js';

class Home {
  constructor(songs) {
    this.dom = {};
    this.songs = songs;

    this.getElements();
    this.initActions();
    this.changeJoinInToUpperCase();
    this.initCategories();
  }

  getElements() {
    this.dom.joinNow = document.querySelector(selects.joinNow);
  }

  initActions() {
    this.dom.joinNow.addEventListener(`click`, () => window.location.hash = `/join-now`);
  }

  changeJoinInToUpperCase() {
    this.dom.joinNow.innerHTML = `${this.dom.joinNow.innerHTML.toUpperCase()}`;
  }

  initCategories() {
    const categories = [];

    for (let song of this.songs) {
      for (let category of song.categories) {
        categories.push(category);
      }
    }

    const uniqeCategories = new Set(categories);
    const selectSection = document.querySelector(selects.categorySection);

    selectSection.innerHTML = `<b>Categoreis: </b>`;

    for (let categorie of uniqeCategories) {

      const newCategorie = document.createElement(`span`);

      newCategorie.innerText = `${categorie}, `;
      newCategorie.addEventListener(`click`, this.handleCategorieClick.bind(this));

      selectSection.appendChild(newCategorie);
    }

  }

  handleCategorieClick(e) {
    const targetActiveStatus = e.target.classList.contains(`category-active`);
    const allCategories = document.querySelectorAll(`${selects.categorySection} span`);

    if (targetActiveStatus) {
      e.target.classList.remove(classes.categorieActive);
      refreshMusicList(this.songs);
    } else {
      for (let categorie of allCategories) { categorie.classList.remove(classes.categorieActive); }
      e.target.classList.add(classes.categorieActive);

      const selectedCategory = e.target.innerHTML.replace(`,`, ``).replace(` `, ``);
      const filtredSongs = this.songs.filter(song =>
        song.categories.some(cat => cat.toLowerCase() === selectedCategory.toLowerCase() ? true : false));

      refreshMusicList(filtredSongs);

    }

  }
}

export default Home;