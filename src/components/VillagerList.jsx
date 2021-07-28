import React from 'react';
import PropTypes from 'prop-types';
import Villager from './Villager.jsx';

export default function VillagerList({ villagers }){
  const villagerElements = villagers.map(villager => (
    <li key={villager.id} >
      <Villager
        {...villager}/>
    </li>
  ));

  return <ul style={{
    listStyle: 'none',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
    gridGap: '20px',
    margin: 0,
    alignItems: 'center',
    padding: '10px',
  }}> {villagerElements} </ul>;
}

VillagerList.propTypes = {
  villagers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      japaneseName: PropTypes.string.isRequired,
      quote: PropTypes.string.isRequired
    })
  )
};
