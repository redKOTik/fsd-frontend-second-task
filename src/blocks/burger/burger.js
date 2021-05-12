import $ from 'jquery';

class Burger {
  constructor(element) {
    this.$header = $(element);
    this.$burger = this.$header.find('.js-burger');
    this.addEvents();
  }

  static init(element) {
    return new this(element);
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
