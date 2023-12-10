interface ScrollToOptions {
  top: number;
  behavior: 'auto' | 'instant' | 'smooth';
}

export const anchorScroll = () => {
  const links = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector<HTMLElement>(targetId);

      if (targetElement) {
        const offset = 90;
        const scrollToOptions: ScrollToOptions = {
          top: targetElement.offsetTop - offset,
          behavior: 'smooth',
        };

        window.scrollTo(scrollToOptions);
      }
    });
  });
};

export const accordion = () => {
  const accordions = document.querySelectorAll<HTMLElement>(
    '.mil-accordion-menu',
  );

  accordions.forEach((accord) => {
    accord.addEventListener('click', function () {
      this.classList.toggle('mil-active');
      const panel = this.nextElementSibling as HTMLElement | null;

      if (panel) {
        panel.style.height = panel.style.height
          ? null
          : `${panel.scrollHeight}px`;
      }
    });
  });
};
