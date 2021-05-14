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
      { text: 'взрослые', value: '1' },
      { text: 'дети', value: '2' },
      { text: 'младенцы', value: '0' }],
    title: 'Сколько гостей',
    totalTextTitle: 'гостя',
    showAllValue: false
  }, '.js-reserve-form__multiselect .js-multiselect');
}
