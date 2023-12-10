import Layouts from '@layouts/Layouts';
import PageBanner from '@/src/components/PageBanner';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { getAllServicesIds, getServiceData } from '@library/services';
import CallToActionSection from '@components/sections/CallToAction';
import PricingSection from '@components/sections/Pricing';

import { accordion } from '../../common/utilities';

const TestimonialSlider = dynamic(
  () => import('@components/sliders/Testimonial'),
  { ssr: false },
);

const ServiceDetail = ({ postData }) => {
  useEffect(() => {
    accordion();
  }, []);

  return (
    <Layouts
      rightPanelBackground={'/assets/images/person/bg-3.jpg'}
      rightPanelImg={'/assets/images/person/6.png'}
    >
      <PageBanner pageTitle={postData.title} align={'center'} breadTitle={''} />

      {postData.subtitle != undefined && (
        <div className="mil-section-title mil-up mil-mb-90">
          <div className="mil-divider" />
          <h3>{postData.subtitle}</h3>
        </div>
      )}

      {/* about */}
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="mil-text-lg mil-dark mil-center mil-up mil-mb-90">
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </div>
        </div>
      </div>
      {/* about end */}

      {postData.list != undefined && (
        <>
          <div className="mil-section-title mil-up mil-mb-90">
            <div className="mil-divider" />
            <h3>{postData.list.heading}</h3>
          </div>
          {/* service */}
          <div className="mil-p-0-60">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                {postData.list.items.map((item, key) => (
                  <div
                    className="mil-accordion-group mil-up"
                    key={`service-list-${key}`}
                  >
                    <div className="mil-accordion-menu">
                      <p className="mil-accordion-head">{item.label}</p>
                      <div className="mil-symbol mil-h3">
                        <div className="mil-plus">+</div>
                        <div className="mil-minus">-</div>
                      </div>
                    </div>
                    <div
                      className="mil-accordion-content"
                      dangerouslySetInnerHTML={{ __html: item.value }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* service end */}
        </>
      )}

      <PricingSection />

      <TestimonialSlider />

      <CallToActionSection />
    </Layouts>
  );
};
export default ServiceDetail;

export async function getStaticPaths() {
  const paths = getAllServicesIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getServiceData(params.id);

  return {
    props: {
      postData,
    },
  };
}
