import { ActiveRoute } from "./activeRoute";
import { initRegJs } from "../../pages/register";
import { initLandJs } from "../../pages/landing";
import { initDetailsJs } from "../../pages/details";
import { initFilterJs } from "../../pages/filter";
import { initCardsJs } from "../../cards";
import { initElementsJs } from "../../elements";
import { initHeaderJs } from "../../header";
import { initFooterJs } from "../../footer"

export class Router {
    constructor(selector, routes) {
        if (!selector) {
            throw new Error('Not selector!')
        }

        this.placeholder = $(document.querySelector(selector));
        this.header = document.querySelector('.header');
        this.footer = document.querySelector('.footer');
        this.routes = routes;

        this.changePageHandler = this.changePageHandler.bind(this);

        this.init();
    }

    init() {
        window.addEventListener('hashchange', this.changePageHandler);
        this.changePageHandler();
    }

    changePageHandler() {
        
        this.placeholder.html('');

        const t = document.querySelector('template');
        const content = document.importNode(t.content, true);
        const wrapper = document.createElement('div');
        const title = document.querySelector('title');
        const body = this.placeholder.parent().length === 0 
          ? $(document.querySelector('body')) 
          : this.placeholder.parent();

        switch(ActiveRoute.path) {
            case 'register':
                title.textContent = 'Registration';             
                wrapper.classList.add('register-form_wrapper');
                $(wrapper).html(content.querySelector('.register').innerHTML);                
                this.placeholder.append(wrapper);
                this.toggleClass('container container_registration-bg');
                body.html(this.placeholder)
                body[0].insertAdjacentElement('afterbegin', this.header);
                body[0].insertAdjacentElement('beforeend', this.footer);
                initRegJs();
                this.helperFunctions();
                body[0].className = 'bg_white';
                break;
            case 'login':
                title.textContent = 'Login'; 
                wrapper.classList.add('login-form_wrapper');
                $(wrapper).html(content.querySelector('.login').innerHTML);  
                this.placeholder.append(wrapper);
                this.toggleClass('container container_registration-bg');
                body.html(this.placeholder)
                body[0].insertAdjacentElement('afterbegin', this.header);
                body[0].insertAdjacentElement('beforeend', this.footer);
                this.helperFunctions();
                body[0].className = 'bg_white';
                break;
            case 'findroom':
                title.textContent = 'Landing'; 
                wrapper.classList.add('find_room-form_wrapper');
                $(wrapper).html(content.querySelector('.find-room').innerHTML);  
                this.placeholder.append(wrapper);
                this.toggleClass('container container_landind-bg');
                body.html(this.placeholder)
                body[0].insertAdjacentElement('afterbegin', this.header);
                body[0].insertAdjacentElement('beforeend', this.footer);
                initLandJs();
                this.helperFunctions();
                body[0].className = 'bg_white';
                break;
            case 'details':
                title.textContent = 'Details';
                this.placeholder.html(content.querySelector('.details').innerHTML);
                this.toggleClass('container container_details');                
                body.html(this.placeholder)
                body[0].insertAdjacentElement('afterbegin', this.header);
                body[0].insertAdjacentElement('beforeend', this.footer);         
                initDetailsJs();
                this.helperFunctions();
                body[0].className = 'bg_white';
                break;
            case 'filter':
                title.textContent = 'Search room';
                this.placeholder.html(content.querySelector('.filter').innerHTML);
                this.toggleClass('container container_filter');                
                body.html(this.placeholder)
                body[0].insertAdjacentElement('afterbegin', this.header);
                body[0].insertAdjacentElement('beforeend', this.footer);                
                initFilterJs();
                this.helperFunctions();
                body[0].className = 'bg_white';
                break;    
            case 'cards':
                title.textContent = 'Cards';
                body.html(content.querySelector('.cards').innerHTML);
                initCardsJs(); 
                body[0].className = 'bg_gray';              
                break;
            case 'elements':
                title.textContent = 'Form Elements';
                body.html(content.querySelector('.elements').innerHTML);
                initElementsJs();
                body[0].className = 'bg_white';  
                break;    
            case 'cat':
                title.textContent = 'Colors and Type';
                body.html(content.querySelector('.cat').innerHTML);
                body[0].className = 'bg_white'; 
                break;
            case 'haf':
                title.textContent = 'Headers and Footers';
                body.html(content.querySelector('.haf').innerHTML);
                body[0].className = 'bg_gray';
                break;                                    
        }
        body.append(t); 
    }

    toggleClass(className) {
        this.placeholder[0].className = className;
    }

    helperFunctions() {
        initHeaderJs();
        initFooterJs();
    }

    destroy() {
        window.removeEventListener('hashchange', this.changePageHandler);
    }
}