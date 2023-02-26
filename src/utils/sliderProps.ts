import SwiperCore, {
  Autoplay,
  EffectCreative,
  EffectFade,
  Grid,
  Mousewheel,
  Navigation,
  Pagination,
} from 'swiper';
import { SwiperProps } from 'swiper/react';
SwiperCore.use([
  Mousewheel,
  Pagination,
  Navigation,
  EffectFade,
  Autoplay,
  Grid,
  EffectCreative,
]);

export const home1SliderProps: SwiperProps = {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  effect: 'creative',
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ['-20%', 0, -1],
    },
    next: {
      translate: ['100%', 0, 0],
    },
  },
  speed: 1000,
  mousewheel: true,
  watchSlidesProgress: true,
  pagination: {
    el: '.hero-main-slider .swiper-pagination',
  },
  navigation: {
    nextEl: '.hero-main-slider .swiper-button-next',
    prevEl: '.hero-main-slider .swiper-button-prev',
  },
  onSlideChange: (swiper: { realIndex: number }) => {
    const swiperSliders = document.querySelectorAll(
      '.hero-main-slider .swiper-slide',
    );
    for (let i = 0; i < swiperSliders.length; i++) {
      const slide = swiperSliders[i];
      if (
        slide.getAttribute('data-swiper-slide-index') ===
        String(swiper.realIndex)
      ) {
        const dataColor = slide.getAttribute('data-color');
        document.querySelector('body').className =
          dataColor == 'dark'
            ? 'home page nav-white nav-white-logo dark-first'
            : 'home page nav-white nav-white-logo';
      }
    }
  },
};

export const HomeGridSliderProps: SwiperProps = {
  slidesPerView: 3,
  spaceBetween: 50,
  centeredSlides: true,
  speed: 1000,
  loop: true,
  mousewheel: true,
  preventInteractionOnTransition: true,
  navigation: false,
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  },
};

export const HomeGridFullySliderProps: SwiperProps = {
  slidesPerView: 3,
  spaceBetween: 0,
  centeredSlides: true,
  speed: 1000,
  loop: true,
  mousewheel: true,
  preventInteractionOnTransition: true,
  navigation: false,
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  },
};

export const jsTestimonials: SwiperProps = {
  slidesPerView: 2,
  spaceBetween: 50,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  },
};

export const mGalleryCarousel: SwiperProps = {
  slidesPerView: 'auto',
  spaceBetween: 100,
  speed: 700,
  loop: false,
  pagination: false,
  breakpoints: {
    0: {
      spaceBetween: 30,
    },
    768: {
      spaceBetween: 50,
    },
    1200: {
      spaceBetween: 100,
    },
  },
};
