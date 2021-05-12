import $ from 'jquery';
import moment from 'moment';

import '@assets/plugins/multiselect/multiselect-styles.css';
import '@assets/plugins/datepicker/datepicker-styles.css';

import initListExpandable from '@blocks/checkbox-list-expandable/index';
import initSlider from '@blocks/slider/index';
import initRate from '@blocks/rate/index';

import initPagination from '@blocks/pagination/pagination.js';

export function initElementsJs() {
  $('.js-multiselect-collapsed').multiselect({
    state: 'Collapsed',
    options: [
      { text: 'взрослые', value: '0' },
      { text: 'дети', value: '0' },
      { text: 'младенцы', value: '0' }],
    title: 'Сколько гостей',
    totalTextTitle: 'гостя',
    showAllValue: false
  });

  $('.js-datepicker-range').datepicker({
    mode: 'Range'
  }).datepicker('update', {
    selected: [{
      end: moment().locale('ru').set({ date: 19, month: 7, year: 2019 })
    }]
  });

  $('.js-datepicker-range-filter').datepicker({
    mode: 'Range',
    select: 'One',
    title: 'ДД.МММ'
  }).datepicker('update', {
    selected: [{
      start: moment().locale('ru').set({ date: 19, month: 7, year: 2020 }),
      end: moment().locale('ru').set({ date: 23, month: 7, year: 2020 })
    }]
  });

  $('.js-multiselect-collapsed-with-value').multiselect({
    state: 'Collapsed',
    options: [
      { text: 'спальни', value: '2' },
      { text: 'кровати', value: '2' },
      { text: 'ванные комнаты', value: '0' }],
    title: 'Сколько всего',
    showAllValue: true
  });

  $('.js-multiselect-expanded-with-value').multiselect({
    state: 'Expanded',
    options: [
      { text: 'спальни', value: '2' },
      { text: 'кровати', value: '2' },
      { text: 'ванные комнаты', value: '0' }],
    title: 'Сколько всего',
    showAllValue: true
  });

  $('.js-multiselect-expanded-default').multiselect({
    state: 'Collapsed',
    options: [
      { text: 'взрослые', value: '0' },
      { text: 'дети', value: '0' },
      { text: 'младенцы', value: '0' }],
    title: 'Сколько гостей',
    totalTextTitle: 'гостя',
    showAllValue: false
  });

  $('.js-multiselect-expanded-total-value').multiselect({
    state: 'Collapsed',
    options: [
      { text: 'взрослые', value: '2' },
      { text: 'дети', value: '1' },
      { text: 'младенцы', value: '0' }],
    title: 'Сколько гостей',
    totalTextTitle: 'гостя',
    showAllValue: false
  });

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
  initPagination('.result-pagination');

  // star rating
  initRate();
}
