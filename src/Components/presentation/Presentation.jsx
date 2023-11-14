import React from "react";
import "./css/Presentation.css";
import Project from "./project/Project";
import Education from "./education/Education";
import SkillList from "./skilllist/SkillList";
import Footer from "./footer/Footer";
import Myself from "./myself/Myself";

export default function Presentation() {
  return (
    <>
      <Myself />
      <Project />
      <Education />
      <SkillList />
      <Footer />
    </>
  );
}
