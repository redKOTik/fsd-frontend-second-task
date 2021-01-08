import '@assets/plugins/multiselect/multiselect-styles.css';
import '@assets/plugins/datepicker/datepicker-styles.css';
import '@assets/plugins/multiselect/bundle.js';
import '@assets/plugins/datepicker/bundle.js';

export function initLandJs() {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
    };

    $('.find-room-form__datepicker .datepicker').datepicker({
        mode: 'Range'
    });

    $('.find-room-form__multiselect .multiselect').multiselect({
        state: 'Collapsed',
        options: [
            { text: 'взрослые', value: '0' },
            { text: 'дети', value: '0' },
            { text: 'младенцы', value: '0' }],
        title: 'Сколько гостей',
        totalTextTitle: 'гостя',
        showAllValue: false
    });

    $('.find-room-form').on('submit', handleFormSubmit);
}