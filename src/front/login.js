"use client";

import './globals.css';
import { useState } from 'react';


export default function signup() {

  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [activeField, setActiveField] = useState('');

  const handleChange1 = (event) => {
    setText1(event.target.value);
    setActiveField('text1');
  };

  const handleChange2 = (event) => {
    setText2(event.target.value);
    setActiveField('text2');
  };

  return (
    <section>
      <div className="back">
      <h1 className="signup">LOG IN</h1>
        <div className="front">
          <h1 className="name">Bettertogether Pets</h1>

          <div className="all">
            <section className="box">
            <div>
            <h4>Username</h4>
            <input
             type="text"
             value={text1}
             onChange={handleChange1}
             className="text-input"
            />
            <div>
            <h4>password</h4>
            <input
             type="text"
             value={text2}
             onChange={handleChange2}
             className="text-input1"
            />
            </div>
            <a className="forgot" href="https://example.com" target="_blank" rel="noopener noreferrer">forgot password?</a>
            <a className="donthave">you have an Account? Sign up</a>
            </div>
            </section>
            <button className="click" onclick="handleClick()">SIGN UP</button>

          

        </div>
      </div>
      </div>
    </section>
  );
  
}