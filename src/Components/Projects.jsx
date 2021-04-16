import React from "react";
import gato from "../images/gato.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import "./styles/projects.css";
function Projects() {
  AOS.init();
  return (
    <>
      <div className="container container-projec">
        <div className="container-title">
          <h1 className="title-number">02.</h1>
          <h1 className="title">Some Thing We Have Built</h1>
        </div>
        <div className="container-description">
          <h3 className="secondary-title">Une Sélection de</h3>
          <h4 className="third-title">21 projets disséqués</h4>
          <p className="text-projects">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            voluptate? Quos corporis rerum delectus atque alias similique saepe
            amet eos fugit. Lorem ipsum dolor size.
          </p>
        </div>
        <div className="container-projecs">
          <div data-aos="fade-up"  data-aos-duration="2000" className="container-things-we">
            <div className="container-img">
              <img className="imagen-about-us" src={gato} alt="" />
            </div>

            <div className="container-text">
              <div className="container-titlee">
                <p className="title-project">Featured Project</p>
                <h4 className="description-projects">OctoProfile</h4>
              </div>

              <div className="container-text-projects">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  quisquam ab numquam tempora amet eaque. Unde expedita quos
                  sint nisi laborum natus, odit at libero ut dolorem sequi id
                  corporis.
                </p>
              </div>
            </div>
          </div>

          <div data-aos="fade-up"
     data-aos-duration="3000" className="container-things-we">
            <div className="container-img container-img-hide">
              <img className="imagen-about-us" src={gato} alt="" />
            </div>

            <div className="container-text">
              <div className="container-titlee container-titlee-reverse">
                <p className="title-project">Featured Project</p>
                <h4 className="description-projects">OctoProfile</h4>
              </div>
              <div className="container-text-projects container-text-projects-reverse">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  quisquam ab numquam tempora amet eaque. Unde expedita quos
                  sint nisi laborum natus, odit at libero ut dolorem sequi id
                  corporis.
                </p>
              </div>
            </div>

            <div className="container-img container-img-reverse">
              <img className="imagen-about-us" src={gato} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
