import initModal from '@blocks/modal/index';
import initReserveFormPlugins from '@blocks/reserve-form/index';

export function initDetails() {
  // form
  initReserveFormPlugins();

  // reserve form modal
  initModal('.js-modal', '.js-detail__button .js-button', '.js-overlay');
}
