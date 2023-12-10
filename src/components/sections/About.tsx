import Image from 'next/image';
import { userProfile } from '@/src/data/sections/about';

const AboutSection = () => {
  return (
    <section id="about" className="mil-p-0-90">
      <div className="mil-oval-frame-2 mil-mb-90">
        <Image src={userProfile.avatar.image} alt={userProfile.avatar.alt} />
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="mil-center">
            <h2
              className="mil-up mil-mb-30"
              dangerouslySetInnerHTML={{ __html: userProfile.title }}
            />
            <div className="mil-quote mil-up mil-mb-30">
              <i className="fas fa-quote-left" />
            </div>
            <p className="mil-up mil-mb-30">{userProfile.description}</p>
            <Image
              src={userProfile.signature.image}
              alt={userProfile.signature.alt}
              className="mil-up mil-sign"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
