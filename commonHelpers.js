import{r as o}from"./assets/refs-cbf76b81.js";import{f as s,a as r}from"./assets/vendor-8dfef7e7.js";const d=document.querySelector(".weather__wrapper"),i=({name:e,main:t,sys:a,clouds:n,weather:c})=>{const p=s(new Date(a.sunrise*1e3),"H:m"),m=s(new Date(a.sunset*1e3),"H:m"),u=`<div class="weather__card">
      <h2 class="city-name">${e}</h2>
      <ul class="weather-info list">
          <li class="weather-info-item">
              <p class="temp">Температура: ${t.temp}<sup>&#176;</sup></p>
          </li>
          <li class="weather-info-item">
              <p class="feels-like-temp">Відчувається як: ${t.feels_like}<sup>&#176;</sup></p>
          </li>
          <li class="weather-info-item">
              <p class="sunrise-time">Схід сонця: ${p}</p>
          </li>
          <li class="weather-info-item">
              <p class="sunset-time">Захід сонця: ${m}</p>
          </li>
          <li class="weather-info-item">
              <p class="clouds">Хмарність: ${n.all}%</p>
          </li>
          <li><img src="https://openweathermap.org/img/wn/${c[0].icon}@2x.png" alt="${c[0].description}" /></li>
      </ul>
  </div>`;d.insertAdjacentHTML("beforeend",u)},l=r.create({baseURL:"https://api.openweathermap.org/data/2.5",params:{appid:"95632b02f9162f375a368971925f5209",units:"metric"}}),g=async e=>{const{data:t}=await l.get("/weather",{params:{q:e}});return t},h=async({latitude:e,longitude:t})=>{const{data:a}=await l.get("/weather",{params:{lat:e,lon:t}});return a},f=r.create({baseURL:"https://api.opencagedata.com/geocode/v1/json",params:{key:"d4683b09d0c94ec0aebf0b2e043decbf",language:"en"}}),w=async({latitude:e,longitude:t})=>{const a=`?q=${e}+${t}`,{data:n}=await f.get(a);return n.results[0].components.country},b=r.create({baseURL:"https://pixabay.com/api/",params:{image_type:"backgrounds",orientation:"horizontal",per_page:"40",key:"37485893-252f507e861118bf45a5e3b29"}}),y=async e=>{const{data:t}=await b.get("",{params:{q:e}});return t.hits},$=e=>Math.floor(Math.random()*(e+1)+1),k=e=>{const t=$(e.length-1);console.log(t);const{largeImageURL:a}=e[t];document.body.style=`background: linear-gradient(rgba(255, 255, 53, 0.1), rgba(48, 62, 143, 0.1 )),
  url('${a}') center fixed; background-size: cover;`};x();o.form.addEventListener("submit",v);function v(e){e.preventDefault();const{value:t}=e.target.elements.user_country;t&&g(t).then(a=>{i(a)})}function x(){const e=t=>{h(t.coords).then(i),w(t.coords).then(y).then(k)};navigator.geolocation.getCurrentPosition(e)}setInterval(()=>{o.dateSpan.textContent=s(new Date,"MMM do"),o.timeSpan.textContent=s(new Date,"HH:mm:ss")},1e3);
//# sourceMappingURL=commonHelpers.js.map
