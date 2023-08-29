import React from "react";
import { image } from "../data/data"

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>My journey with Moringa Software Engineering has shaped my thinking to align with that of a developer.</p>
      <img src={image} alt="I made this"/>
    </div>
    );
}

export default About;
