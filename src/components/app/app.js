import React, { Fragment } from 'react';

import Header from '../header/header';
import RandomPlanet from '../random_planet/random_planet';

import './app.css';

const App = () => {
    return (
        <Fragment>
            <Header />
            <RandomPlanet />
        </Fragment>
    );
}

export default App;