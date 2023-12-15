const ContactContent = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-page">
        <h1>📱 Get In Touch</h1>
        <div className="contact-description">
          <p>
            Feel free to get in touch with me whenever you need assistance or
            want to discuss anything. I'm here to help you with pleasure! 🚀
          </p>
        </div>

        <form name="portofolio-contact-form">
          <div className="form-top">
            <div className="form-title">
              <label htmlFor="name">Nama :</label>
              <input
                type="text"
                id="name"
                name="nama"
                placeholder="Your name..."
              />
            </div>
            <div className="form-title">
              <label htmlFor="email">Email :</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email..."
              />
            </div>
          </div>
          <div className="form-bottom">
            <label htmlFor="subject">Message :</label>
            <textarea
              id="subject"
              name="pesan"
              cols="30"
              rows="10"
              placeholder="Write something ..."
            ></textarea>
          </div>
          <div className="contact-btn">
            <button id="submit-form" type="submit">
              Submit<i className="fa-regular fa-paper-plane"></i>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactContent;
