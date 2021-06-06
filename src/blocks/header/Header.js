import $ from 'jquery';

class Header {
  constructor(root) {
    this.$header = $(root);
    this.$controls = this.$header.find('.header__control');
  }

  init() {
    this.addEvents();
  }

  handleLinkMouseover(e) {
    const $target = $(e.target);
    const isLink = $target.hasClass('header__link') && $target.closest(this.$header).length > 0;

    if (isLink) {
      $target.parent().addClass('header__element_selected');
    }
  }

  handleLinkMouseout(e) {
    const $target = $(e.target);
    const isLink = $target.hasClass('header__link') && $target.closest(this.$header).length > 0;

    if (isLink) {
      $target.parent().removeClass('header__element_selected');
    }
  }

  handleButtonClick(e) {
    const $target = $(e.target);

    if ($target.closest('.js-header__login', this.$controls).length > 0) {
      window.location.href = './login.html';
    }

    if ($target.closest('.js-header__register', this.$controls).length > 0) {
      window.location.href = './register.html';
    }
  }

  addEvents() {
    this.$header.on('mouseover.headerLink', this.handleLinkMouseover.bind(this));
    this.$header.on('mouseout.headerLink', this.handleLinkMouseout.bind(this));
    this.$controls.on('click.headerControl', this.handleButtonClick.bind(this));
  }

  destory() {
    this.$header.off('mouseover.headerLink');
    this.$header.off('mouseout.headerLink');
    this.$controls.off('click.headerControl');
  }
}

export default Header;
