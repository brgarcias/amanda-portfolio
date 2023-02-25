import dynamic from "next/dynamic";
import Footer from "../src/layout/Footer";
import Layout from "../src/layout/Layout";
import PageTitle from "../src/layout/PageTitle";
const Work3Isotope = dynamic(() => import("../src/components/Work3Isotope"), {
  ssr: false,
});
const Works2Column = () => {
  return (
    <Layout>
      <div className="wrapper">
        {/* Section Started Heading */}
        <PageTitle title="Projects" />
        {/* Section Works */}
        <Work3Isotope />
      </div>
      <Footer />
    </Layout>
  );
};
export default Works2Column;
