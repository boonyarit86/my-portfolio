import React from "react";

function Menu() {
  // useEffect(() => {
  //   const menu_listEl = document.querySelector(".menu-list");
  //   let menu_itemAll = document.querySelectorAll(".menu-item");

  //   menu_listEl.addEventListener('click', (e) => {
  //     menu_itemAll.forEach(item => {
  //       if(item.classList.contains("active")) {
  //         item.classList.remove("active");
  //       }
  //     })

  //     let menu_itemEl = e.target.closest(".menu-item");
  //     menu_itemEl.classList.add("active");
  //   })
  // }, [])

  function onClick(e) {
    // Close menu
    const hamburgerEl = document.querySelector(".hamburger-box");
    const menuEl = document.querySelector(".section-menu");
    const bodyEl = document.querySelector("body");

    // set Active class
    let menu_items = document.querySelectorAll(".menu-item");
    let menu_itemEl = e.target.closest(".menu-item");

    menu_items.forEach((el) => {
      if (el.classList.contains("active")) {
        el.classList.remove("active");
      }
    });

    menu_itemEl.classList.add("active");

    menuEl.style.top = "100%";
    bodyEl.style.overflow = "auto";
    hamburgerEl.classList.remove("active");
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
            <a className="menu-link" onClick={onClick}>
              Home
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="#" onClick={onClick}>
              About me
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="#" onClick={onClick}>
              Skills
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="#section-project" onClick={onClick}>
              Projects
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="#" onClick={onClick}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
