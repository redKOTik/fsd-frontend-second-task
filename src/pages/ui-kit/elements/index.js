import initListExpandable from '@blocks/checkbox-list-expandable/index';
import initSlider from '@blocks/slider/index';
import initRate from '@blocks/rate/index';
import initLikeButtons from '@blocks/like-button/index';
import initPagination from '@blocks/pagination/index';
import initDatepicker from '@blocks/datepicker/index';
import initMultiselect from '@blocks/multiselect/index';

export function initElements() {
  // multiselects
  initMultiselect();

  // slider
  initSlider();

  // list-expandable
  initListExpandable();

  // pagination
  initPagination();

  // star rating
  initRate();

  // likes
  initLikeButtons();

  // datepickers
  initDatepicker();
}
