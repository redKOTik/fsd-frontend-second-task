import initModal from '@blocks/modal/index';
import initDiagram from '@blocks/diagram/index';
import initReserveFormPlugins from '@blocks/reserve-form/index';

export function initDetails() {
  // form
  initReserveFormPlugins();

  // diagram
  initDiagram('.diagram', '.bullet-list-colored', {
    yellow: 520,
    purple: 260,
    green: 260,
    grey: 0,
    summary: 1040
  });

  // reserve form modal
  initModal('.js-modal', '.js-detail__button .js-button', '.js-overlay');
}
