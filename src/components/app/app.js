import React, { Fragment, Component } from 'react';

import Header from '../header/header';
import ItemList from '../item_list/item_list';
import PersonCard from '../person_card/person_card';
import RandomPlanet from '../random_planet/random_planet';
import ErrorIndicator from '../error_indicator/error_indicator';

import './app.css';


export default class App extends Component {

    state = {
        toggleRandomPlanet: true,
        selectedPersone: 5,
        hasError: false,
    };

    onItemSelected = (id) => {
        this.setState({
            selectedPersone: id,
        });
    };

    onToggleRandomPlanet = () => {
        const {toggleRandomPlanet} = this.state;
        this.setState({
            toggleRandomPlanet: !toggleRandomPlanet,
        });
    };

    componentDidCatch() {
        console.log('componentDidCatch Error');
        this.setState({
            hasError: true,
        })

    }

    render() {

        if (this.state.hasError) {
            return <div className="d-flex justify-content-center mt-5"><ErrorIndicator /></div>
        }

        const { toggleRandomPlanet } = this.state;
        const randomPlanet = toggleRandomPlanet ? <RandomPlanet /> : null;

        return (
            <Fragment>
                <Header />
                {randomPlanet}
                <div className="d-flex flex-row justify-content-center">
                    <button 
                        type="button" 
                        className="btn btn-outline-warning border border-warning my-2"
                        onClick={this.onToggleRandomPlanet}>Toggle random planet</button>
                </div>
                <div className="d-flex flex-row justify-content-around align-items-center py-2 container-content">
                    <ItemList onItemSelected={this.onItemSelected} />
                    <PersonCard personId={this.state.selectedPersone}/>
                </div>
            </Fragment>
        );
    }
};