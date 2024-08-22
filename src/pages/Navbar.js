// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-menu">
        <Link to="/" className="navbar-link">Home</Link>
        <div className="dropdown2">
          <button className="dropdown2-button">Foundation</button>
          <div className="dropdown2-content">
            <Link to="/foundation" className="dropdown-link">FOUNDATION</Link>
            <Link to="/volunteer" className="dropdown-link">VOLUNTEER</Link>
          </div>
        </div>
        <Link to="/rescued" className="navbar-link">RESCUED ANIMALS</Link>
        <Link to="/feed" className="navbar-link">FEED</Link>
      </div>
      <div className="profile-container">
        <img src="/path/to/profile-pic.jpg" alt="Profile" className="profile-image" />
      </div>
    </div>
  );
}

export default Navbar;
