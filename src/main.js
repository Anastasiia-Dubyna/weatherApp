import 'material-icons/iconfont/material-icons.css';
import { createFavoriteCities, createMarkup } from './js/createMarkup';
import { getWeatherByCoords, getWeatherByQuery } from './js/api/weatherApi';
import { getUserInfo } from './js/api/opencagedataApi';
import { getPhotos } from './js/api/pixabayApi';
import { setBackground } from './js/helpers/setBackground';
import { format } from 'date-fns';
import { refs } from './js/refs';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { save, load } from './js/storage.js';
import { btnAddFavorite, btnRemoveFavorite } from './js/favoriteBtn.js';

loadPage();

const swiper = new Swiper('.city-slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 2,
  loop: false,
  createElements: true,
  pagination: true,
  centeredSlides: false,
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
  },
});

const persistedFavorites = load('favorite') || [];
createFavoriteCities(persistedFavorites);

refs.form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const { value } = e.target.elements.user_country;
  if (!value) {
    return;
  }
  getWeatherByQuery(value).then(data => {
    createMarkup(data);
  });
}

refs.saveFavoriteBtn.addEventListener('click', saveFavorite);

function saveFavorite() {
  persistedFavorites.push(refs.form.elements.user_country.value);
  save('favorite', persistedFavorites);

  createFavoriteCities([refs.form.elements.user_country.value]);

  btnAddFavorite();
}

refs.form.addEventListener('input', handleInput);

function handleInput(e) {
  const value = e.target.value.toLowerCase();
  if (persistedFavorites.find(element => element.toLowerCase() === value)) {
    btnAddFavorite();
    return;
  }
  btnRemoveFavorite();
}

refs.swiperList.addEventListener('click', handleFavoriteClick);

function handleFavoriteClick(e) {
  if (e.target.nodeName === 'UL') {
    return;
  }
  if (e.target.nodeName === 'BUTTON') {
    const item = e.target.parentNode;
    const filteredFavorites = persistedFavorites.filter(
      el => el.toLowerCase() !== item.dataset.name.toLowerCase()
    );

    save('favorite', filteredFavorites);
    item.remove();
  }
  if (e.target.nodeName === 'LI') {
    form.elements.search.value = e.target.dataset.name;
    btnAddFavorite();
  }
}

swiper.update();

function loadPage() {
  load();
  const success = pos => {
    getWeatherByCoords(pos.coords).then(createMarkup);
    getUserInfo(pos.coords).then(getPhotos).then(setBackground);
  };

  navigator.geolocation.getCurrentPosition(success);
}

// const timer = setInterval(() => {
//   refs.dateSpan.textContent = format(new Date(), 'MMM do');
//   refs.timeSpan.textContent = format(new Date(), 'HH:mm:ss');
// }, 1000);
// function renderListItems() {
//   const screenWidth = window.innerWidth;
//   const list = document.querySelector('.weather-info.list');
//   let numItems = 1;

//   if (screenWidth >= 768) {
//     numItems = 5;
//   } else if (screenWidth >= 320) {
//     numItems = 3;
//   }

//   let itemsMarkup = '';
//   for (let i = 0; i < numItems; i++) {
//     itemsMarkup += `
//             <li class="weather-info-item">
//                 <p class="day">${day}</p>
//                 <p class="date">${date}</p>
//                 <img class="weather-img" src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png"
//                     alt="${weather[0].description}" />
//                 <div class="temperature">
//                     <p class="min-temperature">min ${main.temp_min}<sup>&#176;</sup></p>
//                     <hr class="vertical-line">
//                     <p class="max-temperature">max ${main.temp_max}<sup>&#176;</sup></p>
//                 </div>
//                 <p class="more-info-card">more info</p>
//             </li>`;
//   }

//   list.innerHTML = itemsMarkup;
// }

// window.addEventListener('resize', renderListItems);
// renderListItems();
