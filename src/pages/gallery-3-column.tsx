import dynamic from 'next/dynamic';

import Footer from '@/layout/Footer';
import Layout from '@/layout/Layout';
import PageTitle from '@/layout/PageTitle';

const Gallery3Isotope = dynamic(
  () => import('@/components/Gallery3Isotope'),
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
        <Gallery3Isotope />
      </div>
      <Footer />
    </Layout>
  );
};
export default Gallery2Column;
