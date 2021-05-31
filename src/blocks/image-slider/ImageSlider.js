import $ from 'jquery';

class ImageSlider {
  constructor(root) {
    this.$slider = $(root);

    // Default options for the slider
    this.options = {
      loop: false, // Бесконечное зацикливание слайдера
      auto: false, // Автоматическое пролистывание
      interval: 500, // Интервал между пролистыванием элементов (мс)
      arrows: true, // Пролистывание стрелками
      dots: true // Индикаторные точки
    };

    // slider objects
    this.$sldrElements = this.$slider.find('.js-img-slider__element');
    this.$sldrElemFirst = this.$slider.first('.js-img-slider__element');
    this.$leftArrow = this.$slider.find('.js-img-slider__arrow_left');
    this.$rightArrow = this.$slider.find('.js-img-slider__arrow_right');
    this.$indicatorDots = this.$slider.find('.js-img-slider__dots');    
  }

  init() {
    this.initImageSlider();
  }

  // eslint-disable-next-line class-methods-use-this
  getTime() {
    return new Date().getTime();
  }

  setAutoScroll() {
    this.autoScroll = setInterval(() => {
      let fnTime = this.getTime();
      if (fnTime - this.bgTime + 10 > this.options.interval) {
        this.bgTime = fnTime;
        this.elemNext();
      }
    }, this.options.interval);
  }

  handleStopScroll() {
    clearInterval(this.autoScroll);
  }

  handleLeftArrowClick() {
    let fnTime = this.getTime();
    if (fnTime - this.bgTime > 1000) {
      this.bgTime = fnTime;
      this.elemPrev();
    }
  }

  handleRightArrowClick() {
    let fnTime = this.getTime();
    if (fnTime - this.bgTime > 1000) {
      this.bgTime = fnTime;
      this.elemNext();
    }
  }

  handleDotClick(i) {
    this.diffNum = Math.abs(i - this.currentElement);
    if (i < this.currentElement) {
      this.bgTime = this.getTime();
      this.elemPrev(this.diffNum);
    } else if (i > this.currentElement) {
      this.bgTime = this.getTime();
      this.elemNext(this.diffNum);
    }
    // Если n == that.currentElement ничего не делаем
  }

  dotOff(num) {
    this.$indicatorDotsAll[num].style.cssText = 'background-color:#FFF; cursor:default;';
  }

  dotOn(num) {
    this.$indicatorDotsAll[num].style.cssText = 'cursor:pointer;';
  }

  elemPrev(num) {
    const number = num || 1;

    let prevElement = this.currentElement;
    this.currentElement -= number;
    if (this.currentElement < 0) this.currentElement = this.elemCount - 1;

    if (!this.options.loop) {
      if (this.currentElement === 0) {
        this.$leftArrow.css('display', 'none');
      }
      this.$rightArrow.css('display', 'block');
    }

    $(this.$sldrElements[this.currentElement]).css('opacity', '1');
    $(this.$sldrElements[prevElement]).css('opacity', '0');

    if (this.options.dots) {
      this.dotOn(prevElement);
      this.dotOff(this.currentElement);
    }
  }

  elemNext(num) {
    const number = num || 1;

    let prevElement = this.currentElement;
    this.currentElement += number;
    if (this.currentElement >= this.elemCount) this.currentElement = 0;

    if (!this.options.loop) {
      if (this.currentElement === (this.elemCount - 1)) {
        this.$rightArrow.css('display', 'none');
      }
      this.$leftArrow.css('display', 'block');
    }

    $(this.$sldrElements[this.currentElement]).css('opacity', '1');
    $(this.$sldrElements[prevElement]).css('opacity', '0');

    if (this.options.dots) {
      this.dotOn(prevElement);
      this.dotOff(this.currentElement);
    }
  }

  initImageSlider() {
    // Constants
    this.elemCount = this.$sldrElements.length; // Количество элементов

    // Variables
    this.currentElement = 0;
    this.bgTime = this.getTime();

    // Start initialization
    if (this.elemCount <= 1) { // Отключить навигацию
      this.options.auto = false;
      this.options.arrows = false;
      this.options.dots = false;
      this.$leftArrow.css('display', 'none');
      this.$rightArrow.css('display', 'none');
    }
    if (this.elemCount >= 1) { // показать первый элемент
      this.$sldrElemFirst.css('opacity', '1');
    }

    if (!this.options.loop) {
      this.$leftArrow.css('display', 'none'); // отключить левую стрелку
      this.options.auto = false; // отключить автопркрутку
    } else if (this.options.auto) { // инициализация автопрокруки
      this.setAutoScroll();
      // Остановка прокрутки при наведении мыши на элемент
      this.$slider.on('mouseenter.stopScroll', this.handleStopScroll.bind(this));
      this.$slider.on('mouseleave.startScroll', this.setAutoScroll.bind(this));
    }

    if (this.options.arrows) { // инициализация стрелок
      this.$leftArrow.on('click.leftArrow', this.handleLeftArrowClick.bind(this));
      this.$rightArrow.on('click.rightArrow', this.handleRightArrowClick.bind(this));
    } else {
      this.$leftArrow.css('display', 'none');
      this.$rightArrow.css('display', 'none');
    }

    if (this.options.dots) { // инициализация индикаторных точек
      let sum = '';
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < this.elemCount; i++) {
        sum += '<span class="dot js-dot"></span>';
      }
      this.$indicatorDots.html(sum);
      this.$indicatorDotsAll = this.$slider.find('.js-dot');

      // Назначаем точкам обработчик события 'click'
      this.$indicatorDotsAll.each((i, dot) => $(dot).on('click.dot', this.handleDotClick.bind(this, i)));

      this.dotOff(0); // точка[0] выключена, остальные включены
      // eslint-disable-next-line no-plusplus
      for (let i = 1; i < this.elemCount; i++) {
        this.dotOn(i);
      }
    }
  }

  destroy() {
    this.$indicatorDotsAll.each((_, dot) => $(dot).off('click.dot'));
    this.$slider.off('mouseenter.stopScroll');
    this.$slider.off('mouseleave.startScroll');
    this.$leftArrow.off('click.leftArrow');
    this.$rightArrow.off('click.rightArrow');

    this.$slider.empty();
  }
}

export default ImageSlider;
