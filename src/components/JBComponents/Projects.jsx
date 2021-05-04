import React, { useEffect } from 'react';

//styles
import "../styles/Projects.css";
//images
import principal_project from "../../images/danisando.jpg";
import secondary_project from "../../images/montacargas.jpg";
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
          <h1 className="title-project">JUAN BU website</h1>
          <p>
Maneja distintas tecnologías Javascript, React JS, Gatsby JS, webpack, HTML y CSS.
Llega a puestos en rendimiento de 100/100 en google lighthouse, incluye optimización de imágenes con Gatsby, optimización de posicionamiento en google, accesibilidad; entre otras.

          </p>
          <p>
Fue desarrollada el 1 de mayo del 2021.
Si el diseño o los lenguajes te interesan:

          </p>
          <p>Contáctanos para mostarte cómo podemos ayudarte a alcanzar tus objetivos.</p>
        </div>
      </div>
      {/*Project2 reverse*/}
      <div data-aos="fade-down-right" className="container work work-reverse">
        {/*CAMBIAR POR UN LINK DE REACT ROUTER */}
        <div className="container-paragraph">
          <h1 className="title-project  title-project-reverse">
            Montacargas Valladolid
          </h1>
          <p>
Maneja distintas tecnologías Javascript, React JS, HTML y CSS.
Llega a puestos en rendimiento de 87/100 en google lighthouse, incluye optimización de imágenes con Gatsby, 
optimización de posicionamiento en google, accesibilidad; entre otras.

          </p>
          <p>
Fue desarrollada el 14 de mayo del 2020.
Si el diseño o los lenguajes te interesan:

          </p>
          <p>Contáctanos para mostarte cómo podemos ayudarte a alcanzar tus objetivos.</p>
        </div>
        <a href="#">
          <div className="container-img container-img-reverse ">
            <img
              className="img img-principal-project"
              src={secondary_project}
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
          <h1 className="title-project">danisando website</h1>
          <p>
Maneja distintas tecnologías Javascript, React JS, HTML y CSS.
Llega a puestos en rendimiento de 100/100 en google lighthouse, incluye optimización de imágenes con Gatsby, optimización de posicionamiento en google, accesibilidad; entre otras.
          </p>
          <p>
Fue desarrollada el 1 de mayo del 2021.
Si el diseño o los lenguajes te interesan:

          </p>
          <p>Contáctanos para mostarte cómo podemos ayudarte a alcanzar tus objetivos.</p>
        </div>
      </div>
    </>
  );
};

export default Projects;
