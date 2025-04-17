//
// Слайдер для slider-card
//

const sliderCard = new Swiper('.slider-card', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//
// Слайдер для review-cards
//

const sliderReview = new Swiper('.review-cards', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.testimonials__next',
    prevEl: '.testimonials__prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
