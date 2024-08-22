import React, { useState } from "react";
import './Feed.css';
import Navbar from "./Navbar";

function Feed() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const ProfileTab = () => {
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
      setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      // ส่งข้อมูลข้อความไปที่ไหนสักแห่ง
      console.log('ข้อความ:', message);
      setMessage('');
    };

    return (
      <div className="profile-tab">
        <div className="profile-info">
          <img src="profile-picture-url" alt="Profile" className="profile-picture" />
        </div>
        <form onSubmit={handleSubmit} className="message-form">
          <textarea
            value={message}
            onChange={handleChange}
            placeholder="พิมพ์ข้อความที่นี่..."
            rows="4"
            className="message-input"
          />
          <button type="submit" className="submit-button">POST</button>
        </form>
      </div>
    );
  };

  return (
    <div>
      <Navbar />
      <div className="foundation-container">
        <h3 className="foundation-title">Bettertogether Pets</h3>
        <h1 className="foundation-title">FEED</h1>
   
          <ProfileTab />
        </div>
      <footer className="footer">
        <p>&copy; 2024 Your Organization. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Feed;
