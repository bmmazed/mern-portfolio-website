import React from "react";
import About from "../components/About";
import Skills from "../components/Skills";
import Home from "../components/Home";
import Navigation from "../components/Navigation";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function HomeScreen() {
  return (
    <div>
      <Navigation />

      <section className="home" id="home">
        <Home></Home>
      </section>

      <section className="about" id="about">
        <About></About>
      </section>

      <section className="skills" id="skills">
        <Skills></Skills>
      </section>

      <section className="portfolio" id="portfolio">
        <Portfolio></Portfolio>
      </section>

      <section className="contact" id="contact">
        <Contact></Contact>
      </section>
      <Footer></Footer>
    </div>
  );
}
