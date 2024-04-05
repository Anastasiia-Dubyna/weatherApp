import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export const swiper = new Swiper('.city-slider', {
  modules: [Navigation],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 4,
  loop: false,
  createElements: true,
  pagination: true,
  centeredSlides: false,
  // breakpoints: {
  //   320: {
  //     slidesPerView: 2,
  //   },
  //   480: {
  //     slidesPerView: 3,
  //   },
  //   992: {
  //     slidesPerView: 4,
  //   },
  // },
});
