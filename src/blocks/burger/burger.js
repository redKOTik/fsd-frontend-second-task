import $ from 'jquery';

export default function handleBurgerClick(e) {
  const $header = $(e.target).closest('.header');
  e.currentTarget.classList.toggle('burger_active');
  $header.find('.header__menu').toggleClass('header__menu_active');
}
