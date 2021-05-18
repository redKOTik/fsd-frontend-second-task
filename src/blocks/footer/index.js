import $ from 'jquery';
import Footer from './Footer';

export default function init() {
  $('.js-footer').each((_, footer) => {
    Footer.init(footer);
  });
}
