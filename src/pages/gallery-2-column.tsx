import dynamic from 'next/dynamic';

import Footer from '@/layout/Footer';
import Layout from '@/layout/Layout';
import PageTitle from '@/layout/PageTitle';

const Gallery2Isotope = dynamic(
  () => import('@/components/Gallery2Isotope'),
  {
    ssr: false,
  },
);
const Gallery2Column = () => {
  return (
    <Layout>
      <div className="wrapper">
        {/* Section Started Heading */}
        <PageTitle title="Projects" />
        {/* Section Works */}
        <Gallery2Isotope />
      </div>
      <Footer />
    </Layout>
  );
};
export default Gallery2Column;
