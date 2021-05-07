import React from "react";

//styles
import "../styles/AboutUs.css";
//images
import aboutUs from "../../images/aboutus.jpg";
//icons
import { FaReact, FaHtml5, FaCss3 } from "react-icons/fa";
import { GrGatsbyjs } from "react-icons/gr";
import { SiJavascript, SiStylus } from "react-icons/si";

const AboutUs = () => {
  return (
    <>
      <div id="aboutus" className="container ">
        <div className="container-aboutus">
          <div className="container-img container-img-AU">
            <img
              className="img img-AU"
              src={aboutUs}
              alt="chica tocando pantalla invisible tecnológica"
            />
          </div>
          <div className="container-text container-text-AU ">
            <div className="container-titles">
              <span className="row">
                <span className="secondary-title">SOBRE NOSOTROS</span>
                <span className="principal-title">
                  Creamos tu pagina web profesional.
                </span>
              </span>
            </div>
            <div className="container-paragraph container-paragraph-us">
              <p className="paragraph-au">
                En distintos proyectos de páginas webs con Javascript, hasta
                llegar a páginas con tecnologías modernas, hemos adquirido
                conocimiento de todas las fases del mundo de las páginas web,
                incluyendo rendimiento, accesibilidad, prácticas recomendadas,
                posicionamiento en google y aplicaciones web progresivas.
              </p>
            </div>
            <ul className="skills-list">
              <li>
                <div className="icon-containers-us">
                  <SiJavascript className="icon-1" />
                </div>
                JavaScript (ES6+)
              </li>
              <li>
                <div className="icon-containers-us">
                  <FaReact className="icon-2" />
                </div>
                React
              </li>
              <li>
                <div className="icon-containers-us">
                  <GrGatsbyjs className="icon-3" />
                </div>
                gatsby
              </li>
              <li>
                <div className="icon-containers-us">
                  <FaHtml5 className="icon-4" />
                </div>
                HTML
              </li>
              <li>
                <div className="icon-containers-us">
                  <FaCss3 className="icon-5" />
                </div>
                Css
              </li>
              <li>
                <div className="icon-containers-us">
                  <SiStylus className="icon-6" />
                </div>{" "}
                Stylus
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
