import{i as c,S as u}from"./assets/vendor-46aac873.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const f=document.querySelector(".form"),l=document.querySelector(".gallery"),m=document.querySelector(".loader"),a=new URLSearchParams({key:"42110229-d56f9063956695e15527c98fc",q:"",image_type:"photo",orientation:"horizontal",safesearch:"true"});f.addEventListener("submit",d);function d(r){r.preventDefault(),l.innerHTML="";const n=r.target.elements.search.value.trim();a.q=n,p().then(t=>g(t)).catch(t=>console.log(t)),r.target.reset()}function p(){return fetch(`https://pixabay.com/api/?${a}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function g(r){if(r.hits.length===0)c.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",messageSize:"16px",messageLineHeight:"24px",backgroundColor:"#B51B1B",color:"#FAFAFB",position:"topRight"});else{const n=r.hits.map(t=>`<li class="gallery-item">
      <a class="gallery-link" href="${t.largeImageURL}">
        <img
          class="gallery-image"
          src="${t.webformatURL}"
              alt="${t.tags}"
        />
      </a>
      <div class="img-info">
      <p>Likes: ${t.likes}</p>
      <p>Views: ${t.views}</p>
      <p>Comments: ${t.comments}</p>
      <p>Downloads: ${t.downloads}</p>
      </div>
      </li>`).join("");l.insertAdjacentHTML("beforeend",n),new u(".gallery-item").refresh()}m.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
