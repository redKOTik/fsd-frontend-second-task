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
  initDatepicker();

  // star rating
  initRate();

  // room image slider
  initImageSlider();
}
