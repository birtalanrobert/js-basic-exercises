import { elements, images } from './resources.js';
import { changeImg } from './changeHandler.js';

let currentPage = 0;
const numberOfImages = images.length - images.length%3 - 1;

const attachEvents = () => {
  elements.btn.left.onclick = () => showPrevious();
  elements.btn.right.onclick = () => showNext();

  window.onkeyup = (event) => {
    if(event.keyCode === 37) {
      showPrevious();
    } else if(event.keyCode === 39) {
      showNext();
    }
  };
};

const showPrevious = () => {
  document.querySelector('.pages'+(Math.floor(currentPage/3)+1)).classList.remove('active-page');
  (currentPage === 0) ? currentPage = numberOfImages-2 : currentPage-=3;
  changeImg(currentPage);
  document.querySelector('.pages'+(Math.floor(currentPage/3)+1)).classList.add('active-page');
};

const showNext = () => {
  document.querySelector('.pages'+(Math.floor(currentPage/3)+1)).classList.remove('active-page');
  (currentPage === numberOfImages-2) ? currentPage = 0 : currentPage+=3;
  changeImg(currentPage);
  document.querySelector('.pages'+(Math.floor(currentPage/3)+1)).classList.add('active-page');
};

const showPage = (page) => {
  document.querySelector('.pages'+(Math.floor(currentPage/3)+1)).classList.remove('active-page');
  currentPage = page;
  changeImg(currentPage);
  document.querySelector('.pages'+(Math.floor(currentPage/3)+1)).classList.add('active-page');
};

export { attachEvents, showPrevious, showNext, showPage };
