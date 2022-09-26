import { selects } from '../settings.js';
import { refreshMusicList } from '../utils.js';

class Search {
  constructor(songs) {
    this.songs = songs;
    this.dom = {};

    this.getElements();
    this.initActions();
  }


  getElements() {
    this.dom.searchBar = document.querySelector(selects.search.searchBar);
    this.dom.searchButton = document.querySelector(selects.search.searchButton);
  }

  initActions() {

    this.dom.searchButton.addEventListener(`click`, () => {
      const searchPattern = new RegExp(`${this.dom.searchBar.value.toUpperCase()}`);

      const filterSongs = this.songs.filter(song => {
        const name = song.src.replace(`songs/`, ``).split(`-`)[0].replaceAll(`_`, ` `).toUpperCase();

        if (searchPattern.test(name)) {
          return true;
        } else {
          return false;
        }

      });

      refreshMusicList(filterSongs);

    });

  }

}


export default Search;
