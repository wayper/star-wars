import React, { Component, Fragment } from 'react';

import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';

import './random-planet.css';
import ErrorInticator from '../error-indicator/error-indicator';

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false,
  }

  constructor() {
    super();
    this.updatePlanet();
  }

  onPlanetLoaded = (planet) => {
    this.setState({ 
      planet,
      loading: false, 
    });
  };

  onError = (err) => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  updatePlanet() {
    const id = Math.floor(Math.random() * 1220) + 2;
    this.swapiService
    .getPlanet(id)
    .then(this.onPlanetLoaded)
    .catch(this.onError);
  };

  render() {

    const { planet, loading, error } = this.state;

    const hasData = !(loading || error);

    const errorMessage = error ? <ErrorInticator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={planet}/> : null;

    return (
      <div className="random-planet jumbotron rounded">
        { errorMessage }
        { spinner }
        { content }
      </div>

    );
  }
}

const PlanetView = ({planet}) => {

  const { id, name, population, 
    rotationPeriod, diameter } = planet;

  return (
    <Fragment>
      <img className="planet-image"
      src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} 
      alt="Planet"/>
      <div>
      <h4>{name}</h4>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <span className="term">Population: {population}</span>
        </li>
        <li className="list-group-item">
          <span className="term">Rotation period: {rotationPeriod}</span>
        </li>
        <li className="list-group-item">
          <span className="term">Diameter: {diameter}</span>
        </li>
      </ul>
      </div>
    </Fragment>
  );
}