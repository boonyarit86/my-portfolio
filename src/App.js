import React, { useEffect } from "react";
import "./App.css";
import "./sass/main.scss";
import Nav from "./Layouts/Nav";
import Header from "./Layouts/Header";
import Main from "./Layouts/Main";
import Menu from "./Layouts/Menu";

function App() {

  useEffect(() => {
    const headerEl = document.querySelector(".header");
    const navEl = document.querySelector(".nav");

    const obs = new IntersectionObserver(
      function (entries) {
        const ent = entries[0];
        // console.log(ent);

        if (ent.isIntersecting === false) {
          navEl.style.backgroundColor = "rgba(255, 255, 255, 0.97)";
        }

        if (ent.isIntersecting === true) {
          navEl.style.backgroundColor = null;
        }
      },
      {
        // In the viewport
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
  });

  return (
    <div className="app">
      <Menu />
      <Nav />
      <Header />
      <Main />
    </div>
  );
}

export default App;
