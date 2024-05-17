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
import { list } from './js/list.js';
import { myChart } from './js/weatherChart.js';

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

const weatherInfo = document.querySelector('.weather-info');
const weatherCard = document.querySelector('.weather__card');
const moreInfo = document.querySelector('.more-info');
const moreInfoList = document.querySelector('.more-info-list');

weatherInfo.addEventListener('click', wheatherInfoClick);

function wheatherInfoClick(e) {
  if (!e.target.classList.contains('more-info-btn')) return;
  weatherCard.style.height = '556px';
  moreInfo.style.display = 'block';
  const newList = JSON.parse(e.target.dataset.weather);
  const markupMoreInfo = newList
    .map(el => {
      return `<li class="more-info-item swiper-slide">
      <div class="more-info-item-div">
       <p class="weather-time">${el.time}</p>
          <img class="weather-img" src="https://openweathermap.org/img/wn/${
            el.icon
          }@2x.png" alt="${el.description}" />
          <p class="temperature-moreInfo">${Math.round(el.temp)}&#176;</p>
          <div class="barometer-container">
            <svg class="barometer" width="20px" height="20px">
              <use href="../img/symbol-defs.svg#icon-barometer"></use>
            </svg>
            <p class="barometer-value">${el.pressure}</p>
          </div>
          <div class="humidity-container">
            <svg class="humidity" width="20px" height="20px">
              <use href="../img/symbol-defs.svg#icon-humidity"></use>
            </svg>
            <p class="humidity-value">${el.humidity}</p>
          </div>
          <div class="wind-container">
            <svg class="wind" width="20px" height="20px">
              <use href="../img/symbol-defs.svg#icon-wind"></use>
            </svg>
            <p class="wind-value">${el.wind}</p>
          </div>
      </div> 
    </li>`;
    })
    .join('');

  moreInfoList.innerHTML = markupMoreInfo;
}
