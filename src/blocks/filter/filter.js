import '../../assets/plugins/multiselect/multiselect-styles.css';
import '../../assets/plugins/datepicker/datepicker-styles.css';
import '../../assets/plugins/customslider/slider-styles.css';

import '../../assets/plugins/multiselect/bundle.js';
import '../../assets/plugins/datepicker/bundle.js';
import '../../assets/plugins/customslider/bundle.js';

import { handleListExpandableToggle } from '../checkbox-list-expandable/__header/checkbox-list-expandable__header';

export function initFilterPlugins() {
    $('.filter__datepicker').datepicker({
        mode: 'Range',
        select: 'One',
        title: 'ДД.МММ',
    }).datepicker('update', { selected: [{
        start: moment().locale('ru').set({'date': 19, 'month': 7, 'year': 2019}),
        end: moment().locale('ru').set({'date': 23, 'month': 7, 'year': 2019}) }]
    });

    $('.filter__multiselect-for-human').multiselect({
        state: 'Collapsed',
        options: [
            { text: 'взрослые', value: '1' },
            { text: 'дети', value: '2' },
            { text: 'младенцы', value: '0' }],
        title: 'Сколько гостей',
        totalTextTitle: 'гостя',
        showAllValue: false
    });

    $('.filter__multiselect-for-bed').multiselect({
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
            $('.filter .filter__slider-value').text(change);
        }
    });

    $('.filter .filter__slider-value').text($('.filter .filter__slider').sliderPlugin('value'));

    $('.filter .checkbox-list-expandable__header').on('click', handleListExpandableToggle);
}