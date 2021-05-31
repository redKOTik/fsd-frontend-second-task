import $ from 'jquery';
import Header from './Header';

export default function init() {
  $('.js-header').each((_, domElement) => {
    const header = new Header(domElement);
    header.init();
  });
}
