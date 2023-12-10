import Layouts from '@layouts/Layouts';
import PageBanner from '@components/PageBanner';
import ProjectsMasonry from '@components/ProjectsMasonry';
import CallToActionSection from '@components/sections/CallToAction';
import { getSortedProjectsData } from '@library/projects';

const Projects3 = (props) => {
  return (
    <Layouts fullWidth rightPanelBackground={''} rightPanelImg={''}>
      <PageBanner
        pageTitle={'Designing a <br>Better World Today'}
        breadTitle={'Portfolio'}
        align={'center'}
      />

      <ProjectsMasonry projects={props.projects} />

      <CallToActionSection />
    </Layouts>
  );
};
export default Projects3;

export async function getStaticProps() {
  const allProjects = getSortedProjectsData();

  return {
    props: {
      projects: allProjects,
    },
  };
}
