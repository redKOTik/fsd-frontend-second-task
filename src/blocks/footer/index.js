import $ from 'jquery';
import Footer from './Footer';

$('.js-footer').each((_, domElement) => {
  const footer = new Footer(domElement);
  footer.init();
});
