const images = [];
images[0] = "../images/1.jpg";
images[1] = "../images/2.png";
images[2] = "../images/3.jpg";
images[3] = "../images/4.jpg";
images[4] = "../images/5.jpg";
images[5] = "../images/6.png";
images[6] = "../images/7.jpg";
images[7] = "../images/8.jpg";
images[8] = "../images/9.png";

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
