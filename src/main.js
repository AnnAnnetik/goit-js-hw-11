import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const formEl = document.querySelector('.form');
const galleryEl = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const searchParams = new URLSearchParams({
  key: '42110229-d56f9063956695e15527c98fc',
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
});

formEl.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();

  galleryEl.innerHTML = '';

  const inputElText = e.target.elements.search.value.trim();
  searchParams.q = inputElText;

  fetchImg()
    .then(images => renderImg(images))
    .catch(error => console.log(error));
  e.target.reset();
}

function fetchImg() {
  return fetch(`https://pixabay.com/api/?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function renderImg(images) {
  if (images.hits.length === 0) {
    iziToast.show({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      messageColor: '#FAFAFB',
      messageSize: '16px',
      messageLineHeight: '24px',
      backgroundColor: '#B51B1B',
      color: '#FAFAFB',
      position: 'topRight',
    });
  } else {
    const galleryMarkup = images.hits
      .map(
        image =>
          `<li class="gallery-item">
      <a class="gallery-link" href="${image.largeImageURL}">
        <img
          class="gallery-image"
          src="${image.webformatURL}"
              alt="${image.tags}"
        />
      </a>
      <div class="img-info">
      <p>Likes: ${image.likes}</p>
      <p>Views: ${image.views}</p>
      <p>Comments: ${image.comments}</p>
      <p>Downloads: ${image.downloads}</p>
      </div>
      </li>`
      )
      .join('');

    galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);

    let lightbox = new SimpleLightbox('.gallery-item').refresh();
  }
  loader.style.display = 'none';
}
