import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./nav/Nav.js";
import About from "./about/About";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Awards from "./awards/Awards";
import Contact from "./contact/Contact";
import JokingApart from "./joking_apart/JokingApart";
import "./styles/app.css";
import Background from "./background/Background.js";
import PlayerStats from "./playerStats/PlayerStats.js";

const App = () => {
  return (
    <Router>
      <Nav />
      <Background />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/joking_apart" element={<JokingApart />} />
      </Routes>
      <PlayerStats />
    </Router>
  );
};

export default App;
