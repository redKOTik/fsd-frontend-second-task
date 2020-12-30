import '../plugins/multiselect/multiselect-styles.css';
import '../plugins/datepicker/datepicker-styles.css';
//import '../plugins/customslider/slider-styles.css';

import '../plugins/multiselect/bundle.js';
import '../plugins/datepicker/bundle.js';
//import '../plugins/customslider/bundle.js';

import 'fsd-custom-slider/dist/app.js';
import 'fsd-custom-slider/dist/app.css';

import { handleListExpandableToggle } from '../../blocks/checkbox-list-expandable/__header/checkbox-list-expandable__header';
import { initRates } from '../../blocks/rate/rate.js';
import initPagination from '../../blocks/pagination/pagination.js';


export function initElementsJs() {

    $('.multiselect-collapsed').multiselect({
        state: 'Collapsed',
        options: [
            { text: 'взрослые', value: '0' },
            { text: 'дети', value: '0' },
            { text: 'младенцы', value: '0' }],
        title: 'Сколько гостей',
        totalTextTitle: 'гостя',
        showAllValue: false
    });

    $('.datepicker-range').datepicker({
        mode: 'Range'
    }).datepicker('update', {
        selected: [{
            end: moment().locale('ru').set({'date': 19, 'month': 7, 'year': 2019})
        }]
    });
    
    $('.datepicker-range-filter').datepicker({
        mode: 'Range',
        select: 'One',
        title: 'ДД.МММ',
    }).datepicker('update', {
        selected: [{
            start: moment().locale('ru').set({'date': 19, 'month': 7, 'year': 2020}),
            end: moment().locale('ru').set({'date': 23, 'month': 7, 'year': 2020})
        }]
    });    
    
    $('.multiselect-collapsed-with-value').multiselect({
        state: 'Collapsed',
        options: [
            { text: 'спальни', value: '2' },
            { text: 'кровати', value: '2' },
            { text: 'ванные комнаты', value: '0' }],
        title: 'Сколько всего',
        showAllValue: true,
    });
    
    $('.multiselect-expanded-with-value').multiselect({
        state: 'Expanded',
        options: [
            { text: 'спальни', value: '2' },
            { text: 'кровати', value: '2' },
            { text: 'ванные комнаты', value: '0' }],
        title: 'Сколько всего',
        showAllValue: true,
    });
    
    $('.multiselect-expanded-default').multiselect({
        state: 'Collapsed',
        options: [
            { text: 'взрослые', value: '0' },
            { text: 'дети', value: '0' },
            { text: 'младенцы', value: '0' }],
        title: 'Сколько гостей',
        totalTextTitle: 'гостя',
        showAllValue: false
    });
    
    $('.multiselect-expanded-total-value').multiselect({
        state: 'Collapsed',
        options: [
            { text: 'взрослые', value: '2' },
            { text: 'дети', value: '1' },
            { text: 'младенцы', value: '0' }],
        title: 'Сколько гостей',
        totalTextTitle: 'гостя',
        showAllValue: false
    });   
    
    $('.custom-slider').sliderPlugin({
        step: '500',
        mode: 'Multiple',
        orientation: 'Gorizontal',
        defaultInterval: ['5000', '10000'],
        maximumValue: '15000',
        showSettings: false,
        showValue: false,
        onValueChanged: function (_, change) {
            $('.label_slider').text(change);
        }
    });

    // list-expandable
    $('.checkbox-list-expandable__header').on('click', handleListExpandableToggle);
    
    // pagination    
    initPagination('.result-pagination');

    // rating
    initRates('.rate');

    // slider
    $('.label_slider').text($('.custom-slider').sliderPlugin('value'));
};



