import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactContent = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xm7pnso",
        "template_q53ui8l",
        form.current,
        "bj9C8D1hJs4yoPXE_"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");

          // Display SweetAlert2 success message
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Your message has been sent successfully.",
          });

          // Reset form fields
          form.current.reset();
        },

        (error) => {
          console.log(error.text);
        }
      );
  };

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

        <form ref={form} onSubmit={sendEmail}>
          <div className="form-top">
            <div className="form-title">
              <label htmlFor="name">Nama :</label>
              <input
                type="text"
                id="name"
                name="user_name"
                placeholder="Your name..."
              />
            </div>
            <div className="form-title">
              <label htmlFor="email">Email :</label>
              <input
                type="email"
                id="email"
                name="user_email"
                placeholder="Your email..."
              />
            </div>
          </div>
          <div className="form-bottom">
            <label htmlFor="subject">Message :</label>
            <textarea
              id="subject"
              name="message"
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
