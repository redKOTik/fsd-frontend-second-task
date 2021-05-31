import initDatepicker from '@blocks/datepicker/index';
import initMultiselect from '@blocks/multiselect/index';

export default function initFindRoomFormPlugins() {
  // calendar
  initDatepicker();

  // multiselect
  initMultiselect();
}
