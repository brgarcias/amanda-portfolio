import { FC } from 'react';

import FooterLayoutDefault from './LayoutDefault';

interface FooterProps {
  layout: number;
  bg?: string;
  instagram?: string;
  extraClass?: string;
}

const Footer: FC<FooterProps> = ({ layout, extraClass }) => {
  switch (layout) {
    case 1:
      return;
    case 2:
      return;
    default:
      return <FooterLayoutDefault extraClass={extraClass} />;
  }
};
export default Footer;
