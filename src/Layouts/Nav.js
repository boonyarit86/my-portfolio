import React, { useContext } from "react";
import { StateContext } from "../context/index";

function Nav() {
  const action = useContext(StateContext)

  const onClick = (e) => {
    const hamburgerEl = document.querySelector(".hamburger-box");
    const menuEl = document.querySelector(".section-menu");
    const menuListEl = document.querySelector(".menu");
    const bodyEl = document.querySelector("body");
    
    if (!action.isMenuOpened) {
      // false / 100
      menuEl.style.top = "0%";
      bodyEl.style.overflow = "hidden";
      hamburgerEl.classList.add("active");
      menuListEl.classList.add("menu-effect")
    } else {
      // true / 0
      menuEl.style.top = "100%";
      bodyEl.style.overflow = "auto";
      hamburgerEl.classList.remove("active");
      menuListEl.classList.remove("menu-effect");
    }

    action.onClickMenu();
  };

  return (
    <React.Fragment>
      <nav className="nav">
        <div className="nav__logo-box">
          <a href="#section-1"><img src="./images/logo-outline--black.svg" alt="logo" /></a>
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