// src/components/Hobbies.jsx
import React from "react";
import "./Hobbies.css";

function Hobbies() {
  const hobbies = [
    {
      name: "PC Gaming & Simulation",
      icon: "🕹️",
      description:
        "Exploring open-world, strategy, and simulation games. I often analyze game mechanics and share highlights through gameplay videos."
    },
    {
      name: "Frontend Coding",
      icon: "🧠",
      description:
        "Passionate about building beautiful, functional interfaces with React, exploring animations, and trying new CSS/UI frameworks."
    },
    {
      name: "Content Creation",
      icon: "🎥",
      description:
        "Creating short cinematic gaming edits and tutorials on YouTube. Skilled with tools like CapCut, YouCut, and Canva."
    },
    {
      name: "Cultural Storytelling",
      icon: "🏹",
      description:
        "Researching Indian and ancient mythologies to build digital stories like 'Maharana Legends' or 'Jalandhar Gatha'."
    },
    {
      name: "Music Remixing",
      icon: "🎧",
      description:
        "I remix traditional rhythms with modern beats. Inspired by lo-fi mixes of Indian classical, Norse chants, and epic themes."
    },
    {
      name: "Reading Mythology",
      icon: "📚",
      description:
        "I dive into mythological literature — from Greek epics to Norse sagas and Indian puranas, drawing inspiration for tech projects."
    },
    {
      name: "UI Design Exploration",
      icon: "🎨",
      description:
        "I love browsing design portfolios and Dribbble shots to study visual hierarchy, accessibility, and aesthetic balance."
    },
    {
      name: "Fitness & Meditation",
      icon: "🧘‍♂️",
      description:
        "Balancing mind and body through daily walks, tech detox routines, and focused breathing exercises."
    }
  ];

  return (
    <section className="hobbies-section">
      <h1 className="hobbies-title"> INNER SPARK </h1>
      <div className="hobbies-grid">
        {hobbies.map((hobby, index) => (
          <div className="hobby-box" key={index}>
            <div className="hobby-icon">{hobby.icon}</div>
            <h3>{hobby.name}</h3>
            <p>{hobby.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hobbies;
