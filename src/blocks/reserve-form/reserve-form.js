export default function initReservePlugins() {
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
}