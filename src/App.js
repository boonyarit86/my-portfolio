import React, { useEffect } from "react";
import "./App.css";
import "./sass/main.scss";
import Nav from "./Layouts/Nav";
import Header from "./Layouts/Header";
import Main from "./Layouts/Main";

function App() {
  useEffect(() => {
    const headerEl = document.querySelector(".header");
    const navEl = document.querySelector(".nav");
    
    const obs = new IntersectionObserver(
      function (entries) {
        const ent = entries[0];
        // console.log(ent);

        if (ent.isIntersecting === false) {
          console.log("Changed");
          navEl.style.backgroundColor = "rgba(255, 255, 255, 0.97)";
        }

        if (ent.isIntersecting === true) {
          console.log("normal");
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
  });

  return (
    <div className="app">
      <Nav />
      <Header />
      <Main />
    </div>
  );
}

export default App;
