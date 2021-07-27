import React from 'react';
import PropTypes from 'prop-types';

const Villager = ({ image, japaneseName, quote }) => (
  <figure>
    <img 
      src={image} 
      alt={japaneseName}
      style={{ width: '200px', height: '300px' }}></img>
    <figcaption>
      <p>{japaneseName}</p>
      <p>{quote}</p>
    </figcaption>
  </figure>
);

Villager.propTypes = {
  image: PropTypes.string.isRequired,
  japaneseName: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired
};

export default Villager;
