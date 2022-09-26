
// /* global GreenAudioPlayer */
import { songs } from './settings.js';
import { refreshMusicList } from './utils.js';

import Navigation from './components/Navigation.js';
import Search from './components/Search.js';

class App {
  constructor() {
    this.songs = [];

    this.getData();
    this.initNavigation(this.songs);
    this.initSearch(this.songs);

    refreshMusicList(this.songs);


  }

  getData() {
    this.songs = songs;
  }

  initNavigation(songs) {
    new Navigation(songs);
  }

  initSearch(songs) {
    new Search(songs);
  }

}

new App();























// import { createSongsObject } from './utils.js';
// /* global GreenAudioPlayer */





// const wrapper = document.querySelector(`.music-list`);
// const templateHendleBar = Handlebars.compile(wrapper.innerHTML);
// const generateHTML = templateHendleBar({ songs: createSongsObject(songs) });

// document.querySelector(`.music-list`).innerHTML = generateHTML;

// GreenAudioPlayer.init({
//   selector: '.song__track-container', // inits Green Audio Player on each audio container that has class "player"
//   stopOthersOnPlay: true
// });
