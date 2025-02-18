import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import './ForSale.css';
import houseImage from '../../assets/house.jpg';

const listings = [
  {
    id: 1,
    images: [houseImage, houseImage, houseImage],
    address: '2405 Legislative Dr, Regina, SK',
    status: 'Ready for Immediate Possession',
  },
  {
    id: 2,
    images: [houseImage, houseImage, houseImage],
    address: '3260 Albert St, Regina, SK',
    status: 'Under Construction',
  }
];

const ForSale = () => {
  return (
    <div className="for-sale-section">
      <h2>FOR SALE</h2>
      <p>Built by us, for you. We have a variety of homes for sale in the Regina and surrounding areas at different stages, styles, and prices.</p>
      {listings.map(listing => (
        <div key={listing.id} className="listing">
          <div className="listing-carousel">
            <Carousel showThumbs={false} showArrows={true} showStatus={false} infiniteLoop={true}>
              {listing.images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`Listing ${listing.id} Image ${index + 1}`} />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="listing-info">
            <h3>{listing.status}</h3>
            <p>{listing.address}</p>
            <Link to={`/details/${listing.id}?address=${encodeURIComponent(listing.address)}&status=${encodeURIComponent(listing.status)}`} className="learn-more-button">Learn More</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ForSale;
