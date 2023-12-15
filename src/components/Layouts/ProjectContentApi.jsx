const ProjectContentApi = () => {
  return (
    <>
      {" "}
      <div className="project-page">
        <div className="project-card" data-aos="fade-up">
          <img
            src="/assets/img/project/growth.png"
            alt="image"
            loading="lazy"
          />
          <div className="project-description">
            <h1>Growth Familie</h1>
            <p>
              Growth Familie merupakan aplikasi berbasis web yang mengusung tema
              Solusi Keluarga dan Parenting, project ini merupakan tugas
              Capstone atau tugas akhir dari kegiatan SIB Dicoding. Project ini
              dibangun dalam bentuk tim yang beranggotakan 4 orang dan saya
              sebagi tim Front-end. Web ini mendukung PWA dan menggunakan API
              mandiri untuk mengelola kontennya.
            </p>
          </div>
          <div className="project-icons">
            <img src="/assets/img/icon/html.png" alt="image" loading="lazy" />
            <img src="/assets/img/icon/css.png" alt="image" loading="lazy" />
            <img src="/assets/img/icon/js.png" alt="image" loading="lazy" />
            <img
              src="/assets/img/icon/bootstrap.png"
              alt="image"
              loading="lazy"
            />
            <img src="/assets/img/icon/node.png" alt="image" loading="lazy" />
            <img src="/assets/img/icon/mongo.png" alt="image" loading="lazy" />
          </div>
          <div className="project-btn">
            <a
              href="https://github.com/Growth-Familie/GrowthFamilie-final"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                Repository<i className="fa-brands fa-github"></i>
              </button>
            </a>
            <a
              href="https://growth-familie.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                Website
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectContentApi;
