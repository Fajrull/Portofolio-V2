import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import ProjectContent from "../components/Fragments/ProjectContent";
import ProjectContentDesign from "../components/Layouts/ProjectContentDesign";

const ProjectDesign = () => {
  return (
    <>
      <Navbar />
      <ProjectContent content={<ProjectContentDesign />} />
      <Footer />
    </>
  );
};

export default ProjectDesign;
