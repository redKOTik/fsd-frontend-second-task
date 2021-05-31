import $ from 'jquery';
import Pagination from './Pagination';

export default function init() {
  $('.js-result-pagination').each((_, domElement) => {
    const pagination = new Pagination(domElement);
    pagination.init();
  });
}
