import React, { Component } from 'react';

import SpinnerCube from '../spinners/spinner_cube';
import SwapiService from '../../services/swapi_service';
import ErrorIndicator from '../error_indicator/error_indicator';
import PlanetView from './planet_view';

import './random_planet.css';

export default class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false,
    }

    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 3000);
    }

    componentWillMount() {
        clearInterval(this.interval);
    }

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 15) + 2;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false,
        });
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false,
        })
    }

    render() {
        const { planet, loading, error } = this.state;

        const errorBody = error ? <ErrorIndicator /> : null;
        const spinnerBody = loading ? <SpinnerCube /> : null;
        const contentBody = (!loading && !error) ? <PlanetView planet={planet}/> : null;

        return (
            <div className="d-flex justify-content-center align-items-center media random-planet">
                {spinnerBody}
                {contentBody}
                {errorBody}
            </div>
        );
    }
}