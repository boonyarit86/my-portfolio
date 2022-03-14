import React from "react";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Footer from "./Footer";
import MySkill from "./MySkill";
import Project from "./Project";

function Main() {
  return (
    <main>
        <AboutMe />
        <MySkill />
        <Project />
        <Contact />
        <Footer />
    </main>
  );
}

export default Main;