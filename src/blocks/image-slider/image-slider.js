export default function Sim(sldrSel) {
  let id = document.getElementById(sldrSel);
  if (id) {
    this.sldrRoot = id;
  } else {
    this.sldrRoot = document.querySelector('.img-slider');
  }

  // img-slider objects
  this.sldrElements = this.sldrRoot.querySelectorAll('.img-slider__element');
  this.sldrElemFirst = this.sldrRoot.querySelector('.img-slider__element');
  this.leftArrow = this.sldrRoot.querySelector('.img-slider__arrow_left');
  this.rightArrow = this.sldrRoot.querySelector('.img-slider__arrow_right');
  this.indicatorDots = this.sldrRoot.querySelector('.img-slider__dots');

  // Initialization
  this.options = Sim.defaults;
  Sim.initialize(this);
}

Sim.defaults = {

  // Default options for the img-slider
  loop: false, // Бесконечное зацикливание слайдера
  auto: false, // Автоматическое пролистывание
  interval: 500, // Интервал между пролистыванием элементов (мс)
  arrows: true, // Пролистывание стрелками
  dots: true // Индикаторные точки
};

Sim.prototype.elemPrev = function (num) {
  num = num || 1;

  let prevElement = this.currentElement;
  this.currentElement -= num;
  if (this.currentElement < 0) this.currentElement = this.elemCount - 1;

  if (!this.options.loop) {
    if (this.currentElement === 0) {
      this.leftArrow.style.display = 'none';
    }
    this.rightArrow.style.display = 'block';
  }

  this.sldrElements[this.currentElement].style.opacity = '1';
  this.sldrElements[prevElement].style.opacity = '0';

  if (this.options.dots) {
    this.dotOn(prevElement); this.dotOff(this.currentElement);
  }
};

Sim.prototype.elemNext = function (num) {
  num = num || 1;

  let prevElement = this.currentElement;
  this.currentElement += num;
  if (this.currentElement >= this.elemCount) this.currentElement = 0;

  if (!this.options.loop) {
    if (this.currentElement == this.elemCount - 1) {
      this.rightArrow.style.display = 'none';
    }
    this.leftArrow.style.display = 'block';
  }

  this.sldrElements[this.currentElement].style.opacity = '1';
  this.sldrElements[prevElement].style.opacity = '0';

  if (this.options.dots) {
    this.dotOn(prevElement); this.dotOff(this.currentElement);
  }
};

Sim.prototype.dotOff = function (num) {
  this.indicatorDotsAll[num].style.cssText = 'background-color:#FFF; cursor:default;';
};

Sim.prototype.dotOn = function (num) {
  this.indicatorDotsAll[num].style.cssText = 'cursor:pointer;';
};

Sim.initialize = function (that) {
  // Constants
  that.elemCount = that.sldrElements.length; // Количество элементов

  // Variables
  that.currentElement = 0;
  let bgTime = getTime();

  // Functions
  function getTime() {
    return new Date().getTime();
  }
  function setAutoScroll() {
    that.autoScroll = setInterval(function () {
      let fnTime = getTime();
      if (fnTime - bgTime + 10 > that.options.interval) {
        bgTime = fnTime; that.elemNext();
      }
    }, that.options.interval);
  }

  // Start initialization
  if (that.elemCount <= 1) { // Отключить навигацию
    that.options.auto = false; that.options.arrows = false; that.options.dots = false;
    that.leftArrow.style.display = 'none'; that.rightArrow.style.display = 'none';
  }
  if (that.elemCount >= 1) { // показать первый элемент
    that.sldrElemFirst.style.opacity = '1';
  }

  if (!that.options.loop) {
    that.leftArrow.style.display = 'none'; // отключить левую стрелку
    that.options.auto = false; // отключить автопркрутку
  } else if (that.options.auto) { // инициализация автопрокруки
    setAutoScroll();
    // Остановка прокрутки при наведении мыши на элемент
    that.sldrRoot.addEventListener('mouseenter', function () { clearInterval(that.autoScroll); }, false);
    that.sldrRoot.addEventListener('mouseleave', setAutoScroll, false);
  }

  if (that.options.arrows) { // инициализация стрелок
    that.leftArrow.addEventListener('click', function () {
      let fnTime = getTime();
      if (fnTime - bgTime > 1000) {
        bgTime = fnTime; that.elemPrev();
      }
    }, false);
    that.rightArrow.addEventListener('click', function () {
      let fnTime = getTime();
      if (fnTime - bgTime > 1000) {
        bgTime = fnTime; that.elemNext();
      }
    }, false);
  } else {
    that.leftArrow.style.display = 'none'; that.rightArrow.style.display = 'none';
  }

  if (that.options.dots) { // инициализация индикаторных точек
    let sum = ''; let
      diffNum;
    for (let i = 0; i < that.elemCount; i++) {
      sum += '<span class="dot"></span>';
    }
    that.indicatorDots.innerHTML = sum;
    that.indicatorDotsAll = that.sldrRoot.querySelectorAll('span.dot');
    // Назначаем точкам обработчик события 'click'
    for (let n = 0; n < that.elemCount; n++) {
      that.indicatorDotsAll[n].addEventListener('click', function () {
        diffNum = Math.abs(n - that.currentElement);
        if (n < that.currentElement) {
          bgTime = getTime(); that.elemPrev(diffNum);
        } else if (n > that.currentElement) {
          bgTime = getTime(); that.elemNext(diffNum);
        }
        // Если n == that.currentElement ничего не делаем
      }, false);
    }
    that.dotOff(0); // точка[0] выключена, остальные включены
    for (let i = 1; i < that.elemCount; i++) {
      that.dotOn(i);
    }
  }
};
