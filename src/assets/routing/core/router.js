import $ from 'jquery';

import { ActiveRoute } from './activeRoute';
import { initRegister } from '@pages/website/register/index';
import { initLanding } from '@pages/website/landing/index';
import { initDetails } from '@pages/website/details-room/index';
import { initFilter } from '@pages/website/search-room/index';

import { initCards } from '@pages/ui-kit/cards/index';
import { initElements } from '@pages/ui-kit/elements/index';
import {
  initHeaderJs,
  initFooterJs
} from '@pages/ui-kit/headers-and-footers/headers-and-footers';

export class Router {
  constructor(selector, routes) {
    if (!selector) {
      throw new Error('Not selector!');
    }

    this.setPlaceholder(selector);
    this.setHeader();
    this.setFooter();
    this.routes = routes;

    this.handlePageChange = this.handlePageChange.bind(this);

    this.init();
  }

  setPlaceholder(selector) {
    this.placeholder = $(document.querySelector(selector));
  }

  setHeader() {
    this.header = document.querySelector('.header');
  }

  setFooter() {
    this.footer = document.querySelector('.footer');
  }

  init() {
    window.addEventListener('hashchange', this.handlePageChange);
    this.handlePageChange();
  }

  initPage(isUiKit, content, body, wrapper, title, titleName, bodyClassName, wrapperClassName, placeholderClassName, path) {
    title.textContent = titleName;
    body.className = bodyClassName;

    if (!isUiKit) {      
      wrapper.classList.add(wrapperClassName);
      if (wrapperClassName === null) {
        this.placeholder.html(content.querySelector('.' + path).innerHTML);
      } else {
        $(wrapper).html(content.querySelector('.' + path).innerHTML);
        this.placeholder.append(wrapper);
      }    

      this.toggleClassPlaceholder(placeholderClassName);

      $(body).html(this.placeholder);    
      body.insertAdjacentElement('afterbegin', this.header);
      body.insertAdjacentElement('beforeend', this.footer);  
    } else {
      $(body).html(content.querySelector('.' + path).innerHTML);
    } 
  }

  handlePageChange() {
    this.placeholder.html('');

    const t = document.querySelector('template');
    const content = document.importNode(t.content, true);
    const formWrapper = document.createElement('div');
    const title = document.querySelector('title');
    const $body = this.placeholder.parent().length === 0 ? $(document.querySelector('body')) : this.placeholder.parent();

    switch (ActiveRoute.path) {
      case 'register':
        this.initPage(false, content, $body[0], formWrapper, title, 'Registration', 'bg_white', 'register-form-wrapper', 'container container_bg_for-register', ActiveRoute.path);            
        initRegister();        
        Router.helperFunctions();
        break;
      case 'login':
        this.initPage(false, content, $body[0], formWrapper, title, 'Login', 'bg_white', 'login-form-wrapper', 'container container_bg_for-login', ActiveRoute.path);  
        Router.helperFunctions();
        break;
      case 'findroom':
        this.initPage(false, content, $body[0], formWrapper, title, 'Landing', 'bg_white', 'find-room-form-wrapper', 'container container_bg_for-landing', ActiveRoute.path);
        initLanding();
        Router.helperFunctions();
        break;
      case 'details':
        this.initPage(false, content, $body[0], formWrapper, title, 'Details', 'bg_white', null, 'container container__details-room', ActiveRoute.path);
        initDetails();
        Router.helperFunctions();
        break;
      case 'filter':
        this.initPage(false, content, $body[0], formWrapper, title, 'Search room', 'bg_white', null, 'container container__search-room', ActiveRoute.path);
        initFilter();
        Router.helperFunctions();
        break;
      case 'cards':
        this.initPage(true, content, $body[0], null, title, 'Cards', 'bg_gray', null, null, ActiveRoute.path);
        initCards();
        break;
      case 'elements':
        this.initPage(true, content, $body[0], null, title, 'Form Elements', 'bg_white', null, null, ActiveRoute.path);
        initElements();
        break;
      case 'cat':
        this.initPage(true, content, $body[0], null, title, 'Colors and Type', 'bg_white', null, null, ActiveRoute.path);
        break;
      case 'haf':
        this.initPage(true, content, $body[0], null, title, 'Headers and Footers', 'bg_gray', null, null, ActiveRoute.path);
        Router.helperFunctions();
        break;
      default:
        this.initPage(true, content, $body[0], null, title, 'Main', 'bg_gray', null, null, 'base');
    }

    $body.append(t);
    this.setHandleOnForm();
  }

  toggleClassPlaceholder(className) {
    this.placeholder[0].className = className;
  }

  static helperFunctions() {
    initHeaderJs();
    initFooterJs();
  }

  handleFormSubmit(e) {
    e.preventDefault();
  }

  setHandleOnForm() {
    $('form').on('submit', this.handleFormSubmit);
  }

  destroy() {
    window.removeEventListener('hashchange', this.handlePageChange);
  }
}
