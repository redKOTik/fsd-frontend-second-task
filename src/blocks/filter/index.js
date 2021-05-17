import initDatepicker from '@blocks/datepicker/index';
import initMultiselect from '@blocks/multiselect/index';
import initListExpandable from '@blocks/checkbox-list-expandable/index';
import initSlider from '@blocks/slider/index';

export function initFilterPlugins() {
  // calendar
  initDatepicker({
    mode: 'Range',
    select: 'One',
    title: 'ДД.МММ'
  }, '.js-filter__datepicker', {
    start: { date: 19, month: 7, year: 2019 },
    end: { date: 23, month: 7, year: 2019 }
  });

  // multiselects
  initMultiselect({
    state: 'Collapsed',
    options: [
      { text: 'взрослые', value: '1', unique: false },
      { text: 'дети', value: '2', unique: false },
      { text: 'младенцы', value: '1', unique: true }],
    title: 'Сколько гостей',
    totalTextTitle: 'гостя'
  }, '.js-filter__multiselect-for-human');

  initMultiselect({
    state: 'Collapsed',
    options: [
      { text: 'спальни', value: '2', unique: true },
      { text: 'кровати', value: '2', unique: true },
      { text: 'ванные комнаты', value: '0', unique: true }],
    title: 'Сколько всего'
  }, '.js-filter__multiselect-for-bed');

  // slider
  initSlider({
    step: '500',
    mode: 'Multiple',
    orientation: 'Horizontal',
    defaultInterval: ['5000', '10000'],
    maximumValue: '15000',
    showSettings: false,
    showValue: false
  }, '.js-filter__slider', '.js-filter__slider-value');

  // list-expandable
  initListExpandable();
}
