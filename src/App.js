import React from 'react';
import { Switch ,Route } from 'react-router-dom';

import './App.css';
import DashboardPage from './pages/dashboard/dashboard.component';
import HomePage from './pages/homepage/homepage.component';
import GoogleMaps from './components/google-maps/google-maps.component';
import Header from './components/header/header.component';


class App extends React.Component {

  render() {
    return (
      <div>
      <Header/>
          <Switch>
            <Route exact path = '/' component = {HomePage}/>
            <Route exact path = '/dashboard' component = {DashboardPage}/>
          </Switch>
      </div>
   );}
}

export default App;
