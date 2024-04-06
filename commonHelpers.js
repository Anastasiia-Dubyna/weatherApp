import{f as o,a as m,S,N as F}from"./assets/vendor-b45ecd2d.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}})();const q=document.querySelector(".weather__wrapper"),O=document.querySelector(".city-slider__wrapper"),E=document.querySelector(".weather__wrapper-oneDay"),I=document.querySelector(".weather__wrapper-oneDayDate"),y=({name:t,main:e,sys:s,clouds:n,weather:a})=>{const r=o(new Date,"EEEE"),c=o(new Date,"cc LLL"),d=window.innerWidth;let u=1;const $=`
  <div class="weather__card">
      <h2 class="city-name">${t}, ${s.country}</h2>
      <ul class="weather-info list">    
      </ul>    
  </div>`;q.innerHTML=$,d>=768?u=5:d>=320&&(u=3);const x=document.querySelector(".weather-info");let g="";for(let v=0;v<u;v++)g+=`
          <li class="weather-info-item">
              <p class="day">${r}</p>
              <p class="date">${c}</p>
              <img class="weather-img" src="https://openweathermap.org/img/wn/${a[0].icon}@2x.png" alt="${a[0].description}" />
              <div class="temperature">
                <div><p class="min-temperature">min </p>
                <span class="teperature-span">${e.temp_min.toFixed(0)}&#176;</span></div>
                <div><p class="max-temperature">max </p>
                <span class="teperature-span">${e.temp_max.toFixed(0)}&#176;</span></div>
              </div> 
              <p class="more-info-card">more info</p>
          </li>`;x.innerHTML=g},w=t=>{const e=t.map((s,n)=>`<li data-name="${s}" data-hash="slide-${n+1}" class="city-slider__slide swiper-slide">
              ${s}
            <button class="deleteFavoriteBtn"><svg class="close-favorite" width="12px" height="12px">
            <use href="../img/symbol-defs.svg#icon-close"></use>
          </svg></button></li>`).join("");O.insertAdjacentHTML("beforeend",e)},k=({name:t,main:e,sys:s,weather:n})=>{const a=`<div class="weather__card-oneDay">
      <ul class="oneDayList">
      <li class="oneDayItem"> 
        <img class="weather-imgOneDay" src="https://openweathermap.org/img/wn/${n[0].icon}@2x.png" alt="${n[0].description}" />
        <h2 class="city-name-oneDay">${t}, ${s.country}</h2>
        <p class="temperature-oneDay">${e.temp.toFixed(0)}</p>
        <div class="temperature">
            <div>
                <p class="min-temperature">min </p>
                <span class="teperature-span">${e.temp_min.toFixed(0)}&#176;</span></div>
            <div>
                <p class="max-temperature">max </p>
                <span class="teperature-span">${e.temp_max.toFixed(0)}&#176;</span>
            </div>
        </div> 
      </li>    
      </ul>    
  </div>`;E.innerHTML=a},B=({sys:t})=>{const e=document.querySelector(".timeSpan"),s=setInterval(()=>{e.textContent=o(new Date,"HH:mm:ss")},1e3),n=o(new Date(t.sunrise*1e3),"HH:m"),a=o(new Date(t.sunset*1e3),"HH:m"),r=o(new Date,"LLLL"),d=`<div class="weather__card-date">
    <ul class="oneDayDateList">
      <li class="oneDayDateItem"> 
       <p class="dateOneDay">${o(new Date,"do E")}</p>
       <div class="timeDate">
          <p class="month">${r}</p>
          <span class="timeSpan">${s}</span>
       </div>
       <div class="sun-runing">
       <span class="sunrise"><svg class="sunrise-img" width="12px" height="12px">
            <use href="../img/symbol-defs.svg#icon-sunrise"></use>
          </svg></span>
         <p class="sunrise-time">${n}</p>
         <span class="sunset"><svg class="sunset-img" width="12px" height="12px">
            <use href="../img/symbol-defs.svg#icon-sunset"></use>
          </svg></span>
         <p class="sunset-time">${a}</p>
       </div>
      </li>    
    </ul>    
  </div>`;I.innerHTML=d},L=m.create({baseURL:"https://api.openweathermap.org/data/2.5",params:{appid:"95632b02f9162f375a368971925f5209",units:"metric"}}),b=async t=>{const{data:e}=await L.get("/weather",{params:{q:t}});return console.log(e),e},h=async({latitude:t,longitude:e})=>{const{data:s}=await L.get("/weather",{params:{lat:t,lon:e}});return s},M=m.create({baseURL:"https://api.opencagedata.com/geocode/v1/json",params:{key:"d4683b09d0c94ec0aebf0b2e043decbf",language:"en"}}),N=async({latitude:t,longitude:e})=>{const s=`?q=${t}+${e}`,{data:n}=await M.get(s);return n.results[0].components.country},H=m.create({baseURL:"https://pixabay.com/api/",params:{image_type:"backgrounds",orientation:"horizontal",per_page:"40",key:"37485893-252f507e861118bf45a5e3b29"}}),C=async t=>{const{data:e}=await H.get("",{params:{q:t}});return e.hits},P=t=>Math.floor(Math.random()*(t+1)+1),W=t=>{const e=P(t.length-1),{largeImageURL:s}=t[e];document.body.style=`background: linear-gradient(rgba(255, 255, 53, 0.1), rgba(48, 62, 143, 0.1 )),
  url('${s}') center fixed; background-size: cover;`},i={startBtn:document.querySelector(".start"),stopBtn:document.querySelector(".stop"),form:document.querySelector(".search-form"),swiperList:document.querySelector(".city-slider__wrapper"),saveFavoriteBtn:document.querySelector(".saveFavoriteBtn")},D=(t,e)=>{try{const s=JSON.stringify(e);localStorage.setItem(t,s)}catch(s){console.error("Set state error: ",s.message)}},T=t=>{try{const e=localStorage.getItem(t);return e===null?void 0:JSON.parse(e)}catch(e){console.error("Get state error: ",e.message)}},p=document.querySelector(".saveFavoriteBtn"),f=()=>{p.classList.add("inFavorite"),p.disabled=!0},U=()=>{p.classList.remove("inFavorite"),p.disabled=!1},_=new S(".city-slider",{modules:[F],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},slidesPerView:4,loop:!1,createElements:!0,pagination:!0,centeredSlides:!1}),l=T("favorite")||[];J();i.form.addEventListener("submit",R);function R(t){t.preventDefault();const{value:e}=t.target.elements.user_country;e&&b(e).then(y)}i.saveFavoriteBtn.addEventListener("click",z);function z(){l.push(i.form.elements.user_country.value),D("favorite",l),w([i.form.elements.user_country.value]),f(),_.update()}i.form.addEventListener("input",j);function j(t){const e=t.target.value.toLowerCase();if(l.find(s=>s.toLowerCase()===e)){f();return}U()}i.swiperList.addEventListener("click",A);function A(t){if(t.target.nodeName!=="UL"){if(t.target.nodeName==="BUTTON"){const e=t.target.parentNode,s=l.filter(n=>n.toLowerCase()!==e.dataset.name.toLowerCase());D("favorite",s),e.remove()}t.target.nodeName==="LI"&&(i.form.elements.user_country.value=t.target.dataset.name,b(t.target.dataset.name).then(y),f())}}function J(){w(l),_.update();const t=e=>{h(e.coords).then(k),h(e.coords).then(B),N(e.coords).then(C).then(W)};navigator.geolocation.getCurrentPosition(t)}
//# sourceMappingURL=commonHelpers.js.map
