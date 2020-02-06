import React, {Component} from 'react';

import './random_planet.css';

export default class RandomPlanet extends Component {
    render() {
        return (
            <div className="media">
                <img src="..." className="mr-3" alt="..." />
                <div className="media-body">
                    <h5 className="mt-0">Media heading</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </div>
            </div>
        );
    }
}