// src/components/Home.jsx
import React from "react";
import "./Home.css";

function Home() {
  const highlights = [
    { title: "About", description: "My background, interests, and goals." },
    { title: "Resume", description: "Education, technical skills, and experience." },
    { title: "Projects", description: "Real-world applications I’ve built." },
    { title: "Timeline", description: "Key milestones in my growth and learning." },
    { title: "Hobbies", description: "What keeps me creative beyond the code." },
    { title: "Contact", description: "Let’s connect and collaborate." },
  ];

  return (
    <div className="home-container">
      <section className="welcome-section">
        <h1>Welcome to Abhay Sati's Digital Life Journal</h1>
        <p>
          This isn’t just a portfolio — it’s a mirror of my journey as a developer, dreamer, and learner.
        </p>
        <p>
          Here, I combine my skills, hobbies, and ambitions into a single digital experience.
        </p>
      </section>

<section className="highlight-section">
  <h2> What This Project Covers</h2>
  <div className="highlight-list">
    {highlights.map((item, index) => (
      <div key={index} className="highlight-item">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    ))}
  </div>
</section>



      <section className="quote-section">
        <blockquote>
          “The best way to predict the future is to create it.”<br />
          <span className="quote-author">– Abraham Lincoln</span>
        </blockquote>
      </section>
    </div>
  );
}

export default Home;
