import React from 'react';

import './header.css';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="navbar-brand text-info" href="#">Star wars</div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <div className="nav-link" href="#">Home <span className="sr-only">(current)</span></div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link" href="#">People</div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link" href="#">Starships</div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link" href="#">Planets</div>
                    </li>
                </ul>
  </div>
</nav>
            );
        }
        
export default Header;