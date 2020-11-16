import '../../plugins/multiselect/multiselect-styles.css';
import '../../plugins/datepicker/datepicker-styles.css';
import '../../plugins/multiselect/bundle.js';
import '../../plugins/datepicker/bundle.js';
import '../../plugins/burger/burger.js';

export function initDetailsJs() {

    const eventStop = (e) => {
        e.preventDefault();
        console.log(e.target);
    };

    $('.reserve-form__datepicker').datepicker({
        mode: 'Range'
    }).datepicker('update', { selected: [{
        start: moment().locale('ru').set({'date': 19, 'month': 7, 'year': 2019}),
        end: moment().locale('ru').set({'date': 23, 'month': 7, 'year': 2019}) }]
    });

    $('.reserve-form__multiselect').multiselect({
        state: 'Collapsed',
        options: [
            { text: 'взрослые', value: '1' },
            { text: 'дети', value: '2' },
            { text: 'младенцы', value: '0' }],
        title: 'Сколько гостей',
        totalTextTitle: 'гостя',
        showAllValue: false
    });

    $('.reserve-form').on('submit', eventStop);
    
    $('.details__button .button').on('click', () => {
        $('.overlay').addClass('active');
        $('.reserve-form__wrapper.modal').addClass('active');
    });

    $('.overlay').on('click', function() {
        $(this).removeClass('active');
        $('.reserve-form__wrapper.modal').removeClass('active');
    });
}