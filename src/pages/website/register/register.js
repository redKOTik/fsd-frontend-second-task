import '@assets/plugins/datepicker/datepicker-styles.css';
import '@assets/plugins/datepicker/bundle.js';

export function initRegJs(form) {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
    };
    
    if (form === 'register') {
        $('.register-form__datepicker .datepicker').datepicker();
        $('.register-form').on('submit', handleFormSubmit);
    } else {
        $('.login-form').on('submit', handleFormSubmit);   
    }
}