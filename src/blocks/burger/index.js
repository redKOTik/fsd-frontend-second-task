import $ from 'jquery';
import Burger from './Burger';

export default function init() {
  $('.js-header').each((_, domElement) => {
    const burger = new Burger(domElement);
    burger.init();
  });
}
