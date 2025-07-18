// src/components/Timeline.jsx
import React from "react";
import "./Timeline.css";

function Timeline() {
  const journey = [
    {
      year: "2021",
      title: " Kickstarted My B.Tech in CSE",
      subtitle: "Quantum University",
      description:
        "Embarked on a 4-year journey to become a software engineer. Developed curiosity in AI, web development, and digital innovation."
    },
    {
      year: "2022",
      title: " Strengthened CS Foundations",
      subtitle: "Data Structures | OOP | DBMS | Networks",
      description:
        "Mastered problem-solving via DSA and OOP. Gained solid grasp of operating systems, database design, and networking concepts."
    },
    {
      year: "2023",
      title: " Full Stack Developer in the Making",
      subtitle: "React.js | Node.js | MongoDB | Git",
      description:
        "Built and deployed full-stack web applications. Worked with REST APIs, implemented CRUD operations, and responsive UIs."
    },
    {
      year: "2024",
      title: " Internship at FEB TECH",
      subtitle: "Full Stack Developer Intern",
      description:
        "Worked in a real-world team environment. Built production-ready apps, handled bug reports, integrated third-party APIs, and deployed via cloud."
    },
    {
      year: "2024",
      title: " Built Personal Project Suite",
      subtitle: "Crypto Tracker | Flyway Realms | Portfolio Website",
      description:
        "Designed and developed original tools and websites. Focused on mobile-first UX, real-time data flows, and clean code structures."
    },
    {
      year: "2025",
      title: " Upskilling with Advanced Tools",
      subtitle: "TypeScript | Next.js | CI/CD | Web Security",
      description:
        "Diving deep into scalable frontend systems, static site generation, secure APIs, and automation workflows using GitHub Actions."
    },
    {
      year: "2025",
      title: " Career Aspirations",
      subtitle: "Product-based Role or Techpreneur",
      description:
        "Striving for impactful innovation. Eager to contribute to a fast-paced product team or build a tech startup focused on AI and automation."
    }
  ];

  return (
    <section className="timeline-section">
      <h1 className="timeline-title"> TECH JOURNEY ROAD-MAP </h1>
      <div className="timeline-wrapper">
        {journey.map((event, index) => (
          <div className="timeline-row" key={index}>
            <div className="timeline-badge">
              <span>{event.year}</span>
            </div>
            <div className="timeline-content">
              <h2>{event.title}</h2>
              <h4>{event.subtitle}</h4>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Timeline;
