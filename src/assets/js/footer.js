export function initFooterJs() {
    $('.list__element_active').on('click', (e) => {
        e.currentTarget.parentNode.querySelectorAll('.list__element').forEach(item => {
            if (!item.classList.contains('list__element_active')) {
                item.classList.toggle('list__element_expanded');
            }        
        })
    });
};