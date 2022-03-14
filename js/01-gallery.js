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
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  } else {
        const urlOrig = evt.target.dataset.source;
        basicLightbox.create(`<img src="${urlOrig}">`).show();    
    } 

};


 

// window.addEventListener('keydown', onEscKeyPress);
//  window.removeEventListener('keydown', onEscKeyPress);


//  function onEscKeyPress(evt) {
//    console.log(evt);
// if (evt.code==='Escape') {
    
//    }
//  };