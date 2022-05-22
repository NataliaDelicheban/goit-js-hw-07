import { galleryItems } from './gallery-items.js';
// Change code below this line


const createGallery = (galleryItems) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div>`;
};
const galleryBox = document.querySelector(".gallery")

galleryBox.insertAdjacentHTML("beforeend", createGallery());
console.log(galleryBox);


//console.log(galleryItems);
