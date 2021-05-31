import $ from 'jquery';
import ImageSlider from './ImageSlider';

export default function init() {
  $('.js-img-slider').each((_, domElement) => {
    const imageSlider = new ImageSlider(domElement);
    imageSlider.init();
  });
}
