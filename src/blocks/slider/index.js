import $ from 'jquery';
import Slider from './Slider';

export default function init() {
  $('.js-slider-plugin').each((_, domElement) => {
    const slider = new Slider(domElement);
    slider.init();
  });
}
