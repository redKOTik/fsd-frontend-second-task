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
      { text: 'взрослые', value: '0', unique: false },
      { text: 'дети', value: '0', unique: false },
      { text: 'младенцы', value: '0', unique: true }],
    title: 'Сколько гостей',
    totalTextTitle: 'гостя'
  }, '.js-find-room-form__multiselect .js-multiselect');
}
