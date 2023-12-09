import appData from '@/src/data/app';
import { FC } from 'react';

interface DefaultFooterProps {
  extraClass?: string;
}

const DefaultFooter: FC<DefaultFooterProps> = () => {
  return (
    <>
      {/* footer */}
      <footer className="mil-fw">
        <p className="mil-light-soft">{appData.footer.copy}</p>
        <p
          className="mil-light-soft"
          dangerouslySetInnerHTML={{ __html: appData.footer.dev }}
        />
      </footer>
      {/* footer end */}
    </>
  );
};
export default DefaultFooter;
