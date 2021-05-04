import $ from 'jquery';

export default function initFindRoomPlugins() {
  $('.js-find-room-form__datepicker .js-datepicker').datepicker({
    mode: 'Range'
  });
  $('.js-find-room-form__multiselect .js-multiselect').multiselect({
    state: 'Collapsed',
    options: [
      { text: 'взрослые', value: '0' },
      { text: 'дети', value: '0' },
      { text: 'младенцы', value: '0' }],
    title: 'Сколько гостей',
    totalTextTitle: 'гостя',
    showAllValue: false
  });
}
