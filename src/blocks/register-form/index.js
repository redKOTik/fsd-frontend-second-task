import initDatepicker from '@blocks/datepicker/index';

export default function initRegisterFormPlugins() {
  // calendar
  initDatepicker({}, '.js-register-form__datepicker .js-datepicker');
}
