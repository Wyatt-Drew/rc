import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import './Details.css';
import houseImage from '../../assets/house.jpg';

const listings = [
  {
    id: 1,
    images: [houseImage, houseImage, houseImage],
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2718.8509045706137!2d-104.61889608484147!3d50.42699397947474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1541d1e7b8a5%3A0xe2e3a68d5b35d7a7!2s2405%20Legislative%20Dr%2C%20Regina%2C%20SK!5e0!3m2!1sen!2sca!4v1627678825621!5m2!1sen!2sca'
  },
  {
    id: 2,
    images: [houseImage, houseImage, houseImage],
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2718.9264260706024!2d-104.61889608484147!3d50.42118757947474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1541d1e7b8a5%3A0xe2e3a68d5b35d7a7!2s3260%20Albert%20St%2C%20Regina%2C%20SK!5e0!3m2!1sen!2sca!4v1627678825621!5m2!1sen!2sca'
  }
];

const Details = () => {
  const { id } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const address = queryParams.get('address');
  const status = queryParams.get('status');
  const listing = listings.find(listing => listing.id === parseInt(id));

  if (!listing) {
    return <div>Listing not found</div>;
  }

  return (
    <div className="details-container">
      <div className="details-content">
        <div className="details-carousel">
          <Carousel showThumbs={false} showArrows={true} showStatus={false} infiniteLoop={true}>
            {listing.images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Listing ${listing.id} Image ${index + 1}`} />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="details-info">
          <h3>{status}</h3>
          <p>{address}</p>
          <h4>Contact Us About This Listing</h4>
          <button className="phone-button" onClick={() => window.location.href='tel:306-585-3828'}>Phone Us: 306-585-3828</button>
          <form className="contact-form">
            <input type="hidden" name="address" value={address} />
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="tel" name="phone" placeholder="Contact Phone" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div className="details-map">
        <iframe
          src={listing.mapUrl}
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Maps"
        ></iframe>
      </div>
    </div>
  );
};

export default Details;
