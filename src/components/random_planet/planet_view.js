import React, { Fragment } from 'react';

const PlanetView = ({ planet }) => {
    const { id, name, population, rotationPeriod, diameter } = planet;
    return (
        <Fragment>
            <div className="planet-img-container m-2 m-sm-4">
                <img className="img-fluid align-items-center planet-img" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt={name} />
            </div>
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