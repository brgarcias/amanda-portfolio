import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export const countersAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  // counters
  const numbers = document.querySelectorAll<HTMLElement>('.mil-counter');

  numbers.forEach((element) => {
    const count = element;
    const zero = { val: 0 };
    const num = parseFloat(count.dataset.number || '0'); // Ensure num is a valid number
    const decimals =
      num % 1 !== 0 ? (num.toString().split('.')[1] || '').length : 0;

    gsap.to(zero, {
      val: num,
      duration: 2,
      scrollTrigger: {
        trigger: count,
        toggleActions: 'play none none reverse',
      },
      onUpdate: function () {
        count.innerHTML = zero.val.toFixed(decimals);
      },
    });
  });

  // progressbar type 1
  const progBars = document.querySelectorAll<HTMLElement>(
    '.mil-circular-progress',
  );

  progBars.forEach((section) => {
    const value = section.dataset.value;
    gsap.fromTo(
      section,
      {
        '--p': '0',
        ease: 'sine',
      },
      {
        '--p': value,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          toggleActions: 'play none none reverse',
        },
      },
    );
  });

  // progressbars type 2
  const widthBars = document.querySelectorAll<HTMLElement>('.mil-bar');

  widthBars.forEach((section) => {
    const value = section.dataset.value;
    gsap.fromTo(
      section,
      {
        width: 0,
        duration: 5, // Set the duration in seconds (5000 milliseconds = 5 seconds)
        ease: 'sine',
      },
      {
        width: value,
        scrollTrigger: {
          trigger: section,
          toggleClass: 'mil-active',
          toggleActions: 'play none none reverse',
        },
      },
    );
  });
};
