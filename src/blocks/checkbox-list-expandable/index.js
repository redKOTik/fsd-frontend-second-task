import $ from 'jquery';
import CheckboxListExpandable from './CheckboxListExpandable';

export default function init() {
  $('.js-checkbox-list-expandable').each((_, root) => {
    CheckboxListExpandable.init(root);
  });
}
