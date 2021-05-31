import $ from 'jquery';

import 'fsd-custom-slider/dist/app.js';
import 'fsd-custom-slider/dist/app.css';

class Slider {
  constructor(rootContainer) {
    this.$rootContainer = $(rootContainer);
    this.$valueContainer = $(this.$rootContainer.data('value'));
    this.options = this.$rootContainer.data('options');
    this.$rootContainer.removeAttr('data-options').removeAttr('data-value');
  }

  init() {
    this.initHandleValueChange();
    this.initPlugin();
    this.initDefaultValue();
  }

  initPlugin() {
    this.$rootContainer.sliderPlugin(this.options);
  }

  initHandleValueChange() {
    if (this.$valueContainer.length > 0) {
      this.options.onValueChanged = (_, change) => {
        this.$valueContainer.text(change);
      };
    }
  }

  initDefaultValue() {
    if (this.$valueContainer.length > 0) {
      this.$valueContainer.text(this.$rootContainer.sliderPlugin('value'));
    }
  }

  destroy() {
    this.$rootContainer.sliderPlugin('destroy');
    this.$valueContainer.text('');
  }
}

export default Slider;
