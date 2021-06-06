import $ from 'jquery';
import CheckboxListExpandable from './CheckboxListExpandable';

$('.js-checkbox-list-expandable').each((_, domElement) => {
  const checkboxList = new CheckboxListExpandable(domElement);
  checkboxList.init();
});
