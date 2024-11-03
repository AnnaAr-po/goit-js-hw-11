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
        <div class="image-info">
                <span> ${image.likes}</span>
                <span> ${image.comments}</span>
                <span> ${image.views}</span>
                <span> ${image.downloads}</span>
</div>
        </li>`)
        .join('');
    
    
    if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a');
    } else {
 lightbox.refresh();
    }
   
}
