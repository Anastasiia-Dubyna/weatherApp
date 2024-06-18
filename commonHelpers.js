import{S as m,N as y,f as l,a as h,C as T}from"./assets/vendor-035d6bdb.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(s){if(s.ep)return;s.ep=!0;const n=r(s);fetch(s.href,n)}})();const $=new m(".city-slider",{modules:[y],navigation:{nextEl:".button-next-favorite",prevEl:".button-prev-favorite"},loop:!1,createElements:!0,breakpoints:{320:{slidesPerView:2,spaceBetween:10},768:{slidesPerView:4,spaceBetween:10},1280:{slidesPerView:4}}}),V=new m(".fiveDaysSwiper-slider",{modules:[y],navigation:{nextEl:".button-next-fiveDaysSwiper",prevEl:".button-prev-fiveDaysSwiper"},loop:!1,createElements:!0,breakpoints:{320:{slidesPerView:3,spaceBetween:17},768:{slidesPerView:5,spaceBetween:24},1280:{slidesPerView:5,spaceBetween:32}}}),W=new m(".weather-slider",{modules:[y],navigation:{nextEl:".button-next-weather",prevEl:".button-prev-weather"},loop:!1,createElements:!0,breakpoints:{320:{slidesPerView:2,spaceBetween:16},768:{slidesPerView:5,spaceBetween:16},1280:{slidesPerView:7,spaceBetween:16}}}),A=document.querySelector(".city-slider__wrapper"),U=document.querySelector(".weather__wrapper-oneDay"),R=document.querySelector(".city-name"),j=document.querySelector(".weather-info"),p=t=>{console.log(t);const e=t.slice(0,5).map(r=>(R.textContent=r.cityName+", "+r.country,`
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
          </li>`)).join("");j.innerHTML=e,V.update(),W.update()},F=t=>{const e=t.map((r,a)=>`<li data-name="${r}" data-hash="slide-${a+1}" class="city-slider__slide swiper-slide">
              ${r}
            <button class="deleteFavoriteBtn"><svg class="close-favorite" width="12px" height="12px">
            <use href="/img/symbol-defs.svg#icon-close"></use>
          </svg></button></li>`).join("");A.insertAdjacentHTML("beforeend",e)},_=({name:t,main:e,sys:r,weather:a})=>{const s=document.querySelector(".sunset-time"),n=document.querySelector(".sunrise-time"),o=`<div class="weather__card-oneDay">
      <ul class="oneDayList">
      <li class="oneDayItem"> 
        <img class="weather-imgOneDay" src="https://openweathermap.org/img/wn/${a[0].icon}@2x.png" alt="${a[0].description}" />
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
  </div>`;U.innerHTML=o,n.textContent=l(new Date(r.sunrise*1e3),"HH:mm"),s.textContent=l(new Date(r.sunset*1e3),"HH:mm")},f=h.create({baseURL:"https://api.openweathermap.org/data/2.5",params:{appid:"95632b02f9162f375a368971925f5209",units:"metric"}}),g=async t=>{const{data:e}=await f.get("/weather",{params:{q:t}});return console.log(e),e},z=async({latitude:t,longitude:e})=>{const{data:r}=await f.get("/weather",{params:{lat:t,lon:e}});return r},J=async({latitude:t,longitude:e})=>{const{data:r}=await f.get("/forecast",{params:{lat:t,lon:e}});return console.log(r),r.list.reduce((a,{dt_txt:s,weather:n,main:o,wind:B},I)=>{var x;const w=l(new Date(s),"EEEE"),N=l(new Date(s),"dd LLL"),P=l(new Date(s),"kk:mm"),M=r.city.name,H=r.city.country,b={temp:o.temp,pressure:o.pressure,humidity:o.humidity,wind:B.speed,icon:n[0].icon,time:P};if(w===((x=a[(a==null?void 0:a.length)-1])==null?void 0:x.day))a[a.length-1].weather.push(b),a[a.length-1].min+=o.temp_min,a[a.length-1].max+=o.temp_max;else{if(a.length>0){const i=a[a.length-1];i.min=Math.round(i.min/i.weather.length),i.max=Math.round(i.max/i.weather.length)}a.push({cityName:M,country:H,day:w,date:N,weather:[b],icon:n[0].icon,min:o.temp_min,max:o.temp_max})}if(I===39){const i=a[a.length-1];i.min=Math.round(i.min/i.weather.length),i.max=Math.round(i.max/i.weather.length)}return a},[])},G=h.create({baseURL:"https://api.opencagedata.com/geocode/v1/json",params:{key:"d4683b09d0c94ec0aebf0b2e043decbf",language:"en"}}),K=async({latitude:t,longitude:e})=>{const r=`?q=${t}+${e}`,{data:a}=await G.get(r);return a.results[0].components.country},Q=h.create({baseURL:"https://pixabay.com/api/",params:{image_type:"backgrounds",orientation:"horizontal",per_page:"40",key:"37485893-252f507e861118bf45a5e3b29"}}),X=async t=>{const{data:e}=await Q.get("",{params:{q:t}});return e.hits},Y=t=>Math.floor(Math.random()*(t+1)+1),Z=t=>{const e=Y(t.length-1),{largeImageURL:r}=t[e];document.body.style=`background: linear-gradient(rgba(255, 255, 53, 0.1), rgba(48, 62, 143, 0.1 )),
  url('${r}') center fixed; background-size: cover;`},c={startBtn:document.querySelector(".start"),stopBtn:document.querySelector(".stop"),form:document.querySelector(".search-form"),swiperList:document.querySelector(".city-slider__wrapper"),saveFavoriteBtn:document.querySelector(".saveFavoriteBtn"),dateOneDay:document.querySelector(".dateOneDay"),month:document.querySelector(".month"),timer:document.querySelector(".timeSpan")},ee=()=>{setInterval(()=>{c.timer.textContent=l(new Date,"HH:mm:ss"),c.month.textContent=l(new Date,"LLLL"),c.dateOneDay.textContent=l(new Date,"do E")},1e3)},k=(t,e)=>{try{const r=JSON.stringify(e);localStorage.setItem(t,r)}catch(r){console.error("Set state error: ",r.message)}},te=t=>{try{const e=localStorage.getItem(t);return e===null?void 0:JSON.parse(e)}catch(e){console.error("Get state error: ",e.message)}},u=document.querySelector(".saveFavoriteBtn"),v=()=>{u.classList.add("inFavorite"),u.disabled=!0},re=()=>{u.classList.remove("inFavorite"),u.disabled=!1},d=te("favorite")||[];c.form.addEventListener("submit",ae);function ae(t){t.preventDefault();const{value:e}=t.target.elements.user_country;e&&g(e).then(p)}c.saveFavoriteBtn.addEventListener("click",se);function se(){d.push(c.form.elements.user_country.value),k("favorite",d),F([c.form.elements.user_country.value]),v(),$.update()}c.form.addEventListener("input",ne);function ne(t){const e=t.target.value.toLowerCase();if(d.find(r=>r.toLowerCase()===e)){v();return}re()}c.swiperList.addEventListener("click",oe);function oe(t){if(t.target.nodeName!=="UL"){if(t.target.nodeName==="BUTTON"){const e=t.target.parentNode,r=d.filter(a=>a.toLowerCase()!==e.dataset.name.toLowerCase());k("favorite",r),e.remove()}t.target.nodeName==="LI"&&(c.form.elements.user_country.value=t.target.dataset.name,g(t.target.dataset.name).then(p),v())}}const ie=()=>{F(d),$.update()},ce=document.getElementById("myChart");let le={};new T(ce,{type:"line",data:{labels:le.days,datasets:[{label:"— Temperature, C°",data:[12,19,3,5,2,3],borderWidth:1,backgroundColor:"rgb(255, 107, 8)",borderColor:"rgb(255, 107, 8)"},{label:" —  Humidity, %",backgroundColor:"rgb(10, 6, 234)",borderColor:"rgb(10, 6, 234)",data:[11,12,13,14,15],fill:!1},{label:" —  Speed, m/s",backgroundColor:"rgb(235, 155, 5)",borderColor:"rgb(235, 155, 5)",data:[6,7,8,9,10],fill:!1},{label:" —  Pressure, m/m",backgroundColor:"rgb(5, 120, 6)",borderColor:"rgb(5, 120, 6)",data:[1,2,3,4,5],fill:!1}]},options:{title:{display:!0,text:"Value of indicators",position:"left"},legend:{display:!0,align:"start",labels:{boxWidth:13,boxHeight:12,defaultFontColor:"rgb(5, 120, 6)",padding:10}},responsive:!0,maintainAspectRatio:!1}});let E={};de();function de(){ie(),ee();const t=e=>{E=e.coords,z(e.coords).then(_),K(e.coords).then(X).then(Z)};navigator.geolocation.getCurrentPosition(t)}const O=document.querySelector(".search-input");O.addEventListener("keydown",ue);function ue(){const t=O.value;g(t).then(_).then(p)}const pe=document.querySelector(".buttonsOneOrFive"),L=document.querySelector(".weather__wrapper-oneDay"),S=document.querySelector(".weather__wrapper-oneDayDate"),D=document.querySelector(".weather__wrapper"),q=document.querySelector(".wrapper"),C=document.querySelector(".chart");pe.addEventListener("click",me);function me(t){if(t.target.nodeName!=="BUTTON")return;const e=document.querySelector(".btn-five"),r=document.querySelector(".btn-today");if(t.target.dataset.day==="five"){L.style.display="none",S.style.display="none",D.style.display="block",C.style.display="block",q.classList.add("wrapper-with-margin"),e.disabled=!0,r.disabled=!1,e.classList.remove("btn-disActive"),r.classList.add("btn-disActive"),J(E).then(p);return}r.classList.remove("btn-disActive"),e.classList.add("btn-disActive"),r.disabled=!0,e.disabled=!1,L.style.display="flex",S.style.display="flex",D.style.display="none",C.style.display="none",q.classList.remove("wrapper-with-margin")}const ye=document.querySelector(".weather-info"),he=document.querySelector(".weather__card"),fe=document.querySelector(".more-info"),ge=document.querySelector(".more-info-list");ye.addEventListener("click",ve);function ve(t){if(!t.target.classList.contains("more-info-btn"))return;he.style.height="556px",fe.style.display="block";const r=JSON.parse(t.target.dataset.weather).map(a=>`<li class="more-info-item swiper-slide">
      <div class="more-info-item-div">
       <p class="weather-time">${a.time}</p>
          <img class="weather-img" src="https://openweathermap.org/img/wn/${a.icon}@2x.png" alt="${a.description}" />
          <p class="temperature-moreInfo">${Math.round(a.temp)}&#176;</p>
          <div class="barometer-container">
            <svg class="barometer" width="20px" height="20px">
              <use href="../img/symbol-defs.svg#icon-barometer"></use>
            </svg>
            <p class="barometer-value">${a.pressure}</p>
          </div>
          <div class="humidity-container">
            <svg class="humidity" width="20px" height="20px">
              <use href="../img/symbol-defs.svg#icon-humidity"></use>
            </svg>
            <p class="humidity-value">${a.humidity}</p>
          </div>
          <div class="wind-container">
            <svg class="wind" width="20px" height="20px">
              <use href="../img/symbol-defs.svg#icon-wind"></use>
            </svg>
            <p class="wind-value">${a.wind}</p>
          </div>
      </div> 
    </li>`).join("");ge.innerHTML=r}
//# sourceMappingURL=commonHelpers.js.map
