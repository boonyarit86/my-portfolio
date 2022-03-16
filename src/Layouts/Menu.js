import React, { useContext } from "react";
import { StateContext } from "../context/index";

function Menu() {
  const action = useContext(StateContext);

  function onClick(e) {
    // Close menu
    const hamburgerEl = document.querySelector(".hamburger-box");
    const menuEl = document.querySelector(".section-menu");
    const bodyEl = document.querySelector("body");

    menuEl.style.top = "100%";
    bodyEl.style.overflow = "auto";
    hamburgerEl.classList.remove("active");

    action.onClickMenu();
  }

  return (
    <div className="section-menu">
      <div className="menu__logo-box">
        <img src="./images/logo-outline--grey.svg" alt="logo" />
        <span className="menu__author">Boonyarit Ritdet</span>
      </div>
      <div className="menu">
        <p className="menu-title">MENU</p>
        <ul className="menu-list">
          <li className="menu-item">
            <a className="menu-link" href="#section-1" onClick={onClick}>
              Home
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="#section-2" onClick={onClick}>
              About me
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="#section-3" onClick={onClick}>
              Skills
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="#section-4" onClick={onClick}>
              Projects
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="#section-5" onClick={onClick}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
