// src/components/AboutPage.jsx
import React from 'react';
import './About.css';

const AboutPage = () => {
  return (
    <div className="about-page animate__animated animate__bounceInDown">
      <h1 className="about-title">About CodePen</h1>
      <div className="about-content">
        <p className="about-description">
          CodePen is an online community platform for front-end developers, offering a collaborative environment to create, share, and explore web-based projects known as "pens." Established in 2012, CodePen has grown into one of the most popular resources for HTML, CSS, and JavaScript coding, enabling developers to experiment with new ideas, collaborate on projects, and showcase their skills.
        </p>
        <h2 className="about-subtitle">Core Features</h2>
        <ul className="feature-list">
          <li><strong>Live Code Preview:</strong> CodePen provides instant feedback with live previews, allowing developers to see their code in action as they write.</li>
          <li><strong>Embedded Pens:</strong> Easily embed and share projects on websites, blogs, and social media.</li>
          <li><strong>Collaboration:</strong> Engage with the developer community, receive feedback, and discover creative solutions through shared pens and comments.</li>
          <li><strong>Project Workspaces:</strong> Use advanced workspaces for larger projects with multiple files, dependencies, and collaborative features.</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
