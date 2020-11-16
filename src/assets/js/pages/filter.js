import '../../plugins/multiselect/multiselect-styles.css';
import '../../plugins/datepicker/datepicker-styles.css';
import '../../plugins/customslider/slider-styles.css';

import '../../plugins/multiselect/bundle.js';
import '../../plugins/datepicker/bundle.js';
import '../../plugins/customslider/bundle.js';

import '../../plugins/paginationjs/pagination.js';

import Sim from '../../plugins/imgslider/imgslider.js';
import '../../plugins/burger/burger.js';
import initPagination from '../../plugins/paginationjs/pagination.js';

export function initFilterJs() {

    const eventStop = (e) => {
        e.preventDefault();
        console.log(e.target);
    };

    $('.filter__datepicker').datepicker({
        mode: 'Range',
        select: 'One',
        title: 'ДД.МММ',
    }).datepicker('update', { selected: [{
        start: moment().locale('ru').set({'date': 19, 'month': 7, 'year': 2019}),
        end: moment().locale('ru').set({'date': 23, 'month': 7, 'year': 2019}) }]
    });

    $('.filter__multiselect').multiselect({
        state: 'Collapsed',
        options: [
            { text: 'взрослые', value: '1' },
            { text: 'дети', value: '2' },
            { text: 'младенцы', value: '0' }],
        title: 'Сколько гостей',
        totalTextTitle: 'гостя',
        showAllValue: false
    });

    $('.filter__multiselect_multititle').multiselect({
        state: 'Collapsed',
        options: [
            { text: 'спальни', value: '2' },
            { text: 'кровати', value: '2' },
            { text: 'ванные комнаты', value: '0' }],
        title: 'Сколько всего',
        showAllValue: true,
    });

    $('.filter .filter__slider').sliderPlugin({
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

    $('.filter .label_slider').text($('.filter .filter__slider').sliderPlugin('value'));

    $('.filter').on('submit', eventStop);
    
    $('.filter .list__header').on('click', (event) => {
        const target = event.currentTarget.parentNode;
        const arrow = target.querySelector('.list__arrow');
        const isCollapsed = arrow.classList.contains('icon-collapsed');
        const isExpanded = arrow.classList.contains('icon-expanded');
    
        target.classList.toggle('list_collapsed');
        target.classList.toggle('list_expanded');
    
        if (isCollapsed) {
            arrow.classList.remove('icon-collapsed');
        } else {
            arrow.classList.add('icon-collapsed');
        }
    
        if (isExpanded) {
            arrow.classList.remove('icon-expanded');
        } else {
            arrow.classList.add('icon-expanded');
        }
    });

    new Sim('slider1');
    new Sim('slider2');
    new Sim('slider3');
    new Sim('slider4');
    new Sim('slider5');
    new Sim('slider6');
    new Sim('slider7');
    new Sim('slider8');
    new Sim('slider9');
    new Sim('slider10');
    new Sim('slider11');
    new Sim('slider12');

    let arr = new Array();
    arr.length = 100;

    initPagination('.result-pagination', arr);
}