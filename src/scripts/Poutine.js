export default class Poutine {
  constructor(element) {
    this.element = element;
    this.types = this.element.querySelectorAll('.js-boutton');
    this.selectedType = '';
    this.init();
  }
  init() {
    console.log(this.types);
    for (let i = 0; i < this.types.length; i++) {
      const type = this.types[i];
      type.addEventListener('click', this.selectType.bind(this));
    }
  }

  selectType(event) {
    for (let i = 0; i < this.types.length; i++) {
      const type = this.types[i];
      type.classList.remove('is-active');
    }

    const poutineType = event.currentTarget;
    poutineType.classList.toggle('is-active');
    this.selectedType = poutineType.innerText;
    this.updatePhoto();
  }
  updatePhoto() {
    const imgPoutine = this.element.querySelector('.js-poutineImg');
    imgPoutine.classList.add('is-active');
    imgPoutine.src = `assets/images/${this.selectedType}.png`;
  }
}
