import React from 'react';
import './About.css';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Kally Wu",
      role: "Founder & Creative Director",
      image: "https://via.placeholder.com/200x200/000000/ffffff?text=Kally",
      bio: "Founder of Atelier Wuuuuuf, passionate about creating meaningful digital experiences that connect with users on a deeper level."
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "25+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  return (
    <div className="about">
      <div className="about-hero">
        <div className="container">
          <h1 className="about-title">About Atelier Wuuuuuf</h1>
          <p className="about-subtitle">
            We're a creative studio passionate about digital innovation and meaningful design.
          </p>
        </div>
      </div>

      <div className="about-content">
        <div className="container">
          <div className="about-section">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2019, Atelier Wuuuuuf began as a creative vision to create digital 
                experiences that not only look beautiful but also solve real problems for real people.
              </p>
              <p>
                Today, we've grown into a multidisciplinary atelier that combines cutting-edge 
                technology with thoughtful design to deliver solutions that make a difference. 
                Our expertise spans design, development, and strategy to create comprehensive 
                digital solutions.
              </p>
            </div>
            <div className="about-image">
              <img src="https://via.placeholder.com/500x400/667eea/ffffff?text=Our+Studio" alt="Studio workspace" />
            </div>
          </div>

          <div className="stats-section">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="team-section">
            <h2>Meet Our Team</h2>
            <div className="team-grid">
              {teamMembers.map((member) => (
                <div key={member.id} className="team-card">
                  <div className="team-image">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className="team-info">
                    <h3>{member.name}</h3>
                    <p className="team-role">{member.role}</p>
                    <p className="team-bio">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="values-section">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">🎯</div>
                <h3>Purpose-Driven</h3>
                <p>Every project we take on has a clear purpose and meaningful impact.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">💡</div>
                <h3>Innovation</h3>
                <p>We constantly explore new technologies and creative approaches.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🤝</div>
                <h3>Collaboration</h3>
                <p>We believe the best results come from working closely with our clients.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">✨</div>
                <h3>Excellence</h3>
                <p>We strive for excellence in every detail of our work.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 