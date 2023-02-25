import { Swiper, SwiperSlide } from "swiper/react";
import AboutVideo from "../src/components/AboutVideo";
import Partners from "../src/components/Partners";
import Footer from "../src/layout/Footer";
import Layout from "../src/layout/Layout";
import { jsTestimonials } from "../src/sliderProps";
const AboutTwo = () => {
  return (
    <Layout>
      <div className="wrapper">
        {/* Section Hero Started */}
        <div
          className="section hero-started bottom"
        >
          <img src="assets/images/about2.jpg" alt="" />
          <div className="container">
            {/* titles */}
            <div className="titles">
              <div
                className="title splitting-text-anim-1 scroll-animate"
                data-splitting="chars"
                data-animate="active"
              >
                about us
              </div>
            </div>
          </div>
        </div>
        {/* Section Description */}
        <div className="section section-inner m-description">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 align-left col-lg-3">
                <div className="m-titles">
                  <div
                    className="m-title scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    History
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-9">
                <div
                  className="description-text scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <p>
                    A Los Angeles based studio building handcrafted websites and
                    brands for companies and all over the world. It is not
                    enough that we build products that function, that are
                    understandable and usable, we also need to build products
                    that bring joy and excitement, pleasure and fun, and, yes,
                    beauty to people’s lives. Creativity is to discover a
                    question that has never been asked. If one brings up an
                    idiosyncratic question, the answer he gives will necessarily
                    be unique as well.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section Description */}
        <div className="section section-inner m-description">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 align-left col-lg-3">
                <div className="m-titles">
                  <div
                    className="m-title scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    Our vision
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-9">
                <div className="description-list-items">
                  <div
                    className="description-list-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="desc">
                      <div className="name">
                        <span className="number">01.</span>
                        Search Engine Optimization
                      </div>
                    </div>
                  </div>
                  <div
                    className="description-list-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="desc">
                      <div className="name">
                        <span className="number">02.</span>
                        Search Engine Marketing
                      </div>
                    </div>
                  </div>
                  <div
                    className="description-list-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="desc">
                      <div className="name">
                        <span className="number">03.</span>
                        Website Strategy and Social Media Marketing
                      </div>
                    </div>
                  </div>
                  <div
                    className="description-list-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="desc">
                      <div className="name">
                        <span className="number">04.</span>
                        Content Generation and Optimization
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section Services */}
        <div className="section section-inner m-services">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 align-left col-lg-3">
                {/* titles */}
                <div className="m-titles">
                  <h2
                    className="m-title scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    Our services
                  </h2>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-9">
                {/* services */}
                <div className="services-items row">
                  <div className="services-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div
                      className="services-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="icon">
                        <i aria-hidden="true" className="fas fa-chart-bar" />
                      </div>
                      <div className="name">Marketing</div>
                      <div className="text">
                        Focused on creating, publishing, and distributing
                        content for a targeted audience online.
                      </div>
                    </div>
                  </div>
                  <div className="services-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div
                      className="services-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="icon">
                        <i aria-hidden="true" className="fas fa-copyright" />
                      </div>
                      <div className="name">Copywriting</div>
                      <div className="text">
                        Act or occupation of writing text for the purpose of
                        advertising or other forms of marketing.
                      </div>
                    </div>
                  </div>
                  <div className="services-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div
                      className="services-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="icon">
                        <i aria-hidden="true" className="far fa-object-group" />
                      </div>
                      <div className="name">Web Design</div>
                      <div className="text">
                        Design process relating to the front-end (client side)
                        design of a website including writing.
                      </div>
                    </div>
                  </div>
                  <div className="services-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div
                      className="services-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="icon">
                        <i aria-hidden="true" className="fas fa-ad" />
                      </div>
                      <div className="name">Advertising</div>
                      <div className="text">
                        Employs an openly sponsored, non-personal message to
                        promote or sell a product, service.
                      </div>
                    </div>
                  </div>
                  <div className="services-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div
                      className="services-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="icon">
                        <i aria-hidden="true" className="fas fa-rocket" />
                      </div>
                      <div className="name">Optimization</div>
                      <div className="text">
                        Improving the quality and quantity of website traffic to
                        a website or a web page from search.
                      </div>
                    </div>
                  </div>
                  <div className="services-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div
                      className="services-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="icon">
                        <i aria-hidden="true" className="far fa-life-ring" />
                      </div>
                      <div className="name">Support</div>
                      <div className="text">
                        Services to assist customers in making cost effective
                        and correct use of a product.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section Video Large */}
        <AboutVideo />
        {/* Section Team */}
        <div className="section section-inner m-team">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 align-left col-lg-3">
                {/* titles */}
                <div className="m-titles">
                  <h2
                    className="m-title scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    Meet the team
                  </h2>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-9">
                {/* team */}
                <div className="team-items row">
                  <div className="team-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                    <div
                      className="team-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="image">
                        <div className="img">
                          <img src="assets/images/team5.jpg" alt="" />
                        </div>
                      </div>
                      <div className="desc">
                        <div className="category">Founder</div>
                        <div className="name">Natasha Singh</div>
                      </div>
                    </div>
                  </div>
                  <div className="team-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                    <div
                      className="team-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="image">
                        <div className="img">
                          <img src="assets/images/team1.jpg" alt="" />
                        </div>
                      </div>
                      <div className="desc">
                        <div className="category">Co-founder</div>
                        <div className="name">Robert Long</div>
                      </div>
                    </div>
                  </div>
                  <div className="team-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                    <div
                      className="team-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="image">
                        <div className="img">
                          <img src="assets/images/team2.jpg" alt="" />
                        </div>
                      </div>
                      <div className="desc">
                        <div className="category">Designer</div>
                        <div className="name">Viktoria Freeman</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section Testimonials */}
        <div className="section section-inner m-testimonials">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 align-left col-lg-3">
                {/* titles */}
                <div className="m-titles">
                  <h2
                    className="m-title scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    Our testimonials
                  </h2>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-9">
                {/* Carousel */}
                <Swiper
                  {...jsTestimonials}
                  className="swiper-container js-testimonials"
                >
                  {/* Testimonials item */}
                  <SwiperSlide className="testimonials-item swiper-slide">
                    <div
                      className="scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="image">
                        <img src="assets/images/rev1.png" alt="John Smith" />
                      </div>
                      <div className="desc">
                        <div className="title">John Smith</div>
                        <div className="name">Designer</div>
                        <div className="text">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which don't look even slightly believable.
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* Testimonials item */}
                  <SwiperSlide className="testimonials-item swiper-slide">
                    <div
                      className="scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="image">
                        <img src="assets/images/rev3.png" alt="Natasha Singh" />
                      </div>
                      <div className="desc">
                        <div className="title">Natasha Singh</div>
                        <div className="name">Photographer</div>
                        <div className="text">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which don't look even slightly believable.
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* Testimonials item */}
                  <SwiperSlide className="testimonials-item swiper-slide">
                    <div
                      className="scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="image">
                        <img src="assets/images/rev2.png" alt="Gray Woodman" />
                      </div>
                      <div className="desc">
                        <div className="title">Gray Woodman</div>
                        <div className="name">Bloger</div>
                        <div className="text">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which don't look even slightly believable.
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* Testimonials item */}
                  <SwiperSlide className="testimonials-item swiper-slide">
                    <div
                      className="scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="image">
                        <img src="assets/images/rev4.png" alt="Robert Long" />
                      </div>
                      <div className="desc">
                        <div className="title">Robert Long</div>
                        <div className="name">Photographer</div>
                        <div className="text">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which don't look even slightly believable.
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* Pagination  */}
                  <div className="swiper-pagination" />
                </Swiper>
                {/* /Carousel */}
              </div>
            </div>
          </div>
        </div>
        {/* Section Partners */}
        <Partners />
      </div>
      {/* Footer */}
      <Footer />
    </Layout>
  );
};
export default AboutTwo;
