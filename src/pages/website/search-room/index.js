import initImageSlider from '@blocks/image-slider/index';
import initPagination from '@blocks/pagination/index';
import initRate from '@blocks/rate/index';

import { initFilterPlugins } from '@blocks/filter/index';

export function initFilter() {
  // filters
  initFilterPlugins();

  // room image slider
  initImageSlider();

  // star rating
  initRate();

  // pagibation
  initPagination();
}
