// src/components/StarredPage.jsx
import React from 'react';
import { FaStar, FaFolderOpen } from 'react-icons/fa';
import './StarredPage.css';

const StarredPage = () => {
  const starredProjects = ['Starred Project 1', 'Starred Project 2', 'Starred Project 3'];

  return (
    <div className="starred-page">
      <h2 className="starred-title">Starred Projects</h2>
      <div className="starred-content">
        <StarredSection title="Your Starred Items" items={starredProjects} />
      </div>
    </div>
  );
};

// Modular Starred Section Component
const StarredSection = ({ title, items }) => (
  <div className="starred-section">
    <h3 className="section-title">
      <FaFolderOpen className="section-icon" /> {title}
    </h3>
    <ul className="section-list">
      {items.map((item, index) => (
        <li key={index} className="section-item">
          <FaStar className="star-icon" /> {item}
        </li>
      ))}
    </ul>
  </div>
);

export default StarredPage;
