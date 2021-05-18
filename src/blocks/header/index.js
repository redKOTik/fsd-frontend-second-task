import $ from 'jquery';
import Header from './Header';
import initBurger from '../burger/index';

export default function init() {
  $('.js-header').each((_, header) => {
    Header.init(header);
  });

  initBurger();
}
