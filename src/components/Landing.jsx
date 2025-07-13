// src/components/Landing.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css";

function Landing({ onContinue }) {
  const navigate = useNavigate();

  const handleContinue = () => {
    onContinue();
    navigate("/");
  };

  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1 className="landing-title">Welcome to My Portfolio</h1>
        <p className="landing-subtitle">
          Step into a curated space where ideas, creativity, and personal growth come together. This is more than a showcase — it's a reflection of the journey so far.
        </p>

        <blockquote className="landing-quote">
          “The only way to do great work is to love what you do.”<br />
          <span className="quote-author">— Steve Jobs</span>
        </blockquote>

        <p className="landing-note">
          Thank you for being here. I hope you enjoy exploring my world as much as I’ve enjoyed building it.
        </p>

        <button className="landing-button" onClick={handleContinue}>
          Enter Portfolio
        </button>
      </div>
    </div>
  );
}

export default Landing;
