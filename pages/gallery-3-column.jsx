import dynamic from "next/dynamic";
import Footer from "../src/layout/Footer";
import Layout from "../src/layout/Layout";
import PageTitle from "../src/layout/PageTitle";
const Gallery3Isotope = dynamic(
  () => import("../src/components/Gallery3Isotope"),
  {
    ssr: false,
  }
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
