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
    this.dom.searchResult = document.querySelector(selects.search.searchResult);
  }

  initActions() {

    this.dom.searchButton.addEventListener(`click`, () => {

      if (this.dom.searchBar.value === ``) {
        this.dom.searchResult.innerHTML = `We have found 0 songs...`;
      } else {

        const searchPattern = new RegExp(`${this.dom.searchBar.value.toUpperCase()}`);
        const filterSongs = this.songs.filter(song => {
          const name = song.filename.split(`-`)[0].replaceAll(`_`, ` `).toUpperCase();

          if (searchPattern.test(name)) {
            return true;
          } else {
            return false;
          }

        });

        this.dom.searchResult.innerHTML = `We have found ${filterSongs.length} songs...`;

        refreshMusicList(filterSongs);

      }

    });

  }

}


export default Search;
