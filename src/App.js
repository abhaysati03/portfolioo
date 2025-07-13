// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';

function App() {
  const [showLanding, setShowLanding] = useState(true);

  const handleContinue = () => {
    setShowLanding(false);
  };

  return (
    <Router>
      {showLanding ? (
        // Landing page without Navbar
        <Landing onContinue={handleContinue} />
      ) : (
        // After landing, Navbar + routes visible
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/hobbies" element={<Hobbies />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
