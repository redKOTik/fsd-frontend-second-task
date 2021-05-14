import $ from 'jquery';
import ImageSlider from './ImageSlider';

export default function init() {
  $('.js-img-slider').each((_, slider) => {
    ImageSlider.init(slider);
  });
}
