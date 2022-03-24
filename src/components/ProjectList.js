import React, { useEffect } from "react";
import { projects } from "../Api";

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
        project_id = Number(projectEl.getAttribute("id"));
        project_item[project_id].classList.add("project-effect");
        project_link[project_id].style.opacity = 1;
        project_link[project_id].classList.add("project-effect-links");
        // console.log(projectEl)
      } else return;
    });

    projects.addEventListener("mouseout", (e) => {
      let projectEl = e.target.closest(".project");
      let project_id;

      if (projectEl) {
        project_id = Number(projectEl.getAttribute("id"));
        project_item[project_id].classList.remove("project-effect");
        project_link[project_id].style.opacity = 0;
        project_link[project_id].classList.remove("project-effect-links");
      } else return;
    });
  }, []);

  return (
    <div className="project__flexbox">
      {projects.length !== 0 &&
        projects.map((project, index) => (
          <div className="project" id={index} key={index}>
            <img
              className="project__image"
              src={project.avatar}
              alt={project.name}
            />
            {project.isNew && (
              <div className="project__status">
                <span className="project__status-text">NEW</span>
              </div>
            )}
            <div className="project__content">
              <p className="project__year" style={{color: project.theme}}>
                {project.startDate} - {project.endDate}
              </p>
              {/* <p className="project__title"> */}
                <a className="project__title" href="https://ett-test.herokuapp.com" style={{color: project.theme}}>{project.name}</a>
              {/* </p> */}
              <div className="project__tools">
                {project.tools.map((tool, index) => (
                  <div className="project__tool u-center-text" key={index} style={{color: project.theme}}>
                    <ion-icon
                      class="project__tool-icon"
                      name={tool.iconName}
                    ></ion-icon>
                    <p className="project__tool-title">{tool.toolName}</p>
                  </div>
                ))}
                {/* <div className="project__tool u-center-text">
                  <ion-icon
                    class="project__tool-icon"
                    name="logo-nodejs"
                  ></ion-icon>
                  <p className="project__tool-title">Node JS</p>
                </div> */}
              </div>
              <p className="project__detail" style={{color: project.theme}}>{project.description}</p>
              <div className="project__links">
                <div className="project__link u-center-text">
                  <a href={project.url.base}>
                    <ion-icon
                      class="project__link-icon"
                      name="logo-chrome"
                    ></ion-icon>
                    <p className="project__link-title">View Project</p>
                  </a>
                </div>
                <div className="project__link u-center-text">
                  <a href={project.url.github}>
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
        ))}
    </div>
  );
}

export default ProjectList;
