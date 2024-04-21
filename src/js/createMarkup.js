import { format } from 'date-fns';

const swiperList = document.querySelector('.city-slider__wrapper');
const weatherWrapperOneDay = document.querySelector('.weather__wrapper-oneDay');
const cityName = document.querySelector('.city-name');
const weatherInfo = document.querySelector('.weather-info');

export const createMarkupFiveDays = data => {
  console.log(data);
  const icon = data.list[0].weather[0].icon;
  const description = data.list[0].weather[0].description;
  const tempMin = data.list[0].main.temp_min;
  const tempMax = data.list[0].main.temp_max;

  const newList = data.list.reduce((acc, item, index) => {
    const day = format(new Date(item.dt * 1000), 'EEEE');
    const date = format(new Date(item.dt * 1000), 'dd LLL');
    if (acc.length > 0 && day === acc[acc.length - 1].day) {
      acc[acc.length - 1].day = day;
      acc[acc.length - 1].date = date;
      acc[acc.length - 1].icon = icon;
      acc[acc.length - 1].description = description;
      acc[acc.length - 1].temp_min = tempMin;
      acc[acc.length - 1].temp_max = tempMax;
    } else {
      acc.push({ day, date, icon, description, tempMin, tempMax });
    }
    return acc;
  }, []);
  console.log(newList);

  const markupFive = newList.slice(0, 5).map(el => {
    console.log(el);
    return `
          <li class="weather-info-item">
              <p class="day">${el.day}</p>
              <p class="date">${el.date}</p>
              <img class="weather-img" src="https://openweathermap.org/img/wn/${
                el.icon
              }@2x.png" alt="${el.description}" />
              <div class="temperature">
                <div><p class="min-temperature">min </p>
                <span class="temperature-span">${el.tempMin.toFixed(
                  0
                )}&#176;</span></div>
                <div><p class="max-temperature">max </p>
                <span class="temperature-span">${el.tempMax.toFixed(
                  0
                )}&#176;</span></div>
              </div>
              <button class="more-info-btn">more info</button>
          </li>`;
  });

  // const dates = data.list
  //   .map(element => element.dt)
  //   .filter((el, index, arr) => arr.indexOf(el) === index);
  // console.log(dates);
  // const listItem = data.list.map(el => {
  //   console.log(el);
  //   data.list.filter(elem => elem.dt === el);
  // });
  // console.log(listItem);
  //   .map(el => {
  //     const day = format(new Date(el.dt * 1000), 'EEEE');
  //     const date = format(new Date(el.dt * 1000), 'cc LLL');
  //     console.log(el);
  //     return `
  //         <li class="weather-info-item">
  //             <p class="day">${day}</p>
  //             <p class="date">${date}</p>
  //             <img class="weather-img" src="https://openweathermap.org/img/wn/${
  //               el.weather[0].icon
  //             }@2x.png" alt="${el.weather[0].description}" />
  //             <div class="temperature">
  //               <div><p class="min-temperature">min </p>
  //               <span class="teperature-span">${el.main.temp_min.toFixed(
  //                 0
  //               )}&#176;</span></div>
  //               <div><p class="max-temperature">max </p>
  //               <span class="teperature-span">${el.main.temp_max.toFixed(
  //                 0
  //               )}&#176;</span></div>
  //             </div>
  //             <p class="more-info-card">more info</p>
  //         </li>`;
  //   });

  weatherInfo.innerHTML = markupFive;
  cityName.textContent = data.city.name + ', ' + data.city.country;

  // const moreInfo = document.querySelector('.more-info-btn');
  // moreInfo.addEventListener('click', moreInfoClicked);

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
