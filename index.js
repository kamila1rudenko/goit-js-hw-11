import{a as p,S as g,i}from"./assets/vendor-CrlV4O_2.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const y="50315100-ca810647875799483dbf10da6",h="https://pixabay.com/api/";async function v(t){const a=await p.get(h,{params:{key:y,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}});return console.log("PIXABAY RESPONSE:",a.data),a.data.hits}let c;function _(t){const a=document.querySelector(".gallery"),o=t.map(({webformatURL:s,largeImageURL:e,tags:r,likes:n,views:u,comments:f,downloads:m})=>`
  <li class="card">
    <a class="card__link" href="${e}">
      <img class="card__img" src="${s}" alt="${r}" />
    </a>
    <div class="card__info">
      <div class="card__info-item">
        <span class="label">Likes</span>
        <span class="value">${n}</span>
      </div>
      <div class="card__info-item">
        <span class="label">Views</span>
        <span class="value">${u}</span>
      </div>
      <div class="card__info-item">
        <span class="label">Comments</span>
        <span class="value">${f}</span>
      </div>
      <div class="card__info-item">
        <span class="label">Downloads</span>
        <span class="value">${m}</span>
      </div>
    </div>
  </li>
`).join("");a.insertAdjacentHTML("beforeend",o),c=new g(".gallery a"),c.refresh()}function L(){document.querySelector(".gallery").innerHTML=""}const l=document.querySelector(".search-form");document.querySelector(".gallery");const d=document.querySelector(".loader");function b(){d.classList.remove("hidden")}function S(){d.classList.add("hidden")}l.addEventListener("submit",async t=>{t.preventDefault();const o=new FormData(l).get("searchQuery").trim();if(!o){i.warning({title:"Warning",message:"Enter a search term"});return}L(),b();try{const s=await v(o);if(s.length===0){i.info({title:"Info",message:"No images found"});return}_(s)}catch(s){i.error({title:"Error",message:"Something went wrong"}),console.error(s)}finally{S()}});
//# sourceMappingURL=index.js.map
