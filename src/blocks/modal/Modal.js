import $ from 'jquery';

class Modal {
  constructor(root, button, overlay) {
    this.$modal = $(root);
    this.$btn = $(button);
    this.$overlay = $(overlay);

    this.addEvents();
  }

  static init(root, button, overlay) {
    return new this(root, button, overlay);
  }

  addEvents() {
    this.$btn.on('click.button', this.handleButtonClick.bind(this));
    this.$overlay.on('click.overlay', this.handleOverlayClick.bind(this));
  }

  handleButtonClick() {
    this.$overlay.addClass('active');
    this.$modal.addClass('active');
  }

  handleOverlayClick() {
    this.$overlay.removeClass('active');
    this.$modal.removeClass('active');
  }

  destroy() {
    this.$modal.addClass('active');
    this.$overlay.off('click.overlay').remove();
    this.$btn.off('click.button').remove();
  }
}

export default Modal;
