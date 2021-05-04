import $ from 'jquery';
import moment from 'moment';
import '@assets/plugins/multiselect/multiselect-styles.css';
import '@assets/plugins/datepicker/datepicker-styles.css';

import Sim from '@blocks/image-slider/image-slider.js';
import initFindRoomPlugins from '@blocks/find-room-form/find-room-form';
import initRegisterPlugins from '@blocks/register-form/register-form';
import initReservePlugins from '@blocks/reserve-form/reserve-form';
import { initRates } from '@blocks/rate/rate.js';

export function initCardsJs() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  initFindRoomPlugins();
  initRegisterPlugins();
  initReservePlugins();

  $('.js-calendar').datepicker({
    mode: 'Range',
    state: 'Expanded'
  }).datepicker('update', {
    selected: [{
      start: moment().locale('ru').set({ date: 25, month: 7, year: 2020 }),
      end: moment().locale('ru').set({ date: 28, month: 7, year: 2020 })
    }]
  });

  $('.js-datepicker-range').focus();

  $('.js-find-room-form').on('submit', handleFormSubmit);
  $('.js-register-form').on('submit', handleFormSubmit);
  $('.js-login-form').on('submit', handleFormSubmit);
  $('.js-reserve-form').on('submit', handleFormSubmit);

  initRates('.rate');

  new Sim('js-slider-first');
  new Sim('js-slider-second');
}
