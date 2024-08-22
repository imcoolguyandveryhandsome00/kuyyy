import React, { useState } from "react";
import './Home.css';
import Navbar from "./Navbar";
import Banner from "../Banner";
import DateDropdown from "../DateDropdown";

function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <Navbar />
      <div className="foundation-container">
        <h3 className="foundation-title">Bettertogether Pets</h3>
        <div className="App">
        </div>

        <div className="form-container">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search "
            className="search-bar"
          />
          <DateDropdown />
        </div>
        <div className="image-container">
          <img src="/path/to/image1.jpg" alt="Description 1" className="image-item" />
          <img src="/path/to/image2.jpg" alt="Description 2" className="image-item" />
          <img src="/path/to/image3.jpg" alt="Description 3" className="image-item" />
        </div>
        <h4 className="image-heading">new</h4>
      </div>
      <footer className="footer">
        <p>&copy; 2024 Your Organization. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
