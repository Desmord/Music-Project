/* global GreenAudioPlayer */
import { selects } from './settings.js';
/**
 * 
 * @param {src,categorie,rank} songs 
 * @returns array [{name,author,categories,rank,src}]
 */
export const createSongsObject = (songs) => {
  let newSongs = [];

  songs.forEach(song => {
    const name = song.filename.split(`-`)[0].replaceAll(`_`, ` `);
    const author = song.filename.split(`-`)[1].replaceAll(`_`, ` `).replace(`.mp3`, ``).toUpperCase();

    const categories = song.categories.map(categorie => `${categorie},`);
    categories[categories.length - 1] = song.categories[categories.length - 1];

    newSongs.push({
      name: name,
      author: author,
      categories: categories,
      rank: song.ranking,
      src: `songs/${song.filename}`,
    });

  });

  return newSongs;
};

const getSongElement = (song) => {

  let categories = ``;

  song.categories.forEach(category => categories += `${category} `);

  return `        <div class="song">
  <div class="song__tittle">${song.author} - ${song.name}</div>
  <div class="song__track-container">
      <audio>
          <source src="${song.src}" type="audio/mpeg">
      </audio>
  </div>
  <div class="song__info">
      <div class="song__categories">Categories: ${categories}</div>
      <div class="song__ranking">#${song.rank} in the rankings</div>
  </div>
</div>`;

};


export const refreshMusicList = (songs) => {
  const wrapper = document.querySelector(selects.musicList);
  const formatedSongs = createSongsObject(songs);

  wrapper.innerHTML = ``;

  let generateHTML = ``;

  formatedSongs.forEach(song => { generateHTML += getSongElement(song); });

  wrapper.innerHTML = generateHTML;

  GreenAudioPlayer.init({
    selector: '.song__track-container', // inits Green Audio Player on each audio container that has class "player"
    stopOthersOnPlay: true
  });

};
