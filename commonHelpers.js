import{f as v,a as p,S as x,N as F}from"./assets/vendor-b45ecd2d.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=a(r);fetch(r.href,s)}})();const q=document.querySelector(".weather__wrapper"),D=document.querySelector(".city-slider__wrapper"),O=document.querySelector(".weather__wrapper-oneDay"),y=({name:t,main:e,sys:a,clouds:n,weather:r})=>{const s=v(new Date,"EEEE"),i=v(new Date,"cc LLL"),m=window.innerWidth;let d=1;const _=`
  <div class="weather__card">
      <h2 class="city-name">${t}, ${a.country}</h2>
      <ul class="weather-info list">    
      </ul>    
  </div>`;q.innerHTML=_,m>=768?d=5:m>=320&&(d=3);const $=document.querySelector(".weather-info");let f="";for(let g=0;g<d;g++)f+=`
          <li class="weather-info-item">
              <p class="day">${s}</p>
              <p class="date">${i}</p>
              <img class="weather-img" src="https://openweathermap.org/img/wn/${r[0].icon}@2x.png" alt="${r[0].description}" />
              <div class="temperature">
                <div><p class="min-temperature">min </p>
                <span class="teperature-span">${e.temp_min.toFixed(0)}&#176;</span></div>
                <div><p class="max-temperature">max </p>
                <span class="teperature-span">${e.temp_max.toFixed(0)}&#176;</span></div>
              </div> 
              <p class="more-info-card">more info</p>
          </li>`;$.innerHTML=f},h=t=>{const e=t.map((a,n)=>`<li data-name="${a}" data-hash="slide-${n+1}" class="city-slider__slide swiper-slide">
              ${a}
            <button class="deleteFavoriteBtn"><svg class="close-favorite" width="12px" height="12px">
            <use href="../img/symbol-defs.svg#icon-close"></use>
          </svg></button></li>`).join("");D.insertAdjacentHTML("beforeend",e)},B=({name:t,main:e,sys:a,weather:n})=>{const r=`<div class="weather__card-oneDay">
      <ul class="oneDayList">
      <li class="oneDayItem"> 
        <img class="weather-imgOneDay" src="https://openweathermap.org/img/wn/${n[0].icon}@2x.png" alt="${n[0].description}" />
        <h2 class="city-name-oneDay">${t}, ${a.country}</h2>
        <p class="temperature-oneDay">${e.temp}</p>
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
  </div>`;O.innerHTML=r},w=p.create({baseURL:"https://api.openweathermap.org/data/2.5",params:{appid:"95632b02f9162f375a368971925f5209",units:"metric"}}),b=async t=>{const{data:e}=await w.get("/weather",{params:{q:t}});return console.log(e),e},E=async({latitude:t,longitude:e})=>{const{data:a}=await w.get("/weather",{params:{lat:t,lon:e}});return a},N=p.create({baseURL:"https://api.opencagedata.com/geocode/v1/json",params:{key:"d4683b09d0c94ec0aebf0b2e043decbf",language:"en"}}),I=async({latitude:t,longitude:e})=>{const a=`?q=${t}+${e}`,{data:n}=await N.get(a);return n.results[0].components.country},k=p.create({baseURL:"https://pixabay.com/api/",params:{image_type:"backgrounds",orientation:"horizontal",per_page:"40",key:"37485893-252f507e861118bf45a5e3b29"}}),M=async t=>{const{data:e}=await k.get("",{params:{q:t}});return e.hits},P=t=>Math.floor(Math.random()*(t+1)+1),C=t=>{const e=P(t.length-1),{largeImageURL:a}=t[e];document.body.style=`background: linear-gradient(rgba(255, 255, 53, 0.1), rgba(48, 62, 143, 0.1 )),
  url('${a}') center fixed; background-size: cover;`},o={startBtn:document.querySelector(".start"),stopBtn:document.querySelector(".stop"),form:document.querySelector(".search-form"),dateSpan:document.querySelector(".dateSpan"),timeSpan:document.querySelector(".timeSpan"),swiperList:document.querySelector(".city-slider__wrapper"),saveFavoriteBtn:document.querySelector(".saveFavoriteBtn")},L=(t,e)=>{try{const a=JSON.stringify(e);localStorage.setItem(t,a)}catch(a){console.error("Set state error: ",a.message)}},U=t=>{try{const e=localStorage.getItem(t);return e===null?void 0:JSON.parse(e)}catch(e){console.error("Get state error: ",e.message)}},l=document.querySelector(".saveFavoriteBtn"),u=()=>{l.classList.add("inFavorite"),l.disabled=!0},R=()=>{l.classList.remove("inFavorite"),l.disabled=!1},S=new x(".city-slider",{modules:[F],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},slidesPerView:4,loop:!1,createElements:!0,pagination:!0,centeredSlides:!1}),c=U("favorite")||[];j();o.form.addEventListener("submit",T);function T(t){t.preventDefault();const{value:e}=t.target.elements.user_country;e&&b(e).then(y)}o.saveFavoriteBtn.addEventListener("click",W);function W(){c.push(o.form.elements.user_country.value),L("favorite",c),h([o.form.elements.user_country.value]),u(),S.update()}o.form.addEventListener("input",z);function z(t){const e=t.target.value.toLowerCase();if(c.find(a=>a.toLowerCase()===e)){u();return}R()}o.swiperList.addEventListener("click",H);function H(t){if(t.target.nodeName!=="UL"){if(t.target.nodeName==="BUTTON"){const e=t.target.parentNode,a=c.filter(n=>n.toLowerCase()!==e.dataset.name.toLowerCase());L("favorite",a),e.remove()}t.target.nodeName==="LI"&&(o.form.elements.user_country.value=t.target.dataset.name,b(t.target.dataset.name).then(y),u())}}function j(){h(c),S.update();const t=e=>{E(e.coords).then(B),I(e.coords).then(M).then(C)};navigator.geolocation.getCurrentPosition(t)}
//# sourceMappingURL=commonHelpers.js.map
