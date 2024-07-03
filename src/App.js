import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ForSale from './components/ForSale/ForSale';
import Details from './components/Details/Details';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<>
            <div id="hero"><Hero /></div>
            <div id="for-sale"><ForSale /></div>
          </>} />
          <Route path="/buy" element={<div>Buy Page</div>} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
        <div id="footer">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
