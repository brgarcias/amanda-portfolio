import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";

const Gallery3Isotope = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  const [showLoading, setShowLoading] = useState(false);
  let timer1 = setTimeout(() => setShowLoading(true), 1000);
  useEffect(() => {
    isotope.current = new Isotope(".works-items", {
      itemSelector: ".works-col",
      //    layoutMode: "fitRows",
      percentPosition: true,
      masonry: {
        columnWidth: ".works-col",
      },
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false,
      },
    });
  }, [showLoading]);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };

  return (
    <div className="section section-inner m-works">
      <div className="container">
        {/* filter */}
        <div className="filter-links">
          <a onClick={handleFilterKeyChange("*")} data-filter="*">
            All
          </a>
          <a
            onClick={handleFilterKeyChange("sorting-print")}
            data-filter="sorting-print"
          >
            Print
          </a>
          <a
            onClick={handleFilterKeyChange("sorting-photography")}
            data-filter="sorting-photography"
          >
            Photography
          </a>
          <a
            onClick={handleFilterKeyChange("sorting-branding")}
            data-filter="sorting-branding"
          >
            Branding
          </a>
          <a
            onClick={handleFilterKeyChange("sorting-art")}
            data-filter="sorting-art"
          >
            Art
          </a>
        </div>
        {/* works items */}
        <div className="works-items row classic column-3-offset portfolio-infinite-scrolling hide_title hide_category hide_description">
          <div className="works-col col-xs-12 col-sm-6 col-md-6 col-lg-4 sorting-photography ">
            <div className="works-item">
              <a
                href="assets/images/started-n12-900x1170.jpg"
                className="has-popup-image"
              >
                <span className="image">
                  <span className="img">
                    <img
                      src="assets/images/started-n12-900x1170.jpg"
                      alt="Astronaut"
                    />
                  </span>
                </span>
                <span className="desc">
                  <span
                    className="category splitting-text-anim-4 scroll-animate"
                    data-splitting="chars"
                    data-animate="active"
                  >
                    Photography
                  </span>
                  <span
                    className="name splitting-text-anim-4 scroll-animate"
                    data-splitting="words"
                    data-animate="active"
                  >
                    Astronaut
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-6 col-md-6 col-lg-4 sorting-art ">
            <div className="works-item">
              <a
                href="assets/images/started-n2_4-900x600.jpg"
                className="has-popup-image"
              >
                <span className="image">
                  <span className="img">
                    <img
                      src="assets/images/started-n2_4-900x600.jpg"
                      alt="The Dance"
                    />
                  </span>
                </span>
                <span className="desc">
                  <span
                    className="category splitting-text-anim-4 scroll-animate"
                    data-splitting="chars"
                    data-animate="active"
                  >
                    Art
                  </span>
                  <span
                    className="name splitting-text-anim-4 scroll-animate"
                    data-splitting="words"
                    data-animate="active"
                  >
                    The Dance
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-6 col-md-6 col-lg-4 sorting-branding ">
            <div className="works-item">
              <a
                href="assets/images/started-n19-900x900.jpg"
                className="has-popup-image"
              >
                <span className="image">
                  <span className="img">
                    <img
                      src="assets/images/started-n19-900x900.jpg"
                      alt="Melanin Goddess"
                    />
                  </span>
                </span>
                <span className="desc">
                  <span
                    className="category splitting-text-anim-4 scroll-animate"
                    data-splitting="chars"
                    data-animate="active"
                  >
                    Branding
                  </span>
                  <span
                    className="name splitting-text-anim-4 scroll-animate"
                    data-splitting="words"
                    data-animate="active"
                  >
                    Melanin Goddess
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-6 col-md-6 col-lg-4 sorting-branding ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <a
                href="assets/images/started-n15-900x600.jpg"
                className="has-popup-image"
              >
                <span className="image">
                  <span className="img">
                    <img
                      src="assets/images/started-n15-900x600.jpg"
                      alt="Blue denim"
                    />
                  </span>
                </span>
                <span className="desc">
                  <span
                    className="category splitting-text-anim-4 scroll-animate"
                    data-splitting="chars"
                    data-animate="active"
                  >
                    Branding
                  </span>
                  <span
                    className="name splitting-text-anim-4 scroll-animate"
                    data-splitting="words"
                    data-animate="active"
                  >
                    Blue denim
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-6 col-md-6 col-lg-4 sorting-art ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <a
                href="assets/images/started-n14_1-900x1080.jpg"
                className="has-popup-image"
              >
                <span className="image">
                  <span className="img">
                    <img
                      src="assets/images/started-n14_1-900x1080.jpg"
                      alt="Negative space"
                    />
                  </span>
                </span>
                <span className="desc">
                  <span
                    className="category splitting-text-anim-4 scroll-animate"
                    data-splitting="chars"
                    data-animate="active"
                  >
                    Art
                  </span>
                  <span
                    className="name splitting-text-anim-4 scroll-animate"
                    data-splitting="words"
                    data-animate="active"
                  >
                    Negative space
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-6 col-md-6 col-lg-4 sorting-print ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <a
                href="assets/images/work-n3-900x900.jpg"
                className="has-popup-image"
              >
                <span className="image">
                  <span className="img">
                    <img
                      src="assets/images/work-n3-900x900.jpg"
                      alt="Ferris Wheel"
                    />
                  </span>
                </span>
                <span className="desc">
                  <span
                    className="category splitting-text-anim-4 scroll-animate"
                    data-splitting="chars"
                    data-animate="active"
                  >
                    Print
                  </span>
                  <span
                    className="name splitting-text-anim-4 scroll-animate"
                    data-splitting="words"
                    data-animate="active"
                  >
                    Ferris Wheel
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Gallery3Isotope;
