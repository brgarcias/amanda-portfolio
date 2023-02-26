import Image from 'next/image';

import brandLogo03 from '@/public/assets/images/brand_logo_03_1.png';
import brandLogo08 from '@/public/assets/images/brand_logo_08_1.png';
import brandLogo06 from '@/public/assets/images/brand_logo_06_1.png';
import brandLogo05 from '@/public/assets/images/brand_logo_05_1.png';

const Partners = () => {
  return (
    <div className="section section-inner m-partners">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            {/* partners */}
            <div className="partners-box">
              <div className="partners-items row">
                <div
                  className="partners-col col-xs-12 col-sm-6 col-md-3 col-lg-3 scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="partners-item">
                    <div className="image">
                      <a target="_blank" href="https://www.envato.com/">
                        <Image src={brandLogo03} alt="Brand Logo 03" fill />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="partners-col col-xs-12 col-sm-6 col-md-3 col-lg-3 scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="partners-item">
                    <div className="image">
                      <a target="_blank" href="https://www.envato.com/">
                        <Image src={brandLogo08} alt="Brand Logo 08" fill />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="partners-col col-xs-12 col-sm-6 col-md-3 col-lg-3 scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="partners-item">
                    <div className="image">
                      <a target="_blank" href="https://www.envato.com/">
                        <Image src={brandLogo06} alt="Brand Logo 06" fill />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="partners-col col-xs-12 col-sm-6 col-md-3 col-lg-3 scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="partners-item">
                    <div className="image">
                      <a target="_blank" href="https://www.envato.com/">
                        <Image src={brandLogo05} alt="Brand Logo 05" fill />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Partners;
