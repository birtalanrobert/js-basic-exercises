import { images, elements } from './resources.js';

const changeImg = (i = 0) => {
  elements.images.img1.style.backgroundImage = 'url(' + images[i] + ')';
  elements.images.img2.style.backgroundImage = 'url(' + images[i+1] + ')';
  elements.images.img3.style.backgroundImage = 'url(' + images[i+2] + ')';
};

export { changeImg };
