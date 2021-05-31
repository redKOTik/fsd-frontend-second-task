import initDatepicker from '@blocks/datepicker/index';
import initMultiselect from '@blocks/multiselect/index';
import initListExpandable from '@blocks/checkbox-list-expandable/index';
import initSlider from '@blocks/slider/index';

export function initFilterPlugins() {
  // calendar
  initDatepicker();

  // multiselect
  initMultiselect();

  // slider
  initSlider();

  // list-expandable
  initListExpandable();
}
