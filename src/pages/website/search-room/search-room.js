import $ from 'jquery';
import Sim from '@blocks/image-slider/image-slider';
import initPagination from '@blocks/pagination/pagination';
import { initFilterPlugins } from '@blocks/filter/filter';
import { initRates } from '@blocks/rate/rate.js';

export function initFilterJs() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  $('.js-filter').on('submit', handleFormSubmit);

  initFilterPlugins();

  $('.js-img-slider').each((i, slider) => {
    new Sim(slider.id);
  });

  initRates('.js-rate');

  initPagination('.js-search-room__pagination');
}
