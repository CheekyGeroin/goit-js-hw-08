import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const refs = {
  list: document.querySelector('.gallery'),
};
const imagesMarkup = createImagesMarkup(galleryItems);
console.log(imagesMarkup);

refs.list.insertAdjacentHTML('beforeend', imagesMarkup);

function createImagesMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li class="gallery__items">
      <a class="gallery__item" href="${original}">
        <img
        class="gallery__image"
        src="${preview}" 
        alt="${description}"
        title="${description}" />
    </a>
    </li>`;
    })
    .join('');
}
const gallery = new SimpleLightbox('.gallery a', {
  captionSelector: 'img',
  captionData: 'title',
  captionPosition: 'bottom',
  captionDelay: 250,
});
