$('document').ready(function() {
    document.querySelector('.burger').addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('burger_active');
        document.querySelector('.menu').classList.toggle('menu_active');
    });
});