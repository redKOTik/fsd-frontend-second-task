import $ from 'jquery';
import moment from 'moment';

import '../../assets/plugins/multiselect/multiselect-styles.css';
import '../../assets/plugins/datepicker/datepicker-styles.css';

import '../../assets/plugins/multiselect/bundle.js';
import '../../assets/plugins/datepicker/bundle.js';

import initListExpandable from '@blocks/checkbox-list-expandable/index';
import initSlider from '@blocks/slider/index';

export function initFilterPlugins() {
  $('.js-filter__datepicker').datepicker({
    mode: 'Range',
    select: 'One',
    title: 'ДД.МММ'
  }).datepicker('update', {
    selected: [{
      start: moment().locale('ru').set({ date: 19, month: 7, year: 2019 }),
      end: moment().locale('ru').set({ date: 23, month: 7, year: 2019 })
    }]
  });

  $('.js-filter__multiselect-for-human').multiselect({
    state: 'Collapsed',
    options: [
      { text: 'взрослые', value: '1' },
      { text: 'дети', value: '2' },
      { text: 'младенцы', value: '0' }],
    title: 'Сколько гостей',
    totalTextTitle: 'гостя',
    showAllValue: false
  });

  $('.js-filter__multiselect-for-bed').multiselect({
    state: 'Collapsed',
    options: [
      { text: 'спальни', value: '2' },
      { text: 'кровати', value: '2' },
      { text: 'ванные комнаты', value: '0' }],
    title: 'Сколько всего',
    showAllValue: true
  });

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
