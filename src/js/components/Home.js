import { selects } from '../settings.js';

class Home {
  constructor() {
    this.dom = {};

    this.getElements();
    this.initActions();
    this.changeJoinInToUpperCase();
  }

  getElements() {
    this.dom.joinNow = document.querySelector(selects.joinNow);
  }

  initActions() {
    this.dom.joinNow.addEventListener(`click`, () => window.location.hash = `/join-now`);
  }

  changeJoinInToUpperCase() {
    this.dom.joinNow.innerHTML = `${this.dom.joinNow.innerHTML.toUpperCase()}`;
  }
}

export default Home;