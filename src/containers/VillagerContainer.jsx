import React, { Component } from 'react';
import VillagerList from '../components/VillagerList.jsx';
import { getVillagers } from '../services/animalCrossingAPI.js';
import { mungeVillagers } from '../services/animalCrossingAPI.js';


export default class VillagerContainer extends Component{
  state = {
    isLoading: true,
    villagers: []
  };

  componentDidMount = async () => {
    const res = await getVillagers();
    const villagers = mungeVillagers(res);
    return this.setState({ isLoading: false, villagers });
  }

  render(){
    const { villagers } = this.state; 
    if(this.state.isLoading) return <h1> Loading... </h1>;
    return (
      <VillagerList villagers={villagers} />    
    );
  }
}
