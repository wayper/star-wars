import React, { Component, Fragment } from 'react';

import './person_card.css'
import SwapiService from '../../services/swapi_service';
import FictitiousError from '../fictitious_error/fictitious_error';


export default class PersonCard extends Component {

    swapiService = new SwapiService();

    state = {
        person: null,
    }

    componentDidMount() {
        this.updatePersone();
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePersone();
        }
    }

    updatePersone() {
        const { personId } = this.props;
        if (!personId) {
            return;
        }
        this.swapiService
            .getPersone(personId)
            .then((person) => {
                this.setState({
                    person
                })
            })
    }

    render() {

        if (!this.state.person) {
            return <span>Select a person from a list</span>
        }

        const { id, name, gender, birthYear, eyeColor } = this.state.person;

        return (
            <Fragment>
                <div className="media person-card align-self-start">
                    <img className="align-self-start mr-3 person-card-img" src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="..." />
                    <div className="media-body person-card-body">
                        <h4 className="text-warning mt-0">{name}</h4>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Gender: {gender}</li>
                            <li className="list-group-item">Birth year: {birthYear}</li>
                            <li className="list-group-item">Eye color: {eyeColor}</li>
                        </ul>
                        <FictitiousError />
                    </div>
                </div>
            </Fragment>
        );
    };
}
