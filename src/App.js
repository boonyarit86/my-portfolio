import React, { useEffect } from "react";
import "./App.css";
import "./sass/main.scss";
import Nav from "./Layouts/Nav";
import Header from "./Layouts/Header";
import Main from "./Layouts/Main";
import Menu from "./Layouts/Menu";
import { StateContext, useStateContext } from "./context/index";
import LoadingSpinner from "./components/LoadingSpinner";
import Popup from "./components/Popup";

function App() {
  const { isMenuOpened, onClickMenu, isLoading, handleLoading, openPopup, closePopup, popup } =
    useStateContext();

  useEffect(() => {
    const headerEl = document.querySelector(".header");
    const navEl = document.querySelector(".nav");
    let menu_items = document.querySelectorAll(".menu-item");

    // set Nav Background
    const obs = new IntersectionObserver(
      function (entries) {
        const ent = entries[0];

        if (ent.isIntersecting === false) {
          navEl.style.backgroundColor = "rgba(255, 255, 255, 0.97)";
        }

        if (ent.isIntersecting === true) {
          navEl.style.backgroundColor = null;
        }
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "-200px",
      }
    );
    obs.observe(headerEl);

    // Reveal sections
    const allSections = document.querySelectorAll(".section");

    const revealSection = function (entries, observer) {
      const [entry] = entries;

      if (!entry.isIntersecting) return;

      entry.target.classList.remove("section--hidden");
      observer.unobserve(entry.target);
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
      root: null,
      threshold: 0.15,
    });

    allSections.forEach(function (section) {
      sectionObserver.observe(section);
      section.classList.add("section--hidden");
    });

    /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
    function scrollActive() {
      const scrollY = window.pageYOffset;

      allSections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 80,
          sectionId = Number(current.getAttribute("id").split("-")[1]) - 1;

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          menu_items[sectionId].classList.add("active");
        } else {
          menu_items[sectionId].classList.remove("active");
        }
      });
    }
    window.addEventListener("scroll", scrollActive);
  }, []);

  return (
    <div className="app">
      <StateContext.Provider
        value={{
          isMenuOpened: isMenuOpened,
          onClickMenu: onClickMenu,
          handleLoading: handleLoading,
          isLoading: isLoading,
          openPopup: openPopup,
          closePopup: closePopup,
          openPopup: openPopup,
          popup: popup
        }}
      >
        {isLoading && <LoadingSpinner />}
        <Popup />
        <Menu />
        <Nav />
        <Header />
        <Main />
      </StateContext.Provider>
    </div>
  );
}

export default App;
