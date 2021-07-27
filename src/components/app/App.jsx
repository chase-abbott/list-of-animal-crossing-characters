/* eslint-disable max-len */
import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch,
  Route } from 'react-router-dom';
import VillagerContainer from '../../containers/VillagerContainer.jsx';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route to="/" component={VillagerContainer}/>

      </Switch>
    </Router>
  );
}

