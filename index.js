import{S as d,i as l}from"./assets/vendor-BrddEoy-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const f="https://pixabay.com/api/",g="46857118-7428ce3c72e98dd3525ce7abc",c=new URLSearchParams({key:g,q:"",image_type:"photo",orientation:"horizontal",safesearch:"true"}),p=s=>(c.set("q",s),fetch(`${f}?${c}`).then(r=>{if(!r.ok)throw new Error("Failed to fetch images");return r.json()}).then(r=>{if(r.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");return r.hits.map(t=>({webformatURL:t.webformatURL,largeImageURL:t.largeImageURL,tags:t.tags,likes:t.likes,views:t.views,comments:t.comments,downloads:t.downloads}))}));let i;const h=({webformatURL:s,largeImageURL:r,tags:t,likes:n,views:e,comments:o,downloads:a})=>`<li class="image-card">
        <a href="${r}">
        <img src="${s}" alt="${t}">
        </a>
        <div class="image-info">
                <span> Likes ${n}</span>
                <span> Comments ${o}</span>
                <span> Views ${e}</span>
                <span> Downloads ${a}</span>
</div>
        </li>`,y=(s,r)=>{s.innerHTML=r.map(t=>h(t)).join(""),i?i.refresh():i=new d(".gallery a")},L=document.querySelector(".search-form"),u=document.querySelector(".loader"),m=document.querySelector(".gallery");function w(){u.style.display="flex"}function b(){u.style.display="none"}L.addEventListener("submit",s=>{s.preventDefault();const r=s.currentTarget.elements.searchRequest.value.trim();if(r===""){l.warning({title:"Warning",message:"Please enter a valid search term.",position:"topRight"});return}w(),m.innerHTML="",p(r).then(t=>{y(m,t)}).catch(()=>{l.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topRight"})}).finally(()=>{b()})});
//# sourceMappingURL=index.js.map
