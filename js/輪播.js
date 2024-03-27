let slideIndex = 0;
let slideInterval;

function startSlideShow() {
  slideInterval = setInterval(() => {
    changeSlide(1);
  }, 4000);
}

function stopSlideShow() {
  clearInterval(slideInterval);
}

function changeSlide(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides() {
  const slides = document.querySelectorAll('.slides .slide');

  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }

  slides[slideIndex].classList.add('active');
}

startSlideShow(); // 啟動自動播放

// 如果希望當用戶與輪播互動時停止自動播放，可以添加以下代碼
const slideshowContainer = document.querySelector('.slideshow-container');
slideshowContainer.addEventListener('mouseenter', stopSlideShow);
slideshowContainer.addEventListener('mouseleave', startSlideShow);
