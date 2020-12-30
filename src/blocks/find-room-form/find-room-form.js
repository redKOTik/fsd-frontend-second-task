export default function initFindRoomPlugins() {
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
}