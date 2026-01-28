import Swiper from 'swiper';
import { Navigation, Thumbs } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// Import custom styles
import './product-overhaul.css';

document.addEventListener('DOMContentLoaded', () => {
    console.log('🎨 Product Overhaul JS loaded!');

    // Check if Swiper elements exist
    const thumbSlider = document.querySelector('.thumb-slider-vertical');
    const mainSlider = document.querySelector('.main-image-slider');

    console.log('Thumb slider found:', !!thumbSlider);
    console.log('Main slider found:', !!mainSlider);

    if (!thumbSlider || !mainSlider) {
        console.error('❌ Swiper elements not found! Make sure you are using the product-overhaul template.');
        return;
    }

    // 1. Thumbnail slider (Vertical layout for the left side)
    const swiperThumbs = new Swiper(".thumb-slider-vertical", {
        modules: [Thumbs],
        direction: "vertical", // As specified in the design
        slidesPerView: 4,
        spaceBetween: 10,
        watchSlidesProgress: true,
        freeMode: true
    });

    console.log('✅ Thumbnail slider initialized');

    // 2. Main image slider
    const mainSwiperInstance = new Swiper(".main-image-slider", {
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

    console.log('✅ Main slider initialized');
});