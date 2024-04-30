import 'material-icons/iconfont/material-icons.css';
import {
  createMarkupFiveDays,
  createMarkupFiveDaysMoreInfo,
  createMarkupOneDay,
} from './js/createMarkup';
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
weatherInfo.addEventListener('click', wheatherInfoClick);

function wheatherInfoClick(e) {
  if (!e.target.classList.contains('more-info-btn')) return;
  weatherCard.style.height = '556px';
  moreInfo.style.display = 'block';
  getWeatherForFiveDays(coords).then(createMarkupFiveDaysMoreInfo);
  //   const moreInfoClicked = data => {
  //     newList.map(el => {
  //       return ` <div class="more-info">
  //     <ul class="more-info-list">
  //       <li class="more-info-item">
  //         <p class="weather-time"></p>
  //         <img class="weather-img" src="https://openweathermap.org/img/wn/${
  //           el.icon
  //         }@2x.png" alt="${el.description}" />
  //         <p class="temperature-moreInfo">${el.temp.toFixed(0)}</p>
  //         <div>
  //           <svg class="barometer" width="20px" height="20px">
  //             <use href="../img/symbol-defs.svg#icon-barometer"></use>
  //           </svg>
  //           <p class="barometer-value">${el}</p>
  //         </div>
  //         <div>
  //           <svg class="humidity" width="20px" height="20px">
  //             <use href="../img/symbol-defs.svg#icon-humidity"></use>
  //           </svg>
  //           <p class="humidity-value"></p>
  //         </div>
  //         <div>
  //           <svg class="wind" width="20px" height="20px">
  //             <use href="../img/symbol-defs.svg#icon-wind"></use>
  //           </svg>
  //           <p class="wind-value"></p>
  //         </div>
  //       </li>
  //     </ul>
  //   </div>`;
  //     });
  //   };
}

// console.log(list);
// const newList = list.reduce((acc, { dt_txt, weather, main, wind }, index) => {
//   const day = format(new Date(dt_txt), 'EEEE');
//   const date = format(new Date(dt_txt), 'dd LLL');
//   const time = format(new Date(dt_txt), 'kk:mm');
//   const temp = acc.length;
//   const weatherByHours = {
//     temp: main.temp,
//     pressure: main.pressure,
//     humidity: main.humidity,
//     wind: wind.speed,
//     icon: weather[0].icon,
//     time,
//   };
//   if (day === acc[acc?.length - 1]?.day) {
//     acc[acc.length - 1].weather.push(weatherByHours);
//     acc[acc.length - 1].min += main.temp_min;
//     acc[acc.length - 1].max += main.temp_max;
//   } else {
//     if (acc.length > 0) {
//       const lastEl = acc[acc.length - 1];
//       lastEl.min = Math.round(lastEl.min / lastEl.weather.length);
//       lastEl.max = Math.round(lastEl.max / lastEl.weather.length);
//     }
//     acc.push({
//       day,
//       date,
//       weather: [weatherByHours],
//       icon: weather[0].icon,
//       min: main.temp_min,
//       max: main.temp_max,
//     });
//   }
//   console.log('length', acc.length);
//   console.log(temp);
//   if (index === 39) {
//     const lastEl = acc[acc.length - 1];
//     lastEl.min = Math.round(lastEl.min / lastEl.weather.length);
//     lastEl.max = Math.round(lastEl.max / lastEl.weather.length);
//   }
//   return acc;
// }, []);
// console.log(newList);
