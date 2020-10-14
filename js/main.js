import galleryItems from './gallery-items.js';

const gallery = document.querySelector('.js-gallery');
const lightbox = document.querySelector('.js-lightbox');

// add gallery
const imageList = galleryItems
  .map(({ original, preview, description }) => {
    return `<li class="gallery__item">
            <a class="gallery__link"
            href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
            </a></li>`;
  })
  .join('');

gallery.insertAdjacentHTML('afterbegin', imageList);
// end add gallery

const lightboxImage = document.querySelector('.lightbox__image');
const lightboxOverlay = document.querySelector('.lightbox__overlay');

gallery.addEventListener('click', openModal);
lightboxOverlay.addEventListener('click', closeModal);

// button left end right
lightbox.insertAdjacentHTML(
  'beforeend',
  "<button type='button' class='lightbox__button button-left' data-action='slider-left'></button>",
);
lightbox.insertAdjacentHTML(
  'beforeend',
  "<button type='button' class='lightbox__button button-right' data-action='slider-right'></button>",
);
// end button left end right

// btn
const btnClose = document.querySelector(
  ".js-lightbox button[data-action='close-lightbox']",
);

const btnLeft = document.querySelector(
  ".js-lightbox button[data-action='slider-left']",
);
const btnRight = document.querySelector(
  ".js-lightbox button[data-action='slider-right']",
);
// end btn

btnClose.addEventListener('click', closeModal);


function openModal(event) {
  if (event.target.getAttribute('class') !== 'gallery__image') {
    return;
  }
  event.preventDefault();
  lightbox.classList.add('is-open');
  lightboxImage.src = event.target.dataset.source;
  lightboxImage.alt = event.target.alt;

  window.addEventListener('keydown', closeModal);
}

// close modal
function closeModal({type, code}) {
  if (type === 'keydown') {
    if (code === 'Escape') {
      clearImageAtributOnModal();      
    }    
  } 
  else {
    clearImageAtributOnModal();
  }
}

const clearImageAtributOnModal = () => {
  lightbox.classList.remove('is-open');
  lightboxImage.src = '';
  lightboxImage.alt = '';
  window.removeEventListener('keydown', closeModal);
};
// end close modal


btnLeft.addEventListener('click', slider);
btnRight.addEventListener('click', slider);

