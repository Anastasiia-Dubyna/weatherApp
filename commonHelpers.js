import{S as D,N as q,f as d,a as p}from"./assets/vendor-b2ad93f7.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}})();const $=new D(".city-slider",{modules:[q],navigation:{nextEl:".button-next-favorite",prevEl:".button-prev-favorite"},loop:!1,createElements:!0,breakpoints:{320:{slidesPerView:2,spaceBetween:10},768:{slidesPerView:4,spaceBetween:10},1280:{slidesPerView:4}}}),H=new D(".fiveDaysSwiper-slider",{modules:[q],navigation:{nextEl:".button-next-fiveDaysSwiper",prevEl:".button-prev-fiveDaysSwiper"},loop:!1,createElements:!0,breakpoints:{320:{slidesPerView:3,spaceBetween:17},768:{slidesPerView:5,spaceBetween:24,height:180},1280:{slidesPerView:5,spaceBetween:32}}}),T=document.querySelector(".city-slider__wrapper"),U=document.querySelector(".weather__wrapper-oneDay"),A=document.querySelector(".city-name"),W=document.querySelector(".weather-info"),m=t=>{const e=t.slice(0,5).map(r=>(A.textContent=r.cityName+", "+r.country,`
          <li class="weather-info-item swiper-slide">
              <p class="day">${r.day}</p>
              <p class="date">${r.date}</p>
              <img class="weather-img" src="https://openweathermap.org/img/wn/${r.icon}.png" alt="${r.description}" />
              <div class="temperature">
                <div><p class="min-temperature">min </p>
                <span class="temperature-span">${r.min}&#176;</span></div>
                <div><p class="max-temperature">max </p>
                <span class="temperature-span">${r.max}&#176;</span></div>
              </div>
              <div class="weather-info-button"><button class="more-info-btn" data-weather='${JSON.stringify(r.weather)}'>more info</button></div>
          </li>`)).join("");W.innerHTML=e,H.update()},F=t=>{const e=t.map((r,s)=>`<li data-name="${r}" data-hash="slide-${s+1}" class="city-slider__slide swiper-slide">
              ${r}
            <button class="deleteFavoriteBtn"><svg class="close-favorite" width="12px" height="12px">
            <use href="/img/symbol-defs.svg#icon-close"></use>
          </svg></button></li>`).join("");T.insertAdjacentHTML("beforeend",e)},R=({name:t,main:e,sys:r,weather:s})=>{const n=document.querySelector(".sunset-time"),a=document.querySelector(".sunrise-time"),o=`<div class="weather__card-oneDay">
      <ul class="oneDayList">
      <li class="oneDayItem"> 
        <img class="weather-imgOneDay" src="https://openweathermap.org/img/wn/${s[0].icon}@2x.png" alt="${s[0].description}" />
        <h2 class="city-name-oneDay">${t}, ${r.country}</h2>
        <p class="temperature-oneDay">${e.temp.toFixed(0)}</p>
        <div class="temperature">
            <div>
                <p class="min-temperature">min </p>
                <span class="temperature-span">${e.temp_min.toFixed(0)}&#176;</span></div>
            <div>
                <p class="max-temperature">max </p>
                <span class="temperature-span">${e.temp_max.toFixed(0)}&#176;</span>
            </div>
        </div> 
      </li>    
      </ul>    
  </div>`;U.innerHTML=o,a.textContent=d(new Date(r.sunrise*1e3),"HH:mm"),n.textContent=d(new Date(r.sunset*1e3),"HH:mm")},y=p.create({baseURL:"https://api.openweathermap.org/data/2.5",params:{appid:"95632b02f9162f375a368971925f5209",units:"metric"}}),_=async t=>{const{data:e}=await y.get("/weather",{params:{q:t}});return console.log(e),e},V=async({latitude:t,longitude:e})=>{const{data:r}=await y.get("/weather",{params:{lat:t,lon:e}});return r},O=async({latitude:t,longitude:e})=>{const{data:r}=await y.get("/forecast",{params:{lat:t,lon:e}});return console.log(r),r.list.reduce((s,{dt_txt:n,weather:a,main:o,wind:B},I)=>{var g;const f=d(new Date(n),"EEEE"),N=d(new Date(n),"dd LLL"),C=d(new Date(n),"kk:mm"),M=r.city.name,P=r.city.country,v={temp:o.temp,pressure:o.pressure,humidity:o.humidity,wind:B.speed,icon:a[0].icon,time:C};if(f===((g=s[(s==null?void 0:s.length)-1])==null?void 0:g.day))s[s.length-1].weather.push(v),s[s.length-1].min+=o.temp_min,s[s.length-1].max+=o.temp_max;else{if(s.length>0){const i=s[s.length-1];i.min=Math.round(i.min/i.weather.length),i.max=Math.round(i.max/i.weather.length)}s.push({cityName:M,country:P,day:f,date:N,weather:[v],icon:a[0].icon,min:o.temp_min,max:o.temp_max})}if(I===39){const i=s[s.length-1];i.min=Math.round(i.min/i.weather.length),i.max=Math.round(i.max/i.weather.length)}return s},[])},j=p.create({baseURL:"https://api.opencagedata.com/geocode/v1/json",params:{key:"d4683b09d0c94ec0aebf0b2e043decbf",language:"en"}}),z=async({latitude:t,longitude:e})=>{const r=`?q=${t}+${e}`,{data:s}=await j.get(r);return s.results[0].components.country},J=p.create({baseURL:"https://pixabay.com/api/",params:{image_type:"backgrounds",orientation:"horizontal",per_page:"40",key:"37485893-252f507e861118bf45a5e3b29"}}),G=async t=>{const{data:e}=await J.get("",{params:{q:t}});return e.hits},K=t=>Math.floor(Math.random()*(t+1)+1),Q=t=>{const e=K(t.length-1),{largeImageURL:r}=t[e];document.body.style=`background: linear-gradient(rgba(255, 255, 53, 0.1), rgba(48, 62, 143, 0.1 )),
  url('${r}') center fixed; background-size: cover;`},c={startBtn:document.querySelector(".start"),stopBtn:document.querySelector(".stop"),form:document.querySelector(".search-form"),swiperList:document.querySelector(".city-slider__wrapper"),saveFavoriteBtn:document.querySelector(".saveFavoriteBtn"),dateOneDay:document.querySelector(".dateOneDay"),month:document.querySelector(".month"),timer:document.querySelector(".timeSpan")},X=()=>{setInterval(()=>{c.timer.textContent=d(new Date,"HH:mm:ss"),c.month.textContent=d(new Date,"LLLL"),c.dateOneDay.textContent=d(new Date,"do E")},1e3)},k=(t,e)=>{try{const r=JSON.stringify(e);localStorage.setItem(t,r)}catch(r){console.error("Set state error: ",r.message)}},Y=t=>{try{const e=localStorage.getItem(t);return e===null?void 0:JSON.parse(e)}catch(e){console.error("Get state error: ",e.message)}},u=document.querySelector(".saveFavoriteBtn"),h=()=>{u.classList.add("inFavorite"),u.disabled=!0},Z=()=>{u.classList.remove("inFavorite"),u.disabled=!1},l=Y("favorite")||[];c.form.addEventListener("submit",ee);function ee(t){t.preventDefault();const{value:e}=t.target.elements.user_country;e&&_(e).then(m)}c.saveFavoriteBtn.addEventListener("click",te);function te(){l.push(c.form.elements.user_country.value),k("favorite",l),F([c.form.elements.user_country.value]),h(),$.update()}c.form.addEventListener("input",re);function re(t){const e=t.target.value.toLowerCase();if(l.find(r=>r.toLowerCase()===e)){h();return}Z()}c.swiperList.addEventListener("click",se);function se(t){if(t.target.nodeName!=="UL"){if(t.target.nodeName==="BUTTON"){const e=t.target.parentNode,r=l.filter(s=>s.toLowerCase()!==e.dataset.name.toLowerCase());k("favorite",r),e.remove()}t.target.nodeName==="LI"&&(c.form.elements.user_country.value=t.target.dataset.name,_(t.target.dataset.name).then(m),h())}}const ne=()=>{F(l),$.update()};let E={};ae();function ae(){ne(),X();const t=e=>{E=e.coords,V(e.coords).then(R),O(e.coords).then(m),z(e.coords).then(G).then(Q)};navigator.geolocation.getCurrentPosition(t)}const oe=document.querySelector(".buttonsOneOrFive"),w=document.querySelector(".weather__wrapper-oneDay"),b=document.querySelector(".weather__wrapper-oneDayDate"),L=document.querySelector(".weather__wrapper"),S=document.querySelector(".wrapper"),x=document.querySelector(".chart");oe.addEventListener("click",ie);function ie(t){if(t.target.nodeName!=="BUTTON")return;const e=document.querySelector(".btn-five"),r=document.querySelector(".btn-today");if(t.target.dataset.day==="five"){w.style.display="none",b.style.display="none",L.style.display="block",x.style.display="block",S.classList.add("wrapper-with-margin"),e.disabled=!0,r.disabled=!1,e.classList.remove("btn-disActive"),r.classList.add("btn-disActive"),O(E).then(m);return}r.classList.remove("btn-disActive"),e.classList.add("btn-disActive"),r.disabled=!0,e.disabled=!1,w.style.display="flex",b.style.display="flex",L.style.display="none",x.style.display="none",S.classList.remove("wrapper-with-margin")}const ce=document.querySelector(".weather-info"),de=document.querySelector(".weather__card"),le=document.querySelector(".more-info"),ue=document.querySelector(".more-info-list");ce.addEventListener("click",me);function me(t){if(!t.target.classList.contains("more-info-btn"))return;de.style.height="556px",le.style.display="block";const r=JSON.parse(t.target.dataset.weather).map(s=>`<li class="more-info-item">
      <div class="more-info-item-div">
       <p class="weather-time">${s.time}</p>
          <img class="weather-img" src="https://openweathermap.org/img/wn/${s.icon}@2x.png" alt="${s.description}" />
          <p class="temperature-moreInfo">${Math.round(s.temp)}</p>
          <div class="barometer-container">
            <svg class="barometer" width="20px" height="20px">
              <use href="../img/symbol-defs.svg#icon-barometer"></use>
            </svg>
            <p class="barometer-value">${s.pressure}</p>
          </div>
          <div class="humidity-container">
            <svg class="humidity" width="20px" height="20px">
              <use href="../img/symbol-defs.svg#icon-humidity"></use>
            </svg>
            <p class="humidity-value">${s.humidity}</p>
          </div>
          <div class="wind-container">
            <svg class="wind" width="20px" height="20px">
              <use href="../img/symbol-defs.svg#icon-wind"></use>
            </svg>
            <p class="wind-value">${s.wind}</p>
          </div>
      </div> 
    </li>`).join("");ue.innerHTML=r}
//# sourceMappingURL=commonHelpers.js.map
