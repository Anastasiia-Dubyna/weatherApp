import{S as p,N as m,f as l,a as y}from"./assets/vendor-b2ad93f7.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}})();const $=new p(".city-slider",{modules:[m],navigation:{nextEl:".button-next-favorite",prevEl:".button-prev-favorite"},loop:!1,createElements:!0,breakpoints:{320:{slidesPerView:2,spaceBetween:10},768:{slidesPerView:4,spaceBetween:10},1280:{slidesPerView:4}}}),M=new p(".fiveDaysSwiper-slider",{modules:[m],navigation:{nextEl:".button-next-fiveDaysSwiper",prevEl:".button-prev-fiveDaysSwiper"},loop:!1,createElements:!0,breakpoints:{320:{slidesPerView:3,spaceBetween:17},768:{slidesPerView:5,spaceBetween:24,height:180},1280:{slidesPerView:5,spaceBetween:32}}}),H=new p(".weather-slider",{modules:[m],navigation:{nextEl:".button-next-weather",prevEl:".button-prev-weather"},loop:!1,createElements:!0,scrollbar:{el:".swiper-scrollbar",draggable:!0},breakpoints:{320:{slidesPerView:2,spaceBetween:16},768:{slidesPerView:5,spaceBetween:16},1280:{slidesPerView:7,spaceBetween:16}}}),T=document.querySelector(".city-slider__wrapper"),V=document.querySelector(".weather__wrapper-oneDay"),U=document.querySelector(".city-name"),A=document.querySelector(".weather-info"),h=t=>{const e=t.slice(0,5).map(r=>(U.textContent=r.cityName+", "+r.country,`
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
          </li>`)).join("");A.innerHTML=e,M.update(),H.update()},F=t=>{const e=t.map((r,s)=>`<li data-name="${r}" data-hash="slide-${s+1}" class="city-slider__slide swiper-slide">
              ${r}
            <button class="deleteFavoriteBtn"><svg class="close-favorite" width="12px" height="12px">
            <use href="/img/symbol-defs.svg#icon-close"></use>
          </svg></button></li>`).join("");T.insertAdjacentHTML("beforeend",e)},W=({name:t,main:e,sys:r,weather:s})=>{const n=document.querySelector(".sunset-time"),a=document.querySelector(".sunrise-time"),o=`<div class="weather__card-oneDay">
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
  </div>`;V.innerHTML=o,a.textContent=l(new Date(r.sunrise*1e3),"HH:mm"),n.textContent=l(new Date(r.sunset*1e3),"HH:mm")},f=y.create({baseURL:"https://api.openweathermap.org/data/2.5",params:{appid:"95632b02f9162f375a368971925f5209",units:"metric"}}),_=async t=>{const{data:e}=await f.get("/weather",{params:{q:t}});return console.log(e),e},R=async({latitude:t,longitude:e})=>{const{data:r}=await f.get("/weather",{params:{lat:t,lon:e}});return r},j=async({latitude:t,longitude:e})=>{const{data:r}=await f.get("/forecast",{params:{lat:t,lon:e}});return console.log(r),r.list.reduce((s,{dt_txt:n,weather:a,main:o,wind:B},k)=>{var b;const w=l(new Date(n),"EEEE"),I=l(new Date(n),"dd LLL"),N=l(new Date(n),"kk:mm"),C=r.city.name,P=r.city.country,g={temp:o.temp,pressure:o.pressure,humidity:o.humidity,wind:B.speed,icon:a[0].icon,time:N};if(w===((b=s[(s==null?void 0:s.length)-1])==null?void 0:b.day))s[s.length-1].weather.push(g),s[s.length-1].min+=o.temp_min,s[s.length-1].max+=o.temp_max;else{if(s.length>0){const i=s[s.length-1];i.min=Math.round(i.min/i.weather.length),i.max=Math.round(i.max/i.weather.length)}s.push({cityName:C,country:P,day:w,date:I,weather:[g],icon:a[0].icon,min:o.temp_min,max:o.temp_max})}if(k===39){const i=s[s.length-1];i.min=Math.round(i.min/i.weather.length),i.max=Math.round(i.max/i.weather.length)}return s},[])},z=y.create({baseURL:"https://api.opencagedata.com/geocode/v1/json",params:{key:"d4683b09d0c94ec0aebf0b2e043decbf",language:"en"}}),J=async({latitude:t,longitude:e})=>{const r=`?q=${t}+${e}`,{data:s}=await z.get(r);return s.results[0].components.country},G=y.create({baseURL:"https://pixabay.com/api/",params:{image_type:"backgrounds",orientation:"horizontal",per_page:"40",key:"37485893-252f507e861118bf45a5e3b29"}}),K=async t=>{const{data:e}=await G.get("",{params:{q:t}});return e.hits},Q=t=>Math.floor(Math.random()*(t+1)+1),X=t=>{const e=Q(t.length-1),{largeImageURL:r}=t[e];document.body.style=`background: linear-gradient(rgba(255, 255, 53, 0.1), rgba(48, 62, 143, 0.1 )),
  url('${r}') center fixed; background-size: cover;`},c={startBtn:document.querySelector(".start"),stopBtn:document.querySelector(".stop"),form:document.querySelector(".search-form"),swiperList:document.querySelector(".city-slider__wrapper"),saveFavoriteBtn:document.querySelector(".saveFavoriteBtn"),dateOneDay:document.querySelector(".dateOneDay"),month:document.querySelector(".month"),timer:document.querySelector(".timeSpan")},Y=()=>{setInterval(()=>{c.timer.textContent=l(new Date,"HH:mm:ss"),c.month.textContent=l(new Date,"LLLL"),c.dateOneDay.textContent=l(new Date,"do E")},1e3)},O=(t,e)=>{try{const r=JSON.stringify(e);localStorage.setItem(t,r)}catch(r){console.error("Set state error: ",r.message)}},Z=t=>{try{const e=localStorage.getItem(t);return e===null?void 0:JSON.parse(e)}catch(e){console.error("Get state error: ",e.message)}},u=document.querySelector(".saveFavoriteBtn"),v=()=>{u.classList.add("inFavorite"),u.disabled=!0},ee=()=>{u.classList.remove("inFavorite"),u.disabled=!1},d=Z("favorite")||[];c.form.addEventListener("submit",te);function te(t){t.preventDefault();const{value:e}=t.target.elements.user_country;e&&_(e).then(h)}c.saveFavoriteBtn.addEventListener("click",re);function re(){d.push(c.form.elements.user_country.value),O("favorite",d),F([c.form.elements.user_country.value]),v(),$.update()}c.form.addEventListener("input",se);function se(t){const e=t.target.value.toLowerCase();if(d.find(r=>r.toLowerCase()===e)){v();return}ee()}c.swiperList.addEventListener("click",ne);function ne(t){if(t.target.nodeName!=="UL"){if(t.target.nodeName==="BUTTON"){const e=t.target.parentNode,r=d.filter(s=>s.toLowerCase()!==e.dataset.name.toLowerCase());O("favorite",r),e.remove()}t.target.nodeName==="LI"&&(c.form.elements.user_country.value=t.target.dataset.name,_(t.target.dataset.name).then(h),v())}}const ae=()=>{F(d),$.update()};let E={};oe();function oe(){ae(),Y();const t=e=>{E=e.coords,R(e.coords).then(W),J(e.coords).then(K).then(X)};navigator.geolocation.getCurrentPosition(t)}const ie=document.querySelector(".buttonsOneOrFive"),L=document.querySelector(".weather__wrapper-oneDay"),x=document.querySelector(".weather__wrapper-oneDayDate"),S=document.querySelector(".weather__wrapper"),D=document.querySelector(".wrapper"),q=document.querySelector(".chart");ie.addEventListener("click",ce);function ce(t){if(t.target.nodeName!=="BUTTON")return;const e=document.querySelector(".btn-five"),r=document.querySelector(".btn-today");if(t.target.dataset.day==="five"){L.style.display="none",x.style.display="none",S.style.display="block",q.style.display="block",D.classList.add("wrapper-with-margin"),e.disabled=!0,r.disabled=!1,e.classList.remove("btn-disActive"),r.classList.add("btn-disActive"),j(E).then(h);return}r.classList.remove("btn-disActive"),e.classList.add("btn-disActive"),r.disabled=!1,e.disabled=!0,L.style.display="flex",x.style.display="flex",S.style.display="none",q.style.display="none",D.classList.remove("wrapper-with-margin")}const le=document.querySelector(".weather-info"),de=document.querySelector(".weather__card"),ue=document.querySelector(".more-info"),pe=document.querySelector(".more-info-list");le.addEventListener("click",me);function me(t){if(!t.target.classList.contains("more-info-btn"))return;de.style.height="556px",ue.style.display="block";const r=JSON.parse(t.target.dataset.weather).map(s=>`<li class="more-info-item swiper-slide">
      <div class="more-info-item-div">
       <p class="weather-time">${s.time}</p>
          <img class="weather-img" src="https://openweathermap.org/img/wn/${s.icon}@2x.png" alt="${s.description}" />
          <p class="temperature-moreInfo">${Math.round(s.temp)}&#176;</p>
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
    </li>`).join("");pe.innerHTML=r}
//# sourceMappingURL=commonHelpers.js.map
