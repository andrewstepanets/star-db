import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import ErrorIndicator from '../error-indicator';

import './app.css';

export default class App extends Component {

  state = {
    showRandomPlanet: true,
    hasError: false
  };

  componentDidCatch(){
    this.setState( { hasError: true } )
  }

  render(){
    if (this.state.hasError) {
      return <ErrorIndicator />
    }
    return (
      <div>
        <Header />
        <RandomPlanet />

        <PeoplePage />
        <PeoplePage />
        <PeoplePage />
      </div>
    );
  }
  
};
