import{S as f,i as m}from"./assets/vendor-BrddEoy-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const d="https://pixabay.com/api/",p="46857118-7428ce3c72e98dd3525ce7abc",c=new URLSearchParams({key:p,q:"",image_type:"photo",orientation:"horizontal",safesearch:"true"}),g=s=>(c.set("q",s),fetch(`${d}?${c}`).then(r=>{if(!r.ok)throw new Error("Failed to fetch images");return r.json()}).then(r=>{if(r.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");return r.hits.map(t=>({webformatURL:t.webformatURL,largeImageURL:t.largeImageURL,tags:t.tags,likes:t.likes,views:t.views,comments:t.comments,downloads:t.downloads}))}));let i;const h=({webformatURL:s,largeImageURL:r,tags:t,likes:n,views:e,comments:o,downloads:a})=>`<li>
        <a href="${r}">
        <img src="${s}" alt="${t}">
        </a>
        <div class="image-info">
                <span> ${n}</span>
                <span> ${o}</span>
                <span> ${e}</span>
                <span> ${a}</span>
</div>
        </li>`,y=(s,r)=>{s.innerHTML=r.map(t=>h(t)).join(""),i?i.refresh():i=new f(".gallery a")},L=document.querySelector(".search-form"),u=document.querySelector(".loader"),l=document.querySelector(".gallery");function w(){u.style.display="flex"}function b(){u.style.display="none"}L.addEventListener("submit",s=>{s.preventDefault();const r=s.currentTarget.elements.searchRequest.value.trim();w(),l.innerHTML="",g(r).then(t=>{y(l,t)}).catch(()=>{m.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topRight"})}).finally(()=>{b()})});
//# sourceMappingURL=index.js.map
