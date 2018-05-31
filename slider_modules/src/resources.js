const images = [
  "../images/1.jpg",
  "../images/2.jpg",
  "../images/3.jpg",
  "../images/4.jpg",
  "../images/5.jpg",
  "../images/6.jpg",
  "../images/7.jpg",
  "../images/8.jpg",
  "../images/9.jpg"
];

const elements = {
  images: {
    img1: document.querySelector('.image1'),
    img2: document.querySelector('.image2'),
    img3: document.querySelector('.image3')
  },
  btn: {
    left: document.querySelector('.btnLeft'),
    right: document.querySelector('.btnRight')
  },
  pages: document.querySelector('.pages-container')
};

export {images, elements};
