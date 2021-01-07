import handleBurgerClick from '../../blocks/burger/burger';

export function initHeaderJs() {
    $('.control__login').on('click', () => {
        window.location.href = '#login';
    });
    
    $('.control__register').on('click', () => {
        window.location.href = '#register';
    });

    $('.burger').each((i, burger) => {
        $(burger).on('click', handleBurgerClick);
    })
};