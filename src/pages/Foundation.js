import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Foundation.css';
import Navbar from './Navbar';
import CheckboxDropdown from '../CheckboxDropdown';  // Import the custom dropdown component

function Foundation() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleOptionChange = (value) => {
    setSelectedOptions(prevState =>
      prevState.includes(value)
        ? prevState.filter(option => option !== value)
        : [...prevState, value]
    );
  };

  // Example data for testing
  const post = {
    link: "https://www.volunteerspirit.org/mini-volunteer-fair/48687/",
    imageSrc: "https://www.volunteerspirit.org/wp-content/uploads/2024/08/Blue-Illustration-Medical-Service-Flyer-1-360x270.png",
    imageAlt: "",
    title: "Mini Volunteer Fair",
    description: "🌟 เข้าร่วมกิจกรรมดีๆ กับพลเมืองอาสา มูลนิธิอาสาสมัครเพื่อสังคมและมูลนิธิอีโคนก🌟🎉 กิจกรรม Mini Volunteer Fair ที่...",
    date: "August 16, 2024",
    author: "econok",
    comments: "0"
  };

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ];

  return (
    <div>
      <Navbar />
      <div className="foundation-container">
        <h3 className="foundation-title">Bettertogether Pets</h3>
        <h1 className="foundation-title">FOUNDATION</h1>
        <div className="form-container">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="search-bar"
          />
          <CheckboxDropdown
            options={options}
            selectedOptions={selectedOptions}
            onOptionChange={handleOptionChange}
          />
        </div>
        <article className="element-item svc-col-md-12 svc-grid-cat-328">
          <div className="svc-col-md-4">
            <a href={post.link} target="_self">
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
                  <li><a href={`https://twitter.com/intent/tweet?text=&url=${post.link}`} target="_blank"><i className="fa fa-twitter"></i></a></li>
                  <li><a href={`https://www.facebook.com/sharer/sharer.php?u=${post.link}`} target="_blank"><i className="fa fa-facebook"></i></a></li>
                  <li><a href={`https://plusone.google.com/share?url=${post.link}`} target="_blank"><i className="fa fa-google-plus"></i></a></li>
                </ul>
              </div>
              <Link to="/foundation1" className="button-link">
                <button className="button">เพิ่มเติม</button>
              </Link>
            </div>
          </div>
        </article>
        <article className="element-item svc-col-md-12 svc-grid-cat-328">
          <div className="svc-col-md-4">
            <a href={post.link} target="_self">
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
                  <li><a href={`https://twitter.com/intent/tweet?text=&url=${post.link}`} target="_blank"><i className="fa fa-twitter"></i></a></li>
                  <li><a href={`https://www.facebook.com/sharer/sharer.php?u=${post.link}`} target="_blank"><i className="fa fa-facebook"></i></a></li>
                  <li><a href={`https://plusone.google.com/share?url=${post.link}`} target="_blank"><i className="fa fa-google-plus"></i></a></li>
                </ul>
              </div>
              <Link to="/foundation1" className="button-link">
                <button className="button">เพิ่มเติม</button>
              </Link>
            </div>
          </div>
        </article>
      </div>
      <footer className="footer">
        <p>&copy; 2024 Your Organization. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Foundation;
