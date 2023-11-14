import React, { useState } from "react";
import Skill from "../../skill/Skill";

//logo
import angular from "../../../image/logo/angular-icon.svg";
import axios from "../../../image/logo/Axios.svg";
import bootstrap from "../../../image/logo/bootstrap-5-1.svg";
import express from "../../../image/logo/expressjs-ar21.svg";
import git from "../../../image/logo/git.svg";
import html from "../../../image/logo/html-1.svg";
import react from "../../../image/logo/react-2.svg";
import redux from "../../../image/logo/redux.svg";
import symfony from "../../../image/logo/symfony.svg";
import inext from "../../../image/logo/inext_logo_icon_170002.png";

export default function SkillList() {
  const [skills] = useState([
    {
      id: 1,
      tech: "Express",
      image: express,
    },
    {
      id: 1,
      tech: "React",
      image: react,
    },
    {
      id: 1,
      tech: "Angular",
      image: angular,
    },
    {
      id: 1,
      tech: "Html5/CSS3",
      image: html,
    },
    {
      id: 1,
      tech: "Redux",
      image: redux,
    },
    {
      id: 1,
      tech: "Symfony 5",
      image: symfony,
    },
    {
      id: 1,
      tech: "Bootstrap",
      image: bootstrap,
    },
    {
      id: 1,
      tech: "inext18",
      image: inext,
    },
    {
      id: 1,
      tech: "Axios",
      image: axios,
    },
    {
      id: 1,
      tech: "Git",
      image: git,
    },
  ]);
  return (
    <div className="skill">
      <div className="skill--list">
        <h1 className="skill--title">I USE THOSE THINGS !</h1>
        <div className="skill--description">
          Lorem ipsum dolor sit amet fugiat a beatae quidem ex. Officiis ad
          debitis temporibus blanditiis ex?
        </div>
      </div>
      <div className="skill--card--list">
        {skills.map((element, index) => (
          <Skill skill={element} key={index} />
        ))}
      </div>
    </div>
  );
}
