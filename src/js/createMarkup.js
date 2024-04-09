import { format } from 'date-fns';

const weatherWrapper = document.querySelector('.weather__wrapper');
const swiperList = document.querySelector('.city-slider__wrapper');
const weatherWrapperOneDay = document.querySelector('.weather__wrapper-oneDay');
const weatherWrapperOneDayDate = document.querySelector(
  '.weather__wrapper-oneDayDate'
);

export const createMarkupFiveDays = ({ name, main, sys, clouds, weather }) => {
  const day = format(new Date(), 'EEEE');
  const date = format(new Date(), 'cc LLL');

  const screenWidth = window.innerWidth;
  let numItems = 1;
  const markup = `
  <div class="weather__card">
      <h2 class="city-name">${name}, ${sys.country}</h2>
      <ul class="weather-info list">    
      </ul>    
  </div>`;
  weatherWrapper.innerHTML = markup;

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
                <div><p class="min-temperature">min </p>
                <span class="teperature-span">${main.temp_min.toFixed(
                  0
                )}&#176;</span></div>
                <div><p class="max-temperature">max </p>
                <span class="teperature-span">${main.temp_max.toFixed(
                  0
                )}&#176;</span></div>
              </div> 
              <p class="more-info-card">more info</p>
          </li>`;
  }
  weatherInfo.innerHTML = itemsMarkup;

  //   const moreInfo = document.querySelector('.more-info-card');

  //   moreInfo.addEventListener('click', () => {
  //     const createMoreMarkup = `<div><ul><li></li></ul></div>`;
  //   });
};

export const createFavoriteCities = items => {
  const markup = items
    .map((el, index) => {
      return `<li data-name="${el}" data-hash="slide-${
        index + 1
      }" class="city-slider__slide swiper-slide">
              ${el}
            <button class="deleteFavoriteBtn"><svg class="close-favorite" width="12px" height="12px">
            <use href="../img/symbol-defs.svg#icon-close"></use>
          </svg></button></li>`;
    })
    .join('');
  swiperList.insertAdjacentHTML('beforeend', markup);
};

export const createMarkupOneDay = ({ name, main, sys, weather }) => {
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
                <span class="teperature-span">${main.temp_min.toFixed(
                  0
                )}&#176;</span></div>
            <div>
                <p class="max-temperature">max </p>
                <span class="teperature-span">${main.temp_max.toFixed(
                  0
                )}&#176;</span>
            </div>
        </div> 
      </li>    
      </ul>    
  </div>`;
  weatherWrapperOneDay.innerHTML = markupOneDay;
};

export const createMarkupWeatherDate = ({ sys }) => {
  const timeSpan = document.querySelector('.timeSpan');
  const timer = setInterval(() => {
    timeSpan.textContent = format(new Date(), 'HH:mm:ss');
  }, 1000);
  const sunrise = format(new Date(sys.sunrise * 1000), 'HH:m');
  const sunset = format(new Date(sys.sunset * 1000), 'HH:m');
  const month = format(new Date(), 'LLLL');
  const date = format(new Date(), 'do E');
  const markupOneDayDate = `<div class="weather__card-date">
    <ul class="oneDayDateList">
      <li class="oneDayDateItem"> 
       <p class="dateOneDay">${date}</p>
       <div class="date-info">
       <div class="timeDate">
          <p class="month">${month}</p>
          <span class="timeSpan">${timer}</span>
       </div>
       <div class="sun-runing">
       <span class="sunrise"><svg class="sunrise-img" width="12px" height="12px">
            <use href="../img/symbol-defs.svg#icon-sunrise"></use>
          </svg></span>
         <p class="sunrise-time">${sunrise}</p>
         <span class="sunset"><svg class="sunset-img" width="12px" height="12px">
            <use href="../img/symbol-defs.svg#icon-sunset"></use>
          </svg></span>
         <p class="sunset-time">${sunset}</p>
       </div>
       </div>
      </li>    
    </ul>    
  </div>`;
  weatherWrapperOneDayDate.innerHTML = markupOneDayDate;
};
