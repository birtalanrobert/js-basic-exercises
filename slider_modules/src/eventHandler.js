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

const removeActivePage = () => {
  document.querySelector('.pages'+(Math.floor(currentPage/3)+1)).classList.remove('active-page');
};

const addActivePage = () => {
  changeImg(currentPage);
  document.querySelector('.pages'+(Math.floor(currentPage/3)+1)).classList.add('active-page');
};

const showPrevious = () => {
  removeActivePage();
  (currentPage === 0) ? currentPage = numberOfImages-2 : currentPage-=3;
  addActivePage();
};

const showNext = () => {
  removeActivePage();
  (currentPage === numberOfImages-2) ? currentPage = 0 : currentPage+=3;
  addActivePage();
};

const showPage = (page) => {
  removeActivePage();
  currentPage = page;
  addActivePage();
};

export { attachEvents, showPrevious, showNext, showPage };
