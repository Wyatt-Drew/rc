import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Hero.css';
import houseImage from '../../assets/house.jpg';

const Hero = () => {
  return (
    <div className="hero-container">
      <Carousel showThumbs={false} showArrows={true} showStatus={false} infiniteLoop={true} autoPlay={true} interval={5000}>
        <div className="slide">
          <img src={houseImage} alt="Slide 1" />
          <div className="slogan">We build homes!</div>
        </div>
        <div className="slide">
          <img src={houseImage} alt="Slide 2" />
          <div className="slogan">We build homes!</div>
        </div>
        <div className="slide">
          <img src={houseImage} alt="Slide 3" />
          <div className="slogan">We build homes!</div>
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
