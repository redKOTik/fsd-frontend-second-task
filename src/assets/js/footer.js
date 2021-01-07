import handleWidgetElementClick from '../../blocks/footer/footer';

export function initFooterJs() {
    $('.widget-list__element_highlighted').on('click', handleWidgetElementClick);
};