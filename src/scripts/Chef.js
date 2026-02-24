import Poutine from './Poutine.js';

export default class Chef {
  constructor(element) {
    this.element = element;
    this.menu = [];
    this.container = this.element.querySelector('.chef__order');
    this.init();
  }
  init() {
    const poutines = this.element.querySelectorAll('.js-poutine');
    for (let i = 0; i < poutines.length; i++) {
      const poutine = poutines[i];
      const instance = new Poutine(poutine);
      this.menu.push(instance);
    }

    const btnOrder = this.element.querySelector('.js-btn-order');
    btnOrder.addEventListener('click', this.sendOrder.bind(this));
  }

  sendOrder() {
    this.container.innerText = '';
    var nbPoutine = 0;
    for (let i = 0; i < this.menu.length; i++) {
      const poutine = this.menu[i];
      console.log(poutine.selectedType);
      if (poutine.selectedType != '') {
        nbPoutine += 1;
      }
    }
    console.log(nbPoutine);
    const texteConteneur = document.createElement('p');

    texteConteneur.innerText = `Nombre total de poutine(s) :  ${nbPoutine}`;

    this.container.appendChild(texteConteneur);
  }
}
