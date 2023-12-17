import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

const ProjectContentDesign = () => {
  return (
    <>
      <div className="project-page">
        <div
          className="project-card"
          data-aos="fade-up"
          style={{ height: "450px" }}
        >
          <img
            src="/assets/img/project/usahaoptima.png"
            alt="image"
            loading="lazy"
          />
          <div className="project-description">
            <h1>Usahaoptima</h1>
            <p>Membuat Design Usahaoptima menggunakan Figma</p>
          </div>
          <div className="project-icons">
            <img
              src="/assets/img/icon/figma.png"
              alt="image"
              className="lazyload"
            />
          </div>
        </div>

        <div
          className="project-card"
          data-aos="fade-up"
          style={{ height: "450px" }}
        >
          <img
            src="/assets/img/project/growth.png"
            alt="image"
            loading="lazy"
          />
          <div className="project-description">
            <h1>Growth Familie</h1>
            <p>Membuat Design Growth Familie menggunakan Figma</p>
          </div>
          <div className="project-icons">
            <img
              src="/assets/img/icon/figma.png"
              alt="image"
              className="lazyload"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectContentDesign;
