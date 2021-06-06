import $ from 'jquery';
import Datepicker from './Datepicker';

$('.js-datepicker-plugin').each((_, domElement) => {
  const datepicker = new Datepicker(domElement);
  datepicker.init();
});
