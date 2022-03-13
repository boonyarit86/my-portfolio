import React from "react";

const data = [
  {
    title: "Front-end",
    skills: [
      { skill: "HTML", level: "Advanced" },
      { skill: "CSS", level: "Intermediate" },
      { skill: "SCSS", level: "Intermediate" },
      { skill: "Javascript", level: "Intermediate" },
      { skill: "React", level: "Intermediate" },
    ],
  },
  {
    title: "Back-end",
    skills: [
      { skill: "Node JS", level: "Advanced" },
      { skill: "Express", level: "Intermediate" },
      { skill: "MongoDB", level: "Intermediate" },
      { skill: "Cloudinary", level: "Basic" },
      { skill: "Firebase", level: "basic" },
      { skill: "Socket.io", level: "basic" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { skill: "Heroku", level: "Intermediate" },
      { skill: "Github", level: "Intermediate" },
      { skill: "Figma", level: "Intermediate" },
      { skill: "Bootstrap", level: "Basic" },
      { skill: "Material UI", level: "basic" },
      { skill: "Adobe XD", level: "basic" },
    ],
  },
];

function SkillList() {
  return (
    <div className="skill__flexbox">
      {data.map((item, index) => (
        <div className="skill" key={index}>
          <p className="skill__title u-mb-medium">
            {item.title}
          </p>
          <div className="skill__box">
            {item.skills.map((ski, index) => (
              <div className="skill__item u-mb-small" key={index}>
                <ion-icon
                  class="skill__icon"
                  name="checkmark-circle"
                ></ion-icon>
                <div className="skill__detail">
                  <p className="skill__title-skill">{ski.skill}</p>
                  <p className="skill__level">{ski.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillList;
