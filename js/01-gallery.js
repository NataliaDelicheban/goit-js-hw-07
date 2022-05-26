import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryBox = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
let instance;

galleryBox.insertAdjacentHTML('afterbegin', galleryMarkup);
galleryBox.addEventListener('click', onGalleryBoxClick);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}" onclick = "event.preventDefault()">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`})
    .join("");
}

function onGalleryBoxClick(event) {
  console.log(event);
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  instance = basicLightbox.create(
    `
      <img src="${event.target.dataset.source}"
      />
      `,
    {
      onClose: () => {
        document.removeEventListener('keydown', escClick);
      },
      onShow: () => {
        document.addEventListener('keydown', escClick);
      },
    }
  );
    instance.show();
}

function escClick(event) {
  if (event.code === 'Escape') {
    instance.close();
    document.removeEventListener('keydown', escClick);
  }
}
