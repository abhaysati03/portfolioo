// src/components/Resume.jsx
import React from "react";
import "./Resume.css";

function Resume() {
  return (
    <div className="gow-resume">
      <header className="gow-header">
        <h1>ABHAY SATI</h1>
        <p>📞 +91-8006122006 | ✉️ abhaysati234@gmail.com</p>
        <a
          href="https://www.linkedin.com/in/abhay-sati-79506a35b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          🔗 linkedin.com/in/abhay-sati-79506a35b
        </a>
      </header>

      <section className="gow-section">
        <h2>⚔️ Education</h2>
        <div className="gow-block">
          <strong>B.Tech, Computer Science</strong> – Quantum University, India
          <span className="date"> Sep 2021 – Jul 2025 </span>
        </div>
        <div className="gow-block">
          <strong>Senior Secondary (12th)</strong> – ASASVM, India
          <span className="date"> Mar 2020 – Apr 2021 </span>
        </div>
      </section>

      <section className="gow-section">
        <h2>🔥 Profile Summary</h2>
        <p>
          Full Stack Developer passionate about crafting immersive, scalable web
          applications. Experienced with React.js, Node.js, MongoDB, and clean UI
          architecture. Thrives on building impactful digital experiences and
          solving real-world tech challenges.
        </p>
      </section>

      <section className="gow-section">
        <h2>🛠️ Technical Skills</h2>
        <div className="gow-technical">
        <ul>
          <li> Languages: HTML, CSS, JavaScript, Python, SQL </li>
          <li> Frameworks: React.js, Node.js </li>
          <li> Databases: MongoDB, MySQL </li>
          <li> Tools: Git, GitHub, Postman, VS Code </li>
          <li> Concepts: SPA Architecture, REST APIs, UI/UX Design </li>
        </ul>
        </div>
      </section>

      <section className="gow-section">
        <h2>🏹 Experience</h2>
        <div className="gow-block">
          <strong>Full Stack Developer Intern</strong><br />
          FEB TECH IT SOLUTION PVT. LTD., Roorkee<br />
          <span className="date-intern">Jun 2024 – Nov 2024</span>
          <ul>
            <li>Built full-stack apps with React, Node, MongoDB</li>
            <li>Optimized UI responsiveness</li>
            <li>Participated in deployment & production-level debugging</li>
          </ul>
        </div>
      </section>

      <section className="gow-section">
        <h2>🧩 Projects</h2>
        <div className="gow-block">
          <strong>Flyway Realms</strong> – React.js, CSS
          <ul>
            <li>Fantasy travel SPA with immersive UI</li>
            <li>Mobile-first architecture with CSS</li>
          </ul>
        </div>
        <div className="gow-block">
          <strong>Flight Booking UI</strong> – HTML, CSS
          <ul>
            <li>Modern static layout</li>
            <li>Responsive grid-based visual hierarchy</li>
          </ul>
        </div>
        <div className="gow-block">
          <strong>My Self (Portfolio)</strong> – React.js, CSS
          <ul>
            <li>Social-media inspired portfolio</li>
            <li>Highlighting full-stack projects</li>
          </ul>
        </div>
      </section>

      <section className="gow-section">
        <h2>🌍 Languages</h2>
        <div className="gow-lang">
        <ul>
          <li>English – Proficient</li>
          <li>Hindi – Native</li>
        </ul>
        </div>
      </section>
    </div>
  );
}

export default Resume;
