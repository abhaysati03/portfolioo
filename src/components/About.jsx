// src/components/About.jsx
import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1> ABOUT ME </h1>

        <div className="about-step">
          <p>
            Hello! I’m <strong>Abhay Sati</strong>, a passionate B.Tech student specializing in Computer Science. I’m driven by how digital tools transform our world — and how I can be part of that change.
          </p>
        </div>

        <div className="about-step">
          <p>
            From frontend finesse to backend logic, I’ve honed my skills in full-stack development — crafting intuitive interfaces and scalable systems.
          </p>
        </div>

        <div className="about-step">
          <p>
            During my internship at <strong>Feb Tech</strong>, I collaborated with talented teams to build real-world applications. It was a deep dive into agile teamwork and practical software development.
          </p>
        </div>

        <div className="about-step">
          <p>
            I love challenges. Whether it’s solving bugs or learning a new framework, I treat every problem as an opportunity to grow.
          </p>
        </div>

        <div className="about-step">
          <p>
            My mission? To become a software engineer who doesn’t just code, but crafts purposeful experiences that make life easier, faster, and smarter.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
