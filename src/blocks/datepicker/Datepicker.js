import $ from 'jquery';
import moment from 'moment';

import '@assets/plugins/datepicker/datepicker-styles.css';
import '@assets/plugins/datepicker/bundle.js';

class Datepicker {
  constructor(options = {}, rootContainer, defaultValues) {
    this.options = options;
    this.defaultValues = defaultValues;
    this.$rootContainer = $(rootContainer);
    this.initPlugin();
    this.initDefaultValue();
  }

  static init(options, rootContainer, defaultValues) {
    return new this(options, rootContainer, defaultValues);
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
