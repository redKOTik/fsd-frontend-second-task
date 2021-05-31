import $ from 'jquery';
import Rate from './Rate';

export default function init() {
  $('.js-rate').each((_, domElement) => {
    const rate = new Rate(domElement);
    rate.init();
  });
}
