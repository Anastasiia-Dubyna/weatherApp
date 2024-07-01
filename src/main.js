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
import { myChart } from './js/weatherChart.js';
import { refs } from './js/refs.js';

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

refs.searchInput.addEventListener('keydown', checkWeather);

function checkWeather() {
  const enteredCity = searchInput.value;
  getWeatherByQuery(enteredCity)
    .then(createMarkupOneDay)
    .then(createMarkupFiveDays);
}

let chartData = {};
let chartVisible = false; // Змінна для відстеження стану відображення графіка

refs.showChart.addEventListener('click', showChartFunction);

function showChartFunction() {
  if (!chartVisible) {
    refs.weatherChart.style.display = 'flex';
    refs.showChartText.textContent = 'Hide Chart';
    refs.showChart.style.transform = 'rotate(180deg)';
    myChart(chartData);
    chartVisible = true;
  } else {
    refs.weatherChart.style.display = 'none';
    refs.showChartText.textContent = 'Show Chart';
    refs.showChart.style.transform = 'rotate(0deg)';
    chartVisible = false;
  }
}

refs.buttonsOneOrFive.addEventListener('click', fiveDaysInfo);

function fiveDaysInfo(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const fiveDay = document.querySelector('.btn-five');
  const oneDay = document.querySelector('.btn-today');
  if (e.target.dataset.day === 'five') {
    refs.weatherWrapperOneDay.style.display = 'none';
    refs.weatherWrapperOneDayDate.style.display = 'none';
    refs.weatherWrapper.style.display = 'block';
    refs.chart.style.display = 'block';
    refs.wrapper.classList.add('wrapper-with-margin');
    fiveDay.disabled = true;
    oneDay.disabled = false;
    fiveDay.classList.remove('btn-disActive');
    oneDay.classList.add('btn-disActive');
    getWeatherForFiveDays(coords).then(data => {
      createMarkupFiveDays(data);
      chartData = data;
    });
    return;
  }
  oneDay.classList.remove('btn-disActive');
  fiveDay.classList.add('btn-disActive');
  oneDay.disabled = true;
  fiveDay.disabled = false;
  refs.weatherWrapperOneDay.style.display = 'flex';
  refs.weatherWrapperOneDayDate.style.display = 'flex';
  refs.weatherWrapper.style.display = 'none';
  refs.chart.style.display = 'none';
  refs.wrapper.classList.remove('wrapper-with-margin');
}

refs.weatherInfo.addEventListener('click', wheatherInfoClick);

function wheatherInfoClick(e) {
  if (!e.target.classList.contains('more-info-btn')) return;
  refs.weatherCard.style.height = '556px';
  refs.moreInfo.style.display = 'block';
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

  refs.moreInfoList.innerHTML = markupMoreInfo;
}
