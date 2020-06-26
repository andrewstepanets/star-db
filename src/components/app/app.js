import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import ErrorIndicator from '../error-indicator';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import Row from '../row';


import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry';

import './app.css';

export default class App extends Component {

  swapiService = new SwapiService();

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

    const { getPerson, 
            getStarship,
            getPersonImage,
            getStarshipImage } = this.swapiService;

    const personDetails = (
      <ItemDetails 
        itemId={11} 
        getData={getPerson}
        getImageUrl={getPersonImage} />
    );
    const starshipDetails = (
      <ItemDetails 
        itemId={5} 
        getData={getStarship}
        getImageUrl={getStarshipImage} />
    );

    return (
      <ErrorBoundry>
        <div className="stardb-app">
          <Header />
          <RandomPlanet />
          <Row
            left={personDetails}
            right={starshipDetails}/>
        </div>
      </ErrorBoundry>
      
    );
  }
  
};
