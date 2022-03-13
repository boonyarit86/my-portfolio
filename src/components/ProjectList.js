import React from "react";

function ProjectList() {
  return (
    <div className="project__flexbox">
      <div className="project">
        <img
          className="project__image"
          src="./images/project1.png"
          alt="project1"
        />
        <p className="project__year">2019 - 2022</p>
        <div className="project__status">
          <span className="project__status-text">NEW</span>
        </div>
        <p className="project__title">ETT-Stock</p>
        <div className="project__tools">
          <div className="project__tool u-center-text">
            <ion-icon class="project__tool-icon" name="logo-react"></ion-icon>
            <p className="project__tool-title">React</p>
          </div>
          <div className="project__tool u-center-text">
            <ion-icon class="project__tool-icon" name="logo-nodejs"></ion-icon>
            <p className="project__tool-title">Node JS</p>
          </div>
        </div>
        <p className="project__detail">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
          fugit.
        </p>
      </div>

      <div className="project">
        <img
          className="project__image"
          src="./images/project1.png"
          alt="project1"
        />
        <p className="project__year">2019 - 2022</p>
        <div className="project__status">
          <span className="project__status-text">NEW</span>
        </div>
        <p className="project__title">ETT-Stock</p>
        <div className="project__tools">
          <div className="project__tool u-center-text">
            <ion-icon class="project__tool-icon" name="logo-react"></ion-icon>
            <p className="project__tool-title">React</p>
          </div>
          <div className="project__tool u-center-text">
            <ion-icon class="project__tool-icon" name="logo-nodejs"></ion-icon>
            <p className="project__tool-title">Node JS</p>
          </div>
        </div>
        <p className="project__detail">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
          fugit.
        </p>
      </div>
    </div>
  );
}

export default ProjectList;
