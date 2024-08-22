import React, { useState } from "react";
import './Rescued.css';
import Navbar from "./Navbar";
import { Link } from "react-router-dom"; // นำเข้า Link

function Rescued() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // ตัวอย่างข้อมูลโพสต์
  const post = {
    link: "#",
    imageSrc: "https://via.placeholder.com/360x270",
    imageAlt: "Post image",
    title: "Post Title",
    description: "This is a brief description of the post.",
    date: "August 17, 2024",
    author: "Author Name",
    comments: "10 Comments"
  };

  return (
    <div>
      <Navbar />
      <div className="foundation-container">
        <h3 className="foundation-title">Bettertogether Pets</h3>
        <h1 className="foundation-title">RESCUED ANIMAL</h1>
        <div className="form-container">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search Animal"
            className="search-bar"
          />
          <select
            value={selectedOption}
            onChange={handleSelectChange}
            className="dropdown1"
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          <article className="element-item svc-col-md-12 svc-grid-cat-328">
            <div className="svc-col-md-4">
              <a href={post.link} target="_self" rel="noopener noreferrer">
                <img
                  width="360"
                  height="270"
                  src={post.imageSrc}
                  className="svc_post_image"
                  alt={post.imageAlt}
                />
              </a>
            </div>
            <div className="svc-col-md-8">
              <p>
                <a href={post.link} target="_self" className="svc_title">
                  {post.title}
                </a>
              </p>
              <p className="svc_info">{post.description}</p>
              <div>
                <ul className="svg_post_meta">
                  <li className="time">
                    <span><i className="fa fa-calendar-o"></i> {post.date} </span>
                    <span><i className="fa fa-pencil"></i> {post.author} </span>
                    <span><a className="fa fa-comments-o" href={`${post.link}#respond`}> {post.comments}</a></span>
                  </li>
                </ul>
                <div className="svc_social_share">
                  <ul>
                    <li><a href={`https://twitter.com/intent/tweet?text=&url=${post.link}`} target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a></li>
                    <li><a href={`https://www.facebook.com/sharer/sharer.php?u=${post.link}`} target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a></li>
                    <li><a href={`https://plusone.google.com/share?url=${post.link}`} target="_blank" rel="noopener noreferrer"><i className="fa fa-google-plus"></i></a></li>
                  </ul>
                </div>
                <Link to="/foundation1" className="button-link">
                  <button className="button">เพิ่มเติม</button>
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2024 Your Organization. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Rescued;
