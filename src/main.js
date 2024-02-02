import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import css from 'file.css';

const refs = {
  formEl: document.querySelector('.form'),
  galleryEl: document.querySelector('.gallery'),
};
const searchParams = new URLSearchParams({
  key: '42110229-d56f9063956695e15527c98fc',
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
});

refs.formEl.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();
  const textSearch = e.target.elements.search.value;
  searchParams.q = textSearch;
  fetchImg()
    .then(images => renderImg(images))
    .catch(error => console.log(error));
  e.target.reset();
}

function fetchImg() {
  return fetch('https://pixabay.com/api/?${searchParams}').then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function renderImg(images) {
  if (images.length === 0) {
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
    const galleryMarkup = images
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
      </li>`
      )
      .join('');

    refs.galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);

    let lightbox = new SimpleLightbox('.gallery a').refresh();
  }
}
