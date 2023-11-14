import React, { useState } from "react";
import Card from "../../card/Card";

//background
import image1 from "../../../image/project/crm/login.png";
import image2 from "../../../image/project/crm/demande.png";
import image3 from "../../../image/project/crm/home.png";
import image4 from "../../../image/project/crm/detail.png";
import image5 from "../../../image/project/crm/stat.png";

import image11 from "../../../image/project/madepices/home1.png";
import image12 from "../../../image/project/madepices/call.png";
import image13 from "../../../image/project/madepices/slide.png";
import image14 from "../../../image/project/madepices/products.png";
import image15 from "../../../image/project/madepices/product.png";

export default function Project() {
  const [project] = useState([
    {
      id: 1,
      projet: "CRM",
      domaine: "",
      description: "",
      image1: image1,
      image2: image2,
      image3: image3,
      image4: image4,
      image5: image5,
      style: {
        backgroundImage: `url(${image1})`,
        backgroundSize: "210% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      },
    },
    {
      id: 1,
      projet: "Madepices.mg",
      domaine: "",
      description: "",
      image1: image11,
      image2: image12,
      image3: image13,
      image4: image14,
      image5: image15,
      style: {
        backgroundImage: `url(${image11})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      },
    },
  ]);
  return (
    <div className="project">
      <div className="project--list">
        <h1 className="project--title">WHAT DID I EVER DONE ?</h1>
        <div className="project--description">
          Lorem ipsum dolor sit amet fugiat a beatae quidem ex. Officiis ad
          debitis temporibus blanditiis ex?
        </div>
      </div>
      <div className="project--card--list">
        {project.map((element, index) => (
          <Card projet={element} key={index} />
        ))}
        <div
          className="card card--over"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundPosition: "center",
            boxShadow: "30rem 30rem inset rgba(0,0,0,0.55)",
          }}
        >
          <span
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              color: "white",
              textAlign: "center",
            }}
          >
            Mes autres projets +
          </span>
        </div>
      </div>
    </div>
  );
}
