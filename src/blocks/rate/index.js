import $ from 'jquery';
import Rate from './Rate';

export default function init() {
  $('.js-rate').each((_, rate) => {
    Rate.init(rate);
  });
}
