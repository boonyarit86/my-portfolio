import React, { useState } from "react";

function Achievement() {
  const [achievements] = useState([
    { title: "Experience", icon: "briefcase", description: "0 Year" },
    { title: "Completed", icon: "checkmark-circle", description: "6 Projects" },
  ]);

  return (
    <div className="achievement u-mb-medium">
      {achievements.map((ach, index) => (
        <div className="achievement__box u-center-text" key={index}>
          <ion-icon class="achievement__icon" name={ach.icon}></ion-icon>
          <p className="achievement__title">{ach.title}</p>
          <p className="achievement__detail">{ach.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Achievement;
