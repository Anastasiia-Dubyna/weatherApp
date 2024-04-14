import 'material-icons/iconfont/material-icons.css';
import { createMarkupOneDay } from './js/createMarkup';
import { getWeatherByCoords } from './js/api/weatherApi';
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
