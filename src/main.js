import 'material-icons/iconfont/material-icons.css';
import { createMarkup } from './js/createMarkup';
import { getWeatherByCoords, getWeatherByQuery } from './js/api/weatherApi';
import { getUserInfo } from './js/api/opencagedataApi';
import { getPhotos } from './js/api/pixabayApi';
import { setBackground } from './js/helpers/setBackground';
import { format } from 'date-fns';
import { refs } from './js/refs';

loadPage();

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

function loadPage() {
  const success = pos => {
    getWeatherByCoords(pos.coords).then(createMarkup);
    getUserInfo(pos.coords).then(getPhotos).then(setBackground);
  };

  navigator.geolocation.getCurrentPosition(success);
}

const timer = setInterval(() => {
  refs.dateSpan.textContent = format(new Date(), 'MMM do');
  refs.timeSpan.textContent = format(new Date(), 'HH:mm:ss');
}, 1000);
