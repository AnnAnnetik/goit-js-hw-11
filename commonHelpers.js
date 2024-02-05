import{i as c,S as u}from"./assets/vendor-46aac873.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f=document.querySelector(".form"),i=document.querySelector(".gallery"),a=document.querySelector(".loader");f.addEventListener("submit",d);function d(n){n.preventDefault(),n.target.elements.search.value.trim()!==""&&(i.innerHTML="",a.style.display="inline-block",m().then(r=>p(r)).catch(r=>console.log(r)),n.target.reset())}function m(){let n=document.querySelector("input").value;const s=new URLSearchParams({key:"42110229-d56f9063956695e15527c98fc",q:`${n}`,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`https://pixabay.com/api/?${s}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function p(n){if(n.hits.length===0)c.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",messageSize:"16px",messageLineHeight:"24px",backgroundColor:"#B51B1B",color:"#FAFAFB",position:"topRight"});else{const s=n.hits.map(o=>`<li class="gallery-item">
      <a class="gallery-link" href="${o.largeImageURL}">
        <img
          class="gallery-image"
          src="${o.webformatURL}"
              alt="${o.tags}"
        />
      </a>
      <div class="img-info">
      <p>Likes: ${o.likes}</p>
      <p>Views: ${o.views}</p>
      <p>Comments: ${o.comments}</p>
      <p>Downloads: ${o.downloads}</p>
      </div>
      </li>`).join("");i.insertAdjacentHTML("beforeend",s),new u(".gallery a",{captions:!0,captionDelay:250,captionsData:"alt"}).refresh()}a.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
