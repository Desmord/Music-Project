// import utils from './utils.js';
/* global GreenAudioPlayer */

const songs = [{
  author: `AUTOR JEDEN`,
  name: `nazwa jeden`,
  src: `songs/At_The_Top_David_Renda.mp3`,
  categories: [`jeden`, `dwa`],
  rank: 1
},
{
  author: `AUTOR DWA`,
  name: `nazwa dwa`,
  src: `songs/BASS_TRAP_Steve_Oxen.mp3`,
  categories: [`jeden`, `piec`],
  rank: 2
},
{
  author: `AUTOR TRZY`,
  name: `nazwa trzy`,
  src: `songs/Silly_Feet_David_Renda.mp3`,
  categories: [`jeden`, `cztery`],
  rank: 3
},
{
  author: `AUTOR CZTERY`,
  name: `nazwa cztery`,
  src: `songs/Western_Adventures_-_David_Fesliyan.mp3`,
  categories: [`jeden`, `trzy`],
  rank: 4
}];

const wrapper = document.querySelector(`.music-list`);
const templateHendleBar = Handlebars.compile(wrapper.innerHTML);
const generateHTML = templateHendleBar({ songs: songs });

document.querySelector(`.music-list`).innerHTML = generateHTML;

GreenAudioPlayer.init({
  selector: '.song__track-container', // inits Green Audio Player on each audio container that has class "player"
  stopOthersOnPlay: true
});