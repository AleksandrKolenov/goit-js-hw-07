import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector('.gallery');
const cardsGallery = (createGalleryItems(galleryItems));
galleryContainer.insertAdjacentHTML('beforebegin', cardsGallery);


console.log(createGalleryItems(galleryItems));

function createGalleryItems(galleryItems) {
   return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>;`
    })
    .join('');
}

galleryContainer.addEventListener('click', onClick);

function onClick(evt) {
  // if (evt.target.nodeName !== 'BUTTON') {
  //   return;
  // }
  console.log(evt.target.textContent);
}

