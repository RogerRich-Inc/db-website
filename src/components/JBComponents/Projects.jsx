import React, { useEffect } from 'react';

//styles
import "../styles/Projects.css";
//images
import principal_project from "../../images/project1.jpg";
//animations aos Library
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
   let AOS;
  useEffect(() => {
    /**
     * Server-side rendering does not provide the 'document' object
     * therefore this import is required either in useEffect or componentDidMount as they
     * are exclusively executed on a client
     */
    const AOS = require("aos");
    AOS.init({
      once: true,
    });
  }, []);

  useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  });
  return (
    <>
      <div className="container work" data-aos="fade-up">
        {/*CAMBIAR POR UN LINK DE REACT ROUTER */}
        <a href="#">
          <div className="container-img">
            <img
              className="img img-principal-project"
              src={principal_project}
              alt="project img"
            />
          </div>
        </a>
        <div className="container-paragraph">
          <h1 className="title-project">SPACE X </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
            exercitationem nobis veniam praesentium distinctio aliquam al
            reiciendis minima dolore! minima dolore!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Su
            accusantium a corrupti quaerat quia ipsum necessitatib iusto
            possimus quam! sto possimus quam!
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur uia ipsum necessitatib.</p>
        </div>
      </div>
      {/*Project2 reverse*/}
      <div data-aos="fade-down-right" className="container work work-reverse">
        {/*CAMBIAR POR UN LINK DE REACT ROUTER */}
        <div className="container-paragraph">
          <h1 className="title-project  title-project-reverse">
            MERCEDES BENZ
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
            exercitationem nobis veniam praesentium distinctio aliquam al
            reiciendis minima dolore! minima dolore!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Su
            accusantium a corrupti quaerat quia ipsum necessitatib iusto
            possimus quam! sto possimus quam!
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur uia ipsum necessitatib.</p>
        </div>
        <a href="#">
          <div className="container-img container-img-reverse ">
            <img
              className="img img-principal-project"
              src={principal_project}
              alt="project img"
            />
          </div>
        </a>
      </div>
      <div className="container work" data-aos="flip-left">
        {/*CAMBIAR POR UN LINK DE REACT ROUTER */}
        <a href="#">
          <div className="container-img">
            <img
              className="img img-principal-project"
              src={principal_project}
              alt="project img"
            />
          </div>
        </a>
        <div className="container-paragraph">
          <h1 className="title-project">LENOVO TOUCH MY PATH </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
            exercitationem nobis veniam praesentium distinctio aliquam al
            reiciendis minima dolore! minima dolore!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Su
            accusantium a corrupti quaerat quia ipsum necessitatib iusto
            possimus quam! sto possimus quam!
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur uia ipsum necessitatib.</p>
        </div>
      </div>
    </>
  );
};

export default Projects;
