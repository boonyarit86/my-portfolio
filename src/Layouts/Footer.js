import React from "react";
import { projects } from "../Api";

function Footer() {
  return (
    <section className="section-footer">
      <div className="footer__line" />
      <div className="footer__row">
        <div className="footer__contact">
          <h3 className="footer__heading">Contact information —</h3>
          <p className="footer__contact-text">
            Feel free to reach out to me any time. I prefer to talk over email.
          </p>
          <p className="footer__contact-email">
            E:{" "}
            <a
              className="footer__contact-email-text"
              href="mailto: boonyarit.rd@hotmaill.com"
            >
              boonyarit.rd@hotmail.com
            </a>
          </p>
          <p className="footer__contact-phone">
            P:{" "}
            <span className="footer__contact-phone-text">095 - 809 - 8135</span>
          </p>
        </div>
        <div className="footer__menu">
          <div className="footer__menu-box">
            <h3 className="footer__heading">Latest projects —</h3>
            <ul className="footer__menu-list">
              {projects.length !== 0 &&
                projects.map((project) => (
                  <li className="footer__menu-item">
                    <a className="footer__menu-link" href={project.url.base}>
                      {project.name}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
          <div className="footer__menu-box">
            <h3 className="footer__heading">Follow me on —</h3>
            <ul className="footer__menu-list">
              <li className="footer__menu-item">
                <a
                  className="footer__menu-link"
                  href="https://line.me/ti/p/nxQ62W7fBz"
                >
                  Line
                </a>
              </li>
              <li className="footer__menu-item">
                <a
                  className="footer__menu-link"
                  href="https://www.linkedin.com/in/boonyarit-ritdet-09197b220/"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <img
          className="footer__copyright-logo"
          src="./images/logo-outline--grey.svg"
          alt="logo-footer"
        />
        <div className="footer__copyright-detail">
          <p>© 2022 Boonyarit Ritdet.</p>
          <p>Made with in Bankok, Thailand.</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
