import $ from 'jquery';
import Burger from './Burger';

$('.js-header').each((_, domElement) => {
  const burger = new Burger(domElement);
  burger.init();
});
