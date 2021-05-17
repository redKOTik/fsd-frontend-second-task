import initListExpandable from '@blocks/checkbox-list-expandable/index';
import initSlider from '@blocks/slider/index';
import initRate from '@blocks/rate/index';
import initLikeButtons from '@blocks/like-button/index';
import initPagination from '@blocks/pagination/index';
import initDatepicker from '@blocks/datepicker/index';
import initMultiselect from '@blocks/multiselect/index';

export function initElements() {
  // multiselects
  initMultiselect({
    state: 'Collapsed',
    options: [
      { text: 'взрослые', value: '0' },
      { text: 'дети', value: '0' },
      { text: 'младенцы', value: '0' }],
    title: 'Сколько гостей',
    totalTextTitle: 'гостя',
    showAllValue: false
  }, '.js-multiselect-collapsed');

  initMultiselect({
    state: 'Collapsed',
    options: [
      { text: 'спальни', value: '2' },
      { text: 'кровати', value: '2' },
      { text: 'ванные комнаты', value: '0' }],
    title: 'Сколько всего',
    showAllValue: true
  }, '.js-multiselect-collapsed-with-value');

  initMultiselect({
    state: 'Expanded',
    options: [
      { text: 'спальни', value: '2' },
      { text: 'кровати', value: '2' },
      { text: 'ванные комнаты', value: '0' }],
    title: 'Сколько всего',
    showAllValue: true
  }, '.js-multiselect-expanded-with-value');

  initMultiselect({
    state: 'Collapsed',
    options: [
      { text: 'взрослые', value: '0' },
      { text: 'дети', value: '0' },
      { text: 'младенцы', value: '0' }],
    title: 'Сколько гостей',
    totalTextTitle: 'гостя',
    showAllValue: false
  }, '.js-multiselect-expanded-default');

  initMultiselect({
    state: 'Collapsed',
    options: [
      { text: 'взрослые', value: '2' },
      { text: 'дети', value: '1' },
      { text: 'младенцы', value: '0' }],
    title: 'Сколько гостей',
    totalTextTitle: 'гостя',
    showAllValue: false
  }, '.js-multiselect-expanded-total-value');

  // slider
  initSlider({
    step: '500',
    mode: 'Multiple',
    orientation: 'Horizontal',
    defaultInterval: ['5000', '10000'],
    maximumValue: '15000',
    showSettings: false,
    showValue: false,
    showScale: false
  }, '.js-custom-slider', '.js-label_slider');

  // list-expandable
  initListExpandable();

  // pagination
  initPagination();

  // star rating
  initRate();

  // likes
  initLikeButtons();

  // datepickers
  initDatepicker({
    mode: 'Range'
  }, '.js-datepicker-range', {
    end: { date: 19, month: 7, year: 2019 }
  });

  initDatepicker({
    mode: 'Range',
    select: 'One',
    title: 'ДД.МММ'
  }, '.js-datepicker-range-filter', {
    start: { date: 19, month: 7, year: 2020 },
    end: { date: 23, month: 7, year: 2020 }
  });
}
