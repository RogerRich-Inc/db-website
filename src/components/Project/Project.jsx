import React from "react";

//styles
import "../styles/Project.css";
//components
import Projects from "../JBComponents/Projects";
// import ProjectReverse from "../JBComponents/ProjectsReverse";
const Project = () => {
  return (
    <>
      <div id="proyectos" className="container ">
        <div className="work-title">
          <h1 className="h1-work">
            <span className="row">
              <span className="outline">
                work work work work work work work work work
              </span>
              <span className="outline reverse">
                work work work work work work work work work
              </span>
            </span>
          </h1>
        </div>
        <div className="container-projects">
          <p className="container-secondary-title-projects">
            <span className="">Algúnos de nuestros clientes</span>
          </p>
          <Projects />
        </div>
      </div>
    </>
  );
};

export default Project;
