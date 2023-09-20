import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Alert } from '@mui/material';
import "./contact.css"


export default function Contact() {
  const form = useRef();

  const [emailSuccess, setEmailSuccess] = React.useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6s7kx55', 'template_xjwusdj', form.current, '1pEWiI1WMl5SvyBB4')
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        setEmailSuccess("success");
        e.target.reset()
      }, function(error) {
          console.log('FAILED...', error);
          setEmailSuccess("fail");
      });
  };

  const emailAlert = () => {
    if(emailSuccess === "success") {
      return <Alert
              severity="success"
              className="contact__alert"
              >
              Got it! I'll get back to you soon.
              </Alert>
    } else if (emailSuccess === "fail") {
      return <Alert
              severity="error"
              className="contact__alert"
              >
              Something went wrong - try refreshing.
              </Alert>
    } else {
      return null
    }
  }

  return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Get in Touch</h2>
        <span className="section__subtitle">Whether you're looking to build your new website or just want a chat, I'd be happy to hear from you.</span>

        <div className="contact__container container grid">
          <div className="contact__content">
            <h3 className="contact__title">Talk to me</h3>

            <div className="contact__info">
              <div className="contact__card">
                <i className="bx bx-mail-send contact__card-icon"></i>

                <h3 className="contact__card-title">Email</h3>
                <span className="contact__card-data">thalliday793@gmail.com</span>

                <a href="mailto:thalliday793@gmail.com" className="contact__button">
                  Write to me
                  <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                </a>
              </div>

              <div className="contact__card">
                <i className="bx bxl-whatsapp contact__card-icon"></i>

                <h3 className="contact__card-title">WhatsApp</h3>
                <span className="contact__card-data">+44 7549 589903</span>

                <a target="_blank" href="https://api.whatsapp.com/send?phone=447549589903&text=Hello! I saw your website and would like some more information." className="contact__button">
                  Message me
                  <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                </a>
              </div>

            </div>
          </div>

          <div className="contact__content">
            <div className="contact__title">Got a project in mind?</div>

            <form ref={form} onSubmit={sendEmail} className="contact__form">
              <div className="contact__form-div">
                <label className="contact__form-tag">Name</label>
                <input
                  type="text"
                  name="name"
                  className="contact__form-input"
                  placeholder="What's your name?"
                  required
                />
              </div>

              <div className="contact__form-div">
                <label className="contact__form-tag">Email</label>
                <input
                  type="email"
                  name="email"
                  className="contact__form-input"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div className="contact__form-div contact__form-area">
                <label className="contact__form-tag">Project Details</label>
                <textarea
                  name="project"
                  className="contact__form-input"
                  cols="30"
                  rows="10"
                  placeholder="Tell me about your project!"
                  required
                  />
              </div>

              {emailAlert()}

              { emailSuccess === "" &&
                <button className="button button--flex contact__button">
                  Send message
                  <i className="uil uil-message button__icon"></i>
                </button>
              }
            </form>
          </div>
        </div>
    </section>
  )
}
