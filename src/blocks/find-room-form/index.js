import initDatepicker from '@blocks/datepicker/index';
import initMultiselect from '@blocks/multiselect/index';

export default function initFindRoomFormPlugins() {
  // calendar
  initDatepicker({
    mode: 'Range'
  }, '.js-find-room-form__datepicker .js-datepicker');

  // multiselect
  initMultiselect({
    state: 'Collapsed',
    options: [
      { text: 'взрослые', value: '0' },
      { text: 'дети', value: '0' },
      { text: 'младенцы', value: '0' }],
    title: 'Сколько гостей',
    totalTextTitle: 'гостя',
    showAllValue: false
  }, '.js-find-room-form__multiselect .js-multiselect');
}
