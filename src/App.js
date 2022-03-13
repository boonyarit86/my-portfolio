import React, { useEffect } from "react";
import "./App.css";
import "./sass/main.scss";
import Nav from "./Layouts/Nav";
import Header from "./Layouts/Header";
import Main from "./Layouts/Main";

function App() {
  // useEffect(() => {
  //   const headerEl = document.querySelector(".header");
  //   const bgEffectEl = document.querySelector(".header__bg-effect");

  //   const obs = new IntersectionObserver(
  //     function (entries) {
  //       const ent = entries[0];
  //       // console.log(ent);

  //       if (ent.isIntersecting === false) {
  //         console.log("Changed");
  //         bgEffectEl.classList.add("bg-animation");
  //         bgEffectEl.style.backgroundColor = "#fff"
  //         // headerEl.style.backgroundColor = "#fff";
  //       }

  //       if (ent.isIntersecting === true) {
  //         console.log("normal");
  //       }
  //     },
  //     {
  //       // In the viewport
  //       root: null,
  //       threshold: 0,
  //       rootMargin: "-200px",
  //     }
  //   );
  //   obs.observe(headerEl);
  // });

  return (
    <div className="app">
      <Nav />
      <Header />
      <Main />
    </div>
  );
}

export default App;
