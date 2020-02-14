import React, { Component } from 'react';

import Header from '../header/header';
// import ItemPage from '../item_page/item_page';
import ItemList from '../item_list/item_list';
import SwapiService from '../../services/swapi_service';
import RandomPlanet from '../random_planet/random_planet';
import ErrorBoundry from '../error_indicator/error_boundry';
import ItemDetailsCard, { Record } from '../item_details_card/item_details_card';
import ItemRowContent from '../item_row_content/item_row_content';

import './app.css';


export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        toggleRandomPlanet: true,
    };

    onToggleRandomPlanet = () => {
        const { toggleRandomPlanet } = this.state;
        this.setState({
            toggleRandomPlanet: !toggleRandomPlanet,
        });
    };

    render() {
        const { toggleRandomPlanet } = this.state;
        const randomPlanet = toggleRandomPlanet ? <RandomPlanet /> : null;

        const { getPersone, getStarship, getPersonImage, getStarshipImage } = this.swapiService;

        const itemList = (
            <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.props.getData}
                renderItemLabel={this.props.renderItemLabel} />
        );

        const itemList2 = (<ItemList 
        getData={this.swapiService.getAllPeople}
        renderItemLabel={({ name, gender, birthYear }) => `${name} (${gender}, ${birthYear})`} />);

        const personDetails = (
            <ItemDetailsCard
                itemId={11}
                getData={getPersone}
                getImageUrl={getPersonImage}>
                <Record field='gender' label='Gender' />
                <Record field='eyeColor' label='Eye Color' />
            </ItemDetailsCard>
        );

        const starshipDetails = (
            <ItemDetailsCard
                itemId={5}
                getData={getStarship}
                getImageUrl={getStarshipImage} >

                <Record field='model' label='Model' />
                <Record field='manufacturer' label='Manufacturer' />
                <Record field='costInCredits' label='Cost' />
                <Record field='length' label='Length' />
                <Record field='crew' label='Crew' />
                <Record field='cargoCapacity' label='Cargo Capacity' />

            </ItemDetailsCard>
        );

        return (
            <ErrorBoundry>
                <div className="page-container bg-dark">
                    <Header />
                    {randomPlanet}
                    <div className="d-flex flex-row justify-content-center">
                        <button
                            type="button"
                            className="btn btn-outline-warning border border-warning my-2"
                            onClick={this.onToggleRandomPlanet}>Toggle random planet</button>
                    </div>
                    <ErrorBoundry>
                        <ItemRowContent leftElem={personDetails} rightElem={starshipDetails} />
                    </ErrorBoundry>
                    <ErrorBoundry>
                        <ItemRowContent leftElem={itemList2} rightElem="" />
                    </ErrorBoundry>
                    <ItemList 
                        getData={this.swapiService.getAllPeople}
                        renderItemLabel={({ name, gender, birthYear }) => `${name} (${gender}, ${birthYear})`} />
                </div>

            </ErrorBoundry>
        );
    }
};