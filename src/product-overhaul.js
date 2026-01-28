import Swiper from 'swiper';
import { Navigation, Thumbs } from 'swiper/modules';

// Import only the required styles for the bundle
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Thumbnail slider (Vertical layout for the left side)
    const swiperThumbs = new Swiper(".thumb-slider-vertical", {
        modules: [Thumbs],
        direction: "vertical", // As specified in the design
        slidesPerView: 4,
        spaceBetween: 10,
        watchSlidesProgress: true,
        freeMode: true
    });

    // 2. Main image slider
    new Swiper(".main-image-slider", {
        modules: [Navigation, Thumbs],
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiperThumbs, // Connect main slider to the thumbnail slider
        },
    });
});