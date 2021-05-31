import $ from 'jquery';

class Burger {
  constructor(element) {
    this.$header = $(element);
    this.$burger = this.$header.find('.js-burger');
  }

  init() {
    this.addEvents();
  }

  addEvents() {
    this.$burger.on('click.burgerIcon', this.handleBurgerClick.bind(this));
  }

  handleBurgerClick() {
    this.$burger.toggleClass('burger_active');
    this.$header.find('.header__menu').toggleClass('header__menu_active');
  }

  destroy() {
    this.$burger.off('click.burgerIcon');
  }
}

export default Burger;
