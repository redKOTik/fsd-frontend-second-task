import Sim from '@blocks/image-slider/image-slider';
import initPagination from '@blocks/pagination/pagination';
import { initFilterPlugins } from '@blocks/filter/filter';
import { initRates } from '@blocks/rate/rate.js';

export function initFilterJs() {

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
    };

    $('.filter').on('submit', handleFormSubmit);
    
    initFilterPlugins();

    $('.img-slider').each((i, slider) => {
        new Sim(slider.id);
    });

    initRates('.rate');

    initPagination('.search-room__pagination');
}