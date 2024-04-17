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
  wrapper.classList.remove('wrapper-with-margin');
}

const list = [
  {
    dt: 1713376800,
    main: {
      temp: 9.07,
      feels_like: 8.45,
      temp_min: 9.07,
      temp_max: 9.07,
      pressure: 1004,
      sea_level: 1004,
      grnd_level: 978,
      humidity: 56,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 1.63,
      deg: 164,
      gust: 1.58,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2024-04-17 18:00:00',
  },
  {
    dt: 1713387600,
    main: {
      temp: 8.72,
      feels_like: 7.75,
      temp_min: 8.03,
      temp_max: 8.72,
      pressure: 1004,
      sea_level: 1004,
      grnd_level: 979,
      humidity: 58,
      temp_kf: 0.69,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 1.95,
      deg: 241,
      gust: 1.88,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2024-04-17 21:00:00',
  },
  {
    dt: 1713398400,
    main: {
      temp: 8.14,
      feels_like: 7.1,
      temp_min: 7.68,
      temp_max: 8.14,
      pressure: 1004,
      sea_level: 1004,
      grnd_level: 979,
      humidity: 63,
      temp_kf: 0.46,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 1.92,
      deg: 294,
      gust: 1.99,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2024-04-18 00:00:00',
  },
  {
    dt: 1713409200,
    main: {
      temp: 6.61,
      feels_like: 5.4,
      temp_min: 6.61,
      temp_max: 6.61,
      pressure: 1004,
      sea_level: 1004,
      grnd_level: 979,
      humidity: 67,
      temp_kf: 0,
    },
    weather: [
      {
        id: 500,
        main: 'Rain',
        description: 'light rain',
        icon: '10n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 1.84,
      deg: 14,
      gust: 2.06,
    },
    visibility: 10000,
    pop: 0.2,
    rain: {
      '3h': 0.12,
    },
    sys: {
      pod: 'n',
    },
    dt_txt: '2024-04-18 03:00:00',
  },
  {
    dt: 1713420000,
    main: {
      temp: 7.9,
      feels_like: 5.4,
      temp_min: 7.9,
      temp_max: 7.9,
      pressure: 1006,
      sea_level: 1006,
      grnd_level: 980,
      humidity: 68,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04d',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 4.05,
      deg: 1,
      gust: 5.28,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'd',
    },
    dt_txt: '2024-04-18 06:00:00',
  },
  {
    dt: 1713430800,
    main: {
      temp: 10.03,
      feels_like: 8.66,
      temp_min: 10.03,
      temp_max: 10.03,
      pressure: 1005,
      sea_level: 1005,
      grnd_level: 980,
      humidity: 60,
      temp_kf: 0,
    },
    weather: [
      {
        id: 500,
        main: 'Rain',
        description: 'light rain',
        icon: '10d',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 4.53,
      deg: 0,
      gust: 5.47,
    },
    visibility: 10000,
    pop: 0.2,
    rain: {
      '3h': 0.18,
    },
    sys: {
      pod: 'd',
    },
    dt_txt: '2024-04-18 09:00:00',
  },
  {
    dt: 1713441600,
    main: {
      temp: 10.35,
      feels_like: 8.96,
      temp_min: 10.35,
      temp_max: 10.35,
      pressure: 1004,
      sea_level: 1004,
      grnd_level: 979,
      humidity: 58,
      temp_kf: 0,
    },
    weather: [
      {
        id: 500,
        main: 'Rain',
        description: 'light rain',
        icon: '10d',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 6.38,
      deg: 350,
      gust: 7.43,
    },
    visibility: 10000,
    pop: 1,
    rain: {
      '3h': 1.07,
    },
    sys: {
      pod: 'd',
    },
    dt_txt: '2024-04-18 12:00:00',
  },
  {
    dt: 1713452400,
    main: {
      temp: 8.66,
      feels_like: 5.3,
      temp_min: 8.66,
      temp_max: 8.66,
      pressure: 1005,
      sea_level: 1005,
      grnd_level: 980,
      humidity: 75,
      temp_kf: 0,
    },
    weather: [
      {
        id: 500,
        main: 'Rain',
        description: 'light rain',
        icon: '10d',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 6.74,
      deg: 333,
      gust: 8.83,
    },
    visibility: 10000,
    pop: 1,
    rain: {
      '3h': 1.43,
    },
    sys: {
      pod: 'd',
    },
    dt_txt: '2024-04-18 15:00:00',
  },
  {
    dt: 1713463200,
    main: {
      temp: 5.94,
      feels_like: 1.8,
      temp_min: 5.94,
      temp_max: 5.94,
      pressure: 1007,
      sea_level: 1007,
      grnd_level: 981,
      humidity: 82,
      temp_kf: 0,
    },
    weather: [
      {
        id: 500,
        main: 'Rain',
        description: 'light rain',
        icon: '10n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 6.77,
      deg: 324,
      gust: 12.13,
    },
    visibility: 10000,
    pop: 1,
    rain: {
      '3h': 0.65,
    },
    sys: {
      pod: 'n',
    },
    dt_txt: '2024-04-18 18:00:00',
  },
  {
    dt: 1713474000,
    main: {
      temp: 4.54,
      feels_like: 0.19,
      temp_min: 4.54,
      temp_max: 4.54,
      pressure: 1006,
      sea_level: 1006,
      grnd_level: 981,
      humidity: 84,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 6.31,
      deg: 312,
      gust: 12,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2024-04-18 21:00:00',
  },
  {
    dt: 1713484800,
    main: {
      temp: 3.01,
      feels_like: -2.1,
      temp_min: 3.01,
      temp_max: 3.01,
      pressure: 1007,
      sea_level: 1007,
      grnd_level: 981,
      humidity: 93,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 7.14,
      deg: 298,
      gust: 12.01,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2024-04-19 00:00:00',
  },
  {
    dt: 1713495600,
    main: {
      temp: 3.51,
      feels_like: -1.57,
      temp_min: 3.51,
      temp_max: 3.51,
      pressure: 1007,
      sea_level: 1007,
      grnd_level: 982,
      humidity: 91,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 7.45,
      deg: 293,
      gust: 12.18,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2024-04-19 03:00:00',
  },
  {
    dt: 1713506400,
    main: {
      temp: 3.03,
      feels_like: -1.9,
      temp_min: 3.03,
      temp_max: 3.03,
      pressure: 1009,
      sea_level: 1009,
      grnd_level: 983,
      humidity: 95,
      temp_kf: 0,
    },
    weather: [
      {
        id: 500,
        main: 'Rain',
        description: 'light rain',
        icon: '10d',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 6.7,
      deg: 295,
      gust: 10.69,
    },
    pop: 0.36,
    rain: {
      '3h': 0.56,
    },
    sys: {
      pod: 'd',
    },
    dt_txt: '2024-04-19 06:00:00',
  },
  {
    dt: 1713517200,
    main: {
      temp: 5.74,
      feels_like: 1.24,
      temp_min: 5.74,
      temp_max: 5.74,
      pressure: 1010,
      sea_level: 1010,
      grnd_level: 984,
      humidity: 68,
      temp_kf: 0,
    },
    weather: [
      {
        id: 500,
        main: 'Rain',
        description: 'light rain',
        icon: '10d',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 7.66,
      deg: 294,
      gust: 9.77,
    },
    visibility: 10000,
    pop: 0.2,
    rain: {
      '3h': 0.14,
    },
    sys: {
      pod: 'd',
    },
    dt_txt: '2024-04-19 09:00:00',
  },
  {
    dt: 1713528000,
    main: {
      temp: 7.75,
      feels_like: 4.9,
      temp_min: 7.75,
      temp_max: 7.75,
      pressure: 1010,
      sea_level: 1010,
      grnd_level: 984,
      humidity: 51,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04d',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 4.71,
      deg: 294,
      gust: 8.41,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'd',
    },
    dt_txt: '2024-04-19 12:00:00',
  },
  {
    dt: 1713538800,
    main: {
      temp: 9.51,
      feels_like: 7.01,
      temp_min: 9.51,
      temp_max: 9.51,
      pressure: 1009,
      sea_level: 1009,
      grnd_level: 984,
      humidity: 48,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04d',
      },
    ],
    clouds: {
      all: 99,
    },
    wind: {
      speed: 4.92,
      deg: 273,
      gust: 7.14,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'd',
    },
    dt_txt: '2024-04-19 15:00:00',
  },
  {
    dt: 1713549600,
    main: {
      temp: 5.54,
      feels_like: 2.94,
      temp_min: 5.54,
      temp_max: 5.54,
      pressure: 1011,
      sea_level: 1011,
      grnd_level: 985,
      humidity: 64,
      temp_kf: 0,
    },
    weather: [
      {
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 77,
    },
    wind: {
      speed: 3.31,
      deg: 234,
      gust: 7.44,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2024-04-19 18:00:00',
  },
  {
    dt: 1713560400,
    main: {
      temp: 4.08,
      feels_like: 1.18,
      temp_min: 4.08,
      temp_max: 4.08,
      pressure: 1011,
      sea_level: 1011,
      grnd_level: 985,
      humidity: 69,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 95,
    },
    wind: {
      speed: 3.3,
      deg: 202,
      gust: 8.29,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2024-04-19 21:00:00',
  },
  {
    dt: 1713571200,
    main: {
      temp: 3.6,
      feels_like: 0.04,
      temp_min: 3.6,
      temp_max: 3.6,
      pressure: 1011,
      sea_level: 1011,
      grnd_level: 985,
      humidity: 69,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 94,
    },
    wind: {
      speed: 4.16,
      deg: 192,
      gust: 12.53,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2024-04-20 00:00:00',
  },
  {
    dt: 1713582000,
    main: {
      temp: 3.75,
      feels_like: -0.21,
      temp_min: 3.75,
      temp_max: 3.75,
      pressure: 1011,
      sea_level: 1011,
      grnd_level: 985,
      humidity: 74,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 95,
    },
    wind: {
      speed: 4.96,
      deg: 187,
      gust: 11.92,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2024-04-20 03:00:00',
  },
  {
    dt: 1713592800,
    main: {
      temp: 7.25,
      feels_like: 3.51,
      temp_min: 7.25,
      temp_max: 7.25,
      pressure: 1012,
      sea_level: 1012,
      grnd_level: 987,
      humidity: 65,
      temp_kf: 0,
    },
    weather: [
      {
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: '04d',
      },
    ],
    clouds: {
      all: 64,
    },
    wind: {
      speed: 6.68,
      deg: 185,
      gust: 11.17,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'd',
    },
    dt_txt: '2024-04-20 06:00:00',
  },
  {
    dt: 1713603600,
    main: {
      temp: 10.62,
      feels_like: 9.12,
      temp_min: 10.62,
      temp_max: 10.62,
      pressure: 1013,
      sea_level: 1013,
      grnd_level: 988,
      humidity: 53,
      temp_kf: 0,
    },
    weather: [
      {
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: '04d',
      },
    ],
    clouds: {
      all: 81,
    },
    wind: {
      speed: 6.5,
      deg: 228,
      gust: 8.27,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'd',
    },
    dt_txt: '2024-04-20 09:00:00',
  },
  {
    dt: 1713614400,
    main: {
      temp: 11.89,
      feels_like: 10.47,
      temp_min: 11.89,
      temp_max: 11.89,
      pressure: 1013,
      sea_level: 1013,
      grnd_level: 988,
      humidity: 51,
      temp_kf: 0,
    },
    weather: [
      {
        id: 500,
        main: 'Rain',
        description: 'light rain',
        icon: '10d',
      },
    ],
    clouds: {
      all: 86,
    },
    wind: {
      speed: 4.59,
      deg: 232,
      gust: 6.5,
    },
    visibility: 10000,
    pop: 0.75,
    rain: {
      '3h': 0.59,
    },
    sys: {
      pod: 'd',
    },
    dt_txt: '2024-04-20 12:00:00',
  },
  {
    dt: 1713625200,
    main: {
      temp: 11.85,
      feels_like: 10.45,
      temp_min: 11.85,
      temp_max: 11.85,
      pressure: 1013,
      sea_level: 1013,
      grnd_level: 988,
      humidity: 52,
      temp_kf: 0,
    },
    weather: [
      {
        id: 500,
        main: 'Rain',
        description: 'light rain',
        icon: '10d',
      },
    ],
    clouds: {
      all: 99,
    },
    wind: {
      speed: 2.63,
      deg: 242,
      gust: 4.27,
    },
    visibility: 10000,
    pop: 1,
    rain: {
      '3h': 0.77,
    },
    sys: {
      pod: 'd',
    },
    dt_txt: '2024-04-20 15:00:00',
  },
  {
    dt: 1713636000,
    main: {
      temp: 7.91,
      feels_like: 6.44,
      temp_min: 7.91,
      temp_max: 7.91,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 989,
      humidity: 74,
      temp_kf: 0,
    },
    weather: [
      {
        id: 500,
        main: 'Rain',
        description: 'light rain',
        icon: '10n',
      },
    ],
    clouds: {
      all: 81,
    },
    wind: {
      speed: 2.38,
      deg: 359,
      gust: 2.42,
    },
    visibility: 10000,
    pop: 0.99,
    rain: {
      '3h': 0.15,
    },
    sys: {
      pod: 'n',
    },
    dt_txt: '2024-04-20 18:00:00',
  },
  {
    dt: 1713646800,
    main: {
      temp: 5.94,
      feels_like: 4.83,
      temp_min: 5.94,
      temp_max: 5.94,
      pressure: 1016,
      sea_level: 1016,
      grnd_level: 990,
      humidity: 80,
      temp_kf: 0,
    },
    weather: [
      {
        id: 802,
        main: 'Clouds',
        description: 'scattered clouds',
        icon: '03n',
      },
    ],
    clouds: {
      all: 39,
    },
    wind: {
      speed: 1.66,
      deg: 46,
      gust: 1.52,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2024-04-20 21:00:00',
  },
  {
    dt: 1713657600,
    main: {
      temp: 4.98,
      feels_like: 2.88,
      temp_min: 4.98,
      temp_max: 4.98,
      pressure: 1016,
      sea_level: 1016,
      grnd_level: 990,
      humidity: 84,
      temp_kf: 0,
    },
    weather: [
      {
        id: 802,
        main: 'Clouds',
        description: 'scattered clouds',
        icon: '03n',
      },
    ],
    clouds: {
      all: 44,
    },
    wind: {
      speed: 2.5,
      deg: 24,
      gust: 2.45,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2024-04-21 00:00:00',
  },
  {
    dt: 1713668400,
    main: {
      temp: 3.92,
      feels_like: 1.48,
      temp_min: 3.92,
      temp_max: 3.92,
      pressure: 1016,
      sea_level: 1016,
      grnd_level: 990,
      humidity: 89,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 2.66,
      deg: 29,
      gust: 3.36,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2024-04-21 03:00:00',
  },
  {
    dt: 1713679200,
    main: {
      temp: 7.56,
      feels_like: 5.14,
      temp_min: 7.56,
      temp_max: 7.56,
      pressure: 1016,
      sea_level: 1016,
      grnd_level: 991,
      humidity: 78,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04d',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 3.75,
      deg: 18,
      gust: 5.49,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'd',
    },
    dt_txt: '2024-04-21 06:00:00',
  },
  {
    dt: 1713690000,
    main: {
      temp: 11.99,
      feels_like: 10.84,
      temp_min: 11.99,
      temp_max: 11.99,
      pressure: 1016,
      sea_level: 1016,
      grnd_level: 990,
      humidity: 61,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04d',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 4.34,
      deg: 6,
      gust: 4.41,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'd',
    },
    dt_txt: '2024-04-21 09:00:00',
  },
  {
    dt: 1713700800,
    main: {
      temp: 13.39,
      feels_like: 12.14,
      temp_min: 13.39,
      temp_max: 13.39,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 990,
      humidity: 52,
      temp_kf: 0,
    },
    weather: [
      {
        id: 500,
        main: 'Rain',
        description: 'light rain',
        icon: '10d',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 4.85,
      deg: 21,
      gust: 5.76,
    },
    visibility: 10000,
    pop: 1,
    rain: {
      '3h': 0.99,
    },
    sys: {
      pod: 'd',
    },
    dt_txt: '2024-04-21 12:00:00',
  },
  {
    dt: 1713711600,
    main: {
      temp: 12.54,
      feels_like: 11.36,
      temp_min: 12.54,
      temp_max: 12.54,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 989,
      humidity: 58,
      temp_kf: 0,
    },
    weather: [
      {
        id: 500,
        main: 'Rain',
        description: 'light rain',
        icon: '10d',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 5,
      deg: 15,
      gust: 6.36,
    },
    visibility: 10000,
    pop: 0.97,
    rain: {
      '3h': 0.73,
    },
    sys: {
      pod: 'd',
    },
    dt_txt: '2024-04-21 15:00:00',
  },
  {
    dt: 1713722400,
    main: {
      temp: 7.94,
      feels_like: 5.74,
      temp_min: 7.94,
      temp_max: 7.94,
      pressure: 1016,
      sea_level: 1016,
      grnd_level: 990,
      humidity: 81,
      temp_kf: 0,
    },
    weather: [
      {
        id: 500,
        main: 'Rain',
        description: 'light rain',
        icon: '10n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 3.5,
      deg: 353,
      gust: 7.02,
    },
    visibility: 10000,
    pop: 0.89,
    rain: {
      '3h': 0.49,
    },
    sys: {
      pod: 'n',
    },
    dt_txt: '2024-04-21 18:00:00',
  },
  {
    dt: 1713733200,
    main: {
      temp: 5.96,
      feels_like: 3.46,
      temp_min: 5.96,
      temp_max: 5.96,
      pressure: 1016,
      sea_level: 1016,
      grnd_level: 990,
      humidity: 91,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 3.29,
      deg: 329,
      gust: 6.49,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2024-04-21 21:00:00',
  },
  {
    dt: 1713744000,
    main: {
      temp: 5.1,
      feels_like: 2.3,
      temp_min: 5.1,
      temp_max: 5.1,
      pressure: 1016,
      sea_level: 1016,
      grnd_level: 990,
      humidity: 96,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 95,
    },
    wind: {
      speed: 3.48,
      deg: 322,
      gust: 7.78,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2024-04-22 00:00:00',
  },
  {
    dt: 1713754800,
    main: {
      temp: 4.58,
      feels_like: 1.09,
      temp_min: 4.58,
      temp_max: 4.58,
      pressure: 1016,
      sea_level: 1016,
      grnd_level: 990,
      humidity: 94,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 4.46,
      deg: 320,
      gust: 11.27,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2024-04-22 03:00:00',
  },
  {
    dt: 1713765600,
    main: {
      temp: 7.4,
      feels_like: 3.97,
      temp_min: 7.4,
      temp_max: 7.4,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 990,
      humidity: 77,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04d',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 5.92,
      deg: 344,
      gust: 10.73,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'd',
    },
    dt_txt: '2024-04-22 06:00:00',
  },
  {
    dt: 1713776400,
    main: {
      temp: 9.93,
      feels_like: 6.8,
      temp_min: 9.93,
      temp_max: 9.93,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 990,
      humidity: 64,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04d',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 7.17,
      deg: 335,
      gust: 9.22,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'd',
    },
    dt_txt: '2024-04-22 09:00:00',
  },
  {
    dt: 1713787200,
    main: {
      temp: 11.08,
      feels_like: 9.76,
      temp_min: 11.08,
      temp_max: 11.08,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 990,
      humidity: 58,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04d',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 6.66,
      deg: 347,
      gust: 9.82,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'd',
    },
    dt_txt: '2024-04-22 12:00:00',
  },
  {
    dt: 1713798000,
    main: {
      temp: 10.67,
      feels_like: 9.41,
      temp_min: 10.67,
      temp_max: 10.67,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 990,
      humidity: 62,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04d',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 6.53,
      deg: 350,
      gust: 9.66,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'd',
    },
    dt_txt: '2024-04-22 15:00:00',
  },
];

// const newList = list.map(item => {
//   const date = format(new Date(item.dt * 1000), 'Pp');
//   const day = format(new Date(item.dt * 1000), 'EEEE');
//   console.log(day);
//   return { date, ...item };
// });
// console.log(newList);

const newList = list.reduce((acc, item, index) => {
  const day = format(new Date(item.dt * 1000), 'EEEE');
  if (acc.length > 0 && day === acc[acc.length - 1].day) {
    acc[acc.length - 1].day = day;
  } else {
    acc.push({ day });
  }
  return acc;
}, []);
// console.log([{day:"M"}, {day:"T"}]);
console.log(newList);
