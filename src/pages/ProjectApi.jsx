import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import ProjectContent from "../components/Fragments/ProjectContent";
import ProjectContentApi from "../components/Layouts/ProjectContentApi";

const ProjectApi = () => {
  return (
    <>
      <Navbar />
      <ProjectContent content={<ProjectContentApi />} height="200vh" />
      <Footer />
    </>
  );
};

export default ProjectApi;
