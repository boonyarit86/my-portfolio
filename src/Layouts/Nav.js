import React, { useState } from "react";

function Nav() {
  const [active, setActive] = useState(false);

  const onClick = (e) => {
    const hamburgerEl = document.querySelector(".hamburger-box");
    const menuEl = document.querySelector(".section-menu");
    const bodyEl = document.querySelector("body");
    
    if (!active) {
      // false / 100
      menuEl.style.top = "0%";
      bodyEl.style.overflow = "hidden";
      hamburgerEl.classList.add("active");
    } else {
      // true / 0
      menuEl.style.top = "100%";
      bodyEl.style.overflow = "auto";
      hamburgerEl.classList.remove("active");
    }

    setActive((prev) => !prev);
  };

  return (
    <React.Fragment>
      <nav className="nav">
        <div className="nav__logo-box">
          <img src="./images/logo-outline--black.svg" alt="logo" />
          <span className="nav__author">Boonyarit Ritdet</span>
        </div>
      </nav>
      <div className="hamburger-box" onClick={onClick}>
        <span className="hamburger-icon">&nbsp;</span>
      </div>
    </React.Fragment>
  );
}

export default Nav;
