import{S as y,N as w,f as c,a as f,C as P}from"./assets/vendor-035d6bdb.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();const D=new y(".city-slider",{modules:[w],navigation:{nextEl:".button-next-favorite",prevEl:".button-prev-favorite"},loop:!1,createElements:!0,breakpoints:{320:{slidesPerView:2,spaceBetween:10},768:{slidesPerView:4,spaceBetween:10},1280:{slidesPerView:4}}}),M=new y(".fiveDaysSwiper-slider",{modules:[w],navigation:{nextEl:".button-next-fiveDaysSwiper",prevEl:".button-prev-fiveDaysSwiper"},loop:!1,createElements:!0,breakpoints:{320:{slidesPerView:3,spaceBetween:17},768:{slidesPerView:5,spaceBetween:24},1280:{slidesPerView:5,spaceBetween:32}}}),W=new y(".weather-slider",{modules:[w],navigation:{nextEl:".button-next-weather",prevEl:".button-prev-weather"},loop:!1,createElements:!0,breakpoints:{320:{slidesPerView:2,spaceBetween:16},768:{slidesPerView:5,spaceBetween:16},1280:{slidesPerView:7,spaceBetween:16}}}),s={startBtn:document.querySelector(".start"),stopBtn:document.querySelector(".stop"),form:document.querySelector(".search-form"),swiperList:document.querySelector(".city-slider__wrapper"),saveFavoriteBtn:document.querySelector(".saveFavoriteBtn"),dateOneDay:document.querySelector(".dateOneDay"),month:document.querySelector(".month"),timer:document.querySelector(".timeSpan"),searchInput:document.querySelector(".search-input"),buttonsOneOrFive:document.querySelector(".buttonsOneOrFive"),weatherWrapperOneDay:document.querySelector(".weather__wrapper-oneDay"),weatherWrapperOneDayDate:document.querySelector(".weather__wrapper-oneDayDate"),weatherWrapper:document.querySelector(".weather__wrapper"),wrapper:document.querySelector(".wrapper"),chart:document.querySelector(".chart"),weatherChart:document.querySelector(".weather-chart"),showChart:document.querySelector(".btn-show-chart"),showChartText:document.querySelector(".show-chart"),weatherInfo:document.querySelector(".weather-info"),weatherCard:document.querySelector(".weather__card"),moreInfo:document.querySelector(".more-info"),moreInfoList:document.querySelector(".more-info-list"),swiperList:document.querySelector(".city-slider__wrapper"),weatherWrapperOneDay:document.querySelector(".weather__wrapper-oneDay"),cityNameForFiveDaysInfo:document.querySelector(".city-name"),weatherInfo:document.querySelector(".weather-info")},m=t=>{const e=t.slice(0,5).map(r=>(s.cityNameForFiveDaysInfo.textContent=r.cityName+", "+r.country,`
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
          </li>`)).join("");s.weatherInfo.innerHTML=e,M.update(),W.update()},C=t=>{const e=t.map((r,a)=>`<li data-name="${r}" data-hash="slide-${a+1}" class="city-slider__slide swiper-slide">
              ${r}
            <button class="deleteFavoriteBtn"><svg class="close-favorite" width="12px" height="12px">
            <use href="/img/symbol-defs.svg#icon-close"></use>
          </svg></button></li>`).join("");s.swiperList.insertAdjacentHTML("beforeend",e)},q=({name:t,main:e,sys:r,weather:a})=>{const n=document.querySelector(".sunset-time"),o=document.querySelector(".sunrise-time"),i=`<div class="weather__card-oneDay">
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
  </div>`;s.weatherWrapperOneDay.innerHTML=i,o.textContent=c(new Date(r.sunrise*1e3),"HH:mm"),n.textContent=c(new Date(r.sunset*1e3),"HH:mm")},g=f.create({baseURL:"https://api.openweathermap.org/data/2.5",params:{appid:"95632b02f9162f375a368971925f5209",units:"metric"}}),v=async t=>{const{data:e}=await g.get("/weather",{params:{q:t}});return console.log(e),e},H=async({latitude:t,longitude:e})=>{const{data:r}=await g.get("/weather",{params:{lat:t,lon:e}});return r},T=async({latitude:t,longitude:e})=>{const{data:r}=await g.get("/forecast",{params:{lat:t,lon:e}});return r.list.reduce((a,{dt_txt:n,weather:o,main:i,wind:I},_)=>{var S;const x=c(new Date(n),"EEEE"),k=c(new Date(n),"dd LLL"),E=c(new Date(n),"kk:mm"),B=r.city.name,N=r.city.country,L={temp:i.temp,pressure:i.pressure,humidity:i.humidity,wind:I.speed,icon:o[0].icon,time:E};if(x===((S=a[(a==null?void 0:a.length)-1])==null?void 0:S.day))a[a.length-1].weather.push(L),a[a.length-1].min+=i.temp_min,a[a.length-1].max+=i.temp_max;else{if(a.length>0){const l=a[a.length-1];l.min=Math.round(l.min/l.weather.length),l.max=Math.round(l.max/l.weather.length)}a.push({cityName:B,country:N,day:x,date:k,weather:[L],icon:o[0].icon,min:i.temp_min,max:i.temp_max})}if(_===39){const l=a[a.length-1];l.min=Math.round(l.min/l.weather.length),l.max=Math.round(l.max/l.weather.length)}return a},[])},V=f.create({baseURL:"https://api.opencagedata.com/geocode/v1/json",params:{key:"d4683b09d0c94ec0aebf0b2e043decbf",language:"en"}}),A=async({latitude:t,longitude:e})=>{const r=`?q=${t}+${e}`,{data:a}=await V.get(r);return a.results[0].components.country},U=f.create({baseURL:"https://pixabay.com/api/",params:{image_type:"backgrounds",orientation:"horizontal",per_page:"40",key:"37485893-252f507e861118bf45a5e3b29"}}),R=async t=>{const{data:e}=await U.get("",{params:{q:t}});return e.hits},j=t=>Math.floor(Math.random()*(t+1)+1),z=t=>{const e=j(t.length-1),{largeImageURL:r}=t[e];document.body.style=`background: linear-gradient(rgba(255, 255, 53, 0.1), rgba(48, 62, 143, 0.1 )),
  url('${r}') center fixed; background-size: cover;`},J=()=>{setInterval(()=>{s.timer.textContent=c(new Date,"HH:mm:ss"),s.month.textContent=c(new Date,"LLLL"),s.dateOneDay.textContent=c(new Date,"do E")},1e3)},F=(t,e)=>{try{const r=JSON.stringify(e);localStorage.setItem(t,r)}catch(r){console.error("Set state error: ",r.message)}},G=t=>{try{const e=localStorage.getItem(t);return e===null?void 0:JSON.parse(e)}catch(e){console.error("Get state error: ",e.message)}},p=document.querySelector(".saveFavoriteBtn"),b=()=>{p.classList.add("inFavorite"),p.disabled=!0},K=()=>{p.classList.remove("inFavorite"),p.disabled=!1},d=G("favorite")||[];s.form.addEventListener("submit",Q);function Q(t){t.preventDefault();const{value:e}=t.target.elements.user_country;e&&v(e).then(m)}s.saveFavoriteBtn.addEventListener("click",Y);function Y(){d.push(s.form.elements.user_country.value),F("favorite",d),C([s.form.elements.user_country.value]),b(),D.update()}s.form.addEventListener("input",X);function X(t){const e=t.target.value.toLowerCase();if(d.find(r=>r.toLowerCase()===e)){b();return}K()}s.swiperList.addEventListener("click",Z);function Z(t){if(t.target.nodeName!=="UL"){if(t.target.nodeName==="BUTTON"){const e=t.target.parentNode,r=d.filter(a=>a.toLowerCase()!==e.dataset.name.toLowerCase());F("favorite",r),e.remove()}t.target.nodeName==="LI"&&(s.form.elements.user_country.value=t.target.dataset.name,v(t.target.dataset.name).then(m),b())}}const ee=()=>{C(d),D.update()},u=(t,e)=>t.length===0?null:t.reduce((r,a)=>a[e]>r?a[e]:r,t[0][e]),te=document.getElementById("myChart"),re=t=>{const e=t.reduce((r,a)=>{const n=`${a.date}, ${new Date().getFullYear()}`;return{...r,labels:[...r.labels,n],temp:[...r.temp,u(a.weather,"temp")],humidity:[...r.humidity,u(a.weather,"humidity")],speed:[...r.speed,u(a.weather,"wind")],pressure:[...r.pressure,u(a.weather,"pressure")]}},{labels:[],temp:[],humidity:[],speed:[],pressure:[]});new P(te,{type:"line",data:{labels:e.labels,datasets:[{label:"— Temperature, C°",data:e.temp,borderWidth:1,backgroundColor:"rgb(255, 107, 8)",borderColor:"rgb(255, 107, 8)"},{label:" —  Humidity, %",backgroundColor:"rgb(10, 6, 234)",borderColor:"rgb(10, 6, 234)",data:e.humidity,fill:!1,hidden:!0},{label:" —  Speed, m/s",backgroundColor:"rgb(235, 155, 5)",borderColor:"rgb(235, 155, 5)",data:e.speed,fill:!1,hidden:!0},{label:" —  Pressure, m/m",backgroundColor:"rgb(5, 120, 6)",borderColor:"rgb(5, 120, 6)",data:e.pressure,fill:!1,hidden:!0}]},options:{title:{display:!0,text:"Value of indicators",position:"left"},legend:{display:!0,align:"start",labels:{boxWidth:13,boxHeight:12,defaultFontColor:"rgb(5, 120, 6)",padding:10}},responsive:!0,maintainAspectRatio:!1}})};let O={};ae();function ae(){ee(),J();const t=e=>{O=e.coords,H(e.coords).then(q),A(e.coords).then(R).then(z)};navigator.geolocation.getCurrentPosition(t)}s.searchInput.addEventListener("keydown",se);function se(){const t=s.searchInput.value;v(t).then(q).then(m)}let $={},h=!1;s.showChart.addEventListener("click",ne);function ne(){h?(s.weatherChart.style.display="none",s.showChartText.textContent="Show Chart",s.showChart.style.transform="rotate(0deg)",h=!1):(s.weatherChart.style.display="flex",s.showChartText.textContent="Hide Chart",s.showChart.style.transform="rotate(180deg)",re($),h=!0)}s.buttonsOneOrFive.addEventListener("click",oe);function oe(t){if(t.target.nodeName!=="BUTTON")return;const e=document.querySelector(".btn-five"),r=document.querySelector(".btn-today");if(t.target.dataset.day==="five"){s.weatherWrapperOneDay.style.display="none",s.weatherWrapperOneDayDate.style.display="none",s.weatherWrapper.style.display="block",s.chart.style.display="block",s.wrapper.classList.add("wrapper-with-margin"),e.disabled=!0,r.disabled=!1,e.classList.remove("btn-disActive"),r.classList.add("btn-disActive"),T(O).then(a=>{m(a),$=a});return}r.classList.remove("btn-disActive"),e.classList.add("btn-disActive"),r.disabled=!0,e.disabled=!1,s.weatherWrapperOneDay.style.display="flex",s.weatherWrapperOneDayDate.style.display="flex",s.weatherWrapper.style.display="none",s.chart.style.display="none",s.wrapper.classList.remove("wrapper-with-margin")}s.weatherInfo.addEventListener("click",ie);function ie(t){if(!t.target.classList.contains("more-info-btn"))return;s.weatherCard.style.height="556px",s.moreInfo.style.display="block";const r=JSON.parse(t.target.dataset.weather).map(a=>`<li class="more-info-item swiper-slide">
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
    </li>`).join("");s.moreInfoList.innerHTML=r}
//# sourceMappingURL=commonHelpers.js.map
