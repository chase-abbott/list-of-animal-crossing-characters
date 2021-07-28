import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getVillagerDetail } from '../services/animalCrossingAPI.js';
import VillagerDetail from '../components/VillagerDetail';

export default function VillagerDetailContainer(){
  const { id } = useParams();
  const [villager, setVillager] = useState();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    return getVillagerDetail(id)
      .then(results => {
        return setVillager(results);})
      .then(() => setLoading(false));

  }, []);
  
  if(loading) return <h1> Loading ... </h1>;
  return (
    <VillagerDetail villager={villager}/>
  );

}
