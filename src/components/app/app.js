import React, { Fragment, Component } from 'react';

import Header from '../header/header';
import PeoplePage from '../people_page/people_page';
import SwapiService from '../../services/swapi_service';
import RandomPlanet from '../random_planet/random_planet';
import ErrorIndicator from '../error_indicator/error_indicator';
import FictitiousError from '../fictitious_error/fictitious_error';

import './app.css';


export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        toggleRandomPlanet: true,
        hasError: false,
    };

    onToggleRandomPlanet = () => {
        const {toggleRandomPlanet} = this.state;
        this.setState({
            toggleRandomPlanet: !toggleRandomPlanet,
        });
    };

    componentDidCatch() {
        console.log('componentDidCatch Error App');
        this.setState({
            hasError: true,
        });
    };

    render() {

        if (this.state.hasError) {
            return <div className="d-flex justify-content-center mt-5"><ErrorIndicator /></div>
        }

        const { toggleRandomPlanet } = this.state;
        const randomPlanet = toggleRandomPlanet ? <RandomPlanet /> : null;

        return (
            <Fragment>
                <div className="page-container bg-dark">
                <Header />
                {randomPlanet}
                <div className="d-flex flex-row justify-content-center">
                    <button 
                        type="button" 
                        className="btn btn-outline-warning border border-warning my-2"
                        onClick={this.onToggleRandomPlanet}>Toggle random planet</button>
                    <FictitiousError />
                </div>
                <PeoplePage 
                    getData={this.swapiService.getAllPeople}
                    renderItemLabel={({ name, gender, birthYear }) => `${name} (${gender}, ${birthYear})`} />
                <PeoplePage 
                    getData={this.swapiService.getAllPlanets}
                    renderItemLabel={({ name, diameter }) => `${name} (${diameter})`} />
                    </div>
            </Fragment>
        );
    }
};