import { SwiperOptions } from 'swiper/types';
import Swiper from 'swiper';
import {
  Mousewheel,
  Pagination,
  Navigation,
  EffectFade,
  Autoplay,
  Grid,
  EffectCreative,
  Virtual,
  HashNavigation,
  History,
  Thumbs,
  Scrollbar,
  Keyboard,
  A11y,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

Swiper.use([
  Mousewheel,
  Pagination,
  Navigation,
  EffectFade,
  Autoplay,
  Grid,
  EffectCreative,
  Virtual,
  HashNavigation,
  History,
  Thumbs,
  Scrollbar,
  Keyboard,
  A11y,
]);

interface SwiperOptionsProps {
  milReviewsSlider: SwiperOptions;
  milPortfolioCarousel: SwiperOptions;
}

export const sliderProps: SwiperOptionsProps = {
  milReviewsSlider: {
    spaceBetween: 30,
    speed: 800,
    parallax: true,
    navigation: {
      nextEl: '.mil-reviews-next',
      prevEl: '.mil-reviews-prev',
    },
    pagination: {
      el: '.swiper-reviews-pagination',
      clickable: true,
    },
  },
  milPortfolioCarousel: {
    spaceBetween: 30,
    speed: 800,
    parallax: true,
    navigation: {
      nextEl: '.mil-portfolio-next',
      prevEl: '.mil-portfolio-prev',
    },
    pagination: {
      el: '.mil-portfolio-pagination',
      type: 'fraction',
    },
    breakpoints: {
      1200: {
        spaceBetween: 90,
      },
    },
  },
};
