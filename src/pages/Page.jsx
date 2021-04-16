import "./styles/page.css";
import gato from "../images/gato.jpg";

import Project from "../Components/Projects";

function page() {
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
                <li className="li1">JavaScript (ES6+)</li>
                <li className="li2">Node.js</li>
                <li className="li3">React</li>
                <li className="li4">Vue</li>
                <li className="li5">WordPress</li>
              </ul>
            </div>
          </div>
          <div className="container-img">
            <img className="imagen-about-us" src={gato} alt="" />
          </div>
        </div>
        <Project />
      </div>
    </>
  );
}

export default page;
