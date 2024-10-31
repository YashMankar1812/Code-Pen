// src/components/Dashboard.jsx
import React from 'react';
import { FaCode, FaFolderOpen } from 'react-icons/fa';
import './Dashboard.css';

const Dashboard = () => {
  const projects = ['Project 1', 'Project 2', 'Project 3']; 

  return (
    <div className="dashboard">
      <h2 className="dashboard-title">Dashboard</h2>
      <div className="dashboard-content">
        <DashboardSection title="Your Projects" items={projects} />
      </div>
    </div>
  );
};

// Modular Dashboard Section Component
const DashboardSection = ({ title, items }) => (
  <div className="dashboard-section">
    <h3 className="section-title">
      <FaFolderOpen className="section-icon" /> {title}
    </h3>
    <ul className="section-list">
      {items.map((item, index) => (
        <li key={index} className="section-item">
          <FaCode className="project-icon" /> {item}
        </li>
      ))}
    </ul>
  </div>
);

export default Dashboard;
