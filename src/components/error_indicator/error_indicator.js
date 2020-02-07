import React, { Fragment } from 'react';

import errorImages from './error_img.png';

import './error_indicator.css'

const ErrorIndicator = () => {
    return (
        <Fragment>
            <img className="error-body-img" src={errorImages} alt="Error images" />
            <div className="d-flex flex-column col-6 media-body error-body-content">
                <h5 className="mt-0 text-warning">Oops!!!</h5>
                <p>Something went wrong.</p>
                <p>But don’t worry, we have already sent drones to reconnaissance.</p>
            </div>
        </Fragment>
    );
};

export default ErrorIndicator;