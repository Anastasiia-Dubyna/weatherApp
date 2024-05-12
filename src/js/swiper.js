import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export const swiper = new Swiper('.city-slider', {
  modules: [Navigation],
  navigation: {
    nextEl: '.button-next-favorite',
    prevEl: '.button-prev-favorite',
  },
  loop: false,
  createElements: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1280: {
      slidesPerView: 4,
    },
  },
});

export const swiperFiveDays = new Swiper('.fiveDaysSwiper-slider', {
  modules: [Navigation],
  navigation: {
    nextEl: '.button-next-fiveDaysSwiper',
    prevEl: '.button-prev-fiveDaysSwiper',
  },
  // slidesPerView: 3,
  loop: false,
  createElements: true,
  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 17,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 24,
      height: 180,
    },
    1280: {
      slidesPerView: 5,
      spaceBetween: 32,
    },
  },
});

export const swiperMoreInfo = new Swiper('.weather-slider', {
  modules: [Navigation],
  navigation: {
    nextEl: '.button-next-weather',
    prevEl: '.button-prev-weather',
  },
  // slidesPerView: 3,
  loop: false,
  createElements: true,
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 16,
    },
    1280: {
      slidesPerView: 7,
      spaceBetween: 16,
    },
  },
});
