import $ from 'jquery';
import ImageSlider from './ImageSlider';

$('.js-img-slider').each((_, domElement) => {
  const imageSlider = new ImageSlider(domElement);
  imageSlider.init();
});
