import initDatepicker from '@blocks/datepicker/index';
import initMultiselect from '@blocks/multiselect/index';

export default function initReserveFormPlugins() {
  // calendar
  initDatepicker({
    mode: 'Range'
  }, '.js-reserve-form__datepicker .js-datepicker', {
    start: { date: 19, month: 7, year: 2019 },
    end: { date: 23, month: 7, year: 2019 }
  });

  // multiselect
  initMultiselect({
    state: 'Collapsed',
    options: [
      { text: 'взрослые', value: '1', unique: false },
      { text: 'дети', value: '2', unique: false },
      { text: 'младенцы', value: '0', unique: true }],
    title: 'Сколько гостей',
    totalTextTitle: 'гостя'
  }, '.js-reserve-form__multiselect .js-multiselect');
}
