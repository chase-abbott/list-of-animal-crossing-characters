import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Villager = ({ id, image, name, japaneseName, quote }) => (
  <Link to={`/detail/${id}`}>
    <figure style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      backgroundColor: '#90ee90',
      borderRadius: '25px',
      cursor: 'pointer' }}>
      <img 
        src={image} 
        alt={japaneseName}
        style={{ width: '200px', height: '300px' }}></img>
      <figcaption>
        <p>{japaneseName}</p>
        <p>{name}</p>
        <p>{quote}</p>
      </figcaption>
    </figure>
  </Link>
);

Villager.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  japaneseName: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired
};

export default Villager;
