import { FC, useEffect, JSX } from 'react';

import { scrollAnimation } from '../common/scrollAnims';
import { preloaderAnimation } from '../common/preloader';
import { countersAnimation } from '../common/counters';
import { parallaxAnimation } from '../common/parallax';
import { anchorScroll } from '../common/utilities';

import Footer from './footers/Index';
import Header from './headers/Index';
import Preloader from './preloader/Index';
import LeftPanel from './left-bar/Index';
import RightPanel from './right-bar/Index';
import BackToTop from './back-to-top/Index';

interface LayoutsProps {
  children: JSX.Element | JSX.Element[];
  header?: number;
  footer?: number;
  noHeader?: boolean;
  noFooter?: boolean;
  fullWidth?: boolean;
  rightPanelBackground: string;
  rightPanelImg: string;
  fullWidth100?: boolean;
  extraClass?: string;
}

const Layouts: FC<LayoutsProps> = ({
  children,
  header = 0,
  footer = 0,
  noHeader = false,
  noFooter = false,
  fullWidth = false,
  rightPanelBackground,
  rightPanelImg,
  fullWidth100 = false,
  extraClass,
}) => {
  let bodyClass = null;
  let containerClass = null;

  if (fullWidth && fullWidth100) {
    bodyClass = ['mil-fw-page', 'mil-100-page'];
    containerClass = 'mil-container-100';
  } else if (fullWidth) {
    bodyClass = 'mil-fw-page';
    containerClass = 'mil-container-fw';
  }

  useEffect(() => {
    preloaderAnimation();
    scrollAnimation();
    countersAnimation();
    parallaxAnimation();
    anchorScroll();

    if (document != undefined && bodyClass) {
      document.querySelector('body').classList.add(...bodyClass);
    } else {
      document.querySelector('body').classList.remove('mil-fw-page');
      document.querySelector('body').classList.remove('mil-100-page');
    }
  }, [bodyClass]);

  return (
    <div className="mil-wrapper" id="top">
      <Preloader />

      <div className="mil-frame">
        {!noHeader && <Header layout={header} extraClass={extraClass} />}

        <LeftPanel />

        <BackToTop />
      </div>

      <div className="mil-content">
        <div className="mil-scroll-wrapper transition-fade" id="swupMain">
          <div className={containerClass || 'mil-container'}>
            {children}

            {!noFooter && <Footer layout={footer} />}
          </div>
        </div>

        {!fullWidth && (
          <RightPanel background={rightPanelBackground} img={rightPanelImg} />
        )}
      </div>
    </div>
  );
};
export default Layouts;
