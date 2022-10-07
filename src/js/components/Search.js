import { selects } from '../settings.js';
import { refreshMusicList } from '../utils.js';

class Search {
  constructor(songs) {
    this.songs = songs;
    this.dom = {};

    this.getElements();
    this.generateCategoriesInSelect();
    this.initActions();
    this.refreshSearchNumber(songs.length);
  }


  getElements() {
    this.dom.searchBar = document.querySelector(selects.search.searchBar);
    this.dom.searchButton = document.querySelector(selects.search.searchButton);
    this.dom.searchResult = document.querySelector(selects.search.searchResult);
    this.dom.searchSelect = document.querySelector(selects.search.searchSelect);
  }


  generateCategoriesInSelect() {
    const categories = [];

    for (let song of this.songs) {
      for (let category of song.categories) {
        categories.push(category);
      }
    }

    const uniqeCategories = new Set(categories);

    const newOption = document.createElement(`option`);

    newOption.value = `notSelected`;
    newOption.innerHTML = ``;

    this.dom.searchSelect.appendChild(newOption);

    for (let categorie of uniqeCategories) {
      const newOption = document.createElement(`option`);

      newOption.value = categorie;
      newOption.innerHTML = categorie;

      this.dom.searchSelect.appendChild(newOption);

    }

  }


  initActions() {

    this.dom.searchButton.addEventListener(`click`, () => {

      if (this.dom.searchBar.value === `` && this.dom.searchSelect.value === `notSelected`) {
        this.refreshSearch(this.songs);
      } else if (this.dom.searchBar.value === `` && this.dom.searchSelect.value !== `notSelected`) {
        this.refreshSearch(this.getMusicListBaseOnOnlyCategory(this.songs));
      } else if (this.dom.searchBar.value !== `` && this.dom.searchSelect.value === `notSelected`) {
        this.refreshSearch(this.getMusicListBaseOnOnlyName(this.songs));
      } else {
        this.refreshSearch(this.getMusicListBaseOnCategoryAndName(this.songs));
      }

    });

  }


  refreshSearch(songs) {
    refreshMusicList(songs);
    this.refreshSearchNumber(songs.length);
  }


  refreshSearchNumber(searchedSongNumber) {
    this.dom.searchResult.innerHTML = `We have found ${searchedSongNumber} songs...`;
  }


  getMusicListBaseOnOnlyCategory(songs) {
    const selectedCategory = this.dom.searchSelect.value;
    const filtredSongs = songs.filter(song =>
      song.categories.some(cat => cat.toLowerCase() === selectedCategory.toLowerCase() ? true : false));

    return filtredSongs;
  }


  getMusicListBaseOnOnlyName(songs) {
    const searchPattern = new RegExp(`${this.dom.searchBar.value.toUpperCase()}`);
    const filterSongs = songs.filter(song => {
      const name = song.filename.split(`-`)[0].replaceAll(`_`, ` `).toUpperCase();

      if (searchPattern.test(name)) {
        return true;
      } else {
        return false;
      }

    });

    return filterSongs;
  }


  getMusicListBaseOnCategoryAndName(songs) {
    return this.getMusicListBaseOnOnlyCategory(this.getMusicListBaseOnOnlyName(songs));
  }

}


export default Search;
