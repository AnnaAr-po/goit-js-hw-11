import{S as d,i as c}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/",p="46857118-7428ce3c72e98dd3525ce7abc";function g(n,o=1){const r=new URLSearchParams({key:p,q:n,page:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${m}?${r}`).then(s=>{if(!s.ok)throw new Error("Failed to fetch images");return s.json()}).then(s=>{if(s.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");return s.hits.map(e=>({webformatURL:e.webformatURL,largeImageURL:e.largeImageURL,tags:e.tags,likes:e.likes,views:e.views,comments:e.comments,downloads:e.downloads}))}).catch(s=>{throw s})}let i;function y(n){const o=document.querySelector(".gallery");o.innerHTML=n.map(r=>`<li>
        <a href="${r.largeImageURL}">
        <img src="${r.webformatURL}" alt="${r.tags}">
        </a>
        <div class="image-info">
                <span> ${r.likes}</span>
                <span> ${r.comments}</span>
                <span> ${r.views}</span>
                <span> ${r.downloads}</span>
</div>
        </li>`).join(""),i?i.refresh():i=new d(".gallery a")}const h=document.querySelector(".search-form"),f=document.querySelector(".loader"),l=document.querySelector(".gallery");function L(){f.style.display="flex"}function u(){f.style.display="none"}h.addEventListener("submit",async n=>{n.preventDefault();const o=n.currentTarget.elements.searchRequest.value.trim();if(!o){c.error({title:"Error",message:"Try again"});return}L(),g(o).then(r=>{y(l),u()}).catch(r=>{c.error({title:"Error",message:r.message,position:"topRight"}),u()}),l.innerHTML=""});
//# sourceMappingURL=index.js.map
