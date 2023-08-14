import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const imagesList = document.querySelector(".gallery");
const imagesMarkup = galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image"
    src="${preview}" 
    alt="${description}" />
  </a>
 </li>`;
    })
    .join('');
    
 imagesList.insertAdjacentHTML('afterbegin', imagesMarkup);
  
 new SimpleLigthbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
});