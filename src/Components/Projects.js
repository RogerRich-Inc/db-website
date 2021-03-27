import React from "react";
import gato from "../images/gato.jpg";

import "./styles/projects.css";
function Projects() {
  return (
    <div className="container-things-we">
      <div className="container-img">
        <img className="imagen-about-us" src={gato} alt="" />
      </div>

      <div className="container-text">
        <div className="container-titlee">
          <p className="title-project">Featured Project</p>
          <h4 className="description-prajects">OctoProfile</h4>
        </div>

        <div className="container-text-projects">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            quisquam ab numquam tempora amet eaque. Unde expedita quos sint nisi
            laborum natus, odit at libero ut dolorem sequi id corporis.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
