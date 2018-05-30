import { elements, backImg } from './resources.js';
import { changeImg } from './changeHandler.js';

let i = 0;
const x = backImg.length - backImg.length%3 - 1;

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
  document.querySelector('.pages'+(Math.floor(i/3)+1)).classList.remove('active-page');
  (i === 0) ? i = x-2 : i-=3;
  changeImg(i);
  document.querySelector('.pages'+(Math.floor(i/3)+1)).classList.add('active-page');
};

const showNext = () => {
  document.querySelector('.pages'+(Math.floor(i/3)+1)).classList.remove('active-page');
  (i === x-2) ? i = 0 : i+=3;
  changeImg(i);
  document.querySelector('.pages'+(Math.floor(i/3)+1)).classList.add('active-page');
};

const showPage = (page) => {
  document.querySelector('.pages'+(Math.floor(i/3)+1)).classList.remove('active-page');
  i = page;
  changeImg(i);
  document.querySelector('.pages'+(Math.floor(i/3)+1)).classList.add('active-page');
};

export { attachEvents, showPrevious, showNext, showPage };
