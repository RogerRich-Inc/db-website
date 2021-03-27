import "./App.css";
import gato from "./images/gato.jpg";

import Project from "./Components/Projects.js";

function App() {
  return (
    <>
      <div className="section-midle">
        <div className="container">
          <div className="container-text-about-us">
            <div className="container-title">
              <h1 className="title-number">01.</h1>
              <h1 className="title">About us</h1>
            </div>
            <div className="container-text">
              <p>
                Hello! My name is Brittany and I enjoy creating things that live
                on the internet. My interest in web development started back in
                2012 when I decided to try editing custom.
              </p>
              <p>
                Fast-forward to today, and I've had the privilege of working at
                an advertising agency, a start-up, a huge corporation, and a
                student-led design studio.
              </p>
              <p>
                Here are a few technologies I've been working with recently:
              </p>
              <ul>
                <li>JavaScript (ES6+)</li>
                <li>Node.js</li>
                <li>React</li>
                <li>Vue</li>
                <li>WordPress</li>
              </ul>
            </div>
          </div>
          <div className="container-img">
            <img className="imagen-about-us" src={gato} alt="" />
          </div>
        </div>
        <div className="container container-projects">
          <div className="container-title title-projects">
            <h1 className="title-number title-grande">02.</h1>
            <h1 className="title title-prueba">Some Thing We Have Built</h1>
          </div>
          {/* <div className="space"></div> */}
          <div className="container-description">
            <h3 className="secondary-title">Une Sélection de</h3>
            <h4 className="third-title">21 projets disséqués</h4>
            <p className="temporada">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, voluptate? Quos corporis rerum delectus atque alias
              similique saepe amet eos fugit. Lorem ipsum dolor size.
            </p>
          </div>
        </div>
        <Project />
      </div>
    </>
  );
}

export default App;
