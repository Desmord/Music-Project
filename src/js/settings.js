export const selects = {
  nav: {
    home: `#home`,
    search: `#search`,
    discover: `#discover`,
    navButtons: `.nav__button`,
  },
  pages: {
    homePage: `.homepage`,
    searchPage: `.search`,
    discoverPage: `.discover`,
  },
  musicList: `.music-list`,
  searchButton: `.search__button`,
  search: {
    searchBar: `.search__search-bar`,
    searchButton: `.search__button`,
  }
};


export const classes = {
  activeButton: `nav__button--active`,
  activePage: `page--active`,
  notActivePage: `page--not-active`,
};



// for testing only
export const songs = [{
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

