import $ from 'jquery';
import Multiselect from './Multiselect';

export default function init() {
  $('.js-multiselect-plugin').each((_, domElement) => {
    const multiselect = new Multiselect(domElement);
    multiselect.init();
  });
}
