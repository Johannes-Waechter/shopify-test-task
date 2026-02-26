/**
 * @file product-overhaul.js
 * @description Custom product gallery implementation using Swiper.js
 * Features:
 * - Vertical thumbnail slider (synced)
 * - Main image slider with loop and zoom capability
 * - Responsive layout (vertical thumbs on desktop, pagination on mobile)
 * - Optimized for Shopify "Product Overhaul" template
 * 
 * @requires swiper
 * @version 1.0.0
 */

import Swiper from 'swiper';
import { Navigation, Thumbs, Pagination, Zoom, Keyboard } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';
import 'swiper/css/zoom';
import 'swiper/css/keyboard';

// Import custom styles
import './product-overhaul.css';
import './product-details.css';

/**
 * Initializes the product gallery sliders when DOM is ready.
 * Checks for existence of slider elements before initialization.
 */
document.addEventListener('DOMContentLoaded', () => {
    // console.log(' Product Overhaul JS loaded!');

    // Check if Swiper elements exist
    const thumbSlider = document.querySelector('.thumb-slider-vertical');
    const mainSlider = document.querySelector('.main-image-slider');

    // console.log('Thumb slider found:', !!thumbSlider);
    // console.log('Main slider found:', !!mainSlider);

    if (!thumbSlider || !mainSlider) {
        console.error('Swiper elements not found! Make sure you are using the product-overhaul template.');
        return;
    }

    /**
     * 1. Thumbnail Slider Configuration
     * Vertical slider displayed on the left side (Desktop)
     * @type {Swiper}
     */
    const swiperThumbs = new Swiper(".thumb-slider-vertical", {
        modules: [Thumbs],
        direction: "vertical",
        slidesPerView: 4,
        spaceBetween: 15, // Exact 15px spacing between thumbnails
        watchSlidesProgress: true,
        freeMode: true
    });

    // console.log('✅ Thumbnail slider initialized');

    /**
     * 2. Main Image Slider Configuration
     * The primary product image display.
     * Features: Loop, Navigation arrows, Pagination (mobile), Sync with thumbs.
     * @type {Swiper}
     */
    const mainSwiperInstance = new Swiper(".main-image-slider", {
        modules: [Navigation, Thumbs, Pagination, Zoom, Keyboard],
        zoom: true,
        keyboard: {
            enabled: true,
        },
        loop: true,
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',

        // Navigation arrows (Desktop)
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        // Pagination dots (Mobile)
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: false,
        },

        // Sync with thumbnail slider
        thumbs: {
            swiper: swiperThumbs,
        },

        // Responsive Breakpoints
        breakpoints: {
            // Mobile: < 750px
            0: {
                spaceBetween: 5, // Spacing between slides on mobile
                centeredSlides: true,
                slidesPerView: 'auto',
            },
            // Desktop: >= 750px
            750: {
                spaceBetween: 10,
                centeredSlides: false,
                slidesPerView: 1, // Show single full image
            }
        }
    });

    // console.log(' Main slider initialized');
});