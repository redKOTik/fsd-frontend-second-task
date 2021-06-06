import $ from 'jquery';
import Slider from './Slider';

$('.js-slider-plugin').each((_, domElement) => {
  const slider = new Slider(domElement);
  slider.init();
});
