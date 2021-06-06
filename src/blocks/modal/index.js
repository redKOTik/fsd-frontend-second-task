import $ from 'jquery';
import Modal from './Modal';

$('.js-modal').each((_, domElement) => {
  const modal = new Modal(domElement);
  modal.init();
});