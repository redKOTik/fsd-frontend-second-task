import $ from 'jquery';
import Rate from './Rate';

$('.js-rate').each((_, domElement) => {
  const rate = new Rate(domElement);
  rate.init();
});
