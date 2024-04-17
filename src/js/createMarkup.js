import { format } from 'date-fns';

const weatherWrapper = document.querySelector('.weather__wrapper');
const swiperList = document.querySelector('.city-slider__wrapper');
const weatherWrapperOneDay = document.querySelector('.weather__wrapper-oneDay');
const weatherWrapperOneDayDate = document.querySelector(
  '.weather__wrapper-oneDayDate'
);

export const createMarkupFiveDays = data => {
  console.log(data);
  // const day = format(new Date(), 'EEEE');
  // const date = format(new Date(), 'cc LLL');

  // const screenWidth = window.innerWidth;
  // let numItems = 1;
  // const markup = `
  // <div class="weather__card">
  //     <h2 class="city-name">${name}, ${sys.country}</h2>
  //     <ul class="weather-info list">
  //     </ul>
  // </div>`;
  // weatherWrapper.innerHTML = markup;

  // if (screenWidth >= 768) {
  //   numItems = 5;
  // } else if (screenWidth >= 320) {
  //   numItems = 3;
  // }

  // const weatherInfo = document.querySelector('.weather-info');

  // let itemsMarkup = '';
  // for (let i = 0; i < numItems; i++) {
  //   itemsMarkup += `
  //         <li class="weather-info-item">
  //             <p class="day">${day}</p>
  //             <p class="date">${date}</p>
  //             <img class="weather-img" src="https://openweathermap.org/img/wn/${
  //               weather[0].icon
  //             }@2x.png" alt="${weather[0].description}" />
  //             <div class="temperature">
  //               <div><p class="min-temperature">min </p>
  //               <span class="teperature-span">${main.temp_min.toFixed(
  //                 0
  //               )}&#176;</span></div>
  //               <div><p class="max-temperature">max </p>
  //               <span class="teperature-span">${main.temp_max.toFixed(
  //                 0
  //               )}&#176;</span></div>
  //             </div>
  //             <p class="more-info-card">more info</p>
  //         </li>`;
  // }
  // weatherInfo.innerHTML = itemsMarkup;

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
  sunrise.textContent = format(new Date(sys.sunrise * 1000), 'HH:mm');
  sunset.textContent = format(new Date(sys.sunset * 1000), 'HH:mm');
};
