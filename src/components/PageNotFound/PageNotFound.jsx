// src/components/WorkInProgress.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaTools } from 'react-icons/fa';
import './PageNotFound.css';

const PageNotFound = () => {
  return (
    <div className="container">
      <FaTools className="icon animate__animated animate__bounce animate__heartBeat" />
      <h1 className="title">Work in Progress</h1>
      <p className="message">
        We're currently working on this page to bring you the best experience. Please check back soon!
      </p>
      <Link to="/dashboard" className="link">Return to Dashboard</Link>
    </div>
  );
};

export default PageNotFound;
