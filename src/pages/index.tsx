import React from 'react';
import dynamic from 'next/dynamic';
import Layouts from '@layouts/Layouts';
import HeroOneSection from '@components/sections/HeroOne';
import AboutSection from '@components/sections/About';
import ServicesSection from '@components/sections/Services';
import SkillsOneSection from '@components/sections/SkillsOne';
import SkillsTwoSection from '@components/sections/SkillsTwo';
import CallToActionSection from '@components/sections/CallToAction';

const TestimonialSlider = dynamic(
  () => import('@components/sliders/Testimonial'),
  { ssr: false },
);

const Home1: React.FC = () => {
  return (
    <Layouts
      rightPanelBackground="/assets/images/person/bg-1.jpg"
      rightPanelImg="/assets/images/person/2.png"
    >
      <HeroOneSection />
      <AboutSection />
      <ServicesSection />
      <SkillsOneSection />
      <SkillsTwoSection />
      <TestimonialSlider />
      <CallToActionSection />
    </Layouts>
  );
};

export default Home1;
