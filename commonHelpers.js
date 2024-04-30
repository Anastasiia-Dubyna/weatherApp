import{f as d,a as m,S as B,N as H}from"./assets/vendor-b45ecd2d.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}})();const P=document.querySelector(".city-slider__wrapper"),T=document.querySelector(".weather__wrapper-oneDay"),U=document.querySelector(".city-name"),A=document.querySelector(".weather-info"),p=r=>{const e=r.slice(0,5).map(t=>(U.textContent=t.cityName+", "+t.country,`
          <li class="weather-info-item">
              <p class="day">${t.day}</p>
              <p class="date">${t.date}</p>
              <img class="weather-img" src="https://openweathermap.org/img/wn/${t.icon}.png" alt="${t.description}" />
              <div class="temperature">
                <div><p class="min-temperature">min </p>
                <span class="temperature-span">${t.min}&#176;</span></div>
                <div><p class="max-temperature">max </p>
                <span class="temperature-span">${t.max}&#176;</span></div>
              </div>
              <div class="weather-info-button"><button class="more-info-btn" >more info</button></div>
          </li>`)).join("");A.innerHTML=e},W=document.querySelector(".more-info-list"),R=r=>{console.log(r);const e=r.map(t=>(console.log(t),`<li class="more-info-item">
      <div class="more-info-item-div">
       <p class="weather-time">${t.weather[0].time}</p>
          <img class="weather-img" src="https://openweathermap.org/img/wn/${t.icon}@2x.png" alt="${t.description}" />
          <p class="temperature-moreInfo">${Math.round(t.weather[0].temp)}</p>
          <div class="barometer-container">
            <svg class="barometer" width="20px" height="20px">
              <use href="../img/symbol-defs.svg#icon-barometer"></use>
            </svg>
            <p class="barometer-value">${t.weather[0].pressure}</p>
          </div>
          <div class="humidity-container">
            <svg class="humidity" width="20px" height="20px">
              <use href="../img/symbol-defs.svg#icon-humidity"></use>
            </svg>
            <p class="humidity-value">${t.weather[0].humidity}</p>
          </div>
          <div class="wind-container">
            <svg class="wind" width="20px" height="20px">
              <use href="../img/symbol-defs.svg#icon-wind"></use>
            </svg>
            <p class="wind-value">${t.weather[0].wind}</p>
          </div>
      </div> 
    </li>`)).join("");W.innerHTML=e},q=r=>{const e=r.map((t,n)=>`<li data-name="${t}" data-hash="slide-${n+1}" class="city-slider__slide swiper-slide">
              ${t}
            <button class="deleteFavoriteBtn"><svg class="close-favorite" width="12px" height="12px">
            <use href="/img/symbol-defs.svg#icon-close"></use>
          </svg></button></li>`).join("");P.insertAdjacentHTML("beforeend",e)},j=({name:r,main:e,sys:t,weather:n})=>{const a=document.querySelector(".sunset-time"),s=document.querySelector(".sunrise-time"),o=`<div class="weather__card-oneDay">
      <ul class="oneDayList">
      <li class="oneDayItem"> 
        <img class="weather-imgOneDay" src="https://openweathermap.org/img/wn/${n[0].icon}@2x.png" alt="${n[0].description}" />
        <h2 class="city-name-oneDay">${r}, ${t.country}</h2>
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
  </div>`;T.innerHTML=o,s.textContent=d(new Date(t.sunrise*1e3),"HH:mm"),a.textContent=d(new Date(t.sunset*1e3),"HH:mm")},y=m.create({baseURL:"https://api.openweathermap.org/data/2.5",params:{appid:"95632b02f9162f375a368971925f5209",units:"metric"}}),$=async r=>{const{data:e}=await y.get("/weather",{params:{q:r}});return console.log(e),e},z=async({latitude:r,longitude:e})=>{const{data:t}=await y.get("/weather",{params:{lat:r,lon:e}});return t},F=async({latitude:r,longitude:e})=>{const{data:t}=await y.get("/forecast",{params:{lat:r,lon:e}});return console.log(t),t.list.reduce((n,{dt_txt:a,weather:s,main:o,wind:I},k)=>{var w;const g=d(new Date(a),"EEEE"),C=d(new Date(a),"dd LLL"),E=d(new Date(a),"kk:mm"),M=t.city.name,N=t.city.country,v={temp:o.temp,pressure:o.pressure,humidity:o.humidity,wind:I.speed,icon:s[0].icon,time:E};if(g===((w=n[(n==null?void 0:n.length)-1])==null?void 0:w.day))n[n.length-1].weather.push(v),n[n.length-1].min+=o.temp_min,n[n.length-1].max+=o.temp_max;else{if(n.length>0){const i=n[n.length-1];i.min=Math.round(i.min/i.weather.length),i.max=Math.round(i.max/i.weather.length)}n.push({cityName:M,country:N,day:g,date:C,weather:[v],icon:s[0].icon,min:o.temp_min,max:o.temp_max})}if(k===39){const i=n[n.length-1];i.min=Math.round(i.min/i.weather.length),i.max=Math.round(i.max/i.weather.length)}return n},[])},J=m.create({baseURL:"https://api.opencagedata.com/geocode/v1/json",params:{key:"d4683b09d0c94ec0aebf0b2e043decbf",language:"en"}}),G=async({latitude:r,longitude:e})=>{const t=`?q=${r}+${e}`,{data:n}=await J.get(t);return n.results[0].components.country},K=m.create({baseURL:"https://pixabay.com/api/",params:{image_type:"backgrounds",orientation:"horizontal",per_page:"40",key:"37485893-252f507e861118bf45a5e3b29"}}),Q=async r=>{const{data:e}=await K.get("",{params:{q:r}});return e.hits},V=r=>Math.floor(Math.random()*(r+1)+1),X=r=>{const e=V(r.length-1),{largeImageURL:t}=r[e];document.body.style=`background: linear-gradient(rgba(255, 255, 53, 0.1), rgba(48, 62, 143, 0.1 )),
  url('${t}') center fixed; background-size: cover;`},c={startBtn:document.querySelector(".start"),stopBtn:document.querySelector(".stop"),form:document.querySelector(".search-form"),swiperList:document.querySelector(".city-slider__wrapper"),saveFavoriteBtn:document.querySelector(".saveFavoriteBtn"),dateOneDay:document.querySelector(".dateOneDay"),month:document.querySelector(".month"),timer:document.querySelector(".timeSpan")},Y=()=>{setInterval(()=>{c.timer.textContent=d(new Date,"HH:mm:ss"),c.month.textContent=d(new Date,"LLLL"),c.dateOneDay.textContent=d(new Date,"do E")},1e3)},_=(r,e)=>{try{const t=JSON.stringify(e);localStorage.setItem(r,t)}catch(t){console.error("Set state error: ",t.message)}},Z=r=>{try{const e=localStorage.getItem(r);return e===null?void 0:JSON.parse(e)}catch(e){console.error("Get state error: ",e.message)}},u=document.querySelector(".saveFavoriteBtn"),h=()=>{u.classList.add("inFavorite"),u.disabled=!0},ee=()=>{u.classList.remove("inFavorite"),u.disabled=!1},O=new B(".city-slider",{modules:[H],navigation:{nextEl:".button-next",prevEl:".button-prev"},slidesPerView:"auto",loop:!1,createElements:!0}),l=Z("favorite")||[];c.form.addEventListener("submit",te);function te(r){r.preventDefault();const{value:e}=r.target.elements.user_country;e&&$(e).then(p)}c.saveFavoriteBtn.addEventListener("click",re);function re(){l.push(c.form.elements.user_country.value),_("favorite",l),q([c.form.elements.user_country.value]),h(),O.update()}c.form.addEventListener("input",ne);function ne(r){const e=r.target.value.toLowerCase();if(l.find(t=>t.toLowerCase()===e)){h();return}ee()}c.swiperList.addEventListener("click",ae);function ae(r){if(r.target.nodeName!=="UL"){if(r.target.nodeName==="BUTTON"){const e=r.target.parentNode,t=l.filter(n=>n.toLowerCase()!==e.dataset.name.toLowerCase());_("favorite",t),e.remove()}r.target.nodeName==="LI"&&(c.form.elements.user_country.value=r.target.dataset.name,$(r.target.dataset.name).then(p),h())}}const se=()=>{q(l),O.update()};let f={};oe();function oe(){se(),Y();const r=e=>{f=e.coords,z(e.coords).then(j),G(e.coords).then(Q).then(X)};navigator.geolocation.getCurrentPosition(r)}const ie=document.querySelector(".buttonsOneOrFive"),b=document.querySelector(".weather__wrapper-oneDay"),L=document.querySelector(".weather__wrapper-oneDayDate"),x=document.querySelector(".weather__wrapper"),S=document.querySelector(".wrapper"),D=document.querySelector(".chart");ie.addEventListener("click",ce);function ce(r){if(r.target.nodeName!=="BUTTON")return;const e=document.querySelector(".btn-five"),t=document.querySelector(".btn-today");if(r.target.dataset.day==="five"){b.style.display="none",L.style.display="none",x.style.display="block",D.style.display="block",S.classList.add("wrapper-with-margin"),e.disabled=!0,t.disabled=!1,e.classList.remove("btn-disActive"),t.classList.add("btn-disActive"),F(f).then(p);return}t.classList.remove("btn-disActive"),e.classList.add("btn-disActive"),t.disabled=!0,e.disabled=!1,b.style.display="flex",L.style.display="flex",x.style.display="none",D.style.display="none",S.classList.remove("wrapper-with-margin")}const de=document.querySelector(".weather-info"),le=document.querySelector(".weather__card"),ue=document.querySelector(".more-info");de.addEventListener("click",me);function me(r){r.target.classList.contains("more-info-btn")&&(le.style.height="556px",ue.style.display="block",F(f).then(R))}
//# sourceMappingURL=commonHelpers.js.map
