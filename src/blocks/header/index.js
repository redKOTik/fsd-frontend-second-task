import $ from 'jquery';
import Header from './Header';

$('.js-header').each((_, domElement) => {
  const header = new Header(domElement);
  header.init();
});