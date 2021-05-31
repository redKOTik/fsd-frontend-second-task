import $ from 'jquery';

class Modal {
  constructor(root) {
    this.$modal = $(root);
    this.$btn = $(this.$modal.data('btn')).find('.js-button');
    this.$overlay = $(document.createElement('div'));
    this.$overlay.addClass('overlay js-overlay');
    this.$modal.removeAttr('data-btn');
  }

  init() {
    this.hideBtn();
    this.addOverlay();
    this.addEvents();
  }

  hideBtn() {
    this.$btn.parent().addClass('hide');
  }

  addOverlay() {
    const $body = $(document.body);
    if ($body.find('.js-overlay').length === 0) {
      this.$overlay.appendTo($body);
    }
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
