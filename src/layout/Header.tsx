import Link from 'next/link';
import Image from 'next/image';
import { MouseEvent, useEffect, useState } from 'react';

import amandaPortfolioLogo from '@/public/assets/images/logo/amanda-portfolio-logo-transparency.png';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [linkElements, setLinkElements] = useState(null);
  const [height, setHeight] = useState(null);

  const toggleFun = (e: MouseEvent) => {
    const menu = document.querySelector('.menu-btn.full'),
      overlay = document.querySelector('.menu-full-overlay');
    e.preventDefault();
    setToggle(!toggle);
    if (toggle) {
      menu.classList.remove('active');
      menu.classList.add('no-touch');
      document.body.classList.remove('no-scroll');
      overlay.classList.remove('is-open');
      overlay.classList.remove('has-scroll');
      overlay.classList.remove('animate-active');
      setTimeout(function () {
        overlay.classList.remove('visible');
        menu.classList.remove('no-touch');
      }, 1000);
    } else {
      menu.classList.add('active');
      menu.classList.add('no-touch');
      document.body.classList.add('no-scroll');
      overlay.classList.add('is-open');
      overlay.classList.add('visible');
      setTimeout(function () {
        overlay.classList.add('has-scroll');
        overlay.classList.add('animate-active');
        menu.classList.remove('no-touch');
      }, 1000);
    }
    return false;
  };

  useEffect(() => {
    document.querySelector('body').classList.remove('no-scroll');
  }, []);
  const subMenuClick = (event: MouseEvent, value: string) => {
      setLinkElements(value == linkElements ? null : value);
      const target = event.target as any,
        ul = target.closest('.menu-full');
      setHeight(ul.offsetHeight + 20);
    },
    subMenuHeight = (value: string) =>
      value == linkElements
        ? { maxHeight: `${height}px` }
        : { maxHeight: '0px' },
    subMenuOpened = (value: string) =>
      value == linkElements ? 'opened' : 'closed';
  return (
    <header className="header">
      <div className="header__builder">
        {/* logo */}
        <div className="logo-image">
          <Link legacyBehavior href="/">
            <a>
              <Image
                src={amandaPortfolioLogo}
                alt="amanda-portfolio-logo"
                fill
              />
            </a>
          </Link>
        </div>
        {/* menu btn */}
        <a href="#" className="menu-btn full" onClick={(e) => toggleFun(e)}>
          <span />
        </a>
        {/* Menu Full Overlay */}
        <div className="menu-full-overlay">
          <div className="menu-full-container">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-10 offset-1">
                  {/* menu full */}
                  <div className="menu-full">
                    <ul className="menu-full">
                      <li
                        className={`menu-item menu-item-has-children has-children ${subMenuOpened(
                          'home',
                        )}`}
                      >
                        <a
                          className="splitting-text-anim-2 words chars splitting"
                          data-splitting="chars"
                          href="#"
                          onClick={(e) => subMenuClick(e, 'home')}
                        >
                          Home
                        </a>
                        <ul className="sub-menu" style={subMenuHeight('home')}>
                          <li className="menu-item">
                            <Link legacyBehavior href="/">
                              <a
                                className="splitting-text-anim-1"
                                data-splitting="chars"
                              >
                                Parallax Slider
                              </a>
                            </Link>
                          </li>
                          <li className="menu-item">
                            <Link legacyBehavior href="/home-grid-slider">
                              <a
                                className="splitting-text-anim-1"
                                data-splitting="chars"
                              >
                                Grid Slider
                              </a>
                            </Link>
                          </li>

                          <li className="menu-item">
                            <Link legacyBehavior href="/home-grid-fully-slider">
                              <a
                                className="splitting-text-anim-1"
                                data-splitting="chars"
                              >
                                Blur Horizontal Slider
                              </a>
                            </Link>
                          </li>

                          <li className="menu-item">
                            <Link legacyBehavior href="/home-portfolio">
                              <a
                                className="splitting-text-anim-1"
                                data-splitting="chars"
                              >
                                Portfolio Grid
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className={`menu-item menu-item-has-children has-children ${subMenuOpened(
                          'about',
                        )}`}
                      >
                        <a
                          className="splitting-text-anim-2"
                          data-splitting="chars"
                          href="#"
                          onClick={(e) => subMenuClick(e, 'about')}
                        >
                          About
                        </a>
                        <ul className="sub-menu" style={subMenuHeight('about')}>
                          <li className="menu-item">
                            <Link legacyBehavior href="/about">
                              <a
                                className="splitting-text-anim-1"
                                data-splitting="chars"
                              >
                                About One
                              </a>
                            </Link>
                          </li>
                          <li className="menu-item">
                            <Link legacyBehavior href="/about-two">
                              <a
                                className="splitting-text-anim-1"
                                data-splitting="chars"
                              >
                                About Two
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className={`menu-item menu-item-has-children has-children ${subMenuOpened(
                          'Works',
                        )}`}
                      >
                        <a
                          className="splitting-text-anim-2 words chars splitting"
                          data-splitting="chars"
                          href="#"
                          onClick={(e) => subMenuClick(e, 'Works')}
                        >
                          Works
                        </a>
                        <ul className="sub-menu" style={subMenuHeight('Works')}>
                          <li className="menu-item">
                            <Link legacyBehavior href="/works-2-column">
                              <a
                                className="splitting-text-anim-1"
                                data-splitting="chars"
                              >
                                Works (2 Columns)
                              </a>
                            </Link>
                          </li>
                          <li className="menu-item">
                            <Link legacyBehavior href="/works-3-column">
                              <a
                                className="splitting-text-anim-1"
                                data-splitting="chars"
                              >
                                Works (3 Columns)
                              </a>
                            </Link>
                          </li>
                          <li className="menu-item">
                            <Link legacyBehavior href="/works-creative">
                              <a
                                className="splitting-text-anim-1"
                                data-splitting="chars"
                              >
                                Works (Creative)
                              </a>
                            </Link>
                          </li>
                          <li className="menu-item">
                            <Link legacyBehavior href="/gallery-2-column">
                              <a
                                className="splitting-text-anim-1"
                                data-splitting="chars"
                              >
                                Gallery (2 Columns)
                              </a>
                            </Link>
                          </li>
                          <li className="menu-item">
                            <Link legacyBehavior href="/gallery-3-column">
                              <a
                                className="splitting-text-anim-1"
                                data-splitting="chars"
                              >
                                Gallery (3 Columns)
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item">
                        <Link legacyBehavior href="/contacts">
                          <a
                            className="splitting-text-anim-2"
                            data-splitting="chars"
                          >
                            Contact
                          </a>
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link legacyBehavior href="/blog">
                          <a
                            className="splitting-text-anim-2"
                            data-splitting="chars"
                          >
                            Blog
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* social */}
          <div className="menu-social-links">
            <a
              href="https://instagram.com/"
              target="blank"
              className="scrolla-element-anim-1"
              title="Instagram"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com/"
              target="blank"
              className="scrolla-element-anim-1"
              title="Facebook"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com/"
              target="blank"
              className="scrolla-element-anim-1"
              title="Twitter"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com/"
              target="blank"
              className="scrolla-element-anim-1"
              title="Linkedin"
            >
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
