// src/components/Contact.jsx
import React from "react";
import "./Contact.css";

function Contact() {
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

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Your Name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="you@example.com" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="How can I help you?" required></textarea>
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
