import $ from 'jquery';
import '@assets/plugins/multiselect/multiselect-styles.css';
import '@assets/plugins/datepicker/datepicker-styles.css';
import '@assets/plugins/multiselect/bundle.js';
import '@assets/plugins/datepicker/bundle.js';

export function initLandJs() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  $('.js-find-room-form__datepicker .js-datepicker').datepicker({
    mode: 'Range'
  });

  $('.js-find-room-form__multiselect .js-multiselect').multiselect({
    state: 'Collapsed',
    options: [
      { text: 'взрослые', value: '0' },
      { text: 'дети', value: '0' },
      { text: 'младенцы', value: '0' }
    ],
    title: 'Сколько гостей',
    totalTextTitle: 'гостя',
    showAllValue: false
  });

  $('.js-find-room-form').on('submit', handleFormSubmit);
}
