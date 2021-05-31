import $ from 'jquery';
import Footer from './Footer';

export default function init() {
  $('.js-footer').each((_, domElement) => {
    const footer = new Footer(domElement);
    footer.init();
  });
}
