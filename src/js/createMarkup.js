import { format } from 'date-fns';

const weatherWrapper = document.querySelector('.weather__wrapper');
const swiperList = document.querySelector('.city-slider__wrapper');

export const createMarkup = ({ name, main, sys, clouds, weather }) => {
  //   const sunrise = format(new Date(sys.sunrise * 1000), 'H:m');
  //   const sunset = format(new Date(sys.sunset * 1000), 'H:m');
  const day = format(new Date(), 'EEEE');
  const date = format(new Date(), 'cc LLL');
  const screenWidth = window.innerWidth;
  let numItems = 1;
  console.log(main);

  const markup = `<div class="buttonsOneOrFive"><button class="btn-today btn-isActive">TODAY</button><button class="btn-five">5 DAYS</button></div>
  <div class="weather__card">
      <h2 class="city-name">${name}, ${sys.country}</h2>
      <ul class="weather-info list">    
      </ul>    
  </div>`;
  weatherWrapper.insertAdjacentHTML('beforeend', markup);

  if (screenWidth >= 768) {
    numItems = 5;
  } else if (screenWidth >= 320) {
    numItems = 3;
  }

  const weatherInfo = document.querySelector('.weather-info');

  let itemsMarkup = '';
  for (let i = 0; i < numItems; i++) {
    itemsMarkup += `
          <li class="weather-info-item">
              <p class="day">${day}</p>
              <p class="date">${date}</p>
              <img class="weather-img" src="https://openweathermap.org/img/wn/${
                weather[0].icon
              }@2x.png" alt="${weather[0].description}" />
              <div class="temperature">
                <p class="min-temperature">min <span class="teperature-span">${main.temp_min.toFixed(
                  0
                )}<sup>&#176;</sup></span></p>
                <hr class="vertical-line">
                <p class="max-temperature">max <span class="teperature-span">${main.temp_max.toFixed(
                  0
                )}<sup>&#176;</sup></span></p>
              </div> 
              <p class="more-info-card">more info</p>
          </li>`;
  }
  weatherInfo.insertAdjacentHTML('beforeend', itemsMarkup);
};

export const createFavoriteCities = items => {
  const markup = items
    .map((el, index) => {
      return `<li data-name="${el}" data-hash="slide-${
        index + 1
      }" class="city-slider__slide swiper-slide">
              ${el}
            <button class="deleteFavoriteBtn"><svg class="close-favorite" width="12px" height="12px">
            <use href="../img/sprite.svg#icon-close"></use>
          </svg></button></li>`;
    })
    .join('');
  swiperList.insertAdjacentHTML('beforeend', markup);
};

//   <li class="weather-info-item">
// <p class="temp">Температура: ${main.temp}<sup>&#176;</sup></p>
//       <p class="feels-like-temp">Відчувається як: ${main.feels_like}<sup>&#176;</sup></p>
//   </li>
//   <li class="weather-info-item">
//       <p class="sunrise-time">Схід сонця: ${sunrise}</p>
//   </li>
//   <li class="weather-info-item">
//       <p class="sunset-time">Захід сонця: ${sunset}</p>
//   </li>
//   <li class="weather-info-item">
//       <p class="clouds">Хмарність: ${clouds.all}%</p>
//   </li>
//   <li><img src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt="${weather[0].description}" /></li>
