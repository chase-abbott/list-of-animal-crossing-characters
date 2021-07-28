import React from 'react';
import PropTypes from 'prop-types';

export default function VillagerDetail({ villager }) {

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      justifyContent: 'center',
      backgroundColor: '#90ee90',
      borderRadius: '25px',
      cursor: 'pointer',
      maxWidth: '66vw',
    }}>
      <img 
        src={villager.image} 
        alt={villager.id} 
        style={{
          width: '350px',
          maxHeight: '66vh',
          display: 'flex',
          justifySelf: 'flex-end'
        }}/>
      <figure style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <h1> 
          {villager.name} 
        </h1>
        <p> {villager.japaneseName}</p>
        <p> {villager.quote}</p>
        <p> {villager.birthday}</p>
        <ul>
          Coffee Order
          <li>{villager.coffee.roast}</li>
          <li>{villager.coffee.milk}</li>
          <li>{villager.coffee.sugar}</li>
        </ul>
        <a 
          href={villager.song.link} 
          target="_blank" 
          rel="noreferrer"> Play My Song!</a>
      </figure>
    </div>
  );
}

VillagerDetail.propTypes = {
  villager: PropTypes.object.isRequired
};
