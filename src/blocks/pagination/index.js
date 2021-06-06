import $ from 'jquery';
import Pagination from './Pagination';

$('.js-result-pagination').each((_, domElement) => {
  const pagination = new Pagination(domElement);
  pagination.init();
});
