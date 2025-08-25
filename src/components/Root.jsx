import React from "react";
import Navbar from "./Navbar";
import HeroSection from "../Section/HeroSection";
import Service from "../Section/Service";
import Technologies from "../Section/Technologies";
import Projects from "../Section/Projects";
import Contact from "../Section/Contact";
import Footer from "./Footer";

const Root = () => {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <div id="hero"><HeroSection /></div>
      <div id="service"><Service /></div>
      <div id="tech"><Technologies /></div>
      <div id="project"><Projects /></div>
      <div id="contact"><Contact /></div>
      <Footer />
      
    </div>
  );
};

export default Root;
