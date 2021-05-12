import $ from 'jquery';
import Burger from './Burger';

export default function init() {
  $('.js-header').each((_, header) => {
    Burger.init(header);
  });
}
