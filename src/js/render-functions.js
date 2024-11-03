import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

let lightbox;

export function renderGallery(images) {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = images.map(image =>
        `<li> 
        <a href="${image.largeImageURL}">
        <img src="${image.webformatURL}" alt="${image.tags}">
        </a>
        </li>`)
        .join('');
    
    
    if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a');
    } else {
 lightbox.refresh();
    }
   
}