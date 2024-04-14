import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export const swiper = new Swiper('.city-slider', {
  modules: [Navigation],
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  slidesPerView: 'auto',
  loop: false,
  createElements: true,
  // centeredSlides: false,

  // slidesPerView: 'auto',
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
