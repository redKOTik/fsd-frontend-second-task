import $ from 'jquery';

import 'fsd-custom-slider/dist/app.js';
import 'fsd-custom-slider/dist/app.css';

class Slider {
  constructor(options, rootContainer, valueContainer) {
    this.options = options;
    this.$rootContainer = $(rootContainer);
    this.$valueContainer = $(valueContainer);

    this.initHandleValueChange();
    this.initPlugin();
    this.initDefaultValue();
  }

  static init(options, rootContainer, valueContainer) {
    return new this(options, rootContainer, valueContainer);
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
