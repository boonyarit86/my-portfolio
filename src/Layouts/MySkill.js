import React from "react";
import SkillList from "../components/SkillList";

function MySkill() {
  return (
    <section className="section-skill">
      <section className="section-skill__shape">
        <div className="row">
          <h1 className="heading-primary u-center-text">My Skills</h1>
          <SkillList />
        </div>
      </section>
    </section>
  );
}

export default MySkill;
