import $ from 'jquery';
import Modal from './Modal';

export default function init() {
  $('.js-modal').each((_, domElement) => {
    const modal = new Modal(domElement);
    modal.init();
  });
}
