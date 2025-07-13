// src/components/Projects.jsx
import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Flyway Realms",
      techStack: ["React.js", "CSS"],
      role: "Frontend Architect",
      year: "2024",
      highlights: [
        "Built a fantasy-themed travel booking SPA simulating inter-realm navigation.",
        "Architected reusable components and custom CSS styling for unique immersive UI.",
        "Focused on high performance, lazy loading routes, and responsive grid layouts."
      ]
    },
    {
      title: "Flight Booking UI",
      techStack: ["HTML", "CSS"],
      role: "UI Designer & Developer",
      year: "2023",
      highlights: [
        "Developed a modern flight booking interface with semantic HTML structure.",
        "Designed clean visual hierarchy prioritizing legibility, spacing, and responsiveness.",
        "Optimized layout for tablets and mobile using flex/grid mix with CSS media queries."
      ]
    },
    {
      title: "My Self (Portfolio Website)",
      techStack: ["React.js", "CSS", "React Router"],
      role: "Full Stack Developer",
      year: "2025",
      highlights: [
        "Developed a modular animated portfolio inspired by social media layouts.",
        "Integrated sections like About, Skills, Projects with smooth scroll and navigation.",
        "Emphasized recruiter-friendly UI with clean typography and performance optimizations."
      ]
    },
    {
      title: "Crypto Tracker AI",
      techStack: ["React.js", "Node.js", "MongoDB"],
      role: "Lead Developer",
      year: "2025",
      highlights: [
        "Built an AI-powered dashboard to track crypto-based income and cross-market trades.",
        "Used Node.js for secure backend API and MongoDB for wallet data tracking.",
        "UI designed for clarity, minimal latency, and clean wallet analysis."
      ]
    }
  ];

  return (
    <section className="projects-section">
      <div className="projects-header">
        <h1> SELECTED PROJECTS </h1>
        <p className="subtitle">
          Selected works that demonstrate my expertise in frontend architecture,
          user experience, and full stack development.
        </p>
      </div>

      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-header">
              <h2>{project.title}</h2>
              <div className="meta">
                <span className="badge">{project.year}</span>
                <span className="role">{project.role}</span>
              </div>
            </div>

            <div className="tech-tags">
              {project.techStack.map((tech, i) => (
                <span className="tag" key={i}>{tech}</span>
              ))}
            </div>

            <ul className="highlights">
              {project.highlights.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
