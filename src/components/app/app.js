import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import ItemDetails, { Record } from '../item-details/item-details';
import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList } from '../sw-components';
import ItemList from '../item-list';
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
        getImageUrl={getPersonImage}>
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />
          </ItemDetails>
    );
    const starshipDetails = (
      <ItemDetails 
        itemId={5} 
        getData={getStarship}
        getImageUrl={getStarshipImage}>
        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="costInCredits" label="Cost" />
      </ItemDetails>
    );

    return (
      <ErrorBoundry>
        <div className="stardb-app">
          <Header />
          <RandomPlanet />
          {/* <Row
            left={personDetails}
            right={starshipDetails}/> */}
          <PersonDetails itemId={11}/>
          <PlanetDetails itemId={5}/>
          <StarshipDetails itemId={9}/>
          <PersonList>
            { ({name}) => <span>{name}</span>}
          </PersonList>
          <StarshipList>
            {({ name }) => <span>{name}</span>}
          </StarshipList>
          <PlanetList>
            { ({name}) => <span>{name}</span>}
          </PlanetList>
        </div>
      </ErrorBoundry>
      
    );
  }
  
};
