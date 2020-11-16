export function initHeaderJs() {
    $('.control__login').on('click', () => {
        window.location.href = '#login';
    });
    
    $('.control__register').on('click', () => {
        window.location.href = '#register';
    });
};