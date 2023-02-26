import Image from 'next/image';

import amandaPortfolioLogo from "@/public/assets/images/logo/amanda-portfolio-logo-transparency.png"

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="centrize full-width">
        <div className="vertical-center">
          <div className="spinner-logo">
            <Image
              src={amandaPortfolioLogo}
              alt="amanda-portfolio-logo"
              fill
            />
            <div className="spinner-dot" />
            <div className="spinner spinner-line" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Preloader;
