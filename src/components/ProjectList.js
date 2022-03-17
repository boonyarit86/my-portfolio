import React, { useEffect } from "react";

function ProjectList() {
  // Add animation by hovering
  useEffect(() => {
    let projects = document.querySelector(".project__flexbox");
    let project_item = document.querySelectorAll(".project__content");
    let project_link = document.querySelectorAll(".project__links");

    projects.addEventListener("mouseover", (e) => {
      let projectEl = e.target.closest(".project");
      let project_id;
      if (projectEl) {
        project_id = Number(projectEl.getAttribute("id")) - 1;
        project_item[project_id].classList.add("project-effect");
        project_link[project_id].style.opacity = 1;
        project_link[project_id].classList.add("project-effect-links");
      } else return;
    });

    projects.addEventListener("mouseout", (e) => {
      let projectEl = e.target.closest(".project");
      let project_id;

      if (projectEl) {
        project_id = Number(projectEl.getAttribute("id")) - 1;
        project_item[project_id].classList.remove("project-effect");
        project_link[project_id].style.opacity = 0;
        project_link[project_id].classList.remove("project-effect-links");
      } else return;
    });
  }, []);

  return (
    <div className="project__flexbox">
      <div className="project" id="1">
        <img
          className="project__image"
          src="./images/project1.png"
          alt="project1"
        />
        <div className="project__status">
          <span className="project__status-text">NEW</span>
        </div>
        <div className="project__content">
          <p className="project__year">2019 - 2022</p>
          <p className="project__title">
            <a href="https://ett-test.herokuapp.com">ETT-Stock</a>
          </p>
          <div className="project__tools">
            <div className="project__tool u-center-text">
              <ion-icon class="project__tool-icon" name="logo-react"></ion-icon>
              <p className="project__tool-title">React</p>
            </div>
            <div className="project__tool u-center-text">
              <ion-icon
                class="project__tool-icon"
                name="logo-nodejs"
              ></ion-icon>
              <p className="project__tool-title">Node JS</p>
            </div>
          </div>
          <p className="project__detail">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            fugit.
          </p>
          <div className="project__links">
            <div className="project__link u-center-text">
              <a href="https://ett-test.herokuapp.com">
                <ion-icon
                  class="project__link-icon"
                  name="logo-chrome"
                ></ion-icon>
                <p className="project__link-title">View Project</p>
              </a>
            </div>
            <div className="project__link u-center-text">
              <a href="https://github.com/boonyarit86/ETT-Electronic-Stock">
                <ion-icon
                  class="project__link-icon"
                  name="logo-github"
                ></ion-icon>
                <p className="project__link-title">Source Code</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="project" id="2">
        <img
          className="project__image"
          src="./images/project1.png"
          alt="project1"
        />
        <div className="project__status">
          <span className="project__status-text">NEW</span>
        </div>
        <div className="project__content">
          <p className="project__year">2019 - 2022</p>
          <p className="project__title">
            <a href="https://ett-test.herokuapp.com">ETT-Stock</a>
          </p>
          <div className="project__tools">
            <div className="project__tool u-center-text">
              <ion-icon class="project__tool-icon" name="logo-react"></ion-icon>
              <p className="project__tool-title">React</p>
            </div>
            <div className="project__tool u-center-text">
              <ion-icon
                class="project__tool-icon"
                name="logo-nodejs"
              ></ion-icon>
              <p className="project__tool-title">Node JS</p>
            </div>
          </div>
          <p className="project__detail">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            fugit.
          </p>
          <div className="project__links">
            <div className="project__link u-center-text">
              <a href="https://ett-test.herokuapp.com">
                <ion-icon
                  class="project__link-icon"
                  name="logo-chrome"
                ></ion-icon>
                <p className="project__link-title">View Project</p>
              </a>
            </div>
            <div className="project__link u-center-text">
              <a href="https://github.com/boonyarit86/ETT-Electronic-Stock">
                <ion-icon
                  class="project__link-icon"
                  name="logo-github"
                ></ion-icon>
                <p className="project__link-title">Source Code</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectList;
