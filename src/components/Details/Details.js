import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import './Details.css';
import houseImage from '../../assets/house.jpg';

const listings = [
  {
    id: 1,
    images: [houseImage, houseImage, houseImage],
    address: '1234 Example Street, Regina, SK',
    status: 'Ready for Immediate Possession'
  },
  {
    id: 2,
    images: [houseImage, houseImage, houseImage],
    address: '5678 Sample Avenue, Regina, SK',
    status: 'Under Construction'
  }
];

const Details = () => {
  const { id } = useParams();
  const listing = listings.find(listing => listing.id === parseInt(id));

  if (!listing) {
    return <div>Listing not found</div>;
  }

  return (
    <div className="details-container">
      <Link to="/" className="back-button">Back</Link>
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
        <h3>{listing.status}</h3>
        <p>{listing.address}</p>
      </div>
    </div>
  );
};

export default Details;
