import{f as i,a as p,S as D,N as F}from"./assets/vendor-b45ecd2d.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function r(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(a){if(a.ep)return;a.ep=!0;const n=r(a);fetch(a.href,n)}})();const $=document.querySelector(".weather__wrapper"),q=document.querySelector(".city-slider__wrapper"),O=document.querySelector(".weather__wrapper-oneDay");document.querySelector(".weather__wrapper-oneDayDate");const g=({name:t,main:e,sys:r,clouds:s,weather:a})=>{const n=i(new Date,"EEEE"),o=i(new Date,"cc LLL"),f=window.innerWidth;let u=1;const x=`
  <div class="weather__card">
      <h2 class="city-name">${t}, ${r.country}</h2>
      <ul class="weather-info list">    
      </ul>    
  </div>`;$.innerHTML=x,f>=768?u=5:f>=320&&(u=3);const _=document.querySelector(".weather-info");let v="";for(let y=0;y<u;y++)v+=`
          <li class="weather-info-item">
              <p class="day">${n}</p>
              <p class="date">${o}</p>
              <img class="weather-img" src="https://openweathermap.org/img/wn/${a[0].icon}@2x.png" alt="${a[0].description}" />
              <div class="temperature">
                <div><p class="min-temperature">min </p>
                <span class="teperature-span">${e.temp_min.toFixed(0)}&#176;</span></div>
                <div><p class="max-temperature">max </p>
                <span class="teperature-span">${e.temp_max.toFixed(0)}&#176;</span></div>
              </div> 
              <p class="more-info-card">more info</p>
          </li>`;_.innerHTML=v},h=t=>{const e=t.map((r,s)=>`<li data-name="${r}" data-hash="slide-${s+1}" class="city-slider__slide swiper-slide">
              ${r}
            <button class="deleteFavoriteBtn"><svg class="close-favorite" width="12px" height="12px">
            <use href="/img/symbol-defs.svg#icon-close"></use>
          </svg></button></li>`).join("");q.insertAdjacentHTML("beforeend",e)},C=({name:t,main:e,sys:r,weather:s})=>{const a=document.querySelector(".sunset-time"),n=document.querySelector(".sunrise-time"),o=`<div class="weather__card-oneDay">
      <ul class="oneDayList">
      <li class="oneDayItem"> 
        <img class="weather-imgOneDay" src="https://openweathermap.org/img/wn/${s[0].icon}@2x.png" alt="${s[0].description}" />
        <h2 class="city-name-oneDay">${t}, ${r.country}</h2>
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
  </div>`;O.innerHTML=o,n.textContent=i(new Date(r.sunrise*1e3),"HH:mm"),a.textContent=i(new Date(r.sunset*1e3),"HH:mm")},w=p.create({baseURL:"https://api.openweathermap.org/data/2.5",params:{appid:"95632b02f9162f375a368971925f5209",units:"metric"}}),L=async t=>{const{data:e}=await w.get("/weather",{params:{q:t}});return console.log(e),e},E=async({latitude:t,longitude:e})=>{const{data:r}=await w.get("/weather",{params:{lat:t,lon:e}});return r},B=p.create({baseURL:"https://api.opencagedata.com/geocode/v1/json",params:{key:"d4683b09d0c94ec0aebf0b2e043decbf",language:"en"}}),I=async({latitude:t,longitude:e})=>{const r=`?q=${t}+${e}`,{data:s}=await B.get(r);return s.results[0].components.country},N=p.create({baseURL:"https://pixabay.com/api/",params:{image_type:"backgrounds",orientation:"horizontal",per_page:"40",key:"37485893-252f507e861118bf45a5e3b29"}}),k=async t=>{const{data:e}=await N.get("",{params:{q:t}});return e.hits},H=t=>Math.floor(Math.random()*(t+1)+1),M=t=>{const e=H(t.length-1),{largeImageURL:r}=t[e];document.body.style=`background: linear-gradient(rgba(255, 255, 53, 0.1), rgba(48, 62, 143, 0.1 )),
  url('${r}') center fixed; background-size: cover;`},P=document.querySelector(".dateOneDay"),T=document.querySelector(".month"),U=document.querySelector(".timeSpan"),R=()=>{setInterval(()=>{U.textContent=i(new Date,"HH:mm:ss"),T.textContent=i(new Date,"LLLL"),P.textContent=i(new Date,"do E")},1e3)},c={startBtn:document.querySelector(".start"),stopBtn:document.querySelector(".stop"),form:document.querySelector(".search-form"),swiperList:document.querySelector(".city-slider__wrapper"),saveFavoriteBtn:document.querySelector(".saveFavoriteBtn")},b=(t,e)=>{try{const r=JSON.stringify(e);localStorage.setItem(t,r)}catch(r){console.error("Set state error: ",r.message)}},W=t=>{try{const e=localStorage.getItem(t);return e===null?void 0:JSON.parse(e)}catch(e){console.error("Get state error: ",e.message)}},l=document.querySelector(".saveFavoriteBtn"),m=()=>{l.classList.add("inFavorite"),l.disabled=!0},z=()=>{l.classList.remove("inFavorite"),l.disabled=!1},S=new D(".city-slider",{modules:[F],navigation:{nextEl:".button-next",prevEl:".button-prev"},slidesPerView:"auto",loop:!1,createElements:!0}),d=W("favorite")||[];c.form.addEventListener("submit",j);function j(t){t.preventDefault();const{value:e}=t.target.elements.user_country;e&&L(e).then(g)}c.saveFavoriteBtn.addEventListener("click",A);function A(){d.push(c.form.elements.user_country.value),b("favorite",d),h([c.form.elements.user_country.value]),m(),S.update()}c.form.addEventListener("input",J);function J(t){const e=t.target.value.toLowerCase();if(d.find(r=>r.toLowerCase()===e)){m();return}z()}c.swiperList.addEventListener("click",G);function G(t){if(t.target.nodeName!=="UL"){if(t.target.nodeName==="BUTTON"){const e=t.target.parentNode,r=d.filter(s=>s.toLowerCase()!==e.dataset.name.toLowerCase());b("favorite",r),e.remove()}t.target.nodeName==="LI"&&(c.form.elements.user_country.value=t.target.dataset.name,L(t.target.dataset.name).then(g),m())}}const K=()=>{h(d),S.update()};Q();function Q(){K(),R();const t=e=>{E(e.coords).then(C),I(e.coords).then(k).then(M)};navigator.geolocation.getCurrentPosition(t)}
//# sourceMappingURL=commonHelpers.js.map
