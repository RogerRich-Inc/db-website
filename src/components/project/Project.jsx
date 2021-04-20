import React from "react";

//styles
import "../styles/Project.css";
//components
import Projects from "../JBComponents/Projects";
// import ProjectReverse from "../JBComponents/ProjectsReverse";
const Project = () => {
  return (
    <>
      <div className="container container-projects">
        <div className="work-title">
          <h1>
            <span className="row">
              <span className="outline">work work wor</span>
              <span className="outline reverse">work work wor</span>
            </span>
          </h1>
          <p className="container-secondary-title-projects">
            <span className="">featured projects</span>
          </p>
        </div>
        <Projects />
      </div>
    </>
  );
};

export default Project;
