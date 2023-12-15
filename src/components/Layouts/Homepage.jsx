import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <section className="hero">
      <div className="hero-title">
        <img src="assets/img/profile.gif" loading="lazy" alt="profil" />
        <h1>Muhammad Fajrul Khaq</h1>
        <p>
          Hi everyone <span>👋🏼</span>, welcome to my portfolio website
        </p>
      </div>

      <div className="hero-btn">
        <Link to="/contact">
          <button>
            Contact Me
            <i className="fa-solid fa-arrow-down"></i>
          </button>
        </Link>
        <a href="assets/cv/cv.pdf" target="_blank" rel="noopener noreferrer">
          <button>
            Download CV
            <i className="fa-solid fa-download"></i>
          </button>
        </a>
      </div>

      <div className="hero-icons">
        <a
          href="https://www.instagram.com/muhammadfajrull_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a
          href="https://www.facebook.com/muhammad.fajrul.146/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/muhammad-fajrul-khaq-60795b221/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/Fajrull"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </section>
  );
};

export default Homepage;
