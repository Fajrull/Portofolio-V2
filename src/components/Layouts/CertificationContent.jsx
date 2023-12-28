import { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
import AOS from "aos";
import "aos/dist/aos.css";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

const CertificationContent = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className="sertif" id="certifications">
      <ScrollToTop smooth />
      <div className="sertif-title">
        <h1>📜 Certifications</h1>
      </div>
      <div className="sertif-page">
        <div className="sertif-card" data-aos="fade-up">
          <img
            src="/assets/img/serti/peserta-terbaik.jpg"
            alt=""
            className="lazyload"
          />
          <div className="sertif-description">
            <h3>Best Participant</h3>
            <span>Skilvul</span>
            <p>
              Terpilih sebagai Peserta Terbaik dengan nilai tertinggi di
              bootcamp Skilvul
            </p>
          </div>
        </div>

        <div className="sertif-card" data-aos="fade-up">
          <img
            src="/assets/img/serti/grub-terbaik.jpg"
            alt=""
            className="lazyload"
          />
          <div className="sertif-description">
            <h3>Best Group in DemoDay</h3>
            <span>Skilvul</span>
            <p>
              Terpilih sebagai Project Terbaik dengan judul proyek "Usahaoptima"
              pada Program Bootcamp SKilvul
            </p>
          </div>
        </div>

        <div className="sertif-card" data-aos="fade-up">
          <img
            src="/assets/img/serti/best-capstone.jpg"
            alt=""
            className="lazyload"
          />
          <div className="sertif-description">
            <h3>Best Capstone Project</h3>
            <span>Dicoding</span>
            <p>
              Terpilih sebagai Capstone Project Terbaik dengan judul proyek
              "Growth Familie" pada Program SIB Dicoding X Kampus Merdeka
              Angkatan 3
            </p>
          </div>
        </div>

        <div className="sertif-card" data-aos="fade-up">
          <img
            src="/assets/img/serti/kelulusan.jpg"
            alt=""
            className="lazyload"
          />
          <div className="sertif-description">
            <h3>Sertifikat Kelulusan SIB Batch 3</h3>
            <span>Dicoding</span>
            <p>
              Telah berhasil menyelesaikan Pelatihan Front-End Web dan Back-End
              pada Program SIB Dicoding X Kampus Merdeka Angkatan 3
            </p>
          </div>
        </div>

        <div className="sertif-card" data-aos="fade-up">
          <img
            src="/assets/img/serti/dasar-js.jpg"
            alt=""
            className="lazyload"
          />
          <div className="sertif-description">
            <h3>Belajar Dasar Pemograman Javascript</h3>
            <span>Dicoding</span>
            <p>
              Telah berhasil lulus di ujian akhir dengan materi dasar
              JavaScript, dari fundamental, sintaks dan fitur ES6, hingga konsep
              automation test.Untuk pengembangan aplikasi web menggunakan
              Node.Js
            </p>
          </div>
        </div>

        <div className="sertif-card" data-aos="fade-up">
          <img
            src="/assets/img/serti/graduation-bootcamp.jpg"
            alt=""
            className="lazyload"
            style={{ height: "344px" }}
          />
          <div className="sertif-description">
            <h3>Certificate of completion</h3>
            <span>Skilvul</span>
            <p>
              Telah berhasil menyelesaikan bootcamp Fullstack developer di
              Skilvul
            </p>
          </div>
        </div>

        <div className="sertif-card" data-aos="fade-up">
          <img
            src="/assets/img/serti/fe-fundamental.jpg"
            alt=""
            className="lazyload"
          />
          <div className="sertif-description">
            <h3>Belajar Fundamental Front-End Web Developer</h3>
            <span>Dicoding</span>
            <p>
              Telah berhasil Membangun aplikasi web dengan JavaScript ES6, Web
              Component, Webpack sebagai module bundler, dan menampilkan data
              dari REST API.
            </p>
          </div>
        </div>

        <div className="sertif-card" data-aos="fade-up">
          <img
            src="/assets/img/serti/fe-expert.jpg"
            alt=""
            className="lazyload"
          />
          <div className="sertif-description">
            <h3>Menjadi Front-End Web Developer Expert</h3>
            <span>Dicoding</span>
            <p>
              Telah berhasil menyelesaikan Proyek akhir berupa web app katalog
              restoran dengan experience dan fungsionalitas yang baik ketika
              diakses pada perangkat mobile
            </p>
          </div>
        </div>

        <div className="sertif-card" data-aos="fade-up">
          <img
            src="/assets/img/serti/backend.jpg"
            alt=""
            className="lazyload"
          />
          <div className="sertif-description">
            <h3>Membuat Aplikasi Back-End Untuk Pemula</h3>
            <span>Dicoding</span>
            <p>
              Telah berhasil menyelesaikan Proyek akhir berupa praktik siswa
              berbentuk Bookshelf API berupa membuat Back-End dari aplikasi
              catatan yang memiliki fungsi Create, Read, Update, dan Delete.
            </p>
          </div>
        </div>

        <div className="sertif-card" data-aos="fade-up">
          <img
            src="/assets/img/serti/webdev-skilvul.jpg"
            alt=""
            className="lazyload"
          />
          <div className="sertif-description">
            <h3>Web Development Pemula</h3>
            <span>Skilvul</span>
            <p>
              Telah berhasil menyelesaikan kelas web development pemula, dengan
              membuat website menggunakan HTML, CSS, dan Javascript di Skilvul.
            </p>
          </div>
        </div>

        <div className="sertif-card" data-aos="fade-up">
          <img src="/assets/img/serti/react.jpg" alt="" className="lazyload" />
          <div className="sertif-description">
            <h3>Belajar Membuat Aplikasi Web dengan React</h3>
            <span>Dicoding</span>
            <p>
              Telah berhasil menyelesaikan Proyek akhir berupa Aplikasi catatan
              menggunakan React.
            </p>
          </div>
        </div>

        <div className="sertif-card" data-aos="fade-up">
          <img src="/assets/img/serti/ycab.jpg" alt="" className="lazyload" />
          <div className="sertif-description">
            <h3>Career Preparation</h3>
            <span>YCAB</span>
            <p>
              Telah berhasil menyelesaikan program persiapan karir selama satu
              bulan yang diselenggarakan oleh YCAB, di mana saya belajar tentang
              soft skill dan persiapan yang sangat berharga untuk memasuki dunia
              kerja.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationContent;
