export default function handleWidgetElementClick(e) {
  e.currentTarget.parentNode
    .querySelectorAll('.widget-list__element')
    .forEach((item) => {
      if (!item.classList.contains('widget-list__element_highlighted')) {
        item.classList.toggle('widget-list__element_expanded');
      }
    });
}
