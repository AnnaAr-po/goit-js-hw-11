import { fetchImages } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';



const form = document.querySelector('.search-form');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');

function showLoader() {
  loader.style.display = 'flex';
}

function hideLoader() {
  loader.style.display = 'none';
}

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
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: error.message,
        position: 'topRight'
      });
      hideLoader();
    })
  gallery.innerHTML = '';
})