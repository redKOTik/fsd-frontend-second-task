import $ from 'jquery';

class Footer {
  constructor(root) {
    this.$footer = $(root);
    this.$widget = this.$footer.find('.js-widget');
  }

  init() {
    this.addEvents();
  }

  handleLinkMouseover(e) {
    const $target = $(e.target);
    const isLink = $target.hasClass('widget-list__link') && $target.closest(this.$widget).length > 0;

    if (isLink) {
      $target.parent().addClass('widget-list__element_selected');
    }
  }

  handleLinkMouseout(e) {
    const $target = $(e.target);
    const isLink = $target.hasClass('widget-list__link') && $target.closest(this.$widget).length > 0;

    if (isLink) {
      $target.parent().removeClass('widget-list__element_selected');
    }
  }

  handleWidgetElementClick(e) {
    const $target = $(e.target);

    if ($target.closest('.js-widget-list__element_highlighted', this.$widget).length > 0) {
      $target
        .parent()
        .find('.js-widget-list__element, .js-widget-list__element-special')
        .each((i, item) => {
          if (i > 0) {
            item.classList.toggle('widget-list__element_expanded');
          }
        });
    }
  }

  addEvents() {
    this.$widget.on('mouseover.widget', this.handleLinkMouseover.bind(this));
    this.$widget.on('mouseout.widget', this.handleLinkMouseout.bind(this));
    this.$widget.on('click.widgetElement', this.handleWidgetElementClick.bind(this));
  }

  destory() {
    this.$widget.off('mouseover.widget');
    this.$widget.off('mouseout.widget');
    this.$widget.off('click.widgetElement');
  }
}

export default Footer;
