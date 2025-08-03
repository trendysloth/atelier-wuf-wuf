import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span className="highlight">Atelier Wuf Wuf</span>
          </h1>
          <p className="hero-subtitle">
            Where creativity meets innovation. We craft digital experiences that inspire and engage.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">View Our Work</button>
            <button className="btn btn-secondary">Get in Touch</button>
          </div>
        </div>

      </div>
      
      <div className="features-section">
        <div className="container">
          <h2 className="section-title">What We Do</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Design</h3>
              <p>Beautiful, intuitive interfaces that users love to interact with.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💻</div>
              <h3>Development</h3>
              <p>Robust, scalable solutions built with cutting-edge technologies.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Innovation</h3>
              <p>Pushing boundaries and exploring new possibilities in digital creation.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 