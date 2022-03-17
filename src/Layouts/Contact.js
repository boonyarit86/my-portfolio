import React, { useState } from "react";
import Axios from "axios";
import Popup from "../components/Popup";

function Contact() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  async function onSubmit(e) {
    e.preventDefault();

    let data = { name, email, message };
    try {
      await Axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/send_email`,
        data
      ).then((res) => console.log(res.data));
    } catch (error) {
      console.error(error);
    }
    // console.log(data);
  }

  return (
    <React.Fragment>
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
                93 Sukumvit Soi, Sukumvit Rd. Bang Jak, Phra Khanong Bangkok
                10260
              </p>
            </div>
            <form className="contact__form" onSubmit={onSubmit}>
              <div className="contact__form-group">
                <label className="contact__label">Your Name</label>
                <input
                  className="contact__input"
                  type="text"
                  name="name"
                  placeholder="What's your name?"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
                <span className="input-bottom-line"></span>
              </div>
              <div className="contact__form-group">
                <label className="contact__label">Your Email</label>
                <input
                  className="contact__input"
                  type="email"
                  name="email"
                  placeholder="What's your email address?"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="input-bottom-line"></span>
              </div>
              <div className="contact__form-group">
                <label className="contact__label u-mb-small">
                  Your Message
                </label>
                <textarea
                  className="contact__textarea"
                  name="message"
                  placeholder="What's your message?"
                  rows="1"
                  required
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button type="submit" className="contact__btn">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <Popup 
      message={"Your message has been sent successfully"} /> */}
    </React.Fragment>
  );
}

export default Contact;
