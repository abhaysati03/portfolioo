// src/components/Contact.jsx
import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    const subject = encodeURIComponent("Portfolio Contact from " + name);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    // This opens Gmail or default email app with pre-filled values
    window.location.href = `mailto:abhaysati234@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact-section">
      <h1 className="contact-heading"> OPEN TO OPPORTUNITIES </h1>

      <div className="contact-wrapper">
        <div className="intro-letter">
          <p>Dear Recruiter / Viewer,</p>
          <p>
            I'm Abhay Sati, a passionate Full Stack Developer with a drive to build innovative and scalable web solutions.
            I’m currently seeking new opportunities to contribute to a forward-thinking team where I can grow technically and professionally.
          </p>
          <p>
            If you're looking for someone enthusiastic, dedicated, and eager to make an impact — I’d love to hear from you!
          </p>
          <p>
            You can reach out via this form or directly through my contact details. I’m open to both remote and on-site roles.
          </p>
          <p>Sincerely,<br />Abhay Sati</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="5"
              placeholder="How can I help you?"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>

      <div className="contact-details">
        <h2>Contact Info</h2>
        <p><strong>Name:</strong> Abhay Sati</p>
        <p><strong>Location:</strong> Choudhary Charan Singh, Roorkee</p>
        <p><strong>Phone:</strong> +91 8006122006</p>
        <p><strong>Email:</strong> abhaysati234@gmail.com</p>
      </div>
    </section>
  );
}

export default Contact;
