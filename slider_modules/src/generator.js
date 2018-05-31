import { images, elements } from './resources.js';
import { showPage } from './eventHandler.js';

const generatePages = () => {
  const pageNumber = Math.floor(images.length / 3);
  for(let i=0; i<pageNumber; i++) {
    const div = document.createElement('div');
    div.setAttribute('class', 'pages pages'+(i+1));
    if(i==0) {
      div.classList.add('active-page');
    }
    div.onclick = () => { showPage(3*i); };
    div.textContent = i+1;
    elements.pages.appendChild(div);
  }
};

export { generatePages };
