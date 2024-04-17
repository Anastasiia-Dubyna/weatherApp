import 'material-icons/iconfont/material-icons.css';
import { createMarkupOneDay } from './js/createMarkup';
import {
  getWeatherByCoords,
  getWeatherByQuery,
  getWeatherForFiveDays,
} from './js/api/weatherApi';
import { getUserInfo } from './js/api/opencagedataApi';
import { getPhotos } from './js/api/pixabayApi';
import { setBackground } from './js/helpers/setBackground';
import { updateCurrentTime } from './js/currentTime.js';
import { updateFavorites } from './js/saveFavorite.js';

loadPage();

function loadPage() {
  updateFavorites();
  updateCurrentTime();
  const success = pos => {
    getWeatherByCoords(pos.coords).then(createMarkupOneDay);
    // getWeatherByCoords(pos.coords).then(createMarkupWeatherDate);
    getUserInfo(pos.coords).then(getPhotos).then(setBackground);
  };

  navigator.geolocation.getCurrentPosition(success);
}

const fiveDaysBtn = document.querySelector('.btn-five');
const todayBtn = document.querySelector('.btn-today');

fiveDaysBtn.addEventListener('click', fiveDaysInfo);

function fiveDaysInfo(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const disActiveBtn = document.querySelector('.btn-disActive');
  if (disActiveBtn === e.currentTarget) {
    todayBtn.classList.add('btn-disActive');
    fiveDaysBtn.classList.remove('btn-disActive');
    return;
  }
}

// getWeatherForFiveDays();
// getWeatherByQuery();
