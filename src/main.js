import { fetchImages } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

function showLoader() {
  loaderContainer.style.display = 'flex';
}

function hideLoader() {
  loaderContainer.style.display = 'none';
}


const form = document.querySelector('.search-form');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const request = event.currentTarget.elements.searchRequest.value.trim();
    if (!request) {
        iziToast.error({ title: 'Error', message: 'Try again' });
        return;
    }

    showLoader();

  fetchImages(request)
    .then(images => {
      renderGallery(gallery, images);
      hideLoader();
    })
    .catch((error) => {
      errorMessage(error.message);
      hideLoader();
    });
    gallery.innerHTML = '';
})