import $ from 'jquery';
import '@assets/plugins/datepicker/datepicker-styles.css';

export function initRegJs(form) {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  if (form === 'register') {
    $('.js-register-form__datepicker .js-datepicker').datepicker();
    $('.js-register-form').on('submit', handleFormSubmit);
  } else {
    $('.js-login-form').on('submit', handleFormSubmit);
  }
}
