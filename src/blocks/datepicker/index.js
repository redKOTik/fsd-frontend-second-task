import $ from 'jquery';
import Datepicker from './Datepicker';

export default function init() {
  $('.js-datepicker-plugin').each((_, domElement) => {
    const datepicker = new Datepicker(domElement);
    datepicker.init();
  });
}
