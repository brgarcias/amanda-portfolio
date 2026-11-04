import { useEffect } from 'react';

/**
 * Fades each `[data-reveal]` block into place the first time it scrolls into
 * view. The page renders fully visible; only once this runs, and the visitor
 * accepts motion, do the blocks below the fold wait for their turn. Blocks
 * already on screen stay put, so nothing blinks.
 */
export function useReveal() {
  useEffect(() => {
    const root = document.documentElement;
    if (
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }
    const blocks = [...document.querySelectorAll<HTMLElement>('[data-reveal]')];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    );
    for (const block of blocks) {
      if (block.getBoundingClientRect().top < window.innerHeight) {
        block.classList.add('is-visible');
      } else {
        observer.observe(block);
      }
    }
    root.classList.add('js-reveal');
    return () => {
      observer.disconnect();
      root.classList.remove('js-reveal');
    };
  }, []);
}
