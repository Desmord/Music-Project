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
  },
  joinNow:`.join-now__button`,
};

export const db = {
  songs: 'songs',
  url: '//' + window.location.hostname + (window.location.hostname == 'localhost' ? ':3131' : ''),
  dateStartParamKey: 'date_gte',
  dateEndParamKey: 'date_lte',
  notRepeatParam: 'repeat=false',
  repeatParam: 'repeat_ne=false',
};

export const classes = {
  activeButton: `nav__button--active`,
  activePage: `page--active`,
  notActivePage: `page--not-active`,
};

