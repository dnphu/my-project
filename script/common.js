function initSlider(selector, options = {}) {
  const defaultOptions = {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  };

  return new Swiper(selector, {
    ...defaultOptions,
    ...options,
  });
}

function initializeAllSliders() {
  initSlider('.product-container', {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
      reverseDirection: false,
    },
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: false,
    direction: 'horizontal',
    breakpoints: {
      768: { slidesPerView: 3 },
      0: { slidesPerView: 2 }
    }
  });

  const swiper = initSlider('.top-slider', {
    breakpoints: {
      0: {
        slidesPerView: 1.6,
        centeredSlides: false,
        spaceBetween: 16,
        allowTouchMove: true,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
        allowTouchMove: false,
      }
    }
  });

  window.addEventListener('resize', () => {
    swiper.update();
    swiper.allowTouchMove = window.innerWidth < 768;
    console.log('Swiper updated on resize');
  });
}
