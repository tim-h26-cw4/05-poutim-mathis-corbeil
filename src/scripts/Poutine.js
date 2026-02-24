export default class Poutine {
  constructor(element) {
    this.element = element;
    this.type = this.element.querySelectorAll('.js-boutton');

    this.init();
  }
  init() {
    console.log('Juno Poutine');
  }
}
