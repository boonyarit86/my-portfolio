import React, { useEffect } from "react";
import Achievement from "../components/Achievement";

function AboutMe() {
  useEffect(() => {
    // Lazy loading images
    const profileImgEl = document.querySelector(".detail-profile__img[data-src]");
    console.log(profileImgEl);
    const loadImg = function (entries, observer) {
      const [entry] = entries;

      if (!entry.isIntersecting) return;

      // Replace src with data-src
      entry.target.src = entry.target.dataset.src;

      entry.target.addEventListener("load", function () {
        entry.target.classList.remove("lazy-img");
      });

      observer.unobserve(entry.target);
    };

    const imgObserver = new IntersectionObserver(loadImg, {
      root: null,
      threshold: 0,
      rootMargin: "100px",
    });

    imgObserver.observe(profileImgEl)
  }, []);

  return (
    <section className="section section-about" id="section-2">
      <div className="row">
        <h1 className="heading-primary u-center-text">About me</h1>
        <div className="detail-box">
          <div className="detail-profile">
            <img
              className="detail-profile__img lazy-img"
              src="./images/profile-lazy--1.jpg"
              data-src="./images/profile--1.jpg"
              alt="My profile"
            />
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
