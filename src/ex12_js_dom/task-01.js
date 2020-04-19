window.addEventListener('DOMContentLoaded', function() {

  let images = [
    'https://static3.depositphotos.com/1007646/232/i/950/depositphotos_2326980-stock-photo-view-from-braunwald.jpg',
    'https://funik.ru/wp-content/uploads/2019/05/a9bd770ddb21a85a5080.jpg',
    'https://wallpapers-fenix.eu/lar/141205/113026930.jpg',
    'https://static3.depositphotos.com/1003352/159/i/950/depositphotos_1593270-stock-photo-mountain-lake.jpg',
    'https://avatars.mds.yandex.net/get-altay/200322/2a0000015b190361dac616ad0acbe3895c8b/XXL',
    'https://avatars.mds.yandex.net/get-zen_doc/1602486/pub_5d014b7628f8b800adee98db_5d014bd0d0c8c500ac6a332b/scale_1200'
  ]

  let sliderContainer = document.querySelector('.slider__container');

  for (let i = 0; i < images.length; i++) {
    let sliderImg = document.createElement('img');
    sliderImg.setAttribute('src', images[i]);
    sliderImg.classList.add('slider__img');
    sliderContainer.append(sliderImg);  
  }
  document.querySelector('.slider__img').style.display = 'block';
  
  let btnNext = document.querySelector('.slider__btn--next');
  let btnPrev = document.querySelector('.slider__btn--prev');
  let slides = document.querySelectorAll('.slider__img');
  let slideIndex = 0;
  
  btnNext.addEventListener("click", function () {
    
    ++slideIndex

    if (slideIndex >= slides.length) {
      slides[slideIndex - 1].style.display = 'none';
      slideIndex = 0;
      slides[slideIndex].style.display = 'block';
    } else {
      slides[slideIndex - 1].style.display = 'none';
      slides[slideIndex].style.display = 'block';
    }
  });

  btnPrev.addEventListener("click", function () { 
    if (slideIndex === 0) {
      slides[0].style.display = 'none';
      slideIndex = slides.length - 1;
      
      slides[slideIndex].style.display = 'block';
    } else {
      slides[slideIndex].style.display = 'none';
      slides[slideIndex - 1].style.display = 'block';
      slideIndex--
    }  
  });
  
});
  


