import $ from 'jquery';
import Multiselect from './Multiselect';

$('.js-multiselect-plugin').each((_, domElement) => {
  const multiselect = new Multiselect(domElement);
  multiselect.init();
});
