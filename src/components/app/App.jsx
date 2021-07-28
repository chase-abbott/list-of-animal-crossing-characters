/* eslint-disable max-len */
import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch,
  Route } from 'react-router-dom';
import VillagerContainer from '../../containers/VillagerContainer.jsx';
import VillagerDetailContainer from '../../containers/VillagerDetailContainer.jsx';


export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/detail/:id">
          <VillagerDetailContainer/>
        </Route>
        <Route path="/">
          <VillagerContainer/>
        </Route>
      </Switch>
    </Router>
  );
}

