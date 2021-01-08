import '@assets/plugins/multiselect/multiselect-styles.css';
import '@assets/plugins/datepicker/datepicker-styles.css';
import '@assets/plugins/multiselect/bundle.js';
import '@assets/plugins/datepicker/bundle.js';

export function initDetailsJs() {

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
    };

    $('.reserve-form__datepicker .datepicker').datepicker({
        mode: 'Range'
    }).datepicker('update', { selected: [{
        start: moment().locale('ru').set({'date': 19, 'month': 7, 'year': 2019}),
        end: moment().locale('ru').set({'date': 23, 'month': 7, 'year': 2019}) }]
    });

    $('.reserve-form__multiselect .multiselect').multiselect({
        state: 'Collapsed',
        options: [
            { text: 'взрослые', value: '1' },
            { text: 'дети', value: '2' },
            { text: 'младенцы', value: '0' }],
        title: 'Сколько гостей',
        totalTextTitle: 'гостя',
        showAllValue: false
    });

    $('.reserve-form').on('submit', handleFormSubmit);
    
    $('.detail__button .button').on('click', () => {
        $('.overlay').addClass('active');
        $('.details-room__reserve-form.modal').addClass('active');
    });

    $('.overlay').on('click', function() {
        $(this).removeClass('active');
        $('.details-room__reserve-form.modal').removeClass('active');
    });
}