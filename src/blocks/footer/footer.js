export default function handleWidgetElementClick(e) {
  e.currentTarget.parentNode
    .querySelectorAll('.widget-list__element, .widget-list__element-special')
    .forEach((item) => {
      if (!item.classList.contains('widget-list__element_highlighted')) {
        item.classList.toggle('widget-list__element_expanded');
      }
    });
}
