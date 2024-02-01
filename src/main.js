import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import css from 'file.css';

const refs = {
    formEl: document.querySelector('.form'),
    galleryEl: document.querySelector('.gallery'),
};

refs.formEl.addEventListener('submit', onSubmstForm);

function onSubmstForm(e){
    e.preventDefault();
    const textSearch = e.target.elements.search.value;





    e.target.reset();
}
