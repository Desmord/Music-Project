import { selects } from '../settings.js'

class Home {
  constructor() {
    this.dom = {};

    this.getElements();
    this.initActions();
  }

  getElements() {
    this.dom.joinNow = document.querySelector(selects.joinNow);
  }

  initActions() {
    this.dom.joinNow.addEventListener(`click`, () => window.location.hash = `/join-now`);
  }
}

export default Home;