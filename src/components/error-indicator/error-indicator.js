import React from 'react';

import './error-indicator.css';

const ErrorInticator = () => {
    return (
        <div className="error-indicator">
            <span className="boom">BOOM!</span>
            <span>
                something has gone terribly wrong
            </span>
            <span>
                (but we alredy sent droids to fix it)
            </span>
        </div>
    );
};

export default ErrorInticator;