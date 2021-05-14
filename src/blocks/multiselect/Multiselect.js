import $ from 'jquery';

import '@assets/plugins/multiselect/multiselect-styles.css';
import '@assets/plugins/multiselect/bundle.js';

class Multiselect {
  constructor(options = {}, rootContainer) {
    this.options = options;
    this.$rootContainer = $(rootContainer);
    this.initPlugin();
  }

  static init(options, rootContainer) {
    return new this(options, rootContainer);
  }

  initPlugin() {
    this.$rootContainer.multiselect(this.options);
  }

  update(options) {
    this.$rootContainer.multiselect('update', options);
  }

  destroy() {
    this.$rootContainer.multiselect('destroy');
    this.$rootContainer.empty();
  }
}

export default Multiselect;
