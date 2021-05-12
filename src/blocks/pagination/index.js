import $ from 'jquery';
import Pagination from './Pagination';

export default function init() {
  $('.js-result-pagination').each((_, pagination) => {
    Pagination.init(pagination);
  });
}
