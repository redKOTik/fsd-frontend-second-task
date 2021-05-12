import $ from 'jquery';
import handleWidgetElementClick from '@blocks/footer/footer';
import initBurger from '@blocks/burger/index';

const handleHeaderLoginClick = () => {
  window.location.href = '#login';
};

const handleHeaderRegisterClick = () => {
  window.location.href = '#register';
};

export function initHeaderJs() {
  $('.js-header__login').on('click', handleHeaderLoginClick);

  $('.js-header__register').on('click', handleHeaderRegisterClick);

  initBurger();
}

export function initFooterJs() {
  $('.js-widget-list__element_highlighted').on('click', handleWidgetElementClick);
}
