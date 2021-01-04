
import '../plugins/multiselect/multiselect-styles.css';
import '../plugins/datepicker/datepicker-styles.css';

import '../plugins/multiselect/bundle.js';
import '../plugins/datepicker/bundle.js';
import Sim from '../plugins/imgslider/imgslider.js';

import initFindRoomPlugins from '../../blocks/find-room-form/find-room-form';
import initRegisterPlugins from '../../blocks/register-form/register-form';
import initReservePlugins from '../../blocks/reserve-form/reserve-form';

export function initCardsJs() {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
    };

    initFindRoomPlugins();
    initRegisterPlugins();    
    initReservePlugins();
        
    $('.calendar').datepicker({
        mode: 'Range',
        state: 'Expanded'
    }).datepicker('update', { selected: [{
        start: moment().locale('ru').set({'date': 25, 'month': 7, 'year': 2020}),
        end: moment().locale('ru').set({'date': 28, 'month': 7, 'year': 2020}) }]
    });

    $('.datepicker-range').focus();    
    
    $('.find-room-form').on('submit', handleFormSubmit);
    $('.register-form').on('submit', handleFormSubmit);
    $('.login-form').on('submit', handleFormSubmit);
    $('.reserve-form').on('submit', handleFormSubmit);
    
    new Sim('slider1');
    new Sim('slider2');
};