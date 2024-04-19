import 'material-icons/iconfont/material-icons.css';
import { createMarkupFiveDays, createMarkupOneDay } from './js/createMarkup';
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
import { format } from 'date-fns';

let coords = {};
loadPage();

function loadPage() {
  updateFavorites();
  updateCurrentTime();
  const success = pos => {
    coords = pos.coords;
    getWeatherByCoords(pos.coords).then(createMarkupOneDay);
    // getWeatherByCoords(pos.coords).then(createMarkupWeatherDate);

    getUserInfo(pos.coords).then(getPhotos).then(setBackground);
  };

  navigator.geolocation.getCurrentPosition(success);
}

const buttonsOneOrFive = document.querySelector('.buttonsOneOrFive');
const weatherWrapperOneDay = document.querySelector('.weather__wrapper-oneDay');
const weatherWrapperOneDayDate = document.querySelector(
  '.weather__wrapper-oneDayDate'
);
const weatherWrapper = document.querySelector('.weather__wrapper');
const wrapper = document.querySelector('.wrapper');
const chart = document.querySelector('.chart');

buttonsOneOrFive.addEventListener('click', fiveDaysInfo);

function fiveDaysInfo(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const fiveDay = document.querySelector('.btn-five');
  const oneDay = document.querySelector('.btn-today');
  if (e.target.dataset.day === 'five') {
    weatherWrapperOneDay.style.display = 'none';
    weatherWrapperOneDayDate.style.display = 'none';
    weatherWrapper.style.display = 'block';
    chart.style.display = 'block';
    wrapper.classList.add('wrapper-with-margin');
    fiveDay.disabled = true;
    oneDay.disabled = false;
    fiveDay.classList.remove('btn-disActive');
    oneDay.classList.add('btn-disActive');
    getWeatherForFiveDays(coords).then(createMarkupFiveDays);
    return;
  }
  oneDay.classList.remove('btn-disActive');
  fiveDay.classList.add('btn-disActive');
  oneDay.disabled = true;
  fiveDay.disabled = false;
  weatherWrapperOneDay.style.display = 'flex';
  weatherWrapperOneDayDate.style.display = 'flex';
  weatherWrapper.style.display = 'none';
  chart.style.display = 'none';
  wrapper.classList.remove('wrapper-with-margin');
}

// const newList = list.map(item => {
//   const date = format(new Date(item.dt * 1000), 'Pp');
//   const day = format(new Date(item.dt * 1000), 'EEEE');
//   console.log(day);
//   return { date, ...item };
// });
// console.log(newList);

// const newList = list.reduce((acc, item, index) => {
//   const day = format(new Date(item.dt * 1000), 'EEEE');
//   if (acc.length > 0 && day === acc[acc.length - 1].day) {
//     acc[acc.length - 1].day = day;
//   } else {
//     acc.push({ day });
//   }
//   return acc;
// }, []);
// console.log(newList);
