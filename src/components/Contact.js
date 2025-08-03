import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-hero">
        <div className="container">
          <h2 className="about-title">About</h2>
          <p className="contact-description">
            Founded by architect-turned-software-engineer Kally Wu, Atelier Wuf-wuf delivers small-scale architecture shaped by computational design and digital tools. We leverage technology to streamline workflows, advance sustainability, and create affordable, people-centered spaces—all while honoring hand-made craft in an increasingly digitalized world.
          </p>
        </div>
      </div>
      
      <div className="contact-section">
        <div className="container">
          <h1 className="contact-title">Get in Touch</h1>
          <p className="contact-email">kallywywu@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact; 