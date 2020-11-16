import '../../plugins/multiselect/multiselect-styles.css';
import '../../plugins/datepicker/datepicker-styles.css';
import '../../plugins/multiselect/bundle.js';
import '../../plugins/datepicker/bundle.js';
import '../../plugins/burger/burger.js';

export function initLandJs() {
    const eventStop = (e) => {
        e.preventDefault();
        console.log(e.target);
    };

    $('.findroom-form__datepicker').datepicker({
        mode: 'Range'
    });

    $('.findroom-form__multiselect').multiselect({
        state: 'Collapsed',
        options: [
            { text: 'взрослые', value: '0' },
            { text: 'дети', value: '0' },
            { text: 'младенцы', value: '0' }],
        title: 'Сколько гостей',
        totalTextTitle: 'гостя',
        showAllValue: false
    });

    $('.findroom-form').on('submit', eventStop);
}