import $ from 'jquery';
import Sim from '@blocks/image-slider/image-slider';
import initPagination from '@blocks/pagination/pagination';
import { initFilterPlugins } from '@blocks/filter/filter';

import initRate from '@blocks/rate/index';

export function initFilterJs() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  $('.js-filter').on('submit', handleFormSubmit);

  initFilterPlugins();

  $('.js-img-slider').each((i, slider) => {
    new Sim(slider.id);
  });

  // star rating
  initRate();

  // pagibation
  initPagination('.js-search-room__pagination');
}
