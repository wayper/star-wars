import React, { Component } from 'react';

import SwapiService from '../../services/swapi_service';
import SpinnerBlinkingDot from '../spinners/spinner_blinking_dot';

import './item_list.css';

export default class ItemList extends Component {

    swapiService = new SwapiService();

    state = {
        peopleList: null,
        loading: true,
        error: false,
    }

    componentDidMount() {
        this.swapiService
            .getAllPeople()
            .then((peopleList) => {
                this.setState({
                    peopleList
                })
            });
    }

    renderItems(arr) {
        return arr.map(({id, name}) => {
            return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}>
                    {name}
                </li>
            );
        });
    }


    render() {

        const { peopleList } = this.state;

        if (!peopleList) {
            return <SpinnerBlinkingDot />;
        }

        const items = this.renderItems(peopleList);

        return (
            <ul className="list-group list-group-flush col-4">
                {items}
            </ul>
        );
    }
}

