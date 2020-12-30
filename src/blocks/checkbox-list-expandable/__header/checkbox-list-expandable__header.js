export function handleListExpandableToggle(event) {
    const target = event.currentTarget.parentNode;
    const arrow = target.querySelector('.checkbox-list-expandable__arrow');

    target.classList.toggle('checkbox-list-expandable_type_collapsed');
    target.classList.toggle('checkbox-list-expandable_type_expanded');

    arrow.classList.toggle('checkbox-list-expandable__arrow_icon_collapsed');
    arrow.classList.toggle('checkbox-list-expandable__arrow_icon_expanded');
}