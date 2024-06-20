import{S as h,N as y,f as d,a as f,C as W}from"./assets/vendor-035d6bdb.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function r(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(a){if(a.ep)return;a.ep=!0;const n=r(a);fetch(a.href,n)}})();const $=new h(".city-slider",{modules:[y],navigation:{nextEl:".button-next-favorite",prevEl:".button-prev-favorite"},loop:!1,createElements:!0,breakpoints:{320:{slidesPerView:2,spaceBetween:10},768:{slidesPerView:4,spaceBetween:10},1280:{slidesPerView:4}}}),A=new h(".fiveDaysSwiper-slider",{modules:[y],navigation:{nextEl:".button-next-fiveDaysSwiper",prevEl:".button-prev-fiveDaysSwiper"},loop:!1,createElements:!0,breakpoints:{320:{slidesPerView:3,spaceBetween:17},768:{slidesPerView:5,spaceBetween:24},1280:{slidesPerView:5,spaceBetween:32}}}),U=new h(".weather-slider",{modules:[y],navigation:{nextEl:".button-next-weather",prevEl:".button-prev-weather"},loop:!1,createElements:!0,breakpoints:{320:{slidesPerView:2,spaceBetween:16},768:{slidesPerView:5,spaceBetween:16},1280:{slidesPerView:7,spaceBetween:16}}}),R=document.querySelector(".city-slider__wrapper"),j=document.querySelector(".weather__wrapper-oneDay"),z=document.querySelector(".city-name"),J=document.querySelector(".weather-info"),m=t=>{const e=t.slice(0,5).map(r=>(z.textContent=r.cityName+", "+r.country,`
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
          </li>`)).join("");J.innerHTML=e,A.update(),U.update()},k=t=>{const e=t.map((r,s)=>`<li data-name="${r}" data-hash="slide-${s+1}" class="city-slider__slide swiper-slide">
              ${r}
            <button class="deleteFavoriteBtn"><svg class="close-favorite" width="12px" height="12px">
            <use href="/img/symbol-defs.svg#icon-close"></use>
          </svg></button></li>`).join("");R.insertAdjacentHTML("beforeend",e)},_=({name:t,main:e,sys:r,weather:s})=>{const a=document.querySelector(".sunset-time"),n=document.querySelector(".sunrise-time"),o=`<div class="weather__card-oneDay">
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
  </div>`;j.innerHTML=o,n.textContent=d(new Date(r.sunrise*1e3),"HH:mm"),a.textContent=d(new Date(r.sunset*1e3),"HH:mm")},g=f.create({baseURL:"https://api.openweathermap.org/data/2.5",params:{appid:"95632b02f9162f375a368971925f5209",units:"metric"}}),w=async t=>{const{data:e}=await g.get("/weather",{params:{q:t}});return console.log(e),e},G=async({latitude:t,longitude:e})=>{const{data:r}=await g.get("/weather",{params:{lat:t,lon:e}});return r},K=async({latitude:t,longitude:e})=>{const{data:r}=await g.get("/forecast",{params:{lat:t,lon:e}});return r.list.reduce((s,{dt_txt:a,weather:n,main:o,wind:N},P)=>{var L;const b=d(new Date(a),"EEEE"),M=d(new Date(a),"dd LLL"),H=d(new Date(a),"kk:mm"),T=r.city.name,V=r.city.country,x={temp:o.temp,pressure:o.pressure,humidity:o.humidity,wind:N.speed,icon:n[0].icon,time:H};if(b===((L=s[(s==null?void 0:s.length)-1])==null?void 0:L.day))s[s.length-1].weather.push(x),s[s.length-1].min+=o.temp_min,s[s.length-1].max+=o.temp_max;else{if(s.length>0){const i=s[s.length-1];i.min=Math.round(i.min/i.weather.length),i.max=Math.round(i.max/i.weather.length)}s.push({cityName:T,country:V,day:b,date:M,weather:[x],icon:n[0].icon,min:o.temp_min,max:o.temp_max})}if(P===39){const i=s[s.length-1];i.min=Math.round(i.min/i.weather.length),i.max=Math.round(i.max/i.weather.length)}return s},[])},Q=f.create({baseURL:"https://api.opencagedata.com/geocode/v1/json",params:{key:"d4683b09d0c94ec0aebf0b2e043decbf",language:"en"}}),Y=async({latitude:t,longitude:e})=>{const r=`?q=${t}+${e}`,{data:s}=await Q.get(r);return s.results[0].components.country},X=f.create({baseURL:"https://pixabay.com/api/",params:{image_type:"backgrounds",orientation:"horizontal",per_page:"40",key:"37485893-252f507e861118bf45a5e3b29"}}),Z=async t=>{const{data:e}=await X.get("",{params:{q:t}});return e.hits},ee=t=>Math.floor(Math.random()*(t+1)+1),te=t=>{const e=ee(t.length-1),{largeImageURL:r}=t[e];document.body.style=`background: linear-gradient(rgba(255, 255, 53, 0.1), rgba(48, 62, 143, 0.1 )),
  url('${r}') center fixed; background-size: cover;`},c={startBtn:document.querySelector(".start"),stopBtn:document.querySelector(".stop"),form:document.querySelector(".search-form"),swiperList:document.querySelector(".city-slider__wrapper"),saveFavoriteBtn:document.querySelector(".saveFavoriteBtn"),dateOneDay:document.querySelector(".dateOneDay"),month:document.querySelector(".month"),timer:document.querySelector(".timeSpan")},re=()=>{setInterval(()=>{c.timer.textContent=d(new Date,"HH:mm:ss"),c.month.textContent=d(new Date,"LLLL"),c.dateOneDay.textContent=d(new Date,"do E")},1e3)},E=(t,e)=>{try{const r=JSON.stringify(e);localStorage.setItem(t,r)}catch(r){console.error("Set state error: ",r.message)}},se=t=>{try{const e=localStorage.getItem(t);return e===null?void 0:JSON.parse(e)}catch(e){console.error("Get state error: ",e.message)}},p=document.querySelector(".saveFavoriteBtn"),v=()=>{p.classList.add("inFavorite"),p.disabled=!0},ae=()=>{p.classList.remove("inFavorite"),p.disabled=!1},l=se("favorite")||[];c.form.addEventListener("submit",ne);function ne(t){t.preventDefault();const{value:e}=t.target.elements.user_country;e&&w(e).then(m)}c.saveFavoriteBtn.addEventListener("click",oe);function oe(){l.push(c.form.elements.user_country.value),E("favorite",l),k([c.form.elements.user_country.value]),v(),$.update()}c.form.addEventListener("input",ie);function ie(t){const e=t.target.value.toLowerCase();if(l.find(r=>r.toLowerCase()===e)){v();return}ae()}c.swiperList.addEventListener("click",ce);function ce(t){if(t.target.nodeName!=="UL"){if(t.target.nodeName==="BUTTON"){const e=t.target.parentNode,r=l.filter(s=>s.toLowerCase()!==e.dataset.name.toLowerCase());E("favorite",r),e.remove()}t.target.nodeName==="LI"&&(c.form.elements.user_country.value=t.target.dataset.name,w(t.target.dataset.name).then(m),v())}}const de=()=>{k(l),$.update()},le=document.getElementById("myChart"),u=(t,e)=>(t.reduce((r,s)=>r+s[e],0)/t.length).toFixed(2),ue=t=>{const e=t.reduce((r,s)=>{const a=`${s.date}, ${new Date().getFullYear()}`;return{...r,labels:[...r.labels,a],temp:[...r.temp,u(s.weather,"temp")],humidity:[...r.humidity,u(s.weather,"humidity")],speed:[...r.speed,u(s.weather,"wind")],pressure:[...r.pressure,u(s.weather,"pressure")]}},{labels:[],temp:[],humidity:[],speed:[],pressure:[]});new W(le,{type:"line",data:{labels:e.labels,datasets:[{label:"— Temperature, C°",data:e.temp,borderWidth:1,backgroundColor:"rgb(255, 107, 8)",borderColor:"rgb(255, 107, 8)"},{label:" —  Humidity, %",backgroundColor:"rgb(10, 6, 234)",borderColor:"rgb(10, 6, 234)",data:e.humidity,fill:!1,hidden:!0},{label:" —  Speed, m/s",backgroundColor:"rgb(235, 155, 5)",borderColor:"rgb(235, 155, 5)",data:e.speed,fill:!1,hidden:!0},{label:" —  Pressure, m/m",backgroundColor:"rgb(5, 120, 6)",borderColor:"rgb(5, 120, 6)",data:e.pressure,fill:!1,hidden:!0}]},options:{title:{display:!0,text:"Value of indicators",position:"left"},legend:{display:!0,align:"start",labels:{boxWidth:13,boxHeight:12,defaultFontColor:"rgb(5, 120, 6)",padding:10}},responsive:!0,maintainAspectRatio:!1}})};let O={};pe();function pe(){de(),re();const t=e=>{O=e.coords,G(e.coords).then(_),Y(e.coords).then(Z).then(te)};navigator.geolocation.getCurrentPosition(t)}const B=document.querySelector(".search-input");B.addEventListener("keydown",me);function me(){const t=B.value;w(t).then(_).then(m)}const he=document.querySelector(".buttonsOneOrFive"),S=document.querySelector(".weather__wrapper-oneDay"),D=document.querySelector(".weather__wrapper-oneDayDate"),C=document.querySelector(".weather__wrapper"),q=document.querySelector(".wrapper"),F=document.querySelector(".chart"),ye=document.querySelector(".btn-show-chart");ye.addEventListener("click",fe);let I={};function fe(){ue(I)}he.addEventListener("click",ge);function ge(t){if(t.target.nodeName!=="BUTTON")return;const e=document.querySelector(".btn-five"),r=document.querySelector(".btn-today");if(t.target.dataset.day==="five"){S.style.display="none",D.style.display="none",C.style.display="block",F.style.display="block",q.classList.add("wrapper-with-margin"),e.disabled=!0,r.disabled=!1,e.classList.remove("btn-disActive"),r.classList.add("btn-disActive"),K(O).then(s=>{m(s),I=s});return}r.classList.remove("btn-disActive"),e.classList.add("btn-disActive"),r.disabled=!0,e.disabled=!1,S.style.display="flex",D.style.display="flex",C.style.display="none",F.style.display="none",q.classList.remove("wrapper-with-margin")}const we=document.querySelector(".weather-info"),ve=document.querySelector(".weather__card"),be=document.querySelector(".more-info"),xe=document.querySelector(".more-info-list");we.addEventListener("click",Le);function Le(t){if(!t.target.classList.contains("more-info-btn"))return;ve.style.height="556px",be.style.display="block";const r=JSON.parse(t.target.dataset.weather).map(s=>`<li class="more-info-item swiper-slide">
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
    </li>`).join("");xe.innerHTML=r}
//# sourceMappingURL=commonHelpers.js.map
