import React from 'react';
import PropTypes from 'prop-types';

export default function VillagerDetail({ villager }) {

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <figure>
        <img 
          src={villager.image} 
          alt={villager.id} 
          style={{
            width: '350px'
          }}/>
      </figure>
    </div>
  );
}

VillagerDetail.propTypes = {
  villager: PropTypes.object.isRequired
};
