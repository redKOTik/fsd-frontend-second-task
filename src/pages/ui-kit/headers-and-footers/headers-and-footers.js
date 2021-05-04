import $ from 'jquery';
import handleWidgetElementClick from '@blocks/footer/footer';
import handleBurgerClick from '@blocks/burger/burger';

const handleHeaderLoginClick = () => {
  window.location.href = '#login';
};

const handleHeaderRegisterClick = () => {
  window.location.href = '#register';
};

export function initHeaderJs() {
  $('.js-header__login').on('click', handleHeaderLoginClick);

  $('.js-header__register').on('click', handleHeaderRegisterClick);

  $('.js-burger').each((i, burger) => {
    $(burger).on('click', handleBurgerClick);
  });
}

export function initFooterJs() {
  $('.js-widget-list__element_highlighted').on('click', handleWidgetElementClick);
}
