import $ from 'jquery';

class Rate {
  constructor(element) {
    this.$rate = $(element);
    this.$inputs = this.$rate.find('.js-rate__input');
    this.initRate();
  }

  static init(rootEl) {
    return new this(rootEl);
  }

  setAllActive() {
    this.$active.each((_, wrapper) => {
      $(wrapper).find('.js-rate__label').addClass('rate__label_active');
    });
  }

  setAllInactive() {
    this.$inactive.each((_, wrapper) => {
      $(wrapper).find('.js-rate__label').removeClass('rate__label_active');
    });
  }

  setStarState($el) {
    this.$active = $el.parent().nextAll();
    this.$inactive = $el.parent().prevAll();

    $el.siblings().addClass('rate__label_active');

    this.setAllActive();
    this.setAllInactive();
  }

  findChecked() {
    let $checkedEl = false;
    this.$inputs.each((_, element) => {
      if (element.checked) {
        $checkedEl = $(element);
      }
    });

    return $checkedEl;
  }

  handleRateClick(event) {
    const $target = $(event.target);
    const $checkedEl = this.findChecked();
    if ($checkedEl.length > 0) {
      this.setStarState($checkedEl);
    } else {
      this.$active = $target.parent().nextAll('.js-rate__wrapper');
      this.setAllActive();
    }
  }

  handleRateMouseout(event) {
    const $target = $(event.target);
    const $checkedEl = this.findChecked();

    if ($checkedEl.length > 0) {
      this.setStarState($checkedEl);
    } else {
      this.$inactive = $target.parent().nextAll('.js-rate__wrapper');
      this.setAllInactive();
    }
  }

  handleRateMouseover(event) {
    const $target = $(event.target);
    this.$active = $target.parent().nextAll('.js-rate__wrapper');
    this.setAllActive();
  }

  addEvents() {
    this.$rate.on('mouseover.star', '.js-rate__label', this.handleRateMouseover.bind(this));
    this.$rate.on('mouseout.star', '.js-rate__label', this.handleRateMouseout.bind(this));
    this.$rate.on('click.star', this.handleRateClick.bind(this));
  }

  initRate() {
    if (this.$rate.length > 0) {
      this.addEvents();
      this.setStarState(this.findChecked());
    } else {
      throw new Error(`cannot find elements by .${this.$rate.prop('class')}`);
    }
  }

  destroy() {
    this.$rate.off('mouseover.star');
    this.$rate.off('mouseout.star');
    this.$rate.off('click.star');

    this.$rate.empty();
  }
}

export default Rate;
