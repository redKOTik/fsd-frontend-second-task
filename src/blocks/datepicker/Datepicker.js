import $ from 'jquery';
import moment from 'moment';

import '@assets/plugins/datepicker/datepicker-styles.css';
import '@assets/plugins/datepicker/bundle.js';

class Datepicker {
  constructor(rootContainer) {
    this.$rootContainer = $(rootContainer);
    this.options = this.$rootContainer.data('options');
    this.defaultValues = this.$rootContainer.data('values');
    this.$rootContainer.removeAttr('data-options').removeAttr('data-values');
  }

  init() {
    this.initPlugin();
    this.initDefaultValue();

    if (this.options && this.options.focus) {
      this.$rootContainer.next().focus();
    }
  }

  initPlugin() {
    this.$rootContainer.datepicker(this.options);
  }

  initDefaultValue() {
    if (this.defaultValues) {
      this.options.selected = [];
      const prop = {};
      Object.keys(this.defaultValues).forEach(key => {
        prop[key] = moment().locale('ru').set(this.defaultValues[key]);
      });
      this.options.selected.push(prop);
      this.update();
    }
  }

  update() {
    this.$rootContainer.datepicker('update', { selected: this.options.selected });
  }

  destroy() {
    this.$rootContainer.datepicker('destroy');
    this.$rootContainer.empty();
  }
}

export default Datepicker;
