import 'material-icons/iconfont/material-icons.css';
import {
  createFavoriteCities,
  createMarkupFiveDays,
  createMarkupOneDay,
  createMarkupWeatherDate,
} from './js/createMarkup';
import { getWeatherByCoords, getWeatherByQuery } from './js/api/weatherApi';
import { getUserInfo } from './js/api/opencagedataApi';
import { getPhotos } from './js/api/pixabayApi';
import { setBackground } from './js/helpers/setBackground';
import { refs } from './js/refs';
import { save, load } from './js/storage.js';
import { btnAddFavorite, btnRemoveFavorite } from './js/favoriteBtn.js';
import { swiper } from './js/swiper.js';

const persistedFavorites = load('favorite') || [];

loadPage();

refs.form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const { value } = e.target.elements.user_country;
  if (!value) {
    return;
  }
  getWeatherByQuery(value).then(createMarkupFiveDays);
}

refs.saveFavoriteBtn.addEventListener('click', saveFavorite);

function saveFavorite() {
  persistedFavorites.push(refs.form.elements.user_country.value);
  save('favorite', persistedFavorites);

  createFavoriteCities([refs.form.elements.user_country.value]);

  btnAddFavorite();
  swiper.update();
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
    refs.form.elements.user_country.value = e.target.dataset.name;
    getWeatherByQuery(e.target.dataset.name).then(createMarkupFiveDays);
    btnAddFavorite();
  }
}

function loadPage() {
  createFavoriteCities(persistedFavorites);
  swiper.update();
  const success = pos => {
    getWeatherByCoords(pos.coords).then(createMarkupOneDay);
    getWeatherByCoords(pos.coords).then(createMarkupWeatherDate);
    getUserInfo(pos.coords).then(getPhotos).then(setBackground);
  };

  navigator.geolocation.getCurrentPosition(success);
}
