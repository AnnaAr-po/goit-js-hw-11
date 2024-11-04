import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

let lightbox;
const galleryItem = ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
    return `<li>
        <a href="${largeImageURL}">
        <img src="${webformatURL}" alt="${tags}">
        </a>
        <div class="image-info">
                <span> ${likes}</span>
                <span> ${comments}</span>
                <span> ${views}</span>
                <span> ${downloads}</span>
</div>
        </li>`
}
const renderGallery = (gallery, images) => {
    gallery.innerHTML = images.map(image => galleryItem(image))
        .join('');
    
    if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a');
    } else {
 lightbox.refresh();
    }
   
}

export { renderGallery};