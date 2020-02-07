import React, { Fragment } from 'react';

const PlanetView = ({planet}) => {
    const {name, population, rotationPeriod, diameter} = planet;
    return (
        <Fragment>
            <img className="align-items-center planet-img mr-3" src={`https://starwars-visualguide.com/assets/img/planets/${12}.jpg`} alt={name} />
            <div className="d-flex flex-column col-6 media-body">
                <h5 className="mt-0 text-warning">{name}</h5>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item px-2">Population: {population}</li>
                    <li className="list-group-item px-2">Rotation period: {rotationPeriod}</li>
                    <li className="list-group-item px-2">Diameter: {diameter}</li>
                </ul>
            </div>
        </Fragment>
    );
};

export default PlanetView;