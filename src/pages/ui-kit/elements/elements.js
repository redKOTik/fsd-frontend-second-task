import $ from 'jquery';
import moment from 'moment';

import '@assets/plugins/multiselect/multiselect-styles.css';
import '@assets/plugins/datepicker/datepicker-styles.css';

import '@assets/plugins/multiselect/bundle.js';
import '@assets/plugins/datepicker/bundle.js';

import 'fsd-custom-slider/dist/app.js';
import 'fsd-custom-slider/dist/app.css';

import { handleListExpandableToggle } from '@blocks/checkbox-list-expandable/__header/checkbox-list-expandable__header';
import { initRates } from '@blocks/rate/rate.js';
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

  const $slider = $('.js-custom-slider');
  const $sliderLabel = $('.js-label_slider');

  $slider.sliderPlugin({
    step: '500',
    mode: 'Multiple',
    orientation: 'Horizontal',
    defaultInterval: ['5000', '10000'],
    maximumValue: '15000',
    showSettings: false,
    showValue: false,
    showScale: false,
    onValueChanged: (_, change) => {
      $sliderLabel.text(change);
    }
  });

  // list-expandable
  $('.js-checkbox-list-expandable__header').on('click', handleListExpandableToggle);

  // pagination
  initPagination('.result-pagination');

  // rating
  initRates('.rate');

  // slider
  $sliderLabel.text($slider.sliderPlugin('value'));
}
