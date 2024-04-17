import{f as c,a as m,S as q,N as F}from"./assets/vendor-b45ecd2d.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(a){if(a.ep)return;a.ep=!0;const n=r(a);fetch(a.href,n)}})();const $=document.querySelector(".weather__wrapper"),B=document.querySelector(".city-slider__wrapper"),O=document.querySelector(".weather__wrapper-oneDay");document.querySelector(".weather__wrapper-oneDayDate");const g=({name:t,main:e,sys:r,clouds:s,weather:a})=>{const n=c(new Date,"EEEE"),i=c(new Date,"cc LLL"),f=window.innerWidth;let l=1;const D=`
  <div class="weather__card">
      <h2 class="city-name">${t}, ${r.country}</h2>
      <ul class="weather-info list">    
      </ul>    
  </div>`;$.innerHTML=D,f>=768?l=5:f>=320&&(l=3);const _=document.querySelector(".weather-info");let v="";for(let y=0;y<l;y++)v+=`
          <li class="weather-info-item">
              <p class="day">${n}</p>
              <p class="date">${i}</p>
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
          </svg></button></li>`).join("");B.insertAdjacentHTML("beforeend",e)},C=({name:t,main:e,sys:r,weather:s})=>{const a=document.querySelector(".sunset-time"),n=document.querySelector(".sunrise-time"),i=`<div class="weather__card-oneDay">
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
  </div>`;O.innerHTML=i,n.textContent=c(new Date(r.sunrise*1e3),"HH:mm"),a.textContent=c(new Date(r.sunset*1e3),"HH:mm")},w=m.create({baseURL:"https://api.openweathermap.org/data/2.5",params:{appid:"95632b02f9162f375a368971925f5209",units:"metric"}}),L=async t=>{const{data:e}=await w.get("/weather",{params:{q:t}});return console.log(e),e},E=async({latitude:t,longitude:e})=>{const{data:r}=await w.get("/weather",{params:{lat:t,lon:e}});return r},N=m.create({baseURL:"https://api.opencagedata.com/geocode/v1/json",params:{key:"d4683b09d0c94ec0aebf0b2e043decbf",language:"en"}}),I=async({latitude:t,longitude:e})=>{const r=`?q=${t}+${e}`,{data:s}=await N.get(r);return s.results[0].components.country},k=m.create({baseURL:"https://pixabay.com/api/",params:{image_type:"backgrounds",orientation:"horizontal",per_page:"40",key:"37485893-252f507e861118bf45a5e3b29"}}),H=async t=>{const{data:e}=await k.get("",{params:{q:t}});return e.hits},M=t=>Math.floor(Math.random()*(t+1)+1),T=t=>{const e=M(t.length-1),{largeImageURL:r}=t[e];document.body.style=`background: linear-gradient(rgba(255, 255, 53, 0.1), rgba(48, 62, 143, 0.1 )),
  url('${r}') center fixed; background-size: cover;`},o={startBtn:document.querySelector(".start"),stopBtn:document.querySelector(".stop"),form:document.querySelector(".search-form"),swiperList:document.querySelector(".city-slider__wrapper"),saveFavoriteBtn:document.querySelector(".saveFavoriteBtn"),dateOneDay:document.querySelector(".dateOneDay"),month:document.querySelector(".month"),timer:document.querySelector(".timeSpan")},P=()=>{setInterval(()=>{o.timer.textContent=c(new Date,"HH:mm:ss"),o.month.textContent=c(new Date,"LLLL"),o.dateOneDay.textContent=c(new Date,"do E")},1e3)},b=(t,e)=>{try{const r=JSON.stringify(e);localStorage.setItem(t,r)}catch(r){console.error("Set state error: ",r.message)}},A=t=>{try{const e=localStorage.getItem(t);return e===null?void 0:JSON.parse(e)}catch(e){console.error("Get state error: ",e.message)}},u=document.querySelector(".saveFavoriteBtn"),p=()=>{u.classList.add("inFavorite"),u.disabled=!0},U=()=>{u.classList.remove("inFavorite"),u.disabled=!1},S=new q(".city-slider",{modules:[F],navigation:{nextEl:".button-next",prevEl:".button-prev"},slidesPerView:"auto",loop:!1,createElements:!0}),d=A("favorite")||[];o.form.addEventListener("submit",R);function R(t){t.preventDefault();const{value:e}=t.target.elements.user_country;e&&L(e).then(g)}o.saveFavoriteBtn.addEventListener("click",W);function W(){d.push(o.form.elements.user_country.value),b("favorite",d),h([o.form.elements.user_country.value]),p(),S.update()}o.form.addEventListener("input",z);function z(t){const e=t.target.value.toLowerCase();if(d.find(r=>r.toLowerCase()===e)){p();return}U()}o.swiperList.addEventListener("click",j);function j(t){if(t.target.nodeName!=="UL"){if(t.target.nodeName==="BUTTON"){const e=t.target.parentNode,r=d.filter(s=>s.toLowerCase()!==e.dataset.name.toLowerCase());b("favorite",r),e.remove()}t.target.nodeName==="LI"&&(o.form.elements.user_country.value=t.target.dataset.name,L(t.target.dataset.name).then(g),p())}}const J=()=>{h(d),S.update()};G();function G(){J(),P();const t=e=>{E(e.coords).then(C),I(e.coords).then(H).then(T)};navigator.geolocation.getCurrentPosition(t)}const x=document.querySelector(".btn-five"),K=document.querySelector(".btn-today");x.addEventListener("click",Q);function Q(t){if(t.preventDefault(),t.target.nodeName!=="BUTTON")return;if(document.querySelector(".btn-disActive")===t.currentTarget){K.classList.add("btn-disActive"),x.classList.remove("btn-disActive");return}}
//# sourceMappingURL=commonHelpers.js.map
