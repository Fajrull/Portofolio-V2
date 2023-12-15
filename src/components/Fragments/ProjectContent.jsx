/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectContent = (props) => {
  const { content, height } = props;
  const navigate = useNavigate();

  const handleClickWeb = () => {
    navigate("/projects");
  };

  const handleClickApi = () => {
    navigate("/projects-api");
  };

  const handleClickDesign = () => {
    navigate("/projects-design");
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section className="project" id="project" style={{ height }}>
      <ScrollToTop smooth />
      <div className="project-title">
        <h1>🚀 Projects</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "60px",
          }}
        >
          <button className="btn-project" onClick={handleClickWeb}>
            Web
          </button>
          <button className="btn-project" onClick={handleClickApi}>
            Api
          </button>
          <button className="btn-project" onClick={handleClickDesign}>
            Design
          </button>
        </div>
      </div>
      <div>{content}</div>
    </section>
  );
};

export default ProjectContent;
