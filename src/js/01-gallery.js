// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');



function createGalleryItemMarkUp (cardsInform) {

return cardsInform.map(item => {
    return `
    <a class="gallery__item" href="${item.original}">
        <img class="gallery__image" src="${item.original}" alt="${item.description}" />
    </a>
    `
}).join('');
}; 

galleryEl.innerHTML = `${createGalleryItemMarkUp(galleryItems)}`;



function onClickImgElement (event) {
    event.preventDefault()
};

const galleryFitches = new SimpleLightbox('.gallery a', {captionsData: "alt", captionsPositin: "bottom", captionsDelay: "250",});

