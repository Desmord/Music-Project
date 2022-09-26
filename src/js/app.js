import { createSongsObject } from './utils.js';
/* global GreenAudioPlayer */

const songs = [{
  src: `songs/At_The_Top_-_David_Renda.mp3`,
  categories: [`jeden`],
  rank: 1
},
{
  src: `songs/BASS_TRAP_-_Steve_Oxen.mp3`,
  categories: [`jeden`, `piec`],
  rank: 2
},
{
  src: `songs/Silly_Feet_-_David_Renda.mp3`,
  categories: [`jeden`, `cztery`],
  rank: 3
},
{
  src: `songs/Western_Adventures_-_David_Fesliyan.mp3`,
  categories: [`jeden`, `trzy`],
  rank: 4
}];



const wrapper = document.querySelector(`.music-list`);
const templateHendleBar = Handlebars.compile(wrapper.innerHTML);
const generateHTML = templateHendleBar({ songs: createSongsObject(songs) });

document.querySelector(`.music-list`).innerHTML = generateHTML;

GreenAudioPlayer.init({
  selector: '.song__track-container', // inits Green Audio Player on each audio container that has class "player"
  stopOthersOnPlay: true
});
