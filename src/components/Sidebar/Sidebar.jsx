import React, { useState } from 'react';
import { FaCodepen, FaChevronLeft, FaChevronRight, FaTachometerAlt, FaFileAlt, FaStar } from 'react-icons/fa';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import Editor from '../Editor/Editor'; 

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [editorVisible, setEditorVisible] = useState(false); // State to manage editor visibility
  
  // Toggle the sidebar collapse state
  const toggleSidebar = () => {
      setCollapsed(!collapsed);
  };

  // Toggle editor visibility
  const toggleEditor = () => {
    setEditorVisible(!editorVisible);
  };

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <FaCodepen className="sidebar-logo" />
        {!collapsed && <h2 className="sidebar-title">CodePen</h2>}
      </div>

      <div className="collapse-btn" onClick={toggleSidebar}>
        {collapsed ? <FaChevronRight /> : <FaChevronLeft />}
      </div>

      {/* Navigation links */}
      <ul className="sidebar-nav">
        {!collapsed && (
          <NavLink to="editor">
          <button className="start-coding-btn" >
            Start Coding
          </button>
          </NavLink>
        )}
        {!collapsed && (
          <>
            <li>
              <NavLink to="/dashboard" className="sidebar-link">
                <FaTachometerAlt className="sidebar-icon" />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="sidebar-link">
                <FaCodepen className="sidebar-icon" />
                <span>About</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/newproject" className="sidebar-link">
                <FaFileAlt className="sidebar-icon" />
                <span>New Project</span>
              </NavLink>
            </li> 
            <li>
              <NavLink to="/starred" className="sidebar-link">
                <FaStar className="sidebar-icon" />
                <span>Starred</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/saved" className="sidebar-link">
                <FaCodepen className="sidebar-icon" />
                <span>Saved</span>
              </NavLink>
            </li>
          </>
        )}
      </ul>

      {/* Render Editor component conditionally */}
      {editorVisible && <Editor onClose={toggleEditor} />}
    </div>
  );
};

export default Sidebar;
