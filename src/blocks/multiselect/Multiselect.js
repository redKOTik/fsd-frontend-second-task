import $ from 'jquery';

import '@assets/plugins/multiselect/multiselect-styles.css';
import '@assets/plugins/multiselect/bundle.js';

class Multiselect {
  constructor(rootContainer) {
    this.$rootContainer = $(rootContainer);
    this.options = this.$rootContainer.data('options');
    this.$rootContainer.removeAttr('data-options');
  }

  init() {
    this.initPlugin();
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
