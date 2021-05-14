import $ from 'jquery';

import initFindRoomFormPlugins from '@blocks/find-room-form/index';
import initRegisterFormPlugins from '@blocks/register-form/index';
import initReserveFormPlugins from '@blocks/reserve-form/index';

import initImageSlider from '@blocks/image-slider/index';
import initRate from '@blocks/rate/index';
import initDatepicker from '@blocks/datepicker/index';

export function initCards() {
  initFindRoomFormPlugins();
  initRegisterFormPlugins();
  initReserveFormPlugins();

  // calendar
  initDatepicker({
    mode: 'Range',
    state: 'Expanded'
  }, '.js-calendar', {
    start: { date: 25, month: 7, year: 2020 },
    end: { date: 28, month: 7, year: 2020 }
  });

  $('.js-calendar').next().focus();

  // star rating
  initRate();

  // room image slider
  initImageSlider();
}
