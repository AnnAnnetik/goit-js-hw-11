import{i as c,S as u}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f=document.querySelector(".form"),a=document.querySelector(".gallery"),i=document.querySelector(".loader");i.style.display="none";f.addEventListener("submit",d);function d(s){s.preventDefault();const o=p();o!==""&&(a.innerHTML="",i.style.display="inline-block",m(o).then(r=>y(r)).catch(r=>{console.log(r),i.style.display="none"}),s.target.reset())}function p(){return document.querySelector("input").value.trim()}function m(s){const o=new URLSearchParams({key:"42110229-d56f9063956695e15527c98fc",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`https://pixabay.com/api/?${o}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function y(s){if(s.hits.length===0)c.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",messageSize:"16px",messageLineHeight:"24px",backgroundColor:"#B51B1B",color:"#FAFAFB",position:"topRight"});else{const o=s.hits.map(n=>`<li class="gallery-item">
      <a class="gallery-link" href="${n.largeImageURL}">
        <img
          class="gallery-image"
          src="${n.webformatURL}"
              alt="${n.tags}"
        />
      </a>
      <div class="img-info">
      <p>Likes: ${n.likes}</p>
      <p>Views: ${n.views}</p>
      <p>Comments: ${n.comments}</p>
      <p>Downloads: ${n.downloads}</p>
      </div>
      </li>`).join("");a.insertAdjacentHTML("beforeend",o),new u(".gallery a",{captions:!0,captionDelay:250,captionsData:"alt"}).refresh()}i.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
