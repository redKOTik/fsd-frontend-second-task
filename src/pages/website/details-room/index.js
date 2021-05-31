import initModal from '@blocks/modal/index';
import initDiagram from '@blocks/diagram/index';
import initLikeButtons from '@blocks/like-button/index';
import initReserveFormPlugins from '@blocks/reserve-form/index';

export function initDetails() {
  // form
  initReserveFormPlugins();

  // diagram
  initDiagram();

  // likes
  initLikeButtons();

  // reserve form modal
  initModal();
}
