import * as React from "react";
import Layout from "../components/layout";

import Footer from "../components/Footer";
import Hero from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../components/InfoSection/Data";

import Projects from "../components/Project/Project";
import NavbarFinal from "../components/Navbar/NavbaOrSidebar";
import AboutUs from "../components/AboutUs/AboutUs";

const IndexPage = () => (
  <Layout>
    <NavbarFinal />
    <Hero />
    <AboutUs />
    <Projects />
    <InfoSection {...homeObjThree} />
    <Footer />
  </Layout>
);

export default IndexPage;
