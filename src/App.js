import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/buy" element={<div>Buy Page</div>} />
        </Routes>
        {/* Placeholder for Contact Section */}
        <div id="contact" style={{ height: '100vh', backgroundColor: '#f4f4f4' }}>
          Contact Section
        </div>
      </div>
    </Router>
  );
}

export default App;
