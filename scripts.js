const TestSwiper = new Swiper('.testswiper', {
  direction: 'horizontal',
	slidesPerView: 1,
  pagination: { 
    el: '.swiper-pagination', 
    clickable: true, 
  },
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  loop: 'infinite',
  speed: 300,
});

const LogoSwiper = new Swiper('.logoswiper', {
  direction: 'horizontal',
  centeredSlides: true,
  centeredSlidesBounds: true,
  breakpoints: {  
    300: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 20, 
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 7,
      spaceBetween: 90,
    },
  },
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  loop: 'infinite',
  speed: 300,
});