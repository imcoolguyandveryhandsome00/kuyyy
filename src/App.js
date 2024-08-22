import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Foundation from './pages/Foundation';
import Volunteer from './pages/Volunteer';
import Rescued from './pages/Rescued';
import Home from './pages/Home';
import Feed from './pages/Feed';
import Foundation1 from './pages/Foundation1';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/foundation" element={<Foundation />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/rescued" element={<Rescued />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/foundation1" element={<Foundation1 />} />
        
      </Routes>
    </Router>
  );
}

export default App;
