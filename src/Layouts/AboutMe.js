import React from "react";
import Achievement from "../components/Achievement";

function AboutMe() {
  return (
    <section className="section-about">
      <div className="row">
        <h1 className="heading-primary u-center-text">About me</h1>
        <div className="detail-box">
          <div className="detail-profile">
            <img src="./images/profile.jpg" alt="My profile" />
          </div>
          <div className="detail-aboutme">
            <Achievement />
            <p className="detail-aboutme__text">
              I’m a front-end developer. I’m familar with using React framework,
              my websites are primarily hand-coded using HTML5, CSS3, SVG &
              Javascript. In addition, I’m able to connect my websites to
              database by way of using Node js, Express & MongoDB.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
