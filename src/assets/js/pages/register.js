import '../../plugins/datepicker/datepicker-styles.css';
import '../../plugins/datepicker/bundle.js';
import '../../plugins/burger/burger.js';

export function initRegJs() {
    const eventStop = (e) => {
        e.preventDefault();
        console.log(e.target);
    };
    
    $('.register-form__datepicker').datepicker();
    $('.register-form').on('submit', eventStop);   
}