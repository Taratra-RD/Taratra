import React from "react";
import "./css/Skill.css";

export default function Skill({ skill }) {
  return (
    <div
      className="skill--card"
      style={{
        backgroundImage: `url(${skill.image})`,
        backgroundSize: "50% 60%",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="skill--image">
        {/* <h4 className="skill--description">{skill.tech}</h4> */}
      </div>
    </div>
  );
}
