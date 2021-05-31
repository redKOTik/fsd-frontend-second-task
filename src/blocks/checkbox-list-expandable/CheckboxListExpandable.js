import $ from 'jquery';

class CheckboxListExpandable {
  constructor(element) {
    this.$root = $(element);
    this.$header = this.$root.find('.js-checkbox-list-expandable__header');
    this.$arrow = this.$root.find('.js-checkbox-list-expandable__arrow');
  }

  init() {
    this.addEvents();
  }

  addEvents() {
    this.$header.on('click.headerListExpandable', this.handleListExpandableHeaderClick.bind(this));
  }

  handleListExpandableHeaderClick() {
    this.$root.toggleClass('checkbox-list-expandable_type_collapsed');
    this.$root.toggleClass('checkbox-list-expandable_type_expanded');

    this.$arrow.toggleClass('checkbox-list-expandable__arrow_icon_collapsed');
    this.$arrow.toggleClass('checkbox-list-expandable__arrow_icon_expanded');
  }

  destroy() {
    this.$header.off('click.headerListExpandable');
  }
}

export default CheckboxListExpandable;
