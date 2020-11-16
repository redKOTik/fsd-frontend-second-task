
import '../plugins/multiselect/multiselect-styles.css';
import '../plugins/datepicker/datepicker-styles.css';

import '../plugins/multiselect/bundle.js';
import '../plugins/datepicker/bundle.js';
import Sim from '../plugins/imgslider/imgslider.js';

export function initCardsJs() {
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
    
    $('.register-form__datepicker').datepicker();
    
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
    
    $('.calendar').datepicker({
        mode: 'Range',
        state: 'Expanded'
    }).datepicker('update', { selected: [{
        start: moment().locale('ru').set({'date': 25, 'month': 7, 'year': 2020}),
        end: moment().locale('ru').set({'date': 28, 'month': 7, 'year': 2020}) }]
    });

    $('.datepicker-range').focus();    
    
    $('.findroom-form').on('submit', eventStop);
    $('.register-form').on('submit', eventStop);
    $('.login-form').on('submit', eventStop);
    $('.reserve-form').on('submit', eventStop);
    
    new Sim('slider1');
    new Sim('slider2');
};