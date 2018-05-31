import { attachEvents, showNext } from './eventHandler.js';
import { changeImg } from './changeHandler.js';
import { generatePages } from './generator.js';

const interval = 5000;

const initialize = () => {
  attachEvents();
  generatePages();
  window.setInterval(showNext, interval);
  changeImg();
};

export { initialize };
