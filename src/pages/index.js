import React, { useState } from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../components/InfoSection/Data";
import Navbar from "../components/Navbar";

// import Proyects from "../components/Proyectos";
import Sidebar from "../components/Sidebar";
//jb components
import Projects from "../components/Project/Project";
import AboutUs from "../components/AboutUs/AboutUs";

const Inicio = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <AboutUs />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Projects />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Inicio;
