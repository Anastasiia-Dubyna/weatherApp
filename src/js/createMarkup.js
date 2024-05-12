import { format } from 'date-fns';
import { swiperFiveDays, swiperMoreInfo } from './swiper';

const swiperList = document.querySelector('.city-slider__wrapper');
const weatherWrapperOneDay = document.querySelector('.weather__wrapper-oneDay');
const cityNameForFiveDaysInfo = document.querySelector('.city-name');
const weatherInfo = document.querySelector('.weather-info');

export const createMarkupFiveDays = list => {
  const markupFive = list
    .slice(0, 5)
    .map(el => {
      cityNameForFiveDaysInfo.textContent = el.cityName + ', ' + el.country;
      return `
          <li class="weather-info-item swiper-slide">
              <p class="day">${el.day}</p>
              <p class="date">${el.date}</p>
              <img class="weather-img" src="https://openweathermap.org/img/wn/${
                el.icon
              }.png" alt="${el.description}" />
              <div class="temperature">
                <div><p class="min-temperature">min </p>
                <span class="temperature-span">${el.min}&#176;</span></div>
                <div><p class="max-temperature">max </p>
                <span class="temperature-span">${el.max}&#176;</span></div>
              </div>
              <div class="weather-info-button"><button class="more-info-btn" data-weather='${JSON.stringify(
                el.weather
              )}'>more info</button></div>
          </li>`;
    })
    .join('');

  weatherInfo.innerHTML = markupFive;
  swiperFiveDays.update();
  swiperMoreInfo.update();
};

export const createFavoriteCities = items => {
  const markup = items
    .map((el, index) => {
      return `<li data-name="${el}" data-hash="slide-${
        index + 1
      }" class="city-slider__slide swiper-slide">
              ${el}
            <button class="deleteFavoriteBtn"><svg class="close-favorite" width="12px" height="12px">
            <use href="/img/symbol-defs.svg#icon-close"></use>
          </svg></button></li>`;
    })
    .join('');
  swiperList.insertAdjacentHTML('beforeend', markup);
};

export const createMarkupOneDay = ({ name, main, sys, weather }) => {
  const sunset = document.querySelector('.sunset-time');
  const sunrise = document.querySelector('.sunrise-time');
  const markupOneDay = `<div class="weather__card-oneDay">
      <ul class="oneDayList">
      <li class="oneDayItem"> 
        <img class="weather-imgOneDay" src="https://openweathermap.org/img/wn/${
          weather[0].icon
        }@2x.png" alt="${weather[0].description}" />
        <h2 class="city-name-oneDay">${name}, ${sys.country}</h2>
        <p class="temperature-oneDay">${main.temp.toFixed(0)}</p>
        <div class="temperature">
            <div>
                <p class="min-temperature">min </p>
                <span class="temperature-span">${main.temp_min.toFixed(
                  0
                )}&#176;</span></div>
            <div>
                <p class="max-temperature">max </p>
                <span class="temperature-span">${main.temp_max.toFixed(
                  0
                )}&#176;</span>
            </div>
        </div> 
      </li>    
      </ul>    
  </div>`;
  weatherWrapperOneDay.innerHTML = markupOneDay;
  sunrise.textContent = format(new Date(sys.sunrise * 1000), 'HH:mm');
  sunset.textContent = format(new Date(sys.sunset * 1000), 'HH:mm');
};
