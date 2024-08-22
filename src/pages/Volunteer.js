import React, { useState } from "react";
import './Volunteer.css';
import Navbar from "./Navbar";

function Volunteer() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // ตัวอย่างข้อมูลสำหรับการทดสอบ
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
            placeholder="Search Volunteer"
            className="search-bar"
          />
          <select className="dropdown1" value={selectedOption} onChange={handleSelectChange}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
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
              <a href={post.link} className="svc_read_more" target="_self">
                เพิ่มเติม <i className="fa fa-angle-double-right"></i>
              </a>
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
              <a href={post.link} className="svc_read_more" target="_self">
                เพิ่มเติม <i className="fa fa-angle-double-right"></i>
              </a>
            </div>
          </div>
        </article>
        <footer className="footer">
          <p>&copy; 2024 Your Organization. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default Volunteer;
