import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Layout from "../src/layout/Layout";
import { HomeGridSliderProps } from "../src/sliderProps";
const HomeGridSlider = () => {
  return (
    <Layout>
      <div className="wrapper">
        {/* Section Works Carousel */}
        <Swiper
          {...HomeGridSliderProps}
          className="section m-works-carousel default"
        >
          {/* slide */}
          <SwiperSlide className="swiper-slide">
            <div className="works-slide">
              <Link legacyBehavior href="/work-single">
                <a>
                  <span className="image">
                    <span className="img">
                      <span
                        className="slide"
                        style={{
                          backgroundImage:
                            "url(assets/images/started-n12-900x1170.jpg)",
                        }}
                      />
                    </span>
                  </span>
                  <span className="desc">
                    <span
                      className="subname splitting-text-anim-1"
                      data-splitting="chars"
                    >
                      photo
                    </span>
                    <span
                      className="name splitting-text-anim-1"
                      data-splitting="chars"
                    >
                      Astronaut
                    </span>
                  </span>
                </a>
              </Link>
            </div>
          </SwiperSlide>
          {/* slide */}
          <SwiperSlide className="swiper-slide">
            <div className="works-slide">
              <Link legacyBehavior href="/work-single">
                <a>
                  <span className="image">
                    <span className="img">
                      <span
                        className="slide"
                        style={{
                          backgroundImage:
                            "url(assets/images/started-n2_4-900x600.jpg)",
                        }}
                      />
                    </span>
                  </span>
                  <span className="desc">
                    <span
                      className="subname splitting-text-anim-1"
                      data-splitting="chars"
                    >
                      art
                    </span>
                    <span
                      className="name splitting-text-anim-1"
                      data-splitting="chars"
                    >
                      The Dance
                    </span>
                  </span>
                </a>
              </Link>
            </div>
          </SwiperSlide>
          {/* slide */}
          <SwiperSlide className="swiper-slide">
            <div className="works-slide">
              <Link legacyBehavior href="/work-single">
                <a>
                  <span className="image">
                    <span className="img">
                      <span
                        className="slide"
                        style={{
                          backgroundImage:
                            "url(assets/images/started-n15-900x600.jpg)",
                        }}
                      />
                    </span>
                  </span>
                  <span className="desc">
                    <span
                      className="subname splitting-text-anim-1"
                      data-splitting="chars"
                    >
                      branding
                    </span>
                    <span
                      className="name splitting-text-anim-1"
                      data-splitting="chars"
                    >
                      Blue denim
                    </span>
                  </span>
                </a>
              </Link>
            </div>
          </SwiperSlide>
          {/* slide */}
          <SwiperSlide className="swiper-slide">
            <div className="works-slide">
              <Link legacyBehavior href="/work-single">
                <a>
                  <span className="image">
                    <span className="img">
                      <span
                        className="slide"
                        style={{
                          backgroundImage:
                            "url(assets/images/started-n19-900x900.jpg)",
                        }}
                      />
                    </span>
                  </span>
                  <span className="desc">
                    <span
                      className="subname splitting-text-anim-1"
                      data-splitting="chars"
                    >
                      photography
                    </span>
                    <span
                      className="name splitting-text-anim-1"
                      data-splitting="chars"
                    >
                      Melanin Goddess
                    </span>
                  </span>
                </a>
              </Link>
            </div>
          </SwiperSlide>
          {/* slide */}
          <SwiperSlide className="swiper-slide">
            <div className="works-slide">
              <Link legacyBehavior href="/work-single">
                <a>
                  <span className="image">
                    <span className="img">
                      <span
                        className="slide"
                        style={{
                          backgroundImage:
                            "url(assets/images/started-n14_1-900x1080.jpg)",
                        }}
                      />
                    </span>
                  </span>
                  <span className="desc">
                    <span
                      className="subname splitting-text-anim-1"
                      data-splitting="chars"
                    >
                      art
                    </span>
                    <span
                      className="name splitting-text-anim-1"
                      data-splitting="chars"
                    >
                      Negative space
                    </span>
                  </span>
                </a>
              </Link>
            </div>
          </SwiperSlide>
          <div className="swiper-pagination" />
        </Swiper>
      </div>
    </Layout>
  );
};
export default HomeGridSlider;
