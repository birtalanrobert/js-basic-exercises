const backImg = [];
backImg[0] = "../images/1.jpg";
backImg[1] = "../images/2.png";
backImg[2] = "../images/3.jpg";
backImg[3] = "../images/4.jpg";
backImg[4] = "../images/5.jpg";
backImg[5] = "../images/6.png";
backImg[6] = "../images/7.jpg";
backImg[7] = "../images/8.jpg";
backImg[8] = "../images/9.png";

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

export {backImg, elements};
