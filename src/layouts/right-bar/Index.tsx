import Image from 'next/image';
import Logo1 from '@public/assets/images/logos/1.jpg';
import Logo2 from '@public/assets/images/logos/2.jpg';
import Logo3 from '@public/assets/images/logos/3.jpg';

const rightPanelModule = ({ background, img }) => {
  return (
    <div className="mil-right-banner" id="scene">
      {/* scrollbar */}
      <div className="mil-progress-track">
        <div className="mil-progress" />
      </div>
      {/* scrollbar end */}
      <div className="mil-banner-wrapper" data-depth="1">
        <div id="swupBg" className="mil-banner-frame">
          <Image
            src={background}
            alt="background"
            className={img ? 'mil-banner-bg mil-blur' : 'mil-banner-bg'}
            unoptimized
          />
        </div>
      </div>
      <div className="mil-banner-wrapper" data-depth="0.2">
        {img != undefined && (
          <div id="swupPerson" className="mil-banner-frame">
            <Image
              src={img}
              alt="person"
              className="mil-banner-person"
              unoptimized
            />
          </div>
        )}
      </div>
      <div className="mil-flying-skills" data-depth="0.1">
        {img != undefined && (
          <div id="swupSkills" className="mil-skills-frame">
            <div className="mil-item" style={{ top: '30%', left: '10%' }}>
              <Image src={Logo1} alt="logo" unoptimized />
            </div>
            <div className="mil-item" style={{ bottom: '15%', left: '20%' }}>
              <Image src={Logo2} alt="logo2" unoptimized />
            </div>
            <div className="mil-item" style={{ bottom: '45%', right: '15%' }}>
              <Image src={Logo3} alt="logo3" unoptimized />
            </div>

            <div className="mil-el mil-addition-el-1">+</div>
            <div className="mil-el mil-addition-el-2">+</div>
            <div className="mil-el mil-addition-el-3" />
            <div className="mil-el mil-addition-el-4" />
          </div>
        )}
      </div>
    </div>
  );
};
export default rightPanelModule;
