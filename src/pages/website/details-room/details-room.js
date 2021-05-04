import $ from 'jquery';
import moment from 'moment';

import '@assets/plugins/multiselect/multiselect-styles.css';
import '@assets/plugins/datepicker/datepicker-styles.css';

const $modal = $('.js-details-room__reserve-form.js-modal');

const handleDetailButtonClick = () => {
  $('.js-overlay').addClass('active');
  $modal.addClass('active');
};

function handleOverlayClick() {
  $(this).removeClass('active');
  $modal.removeClass('active');
}

export function initDetailsJs() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  $('.js-reserve-form__datepicker .js-datepicker').datepicker({
    mode: 'Range'
  }).datepicker('update', {
    selected: [{
      start: moment().locale('ru').set({ date: 19, month: 7, year: 2019 }),
      end: moment().locale('ru').set({ date: 23, month: 7, year: 2019 })
    }]
  });

  $('.js-reserve-form__multiselect .js-multiselect').multiselect({
    state: 'Collapsed',
    options: [
      { text: 'взрослые', value: '1' },
      { text: 'дети', value: '2' },
      { text: 'младенцы', value: '0' }],
    title: 'Сколько гостей',
    totalTextTitle: 'гостя',
    showAllValue: false
  });

  $('.js-reserve-form').on('submit', handleFormSubmit);

  $('.js-detail__button .js-button').on('click', handleDetailButtonClick);

  $('.js-overlay').on('click', handleOverlayClick);
}
