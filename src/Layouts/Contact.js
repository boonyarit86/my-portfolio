import React from "react";

function Contact() {
  return (
    <div className="section section-contact" id="section-5">
      <div className="row">
        <div className="contact">
          <div className="contact__intro">
            <p className="contact__title">contact</p>
            <h1 className="heading-secondary">
              Get in touch — let's work together.
            </h1>
            <p className="contact__title">ADDRESS</p>
            <p className="contact__address">
              93 Sukumvit Soi, Sukumvit Rd. Bang Jak, Phra Khanong Bangkok 10260
            </p>
          </div>
          <form className="contact__form">
              <div className="contact__form-group">
                  <label className="contact__label" >Your Name</label>
                  <input className="contact__input" type="text" name="name" placeholder="What's your name?" required />
                  <span className="input-bottom-line"></span>
              </div>
              <div className="contact__form-group">
                  <label className="contact__label" >Your Email</label>
                  <input className="contact__input" type="email" name="email" placeholder="What's your email address?" required />
                  <span className="input-bottom-line"></span>
              </div>
              <div className="contact__form-group">
                  <label className="contact__label u-mb-small">Your Message</label>
                  <textarea className="contact__textarea" name="message" placeholder="What's your message?" rows="1" required />
              </div>
              <button type="submit" className="contact__btn">Send message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
