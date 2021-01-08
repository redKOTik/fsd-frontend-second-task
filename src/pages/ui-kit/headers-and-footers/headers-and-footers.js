import handleWidgetElementClick from '@blocks/footer/footer';
import handleBurgerClick from '@blocks/burger/burger';

export function initHeaderJs() {
    $('.header__login').on('click', () => {
        window.location.href = '#login';
    });
    
    $('.header__register').on('click', () => {
        window.location.href = '#register';
    });

    $('.burger').each((i, burger) => {
        $(burger).on('click', handleBurgerClick);
    })
};

export function initFooterJs() {
    $('.widget-list__element_highlighted').on('click', handleWidgetElementClick);
};